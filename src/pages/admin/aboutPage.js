import { getAbout, updateAbout } from "@/api/about";
import Header from "@/components/admin/Header";
import { router, useEffect, useState } from "@/lib";

const aboutPage = () => {
  document.title = "Admin - About";
  const [data, setData] = useState({});

  useEffect(async () => {
    try {
      const { data } = await getAbout();
      setData(data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    const sform = document.querySelector("#_sform");
    const introduce1 = document.querySelector("#introduce1");
    const introduce2 = document.querySelector("#introduce2");

    sform.addEventListener("submit", async (e) => {
      e.preventDefault();
      try {
        const newAbout = {
          introduce1: introduce1.value,
          introduce2: introduce2.value,
        };

        await updateAbout(newAbout);
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
     About Page
    </h1>
  </div>
  <div class="container">
    <div class="tw-my-4">
      <h3 class="tw-text-[#fdb63c] tw-font-bold tw-text-xl">
        <i class="fa-solid fa-square-plus tw-mr-1"></i> About
      </h3>
    </div>
    <form id="_sform">
    
      <div class="form-group">
      <label
        for="exampleFormControlSelect1"
        class="tw-block tw-mb-1 tw-mt-2 tw-font-medium tw-text-[#fff]"
        >Introduce1</label
      >
      <textarea class="form-control" name="" id="introduce1" rows="4" placeholder="Enter Introduce1...">${
        data.introduce1
      }</textarea>
    </div>

    <div class="form-group">
    <label
      for="exampleFormControlSelect1"
      class="tw-block tw-mb-1 tw-mt-2 tw-font-medium tw-text-[#fff]"
      >Introduce2</label
    >
    <textarea class="form-control" name="" id="introduce2" rows="6" placeholder="Enter Introduce2...">${
      data.introduce2
    }</textarea>
  </div>

      <div class="tw-mt-4">
        <button class="btn btn-success">Update About</button>
      </div>
    </form>
  </div>
</article>
<!-- END WRAP ARTICLE -->

   </div>
   </div>
  `;
};

export default aboutPage;
