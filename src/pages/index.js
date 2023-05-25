import { useState, useEffect, useRef } from "react";
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
  const [animated, setAnimated] = useState(false);

  function handleStopAnimation() {
    setTimeout(() => {
      localStorage.setItem("animatedOnce", true);
      setAnimated(true);
    }, 300);
  }

  useEffect(() => {
    // console.log("compare: ", localStorage.getItem("animatedOnce") === "true");
    if (localStorage.getItem("animatedOnce") === "true") {
      setAnimated(true);
    } else {
      setAnimated(false);
    }
  }, []);

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
      <style jsx global>{`
        ${animated
          ? ".to-animate *, header {opacity: 1;}"
          : "header {opacity: 0; transition: opacity 1s;} html {overflow: hidden;}"}
      `}</style>
      <Header />
      <div
        className={`${
          animated ? "animated" : "not-animated"
        } container mx-auto px-4 to-animate`}
      >
        <Hero stopAnimation={handleStopAnimation} animated={animated} />
        <SkillsAndProjects projects={projects} skills={props.skills} />
        {/* <Blog /> */}
        {/* <Contact /> */}
        <ContactByEmail />
      </div>
      <Footer />
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
        skills {
          nodes {
            count
            name
            skillId
            skillIcon {
              skillIcon {
                altText
                mediaItemUrl
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
      skills: page.skills.nodes,
    },
  };
}
