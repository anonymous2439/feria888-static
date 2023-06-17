import{_ as U}from"./nuxt-link.2f34f4ec.js";import{a as C,u as g,b as E}from"./entry.4431de8e.js";import{q as v,H as p,L as e,z as o,y as r,R as c,e as b,I as S,J as I,P as N,M as A,N as w,u as s,O as R,a8 as x,Q as H,a9 as j,X as F,_ as Q,aa as X}from"./swiper-vue.227510cd.js";import{u as L}from"./fetch.9a403d58.js";import{u as D}from"./cookie.5b12b00d.js";import{a as M,_ as B}from"./loader.08a18489.js";const K=n=>(S("data-v-77abec2b"),n=n(),I(),n),O=K(()=>e("li",null,[e("div",{class:"box"},[e("form",{name:"search"},[e("input",{type:"text",placeholder:"Search a Game",class:"input",name:"txt",onmouseout:"this.value = ''; this.blur();"})]),e("i",{class:"fas fa-search"})])],-1)),W={__name:"CategoryList",setup(n){let a=g("nav_is_active");return(d,t)=>{const l=U;return v(),p("ul",null,[e("li",null,[o(l,{to:"/games","exact-active-class":"active",onClick:t[0]||(t[0]=()=>{b(a)?a.value=!1:a=!1})},{default:r(()=>[c("All Games")]),_:1})]),e("li",null,[o(l,{to:"/games/slots","exact-active-class":"active",onClick:t[1]||(t[1]=()=>{b(a)?a.value=!1:a=!1})},{default:r(()=>[c("Slot Games")]),_:1})]),e("li",null,[o(l,{to:"/games/fisher","exact-active-class":"active",onClick:t[2]||(t[2]=()=>{b(a)?a.value=!1:a=!1})},{default:r(()=>[c("Fisher Games")]),_:1})]),e("li",null,[o(l,{to:"/games/sabong","exact-active-class":"active",onClick:t[3]||(t[3]=()=>{b(a)?a.value=!1:a=!1})},{default:r(()=>[c("Sabong")]),_:1})]),e("li",null,[o(l,{to:"/games/live","exact-active-class":"active",onClick:t[4]||(t[4]=()=>{b(a)?a.value=!1:a=!1})},{default:r(()=>[c("Live Games")]),_:1})]),e("li",null,[o(l,{to:"/games/sports","exact-active-class":"active",onClick:t[5]||(t[5]=()=>{b(a)?a.value=!1:a=!1})},{default:r(()=>[c("Sports")]),_:1})]),e("li",null,[o(l,{to:"/games/lottery","exact-active-class":"active",onClick:t[6]||(t[6]=()=>{b(a)?a.value=!1:a=!1})},{default:r(()=>[c("Lottery")]),_:1})]),e("li",null,[o(l,{to:"/games/other","exact-active-class":"active",onClick:t[7]||(t[7]=()=>{b(a)?a.value=!1:a=!1})},{default:r(()=>[c("Other Games")]),_:1})]),O])}}},V=C(W,[["__scopeId","data-v-77abec2b"]]);const P=n=>(S("data-v-fa42fff1"),n=n(),I(),n),q={class:"login-modal"},z={class:"login-modal-con"},Z=["onSubmit"],J={key:0,style:{color:"#1a1a1a"}},$=P(()=>e("img",{src:M},null,-1)),ee=[$],ae={key:1,class:"error_message"},te=P(()=>e("hr",null,null,-1)),se={__name:"Login",setup(n){const a=E(),d=g("login_is_active",()=>!1),t=D("user_info"),l=g("login_message",()=>""),f=g("is_loading",()=>!1);let _={username:"",password:""};function u(){L(`${a.public.baseURL}/api/login`,{method:"POST",body:JSON.stringify(_)},"$cYy7Y6rsRD").then(({data:m})=>{m.value?(l.value=m.value.message,m.value.success==1&&(t.value=m.value,window.location.reload(!0))):console.log("An error occured while trying to login"),f.value=!1}),f.value=!0}return(m,i)=>{const h=U;return v(),p("div",q,[e("div",{class:"login-modal-overlay modal-overlay",onClick:i[0]||(i[0]=()=>{d.value=!1})}),e("div",z,[e("form",{onSubmit:N(u,["prevent"])},[A(e("input",{"onUpdate:modelValue":i[1]||(i[1]=k=>s(_).username=k),placeholder:"Username",type:"text"},null,512),[[w,s(_).username]]),A(e("input",{"onUpdate:modelValue":i[2]||(i[2]=k=>s(_).password=k),placeholder:"Password",type:"password"},null,512),[[w,s(_).password]]),e("button",{onClick:u,class:"btn-input btn-input--login"},"Login"),s(f)?(v(),p("div",J,ee)):(v(),p("p",ae,R(s(l)),1))],40,Z),te,e("div",null,[c(" Forgot "),o(h,{onClick:i[3]||(i[3]=()=>{m.register_is_active=!m.register_is_active}),class:"hover-underline-animation"},{default:r(()=>[c(" Password?")]),_:1})])])])}}},oe=C(se,[["__scopeId","data-v-fa42fff1"]]);const ie=n=>(S("data-v-624a9bb1"),n=n(),I(),n),ne={class:"register-modal"},le={class:"register-modal-con"},de=["onSubmit"],re={style:{color:"black"}},ce={class:"error_message"},ue=ie(()=>e("hr",null,null,-1)),_e={__name:"Register",setup(n){const a=E(),d=g("register_is_active",()=>!1);let t={};const l=g("register_message",()=>"");async function f(){L(`${a.public.baseURL}/api/register`,{method:"POST",body:JSON.stringify(t)},"$gnfCLhiliB").then(({data:_})=>{_.value.success?l.value="You have successfully registered!":l.value="Something went wrong while trying to register your information"})}return(_,u)=>{const m=U;return v(),p("div",ne,[e("div",{class:"register-modal-overlay modal-overlay",onClick:u[0]||(u[0]=()=>{d.value=!1})}),e("div",le,[e("form",{onSubmit:N(f,["prevent"])},[A(e("input",{"onUpdate:modelValue":u[1]||(u[1]=i=>s(t).username=i),placeholder:"Username",type:"text",required:""},null,512),[[w,s(t).username]]),A(e("input",{"onUpdate:modelValue":u[2]||(u[2]=i=>s(t).email=i),placeholder:"Email",type:"email",required:""},null,512),[[w,s(t).email]]),A(e("input",{"onUpdate:modelValue":u[3]||(u[3]=i=>s(t).password=i),placeholder:"Password",type:"password",requuired:""},null,512),[[w,s(t).password]]),A(e("input",{"onUpdate:modelValue":u[4]||(u[4]=i=>s(t).password_confirmation=i),placeholder:"Confirm Password",type:"password",required:""},null,512),[[w,s(t).password_confirmation]]),A(e("input",{"onUpdate:modelValue":u[5]||(u[5]=i=>s(t).phone_number=i),placeholder:"Phone Number",type:"text",required:""},null,512),[[w,s(t).phone_number]]),e("p",re,R(_.message),1),e("button",{onClick:f,class:"btn-input btn-input--register"},"Register"),e("p",ce,R(s(l)),1)],40,de),ue,e("div",null,[c(" Already have an account?"),o(m,{onClick:u[6]||(u[6]=()=>{d.value=!s(d)}),class:"hover-underline-animation"},{default:r(()=>[c("Sign in")]),_:1})])])])}}},ve=C(_e,[["__scopeId","data-v-624a9bb1"]]);const pe={},me={class:"app-categories"};function Ae(n,a){const d=V;return v(),p("div",me,[o(d)])}const ge=C(pe,[["render",Ae]]),fe=""+globalThis.__publicAssetsURL("images/user.png");const y=n=>(S("data-v-4d4b5ec5"),n=n(),I(),n),he={id:"header"},be={class:"wrapper"},Ce={class:"header-con"},we={class:"header-logo"},ye={class:"main-logo"},ke=y(()=>e("img",{src:B},null,-1)),Ue={class:"main-nav-mobile"},xe={class:"main-nav-mobile-con"},Se={class:"nav-mobile-header"},Ie={class:"nav-mobile-main-logo"},Re=y(()=>e("img",{src:B},null,-1)),De=y(()=>e("i",{class:"fa-solid fa-xmark"},null,-1)),Ee=[De],Le=y(()=>e("div",{class:"clearfix"},null,-1)),Be={class:"main-nav"},Ne={key:0},Ve=y(()=>e("img",{src:fe,id:"img-login"},null,-1)),Pe={key:1,class:"user-functions"},Te={key:0},Ye=y(()=>e("div",{class:"clearfix"},null,-1)),Ge={__name:"AppHeader",setup(n){const a=E(),d=g("login_is_active"),t=g("register_is_active"),l=g("nav_is_active",()=>!1),_=D("user_info").value;async function u(){await L(`${a.public.baseURL}/api/logout`,{method:"POST",headers:{Authorization:"Bearer "+_.token}},"$EoeF6FqrXK");const m=D("user_info");m.value=null,window.location.replace("/")}return(m,i)=>{const h=U,k=V,T=oe,Y=ve,G=ge;return v(),p("div",he,[e("div",be,[e("div",Ce,[e("div",we,[e("div",ye,[o(h,{to:"/"},{default:r(()=>[ke]),_:1})])]),A(e("div",Ue,[e("div",xe,[e("div",Se,[e("div",Ie,[o(h,{to:"/"},{default:r(()=>[Re]),_:1})]),e("div",{class:"main_nav_mobile_close",onClick:i[0]||(i[0]=()=>{l.value=!s(l)})},Ee),Le]),o(k)])],512),[[x,s(l)]]),e("div",{class:"hamburger-menu",onClick:i[1]||(i[1]=()=>{l.value=!s(l)})}),e("div",Be,[s(_)?(v(),p("ul",Pe,[e("li",null,[o(h,{to:"/profile"},{default:r(()=>[c("Profile")]),_:1})]),s(_).user.user_type.name=="admin"||s(_).user.user_type.name=="agent"?(v(),p("li",Te,[o(h,{to:"/admin"},{default:r(()=>[c("Admin Panel")]),_:1})])):H("",!0),e("li",null,[o(h,{onClick:u},{default:r(()=>[c("Logout")]),_:1})])])):(v(),p("ul",Ne,[e("li",null,[o(h,{onClick:i[2]||(i[2]=()=>{d.value=!s(d)}),class:"flash-slide flash-slide--login"},{default:r(()=>[Ve,c(" Login")]),_:1}),A(o(T,null,null,512),[[x,s(d)]])]),e("li",null,[o(h,{onClick:i[3]||(i[3]=()=>{t.value=!s(t)}),class:"flash-slide flash-slide--register"},{default:r(()=>[c("Register")]),_:1}),A(o(Y,null,null,512),[[x,s(t)]])])]))]),Ye])]),o(G)])}}},He=C(Ge,[["__scopeId","data-v-4d4b5ec5"]]);const je={},Fe={class:"footer-menu"};function Qe(n,a){const d=U;return v(),p("div",Fe,[e("ul",null,[e("li",null,[o(d,{"exact-active-class":"active",to:"/"},{default:r(()=>[c("Home")]),_:1})]),e("li",null,[o(d,{"exact-active-class":"active",to:"/games"},{default:r(()=>[c("Games")]),_:1})]),e("li",null,[o(d,{"exact-active-class":"active",to:"/promotion"},{default:r(()=>[c("Promotion")]),_:1})]),e("li",null,[o(d,{"exact-active-class":"active",to:"/member"},{default:r(()=>[c("Member")]),_:1})]),e("li",null,[o(d,{"exact-active-class":"active",to:"/service"},{default:r(()=>[c("Service")]),_:1})])])])}const Xe=C(je,[["render",Qe],["__scopeId","data-v-cb322f31"]]),Me="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADK0lEQVR4nO2Zz08TQRTHNzM0MQHixaMnI2jE4Mmr/4A/okej3r0oAn+AiYke9IYkpDNFDAkRqokHL4bEEzFelIqAJP5IDPvetrXQAhXSsrRjplYMboGdnd0th/0m79TN7Pcz8+bN7KthRIoUKZJUbNg8Qxj0UYZJwnCGcsxTjpv1yBOGH2u/cbNXPmscCCVy7YRDP2XwmXIUSsFgXgIbg9m28I3fFS1yJinDZWXjDhBcIgzvyDHDMR/Hk4RjStv4f0EYThsJOBGodxqHS5RD0W/z9F9arVEOFwMxTxLWDcrBDsw8/xtgE25dD2LmQzCP2xCUwQV/3A+ZHX+WVs9U24glOiey4uzLn6LreVZ0jGfE4afWXhBFud98qDbeN2wLR3H1TV5Mpctis1IVjXR5cnn3jc3hg1Z1qpVKj+YPDVti4vuG2E9X9gCoQcSxx5v70XQr5ZDzCvBwpriveTcA8pyQB6aH2Yd+r+aPjmVEeZeUUQbg8oyAPmUAT9eDevS+W2lotlCuiPupNXFzqrAdx55l9h+TwbySeXnZ0qk4498a5/65VznPY8YS6dOhpI+Mt5myw/zs8qbn8ajqZpbXXp2XzeVtB8DY1w0tAMpwXGEF8JPOyxYKToDHc7/0VoBjSmUFlvwGGNAEoBxyKgDlgweApUAA7k2viXypsiO2GhwBpa2q47l8qSK6X2QDAXCdQo9cnriNVBVCtI9Y/qeQyibWAfhR3ApsEyfDAJiEUkBlVLZHQgAYUNjYhONt1wAxbnarfKgcGU3viC8rzirEFtYdz7U+cZv/KGIs3eUaoL4KswolLtgyyhQvc6ppFDQA4WZvqB80vgIwXPLcvZMds2YDEIa3DK2PeobTzQIgHN4bSUENLfHF45TBavgA4ENbpS7Z7lNpbOkDgE0T5nnDT8l2n1sIPQCwCcNrRhCS7T43XTrPAAxWfZ95hxh0yo6Z3wBEbtghs8MIRbI6xbFnt2u3GgDkaqVSu9p40WC2TZ7YhMOcKoC8qhB5wjblL6YGkpet2qpwnHhtlgqLRbuybleFDLNoVx6kVi15Ja61R4atU832GylSJONg6DekIcfGE7hs2QAAAABJRU5ErkJggg==",Ke="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACwElEQVR4nO2YT4hPURTHr3PmmYU/oSQWdiLlX5KFUogyIvmz8Cf5t8SGrGQWiixFGqWI/Oac22gkZkWyU6SRKAsiJZphfr93zhsy+T2950emZqb3e/e9N5v3qbt7797zPefce889xpSUlJSUlJQkxNbmI+kFZH2NJAGy1oDlObKcMbd19ki/eBVZbFzATt1o2kNwmqQ9hMhIJBlC1nDEQSpAejj+/k7fFCR/O7A+QtKL6Re2XyYjaTXymov9SHJlVMN5+ACSZ8jy848o+WRsdYbDwtr2n4cuGxtis3OAld1JjcfhEen3rC41t6rTsVPWpRIAVo4M8w7L3aY8EoYTkORt88bLELB2AetjJP3qWVmUTgDLsREm/4hW1if5v4WCFam8z3+HfEcbbDFpQQo2j5qrLN2my18wpgNIDzgI6Gshf5VxIj4NVMYIdR1I7kVCTU/YmiiCSTczyy6TBY1zO8mitUbenkAra01XbR6w7E0dgU5/WyYCzI1wErK+ccvlNAJ0g7PtQLIHSPd5FV0GLL1FCvDSnjyj5jDJYGECSOpR5J0FRBdJ4anD8SX2ymQFsDwpXoR0ZCbAs8Hyf7VJcRFoM1mCJDsLE0Hab2w40WRNVBYAy9P8Bcg5kwdIwVa0uglJriHJj5yMHzSVYE5OAvRSAZv3vMkN689E1s85ps4Hc7N/an4Con1QCVYi67ccPP8raYnuTlSkkT7MUgBYPW2KJrofgLQdWB84ps716OVWuIBoUWA9iKQDTsbb5t/ZbvSErWB1P7C+cDC8DqSncvW8R7okSpMW8lej9XcA6UlguY+kvmPKvEOSNSZ3ugemIcvZRgctg2NSq7HXsyiTm6Iis4DkOLC+THXCsPQCydHIIWbcsf5CsHoISa7GZXbU84k7d1KP7weS93E7kKUjbhPawbnjbXJJSUlJSUmJyZHfxnHsrRJKPnUAAAAASUVORK5CYII=",Oe="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADgElEQVR4nO2Z2U8TURTG+U+YO4WiiLSAGEUjKIsKjRKFKGpcHjQUjQuRFhGkfQIhmkqI+4KaoMEIDVpwgRektEiMWFRqXEjEgFUTrdBWEPnMXKG1LIltpTNN+iXnZeZm5vude+42ExISVFBBBSVosSy7hRDSQQixE0Lgp7AzDKMPDQ3d7JN5hmFO+9E0ZgqGYap9yTyv5okLYpPHABNlIxSAdm8AbHwbJ64Y9gbgv7x8UYrMLViRyKvnhPABwLIs1M9HUdj6For7vTRkcYmIFIUHFsDjV32YlOGwBlnzlwQuQI+hC2pJRuACcGo+cQHRoojABeBUW3MdC2LjAxeA9kSnCfLzWqzOVQYmwKTqr95CZUxmYAB8HBjEVBm199CeIOcPgBWFYen6HGQWViLn+BUk79g3K0BfRgnuai5ioP+DMACStuWioLUPKtMPKJp6UNaoR6WmBipJ+owAA2nFkM1bBHnUSjRszEeHsgpdeRX8AGwo0VCDCt0zdPa+c5rsbHwAfYJ8VoCMiDjnM2LD5mNrZAINvwKk7Smg5kq0Roz+HHOraU8AyD/GfwWIiJKgyPCJZn7S/NjYGB7rWtCmuQp9YZWwAdbIC2nNG1++paZGRkbwJLcCX5KKcHvxdhRL1uLQwhThAuw8o4Wyqcdpqv1SHTXPDUy32UmoAHvrDChv1LumwQMnaeantuP2/lMBBoUAsLvmIU43G5ymOpSnaNlMbSdZvpICdE0AOOx22lPpfANsLr8Mja7DCdDdZkBZzPpp7bJU1VCZHLAO22m7Ny/MFGC5eCG/AEtk2SjVunqAU+vNBkQuiKL3ReFirCsoQ6nJgWKt0dnm0dla9CcqIGZF/AKwLIu8ay3T5v87hm7sr9Pj2NNhmnnO/NchG7333Wql24gb8ds8Nk/mYiGLXroC53RtbgB0Pfj1C+b3AxiyOZzXxsfH6TixJB5BqjhGGACEK6VVaTC//rMWzCaHwwF9cTWtfZXU86MkmUsALuKlsag/ewWfLRY349ZvVhhuN8GcpaaZL5Wme22ezPV2OoywyI9OhW7dQXTvKkNvthqW5KN4n6hAbfxWpIilPpkn/jzQcIf1ZLEUy8KjEE5Yn40THwAC+9MiwzB6ARgHFwzDPPIYgPu5wLdx4opsjwEmeqFaAOarvDL/F8Qm7vu8n8eEbeKd3mU+qKCCCirEX/oNpOLqaJHqPIUAAAAASUVORK5CYII=",We="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACQ0lEQVR4nO2Yu2sUURjFTyImwSKSCGJja6GoRUDU+b4kapMiYiFpLCyiEV9gaSdCRA2xyT+QIo9GsVGiATHgu1C08IGPShK08RVxCUbYI3fcWXRJnJnM3Z0ZvT84sAyz3z2HOzP33g9wOBwOh+N/gLuwih4208NuKo5TMUDBGAUTFNyn4AUF76j45EswRwV9/fodXDf3PKfgnv9fxSgF56g45tc2Y2xFa3LDQD0FfRRMUVEom6mdCqWxDxKoi2d+PRoomEzBNBfRNbZhefQAggsZMM0KDUQz34EmCr5kwDArNMs2rAgP4KEzA2a5oNqxI0qA3tSN6iIS9EV5/vtTN6oJ3gMKxhMN8vAGuX9DtWbgcpQAtxINYvgxT14aIrtW2g7xJEqAx4kDBMx+IIdOkB31tgLMhAdQvLIWIODlI/LIdhsBvoeuyial9QCGYpGcukjuXZssRBcawx6hz1UJEDD3jRw+Te5sXFr9LWgOm4H5qgYImHlDnuqJX38bVmcjwPRr8mR3/PqCljw/QkX2YFl6L/HkCLlnzdJrK77+1XzmP6OC6douZB/fk4OH7C1kgqc13ko02zGuZd2t/mbuwQS5b51t4yzNwHi+t9OC/nwfaDz05vtI6aHz3z/UGygYzIBhVug8YjW2FNczYJq+TAsyTmPLDwHUUXEg5dbiTf+jEre1uGAgQQvbsZGCbioOU3GGihEqrlBw26ySVLwtN3H/DF347bq55xkVd6i4WmrunqXgqF9bsMlKc9fhcDgcDuSAn9VThUlTulWSAAAAAElFTkSuQmCC";const qe={},ze={id:"app-footer"},Ze=j('<div class="wrapper" data-v-d5155108><div class="app-footer-con" data-v-d5155108><div class="app-footer-col" data-v-d5155108><h2 data-v-d5155108>About Feria888</h2><ul data-v-d5155108><li data-v-d5155108><a href="javascript:;" class="hover-underline-animation" data-v-d5155108>About Us</a></li><li data-v-d5155108><a href="javascript:;" class="hover-underline-animation" data-v-d5155108>Refund Policy</a></li><li data-v-d5155108><a href="javascript:;" class="hover-underline-animation" data-v-d5155108>Privacy Policy</a></li><li data-v-d5155108><a href="javascript:;" class="hover-underline-animation" data-v-d5155108>Responsible Gaming</a></li><li data-v-d5155108><a href="javascript:;" class="hover-underline-animation" data-v-d5155108>Terms and Conditions</a></li></ul></div><div class="app-footer-col" data-v-d5155108><h2 data-v-d5155108>Help</h2><ul data-v-d5155108><li data-v-d5155108><a href="javascript:;" class="hover-underline-animation" data-v-d5155108>Contact Us</a></li><li data-v-d5155108><a href="javascript:;" class="hover-underline-animation" data-v-d5155108>FAQ</a></li></ul></div><div class="app-footer-col" data-v-d5155108><h2 data-v-d5155108>Social</h2><ul class="footer-social" data-v-d5155108><li data-v-d5155108><a href="javascript:;" data-v-d5155108><figure data-v-d5155108><img src="'+Me+'" alt="facebook" data-v-d5155108></figure></a></li><li data-v-d5155108><a href="javascript:;" data-v-d5155108><figure data-v-d5155108><img src="'+Ke+'" alt="twitter" data-v-d5155108></figure></a></li><li data-v-d5155108><a href="javascript:;" data-v-d5155108><figure data-v-d5155108><img src="'+Oe+'" alt="tiktok" data-v-d5155108></figure></a></li><li data-v-d5155108><a href="javascript:;" data-v-d5155108><figure data-v-d5155108><img src="'+We+'" alt="youtube" data-v-d5155108></figure></a></li></ul></div><div class="app-footer-col" data-v-d5155108><a href="/" data-v-d5155108><figure class="footer-logo" data-v-d5155108><img src="'+B+'" alt="feria888 logo" data-v-d5155108></figure></a></div></div></div><div class="copyright" data-v-d5155108> © Copyright 2023 • Feria 888 </div>',2);function Je(n,a){const d=Xe;return v(),p("div",ze,[Ze,o(d)])}const $e=C(qe,[["render",Je],["__scopeId","data-v-d5155108"]]);const ea={class:"app"},aa={class:"app-content"},ta={__name:"default",setup(n){const a=g("is_mounted",()=>!1);return F(()=>{a.value=!0}),(d,t)=>{const l=He,f=$e;return v(),p("div",ea,[A(e("div",{class:X(["app-con",{animate_out:s(a)}])},[o(l),e("div",aa,[Q(d.$slots,"default",{},void 0,!0)]),o(f)],2),[[x,s(a)]])])}}},ra=C(ta,[["__scopeId","data-v-0d2ebfec"]]);export{ra as default};
