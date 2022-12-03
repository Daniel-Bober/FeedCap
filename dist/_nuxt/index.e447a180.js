import{a as p,o as a,e as c,f as r,t as w,C as y,m as d,r as P,N as S,J as L,K as k,u as n,h as f,c as B,p as C,l as h,I,E as m,F as N,G as $,H as b}from"./entry.6077f5e8.js";import{u as A}from"./mainStore.bf01849b.js";import{a as V}from"./useFirestore.9d468542.js";import"./useFirebaseAuth.ab7ed384.js";import"./short-unique-id.01c04ed3.js";const M=p({__name:"Button",props:{name:String},setup(e){const t=e,s=A(),o=()=>{s.setProfile(t.name),y("/messages")};return(i,l)=>(a(),c("div",null,[r("button",{class:"profile-button",onClick:o},w(t.name),1)]))}});const E=d(M,[["__scopeId","data-v-ef93a16d"]]),g=e=>(C("data-v-6dea9aca"),e=e(),h(),e),F={class:"profiles-slider"},T=g(()=>r("path",{d:"M0.574176 1.91428C2.12636 3.31366 4.59041 5.5352 6.49713 7.25453L7.92545 8.54256L8.2469 8.83248C8.46243 9.02534 8.56946 9.27895 8.56946 9.53257C8.56946 9.78618 8.46243 10.0398 8.2469 10.2327C8.14572 10.3239 8.03908 10.4214 7.92606 10.5233L5.05034 13.1146L0.582055 17.1435C0.204454 17.5277 0.222494 18.1197 0.636177 18.4924C0.851706 18.6865 1.13321 18.7843 1.41326 18.7843C1.6933 18.7856 1.97041 18.6905 2.183 18.5003C2.183 18.5003 8.78231 12.5495 11.3525 10.2327C11.5681 10.0398 11.6751 9.78618 11.6751 9.53257C11.6751 9.27895 11.5681 9.02534 11.3525 8.83248C8.78378 6.51559 2.18594 0.567492 2.18594 0.567492C1.97334 0.375959 1.6933 0.280853 1.41326 0.280853C1.13322 0.282174 0.851708 0.378602 0.636178 0.572777C0.22641 0.941946 0.206167 1.52744 0.574176 1.91428Z"},null,-1)),Z=[T],D=g(()=>r("path",{d:"M0.574176 1.91428C2.12636 3.31366 4.59041 5.5352 6.49713 7.25453L7.92545 8.54256L8.2469 8.83248C8.46243 9.02534 8.56946 9.27895 8.56946 9.53257C8.56946 9.78618 8.46243 10.0398 8.2469 10.2327C8.14572 10.3239 8.03908 10.4214 7.92606 10.5233L5.05034 13.1146L0.582055 17.1435C0.204454 17.5277 0.222494 18.1197 0.636177 18.4924C0.851706 18.6865 1.13321 18.7843 1.41326 18.7843C1.6933 18.7856 1.97041 18.6905 2.183 18.5003C2.183 18.5003 8.78231 12.5495 11.3525 10.2327C11.5681 10.0398 11.6751 9.78618 11.6751 9.53257C11.6751 9.27895 11.5681 9.02534 11.3525 8.83248C8.78378 6.51559 2.18594 0.567492 2.18594 0.567492C1.97334 0.375959 1.6933 0.280853 1.41326 0.280853C1.13322 0.282174 0.851708 0.378602 0.636178 0.572777C0.22641 0.941946 0.206167 1.52744 0.574176 1.91428Z"},null,-1)),G=[D],H=p({__name:"Slider",props:{profiles:Array},setup(e){const t=e,s=P(0),o=S(()=>{const _=[];for(;t.profiles.length;)_.push(t.profiles.splice(0,3));return _});function i(){s.value+=1}function l(){s.value-=1}return(_,u)=>{const v=E;return a(),c("div",F,[(a(!0),c(L,null,k(n(o)[n(s)],x=>(a(),B(v,{name:x},null,8,["name"]))),256)),n(s)>0?(a(),c("svg",{key:0,class:"left-arrow-icon",onClick:l,width:"18",height:"30",viewBox:"0 0 12 19",xmlns:"http://www.w3.org/2000/svg"},Z)):f("",!0),n(o).length>1&&n(s)+1<n(o).length?(a(),c("svg",{key:1,class:"right-arrow-icon",onClick:i,width:"18",height:"30",viewBox:"0 0 12 19",xmlns:"http://www.w3.org/2000/svg"},G)):f("",!0)])}}});const J=d(H,[["__scopeId","data-v-6dea9aca"]]),K=e=>(C("data-v-e51f9d2c"),e=e(),h(),e),j={class:"profiles-page"},q=K(()=>r("span",{class:"header"},"Choose profile",-1)),z={class:"selection-profiles-area"},O=p({__name:"index",async setup(e){let t,s;const o=([t,s]=I(()=>V()),t=await t,s(),t);return(i,l)=>{const _=J,u=$;return a(),c("div",j,[q,r("div",z,[m(_,{profiles:n(o)},null,8,["profiles"])]),m(u,{class:"add-button",to:"/profiles/new-profile"},{default:N(()=>[b("New profile")]),_:1})])}}});const Y=d(O,[["__scopeId","data-v-e51f9d2c"]]);export{Y as default};
