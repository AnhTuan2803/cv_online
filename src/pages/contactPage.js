import Footer from "@/components/Footer";
import Menus from "@/components/Menus";
import Sidebar from "@/components/Sidebar";
import { useEffect } from "@/lib";

const ContactPage = () => {
  document.title = "MyCV - Contact";
  useEffect(() => {
    const active = document.querySelector(".Contact");
    active.className = "active tw-no-underline";
  });
  return /*html*/ `
    <!-- Preloader -->
    <div class="preloader">
      <div class="preloader__wrap">
        <div class="circle-pulse">
          <div class="circle-pulse__1"></div>
          <div class="circle-pulse__2"></div>
        </div>
        <div class="preloader__progress"><span></span></div>
      </div>
    </div>
    <main class="main">
      <div class="container gutter-top">
        <div class="row sticky-parent">
  <!-- Sidebar -->
  ${Sidebar()}
  <!-- Content -->
  <div class="col-12 col-md-12 col-xl-9">
  <div class="box shadow">
    <!-- Menu -->
    <div class="circle-menu">
    <div class="hamburger">
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                </div>
</div>
<div class="inner-menu js-menu tw-max-w-xl">
<ul class="nav">
${Menus()}
</ul>
</div>
    <!-- About -->
  <div class="pb-2">
              <h1 class="title title--h1 first-title title__separate">Contact</h1>
    </div>

  <!-- Contact -->
              <div class="map"><iframe style="border-radius: 5%" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3723.8638558814273!2d105.74459841484187!3d21.03813279283441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1675623776156!5m2!1svi!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
  <h2 class="title title--h3">Contact Form</h2>
    
  <form id="contact-form" class="contact-form" data-toggle="validator">
                  <div class="row">
              <div class="form-group col-12 col-md-6">
        <i class="font-icon icon-user"></i>
                          <input type="text" class="input input__icon form-control" id="nameContact" name="nameContact" placeholder="Full name" required="required" autocomplete="on" oninvalid="setCustomValidity('Fill in the field')" onkeyup="setCustomValidity('')">
          <div class="help-block with-errors"></div>
              </div>
              <div class="form-group col-12 col-md-6">
        <i class="font-icon icon-envelope"></i>
                          <input type="email" class="input input__icon form-control" id="emailContact" name="emailContact" placeholder="Email address" required="required" autocomplete="on" oninvalid="setCustomValidity('Email is incorrect')" onkeyup="setCustomValidity('')">
          <div class="help-block with-errors"></div>
              </div>
              <div class="form-group col-12 col-md-12">
                          <textarea class="textarea form-control" id="messageContact" name="messageContact" placeholder="Your Message"  rows="4" required="required" oninvalid="setCustomValidity('Fill in the field')" onkeyup="setCustomValidity('')"></textarea>
          <div class="help-block with-errors"></div>
              </div>
      </div>
    <div class="row">
              <div class="col-12 col-md-6 order-2 order-md-1 text-center text-md-left">
                <div id="validator-contact" class="hidden"></div>
              </div>
              <div class="col-12 col-md-6 order-1 order-md-2 text-right">
                <button type="submit" class="btn"><i class="font-icon icon-send"></i> Send Message</button>
              </div>
            </div>
          </form>
</div>

<!-- Footer -->
${Footer()}
  </div>
  </div>
  </div>
</main>
<div class="back-to-top"></div>`;
};
export default ContactPage;
