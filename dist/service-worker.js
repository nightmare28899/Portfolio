if(!self.define){let e,i={};const s=(s,r)=>(s=new URL(s+".js",r).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(r,c)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(i[n])return;let t={};const f=e=>s(e,n),o={module:{uri:n},exports:t,require:f};i[n]=Promise.all(r.map((e=>o[e]||f(e)))).then((e=>(c(...e),t)))}}define(["./workbox-d249b2c8"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"442.js",revision:"0914d81f641b23344a883fc6adaf7d5b"},{url:"442.js.LICENSE.txt",revision:"6656983fddf3bf9af6fcc82793b599cb"},{url:"index.html",revision:"40467ecea6ff008455d8ebaeba799905"},{url:"main.css",revision:"048ea7c86d9ba7767f2cfdd515cd8975"},{url:"main.js",revision:"bbfc59cd6599805b9caf733a9faa7fc9"},{url:"main.js.LICENSE.txt",revision:"72b07ca501edd9f8c3088ef9584c3479"}],{})}));
