import { addCategory } from "@/api/category";
import Header from "@/components/admin/Header";
import { router, useEffect } from "@/lib";
import { object, string } from "yup";

const cateSchema = object({
  name: string().required(),
});

const categoryAddPage = () => {
  document.title = "Admin - Category Add";

  useEffect(() => {
    const sform = document.querySelector("#_form");
    const categoryName = document.querySelector("#categoryName");
    sform.addEventListener("submit", async function (e) {
      e.preventDefault();
      try {
        const category = {
          name: categoryName.value,
        };
        const cate = await cateSchema.validate(category, { abortEarly: false });
        await addCategory(cate);
        router.navigate("/admin/categories");
        alert("Thêm danh mục thành công!");
      } catch (error) {
        console.log(error.errors);
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
     Add Category Page
    </h1>
  </div>
  <div class="container">
    <div class="tw-my-4">
      <h3 class="tw-text-[#fdb63c] tw-font-bold tw-text-xl">
        <i class="fa-solid fa-square-plus tw-mr-1"></i> Add Category
      </h3>
    </div>
    <form id="_form">
      <div class="form-group">
        <label
          for="exampleFormControlInput1"
          class="tw-block tw-mb-1 tw-mt-2 tw-font-medium tw-text-[#fff]"
          >Category Name</label
        >
        <input
          type="text"
          class="form-control"
          id="categoryName"
          placeholder="Enter Category name..."
        />
      </div>
     
      <div class="tw-mt-4">
        <button class="btn btn-success">Add Category</button>
      </div>
    </form>
  </div>
</article>
<!-- END WRAP ARTICLE -->
   </div>
   </div>
  `;
};

export default categoryAddPage;
