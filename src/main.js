import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { render, router } from "./lib";
import AboutPage from "./pages/aboutPage";
import homePage from "./pages/admin/homePage";
import proFilePage from "./pages/admin/proFilePage";
import projectAddPage from "./pages/admin/projectAddPage";
import projectEditPage from "./pages/admin/projectEditPage";
import projectsPage from "./pages/admin/projectsPage";
import BlogPage from "./pages/blogPage";
import ContactPage from "./pages/contactPage";
import NotFoundPage from "./pages/notFoundPage";
import ProjectDetailPage from "./pages/projectDetailPage";
import ProjectsPage from "./pages/projectsPage";
import ResumePage from "./pages/resumePage";
import SinglePostPage from "./pages/singlePostPage";

const app = document.querySelector("#app");

router.on("/", () => render(AboutPage, app));
router.on("/projects", () => render(ProjectsPage, app));
router.on("/project/:id", ({ data }) =>
  render(() => ProjectDetailPage(data), app)
);
router.on("/contact", () => render(ContactPage, app));
router.on("/blog", () => render(BlogPage, app));
router.on("/blog/:id", ({ data }) => render(() => SinglePostPage(data), app));
router.on("/resume", () => render(ResumePage, app));

router.on("/admin", () => render(homePage, app));
router.on("/admin/profile", () => render(proFilePage, app));
router.on("/admin/projects", () => render(projectsPage, app));
router.on("/admin/project-add", () => render(projectAddPage, app));
router.on("/admin/project-edit/:id", ({ data }) =>
  render(() => projectEditPage(data), app)
);

router.notFound(render(NotFoundPage, app));
router.resolve();
