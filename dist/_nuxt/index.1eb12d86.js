import{a as I,r as c,N as d,e as h,f as o,u as t,t as V,h as S,w,v as x,j as v,i as k,E as u,F as _,G as L,p as W,l as B,H as m,o as b,m as M}from"./entry.6077f5e8.js";import{u as D}from"./short-unique-id.01c04ed3.js";import"./mainStore.bf01849b.js";import{_ as F}from"./login_icon.ac253b47.js";const g=r=>(W("data-v-a861321c"),r=r(),B(),r),G={class:"login-page"},R={class:"login-section"},T=g(()=>o("span",{class:"header"},"Log in",-1)),U={key:0,class:"errorMessage"},j={class:"login-options"},z=g(()=>o("label",{class:"check-box-wrap"},[o("input",{class:"check-box",id:"check-box",type:"checkbox",checked:""}),m(" Remember me ")],-1)),H=g(()=>o("img",{src:F,alt:"login icon"},null,-1)),P=I({__name:"index",setup(r){c();const n=c(),l=c(),a=D(),N="wrong email",y="wrong password",f=d(()=>{var s,e;return(s=a.error)!=null&&s.endsWith("found")?N:(e=a.error)!=null&&e.endsWith("password")?y:null}),C=d(()=>{var s;return(s=a.error)!=null&&s.endsWith("found")?"email-input error":"email-input"}),E=d(()=>{var s;return(s=a.error)!=null&&s.endsWith("password")?"password-input error":"password-input"});return(s,e)=>{const i=L;return b(),h("div",G,[o("div",R,[T,t(f)?(b(),h("span",U,V(t(f)),1)):S("",!0),w(o("input",{class:v(t(C)),"onUpdate:modelValue":e[0]||(e[0]=p=>k(n)?n.value=p:null),type:"email",placeholder:"Email"},null,2),[[x,t(n)]]),w(o("input",{class:v(t(E)),"onUpdate:modelValue":e[1]||(e[1]=p=>k(l)?l.value=p:null),type:"password",placeholder:"Password"},null,2),[[x,t(l)]]),o("div",j,[z,u(i,{to:"/forgot-password"},{default:_(()=>[m("Forgot password")]),_:1})]),u(i,{class:"login-icon",onClick:e[2]||(e[2]=()=>{})},{default:_(()=>[H]),_:1}),u(i,{class:"signup-btn",to:"/signup"},{default:_(()=>[m("Sign up")]),_:1})])])}}});const O=M(P,[["__scopeId","data-v-a861321c"]]);export{O as default};
