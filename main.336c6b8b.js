parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({382:[function(require,module,exports) {
(()=>{const e=document.querySelector("[data-menu-button]"),t=document.querySelector("[data-menu]");e.addEventListener("click",function(){const n="true"===e.getAttribute("aria-expanded")||!1;e.classList.toggle("is-open"),e.setAttribute("aria-expanded",!n),t.classList.toggle("is-open")})})();
},{}],383:[function(require,module,exports) {
(()=>{const e={openModalBtn:document.querySelector("[data-modal-mobile]"),closeModalBtn:document.querySelector("[data-close-mobile]"),modal:document.querySelector("[data-modal-mobile-menu]")};function o(){e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o)})();
},{}],384:[function(require,module,exports) {
(()=>{const e={openModalBtn:document.querySelector("[data-menu-buy]"),closeModalBtn:document.querySelector("[data-close-hero]"),modal:document.querySelector("[data-modal-hero]")};function o(){e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o)})();
},{}],385:[function(require,module,exports) {
(()=>{const o={openModalBtn:document.querySelector("[data-modal-open-products]"),closeModalBtn:document.querySelector("[data-modal-close-products]"),modal:document.querySelector("[data-modal-products]")};function d(){o.modal.classList.toggle("products-modal__hidden")}o.openModalBtn.addEventListener("click",d),o.closeModalBtn.addEventListener("click",d)})();
},{}],386:[function(require,module,exports) {
(()=>{const o={openModalBtn:document.querySelector("[data-modal-open-products-2]"),closeModalBtn:document.querySelector("[data-modal-close-products-2]"),modal:document.querySelector("[data-modal-products-2]")};function d(){o.modal.classList.toggle("products-modal__hidden")}o.openModalBtn.addEventListener("click",d),o.closeModalBtn.addEventListener("click",d)})();
},{}],387:[function(require,module,exports) {
(()=>{const o={openModalBtn:document.querySelector("[data-modal-open-products-3]"),closeModalBtn:document.querySelector("[data-modal-close-products-3]"),modal:document.querySelector("[data-modal-products-3]")};function d(){o.modal.classList.toggle("products-modal__hidden")}o.openModalBtn.addEventListener("click",d),o.closeModalBtn.addEventListener("click",d)})();
},{}],388:[function(require,module,exports) {
(()=>{const e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};function o(){e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o)})();
},{}],389:[function(require,module,exports) {
(()=>{const o={openModalBtn:document.querySelector("[data-contacts-modal-open]"),closeModalBtn:document.querySelector("[data-contacts-modal-close]"),modal:document.querySelector("[data-contacts-modal]")};function t(){o.modal.classList.toggle("is-hidden")}o.openModalBtn.addEventListener("click",t),o.closeModalBtn.addEventListener("click",t)})();
},{}],390:[function(require,module,exports) {
(()=>{const e={openModalBtn:document.querySelector("[data-map-modal-open]"),closeModalBtn:document.querySelector("[data-map-modal-close]"),modal:document.querySelector("[data-map-modal]")};function o(){e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o)})();
},{}],140:[function(require,module,exports) {
"use strict";function e(){document.querySelector(".mobile-menu").classList.remove("is-open"),document.querySelector(".burger").classList.toggle("icon")}require("/js/mobile-menu.js"),require("/js/modal-menu.js"),require("/js/modal-hero.js"),require("/js/products-modal-1.js"),require("/js/products-modal-2.js"),require("/js/products-modal-3.js"),require("/js/modal_about.js"),require("/js/modal-contacts.js"),require("/js/map-modal.js"),document.querySelectorAll(".mobile-menu-link").forEach(o=>{o.onclick=e}),$(".wrapper-slayder").slick({dots:!0,speed:1e3,easing:"ease",autoplay:!0,autoplayspeed:3500,adaptiveHeight:!0,arrows:!1}),$("button.btn-1").click(function(){$(".products-modal-1")[0].contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}',"*")}),$("button.btn-2").click(function(){$(".products-modal-2")[0].contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}',"*")}),$("button.btn-3").click(function(){$(".products-modal-3")[0].contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}',"*")}),jQuery(function(e){e(window).scroll(function(){e(this).scrollTop()>140?e(".header").addClass("header-scroll"):$(this).scrollTop()<140&&e(".header").removeClass("header-scroll")})}),$(document).ready(function(){$(".navigation, .mobile-menu__navigation, .button-scroll").on("click","a",function(e){e.preventDefault();var o=$(this).attr("href"),t=$(o).offset().top+-50;$("body,html").animate({scrollTop:t},1250)})});
},{"/js/mobile-menu.js":382,"/js/modal-menu.js":383,"/js/modal-hero.js":384,"/js/products-modal-1.js":385,"/js/products-modal-2.js":386,"/js/products-modal-3.js":387,"/js/modal_about.js":388,"/js/modal-contacts.js":389,"/js/map-modal.js":390}]},{},[140], null)
//# sourceMappingURL=/Team-proj-demo/main.336c6b8b.map