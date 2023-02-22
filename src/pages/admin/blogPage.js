import { deleteBlog, getBlogs } from "@/api/blog";
import Header from "@/components/admin/Header";
import { useEffect, useState } from "@/lib";

const blogPage = () => {
  document.title = "Admin - Blog";
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await getBlogs();
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
            await deleteBlog(id);
            // xóa client
            const newBlog = data.filter((item) => item.id != id);
            setData(newBlog);
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
            Blog Page
          </h1>
        </div>
        <div class="container">
        <div class="tw-my-4">
          <h3 class="tw-text-[#fdb63c] tw-font-bold tw-text-xl">
            <i class="fa-solid fa-list tw-mr-2"></i>List Blog
          </h3>
        </div>
      </div>
        <div class="tw-py-5">
          <table class="table container">
            <thead>
              <tr class="tw-text-[#fff]">
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Image</th>
                <th scope="col">Date</th>
                <th scope="col">Des</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
            ${data
              ?.map(
                (item, index) => /*html*/ ` <tr class="tw-text-[#fff]">
            <th scope="row">${index + 1}</th>
            <td>${item.title}</td>
            <td><img src="${
              item.img
            }" class="tw-w-[110px] tw-h-[70px]" alt=""></td>
            <td>${item.date}</td>
            <td>${item.des}</td>
            <td class="tw-flex">
              <a data-id="${item.id}" style="margin-left: 5px;
              margin-right: 5px; padding: 23px 15px;" class="btn-remove btn btn-danger"
                ><i class="fa-solid fa-trash"></i
              ></a>

              <a href="#/admin/blog-edit/${item.id}" style="margin-left: 5px;
              margin-right: 5px; padding: 23px 15px" class="btn btn-warning"
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

export default blogPage;
