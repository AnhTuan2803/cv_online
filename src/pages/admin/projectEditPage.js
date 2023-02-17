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
    <form>
      <div class="form-group">
        <label
          for="exampleFormControlInput1"
          class="tw-block tw-mb-1 tw-mt-2 tw-font-medium tw-text-[#fff]"
          >Project Name</label
        >
        <input
          type="text"
          class="form-control"
          id="exampleFormControlInput1"
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
          id="exampleFormControlInput1"
          placeholder="Enter Author Name..."
        />
      </div>
      <div class="form-group">
        <label
          for="exampleFormControlSelect1"
          class="tw-block tw-mb-1 tw-mt-2 tw-font-medium tw-text-[#fff]"
          >Description</label
        >
        <textarea class="form-control" name="" id="" rows="5" placeholder="Enter a short description of the project..."></textarea>
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
          id="exampleFormControlInput1"
          placeholder="Enter project date..."
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
          id="exampleFormControlInput1"
          placeholder="Enter project Technology..."
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
