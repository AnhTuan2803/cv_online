import Footer from "@/components/Footer";
import Menus from "@/components/Menus";
import Sidebar from "@/components/Sidebar";

const BlogPage = () => {
  document.title = "MyCV - Blog";

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
<article class="news-item">
<div class="news-item__image-wrap">
<div class="news-item__date">Sep 16, 2019</div>
<a class="news-item__link" href="#"></a>
<img class="cover" src="https://res.cloudinary.com/dugodumc5/image/upload/v1676477750/cld-sample-2.jpg" alt="" />
</div>
<div class="news-item__caption">
<h2 class="tw-font-serif tw-text-[#F1F2F4]">Design Conferences in 2019</h2>
<p class="tw-mb-2 tw-text-[#DEDDE0]">Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.</p>
</div>
</article>

<!-- Post -->
<article class="news-item">
 <div class="news-item__image-wrap">
 <div class="news-item__date">Sep 16, 2019</div>
 <a class="news-item__link" href="#"></a>
 <img class="cover" src="https://res.cloudinary.com/dugodumc5/image/upload/v1676477750/cld-sample-2.jpg" alt="" />
 </div>
 <div class="news-item__caption">
 <h2 class="tw-font-serif tw-text-[#F1F2F4]">Design Conferences in 2019</h2>
 <p class="tw-mb-2 tw-text-[#DEDDE0]">Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.</p>
 </div>
 </article>

<!-- Post -->
<article class="news-item">
 <div class="news-item__image-wrap">
 <div class="news-item__date">Sep 16, 2019</div>
 <a class="news-item__link" href="#"></a>
 <img class="cover" src="https://res.cloudinary.com/dugodumc5/image/upload/v1676477750/cld-sample-2.jpg" alt="" />
 </div>
 <div class="news-item__caption">
 <h2 class="tw-font-serif tw-text-[#F1F2F4]">Design Conferences in 2019</h2>
 <p class="tw-mb-2 tw-text-[#DEDDE0]">Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.</p>
 </div>
 </article>

<!-- Post -->
<article class="news-item">
 <div class="news-item__image-wrap">
 <div class="news-item__date">Sep 16, 2019</div>
 <a class="news-item__link" href="#"></a>
 <img class="cover" src="https://res.cloudinary.com/dugodumc5/image/upload/v1676477750/cld-sample-2.jpg" alt="" />
 </div>
 <div class="news-item__caption">
 <h2 class="tw-font-serif tw-text-[#F1F2F4]">Design Conferences in 2019</h2>
 <p class="tw-mb-2 tw-text-[#DEDDE0]">Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.</p>
 </div>
 </article>

<!-- Post -->
<article class="news-item">
 <div class="news-item__image-wrap">
 <div class="news-item__date">Sep 16, 2019</div>
 <a class="news-item__link" href="#"></a>
 <img class="cover" src="https://res.cloudinary.com/dugodumc5/image/upload/v1676477750/cld-sample-2.jpg" alt="" />
 </div>
 <div class="news-item__caption">
 <h2 class="tw-font-serif tw-text-[#F1F2F4]">Design Conferences in 2019</h2>
 <p class="tw-mb-2 tw-text-[#DEDDE0]">Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.</p>
 </div>
 </article>

<!-- Post -->
<article class="news-item">
 <div class="news-item__image-wrap">
 <div class="news-item__date">Sep 16, 2019</div>
 <a class="news-item__link" href="#"></a>
 <img class="cover" src="https://res.cloudinary.com/dugodumc5/image/upload/v1676477750/cld-sample-2.jpg" alt="" />
 </div>
 <div class="news-item__caption">
 <h2 class="tw-font-serif tw-text-[#F1F2F4]">Design Conferences in 2019</h2>
 <p class="tw-mb-2 tw-text-[#DEDDE0]">Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.</p>
 </div>
 </article>
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
