import Image from "next/image";
import Link from "next/link";
import Styles from "./SkillsAndProjects.module.css";
// Import Logos
import jsLogo from "../../public/js-logo.svg";
import pyLogo from "../../public/py-logo.svg";
import reactLogo from "../../public/react-logo.svg";
import nextLogo from "../../public/next-logo.svg";
import nodeLogo from "../../public/node-logo.svg";
import twLogo from "../../public/tw-logo.svg";
import wpLogo from "../../public/wp-logo.svg";
import thumbnail from "../../public/thumbnail.png";

const SkillsAndProjects = () => {
  return (
    <>
      <section id="stack" className="font-videotype pb-20">
        <p className="">
          1 <span className="text-whitebc">/ 3</span>
        </p>
        <h2 className="mt-5 text-4xl">my tech stack</h2>
        <div className="sm:grid sm:grid-cols-3 gap-[100px]">
          <div className="mt-10">
            <div className="flex items-center gap-10">
              <h3 className="text-lg text-whiteaf">programming_languages</h3>
              <div className="border border-whiteaf h-0 w-full" />
            </div>

            <div className="mt-6 flex flex-col gap-4">
              <button
                className={`${Styles["skill-button"]} skill-button w-full flex items-center justify-between`}
              >
                <div className="flex items-center">
                  <Image alt="JavaScript" src={jsLogo} className="mr-5" />
                  <span className="font-roboto">JavaScript</span>
                </div>
                <div
                  className={`${Styles.projects} text-sm border-b border-white`}
                >
                  10 projects
                </div>
              </button>
              <button
                className={`${Styles["skill-button"]} skill-button w-full flex items-center justify-between`}
              >
                <div className="flex items-center">
                  <Image alt="Python" src={pyLogo} className="mr-5" />
                  <span className="font-roboto">Python</span>
                </div>
                <div
                  className={`${Styles.projects} text-sm border-b border-white`}
                >
                  10 projects
                </div>
              </button>
            </div>
          </div>
          <div className="mt-10">
            <div className="flex items-center gap-10">
              <h3 className="text-lg text-whiteaf">frameworks</h3>
              <div className="border border-whiteaf h-0 w-full" />
            </div>
            <div className="mt-6 flex flex-col gap-4">
              <button
                className={`${Styles["skill-button"]} skill-button w-full flex items-center justify-between`}
              >
                <div className="flex items-center">
                  <Image alt="React" src={reactLogo} className="mr-5" />
                  <span className="font-roboto">ReactJS</span>
                </div>
                <div
                  className={`${Styles.projects} text-sm border-b border-white`}
                >
                  10 projects
                </div>
              </button>
              <button
                className={`${Styles["skill-button"]} skill-button w-full flex items-center justify-between`}
              >
                <div className="flex items-center">
                  <Image alt="NodeJS" src={nodeLogo} className="mr-5" />
                  <span className="font-roboto">NodeJS</span>
                </div>
                <div
                  className={`${Styles.projects} text-sm border-b border-white`}
                >
                  10 projects
                </div>
              </button>
              <button
                className={`${Styles["skill-button"]} skill-button w-full flex items-center justify-between`}
              >
                <div className="flex items-center">
                  <Image alt="NextJS" src={nextLogo} className="mr-5" />
                  <span className="font-roboto">NextJS</span>
                </div>
                <div
                  className={`${Styles.projects} text-sm border-b border-white`}
                >
                  10 projects
                </div>
              </button>
            </div>
          </div>
          <div className="mt-10">
            <div className="flex items-center gap-10">
              <h3 className="text-lg text-whiteaf">other_technologies</h3>
              <div className="border border-whiteaf h-0 w-full" />
            </div>
            <div className="mt-6 flex flex-col gap-4">
              <button
                className={`${Styles["skill-button"]} skill-button w-full flex items-center justify-between`}
              >
                <div className="flex items-center">
                  <Image alt="WordPress" src={wpLogo} className="mr-5" />
                  <span className="font-roboto">WordPress</span>
                </div>
                <div
                  className={`${Styles.projects} text-sm border-b border-white`}
                >
                  10 projects
                </div>
              </button>
              <button
                className={`${Styles["skill-button"]} skill-button w-full flex items-center justify-between`}
              >
                <div className="flex items-center">
                  <Image alt="TailwindCSS" src={twLogo} className="mr-5" />
                  <span className="font-roboto">TailwindCSS</span>
                </div>
                <div
                  className={`${Styles.projects} text-sm border-b border-white`}
                >
                  10 projects
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section id="projects" className="font-videotype pb-20">
        <p className="text-lg text-whiteaf">pick a technology to filter 👆</p>
        <h2 className="mt-5 text-4xl">featured projects</h2>
        <div className="sm:grid sm:grid-cols-3 gap-[50px] mt-9">
          <Link
            className={`${Styles.project} rounded-xl bg-white text-black pb-6 outline outline-2 outline-white`}
            href={"#"}
          >
            <article>
              <Image alt="project thumbnail" src={thumbnail} />
              <h3 className="px-3.5 pt-6">
                Decoupled WordPress and NextJS for max. performance.
              </h3>
            </article>
          </Link>
          <Link
            className={`${Styles.project} rounded-xl bg-white text-black pb-6 outline outline-2 outline-white`}
            href={"#"}
          >
            <article>
              <Image alt="project thumbnail" src={thumbnail} />
              <h3 className="px-3.5 pt-6">
                How to Clean up a Hacked WordPress Website - The Last Guide
                You’ll Read on WordPress Security.
              </h3>
            </article>
          </Link>
          <Link
            className={`${Styles.project} rounded-xl bg-white text-black pb-6 outline outline-2 outline-white`}
            href={"#"}
          >
            <article>
              <Image alt="project thumbnail" src={thumbnail} />
              <h3 className="px-3.5 pt-6">
                How to Clean up a Hacked WordPress Website - The Last Guide
                You’ll Read on WordPress Security.
              </h3>
            </article>
          </Link>
        </div>
      </section>
    </>
  );
};

export default SkillsAndProjects;
