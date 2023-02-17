import Header from "@/components/admin/Header";

const proFilePage = () => {
  document.title = "Admin - ProFile";

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
    <form>
      <div class="form-group">
        <label
          for="exampleFormControlInput1"
          class="tw-block tw-mb-1 tw-mt-2 tw-font-medium tw-text-[#fff]"
          >Full Name</label
        >
        <input
          type="text"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="Enter Full name..."
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
          id="exampleFormControlInput1"
          placeholder="Enter Location..."
        />
      </div>
      <div class="form-group">
        <label
          for="exampleFormControlInput1"
          class="tw-block tw-mb-1 tw-mt-2 tw-font-medium tw-text-[#fff]"
          >Birthday</label
        >
        <input
          type="date"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="Enter Birthday..."
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
        class="form-control"
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
        class="form-control"
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
          id="exampleFormControlInput1"
          placeholder="Enter Email..."
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
        id="exampleFormControlInput1"
        placeholder="Enter Phone..."
      />
    </div>
      <div class="tw-mt-4">
        <button class="btn btn-success">Edit ProFile</button>
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
