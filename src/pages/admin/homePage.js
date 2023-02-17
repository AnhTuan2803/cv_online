import Header from "@/components/admin/Header";

const homePage = () => {
  document.title = "Admin - MyCV";
  return /*html*/ `
  <div class="tw-max-w-5xl tw-mx-auto">
  <!-- WRAP CONTAINER -->
  <div class="wrap-container">
   ${Header()}
    <!-- WRAP ARTICLE -->
    <article>
      <div class="welcome container tw-my-10 tw-text-center">
        <h1 class="tw-text-4xl tw-text-[#999] tw-font-bold">
          Welcome to Admin Page
        </h1>
      </div>
      <div class="container tw-text-center">
        <img
          src="https://res.cloudinary.com/phuong-fpoly/image/upload/v1676474190/Project%20ECMAScript/Portfolio/360_F_227450952_KQCMShHPOPebUXklULsKsROk5AvN6H1H-removebg-preview_x4r1p9.png"
          alt=""
          class="tw-inline-block"
        />
      </div>
    </article>
    <!-- END WRAP ARTICLE -->
  </div>
</div>
  `;
};

export default homePage;
