import { createElement } from "react";
import HeadHtml from "@/components/HeadHtml";
import Router from "next/router";
import nprogress from "nprogress";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { gql } from "@apollo/client";
import { getApolloClient } from "util/apollo-client";
import ContactByEmail from "@/components/ContactByEmail";

import RedesignProject from "../../components/project/redesignProject/RedisignProject";
import Apps from "../../components/project/apps/Apps";

Router.events.on("routeChangeStart", (url) => {
  nprogress.start();
});

Router.events.on("routeChangeComplete", (url) => {
  nprogress.done(false);
});

export default function Project({ project, projectTypes, site, blocks }) {
  const { projectDetails, projectLinks } =
    project.redesignProjectFields.projectDetails;

  // function decodeHtml(html) {
  //   var txt = createElement("textarea", {}, html);
  //   return txt.value;
  // }
  let projectTemplate;
  for (let type of projectTypes.edges) {
    if (type.node.name === "Redesign") {
      projectTemplate = (
        <RedesignProject
          project={project}
          projectDetails={projectDetails}
          projectLinks={projectLinks}
          blocks={blocks}
        />
      );
      break;
    } else if (type.node.name === "Web Application") {
      projectTemplate = <Apps project={project} blocks={blocks} />;
      break;
    }
  }

  return (
    <>
      <HeadHtml />
      <main className="font-videotype">
        <Header />
        {projectTemplate}
        <ContactByEmail />
        <Footer />
      </main>
    </>
  );
}

export async function getStaticProps({ params, locale }) {
  const he = require("he");

  const { projectSlug } = params;
  const language = locale.toUpperCase();

  const apolloClient = getApolloClient();

  const data = await apolloClient.query({
    query: gql`
      query PostBySlug($slug: String!, $language: LanguageCodeEnum!) {
        projectBy(slug: $slug) {
          slug
          translation(language: $language) {
            title
            slug
            editorBlocks {
              name
              renderedHtml
              parentClientId
              clientId
            }
            redesignProjectFields {
              fieldGroupName
              projectDetails {
                fieldGroupName
                projectDetails {
                  fieldGroupName
                  title
                  details {
                    col1
                    col2
                    fieldGroupName
                  }
                }
                projectLinks {
                  behanceLink
                  fieldGroupName
                  githubLink
                  title
                  websiteLink
                }
              }
              heroImage {
                altText
                mediaItemUrl
              }
            }
            skills {
              nodes {
                name
                skillIcon {
                  skillIcon {
                    altText
                    mediaItemUrl
                  }
                }
              }
            }
            excerpt
            projectFields {
              fieldGroupName
              projectThumbnail {
                altText
                mediaItemUrl
              }
            }
            appProjectFields {
              projectThumbnail {
                altText
                mediaItemUrl
              }
              projectDetailsGroup {
                projectDetails {
                  details
                  title
                }
                projectLinks {
                  behanceLink
                  fieldGroupName
                  githubLink
                  title
                  websiteLink
                }
              }
            }
          }
          projectTypes {
            edges {
              node {
                id
                name
              }
            }
          }
        }
      }
    `,
    variables: {
      slug: projectSlug,
      language,
    },
  });

  let project = data?.data.projectBy.translation;
  let projectTypes = data?.data.projectBy.projectTypes;

  let blocks = data?.data.projectBy.translation.editorBlocks.map((block) => {
    return {
      type: block.name,
      id: block.clientId,
      parent: block.parentClientId,
      renderedHtml: he.decode(block.renderedHtml),
    };
  });

  const site = {
    ...data?.data.generalSettings,
  };

  return {
    props: {
      project,
      projectTypes,
      language,
      path: `/projects/${project.slug}`,
      site,
      blocks,
    },
    revalidate: 10,
  };
}

export async function getStaticPaths({ locales }) {
  const apolloClient = getApolloClient();

  const data = await apolloClient.query({
    query: gql`
      {
        projects(first: 10000) {
          edges {
            node {
              id
              title
              slug
            }
          }
        }
      }
    `,
  });

  const posts = data?.data.projects.edges.map(({ node }) => node);

  const paths = posts.map(({ slug }) => {
    return {
      params: {
        projectSlug: slug,
      },
    };
  });

  return {
    paths: [
      ...paths,
      ...paths.flatMap((path) => {
        return locales.map((locale) => {
          return {
            ...path,
            locale,
          };
        });
      }),
    ],
    paths: [],
    fallback: "blocking",
  };
}
