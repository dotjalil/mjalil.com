import ProjectHero from "./ProjectHero";
import ProjectDetails from "./ProjectDetails";
import parse from "html-react-parser";

const RedesignProject = ({ project, projectDetails, projectLinks, blocks }) => {
  return (
    <>
      <div className="container mx-auto px-4">
        <ProjectHero
          title={project.title}
          excerpt={project.excerpt.replace(/(<([^>]+)>)/gi, "")}
          skills={project.skills.nodes
            .map((skillNode) => skillNode.name)
            .reverse()}
          thumbnail={project.projectFields.projectThumbnail.mediaItemUrl}
        />
      </div>
      <ProjectDetails
        detailsTitle={projectDetails.title}
        detailsCol1={projectDetails.details.col1}
        detailsCol2={projectDetails.details.col2}
        github={projectLinks.githubLink}
        website={projectLinks.websiteLink}
        behance={projectLinks.behanceLink}
      />
      <div className="container mx-auto">
        {blocks.map((block) => {
          if (block.type.split("/")[0] === "lazyblock") {
            return parse(block.renderedHtml);
          }
        })}
      </div>
    </>
  );
};

export default RedesignProject;
