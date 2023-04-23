import Head from "next/head";
import Router from "next/router";
import nprogress from "nprogress";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import SkillsAndProjects from "@/components/skillsAndProjects/SkillsAndProjects";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import styles from "@/styles/Home.module.css";
import Image from "next/image";
import { gql } from "@apollo/client";
import { getApolloClient } from "util/apollo-client";

Router.events.on("routeChangeStart", (url) => {
  nprogress.start();
});

Router.events.on("routeChangeComplete", (url) => {
  nprogress.done(false);
});

export default function Home(props) {
  console.log("props: ", props);
  const projects = props.projects.nodes.map((project) => {
    return {
      title: project.title,
      thumbnail: project.projectFields.projectThumbnail.mediaItemUrl,
      skills: project.skills.nodes.map((skill) => skill.name),
    };
  });
  // const projects = [
  //   {
  //     title: "Decoupled WordPress Site 1",
  //     content:
  //       "1 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  //     skills: ["ReactJS", "NextJS", "WordPress"],
  //   },
  //   {
  //     title: "Decoupled WordPress Site 2",
  //     content:
  //       "2 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  //     skills: ["ReactJS", "NextJS", "WordPress"],
  //   },
  //   {
  //     title: "Frontend App",
  //     content:
  //       "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
  //     skills: ["ReactJS", "JavaScript"],
  //   },
  // ];

  return (
    <>
      <Head>
        <title>{props.page.translation.title}</title>
        <meta name="description" content="Portfolio website for Mo. J." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
          integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>
      <main>
        <Header />
        <div className="container mx-auto px-4">
          <Hero />
          <SkillsAndProjects projects={projects} />
          <Blog />
          <Contact />
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
      query PostBySlug($uri: String!, $language: LanguageCodeEnum!) {
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
        projects {
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
