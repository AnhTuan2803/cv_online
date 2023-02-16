import Footer from "@/components/Footer";
import Menus from "@/components/Menus";
import Sidebar from "@/components/Sidebar";
import { useEffect } from "@/lib";

const BlogPage = () => {
  document.title = "MyCV - Blog";
  useEffect(() => {
    const active = document.querySelector(".Blog");
    active.className = "active tw-no-underline";
  });
  return `<div>blog page</div>`
//   return /*html*/ `
//     <!-- Preloader -->
//     <div class="preloader">
//       <div class="preloader__wrap">
//         <div class="circle-pulse">
//           <div class="circle-pulse__1"></div>
//           <div class="circle-pulse__2"></div>
//         </div>
//         <div class="preloader__progress"><span></span></div>
//       </div>
//     </div>
//     <main class="main">
//       <div class="container gutter-top">
//         <div class="row sticky-parent">
//   <!-- Sidebar -->
//   ${Sidebar()}
//   <!-- Content -->
//     <div class="col-12 col-md-12 col-xl-9">
//         <div class="box shadow pb-0">
//             <!-- Menu -->
//             <div class="circle-menu">
//             <div class="hamburger">
//                             <div class="line"></div>
//                             <div class="line"></div>
//                             <div class="line"></div>
//                         </div>
//         </div>
//         <div class="inner-menu js-menu tw-max-w-xl">
//         <ul class="nav">
//         ${Menus()}
//         </ul>
//         </div>
//             <!-- About -->
//             <div class="pb-2">
//                 <h1 class="title title--h1 first-title title__separate">Blog</h1>
//             </div>

//             <!-- News -->
//             <div class="news-grid pb-0">
//                 <!-- Post -->
//                 <article class="news-item box">
//                     <div class="news-item__image-wrap overlay overlay--45">
//                         <div class="news-item__date">Sep 16, 2019</div>
//                         <a class="news-item__link" href="single-post.html"></a>
//                         <img class="cover lazyload" src="../assets/img/image_02.jpg" alt="" />
//                     </div>
//                     <div class="news-item__caption">
//                         <h2 class="title title--h4">Design Conferences in 2019</h2>
//                         <p>Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.</p>
//                     </div>
//                 </article>

//                 <!-- Post -->
//                 <article class="news-item box">
//                     <div class="news-item__image-wrap overlay overlay--45">
//                         <div class="news-item__date">Sep 15, 2019</div>
//                         <a class="news-item__link" href="single-post.html"></a>
//                         <img class="cover lazyload" src="../assets/img/image_06.jpg" alt="" />
//                     </div>
//                     <div class="news-item__caption">
//                         <h2 class="title title--h4">Best Fonts Every Designer</h2>
//                         <p>Sed ut perspiciatis, nam libero tempore, cum soluta nobis est eligendi.</p>
//                     </div>
//                 </article>

//                 <!-- Post -->
//                 <article class="news-item box">
//                     <div class="news-item__image-wrap overlay overlay--45">
//                         <div class="news-item__date">Sep 14, 2019</div>
//                         <a class="news-item__link" href="single-post.html"></a>
//                         <img class="cover lazyload" src="../assets/img/image_08.jpg" alt="" />
//                     </div>
//                     <div class="news-item__caption">
//                         <h2 class="title title--h4">Design Digest #80</h2>
//                         <p>Excepteur sint occaecat cupidatat no proident, quis nostrum exercitationem ullam corporis suscipit.</p>
//                     </div>
//                 </article>
                
//                 <!-- Post -->
//                 <article class="news-item box">
//                     <div class="news-item__image-wrap overlay overlay--45">
//                         <div class="news-item__date">Sep 13, 2019</div>
//                         <a class="news-item__link" href="single-post.html"></a>
//                         <img class="cover lazyload" src="../assets/img/image_07.jpg" alt="" />
//                     </div>
//                     <div class="news-item__caption">
//                         <h2 class="title title--h4">UI Interactions of the week</h2>
//                         <p>Enim ad minim veniam, consectetur adipiscing elit, quis nostrud exercitation ullamco laboris nisi.</p>
//                     </div>
//                 </article>
                
//                 <!-- Post -->
//                 <article class="news-item box">
//                     <div class="news-item__image-wrap overlay overlay--45">
//                         <div class="news-item__date">Sep 12, 2019</div>
//                         <a class="news-item__link" href="single-post.html"></a>
//                         <img class="cover lazyload" src="../assets/img/image_05.jpg" alt="" />
//                     </div>
//                     <div class="news-item__caption">
//                         <h2 class="title title--h4">The Forgotten Art of Spacing</h2>
//                         <p>Maxime placeat, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
//                     </div>
//                 </article>
                
//                 <!-- Post -->
//                 <article class="news-item box">
//                     <div class="news-item__image-wrap overlay overlay--45">
//                         <div class="news-item__date">Sep 15, 2019</div>
//                         <a class="news-item__link" href="single-post.html"></a>
//                         <img class="cover lazyload" src="../assets/img/image_01.jpg" alt="" />
//                     </div>
//                     <div class="news-item__caption">
//                         <h2 class="title title--h4">Design Digest #79</h2>
//                         <p>Optio cumque nihil impedit uo minus quod maxime placeat, velit esse cillum.</p>
//                     </div>
//                 </article>
//             </div>
//         </div>
        
//         <!-- Footer -->
//         ${Footer()}
//     </div>
//     </div>
//     </div>
//   </main>
//   <div class="back-to-top"></div>`;
};

export default BlogPage;
