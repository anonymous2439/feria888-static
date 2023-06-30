import{a as g,b as z,u as U}from"./entry.fb7de827.js";import{u as B}from"./fetch.d9e73cbf.js";import{u as m}from"./cookie.c529037a.js";import{M as D,q as c,H as i,L as e,Q as L,u as n,z as o,y as u,R as d,N as h,I as T,J as H,$ as E}from"./swiper-vue.cf378b39.js";import{_ as G}from"./nuxt-link.c0750364.js";import{_ as J,a as W}from"./loader.7c788079.js";const q={class:"header"},F={class:"header-info"},O={__name:"Header",async setup(a){let s,l;const _=z(),t=m("user_info");let r=t.value;const{data:f,refresh:V}=([s,l]=D(()=>B(`${_.public.baseURL}/api/user/get`,{method:"GET",headers:{Authorization:"Bearer "+r.token}},"$otMoZBYinG")),s=await s,l(),s);t.value.user=f.value;async function v(){await B(`${_.public.baseURL}/api/logout`,{method:"POST",headers:{Authorization:"Bearer "+r.token}},"$1MaMlyJxsn");const p=m("user_info");p.value=null,window.location.replace("/admin")}return(p,le)=>{var x,y,w,$,b,k,N,C,I,S,M,A;return c(),i("div",q,[e("div",F,[e("ul",null,[e("li",null,"Wallet: "+L(((w=(y=(x=n(t))==null?void 0:x.user)==null?void 0:y.wallets)==null?void 0:w.length)>0?(k=(b=($=n(t))==null?void 0:$.user)==null?void 0:b.wallets[0])==null?void 0:k.wallet_balance:0),1),e("li",null,"Coins: "+L(((I=(C=(N=n(t))==null?void 0:N.user)==null?void 0:C.coins)==null?void 0:I.length)>0?(A=(M=(S=n(t))==null?void 0:S.user)==null?void 0:M.coins[0])==null?void 0:A.coin_balance:0),1)])]),e("div",{class:"header-nav"},[e("a",{onClick:v,class:"logout-btn logout-btn--logout"},"Logout")])])}}},P=g(O,[["__scopeId","data-v-c1ca45c8"]]);const R=a=>(T("data-v-650df651"),a=a(),H(),a),Q={class:"main-nav"},Y=R(()=>e("li",null,[e("img",{src:J})],-1)),Z=R(()=>e("hr",null,null,-1)),j={key:0},K={key:1},X={__name:"MainNav",setup(a){const s=m("user_info").value;return s.user.user_type.name=="user"&&window.location.replace("/403"),(l,_)=>{const t=G;return c(),i("div",Q,[e("ul",null,[Y,Z,e("li",null,[o(t,{to:"/","exact-active-class":"active"},{default:u(()=>[d("Website")]),_:1})]),e("li",null,[o(t,{to:"/admin","exact-active-class":"active"},{default:u(()=>[d("Dashboard")]),_:1})]),n(s).user.user_type.name=="admin"?(c(),i("li",j,[o(t,{to:"/admin/users","exact-active-class":"active"},{default:u(()=>[d("Users")]),_:1})])):h("",!0),n(s).user.user_type.name=="admin"?(c(),i("li",K,[o(t,{to:"/admin/agents","exact-active-class":"active"},{default:u(()=>[d("Agents")]),_:1})])):h("",!0),e("li",null,[o(t,{to:"/admin/transfer","exact-active-class":"active"},{default:u(()=>[d("Transfer")]),_:1})])])])}}},ee=g(X,[["__scopeId","data-v-650df651"]]);const te=a=>(T("data-v-c0ad6b78"),a=a(),H(),a),se={class:"app"},ae={class:"admin-con"},oe={class:"content"},ne={key:0,class:"content-loader"},_e=te(()=>e("img",{src:W},null,-1)),ce=[_e],ie={__name:"admin",setup(a){var _,t,r;const s=m("user_info");s.value?((r=(t=(_=s.value)==null?void 0:_.user)==null?void 0:t.user_type)==null?void 0:r.name)!="admin"&&window.location.replace("/"):window.location.replace("/admin/login");const l=U("content_is_loading",()=>!1);return(f,V)=>{const v=P,p=ee;return c(),i("div",se,[e("div",ae,[e("div",oe,[o(v),E(f.$slots,"default",{},void 0,!0),n(l)?(c(),i("div",ne,ce)):h("",!0)]),o(p)])])}}},ve=g(ie,[["__scopeId","data-v-c0ad6b78"]]);export{ve as default};
