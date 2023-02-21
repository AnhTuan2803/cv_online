import { getBlog } from "@/api/blog";
import Footer from "@/components/Footer";
import Menus from "@/components/Menus";
import Sidebar from "@/components/Sidebar";
import { useEffect, useState } from "@/lib";

const BlogPage = () => {
  document.title = "MyCV - Blog";
  const [data, setData] = useState([]);

  useEffect(async () => {
    try {
      const { data } = await getBlog();
      setData(data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    const btn = document.querySelector(".hamburger");
    btn.addEventListener("click", () => {
      const _menu = document.querySelector("#_menu");
      const item = document.querySelector("#item");
      if (_menu.style.width == "0%") {
        item.className = "fa-solid fa-xmark";
        document.body.scrollWidth >= 1024
          ? (_menu.style.width = "60%")
          : (_menu.style.width = "100%");
        _menu.style.display = "block";
      } else {
        item.className = "fa-solid fa-bars-staggered";
        _menu.style.width = "0%";
        _menu.style.display = "none";
      }
    });
  });

  return /*html*/ `
  <main>
  <div class="container tw-pt-[6rem]">
    <div class="row">
      <!-- Sidebar -->
     ${Sidebar()}
        
    <!-- Content -->
        <div class="col-xl-9">
        <div class="shadow box tw-bg-[#302C40] tw-rounded-[20px]">
          <!-- Menu -->
          <div class="circle-menu">
        
          <div class="hamburger">
          <i id="item" class="fa-solid fa-bars-staggered"></i>
            </div>
       
           </div>
        ${Menus()}
  <!-- About -->
  <div class="pb-2">
   <h1 class="tw-text-[#F1F2F4] title__separate">Blog</h1>
</div>

<!-- News -->
<div class="news-grid tw-pb-0">
<!-- Post -->
${data
  ?.map(
    (item) => /*html*/ `<article class="news-item">
<div class="news-item__image-wrap">
<div class="news-item__date">${item.date}</div>
<a class="news-item__link" href="#"></a>
<img class="cover" src="${item.img}" alt="" />
</div>
<div class="news-item__caption">
<h2 class="tw-font-serif tw-text-[#F1F2F4]">${item.title}</h2>
<p class="tw-mb-2 tw-text-[#DEDDE0]">${item.des}</p>
</div>
</article>`
  )
  .join("")}

</div>
</div>
      
<!-- Footer -->
${Footer()}
  </div>
</div>
</div>	
</main>
<div class="back-to-top"></div>
  `;
};

export default BlogPage;
