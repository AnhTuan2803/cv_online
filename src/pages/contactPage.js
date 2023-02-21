import Footer from "@/components/Footer";
import Menus from "@/components/Menus";
import Sidebar from "@/components/Sidebar";
import { router, useEffect } from "@/lib";
import axios from "axios";

const ContactPage = () => {
  document.title = "MyCV - Contact";

  useEffect(() => {
    const sform = document.querySelector("#contact-form");
    const nameContact = document.querySelector("#nameContact");
    const emailContact = document.querySelector("#emailContact");
    const messageContact = document.querySelector("#messageContact");
    sform.addEventListener("submit", (e) => {
      e.preventDefault();
      const contact = {
        name: nameContact.value,
        email: emailContact.value,
        message: messageContact.value,
      };
      axios.post(`https://fdtxqk-8080.preview.csb.app/api/contacts`, contact);
      alert("Gửi thành công!");
    });
  });

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
    <h1 class="tw-text-[#F1F2F4] title__separate">Contact</h1>
</div>

<!-- Contact -->
    <div class="map"><iframe class="tw-w-full tw-h-full tw-rounded-[14px]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.8638558814273!2d105.74459841484187!3d21.03813279283441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454b991d80fd5%3A0x53cefc99d6b0bf6f!2zVHLGsOG7nW5nIENhbyDEkeG6s25nIEZQVCBQb2x5dGVjaG5pYw!5e0!3m2!1svi!2s!4v1676558368403!5m2!1svi!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
<h2 class="title-contact-form">Contact Form</h2>

<form id="contact-form" class="contact-form">
        <div class="row">
    <div class="form-group col-12 col-md-6">

                <input type="text" class="form-control input" id="nameContact" name="nameContact" placeholder="Full name" required="required" autocomplete="on" oninvalid="setCustomValidity('Fill in the field')" onkeyup="setCustomValidity('')">
<!-- <div class="help-block with-errors"></div> -->
    </div>
    <div class="form-group col-12 col-md-6">

                <input type="email" class="form-control input" id="emailContact" name="emailContact" placeholder="Email address" required="required" autocomplete="on" oninvalid="setCustomValidity('Email is incorrect')" onkeyup="setCustomValidity('')">
<!-- <div class="help-block with-errors"></div> -->
    </div>

    <div class="form-group col-12 col-md-12">
                <textarea class="textarea form-control" id="messageContact" name="messageContact" placeholder="Your Message"  rows="4" required="required" oninvalid="setCustomValidity('Fill in the field')" onkeyup="setCustomValidity('')"></textarea>
<!-- <div class="help-block with-errors"></div> -->
    </div>
</div>

<!--  -->
<div class="row">
    <div class="col-12 col-md-6 order-2 order-md-1 text-center text-md-left">
      <div id="validator-contact" class="hidden"></div>
    </div>
    <div style="text-align: right;" class="col-12 col-md-6 order-1 order-md-2 text-right">
      <button type="submit" class="_btn"><i class="fa-solid fa-paper-plane tw-mr-2"></i> Send Message</button>
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
<div class="back-to-top"></div>
  `;
};
export default ContactPage;
