import { addBlog } from "@/api/blog";
import Header from "@/components/admin/Header";
import { router, useEffect } from "@/lib";
import axios from "axios";

const blogAddPage = () => {
  document.title = "Admin - Blog Add";

  useEffect(() => {
    const sform = document.querySelector("#_form");
    const title = document.querySelector("#title");
    const des = document.querySelector("#des");
    const date = document.querySelector("#date");
    const avatar = document.querySelector("#avatar");
    const album = document.querySelector("#album");
    const longdes = document.querySelector("#longdes");

    sform.addEventListener("submit", async function (e) {
      e.preventDefault();
      try {
        const urlsAlbum = await uploadFiles(album.files);
        const urlAvatar = await uploadFiles(avatar.files);

        const blog = {
          title: title.value,
          des: des.value,
          date: date.value,
          img: urlAvatar[0],
          album: urlsAlbum,
          longdes: longdes.value,
        };

        await addBlog(blog);
        router.navigate("admin/blog");
        alert("Thêm bài viết thành công!");
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
       Add Blog Page
      </h1>
    </div>
    <div class="container">
      <div class="tw-my-4">
        <h3 class="tw-text-[#fdb63c] tw-font-bold tw-text-xl">
          <i class="fa-solid fa-square-plus tw-mr-1"></i> Add Blog
        </h3>
      </div>
      <form id="_form">
        <div class="form-group">
          <label
            for="exampleFormControlInput1"
            class="tw-block tw-mb-1 tw-mt-2 tw-font-medium tw-text-[#fff]"
            >Title</label
          >
          <input
            type="text"
            class="form-control"
            id="title"
            placeholder="Enter title..."
          />
        </div>
        
        <div class="form-group">
          <label
            for="exampleFormControlSelect1"
            class="tw-block tw-mb-1 tw-mt-2 tw-font-medium tw-text-[#fff]"
            >Description</label
          >
          <textarea class="form-control" name="" id="des" rows="3" placeholder="Enter description..."></textarea>
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
          id="date"
          placeholder="Enter date..."
        />
      </div>

        <div class="form-group">
          <label
            for="exampleFormControlTextarea1"
            class="tw-block tw-mb-1 tw-mt-2 tw-font-medium tw-text-[#fff]"
            >Avatar</label
          >
          <input
          type="file"
          id="avatar"
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
          id="album"
          multiple
          class="form-control"
        />
        </div>
        <div class="form-group">
        <label
          for="exampleFormControlSelect1"
          class="tw-block tw-mb-1 tw-mt-2 tw-font-medium tw-text-[#fff]"
          >Long Description</label
        >
        <textarea class="form-control" name="" id="longdes" rows="8" placeholder="Enter long description..."></textarea>
      </div>   

        <div class="tw-mt-4">
          <button class="btn btn-success">Add Blog</button>
        </div>
      </form>
    </div>
  </article>
  <!-- END WRAP ARTICLE -->
     </div>
     </div>
    `;
};

export default blogAddPage;
