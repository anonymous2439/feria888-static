import{a as U,b as w,u as k}from"./entry.a3f04bde.js";import{q as i,I as l,J as s,L as p,M as _,u as e,V as v,U as g,W as y,x as V}from"./swiper-vue.f0e207ac.js";import{u as h}from"./fetch.7a19cb91.js";import{u as b}from"./cookie.4560f677.js";const $={class:"cpassword-modal"},x={class:"cpassword-modal-con"},B={__name:"ChangePassword",setup(C){const c=k(),m=w("cpassword_is_active"),r=b("user_info");let t={current_password:"",new_password:"",new_password_confirmation:""};async function a(){const{data:d,pending:n,refresh:o}=await h(`${c.public.baseURL}/api/user/changepassword`,{method:"POST",body:JSON.stringify(t),headers:{Authorization:"Bearer "+r.value.token}},"$hbqUopKmcA");r.value=d.value,console.log(d.value)}return(d,n)=>(i(),l("div",$,[s("div",{class:"cpassword-modal-overlay modal-overlay",onClick:n[0]||(n[0]=()=>{m.value=!1})}),s("div",x,[p(s("input",{"onUpdate:modelValue":n[1]||(n[1]=o=>e(t).current_password=o),placeholder:"Current Password",type:"password"},null,512),[[_,e(t).current_password]]),p(s("input",{"onUpdate:modelValue":n[2]||(n[2]=o=>e(t).new_password=o),placeholder:"New Password",type:"password"},null,512),[[_,e(t).new_password]]),p(s("input",{"onUpdate:modelValue":n[3]||(n[3]=o=>e(t).new_password_confirmation=o),placeholder:"Confirm New Password",type:"password"},null,512),[[_,e(t).new_password_confirmation]]),s("button",{onClick:a},"Submit")])]))}},N=U(B,[["__scopeId","data-v-5dc7729c"]]),S={class:"profile-page"},T={class:"wrapper"},E=s("h2",{class:"page-title"},"User Profile",-1),M={key:0},A={key:0},R={__name:"profile",setup(C){const c=k(),m=b("user_info"),r=w("is_editing_profile",()=>!1),t=w("cpassword_is_active",()=>!1),a=w("profile_form",()=>({email:"",phone_number:""}));m.value?h(`${c.public.baseURL}/api/user/get`,{method:"GET",headers:{Authorization:"Bearer "+m.value.token}},"$62j1b1lrVm").then(o=>{console.log(a.value),console.log(o.data),a.value={email:o.data.value.email,phone_number:o.data.value.phone_number}}).catch(o=>{console.error(o)}):window.location.replace("/");function d(){r.value=!r.value}async function n(){const o=b("user_info");await h(`${c.public.baseURL}/api/user/update`,{method:"POST",headers:{Authorization:"Bearer "+o.value.token},body:JSON.stringify(a.value)},"$BME5qJrpDM"),window.location.reload(!0)}return(o,u)=>{const P=N;return i(),l("div",S,[s("div",T,[E,s("a",{onClick:d},"Edit"),v(),s("a",{onClick:u[0]||(u[0]=f=>t.value=!0)},"Change Password"),s("ul",null,[s("li",null,[v(" Email: "),e(r)==!1?(i(),l("span",M,g(e(a).email),1)):p((i(),l("input",{key:1,"onUpdate:modelValue":u[1]||(u[1]=f=>e(a).email=f)},null,512)),[[_,e(a).email]])]),s("li",null,[v(" Phone Number: "),e(r)==!1?(i(),l("span",A,g(e(a).phone_number),1)):p((i(),l("input",{key:1,"onUpdate:modelValue":u[2]||(u[2]=f=>e(a).phone_number=f)},null,512)),[[_,e(a).phone_number]])])]),e(r)?(i(),l("button",{key:0,onClick:n},"Submit")):y("",!0)]),e(t)?(i(),V(P,{key:0})):y("",!0)])}}};export{R as default};
