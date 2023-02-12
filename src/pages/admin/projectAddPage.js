import { addProject } from "@/api/project";
import { router, useEffect } from "@/lib";

const projectAddPage = () => {
  document.title = "MyCV - Admin Project Add";

  useEffect(() => {
    const sform = document.querySelector("#_form");
    const projectName = document.querySelector("#projectName");
    const projectAuthor = document.querySelector("#projectAuthor");
    sform.addEventListener("submit", async function (e) {
      e.preventDefault();
      try {
        const project = {
          name: projectName.value,
          author: projectAuthor.value,
        };
        await addProject(project);
        router.navigate("admin/projects");
      } catch (error) {
        console.log(error);
      }
    });
  });

  return /*html*/ `<div class="container">
  <h1 class="tw-mb-10 tw-text-[#fff]">Quản lý dự án</h1>
  <form id="_form" class="tw-max-w-[400px]">
  <div class="mb-3">
    <label class="form-label tw-text-[#fff]">Project Name</label>
    <input type="text" class="form-control" id="projectName">
  </div>
  <div class="mb-3">
    <label class="form-label tw-text-[#fff]">Author</label>
    <input type="text" class="form-control" id="projectAuthor">
  </div>
  <button class="btn btn-primary">Submit</button>
</form></div>`;
};

export default projectAddPage;
