import { addDoing } from "@/api/doing";
import Header from "@/components/admin/Header";
import { router, useEffect } from "@/lib";
import axios from "axios";

const doingAddPage = () => {
  document.title = "Admin - Doing Add";

  useEffect(() => {
    const sform = document.querySelector("#_form");
    const titledoing = document.querySelector("#titledoing");
    const imgdoing = document.querySelector("#imgdoing");
    const desdoing = document.querySelector("#desdoing");

    sform.addEventListener("submit", async function (e) {
      e.preventDefault();
      try {
        const url = await uploadFiles(imgdoing.files);

        const doing = {
          title: titledoing.value,
          img: url,
          des: desdoing.value,
        };

        await addDoing(doing);
        router.navigate("admin/doing");
        alert("Thêm công việc thành công!");
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
      return urls[0];
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
     Add Doing About Page
    </h1>
  </div>
  <div class="container">
    <div class="tw-my-4">
      <h3 class="tw-text-[#fdb63c] tw-font-bold tw-text-xl">
        <i class="fa-solid fa-square-plus tw-mr-1"></i> Add Doing
      </h3>
    </div>
    <form id="_form">
    
 
    <div class="form-group">
    <label
      for="exampleFormControlTextarea1"
      class="tw-block tw-mb-1 tw-mt-2 tw-font-medium tw-text-[#fff]"
      >Title Doing</label
    >
    <input
    type="text"
    placeholder="Enter title doing..."
    id="titledoing"
    class="form-control"
    value=""
  />
  </div>
  <div class="form-group">
    <label
      for="exampleFormControlTextarea1"
      class="tw-block tw-mb-1 tw-mt-2 tw-font-medium tw-text-[#fff]"
      >Img Doing</label
    >
    <input
    type="file"
    placeholder="Enter img doing..."
    id="imgdoing"
    class="form-control"
    value=""
  />
  </div>

  <div class="form-group">
  <label
    for="exampleFormControlTextarea1"
    class="tw-block tw-mb-1 tw-mt-2 tw-font-medium tw-text-[#fff]"
    >Des Doing</label
  >
  <input
  type="text"
  placeholder="Enter des doing..."
  id="desdoing"
  class="form-control"
  value=""
/>
</div>
  
      <div class="tw-mt-4">
        <button class="btn btn-success">Add Doing</button>
      </div>
    </form>
  </div>
</article>
<!-- END WRAP ARTICLE -->
   </div>
   </div>
  `;
};

export default doingAddPage;
