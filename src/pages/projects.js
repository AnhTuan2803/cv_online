import Header from "../components/Header";
import ProjectList from "../components/ProjectList";
import { projectsFake } from "../data";

const ProjectsPage = () => {
  return `Projects Page
  ${Header()}
  ${ProjectList({ projects: projectsFake })}`;
};
export default ProjectsPage;
