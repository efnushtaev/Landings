var home=function(e){var n={};function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(o,r,function(n){return e[n]}.bind(null,r));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=19)}([function(e,n,t){e.exports=t.p+"img/mark.png"},function(e,n,t){e.exports=t.p+"img/1.jpg"},function(e,n,t){e.exports=t.p+"img/2.jpg"},function(e,n,t){e.exports=t.p+"img/3.jpg"},function(e,n,t){e.exports=t.p+"img/chanel.png"},function(e,n,t){e.exports=t.p+"img/guerlain.png"},function(e,n,t){e.exports=t.p+"img/lacoste.png"},function(e,n,t){e.exports=t.p+"img/lancome.png"},function(e,n,t){e.exports=t.p+"img/zara.png"},function(e,n,t){e.exports=t.p+"img/dribbble.png"},function(e,n,t){e.exports=t.p+"img/facebook.png"},function(e,n,t){e.exports=t.p+"img/google.png"},function(e,n,t){e.exports=t.p+"img/linkdn.png"},function(e,n,t){e.exports=t.p+"img/twitter.png"},function(e,n,t){e.exports=t.p+"img/mac.png"},function(e,n,t){e.exports=t.p+"img/marketing.png"},function(e,n,t){e.exports=t.p+"img/mobile_app.png"},function(e,n,t){e.exports=t.p+"img/photography.png"},function(e,n,t){e.exports=t.p+"img/web_design.png"},function(e,n,t){"use strict";t.r(n);let o=document.getElementById("myTopnav"),r=document.getElementById("menu"),i=document.querySelector(".contact__form__post"),p=document.querySelector(".statusMessage"),u=function(e,n){e.addEventListener("click",function(){"topnav"===n.className?n.className+=" responsive":n.className="topnav"})},c=function(e,n,t){console.log("загрузил"),n.addEventListener("submit",o=>{o.preventDefault(),console.log("отправил");let r=new XMLHttpRequest;r.open("POST","./server.php"),r.setRequestHeader("Content-Type","application/json; charset=utf-8");let i=new FormData(n),p={};i.forEach(function(e,n){p[n]=e});let u=JSON.stringify(p);r.send(u),r.addEventListener("readystatechange",()=>{r.readyState<4?t.innerHTML=e.loading:200==r.status?t.innerHTML=e.success:t.innerHTML=e.failure})})};t(20),t(1),t(2),t(3),t(4),t(5),t(6),t(7),t(8),t(9),t(10),t(11),t(12),t(13),t(14),t(0),t(15),t(16),t(17),t(18);u(r,o),c({loading:"Loading...",success:"Form is successfully sent! We will call you back!",failure:"Something went wrong!"},i,p)},function(e,n){}]);
//# sourceMappingURL=build.js.map