import Image from "next/image";
import jsLogo from "../../public/js-logo.svg";
import pyLogo from "../../public/py-logo.svg";
import reactLogo from "../../public/react-logo.svg";
import nextLogo from "../../public/next-logo.svg";
import nodeLogo from "../../public/node-logo.svg";
import htmlLogo from "../../public/html-logo.svg";
import cssLogo from "../../public/css-logo.svg";
import twLogo from "../../public/tw-logo.svg";
import wpLogo from "../../public/wp-logo.svg";

const SkillsAndProjects = () => {
  return (
    <section id="stack" className="font-videotype pb-20">
      <p className="">
        1 <span className="text-whitebc">/ 1</span>
      </p>
      <h2 className="mt-5 text-4xl">my tech stack</h2>
      <div className="sm:grid sm:grid-cols-3">
        <div className="mt-10">
          <h3 className="text-lg text-whiteaf">programming_languages</h3>
          <div className="mt-11">
            <div className="flex items-center">
              <span className="mr-10">1</span>
              <Image alt="JavaScript" src={jsLogo} className="mr-5" />
              <span className="font-roboto">JavaScript</span>
            </div>
            <div className="flex items-center mt-9">
              <span className="mr-10">2</span>
              <Image alt="JavaScript" src={pyLogo} className="mr-5" />
              <span className="font-roboto">Python</span>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <h3 className="text-lg text-whiteaf">frameworks</h3>
          <div className="mt-11">
            <div className="flex items-center">
              <span className="mr-10">3</span>
              <Image alt="JavaScript" src={reactLogo} className="mr-5" />
              <span className="font-roboto">ReactJS</span>
            </div>
            <div className="flex items-center mt-9">
              <span className="mr-10">4</span>
              <Image alt="JavaScript" src={nodeLogo} className="mr-5" />
              <span className="font-roboto">NodeJS</span>
            </div>
            <div className="flex items-center mt-9">
              <span className="mr-10">5</span>
              <Image alt="JavaScript" src={nextLogo} className="mr-5" />
              <span className="font-roboto">NextJS</span>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <h3 className="text-lg text-whiteaf">other_technologies</h3>
          <div className="mt-11">
            <div className="flex items-center">
              <span className="mr-10">6</span>
              <Image alt="JavaScript" src={wpLogo} className="mr-5" />
              <span className="font-roboto">WordPress</span>
            </div>
            <div className="flex items-center mt-9">
              <span className="mr-10">7</span>
              <Image alt="JavaScript" src={twLogo} className="mr-5" />
              <span className="font-roboto">TailwindCSS</span>
            </div>
            <div className="flex items-center mt-9">
              <span className="mr-10">8</span>
              <Image alt="JavaScript" src={htmlLogo} className="mr-5" />
              <span className="font-roboto">HTML</span>
            </div>
            <div className="flex items-center mt-9">
              <span className="mr-10">9</span>
              <Image alt="JavaScript" src={cssLogo} className="mr-5" />
              <span className="font-roboto">CSS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsAndProjects;
