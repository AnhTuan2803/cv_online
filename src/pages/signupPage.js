import { router, useEffect } from "@/lib";
import axios from "axios";

const signupPage = () => {
  document.title = "MyCV - Signup";

  useEffect(() => {
    const sform = document.querySelector("#_sform");
    const username = document.querySelector("#username");
    const password = document.querySelector("#password");
    sform.addEventListener("submit", (e) => {
      e.preventDefault();
      const user = {
        email: username.value,
        password: password.value,
      };
      axios.post(`http://localhost:3000/users`, user);
      router.navigate("/signin");
      alert("Đăng ký thành công!");
    });
  });

  return /*html*/ ` <div class="tw-bg-gray-100">
    <div class="tw-flex tw-items-center tw-justify-center tw-h-screen">
      <div class="tw-w-full tw-max-w-md">
        <form id="_sform" class="tw-bg-white tw-p-6 tw-rounded-lg tw-shadow-md">
          <h2 class="tw-text-3xl tw-font-bold tw-text-center tw-mb-2">Đăng Ký Tài Khoản</h2>
          <div class="tw-mb-4">
            <label class="tw-block tw-text-gray-700 tw-font-bold tw-mb-2" for="username"
              >Tài khoản</label
            >
            <input
              class="tw-border tw-rounded tw-w-full tw-py-2 tw-px-3 tw-text-gray-700"
              id="username"
              type="text"
              placeholder="Nhập tài khoản"
            />
          </div>
          <div class="tw-mb-6">
            <label class="tw-block tw-text-gray-700 tw-font-bold tw-mb-2" for="password"
              >Mật khẩu</label
            >
            <input
              class="tw-border tw-rounded tw-w-full tw-py-2 tw-px-3 tw-text-gray-700"
              id="password"
              type="password"
              placeholder="Nhập mật khẩu"
            />
          </div>
          <button
            class="tw-bg-blue-500 tw-hover:bg-blue-700 tw-text-white tw-font-bold tw-py-2 tw-px-4 tw-rounded tw-focus:outline-none tw-focus:shadow-outline"
            type="submit"
          >
            Đăng ký
          </button>
          <a href="#/signin" class="tw-no-underline tw-text-[#666] tw-text-[16px] tw-justify-items-end tw-grid tw-text-end">Đăng nhập</a>
        </form>
      </div>
    </div>
  </div>`;
};

export default signupPage;
