import{a as E,r as d,O as V,P as p,o as h,e as w,f as o,u as t,t as S,h as L,w as x,v,j as k,i as b,F as u,G as _,H as W,I as m,p as B,l as M,m as D}from"./entry.959975eb.js";import{_ as F}from"./login_icon.ac253b47.js";const g=a=>(B("data-v-a861321c"),a=a(),M(),a),G={class:"login-page"},P={class:"login-section"},R=g(()=>o("span",{class:"header"},"Log in",-1)),T={key:0,class:"errorMessage"},U={class:"login-options"},j=g(()=>o("label",{class:"check-box-wrap"},[o("input",{class:"check-box",id:"check-box",type:"checkbox",checked:""}),m(" Remember me ")],-1)),z=g(()=>o("img",{src:F,alt:"login icon"},null,-1)),H=E({__name:"index",setup(a){d();const n=d(),l=d(),r=V(),y="wrong email",C="wrong password",f=p(()=>{var s,e;return(s=r.error)!=null&&s.endsWith("found")?y:(e=r.error)!=null&&e.endsWith("password")?C:null}),I=p(()=>{var s;return(s=r.error)!=null&&s.endsWith("found")?"email-input error":"email-input"}),N=p(()=>{var s;return(s=r.error)!=null&&s.endsWith("password")?"password-input error":"password-input"});return(s,e)=>{const i=W;return h(),w("div",G,[o("div",P,[R,t(f)?(h(),w("span",T,S(t(f)),1)):L("",!0),x(o("input",{class:k(t(I)),"onUpdate:modelValue":e[0]||(e[0]=c=>b(n)?n.value=c:null),type:"email",placeholder:"Email"},null,2),[[v,t(n)]]),x(o("input",{class:k(t(N)),"onUpdate:modelValue":e[1]||(e[1]=c=>b(l)?l.value=c:null),type:"password",placeholder:"Password"},null,2),[[v,t(l)]]),o("div",U,[j,u(i,{to:"/forgot-password"},{default:_(()=>[m("Forgot password")]),_:1})]),u(i,{class:"login-icon",onClick:e[2]||(e[2]=()=>{})},{default:_(()=>[z]),_:1}),u(i,{class:"signup-btn",to:"/signup"},{default:_(()=>[m("Sign up")]),_:1})])])}}});const A=D(H,[["__scopeId","data-v-a861321c"]]);export{A as default};
