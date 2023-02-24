import { getBlogs } from "@/api/blog";
import Footer from "@/components/Footer";
import Menus from "@/components/Menus";
import Sidebar from "@/components/Sidebar";
import { useEffect, useState } from "@/lib";

const BlogPage = () => {
  document.title = "MyCV - Blog";
  const [data, setData] = useState([]);

  useEffect(async () => {
    try {
      const { data } = await getBlogs();
      setData(data);
    } catch (error) {
      console.log(error);
    }
  }, []);

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
<a class="news-item__link" href="#/blog/${item.id}"></a>
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
