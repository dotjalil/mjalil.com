import ProjectHero from "./ProjectHero";
import ProjectDetails from "./ProjectDetails";
import parse from "html-react-parser";

const RedesignProject = ({ project, projectDetails, projectLinks, blocks }) => {
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
            .map((skillNode) => {
              return {
                name: skillNode.name,
                icon: {
                  url: skillNode.skillIcon.skillIcon.mediaItemUrl,
                  alt: skillNode.skillIcon.skillIcon.altText,
                },
              };
            })
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
            return <div key={block.id}>{parse(block.renderedHtml)}</div>;
          }
        })}
      </div>
    </>
  );
};

export default RedesignProject;
