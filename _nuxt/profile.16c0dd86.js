import{a as U,b as p,u as k}from"./entry.5165a849.js";import{q as l,I as u,J as s,L as _,M as c,u as e,V as v,U as g,W as y,x as V}from"./swiper-vue.f0e207ac.js";import{u as h}from"./fetch.bad56ed4.js";import{u as b}from"./cookie.8c3e84de.js";const $={class:"cpassword-modal"},x={class:"cpassword-modal-con"},B={__name:"ChangePassword",setup(C){const m=k(),f=p("cpassword_is_active"),i=b("user_info");let n={current_password:"",new_password:"",new_password_confirmation:""};async function t(){const{data:d,pending:a,refresh:o}=await h(`${m.public.baseURL}/api/user/changepassword`,{method:"POST",body:JSON.stringify(n),headers:{Authorization:"Bearer "+i.value.token}},"$hbqUopKmcA");i.value=d.value,console.log(d.value)}return(d,a)=>(l(),u("div",$,[s("div",{class:"cpassword-modal-overlay modal-overlay",onClick:a[0]||(a[0]=()=>{f.value=!1})}),s("div",x,[_(s("input",{"onUpdate:modelValue":a[1]||(a[1]=o=>e(n).current_password=o),placeholder:"Current Password",type:"password"},null,512),[[c,e(n).current_password]]),_(s("input",{"onUpdate:modelValue":a[2]||(a[2]=o=>e(n).new_password=o),placeholder:"New Password",type:"password"},null,512),[[c,e(n).new_password]]),_(s("input",{"onUpdate:modelValue":a[3]||(a[3]=o=>e(n).new_password_confirmation=o),placeholder:"Confirm New Password",type:"password"},null,512),[[c,e(n).new_password_confirmation]]),s("button",{onClick:t},"Submit")])]))}},N=U(B,[["__scopeId","data-v-5dc7729c"]]),S={class:"profile-page"},T={class:"wrapper"},E=s("h2",{class:"page-title"},"User Profile",-1),M={key:0},A={key:0},R={__name:"profile",setup(C){const m=k(),f=b("user_info"),i=p("is_editing_profile",()=>!1),n=p("cpassword_is_active",()=>!1),t=p("profile_form",()=>({email:"",phone_number:""}));f.value?h(`${m.public.baseURL}/api/user/get`,{method:"GET",headers:{Authorization:"Bearer "+f.value.token}},"$62j1b1lrVm").then(o=>{const r=p("profile_form",()=>{});r.value={email:o.data.value.email,phone_number:o.data.value.phone_number},console.log(r)}).catch(o=>{console.error(o)}):window.location.replace("/");function d(){i.value=!i.value}async function a(){const o=b("user_info");await h(`${m.public.baseURL}/api/user/update`,{method:"POST",headers:{Authorization:"Bearer "+o.value.token},body:JSON.stringify(t.value)},"$BME5qJrpDM"),window.location.reload(!0)}return(o,r)=>{const P=N;return l(),u("div",S,[s("div",T,[E,s("a",{onClick:d},"Edit"),v(),s("a",{onClick:r[0]||(r[0]=w=>n.value=!0)},"Change Password"),s("ul",null,[s("li",null,[v(" Email: "),e(i)==!1?(l(),u("span",M,g(e(t).email),1)):_((l(),u("input",{key:1,"onUpdate:modelValue":r[1]||(r[1]=w=>e(t).email=w)},null,512)),[[c,e(t).email]])]),s("li",null,[v(" Phone Number: "),e(i)==!1?(l(),u("span",A,g(e(t).phone_number),1)):_((l(),u("input",{key:1,"onUpdate:modelValue":r[2]||(r[2]=w=>e(t).phone_number=w)},null,512)),[[c,e(t).phone_number]])])]),e(i)?(l(),u("button",{key:0,onClick:a},"Submit")):y("",!0)]),e(n)?(l(),V(P,{key:0})):y("",!0)])}}};export{R as default};
