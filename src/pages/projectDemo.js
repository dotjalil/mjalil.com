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
import Link from "next/link";
import wpLogo from "../../public/wp-logo.svg";
import Image from "next/image";
import backArrow from "../../public/icons/mdi_arrow-left-thin.svg";
import projectThumbnail from "../../public/projectThumbnail.png";
import jpg1 from "../../public/tmp/1.jpg";
import jpg2 from "../../public/tmp/2.jpg";

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
    };
  });

  return (
    <>
      <HeadHtml />
      <main className="font-videotype">
        <Header />
        <div className="container mx-auto px-4">
          <section className="pt-16">
            <Link href="/" className="text-base text-gray-300 flex gap-2 mb-10">
              <Image
                src={backArrow}
                alt="all projects"
                width={24}
                height={24}
              />{" "}
              all projects
            </Link>
            <h1 className="text-[46px] text-center text-white mb-7">
              BalqueesForHer.net Website Redesign.
            </h1>
            <p className="text-base text-center text-white94 w-full max-w-[814px] mx-auto font-roboto mb-4">
              Balqees for Her is a Saudi initiative that empowers women in Gulf
              and Middle East.The project was a complete website facelift and
              migration from Wix to WordPress with a custom looking admin panel,
              events, podcasts, newsletter and blog.
            </p>
            <div className="flex items-center gap-6 max-w-[814px] mx-auto justify-center">
              <div className="flex items-center gap-2 justify-center">
                <Image alt="tech" className="w-8 h-8" src={wpLogo} />
                <span className="text-base text-white">WordPress</span>
              </div>
              <div className="flex items-center gap-2 justify-center">
                <Image alt="tech" className="w-8 h-8" src={wpLogo} />
                <span className="text-base text-white">WordPress</span>
              </div>
            </div>
            <Image
              src={projectThumbnail}
              alt="project thumbnail"
              width={1324}
              height={372}
              className="mt-28"
            />
          </section>

          <div>
            <section className="py-[100px]">
              <div className="grid grid-cols-2 gap-6 items-end">
                <div>
                  <h3 className="text-4xl">Old layout</h3>
                  <p className="font-roboto mb-[20px]">
                    Old-fashioned layout style Limited color options Delays in
                    loading content and weird layout rendering
                  </p>
                  <Image
                    className="rounded-xl"
                    src={jpg1}
                    alt=""
                    width={681}
                    height={360}
                  />
                </div>
                <div className="pb-[70px]">
                  <h3 className="text-4xl">Completely revamped UI</h3>
                  <ul className="font-roboto list-disc pl-4">
                    <li>New branding </li>
                    <li>Fresh look</li>
                  </ul>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-6 mt-[-50px]">
                <div></div>
                <div className="col-span-2">
                  <Image
                    className="rounded-xl"
                    src={jpg2}
                    alt=""
                    width={881}
                    height={443}
                  />
                </div>
              </div>
            </section>
          </div>

          <section className="grid grid-cols-2 gap-6 py-[100px]">
            <div>
              <h3 className="text-4xl mb-6 text-center">Custom login screen</h3>
              <Image
                className="rounded-xl"
                src={jpg1}
                width={681}
                height={362}
                alt="project screenshot"
              />
            </div>
            <div>
              <h3 className="text-4xl mb-6 text-center">Branded Dashboard</h3>
              <Image
                className="rounded-xl"
                src={jpg1}
                width={681}
                height={362}
                alt="project screenshot"
              />
            </div>
          </section>
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
