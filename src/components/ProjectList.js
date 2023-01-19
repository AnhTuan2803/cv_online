import projectsFake from "../data";

const ProjectList = () => {
  return ` ${projectsFake
    .map((project) => {
      return `<div><a href='/project/${project.id}'>${project.name}</a></div>`;
    })
    .join("")}`;
};
export default ProjectList;
