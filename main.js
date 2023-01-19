import { render, router } from "./src/lib";
import AboutPage from "./src/pages/about";
import ContactPage from "./src/pages/contact";
import HomePage from "./src/pages/home";
import NotFoundPage from "./src/pages/not-found";
import PostDetailPage from "./src/pages/post-detail";
import PostsPage from "./src/pages/posts";
import ProjectDetailPage from "./src/pages/project-detail";
import ProjectsPage from "./src/pages/projects";

const app = document.querySelector("#app");

router.on("/", () => render(HomePage, app));
router.on("/about", () => render(AboutPage, app));
router.on("/contact", () => render(ContactPage, app));
router.on("/posts", () => render(PostsPage, app));
router.on("/post/:postId", () => render(PostDetailPage, app));
router.on("/projects", () => render(ProjectsPage, app));
router.on("/project/:projectId", (params) =>
  render(ProjectDetailPage(params), app)
);
router.notFound(() => render(NotFoundPage, app));
router.resolve();
