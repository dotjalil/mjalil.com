import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Styles from "./SkillsAndProjects.module.css";
import Project from "./Project";
// Import Logos
import jsLogo from "../../../public/js-logo.svg";
import pyLogo from "../../../public/py-logo.svg";
import reactLogo from "../../../public/react-logo.svg";
import nextLogo from "../../../public/next-logo.svg";
import nodeLogo from "../../../public/node-logo.svg";
import twLogo from "../../../public/tw-logo.svg";
import wpLogo from "../../../public/wp-logo.svg";
import thumbnail from "../../../public/thumbnail.png";

const SkillsAndProjects = (props) => {
  const [projects, setProjects] = useState(props.projects);
  const [loading, setLoading] = useState(false);
  function handleFilterProjects(e, skill) {
    setLoading(true);
    // Get the clicked element
    var button = e.target;
    // if the clicked element is not the button,
    // traverse the node tree until you fetch the button
    while (button.tagName.toLowerCase() !== "button") {
      button = button.parentNode;
    }
    // remove active-filter class from any other buttons
    const buttons = document.querySelectorAll(".skill-button");
    buttons.forEach((button) => {
      button.classList.remove(Styles["active-filter"]);
    });
    // add the active-filter class to the clicked button
    button.classList.add(Styles["active-filter"]);
    // filter porjects by skill
    setProjects(
      props.projects.filter((project) => {
        return project.skills.includes(skill);
      })
    );
    setLoading(false);
  }

  return (
    <>
      <section id="stack" className="font-videotype pb-20">
        <p className="">
          1 <span className="text-whitebc">/ 3</span>
        </p>
        <h2 className="mt-5 text-4xl">my tech stack</h2>
        <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-[100px] gap-y-0">
          <div className="mt-10">
            <div className="flex items-center gap-10">
              <h3 className="text-lg text-whiteaf">programming_languages</h3>
              <div className="border border-whiteaf h-0 w-full" />
            </div>

            <div className="mt-6 flex flex-col gap-4">
              <button
                className={`${Styles["skill-button"]} skill-button w-full flex items-center justify-between`}
                onClick={(e) => {
                  handleFilterProjects(e, "JavaScript");
                }}
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
                onClick={(e) => {
                  handleFilterProjects(e, "Python");
                }}
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
                onClick={(e) => {
                  handleFilterProjects(e, "ReactJS");
                }}
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
                onClick={(e) => {
                  handleFilterProjects(e, "NodeJS");
                }}
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
                onClick={(e) => {
                  handleFilterProjects(e, "NextJS");
                }}
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
                onClick={(e) => {
                  handleFilterProjects(e, "WordPress");
                }}
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
                onClick={(e) => {
                  handleFilterProjects(e, "TailwindCSS");
                }}
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
      <section id="projects" className="font-videotype">
        <p className="text-lg text-whiteaf">pick a technology to filter 👆</p>
        <h2 className={`${Styles.stickyHeader} text-4xl bg-[#0f0f0f] py-6`}>
          featured projects
        </h2>
        <div className="grid sm:grid-cols-3 gap-10 xl:gap-[50px] md:gap-6 mt-9">
          {loading && <p>Loading projects...</p>}
          {!loading &&
            projects.length > 0 &&
            projects.map((project) => (
              <Project
                key={project.title}
                title={project.title}
                image={project.thumbnail}
              />
            ))}
          {!loading && projects.length === 0 && (
            <p>No projects found! Try a different filter...</p>
          )}
        </div>
      </section>
    </>
  );
};

export default SkillsAndProjects;
