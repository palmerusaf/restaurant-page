!function(){var e={730:function(e,t,n){"use strict";var a=n(379),o=n.n(a),i=n(795),r=n.n(i),c=n(569),s=n.n(c),d=n(565),l=n.n(d),u=n(216),p=n.n(u),m=n(589),f=n.n(m),h=n(380),g={};g.styleTagTransform=f(),g.setAttributes=l(),g.insert=s().bind(null,"head"),g.domAPI=r(),g.insertStyleElement=p(),o()(h.Z,g),h.Z&&h.Z.locals&&h.Z.locals;var x=function(e){e.appendChild(function(){var e=document.createElement("h1");e.classList="home__title",e.textContent="Café Under the";var t=document.createElement("span");return t.classList="home__title home__title--tree",t.textContent="Tree",e.appendChild(t),e}()),e.appendChild(function(){var e=document.createElement("div");e.classList="flex-col home__welcome-container";var t=document.createElement("p");return t.classList="home__welcome-msg",t.textContent="Welcome our website. We specialize in Thai-fusion. Visit us and treat yourself to one of our desserts. We look forward to seeing you. Check out our menu above and feel free to contact us.",e.appendChild(t),e}()),e.appendChild(function(){var e=document.createElement("div");e.classList="flex-col hour";var t=v("Hours");return t.classList.add("hour__title"),e.appendChild(t),e.appendChild(function(){var e=document.createElement("ul");return e.classList="flex-col hour__list",[{day:"Tuesday",hours:"8:00am-5:00pm"},{day:"Wednesday",hours:"8:00am-5:00pm"},{day:"Thursday",hours:"8:00am-5:00pm"},{day:"Friday",hours:"8:00am-5:00pm"},{day:"Saturday",hours:"8:00am-5:00pm"},{day:"Sunday",hours:"8:00am-5:00pm"},{day:"Monday",hours:"closed"}].forEach((function(t){return e.appendChild(function(e){var t=document.createElement("li"),n=document.createElement("span");n.textContent=e.day;var a=document.createElement("span");return a.textContent=e.hours,t.appendChild(n),t.appendChild(a),t.classList="flex-row hour__list-item",t}(t))})),e}()),e}()),e.appendChild(function(){var e,t=document.createElement("div");return t.classList="flex-col location",t.appendChild(v("Location")),t.appendChild(((e=document.createElement("address")).classList="location__address",e.innerHTML="1234 Fake Street<br>Fake City, NA 1234<br>USSAR",e)),t}())};function v(e){var t=document.createElement("h2");return t.classList="home__title-category",t.textContent=e,t}const b=JSON.parse('[{"name":"Bacon and Egg Sandwich","img":"./bacon-egg-sandwich.jpg","altText":"Bacon and Egg Sandwich","description":"Bacon and egg sandwich topped with chopped onions and eggs benedict."},{"name":"BBQ Pork","img":"./BBQ-with-pork.jpg","altText":"BBQ Pork","description":"BBQ pork and ramen served with a side of kimchi and miso soup."},{"name":"Coconut Soup","img":"./coconut-soup.jpg","altText":"Coconut Soup","description":"Chicken, vegetable, and Thai herbs boiled in coconut milk."},{"name":"Seafood Curry","img":"./seafood-curry.jpg","altText":"Seafood Curry","description":"Seafood boiled in mixed coconut curry. Served inside a coconut."},{"name":"Pan Fried Shrimp","img":"./shrimp.jpg","altText":"Pan Fried Shrimp","description":"BBQ shrimp pan-fried in Thai herbs"},{"name":"Spaghetti with Bacon and Egg","img":"./spaghetti-bacon-egg.jpg","altText":"Spaghetti with Bacon and Egg","description":"Bacon and spaghetti served in a creamy alfredo sauce. Topped with a salted egg."},{"name":"Pancakes with Scrambled Eggs","img":"./pancake-egg.jpg","altText":"Pancakes with Scrambled Eggs","description":"Pancakes topped with bananas and whipped cream. Served with a side of scrambled eggs."},{"name":"Bubble Waffle with Icecream","img":"./waffle.jpg","altText":"Bubble Waffle with Icecream","description":"Fried crispy waffle filled with whipped cream, strawberries, and blueberries. Served with a side of icecream."},{"name":"Mixed Berry Cake","img":"./cake.jpg","altText":"Mixed Berry Cake","description":"Vanilla pound cake topped with whipped cream and mixed berries."}]');var _,y={};(_=n(446)).keys().forEach((function(e){return y[e]=_(e)}));var w,C,E,L=function(e){e.appendChild(function(){var e,t=document.createElement("div");return t.classList="flex-col menu",t.appendChild(((e=document.createElement("h1")).classList="home__title menu__title",e.textContent="Menu",e)),t.appendChild(function(){var e=document.createElement("div");return e.classList="flex-col",b.forEach((function(a){e.appendChild(function(e){var a=document.createElement("div");return a.classList="flex-row menu__item-field",b.indexOf(e)%2==0?(a.appendChild(n(e)),a.appendChild(t(e))):(a.appendChild(t(e)),a.appendChild(n(e))),a}(a))})),e;function t(e){var t=document.createElement("div");return t.classList="flex-col",t.appendChild(function(e){var t=document.createElement("h2");return t.classList="home__title-category menu__item-name",t.textContent=e.name,t}(e)),t.appendChild(function(e){var t=document.createElement("div");return t.classList="menu__item-description location__address",t.textContent=e.description,t}(e)),t}function n(e){var t=document.createElement("img");return t.classList="menu__item-img",t.src=y[e.img],t.alt=e.altText,t}}()),t}())},j=n(390),S=n(821),T=n(461);function k(e){var t=document.createElement("li");return t.classList="nav-bar__item","Home"===e&&t.classList.add("nav-bar__item--active"),t.textContent=e,t.addEventListener("click",B),t}function B(e){var t,n=e.target;t=n,document.querySelector(".nav-bar__item--active").classList.remove("nav-bar__item--active"),t.classList.add("nav-bar__item--active"),document.getElementById("content").textContent="",function(e){var t=e.textContent.toLowerCase(),n=document.getElementById("content");switch(t){case"home":x(n);break;case"menu":L(n);break;case"contact":!function(e){e.appendChild(function(){var e,t=document.createElement("div");return t.classList="flex-col contact",t.appendChild(((e=document.createElement("h1")).classList="home__title contact__title",e.textContent="Contact Us",e)),t.appendChild(function(){var e=document.createElement("ul");return e.classList="flex-col contact__field",e.appendChild(t(S,"Call us at 1-800-867-5309")),e.appendChild(t(j,"follow us on Clucker @theRealFakeRestaurant","https://youtu.be/dQw4w9WgXcQ?t=10")),e.appendChild(t(T,"check us out on GitHub","https://github.com/palmerusaf/restaurant-page")),e;function t(e,t,n){var a=document.createElement("li");return a.classList="flex-row home__title-category contact__item",e&&a.appendChild(function(e){var t=document.createElement("img");return t.classList="contact__logo",t.alt="contact logo",t.src=e,t}(e)),n?a.appendChild(function(e,t){var n=document.createElement("a");return n.href=t,n.textContent=e,n}(t,n)):a.innerHTML+=t,a}}()),t}())}(n);break;default:console.log("ERROR: no content module available for "+t+"button.")}}(n)}document.body.appendChild(((C=document.createElement("nav")).appendChild(((w=document.createElement("ul")).classList="flex-row nav-bar",w.appendChild(k("Home")),w.appendChild(k("Menu")),w.appendChild(k("Contact")),w)),C)),document.body.appendChild(((E=document.createElement("div")).classList="flex-col",E.id="content",x(E),E))},380:function(e,t,n){"use strict";n.d(t,{Z:function(){return v}});var a=n(81),o=n.n(a),i=n(645),r=n.n(i),c=n(667),s=n.n(c),d=new URL(n(510),n.b),l=new URL(n(391),n.b),u=new URL(n(871),n.b),p=new URL(n(943),n.b),m=r()(o()),f=s()(d),h=s()(l),g=s()(u),x=s()(p);m.push([e.id,'@font-face{font-family:"MainTitle";src:url('+f+')}@font-face{font-family:"NavAndSmallTitle";src:url('+h+')}@font-face{font-family:"Descriptions";src:url('+g+')}*{box-sizing:border-box;text-decoration:none;margin:0;padding:0;list-style:none;font-family:sans-serif;align-self:center;font-family:"Descriptions"}body{background:url('+x+')}.flex-row{display:flex;flex-direction:row}.flex-col{display:flex;flex-direction:column}.nav-bar{justify-content:end}.nav-bar__item{font-family:"NavAndSmallTitle";font-size:25px;margin-right:16px;padding:16px;user-select:none;cursor:pointer}.nav-bar__item--active,.nav-bar__item:hover{transition:.1s;transform:scale(1.4);text-shadow:5px 2px 2px #969696}.home__title{font-family:"MainTitle";font-size:64px}.home__title--tree{text-shadow:5px 2px 2px #969696;color:green}.home__welcome-container{margin-top:16px;padding:16px 20px;border:#daa520 solid;width:75%;border-radius:10px;box-shadow:2px 2px 2px #969696;text-shadow:2px 2px 2px #000;font-size:32px;text-align:center;color:orange}.home__title-category{font-family:"NavAndSmallTitle";font-size:40px}.hour{margin-bottom:2em;padding-top:2em;align-items:center}.hour__title{border:green solid;border-radius:15px;padding:0px 8px;margin-bottom:8px}.hour__list-item{width:100%;justify-content:space-between;gap:16px;font-size:25px}.location{border:orange solid;padding:.5em 1em;border-radius:15px;margin-left:1em;align-self:start}.location__address{font-size:25px}.menu__title{margin-bottom:.7em}.menu__item-field{width:75%;margin-bottom:3em;gap:2em}.menu__item-img{width:500px;height:281.25px;object-fit:cover;border-radius:15px;outline:#daa520 solid 2px;box-shadow:inset}.menu__item-name{margin:-10px 0px}.contact__item{width:100%}.contact__logo{height:50px;object-fit:scale-down}@media only screen and (max-width: 600px){.nav-bar__item{font-size:20px;padding:8px;margin-right:8px}.home__title{font-size:50px}.home__welcome-container,.hour__list-item,.location__address{font-size:16px;text-shadow:none;color:#000}.home__title-category{font-size:25px}.menu__item-img{width:200px;height:112.5px}.menu__item-name{font-size:20px;margin:-5px 0}.menu__item-field{width:400px;margin-bottom:1.5em;gap:1em}.contact__logo{height:25px}.contact__item{font-size:20px}}@media only screen and (max-width: 400px){.menu__item-img{width:200px;height:112.5px}.menu__item-name{font-size:16px;margin:-5px 0}.menu__item-field{width:95%;margin-bottom:1.5em;gap:.5em}}',""]);const v=m},645:function(e){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",a=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),a&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),a&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,a,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var r={};if(a)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(r[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);a&&r[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},667:function(e){"use strict";e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:function(e){"use strict";e.exports=function(e){return e[1]}},379:function(e){"use strict";var t=[];function n(e){for(var n=-1,a=0;a<t.length;a++)if(t[a].identifier===e){n=a;break}return n}function a(e,a){for(var i={},r=[],c=0;c<e.length;c++){var s=e[c],d=a.base?s[0]+a.base:s[0],l=i[d]||0,u="".concat(d," ").concat(l);i[d]=l+1;var p=n(u),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var f=o(m,a);a.byIndex=c,t.splice(c,0,{identifier:u,updater:f,references:1})}r.push(u)}return r}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var i=a(e=e||[],o=o||{});return function(e){e=e||[];for(var r=0;r<i.length;r++){var c=n(i[r]);t[c].references--}for(var s=a(e,o),d=0;d<i.length;d++){var l=n(i[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}i=s}}},569:function(e){"use strict";var t={};e.exports=function(e,n){var a=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}},216:function(e){"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:function(e,t,n){"use strict";e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:function(e){"use strict";e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var a="";n.supports&&(a+="@supports (".concat(n.supports,") {")),n.media&&(a+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(a+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),a+=n.css,o&&(a+="}"),n.media&&(a+="}"),n.supports&&(a+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(a,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:function(e){"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},446:function(e,t,n){var a={"./BBQ-with-pork.jpg":241,"./bacon-egg-sandwich.jpg":100,"./cake.jpg":562,"./coconut-soup.jpg":453,"./pancake-egg.jpg":425,"./seafood-curry.jpg":414,"./shrimp.jpg":6,"./spaghetti-bacon-egg.jpg":920,"./waffle.jpg":431};function o(e){var t=i(e);return n(t)}function i(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}o.keys=function(){return Object.keys(a)},o.resolve=i,e.exports=o,o.id=446},943:function(e,t,n){"use strict";e.exports=n.p+"d63583275013ee593e18.jpg"},871:function(e,t,n){"use strict";e.exports=n.p+"17a73bceefab9cf7e9f5.ttf"},510:function(e,t,n){"use strict";e.exports=n.p+"da7c1cd869a66eb1188a.ttf"},391:function(e,t,n){"use strict";e.exports=n.p+"82b02b2ef40711b8a1be.ttf"},241:function(e,t,n){"use strict";e.exports=n.p+"609465ac5725777820cd.jpg"},100:function(e,t,n){"use strict";e.exports=n.p+"0e0565b87c4792257b03.jpg"},562:function(e,t,n){"use strict";e.exports=n.p+"5814b2f46aba08f144e6.jpg"},453:function(e,t,n){"use strict";e.exports=n.p+"56f178a27b2074b8aa5c.jpg"},425:function(e,t,n){"use strict";e.exports=n.p+"9d0a9c95f1b96faef4ec.jpg"},414:function(e,t,n){"use strict";e.exports=n.p+"e1c3aefe676cf3eeaef9.jpg"},6:function(e,t,n){"use strict";e.exports=n.p+"711decabeabd3a8edb6b.jpg"},920:function(e,t,n){"use strict";e.exports=n.p+"d81bccec28079d26f8f1.jpg"},431:function(e,t,n){"use strict";e.exports=n.p+"f16023d8e7b2c4665f78.jpg"},390:function(e,t,n){"use strict";e.exports=n.p+"9cb0e171ac1b0484358d.png"},461:function(e,t,n){"use strict";e.exports=n.p+"357c0dc1678ce78b2390.png"},821:function(e,t,n){"use strict";e.exports=n.p+"6a5fb8ecf0f2dc866980.png"}},t={};function n(a){var o=t[a];if(void 0!==o)return o.exports;var i=t[a]={id:a,exports:{}};return e[a](i,i.exports,n),i.exports}n.m=e,n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var a=t.getElementsByTagName("script");a.length&&(e=a[a.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e}(),n.b=document.baseURI||self.location.href,n(730)}();