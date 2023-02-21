import { deleteContact, getContacts } from "@/api/contact";
import Header from "@/components/admin/Header";
import { useEffect, useState } from "@/lib";

const contactPage = () => {
  document.title = "Admin - Contact";

  const [data, setData] = useState([]);

  useEffect(async () => {
    try {
      const { data } = await getContacts();
      setData(data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    const btns = document.querySelectorAll(".btn-remove");
    for (const btn of btns) {
      btn.addEventListener("click", async () => {
        const check = window.confirm("Bạn muốn xóa message?");
        if (check === true) {
          try {
            const id = btn.dataset.id;
            // xóa trên server
            await deleteContact(id);
            // xóa trên client
            const newContacts = data?.filter((contact) => contact.id != id);
            setData(newContacts);
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
            Contact Page
          </h1>
        </div>
        <div class="container">
        <div class="tw-my-4">
          <h3 class="tw-text-[#fdb63c] tw-font-bold tw-text-xl">
            <i class="fa-solid fa-list tw-mr-2"></i>List Contact
          </h3>
        </div>
      </div>
        <div class="tw-py-5">
          <table class="table container">
            <thead>
              <tr class="tw-text-[#fff]">
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Message</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
            ${data
              ?.map(
                (contact, index) => /*html*/ ` <tr class="tw-text-[#fff]">
            <th scope="row">${index + 1}</th>
            <td>${contact.name}</td>
            <td>${contact.email}</td>
            <td>${contact.message}</td>
            <td class="tw-flex">
              <a data-id="${contact.id}" style="margin-left: 5px;
              margin-right: 5px; padding-left: 2px;
              padding-right: 2px;" class="btn-remove btn btn-danger"
                ><i class="fa-solid fa-trash"></i
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

export default contactPage;
