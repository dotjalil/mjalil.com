import HeadHtml from "@/components/HeadHtml";
import Router from "next/router";
import nprogress from "nprogress";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import SkillsAndProjects from "@/components/skillsAndProjects/SkillsAndProjects";
import Contact from "@/components/ContactSection";
import { gql } from "@apollo/client";
import { getApolloClient } from "util/apollo-client";
import ContactByEmail from "@/components/ContactByEmail";

Router.events.on("routeChangeStart", (url) => {
  nprogress.start();
});

Router.events.on("routeChangeComplete", (url) => {
  nprogress.done(false);
});

export default function Home(props) {
  const projects = props.projects.nodes.map((project) => {
    return {
      title: project.title,
      thumbnail: project.projectFields.projectThumbnail.mediaItemUrl,
      skills: project.skills.nodes.map((skill) => skill.name),
      slug: project.slug,
    };
  });

  return (
    <>
      <HeadHtml />
      <main>
        <Header />
        <div className="container mx-auto px-4">
          <Hero />
          <SkillsAndProjects projects={projects} />
          {/* <Blog /> */}
          {/* <Contact /> */}
          <ContactByEmail />
        </div>
        <Footer />
      </main>
    </>
  );
}

export async function getStaticProps({ locale }) {
  const apolloClient = getApolloClient();
  const language = locale.toUpperCase();
  const data = await apolloClient.query({
    query: gql`
      query PostBySlug(
        $uri: String!
        $language: LanguageCodeEnum!
        $projectLang: LanguageCodeFilterEnum!
      ) {
        pageBy(uri: $uri) {
          translation(language: $language) {
            id
            slug
            content
            title
            language {
              locale
              slug
            }
          }
        }
        generalSettings {
          title
          url
          language
          description
        }
        projects(where: { language: $projectLang }) {
          nodes {
            content
            skills {
              nodes {
                name
                slug
              }
            }
            slug
            title
            projectFields {
              projectThumbnail {
                altText
                mediaItemUrl
                sizes
                srcSet
              }
            }
          }
        }
      }
    `,
    variables: {
      language,
      uri: "/",
      projectLang: language,
    },
  });

  const page = {
    ...data?.data,
  };

  return {
    props: {
      page: page.pageBy,
      projects: page.projects,
    },
  };
}
