import { getProject, updateProject } from "@/api/project";
import { router, useEffect, useState } from "@/lib";

const projectEditPage = ({ id }) => {
  document.title = "MyCV - Admin Project Edit";
  const [project, setProject] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const { data } = await getProject(id);
        setProject(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  useEffect(() => {
    const form = document.querySelector("#_form");
    const projectName = document.querySelector("#projectName");
    const projectAuthor = document.querySelector("#projectAuthor");

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      try {
        const newProject = {
          id,
          name: projectName.value,
          author: projectAuthor.value,
        };
        // setTimeout
        await updateProject(newProject);
        router.navigate("/admin/projects");
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
    <input type="text" class="form-control" id="projectName" value="${project.name}">
  </div>
  <div class="mb-3">
    <label class="form-label tw-text-[#fff]">Author</label>
    <input type="text" class="form-control" id="projectAuthor" value="${project.author}">
  </div>
  <button class="btn btn-primary">Submit</button>
</form></div>`;
};

export default projectEditPage;
