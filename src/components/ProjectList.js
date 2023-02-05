import ProjectItem from "./ProjectItem";

const ProjectList = ({ projects }) => {
  return ` ${projects
    ?.map((project) => `<div>${ProjectItem({ project })}</div>`)
    .join("")}`;
};
export default ProjectList;
