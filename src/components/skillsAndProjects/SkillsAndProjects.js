import { useState, useRef } from "react";
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
  const [dropdownButtonText, setDropDownButtonText] = useState("featured");
  const arrowDropdownRef = useRef();
  const buttonDropdownRef = useRef();
  const filterDropdownRef = useRef();

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
    setDropDownButtonText(skill);
    document.querySelector("#filter-header").scrollIntoView({
      behavior: "smooth",
    });
    document.querySelector("#clear-button").classList.remove("hidden");
    setLoading(false);
  }

  function handleStickyFilterDropdown() {
    filterDropdownRef.current.classList.toggle("scale-100");
    arrowDropdownRef.current.classList.toggle("scale-100");
  }

  function handleDropdownFilter(e) {
    console.log(e.target.value);
    // remove active-filter class from any other buttons
    const buttons = document.querySelectorAll(".skill-button");
    buttons.forEach((button) => {
      if (button.value === e.target.value) {
        button.classList.add(Styles["active-filter"]);
      } else {
        button.classList.remove(Styles["active-filter"]);
      }
    });
    filterDropdownRef.current.classList.remove("scale-100");
    arrowDropdownRef.current.classList.remove("scale-100");
    setDropDownButtonText(e.target.value);
    setProjects(
      props.projects.filter((project) => {
        return project.skills.includes(e.target.value);
      })
    );
    document.querySelector("#filter-header").scrollIntoView({
      behavior: "smooth",
    });
    document.querySelector("#clear-button").classList.remove("hidden");
  }

  function handleClearFilter() {
    filterDropdownRef.current.classList.remove("scale-100");
    arrowDropdownRef.current.classList.remove("scale-100");
    setProjects(props.projects);
    // remove active-filter class from any other buttons
    const buttons = document.querySelectorAll(".skill-button");
    buttons.forEach((button) => {
      button.classList.remove(Styles["active-filter"]);
    });
    document.querySelector("#filter-header").scrollIntoView({
      behavior: "smooth",
    });
    setDropDownButtonText("featured");
    document.querySelector("#clear-button").classList.add("hidden");
  }

  return (
    <>
      <section id="stack" className="font-videotype pb-20">
        <p className="">
          1 <span className="text-whitebc">/ 2</span>
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
                value="JavaScript"
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
                value="Python"
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
                value="ReactJS"
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
                value="NodeJS"
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
                value="NextJS"
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
                value="WordPress"
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
                value="TailwindCSS"
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
        <h2
          id="filter-header"
          className={`${Styles.stickyHeader} text-xl md:text-4xl bg-[#0f0f0f] py-6 flex items-center justify-between`}
        >
          <div>
            <div className="group inline-block">
              <button
                id="stickyFilterButton"
                className={`${Styles.stickyFilterButton} pr-3 py-1 bg-[transparent] flex items-center`}
                onClick={handleStickyFilterDropdown}
                ref={buttonDropdownRef}
              >
                <span className="pr-1 flex-1">{dropdownButtonText}</span>
                <span>
                  <svg
                    className="fill-white h-4 w-4 transform
        transition duration-150 ease-in-out"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    ref={arrowDropdownRef}
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </span>
              </button>
              <ul
                className="bg-black border rounded-sm transform scale-0 absolute 
  transition duration-150 ease-in-out origin-top min-w-32 text-lg min-w-[190px] ml-0"
                ref={filterDropdownRef}
              >
                <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
                  <button
                    value="All"
                    onClick={handleClearFilter}
                    className="w-full text-left flex items-center outline-none focus:outline-none"
                  >
                    All
                  </button>
                </li>
                <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
                  <button
                    value="JavaScript"
                    onClick={handleDropdownFilter}
                    className="w-full text-left flex items-center outline-none focus:outline-none"
                  >
                    JavaScript
                  </button>
                </li>
                <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
                  <button
                    value="Python"
                    onClick={handleDropdownFilter}
                    className="w-full text-left flex items-center outline-none focus:outline-none"
                  >
                    Python
                  </button>
                </li>
                <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
                  <button
                    value="ReactJS"
                    onClick={handleDropdownFilter}
                    className="w-full text-left flex items-center outline-none focus:outline-none"
                  >
                    ReactJS
                  </button>
                </li>
                <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
                  <button
                    value="NodeJS"
                    onClick={handleDropdownFilter}
                    className="w-full text-left flex items-center outline-none focus:outline-none"
                  >
                    NodeJS
                  </button>
                </li>
                <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
                  <button
                    value="NextJS"
                    onClick={handleDropdownFilter}
                    className="w-full text-left flex items-center outline-none focus:outline-none"
                  >
                    NextJS
                  </button>
                </li>
                <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
                  <button
                    value="WordPress"
                    onClick={handleDropdownFilter}
                    className="w-full text-left flex items-center outline-none focus:outline-none"
                  >
                    WordPress
                  </button>
                </li>
                <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
                  <button
                    value="TailwindCSS"
                    onClick={handleDropdownFilter}
                    className="w-full text-left flex items-center outline-none focus:outline-none"
                  >
                    TailwindCSS
                  </button>
                </li>
              </ul>
            </div>
            projects
          </div>
          <button
            id="clear-button"
            className="text-lg hidden"
            onClick={handleClearFilter}
          >
            x clear
          </button>
        </h2>
        <div
          id="projects-div"
          className="grid sm:grid-cols-3 gap-10 xl:gap-[50px] md:gap-6 mt-9"
        >
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
