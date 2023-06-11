import{_ as I}from"./nuxt-link.3721504b.js";import{a as y,b as f,u as S}from"./entry.9056b07c.js";import{q as p,H as A,I as e,z as s,y as l,O as d,e as w,M as D,J as m,L as h,u as o,P as k,_ as E,$ as L,a8 as U,N as b,a9 as j,V as H,Y as F,aa as Q}from"./swiper-vue.48696f68.js";import{a as x,u as R}from"./cookie.fe519ba8.js";import{_ as M}from"./loader.4643b320.js";const X={__name:"CategoryList",setup(u){let a=f("nav_is_active");return(n,t)=>{const i=I;return p(),A("ul",null,[e("li",null,[s(i,{to:"/games","exact-active-class":"active",onClick:t[0]||(t[0]=()=>{w(a)?a.value=!1:a=!1})},{default:l(()=>[d("All Games")]),_:1})]),e("li",null,[s(i,{to:"/games/slots","exact-active-class":"active",onClick:t[1]||(t[1]=()=>{w(a)?a.value=!1:a=!1})},{default:l(()=>[d("Slot Games")]),_:1})]),e("li",null,[s(i,{to:"/games/fisher","exact-active-class":"active",onClick:t[2]||(t[2]=()=>{w(a)?a.value=!1:a=!1})},{default:l(()=>[d("Fisher Games")]),_:1})]),e("li",null,[s(i,{to:"/games/sabong","exact-active-class":"active",onClick:t[3]||(t[3]=()=>{w(a)?a.value=!1:a=!1})},{default:l(()=>[d("Sabong")]),_:1})]),e("li",null,[s(i,{to:"/games/live","exact-active-class":"active",onClick:t[4]||(t[4]=()=>{w(a)?a.value=!1:a=!1})},{default:l(()=>[d("Live Games")]),_:1})]),e("li",null,[s(i,{to:"/games/sports","exact-active-class":"active",onClick:t[5]||(t[5]=()=>{w(a)?a.value=!1:a=!1})},{default:l(()=>[d("Sports")]),_:1})]),e("li",null,[s(i,{to:"/games/lottery","exact-active-class":"active",onClick:t[6]||(t[6]=()=>{w(a)?a.value=!1:a=!1})},{default:l(()=>[d("Lottery")]),_:1})]),e("li",null,[s(i,{to:"/games/other","exact-active-class":"active",onClick:t[7]||(t[7]=()=>{w(a)?a.value=!1:a=!1})},{default:l(()=>[d("Other Games")]),_:1})])])}}},V=y(X,[["__scopeId","data-v-81704971"]]);const K=u=>(E("data-v-e349418e"),u=u(),L(),u),O={class:"login-modal"},W={class:"login-modal-con"},q=["onSubmit"],z={key:0,style:{color:"#1a1a1a"}},Z=K(()=>e("img",{src:M},null,-1)),J=[Z],$={key:1,class:"error_message"},ee={__name:"Login",setup(u){const a=S(),n=f("login_is_active",()=>!1),t=x("user_info"),i=f("login_message",()=>""),C=f("is_loading",()=>!1);let r={username:"",password:""};function _(){R(`${a.public.baseURL}/api/login`,{method:"POST",body:JSON.stringify(r)},"$cYy7Y6rsRD").then(({data:c})=>{c.value?(i.value=c.value.message,c.value.success==1&&(t.value=c.value,window.location.reload(!0))):console.log("An error occured while trying to login"),C.value=!1}),C.value=!0}return(c,v)=>(p(),A("div",O,[e("div",{class:"login-modal-overlay modal-overlay",onClick:v[0]||(v[0]=()=>{n.value=!1})}),e("div",W,[e("form",{onSubmit:D(_,["prevent"])},[m(e("input",{"onUpdate:modelValue":v[1]||(v[1]=g=>o(r).username=g),placeholder:"Username",type:"text"},null,512),[[h,o(r).username]]),m(e("input",{"onUpdate:modelValue":v[2]||(v[2]=g=>o(r).password=g),placeholder:"Password",type:"password"},null,512),[[h,o(r).password]]),e("button",{onClick:_},"Login"),o(C)?(p(),A("div",z,J)):(p(),A("p",$,k(o(i)),1))],40,q)])]))}},ae=y(ee,[["__scopeId","data-v-e349418e"]]);const te={class:"register-modal"},oe={class:"register-modal-con"},se=["onSubmit"],ie={style:{color:"black"}},ne={class:"error_message"},le={__name:"Register",setup(u){const a=S(),n=f("register_is_active",()=>!1);let t={};const i=f("register_message",()=>"");async function C(){R(`${a.public.baseURL}/api/register`,{method:"POST",body:JSON.stringify(t)},"$gnfCLhiliB").then(({data:r})=>{r.value.success?i.value="You have successfully registered!":i.value="Something went wrong while trying to register your information"})}return(r,_)=>(p(),A("div",te,[e("div",{class:"register-modal-overlay modal-overlay",onClick:_[0]||(_[0]=()=>{n.value=!1})}),e("div",oe,[e("form",{onSubmit:D(C,["prevent"])},[m(e("input",{"onUpdate:modelValue":_[1]||(_[1]=c=>o(t).username=c),placeholder:"Username",type:"text",required:""},null,512),[[h,o(t).username]]),m(e("input",{"onUpdate:modelValue":_[2]||(_[2]=c=>o(t).email=c),placeholder:"Email",type:"email",required:""},null,512),[[h,o(t).email]]),m(e("input",{"onUpdate:modelValue":_[3]||(_[3]=c=>o(t).password=c),placeholder:"Password",type:"password",requuired:""},null,512),[[h,o(t).password]]),m(e("input",{"onUpdate:modelValue":_[4]||(_[4]=c=>o(t).password_confirmation=c),placeholder:"Confirm Password",type:"password",required:""},null,512),[[h,o(t).password_confirmation]]),m(e("input",{"onUpdate:modelValue":_[5]||(_[5]=c=>o(t).phone_number=c),placeholder:"Phone Number",type:"text",required:""},null,512),[[h,o(t).phone_number]]),e("p",ie,k(r.message),1),e("button",{onClick:C},"Register"),e("p",ne,k(o(i)),1)],40,se)])]))}},ce=y(le,[["__scopeId","data-v-8a4c474b"]]);const de={},re={class:"app-categories"};function _e(u,a){const n=V;return p(),A("div",re,[s(n)])}const ue=y(de,[["render",_e]]),B=""+new URL("main_logo.01761af0.jpg",import.meta.url).href;const N=u=>(E("data-v-7f9b0548"),u=u(),L(),u),ve={id:"header"},pe={class:"wrapper"},Ae={class:"header-con"},me={class:"header-logo"},ge={class:"main-logo"},fe=N(()=>e("img",{src:B},null,-1)),Ce={class:"main-nav-mobile"},we={class:"main-nav-mobile-con"},ye={class:"main-nav"},he={key:0},be={key:1},Ue={key:2},ke={key:3},xe={key:4},Ie=N(()=>e("div",{class:"clearfix"},null,-1)),Se={__name:"AppHeader",setup(u){const a=S(),n=f("login_is_active"),t=f("register_is_active"),i=f("nav_is_active",()=>!1),r=x("user_info").value;async function _(){await R(`${a.public.baseURL}/api/logout`,{method:"POST",headers:{Authorization:"Bearer "+r.token}},"$EoeF6FqrXK");const c=x("user_info");c.value=null,window.location.replace("/")}return(c,v)=>{const g=I,P=V,Y=ae,T=ce,G=ue;return p(),A("div",ve,[e("div",pe,[e("div",Ae,[e("div",me,[e("div",ge,[s(g,{to:"/"},{default:l(()=>[fe]),_:1})])]),m(e("div",Ce,[e("div",we,[e("div",{class:"main_nav_mobile_close",onClick:v[0]||(v[0]=()=>{i.value=!o(i)})},"x"),s(P)])],512),[[U,o(i)]]),e("div",{class:"hamburger-menu",onClick:v[1]||(v[1]=()=>{i.value=!o(i)})}),e("div",ye,[e("ul",null,[o(r)?b("",!0):(p(),A("li",he,[s(g,{onClick:v[2]||(v[2]=()=>{n.value=!o(n)})},{default:l(()=>[d("Login")]),_:1}),m(s(Y,null,null,512),[[U,o(n)]])])),o(r)?b("",!0):(p(),A("li",be,[s(g,{onClick:v[3]||(v[3]=()=>{t.value=!o(t)})},{default:l(()=>[d("Register")]),_:1}),m(s(T,null,null,512),[[U,o(t)]])])),o(r)?(p(),A("li",Ue,[s(g,{to:"/profile"},{default:l(()=>[d("Profile")]),_:1})])):b("",!0),o(r)&&o(r).user.type_id==2?(p(),A("li",ke,[s(g,{to:"/admin"},{default:l(()=>[d("Admin Panel")]),_:1})])):b("",!0),o(r)?(p(),A("li",xe,[s(g,{onClick:_},{default:l(()=>[d("Logout")]),_:1})])):b("",!0)])]),Ie])]),s(G)])}}},Re=y(Se,[["__scopeId","data-v-7f9b0548"]]);const De={},Ee={class:"footer-menu"};function Le(u,a){const n=I;return p(),A("div",Ee,[e("ul",null,[e("li",null,[s(n,{"exact-active-class":"active",to:"/"},{default:l(()=>[d("Home")]),_:1})]),e("li",null,[s(n,{"exact-active-class":"active",to:"/games"},{default:l(()=>[d("Games")]),_:1})]),e("li",null,[s(n,{"exact-active-class":"active",to:"/promotion"},{default:l(()=>[d("Promotion")]),_:1})]),e("li",null,[s(n,{"exact-active-class":"active",to:"/member"},{default:l(()=>[d("Member")]),_:1})]),e("li",null,[s(n,{"exact-active-class":"active",to:"/service"},{default:l(()=>[d("Service")]),_:1})])])])}const Ve=y(De,[["render",Le],["__scopeId","data-v-cbe2e826"]]),Be="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADK0lEQVR4nO2Zz08TQRTHNzM0MQHixaMnI2jE4Mmr/4A/okej3r0oAn+AiYke9IYkpDNFDAkRqokHL4bEEzFelIqAJP5IDPvetrXQAhXSsrRjplYMboGdnd0th/0m79TN7Pcz8+bN7KthRIoUKZJUbNg8Qxj0UYZJwnCGcsxTjpv1yBOGH2u/cbNXPmscCCVy7YRDP2XwmXIUSsFgXgIbg9m28I3fFS1yJinDZWXjDhBcIgzvyDHDMR/Hk4RjStv4f0EYThsJOBGodxqHS5RD0W/z9F9arVEOFwMxTxLWDcrBDsw8/xtgE25dD2LmQzCP2xCUwQV/3A+ZHX+WVs9U24glOiey4uzLn6LreVZ0jGfE4afWXhBFud98qDbeN2wLR3H1TV5Mpctis1IVjXR5cnn3jc3hg1Z1qpVKj+YPDVti4vuG2E9X9gCoQcSxx5v70XQr5ZDzCvBwpriveTcA8pyQB6aH2Yd+r+aPjmVEeZeUUQbg8oyAPmUAT9eDevS+W2lotlCuiPupNXFzqrAdx55l9h+TwbySeXnZ0qk4498a5/65VznPY8YS6dOhpI+Mt5myw/zs8qbn8ajqZpbXXp2XzeVtB8DY1w0tAMpwXGEF8JPOyxYKToDHc7/0VoBjSmUFlvwGGNAEoBxyKgDlgweApUAA7k2viXypsiO2GhwBpa2q47l8qSK6X2QDAXCdQo9cnriNVBVCtI9Y/qeQyibWAfhR3ApsEyfDAJiEUkBlVLZHQgAYUNjYhONt1wAxbnarfKgcGU3viC8rzirEFtYdz7U+cZv/KGIs3eUaoL4KswolLtgyyhQvc6ppFDQA4WZvqB80vgIwXPLcvZMds2YDEIa3DK2PeobTzQIgHN4bSUENLfHF45TBavgA4ENbpS7Z7lNpbOkDgE0T5nnDT8l2n1sIPQCwCcNrRhCS7T43XTrPAAxWfZ95hxh0yo6Z3wBEbtghs8MIRbI6xbFnt2u3GgDkaqVSu9p40WC2TZ7YhMOcKoC8qhB5wjblL6YGkpet2qpwnHhtlgqLRbuybleFDLNoVx6kVi15Ja61R4atU832GylSJONg6DekIcfGE7hs2QAAAABJRU5ErkJggg==",Ne="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACwElEQVR4nO2YT4hPURTHr3PmmYU/oSQWdiLlX5KFUogyIvmz8Cf5t8SGrGQWiixFGqWI/Oac22gkZkWyU6SRKAsiJZphfr93zhsy+T2950emZqb3e/e9N5v3qbt7797zPefce889xpSUlJSUlJQkxNbmI+kFZH2NJAGy1oDlObKcMbd19ki/eBVZbFzATt1o2kNwmqQ9hMhIJBlC1nDEQSpAejj+/k7fFCR/O7A+QtKL6Re2XyYjaTXymov9SHJlVMN5+ACSZ8jy848o+WRsdYbDwtr2n4cuGxtis3OAld1JjcfhEen3rC41t6rTsVPWpRIAVo4M8w7L3aY8EoYTkORt88bLELB2AetjJP3qWVmUTgDLsREm/4hW1if5v4WCFam8z3+HfEcbbDFpQQo2j5qrLN2my18wpgNIDzgI6Gshf5VxIj4NVMYIdR1I7kVCTU/YmiiCSTczyy6TBY1zO8mitUbenkAra01XbR6w7E0dgU5/WyYCzI1wErK+ccvlNAJ0g7PtQLIHSPd5FV0GLL1FCvDSnjyj5jDJYGECSOpR5J0FRBdJ4anD8SX2ymQFsDwpXoR0ZCbAs8Hyf7VJcRFoM1mCJDsLE0Hab2w40WRNVBYAy9P8Bcg5kwdIwVa0uglJriHJj5yMHzSVYE5OAvRSAZv3vMkN689E1s85ps4Hc7N/an4Con1QCVYi67ccPP8raYnuTlSkkT7MUgBYPW2KJrofgLQdWB84ps716OVWuIBoUWA9iKQDTsbb5t/ZbvSErWB1P7C+cDC8DqSncvW8R7okSpMW8lej9XcA6UlguY+kvmPKvEOSNSZ3ugemIcvZRgctg2NSq7HXsyiTm6Iis4DkOLC+THXCsPQCydHIIWbcsf5CsHoISa7GZXbU84k7d1KP7weS93E7kKUjbhPawbnjbXJJSUlJSUmJyZHfxnHsrRJKPnUAAAAASUVORK5CYII=",Pe="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADgElEQVR4nO2Z2U8TURTG+U+YO4WiiLSAGEUjKIsKjRKFKGpcHjQUjQuRFhGkfQIhmkqI+4KaoMEIDVpwgRektEiMWFRqXEjEgFUTrdBWEPnMXKG1LIltpTNN+iXnZeZm5vude+42ExISVFBBBSVosSy7hRDSQQixE0Lgp7AzDKMPDQ3d7JN5hmFO+9E0ZgqGYap9yTyv5okLYpPHABNlIxSAdm8AbHwbJ64Y9gbgv7x8UYrMLViRyKvnhPABwLIs1M9HUdj6For7vTRkcYmIFIUHFsDjV32YlOGwBlnzlwQuQI+hC2pJRuACcGo+cQHRoojABeBUW3MdC2LjAxeA9kSnCfLzWqzOVQYmwKTqr95CZUxmYAB8HBjEVBm199CeIOcPgBWFYen6HGQWViLn+BUk79g3K0BfRgnuai5ioP+DMACStuWioLUPKtMPKJp6UNaoR6WmBipJ+owAA2nFkM1bBHnUSjRszEeHsgpdeRX8AGwo0VCDCt0zdPa+c5rsbHwAfYJ8VoCMiDjnM2LD5mNrZAINvwKk7Smg5kq0Roz+HHOraU8AyD/GfwWIiJKgyPCJZn7S/NjYGB7rWtCmuQp9YZWwAdbIC2nNG1++paZGRkbwJLcCX5KKcHvxdhRL1uLQwhThAuw8o4Wyqcdpqv1SHTXPDUy32UmoAHvrDChv1LumwQMnaeantuP2/lMBBoUAsLvmIU43G5ymOpSnaNlMbSdZvpICdE0AOOx22lPpfANsLr8Mja7DCdDdZkBZzPpp7bJU1VCZHLAO22m7Ny/MFGC5eCG/AEtk2SjVunqAU+vNBkQuiKL3ReFirCsoQ6nJgWKt0dnm0dla9CcqIGZF/AKwLIu8ay3T5v87hm7sr9Pj2NNhmnnO/NchG7333Wql24gb8ds8Nk/mYiGLXroC53RtbgB0Pfj1C+b3AxiyOZzXxsfH6TixJB5BqjhGGACEK6VVaTC//rMWzCaHwwF9cTWtfZXU86MkmUsALuKlsag/ewWfLRY349ZvVhhuN8GcpaaZL5Wme22ezPV2OoywyI9OhW7dQXTvKkNvthqW5KN4n6hAbfxWpIilPpkn/jzQcIf1ZLEUy8KjEE5Yn40THwAC+9MiwzB6ARgHFwzDPPIYgPu5wLdx4opsjwEmeqFaAOarvDL/F8Qm7vu8n8eEbeKd3mU+qKCCCirEX/oNpOLqaJHqPIUAAAAASUVORK5CYII=",Ye="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACQ0lEQVR4nO2Yu2sUURjFTyImwSKSCGJja6GoRUDU+b4kapMiYiFpLCyiEV9gaSdCRA2xyT+QIo9GsVGiATHgu1C08IGPShK08RVxCUbYI3fcWXRJnJnM3Z0ZvT84sAyz3z2HOzP33g9wOBwOh+N/gLuwih4208NuKo5TMUDBGAUTFNyn4AUF76j45EswRwV9/fodXDf3PKfgnv9fxSgF56g45tc2Y2xFa3LDQD0FfRRMUVEom6mdCqWxDxKoi2d+PRoomEzBNBfRNbZhefQAggsZMM0KDUQz34EmCr5kwDArNMs2rAgP4KEzA2a5oNqxI0qA3tSN6iIS9EV5/vtTN6oJ3gMKxhMN8vAGuX9DtWbgcpQAtxINYvgxT14aIrtW2g7xJEqAx4kDBMx+IIdOkB31tgLMhAdQvLIWIODlI/LIdhsBvoeuyial9QCGYpGcukjuXZssRBcawx6hz1UJEDD3jRw+Te5sXFr9LWgOm4H5qgYImHlDnuqJX38bVmcjwPRr8mR3/PqCljw/QkX2YFl6L/HkCLlnzdJrK77+1XzmP6OC6douZB/fk4OH7C1kgqc13ko02zGuZd2t/mbuwQS5b51t4yzNwHi+t9OC/nwfaDz05vtI6aHz3z/UGygYzIBhVug8YjW2FNczYJq+TAsyTmPLDwHUUXEg5dbiTf+jEre1uGAgQQvbsZGCbioOU3GGihEqrlBw26ySVLwtN3H/DF347bq55xkVd6i4WmrunqXgqF9bsMlKc9fhcDgcDuSAn9VThUlTulWSAAAAAElFTkSuQmCC";const Te={},Ge={id:"app-footer"},je=j('<div class="wrapper" data-v-ea668d5c><div class="app-footer-con" data-v-ea668d5c><div class="app-footer-col" data-v-ea668d5c><h2 data-v-ea668d5c>About Feria888</h2><ul data-v-ea668d5c><li data-v-ea668d5c><a href="javascript:;" data-v-ea668d5c>About Us</a></li><li data-v-ea668d5c><a href="javascript:;" data-v-ea668d5c>Refund Policy</a></li><li data-v-ea668d5c><a href="javascript:;" data-v-ea668d5c>Privacy Policy</a></li><li data-v-ea668d5c><a href="javascript:;" data-v-ea668d5c>Responsible Gaming</a></li><li data-v-ea668d5c><a href="javascript:;" data-v-ea668d5c>Terms and Conditions</a></li></ul></div><div class="app-footer-col" data-v-ea668d5c><h2 data-v-ea668d5c>Help</h2><ul data-v-ea668d5c><li data-v-ea668d5c><a href="javascript:;" data-v-ea668d5c>Contact Us</a></li><li data-v-ea668d5c><a href="javascript:;" data-v-ea668d5c>FAQ</a></li></ul></div><div class="app-footer-col" data-v-ea668d5c><h2 data-v-ea668d5c>Social</h2><ul class="footer-social" data-v-ea668d5c><li data-v-ea668d5c><a href="javascript:;" data-v-ea668d5c><figure data-v-ea668d5c><img src="'+Be+'" alt="facebook" data-v-ea668d5c></figure></a></li><li data-v-ea668d5c><a href="javascript:;" data-v-ea668d5c><figure data-v-ea668d5c><img src="'+Ne+'" alt="twitter" data-v-ea668d5c></figure></a></li><li data-v-ea668d5c><a href="javascript:;" data-v-ea668d5c><figure data-v-ea668d5c><img src="'+Pe+'" alt="tiktok" data-v-ea668d5c></figure></a></li><li data-v-ea668d5c><a href="javascript:;" data-v-ea668d5c><figure data-v-ea668d5c><img src="'+Ye+'" alt="youtube" data-v-ea668d5c></figure></a></li></ul></div><div class="app-footer-col" data-v-ea668d5c><a href="/" data-v-ea668d5c><figure class="footer-logo" data-v-ea668d5c><img src="'+B+'" alt="feria888 logo" data-v-ea668d5c></figure></a></div></div></div><div class="copyright" data-v-ea668d5c> © Copyright 2023 • Feria 888 </div>',2);function He(u,a){const n=Ve;return p(),A("div",Ge,[je,s(n)])}const Fe=y(Te,[["render",He],["__scopeId","data-v-ea668d5c"]]);const Qe={class:"app"},Me={class:"app-content"},Xe={__name:"default",setup(u){const a=f("is_mounted",()=>!1);return H(()=>{a.value=!0}),(n,t)=>{const i=Re,C=Fe;return p(),A("div",Qe,[m(e("div",{class:Q(["app-con",{animate_out:o(a)}])},[s(i),e("div",Me,[F(n.$slots,"default",{},void 0,!0)]),s(C)],2),[[U,o(a)]])])}}},Ze=y(Xe,[["__scopeId","data-v-aefd2e19"]]);export{Ze as default};
