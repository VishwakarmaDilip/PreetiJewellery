(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const c=`
<div class="footerContainer">
  <div class="mainFooter">
    <div class="leftBoxF">
      <div class="logo">Preety Jewellery</div>

      <div class="tele contact">
        <i class="fa-solid fa-phone"></i>
        <p>+1246-345-0695</p>
      </div>

      <div class="mail contact">
        <i class="fa-solid fa-envelope"></i>
        <p>info@jewelpreeti.com</p>
      </div>

      <div class="address contact">
        <i class="fa-solid fa-location-dot"></i>
        <p>4967 Sardis Sta, Victoria 8007, Montreal</p>
      </div>
    </div>

    <div class="rightboxF">
      <div class="fExperienceBox">
        <h2>Experience</h2>
        <a href="products.html">Products</a>
        <a href="">About Us</a>
        <a href="">Contact Us</a>
      </div>

      <div class="fSocialMedBox">
        <h2>Follow Us On</h2>
        <a
          class="SMB"
          href="https://www.instagram.com/prettyadornment/"
          target="_blank"
        >
          <i class="fa-brands fa-instagram"></i>
          <p>Instagram</p>
        </a>
        <a class="SMB" href="">
          <i class="fa-brands fa-facebook"></i>
          <p>Facebook</p>
        </a>
      </div>
    </div>
  </div>
  <div class="rights">All rights reserved</div>
</div>`,n=document.querySelector(".section-footer");n.insertAdjacentHTML("afterbegin",c);const l=document.querySelector(".wishCount"),d=o=>l.textContent=o.length,f=()=>{let o=localStorage.getItem("listProductLS");return o?(o=JSON.parse(o),d(o),o):[]};export{f as g,d as u};
