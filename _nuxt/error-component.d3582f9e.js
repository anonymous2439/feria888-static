import{_ as a}from"./entry.55f9842f.js";import{q as d,x as f,F as E,G as g,u as s,C as n}from"./swiper-vue.36c1ed57.js";const k={__name:"nuxt-error-page",props:{error:Object},setup(c){const u=c,{error:e}=u;(e.stack||"").split(`
`).splice(1).map(t=>({text:t.replace("webpack:/","").replace(".vue",".js").trim(),internal:t.includes("node_modules")&&!t.includes(".cache")||t.includes("internal")||t.includes("new Promise")})).map(t=>`<span class="stack${t.internal?" internal":""}">${t.text}</span>`).join(`
`);const r=Number(e.statusCode||500),o=r===404,i=e.statusMessage??(o?"Page Not Found":"Internal Server Error"),p=e.message||e.toString(),_=void 0,l=o?n(()=>a(()=>import("./error-404.0bcd9a13.js"),["./error-404.0bcd9a13.js","./nuxt-link.71f56d01.js","./entry.55f9842f.js","./swiper-vue.36c1ed57.js","./swiper-vue.b5b61d6c.css","./entry.2f353702.css","./error-404.23f2309d.css"],import.meta.url).then(t=>t.default||t)):n(()=>a(()=>import("./error-500.fdce2661.js"),["./error-500.fdce2661.js","./entry.55f9842f.js","./swiper-vue.36c1ed57.js","./swiper-vue.b5b61d6c.css","./entry.2f353702.css","./error-500.aa16ed4d.css"],import.meta.url).then(t=>t.default||t));return(t,m)=>(d(),f(s(l),E(g({statusCode:s(r),statusMessage:s(i),description:s(p),stack:s(_)})),null,16))}},h=k;export{h as default};
