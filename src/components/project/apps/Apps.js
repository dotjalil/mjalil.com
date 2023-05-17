import ProjectDetails from "./ProjectDetails";
import ProjectHero from "./ProjectHero";
import parse from "html-react-parser";
import Image from "next/image";
import Thumb from "../../../../public/thumbnail.png";

const Apps = ({ project, blocks }) => {
  console.log("Project: ", project);
  if (!project) {
    return;
  }

  return (
    <>
      <div className="container mx-auto px-4">
        <ProjectHero
          title={project.title}
          excerpt={project.excerpt.replace(/(<([^>]+)>)/gi, "")}
          skills={project.skills.nodes
            .map((skillNode) => skillNode.name)
            .reverse()}
        />
      </div>
      <ProjectDetails
        detailsTitle={
          project.appProjectFields.projectDetailsGroup.projectDetails.title
        }
        details={
          project.appProjectFields.projectDetailsGroup.projectDetails.details
        }
        github={
          project.appProjectFields.projectDetailsGroup.projectLinks.githubLink
        }
        website={
          project.appProjectFields.projectDetailsGroup.projectLinks.websiteLink
        }
        behance={
          project.appProjectFields.projectDetailsGroup.projectLinks.behanceLink
        }
        thumbnail={project.projectFields.projectThumbnail.mediaItemUrl}
      />
      <div className="container mx-auto">
        {blocks.map((block) => {
          if (block.type.split("/")[0] === "lazyblock") {
            return <div key={block.id}>{parse(block.renderedHtml)}</div>;
          }
        })}
      </div>
    </>
  );
};

export default Apps;
