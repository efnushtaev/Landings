var home=function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=20)}([function(e,t,n){e.exports=n.p+"./../img/card_1.jpg"},function(e,t,n){e.exports=n.p+"./../img/card_2.jpg"},function(e,t,n){e.exports=n.p+"./../img/card_3.jpg"},function(e,t,n){e.exports=n.p+"./../img/our_works_bg.png"},function(e,t,n){e.exports=n.p+"./../img/1_ellips.png"},function(e,t,n){e.exports=n.p+"./../img/2_ellips.png"},function(e,t,n){e.exports=n.p+"./../img/3_ellips.png"},function(e,t,n){e.exports=n.p+"./../img/AMZ-TATOO.png"},function(e,t,n){e.exports=n.p+"./../img/banner-1.jpg"},function(e,t,n){e.exports=n.p+"./../img/email.png"},function(e,t,n){e.exports=n.p+"./../img/our__team__1.jpg"},function(e,t,n){e.exports=n.p+"./../img/our__team__2.jpg"},function(e,t,n){e.exports=n.p+"./../img/our__team__3.jpg"},function(e,t,n){e.exports=n.p+"./../img/phone.png"},function(e,t,n){e.exports=n.p+"./../img/pic_1.jpg"},function(e,t,n){e.exports=n.p+"./../img/pic_2.jpg"},function(e,t,n){e.exports=n.p+"./../img/pic_3.jpg"},function(e,t,n){e.exports=n.p+"./../img/pic_4.jpg"},function(e,t,n){e.exports=n.p+"./../img/pic_5.jpg"},function(e,t,n){e.exports=n.p+"./../img/pic_6.jpg"},function(e,t,n){"use strict";n.r(t);let o=document.getElementById("nav"),i=document.getElementById("menu"),r=document.querySelector(".purchase__contact"),a=document.querySelector(".statusMessage"),s=document.querySelectorAll(".modal-btn"),c=document.querySelectorAll(".modal"),l=document.querySelectorAll(".modal__inner"),u=function(e,t){e.addEventListener("click",function(){"header__nav"===t.className?t.className+=" responsive":t.className="header__nav"})},p=function(e,t,n){t.addEventListener("submit",o=>{o.preventDefault();let i=new XMLHttpRequest;i.open("POST","./server.php"),i.setRequestHeader("Content-Type","application/json; charset=utf-8");let r=new FormData(t),a={};r.forEach(function(e,t){a[t]=e});let s=JSON.stringify(a);i.send(s),i.addEventListener("readystatechange",()=>{i.readyState<4?n.innerHTML=e.loading:200==i.status?n.innerHTML=e.success:n.innerHTML=e.failure})})},d=function(e,t,n){for(let o=0;o<e.length;o++){let i=document.createElement("div"),r=document.createElement("div");i.classList.add("modal__layout"),r.classList.add("modal__close"),t[o].append(i),n[o].append(r),r.innerHTML="X",e[o].addEventListener("click",e=>{e.preventDefault(),t[o].classList.remove("modal"),t[o].classList.add("modal--active"),document.body.style.overflow="hidden",setTimeout(()=>{i.classList.add("modal__layout--active"),i.classList.remove("modal__layout"),n[o].classList.add("modal__inner--active"),n[o].classList.remove("modal__inner")},100)}),r.addEventListener("click",()=>{event.preventDefault(),i.classList.remove("modal__layout--active"),i.classList.add("modal__layout"),n[o].classList.remove("modal__inner--active"),n[o].classList.add("modal__inner"),setTimeout(()=>{t[o].classList.add("modal"),t[o].classList.remove("modal--active"),document.body.style.overflow=""},300)})}};n(21),n(27),n(4),n(5),n(6),n(7),n(8),n(0),n(1),n(2),n(9),n(10),n(11),n(12),n(3),n(13),n(14),n(15),n(16),n(17),n(18),n(19);u(i,o),p({loading:"Loading...",success:"Form is successfully sent! We will call you back!",failure:"Something went wrong!"},r,a),d(s,c,l)},function(e,t){},,,,,,function(e,t){}]);
//# sourceMappingURL=build.js.map