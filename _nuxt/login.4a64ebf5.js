import{u as c,b as d}from"./entry.fb7de827.js";import{H as p,L as e,U as u,V as r,u as n,Q as _,W as g,q as f}from"./swiper-vue.cf378b39.js";import{u as b}from"./fetch.d9e73cbf.js";import{u as v}from"./cookie.c529037a.js";const h={class:"admin-login"},w=e("h2",null,"Administrator Login",-1),y=e("br",null,null,-1),S=["onSubmit"],k={class:"login-message"},B={__name:"login",setup(x){const m=d(),a=c("login_message",()=>"");let s={email:"user@email.com",password:"user"};async function l(){b(`${m.public.baseURL}/api/login`,{method:"POST",body:JSON.stringify(s)},"$oSbKwuMXgn").then(({data:t})=>{if(t.value){if(a.value=t.value.message,t.value.success==1){const o=v("user_info");o.value=t.value,window.location.replace("/admin")}}else console.log("An error occured while trying to login")})}return(t,o)=>(f(),p("div",h,[w,y,e("form",{onSubmit:g(l,["prevent"])},[u(e("input",{"onUpdate:modelValue":o[0]||(o[0]=i=>n(s).username=i),placeholder:"Username",type:"text"},null,512),[[r,n(s).username]]),u(e("input",{"onUpdate:modelValue":o[1]||(o[1]=i=>n(s).password=i),placeholder:"Password",type:"password"},null,512),[[r,n(s).password]]),e("button",{onClick:l,class:"btn-input btn-input--login"},"Login"),e("p",k,_(n(a)),1)],40,S)]))}};export{B as default};
