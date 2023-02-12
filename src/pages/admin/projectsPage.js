import { deleteProject, getProjects } from "@/api/project";
import { useEffect, useState } from "@/lib";

const projectsPage = () => {
  document.title = "MyCV - Admin Projects";
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await getProjects();
        setData(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  useEffect(() => {
    const btns = document.querySelectorAll(".btn-remove");
    for (const btn of btns) {
      btn.addEventListener("click", async function () {
        try {
          const id = this.dataset.id;
          // xóa trên server
          await deleteProject(id);
          // xóa client
          const newProjects = data.filter((project) => project.id != id);
          setData(newProjects);
        } catch (error) {
          console.log(error);
        }
      });
    }
  });

  return /*html*/ `<div class="container">
  <h1 class="tw-mb-10 tw-text-[#fff]">Quản lý dự án</h1>
  <table class="table table-bordered">
  <thead>
    <tr>
      <th scope="col" class="tw-text-[#fff]">Stt</th>
      <th scope="col" class="tw-text-[#fff]">Projects Name</th>
      <th scope="col"><a class="btn btn-danger tw-mx-6" href="/admin/project-add">Add</a></th>
    </tr>
  </thead>
  <tbody>
  ${data
    ?.map(
      (project, index) => /*html*/ `<tr>
  <th scope="row" class="tw-text-[#fff]">${index + 1}</th>
  <td class="tw-text-[#fff]">${project.name}</td>
  <td width="230px" ><button data-id="${
    project.id
  }" class="btn btn-danger btn-remove tw-mx-6">Remove</button><a class="btn btn-danger" href="/admin/project-edit/${
        project.id
      }">Edit</a></td>
</tr>`
    )
    .join("")}
   
  </tbody>
</table></div>`;
};

export default projectsPage;
