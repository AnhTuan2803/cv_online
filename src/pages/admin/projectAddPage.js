import { addProject } from "@/api/project";
import Category from "@/components/admin/Category";
import Header from "@/components/admin/Header";
import { router, useEffect } from "@/lib";
import axios from "axios";

const projectAddPage = () => {
  document.title = "Admin - Project Add";

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
    const projectCate = document.querySelector("#projectCate");

    sform.addEventListener("submit", async function (e) {
      e.preventDefault();
      try {
        const urlsAlbum = await uploadFiles(projectAlbum.files);
        const urlAvatar = await uploadFiles(projectAvatar.files);

        const project = {
          name: projectName.value,
          author: projectAuthor.value,
          des: projectDes.value,
          avatar: urlAvatar[0],
          album: urlsAlbum,
          linkGithub: linkGithub.value,
          linkPreview: linkPreview.value,
          date: projectDate.value,
          categoryId: Number(projectCate.value),
        };

        await addProject(project);
        router.navigate("admin/projects");
        alert("Thêm dự án thành công!");
      } catch (error) {
        console.log(error);
      }
    });
  });

  const uploadFiles = async (files) => {
    if (files) {
      const CLOUD_NAME = "dugodumc5";
      const PRESET_NAME = "mycv-upload";
      const FOLDER_NAME = "MyCV";
      const urls = [];
      const api = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;

      const formData = new FormData();
      formData.append("upload_preset", PRESET_NAME);
      formData.append("folder", FOLDER_NAME);

      for (const file of files) {
        formData.append("file", file);
        const response = await axios.post(api, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        urls.push(response.data.secure_url);
      }
      return urls;
    }
  };

  return /*html*/ `
  <div class="tw-max-w-5xl tw-mx-auto">
  <!-- WRAP CONTAINER -->
  <div class="wrap-container">
   ${Header()}

  <!-- WRAP ARTICLE -->
  <article class="tw-pb-10">
  <div class="welcome container tw-my-10 tw-text-center">
    <h1 class="tw-text-4xl tw-text-[#999] tw-font-bold">
     Add Project Page
    </h1>
  </div>
  <div class="container">
    <div class="tw-my-4">
      <h3 class="tw-text-[#fdb63c] tw-font-bold tw-text-xl">
        <i class="fa-solid fa-square-plus tw-mr-1"></i> Add Project
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
        />
      </div>
      <div class="form-group">
        <label
          for="exampleFormControlSelect1"
          class="tw-block tw-mb-1 tw-mt-2 tw-font-medium tw-text-[#fff]"
          >Description</label
        >
        <textarea class="form-control" name="" id="projectDes" rows="5" placeholder="Enter a short description of the project..."></textarea>
      </div>
      <div class="form-group">
        <label
          for="exampleFormControlTextarea1"
          class="tw-block tw-mb-1 tw-mt-2 tw-font-medium tw-text-[#fff]"
          >Avatar</label
        >
        <input
        type="file"
        id="projectAvatar"
        class="form-control"
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
        id="projectAlbum"
        multiple
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
        id="linkGithub"
        placeholder="Enter link Github..."
        class="form-control"
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
        id="linkPreview"
        placeholder="Enter link Preview..."
        class="form-control"
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
        />
      </div>

      <div class="form-group">
      <label
        for="exampleFormControlSelect1"
        class="tw-block tw-mb-1 tw-mt-2 tw-font-medium tw-text-[#fff]"
        >Category</label
      >
      <select class="form-control" id="projectCate">
      <option value="">Programming Language</option>
    
     ${Category()}
      </select>
    </div>
      <div class="tw-mt-4">
        <button class="btn btn-success">Add Project</button>
      </div>
    </form>
  </div>
</article>
<!-- END WRAP ARTICLE -->
   </div>
   </div>
  `;
};

export default projectAddPage;
