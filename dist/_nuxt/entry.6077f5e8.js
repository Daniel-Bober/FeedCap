function Ml(t,e){const n=Object.create(null),s=t.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}function Zo(t){if(Z(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=Pe(s)?uw(s):Zo(s);if(r)for(const i in r)e[i]=r[i]}return e}else{if(Pe(t))return t;if(Se(t))return t}}const aw=/;(?![^(]*\))/g,cw=/:([^]+)/,lw=/\/\*.*?\*\//gs;function uw(t){const e={};return t.replace(lw,"").split(aw).forEach(n=>{if(n){const s=n.split(cw);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function ea(t){let e="";if(Pe(t))e=t;else if(Z(t))for(let n=0;n<t.length;n++){const s=ea(t[n]);s&&(e+=s+" ")}else if(Se(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function h1(t){if(!t)return null;let{class:e,style:n}=t;return e&&!Pe(e)&&(t.class=ea(e)),n&&(t.style=Zo(n)),t}const hw="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",fw=Ml(hw);function gp(t){return!!t||t===""}const f1=t=>Pe(t)?t:t==null?"":Z(t)||Se(t)&&(t.toString===vp||!re(t.toString))?JSON.stringify(t,mp,2):String(t),mp=(t,e)=>e&&e.__v_isRef?mp(t,e.value):js(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:yp(e)?{[`Set(${e.size})`]:[...e.values()]}:Se(e)&&!Z(e)&&!wp(e)?String(e):e,Ce={},Bs=[],jt=()=>{},dw=()=>!1,pw=/^on[^a-z]/,vi=t=>pw.test(t),xl=t=>t.startsWith("onUpdate:"),Qe=Object.assign,Ul=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},gw=Object.prototype.hasOwnProperty,pe=(t,e)=>gw.call(t,e),Z=Array.isArray,js=t=>ta(t)==="[object Map]",yp=t=>ta(t)==="[object Set]",re=t=>typeof t=="function",Pe=t=>typeof t=="string",Fl=t=>typeof t=="symbol",Se=t=>t!==null&&typeof t=="object",$l=t=>Se(t)&&re(t.then)&&re(t.catch),vp=Object.prototype.toString,ta=t=>vp.call(t),mw=t=>ta(t).slice(8,-1),wp=t=>ta(t)==="[object Object]",Vl=t=>Pe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ur=Ml(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),na=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},yw=/-(\w)/g,nn=na(t=>t.replace(yw,(e,n)=>n?n.toUpperCase():"")),vw=/\B([A-Z])/g,mr=na(t=>t.replace(vw,"-$1").toLowerCase()),sa=na(t=>t.charAt(0).toUpperCase()+t.slice(1)),Xa=na(t=>t?`on${sa(t)}`:""),Jr=(t,e)=>!Object.is(t,e),Hs=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Eo=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Ys=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let yh;const ww=()=>yh||(yh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let zt;class Ep{constructor(e=!1){this.detached=e,this.active=!0,this.effects=[],this.cleanups=[],this.parent=zt,!e&&zt&&(this.index=(zt.scopes||(zt.scopes=[])).push(this)-1)}run(e){if(this.active){const n=zt;try{return zt=this,e()}finally{zt=n}}}on(){zt=this}off(){zt=this.parent}stop(e){if(this.active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this.active=!1}}}function _p(t){return new Ep(t)}function Ew(t,e=zt){e&&e.active&&e.effects.push(t)}const Bl=t=>{const e=new Set(t);return e.w=0,e.n=0,e},bp=t=>(t.w&Gn)>0,Tp=t=>(t.n&Gn)>0,_w=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Gn},bw=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const r=e[s];bp(r)&&!Tp(r)?r.delete(t):e[n++]=r,r.w&=~Gn,r.n&=~Gn}e.length=n}},Oc=new WeakMap;let Nr=0,Gn=1;const Pc=30;let Bt;const gs=Symbol(""),Lc=Symbol("");class jl{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Ew(this,s)}run(){if(!this.active)return this.fn();let e=Bt,n=Bn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Bt,Bt=this,Bn=!0,Gn=1<<++Nr,Nr<=Pc?_w(this):vh(this),this.fn()}finally{Nr<=Pc&&bw(this),Gn=1<<--Nr,Bt=this.parent,Bn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Bt===this?this.deferStop=!0:this.active&&(vh(this),this.onStop&&this.onStop(),this.active=!1)}}function vh(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Bn=!0;const Ip=[];function yr(){Ip.push(Bn),Bn=!1}function vr(){const t=Ip.pop();Bn=t===void 0?!0:t}function Dt(t,e,n){if(Bn&&Bt){let s=Oc.get(t);s||Oc.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=Bl()),Cp(r)}}function Cp(t,e){let n=!1;Nr<=Pc?Tp(t)||(t.n|=Gn,n=!bp(t)):n=!t.has(Bt),n&&(t.add(Bt),Bt.deps.push(t))}function gn(t,e,n,s,r,i){const o=Oc.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&Z(t)){const c=Ys(s);o.forEach((l,u)=>{(u==="length"||u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":Z(t)?Vl(n)&&a.push(o.get("length")):(a.push(o.get(gs)),js(t)&&a.push(o.get(Lc)));break;case"delete":Z(t)||(a.push(o.get(gs)),js(t)&&a.push(o.get(Lc)));break;case"set":js(t)&&a.push(o.get(gs));break}if(a.length===1)a[0]&&Mc(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);Mc(Bl(c))}}function Mc(t,e){const n=Z(t)?t:[...t];for(const s of n)s.computed&&wh(s);for(const s of n)s.computed||wh(s)}function wh(t,e){(t!==Bt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Tw=Ml("__proto__,__v_isRef,__isVue"),Sp=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Fl)),Iw=Hl(),Cw=Hl(!1,!0),Sw=Hl(!0),Eh=Aw();function Aw(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=ge(this);for(let i=0,o=this.length;i<o;i++)Dt(s,"get",i+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(ge)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){yr();const s=ge(this)[e].apply(this,n);return vr(),s}}),t}function Hl(t=!1,e=!1){return function(s,r,i){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&i===(t?e?Hw:Dp:e?Np:Rp).get(s))return s;const o=Z(s);if(!t&&o&&pe(Eh,r))return Reflect.get(Eh,r,i);const a=Reflect.get(s,r,i);return(Fl(r)?Sp.has(r):Tw(r))||(t||Dt(s,"get",r),e)?a:Re(a)?o&&Vl(r)?a:a.value:Se(a)?t?Op(a):Ht(a):a}}const kw=Ap(),Rw=Ap(!0);function Ap(t=!1){return function(n,s,r,i){let o=n[s];if(Zs(o)&&Re(o)&&!Re(r))return!1;if(!t&&(!_o(r)&&!Zs(r)&&(o=ge(o),r=ge(r)),!Z(n)&&Re(o)&&!Re(r)))return o.value=r,!0;const a=Z(n)&&Vl(s)?Number(s)<n.length:pe(n,s),c=Reflect.set(n,s,r,i);return n===ge(i)&&(a?Jr(r,o)&&gn(n,"set",s,r):gn(n,"add",s,r)),c}}function Nw(t,e){const n=pe(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&gn(t,"delete",e,void 0),s}function Dw(t,e){const n=Reflect.has(t,e);return(!Fl(e)||!Sp.has(e))&&Dt(t,"has",e),n}function Ow(t){return Dt(t,"iterate",Z(t)?"length":gs),Reflect.ownKeys(t)}const kp={get:Iw,set:kw,deleteProperty:Nw,has:Dw,ownKeys:Ow},Pw={get:Sw,set(t,e){return!0},deleteProperty(t,e){return!0}},Lw=Qe({},kp,{get:Cw,set:Rw}),ql=t=>t,ra=t=>Reflect.getPrototypeOf(t);function Ki(t,e,n=!1,s=!1){t=t.__v_raw;const r=ge(t),i=ge(e);n||(e!==i&&Dt(r,"get",e),Dt(r,"get",i));const{has:o}=ra(r),a=s?ql:n?zl:Yr;if(o.call(r,e))return a(t.get(e));if(o.call(r,i))return a(t.get(i));t!==r&&t.get(e)}function Wi(t,e=!1){const n=this.__v_raw,s=ge(n),r=ge(t);return e||(t!==r&&Dt(s,"has",t),Dt(s,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function zi(t,e=!1){return t=t.__v_raw,!e&&Dt(ge(t),"iterate",gs),Reflect.get(t,"size",t)}function _h(t){t=ge(t);const e=ge(this);return ra(e).has.call(e,t)||(e.add(t),gn(e,"add",t,t)),this}function bh(t,e){e=ge(e);const n=ge(this),{has:s,get:r}=ra(n);let i=s.call(n,t);i||(t=ge(t),i=s.call(n,t));const o=r.call(n,t);return n.set(t,e),i?Jr(e,o)&&gn(n,"set",t,e):gn(n,"add",t,e),this}function Th(t){const e=ge(this),{has:n,get:s}=ra(e);let r=n.call(e,t);r||(t=ge(t),r=n.call(e,t)),s&&s.call(e,t);const i=e.delete(t);return r&&gn(e,"delete",t,void 0),i}function Ih(){const t=ge(this),e=t.size!==0,n=t.clear();return e&&gn(t,"clear",void 0,void 0),n}function Gi(t,e){return function(s,r){const i=this,o=i.__v_raw,a=ge(o),c=e?ql:t?zl:Yr;return!t&&Dt(a,"iterate",gs),o.forEach((l,u)=>s.call(r,c(l),c(u),i))}}function Qi(t,e,n){return function(...s){const r=this.__v_raw,i=ge(r),o=js(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=r[t](...s),u=n?ql:e?zl:Yr;return!e&&Dt(i,"iterate",c?Lc:gs),{next(){const{value:h,done:f}=l.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function An(t){return function(...e){return t==="delete"?!1:this}}function Mw(){const t={get(i){return Ki(this,i)},get size(){return zi(this)},has:Wi,add:_h,set:bh,delete:Th,clear:Ih,forEach:Gi(!1,!1)},e={get(i){return Ki(this,i,!1,!0)},get size(){return zi(this)},has:Wi,add:_h,set:bh,delete:Th,clear:Ih,forEach:Gi(!1,!0)},n={get(i){return Ki(this,i,!0)},get size(){return zi(this,!0)},has(i){return Wi.call(this,i,!0)},add:An("add"),set:An("set"),delete:An("delete"),clear:An("clear"),forEach:Gi(!0,!1)},s={get(i){return Ki(this,i,!0,!0)},get size(){return zi(this,!0)},has(i){return Wi.call(this,i,!0)},add:An("add"),set:An("set"),delete:An("delete"),clear:An("clear"),forEach:Gi(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Qi(i,!1,!1),n[i]=Qi(i,!0,!1),e[i]=Qi(i,!1,!0),s[i]=Qi(i,!0,!0)}),[t,n,e,s]}const[xw,Uw,Fw,$w]=Mw();function Kl(t,e){const n=e?t?$w:Fw:t?Uw:xw;return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(pe(n,r)&&r in s?n:s,r,i)}const Vw={get:Kl(!1,!1)},Bw={get:Kl(!1,!0)},jw={get:Kl(!0,!1)},Rp=new WeakMap,Np=new WeakMap,Dp=new WeakMap,Hw=new WeakMap;function qw(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Kw(t){return t.__v_skip||!Object.isExtensible(t)?0:qw(mw(t))}function Ht(t){return Zs(t)?t:Wl(t,!1,kp,Vw,Rp)}function Ww(t){return Wl(t,!1,Lw,Bw,Np)}function Op(t){return Wl(t,!0,Pw,jw,Dp)}function Wl(t,e,n,s,r){if(!Se(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=Kw(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function hn(t){return Zs(t)?hn(t.__v_raw):!!(t&&t.__v_isReactive)}function Zs(t){return!!(t&&t.__v_isReadonly)}function _o(t){return!!(t&&t.__v_isShallow)}function Pp(t){return hn(t)||Zs(t)}function ge(t){const e=t&&t.__v_raw;return e?ge(e):t}function er(t){return Eo(t,"__v_skip",!0),t}const Yr=t=>Se(t)?Ht(t):t,zl=t=>Se(t)?Op(t):t;function Lp(t){Bn&&Bt&&(t=ge(t),Cp(t.dep||(t.dep=Bl())))}function Mp(t,e){t=ge(t),t.dep&&Mc(t.dep)}function Re(t){return!!(t&&t.__v_isRef===!0)}function fn(t){return xp(t,!1)}function xc(t){return xp(t,!0)}function xp(t,e){return Re(t)?t:new zw(t,e)}class zw{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ge(e),this._value=n?e:Yr(e)}get value(){return Lp(this),this._value}set value(e){const n=this.__v_isShallow||_o(e)||Zs(e);e=n?e:ge(e),Jr(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Yr(e),Mp(this))}}function ft(t){return Re(t)?t.value:t}const Gw={get:(t,e,n)=>ft(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return Re(r)&&!Re(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function Up(t){return hn(t)?t:new Proxy(t,Gw)}function Qw(t){const e=Z(t)?new Array(t.length):{};for(const n in t)e[n]=ia(t,n);return e}class Xw{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}}function ia(t,e,n){const s=t[e];return Re(s)?s:new Xw(t,e,n)}var Fp;class Jw{constructor(e,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Fp]=!1,this._dirty=!0,this.effect=new jl(e,()=>{this._dirty||(this._dirty=!0,Mp(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const e=ge(this);return Lp(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}Fp="__v_isReadonly";function Yw(t,e,n=!1){let s,r;const i=re(t);return i?(s=t,r=jt):(s=t.get,r=t.set),new Jw(s,r,i||!r,n)}function jn(t,e,n,s){let r;try{r=s?t(...s):t()}catch(i){wr(i,e,n)}return r}function Ut(t,e,n,s){if(re(t)){const i=jn(t,e,n,s);return i&&$l(i)&&i.catch(o=>{wr(o,e,n)}),i}const r=[];for(let i=0;i<t.length;i++)r.push(Ut(t[i],e,n,s));return r}function wr(t,e,n,s=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){jn(c,null,10,[t,o,a]);return}}Zw(t,n,r,s)}function Zw(t,e,n,s=!0){console.error(t)}let Zr=!1,Uc=!1;const et=[];let Qt=0;const qs=[];let an=null,ls=0;const $p=Promise.resolve();let Gl=null;function As(t){const e=Gl||$p;return t?e.then(this?t.bind(this):t):e}function eE(t){let e=Qt+1,n=et.length;for(;e<n;){const s=e+n>>>1;ei(et[s])<t?e=s+1:n=s}return e}function oa(t){(!et.length||!et.includes(t,Zr&&t.allowRecurse?Qt+1:Qt))&&(t.id==null?et.push(t):et.splice(eE(t.id),0,t),Vp())}function Vp(){!Zr&&!Uc&&(Uc=!0,Gl=$p.then(jp))}function tE(t){const e=et.indexOf(t);e>Qt&&et.splice(e,1)}function Bp(t){Z(t)?qs.push(...t):(!an||!an.includes(t,t.allowRecurse?ls+1:ls))&&qs.push(t),Vp()}function Ch(t,e=Zr?Qt+1:0){for(;e<et.length;e++){const n=et[e];n&&n.pre&&(et.splice(e,1),e--,n())}}function bo(t){if(qs.length){const e=[...new Set(qs)];if(qs.length=0,an){an.push(...e);return}for(an=e,an.sort((n,s)=>ei(n)-ei(s)),ls=0;ls<an.length;ls++)an[ls]();an=null,ls=0}}const ei=t=>t.id==null?1/0:t.id,nE=(t,e)=>{const n=ei(t)-ei(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function jp(t){Uc=!1,Zr=!0,et.sort(nE);const e=jt;try{for(Qt=0;Qt<et.length;Qt++){const n=et[Qt];n&&n.active!==!1&&jn(n,null,14)}}finally{Qt=0,et.length=0,bo(),Zr=!1,Gl=null,(et.length||qs.length)&&jp()}}function sE(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||Ce;let r=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=s[u]||Ce;f&&(r=n.map(d=>Pe(d)?d.trim():d)),h&&(r=n.map(Ys))}let a,c=s[a=Xa(e)]||s[a=Xa(nn(e))];!c&&i&&(c=s[a=Xa(mr(e))]),c&&Ut(c,t,6,r);const l=s[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Ut(l,t,6,r)}}function Hp(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!re(t)){const c=l=>{const u=Hp(l,e,!0);u&&(a=!0,Qe(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(Se(t)&&s.set(t,null),null):(Z(i)?i.forEach(c=>o[c]=null):Qe(o,i),Se(t)&&s.set(t,o),o)}function aa(t,e){return!t||!vi(e)?!1:(e=e.slice(2).replace(/Once$/,""),pe(t,e[0].toLowerCase()+e.slice(1))||pe(t,mr(e))||pe(t,e))}let ze=null,ca=null;function To(t){const e=ze;return ze=t,ca=t&&t.type.__scopeId||null,e}function d1(t){ca=t}function p1(){ca=null}function Ql(t,e=ze,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&xh(-1);const i=To(e);let o;try{o=t(...r)}finally{To(i),s._d&&xh(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Ja(t){const{type:e,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:f,setupState:d,ctx:m,inheritAttrs:E}=t;let C,v;const p=To(t);try{if(n.shapeFlag&4){const T=r||s;C=Lt(u.call(T,T,h,i,d,f,m)),v=c}else{const T=e;C=Lt(T.length>1?T(i,{attrs:c,slots:a,emit:l}):T(i,null)),v=e.props?c:iE(c)}}catch(T){Vr.length=0,wr(T,t,1),C=De(ct)}let w=C;if(v&&E!==!1){const T=Object.keys(v),{shapeFlag:k}=w;T.length&&k&7&&(o&&T.some(xl)&&(v=oE(v,o)),w=mn(w,v))}return n.dirs&&(w=mn(w),w.dirs=w.dirs?w.dirs.concat(n.dirs):n.dirs),n.transition&&(w.transition=n.transition),C=w,To(p),C}function rE(t){let e;for(let n=0;n<t.length;n++){const s=t[n];if(sr(s)){if(s.type!==ct||s.children==="v-if"){if(e)return;e=s}}else return}return e}const iE=t=>{let e;for(const n in t)(n==="class"||n==="style"||vi(n))&&((e||(e={}))[n]=t[n]);return e},oE=(t,e)=>{const n={};for(const s in t)(!xl(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function aE(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?Sh(s,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==s[f]&&!aa(l,f))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Sh(s,o,l):!0:!!o;return!1}function Sh(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!aa(n,i))return!0}return!1}function Xl({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const qp=t=>t.__isSuspense,cE={name:"Suspense",__isSuspense:!0,process(t,e,n,s,r,i,o,a,c,l){t==null?lE(e,n,s,r,i,o,a,c,l):uE(t,e,n,s,r,o,a,c,l)},hydrate:hE,create:Jl,normalize:fE},Kp=cE;function ti(t,e){const n=t.props&&t.props[e];re(n)&&n()}function lE(t,e,n,s,r,i,o,a,c){const{p:l,o:{createElement:u}}=c,h=u("div"),f=t.suspense=Jl(t,r,s,e,h,n,i,o,a,c);l(null,f.pendingBranch=t.ssContent,h,null,s,f,i,o),f.deps>0?(ti(t,"onPending"),ti(t,"onFallback"),l(null,t.ssFallback,e,n,s,null,i,o),Ks(f,t.ssFallback)):f.resolve()}function uE(t,e,n,s,r,i,o,a,{p:c,um:l,o:{createElement:u}}){const h=e.suspense=t.suspense;h.vnode=e,e.el=t.el;const f=e.ssContent,d=e.ssFallback,{activeBranch:m,pendingBranch:E,isInFallback:C,isHydrating:v}=h;if(E)h.pendingBranch=f,Xt(f,E)?(c(E,f,h.hiddenContainer,null,r,h,i,o,a),h.deps<=0?h.resolve():C&&(c(m,d,n,s,r,null,i,o,a),Ks(h,d))):(h.pendingId++,v?(h.isHydrating=!1,h.activeBranch=E):l(E,r,h),h.deps=0,h.effects.length=0,h.hiddenContainer=u("div"),C?(c(null,f,h.hiddenContainer,null,r,h,i,o,a),h.deps<=0?h.resolve():(c(m,d,n,s,r,null,i,o,a),Ks(h,d))):m&&Xt(f,m)?(c(m,f,n,s,r,h,i,o,a),h.resolve(!0)):(c(null,f,h.hiddenContainer,null,r,h,i,o,a),h.deps<=0&&h.resolve()));else if(m&&Xt(f,m))c(m,f,n,s,r,h,i,o,a),Ks(h,f);else if(ti(e,"onPending"),h.pendingBranch=f,h.pendingId++,c(null,f,h.hiddenContainer,null,r,h,i,o,a),h.deps<=0)h.resolve();else{const{timeout:p,pendingId:w}=h;p>0?setTimeout(()=>{h.pendingId===w&&h.fallback(d)},p):p===0&&h.fallback(d)}}function Jl(t,e,n,s,r,i,o,a,c,l,u=!1){const{p:h,m:f,um:d,n:m,o:{parentNode:E,remove:C}}=l,v=Ys(t.props&&t.props.timeout),p={vnode:t,parent:e,parentComponent:n,isSVG:o,container:s,hiddenContainer:r,anchor:i,deps:0,pendingId:0,timeout:typeof v=="number"?v:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:u,isUnmounted:!1,effects:[],resolve(w=!1){const{vnode:T,activeBranch:k,pendingBranch:M,pendingId:R,effects:b,parentComponent:U,container:B}=p;if(p.isHydrating)p.isHydrating=!1;else if(!w){const ne=k&&M.transition&&M.transition.mode==="out-in";ne&&(k.transition.afterLeave=()=>{R===p.pendingId&&f(M,B,j,0)});let{anchor:j}=p;k&&(j=m(k),d(k,U,p,!0)),ne||f(M,B,j,0)}Ks(p,M),p.pendingBranch=null,p.isInFallback=!1;let z=p.parent,$=!1;for(;z;){if(z.pendingBranch){z.effects.push(...b),$=!0;break}z=z.parent}$||Bp(b),p.effects=[],ti(T,"onResolve")},fallback(w){if(!p.pendingBranch)return;const{vnode:T,activeBranch:k,parentComponent:M,container:R,isSVG:b}=p;ti(T,"onFallback");const U=m(k),B=()=>{!p.isInFallback||(h(null,w,R,U,M,null,b,a,c),Ks(p,w))},z=w.transition&&w.transition.mode==="out-in";z&&(k.transition.afterLeave=B),p.isInFallback=!0,d(k,M,null,!0),z||B()},move(w,T,k){p.activeBranch&&f(p.activeBranch,w,T,k),p.container=w},next(){return p.activeBranch&&m(p.activeBranch)},registerDep(w,T){const k=!!p.pendingBranch;k&&p.deps++;const M=w.vnode.el;w.asyncDep.catch(R=>{wr(R,w,0)}).then(R=>{if(w.isUnmounted||p.isUnmounted||p.pendingId!==w.suspenseId)return;w.asyncResolved=!0;const{vnode:b}=w;Hc(w,R,!1),M&&(b.el=M);const U=!M&&w.subTree.el;T(w,b,E(M||w.subTree.el),M?null:m(w.subTree),p,o,c),U&&C(U),Xl(w,b.el),k&&--p.deps===0&&p.resolve()})},unmount(w,T){p.isUnmounted=!0,p.activeBranch&&d(p.activeBranch,n,w,T),p.pendingBranch&&d(p.pendingBranch,n,w,T)}};return p}function hE(t,e,n,s,r,i,o,a,c){const l=e.suspense=Jl(e,s,n,t.parentNode,document.createElement("div"),null,r,i,o,a,!0),u=c(t,l.pendingBranch=e.ssContent,n,l,i,o);return l.deps===0&&l.resolve(),u}function fE(t){const{shapeFlag:e,children:n}=t,s=e&32;t.ssContent=Ah(s?n.default:n),t.ssFallback=s?Ah(n.fallback):De(ct)}function Ah(t){let e;if(re(t)){const n=nr&&t._c;n&&(t._d=!1,vs()),t=t(),n&&(t._d=!0,e=xt,hg())}return Z(t)&&(t=rE(t)),t=Lt(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function Wp(t,e){e&&e.pendingBranch?Z(t)?e.effects.push(...t):e.effects.push(t):Bp(t)}function Ks(t,e){t.activeBranch=e;const{vnode:n,parentComponent:s}=t,r=n.el=e.el;s&&s.subTree===n&&(s.vnode.el=r,Xl(s,r))}function Ws(t,e){if(Ue){let n=Ue.provides;const s=Ue.parent&&Ue.parent.provides;s===n&&(n=Ue.provides=Object.create(s)),n[t]=e}}function pt(t,e,n=!1){const s=Ue||ze;if(s){const r=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&re(e)?e.call(s.proxy):e}}function dE(t,e){return Yl(t,null,e)}const Xi={};function ms(t,e,n){return Yl(t,e,n)}function Yl(t,e,{immediate:n,deep:s,flush:r,onTrack:i,onTrigger:o}=Ce){const a=Ue;let c,l=!1,u=!1;if(Re(t)?(c=()=>t.value,l=_o(t)):hn(t)?(c=()=>t,s=!0):Z(t)?(u=!0,l=t.some(w=>hn(w)||_o(w)),c=()=>t.map(w=>{if(Re(w))return w.value;if(hn(w))return hs(w);if(re(w))return jn(w,a,2)})):re(t)?e?c=()=>jn(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),Ut(t,a,3,[f])}:c=jt,e&&s){const w=c;c=()=>hs(w())}let h,f=w=>{h=v.onStop=()=>{jn(w,a,4)}},d;if(rr)if(f=jt,e?n&&Ut(e,a,3,[c(),u?[]:void 0,f]):c(),r==="sync"){const w=a_();d=w.__watcherHandles||(w.__watcherHandles=[])}else return jt;let m=u?new Array(t.length).fill(Xi):Xi;const E=()=>{if(!!v.active)if(e){const w=v.run();(s||l||(u?w.some((T,k)=>Jr(T,m[k])):Jr(w,m)))&&(h&&h(),Ut(e,a,3,[w,m===Xi?void 0:u&&m[0]===Xi?[]:m,f]),m=w)}else v.run()};E.allowRecurse=!!e;let C;r==="sync"?C=E:r==="post"?C=()=>qe(E,a&&a.suspense):(E.pre=!0,a&&(E.id=a.uid),C=()=>oa(E));const v=new jl(c,C);e?n?E():m=v.run():r==="post"?qe(v.run.bind(v),a&&a.suspense):v.run();const p=()=>{v.stop(),a&&a.scope&&Ul(a.scope.effects,v)};return d&&d.push(p),p}function pE(t,e,n){const s=this.proxy,r=Pe(t)?t.includes(".")?zp(s,t):()=>s[t]:t.bind(s,s);let i;re(e)?i=e:(i=e.handler,n=e);const o=Ue;Qn(this);const a=Yl(r,i.bind(s),n);return o?Qn(o):Hn(),a}function zp(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function hs(t,e){if(!Se(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Re(t))hs(t.value,e);else if(Z(t))for(let n=0;n<t.length;n++)hs(t[n],e);else if(yp(t)||js(t))t.forEach(n=>{hs(n,e)});else if(wp(t))for(const n in t)hs(t[n],e);return t}function gE(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ua(()=>{t.isMounted=!0}),Ei(()=>{t.isUnmounting=!0}),t}const Pt=[Function,Array],mE={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Pt,onEnter:Pt,onAfterEnter:Pt,onEnterCancelled:Pt,onBeforeLeave:Pt,onLeave:Pt,onAfterLeave:Pt,onLeaveCancelled:Pt,onBeforeAppear:Pt,onAppear:Pt,onAfterAppear:Pt,onAppearCancelled:Pt},setup(t,{slots:e}){const n=Cn(),s=gE();let r;return()=>{const i=e.default&&Xp(e.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const E of i)if(E.type!==ct){o=E;break}}const a=ge(t),{mode:c}=a;if(s.isLeaving)return Ya(o);const l=kh(o);if(!l)return Ya(o);const u=Fc(l,a,s,n);Io(l,u);const h=n.subTree,f=h&&kh(h);let d=!1;const{getTransitionKey:m}=l.type;if(m){const E=m();r===void 0?r=E:E!==r&&(r=E,d=!0)}if(f&&f.type!==ct&&(!Xt(l,f)||d)){const E=Fc(f,a,s,n);if(Io(f,E),c==="out-in")return s.isLeaving=!0,E.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&n.update()},Ya(o);c==="in-out"&&l.type!==ct&&(E.delayLeave=(C,v,p)=>{const w=Qp(s,f);w[String(f.key)]=f,C._leaveCb=()=>{v(),C._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=p})}return o}}},Gp=mE;function Qp(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function Fc(t,e,n,s){const{appear:r,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:h,onLeave:f,onAfterLeave:d,onLeaveCancelled:m,onBeforeAppear:E,onAppear:C,onAfterAppear:v,onAppearCancelled:p}=e,w=String(t.key),T=Qp(n,t),k=(b,U)=>{b&&Ut(b,s,9,U)},M=(b,U)=>{const B=U[1];k(b,U),Z(b)?b.every(z=>z.length<=1)&&B():b.length<=1&&B()},R={mode:i,persisted:o,beforeEnter(b){let U=a;if(!n.isMounted)if(r)U=E||a;else return;b._leaveCb&&b._leaveCb(!0);const B=T[w];B&&Xt(t,B)&&B.el._leaveCb&&B.el._leaveCb(),k(U,[b])},enter(b){let U=c,B=l,z=u;if(!n.isMounted)if(r)U=C||c,B=v||l,z=p||u;else return;let $=!1;const ne=b._enterCb=j=>{$||($=!0,j?k(z,[b]):k(B,[b]),R.delayedLeave&&R.delayedLeave(),b._enterCb=void 0)};U?M(U,[b,ne]):ne()},leave(b,U){const B=String(t.key);if(b._enterCb&&b._enterCb(!0),n.isUnmounting)return U();k(h,[b]);let z=!1;const $=b._leaveCb=ne=>{z||(z=!0,U(),ne?k(m,[b]):k(d,[b]),b._leaveCb=void 0,T[B]===t&&delete T[B])};T[B]=t,f?M(f,[b,$]):$()},clone(b){return Fc(b,e,n,s)}};return R}function Ya(t){if(wi(t))return t=mn(t),t.children=null,t}function kh(t){return wi(t)?t.children?t.children[0]:void 0:t}function Io(t,e){t.shapeFlag&6&&t.component?Io(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Xp(t,e=!1,n){let s=[],r=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===ht?(o.patchFlag&128&&r++,s=s.concat(Xp(o.children,e,a))):(e||o.type!==ct)&&s.push(a!=null?mn(o,{key:a}):o)}if(r>1)for(let i=0;i<s.length;i++)s[i].patchFlag=-2;return s}function Tn(t){return re(t)?{setup:t,name:t.name}:t}const ys=t=>!!t.type.__asyncLoader;function yE(t){re(t)&&(t={loader:t});const{loader:e,loadingComponent:n,errorComponent:s,delay:r=200,timeout:i,suspensible:o=!0,onError:a}=t;let c=null,l,u=0;const h=()=>(u++,c=null,f()),f=()=>{let d;return c||(d=c=e().catch(m=>{if(m=m instanceof Error?m:new Error(String(m)),a)return new Promise((E,C)=>{a(m,()=>E(h()),()=>C(m),u+1)});throw m}).then(m=>d!==c&&c?c:(m&&(m.__esModule||m[Symbol.toStringTag]==="Module")&&(m=m.default),l=m,m)))};return Tn({name:"AsyncComponentWrapper",__asyncLoader:f,get __asyncResolved(){return l},setup(){const d=Ue;if(l)return()=>Za(l,d);const m=p=>{c=null,wr(p,d,13,!s)};if(o&&d.suspense||rr)return f().then(p=>()=>Za(p,d)).catch(p=>(m(p),()=>s?De(s,{error:p}):null));const E=fn(!1),C=fn(),v=fn(!!r);return r&&setTimeout(()=>{v.value=!1},r),i!=null&&setTimeout(()=>{if(!E.value&&!C.value){const p=new Error(`Async component timed out after ${i}ms.`);m(p),C.value=p}},i),f().then(()=>{E.value=!0,d.parent&&wi(d.parent.vnode)&&oa(d.parent.update)}).catch(p=>{m(p),C.value=p}),()=>{if(E.value&&l)return Za(l,d);if(C.value&&s)return De(s,{error:C.value});if(n&&!v.value)return De(n)}}})}function Za(t,e){const{ref:n,props:s,children:r,ce:i}=e.vnode,o=De(t,s,r);return o.ref=n,o.ce=i,delete e.vnode.ce,o}const wi=t=>t.type.__isKeepAlive,vE={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(t,{slots:e}){const n=Cn(),s=n.ctx;if(!s.renderer)return()=>{const p=e.default&&e.default();return p&&p.length===1?p[0]:p};const r=new Map,i=new Set;let o=null;const a=n.suspense,{renderer:{p:c,m:l,um:u,o:{createElement:h}}}=s,f=h("div");s.activate=(p,w,T,k,M)=>{const R=p.component;l(p,w,T,0,a),c(R.vnode,p,w,T,R,a,k,p.slotScopeIds,M),qe(()=>{R.isDeactivated=!1,R.a&&Hs(R.a);const b=p.props&&p.props.onVnodeMounted;b&&ut(b,R.parent,p)},a)},s.deactivate=p=>{const w=p.component;l(p,f,null,1,a),qe(()=>{w.da&&Hs(w.da);const T=p.props&&p.props.onVnodeUnmounted;T&&ut(T,w.parent,p),w.isDeactivated=!0},a)};function d(p){ec(p),u(p,n,a,!0)}function m(p){r.forEach((w,T)=>{const k=qc(w.type);k&&(!p||!p(k))&&E(T)})}function E(p){const w=r.get(p);!o||w.type!==o.type?d(w):o&&ec(o),r.delete(p),i.delete(p)}ms(()=>[t.include,t.exclude],([p,w])=>{p&&m(T=>Dr(p,T)),w&&m(T=>!Dr(w,T))},{flush:"post",deep:!0});let C=null;const v=()=>{C!=null&&r.set(C,tc(n.subTree))};return ua(v),Yp(v),Ei(()=>{r.forEach(p=>{const{subTree:w,suspense:T}=n,k=tc(w);if(p.type===k.type){ec(k);const M=k.component.da;M&&qe(M,T);return}d(p)})}),()=>{if(C=null,!e.default)return null;const p=e.default(),w=p[0];if(p.length>1)return o=null,p;if(!sr(w)||!(w.shapeFlag&4)&&!(w.shapeFlag&128))return o=null,w;let T=tc(w);const k=T.type,M=qc(ys(T)?T.type.__asyncResolved||{}:k),{include:R,exclude:b,max:U}=t;if(R&&(!M||!Dr(R,M))||b&&M&&Dr(b,M))return o=T,w;const B=T.key==null?k:T.key,z=r.get(B);return T.el&&(T=mn(T),w.shapeFlag&128&&(w.ssContent=T)),C=B,z?(T.el=z.el,T.component=z.component,T.transition&&Io(T,T.transition),T.shapeFlag|=512,i.delete(B),i.add(B)):(i.add(B),U&&i.size>parseInt(U,10)&&E(i.values().next().value)),T.shapeFlag|=256,o=T,qp(w.type)?w:T}}},wE=vE;function Dr(t,e){return Z(t)?t.some(n=>Dr(n,e)):Pe(t)?t.split(",").includes(e):t.test?t.test(e):!1}function EE(t,e){Jp(t,"a",e)}function _E(t,e){Jp(t,"da",e)}function Jp(t,e,n=Ue){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(la(e,s,n),n){let r=n.parent;for(;r&&r.parent;)wi(r.parent.vnode)&&bE(s,e,n,r),r=r.parent}}function bE(t,e,n,s){const r=la(e,t,s,!0);Zl(()=>{Ul(s[e],r)},n)}function ec(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function tc(t){return t.shapeFlag&128?t.ssContent:t}function la(t,e,n=Ue,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;yr(),Qn(n);const a=Ut(e,n,t,o);return Hn(),vr(),a});return s?r.unshift(i):r.push(i),i}}const In=t=>(e,n=Ue)=>(!rr||t==="sp")&&la(t,(...s)=>e(...s),n),TE=In("bm"),ua=In("m"),IE=In("bu"),Yp=In("u"),Ei=In("bum"),Zl=In("um"),CE=In("sp"),SE=In("rtg"),AE=In("rtc");function Zp(t,e=Ue){la("ec",t,e)}function g1(t,e){const n=ze;if(n===null)return t;const s=fa(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=Ce]=e[i];o&&(re(o)&&(o={mounted:o,updated:o}),o.deep&&hs(a),r.push({dir:o,instance:s,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function Gt(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(yr(),Ut(c,n,8,[t.el,a,t,e]),vr())}}const eg="components";function kE(t,e){return NE(eg,t,!0,e)||t}const RE=Symbol();function NE(t,e,n=!0,s=!1){const r=ze||Ue;if(r){const i=r.type;if(t===eg){const a=qc(i,!1);if(a&&(a===e||a===nn(e)||a===sa(nn(e))))return i}const o=Rh(r[t]||i[t],e)||Rh(r.appContext[t],e);return!o&&s?i:o}}function Rh(t,e){return t&&(t[e]||t[nn(e)]||t[sa(nn(e))])}function m1(t,e,n,s){let r;const i=n&&n[s];if(Z(t)||Pe(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,i&&i[o])}else if(Se(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];r[a]=e(t[l],l,a,i&&i[a])}}else r=[];return n&&(n[s]=r),r}function y1(t,e,n={},s,r){if(ze.isCE||ze.parent&&ys(ze.parent)&&ze.parent.isCE)return e!=="default"&&(n.name=e),De("slot",n,s&&s());let i=t[e];i&&i._c&&(i._d=!1),vs();const o=i&&tg(i(n)),a=zs(ht,{key:n.key||o&&o.key||`_${e}`},o||(s?s():[]),o&&t._===1?64:-2);return!r&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function tg(t){return t.some(e=>sr(e)?!(e.type===ct||e.type===ht&&!tg(e.children)):!0)?t:null}const $c=t=>t?mg(t)?fa(t)||t.proxy:$c(t.parent):null,Fr=Qe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>$c(t.parent),$root:t=>$c(t.root),$emit:t=>t.emit,$options:t=>eu(t),$forceUpdate:t=>t.f||(t.f=()=>oa(t.update)),$nextTick:t=>t.n||(t.n=As.bind(t.proxy)),$watch:t=>pE.bind(t)}),nc=(t,e)=>t!==Ce&&!t.__isScriptSetup&&pe(t,e),DE={get({_:t},e){const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(nc(s,e))return o[e]=1,s[e];if(r!==Ce&&pe(r,e))return o[e]=2,r[e];if((l=t.propsOptions[0])&&pe(l,e))return o[e]=3,i[e];if(n!==Ce&&pe(n,e))return o[e]=4,n[e];Vc&&(o[e]=0)}}const u=Fr[e];let h,f;if(u)return e==="$attrs"&&Dt(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Ce&&pe(n,e))return o[e]=4,n[e];if(f=c.config.globalProperties,pe(f,e))return f[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return nc(r,e)?(r[e]=n,!0):s!==Ce&&pe(s,e)?(s[e]=n,!0):pe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==Ce&&pe(t,o)||nc(e,o)||(a=i[0])&&pe(a,o)||pe(s,o)||pe(Fr,o)||pe(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:pe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Vc=!0;function OE(t){const e=eu(t),n=t.proxy,s=t.ctx;Vc=!1,e.beforeCreate&&Nh(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:f,beforeUpdate:d,updated:m,activated:E,deactivated:C,beforeDestroy:v,beforeUnmount:p,destroyed:w,unmounted:T,render:k,renderTracked:M,renderTriggered:R,errorCaptured:b,serverPrefetch:U,expose:B,inheritAttrs:z,components:$,directives:ne,filters:j}=e;if(l&&PE(l,s,null,t.appContext.config.unwrapInjectedRef),o)for(const be in o){const Ee=o[be];re(Ee)&&(s[be]=Ee.bind(n))}if(r){const be=r.call(n,n);Se(be)&&(t.data=Ht(be))}if(Vc=!0,i)for(const be in i){const Ee=i[be],Ft=re(Ee)?Ee.bind(n,n):re(Ee.get)?Ee.get.bind(n,n):jt,ss=!re(Ee)&&re(Ee.set)?Ee.set.bind(n):jt,$t=je({get:Ft,set:ss});Object.defineProperty(s,be,{enumerable:!0,configurable:!0,get:()=>$t.value,set:lt=>$t.value=lt})}if(a)for(const be in a)ng(a[be],s,n,be);if(c){const be=re(c)?c.call(n):c;Reflect.ownKeys(be).forEach(Ee=>{Ws(Ee,be[Ee])})}u&&Nh(u,t,"c");function fe(be,Ee){Z(Ee)?Ee.forEach(Ft=>be(Ft.bind(n))):Ee&&be(Ee.bind(n))}if(fe(TE,h),fe(ua,f),fe(IE,d),fe(Yp,m),fe(EE,E),fe(_E,C),fe(Zp,b),fe(AE,M),fe(SE,R),fe(Ei,p),fe(Zl,T),fe(CE,U),Z(B))if(B.length){const be=t.exposed||(t.exposed={});B.forEach(Ee=>{Object.defineProperty(be,Ee,{get:()=>n[Ee],set:Ft=>n[Ee]=Ft})})}else t.exposed||(t.exposed={});k&&t.render===jt&&(t.render=k),z!=null&&(t.inheritAttrs=z),$&&(t.components=$),ne&&(t.directives=ne)}function PE(t,e,n=jt,s=!1){Z(t)&&(t=Bc(t));for(const r in t){const i=t[r];let o;Se(i)?"default"in i?o=pt(i.from||r,i.default,!0):o=pt(i.from||r):o=pt(i),Re(o)&&s?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function Nh(t,e,n){Ut(Z(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function ng(t,e,n,s){const r=s.includes(".")?zp(n,s):()=>n[s];if(Pe(t)){const i=e[t];re(i)&&ms(r,i)}else if(re(t))ms(r,t.bind(n));else if(Se(t))if(Z(t))t.forEach(i=>ng(i,e,n,s));else{const i=re(t.handler)?t.handler.bind(n):e[t.handler];re(i)&&ms(r,i,t)}}function eu(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!r.length&&!n&&!s?c=e:(c={},r.length&&r.forEach(l=>Co(c,l,o,!0)),Co(c,e,o)),Se(e)&&i.set(e,c),c}function Co(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&Co(t,i,n,!0),r&&r.forEach(o=>Co(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=LE[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const LE={data:Dh,props:as,emits:as,methods:as,computed:as,beforeCreate:ot,created:ot,beforeMount:ot,mounted:ot,beforeUpdate:ot,updated:ot,beforeDestroy:ot,beforeUnmount:ot,destroyed:ot,unmounted:ot,activated:ot,deactivated:ot,errorCaptured:ot,serverPrefetch:ot,components:as,directives:as,watch:xE,provide:Dh,inject:ME};function Dh(t,e){return e?t?function(){return Qe(re(t)?t.call(this,this):t,re(e)?e.call(this,this):e)}:e:t}function ME(t,e){return as(Bc(t),Bc(e))}function Bc(t){if(Z(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ot(t,e){return t?[...new Set([].concat(t,e))]:e}function as(t,e){return t?Qe(Qe(Object.create(null),t),e):e}function xE(t,e){if(!t)return e;if(!e)return t;const n=Qe(Object.create(null),t);for(const s in e)n[s]=ot(t[s],e[s]);return n}function UE(t,e,n,s=!1){const r={},i={};Eo(i,ha,1),t.propsDefaults=Object.create(null),sg(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:Ww(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function FE(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=ge(r),[c]=t.propsOptions;let l=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(aa(t.emitsOptions,f))continue;const d=e[f];if(c)if(pe(i,f))d!==i[f]&&(i[f]=d,l=!0);else{const m=nn(f);r[m]=jc(c,a,m,d,t,!1)}else d!==i[f]&&(i[f]=d,l=!0)}}}else{sg(t,e,r,i)&&(l=!0);let u;for(const h in a)(!e||!pe(e,h)&&((u=mr(h))===h||!pe(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(r[h]=jc(c,a,h,void 0,t,!0)):delete r[h]);if(i!==a)for(const h in i)(!e||!pe(e,h)&&!0)&&(delete i[h],l=!0)}l&&gn(t,"set","$attrs")}function sg(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Ur(c))continue;const l=e[c];let u;r&&pe(r,u=nn(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:aa(t.emitsOptions,c)||(!(c in s)||l!==s[c])&&(s[c]=l,o=!0)}if(i){const c=ge(n),l=a||Ce;for(let u=0;u<i.length;u++){const h=i[u];n[h]=jc(r,c,h,l[h],t,!pe(l,h))}}return o}function jc(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=pe(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&re(c)){const{propsDefaults:l}=r;n in l?s=l[n]:(Qn(r),s=l[n]=c.call(null,e),Hn())}else s=c}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===mr(n))&&(s=!0))}return s}function rg(t,e,n=!1){const s=e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let c=!1;if(!re(t)){const u=h=>{c=!0;const[f,d]=rg(h,e,!0);Qe(o,f),d&&a.push(...d)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return Se(t)&&s.set(t,Bs),Bs;if(Z(i))for(let u=0;u<i.length;u++){const h=nn(i[u]);Oh(h)&&(o[h]=Ce)}else if(i)for(const u in i){const h=nn(u);if(Oh(h)){const f=i[u],d=o[h]=Z(f)||re(f)?{type:f}:Object.assign({},f);if(d){const m=Mh(Boolean,d.type),E=Mh(String,d.type);d[0]=m>-1,d[1]=E<0||m<E,(m>-1||pe(d,"default"))&&a.push(h)}}}const l=[o,a];return Se(t)&&s.set(t,l),l}function Oh(t){return t[0]!=="$"}function Ph(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function Lh(t,e){return Ph(t)===Ph(e)}function Mh(t,e){return Z(e)?e.findIndex(n=>Lh(n,t)):re(e)&&Lh(e,t)?0:-1}const ig=t=>t[0]==="_"||t==="$stable",tu=t=>Z(t)?t.map(Lt):[Lt(t)],$E=(t,e,n)=>{if(e._n)return e;const s=Ql((...r)=>tu(e(...r)),n);return s._c=!1,s},og=(t,e,n)=>{const s=t._ctx;for(const r in t){if(ig(r))continue;const i=t[r];if(re(i))e[r]=$E(r,i,s);else if(i!=null){const o=tu(i);e[r]=()=>o}}},ag=(t,e)=>{const n=tu(e);t.slots.default=()=>n},VE=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ge(e),Eo(e,"_",n)):og(e,t.slots={})}else t.slots={},e&&ag(t,e);Eo(t.slots,ha,1)},BE=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=Ce;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(Qe(r,e),!n&&a===1&&delete r._):(i=!e.$stable,og(e,r)),o=e}else e&&(ag(t,e),o={default:1});if(i)for(const a in r)!ig(a)&&!(a in o)&&delete r[a]};function cg(){return{app:null,config:{isNativeTag:dw,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let jE=0;function HE(t,e){return function(s,r=null){re(s)||(s=Object.assign({},s)),r!=null&&!Se(r)&&(r=null);const i=cg(),o=new Set;let a=!1;const c=i.app={_uid:jE++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:vg,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&re(l.install)?(o.add(l),l.install(c,...u)):re(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const f=De(s,r);return f.appContext=i,u&&e?e(f,l):t(f,l,h),a=!0,c._container=l,l.__vue_app__=c,fa(f.component)||f.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c}};return c}}function So(t,e,n,s,r=!1){if(Z(t)){t.forEach((f,d)=>So(f,e&&(Z(e)?e[d]:e),n,s,r));return}if(ys(s)&&!r)return;const i=s.shapeFlag&4?fa(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===Ce?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(Pe(l)?(u[l]=null,pe(h,l)&&(h[l]=null)):Re(l)&&(l.value=null)),re(c))jn(c,a,12,[o,u]);else{const f=Pe(c),d=Re(c);if(f||d){const m=()=>{if(t.f){const E=f?pe(h,c)?h[c]:u[c]:c.value;r?Z(E)&&Ul(E,i):Z(E)?E.includes(i)||E.push(i):f?(u[c]=[i],pe(h,c)&&(h[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else f?(u[c]=o,pe(h,c)&&(h[c]=o)):d&&(c.value=o,t.k&&(u[t.k]=o))};o?(m.id=-1,qe(m,n)):m()}}}let kn=!1;const Ji=t=>/svg/.test(t.namespaceURI)&&t.tagName!=="foreignObject",Yi=t=>t.nodeType===8;function qE(t){const{mt:e,p:n,o:{patchProp:s,createText:r,nextSibling:i,parentNode:o,remove:a,insert:c,createComment:l}}=t,u=(v,p)=>{if(!p.hasChildNodes()){n(null,v,p),bo(),p._vnode=v;return}kn=!1,h(p.firstChild,v,null,null,null),bo(),p._vnode=v,kn&&console.error("Hydration completed but contains mismatches.")},h=(v,p,w,T,k,M=!1)=>{const R=Yi(v)&&v.data==="[",b=()=>E(v,p,w,T,k,R),{type:U,ref:B,shapeFlag:z,patchFlag:$}=p;let ne=v.nodeType;p.el=v,$===-2&&(M=!1,p.dynamicChildren=null);let j=null;switch(U){case tr:ne!==3?p.children===""?(c(p.el=r(""),o(v),v),j=v):j=b():(v.data!==p.children&&(kn=!0,v.data=p.children),j=i(v));break;case ct:ne!==8||R?j=b():j=i(v);break;case $r:if(R&&(v=i(v),ne=v.nodeType),ne===1||ne===3){j=v;const ve=!p.children.length;for(let fe=0;fe<p.staticCount;fe++)ve&&(p.children+=j.nodeType===1?j.outerHTML:j.data),fe===p.staticCount-1&&(p.anchor=j),j=i(j);return R?i(j):j}else b();break;case ht:R?j=m(v,p,w,T,k,M):j=b();break;default:if(z&1)ne!==1||p.type.toLowerCase()!==v.tagName.toLowerCase()?j=b():j=f(v,p,w,T,k,M);else if(z&6){p.slotScopeIds=k;const ve=o(v);if(e(p,ve,null,w,T,Ji(ve),M),j=R?C(v):i(v),j&&Yi(j)&&j.data==="teleport end"&&(j=i(j)),ys(p)){let fe;R?(fe=De(ht),fe.anchor=j?j.previousSibling:ve.lastChild):fe=v.nodeType===3?gg(""):De("div"),fe.el=v,p.component.subTree=fe}}else z&64?ne!==8?j=b():j=p.type.hydrate(v,p,w,T,k,M,t,d):z&128&&(j=p.type.hydrate(v,p,w,T,Ji(o(v)),k,M,t,h))}return B!=null&&So(B,null,T,p),j},f=(v,p,w,T,k,M)=>{M=M||!!p.dynamicChildren;const{type:R,props:b,patchFlag:U,shapeFlag:B,dirs:z}=p,$=R==="input"&&z||R==="option";if($||U!==-1){if(z&&Gt(p,null,w,"created"),b)if($||!M||U&48)for(const j in b)($&&j.endsWith("value")||vi(j)&&!Ur(j))&&s(v,j,null,b[j],!1,void 0,w);else b.onClick&&s(v,"onClick",null,b.onClick,!1,void 0,w);let ne;if((ne=b&&b.onVnodeBeforeMount)&&ut(ne,w,p),z&&Gt(p,null,w,"beforeMount"),((ne=b&&b.onVnodeMounted)||z)&&Wp(()=>{ne&&ut(ne,w,p),z&&Gt(p,null,w,"mounted")},T),B&16&&!(b&&(b.innerHTML||b.textContent))){let j=d(v.firstChild,p,v,w,T,k,M);for(;j;){kn=!0;const ve=j;j=j.nextSibling,a(ve)}}else B&8&&v.textContent!==p.children&&(kn=!0,v.textContent=p.children)}return v.nextSibling},d=(v,p,w,T,k,M,R)=>{R=R||!!p.dynamicChildren;const b=p.children,U=b.length;for(let B=0;B<U;B++){const z=R?b[B]:b[B]=Lt(b[B]);if(v)v=h(v,z,T,k,M,R);else{if(z.type===tr&&!z.children)continue;kn=!0,n(null,z,w,null,T,k,Ji(w),M)}}return v},m=(v,p,w,T,k,M)=>{const{slotScopeIds:R}=p;R&&(k=k?k.concat(R):R);const b=o(v),U=d(i(v),p,b,w,T,k,M);return U&&Yi(U)&&U.data==="]"?i(p.anchor=U):(kn=!0,c(p.anchor=l("]"),b,U),U)},E=(v,p,w,T,k,M)=>{if(kn=!0,p.el=null,M){const U=C(v);for(;;){const B=i(v);if(B&&B!==U)a(B);else break}}const R=i(v),b=o(v);return a(v),n(null,p,b,R,w,T,Ji(b),k),R},C=v=>{let p=0;for(;v;)if(v=i(v),v&&Yi(v)&&(v.data==="["&&p++,v.data==="]")){if(p===0)return i(v);p--}return v};return[u,h]}const qe=Wp;function KE(t){return lg(t)}function WE(t){return lg(t,qE)}function lg(t,e){const n=ww();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:f,setScopeId:d=jt,insertStaticContent:m}=t,E=(g,y,_,I=null,A=null,L=null,V=!1,P=null,x=!!y.dynamicChildren)=>{if(g===y)return;g&&!Xt(g,y)&&(I=F(g),lt(g,A,L,!0),g=null),y.patchFlag===-2&&(x=!1,y.dynamicChildren=null);const{type:N,ref:Q,shapeFlag:q}=y;switch(N){case tr:C(g,y,_,I);break;case ct:v(g,y,_,I);break;case $r:g==null&&p(y,_,I,V);break;case ht:$(g,y,_,I,A,L,V,P,x);break;default:q&1?k(g,y,_,I,A,L,V,P,x):q&6?ne(g,y,_,I,A,L,V,P,x):(q&64||q&128)&&N.process(g,y,_,I,A,L,V,P,x,de)}Q!=null&&A&&So(Q,g&&g.ref,L,y||g,!y)},C=(g,y,_,I)=>{if(g==null)s(y.el=a(y.children),_,I);else{const A=y.el=g.el;y.children!==g.children&&l(A,y.children)}},v=(g,y,_,I)=>{g==null?s(y.el=c(y.children||""),_,I):y.el=g.el},p=(g,y,_,I)=>{[g.el,g.anchor]=m(g.children,y,_,I,g.el,g.anchor)},w=({el:g,anchor:y},_,I)=>{let A;for(;g&&g!==y;)A=f(g),s(g,_,I),g=A;s(y,_,I)},T=({el:g,anchor:y})=>{let _;for(;g&&g!==y;)_=f(g),r(g),g=_;r(y)},k=(g,y,_,I,A,L,V,P,x)=>{V=V||y.type==="svg",g==null?M(y,_,I,A,L,V,P,x):U(g,y,A,L,V,P,x)},M=(g,y,_,I,A,L,V,P)=>{let x,N;const{type:Q,props:q,shapeFlag:X,transition:se,dirs:le}=g;if(x=g.el=o(g.type,L,q&&q.is,q),X&8?u(x,g.children):X&16&&b(g.children,x,null,I,A,L&&Q!=="foreignObject",V,P),le&&Gt(g,null,I,"created"),q){for(const _e in q)_e!=="value"&&!Ur(_e)&&i(x,_e,null,q[_e],L,g.children,I,A,H);"value"in q&&i(x,"value",null,q.value),(N=q.onVnodeBeforeMount)&&ut(N,I,g)}R(x,g,g.scopeId,V,I),le&&Gt(g,null,I,"beforeMount");const Te=(!A||A&&!A.pendingBranch)&&se&&!se.persisted;Te&&se.beforeEnter(x),s(x,y,_),((N=q&&q.onVnodeMounted)||Te||le)&&qe(()=>{N&&ut(N,I,g),Te&&se.enter(x),le&&Gt(g,null,I,"mounted")},A)},R=(g,y,_,I,A)=>{if(_&&d(g,_),I)for(let L=0;L<I.length;L++)d(g,I[L]);if(A){let L=A.subTree;if(y===L){const V=A.vnode;R(g,V,V.scopeId,V.slotScopeIds,A.parent)}}},b=(g,y,_,I,A,L,V,P,x=0)=>{for(let N=x;N<g.length;N++){const Q=g[N]=P?Pn(g[N]):Lt(g[N]);E(null,Q,y,_,I,A,L,V,P)}},U=(g,y,_,I,A,L,V)=>{const P=y.el=g.el;let{patchFlag:x,dynamicChildren:N,dirs:Q}=y;x|=g.patchFlag&16;const q=g.props||Ce,X=y.props||Ce;let se;_&&rs(_,!1),(se=X.onVnodeBeforeUpdate)&&ut(se,_,y,g),Q&&Gt(y,g,_,"beforeUpdate"),_&&rs(_,!0);const le=A&&y.type!=="foreignObject";if(N?B(g.dynamicChildren,N,P,_,I,le,L):V||Ee(g,y,P,null,_,I,le,L,!1),x>0){if(x&16)z(P,y,q,X,_,I,A);else if(x&2&&q.class!==X.class&&i(P,"class",null,X.class,A),x&4&&i(P,"style",q.style,X.style,A),x&8){const Te=y.dynamicProps;for(let _e=0;_e<Te.length;_e++){const Le=Te[_e],Vt=q[Le],Os=X[Le];(Os!==Vt||Le==="value")&&i(P,Le,Vt,Os,A,g.children,_,I,H)}}x&1&&g.children!==y.children&&u(P,y.children)}else!V&&N==null&&z(P,y,q,X,_,I,A);((se=X.onVnodeUpdated)||Q)&&qe(()=>{se&&ut(se,_,y,g),Q&&Gt(y,g,_,"updated")},I)},B=(g,y,_,I,A,L,V)=>{for(let P=0;P<y.length;P++){const x=g[P],N=y[P],Q=x.el&&(x.type===ht||!Xt(x,N)||x.shapeFlag&70)?h(x.el):_;E(x,N,Q,null,I,A,L,V,!0)}},z=(g,y,_,I,A,L,V)=>{if(_!==I){if(_!==Ce)for(const P in _)!Ur(P)&&!(P in I)&&i(g,P,_[P],null,V,y.children,A,L,H);for(const P in I){if(Ur(P))continue;const x=I[P],N=_[P];x!==N&&P!=="value"&&i(g,P,N,x,V,y.children,A,L,H)}"value"in I&&i(g,"value",_.value,I.value)}},$=(g,y,_,I,A,L,V,P,x)=>{const N=y.el=g?g.el:a(""),Q=y.anchor=g?g.anchor:a("");let{patchFlag:q,dynamicChildren:X,slotScopeIds:se}=y;se&&(P=P?P.concat(se):se),g==null?(s(N,_,I),s(Q,_,I),b(y.children,_,Q,A,L,V,P,x)):q>0&&q&64&&X&&g.dynamicChildren?(B(g.dynamicChildren,X,_,A,L,V,P),(y.key!=null||A&&y===A.subTree)&&ug(g,y,!0)):Ee(g,y,_,Q,A,L,V,P,x)},ne=(g,y,_,I,A,L,V,P,x)=>{y.slotScopeIds=P,g==null?y.shapeFlag&512?A.ctx.activate(y,_,I,V,x):j(y,_,I,A,L,V,x):ve(g,y,x)},j=(g,y,_,I,A,L,V)=>{const P=g.component=e_(g,I,A);if(wi(g)&&(P.ctx.renderer=de),t_(P),P.asyncDep){if(A&&A.registerDep(P,fe),!g.el){const x=P.subTree=De(ct);v(null,x,y,_)}return}fe(P,g,y,_,A,L,V)},ve=(g,y,_)=>{const I=y.component=g.component;if(aE(g,y,_))if(I.asyncDep&&!I.asyncResolved){be(I,y,_);return}else I.next=y,tE(I.update),I.update();else y.el=g.el,I.vnode=y},fe=(g,y,_,I,A,L,V)=>{const P=()=>{if(g.isMounted){let{next:Q,bu:q,u:X,parent:se,vnode:le}=g,Te=Q,_e;rs(g,!1),Q?(Q.el=le.el,be(g,Q,V)):Q=le,q&&Hs(q),(_e=Q.props&&Q.props.onVnodeBeforeUpdate)&&ut(_e,se,Q,le),rs(g,!0);const Le=Ja(g),Vt=g.subTree;g.subTree=Le,E(Vt,Le,h(Vt.el),F(Vt),g,A,L),Q.el=Le.el,Te===null&&Xl(g,Le.el),X&&qe(X,A),(_e=Q.props&&Q.props.onVnodeUpdated)&&qe(()=>ut(_e,se,Q,le),A)}else{let Q;const{el:q,props:X}=y,{bm:se,m:le,parent:Te}=g,_e=ys(y);if(rs(g,!1),se&&Hs(se),!_e&&(Q=X&&X.onVnodeBeforeMount)&&ut(Q,Te,y),rs(g,!0),q&&ae){const Le=()=>{g.subTree=Ja(g),ae(q,g.subTree,g,A,null)};_e?y.type.__asyncLoader().then(()=>!g.isUnmounted&&Le()):Le()}else{const Le=g.subTree=Ja(g);E(null,Le,_,I,g,A,L),y.el=Le.el}if(le&&qe(le,A),!_e&&(Q=X&&X.onVnodeMounted)){const Le=y;qe(()=>ut(Q,Te,Le),A)}(y.shapeFlag&256||Te&&ys(Te.vnode)&&Te.vnode.shapeFlag&256)&&g.a&&qe(g.a,A),g.isMounted=!0,y=_=I=null}},x=g.effect=new jl(P,()=>oa(N),g.scope),N=g.update=()=>x.run();N.id=g.uid,rs(g,!0),N()},be=(g,y,_)=>{y.component=g;const I=g.vnode.props;g.vnode=y,g.next=null,FE(g,y.props,I,_),BE(g,y.children,_),yr(),Ch(),vr()},Ee=(g,y,_,I,A,L,V,P,x=!1)=>{const N=g&&g.children,Q=g?g.shapeFlag:0,q=y.children,{patchFlag:X,shapeFlag:se}=y;if(X>0){if(X&128){ss(N,q,_,I,A,L,V,P,x);return}else if(X&256){Ft(N,q,_,I,A,L,V,P,x);return}}se&8?(Q&16&&H(N,A,L),q!==N&&u(_,q)):Q&16?se&16?ss(N,q,_,I,A,L,V,P,x):H(N,A,L,!0):(Q&8&&u(_,""),se&16&&b(q,_,I,A,L,V,P,x))},Ft=(g,y,_,I,A,L,V,P,x)=>{g=g||Bs,y=y||Bs;const N=g.length,Q=y.length,q=Math.min(N,Q);let X;for(X=0;X<q;X++){const se=y[X]=x?Pn(y[X]):Lt(y[X]);E(g[X],se,_,null,A,L,V,P,x)}N>Q?H(g,A,L,!0,!1,q):b(y,_,I,A,L,V,P,x,q)},ss=(g,y,_,I,A,L,V,P,x)=>{let N=0;const Q=y.length;let q=g.length-1,X=Q-1;for(;N<=q&&N<=X;){const se=g[N],le=y[N]=x?Pn(y[N]):Lt(y[N]);if(Xt(se,le))E(se,le,_,null,A,L,V,P,x);else break;N++}for(;N<=q&&N<=X;){const se=g[q],le=y[X]=x?Pn(y[X]):Lt(y[X]);if(Xt(se,le))E(se,le,_,null,A,L,V,P,x);else break;q--,X--}if(N>q){if(N<=X){const se=X+1,le=se<Q?y[se].el:I;for(;N<=X;)E(null,y[N]=x?Pn(y[N]):Lt(y[N]),_,le,A,L,V,P,x),N++}}else if(N>X)for(;N<=q;)lt(g[N],A,L,!0),N++;else{const se=N,le=N,Te=new Map;for(N=le;N<=X;N++){const gt=y[N]=x?Pn(y[N]):Lt(y[N]);gt.key!=null&&Te.set(gt.key,N)}let _e,Le=0;const Vt=X-le+1;let Os=!1,ph=0;const Sr=new Array(Vt);for(N=0;N<Vt;N++)Sr[N]=0;for(N=se;N<=q;N++){const gt=g[N];if(Le>=Vt){lt(gt,A,L,!0);continue}let Wt;if(gt.key!=null)Wt=Te.get(gt.key);else for(_e=le;_e<=X;_e++)if(Sr[_e-le]===0&&Xt(gt,y[_e])){Wt=_e;break}Wt===void 0?lt(gt,A,L,!0):(Sr[Wt-le]=N+1,Wt>=ph?ph=Wt:Os=!0,E(gt,y[Wt],_,null,A,L,V,P,x),Le++)}const gh=Os?zE(Sr):Bs;for(_e=gh.length-1,N=Vt-1;N>=0;N--){const gt=le+N,Wt=y[gt],mh=gt+1<Q?y[gt+1].el:I;Sr[N]===0?E(null,Wt,_,mh,A,L,V,P,x):Os&&(_e<0||N!==gh[_e]?$t(Wt,_,mh,2):_e--)}}},$t=(g,y,_,I,A=null)=>{const{el:L,type:V,transition:P,children:x,shapeFlag:N}=g;if(N&6){$t(g.component.subTree,y,_,I);return}if(N&128){g.suspense.move(y,_,I);return}if(N&64){V.move(g,y,_,de);return}if(V===ht){s(L,y,_);for(let q=0;q<x.length;q++)$t(x[q],y,_,I);s(g.anchor,y,_);return}if(V===$r){w(g,y,_);return}if(I!==2&&N&1&&P)if(I===0)P.beforeEnter(L),s(L,y,_),qe(()=>P.enter(L),A);else{const{leave:q,delayLeave:X,afterLeave:se}=P,le=()=>s(L,y,_),Te=()=>{q(L,()=>{le(),se&&se()})};X?X(L,le,Te):Te()}else s(L,y,_)},lt=(g,y,_,I=!1,A=!1)=>{const{type:L,props:V,ref:P,children:x,dynamicChildren:N,shapeFlag:Q,patchFlag:q,dirs:X}=g;if(P!=null&&So(P,null,_,g,!0),Q&256){y.ctx.deactivate(g);return}const se=Q&1&&X,le=!ys(g);let Te;if(le&&(Te=V&&V.onVnodeBeforeUnmount)&&ut(Te,y,g),Q&6)S(g.component,_,I);else{if(Q&128){g.suspense.unmount(_,I);return}se&&Gt(g,null,y,"beforeUnmount"),Q&64?g.type.remove(g,y,_,A,de,I):N&&(L!==ht||q>0&&q&64)?H(N,y,_,!1,!0):(L===ht&&q&384||!A&&Q&16)&&H(x,y,_),I&&Ds(g)}(le&&(Te=V&&V.onVnodeUnmounted)||se)&&qe(()=>{Te&&ut(Te,y,g),se&&Gt(g,null,y,"unmounted")},_)},Ds=g=>{const{type:y,el:_,anchor:I,transition:A}=g;if(y===ht){qi(_,I);return}if(y===$r){T(g);return}const L=()=>{r(_),A&&!A.persisted&&A.afterLeave&&A.afterLeave()};if(g.shapeFlag&1&&A&&!A.persisted){const{leave:V,delayLeave:P}=A,x=()=>V(_,L);P?P(g.el,L,x):x()}else L()},qi=(g,y)=>{let _;for(;g!==y;)_=f(g),r(g),g=_;r(y)},S=(g,y,_)=>{const{bum:I,scope:A,update:L,subTree:V,um:P}=g;I&&Hs(I),A.stop(),L&&(L.active=!1,lt(V,g,y,_)),P&&qe(P,y),qe(()=>{g.isUnmounted=!0},y),y&&y.pendingBranch&&!y.isUnmounted&&g.asyncDep&&!g.asyncResolved&&g.suspenseId===y.pendingId&&(y.deps--,y.deps===0&&y.resolve())},H=(g,y,_,I=!1,A=!1,L=0)=>{for(let V=L;V<g.length;V++)lt(g[V],y,_,I,A)},F=g=>g.shapeFlag&6?F(g.component.subTree):g.shapeFlag&128?g.suspense.next():f(g.anchor||g.el),G=(g,y,_)=>{g==null?y._vnode&&lt(y._vnode,null,null,!0):E(y._vnode||null,g,y,null,null,null,_),Ch(),bo(),y._vnode=g},de={p:E,um:lt,m:$t,r:Ds,mt:j,mc:b,pc:Ee,pbc:B,n:F,o:t};let Ne,ae;return e&&([Ne,ae]=e(de)),{render:G,hydrate:Ne,createApp:HE(G,Ne)}}function rs({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function ug(t,e,n=!1){const s=t.children,r=e.children;if(Z(s)&&Z(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=Pn(r[i]),a.el=o.el),n||ug(o,a)),a.type===tr&&(a.el=o.el)}}function zE(t){const e=t.slice(),n=[0];let s,r,i,o,a;const c=t.length;for(s=0;s<c;s++){const l=t[s];if(l!==0){if(r=n[n.length-1],t[r]<l){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const GE=t=>t.__isTeleport,ht=Symbol(void 0),tr=Symbol(void 0),ct=Symbol(void 0),$r=Symbol(void 0),Vr=[];let xt=null;function vs(t=!1){Vr.push(xt=t?null:[])}function hg(){Vr.pop(),xt=Vr[Vr.length-1]||null}let nr=1;function xh(t){nr+=t}function fg(t){return t.dynamicChildren=nr>0?xt||Bs:null,hg(),nr>0&&xt&&xt.push(t),t}function v1(t,e,n,s,r,i){return fg(pg(t,e,n,s,r,i,!0))}function zs(t,e,n,s,r){return fg(De(t,e,n,s,r,!0))}function sr(t){return t?t.__v_isVNode===!0:!1}function Xt(t,e){return t.type===e.type&&t.key===e.key}const ha="__vInternal",dg=({key:t})=>t!=null?t:null,lo=({ref:t,ref_key:e,ref_for:n})=>t!=null?Pe(t)||Re(t)||re(t)?{i:ze,r:t,k:e,f:!!n}:t:null;function pg(t,e=null,n=null,s=0,r=null,i=t===ht?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&dg(e),ref:e&&lo(e),scopeId:ca,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:ze};return a?(nu(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Pe(n)?8:16),nr>0&&!o&&xt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&xt.push(c),c}const De=QE;function QE(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===RE)&&(t=ct),sr(t)){const a=mn(t,e,!0);return n&&nu(a,n),nr>0&&!i&&xt&&(a.shapeFlag&6?xt[xt.indexOf(t)]=a:xt.push(a)),a.patchFlag|=-2,a}if(i_(t)&&(t=t.__vccOpts),e){e=XE(e);let{class:a,style:c}=e;a&&!Pe(a)&&(e.class=ea(a)),Se(c)&&(Pp(c)&&!Z(c)&&(c=Qe({},c)),e.style=Zo(c))}const o=Pe(t)?1:qp(t)?128:GE(t)?64:Se(t)?4:re(t)?2:0;return pg(t,e,n,s,r,o,i,!0)}function XE(t){return t?Pp(t)||ha in t?Qe({},t):t:null}function mn(t,e,n=!1){const{props:s,ref:r,patchFlag:i,children:o}=t,a=e?JE(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&dg(a),ref:e&&e.ref?n&&r?Z(r)?r.concat(lo(e)):[r,lo(e)]:lo(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==ht?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&mn(t.ssContent),ssFallback:t.ssFallback&&mn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx}}function gg(t=" ",e=0){return De(tr,null,t,e)}function w1(t,e){const n=De($r,null,t);return n.staticCount=e,n}function E1(t="",e=!1){return e?(vs(),zs(ct,null,t)):De(ct,null,t)}function Lt(t){return t==null||typeof t=="boolean"?De(ct):Z(t)?De(ht,null,t.slice()):typeof t=="object"?Pn(t):De(tr,null,String(t))}function Pn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:mn(t)}function nu(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(Z(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),nu(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(ha in e)?e._ctx=ze:r===3&&ze&&(ze.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else re(e)?(e={default:e,_ctx:ze},n=32):(e=String(e),s&64?(n=16,e=[gg(e)]):n=8);t.children=e,t.shapeFlag|=n}function JE(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=ea([e.class,s.class]));else if(r==="style")e.style=Zo([e.style,s.style]);else if(vi(r)){const i=e[r],o=s[r];o&&i!==o&&!(Z(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function ut(t,e,n,s=null){Ut(t,e,7,[n,s])}const YE=cg();let ZE=0;function e_(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||YE,i={uid:ZE++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Ep(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:rg(s,r),emitsOptions:Hp(s,r),emit:null,emitted:null,propsDefaults:Ce,inheritAttrs:s.inheritAttrs,ctx:Ce,data:Ce,props:Ce,attrs:Ce,slots:Ce,refs:Ce,setupState:Ce,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=sE.bind(null,i),t.ce&&t.ce(i),i}let Ue=null;const Cn=()=>Ue||ze,Qn=t=>{Ue=t,t.scope.on()},Hn=()=>{Ue&&Ue.scope.off(),Ue=null};function mg(t){return t.vnode.shapeFlag&4}let rr=!1;function t_(t,e=!1){rr=e;const{props:n,children:s}=t.vnode,r=mg(t);UE(t,n,r,e),VE(t,s);const i=r?n_(t,e):void 0;return rr=!1,i}function n_(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=er(new Proxy(t.ctx,DE));const{setup:s}=n;if(s){const r=t.setupContext=s.length>1?r_(t):null;Qn(t),yr();const i=jn(s,t,0,[t.props,r]);if(vr(),Hn(),$l(i)){if(i.then(Hn,Hn),e)return i.then(o=>{Hc(t,o,e)}).catch(o=>{wr(o,t,0)});t.asyncDep=i}else Hc(t,i,e)}else yg(t,e)}function Hc(t,e,n){re(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Se(e)&&(t.setupState=Up(e)),yg(t,n)}let Uh;function yg(t,e,n){const s=t.type;if(!t.render){if(!e&&Uh&&!s.render){const r=s.template||eu(t).template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=s,l=Qe(Qe({isCustomElement:i,delimiters:a},o),c);s.render=Uh(r,l)}}t.render=s.render||jt}Qn(t),yr(),OE(t),vr(),Hn()}function s_(t){return new Proxy(t.attrs,{get(e,n){return Dt(t,"get","$attrs"),e[n]}})}function r_(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=s_(t))},slots:t.slots,emit:t.emit,expose:e}}function fa(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Up(er(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Fr)return Fr[n](t)},has(e,n){return n in e||n in Fr}}))}function qc(t,e=!0){return re(t)?t.displayName||t.name:t.name||e&&t.__name}function i_(t){return re(t)&&"__vccOpts"in t}const je=(t,e)=>Yw(t,e,rr);function _1(t){const e=Cn();let n=t();return Hn(),$l(n)&&(n=n.catch(s=>{throw Qn(e),s})),[n,()=>Qn(e)]}function Rt(t,e,n){const s=arguments.length;return s===2?Se(e)&&!Z(e)?sr(e)?De(t,null,[e]):De(t,e):De(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&sr(n)&&(n=[n]),De(t,e,n))}const o_=Symbol(""),a_=()=>pt(o_),vg="3.2.45",c_="http://www.w3.org/2000/svg",us=typeof document<"u"?document:null,Fh=us&&us.createElement("template"),l_={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e?us.createElementNS(c_,t):us.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>us.createTextNode(t),createComment:t=>us.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>us.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{Fh.innerHTML=s?`<svg>${t}</svg>`:t;const a=Fh.content;if(s){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function u_(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function h_(t,e,n){const s=t.style,r=Pe(n);if(n&&!r){for(const i in n)Kc(s,i,n[i]);if(e&&!Pe(e))for(const i in e)n[i]==null&&Kc(s,i,"")}else{const i=s.display;r?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=i)}}const $h=/\s*!important$/;function Kc(t,e,n){if(Z(n))n.forEach(s=>Kc(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=f_(t,e);$h.test(n)?t.setProperty(mr(s),n.replace($h,""),"important"):t[s]=n}}const Vh=["Webkit","Moz","ms"],sc={};function f_(t,e){const n=sc[e];if(n)return n;let s=nn(e);if(s!=="filter"&&s in t)return sc[e]=s;s=sa(s);for(let r=0;r<Vh.length;r++){const i=Vh[r]+s;if(i in t)return sc[e]=i}return e}const Bh="http://www.w3.org/1999/xlink";function d_(t,e,n,s,r){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Bh,e.slice(6,e.length)):t.setAttributeNS(Bh,e,n);else{const i=fw(e);n==null||i&&!gp(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function p_(t,e,n,s,r,i,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,r,i),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n==null?"":n;(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=gp(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function xs(t,e,n,s){t.addEventListener(e,n,s)}function g_(t,e,n,s){t.removeEventListener(e,n,s)}function m_(t,e,n,s,r=null){const i=t._vei||(t._vei={}),o=i[e];if(s&&o)o.value=s;else{const[a,c]=y_(e);if(s){const l=i[e]=E_(s,r);xs(t,a,l,c)}else o&&(g_(t,a,o,c),i[e]=void 0)}}const jh=/(?:Once|Passive|Capture)$/;function y_(t){let e;if(jh.test(t)){e={};let s;for(;s=t.match(jh);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):mr(t.slice(2)),e]}let rc=0;const v_=Promise.resolve(),w_=()=>rc||(v_.then(()=>rc=0),rc=Date.now());function E_(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Ut(__(s,n.value),e,5,[s])};return n.value=t,n.attached=w_(),n}function __(t,e){if(Z(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const Hh=/^on[a-z]/,b_=(t,e,n,s,r=!1,i,o,a,c)=>{e==="class"?u_(t,s,r):e==="style"?h_(t,n,s):vi(e)?xl(e)||m_(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):T_(t,e,s,r))?p_(t,e,s,i,o,a,c):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),d_(t,e,s,r))};function T_(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&Hh.test(e)&&re(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Hh.test(e)&&Pe(n)?!1:e in t}const Rn="transition",Ar="animation",da=(t,{slots:e})=>Rt(Gp,I_(t),e);da.displayName="Transition";const wg={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};da.props=Qe({},Gp.props,wg);const is=(t,e=[])=>{Z(t)?t.forEach(n=>n(...e)):t&&t(...e)},qh=t=>t?Z(t)?t.some(e=>e.length>1):t.length>1:!1;function I_(t){const e={};for(const $ in t)$ in wg||(e[$]=t[$]);if(t.css===!1)return e;const{name:n="v",type:s,duration:r,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:l=o,appearToClass:u=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:d=`${n}-leave-to`}=t,m=C_(r),E=m&&m[0],C=m&&m[1],{onBeforeEnter:v,onEnter:p,onEnterCancelled:w,onLeave:T,onLeaveCancelled:k,onBeforeAppear:M=v,onAppear:R=p,onAppearCancelled:b=w}=e,U=($,ne,j)=>{os($,ne?u:a),os($,ne?l:o),j&&j()},B=($,ne)=>{$._isLeaving=!1,os($,h),os($,d),os($,f),ne&&ne()},z=$=>(ne,j)=>{const ve=$?R:p,fe=()=>U(ne,$,j);is(ve,[ne,fe]),Kh(()=>{os(ne,$?c:i),Nn(ne,$?u:a),qh(ve)||Wh(ne,s,E,fe)})};return Qe(e,{onBeforeEnter($){is(v,[$]),Nn($,i),Nn($,o)},onBeforeAppear($){is(M,[$]),Nn($,c),Nn($,l)},onEnter:z(!1),onAppear:z(!0),onLeave($,ne){$._isLeaving=!0;const j=()=>B($,ne);Nn($,h),k_(),Nn($,f),Kh(()=>{!$._isLeaving||(os($,h),Nn($,d),qh(T)||Wh($,s,C,j))}),is(T,[$,j])},onEnterCancelled($){U($,!1),is(w,[$])},onAppearCancelled($){U($,!0),is(b,[$])},onLeaveCancelled($){B($),is(k,[$])}})}function C_(t){if(t==null)return null;if(Se(t))return[ic(t.enter),ic(t.leave)];{const e=ic(t);return[e,e]}}function ic(t){return Ys(t)}function Nn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function os(t,e){e.split(/\s+/).forEach(s=>s&&t.classList.remove(s));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function Kh(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let S_=0;function Wh(t,e,n,s){const r=t._endId=++S_,i=()=>{r===t._endId&&s()};if(n)return setTimeout(i,n);const{type:o,timeout:a,propCount:c}=A_(t,e);if(!o)return s();const l=o+"end";let u=0;const h=()=>{t.removeEventListener(l,f),i()},f=d=>{d.target===t&&++u>=c&&h()};setTimeout(()=>{u<c&&h()},a+1),t.addEventListener(l,f)}function A_(t,e){const n=window.getComputedStyle(t),s=m=>(n[m]||"").split(", "),r=s(`${Rn}Delay`),i=s(`${Rn}Duration`),o=zh(r,i),a=s(`${Ar}Delay`),c=s(`${Ar}Duration`),l=zh(a,c);let u=null,h=0,f=0;e===Rn?o>0&&(u=Rn,h=o,f=i.length):e===Ar?l>0&&(u=Ar,h=l,f=c.length):(h=Math.max(o,l),u=h>0?o>l?Rn:Ar:null,f=u?u===Rn?i.length:c.length:0);const d=u===Rn&&/\b(transform|all)(,|$)/.test(s(`${Rn}Property`).toString());return{type:u,timeout:h,propCount:f,hasTransform:d}}function zh(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,s)=>Gh(n)+Gh(t[s])))}function Gh(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function k_(){return document.body.offsetHeight}const Qh=t=>{const e=t.props["onUpdate:modelValue"]||!1;return Z(e)?n=>Hs(e,n):e};function R_(t){t.target.composing=!0}function Xh(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const b1={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t._assign=Qh(r);const i=s||r.props&&r.props.type==="number";xs(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Ys(a)),t._assign(a)}),n&&xs(t,"change",()=>{t.value=t.value.trim()}),e||(xs(t,"compositionstart",R_),xs(t,"compositionend",Xh),xs(t,"change",Xh))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:r}},i){if(t._assign=Qh(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(r||t.type==="number")&&Ys(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},Eg=Qe({patchProp:b_},l_);let Br,Jh=!1;function N_(){return Br||(Br=KE(Eg))}function D_(){return Br=Jh?Br:WE(Eg),Jh=!0,Br}const O_=(...t)=>{const e=N_().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=_g(s);if(!r)return;const i=e._component;!re(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e},P_=(...t)=>{const e=D_().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=_g(s);if(r)return n(r,!0,r instanceof SVGElement)},e};function _g(t){return Pe(t)?document.querySelector(t):t}const L_=/"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,M_=/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,x_=/^["[{]|^-?\d[\d.]{0,14}$/;function U_(t,e){if(!(t==="__proto__"||t==="constructor"))return e}function F_(t,e={}){if(typeof t!="string")return t;const n=t.toLowerCase();if(n==="true")return!0;if(n==="false")return!1;if(n==="null")return null;if(n==="nan")return Number.NaN;if(n==="infinity")return Number.POSITIVE_INFINITY;if(n!=="undefined"){if(!x_.test(t)){if(e.strict)throw new SyntaxError("Invalid JSON");return t}try{return L_.test(t)||M_.test(t)?JSON.parse(t,U_):JSON.parse(t)}catch(s){if(e.strict)throw s;return t}}}const $_=/#/g,V_=/&/g,B_=/=/g,bg=/\+/g,j_=/%5b/gi,H_=/%5d/gi,q_=/%5e/gi,K_=/%60/gi,W_=/%7b/gi,z_=/%7c/gi,G_=/%7d/gi,Q_=/%20/gi;function X_(t){return encodeURI(""+t).replace(z_,"|").replace(j_,"[").replace(H_,"]")}function Wc(t){return X_(t).replace(bg,"%2B").replace(Q_,"+").replace($_,"%23").replace(V_,"%26").replace(K_,"`").replace(W_,"{").replace(G_,"}").replace(q_,"^")}function oc(t){return Wc(t).replace(B_,"%3D")}function Tg(t=""){try{return decodeURIComponent(""+t)}catch{return""+t}}function J_(t){return Tg(t.replace(bg," "))}function Y_(t=""){const e={};t[0]==="?"&&(t=t.slice(1));for(const n of t.split("&")){const s=n.match(/([^=]+)=?(.*)/)||[];if(s.length<2)continue;const r=Tg(s[1]);if(r==="__proto__"||r==="constructor")continue;const i=J_(s[2]||"");typeof e[r]<"u"?Array.isArray(e[r])?e[r].push(i):e[r]=[e[r],i]:e[r]=i}return e}function Z_(t,e){return(typeof e=="number"||typeof e=="boolean")&&(e=String(e)),e?Array.isArray(e)?e.map(n=>`${oc(t)}=${Wc(n)}`).join("&"):`${oc(t)}=${Wc(e)}`:oc(t)}function eb(t){return Object.keys(t).filter(e=>t[e]!==void 0).map(e=>Z_(e,t[e])).join("&")}const tb=/^\w{2,}:(\/\/)?/,nb=/^\/\/[^/]+/;function pa(t,e=!1){return tb.test(t)||e&&nb.test(t)}const sb=/\/$|\/\?/;function zc(t="",e=!1){return e?sb.test(t):t.endsWith("/")}function Ig(t="",e=!1){if(!e)return(zc(t)?t.slice(0,-1):t)||"/";if(!zc(t,!0))return t||"/";const[n,...s]=t.split("?");return(n.slice(0,-1)||"/")+(s.length>0?`?${s.join("?")}`:"")}function rb(t="",e=!1){if(!e)return t.endsWith("/")?t:t+"/";if(zc(t,!0))return t||"/";const[n,...s]=t.split("?");return n+"/"+(s.length>0?`?${s.join("?")}`:"")}function ib(t=""){return t.startsWith("/")}function ob(t=""){return(ib(t)?t.slice(1):t)||"/"}function ab(t,e){if(Cg(e)||pa(t))return t;const n=Ig(e);return t.startsWith(n)?t:ga(n,t)}function Yh(t,e){if(Cg(e))return t;const n=Ig(e);if(!t.startsWith(n))return t;const s=t.slice(n.length);return s[0]==="/"?s:"/"+s}function cb(t,e){const n=ma(t),s={...Y_(n.search),...e};return n.search=eb(s),ub(n)}function Cg(t){return!t||t==="/"}function lb(t){return t&&t!=="/"}function ga(t,...e){let n=t||"";for(const s of e.filter(r=>lb(r)))n=n?rb(n)+ob(s):s;return n}function ma(t="",e){if(!pa(t,!0))return e?ma(e+t):Zh(t);const[n="",s,r=""]=(t.replace(/\\/g,"/").match(/([^/:]+:)?\/\/([^/@]+@)?(.*)/)||[]).splice(1),[i="",o=""]=(r.match(/([^#/?]*)(.*)?/)||[]).splice(1),{pathname:a,search:c,hash:l}=Zh(o.replace(/\/(?=[A-Za-z]:)/,""));return{protocol:n,auth:s?s.slice(0,Math.max(0,s.length-1)):"",host:i,pathname:a,search:c,hash:l}}function Zh(t=""){const[e="",n="",s=""]=(t.match(/([^#?]*)(\?[^#]*)?(#.*)?/)||[]).splice(1);return{pathname:e,search:n,hash:s}}function ub(t){const e=t.pathname+(t.search?(t.search.startsWith("?")?"":"?")+t.search:"")+t.hash;return t.protocol?t.protocol+"//"+(t.auth?t.auth+"@":"")+t.host+e:e}class hb extends Error{constructor(){super(...arguments),this.name="FetchError"}}function fb(t,e,n){let s="";t&&n&&(s=`${n.status} ${n.statusText} (${t.toString()})`),e&&(s=`${e.message} (${s})`);const r=new hb(s);return Object.defineProperty(r,"request",{get(){return t}}),Object.defineProperty(r,"response",{get(){return n}}),Object.defineProperty(r,"data",{get(){return n&&n._data}}),Object.defineProperty(r,"status",{get(){return n&&n.status}}),Object.defineProperty(r,"statusText",{get(){return n&&n.statusText}}),Object.defineProperty(r,"statusCode",{get(){return n&&n.status}}),Object.defineProperty(r,"statusMessage",{get(){return n&&n.statusText}}),r}const db=new Set(Object.freeze(["PATCH","POST","PUT","DELETE"]));function ef(t="GET"){return db.has(t.toUpperCase())}function pb(t){if(t===void 0)return!1;const e=typeof t;return e==="string"||e==="number"||e==="boolean"||e===null?!0:e!=="object"?!1:Array.isArray(t)?!0:t.constructor&&t.constructor.name==="Object"||typeof t.toJSON=="function"}const gb=new Set(["image/svg","application/xml","application/xhtml","application/html"]),mb=/^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;function yb(t=""){if(!t)return"json";const e=t.split(";").shift();return mb.test(e)?"json":gb.has(e)||e.startsWith("text/")?"text":"blob"}const vb=new Set([408,409,425,429,500,502,503,504]);function Sg(t){const{fetch:e,Headers:n}=t;function s(o){const a=o.error&&o.error.name==="AbortError"||!1;if(o.options.retry!==!1&&!a){const l=typeof o.options.retry=="number"?o.options.retry:ef(o.options.method)?0:1,u=o.response&&o.response.status||500;if(l>0&&vb.has(u))return r(o.request,{...o.options,retry:l-1})}const c=fb(o.request,o.error,o.response);throw Error.captureStackTrace&&Error.captureStackTrace(c,r),c}const r=async function(a,c={}){const l={request:a,options:{...t.defaults,...c},response:void 0,error:void 0};l.options.onRequest&&await l.options.onRequest(l),typeof l.request=="string"&&(l.options.baseURL&&(l.request=ab(l.request,l.options.baseURL)),(l.options.query||l.options.params)&&(l.request=cb(l.request,{...l.options.params,...l.options.query})),l.options.body&&ef(l.options.method)&&pb(l.options.body)&&(l.options.body=typeof l.options.body=="string"?l.options.body:JSON.stringify(l.options.body),l.options.headers=new n(l.options.headers),l.options.headers.has("content-type")||l.options.headers.set("content-type","application/json"),l.options.headers.has("accept")||l.options.headers.set("accept","application/json"))),l.response=await e(l.request,l.options).catch(async h=>(l.error=h,l.options.onRequestError&&await l.options.onRequestError(l),s(l)));const u=(l.options.parseResponse?"json":l.options.responseType)||yb(l.response.headers.get("content-type")||"");if(u==="json"){const h=await l.response.text(),f=l.options.parseResponse||F_;l.response._data=f(h)}else u==="stream"?l.response._data=l.response.body:l.response._data=await l.response[u]();return l.options.onResponse&&await l.options.onResponse(l),l.response.status>=400&&l.response.status<600?(l.options.onResponseError&&await l.options.onResponseError(l),s(l)):l.response},i=function(a,c){return r(a,c).then(l=>l._data)};return i.raw=r,i.native=e,i.create=(o={})=>Sg({...t,defaults:{...t.defaults,...o}}),i}const Ag=function(){if(typeof globalThis<"u")return globalThis;if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")}(),wb=Ag.fetch||(()=>Promise.reject(new Error("[ofetch] global.fetch is not supported!"))),Eb=Ag.Headers,_b=Sg({fetch:wb,Headers:Eb}),bb=_b,Tb=()=>{var t;return((t=window==null?void 0:window.__NUXT__)==null?void 0:t.config)||{}},Ao=Tb().app,Ib=()=>Ao.baseURL,Cb=()=>Ao.buildAssetsDir,Sb=(...t)=>ga(kg(),Cb(),...t),kg=(...t)=>{const e=Ao.cdnURL||Ao.baseURL;return t.length?ga(e,...t):e};globalThis.__buildAssetsURL=Sb,globalThis.__publicAssetsURL=kg;function Gc(t,e={},n){for(const s in t){const r=t[s],i=n?`${n}:${s}`:s;typeof r=="object"&&r!==null?Gc(r,e,i):typeof r=="function"&&(e[i]=r)}return e}function Ab(t,e){return t.reduce((n,s)=>n.then(()=>s.apply(void 0,e)),Promise.resolve())}function kb(t,e){return Promise.all(t.map(n=>n.apply(void 0,e)))}function ac(t,e){for(const n of t)n(e)}class Rb{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(e,n,s={}){if(!e||typeof n!="function")return()=>{};const r=e;let i;for(;this._deprecatedHooks[e];)i=this._deprecatedHooks[e],e=i.to;if(i&&!s.allowDeprecated){let o=i.message;o||(o=`${r} hook has been deprecated`+(i.to?`, please use ${i.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(o)||(console.warn(o),this._deprecatedMessages.add(o))}return this._hooks[e]=this._hooks[e]||[],this._hooks[e].push(n),()=>{n&&(this.removeHook(e,n),n=void 0)}}hookOnce(e,n){let s,r=(...i)=>(typeof s=="function"&&s(),s=void 0,r=void 0,n(...i));return s=this.hook(e,r),s}removeHook(e,n){if(this._hooks[e]){const s=this._hooks[e].indexOf(n);s!==-1&&this._hooks[e].splice(s,1),this._hooks[e].length===0&&delete this._hooks[e]}}deprecateHook(e,n){this._deprecatedHooks[e]=typeof n=="string"?{to:n}:n;const s=this._hooks[e]||[];this._hooks[e]=void 0;for(const r of s)this.hook(e,r)}deprecateHooks(e){Object.assign(this._deprecatedHooks,e);for(const n in e)this.deprecateHook(n,e[n])}addHooks(e){const n=Gc(e),s=Object.keys(n).map(r=>this.hook(r,n[r]));return()=>{for(const r of s.splice(0,s.length))r()}}removeHooks(e){const n=Gc(e);for(const s in n)this.removeHook(s,n[s])}callHook(e,...n){return this.callHookWith(Ab,e,...n)}callHookParallel(e,...n){return this.callHookWith(kb,e,...n)}callHookWith(e,n,...s){const r=this._before||this._after?{name:n,args:s,context:{}}:void 0;this._before&&ac(this._before,r);const i=e(this._hooks[n]||[],s);return i instanceof Promise?i.finally(()=>{this._after&&r&&ac(this._after,r)}):(this._after&&r&&ac(this._after,r),i)}beforeEach(e){return this._before=this._before||[],this._before.push(e),()=>{const n=this._before.indexOf(e);n!==-1&&this._before.splice(n,1)}}afterEach(e){return this._after=this._after||[],this._after.push(e),()=>{const n=this._after.indexOf(e);n!==-1&&this._after.splice(n,1)}}}function Rg(){return new Rb}function Nb(){let t,e=!1;const n=s=>{if(t&&t!==s)throw new Error("Context conflict")};return{use:()=>{if(t===void 0)throw new Error("Context is not available");return t},tryUse:()=>t,set:(s,r)=>{r||n(s),t=s,e=!0},unset:()=>{t=void 0,e=!1},call:(s,r)=>{n(s),t=s;try{return r()}finally{e||(t=void 0)}},async callAsync(s,r){t=s;const i=()=>{t=s},o=()=>t===s?i:void 0;Qc.add(o);try{const a=r();return e||(t=void 0),await a}finally{Qc.delete(o)}}}}function Db(){const t={};return{get(e){return t[e]||(t[e]=Nb()),t[e],t[e]}}}const ko=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof global<"u"?global:typeof window<"u"?window:{},tf="__unctx__",Ob=ko[tf]||(ko[tf]=Db()),Pb=t=>Ob.get(t),nf="__unctx_async_handlers__",Qc=ko[nf]||(ko[nf]=new Set);function Ng(t){const e=[];for(const r of Qc){const i=r();i&&e.push(i)}const n=()=>{for(const r of e)r()};let s=t();return"catch"in s&&(s=s.catch(r=>{throw n(),r})),[s,n]}const Dg=Pb("nuxt-app"),Lb="__nuxt_plugin";function Mb(t){let e=0;const n={provide:void 0,globalName:"nuxt",payload:Ht({data:{},state:{},_errors:{},...window.__NUXT__}),static:{data:{}},isHydrating:!0,deferHydration(){if(!n.isHydrating)return()=>{};e++;let i=!1;return()=>{if(!i&&(i=!0,e--,e===0))return n.isHydrating=!1,n.callHook("app:suspense:resolve")}},_asyncDataPromises:{},_asyncData:{},...t};n.hooks=Rg(),n.hook=n.hooks.hook,n.callHook=n.hooks.callHook,n.provide=(i,o)=>{const a="$"+i;Zi(n,a,o),Zi(n.vueApp.config.globalProperties,a,o)},Zi(n.vueApp,"$nuxt",n),Zi(n.vueApp.config.globalProperties,"$nuxt",n);const s=Ht(n.payload.config),r=new Proxy(s,{get(i,o){var a;return o==="public"?i.public:(a=i[o])!=null?a:i.public[o]},set(i,o,a){return o==="public"||o==="app"?!1:(i[o]=a,i.public[o]=a,!0)}});return n.provide("config",r),n}async function xb(t,e){if(typeof e!="function")return;const{provide:n}=await Ln(t,e,[t])||{};if(n&&typeof n=="object")for(const s in n)t.provide(s,n[s])}async function Ub(t,e){for(const n of e)await xb(t,n)}function Fb(t){return t.map(n=>typeof n!="function"?null:n.length>1?s=>n(s,s.provide):n).filter(Boolean)}function es(t){return t[Lb]=!0,t}function Ln(t,e,n){const s=()=>n?e(...n):e();return Dg.set(t),s()}function Xe(){const t=Dg.tryUse();if(!t){const e=Cn();if(!e)throw new Error("nuxt instance unavailable");return e.appContext.app.$nuxt}return t}function su(){return Xe().$config}function Zi(t,e,n){Object.defineProperty(t,e,{get:()=>n})}class Xc extends Error{constructor(){super(...arguments),this.statusCode=500,this.fatal=!1,this.unhandled=!1,this.statusMessage=void 0}toJSON(){const e={message:this.message,statusCode:this.statusCode};return this.statusMessage&&(e.statusMessage=this.statusMessage),this.data!==void 0&&(e.data=this.data),e}}Xc.__h3_error__=!0;function Jc(t){var n;if(typeof t=="string")return new Xc(t);if($b(t))return t;const e=new Xc((n=t.message)!=null?n:t.statusMessage,t.cause?{cause:t.cause}:void 0);if("stack"in t)try{Object.defineProperty(e,"stack",{get(){return t.stack}})}catch{try{e.stack=t.stack}catch{}}return t.data&&(e.data=t.data),t.statusCode?e.statusCode=t.statusCode:t.status&&(e.statusCode=t.status),t.statusMessage?e.statusMessage=t.statusMessage:t.statusText&&(e.statusMessage=t.statusText),t.fatal!==void 0&&(e.fatal=t.fatal),t.unhandled!==void 0&&(e.unhandled=t.unhandled),e}function $b(t){var e;return((e=t==null?void 0:t.constructor)==null?void 0:e.__h3_error__)===!0}const ya=()=>ia(Xe().payload,"error"),Or=t=>{const e=Og(t);try{Xe().callHook("app:error",e);const s=ya();s.value=s.value||e}catch{throw e}return e},Vb=async(t={})=>{const e=Xe(),n=ya();e.callHook("app:error:cleared",t),t.redirect&&await e.$router.replace(t.redirect),n.value=null},Bb=t=>!!(t&&typeof t=="object"&&"__nuxt_error"in t),Og=t=>{const e=Jc(t);return e.__nuxt_error=!0,e};function jb(...t){const e=typeof t[t.length-1]=="string"?t.pop():void 0;typeof t[0]!="string"&&t.unshift(e);const[n,s]=t;if(!n||typeof n!="string")throw new TypeError("[nuxt] [useState] key must be a string: "+n);if(s!==void 0&&typeof s!="function")throw new Error("[nuxt] [useState] init must be a function: "+s);const r="$s"+n,i=Xe(),o=ia(i.payload.state,r);if(o.value===void 0&&s){const a=s();if(Re(a))return i.payload.state[r]=a,a;o.value=a}return o}const va=()=>{var t;return(t=Xe())==null?void 0:t.$router},Pg=()=>Cn()?pt("_route",Xe()._route):Xe()._route,Hb=t=>t,Lg=(t,e,n={})=>{const s=Xe();n.global||typeof t=="function"?s._middleware.global.push(typeof t=="function"?t:e):s._middleware.named[t]=e},qb=()=>{try{if(Xe()._processingMiddleware)return!0}catch{return!0}return!1},ru=(t,e)=>{t||(t="/");const n=typeof t=="string"?t:t.path||"/",s=pa(n,!0);if(s&&!(e!=null&&e.external))throw new Error("Navigating to external URL is not allowed by default. Use `nagivateTo (url, { external: true })`.");if(s&&ma(n).protocol==="script:")throw new Error("Cannot navigate to an URL with script protocol.");if(!s&&qb())return t;const r=va();return s?(e!=null&&e.replace?location.replace(n):location.href=n,Promise.resolve()):e!=null&&e.replace?r.replace(t):r.push(t)};async function Mg(t,e=va()){if(e._routePreloaded||(e._routePreloaded=new Set),e._routePreloaded.has(t))return;e._routePreloaded.add(t);const n=e._preloadPromises=e._preloadPromises||[];if(n.length>4)return Promise.all(n).then(()=>Mg(t,e));const s=e.resolve(t).matched.map(r=>{var i;return(i=r.components)==null?void 0:i.default}).filter(r=>typeof r=="function");for(const r of s){const i=Promise.resolve(r()).catch(()=>{}).finally(()=>n.splice(n.indexOf(i)));n.push(i)}await Promise.all(n)}const Kb="modulepreload",Wb=function(t,e){return t.startsWith(".")?new URL(t,e).href:t},sf={},Ye=function(e,n,s){if(!n||n.length===0)return e();const r=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=Wb(i,s),i in sf)return;sf[i]=!0;const o=i.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!s)for(let u=r.length-1;u>=0;u--){const h=r[u];if(h.href===i&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${a}`))return;const l=document.createElement("link");if(l.rel=o?"stylesheet":Kb,o||(l.as="script",l.crossOrigin=""),l.href=i,document.head.appendChild(l),o)return new Promise((u,h)=>{l.addEventListener("load",u),l.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e())};function rf(t,e={}){const n=zb(t,e),s=Xe(),r=s._payloadCache=s._payloadCache||{};return r[t]||(r[t]=Gb(n).then(i=>i||(delete r[t],null))),r[t]}function zb(t,e={}){const n=new URL(t,"http://localhost");if(n.search)throw new Error("Payload URL cannot contain search params: "+t);if(n.host!=="localhost")throw new Error("Payload URL cannot contain host: "+t);const s=e.hash||(e.fresh?Date.now():"");return ga(su().app.baseURL,n.pathname,s?`_payload.${s}.js`:"_payload.js")}async function Gb(t){const e=await Ye(()=>import(t),[],import.meta.url).catch(n=>{console.warn("[nuxt] Cannot load payload ",t,n)});return(e==null?void 0:e.default)||null}function Qb(){return!!Xe().payload.prerenderedAt}const Xb=(...t)=>t.find(e=>e!==void 0),Jb="noopener noreferrer",Yb=globalThis.requestIdleCallback||(t=>{const e=Date.now(),n={didTimeout:!1,timeRemaining:()=>Math.max(0,50-(Date.now()-e))};return setTimeout(()=>{t(n)},1)}),Zb=globalThis.cancelIdleCallback||(t=>{clearTimeout(t)});function e0(t){const e=t.componentName||"NuxtLink";return Tn({name:e,props:{to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1},custom:{type:Boolean,default:void 0,required:!1}},setup(n,{slots:s}){const r=va(),i=je(()=>n.to||n.href||""),o=je(()=>n.external||n.target&&n.target!=="_self"?!0:typeof i.value=="object"?!1:i.value===""||pa(i.value,!0)),a=fn(!1),c=fn(null);if(n.prefetch!==!1&&n.noPrefetch!==!0&&typeof i.value=="string"&&n.target!=="_blank"&&!n0()){const u=Xe(),h=t0();let f,d=null;ua(()=>{f=Yb(()=>{var m;(m=c==null?void 0:c.value)!=null&&m.tagName&&(d=h.observe(c.value,async()=>{d==null||d(),d=null,await Promise.all([u.hooks.callHook("link:prefetch",i.value).catch(()=>{}),!o.value&&Mg(i.value,r).catch(()=>{})]),a.value=!0}))})}),Ei(()=>{f&&Zb(f),d==null||d(),d=null})}return()=>{var d,m,E;if(!o.value)return Rt(kE("RouterLink"),{ref:C=>{c.value=C==null?void 0:C.$el},to:i.value,...a.value&&!n.custom?{class:n.prefetchedClass||t.prefetchedClass}:{},activeClass:n.activeClass||t.activeClass,exactActiveClass:n.exactActiveClass||t.exactActiveClass,replace:n.replace,ariaCurrentValue:n.ariaCurrentValue,custom:n.custom},s.default);const l=typeof i.value=="object"?(m=(d=r.resolve(i.value))==null?void 0:d.href)!=null?m:null:i.value||null,u=n.target||null,h=n.noRel?null:Xb(n.rel,t.externalRelAttribute,l?Jb:"")||null,f=()=>ru(l,{replace:n.replace});return n.custom?s.default?s.default({href:l,navigate:f,route:r.resolve(l),rel:h,target:u,isExternal:o.value,isActive:!1,isExactActive:!1}):null:Rt("a",{ref:c,href:l,rel:h,target:u},(E=s.default)==null?void 0:E.call(s))}}})}const T1=e0({componentName:"NuxtLink"});function t0(){const t=Xe();if(t._observer)return t._observer;let e=null;const n=new Map,s=(i,o)=>(e||(e=new IntersectionObserver(a=>{for(const c of a){const l=n.get(c.target);(c.isIntersecting||c.intersectionRatio>0)&&l&&l()}})),n.set(i,o),e.observe(i),()=>{n.delete(i),e.unobserve(i),n.size===0&&(e.disconnect(),e=null)});return t._observer={observe:s}}function n0(){const t=navigator.connection;return!!(t&&(t.saveData||/2g/.test(t.effectiveType)))}function cc(t){return t!==null&&typeof t=="object"}function Yc(t,e,n=".",s){if(!cc(e))return Yc(t,{},n,s);const r=Object.assign({},e);for(const i in t){if(i==="__proto__"||i==="constructor")continue;const o=t[i];o!=null&&(s&&s(r,i,o,n)||(Array.isArray(o)&&Array.isArray(r[i])?r[i]=[...o,...r[i]]:cc(o)&&cc(r[i])?r[i]=Yc(o,r[i],(n?`${n}.`:"")+i.toString(),s):r[i]=o))}return r}function xg(t){return(...e)=>e.reduce((n,s)=>Yc(n,s,"",t),{})}const s0=xg(),r0=xg((t,e,n,s)=>{if(typeof t[e]<"u"&&typeof n=="function")return t[e]=n(t[e]),!0}),i0={};r0(i0);const lc={},o0=es(t=>{for(const e in lc)t.vueApp.component(e,lc[e]),t.vueApp.component("Lazy"+e,lc[e])}),a0=["script","style","noscript"],c0=["base","meta","link","style","script","noscript"],l0=["base","title","titleTemplate","bodyAttrs","htmlAttrs"];function u0(t,e){const{props:n,tag:s}=t;if(l0.includes(s))return s;if(s==="link"&&n.rel==="canonical")return"canonical";if(n.charset)return"charset";const r=["id"];s==="meta"&&r.push("name","property","http-equiv");for(const i of r)if(typeof n[i]<"u"){const o=String(n[i]);return e&&!e(o)?!1:`${s}:${i}:${o}`}return!1}const eo=(t,e)=>{const{tag:n,$el:s}=t;!s||(Object.entries(n.props).forEach(([r,i])=>{i=String(i);const o=`attr:${r}`;if(r==="class"){if(!i)return;for(const a of i.split(" ")){const c=`${o}:${a}`;e&&e(t,c,()=>s.classList.remove(a)),s.classList.contains(a)||s.classList.add(a)}return}e&&!r.startsWith("data-h-")&&e(t,o,()=>s.removeAttribute(r)),s.getAttribute(r)!==i&&s.setAttribute(r,i)}),a0.includes(n.tag)&&s.innerHTML!==(n.children||"")&&(s.innerHTML=n.children||""))};function iu(t){let e=9;for(let n=0;n<t.length;)e=Math.imul(e^t.charCodeAt(n++),9**9);return((e^e>>>9)+65536).toString(16).substring(1,8).toLowerCase()}async function Ug(t,e={}){var u,h;const n={shouldRender:!0};if(await t.hooks.callHook("dom:beforeRender",n),!n.shouldRender)return;const s=e.document||window.document,r=t._popSideEffectQueue();t.headEntries().map(f=>f._sde).forEach(f=>{Object.entries(f).forEach(([d,m])=>{r[d]=m})});const i=async f=>{const d=t.headEntries().find(E=>E._i===f._e),m={renderId:f._d||iu(JSON.stringify({...f,_e:void 0,_p:void 0})),$el:null,shouldRender:!0,tag:f,entry:d,staleSideEffects:r};return await t.hooks.callHook("dom:beforeRenderTag",m),m},o=[],a={body:[],head:[]},c=(f,d,m)=>{d=`${f.renderId}:${d}`,f.entry&&(f.entry._sde[d]=m),delete r[d]},l=f=>{t._elMap[f.renderId]=f.$el,o.push(f),c(f,"el",()=>{var d;(d=f.$el)==null||d.remove(),delete t._elMap[f.renderId]})};for(const f of await t.resolveTags()){const d=await i(f);if(!d.shouldRender)continue;const{tag:m}=d;if(m.tag==="title"){s.title=m.children||"",o.push(d);continue}if(m.tag==="htmlAttrs"||m.tag==="bodyAttrs"){d.$el=s[m.tag==="htmlAttrs"?"documentElement":"body"],eo(d,c),o.push(d);continue}if(d.$el=t._elMap[d.renderId],!d.$el&&m._hash&&(d.$el=s.querySelector(`${(u=m.tagPosition)!=null&&u.startsWith("body")?"body":"head"} > ${m.tag}[data-h-${m._hash}]`)),d.$el){d.tag._d&&eo(d),l(d);continue}d.$el=s.createElement(m.tag),eo(d),a[(h=m.tagPosition)!=null&&h.startsWith("body")?"body":"head"].push(d)}Object.entries(a).forEach(([f,d])=>{if(!!d.length){for(const m of[...s[f].children].reverse()){const E=m.tagName.toLowerCase();if(!c0.includes(E))continue;const C=u0({tag:E,props:m.getAttributeNames().reduce((p,w)=>({...p,[w]:m.getAttribute(w)}),{})}),v=d.findIndex(p=>p&&(p.tag._d===C||m.isEqualNode(p.$el)));if(v!==-1){const p=d[v];p.$el=m,eo(p),l(p),delete d[v]}}d.forEach(m=>{if(!!m.$el){switch(m.tag.tagPosition){case"bodyClose":s.body.appendChild(m.$el);break;case"bodyOpen":s.body.insertBefore(m.$el,s.body.firstChild);break;case"head":default:s.head.appendChild(m.$el);break}l(m)}})}});for(const f of o)await t.hooks.callHook("dom:renderTag",f);Object.values(r).forEach(f=>f())}let uo=null;async function h0(t,e={}){function n(){return uo=null,Ug(t,e)}const s=e.delayFn||(r=>setTimeout(r,10));return uo=uo||new Promise(r=>s(()=>r(n())))}const f0={__proto__:null,debouncedRenderDOMHead:h0,get domUpdatePromise(){return uo},hashCode:iu,renderDOMHead:Ug},d0=["title","titleTemplate","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"],p0=["tagPosition","tagPriority","tagDuplicateStrategy"];async function g0(t,e){const n={tag:t,props:{}};return t==="title"||t==="titleTemplate"?(n.children=e instanceof Promise?await e:e,n):(n.props=await m0({...e}),["children","innerHtml","innerHTML"].forEach(s=>{typeof n.props[s]<"u"&&(n.children=n.props[s],delete n.props[s])}),Object.keys(n.props).filter(s=>p0.includes(s)).forEach(s=>{n[s]=n.props[s],delete n.props[s]}),typeof n.props.class=="object"&&!Array.isArray(n.props.class)&&(n.props.class=Object.keys(n.props.class).filter(s=>n.props.class[s])),Array.isArray(n.props.class)&&(n.props.class=n.props.class.join(" ")),n.props.content&&Array.isArray(n.props.content)?n.props.content.map((s,r)=>{const i={...n,props:{...n.props}};return i.props.content=s,i.key=`${n.props.name||n.props.property}:${r}`,i}):n)}async function m0(t){for(const e of Object.keys(t))t[e]instanceof Promise&&(t[e]=await t[e]),String(t[e])==="true"?t[e]="":String(t[e])==="false"&&delete t[e];return t}const of=t=>{if(typeof t.tagPriority=="number")return t.tagPriority;switch(t.tagPriority){case"critical":return 2;case"high":return 9;case"low":return 12}switch(t.tag){case"base":return-1;case"title":return 1;case"meta":return t.props.charset?-2:t.props["http-equiv"]==="content-security-policy"?0:10;default:return 10}},y0=(t,e)=>of(t)-of(e),v0=["base","title","titleTemplate","bodyAttrs","htmlAttrs"];function w0(t,e){const{props:n,tag:s}=t;if(v0.includes(s))return s;if(s==="link"&&n.rel==="canonical")return"canonical";if(n.charset)return"charset";const r=["id"];s==="meta"&&r.push("name","property","http-equiv");for(const i of r)if(typeof n[i]<"u"){const o=String(n[i]);return e&&!e(o)?!1:`${s}:${i}:${o}`}return!1}const af=(t,e)=>t==null?e||null:typeof t=="function"?t(e):t.replace("%s",e!=null?e:"");function E0(t){let e=t.findIndex(s=>s.tag==="titleTemplate");const n=t.findIndex(s=>s.tag==="title");if(n!==-1&&e!==-1){const s=af(t[e].children,t[n].children);s!==null?t[n].children=s||t[n].children:delete t[n]}else if(e!==-1){const s=af(t[e].children);s!==null&&(t[e].children=s,t[e].tag="title",e=-1)}return e!==-1&&delete t[e],t.filter(Boolean)}const _0=t=>{t=t||{};const e=t.dedupeKeys||["hid","vmid","key"];return{hooks:{"tag:normalise":function({tag:n}){e.forEach(r=>{n.props[r]&&(n.key=n.props[r],delete n.props[r])});const s=n.key?`${n.tag}:${n.key}`:w0(n);s&&(n._d=s)},"tags:resolve":function(n){const s={};n.tags.forEach(r=>{let i=r._d||r._p;const o=s[i];if(o){let a=r==null?void 0:r.tagDuplicateStrategy;if(!a&&(r.tag==="htmlAttrs"||r.tag==="bodyAttrs")&&(a="merge"),a==="merge"){const l=o.props;["class","style"].forEach(u=>{r.props[u]&&l[u]&&(u==="style"&&!l[u].endsWith(";")&&(l[u]+=";"),r.props[u]=`${l[u]} ${r.props[u]}`)}),s[i].props={...l,...r.props};return}else r._e===o._e&&(i=r._d=`${i}:${r._p}`);const c=Object.keys(r.props).length;if((c===0||c===1&&typeof r.props["data-h-key"]<"u")&&!r.children){delete s[i];return}}s[i]=r}),n.tags=Object.values(s)}}}},b0=()=>({hooks:{"tags:resolve":t=>{const e=n=>{var s;return(s=t.tags.find(r=>r._d===n))==null?void 0:s._p};for(const n of t.tags){if(!n.tagPriority||typeof n.tagPriority=="number")continue;const s=[{prefix:"before:",offset:-1},{prefix:"after:",offset:1}];for(const{prefix:r,offset:i}of s)if(n.tagPriority.startsWith(r)){const o=n.tagPriority.replace(r,""),a=e(o);typeof a<"u"&&(n._p=a+i)}}t.tags.sort((n,s)=>n._p-s._p).sort(y0)}}}),T0=()=>({hooks:{"tags:resolve":t=>{t.tags=E0(t.tags)}}}),I0=()=>({hooks:{"tag:normalise":function({tag:t}){typeof t.props.body<"u"&&(t.tagPosition="bodyClose",delete t.props.body)}}}),C0=typeof window<"u",S0=()=>({hooks:{"tag:normalise":t=>{var r,i;const{tag:e,entry:n}=t,s=typeof e.props._dynamic<"u";!Fg.includes(e.tag)||!e.key||(e._hash=iu(JSON.stringify({tag:e.tag,key:e.key})),!(C0||((i=(r=Vg())==null?void 0:r.resolvedOptions)==null?void 0:i.document))&&(n._m==="server"||s)&&(e.props[`data-h-${e._hash}`]=""))},"tags:resolve":t=>{t.tags=t.tags.map(e=>(delete e.props._dynamic,e))}}}),A0=t=>({hooks:{"entries:updated":function(e){if(typeof(t==null?void 0:t.document)>"u"&&typeof window>"u")return;let n=t==null?void 0:t.delayFn;!n&&typeof requestAnimationFrame<"u"&&(n=requestAnimationFrame),Promise.resolve().then(function(){return f0}).then(({debouncedRenderDOMHead:s})=>{s(e,{document:(t==null?void 0:t.document)||window.document,delayFn:n})})}}}),k0=()=>{const t=(e,n)=>{const s={},r={};Object.entries(n.props).forEach(([o,a])=>{o.startsWith("on")&&typeof a=="function"?r[o]=a:s[o]=a});let i;return e==="dom"&&n.tag==="script"&&typeof s.src=="string"&&typeof r.onload<"u"&&(i=s.src,delete s.src),{props:s,eventHandlers:r,delayedSrc:i}};return{hooks:{"ssr:render":function(e){e.tags=e.tags.map(n=>(n.props=t("ssr",n).props,n))},"dom:beforeRenderTag":function(e){const{props:n,eventHandlers:s,delayedSrc:r}=t("dom",e.tag);!Object.keys(s).length||(e.tag.props=n,e.tag._eventHandlers=s,e.tag._delayedSrc=r)},"dom:renderTag":function(e){const n=e.$el;if(!e.tag._eventHandlers||!n)return;const s=e.tag.tag==="bodyAttrs"&&typeof window<"u"?window:n;Object.entries(e.tag._eventHandlers).forEach(([r,i])=>{const o=`${e.tag._d||e.tag._p}:${r}`,a=r.slice(2).toLowerCase(),c=`data-h-${a}`;if(delete e.staleSideEffects[o],n.hasAttribute(c))return;const l=i;n.setAttribute(c,""),s.addEventListener(a,l),e.entry&&(e.entry._sde[o]=()=>{s.removeEventListener(a,l),n.removeAttribute(c)})}),e.tag._delayedSrc&&n.setAttribute("src",e.tag._delayedSrc)}}}};function R0(t){return Array.isArray(t)?t:[t]}const Fg=["base","meta","link","style","script","noscript"];let $g;const N0=t=>$g=t,Vg=()=>$g,D0=10;async function O0(t){const e=[];return Object.entries(t.resolvedInput||t.input).filter(([n,s])=>typeof s<"u"&&d0.includes(n)).forEach(([n,s])=>{const r=R0(s);e.push(...r.map(i=>g0(n,i)).flat())}),(await Promise.all(e)).flat().map((n,s)=>(n._e=t._i,n._p=(t._i<<D0)+s,n))}const P0=()=>[_0(),b0(),T0(),S0(),k0(),I0()],L0=(t={})=>[A0({document:t==null?void 0:t.document,delayFn:t==null?void 0:t.domDelayFn})];function M0(t={}){const e=x0({...t,plugins:[...L0(t),...(t==null?void 0:t.plugins)||[]]});return N0(e),e}function x0(t={}){let e=[],n={},s=0;const r=Rg();t!=null&&t.hooks&&r.addHooks(t.hooks),t.plugins=[...P0(),...(t==null?void 0:t.plugins)||[]],t.plugins.forEach(a=>a.hooks&&r.addHooks(a.hooks));const i=()=>r.callHook("entries:updated",o),o={resolvedOptions:t,headEntries(){return e},get hooks(){return r},push(a,c){const l={_i:s++,input:a,_sde:{}};return c!=null&&c.mode&&(l._m=c==null?void 0:c.mode),e.push(l),i(),{dispose(){e=e.filter(u=>u._i!==l._i?!0:(n={...n,...u._sde||{}},u._sde={},i(),!1))},patch(u){e=e.map(h=>(h._i===l._i&&(l.input=h.input=u,i()),h))}}},async resolveTags(){const a={tags:[],entries:[...e]};await r.callHook("entries:resolve",a);for(const c of a.entries)for(const l of await O0(c)){const u={tag:l,entry:c};await r.callHook("tag:normalise",u),a.tags.push(u.tag)}return await r.callHook("tags:resolve",a),a.tags},_elMap:{},_popSideEffectQueue(){const a={...n};return n={},a}};return o.hooks.callHook("init",o),o}function U0(t){return typeof t=="function"?t():ft(t)}function Ro(t,e=""){if(t instanceof Promise)return t;const n=U0(t);if(!t||!n)return n;if(Array.isArray(n))return n.map(s=>Ro(s,e));if(typeof n=="object"){let s=!1;const r=Object.fromEntries(Object.entries(n).map(([i,o])=>i==="titleTemplate"||i.startsWith("on")?[i,ft(o)]:((typeof o=="function"||Re(o))&&(s=!0),[i,Ro(o,i)])));return s&&Fg.includes(String(e))&&(r._dynamic=!0),r}return n}const F0=vg.startsWith("3"),$0=typeof window<"u",Bg="usehead";function ou(){return Cn()&&pt(Bg)||Vg()}function V0(t={}){const e=M0({...t,domDelayFn:s=>setTimeout(()=>As(()=>s()),10),plugins:[B0(),...(t==null?void 0:t.plugins)||[]]}),n={install(s){F0&&(s.config.globalProperties.$unhead=e,s.provide(Bg,e))}};return e.install=n.install,e}const B0=()=>({hooks:{"entries:resolve":function(t){for(const e of t.entries)e.resolvedInput=Ro(e.input)}}});function j0(t,e={}){const n=ou(),s=fn({});dE(()=>{s.value=Ro(t)});const r=n.push(s.value,e);return ms(s,o=>r.patch(o)),Cn()&&Ei(()=>{r.dispose()}),r}function H0(t,e={}){return ou().push(t,e)}function jg(t,e={}){var r;const n=ou(),s=$0||!!((r=n.resolvedOptions)!=null&&r.document);if(!(e.mode==="server"&&s||e.mode==="client"&&!s))return s?j0(t,e):H0(t,e)}const q0=["script","style","noscript"],K0=["base","meta","link","style","script","noscript"],W0=["base","title","titleTemplate","bodyAttrs","htmlAttrs"];function z0(t,e){const{props:n,tag:s}=t;if(W0.includes(s))return s;if(s==="link"&&n.rel==="canonical")return"canonical";if(n.charset)return"charset";const r=["id"];s==="meta"&&r.push("name","property","http-equiv");for(const i of r)if(typeof n[i]<"u"){const o=String(n[i]);return e&&!e(o)?!1:`${s}:${i}:${o}`}return!1}const to=(t,e)=>{const{tag:n,$el:s}=t;!s||(Object.entries(n.props).forEach(([r,i])=>{i=String(i);const o=`attr:${r}`;if(r==="class"){if(!i)return;for(const a of i.split(" ")){const c=`${o}:${a}`;e&&e(t,c,()=>s.classList.remove(a)),s.classList.contains(a)||s.classList.add(a)}return}e&&!r.startsWith("data-h-")&&e(t,o,()=>s.removeAttribute(r)),s.getAttribute(r)!==i&&s.setAttribute(r,i)}),q0.includes(n.tag)&&s.innerHTML!==(n.children||"")&&(s.innerHTML=n.children||""))};function G0(t){let e=9;for(let n=0;n<t.length;)e=Math.imul(e^t.charCodeAt(n++),9**9);return((e^e>>>9)+65536).toString(16).substring(1,8).toLowerCase()}async function Hg(t,e={}){var u,h;const n={shouldRender:!0};if(await t.hooks.callHook("dom:beforeRender",n),!n.shouldRender)return;const s=e.document||window.document,r=t._popSideEffectQueue();t.headEntries().map(f=>f._sde).forEach(f=>{Object.entries(f).forEach(([d,m])=>{r[d]=m})});const i=async f=>{const d=t.headEntries().find(E=>E._i===f._e),m={renderId:f._d||G0(JSON.stringify({...f,_e:void 0,_p:void 0})),$el:null,shouldRender:!0,tag:f,entry:d,staleSideEffects:r};return await t.hooks.callHook("dom:beforeRenderTag",m),m},o=[],a={body:[],head:[]},c=(f,d,m)=>{d=`${f.renderId}:${d}`,f.entry&&(f.entry._sde[d]=m),delete r[d]},l=f=>{t._elMap[f.renderId]=f.$el,o.push(f),c(f,"el",()=>{var d;(d=f.$el)==null||d.remove(),delete t._elMap[f.renderId]})};for(const f of await t.resolveTags()){const d=await i(f);if(!d.shouldRender)continue;const{tag:m}=d;if(m.tag==="title"){s.title=m.children||"",o.push(d);continue}if(m.tag==="htmlAttrs"||m.tag==="bodyAttrs"){d.$el=s[m.tag==="htmlAttrs"?"documentElement":"body"],to(d,c),o.push(d);continue}if(d.$el=t._elMap[d.renderId],!d.$el&&m._hash&&(d.$el=s.querySelector(`${(u=m.tagPosition)!=null&&u.startsWith("body")?"body":"head"} > ${m.tag}[data-h-${m._hash}]`)),d.$el){d.tag._d&&to(d),l(d);continue}d.$el=s.createElement(m.tag),to(d),a[(h=m.tagPosition)!=null&&h.startsWith("body")?"body":"head"].push(d)}Object.entries(a).forEach(([f,d])=>{if(!!d.length){for(const m of[...s[f].children].reverse()){const E=m.tagName.toLowerCase();if(!K0.includes(E))continue;const C=z0({tag:E,props:m.getAttributeNames().reduce((p,w)=>({...p,[w]:m.getAttribute(w)}),{})}),v=d.findIndex(p=>p&&(p.tag._d===C||m.isEqualNode(p.$el)));if(v!==-1){const p=d[v];p.$el=m,to(p),l(p),delete d[v]}}d.forEach(m=>{if(!!m.$el){switch(m.tag.tagPosition){case"bodyClose":s.body.appendChild(m.$el);break;case"bodyOpen":s.body.insertBefore(m.$el,s.body.firstChild);break;case"head":default:s.head.appendChild(m.$el);break}l(m)}})}});for(const f of o)await t.hooks.callHook("dom:renderTag",f);Object.values(r).forEach(f=>f())}let uc=null;async function Q0(t,e={}){function n(){return uc=null,Hg(t,e)}const s=e.delayFn||(r=>setTimeout(r,10));return uc=uc||new Promise(r=>s(()=>r(n())))}function X0(t){const e=V0(),n={unhead:e,install(s){s.config.globalProperties&&(s.config.globalProperties.$head=e),s.provide("usehead",e)},resolveTags(){return e.resolveTags()},headEntries(){return e.headEntries()},headTags(){return e.resolveTags()},push(s,r){return e.push(s,r)},addEntry(s,r){return e.push(s,r)},addHeadObjs(s,r){return e.push(s,r)},addReactiveEntry(s,r){const i=jg(s,r);return typeof i<"u"?i.dispose:()=>{}},removeHeadObjs(){},updateDOM(s,r){r?Hg(e,{document:s}):Q0(e,{delayFn:i=>setTimeout(()=>i(),50),document:s})},internalHooks:e.hooks,hooks:{"before:dom":[],"resolved:tags":[],"resolved:entries":[]}};return e.addHeadObjs=n.addHeadObjs,e.updateDOM=n.updateDOM,e.hooks.hook("dom:beforeRender",s=>{for(const r of n.hooks["before:dom"])r()===!1&&(s.shouldRender=!1)}),t&&n.addHeadObjs(t),n}const J0={meta:[{name:"viewport",content:"width=device-width, initial-scale=1"},{charset:"utf-8"}],link:[],style:[],script:[],noscript:[]},Y0=!1,Zc=!1,Z0=!1,eT="__nuxt",tT=es(t=>{const e=X0();e.push(J0),t.vueApp.use(e);{let n=!0;const s=()=>{n=!1,e.internalHooks.callHook("entries:updated",e.unhead)};e.internalHooks.hook("dom:beforeRender",r=>{r.shouldRender=!n}),t.hooks.hook("page:start",()=>{n=!0}),t.hooks.hook("page:finish",s),t.hooks.hook("app:mounted",s)}t._useHead=jg});/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Us=typeof window<"u";function nT(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const we=Object.assign;function hc(t,e){const n={};for(const s in e){const r=e[s];n[s]=qt(r)?r.map(t):t(r)}return n}const jr=()=>{},qt=Array.isArray,sT=/\/$/,rT=t=>t.replace(sT,"");function fc(t,e,n="/"){let s,r={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(s=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),r=t(i)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=cT(s!=null?s:e,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:o}}function iT(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function cf(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function oT(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&ir(e.matched[s],n.matched[r])&&qg(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function ir(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function qg(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!aT(t[n],e[n]))return!1;return!0}function aT(t,e){return qt(t)?lf(t,e):qt(e)?lf(e,t):t===e}function lf(t,e){return qt(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function cT(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let r=n.length-1,i,o;for(i=0;i<s.length;i++)if(o=s[i],o!==".")if(o==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(i-(i===s.length?1:0)).join("/")}var ni;(function(t){t.pop="pop",t.push="push"})(ni||(ni={}));var Hr;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Hr||(Hr={}));function lT(t){if(!t)if(Us){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),rT(t)}const uT=/^[^#]+#/;function hT(t,e){return t.replace(uT,"#")+e}function fT(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const wa=()=>({left:window.pageXOffset,top:window.pageYOffset});function dT(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=fT(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function uf(t,e){return(history.state?history.state.position-e:-1)+t}const el=new Map;function pT(t,e){el.set(t,e)}function gT(t){const e=el.get(t);return el.delete(t),e}let mT=()=>location.protocol+"//"+location.host;function Kg(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let a=r.includes(t.slice(i))?t.slice(i).length:1,c=r.slice(a);return c[0]!=="/"&&(c="/"+c),cf(c,"")}return cf(n,t)+s+r}function yT(t,e,n,s){let r=[],i=[],o=null;const a=({state:f})=>{const d=Kg(t,location),m=n.value,E=e.value;let C=0;if(f){if(n.value=d,e.value=f,o&&o===m){o=null;return}C=E?f.position-E.position:0}else s(d);r.forEach(v=>{v(n.value,m,{delta:C,type:ni.pop,direction:C?C>0?Hr.forward:Hr.back:Hr.unknown})})};function c(){o=n.value}function l(f){r.push(f);const d=()=>{const m=r.indexOf(f);m>-1&&r.splice(m,1)};return i.push(d),d}function u(){const{history:f}=window;!f.state||f.replaceState(we({},f.state,{scroll:wa()}),"")}function h(){for(const f of i)f();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:l,destroy:h}}function hf(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?wa():null}}function vT(t){const{history:e,location:n}=window,s={value:Kg(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:mT()+t+c;try{e[u?"replaceState":"pushState"](l,"",f),r.value=l}catch(d){console.error(d),n[u?"replace":"assign"](f)}}function o(c,l){const u=we({},e.state,hf(r.value.back,c,r.value.forward,!0),l,{position:r.value.position});i(c,u,!0),s.value=c}function a(c,l){const u=we({},r.value,e.state,{forward:c,scroll:wa()});i(u.current,u,!0);const h=we({},hf(s.value,c,null),{position:u.position+1},l);i(c,h,!1),s.value=c}return{location:s,state:r,push:a,replace:o}}function Wg(t){t=lT(t);const e=vT(t),n=yT(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=we({location:"",base:t,go:s,createHref:hT.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function wT(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),Wg(t)}function ET(t){return typeof t=="string"||t&&typeof t=="object"}function zg(t){return typeof t=="string"||typeof t=="symbol"}const Dn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Gg=Symbol("");var ff;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(ff||(ff={}));function or(t,e){return we(new Error,{type:t,[Gg]:!0},e)}function rn(t,e){return t instanceof Error&&Gg in t&&(e==null||!!(t.type&e))}const df="[^/]+?",_T={sensitive:!1,strict:!1,start:!0,end:!0},bT=/[.+*?^${}()[\]/\\]/g;function TT(t,e){const n=we({},_T,e),s=[];let r=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(r+="/");for(let h=0;h<l.length;h++){const f=l[h];let d=40+(n.sensitive?.25:0);if(f.type===0)h||(r+="/"),r+=f.value.replace(bT,"\\$&"),d+=40;else if(f.type===1){const{value:m,repeatable:E,optional:C,regexp:v}=f;i.push({name:m,repeatable:E,optional:C});const p=v||df;if(p!==df){d+=10;try{new RegExp(`(${p})`)}catch(T){throw new Error(`Invalid custom RegExp for param "${m}" (${p}): `+T.message)}}let w=E?`((?:${p})(?:/(?:${p}))*)`:`(${p})`;h||(w=C&&l.length<2?`(?:/${w})`:"/"+w),C&&(w+="?"),r+=w,d+=20,C&&(d+=-8),E&&(d+=-20),p===".*"&&(d+=-50)}u.push(d)}s.push(u)}if(n.strict&&n.end){const l=s.length-1;s[l][s[l].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const d=u[f]||"",m=i[f-1];h[m.name]=d&&m.repeatable?d.split("/"):d}return h}function c(l){let u="",h=!1;for(const f of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const d of f)if(d.type===0)u+=d.value;else if(d.type===1){const{value:m,repeatable:E,optional:C}=d,v=m in l?l[m]:"";if(qt(v)&&!E)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const p=qt(v)?v.join("/"):v;if(!p)if(C)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${m}"`);u+=p}}return u||"/"}return{re:o,score:s,keys:i,parse:a,stringify:c}}function IT(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function CT(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=IT(s[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-s.length)===1){if(pf(s))return 1;if(pf(r))return-1}return r.length-s.length}function pf(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const ST={type:0,value:""},AT=/[a-zA-Z0-9_]/;function kT(t){if(!t)return[[]];if(t==="/")return[[ST]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(d){throw new Error(`ERR (${n})/"${l}": ${d}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,c,l="",u="";function h(){!l||(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function f(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):f();break;case 4:f(),n=s;break;case 1:c==="("?n=2:AT.test(c)?f():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),r}function RT(t,e,n){const s=TT(kT(t.path),n),r=we(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function NT(t,e){const n=[],s=new Map;e=yf({strict:!1,end:!0,sensitive:!1},e);function r(u){return s.get(u)}function i(u,h,f){const d=!f,m=DT(u);m.aliasOf=f&&f.record;const E=yf(e,u),C=[m];if("alias"in u){const w=typeof u.alias=="string"?[u.alias]:u.alias;for(const T of w)C.push(we({},m,{components:f?f.record.components:m.components,path:T,aliasOf:f?f.record:m}))}let v,p;for(const w of C){const{path:T}=w;if(h&&T[0]!=="/"){const k=h.record.path,M=k[k.length-1]==="/"?"":"/";w.path=h.record.path+(T&&M+T)}if(v=RT(w,h,E),f?f.alias.push(v):(p=p||v,p!==v&&p.alias.push(v),d&&u.name&&!mf(v)&&o(u.name)),m.children){const k=m.children;for(let M=0;M<k.length;M++)i(k[M],v,f&&f.children[M])}f=f||v,(v.record.components&&Object.keys(v.record.components).length||v.record.name||v.record.redirect)&&c(v)}return p?()=>{o(p)}:jr}function o(u){if(zg(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&CT(u,n[h])>=0&&(u.record.path!==n[h].record.path||!Qg(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!mf(u)&&s.set(u.record.name,u)}function l(u,h){let f,d={},m,E;if("name"in u&&u.name){if(f=s.get(u.name),!f)throw or(1,{location:u});E=f.record.name,d=we(gf(h.params,f.keys.filter(p=>!p.optional).map(p=>p.name)),u.params&&gf(u.params,f.keys.map(p=>p.name))),m=f.stringify(d)}else if("path"in u)m=u.path,f=n.find(p=>p.re.test(m)),f&&(d=f.parse(m),E=f.record.name);else{if(f=h.name?s.get(h.name):n.find(p=>p.re.test(h.path)),!f)throw or(1,{location:u,currentLocation:h});E=f.record.name,d=we({},h.params,u.params),m=f.stringify(d)}const C=[];let v=f;for(;v;)C.unshift(v.record),v=v.parent;return{name:E,path:m,params:d,matched:C,meta:PT(C)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function gf(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function DT(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:OT(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function OT(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function mf(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function PT(t){return t.reduce((e,n)=>we(e,n.meta),{})}function yf(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function Qg(t,e){return e.children.some(n=>n===t||Qg(t,n))}const Xg=/#/g,LT=/&/g,MT=/\//g,xT=/=/g,UT=/\?/g,Jg=/\+/g,FT=/%5B/g,$T=/%5D/g,Yg=/%5E/g,VT=/%60/g,Zg=/%7B/g,BT=/%7C/g,em=/%7D/g,jT=/%20/g;function au(t){return encodeURI(""+t).replace(BT,"|").replace(FT,"[").replace($T,"]")}function HT(t){return au(t).replace(Zg,"{").replace(em,"}").replace(Yg,"^")}function tl(t){return au(t).replace(Jg,"%2B").replace(jT,"+").replace(Xg,"%23").replace(LT,"%26").replace(VT,"`").replace(Zg,"{").replace(em,"}").replace(Yg,"^")}function qT(t){return tl(t).replace(xT,"%3D")}function KT(t){return au(t).replace(Xg,"%23").replace(UT,"%3F")}function WT(t){return t==null?"":KT(t).replace(MT,"%2F")}function No(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function zT(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(Jg," "),o=i.indexOf("="),a=No(o<0?i:i.slice(0,o)),c=o<0?null:No(i.slice(o+1));if(a in e){let l=e[a];qt(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function vf(t){let e="";for(let n in t){const s=t[n];if(n=qT(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(qt(s)?s.map(i=>i&&tl(i)):[s&&tl(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function GT(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=qt(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}const QT=Symbol(""),wf=Symbol(""),cu=Symbol(""),lu=Symbol(""),nl=Symbol("");function kr(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function Mn(t,e,n,s,r){const i=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(or(4,{from:n,to:e})):h instanceof Error?a(h):ET(h)?a(or(2,{from:e,to:h})):(i&&s.enterCallbacks[r]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(s&&s.instances[r],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function dc(t,e,n,s){const r=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(XT(a)){const l=(a.__vccOpts||a)[e];l&&r.push(Mn(l,n,s,i,o))}else{let c=a();r.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=nT(l)?l.default:l;i.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&Mn(f,n,s,i,o)()}))}}return r}function XT(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Ef(t){const e=pt(cu),n=pt(lu),s=je(()=>e.resolve(ft(t.to))),r=je(()=>{const{matched:c}=s.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const f=h.findIndex(ir.bind(null,u));if(f>-1)return f;const d=_f(c[l-2]);return l>1&&_f(u)===d&&h[h.length-1].path!==d?h.findIndex(ir.bind(null,c[l-2])):f}),i=je(()=>r.value>-1&&eI(n.params,s.value.params)),o=je(()=>r.value>-1&&r.value===n.matched.length-1&&qg(n.params,s.value.params));function a(c={}){return ZT(c)?e[ft(t.replace)?"replace":"push"](ft(t.to)).catch(jr):Promise.resolve()}return{route:s,href:je(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}const JT=Tn({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ef,setup(t,{slots:e}){const n=Ht(Ef(t)),{options:s}=pt(cu),r=je(()=>({[bf(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[bf(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Rt("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),YT=JT;function ZT(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function eI(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!qt(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function _f(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const bf=(t,e,n)=>t!=null?t:e!=null?e:n,tI=Tn({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=pt(nl),r=je(()=>t.route||s.value),i=pt(wf,0),o=je(()=>{let l=ft(i);const{matched:u}=r.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=je(()=>r.value.matched[o.value]);Ws(wf,je(()=>o.value+1)),Ws(QT,a),Ws(nl,r);const c=fn();return ms(()=>[c.value,a.value,t.name],([l,u,h],[f,d,m])=>{u&&(u.instances[h]=l,d&&d!==u&&l&&l===f&&(u.leaveGuards.size||(u.leaveGuards=d.leaveGuards),u.updateGuards.size||(u.updateGuards=d.updateGuards))),l&&u&&(!d||!ir(u,d)||!f)&&(u.enterCallbacks[h]||[]).forEach(E=>E(l))},{flush:"post"}),()=>{const l=r.value,u=t.name,h=a.value,f=h&&h.components[u];if(!f)return Tf(n.default,{Component:f,route:l});const d=h.props[u],m=d?d===!0?l.params:typeof d=="function"?d(l):d:null,C=Rt(f,we({},m,e,{onVnodeUnmounted:v=>{v.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return Tf(n.default,{Component:C,route:l})||C}}});function Tf(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const tm=tI;function nI(t){const e=NT(t.routes,t),n=t.parseQuery||zT,s=t.stringifyQuery||vf,r=t.history,i=kr(),o=kr(),a=kr(),c=xc(Dn);let l=Dn;Us&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=hc.bind(null,S=>""+S),h=hc.bind(null,WT),f=hc.bind(null,No);function d(S,H){let F,G;return zg(S)?(F=e.getRecordMatcher(S),G=H):G=S,e.addRoute(G,F)}function m(S){const H=e.getRecordMatcher(S);H&&e.removeRoute(H)}function E(){return e.getRoutes().map(S=>S.record)}function C(S){return!!e.getRecordMatcher(S)}function v(S,H){if(H=we({},H||c.value),typeof S=="string"){const g=fc(n,S,H.path),y=e.resolve({path:g.path},H),_=r.createHref(g.fullPath);return we(g,y,{params:f(y.params),hash:No(g.hash),redirectedFrom:void 0,href:_})}let F;if("path"in S)F=we({},S,{path:fc(n,S.path,H.path).path});else{const g=we({},S.params);for(const y in g)g[y]==null&&delete g[y];F=we({},S,{params:h(S.params)}),H.params=h(H.params)}const G=e.resolve(F,H),de=S.hash||"";G.params=u(f(G.params));const Ne=iT(s,we({},S,{hash:HT(de),path:G.path})),ae=r.createHref(Ne);return we({fullPath:Ne,hash:de,query:s===vf?GT(S.query):S.query||{}},G,{redirectedFrom:void 0,href:ae})}function p(S){return typeof S=="string"?fc(n,S,c.value.path):we({},S)}function w(S,H){if(l!==S)return or(8,{from:H,to:S})}function T(S){return R(S)}function k(S){return T(we(p(S),{replace:!0}))}function M(S){const H=S.matched[S.matched.length-1];if(H&&H.redirect){const{redirect:F}=H;let G=typeof F=="function"?F(S):F;return typeof G=="string"&&(G=G.includes("?")||G.includes("#")?G=p(G):{path:G},G.params={}),we({query:S.query,hash:S.hash,params:"path"in G?{}:S.params},G)}}function R(S,H){const F=l=v(S),G=c.value,de=S.state,Ne=S.force,ae=S.replace===!0,g=M(F);if(g)return R(we(p(g),{state:typeof g=="object"?we({},de,g.state):de,force:Ne,replace:ae}),H||F);const y=F;y.redirectedFrom=H;let _;return!Ne&&oT(s,G,F)&&(_=or(16,{to:y,from:G}),ss(G,G,!0,!1)),(_?Promise.resolve(_):U(y,G)).catch(I=>rn(I)?rn(I,2)?I:Ft(I):be(I,y,G)).then(I=>{if(I){if(rn(I,2))return R(we({replace:ae},p(I.to),{state:typeof I.to=="object"?we({},de,I.to.state):de,force:Ne}),H||y)}else I=z(y,G,!0,ae,de);return B(y,G,I),I})}function b(S,H){const F=w(S,H);return F?Promise.reject(F):Promise.resolve()}function U(S,H){let F;const[G,de,Ne]=sI(S,H);F=dc(G.reverse(),"beforeRouteLeave",S,H);for(const g of G)g.leaveGuards.forEach(y=>{F.push(Mn(y,S,H))});const ae=b.bind(null,S,H);return F.push(ae),Ps(F).then(()=>{F=[];for(const g of i.list())F.push(Mn(g,S,H));return F.push(ae),Ps(F)}).then(()=>{F=dc(de,"beforeRouteUpdate",S,H);for(const g of de)g.updateGuards.forEach(y=>{F.push(Mn(y,S,H))});return F.push(ae),Ps(F)}).then(()=>{F=[];for(const g of S.matched)if(g.beforeEnter&&!H.matched.includes(g))if(qt(g.beforeEnter))for(const y of g.beforeEnter)F.push(Mn(y,S,H));else F.push(Mn(g.beforeEnter,S,H));return F.push(ae),Ps(F)}).then(()=>(S.matched.forEach(g=>g.enterCallbacks={}),F=dc(Ne,"beforeRouteEnter",S,H),F.push(ae),Ps(F))).then(()=>{F=[];for(const g of o.list())F.push(Mn(g,S,H));return F.push(ae),Ps(F)}).catch(g=>rn(g,8)?g:Promise.reject(g))}function B(S,H,F){for(const G of a.list())G(S,H,F)}function z(S,H,F,G,de){const Ne=w(S,H);if(Ne)return Ne;const ae=H===Dn,g=Us?history.state:{};F&&(G||ae?r.replace(S.fullPath,we({scroll:ae&&g&&g.scroll},de)):r.push(S.fullPath,de)),c.value=S,ss(S,H,F,ae),Ft()}let $;function ne(){$||($=r.listen((S,H,F)=>{if(!qi.listening)return;const G=v(S),de=M(G);if(de){R(we(de,{replace:!0}),G).catch(jr);return}l=G;const Ne=c.value;Us&&pT(uf(Ne.fullPath,F.delta),wa()),U(G,Ne).catch(ae=>rn(ae,12)?ae:rn(ae,2)?(R(ae.to,G).then(g=>{rn(g,20)&&!F.delta&&F.type===ni.pop&&r.go(-1,!1)}).catch(jr),Promise.reject()):(F.delta&&r.go(-F.delta,!1),be(ae,G,Ne))).then(ae=>{ae=ae||z(G,Ne,!1),ae&&(F.delta&&!rn(ae,8)?r.go(-F.delta,!1):F.type===ni.pop&&rn(ae,20)&&r.go(-1,!1)),B(G,Ne,ae)}).catch(jr)}))}let j=kr(),ve=kr(),fe;function be(S,H,F){Ft(S);const G=ve.list();return G.length?G.forEach(de=>de(S,H,F)):console.error(S),Promise.reject(S)}function Ee(){return fe&&c.value!==Dn?Promise.resolve():new Promise((S,H)=>{j.add([S,H])})}function Ft(S){return fe||(fe=!S,ne(),j.list().forEach(([H,F])=>S?F(S):H()),j.reset()),S}function ss(S,H,F,G){const{scrollBehavior:de}=t;if(!Us||!de)return Promise.resolve();const Ne=!F&&gT(uf(S.fullPath,0))||(G||!F)&&history.state&&history.state.scroll||null;return As().then(()=>de(S,H,Ne)).then(ae=>ae&&dT(ae)).catch(ae=>be(ae,S,H))}const $t=S=>r.go(S);let lt;const Ds=new Set,qi={currentRoute:c,listening:!0,addRoute:d,removeRoute:m,hasRoute:C,getRoutes:E,resolve:v,options:t,push:T,replace:k,go:$t,back:()=>$t(-1),forward:()=>$t(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:ve.add,isReady:Ee,install(S){const H=this;S.component("RouterLink",YT),S.component("RouterView",tm),S.config.globalProperties.$router=H,Object.defineProperty(S.config.globalProperties,"$route",{enumerable:!0,get:()=>ft(c)}),Us&&!lt&&c.value===Dn&&(lt=!0,T(r.location).catch(de=>{}));const F={};for(const de in Dn)F[de]=je(()=>c.value[de]);S.provide(cu,H),S.provide(lu,Ht(F)),S.provide(nl,c);const G=S.unmount;Ds.add(S),S.unmount=function(){Ds.delete(S),Ds.size<1&&(l=Dn,$&&$(),$=null,c.value=Dn,lt=!1,fe=!1),G()}}};return qi}function Ps(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function sI(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>ir(l,a))?s.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>ir(l,c))||r.push(c))}return[n,s,r]}function rI(){return pt(lu)}const mt={},yt={middleware:"auth"},vt={middleware:"auth"},wt={middleware:"auth"},Et={middleware:"auth"},_t={middleware:"notAuth"},bt={middleware:"auth"},Tt={middleware:"notAuth"},It={middleware:"auth"},Ct={middleware:"auth"},St={middleware:"auth"},At={middleware:"auth"},kt={middleware:"notAuth"};var Hd,qd,Kd,Wd,zd,Gd,Qd,Xd,Jd,Yd,Zd,ep,tp,np,sp,rp,ip,op,ap,cp,lp,up,hp,fp,dp,pp;const If=[{name:(Hd=mt==null?void 0:mt.name)!=null?Hd:"customer",path:(qd=mt==null?void 0:mt.path)!=null?qd:"/:customer",file:"C:/Users/NZXT.-PC/Documents/ALL/Front/FeedCap/pages/[customer]/index.vue",children:[],meta:mt,alias:(mt==null?void 0:mt.alias)||[],redirect:(mt==null?void 0:mt.redirect)||void 0,component:()=>Ye(()=>import("./index.2ee7ef99.js"),["./index.2ee7ef99.js","./useFirestore.9d468542.js","./useFirebaseAuth.ab7ed384.js","./mainStore.bf01849b.js","./short-unique-id.01c04ed3.js","./message_blue.1f39f60f.js","./index.f0bb05d6.css"],import.meta.url).then(t=>t.default||t)},{name:(Kd=yt==null?void 0:yt.name)!=null?Kd:"account-change-password",path:(Wd=yt==null?void 0:yt.path)!=null?Wd:"/account/change-password",file:"C:/Users/NZXT.-PC/Documents/ALL/Front/FeedCap/pages/account/change-password/index.vue",children:[],meta:yt,alias:(yt==null?void 0:yt.alias)||[],redirect:(yt==null?void 0:yt.redirect)||void 0,component:()=>Ye(()=>import("./index.cf2cbe12.js"),["./index.cf2cbe12.js","./index.8852b4bd.css"],import.meta.url).then(t=>t.default||t)},{name:(zd=vt==null?void 0:vt.name)!=null?zd:"account",path:(Gd=vt==null?void 0:vt.path)!=null?Gd:"/account",file:"C:/Users/NZXT.-PC/Documents/ALL/Front/FeedCap/pages/account/index.vue",children:[],meta:vt,alias:(vt==null?void 0:vt.alias)||[],redirect:(vt==null?void 0:vt.redirect)||void 0,component:()=>Ye(()=>import("./index.11dc268b.js"),["./index.11dc268b.js","./useFirebaseAuth.ab7ed384.js","./mainStore.bf01849b.js","./short-unique-id.01c04ed3.js","./index.81098e9b.css"],import.meta.url).then(t=>t.default||t)},{name:(Qd=wt==null?void 0:wt.name)!=null?Qd:"gifts-code",path:(Xd=wt==null?void 0:wt.path)!=null?Xd:"/gifts/:code",file:"C:/Users/NZXT.-PC/Documents/ALL/Front/FeedCap/pages/gifts/[code]/index.vue",children:[],meta:wt,alias:(wt==null?void 0:wt.alias)||[],redirect:(wt==null?void 0:wt.redirect)||void 0,component:()=>Ye(()=>import("./index.f43cf1f8.js"),["./index.f43cf1f8.js","./index.df6f8994.css"],import.meta.url).then(t=>t.default||t)},{name:(Jd=Et==null?void 0:Et.name)!=null?Jd:"gifts",path:(Yd=Et==null?void 0:Et.path)!=null?Yd:"/gifts",file:"C:/Users/NZXT.-PC/Documents/ALL/Front/FeedCap/pages/gifts/index.vue",children:[],meta:Et,alias:(Et==null?void 0:Et.alias)||[],redirect:(Et==null?void 0:Et.redirect)||void 0,component:()=>Ye(()=>import("./index.c43f9a95.js"),["./index.c43f9a95.js","./index.a81ad543.css"],import.meta.url).then(t=>t.default||t)},{name:(Zd=_t==null?void 0:_t.name)!=null?Zd:"index",path:(ep=_t==null?void 0:_t.path)!=null?ep:"/",file:"C:/Users/NZXT.-PC/Documents/ALL/Front/FeedCap/pages/index.vue",children:[],meta:_t,alias:(_t==null?void 0:_t.alias)||[],redirect:(_t==null?void 0:_t.redirect)||void 0,component:()=>Ye(()=>import("./index.130a7280.js"),["./index.130a7280.js","./index.becdbd34.css"],import.meta.url).then(t=>t.default||t)},{name:(tp=bt==null?void 0:bt.name)!=null?tp:"liked",path:(np=bt==null?void 0:bt.path)!=null?np:"/liked",file:"C:/Users/NZXT.-PC/Documents/ALL/Front/FeedCap/pages/liked/index.vue",children:[],meta:bt,alias:(bt==null?void 0:bt.alias)||[],redirect:(bt==null?void 0:bt.redirect)||void 0,component:()=>Ye(()=>import("./index.8dedc3e4.js"),["./index.8dedc3e4.js","./ScrollList.49eff96b.js","./heart_pink.4c6241f4.js","./ScrollList.bca40efd.css","./useFirestore.9d468542.js","./useFirebaseAuth.ab7ed384.js","./mainStore.bf01849b.js","./short-unique-id.01c04ed3.js","./index.fa4b5a44.css"],import.meta.url).then(t=>t.default||t)},{name:(sp=Tt==null?void 0:Tt.name)!=null?sp:"login",path:(rp=Tt==null?void 0:Tt.path)!=null?rp:"/login",file:"C:/Users/NZXT.-PC/Documents/ALL/Front/FeedCap/pages/login/index.vue",children:[],meta:Tt,alias:(Tt==null?void 0:Tt.alias)||[],redirect:(Tt==null?void 0:Tt.redirect)||void 0,component:()=>Ye(()=>import("./index.1eb12d86.js"),["./index.1eb12d86.js","./short-unique-id.01c04ed3.js","./mainStore.bf01849b.js","./login_icon.ac253b47.js","./index.92fb6f65.css"],import.meta.url).then(t=>t.default||t)},{name:(ip=It==null?void 0:It.name)!=null?ip:"messages",path:(op=It==null?void 0:It.path)!=null?op:"/messages",file:"C:/Users/NZXT.-PC/Documents/ALL/Front/FeedCap/pages/messages/index.vue",children:[],meta:It,alias:(It==null?void 0:It.alias)||[],redirect:(It==null?void 0:It.redirect)||void 0,component:()=>Ye(()=>import("./index.965b569d.js"),["./index.965b569d.js","./useFirestore.9d468542.js","./useFirebaseAuth.ab7ed384.js","./mainStore.bf01849b.js","./short-unique-id.01c04ed3.js","./heart_pink.4c6241f4.js","./index.466bf3a5.css"],import.meta.url).then(t=>t.default||t)},{name:(ap=Ct==null?void 0:Ct.name)!=null?ap:"messages-list",path:(cp=Ct==null?void 0:Ct.path)!=null?cp:"/messages/list",file:"C:/Users/NZXT.-PC/Documents/ALL/Front/FeedCap/pages/messages/list/index.vue",children:[],meta:Ct,alias:(Ct==null?void 0:Ct.alias)||[],redirect:(Ct==null?void 0:Ct.redirect)||void 0,component:()=>Ye(()=>import("./index.8272945d.js"),["./index.8272945d.js","./ScrollList.49eff96b.js","./heart_pink.4c6241f4.js","./ScrollList.bca40efd.css","./useFirestore.9d468542.js","./useFirebaseAuth.ab7ed384.js","./mainStore.bf01849b.js","./short-unique-id.01c04ed3.js","./index.2ae01be6.css"],import.meta.url).then(t=>t.default||t)},{name:(lp=St==null?void 0:St.name)!=null?lp:"profiles",path:(up=St==null?void 0:St.path)!=null?up:"/profiles",file:"C:/Users/NZXT.-PC/Documents/ALL/Front/FeedCap/pages/profiles/index.vue",children:[],meta:St,alias:(St==null?void 0:St.alias)||[],redirect:(St==null?void 0:St.redirect)||void 0,component:()=>Ye(()=>import("./index.e447a180.js"),["./index.e447a180.js","./mainStore.bf01849b.js","./useFirestore.9d468542.js","./useFirebaseAuth.ab7ed384.js","./short-unique-id.01c04ed3.js","./index.e9ac9c40.css"],import.meta.url).then(t=>t.default||t)},{name:(hp=At==null?void 0:At.name)!=null?hp:"profiles-new-profile",path:(fp=At==null?void 0:At.path)!=null?fp:"/profiles/new-profile",file:"C:/Users/NZXT.-PC/Documents/ALL/Front/FeedCap/pages/profiles/new-profile/index.vue",children:[],meta:At,alias:(At==null?void 0:At.alias)||[],redirect:(At==null?void 0:At.redirect)||void 0,component:()=>Ye(()=>import("./index.4927d30b.js"),["./index.4927d30b.js","./useFirestore.9d468542.js","./useFirebaseAuth.ab7ed384.js","./mainStore.bf01849b.js","./short-unique-id.01c04ed3.js","./index.72dfcf82.css"],import.meta.url).then(t=>t.default||t)},{name:(dp=kt==null?void 0:kt.name)!=null?dp:"signup",path:(pp=kt==null?void 0:kt.path)!=null?pp:"/signup",file:"C:/Users/NZXT.-PC/Documents/ALL/Front/FeedCap/pages/signup/index.vue",children:[],meta:kt,alias:(kt==null?void 0:kt.alias)||[],redirect:(kt==null?void 0:kt.redirect)||void 0,component:()=>Ye(()=>import("./index.66e66d9b.js"),["./index.66e66d9b.js","./short-unique-id.01c04ed3.js","./mainStore.bf01849b.js","./login_icon.ac253b47.js","./index.951168b3.css"],import.meta.url).then(t=>t.default||t)}],iI={scrollBehavior(t,e,n){const s=Xe();let r=n||void 0;if(!r&&e&&t&&t.meta.scrollToTop!==!1&&oI(e,t)&&(r={left:0,top:0}),t.path===e.path){if(e.hash&&!t.hash)return{left:0,top:0};if(t.hash)return{el:t.hash,top:Cf(t.hash)}}const i=a=>{var c;return!!((c=a.meta.pageTransition)!=null?c:Zc)},o=i(e)&&i(t)?"page:transition:finish":"page:finish";return new Promise(a=>{s.hooks.hookOnce(o,async()=>{await As(),t.hash&&(r={el:t.hash,top:Cf(t.hash)}),a(r)})})}};function Cf(t){try{const e=document.querySelector(t);if(e)return parseFloat(getComputedStyle(e).scrollMarginTop)}catch{}return 0}function oI(t,e){const n=t.matched[0]===e.matched[0];return!!(!n||n&&JSON.stringify(t.params)!==JSON.stringify(e.params))}const aI={},on={...aI,...iI},cI=Hb(async t=>{var r;let e,n;if(!((r=t.meta)!=null&&r.validate))return;const s=([e,n]=Ng(()=>Promise.resolve(t.meta.validate(t))),e=await e,n(),e);return typeof s=="boolean"?s:Og(s)}),lI=[cI],pc={};function uI(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){const a=r.includes(t.slice(i))?t.slice(i).length:1;let c=r.slice(a);return c[0]!=="/"&&(c="/"+c),Yh(c,"")}return Yh(n,t)+s+r}const hI=es(async t=>{var m,E,C,v;let e,n,s=su().app.baseURL;on.hashMode&&!s.includes("#")&&(s+="#");const r=(E=(m=on.history)==null?void 0:m.call(on,s))!=null?E:on.hashMode?wT(s):Wg(s),i=(v=(C=on.routes)==null?void 0:C.call(on,If))!=null?v:If,o=uI(s,window.location),a=nI({...on,history:r,routes:i});t.vueApp.use(a);const c=xc(a.currentRoute.value);a.afterEach((p,w)=>{c.value=w}),Object.defineProperty(t.vueApp.config.globalProperties,"previousRoute",{get:()=>c.value});const l=xc(a.resolve(o)),u=()=>{l.value=a.currentRoute.value};t.hook("page:finish",u),a.afterEach((p,w)=>{var T,k,M,R;((k=(T=p.matched[0])==null?void 0:T.components)==null?void 0:k.default)===((R=(M=w.matched[0])==null?void 0:M.components)==null?void 0:R.default)&&u()});const h={};for(const p in l.value)h[p]=je(()=>l.value[p]);t._route=Ht(h),t._middleware=t._middleware||{global:[],named:{}};const f=ya();try{[e,n]=Ng(()=>a.isReady()),await e,n()}catch(p){Ln(t,Or,[p])}const d=jb("_layout");return a.beforeEach(async(p,w)=>{var k,M;p.meta=Ht(p.meta),t.isHydrating&&(p.meta.layout=(k=d.value)!=null?k:p.meta.layout),t._processingMiddleware=!0;const T=new Set([...lI,...t._middleware.global]);for(const R of p.matched){const b=R.meta.middleware;if(!!b)if(Array.isArray(b))for(const U of b)T.add(U);else T.add(b)}for(const R of T){const b=typeof R=="string"?t._middleware.named[R]||await((M=pc[R])==null?void 0:M.call(pc).then(B=>B.default||B)):R;if(!b)throw new Error(`Unknown route middleware: '${R}'.`);const U=await Ln(t,b,[p,w]);if(!t.payload.serverRendered&&t.isHydrating&&(U===!1||U instanceof Error)){const B=U||Jc({statusCode:404,statusMessage:`Page Not Found: ${o}`});return await Ln(t,Or,[B]),!1}if(U||U===!1)return U}}),a.afterEach(async p=>{delete t._processingMiddleware,!t.isHydrating&&f.value&&await Ln(t,Vb),p.matched.length===0&&Ln(t,Or,[Jc({statusCode:404,fatal:!1,statusMessage:`Page not found: ${p.fullPath}`})])}),t.hooks.hookOnce("app:created",async()=>{try{await a.replace({...a.resolve(o),name:void 0,force:!0})}catch(p){Ln(t,Or,[p])}}),{provide:{router:a}}}),fI=!1;/*!
  * pinia v2.0.23
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */let nm;const _i=t=>nm=t,sm=Symbol();function sl(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var qr;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(qr||(qr={}));function dI(){const t=_p(!0),e=t.run(()=>fn({}));let n=[],s=[];const r=er({install(i){_i(r),r._a=i,i.provide(sm,r),i.config.globalProperties.$pinia=r,s.forEach(o=>n.push(o)),s=[]},use(i){return!this._a&&!fI?s.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return r}const rm=()=>{};function Sf(t,e,n,s=rm){t.push(e);const r=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),s())};return!n&&Cn()&&Zl(r),r}function Ls(t,...e){t.slice().forEach(n=>{n(...e)})}function rl(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,s)=>t.set(s,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],r=t[n];sl(r)&&sl(s)&&t.hasOwnProperty(n)&&!Re(s)&&!hn(s)?t[n]=rl(r,s):t[n]=s}return t}const pI=Symbol();function gI(t){return!sl(t)||!t.hasOwnProperty(pI)}const{assign:xn}=Object;function mI(t){return!!(Re(t)&&t.effect)}function yI(t,e,n,s){const{state:r,actions:i,getters:o}=e,a=n.state.value[t];let c;function l(){a||(n.state.value[t]=r?r():{});const u=Qw(n.state.value[t]);return xn(u,i,Object.keys(o||{}).reduce((h,f)=>(h[f]=er(je(()=>{_i(n);const d=n._s.get(t);return o[f].call(d,d)})),h),{}))}return c=im(t,l,e,n,s,!0),c.$reset=function(){const h=r?r():{};this.$patch(f=>{xn(f,h)})},c}function im(t,e,n={},s,r,i){let o;const a=xn({actions:{}},n),c={deep:!0};let l,u,h=er([]),f=er([]),d;const m=s.state.value[t];!i&&!m&&(s.state.value[t]={}),fn({});let E;function C(R){let b;l=u=!1,typeof R=="function"?(R(s.state.value[t]),b={type:qr.patchFunction,storeId:t,events:d}):(rl(s.state.value[t],R),b={type:qr.patchObject,payload:R,storeId:t,events:d});const U=E=Symbol();As().then(()=>{E===U&&(l=!0)}),u=!0,Ls(h,b,s.state.value[t])}const v=rm;function p(){o.stop(),h=[],f=[],s._s.delete(t)}function w(R,b){return function(){_i(s);const U=Array.from(arguments),B=[],z=[];function $(ve){B.push(ve)}function ne(ve){z.push(ve)}Ls(f,{args:U,name:R,store:k,after:$,onError:ne});let j;try{j=b.apply(this&&this.$id===t?this:k,U)}catch(ve){throw Ls(z,ve),ve}return j instanceof Promise?j.then(ve=>(Ls(B,ve),ve)).catch(ve=>(Ls(z,ve),Promise.reject(ve))):(Ls(B,j),j)}}const T={_p:s,$id:t,$onAction:Sf.bind(null,f),$patch:C,$reset:v,$subscribe(R,b={}){const U=Sf(h,R,b.detached,()=>B()),B=o.run(()=>ms(()=>s.state.value[t],z=>{(b.flush==="sync"?u:l)&&R({storeId:t,type:qr.direct,events:d},z)},xn({},c,b)));return U},$dispose:p},k=Ht(T);s._s.set(t,k);const M=s._e.run(()=>(o=_p(),o.run(()=>e())));for(const R in M){const b=M[R];if(Re(b)&&!mI(b)||hn(b))i||(m&&gI(b)&&(Re(b)?b.value=m[R]:rl(b,m[R])),s.state.value[t][R]=b);else if(typeof b=="function"){const U=w(R,b);M[R]=U,a.actions[R]=b}}return xn(k,M),xn(ge(k),M),Object.defineProperty(k,"$state",{get:()=>s.state.value[t],set:R=>{C(b=>{xn(b,R)})}}),s._p.forEach(R=>{xn(k,o.run(()=>R({store:k,app:s._a,pinia:s,options:a})))}),m&&i&&n.hydrate&&n.hydrate(k.$state,m),l=!0,u=!0,k}function I1(t,e,n){let s,r;const i=typeof e=="function";typeof t=="string"?(s=t,r=i?n:e):(r=t,s=t.id);function o(a,c){const l=Cn();return a=a||l&&pt(sm),a&&_i(a),a=nm,a._s.has(s)||(i?im(s,e,r,a):yI(s,r,a)),a._s.get(s)}return o.$id=s,o}function C1(t){{t=ge(t);const e={};for(const n in t){const s=t[n];(Re(s)||hn(s))&&(e[n]=ia(t,n))}return e}}const vI=es(t=>{const e=dI();return t.vueApp.use(e),_i(e),t.payload&&t.payload.pinia&&(e.state.value=t.payload.pinia),{provide:{pinia:e}}}),wI=es(t=>{!Qb()||(t.hooks.hook("link:prefetch",e=>{if(!ma(e).protocol)return rf(e)}),va().beforeResolve(async(e,n)=>{if(e.path===n.path)return;const s=await rf(e.path);!s||Object.assign(t.static.data,s.data)}))}),EI=es(()=>{Lg("auth",()=>{if(!JSON.parse(localStorage.getItem("isLogged")))return ru("/login")})});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const om=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},_I=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},am={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,l=c?t[r+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let f=(a&15)<<2|l>>6,d=l&63;c||(d=64,o||(f=64)),s.push(n[u],n[h],n[f],n[d])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(om(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):_I(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const l=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||l==null||h==null)throw Error();const f=i<<2|a>>4;if(s.push(f),l!==64){const d=a<<4&240|l>>2;if(s.push(d),h!==64){const m=l<<6&192|h;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},bI=function(t){const e=om(t);return am.encodeByteArray(e,!0)},Do=function(t){return bI(t).replace(/\./g,"")},cm=function(t){try{return am.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function TI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(rt())}function II(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function CI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function SI(){const t=rt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function AI(){return typeof indexedDB=="object"}function kI(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function RI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NI=()=>RI().__FIREBASE_DEFAULTS__,DI=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t=process.env.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},OI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&cm(t[1]);return e&&JSON.parse(e)},uu=()=>{try{return NI()||DI()||OI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},lm=t=>{var e,n;return(n=(e=uu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},PI=t=>{const e=lm(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},LI=()=>{var t;return(t=uu())===null||t===void 0?void 0:t.config},um=t=>{var e;return(e=uu())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Do(JSON.stringify(n)),Do(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UI="FirebaseError";class Sn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=UI,Object.setPrototypeOf(this,Sn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,bi.prototype.create)}}class bi{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?FI(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Sn(r,a,s)}}function FI(t,e){return t.replace($I,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const $I=/\{\$([^}]+)}/g;function VI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Oo(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(Af(i)&&Af(o)){if(!Oo(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function Af(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ti(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function BI(t,e){const n=new jI(t,e);return n.subscribe.bind(n)}class jI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");HI(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=gc),r.error===void 0&&(r.error=gc),r.complete===void 0&&(r.complete=gc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function HI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function gc(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kt(t){return t&&t._delegate?t._delegate:t}class bs{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cs="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new MI;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(WI(e))try{this.getOrInitializeService({instanceIdentifier:cs})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=cs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=cs){return this.instances.has(e)}getOptions(e=cs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:KI(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=cs){return this.component?this.component.multipleInstances?e:cs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function KI(t){return t===cs?void 0:t}function WI(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new qI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var me;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(me||(me={}));const GI={debug:me.DEBUG,verbose:me.VERBOSE,info:me.INFO,warn:me.WARN,error:me.ERROR,silent:me.SILENT},QI=me.INFO,XI={[me.DEBUG]:"log",[me.VERBOSE]:"log",[me.INFO]:"info",[me.WARN]:"warn",[me.ERROR]:"error"},JI=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=XI[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class hu{constructor(e){this.name=e,this._logLevel=QI,this._logHandler=JI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in me))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?GI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,me.DEBUG,...e),this._logHandler(this,me.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,me.VERBOSE,...e),this._logHandler(this,me.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,me.INFO,...e),this._logHandler(this,me.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,me.WARN,...e),this._logHandler(this,me.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,me.ERROR,...e),this._logHandler(this,me.ERROR,...e)}}const YI=(t,e)=>e.some(n=>t instanceof n);let kf,Rf;function ZI(){return kf||(kf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function eC(){return Rf||(Rf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const hm=new WeakMap,il=new WeakMap,fm=new WeakMap,mc=new WeakMap,fu=new WeakMap;function tC(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(qn(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&hm.set(n,t)}).catch(()=>{}),fu.set(e,t),e}function nC(t){if(il.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});il.set(t,e)}let ol={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return il.get(t);if(e==="objectStoreNames")return t.objectStoreNames||fm.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return qn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function sC(t){ol=t(ol)}function rC(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(yc(this),e,...n);return fm.set(s,e.sort?e.sort():[e]),qn(s)}:eC().includes(t)?function(...e){return t.apply(yc(this),e),qn(hm.get(this))}:function(...e){return qn(t.apply(yc(this),e))}}function iC(t){return typeof t=="function"?rC(t):(t instanceof IDBTransaction&&nC(t),YI(t,ZI())?new Proxy(t,ol):t)}function qn(t){if(t instanceof IDBRequest)return tC(t);if(mc.has(t))return mc.get(t);const e=iC(t);return e!==t&&(mc.set(t,e),fu.set(e,t)),e}const yc=t=>fu.get(t);function oC(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=qn(o);return s&&o.addEventListener("upgradeneeded",c=>{s(qn(o.result),c.oldVersion,c.newVersion,qn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const aC=["get","getKey","getAll","getAllKeys","count"],cC=["put","add","delete","clear"],vc=new Map;function Nf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(vc.get(e))return vc.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=cC.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||aC.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),r&&c.done]))[0]};return vc.set(e,i),i}sC(t=>({...t,get:(e,n,s)=>Nf(e,n)||t.get(e,n,s),has:(e,n)=>!!Nf(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(uC(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function uC(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const al="@firebase/app",Df="0.8.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ts=new hu("@firebase/app"),hC="@firebase/app-compat",fC="@firebase/analytics-compat",dC="@firebase/analytics",pC="@firebase/app-check-compat",gC="@firebase/app-check",mC="@firebase/auth",yC="@firebase/auth-compat",vC="@firebase/database",wC="@firebase/database-compat",EC="@firebase/functions",_C="@firebase/functions-compat",bC="@firebase/installations",TC="@firebase/installations-compat",IC="@firebase/messaging",CC="@firebase/messaging-compat",SC="@firebase/performance",AC="@firebase/performance-compat",kC="@firebase/remote-config",RC="@firebase/remote-config-compat",NC="@firebase/storage",DC="@firebase/storage-compat",OC="@firebase/firestore",PC="@firebase/firestore-compat",LC="firebase",MC="9.14.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cl="[DEFAULT]",xC={[al]:"fire-core",[hC]:"fire-core-compat",[dC]:"fire-analytics",[fC]:"fire-analytics-compat",[gC]:"fire-app-check",[pC]:"fire-app-check-compat",[mC]:"fire-auth",[yC]:"fire-auth-compat",[vC]:"fire-rtdb",[wC]:"fire-rtdb-compat",[EC]:"fire-fn",[_C]:"fire-fn-compat",[bC]:"fire-iid",[TC]:"fire-iid-compat",[IC]:"fire-fcm",[CC]:"fire-fcm-compat",[SC]:"fire-perf",[AC]:"fire-perf-compat",[kC]:"fire-rc",[RC]:"fire-rc-compat",[NC]:"fire-gcs",[DC]:"fire-gcs-compat",[OC]:"fire-fst",[PC]:"fire-fst-compat","fire-js":"fire-js",[LC]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Po=new Map,ll=new Map;function UC(t,e){try{t.container.addComponent(e)}catch(n){Ts.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ar(t){const e=t.name;if(ll.has(e))return Ts.debug(`There were multiple attempts to register component ${e}.`),!1;ll.set(e,t);for(const n of Po.values())UC(n,t);return!0}function du(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FC={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Kn=new bi("app","Firebase",FC);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $C{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new bs("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Kn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ii=MC;function dm(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:cl,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw Kn.create("bad-app-name",{appName:String(r)});if(n||(n=LI()),!n)throw Kn.create("no-options");const i=Po.get(r);if(i){if(Oo(n,i.options)&&Oo(s,i.config))return i;throw Kn.create("duplicate-app",{appName:r})}const o=new zI(r);for(const c of ll.values())o.addComponent(c);const a=new $C(n,s,o);return Po.set(r,a),a}function pm(t=cl){const e=Po.get(t);if(!e&&t===cl)return dm();if(!e)throw Kn.create("no-app",{appName:t});return e}function Wn(t,e,n){var s;let r=(s=xC[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ts.warn(a.join(" "));return}ar(new bs(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VC="firebase-heartbeat-database",BC=1,si="firebase-heartbeat-store";let wc=null;function gm(){return wc||(wc=oC(VC,BC,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(si)}}}).catch(t=>{throw Kn.create("idb-open",{originalErrorMessage:t.message})})),wc}async function jC(t){var e;try{return(await gm()).transaction(si).objectStore(si).get(mm(t))}catch(n){if(n instanceof Sn)Ts.warn(n.message);else{const s=Kn.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});Ts.warn(s.message)}}}async function Of(t,e){var n;try{const r=(await gm()).transaction(si,"readwrite");return await r.objectStore(si).put(e,mm(t)),r.done}catch(s){if(s instanceof Sn)Ts.warn(s.message);else{const r=Kn.create("idb-set",{originalErrorMessage:(n=s)===null||n===void 0?void 0:n.message});Ts.warn(r.message)}}}function mm(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HC=1024,qC=30*24*60*60*1e3;class KC{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new zC(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Pf();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=qC}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Pf(),{heartbeatsToSend:n,unsentEntries:s}=WC(this._heartbeatsCache.heartbeats),r=Do(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Pf(){return new Date().toISOString().substring(0,10)}function WC(t,e=HC){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),Lf(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Lf(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class zC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return AI()?kI().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await jC(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Of(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Of(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Lf(t){return Do(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GC(t){ar(new bs("platform-logger",e=>new lC(e),"PRIVATE")),ar(new bs("heartbeat",e=>new KC(e),"PRIVATE")),Wn(al,Df,t),Wn(al,Df,"esm2017"),Wn("fire-js","")}GC("");var QC="firebase",XC="9.14.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Wn(QC,XC,"app");var JC=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},K,pu=pu||{},te=JC||self;function Lo(){}function Ea(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Ci(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function YC(t){return Object.prototype.hasOwnProperty.call(t,Ec)&&t[Ec]||(t[Ec]=++ZC)}var Ec="closure_uid_"+(1e9*Math.random()>>>0),ZC=0;function eS(t,e,n){return t.call.apply(t.bind,arguments)}function tS(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function nt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?nt=eS:nt=tS,nt.apply(null,arguments)}function no(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function Je(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function ts(){this.s=this.s,this.o=this.o}var nS=0;ts.prototype.s=!1;ts.prototype.na=function(){!this.s&&(this.s=!0,this.M(),nS!=0)&&YC(this)};ts.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const ym=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function gu(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function Mf(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(Ea(s)){const r=t.length||0,i=s.length||0;t.length=r+i;for(let o=0;o<i;o++)t[r+o]=s[o]}else t.push(s)}}function st(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}st.prototype.h=function(){this.defaultPrevented=!0};var sS=function(){if(!te.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{te.addEventListener("test",Lo,e),te.removeEventListener("test",Lo,e)}catch{}return t}();function Mo(t){return/^[\s\xa0]*$/.test(t)}var xf=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function _c(t,e){return t<e?-1:t>e?1:0}function _a(){var t=te.navigator;return t&&(t=t.userAgent)?t:""}function Jt(t){return _a().indexOf(t)!=-1}function mu(t){return mu[" "](t),t}mu[" "]=Lo;function rS(t){var e=aS;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var iS=Jt("Opera"),cr=Jt("Trident")||Jt("MSIE"),vm=Jt("Edge"),ul=vm||cr,wm=Jt("Gecko")&&!(_a().toLowerCase().indexOf("webkit")!=-1&&!Jt("Edge"))&&!(Jt("Trident")||Jt("MSIE"))&&!Jt("Edge"),oS=_a().toLowerCase().indexOf("webkit")!=-1&&!Jt("Edge");function Em(){var t=te.document;return t?t.documentMode:void 0}var xo;e:{var bc="",Tc=function(){var t=_a();if(wm)return/rv:([^\);]+)(\)|;)/.exec(t);if(vm)return/Edge\/([\d\.]+)/.exec(t);if(cr)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(oS)return/WebKit\/(\S+)/.exec(t);if(iS)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Tc&&(bc=Tc?Tc[1]:""),cr){var Ic=Em();if(Ic!=null&&Ic>parseFloat(bc)){xo=String(Ic);break e}}xo=bc}var aS={};function cS(){return rS(function(){let t=0;const e=xf(String(xo)).split("."),n=xf("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var r=e[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;t=_c(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||_c(r[2].length==0,i[2].length==0)||_c(r[2],i[2]),r=r[3],i=i[3]}while(t==0)}return 0<=t})}var hl;if(te.document&&cr){var Uf=Em();hl=Uf||parseInt(xo,10)||void 0}else hl=void 0;var lS=hl;function ri(t,e){if(st.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(wm){e:{try{mu(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:uS[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&ri.X.h.call(this)}}Je(ri,st);var uS={2:"touch",3:"pen",4:"mouse"};ri.prototype.h=function(){ri.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Si="closure_listenable_"+(1e6*Math.random()|0),hS=0;function fS(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=r,this.key=++hS,this.ba=this.ea=!1}function ba(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function yu(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function _m(t){const e={};for(const n in t)e[n]=t[n];return e}const Ff="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function bm(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<Ff.length;i++)n=Ff[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function Ta(t){this.src=t,this.g={},this.h=0}Ta.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=dl(t,e,s,r);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new fS(e,this.src,i,!!s,r),e.ea=n,t.push(e)),e};function fl(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=ym(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(ba(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function dl(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.ba&&i.listener==e&&i.capture==!!n&&i.ha==s)return r}return-1}var vu="closure_lm_"+(1e6*Math.random()|0),Cc={};function Tm(t,e,n,s,r){if(s&&s.once)return Cm(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)Tm(t,e[i],n,s,r);return null}return n=_u(n),t&&t[Si]?t.N(e,n,Ci(s)?!!s.capture:!!s,r):Im(t,e,n,!1,s,r)}function Im(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=Ci(r)?!!r.capture:!!r,a=Eu(t);if(a||(t[vu]=a=new Ta(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=dS(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)sS||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(Am(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function dS(){function t(n){return e.call(t.src,t.listener,n)}const e=pS;return t}function Cm(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Cm(t,e[i],n,s,r);return null}return n=_u(n),t&&t[Si]?t.O(e,n,Ci(s)?!!s.capture:!!s,r):Im(t,e,n,!0,s,r)}function Sm(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)Sm(t,e[i],n,s,r);else s=Ci(s)?!!s.capture:!!s,n=_u(n),t&&t[Si]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=dl(i,n,s,r),-1<n&&(ba(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=Eu(t))&&(e=t.g[e.toString()],t=-1,e&&(t=dl(e,n,s,r)),(n=-1<t?e[t]:null)&&wu(n))}function wu(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[Si])fl(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(Am(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=Eu(e))?(fl(n,t),n.h==0&&(n.src=null,e[vu]=null)):ba(t)}}}function Am(t){return t in Cc?Cc[t]:Cc[t]="on"+t}function pS(t,e){if(t.ba)t=!0;else{e=new ri(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&wu(t),t=n.call(s,e)}return t}function Eu(t){return t=t[vu],t instanceof Ta?t:null}var Sc="__closure_events_fn_"+(1e9*Math.random()>>>0);function _u(t){return typeof t=="function"?t:(t[Sc]||(t[Sc]=function(e){return t.handleEvent(e)}),t[Sc])}function He(){ts.call(this),this.i=new Ta(this),this.P=this,this.I=null}Je(He,ts);He.prototype[Si]=!0;He.prototype.removeEventListener=function(t,e,n,s){Sm(this,t,e,n,s)};function Ge(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new st(e,t);else if(e instanceof st)e.target=e.target||t;else{var r=e;e=new st(s,t),bm(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=so(o,s,!0,e)&&r}if(o=e.g=t,r=so(o,s,!0,e)&&r,r=so(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=so(o,s,!1,e)&&r}He.prototype.M=function(){if(He.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)ba(n[s]);delete t.g[e],t.h--}}this.I=null};He.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};He.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function so(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&fl(t.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var bu=te.JSON.stringify;function gS(){var t=Nm;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class mS{constructor(){this.h=this.g=null}add(e,n){const s=km.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var km=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new yS,t=>t.reset());class yS{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function vS(t){te.setTimeout(()=>{throw t},0)}function Rm(t,e){pl||wS(),gl||(pl(),gl=!0),Nm.add(t,e)}var pl;function wS(){var t=te.Promise.resolve(void 0);pl=function(){t.then(ES)}}var gl=!1,Nm=new mS;function ES(){for(var t;t=gS();){try{t.h.call(t.g)}catch(n){vS(n)}var e=km;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}gl=!1}function Ia(t,e){He.call(this),this.h=t||1,this.g=e||te,this.j=nt(this.lb,this),this.l=Date.now()}Je(Ia,He);K=Ia.prototype;K.ca=!1;K.R=null;K.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Ge(this,"tick"),this.ca&&(Tu(this),this.start()))}};K.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Tu(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}K.M=function(){Ia.X.M.call(this),Tu(this),delete this.g};function Iu(t,e,n){if(typeof t=="function")n&&(t=nt(t,n));else if(t&&typeof t.handleEvent=="function")t=nt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:te.setTimeout(t,e||0)}function Dm(t){t.g=Iu(()=>{t.g=null,t.i&&(t.i=!1,Dm(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class _S extends ts{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Dm(this)}M(){super.M(),this.g&&(te.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ii(t){ts.call(this),this.h=t,this.g={}}Je(ii,ts);var $f=[];function Om(t,e,n,s){Array.isArray(n)||(n&&($f[0]=n.toString()),n=$f);for(var r=0;r<n.length;r++){var i=Tm(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function Pm(t){yu(t.g,function(e,n){this.g.hasOwnProperty(n)&&wu(e)},t),t.g={}}ii.prototype.M=function(){ii.X.M.call(this),Pm(this)};ii.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Ca(){this.g=!0}Ca.prototype.Aa=function(){this.g=!1};function bS(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function TS(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function Fs(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+CS(t,n)+(s?" "+s:"")})}function IS(t,e){t.info(function(){return"TIMEOUT: "+e})}Ca.prototype.info=function(){};function CS(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return bu(n)}catch{return e}}var ks={},Vf=null;function Sa(){return Vf=Vf||new He}ks.Pa="serverreachability";function Lm(t){st.call(this,ks.Pa,t)}Je(Lm,st);function oi(t){const e=Sa();Ge(e,new Lm(e))}ks.STAT_EVENT="statevent";function Mm(t,e){st.call(this,ks.STAT_EVENT,t),this.stat=e}Je(Mm,st);function at(t){const e=Sa();Ge(e,new Mm(e,t))}ks.Qa="timingevent";function xm(t,e){st.call(this,ks.Qa,t),this.size=e}Je(xm,st);function Ai(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return te.setTimeout(function(){t()},e)}var Aa={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Um={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Cu(){}Cu.prototype.h=null;function Bf(t){return t.h||(t.h=t.i())}function Fm(){}var ki={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Su(){st.call(this,"d")}Je(Su,st);function Au(){st.call(this,"c")}Je(Au,st);var ml;function ka(){}Je(ka,Cu);ka.prototype.g=function(){return new XMLHttpRequest};ka.prototype.i=function(){return{}};ml=new ka;function Ri(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new ii(this),this.O=SS,t=ul?125:void 0,this.T=new Ia(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new $m}function $m(){this.i=null,this.g="",this.h=!1}var SS=45e3,yl={},Uo={};K=Ri.prototype;K.setTimeout=function(t){this.O=t};function vl(t,e,n){t.K=1,t.v=Na(yn(e)),t.s=n,t.P=!0,Vm(t,null)}function Vm(t,e){t.F=Date.now(),Ni(t),t.A=yn(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),Gm(n.i,"t",s),t.C=0,n=t.l.H,t.h=new $m,t.g=gy(t.l,n?e:null,!t.s),0<t.N&&(t.L=new _S(nt(t.La,t,t.g),t.N)),Om(t.S,t.g,"readystatechange",t.ib),e=t.H?_m(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),oi(),bS(t.j,t.u,t.A,t.m,t.U,t.s)}K.ib=function(t){t=t.target;const e=this.L;e&&cn(t)==3?e.l():this.La(t)};K.La=function(t){try{if(t==this.g)e:{const u=cn(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>u)&&(u!=3||ul||this.g&&(this.h.h||this.g.fa()||Kf(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?oi(3):oi(2)),Ra(this);var n=this.g.aa();this.Y=n;t:if(Bm(this)){var s=Kf(this.g);t="";var r=s.length,i=cn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){fs(this),Kr(this);var o="";break t}this.h.i=new te.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,TS(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Mo(a)){var l=a;break t}}l=null}if(n=l)Fs(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,wl(this,n);else{this.i=!1,this.o=3,at(12),fs(this),Kr(this);break e}}this.P?(jm(this,u,o),ul&&this.i&&u==3&&(Om(this.S,this.T,"tick",this.hb),this.T.start())):(Fs(this.j,this.m,o,null),wl(this,o)),u==4&&fs(this),this.i&&!this.I&&(u==4?hy(this.l,this):(this.i=!1,Ni(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,at(12)):(this.o=0,at(13)),fs(this),Kr(this)}}}catch{}finally{}};function Bm(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function jm(t,e,n){let s=!0,r;for(;!t.I&&t.C<n.length;)if(r=AS(t,n),r==Uo){e==4&&(t.o=4,at(14),s=!1),Fs(t.j,t.m,null,"[Incomplete Response]");break}else if(r==yl){t.o=4,at(15),Fs(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else Fs(t.j,t.m,r,null),wl(t,r);Bm(t)&&r!=Uo&&r!=yl&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,at(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Lu(e),e.K=!0,at(11))):(Fs(t.j,t.m,n,"[Invalid Chunked Response]"),fs(t),Kr(t))}K.hb=function(){if(this.g){var t=cn(this.g),e=this.g.fa();this.C<e.length&&(Ra(this),jm(this,t,e),this.i&&t!=4&&Ni(this))}};function AS(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?Uo:(n=Number(e.substring(n,s)),isNaN(n)?yl:(s+=1,s+n>e.length?Uo:(e=e.substr(s,n),t.C=s+n,e)))}K.cancel=function(){this.I=!0,fs(this)};function Ni(t){t.V=Date.now()+t.O,Hm(t,t.O)}function Hm(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Ai(nt(t.gb,t),e)}function Ra(t){t.B&&(te.clearTimeout(t.B),t.B=null)}K.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(IS(this.j,this.A),this.K!=2&&(oi(),at(17)),fs(this),this.o=2,Kr(this)):Hm(this,this.V-t)};function Kr(t){t.l.G==0||t.I||hy(t.l,t)}function fs(t){Ra(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Tu(t.T),Pm(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function wl(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||El(n.h,t))){if(!t.J&&El(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Vo(n),Pa(n);else break e;Pu(n),at(18)}}else n.Ba=r[1],0<n.Ba-n.T&&37500>r[2]&&n.L&&n.A==0&&!n.v&&(n.v=Ai(nt(n.cb,n),6e3));if(1>=Jm(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else ds(n,11)}else if((t.J||n.g==t)&&Vo(n),!Mo(e))for(r=n.Fa.g.parse(e),e=0;e<r.length;e++){let l=r[e];if(n.T=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.I=l[1],n.ka=l[2];const u=l[3];u!=null&&(n.ma=u,n.j.info("VER="+n.ma));const h=l[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const f=l[5];f!=null&&typeof f=="number"&&0<f&&(s=1.5*f,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const d=t.g;if(d){const m=d.g?d.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var i=s.h;i.g||m.indexOf("spdy")==-1&&m.indexOf("quic")==-1&&m.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(ku(i,i.h),i.h=null))}if(s.D){const E=d.g?d.g.getResponseHeader("X-HTTP-Session-Id"):null;E&&(s.za=E,Ae(s.F,s.D,E))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=py(s,s.H?s.ka:null,s.V),o.J){Ym(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(Ra(a),Ni(a)),s.g=o}else ly(s);0<n.i.length&&La(n)}else l[0]!="stop"&&l[0]!="close"||ds(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?ds(n,7):Ou(n):l[0]!="noop"&&n.l&&n.l.wa(l),n.A=0)}}oi(4)}catch{}}function kS(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Ea(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function RS(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Ea(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function qm(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Ea(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=RS(t),s=kS(t),r=s.length,i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}var Km=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function NS(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function ws(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof ws){this.h=e!==void 0?e:t.h,Fo(this,t.j),this.s=t.s,this.g=t.g,$o(this,t.m),this.l=t.l,e=t.i;var n=new ai;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),jf(this,n),this.o=t.o}else t&&(n=String(t).match(Km))?(this.h=!!e,Fo(this,n[1]||"",!0),this.s=Pr(n[2]||""),this.g=Pr(n[3]||"",!0),$o(this,n[4]),this.l=Pr(n[5]||"",!0),jf(this,n[6]||"",!0),this.o=Pr(n[7]||"")):(this.h=!!e,this.i=new ai(null,this.h))}ws.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Lr(e,Hf,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Lr(e,Hf,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Lr(n,n.charAt(0)=="/"?PS:OS,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Lr(n,MS)),t.join("")};function yn(t){return new ws(t)}function Fo(t,e,n){t.j=n?Pr(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function $o(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function jf(t,e,n){e instanceof ai?(t.i=e,xS(t.i,t.h)):(n||(e=Lr(e,LS)),t.i=new ai(e,t.h))}function Ae(t,e,n){t.i.set(e,n)}function Na(t){return Ae(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Pr(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Lr(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,DS),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function DS(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Hf=/[#\/\?@]/g,OS=/[#\?:]/g,PS=/[#\?]/g,LS=/[#\?@]/g,MS=/#/g;function ai(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function ns(t){t.g||(t.g=new Map,t.h=0,t.i&&NS(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}K=ai.prototype;K.add=function(t,e){ns(this),this.i=null,t=Er(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Wm(t,e){ns(t),e=Er(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function zm(t,e){return ns(t),e=Er(t,e),t.g.has(e)}K.forEach=function(t,e){ns(this),this.g.forEach(function(n,s){n.forEach(function(r){t.call(e,r,s,this)},this)},this)};K.oa=function(){ns(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const r=t[s];for(let i=0;i<r.length;i++)n.push(e[s])}return n};K.W=function(t){ns(this);let e=[];if(typeof t=="string")zm(this,t)&&(e=e.concat(this.g.get(Er(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};K.set=function(t,e){return ns(this),this.i=null,t=Er(this,t),zm(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};K.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function Gm(t,e,n){Wm(t,e),0<n.length&&(t.i=null,t.g.set(Er(t,e),gu(n)),t.h+=n.length)}K.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const i=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),t.push(r)}}return this.i=t.join("&")};function Er(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function xS(t,e){e&&!t.j&&(ns(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(Wm(this,s),Gm(this,r,n))},t)),t.j=e}var US=class{constructor(t,e){this.h=t,this.g=e}};function Qm(t){this.l=t||FS,te.PerformanceNavigationTiming?(t=te.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(te.g&&te.g.Ga&&te.g.Ga()&&te.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var FS=10;function Xm(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Jm(t){return t.h?1:t.g?t.g.size:0}function El(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function ku(t,e){t.g?t.g.add(e):t.h=e}function Ym(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Qm.prototype.cancel=function(){if(this.i=Zm(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Zm(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return gu(t.i)}function Ru(){}Ru.prototype.stringify=function(t){return te.JSON.stringify(t,void 0)};Ru.prototype.parse=function(t){return te.JSON.parse(t,void 0)};function $S(){this.g=new Ru}function VS(t,e,n){const s=n||"";try{qm(t,function(r,i){let o=r;Ci(r)&&(o=bu(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function BS(t,e){const n=new Ca;if(te.Image){const s=new Image;s.onload=no(ro,n,s,"TestLoadImage: loaded",!0,e),s.onerror=no(ro,n,s,"TestLoadImage: error",!1,e),s.onabort=no(ro,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=no(ro,n,s,"TestLoadImage: timeout",!1,e),te.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function ro(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function Di(t){this.l=t.ac||null,this.j=t.jb||!1}Je(Di,Cu);Di.prototype.g=function(){return new Da(this.l,this.j)};Di.prototype.i=function(t){return function(){return t}}({});function Da(t,e){He.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Nu,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Je(Da,He);var Nu=0;K=Da.prototype;K.open=function(t,e){if(this.readyState!=Nu)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,ci(this)};K.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||te).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};K.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Oi(this)),this.readyState=Nu};K.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,ci(this)),this.g&&(this.readyState=3,ci(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof te.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;ey(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function ey(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}K.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Oi(this):ci(this),this.readyState==3&&ey(this)}};K.Va=function(t){this.g&&(this.response=this.responseText=t,Oi(this))};K.Ua=function(t){this.g&&(this.response=t,Oi(this))};K.ga=function(){this.g&&Oi(this)};function Oi(t){t.readyState=4,t.l=null,t.j=null,t.A=null,ci(t)}K.setRequestHeader=function(t,e){this.v.append(t,e)};K.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};K.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function ci(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Da.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var jS=te.JSON.parse;function Oe(t){He.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=ty,this.K=this.L=!1}Je(Oe,He);var ty="",HS=/^https?$/i,qS=["POST","PUT"];K=Oe.prototype;K.Ka=function(t){this.L=t};K.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():ml.g(),this.C=this.u?Bf(this.u):Bf(ml),this.g.onreadystatechange=nt(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){qf(this,i);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())n.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),r=te.FormData&&t instanceof te.FormData,!(0<=ym(qS,e))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{ry(this),0<this.B&&((this.K=KS(this.g))?(this.g.timeout=this.B,this.g.ontimeout=nt(this.qa,this)):this.A=Iu(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){qf(this,i)}};function KS(t){return cr&&cS()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}K.qa=function(){typeof pu<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ge(this,"timeout"),this.abort(8))};function qf(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,ny(t),Oa(t)}function ny(t){t.D||(t.D=!0,Ge(t,"complete"),Ge(t,"error"))}K.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ge(this,"complete"),Ge(this,"abort"),Oa(this))};K.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Oa(this,!0)),Oe.X.M.call(this)};K.Ha=function(){this.s||(this.F||this.v||this.l?sy(this):this.fb())};K.fb=function(){sy(this)};function sy(t){if(t.h&&typeof pu<"u"&&(!t.C[1]||cn(t)!=4||t.aa()!=2)){if(t.v&&cn(t)==4)Iu(t.Ha,0,t);else if(Ge(t,"readystatechange"),cn(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var r=String(t.H).match(Km)[1]||null;if(!r&&te.self&&te.self.location){var i=te.self.location.protocol;r=i.substr(0,i.length-1)}s=!HS.test(r?r.toLowerCase():"")}n=s}if(n)Ge(t,"complete"),Ge(t,"success");else{t.m=6;try{var o=2<cn(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",ny(t)}}finally{Oa(t)}}}}function Oa(t,e){if(t.g){ry(t);const n=t.g,s=t.C[0]?Lo:null;t.g=null,t.C=null,e||Ge(t,"ready");try{n.onreadystatechange=s}catch{}}}function ry(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(te.clearTimeout(t.A),t.A=null)}function cn(t){return t.g?t.g.readyState:0}K.aa=function(){try{return 2<cn(this)?this.g.status:-1}catch{return-1}};K.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};K.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),jS(e)}};function Kf(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case ty:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}K.Ea=function(){return this.m};K.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function iy(t){let e="";return yu(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function Du(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=iy(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Ae(t,e,n))}function Rr(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function oy(t){this.Ca=0,this.i=[],this.j=new Ca,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Rr("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Rr("baseRetryDelayMs",5e3,t),this.bb=Rr("retryDelaySeedMs",1e4,t),this.$a=Rr("forwardChannelMaxRetries",2,t),this.ta=Rr("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new Qm(t&&t.concurrentRequestLimit),this.Fa=new $S,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}K=oy.prototype;K.ma=8;K.G=1;function Ou(t){if(ay(t),t.G==3){var e=t.U++,n=yn(t.F);Ae(n,"SID",t.I),Ae(n,"RID",e),Ae(n,"TYPE","terminate"),Pi(t,n),e=new Ri(t,t.j,e,void 0),e.K=2,e.v=Na(yn(n)),n=!1,te.navigator&&te.navigator.sendBeacon&&(n=te.navigator.sendBeacon(e.v.toString(),"")),!n&&te.Image&&(new Image().src=e.v,n=!0),n||(e.g=gy(e.l,null),e.g.da(e.v)),e.F=Date.now(),Ni(e)}dy(t)}function Pa(t){t.g&&(Lu(t),t.g.cancel(),t.g=null)}function ay(t){Pa(t),t.u&&(te.clearTimeout(t.u),t.u=null),Vo(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&te.clearTimeout(t.m),t.m=null)}function La(t){Xm(t.h)||t.m||(t.m=!0,Rm(t.Ja,t),t.C=0)}function WS(t,e){return Jm(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=Ai(nt(t.Ja,t,e),fy(t,t.C)),t.C++,!0)}K.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const r=new Ri(this,this.j,t,void 0);let i=this.s;if(this.S&&(i?(i=_m(i),bm(i,this.S)):i=this.S),this.o!==null||this.N||(r.H=i,i=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=cy(this,r,e),n=yn(this.F),Ae(n,"RID",t),Ae(n,"CVER",22),this.D&&Ae(n,"X-HTTP-Session-Id",this.D),Pi(this,n),i&&(this.N?e="headers="+encodeURIComponent(String(iy(i)))+"&"+e:this.o&&Du(n,this.o,i)),ku(this.h,r),this.Ya&&Ae(n,"TYPE","init"),this.O?(Ae(n,"$req",e),Ae(n,"SID","null"),r.Z=!0,vl(r,n,null)):vl(r,n,e),this.G=2}}else this.G==3&&(t?Wf(this,t):this.i.length==0||Xm(this.h)||Wf(this))};function Wf(t,e){var n;e?n=e.m:n=t.U++;const s=yn(t.F);Ae(s,"SID",t.I),Ae(s,"RID",n),Ae(s,"AID",t.T),Pi(t,s),t.o&&t.s&&Du(s,t.o,t.s),n=new Ri(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=cy(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),ku(t.h,n),vl(n,s,e)}function Pi(t,e){t.ia&&yu(t.ia,function(n,s){Ae(e,s,n)}),t.l&&qm({},function(n,s){Ae(e,s,n)})}function cy(t,e,n){n=Math.min(t.i.length,n);var s=t.l?nt(t.l.Ra,t.l,t):null;e:{var r=t.i;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=r[c].h;const u=r[c].g;if(l-=i,0>l)i=Math.max(0,r[c].h-100),a=!1;else try{VS(u,o,"req"+l+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function ly(t){t.g||t.u||(t.Z=1,Rm(t.Ia,t),t.A=0)}function Pu(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=Ai(nt(t.Ia,t),fy(t,t.A)),t.A++,!0)}K.Ia=function(){if(this.u=null,uy(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Ai(nt(this.eb,this),t)}};K.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,at(10),Pa(this),uy(this))};function Lu(t){t.B!=null&&(te.clearTimeout(t.B),t.B=null)}function uy(t){t.g=new Ri(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=yn(t.sa);Ae(e,"RID","rpc"),Ae(e,"SID",t.I),Ae(e,"CI",t.L?"0":"1"),Ae(e,"AID",t.T),Ae(e,"TYPE","xmlhttp"),Pi(t,e),t.o&&t.s&&Du(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Na(yn(e)),n.s=null,n.P=!0,Vm(n,t)}K.cb=function(){this.v!=null&&(this.v=null,Pa(this),Pu(this),at(19))};function Vo(t){t.v!=null&&(te.clearTimeout(t.v),t.v=null)}function hy(t,e){var n=null;if(t.g==e){Vo(t),Lu(t),t.g=null;var s=2}else if(El(t.h,e))n=e.D,Ym(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;s=Sa(),Ge(s,new xm(s,n)),La(t)}else ly(t);else if(r=e.o,r==3||r==0&&0<t.pa||!(s==1&&WS(t,e)||s==2&&Pu(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),r){case 1:ds(t,5);break;case 4:ds(t,10);break;case 3:ds(t,6);break;default:ds(t,2)}}}function fy(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function ds(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=nt(t.kb,t);n||(n=new ws("//www.google.com/images/cleardot.gif"),te.location&&te.location.protocol=="http"||Fo(n,"https"),Na(n)),BS(n.toString(),s)}else at(2);t.G=0,t.l&&t.l.va(e),dy(t),ay(t)}K.kb=function(t){t?(this.j.info("Successfully pinged google.com"),at(2)):(this.j.info("Failed to ping google.com"),at(1))};function dy(t){if(t.G=0,t.la=[],t.l){const e=Zm(t.h);(e.length!=0||t.i.length!=0)&&(Mf(t.la,e),Mf(t.la,t.i),t.h.i.length=0,gu(t.i),t.i.length=0),t.l.ua()}}function py(t,e,n){var s=n instanceof ws?yn(n):new ws(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),$o(s,s.m);else{var r=te.location;s=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var i=new ws(null,void 0);s&&Fo(i,s),e&&(i.g=e),r&&$o(i,r),n&&(i.l=n),s=i}return n=t.D,e=t.za,n&&e&&Ae(s,n,e),Ae(s,"VER",t.ma),Pi(t,s),s}function gy(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new Oe(new Di({jb:!0})):new Oe(t.ra),e.Ka(t.H),e}function my(){}K=my.prototype;K.xa=function(){};K.wa=function(){};K.va=function(){};K.ua=function(){};K.Ra=function(){};function Bo(){if(cr&&!(10<=Number(lS)))throw Error("Environmental error: no available transport.")}Bo.prototype.g=function(t,e){return new Ot(t,e)};function Ot(t,e){He.call(this),this.g=new oy(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!Mo(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Mo(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new _r(this)}Je(Ot,He);Ot.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;at(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=py(t,null,t.V),La(t)};Ot.prototype.close=function(){Ou(this.g)};Ot.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=bu(t),t=n);e.i.push(new US(e.ab++,t)),e.G==3&&La(e)};Ot.prototype.M=function(){this.g.l=null,delete this.j,Ou(this.g),delete this.g,Ot.X.M.call(this)};function yy(t){Su.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Je(yy,Su);function vy(){Au.call(this),this.status=1}Je(vy,Au);function _r(t){this.g=t}Je(_r,my);_r.prototype.xa=function(){Ge(this.g,"a")};_r.prototype.wa=function(t){Ge(this.g,new yy(t))};_r.prototype.va=function(t){Ge(this.g,new vy)};_r.prototype.ua=function(){Ge(this.g,"b")};Bo.prototype.createWebChannel=Bo.prototype.g;Ot.prototype.send=Ot.prototype.u;Ot.prototype.open=Ot.prototype.m;Ot.prototype.close=Ot.prototype.close;Aa.NO_ERROR=0;Aa.TIMEOUT=8;Aa.HTTP_ERROR=6;Um.COMPLETE="complete";Fm.EventType=ki;ki.OPEN="a";ki.CLOSE="b";ki.ERROR="c";ki.MESSAGE="d";He.prototype.listen=He.prototype.N;Oe.prototype.listenOnce=Oe.prototype.O;Oe.prototype.getLastError=Oe.prototype.Oa;Oe.prototype.getLastErrorCode=Oe.prototype.Ea;Oe.prototype.getStatus=Oe.prototype.aa;Oe.prototype.getResponseJson=Oe.prototype.Sa;Oe.prototype.getResponseText=Oe.prototype.fa;Oe.prototype.send=Oe.prototype.da;Oe.prototype.setWithCredentials=Oe.prototype.Ka;var zS=function(){return new Bo},GS=function(){return Sa()},Ac=Aa,QS=Um,XS=ks,zf={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},JS=Di,io=Fm,YS=Oe;const Gf="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ze.UNAUTHENTICATED=new Ze(null),Ze.GOOGLE_CREDENTIALS=new Ze("google-credentials-uid"),Ze.FIRST_PARTY=new Ze("first-party-uid"),Ze.MOCK_USER=new Ze("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let br="9.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Is=new hu("@firebase/firestore");function Qf(){return Is.logLevel}function W(t,...e){if(Is.logLevel<=me.DEBUG){const n=e.map(Mu);Is.debug(`Firestore (${br}): ${t}`,...n)}}function vn(t,...e){if(Is.logLevel<=me.ERROR){const n=e.map(Mu);Is.error(`Firestore (${br}): ${t}`,...n)}}function _l(t,...e){if(Is.logLevel<=me.WARN){const n=e.map(Mu);Is.warn(`Firestore (${br}): ${t}`,...n)}}function Mu(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ie(t="Unexpected state"){const e=`FIRESTORE (${br}) INTERNAL ASSERTION FAILED: `+t;throw vn(e),new Error(e)}function Ie(t,e){t||ie()}function oe(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class J extends Sn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wy{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class ZS{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ze.UNAUTHENTICATED))}shutdown(){}}class eA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class tA{constructor(e){this.t=e,this.currentUser=Ze.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new dn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new dn,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{W("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(W("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new dn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(W("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Ie(typeof s.accessToken=="string"),new wy(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Ie(e===null||typeof e=="string"),new Ze(e)}}class nA{constructor(e,n,s,r){this.h=e,this.l=n,this.m=s,this.g=r,this.type="FirstParty",this.user=Ze.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(Ie(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class sA{constructor(e,n,s,r){this.h=e,this.l=n,this.m=s,this.g=r}getToken(){return Promise.resolve(new nA(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(Ze.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class rA{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class iA{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const s=i=>{i.error!=null&&W("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.A;return this.A=i.token,W("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{W("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.T.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.T.getImmediate({optional:!0});i?r(i):W("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ie(typeof n.token=="string"),this.A=n.token,new rA(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oA(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ey{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=oA(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function ye(t,e){return t<e?-1:t>e?1:0}function lr(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new J(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new J(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new J(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new J(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Fe.fromMillis(Date.now())}static fromDate(e){return Fe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new Fe(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ye(this.nanoseconds,e.nanoseconds):ye(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ce(e)}static min(){return new ce(new Fe(0,0))}static max(){return new ce(new Fe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(e,n,s){n===void 0?n=0:n>e.length&&ie(),s===void 0?s=e.length-n:s>e.length-n&&ie(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return li.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof li?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ke extends li{construct(e,n,s){return new ke(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new J(D.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new ke(n)}static emptyPath(){return new ke([])}}const aA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class tt extends li{construct(e,n,s){return new tt(e,n,s)}static isValidIdentifier(e){return aA.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),tt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new tt(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new J(D.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new J(D.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new J(D.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new J(D.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new tt(n)}static emptyPath(){return new tt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e){this.path=e}static fromPath(e){return new Y(ke.fromString(e))}static fromName(e){return new Y(ke.fromString(e).popFirst(5))}static empty(){return new Y(ke.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ke.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ke.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Y(new ke(e.slice()))}}function cA(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=ce.fromTimestamp(s===1e9?new Fe(n+1,0):new Fe(n,s));return new Xn(r,Y.empty(),e)}function lA(t){return new Xn(t.readTime,t.key,-1)}class Xn{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new Xn(ce.min(),Y.empty(),-1)}static max(){return new Xn(ce.max(),Y.empty(),-1)}}function uA(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Y.comparator(t.documentKey,e.documentKey),n!==0?n:ye(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class fA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Li(t){if(t.code!==D.FAILED_PRECONDITION||t.message!==hA)throw t;W("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ie(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new O((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof O?n:O.resolve(n)}catch(n){return O.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):O.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):O.reject(n)}static resolve(e){return new O((n,s)=>{n(e)})}static reject(e){return new O((n,s)=>{s(e)})}static waitFor(e){return new O((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(e){let n=O.resolve(!1);for(const s of e)n=n.next(r=>r?O.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(e,n){return new O((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===i&&s(o)},u=>r(u))}})}static doWhile(e,n){return new O((s,r)=>{const i=()=>{e()===!0?n().next(()=>{i()},r):s()};i()})}}function Mi(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xu{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>n.writeSequenceNumber(s))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xf(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Tr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function _y(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */xu.at=-1;class Ve{constructor(e,n){this.comparator=e,this.root=n||Ke.EMPTY}insert(e,n){return new Ve(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ke.BLACK,null,null))}remove(e){return new Ve(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ke.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new oo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new oo(this.root,e,this.comparator,!1)}getReverseIterator(){return new oo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new oo(this.root,e,this.comparator,!0)}}class oo{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ke{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s!=null?s:Ke.RED,this.left=r!=null?r:Ke.EMPTY,this.right=i!=null?i:Ke.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new Ke(e!=null?e:this.key,n!=null?n:this.value,s!=null?s:this.color,r!=null?r:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Ke.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return Ke.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ke.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ke.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ie();const e=this.left.check();if(e!==this.right.check())throw ie();return e+(this.isRed()?0:1)}}Ke.EMPTY=null,Ke.RED=!0,Ke.BLACK=!1;Ke.EMPTY=new class{constructor(){this.size=0}get key(){throw ie()}get value(){throw ie()}get color(){throw ie()}get left(){throw ie()}get right(){throw ie()}copy(t,e,n,s,r){return this}insert(t,e,n){return new Ke(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e){this.comparator=e,this.data=new Ve(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Jf(this.data.getIterator())}getIteratorFrom(e){return new Jf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof $e)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new $e(this.comparator);return n.data=e,n}}class Jf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(e){this.fields=e,e.sort(tt.comparator)}static empty(){return new Yt([])}unionWith(e){let n=new $e(tt.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Yt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return lr(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new it(n)}static fromUint8Array(e){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new it(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ye(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}it.EMPTY_BYTE_STRING=new it("");const dA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Jn(t){if(Ie(!!t),typeof t=="string"){let e=0;const n=dA.exec(t);if(Ie(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:xe(t.seconds),nanos:xe(t.nanos)}}function xe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ur(t){return typeof t=="string"?it.fromBase64String(t):it.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function by(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Ty(t){const e=t.mapValue.fields.__previous_value__;return by(e)?Ty(e):e}function ui(t){const e=Jn(t.mapValue.fields.__local_write_time__.timestampValue);return new Fe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pA{constructor(e,n,s,r,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class hi{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new hi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof hi&&e.projectId===this.projectId&&e.database===this.database}}function Ma(t){return t==null}function jo(t){return t===0&&1/t==-1/0}function gA(t){return typeof t=="number"&&Number.isInteger(t)&&!jo(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ao={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Cs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?by(t)?4:mA(t)?9007199254740991:10:ie()}function sn(t,e){if(t===e)return!0;const n=Cs(t);if(n!==Cs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ui(t).isEqual(ui(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=Jn(s.timestampValue),o=Jn(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return ur(s.bytesValue).isEqual(ur(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return xe(s.geoPointValue.latitude)===xe(r.geoPointValue.latitude)&&xe(s.geoPointValue.longitude)===xe(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return xe(s.integerValue)===xe(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=xe(s.doubleValue),o=xe(r.doubleValue);return i===o?jo(i)===jo(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return lr(t.arrayValue.values||[],e.arrayValue.values||[],sn);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(Xf(i)!==Xf(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!sn(i[a],o[a])))return!1;return!0}(t,e);default:return ie()}}function fi(t,e){return(t.values||[]).find(n=>sn(n,e))!==void 0}function hr(t,e){if(t===e)return 0;const n=Cs(t),s=Cs(e);if(n!==s)return ye(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return ye(t.booleanValue,e.booleanValue);case 2:return function(r,i){const o=xe(r.integerValue||r.doubleValue),a=xe(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Yf(t.timestampValue,e.timestampValue);case 4:return Yf(ui(t),ui(e));case 5:return ye(t.stringValue,e.stringValue);case 6:return function(r,i){const o=ur(r),a=ur(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=ye(o[c],a[c]);if(l!==0)return l}return ye(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,i){const o=ye(xe(r.latitude),xe(i.latitude));return o!==0?o:ye(xe(r.longitude),xe(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=hr(o[c],a[c]);if(l)return l}return ye(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,i){if(r===ao.mapValue&&i===ao.mapValue)return 0;if(r===ao.mapValue)return 1;if(i===ao.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=i.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=ye(a[u],l[u]);if(h!==0)return h;const f=hr(o[a[u]],c[l[u]]);if(f!==0)return f}return ye(a.length,l.length)}(t.mapValue,e.mapValue);default:throw ie()}}function Yf(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ye(t,e);const n=Jn(t),s=Jn(e),r=ye(n.seconds,s.seconds);return r!==0?r:ye(n.nanos,s.nanos)}function Gs(t){return bl(t)}function bl(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const r=Jn(s);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?ur(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,Y.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=bl(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${bl(s.fields[a])}`;return i+"}"}(t.mapValue):ie();var e,n}function Tl(t){return!!t&&"integerValue"in t}function Uu(t){return!!t&&"arrayValue"in t}function Zf(t){return!!t&&"nullValue"in t}function ed(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ho(t){return!!t&&"mapValue"in t}function Wr(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Tr(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=Wr(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Wr(t.arrayValue.values[n]);return e}return Object.assign({},t)}function mA(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e){this.value=e}static empty(){return new Mt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!ho(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Wr(n)}setAll(e){let n=tt.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=Wr(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());ho(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return sn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];ho(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){Tr(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new Mt(Wr(this.value))}}function Iy(t){const e=[];return Tr(t.fields,(n,s)=>{const r=new tt([n]);if(ho(s)){const i=Iy(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new Yt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e,n,s,r,i,o){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.data=i,this.documentState=o}static newInvalidDocument(e){return new We(e,0,ce.min(),ce.min(),Mt.empty(),0)}static newFoundDocument(e,n,s){return new We(e,1,n,ce.min(),s,0)}static newNoDocument(e,n){return new We(e,2,n,ce.min(),Mt.empty(),0)}static newUnknownDocument(e,n){return new We(e,3,n,ce.min(),Mt.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Mt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Mt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ce.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof We&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new We(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yA{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.ht=null}}function td(t,e=null,n=[],s=[],r=null,i=null,o=null){return new yA(t,e,n,s,r,i,o)}function Fu(t){const e=oe(t);if(e.ht===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>{return(r=s).field.canonicalString()+r.op.toString()+Gs(r.value);var r}).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),Ma(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Gs(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Gs(s)).join(",")),e.ht=n}return e.ht}function vA(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(s=n).field.canonicalString()} ${s.op} ${Gs(s.value)}`;var s}).join(", ")}]`),Ma(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>Gs(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>Gs(n)).join(",")),`Target(${e})`}function $u(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let r=0;r<t.orderBy.length;r++)if(!SA(t.orderBy[r],e.orderBy[r]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let r=0;r<t.filters.length;r++)if(n=t.filters[r],s=e.filters[r],n.op!==s.op||!n.field.isEqual(s.field)||!sn(n.value,s.value))return!1;var n,s;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!sd(t.startAt,e.startAt)&&sd(t.endAt,e.endAt)}function Il(t){return Y.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class dt extends class{}{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.lt(e,n,s):new wA(e,n,s):n==="array-contains"?new bA(e,s):n==="in"?new TA(e,s):n==="not-in"?new IA(e,s):n==="array-contains-any"?new CA(e,s):new dt(e,n,s)}static lt(e,n,s){return n==="in"?new EA(e,s):new _A(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.ft(hr(n,this.value)):n!==null&&Cs(this.value)===Cs(n)&&this.ft(hr(n,this.value))}ft(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ie()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class wA extends dt{constructor(e,n,s){super(e,n,s),this.key=Y.fromName(s.referenceValue)}matches(e){const n=Y.comparator(e.key,this.key);return this.ft(n)}}class EA extends dt{constructor(e,n){super(e,"in",n),this.keys=Cy("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class _A extends dt{constructor(e,n){super(e,"not-in",n),this.keys=Cy("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Cy(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>Y.fromName(s.referenceValue))}class bA extends dt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Uu(n)&&fi(n.arrayValue,this.value)}}class TA extends dt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&fi(this.value.arrayValue,n)}}class IA extends dt{constructor(e,n){super(e,"not-in",n)}matches(e){if(fi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!fi(this.value.arrayValue,n)}}class CA extends dt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Uu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>fi(this.value.arrayValue,s))}}class Ho{constructor(e,n){this.position=e,this.inclusive=n}}class zr{constructor(e,n="asc"){this.field=e,this.dir=n}}function SA(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function nd(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=Y.comparator(Y.fromName(o.referenceValue),n.key):s=hr(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function sd(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!sn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xa{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this._t=null,this.wt=null,this.startAt,this.endAt}}function AA(t,e,n,s,r,i,o,a){return new xa(t,e,n,s,r,i,o,a)}function Vu(t){return new xa(t)}function rd(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function kA(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function RA(t){for(const e of t.filters)if(e.dt())return e.field;return null}function NA(t){return t.collectionGroup!==null}function di(t){const e=oe(t);if(e._t===null){e._t=[];const n=RA(e),s=kA(e);if(n!==null&&s===null)n.isKeyField()||e._t.push(new zr(n)),e._t.push(new zr(tt.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e._t.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e._t.push(new zr(tt.keyField(),i))}}}return e._t}function wn(t){const e=oe(t);if(!e.wt)if(e.limitType==="F")e.wt=td(e.path,e.collectionGroup,di(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of di(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new zr(i.field,o))}const s=e.endAt?new Ho(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Ho(e.startAt.position,e.startAt.inclusive):null;e.wt=td(e.path,e.collectionGroup,n,e.filters,e.limit,s,r)}return e.wt}function Cl(t,e,n){return new xa(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ua(t,e){return $u(wn(t),wn(e))&&t.limitType===e.limitType}function Sy(t){return`${Fu(wn(t))}|lt:${t.limitType}`}function Sl(t){return`Query(target=${vA(wn(t))}; limitType=${t.limitType})`}function Bu(t,e){return e.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):Y.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,s){for(const r of n.explicitOrderBy)if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=nd(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,di(n),s)||n.endAt&&!function(r,i,o){const a=nd(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,di(n),s))}(t,e)}function DA(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Ay(t){return(e,n)=>{let s=!1;for(const r of di(t)){const i=OA(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function OA(t,e,n){const s=t.field.isKeyField()?Y.comparator(e.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?hr(a,c):ie()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return ie()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ky(t,e){if(t.gt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:jo(e)?"-0":e}}function Ry(t){return{integerValue:""+t}}function PA(t,e){return gA(e)?Ry(e):ky(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa{constructor(){this._=void 0}}function LA(t,e,n){return t instanceof qo?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,e):t instanceof pi?Dy(t,e):t instanceof gi?Oy(t,e):function(s,r){const i=Ny(s,r),o=id(i)+id(s.yt);return Tl(i)&&Tl(s.yt)?Ry(o):ky(s.It,o)}(t,e)}function MA(t,e,n){return t instanceof pi?Dy(t,e):t instanceof gi?Oy(t,e):n}function Ny(t,e){return t instanceof Ko?Tl(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class qo extends Fa{}class pi extends Fa{constructor(e){super(),this.elements=e}}function Dy(t,e){const n=Py(e);for(const s of t.elements)n.some(r=>sn(r,s))||n.push(s);return{arrayValue:{values:n}}}class gi extends Fa{constructor(e){super(),this.elements=e}}function Oy(t,e){let n=Py(e);for(const s of t.elements)n=n.filter(r=>!sn(r,s));return{arrayValue:{values:n}}}class Ko extends Fa{constructor(e,n){super(),this.It=e,this.yt=n}}function id(t){return xe(t.integerValue||t.doubleValue)}function Py(t){return Uu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function xA(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof pi&&s instanceof pi||n instanceof gi&&s instanceof gi?lr(n.elements,s.elements,sn):n instanceof Ko&&s instanceof Ko?sn(n.yt,s.yt):n instanceof qo&&s instanceof qo}(t.transform,e.transform)}class UA{constructor(e,n){this.version=e,this.transformResults=n}}class Zt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Zt}static exists(e){return new Zt(void 0,e)}static updateTime(e){return new Zt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function fo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class $a{}function Ly(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new ju(t.key,Zt.none()):new xi(t.key,t.data,Zt.none());{const n=t.data,s=Mt.empty();let r=new $e(tt.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new Rs(t.key,s,new Yt(r.toArray()),Zt.none())}}function FA(t,e,n){t instanceof xi?function(s,r,i){const o=s.value.clone(),a=ad(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Rs?function(s,r,i){if(!fo(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=ad(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(My(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function Gr(t,e,n,s){return t instanceof xi?function(r,i,o,a){if(!fo(r.precondition,i))return o;const c=r.value.clone(),l=cd(r.fieldTransforms,a,i);return c.setAll(l),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof Rs?function(r,i,o,a){if(!fo(r.precondition,i))return o;const c=cd(r.fieldTransforms,a,i),l=i.data;return l.setAll(My(r)),l.setAll(c),i.convertToFoundDocument(i.version,l).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(u=>u.field))}(t,e,n,s):function(r,i,o){return fo(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function $A(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=Ny(s.transform,r||null);i!=null&&(n===null&&(n=Mt.empty()),n.set(s.field,i))}return n||null}function od(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&lr(n,s,(r,i)=>xA(r,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class xi extends $a{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Rs extends $a{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function My(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function ad(t,e,n){const s=new Map;Ie(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,MA(o,a,n[r]))}return s}function cd(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,LA(i,o,e))}return s}class ju extends $a{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class VA extends $a{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BA{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Me,he;function jA(t){switch(t){default:return ie();case D.CANCELLED:case D.UNKNOWN:case D.DEADLINE_EXCEEDED:case D.RESOURCE_EXHAUSTED:case D.INTERNAL:case D.UNAVAILABLE:case D.UNAUTHENTICATED:return!1;case D.INVALID_ARGUMENT:case D.NOT_FOUND:case D.ALREADY_EXISTS:case D.PERMISSION_DENIED:case D.FAILED_PRECONDITION:case D.ABORTED:case D.OUT_OF_RANGE:case D.UNIMPLEMENTED:case D.DATA_LOSS:return!0}}function xy(t){if(t===void 0)return vn("GRPC error has no .code"),D.UNKNOWN;switch(t){case Me.OK:return D.OK;case Me.CANCELLED:return D.CANCELLED;case Me.UNKNOWN:return D.UNKNOWN;case Me.DEADLINE_EXCEEDED:return D.DEADLINE_EXCEEDED;case Me.RESOURCE_EXHAUSTED:return D.RESOURCE_EXHAUSTED;case Me.INTERNAL:return D.INTERNAL;case Me.UNAVAILABLE:return D.UNAVAILABLE;case Me.UNAUTHENTICATED:return D.UNAUTHENTICATED;case Me.INVALID_ARGUMENT:return D.INVALID_ARGUMENT;case Me.NOT_FOUND:return D.NOT_FOUND;case Me.ALREADY_EXISTS:return D.ALREADY_EXISTS;case Me.PERMISSION_DENIED:return D.PERMISSION_DENIED;case Me.FAILED_PRECONDITION:return D.FAILED_PRECONDITION;case Me.ABORTED:return D.ABORTED;case Me.OUT_OF_RANGE:return D.OUT_OF_RANGE;case Me.UNIMPLEMENTED:return D.UNIMPLEMENTED;case Me.DATA_LOSS:return D.DATA_LOSS;default:return ie()}}(he=Me||(Me={}))[he.OK=0]="OK",he[he.CANCELLED=1]="CANCELLED",he[he.UNKNOWN=2]="UNKNOWN",he[he.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",he[he.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",he[he.NOT_FOUND=5]="NOT_FOUND",he[he.ALREADY_EXISTS=6]="ALREADY_EXISTS",he[he.PERMISSION_DENIED=7]="PERMISSION_DENIED",he[he.UNAUTHENTICATED=16]="UNAUTHENTICATED",he[he.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",he[he.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",he[he.ABORTED=10]="ABORTED",he[he.OUT_OF_RANGE=11]="OUT_OF_RANGE",he[he.UNIMPLEMENTED=12]="UNIMPLEMENTED",he[he.INTERNAL=13]="INTERNAL",he[he.UNAVAILABLE=14]="UNAVAILABLE",he[he.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Tr(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return _y(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HA=new Ve(Y.comparator);function En(){return HA}const Uy=new Ve(Y.comparator);function Mr(...t){let e=Uy;for(const n of t)e=e.insert(n.key,n);return e}function Fy(t){let e=Uy;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function ps(){return Qr()}function $y(){return Qr()}function Qr(){return new Ir(t=>t.toString(),(t,e)=>t.isEqual(e))}const qA=new Ve(Y.comparator),KA=new $e(Y.comparator);function ue(...t){let e=KA;for(const n of t)e=e.add(n);return e}const WA=new $e(ye);function Vy(){return WA}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const r=new Map;return r.set(e,Ui.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new Va(ce.min(),r,Vy(),En(),ue())}}class Ui{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new Ui(s,n,ue(),ue(),ue())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{constructor(e,n,s,r){this.Tt=e,this.removedTargetIds=n,this.key=s,this.Et=r}}class By{constructor(e,n){this.targetId=e,this.At=n}}class jy{constructor(e,n,s=it.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class ld{constructor(){this.Rt=0,this.bt=hd(),this.Pt=it.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return this.Rt!==0}get Dt(){return this.Vt}Ct(e){e.approximateByteSize()>0&&(this.Vt=!0,this.Pt=e)}xt(){let e=ue(),n=ue(),s=ue();return this.bt.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:ie()}}),new Ui(this.Pt,this.vt,e,n,s)}Nt(){this.Vt=!1,this.bt=hd()}kt(e,n){this.Vt=!0,this.bt=this.bt.insert(e,n)}Ot(e){this.Vt=!0,this.bt=this.bt.remove(e)}Mt(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}}class zA{constructor(e){this.Bt=e,this.Lt=new Map,this.Ut=En(),this.qt=ud(),this.Kt=new $e(ye)}Gt(e){for(const n of e.Tt)e.Et&&e.Et.isFoundDocument()?this.Qt(n,e.Et):this.jt(n,e.key,e.Et);for(const n of e.removedTargetIds)this.jt(n,e.key,e.Et)}Wt(e){this.forEachTarget(e,n=>{const s=this.zt(n);switch(e.state){case 0:this.Ht(n)&&s.Ct(e.resumeToken);break;case 1:s.Ft(),s.St||s.Nt(),s.Ct(e.resumeToken);break;case 2:s.Ft(),s.St||this.removeTarget(n);break;case 3:this.Ht(n)&&(s.$t(),s.Ct(e.resumeToken));break;case 4:this.Ht(n)&&(this.Jt(n),s.Ct(e.resumeToken));break;default:ie()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Lt.forEach((s,r)=>{this.Ht(r)&&n(r)})}Yt(e){const n=e.targetId,s=e.At.count,r=this.Xt(n);if(r){const i=r.target;if(Il(i))if(s===0){const o=new Y(i.path);this.jt(n,o,We.newNoDocument(o,ce.min()))}else Ie(s===1);else this.Zt(n)!==s&&(this.Jt(n),this.Kt=this.Kt.add(n))}}te(e){const n=new Map;this.Lt.forEach((i,o)=>{const a=this.Xt(o);if(a){if(i.current&&Il(a.target)){const c=new Y(a.target.path);this.Ut.get(c)!==null||this.ee(o,c)||this.jt(o,c,We.newNoDocument(c,e))}i.Dt&&(n.set(o,i.xt()),i.Nt())}});let s=ue();this.qt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Xt(c);return!l||l.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))}),this.Ut.forEach((i,o)=>o.setReadTime(e));const r=new Va(e,n,this.Kt,this.Ut,s);return this.Ut=En(),this.qt=ud(),this.Kt=new $e(ye),r}Qt(e,n){if(!this.Ht(e))return;const s=this.ee(e,n.key)?2:0;this.zt(e).kt(n.key,s),this.Ut=this.Ut.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ne(n.key).add(e))}jt(e,n,s){if(!this.Ht(e))return;const r=this.zt(e);this.ee(e,n)?r.kt(n,1):r.Ot(n),this.qt=this.qt.insert(n,this.ne(n).delete(e)),s&&(this.Ut=this.Ut.insert(n,s))}removeTarget(e){this.Lt.delete(e)}Zt(e){const n=this.zt(e).xt();return this.Bt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Mt(e){this.zt(e).Mt()}zt(e){let n=this.Lt.get(e);return n||(n=new ld,this.Lt.set(e,n)),n}ne(e){let n=this.qt.get(e);return n||(n=new $e(ye),this.qt=this.qt.insert(e,n)),n}Ht(e){const n=this.Xt(e)!==null;return n||W("WatchChangeAggregator","Detected inactive target",e),n}Xt(e){const n=this.Lt.get(e);return n&&n.St?null:this.Bt.se(e)}Jt(e){this.Lt.set(e,new ld),this.Bt.getRemoteKeysForTarget(e).forEach(n=>{this.jt(e,n,null)})}ee(e,n){return this.Bt.getRemoteKeysForTarget(e).has(n)}}function ud(){return new Ve(Y.comparator)}function hd(){return new Ve(Y.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GA=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),QA=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class XA{constructor(e,n){this.databaseId=e,this.gt=n}}function Wo(t,e){return t.gt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Hy(t,e){return t.gt?e.toBase64():e.toUint8Array()}function JA(t,e){return Wo(t,e.toTimestamp())}function pn(t){return Ie(!!t),ce.fromTimestamp(function(e){const n=Jn(e);return new Fe(n.seconds,n.nanos)}(t))}function Hu(t,e){return function(n){return new ke(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function qy(t){const e=ke.fromString(t);return Ie(zy(e)),e}function Al(t,e){return Hu(t.databaseId,e.path)}function kc(t,e){const n=qy(e);if(n.get(1)!==t.databaseId.projectId)throw new J(D.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new J(D.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Y(Ky(n))}function kl(t,e){return Hu(t.databaseId,e)}function YA(t){const e=qy(t);return e.length===4?ke.emptyPath():Ky(e)}function Rl(t){return new ke(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Ky(t){return Ie(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function fd(t,e,n){return{name:Al(t,e),fields:n.value.mapValue.fields}}function ZA(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:ie()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(c,l){return c.gt?(Ie(l===void 0||typeof l=="string"),it.fromBase64String(l||"")):(Ie(l===void 0||l instanceof Uint8Array),it.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?D.UNKNOWN:xy(c.code);return new J(l,c.message||"")}(o);n=new jy(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=kc(t,s.document.name),i=pn(s.document.updateTime),o=new Mt({mapValue:{fields:s.document.fields}}),a=We.newFoundDocument(r,i,o),c=s.targetIds||[],l=s.removedTargetIds||[];n=new po(c,l,a.key,a)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=kc(t,s.document),i=s.readTime?pn(s.readTime):ce.min(),o=We.newNoDocument(r,i),a=s.removedTargetIds||[];n=new po([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=kc(t,s.document),i=s.removedTargetIds||[];n=new po([],i,r,null)}else{if(!("filter"in e))return ie();{e.filter;const s=e.filter;s.targetId;const r=s.count||0,i=new BA(r),o=s.targetId;n=new By(o,i)}}return n}function ek(t,e){let n;if(e instanceof xi)n={update:fd(t,e.key,e.value)};else if(e instanceof ju)n={delete:Al(t,e.key)};else if(e instanceof Rs)n={update:fd(t,e.key,e.data),updateMask:uk(e.fieldMask)};else{if(!(e instanceof VA))return ie();n={verify:Al(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof qo)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof pi)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof gi)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Ko)return{fieldPath:i.field.canonicalString(),increment:o.yt};throw ie()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:JA(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:ie()}(t,e.precondition)),n}function tk(t,e){return t&&t.length>0?(Ie(e!==void 0),t.map(n=>function(s,r){let i=s.updateTime?pn(s.updateTime):pn(r);return i.isEqual(ce.min())&&(i=pn(r)),new UA(i,s.transformResults||[])}(n,e))):[]}function nk(t,e){return{documents:[kl(t,e.path)]}}function sk(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=kl(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=kl(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length===0)return;const l=c.map(u=>function(h){if(h.op==="=="){if(ed(h.value))return{unaryFilter:{field:Ms(h.field),op:"IS_NAN"}};if(Zf(h.value))return{unaryFilter:{field:Ms(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(ed(h.value))return{unaryFilter:{field:Ms(h.field),op:"IS_NOT_NAN"}};if(Zf(h.value))return{unaryFilter:{field:Ms(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ms(h.field),op:ak(h.op),value:h.value}}}(u));return l.length===1?l[0]:{compositeFilter:{op:"AND",filters:l}}}(e.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:Ms(u.field),direction:ok(u.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,l){return c.gt||Ma(l)?l:{value:l}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function rk(t){let e=YA(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){Ie(s===1);const u=n.from[0];u.allDescendants?r=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=Wy(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new zr($s(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,Ma(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(u){const h=!!u.before,f=u.values||[];return new Ho(f,h)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const h=!u.before,f=u.values||[];return new Ho(f,h)}(n.endAt)),AA(e,r,o,i,a,"F",c,l)}function ik(t,e){const n=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return ie()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Wy(t){return t?t.unaryFilter!==void 0?[lk(t)]:t.fieldFilter!==void 0?[ck(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>Wy(e)).reduce((e,n)=>e.concat(n)):ie():[]}function ok(t){return GA[t]}function ak(t){return QA[t]}function Ms(t){return{fieldPath:t.canonicalString()}}function $s(t){return tt.fromServerFormat(t.fieldPath)}function ck(t){return dt.create($s(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ie()}}(t.fieldFilter.op),t.fieldFilter.value)}function lk(t){switch(t.unaryFilter.op){case"IS_NAN":const e=$s(t.unaryFilter.field);return dt.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=$s(t.unaryFilter.field);return dt.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=$s(t.unaryFilter.field);return dt.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=$s(t.unaryFilter.field);return dt.create(r,"!=",{nullValue:"NULL_VALUE"});default:return ie()}}function uk(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function zy(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hk{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&FA(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=Gr(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=Gr(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=$y();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const c=Ly(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(ce.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ue())}isEqual(e){return this.batchId===e.batchId&&lr(this.mutations,e.mutations,(n,s)=>od(n,s))&&lr(this.baseMutations,e.baseMutations,(n,s)=>od(n,s))}}class qu{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){Ie(e.mutations.length===s.length);let r=qA;const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new qu(e,n,s,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fk{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(e,n,s,r,i=ce.min(),o=ce.min(),a=it.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Es(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Es(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Es(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dk{constructor(e){this.re=e}}function pk(t){const e=rk({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Cl(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gk{constructor(){this.Ye=new mk}addToCollectionParentIndex(e,n){return this.Ye.add(n),O.resolve()}getCollectionParents(e,n){return O.resolve(this.Ye.getEntries(n))}addFieldIndex(e,n){return O.resolve()}deleteFieldIndex(e,n){return O.resolve()}getDocumentsMatchingTarget(e,n){return O.resolve(null)}getIndexType(e,n){return O.resolve(0)}getFieldIndexes(e,n){return O.resolve([])}getNextCollectionGroupToUpdate(e){return O.resolve(null)}getMinOffset(e,n){return O.resolve(Xn.min())}getMinOffsetFromCollectionGroup(e,n){return O.resolve(Xn.min())}updateCollectionGroup(e,n,s){return O.resolve()}updateIndexEntries(e,n){return O.resolve()}}class mk{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new $e(ke.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new $e(ke.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new fr(0)}static vn(){return new fr(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yk{constructor(){this.changes=new Ir(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,We.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?O.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vk{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wk{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.getBaseDocument(e,n,s))).next(r=>(s!==null&&Gr(s.mutation,r,Yt.empty(),Fe.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,ue()).next(()=>s))}getLocalViewOfDocuments(e,n,s=ue()){const r=ps();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let o=Mr();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=ps();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,ue()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,r){let i=En();const o=Qr(),a=Qr();return n.forEach((c,l)=>{const u=s.get(l.key);r.has(l.key)&&(u===void 0||u.mutation instanceof Rs)?i=i.insert(l.key,l):u!==void 0&&(o.set(l.key,u.mutation.getFieldMask()),Gr(u.mutation,l,u.mutation.getFieldMask(),Fe.now()))}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new vk(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=Qr();let r=new Ve((o,a)=>o-a),i=ue();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=s.get(c)||Yt.empty();u=a.applyToLocalView(l,u),s.set(c,u);const h=(r.get(a.batchId)||ue()).add(c);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=$y();u.forEach(f=>{if(!i.has(f)){const d=Ly(n.get(f),s.get(f));d!==null&&h.set(f,d),i=i.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return O.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(r){return Y.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):NA(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):O.resolve(ps());let a=-1,c=i;return o.next(l=>O.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?O.resolve():this.getBaseDocument(e,u,h).next(f=>{c=c.insert(u,f)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,ue())).next(u=>({batchId:a,changes:Fy(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Y(n)).next(s=>{let r=Mr();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const r=n.collectionGroup;let i=Mr();return this.indexManager.getCollectionParents(e,r).next(o=>O.forEach(o,a=>{const c=function(l,u){return new xa(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(l=>{l.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,s){let r;return this.remoteDocumentCache.getAllFromCollection(e,n.path,s).next(i=>(r=i,this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId))).next(i=>{i.forEach((a,c)=>{const l=c.getKey();r.get(l)===null&&(r=r.insert(l,We.newInvalidDocument(l)))});let o=Mr();return r.forEach((a,c)=>{const l=i.get(a);l!==void 0&&Gr(l.mutation,c,Yt.empty(),Fe.now()),Bu(n,c)&&(o=o.insert(a,c))}),o})}getBaseDocument(e,n,s){return s===null||s.mutation.type===1?this.remoteDocumentCache.getEntry(e,n):O.resolve(We.newInvalidDocument(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ek{constructor(e){this.It=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return O.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var s;return this.Zn.set(n.id,{id:(s=n).id,version:s.version,createTime:pn(s.createTime)}),O.resolve()}getNamedQuery(e,n){return O.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(s){return{name:s.name,query:pk(s.bundledQuery),readTime:pn(s.readTime)}}(n)),O.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _k{constructor(){this.overlays=new Ve(Y.comparator),this.es=new Map}getOverlay(e,n){return O.resolve(this.overlays.get(n))}getOverlays(e,n){const s=ps();return O.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.ue(e,n,i)}),O.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.es.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.es.delete(s)),O.resolve()}getOverlaysForCollection(e,n,s){const r=ps(),i=n.length+1,o=new Y(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return O.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new Ve((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>s){let u=i.get(l.largestBatchId);u===null&&(u=ps(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=ps(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=r)););return O.resolve(a)}ue(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.es.get(r.largestBatchId).delete(s.key);this.es.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new fk(n,s));let i=this.es.get(n);i===void 0&&(i=ue(),this.es.set(n,i)),this.es.set(n,i.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ku{constructor(){this.ns=new $e(Be.ss),this.rs=new $e(Be.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const s=new Be(e,n);this.ns=this.ns.add(s),this.rs=this.rs.add(s)}us(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.cs(new Be(e,n))}hs(e,n){e.forEach(s=>this.removeReference(s,n))}ls(e){const n=new Y(new ke([])),s=new Be(n,e),r=new Be(n,e+1),i=[];return this.rs.forEachInRange([s,r],o=>{this.cs(o),i.push(o.key)}),i}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new Y(new ke([])),s=new Be(n,e),r=new Be(n,e+1);let i=ue();return this.rs.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Be(e,0),s=this.ns.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Be{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return Y.comparator(e.key,n.key)||ye(e._s,n._s)}static os(e,n){return ye(e._s,n._s)||Y.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bk{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new $e(Be.ss)}checkEmpty(e){return O.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new hk(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.gs=this.gs.add(new Be(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return O.resolve(o)}lookupMutationBatch(e,n){return O.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.ps(s),i=r<0?0:r;return O.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return O.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return O.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Be(n,0),r=new Be(n,Number.POSITIVE_INFINITY),i=[];return this.gs.forEachInRange([s,r],o=>{const a=this.ys(o._s);i.push(a)}),O.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new $e(ye);return n.forEach(r=>{const i=new Be(r,0),o=new Be(r,Number.POSITIVE_INFINITY);this.gs.forEachInRange([i,o],a=>{s=s.add(a._s)})}),O.resolve(this.Is(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;Y.isDocumentKey(i)||(i=i.child(""));const o=new Be(new Y(i),0);let a=new $e(ye);return this.gs.forEachWhile(c=>{const l=c.key.path;return!!s.isPrefixOf(l)&&(l.length===r&&(a=a.add(c._s)),!0)},o),O.resolve(this.Is(a))}Is(e){const n=[];return e.forEach(s=>{const r=this.ys(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){Ie(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.gs;return O.forEach(n.mutations,r=>{const i=new Be(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.gs=s})}An(e){}containsKey(e,n){const s=new Be(n,0),r=this.gs.firstAfterOrEqual(s);return O.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,O.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tk{constructor(e){this.Es=e,this.docs=new Ve(Y.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Es(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return O.resolve(s?s.document.mutableCopy():We.newInvalidDocument(n))}getEntries(e,n){let s=En();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():We.newInvalidDocument(r))}),O.resolve(s)}getAllFromCollection(e,n,s){let r=En();const i=new Y(n.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:a,value:{document:c}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||uA(lA(c),s)<=0||(r=r.insert(c.key,c.mutableCopy()))}return O.resolve(r)}getAllFromCollectionGroup(e,n,s,r){ie()}As(e,n){return O.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new Ik(this)}getSize(e){return O.resolve(this.size)}}class Ik extends yk{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.Yn.addEntry(e,r)):this.Yn.removeEntry(s)}),O.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ck{constructor(e){this.persistence=e,this.Rs=new Ir(n=>Fu(n),$u),this.lastRemoteSnapshotVersion=ce.min(),this.highestTargetId=0,this.bs=0,this.Ps=new Ku,this.targetCount=0,this.vs=fr.Pn()}forEachTarget(e,n){return this.Rs.forEach((s,r)=>n(r)),O.resolve()}getLastRemoteSnapshotVersion(e){return O.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return O.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),O.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.bs&&(this.bs=n),O.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new fr(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,O.resolve()}updateTargetData(e,n){return this.Dn(n),O.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,O.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Rs.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),O.waitFor(i).next(()=>r)}getTargetCount(e){return O.resolve(this.targetCount)}getTargetData(e,n){const s=this.Rs.get(n)||null;return O.resolve(s)}addMatchingKeys(e,n,s){return this.Ps.us(n,s),O.resolve()}removeMatchingKeys(e,n,s){this.Ps.hs(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),O.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),O.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Ps.ds(n);return O.resolve(s)}containsKey(e,n){return O.resolve(this.Ps.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sk{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new xu(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new Ck(this),this.indexManager=new gk,this.remoteDocumentCache=function(s){return new Tk(s)}(s=>this.referenceDelegate.xs(s)),this.It=new dk(n),this.Ns=new Ek(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new _k,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Vs[e.toKey()];return s||(s=new bk(n,this.referenceDelegate),this.Vs[e.toKey()]=s),s}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,s){W("MemoryPersistence","Starting transaction:",e);const r=new Ak(this.Ss.next());return this.referenceDelegate.ks(),s(r).next(i=>this.referenceDelegate.Os(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Ms(e,n){return O.or(Object.values(this.Vs).map(s=>()=>s.containsKey(e,n)))}}class Ak extends fA{constructor(e){super(),this.currentSequenceNumber=e}}class Wu{constructor(e){this.persistence=e,this.Fs=new Ku,this.$s=null}static Bs(e){return new Wu(e)}get Ls(){if(this.$s)return this.$s;throw ie()}addReference(e,n,s){return this.Fs.addReference(s,n),this.Ls.delete(s.toString()),O.resolve()}removeReference(e,n,s){return this.Fs.removeReference(s,n),this.Ls.add(s.toString()),O.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),O.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(r=>this.Ls.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.Ls.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}ks(){this.$s=new Set}Os(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return O.forEach(this.Ls,s=>{const r=Y.fromPath(s);return this.Us(e,r).next(i=>{i||n.removeEntry(r,ce.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.Us(e,n).next(s=>{s?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}Us(e,n){return O.or([()=>O.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ms(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.Si=s,this.Di=r}static Ci(e,n){let s=ue(),r=ue();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new zu(e,n.fromCache,s,r)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kk{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,s,r){return this.ki(e,n).next(i=>i||this.Oi(e,n,r,s)).next(i=>i||this.Mi(e,n))}ki(e,n){if(rd(n))return O.resolve(null);let s=wn(n);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=Cl(n,null,"F"),s=wn(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=ue(...i);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const l=this.Fi(n,a);return this.$i(n,l,o,c.readTime)?this.ki(e,Cl(n,null,"F")):this.Bi(e,l,n,c)}))})))}Oi(e,n,s,r){return rd(n)||r.isEqual(ce.min())?this.Mi(e,n):this.Ni.getDocuments(e,s).next(i=>{const o=this.Fi(n,i);return this.$i(n,o,s,r)?this.Mi(e,n):(Qf()<=me.DEBUG&&W("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Sl(n)),this.Bi(e,o,n,cA(r,-1)))})}Fi(e,n){let s=new $e(Ay(e));return n.forEach((r,i)=>{Bu(e,i)&&(s=s.add(i))}),s}$i(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Mi(e,n){return Qf()<=me.DEBUG&&W("QueryEngine","Using full collection scan to execute query:",Sl(n)),this.Ni.getDocumentsMatchingQuery(e,n,Xn.min())}Bi(e,n,s,r){return this.Ni.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rk{constructor(e,n,s,r){this.persistence=e,this.Li=n,this.It=r,this.Ui=new Ve(ye),this.qi=new Ir(i=>Fu(i),$u),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(s)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new wk(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ui))}}function Nk(t,e,n,s){return new Rk(t,e,n,s)}async function Gy(t,e){const n=oe(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.Qi(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=ue();for(const l of r){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(s,c).next(l=>({ji:l,removedBatchIds:o,addedBatchIds:a}))})})}function Dk(t,e){const n=oe(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,h=u.keys();let f=O.resolve();return h.forEach(d=>{f=f.next(()=>l.getEntry(a,d)).next(m=>{const E=c.docVersions.get(d);Ie(E!==null),m.version.compareTo(E)<0&&(u.applyToRemoteDocument(m,c),m.isValidDocument()&&(m.setReadTime(c.commitVersion),l.addEntry(m)))})}),f.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=ue();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,r))})}function Qy(t){const e=oe(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function Ok(t,e){const n=oe(t),s=e.snapshotVersion;let r=n.Ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});r=n.Ui;const a=[];e.targetChanges.forEach((u,h)=>{const f=r.get(h);if(!f)return;a.push(n.Cs.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.Cs.addMatchingKeys(i,u.addedDocuments,h)));let d=f.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(h)?d=d.withResumeToken(it.EMPTY_BYTE_STRING,ce.min()).withLastLimboFreeSnapshotVersion(ce.min()):u.resumeToken.approximateByteSize()>0&&(d=d.withResumeToken(u.resumeToken,s)),r=r.insert(h,d),function(m,E,C){return m.resumeToken.approximateByteSize()===0||E.snapshotVersion.toMicroseconds()-m.snapshotVersion.toMicroseconds()>=3e8?!0:C.addedDocuments.size+C.modifiedDocuments.size+C.removedDocuments.size>0}(f,d,u)&&a.push(n.Cs.updateTargetData(i,d))});let c=En(),l=ue();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(Pk(i,o,e.documentUpdates).next(u=>{c=u.Wi,l=u.zi})),!s.isEqual(ce.min())){const u=n.Cs.getLastRemoteSnapshotVersion(i).next(h=>n.Cs.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(u)}return O.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.Ui=r,i))}function Pk(t,e,n){let s=ue(),r=ue();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let o=En();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(ce.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):W("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{Wi:o,zi:r}})}function Lk(t,e){const n=oe(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function Mk(t,e){const n=oe(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Cs.getTargetData(s,e).next(i=>i?(r=i,O.resolve(r)):n.Cs.allocateTargetId(s).next(o=>(r=new Es(e,o,0,s.currentSequenceNumber),n.Cs.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.Ui.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ui=n.Ui.insert(s.targetId,s),n.qi.set(e,s.targetId)),s})}async function Nl(t,e,n){const s=oe(t),r=s.Ui.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!Mi(o))throw o;W("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Ui=s.Ui.remove(e),s.qi.delete(r.target)}function dd(t,e,n){const s=oe(t);let r=ce.min(),i=ue();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=oe(a),h=u.qi.get(l);return h!==void 0?O.resolve(u.Ui.get(h)):u.Cs.getTargetData(c,l)}(s,o,wn(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Cs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Li.getDocumentsMatchingQuery(o,e,n?r:ce.min(),n?i:ue())).next(a=>(xk(s,DA(e),a),{documents:a,Hi:i})))}function xk(t,e,n){let s=t.Ki.get(e)||ce.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.Ki.set(e,s)}class pd{constructor(){this.activeTargetIds=Vy()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Uk{constructor(){this.Lr=new pd,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Lr.er(e),this.Ur[e]||"not-current"}updateQueryState(e,n,s){this.Ur[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.Ur[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new pd,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fk{qr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gd{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}qr(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){W("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){W("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $k={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vk{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bk extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,n,s,r,i){const o=this.ho(e,n);W("RestConnection","Sending: ",o,s);const a={};return this.lo(a,r,i),this.fo(e,o,a,s).then(c=>(W("RestConnection","Received: ",c),c),c=>{throw _l("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",s),c})}_o(e,n,s,r,i,o){return this.ao(e,n,s,r,i)}lo(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+br,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}ho(e,n){const s=$k[e];return`${this.oo}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,n,s,r){return new Promise((i,o)=>{const a=new YS;a.setWithCredentials(!0),a.listenOnce(QS.COMPLETE,()=>{var l;try{switch(a.getLastErrorCode()){case Ac.NO_ERROR:const u=a.getResponseJson();W("Connection","XHR received:",JSON.stringify(u)),i(u);break;case Ac.TIMEOUT:W("Connection",'RPC "'+e+'" timed out'),o(new J(D.DEADLINE_EXCEEDED,"Request time out"));break;case Ac.HTTP_ERROR:const h=a.getStatus();if(W("Connection",'RPC "'+e+'" failed with status:',h,"response text:",a.getResponseText()),h>0){let f=a.getResponseJson();Array.isArray(f)&&(f=f[0]);const d=(l=f)===null||l===void 0?void 0:l.error;if(d&&d.status&&d.message){const m=function(E){const C=E.toLowerCase().replace(/_/g,"-");return Object.values(D).indexOf(C)>=0?C:D.UNKNOWN}(d.status);o(new J(m,d.message))}else o(new J(D.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new J(D.UNAVAILABLE,"Connection failed."));break;default:ie()}}finally{W("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(r);a.send(n,"POST",c,s,15)})}wo(e,n,s){const r=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=zS(),o=GS(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new JS({})),this.lo(a.initMessageHeaders,n,s),a.encodeInitMessageHeaders=!0;const c=r.join("");W("Connection","Creating WebChannel: "+c,a);const l=i.createWebChannel(c,a);let u=!1,h=!1;const f=new Vk({Hr:m=>{h?W("Connection","Not sending because WebChannel is closed:",m):(u||(W("Connection","Opening WebChannel transport."),l.open(),u=!0),W("Connection","WebChannel sending:",m),l.send(m))},Jr:()=>l.close()}),d=(m,E,C)=>{m.listen(E,v=>{try{C(v)}catch(p){setTimeout(()=>{throw p},0)}})};return d(l,io.EventType.OPEN,()=>{h||W("Connection","WebChannel transport opened.")}),d(l,io.EventType.CLOSE,()=>{h||(h=!0,W("Connection","WebChannel transport closed"),f.io())}),d(l,io.EventType.ERROR,m=>{h||(h=!0,_l("Connection","WebChannel transport errored:",m),f.io(new J(D.UNAVAILABLE,"The operation could not be completed")))}),d(l,io.EventType.MESSAGE,m=>{var E;if(!h){const C=m.data[0];Ie(!!C);const v=C,p=v.error||((E=v[0])===null||E===void 0?void 0:E.error);if(p){W("Connection","WebChannel received error:",p);const w=p.status;let T=function(M){const R=Me[M];if(R!==void 0)return xy(R)}(w),k=p.message;T===void 0&&(T=D.INTERNAL,k="Unknown error status: "+w+" with message "+p.message),h=!0,f.io(new J(T,k)),l.close()}else W("Connection","WebChannel received:",C),f.ro(C)}}),d(o,XS.STAT_EVENT,m=>{m.stat===zf.PROXY?W("Connection","Detected buffering proxy"):m.stat===zf.NOPROXY&&W("Connection","Detected no buffering proxy")}),setTimeout(()=>{f.so()},0),f}}function Rc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ba(t){return new XA(t,!0)}class Xy{constructor(e,n,s=1e3,r=1.5,i=6e4){this.Hs=e,this.timerId=n,this.mo=s,this.yo=r,this.po=i,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),s=Math.max(0,Date.now()-this.Eo),r=Math.max(0,n-s);r>0&&W("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,r,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jy{constructor(e,n,s,r,i,o,a,c){this.Hs=e,this.vo=s,this.Vo=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new Xy(e,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,n){this.Lo(),this.Uo(),this.xo.cancel(),this.So++,e!==4?this.xo.reset():n&&n.code===D.RESOURCE_EXHAUSTED?(vn(n.toString()),vn("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):n&&n.code===D.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}qo(){}auth(){this.state=1;const e=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.So===n&&this.Go(s,r)},s=>{e(()=>{const r=new J(D.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Qo(r)})})}Go(e,n){const s=this.Ko(this.So);this.stream=this.jo(e,n),this.stream.Yr(()=>{s(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(r=>{s(()=>this.Qo(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(e){return W("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return n=>{this.Hs.enqueueAndForget(()=>this.So===e?n():(W("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class jk extends Jy{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.It=i}jo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.xo.reset();const n=ZA(this.It,e),s=function(r){if(!("targetChange"in r))return ce.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?ce.min():i.readTime?pn(i.readTime):ce.min()}(e);return this.listener.Wo(n,s)}zo(e){const n={};n.database=Rl(this.It),n.addTarget=function(r,i){let o;const a=i.target;return o=Il(a)?{documents:nk(r,a)}:{query:sk(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=Hy(r,i.resumeToken):i.snapshotVersion.compareTo(ce.min())>0&&(o.readTime=Wo(r,i.snapshotVersion.toTimestamp())),o}(this.It,e);const s=ik(this.It,e);s&&(n.labels=s),this.Bo(n)}Ho(e){const n={};n.database=Rl(this.It),n.removeTarget=e,this.Bo(n)}}class Hk extends Jy{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.It=i,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Jo&&this.Xo([])}jo(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(Ie(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const n=tk(e.writeResults,e.commitTime),s=pn(e.commitTime);return this.listener.Zo(s,n)}return Ie(!e.writeResults||e.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=Rl(this.It),this.Bo(e)}Xo(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>ek(this.It,s))};this.Bo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qk extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.It=r,this.nu=!1}su(){if(this.nu)throw new J(D.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,n,s){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.ao(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new J(D.UNKNOWN,r.toString())})}_o(e,n,s,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection._o(e,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new J(D.UNKNOWN,i.toString())})}terminate(){this.nu=!0}}class Kk{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,e==="Online"&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(vn(n),this.ou=!1):W("OnlineStateTracker",n)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wk{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=i,this.mu.qr(o=>{s.enqueueAndForget(async()=>{Ns(this)&&(W("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=oe(a);c._u.add(4),await Fi(c),c.gu.set("Unknown"),c._u.delete(4),await ja(c)}(this))})}),this.gu=new Kk(s,r)}}async function ja(t){if(Ns(t))for(const e of t.wu)await e(!0)}async function Fi(t){for(const e of t.wu)await e(!1)}function Yy(t,e){const n=oe(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),Xu(n)?Qu(n):Cr(n).ko()&&Gu(n,e))}function Zy(t,e){const n=oe(t),s=Cr(n);n.du.delete(e),s.ko()&&ev(n,e),n.du.size===0&&(s.ko()?s.Fo():Ns(n)&&n.gu.set("Unknown"))}function Gu(t,e){t.yu.Mt(e.targetId),Cr(t).zo(e)}function ev(t,e){t.yu.Mt(e),Cr(t).Ho(e)}function Qu(t){t.yu=new zA({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),se:e=>t.du.get(e)||null}),Cr(t).start(),t.gu.uu()}function Xu(t){return Ns(t)&&!Cr(t).No()&&t.du.size>0}function Ns(t){return oe(t)._u.size===0}function tv(t){t.yu=void 0}async function zk(t){t.du.forEach((e,n)=>{Gu(t,e)})}async function Gk(t,e){tv(t),Xu(t)?(t.gu.hu(e),Qu(t)):t.gu.set("Unknown")}async function Qk(t,e,n){if(t.gu.set("Online"),e instanceof jy&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.du.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.du.delete(o),s.yu.removeTarget(o))}(t,e)}catch(s){W("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await zo(t,s)}else if(e instanceof po?t.yu.Gt(e):e instanceof By?t.yu.Yt(e):t.yu.Wt(e),!n.isEqual(ce.min()))try{const s=await Qy(t.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.yu.te(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=r.du.get(c);l&&r.du.set(c,l.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=r.du.get(a);if(!c)return;r.du.set(a,c.withResumeToken(it.EMPTY_BYTE_STRING,c.snapshotVersion)),ev(r,a);const l=new Es(c.target,a,1,c.sequenceNumber);Gu(r,l)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){W("RemoteStore","Failed to raise snapshot:",s),await zo(t,s)}}async function zo(t,e,n){if(!Mi(e))throw e;t._u.add(1),await Fi(t),t.gu.set("Offline"),n||(n=()=>Qy(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{W("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await ja(t)})}function nv(t,e){return e().catch(n=>zo(t,n,e))}async function Ha(t){const e=oe(t),n=Yn(e);let s=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;Xk(e);)try{const r=await Lk(e.localStore,s);if(r===null){e.fu.length===0&&n.Fo();break}s=r.batchId,Jk(e,r)}catch(r){await zo(e,r)}sv(e)&&rv(e)}function Xk(t){return Ns(t)&&t.fu.length<10}function Jk(t,e){t.fu.push(e);const n=Yn(t);n.ko()&&n.Yo&&n.Xo(e.mutations)}function sv(t){return Ns(t)&&!Yn(t).No()&&t.fu.length>0}function rv(t){Yn(t).start()}async function Yk(t){Yn(t).eu()}async function Zk(t){const e=Yn(t);for(const n of t.fu)e.Xo(n.mutations)}async function eR(t,e,n){const s=t.fu.shift(),r=qu.from(s,e,n);await nv(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await Ha(t)}async function tR(t,e){e&&Yn(t).Yo&&await async function(n,s){if(r=s.code,jA(r)&&r!==D.ABORTED){const i=n.fu.shift();Yn(n).Mo(),await nv(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Ha(n)}var r}(t,e),sv(t)&&rv(t)}async function md(t,e){const n=oe(t);n.asyncQueue.verifyOperationInProgress(),W("RemoteStore","RemoteStore received new credentials");const s=Ns(n);n._u.add(3),await Fi(n),s&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await ja(n)}async function nR(t,e){const n=oe(t);e?(n._u.delete(2),await ja(n)):e||(n._u.add(2),await Fi(n),n.gu.set("Unknown"))}function Cr(t){return t.pu||(t.pu=function(e,n,s){const r=oe(e);return r.su(),new jk(n,r.connection,r.authCredentials,r.appCheckCredentials,r.It,s)}(t.datastore,t.asyncQueue,{Yr:zk.bind(null,t),Zr:Gk.bind(null,t),Wo:Qk.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Mo(),Xu(t)?Qu(t):t.gu.set("Unknown")):(await t.pu.stop(),tv(t))})),t.pu}function Yn(t){return t.Iu||(t.Iu=function(e,n,s){const r=oe(e);return r.su(),new Hk(n,r.connection,r.authCredentials,r.appCheckCredentials,r.It,s)}(t.datastore,t.asyncQueue,{Yr:Yk.bind(null,t),Zr:tR.bind(null,t),tu:Zk.bind(null,t),Zo:eR.bind(null,t)}),t.wu.push(async e=>{e?(t.Iu.Mo(),await Ha(t)):(await t.Iu.stop(),t.fu.length>0&&(W("RemoteStore",`Stopping write stream with ${t.fu.length} pending writes`),t.fu=[]))})),t.Iu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ju{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new dn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new Ju(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new J(D.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Yu(t,e){if(vn("AsyncQueue",`${e}: ${t}`),Mi(t))return new J(D.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(e){this.comparator=e?(n,s)=>e(n,s)||Y.comparator(n.key,s.key):(n,s)=>Y.comparator(n.key,s.key),this.keyedMap=Mr(),this.sortedSet=new Ve(this.comparator)}static emptySet(e){return new Qs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Qs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new Qs;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yd{constructor(){this.Tu=new Ve(Y.comparator)}track(e){const n=e.doc.key,s=this.Tu.get(n);s?e.type!==0&&s.type===3?this.Tu=this.Tu.insert(n,e):e.type===3&&s.type!==1?this.Tu=this.Tu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Tu=this.Tu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Tu=this.Tu.remove(n):e.type===1&&s.type===2?this.Tu=this.Tu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):ie():this.Tu=this.Tu.insert(n,e)}Eu(){const e=[];return this.Tu.inorderTraversal((n,s)=>{e.push(s)}),e}}class dr{constructor(e,n,s,r,i,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,s,r,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new dr(e,n,Qs.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ua(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sR{constructor(){this.Au=void 0,this.listeners=[]}}class rR{constructor(){this.queries=new Ir(e=>Sy(e),Ua),this.onlineState="Unknown",this.Ru=new Set}}async function iv(t,e){const n=oe(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new sR),r)try{i.Au=await n.onListen(s)}catch(o){const a=Yu(o,`Initialization of query '${Sl(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.listeners.push(e),e.bu(n.onlineState),i.Au&&e.Pu(i.Au)&&Zu(n)}async function ov(t,e){const n=oe(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function iR(t,e){const n=oe(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Pu(r)&&(s=!0);o.Au=r}}s&&Zu(n)}function oR(t,e,n){const s=oe(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function Zu(t){t.Ru.forEach(e=>{e.next()})}class av{constructor(e,n,s){this.query=e,this.vu=n,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=s||{}}Pu(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new dr(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),n=!0):this.Cu(e,this.onlineState)&&(this.xu(e),n=!0),this.Su=e,n}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let n=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),n=!0),n}Cu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.Nu||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Du(e){if(e.docChanges.length>0)return!0;const n=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}xu(e){e=dr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.vu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cv{constructor(e){this.key=e}}class lv{constructor(e){this.key=e}}class aR{constructor(e,n){this.query=e,this.Uu=n,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=ue(),this.mutatedKeys=ue(),this.Gu=Ay(e),this.Qu=new Qs(this.Gu)}get ju(){return this.Uu}Wu(e,n){const s=n?n.zu:new yd,r=n?n.Qu:this.Qu;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,l=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((u,h)=>{const f=r.get(u),d=Bu(this.query,h)?h:null,m=!!f&&this.mutatedKeys.has(f.key),E=!!d&&(d.hasLocalMutations||this.mutatedKeys.has(d.key)&&d.hasCommittedMutations);let C=!1;f&&d?f.data.isEqual(d.data)?m!==E&&(s.track({type:3,doc:d}),C=!0):this.Hu(f,d)||(s.track({type:2,doc:d}),C=!0,(c&&this.Gu(d,c)>0||l&&this.Gu(d,l)<0)&&(a=!0)):!f&&d?(s.track({type:0,doc:d}),C=!0):f&&!d&&(s.track({type:1,doc:f}),C=!0,(c||l)&&(a=!0)),C&&(d?(o=o.add(d),i=E?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),s.track({type:1,doc:u})}return{Qu:o,zu:s,$i:a,mutatedKeys:i}}Hu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const r=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const i=e.zu.Eu();i.sort((l,u)=>function(h,f){const d=m=>{switch(m){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ie()}};return d(h)-d(f)}(l.type,u.type)||this.Gu(l.doc,u.doc)),this.Ju(s);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,c=a!==this.qu;return this.qu=a,i.length!==0||c?{snapshot:new dr(this.query,e.Qu,r,i,e.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new yd,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.Uu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(n=>this.Uu=this.Uu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Uu=this.Uu.delete(n)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=ue(),this.Qu.forEach(s=>{this.Zu(s.key)&&(this.Ku=this.Ku.add(s.key))});const n=[];return e.forEach(s=>{this.Ku.has(s)||n.push(new lv(s))}),this.Ku.forEach(s=>{e.has(s)||n.push(new cv(s))}),n}tc(e){this.Uu=e.Hi,this.Ku=ue();const n=this.Wu(e.documents);return this.applyChanges(n,!0)}ec(){return dr.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class cR{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class lR{constructor(e){this.key=e,this.nc=!1}}class uR{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new Ir(a=>Sy(a),Ua),this.rc=new Map,this.oc=new Set,this.uc=new Ve(Y.comparator),this.cc=new Map,this.ac=new Ku,this.hc={},this.lc=new Map,this.fc=fr.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function hR(t,e){const n=_R(t);let s,r;const i=n.ic.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.ec();else{const o=await Mk(n.localStore,wn(e));n.isPrimaryClient&&Yy(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await fR(n,e,s,a==="current",o.resumeToken)}return r}async function fR(t,e,n,s,r){t._c=(h,f,d)=>async function(m,E,C,v){let p=E.view.Wu(C);p.$i&&(p=await dd(m.localStore,E.query,!1).then(({documents:k})=>E.view.Wu(k,p)));const w=v&&v.targetChanges.get(E.targetId),T=E.view.applyChanges(p,m.isPrimaryClient,w);return wd(m,E.targetId,T.Xu),T.snapshot}(t,h,f,d);const i=await dd(t.localStore,e,!0),o=new aR(e,i.Hi),a=o.Wu(i.documents),c=Ui.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",r),l=o.applyChanges(a,t.isPrimaryClient,c);wd(t,n,l.Xu);const u=new cR(e,n,o);return t.ic.set(e,u),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),l.snapshot}async function dR(t,e){const n=oe(t),s=n.ic.get(e),r=n.rc.get(s.targetId);if(r.length>1)return n.rc.set(s.targetId,r.filter(i=>!Ua(i,e))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Nl(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Zy(n.remoteStore,s.targetId),Dl(n,s.targetId)}).catch(Li)):(Dl(n,s.targetId),await Nl(n.localStore,s.targetId,!0))}async function pR(t,e,n){const s=bR(t);try{const r=await function(i,o){const a=oe(i),c=Fe.now(),l=o.reduce((f,d)=>f.add(d.key),ue());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",f=>{let d=En(),m=ue();return a.Gi.getEntries(f,l).next(E=>{d=E,d.forEach((C,v)=>{v.isValidDocument()||(m=m.add(C))})}).next(()=>a.localDocuments.getOverlayedDocuments(f,d)).next(E=>{u=E;const C=[];for(const v of o){const p=$A(v,u.get(v.key).overlayedDocument);p!=null&&C.push(new Rs(v.key,p,Iy(p.value.mapValue),Zt.exists(!0)))}return a.mutationQueue.addMutationBatch(f,c,C,o)}).next(E=>{h=E;const C=E.applyToLocalDocumentSet(u,m);return a.documentOverlayCache.saveOverlays(f,E.batchId,C)})}).then(()=>({batchId:h.batchId,changes:Fy(u)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let c=i.hc[i.currentUser.toKey()];c||(c=new Ve(ye)),c=c.insert(o,a),i.hc[i.currentUser.toKey()]=c}(s,r.batchId,n),await $i(s,r.changes),await Ha(s.remoteStore)}catch(r){const i=Yu(r,"Failed to persist write");n.reject(i)}}async function uv(t,e){const n=oe(t);try{const s=await Ok(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.cc.get(i);o&&(Ie(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.nc=!0:r.modifiedDocuments.size>0?Ie(o.nc):r.removedDocuments.size>0&&(Ie(o.nc),o.nc=!1))}),await $i(n,s,e)}catch(s){await Li(s)}}function vd(t,e,n){const s=oe(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.ic.forEach((i,o)=>{const a=o.view.bu(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=oe(i);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.bu(o)&&(c=!0)}),c&&Zu(a)}(s.eventManager,e),r.length&&s.sc.Wo(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function gR(t,e,n){const s=oe(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.cc.get(e),i=r&&r.key;if(i){let o=new Ve(Y.comparator);o=o.insert(i,We.newNoDocument(i,ce.min()));const a=ue().add(i),c=new Va(ce.min(),new Map,new $e(ye),o,a);await uv(s,c),s.uc=s.uc.remove(i),s.cc.delete(e),eh(s)}else await Nl(s.localStore,e,!1).then(()=>Dl(s,e,n)).catch(Li)}async function mR(t,e){const n=oe(t),s=e.batch.batchId;try{const r=await Dk(n.localStore,e);fv(n,s,null),hv(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await $i(n,r)}catch(r){await Li(r)}}async function yR(t,e,n){const s=oe(t);try{const r=await function(i,o){const a=oe(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.mutationQueue.lookupMutationBatch(c,o).next(u=>(Ie(u!==null),l=u.keys(),a.mutationQueue.removeMutationBatch(c,u))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>a.localDocuments.getDocuments(c,l))})}(s.localStore,e);fv(s,e,n),hv(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await $i(s,r)}catch(r){await Li(r)}}function hv(t,e){(t.lc.get(e)||[]).forEach(n=>{n.resolve()}),t.lc.delete(e)}function fv(t,e,n){const s=oe(t);let r=s.hc[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.hc[s.currentUser.toKey()]=r}}function Dl(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.rc.get(e))t.ic.delete(s),n&&t.sc.wc(s,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach(s=>{t.ac.containsKey(s)||dv(t,s)})}function dv(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);n!==null&&(Zy(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),eh(t))}function wd(t,e,n){for(const s of n)s instanceof cv?(t.ac.addReference(s.key,e),vR(t,s)):s instanceof lv?(W("SyncEngine","Document no longer in limbo: "+s.key),t.ac.removeReference(s.key,e),t.ac.containsKey(s.key)||dv(t,s.key)):ie()}function vR(t,e){const n=e.key,s=n.path.canonicalString();t.uc.get(n)||t.oc.has(s)||(W("SyncEngine","New document in limbo: "+n),t.oc.add(s),eh(t))}function eh(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new Y(ke.fromString(e)),s=t.fc.next();t.cc.set(s,new lR(n)),t.uc=t.uc.insert(n,s),Yy(t.remoteStore,new Es(wn(Vu(n.path)),s,2,xu.at))}}async function $i(t,e,n){const s=oe(t),r=[],i=[],o=[];s.ic.isEmpty()||(s.ic.forEach((a,c)=>{o.push(s._c(c,e,n).then(l=>{if((l||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){r.push(l);const u=zu.Ci(c.targetId,l);i.push(u)}}))}),await Promise.all(o),s.sc.Wo(r),await async function(a,c){const l=oe(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>O.forEach(c,h=>O.forEach(h.Si,f=>l.persistence.referenceDelegate.addReference(u,h.targetId,f)).next(()=>O.forEach(h.Di,f=>l.persistence.referenceDelegate.removeReference(u,h.targetId,f)))))}catch(u){if(!Mi(u))throw u;W("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const f=l.Ui.get(h),d=f.snapshotVersion,m=f.withLastLimboFreeSnapshotVersion(d);l.Ui=l.Ui.insert(h,m)}}}(s.localStore,i))}async function wR(t,e){const n=oe(t);if(!n.currentUser.isEqual(e)){W("SyncEngine","User change. New user:",e.toKey());const s=await Gy(n.localStore,e);n.currentUser=e,function(r,i){r.lc.forEach(o=>{o.forEach(a=>{a.reject(new J(D.CANCELLED,i))})}),r.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await $i(n,s.ji)}}function ER(t,e){const n=oe(t),s=n.cc.get(e);if(s&&s.nc)return ue().add(s.key);{let r=ue();const i=n.rc.get(e);if(!i)return r;for(const o of i){const a=n.ic.get(o);r=r.unionWith(a.view.ju)}return r}}function _R(t){const e=oe(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=uv.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=ER.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=gR.bind(null,e),e.sc.Wo=iR.bind(null,e.eventManager),e.sc.wc=oR.bind(null,e.eventManager),e}function bR(t){const e=oe(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=mR.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=yR.bind(null,e),e}class TR{constructor(){this.synchronizeTabs=!1}async initialize(e){this.It=Ba(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,n){return null}Ec(e,n){return null}Ic(e){return Nk(this.persistence,new kk,e.initialUser,this.It)}yc(e){return new Sk(Wu.Bs,this.It)}gc(e){return new Uk}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class IR{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>vd(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=wR.bind(null,this.syncEngine),await nR(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new rR}createDatastore(e){const n=Ba(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new Bk(r));var r;return function(i,o,a,c){return new qk(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>vd(this.syncEngine,a,0),o=gd.C()?new gd:new Fk,new Wk(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(e,n){return function(s,r,i,o,a,c,l){const u=new uR(s,r,i,o,a,c);return l&&(u.dc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=oe(e);W("RemoteStore","RemoteStore shutting down."),n._u.add(5),await Fi(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pv(t,e,n){if(!n)throw new J(D.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function CR(t,e,n,s){if(e===!0&&s===!0)throw new J(D.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Ed(t){if(!Y.isDocumentKey(t))throw new J(D.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function _d(t){if(Y.isDocumentKey(t))throw new J(D.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function th(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ie()}function Zn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new J(D.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=th(t);throw new J(D.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bd=new Map;class Td{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new J(D.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new J(D.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,CR("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qa{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Td({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new J(D.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new J(D.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Td(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new ZS;switch(n.type){case"gapi":const s=n.client;return new sA(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new J(D.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=bd.get(e);n&&(W("ComponentProvider","Removing Datastore"),bd.delete(e),n.terminate())}(this),Promise.resolve()}}function SR(t,e,n,s={}){var r;const i=(t=Zn(t,qa))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==e&&_l("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=Ze.MOCK_USER;else{o=xI(s.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new J(D.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Ze(c)}t._authCredentials=new eA(new wy(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new zn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Nt(this.firestore,e,this._key)}}class Ka{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Ka(this.firestore,e,this._query)}}class zn extends Ka{constructor(e,n,s){super(e,n,Vu(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Nt(this.firestore,null,new Y(e))}withConverter(e){return new zn(this.firestore,e,this._path)}}function S1(t,e,...n){if(t=Kt(t),pv("collection","path",e),t instanceof qa){const s=ke.fromString(e,...n);return _d(s),new zn(t,null,s)}{if(!(t instanceof Nt||t instanceof zn))throw new J(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(ke.fromString(e,...n));return _d(s),new zn(t.firestore,null,s)}}function A1(t,e,...n){if(t=Kt(t),arguments.length===1&&(e=Ey.R()),pv("doc","path",e),t instanceof qa){const s=ke.fromString(e,...n);return Ed(s),new Nt(t,null,new Y(s))}{if(!(t instanceof Nt||t instanceof zn))throw new J(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(ke.fromString(e,...n));return Ed(s),new Nt(t.firestore,t instanceof zn?t.converter:null,new Y(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gv{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):vn("Uncaught Error in snapshot listener:",e.toString())}bc(){this.muted=!0}Rc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AR{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=Ze.UNAUTHENTICATED,this.clientId=Ey.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{W("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(W("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new J(D.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new dn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Yu(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function kR(t,e){t.asyncQueue.verifyOperationInProgress(),W("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await Gy(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function RR(t,e){t.asyncQueue.verifyOperationInProgress();const n=await NR(t);W("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>md(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>md(e.remoteStore,i)),t.onlineComponents=e}async function NR(t){return t.offlineComponents||(W("FirestoreClient","Using default OfflineComponentProvider"),await kR(t,new TR)),t.offlineComponents}async function mv(t){return t.onlineComponents||(W("FirestoreClient","Using default OnlineComponentProvider"),await RR(t,new IR)),t.onlineComponents}function DR(t){return mv(t).then(e=>e.syncEngine)}async function yv(t){const e=await mv(t),n=e.eventManager;return n.onListen=hR.bind(null,e.syncEngine),n.onUnlisten=dR.bind(null,e.syncEngine),n}function OR(t,e,n={}){const s=new dn;return t.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const l=new gv({next:h=>{i.enqueueAndForget(()=>ov(r,u));const f=h.docs.has(o);!f&&h.fromCache?c.reject(new J(D.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&h.fromCache&&a&&a.source==="server"?c.reject(new J(D.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new av(Vu(o.path),l,{includeMetadataChanges:!0,Nu:!0});return iv(r,u)}(await yv(t),t.asyncQueue,e,n,s)),s.promise}function PR(t,e,n={}){const s=new dn;return t.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const l=new gv({next:h=>{i.enqueueAndForget(()=>ov(r,u)),h.fromCache&&a.source==="server"?c.reject(new J(D.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new av(o,l,{includeMetadataChanges:!0,Nu:!0});return iv(r,u)}(await yv(t),t.asyncQueue,e,n,s)),s.promise}class LR{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.Uc=!1,this.qc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new Xy(this,"async_queue_retry"),this.Wc=()=>{const n=Rc();n&&W("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.Po()};const e=Rc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.Uc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.Uc){this.Uc=!0,this.Qc=e||!1;const n=Rc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.Uc)return new Promise(()=>{});const n=new dn;return this.Hc(()=>this.Uc&&this.Qc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(e){if(!Mi(e))throw e;W("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(e){const n=this.Bc.then(()=>(this.Gc=!0,e().catch(s=>{this.Kc=s,this.Gc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw vn("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Gc=!1,s))));return this.Bc=n,n}enqueueAfterDelay(e,n,s){this.zc(),this.jc.indexOf(e)>-1&&(n=0);const r=Ju.createAndSchedule(this,e,n,s,i=>this.Yc(i));return this.qc.push(r),r}zc(){this.Kc&&ie()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const n of this.qc)if(n.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.qc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.qc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const n=this.qc.indexOf(e);this.qc.splice(n,1)}}class Vi extends qa{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=new LR,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||vv(this),this._firestoreClient.terminate()}}function MR(t,e){const n=typeof t=="object"?t:pm(),s=typeof t=="string"?t:e||"(default)",r=du(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=PI("firestore");i&&SR(r,...i)}return r}function nh(t){return t._firestoreClient||vv(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function vv(t){var e;const n=t._freezeSettings(),s=function(r,i,o,a){return new pA(r,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new AR(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new pr(it.fromBase64String(e))}catch(n){throw new J(D.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new pr(it.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sh{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new J(D.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new tt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wv{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rh{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new J(D.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new J(D.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ye(this._lat,e._lat)||ye(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xR=/^__.*__$/;class UR{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new Rs(e,this.data,this.fieldMask,n,this.fieldTransforms):new xi(e,this.data,n,this.fieldTransforms)}}function Ev(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ie()}}class ih{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.It=s,this.ignoreUndefinedProperties=r,i===void 0&&this.na(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new ih(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.It,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.ia({path:s,oa:!1});return r.ua(e),r}ca(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.ia({path:s,oa:!1});return r.na(),r}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return Go(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(e.length===0)throw this.ha("Document fields must not be empty");if(Ev(this.sa)&&xR.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class FR{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.It=s||Ba(e)}da(e,n,s,r=!1){return new ih({sa:e,methodName:n,fa:s,path:tt.emptyPath(),oa:!1,la:r},this.databaseId,this.It,this.ignoreUndefinedProperties)}}function $R(t){const e=t._freezeSettings(),n=Ba(t._databaseId);return new FR(t._databaseId,!!e.ignoreUndefinedProperties,n)}function VR(t,e,n,s,r,i={}){const o=t.da(i.merge||i.mergeFields?2:0,e,n,r);Iv("Data must be an object, but it was:",o,s);const a=bv(s,o);let c,l;if(i.merge)c=new Yt(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const f=BR(e,h,n);if(!o.contains(f))throw new J(D.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);HR(u,f)||u.push(f)}c=new Yt(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new UR(new Mt(a),c,l)}function _v(t,e){if(Tv(t=Kt(t)))return Iv("Unsupported field value:",e,t),bv(t,e);if(t instanceof wv)return function(n,s){if(!Ev(s.sa))throw s.ha(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.ha(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.oa&&e.sa!==4)throw e.ha("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=_v(o,s.aa(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(t,e)}return function(n,s){if((n=Kt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return PA(s.It,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=Fe.fromDate(n);return{timestampValue:Wo(s.It,r)}}if(n instanceof Fe){const r=new Fe(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Wo(s.It,r)}}if(n instanceof rh)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof pr)return{bytesValue:Hy(s.It,n._byteString)};if(n instanceof Nt){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s.ha(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:Hu(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.ha(`Unsupported field value: ${th(n)}`)}(t,e)}function bv(t,e){const n={};return _y(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Tr(t,(s,r)=>{const i=_v(r,e.ra(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function Tv(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Fe||t instanceof rh||t instanceof pr||t instanceof Nt||t instanceof wv)}function Iv(t,e,n){if(!Tv(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=th(n);throw s==="an object"?e.ha(t+" a custom object"):e.ha(t+" "+s)}}function BR(t,e,n){if((e=Kt(e))instanceof sh)return e._internalPath;if(typeof e=="string")return Cv(t,e);throw Go("Field path arguments must be of type string or ",t,!1,void 0,n)}const jR=new RegExp("[~\\*/\\[\\]]");function Cv(t,e,n){if(e.search(jR)>=0)throw Go(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new sh(...e.split("."))._internalPath}catch{throw Go(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Go(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new J(D.INVALID_ARGUMENT,a+t+c)}function HR(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sv{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Nt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new qR(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Av("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class qR extends Sv{data(){return super.data()}}function Av(t,e){return typeof e=="string"?Cv(t,e):e instanceof sh?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KR(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new J(D.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}function k1(t,...e){for(const n of e)t=n._apply(t);return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WR{convertValue(e,n="none"){switch(Cs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return xe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ur(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw ie()}}convertObject(e,n){const s={};return Tr(e.fields,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new rh(xe(e.latitude),xe(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=Ty(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(ui(e));default:return null}}convertTimestamp(e){const n=Jn(e);return new Fe(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=ke.fromString(e);Ie(zy(s));const r=new hi(s.get(1),s.get(3)),i=new Y(s.popFirst(5));return r.isEqual(n)||vn(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zR(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class kv extends Sv{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new go(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(Av("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class go extends kv{data(e={}){return super.data(e)}}class GR{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new xr(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new go(this._firestore,this._userDataWriter,s.key,s,new xr(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new J(D.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>{const a=new go(s._firestore,s._userDataWriter,o.doc.key,o.doc,new xr(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new go(s._firestore,s._userDataWriter,o.doc.key,o.doc,new xr(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,l=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),l=i.indexOf(o.doc.key)),{type:QR(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function QR(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ie()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R1(t){t=Zn(t,Nt);const e=Zn(t.firestore,Vi);return OR(nh(e),t._key).then(n=>XR(e,t,n))}class Rv extends WR{constructor(e){super(),this.firestore=e}convertBytes(e){return new pr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Nt(this.firestore,null,n)}}function N1(t){t=Zn(t,Ka);const e=Zn(t.firestore,Vi),n=nh(e),s=new Rv(e);return KR(t._query),PR(n,t._query).then(r=>new GR(e,s,t,r))}function D1(t,e,n){t=Zn(t,Nt);const s=Zn(t.firestore,Vi),r=zR(t.converter,e,n);return Nv(s,[VR($R(s),"setDoc",t._key,r,t.converter!==null,n).toMutation(t._key,Zt.none())])}function O1(t){return Nv(Zn(t.firestore,Vi),[new ju(t._key,Zt.none())])}function Nv(t,e){return function(n,s){const r=new dn;return n.asyncQueue.enqueueAndForget(async()=>pR(await DR(n),s,r)),r.promise}(nh(t),e)}function XR(t,e,n){const s=n.docs.get(e._key),r=new Rv(t);return new kv(t,r,e._key,s,new xr(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){br=n})(Ii),ar(new bs("firestore",(n,{instanceIdentifier:s,options:r})=>{const i=n.getProvider("app").getImmediate(),o=new Vi(new tA(n.getProvider("auth-internal")),new iA(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new J(D.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new hi(a.options.projectId,c)}(i,s),i);return r=Object.assign({useFetchStreams:e},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),Wn(Gf,"3.7.3",t),Wn(Gf,"3.7.3","esm2017")})();function oh(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function Dv(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const JR=Dv,Ov=new bi("auth","Firebase",Dv());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Id=new hu("@firebase/auth");function mo(t,...e){Id.logLevel<=me.ERROR&&Id.error(`Auth (${Ii}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _n(t,...e){throw ah(t,...e)}function en(t,...e){return ah(t,...e)}function YR(t,e,n){const s=Object.assign(Object.assign({},JR()),{[e]:n});return new bi("auth","Firebase",s).create(e,{appName:t.name})}function ah(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Ov.create(t,...e)}function ee(t,e,...n){if(!t)throw ah(e,...n)}function ln(t){const e="INTERNAL ASSERTION FAILED: "+t;throw mo(e),new Error(e)}function bn(t,e){t||ln(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cd=new Map;function un(t){bn(t instanceof Function,"Expected a class definition");let e=Cd.get(t);return e?(bn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Cd.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZR(t,e){const n=du(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(Oo(i,e!=null?e:{}))return r;_n(r,"already-initialized")}return n.initialize({options:e})}function eN(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(un);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ol(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function tN(){return Sd()==="http:"||Sd()==="https:"}function Sd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nN(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(tN()||II()||"connection"in navigator)?navigator.onLine:!0}function sN(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(e,n){this.shortDelay=e,this.longDelay=n,bn(n>e,"Short delay should be less than long delay!"),this.isMobile=TI()||CI()}get(){return nN()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ch(t,e){bn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pv{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;ln("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;ln("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;ln("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rN={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iN=new Bi(3e4,6e4);function oN(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Wa(t,e,n,s,r={}){return Lv(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=Ti(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Pv.fetch()(Mv(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function Lv(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},rN),e);try{const r=new cN(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw co(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw co(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw co(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw co(t,"user-disabled",o);const u=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw YR(t,u,l);_n(t,u)}}catch(r){if(r instanceof Sn)throw r;_n(t,"network-request-failed")}}async function aN(t,e,n,s,r={}){const i=await Wa(t,e,n,s,r);return"mfaPendingCredential"in i&&_n(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Mv(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?ch(t.config,r):`${t.config.apiScheme}://${r}`}class cN{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(en(this.auth,"network-request-failed")),iN.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function co(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=en(t,e,s);return r.customData._tokenResponse=n,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lN(t,e){return Wa(t,"POST","/v1/accounts:delete",e)}async function uN(t,e){return Wa(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xr(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function hN(t,e=!1){const n=Kt(t),s=await n.getIdToken(e),r=lh(s);ee(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:Xr(Nc(r.auth_time)),issuedAtTime:Xr(Nc(r.iat)),expirationTime:Xr(Nc(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Nc(t){return Number(t)*1e3}function lh(t){var e;const[n,s,r]=t.split(".");if(n===void 0||s===void 0||r===void 0)return mo("JWT malformed, contained fewer than 3 sections"),null;try{const i=cm(s);return i?JSON.parse(i):(mo("Failed to decode base64 JWT payload"),null)}catch(i){return mo("Caught error parsing JWT payload as JSON",(e=i)===null||e===void 0?void 0:e.toString()),null}}function fN(t){const e=lh(t);return ee(e,"internal-error"),ee(typeof e.exp<"u","internal-error"),ee(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mi(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Sn&&dN(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function dN({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pN{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xv{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Xr(this.lastLoginAt),this.creationTime=Xr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qo(t){var e;const n=t.auth,s=await t.getIdToken(),r=await mi(t,uN(n,{idToken:s}));ee(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?yN(i.providerUserInfo):[],a=mN(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new xv(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function gN(t){const e=Kt(t);await Qo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function mN(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function yN(t){return t.map(e=>{var{providerId:n}=e,s=oh(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vN(t,e){const n=await Lv(t,{},async()=>{const s=Ti({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=Mv(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Pv.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ee(e.idToken,"internal-error"),ee(typeof e.idToken<"u","internal-error"),ee(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):fN(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return ee(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await vN(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new yi;return s&&(ee(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(ee(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(ee(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new yi,this.toJSON())}_performRefresh(){return ln("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function On(t,e){ee(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class _s{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=oh(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new pN(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new xv(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await mi(this,this.stsTokenManager.getToken(this.auth,e));return ee(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return hN(this,e)}reload(){return gN(this)}_assign(e){this!==e&&(ee(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new _s(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){ee(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Qo(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await mi(this,lN(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,c,l,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,f=(r=n.email)!==null&&r!==void 0?r:void 0,d=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,E=(a=n.tenantId)!==null&&a!==void 0?a:void 0,C=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,v=(l=n.createdAt)!==null&&l!==void 0?l:void 0,p=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:w,emailVerified:T,isAnonymous:k,providerData:M,stsTokenManager:R}=n;ee(w&&R,e,"internal-error");const b=yi.fromJSON(this.name,R);ee(typeof w=="string",e,"internal-error"),On(h,e.name),On(f,e.name),ee(typeof T=="boolean",e,"internal-error"),ee(typeof k=="boolean",e,"internal-error"),On(d,e.name),On(m,e.name),On(E,e.name),On(C,e.name),On(v,e.name),On(p,e.name);const U=new _s({uid:w,auth:e,email:f,emailVerified:T,displayName:h,isAnonymous:k,photoURL:m,phoneNumber:d,tenantId:E,stsTokenManager:b,createdAt:v,lastLoginAt:p});return M&&Array.isArray(M)&&(U.providerData=M.map(B=>Object.assign({},B))),C&&(U._redirectEventId=C),U}static async _fromIdTokenResponse(e,n,s=!1){const r=new yi;r.updateFromServerResponse(n);const i=new _s({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await Qo(i),i}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Uv.type="NONE";const Ad=Uv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yo(t,e,n){return`firebase:${t}:${e}:${n}`}class Xs{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=yo(this.userKey,r.apiKey,i),this.fullPersistenceKey=yo("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?_s._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Xs(un(Ad),e,s);const r=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=r[0]||un(Ad);const o=yo(s,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=_s._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=r.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Xs(i,e,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new Xs(i,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kd(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Vv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Fv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(jv(e))return"Blackberry";if(Hv(e))return"Webos";if(uh(e))return"Safari";if((e.includes("chrome/")||$v(e))&&!e.includes("edge/"))return"Chrome";if(Bv(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Fv(t=rt()){return/firefox\//i.test(t)}function uh(t=rt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function $v(t=rt()){return/crios\//i.test(t)}function Vv(t=rt()){return/iemobile/i.test(t)}function Bv(t=rt()){return/android/i.test(t)}function jv(t=rt()){return/blackberry/i.test(t)}function Hv(t=rt()){return/webos/i.test(t)}function za(t=rt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function wN(t=rt()){var e;return za(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function EN(){return SI()&&document.documentMode===10}function qv(t=rt()){return za(t)||Bv(t)||Hv(t)||jv(t)||/windows phone/i.test(t)||Vv(t)}function _N(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kv(t,e=[]){let n;switch(t){case"Browser":n=kd(rt());break;case"Worker":n=`${kd(rt())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ii}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bN{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const s=[];try{for(const r of this.queue)await r(e),r.onAbort&&s.push(r.onAbort)}catch(r){s.reverse();for(const i of s)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=r)===null||n===void 0?void 0:n.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TN{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Rd(this),this.idTokenSubscription=new Rd(this),this.beforeStateQueue=new bN(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ov,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=un(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await Xs.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c==null?void 0:c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return ee(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await Qo(e)}catch(s){if(((n=s)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=sN()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Kt(e):null;return n&&ee(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ee(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(un(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new bi("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&un(e)||this._popupRedirectResolver;ee(n,this,"argument-error"),this.redirectPersistenceManager=await Xs.create(this,[un(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return ee(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,s,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ee(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Kv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function hh(t){return Kt(t)}class Rd{constructor(e){this.auth=e,this.observer=null,this.addObserver=BI(n=>this.observer=n)}get next(){return ee(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function IN(t,e,n){const s=hh(t);ee(s._canInitEmulator,s,"emulator-config-failed"),ee(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!!(n!=null&&n.disableWarnings),i=Wv(e),{host:o,port:a}=CN(e),c=a===null?"":`:${a}`;s.config.emulator={url:`${i}//${o}${c}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||SN()}function Wv(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function CN(t){const e=Wv(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:Nd(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:Nd(o)}}}function Nd(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function SN(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zv{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ln("not implemented")}_getIdTokenResponse(e){return ln("not implemented")}_linkToIdToken(e,n){return ln("not implemented")}_getReauthenticationResolver(e){return ln("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Js(t,e){return aN(t,"POST","/v1/accounts:signInWithIdp",oN(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AN="http://localhost";class Ss extends zv{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ss(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):_n("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=oh(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new Ss(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Js(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Js(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Js(e,n)}buildRequest(){const e={requestUri:AN,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ti(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gv{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji extends Gv{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un extends ji{constructor(){super("facebook.com")}static credential(e){return Ss._fromParams({providerId:Un.PROVIDER_ID,signInMethod:Un.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Un.credentialFromTaggedObject(e)}static credentialFromError(e){return Un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Un.credential(e.oauthAccessToken)}catch{return null}}}Un.FACEBOOK_SIGN_IN_METHOD="facebook.com";Un.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn extends ji{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ss._fromParams({providerId:Fn.PROVIDER_ID,signInMethod:Fn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Fn.credentialFromTaggedObject(e)}static credentialFromError(e){return Fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Fn.credential(n,s)}catch{return null}}}Fn.GOOGLE_SIGN_IN_METHOD="google.com";Fn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n extends ji{constructor(){super("github.com")}static credential(e){return Ss._fromParams({providerId:$n.PROVIDER_ID,signInMethod:$n.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return $n.credentialFromTaggedObject(e)}static credentialFromError(e){return $n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return $n.credential(e.oauthAccessToken)}catch{return null}}}$n.GITHUB_SIGN_IN_METHOD="github.com";$n.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn extends ji{constructor(){super("twitter.com")}static credential(e,n){return Ss._fromParams({providerId:Vn.PROVIDER_ID,signInMethod:Vn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Vn.credentialFromTaggedObject(e)}static credentialFromError(e){return Vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Vn.credential(n,s)}catch{return null}}}Vn.TWITTER_SIGN_IN_METHOD="twitter.com";Vn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await _s._fromIdTokenResponse(e,s,r),o=Dd(s);return new gr({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=Dd(s);return new gr({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function Dd(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo extends Sn{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,Xo.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new Xo(e,n,s,r)}}function Qv(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Xo._fromErrorAndOperation(t,i,e,s):i})}async function kN(t,e,n=!1){const s=await mi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return gr._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RN(t,e,n=!1){var s;const{auth:r}=t,i="reauthenticate";try{const o=await mi(t,Qv(r,i,e,t),n);ee(o.idToken,r,"internal-error");const a=lh(o.idToken);ee(a,r,"internal-error");const{sub:c}=a;return ee(t.uid===c,r,"user-mismatch"),gr._forOperation(t,i,o)}catch(o){throw((s=o)===null||s===void 0?void 0:s.code)==="auth/user-not-found"&&_n(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NN(t,e,n=!1){const s="signIn",r=await Qv(t,s,e),i=await gr._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}function DN(t,e,n,s){return Kt(t).onIdTokenChanged(e,n,s)}function ON(t,e,n){return Kt(t).beforeAuthStateChanged(e,n)}const Jo="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xv{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Jo,"1"),this.storage.removeItem(Jo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PN(){const t=rt();return uh(t)||za(t)}const LN=1e3,MN=10;class Jv extends Xv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=PN()&&_N(),this.fallbackToPolling=qv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);EN()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,MN):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},LN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Jv.type="LOCAL";const xN=Jv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yv extends Xv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Yv.type="SESSION";const Zv=Yv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UN(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new Ga(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await UN(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ga.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fh(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FN{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=fh("",20);r.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(h){const f=h;if(f.data.eventId===l)switch(f.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(f.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tn(){return window}function $N(t){tn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ew(){return typeof tn().WorkerGlobalScope<"u"&&typeof tn().importScripts=="function"}async function VN(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function BN(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function jN(){return ew()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tw="firebaseLocalStorageDb",HN=1,Yo="firebaseLocalStorage",nw="fbase_key";class Hi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Qa(t,e){return t.transaction([Yo],e?"readwrite":"readonly").objectStore(Yo)}function qN(){const t=indexedDB.deleteDatabase(tw);return new Hi(t).toPromise()}function Pl(){const t=indexedDB.open(tw,HN);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Yo,{keyPath:nw})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Yo)?e(s):(s.close(),await qN(),e(await Pl()))})})}async function Od(t,e,n){const s=Qa(t,!0).put({[nw]:e,value:n});return new Hi(s).toPromise()}async function KN(t,e){const n=Qa(t,!1).get(e),s=await new Hi(n).toPromise();return s===void 0?null:s.value}function Pd(t,e){const n=Qa(t,!0).delete(e);return new Hi(n).toPromise()}const WN=800,zN=3;class sw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Pl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>zN)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ew()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ga._getInstance(jN()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await VN(),!this.activeServiceWorker)return;this.sender=new FN(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);!s||((e=s[0])===null||e===void 0?void 0:e.fulfilled)&&((n=s[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||BN()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Pl();return await Od(e,Jo,"1"),await Pd(e,Jo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Od(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>KN(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Pd(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=Qa(r,!1).getAll();return new Hi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),WN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}sw.type="LOCAL";const GN=sw;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QN(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function XN(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=en("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",QN().appendChild(s)})}function JN(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Bi(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YN(t,e){return e?un(e):(ee(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dh extends zv{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Js(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Js(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Js(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function ZN(t){return NN(t.auth,new dh(t),t.bypassAuthState)}function eD(t){const{auth:e,user:n}=t;return ee(n,e,"internal-error"),RN(n,new dh(t),t.bypassAuthState)}async function tD(t){const{auth:e,user:n}=t;return ee(n,e,"internal-error"),kN(n,new dh(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rw{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ZN;case"linkViaPopup":case"linkViaRedirect":return tD;case"reauthViaPopup":case"reauthViaRedirect":return eD;default:_n(this.auth,"internal-error")}}resolve(e){bn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){bn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nD=new Bi(2e3,1e4);class Vs extends rw{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,Vs.currentPopupAction&&Vs.currentPopupAction.cancel(),Vs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ee(e,this.auth,"internal-error"),e}async onExecution(){bn(this.filter.length===1,"Popup operations only handle one event");const e=fh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(en(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(en(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Vs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(en(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,nD.get())};e()}}Vs.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sD="pendingRedirect",vo=new Map;class rD extends rw{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=vo.get(this.auth._key());if(!e){try{const s=await iD(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}vo.set(this.auth._key(),e)}return this.bypassAuthState||vo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function iD(t,e){const n=cD(e),s=aD(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function oD(t,e){vo.set(t._key(),e)}function aD(t){return un(t._redirectPersistence)}function cD(t){return yo(sD,t.config.apiKey,t.name)}async function lD(t,e,n=!1){const s=hh(t),r=YN(s,e),o=await new rD(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uD=10*60*1e3;class hD{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!fD(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!iw(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(en(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=uD&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ld(e))}saveEventToCache(e){this.cachedEventUids.add(Ld(e)),this.lastProcessedEventTime=Date.now()}}function Ld(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function iw({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function fD(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return iw(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dD(t,e={}){return Wa(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pD=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,gD=/^https?/;async function mD(t){if(t.config.emulator)return;const{authorizedDomains:e}=await dD(t);for(const n of e)try{if(yD(n))return}catch{}_n(t,"unauthorized-domain")}function yD(t){const e=Ol(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!gD.test(n))return!1;if(pD.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vD=new Bi(3e4,6e4);function Md(){const t=tn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function wD(t){return new Promise((e,n)=>{var s,r,i;function o(){Md(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Md(),n(en(t,"network-request-failed"))},timeout:vD.get()})}if(!((r=(s=tn().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=tn().gapi)===null||i===void 0)&&i.load)o();else{const a=JN("iframefcb");return tn()[a]=()=>{gapi.load?o():n(en(t,"network-request-failed"))},XN(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw wo=null,e})}let wo=null;function ED(t){return wo=wo||wD(t),wo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _D=new Bi(5e3,15e3),bD="__/auth/iframe",TD="emulator/auth/iframe",ID={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},CD=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function SD(t){const e=t.config;ee(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ch(e,TD):`https://${t.config.authDomain}/${bD}`,s={apiKey:e.apiKey,appName:t.name,v:Ii},r=CD.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${Ti(s).slice(1)}`}async function AD(t){const e=await ED(t),n=tn().gapi;return ee(n,t,"internal-error"),e.open({where:document.body,url:SD(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ID,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=en(t,"network-request-failed"),a=tn().setTimeout(()=>{i(o)},_D.get());function c(){tn().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kD={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},RD=500,ND=600,DD="_blank",OD="http://localhost";class xd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function PD(t,e,n,s=RD,r=ND){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},kD),{width:s.toString(),height:r.toString(),top:i,left:o}),l=rt().toLowerCase();n&&(a=$v(l)?DD:n),Fv(l)&&(e=e||OD,c.scrollbars="yes");const u=Object.entries(c).reduce((f,[d,m])=>`${f}${d}=${m},`,"");if(wN(l)&&a!=="_self")return LD(e||"",a),new xd(null);const h=window.open(e||"",a,u);ee(h,t,"popup-blocked");try{h.focus()}catch{}return new xd(h)}function LD(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MD="__/auth/handler",xD="emulator/auth/handler";function Ud(t,e,n,s,r,i){ee(t.config.authDomain,t,"auth-domain-config-required"),ee(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Ii,eventId:r};if(e instanceof Gv){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",VI(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(i||{}))o[c]=l}if(e instanceof ji){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${UD(t)}?${Ti(a).slice(1)}`}function UD({config:t}){return t.emulator?ch(t,xD):`https://${t.authDomain}/${MD}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dc="webStorageSupport";class FD{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Zv,this._completeRedirectFn=lD,this._overrideRedirectResult=oD}async _openPopup(e,n,s,r){var i;bn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=Ud(e,n,s,Ol(),r);return PD(e,o,fh())}async _openRedirect(e,n,s,r){return await this._originValidation(e),$N(Ud(e,n,s,Ol(),r)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(bn(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await AD(e),s=new hD(e);return n.register("authEvent",r=>(ee(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Dc,{type:Dc},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[Dc];o!==void 0&&n(!!o),_n(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=mD(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return qv()||uh()||za()}}const $D=FD;var Fd="@firebase/auth",$d="0.20.11";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VD{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{var r;e(((r=s)===null||r===void 0?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ee(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BD(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function jD(t){ar(new bs("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=s.options;return((a,c)=>{ee(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),ee(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Kv(t)},u=new TN(a,c,l);return eN(u,n),u})(s,r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),ar(new bs("auth-internal",e=>{const n=hh(e.getProvider("auth").getImmediate());return(s=>new VD(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Wn(Fd,$d,BD(t)),Wn(Fd,$d,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HD=5*60,qD=um("authIdTokenMaxAge")||HD;let Vd=null;const KD=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>qD)return;const r=n==null?void 0:n.token;Vd!==r&&(Vd=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function WD(t=pm()){const e=du(t,"auth");if(e.isInitialized())return e.getImmediate();const n=ZR(t,{popupRedirectResolver:$D,persistence:[GN,xN,Zv]}),s=um("authTokenSyncURL");if(s){const i=KD(s);ON(n,i,()=>i(n.currentUser)),DN(n,o=>i(o))}const r=lm("auth");return r&&IN(n,`http://${r}`),n}jD("Browser");const zD=es(t=>{const n={apiKey:su().public.apiBase,projectId:"feedcap"},s=dm(n),r=MR(s),i=WD();t.provide("firestore",r),t.provide("auth",i)}),GD=es(()=>{Lg("notAuth",()=>{const t=JSON.parse(localStorage.getItem("isLogged")),e=JSON.parse(localStorage.getItem("selectedProfile"));if(t&&e)return ru("/messages")})}),QD=[o0,tT,hI,vI,wI,EI,zD,GD],XD=(t,e)=>e.path.replace(/(:\w+)\([^)]+\)/g,"$1").replace(/(:\w+)[?+*]/g,"$1").replace(/:\w+/g,n=>{var s;return((s=t.params[n.slice(1)])==null?void 0:s.toString())||""}),JD=(t,e)=>{var r;const n=e.route.matched.find(i=>{var o;return((o=i.components)==null?void 0:o.default)===e.Component.type}),s=(r=t!=null?t:n==null?void 0:n.meta.key)!=null?r:n&&XD(e.route,n);return typeof s=="function"?s(e.route):s},YD=(t,e)=>({default:()=>t?Rt(wE,t===!0?{}:t,e):e}),ZD=Tn({setup(t,{slots:e}){return()=>{var n;return(n=e.default)==null?void 0:n.call(e)}}}),Ll=(t,e,n)=>({default:()=>e?Rt(t,e===!0?{}:e,n):Rt(ZD,{},n)}),e1=Tn({name:"NuxtPage",inheritAttrs:!1,props:{name:{type:String},transition:{type:[Boolean,Object],default:void 0},keepalive:{type:[Boolean,Object],default:void 0},route:{type:Object},pageKey:{type:[Function,String],default:null}},setup(t,{attrs:e}){const n=Xe();return()=>Rt(tm,{name:t.name,route:t.route,...e},{default:s=>{var c,l,u,h;if(!s.Component)return;const r=JD(t.pageKey,s),i=n.deferHydration(),o=!!((l=(c=t.transition)!=null?c:s.route.meta.pageTransition)!=null?l:Zc),a=o&&n1([t.transition,s.route.meta.pageTransition,Zc,{onAfterLeave:()=>{n.callHook("page:transition:finish",s.Component)}}].filter(Boolean));return Ll(da,o&&a,YD((h=(u=t.keepalive)!=null?u:s.route.meta.keepalive)!=null?h:Z0,Rt(Kp,{onPending:()=>n.callHook("page:start",s.Component),onResolve:()=>{As(()=>n.callHook("page:finish",s.Component).finally(i))}},{default:()=>Rt(s1,{key:r,routeProps:s,pageKey:r,hasTransition:o})}))).default()}})}});function t1(t){return Array.isArray(t)?t:t?[t]:[]}function n1(t){const e=t.map(n=>({...n,onAfterLeave:t1(n.onAfterLeave)}));return s0(...e)}const s1=Tn({props:["routeProps","pageKey","hasTransition"],setup(t){const e=t.pageKey,n=t.routeProps.route,s={};for(const r in t.routeProps.route)s[r]=je(()=>e===t.pageKey?t.routeProps.route[r]:n[r]);return Ws("_route",Ht(s)),()=>Rt(t.routeProps.Component)}}),ow={default:()=>Ye(()=>import("./default.daeee784.js"),["./default.daeee784.js","./message_blue.1f39f60f.js","./mainStore.bf01849b.js","./default.e7cbd0e2.css"],import.meta.url).then(t=>t.default||t)},r1=Tn({props:{name:String},async setup(t,e){const n=await ow[t.name]().then(s=>s.default||s);return()=>Rt(n,{},e.slots)}}),i1=Tn({props:{name:{type:[String,Boolean,Object],default:null}},setup(t,e){const n=pt("_route"),s=n===Pg()?rI():n,r=je(()=>{var i,o;return(o=(i=ft(t.name))!=null?i:s.meta.layout)!=null?o:"default"});return()=>{var a;const i=r.value&&r.value in ow,o=(a=s.meta.layoutTransition)!=null?a:Y0;return Ll(da,i&&o,{default:()=>Ll(r1,i&&{key:r.value,name:r.value,hasTransition:void 0},e.slots).default()}).default()}}}),o1=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n},a1={};function c1(t,e){const n=e1,s=i1;return vs(),zs(s,null,{default:Ql(()=>[De(n)]),_:1})}const l1=o1(a1,[["render",c1]]),Bd={__name:"nuxt-root",setup(t){const e=yE(()=>Ye(()=>import("./error-component.101bbf3a.js"),[],import.meta.url).then(i=>i.default||i)),n=Xe(),s=n.deferHydration();Ws("_route",Pg()),n.hooks.callHookWith(i=>i.map(o=>o()),"vue:setup");const r=ya();return Zp((i,o,a)=>{n.hooks.callHook("vue:error",i,o,a).catch(c=>console.error("[nuxt] Error in `vue:error` hook",c)),Bb(i)&&(i.fatal||i.unhandled)&&Ln(n,Or,[i])}),(i,o)=>(vs(),zs(Kp,{onResolve:ft(s)},{default:Ql(()=>[ft(r)?(vs(),zs(ft(e),{key:0,error:ft(r)},null,8,["error"])):(vs(),zs(ft(l1),{key:1}))]),_:1},8,["onResolve"]))}};globalThis.$fetch||(globalThis.$fetch=bb.create({baseURL:Ib()}));let jd;const u1=Fb(QD);jd=async function(){var r;const n=Boolean((r=window.__NUXT__)==null?void 0:r.serverRendered)?P_(Bd):O_(Bd),s=Mb({vueApp:n});try{await Ub(s,u1)}catch(i){await s.callHook("app:error",i),s.payload.error=s.payload.error||i}try{await s.hooks.callHook("app:created",n),await s.hooks.callHook("app:beforeMount",n),n.mount("#"+eT),await s.hooks.callHook("app:mounted",n),await As()}catch(i){await s.callHook("app:error",i),s.payload.error=s.payload.error||i}},jd().catch(t=>{console.error("Error while mounting app:",t)});export{S1 as A,N1 as B,ru as C,I1 as D,De as E,Ql as F,T1 as G,gg as H,_1 as I,ht as J,m1 as K,y1 as L,k1 as M,je as N,C1 as O,Ye as _,Tn as a,Pg as b,zs as c,yE as d,v1 as e,pg as f,XE as g,E1 as h,Re as i,ea as j,w1 as k,p1 as l,o1 as m,h1 as n,vs as o,d1 as p,Xe as q,fn as r,A1 as s,f1 as t,ft as u,b1 as v,g1 as w,R1 as x,D1 as y,O1 as z};
