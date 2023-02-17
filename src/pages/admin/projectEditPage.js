import { getProject, updateProject } from "@/api/project";
import Header from "@/components/admin/Header";
import { router, useEffect, useState } from "@/lib";

const projectEditPage = ({ id }) => {
  document.title = "Admin - Project Edit";
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
    const sform = document.querySelector("#_form");
    const projectName = document.querySelector("#projectName");
    const projectAuthor = document.querySelector("#projectAuthor");
    const projectDes = document.querySelector("#projectDes");
    const projectAvatar = document.querySelector("#projectAvatar");
    const projectAlbum = document.querySelector("#projectAlbum");
    const linkGithub = document.querySelector("#linkGithub");
    const linkPreview = document.querySelector("#linkPreview");
    const projectDate = document.querySelector("#projectDate");
    const projectTech = document.querySelector("#projectTech");

    sform.addEventListener("submit", async (e) => {
      e.preventDefault();
      try {
        const newProject = {
          id,
          name: projectName.value,
          author: projectAuthor.value,
          des: projectDes.value,
          avatar: projectAvatar.value,
          album: projectAlbum.value,
          linkGithub: linkGithub.value,
          linkPreview: linkPreview.value,
          date: projectDate.value,
          tech: projectTech.value,
        };
        // setTimeout
        await updateProject(newProject);
        router.navigate("/admin/projects");
        alert("Sửa dự án thành công!");
      } catch (error) {
        console.log(error);
      }
    });
  });

  return /*html*/ `
  <div class="tw-max-w-5xl tw-mx-auto">
  <!-- WRAP CONTAINER -->
  <div class="wrap-container">
   ${Header()}

  <!-- WRAP ARTICLE -->
  <article class="tw-pb-10">
  <div class="welcome container tw-my-10 tw-text-center">
    <h1 class="tw-text-4xl tw-text-[#999] tw-font-bold">
     Edit Project Page
    </h1>
  </div>
  <div class="container">
    <div class="tw-my-4">
      <h3 class="tw-text-[#fdb63c] tw-font-bold tw-text-xl">
        <i class="fa-solid fa-square-plus tw-mr-1"></i> Edit Project
      </h3>
    </div>
    <form id="_form">
      <div class="form-group">
        <label
          for="exampleFormControlInput1"
          class="tw-block tw-mb-1 tw-mt-2 tw-font-medium tw-text-[#fff]"
          >Project Name</label
        >
        <input
          type="text"
          class="form-control"
          id="projectName"
          placeholder="Enter Project name..."
          value="${project.name}"
        />
      </div>
      <div class="form-group">
        <label
          for="exampleFormControlInput1"
          class="tw-block tw-mb-1 tw-mt-2 tw-font-medium tw-text-[#fff]"
          >Author Name</label
        >
        <input
          type="text"
          class="form-control"
          id="projectAuthor"
          placeholder="Enter Author Name..."
          value="${project.author}"
        />
      </div>
      <div class="form-group">
        <label
          for="exampleFormControlSelect1"
          class="tw-block tw-mb-1 tw-mt-2 tw-font-medium tw-text-[#fff]"
          >Description</label
        >
        <textarea class="form-control" name="" id="projectDes" rows="5" placeholder="Enter a short description of the project...">${
          project.des
        }</textarea>
      </div>
      <div class="form-group">
        <label
          for="exampleFormControlTextarea1"
          class="tw-block tw-mb-1 tw-mt-2 tw-font-medium tw-text-[#fff]"
          >Avatar</label
        >
        <input
        type="file"
        class="form-control"
        id="projectAvatar"
        value="${project.avatar}"
      />
      </div>
      <div class="form-group">
        <label
          for="exampleFormControlTextarea1"
          class="tw-block tw-mb-1 tw-mt-2 tw-font-medium tw-text-[#fff]"
          >Album</label
        >
        <input
        type="file"
        multiple
        id="projectAlbum"
        value="${project.album}"
        class="form-control"
      />
      </div>
      <div class="form-group">
        <label
          for="exampleFormControlTextarea1"
          class="tw-block tw-mb-1 tw-mt-2 tw-font-medium tw-text-[#fff]"
          >Link Github</label
        >
        <input
        type="text"
        placeholder="Enter link Github..."
        id="linkGithub"
        class="form-control"
        value="${project.linkGithub}"
      />
      </div>
      <div class="form-group">
        <label
          for="exampleFormControlTextarea1"
          class="tw-block tw-mb-1 tw-mt-2 tw-font-medium tw-text-[#fff]"
          >Link Preview</label
        >
        <input
        type="text"
        placeholder="Enter link Preview..."
        id="linkPreview"
        class="form-control"
        value="${project.linkPreview}"
      />
      </div>
      
      <div class="form-group">
        <label
          for="exampleFormControlInput1"
          class="tw-block tw-mb-1 tw-mt-2 tw-font-medium tw-text-[#fff]"
          >Date</label
        >
        <input
          type="date"
          class="form-control"
          id="projectDate"
          placeholder="Enter project date..."
          value="${project.date}"
        />
      </div>
      <div class="form-group">
        <label
          for="exampleFormControlInput1"
          class="tw-block tw-mb-1 tw-mt-2 tw-font-medium tw-text-[#fff]"
          >Technology</label
        >
        <input
          type="text"
          class="form-control"
          id="projectTech"
          placeholder="Enter project Technology..."
          value="${project.tech}"
        />
      </div>
      <div class="tw-mt-4">
        <button class="btn btn-success">Edit Project</button>
      </div>
    </form>
  </div>
</article>
<!-- END WRAP ARTICLE -->
   </div>
   </div>
  `;
};

export default projectEditPage;
