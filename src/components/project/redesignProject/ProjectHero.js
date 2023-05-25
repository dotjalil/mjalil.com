import parse from "html-react-parser";
import Link from "next/link";
import Image from "next/image";
import backArrow from "../../../../public/icons/mdi_arrow-left-thin.svg";
import projectThumbnail from "../../../../public/projectThumbnail.png";
import wpLogo from "../../../../public/wp-logo.svg";

const ProjectHero = (props) => {
  //   console.log("parsed: ", parse(props.content));
  return (
    <section className="pt-16">
      <Link href="/" className="text-base text-gray-300 flex gap-2 mb-10">
        <Image src={backArrow} alt="all projects" width={24} height={24} /> all
        projects
      </Link>
      <h1 className="text-[28px] sm:text-[46px] text-center text-white mb-7">
        {props.title}
      </h1>
      <p className="text-base text-center text-white94 w-full max-w-[814px] mx-auto font-roboto mb-4">
        {props.excerpt}
      </p>
      <div className="flex items-center gap-6 max-w-[814px] mx-auto justify-center mt-[30px]">
        {props.skills.map((skill) => (
          <div
            key={skill.name}
            className="flex items-center gap-2 justify-center"
          >
            <Image
              width={32}
              height={32}
              alt={skill.icon.alt}
              className="w-8 h-8"
              src={skill.icon.url}
            />
            <span className="text-base text-white font-roboto">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
      <Image
        src={props.thumbnail}
        alt="project thumbnail"
        width={1324}
        height={372}
        className="mt-28"
      />
    </section>
  );
};

// const ProjectDetails = (props) => {
//     console.log("parsed: ", parse(props.content));
//     return <div>{parse(props.content)}</div>;
//   };

export default ProjectHero;
