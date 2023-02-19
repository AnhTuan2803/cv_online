import { deleteCategory, getCategories } from "@/api/category";
import Header from "@/components/admin/Header";
import { useEffect, useState } from "@/lib";

const categoriesPage = () => {
  document.title = "Admin - Categories";
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await getCategories();
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
        const check = window.confirm("Bạn có muốn xóa?");

        if (check === true) {
          try {
            const id = this.dataset.id;
            // xóa trên server
            await deleteCategory(id);
            // xóa client
            const newCategories = data.filter((category) => category.id != id);
            setData(newCategories);
          } catch (error) {
            console.log(error);
          }
        }
      });
    }
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
            Categories Page
          </h1>
        </div>
        <div class="container">
        <div class="tw-my-4">
          <h3 class="tw-text-[#fdb63c] tw-font-bold tw-text-xl">
            <i class="fa-solid fa-list tw-mr-2"></i>List Category
          </h3>
        </div>
      </div>
        <div class="tw-py-5">
          <table class="table container">
            <thead>
              <tr class="tw-text-[#fff]">
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
            ${data
              ?.map(
                (category, index) => /*html*/ ` <tr class="tw-text-[#fff]">
            <th scope="row">${index + 1}</th>
            <td>${category.name}</td>
            <td class="tw-flex">
              <a data-id="${category.id}" style="margin-left: 5px;
              margin-right: 5px; padding-left: 2px;
              padding-right: 2px;" class="btn-remove btn btn-danger"
                ><i class="fa-solid fa-trash"></i
              ></a>

              <a href="#/admin/category-edit/${
                category.id
              }" style="margin-left: 5px;
              margin-right: 5px; padding-left: 2px;
              padding-right: 2px;" class="btn btn-warning"
                ><i class="fa-solid fa-pen-to-square"></i
              ></a>
            </td>
          </tr>`
              )
              .join("")}
             
            </tbody>
          </table>
        </div>
      </article>
      <!-- END WRAP ARTICLE -->
  </div>
</div>
  
  `;
};

export default categoriesPage;
