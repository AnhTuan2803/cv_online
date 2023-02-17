import { getProFile, updateProFile } from "@/api/proFile";
import Header from "@/components/admin/Header";
import { router, useEffect, useState } from "@/lib";

const proFilePage = () => {
  document.title = "Admin - ProFile";
  const [proFile, setProFile] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const { data } = await getProFile();
        setProFile(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  useEffect(() => {
    const sform = document.querySelector("#_sform");
    const name = document.querySelector("#name");
    const avatar = document.querySelector("#avatar");
    const location = document.querySelector("#location");
    const birthday = document.querySelector("#birthday");
    const address = document.querySelector("#address");
    const education = document.querySelector("#education");
    const email = document.querySelector("#email");
    const phone = document.querySelector("#phone");

    sform.addEventListener("submit", async (e) => {
      e.preventDefault();
      try {
        const newProFile = {
          name: name.value,
          avatar: avatar.value,
          location: location.value,
          birthday: birthday.value,
          address: address.value,
          education: education.value,
          email: email.value,
          phone: phone.value,
        };

        await updateProFile(newProFile);
        router.navigate("/admin");
        alert("Sửa thông tin thành công!");
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
     ProFile Page
    </h1>
  </div>
  <div class="container">
    <div class="tw-my-4">
      <h3 class="tw-text-[#fdb63c] tw-font-bold tw-text-xl">
        <i class="fa-solid fa-square-plus tw-mr-1"></i> ProFile
      </h3>
    </div>
    <form id="_sform">
      <div class="form-group">
        <label
          for="exampleFormControlInput1"
          class="tw-block tw-mb-1 tw-mt-2 tw-font-medium tw-text-[#fff]"
          >Full Name</label
        >
        <input
          type="text"
          class="form-control"
          id="name"
          placeholder="Enter Full name..."
          value="${proFile.name}"
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
          for="exampleFormControlInput1"
          class="tw-block tw-mb-1 tw-mt-2 tw-font-medium tw-text-[#fff]"
          >Location</label
        >
        <input
          type="text"
          class="form-control"
          id="location"
          placeholder="Enter Location..."
          value="${proFile.location}"
        />
      </div>
      <div class="form-group">
        <label
          for="exampleFormControlInput1"
          class="tw-block tw-mb-1 tw-mt-2 tw-font-medium tw-text-[#fff]"
          >Birthday</label
        >
        <input
          type="text"
          class="form-control"
          id="birthday"
          placeholder="Enter Birthday..."
          value="${proFile.birthday}"
        />
      </div>
    
     
    
      <div class="form-group">
        <label
          for="exampleFormControlTextarea1"
          class="tw-block tw-mb-1 tw-mt-2 tw-font-medium tw-text-[#fff]"
          >Address</label
        >
        <input
        type="text"
        placeholder="Enter Address..."
        id="address"
        class="form-control"
        value="${proFile.address}"
      />
      </div>
      <div class="form-group">
        <label
          for="exampleFormControlTextarea1"
          class="tw-block tw-mb-1 tw-mt-2 tw-font-medium tw-text-[#fff]"
          >Education</label
        >
        <input
        type="text"
        placeholder="Enter Education..."
        id="education"
        class="form-control"
        value="${proFile.education}"
      />
      </div>
      
      <div class="form-group">
        <label
          for="exampleFormControlInput1"
          class="tw-block tw-mb-1 tw-mt-2 tw-font-medium tw-text-[#fff]"
          >Email</label
        >
        <input
          type="email"
          class="form-control"
          id="email"
          placeholder="Enter Email..."
          value="${proFile.email}"
        />
      </div>

      <div class="form-group">
      <label
        for="exampleFormControlInput1"
        class="tw-block tw-mb-1 tw-mt-2 tw-font-medium tw-text-[#fff]"
        >Phone</label
      >
      <input
        type="text"
        class="form-control"
        id="phone"
        placeholder="Enter Phone..."
        value="${proFile.phone}"
      />
    </div>
      <div class="tw-mt-4">
        <button class="btn btn-success">Update ProFile</button>
      </div>
    </form>
  </div>
</article>
<!-- END WRAP ARTICLE -->

   </div>
   </div>
  `;
};

export default proFilePage;
