const ProjectItem = ({ project }) => {
  return `<a href='/project/${project.id}'>${project.name}</a>`;
};

export default ProjectItem;
