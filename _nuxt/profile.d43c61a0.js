import{a as V,b as v,u as P}from"./entry.039fec12.js";import{q as r,I as u,J as s,L as c,M as m,u as o,H as $,V as h,U as k,W as C,x as B}from"./swiper-vue.f0e207ac.js";import{u as b}from"./fetch.662af84c.js";import{u as y}from"./cookie.87e487ab.js";const N={class:"cpassword-modal"},S={class:"cpassword-modal-con"},T={__name:"ChangePassword",setup(U){const d=P(),f=v("cpassword_is_active"),_=y("user_info");let a={current_password:"",new_password:"",new_password_confirmation:""};async function i(){const{data:p,pending:e,refresh:t}=await b(`${d.public.baseURL}/api/user/changepassword`,{method:"POST",body:JSON.stringify(a),headers:{Authorization:"Bearer "+_.value.token}},"$hbqUopKmcA");_.value=p.value,console.log(p.value)}return(p,e)=>(r(),u("div",N,[s("div",{class:"cpassword-modal-overlay modal-overlay",onClick:e[0]||(e[0]=()=>{f.value=!1})}),s("div",S,[c(s("input",{"onUpdate:modelValue":e[1]||(e[1]=t=>o(a).current_password=t),placeholder:"Current Password",type:"password"},null,512),[[m,o(a).current_password]]),c(s("input",{"onUpdate:modelValue":e[2]||(e[2]=t=>o(a).new_password=t),placeholder:"New Password",type:"password"},null,512),[[m,o(a).new_password]]),c(s("input",{"onUpdate:modelValue":e[3]||(e[3]=t=>o(a).new_password_confirmation=t),placeholder:"Confirm New Password",type:"password"},null,512),[[m,o(a).new_password_confirmation]]),s("button",{onClick:i},"Submit")])]))}},E=V(T,[["__scopeId","data-v-5dc7729c"]]),A={class:"profile-page"},M={class:"wrapper"},D=s("h2",{class:"page-title"},"User Profile",-1),J={key:0},L={key:0},F={__name:"profile",async setup(U){let d,f;const _=P(),a=y("user_info"),i=v("is_editing_profile",()=>!1),p=v("cpassword_is_active",()=>!1),e=v("profile_form",()=>null);if(a.value){const{data:w,pending:l,refresh:g}=([d,f]=$(()=>b(`${_.public.baseURL}/api/user/get`,{method:"GET",headers:{Authorization:"Bearer "+a.value.token}},"$62j1b1lrVm")),d=await d,f(),d),n=w.value;e.value={email:n!==null?n.email:"",phone_number:n!==null?n.phone_number:""}}else window.location.replace("/");function t(){i.value=!i.value}async function x(){const w=y("user_info");await b(`${_.public.baseURL}/api/user/update`,{method:"POST",headers:{Authorization:"Bearer "+w.value.token},body:JSON.stringify(e.value)},"$BME5qJrpDM"),window.location.reload(!0)}return(w,l)=>{const g=E;return r(),u("div",A,[s("div",M,[D,s("a",{onClick:t},"Edit"),h(),s("a",{onClick:l[0]||(l[0]=n=>p.value=!0)},"Change Password"),s("ul",null,[s("li",null,[h(" Email: "),o(i)==!1?(r(),u("span",J,k(o(e).email),1)):c((r(),u("input",{key:1,"onUpdate:modelValue":l[1]||(l[1]=n=>o(e).email=n)},null,512)),[[m,o(e).email]])]),s("li",null,[h(" Phone Number: "),o(i)==!1?(r(),u("span",L,k(o(e).phone_number),1)):c((r(),u("input",{key:1,"onUpdate:modelValue":l[2]||(l[2]=n=>o(e).phone_number=n)},null,512)),[[m,o(e).phone_number]])])]),o(i)?(r(),u("button",{key:0,onClick:x},"Submit")):C("",!0)]),o(p)?(r(),B(g,{key:0})):C("",!0)])}}};export{F as default};
