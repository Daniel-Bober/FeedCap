import{q as o,D as n,B as r,E as u}from"./entry.4a6f868f.js";const i=async()=>{const{$auth:t}=o();await t.signOut();const e=n(),s=r();e.setStatusToLoggedOut(),s.resetProfile(),u("/")},c=()=>{const{$auth:t}=o();return new Promise((e,s)=>{t.onAuthStateChanged(a=>{if(a)return e(a)})})};export{c as g,i as l};
