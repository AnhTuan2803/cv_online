import { projectsFake } from "../data";

const ProjectDetailPage = ({ data: { projectId } }) => {
  const currentProject = projectsFake.find(
    (project) => project.id == projectId
  );
  if (!currentProject) return "Loading...";
  return `Project Detail Page: 
    ${currentProject.name}
    <hr/>
    ${
      currentProject.teams
        ? `<h2>Teams</h2>
      ${currentProject.teams.map((item) => `<div>${item.name}</div>`).join("")}`
        : ""
    }
  `;
};
export default ProjectDetailPage;
