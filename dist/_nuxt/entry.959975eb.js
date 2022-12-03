function Dl(t,e){const n=Object.create(null),s=t.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}function Yo(t){if(Z(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=Pe(s)?Pv(s):Yo(s);if(r)for(const i in r)e[i]=r[i]}return e}else{if(Pe(t))return t;if(Ce(t))return t}}const Nv=/;(?![^(]*\))/g,Dv=/:([^]+)/,Ov=/\/\*.*?\*\//gs;function Pv(t){const e={};return t.replace(Ov,"").split(Nv).forEach(n=>{if(n){const s=n.split(Dv);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Jo(t){let e="";if(Pe(t))e=t;else if(Z(t))for(let n=0;n<t.length;n++){const s=Jo(t[n]);s&&(e+=s+" ")}else if(Ce(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function T1(t){if(!t)return null;let{class:e,style:n}=t;return e&&!Pe(e)&&(t.class=Jo(e)),n&&(t.style=Yo(n)),t}const xv="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Lv=Dl(xv);function Wd(t){return!!t||t===""}const I1=t=>Pe(t)?t:t==null?"":Z(t)||Ce(t)&&(t.toString===Qd||!te(t.toString))?JSON.stringify(t,zd,2):String(t),zd=(t,e)=>e&&e.__v_isRef?zd(t,e.value):Ds(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:Gd(e)?{[`Set(${e.size})`]:[...e.values()]}:Ce(e)&&!Z(e)&&!Xd(e)?String(e):e,Se={},Ns=[],Nt=()=>{},Mv=()=>!1,Uv=/^on[^a-z]/,oi=t=>Uv.test(t),Ol=t=>t.startsWith("onUpdate:"),Ye=Object.assign,Pl=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Fv=Object.prototype.hasOwnProperty,pe=(t,e)=>Fv.call(t,e),Z=Array.isArray,Ds=t=>Zo(t)==="[object Map]",Gd=t=>Zo(t)==="[object Set]",te=t=>typeof t=="function",Pe=t=>typeof t=="string",xl=t=>typeof t=="symbol",Ce=t=>t!==null&&typeof t=="object",Ll=t=>Ce(t)&&te(t.then)&&te(t.catch),Qd=Object.prototype.toString,Zo=t=>Qd.call(t),Bv=t=>Zo(t).slice(8,-1),Xd=t=>Zo(t)==="[object Object]",Ml=t=>Pe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Sr=Dl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ea=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},$v=/-(\w)/g,qt=ea(t=>t.replace($v,(e,n)=>n?n.toUpperCase():"")),Vv=/\B([A-Z])/g,rr=ea(t=>t.replace(Vv,"-$1").toLowerCase()),ta=ea(t=>t.charAt(0).toUpperCase()+t.slice(1)),Wa=ea(t=>t?`on${ta(t)}`:""),Br=(t,e)=>!Object.is(t,e),Os=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},vo=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Vs=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let ph;const jv=()=>ph||(ph=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Lt;class Yd{constructor(e=!1){this.detached=e,this.active=!0,this.effects=[],this.cleanups=[],this.parent=Lt,!e&&Lt&&(this.index=(Lt.scopes||(Lt.scopes=[])).push(this)-1)}run(e){if(this.active){const n=Lt;try{return Lt=this,e()}finally{Lt=n}}}on(){Lt=this}off(){Lt=this.parent}stop(e){if(this.active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this.active=!1}}}function Jd(t){return new Yd(t)}function Hv(t,e=Lt){e&&e.active&&e.effects.push(t)}const Ul=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Zd=t=>(t.w&Un)>0,ep=t=>(t.n&Un)>0,qv=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Un},Kv=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const r=e[s];Zd(r)&&!ep(r)?r.delete(t):e[n++]=r,r.w&=~Un,r.n&=~Un}e.length=n}},Rc=new WeakMap;let vr=0,Un=1;const Nc=30;let Rt;const rs=Symbol(""),Dc=Symbol("");class Fl{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Hv(this,s)}run(){if(!this.active)return this.fn();let e=Rt,n=Nn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Rt,Rt=this,Nn=!0,Un=1<<++vr,vr<=Nc?qv(this):gh(this),this.fn()}finally{vr<=Nc&&Kv(this),Un=1<<--vr,Rt=this.parent,Nn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Rt===this?this.deferStop=!0:this.active&&(gh(this),this.onStop&&this.onStop(),this.active=!1)}}function gh(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Nn=!0;const tp=[];function ir(){tp.push(Nn),Nn=!1}function or(){const t=tp.pop();Nn=t===void 0?!0:t}function vt(t,e,n){if(Nn&&Rt){let s=Rc.get(t);s||Rc.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=Ul()),np(r)}}function np(t,e){let n=!1;vr<=Nc?ep(t)||(t.n|=Un,n=!Zd(t)):n=!t.has(Rt),n&&(t.add(Rt),Rt.deps.push(t))}function nn(t,e,n,s,r,i){const o=Rc.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&Z(t)){const c=Vs(s);o.forEach((l,u)=>{(u==="length"||u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":Z(t)?Ml(n)&&a.push(o.get("length")):(a.push(o.get(rs)),Ds(t)&&a.push(o.get(Dc)));break;case"delete":Z(t)||(a.push(o.get(rs)),Ds(t)&&a.push(o.get(Dc)));break;case"set":Ds(t)&&a.push(o.get(rs));break}if(a.length===1)a[0]&&Oc(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);Oc(Ul(c))}}function Oc(t,e){const n=Z(t)?t:[...t];for(const s of n)s.computed&&mh(s);for(const s of n)s.computed||mh(s)}function mh(t,e){(t!==Rt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Wv=Dl("__proto__,__v_isRef,__isVue"),sp=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(xl)),zv=Bl(),Gv=Bl(!1,!0),Qv=Bl(!0),yh=Xv();function Xv(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=ge(this);for(let i=0,o=this.length;i<o;i++)vt(s,"get",i+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(ge)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){ir();const s=ge(this)[e].apply(this,n);return or(),s}}),t}function Bl(t=!1,e=!1){return function(s,r,i){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&i===(t?e?f_:cp:e?ap:op).get(s))return s;const o=Z(s);if(!t&&o&&pe(yh,r))return Reflect.get(yh,r,i);const a=Reflect.get(s,r,i);return(xl(r)?sp.has(r):Wv(r))||(t||vt(s,"get",r),e)?a:Re(a)?o&&Ml(r)?a:a.value:Ce(a)?t?lp(a):Dt(a):a}}const Yv=rp(),Jv=rp(!0);function rp(t=!1){return function(n,s,r,i){let o=n[s];if(js(o)&&Re(o)&&!Re(r))return!1;if(!t&&(!_o(r)&&!js(r)&&(o=ge(o),r=ge(r)),!Z(n)&&Re(o)&&!Re(r)))return o.value=r,!0;const a=Z(n)&&Ml(s)?Number(s)<n.length:pe(n,s),c=Reflect.set(n,s,r,i);return n===ge(i)&&(a?Br(r,o)&&nn(n,"set",s,r):nn(n,"add",s,r)),c}}function Zv(t,e){const n=pe(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&nn(t,"delete",e,void 0),s}function e_(t,e){const n=Reflect.has(t,e);return(!xl(e)||!sp.has(e))&&vt(t,"has",e),n}function t_(t){return vt(t,"iterate",Z(t)?"length":rs),Reflect.ownKeys(t)}const ip={get:zv,set:Yv,deleteProperty:Zv,has:e_,ownKeys:t_},n_={get:Qv,set(t,e){return!0},deleteProperty(t,e){return!0}},s_=Ye({},ip,{get:Gv,set:Jv}),$l=t=>t,na=t=>Reflect.getPrototypeOf(t);function Pi(t,e,n=!1,s=!1){t=t.__v_raw;const r=ge(t),i=ge(e);n||(e!==i&&vt(r,"get",e),vt(r,"get",i));const{has:o}=na(r),a=s?$l:n?Hl:$r;if(o.call(r,e))return a(t.get(e));if(o.call(r,i))return a(t.get(i));t!==r&&t.get(e)}function xi(t,e=!1){const n=this.__v_raw,s=ge(n),r=ge(t);return e||(t!==r&&vt(s,"has",t),vt(s,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function Li(t,e=!1){return t=t.__v_raw,!e&&vt(ge(t),"iterate",rs),Reflect.get(t,"size",t)}function vh(t){t=ge(t);const e=ge(this);return na(e).has.call(e,t)||(e.add(t),nn(e,"add",t,t)),this}function _h(t,e){e=ge(e);const n=ge(this),{has:s,get:r}=na(n);let i=s.call(n,t);i||(t=ge(t),i=s.call(n,t));const o=r.call(n,t);return n.set(t,e),i?Br(e,o)&&nn(n,"set",t,e):nn(n,"add",t,e),this}function wh(t){const e=ge(this),{has:n,get:s}=na(e);let r=n.call(e,t);r||(t=ge(t),r=n.call(e,t)),s&&s.call(e,t);const i=e.delete(t);return r&&nn(e,"delete",t,void 0),i}function Eh(){const t=ge(this),e=t.size!==0,n=t.clear();return e&&nn(t,"clear",void 0,void 0),n}function Mi(t,e){return function(s,r){const i=this,o=i.__v_raw,a=ge(o),c=e?$l:t?Hl:$r;return!t&&vt(a,"iterate",rs),o.forEach((l,u)=>s.call(r,c(l),c(u),i))}}function Ui(t,e,n){return function(...s){const r=this.__v_raw,i=ge(r),o=Ds(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=r[t](...s),u=n?$l:e?Hl:$r;return!e&&vt(i,"iterate",c?Dc:rs),{next(){const{value:h,done:f}=l.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function mn(t){return function(...e){return t==="delete"?!1:this}}function r_(){const t={get(i){return Pi(this,i)},get size(){return Li(this)},has:xi,add:vh,set:_h,delete:wh,clear:Eh,forEach:Mi(!1,!1)},e={get(i){return Pi(this,i,!1,!0)},get size(){return Li(this)},has:xi,add:vh,set:_h,delete:wh,clear:Eh,forEach:Mi(!1,!0)},n={get(i){return Pi(this,i,!0)},get size(){return Li(this,!0)},has(i){return xi.call(this,i,!0)},add:mn("add"),set:mn("set"),delete:mn("delete"),clear:mn("clear"),forEach:Mi(!0,!1)},s={get(i){return Pi(this,i,!0,!0)},get size(){return Li(this,!0)},has(i){return xi.call(this,i,!0)},add:mn("add"),set:mn("set"),delete:mn("delete"),clear:mn("clear"),forEach:Mi(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Ui(i,!1,!1),n[i]=Ui(i,!0,!1),e[i]=Ui(i,!1,!0),s[i]=Ui(i,!0,!0)}),[t,n,e,s]}const[i_,o_,a_,c_]=r_();function Vl(t,e){const n=e?t?c_:a_:t?o_:i_;return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(pe(n,r)&&r in s?n:s,r,i)}const l_={get:Vl(!1,!1)},u_={get:Vl(!1,!0)},h_={get:Vl(!0,!1)},op=new WeakMap,ap=new WeakMap,cp=new WeakMap,f_=new WeakMap;function d_(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function p_(t){return t.__v_skip||!Object.isExtensible(t)?0:d_(Bv(t))}function Dt(t){return js(t)?t:jl(t,!1,ip,l_,op)}function g_(t){return jl(t,!1,s_,u_,ap)}function lp(t){return jl(t,!0,n_,h_,cp)}function jl(t,e,n,s,r){if(!Ce(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=p_(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function Jt(t){return js(t)?Jt(t.__v_raw):!!(t&&t.__v_isReactive)}function js(t){return!!(t&&t.__v_isReadonly)}function _o(t){return!!(t&&t.__v_isShallow)}function up(t){return Jt(t)||js(t)}function ge(t){const e=t&&t.__v_raw;return e?ge(e):t}function hs(t){return vo(t,"__v_skip",!0),t}const $r=t=>Ce(t)?Dt(t):t,Hl=t=>Ce(t)?lp(t):t;function hp(t){Nn&&Rt&&(t=ge(t),np(t.dep||(t.dep=Ul())))}function fp(t,e){t=ge(t),t.dep&&Oc(t.dep)}function Re(t){return!!(t&&t.__v_isRef===!0)}function Zt(t){return dp(t,!1)}function wo(t){return dp(t,!0)}function dp(t,e){return Re(t)?t:new m_(t,e)}class m_{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ge(e),this._value=n?e:$r(e)}get value(){return hp(this),this._value}set value(e){const n=this.__v_isShallow||_o(e)||js(e);e=n?e:ge(e),Br(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:$r(e),fp(this))}}function mt(t){return Re(t)?t.value:t}const y_={get:(t,e,n)=>mt(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return Re(r)&&!Re(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function pp(t){return Jt(t)?t:new Proxy(t,y_)}function v_(t){const e=Z(t)?new Array(t.length):{};for(const n in t)e[n]=sa(t,n);return e}class __{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}}function sa(t,e,n){const s=t[e];return Re(s)?s:new __(t,e,n)}var gp;class w_{constructor(e,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[gp]=!1,this._dirty=!0,this.effect=new Fl(e,()=>{this._dirty||(this._dirty=!0,fp(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const e=ge(this);return hp(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}gp="__v_isReadonly";function E_(t,e,n=!1){let s,r;const i=te(t);return i?(s=t,r=Nt):(s=t.get,r=t.set),new w_(s,r,i||!r,n)}function Dn(t,e,n,s){let r;try{r=s?t(...s):t()}catch(i){ar(i,e,n)}return r}function It(t,e,n,s){if(te(t)){const i=Dn(t,e,n,s);return i&&Ll(i)&&i.catch(o=>{ar(o,e,n)}),i}const r=[];for(let i=0;i<t.length;i++)r.push(It(t[i],e,n,s));return r}function ar(t,e,n,s=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){Dn(c,null,10,[t,o,a]);return}}b_(t,n,r,s)}function b_(t,e,n,s=!0){console.error(t)}let Vr=!1,Pc=!1;const tt=[];let Ut=0;const Ps=[];let Gt=null,Jn=0;const mp=Promise.resolve();let ql=null;function ra(t){const e=ql||mp;return t?e.then(this?t.bind(this):t):e}function T_(t){let e=Ut+1,n=tt.length;for(;e<n;){const s=e+n>>>1;jr(tt[s])<t?e=s+1:n=s}return e}function ia(t){(!tt.length||!tt.includes(t,Vr&&t.allowRecurse?Ut+1:Ut))&&(t.id==null?tt.push(t):tt.splice(T_(t.id),0,t),yp())}function yp(){!Vr&&!Pc&&(Pc=!0,ql=mp.then(_p))}function I_(t){const e=tt.indexOf(t);e>Ut&&tt.splice(e,1)}function vp(t){Z(t)?Ps.push(...t):(!Gt||!Gt.includes(t,t.allowRecurse?Jn+1:Jn))&&Ps.push(t),yp()}function bh(t,e=Vr?Ut+1:0){for(;e<tt.length;e++){const n=tt[e];n&&n.pre&&(tt.splice(e,1),e--,n())}}function Eo(t){if(Ps.length){const e=[...new Set(Ps)];if(Ps.length=0,Gt){Gt.push(...e);return}for(Gt=e,Gt.sort((n,s)=>jr(n)-jr(s)),Jn=0;Jn<Gt.length;Jn++)Gt[Jn]();Gt=null,Jn=0}}const jr=t=>t.id==null?1/0:t.id,S_=(t,e)=>{const n=jr(t)-jr(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function _p(t){Pc=!1,Vr=!0,tt.sort(S_);const e=Nt;try{for(Ut=0;Ut<tt.length;Ut++){const n=tt[Ut];n&&n.active!==!1&&Dn(n,null,14)}}finally{Ut=0,tt.length=0,Eo(),Vr=!1,ql=null,(tt.length||Ps.length)&&_p()}}function C_(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||Se;let r=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=s[u]||Se;f&&(r=n.map(d=>Pe(d)?d.trim():d)),h&&(r=n.map(Vs))}let a,c=s[a=Wa(e)]||s[a=Wa(qt(e))];!c&&i&&(c=s[a=Wa(rr(e))]),c&&It(c,t,6,r);const l=s[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,It(l,t,6,r)}}function wp(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!te(t)){const c=l=>{const u=wp(l,e,!0);u&&(a=!0,Ye(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(Ce(t)&&s.set(t,null),null):(Z(i)?i.forEach(c=>o[c]=null):Ye(o,i),Ce(t)&&s.set(t,o),o)}function oa(t,e){return!t||!oi(e)?!1:(e=e.slice(2).replace(/Once$/,""),pe(t,e[0].toLowerCase()+e.slice(1))||pe(t,rr(e))||pe(t,e))}let Qe=null,aa=null;function bo(t){const e=Qe;return Qe=t,aa=t&&t.type.__scopeId||null,e}function S1(t){aa=t}function C1(){aa=null}function Kl(t,e=Qe,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&xh(-1);const i=bo(e);let o;try{o=t(...r)}finally{bo(i),s._d&&xh(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function za(t){const{type:e,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:f,setupState:d,ctx:m,inheritAttrs:w}=t;let I,v;const p=bo(t);try{if(n.shapeFlag&4){const S=r||s;I=Et(u.call(S,S,h,i,d,f,m)),v=c}else{const S=e;I=Et(S.length>1?S(i,{attrs:c,slots:a,emit:l}):S(i,null)),v=e.props?c:k_(c)}}catch(S){kr.length=0,ar(S,t,1),I=De(lt)}let _=I;if(v&&w!==!1){const S=Object.keys(v),{shapeFlag:E}=_;S.length&&E&7&&(o&&S.some(Ol)&&(v=R_(v,o)),_=sn(_,v))}return n.dirs&&(_=sn(_),_.dirs=_.dirs?_.dirs.concat(n.dirs):n.dirs),n.transition&&(_.transition=n.transition),I=_,bo(p),I}function A_(t){let e;for(let n=0;n<t.length;n++){const s=t[n];if(Ks(s)){if(s.type!==lt||s.children==="v-if"){if(e)return;e=s}}else return}return e}const k_=t=>{let e;for(const n in t)(n==="class"||n==="style"||oi(n))&&((e||(e={}))[n]=t[n]);return e},R_=(t,e)=>{const n={};for(const s in t)(!Ol(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function N_(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?Th(s,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==s[f]&&!oa(l,f))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Th(s,o,l):!0:!!o;return!1}function Th(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!oa(n,i))return!0}return!1}function Wl({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Ep=t=>t.__isSuspense,D_={name:"Suspense",__isSuspense:!0,process(t,e,n,s,r,i,o,a,c,l){t==null?O_(e,n,s,r,i,o,a,c,l):P_(t,e,n,s,r,o,a,c,l)},hydrate:x_,create:zl,normalize:L_},bp=D_;function Hr(t,e){const n=t.props&&t.props[e];te(n)&&n()}function O_(t,e,n,s,r,i,o,a,c){const{p:l,o:{createElement:u}}=c,h=u("div"),f=t.suspense=zl(t,r,s,e,h,n,i,o,a,c);l(null,f.pendingBranch=t.ssContent,h,null,s,f,i,o),f.deps>0?(Hr(t,"onPending"),Hr(t,"onFallback"),l(null,t.ssFallback,e,n,s,null,i,o),xs(f,t.ssFallback)):f.resolve()}function P_(t,e,n,s,r,i,o,a,{p:c,um:l,o:{createElement:u}}){const h=e.suspense=t.suspense;h.vnode=e,e.el=t.el;const f=e.ssContent,d=e.ssFallback,{activeBranch:m,pendingBranch:w,isInFallback:I,isHydrating:v}=h;if(w)h.pendingBranch=f,Ft(f,w)?(c(w,f,h.hiddenContainer,null,r,h,i,o,a),h.deps<=0?h.resolve():I&&(c(m,d,n,s,r,null,i,o,a),xs(h,d))):(h.pendingId++,v?(h.isHydrating=!1,h.activeBranch=w):l(w,r,h),h.deps=0,h.effects.length=0,h.hiddenContainer=u("div"),I?(c(null,f,h.hiddenContainer,null,r,h,i,o,a),h.deps<=0?h.resolve():(c(m,d,n,s,r,null,i,o,a),xs(h,d))):m&&Ft(f,m)?(c(m,f,n,s,r,h,i,o,a),h.resolve(!0)):(c(null,f,h.hiddenContainer,null,r,h,i,o,a),h.deps<=0&&h.resolve()));else if(m&&Ft(f,m))c(m,f,n,s,r,h,i,o,a),xs(h,f);else if(Hr(e,"onPending"),h.pendingBranch=f,h.pendingId++,c(null,f,h.hiddenContainer,null,r,h,i,o,a),h.deps<=0)h.resolve();else{const{timeout:p,pendingId:_}=h;p>0?setTimeout(()=>{h.pendingId===_&&h.fallback(d)},p):p===0&&h.fallback(d)}}function zl(t,e,n,s,r,i,o,a,c,l,u=!1){const{p:h,m:f,um:d,n:m,o:{parentNode:w,remove:I}}=l,v=Vs(t.props&&t.props.timeout),p={vnode:t,parent:e,parentComponent:n,isSVG:o,container:s,hiddenContainer:r,anchor:i,deps:0,pendingId:0,timeout:typeof v=="number"?v:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:u,isUnmounted:!1,effects:[],resolve(_=!1){const{vnode:S,activeBranch:E,pendingBranch:R,pendingId:C,effects:b,parentComponent:M,container:B}=p;if(p.isHydrating)p.isHydrating=!1;else if(!_){const se=E&&R.transition&&R.transition.mode==="out-in";se&&(E.transition.afterLeave=()=>{C===p.pendingId&&f(R,B,j,0)});let{anchor:j}=p;E&&(j=m(E),d(E,M,p,!0)),se||f(R,B,j,0)}xs(p,R),p.pendingBranch=null,p.isInFallback=!1;let W=p.parent,F=!1;for(;W;){if(W.pendingBranch){W.effects.push(...b),F=!0;break}W=W.parent}F||vp(b),p.effects=[],Hr(S,"onResolve")},fallback(_){if(!p.pendingBranch)return;const{vnode:S,activeBranch:E,parentComponent:R,container:C,isSVG:b}=p;Hr(S,"onFallback");const M=m(E),B=()=>{!p.isInFallback||(h(null,_,C,M,R,null,b,a,c),xs(p,_))},W=_.transition&&_.transition.mode==="out-in";W&&(E.transition.afterLeave=B),p.isInFallback=!0,d(E,R,null,!0),W||B()},move(_,S,E){p.activeBranch&&f(p.activeBranch,_,S,E),p.container=_},next(){return p.activeBranch&&m(p.activeBranch)},registerDep(_,S){const E=!!p.pendingBranch;E&&p.deps++;const R=_.vnode.el;_.asyncDep.catch(C=>{ar(C,_,0)}).then(C=>{if(_.isUnmounted||p.isUnmounted||p.pendingId!==_.suspenseId)return;_.asyncResolved=!0;const{vnode:b}=_;Bc(_,C,!1),R&&(b.el=R);const M=!R&&_.subTree.el;S(_,b,w(R||_.subTree.el),R?null:m(_.subTree),p,o,c),M&&I(M),Wl(_,b.el),E&&--p.deps===0&&p.resolve()})},unmount(_,S){p.isUnmounted=!0,p.activeBranch&&d(p.activeBranch,n,_,S),p.pendingBranch&&d(p.pendingBranch,n,_,S)}};return p}function x_(t,e,n,s,r,i,o,a,c){const l=e.suspense=zl(e,s,n,t.parentNode,document.createElement("div"),null,r,i,o,a,!0),u=c(t,l.pendingBranch=e.ssContent,n,l,i,o);return l.deps===0&&l.resolve(),u}function L_(t){const{shapeFlag:e,children:n}=t,s=e&32;t.ssContent=Ih(s?n.default:n),t.ssFallback=s?Ih(n.fallback):De(lt)}function Ih(t){let e;if(te(t)){const n=qs&&t._c;n&&(t._d=!1,as()),t=t(),n&&(t._d=!0,e=Tt,Hp())}return Z(t)&&(t=A_(t)),t=Et(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function Tp(t,e){e&&e.pendingBranch?Z(t)?e.effects.push(...t):e.effects.push(t):vp(t)}function xs(t,e){t.activeBranch=e;const{vnode:n,parentComponent:s}=t,r=n.el=e.el;s&&s.subTree===n&&(s.vnode.el=r,Wl(s,r))}function is(t,e){if(Fe){let n=Fe.provides;const s=Fe.parent&&Fe.parent.provides;s===n&&(n=Fe.provides=Object.create(s)),n[t]=e}}function St(t,e,n=!1){const s=Fe||Qe;if(s){const r=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&te(e)?e.call(s.proxy):e}}function Sh(t,e){return Gl(t,null,e)}const Fi={};function Ls(t,e,n){return Gl(t,e,n)}function Gl(t,e,{immediate:n,deep:s,flush:r,onTrack:i,onTrigger:o}=Se){const a=Fe;let c,l=!1,u=!1;if(Re(t)?(c=()=>t.value,l=_o(t)):Jt(t)?(c=()=>t,s=!0):Z(t)?(u=!0,l=t.some(_=>Jt(_)||_o(_)),c=()=>t.map(_=>{if(Re(_))return _.value;if(Jt(_))return es(_);if(te(_))return Dn(_,a,2)})):te(t)?e?c=()=>Dn(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),It(t,a,3,[f])}:c=Nt,e&&s){const _=c;c=()=>es(_())}let h,f=_=>{h=v.onStop=()=>{Dn(_,a,4)}},d;if(Ws)if(f=Nt,e?n&&It(e,a,3,[c(),u?[]:void 0,f]):c(),r==="sync"){const _=Aw();d=_.__watcherHandles||(_.__watcherHandles=[])}else return Nt;let m=u?new Array(t.length).fill(Fi):Fi;const w=()=>{if(!!v.active)if(e){const _=v.run();(s||l||(u?_.some((S,E)=>Br(S,m[E])):Br(_,m)))&&(h&&h(),It(e,a,3,[_,m===Fi?void 0:u&&m[0]===Fi?[]:m,f]),m=_)}else v.run()};w.allowRecurse=!!e;let I;r==="sync"?I=w:r==="post"?I=()=>We(w,a&&a.suspense):(w.pre=!0,a&&(w.id=a.uid),I=()=>ia(w));const v=new Fl(c,I);e?n?w():m=v.run():r==="post"?We(v.run.bind(v),a&&a.suspense):v.run();const p=()=>{v.stop(),a&&a.scope&&Pl(a.scope.effects,v)};return d&&d.push(p),p}function M_(t,e,n){const s=this.proxy,r=Pe(t)?t.includes(".")?Ip(s,t):()=>s[t]:t.bind(s,s);let i;te(e)?i=e:(i=e.handler,n=e);const o=Fe;Fn(this);const a=Gl(r,i.bind(s),n);return o?Fn(o):On(),a}function Ip(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function es(t,e){if(!Ce(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Re(t))es(t.value,e);else if(Z(t))for(let n=0;n<t.length;n++)es(t[n],e);else if(Gd(t)||Ds(t))t.forEach(n=>{es(n,e)});else if(Xd(t))for(const n in t)es(t[n],e);return t}function U_(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return la(()=>{t.isMounted=!0}),ci(()=>{t.isUnmounting=!0}),t}const wt=[Function,Array],F_={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:wt,onEnter:wt,onAfterEnter:wt,onEnterCancelled:wt,onBeforeLeave:wt,onLeave:wt,onAfterLeave:wt,onLeaveCancelled:wt,onBeforeAppear:wt,onAppear:wt,onAfterAppear:wt,onAppearCancelled:wt},setup(t,{slots:e}){const n=fn(),s=U_();let r;return()=>{const i=e.default&&Ap(e.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const w of i)if(w.type!==lt){o=w;break}}const a=ge(t),{mode:c}=a;if(s.isLeaving)return Ga(o);const l=Ch(o);if(!l)return Ga(o);const u=xc(l,a,s,n);To(l,u);const h=n.subTree,f=h&&Ch(h);let d=!1;const{getTransitionKey:m}=l.type;if(m){const w=m();r===void 0?r=w:w!==r&&(r=w,d=!0)}if(f&&f.type!==lt&&(!Ft(l,f)||d)){const w=xc(f,a,s,n);if(To(f,w),c==="out-in")return s.isLeaving=!0,w.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&n.update()},Ga(o);c==="in-out"&&l.type!==lt&&(w.delayLeave=(I,v,p)=>{const _=Cp(s,f);_[String(f.key)]=f,I._leaveCb=()=>{v(),I._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=p})}return o}}},Sp=F_;function Cp(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function xc(t,e,n,s){const{appear:r,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:h,onLeave:f,onAfterLeave:d,onLeaveCancelled:m,onBeforeAppear:w,onAppear:I,onAfterAppear:v,onAppearCancelled:p}=e,_=String(t.key),S=Cp(n,t),E=(b,M)=>{b&&It(b,s,9,M)},R=(b,M)=>{const B=M[1];E(b,M),Z(b)?b.every(W=>W.length<=1)&&B():b.length<=1&&B()},C={mode:i,persisted:o,beforeEnter(b){let M=a;if(!n.isMounted)if(r)M=w||a;else return;b._leaveCb&&b._leaveCb(!0);const B=S[_];B&&Ft(t,B)&&B.el._leaveCb&&B.el._leaveCb(),E(M,[b])},enter(b){let M=c,B=l,W=u;if(!n.isMounted)if(r)M=I||c,B=v||l,W=p||u;else return;let F=!1;const se=b._enterCb=j=>{F||(F=!0,j?E(W,[b]):E(B,[b]),C.delayedLeave&&C.delayedLeave(),b._enterCb=void 0)};M?R(M,[b,se]):se()},leave(b,M){const B=String(t.key);if(b._enterCb&&b._enterCb(!0),n.isUnmounting)return M();E(h,[b]);let W=!1;const F=b._leaveCb=se=>{W||(W=!0,M(),se?E(m,[b]):E(d,[b]),b._leaveCb=void 0,S[B]===t&&delete S[B])};S[B]=t,f?R(f,[b,F]):F()},clone(b){return xc(b,e,n,s)}};return C}function Ga(t){if(ai(t))return t=sn(t),t.children=null,t}function Ch(t){return ai(t)?t.children?t.children[0]:void 0:t}function To(t,e){t.shapeFlag&6&&t.component?To(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Ap(t,e=!1,n){let s=[],r=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===ft?(o.patchFlag&128&&r++,s=s.concat(Ap(o.children,e,a))):(e||o.type!==lt)&&s.push(a!=null?sn(o,{key:a}):o)}if(r>1)for(let i=0;i<s.length;i++)s[i].patchFlag=-2;return s}function Ke(t){return te(t)?{setup:t,name:t.name}:t}const os=t=>!!t.type.__asyncLoader;function kp(t){te(t)&&(t={loader:t});const{loader:e,loadingComponent:n,errorComponent:s,delay:r=200,timeout:i,suspensible:o=!0,onError:a}=t;let c=null,l,u=0;const h=()=>(u++,c=null,f()),f=()=>{let d;return c||(d=c=e().catch(m=>{if(m=m instanceof Error?m:new Error(String(m)),a)return new Promise((w,I)=>{a(m,()=>w(h()),()=>I(m),u+1)});throw m}).then(m=>d!==c&&c?c:(m&&(m.__esModule||m[Symbol.toStringTag]==="Module")&&(m=m.default),l=m,m)))};return Ke({name:"AsyncComponentWrapper",__asyncLoader:f,get __asyncResolved(){return l},setup(){const d=Fe;if(l)return()=>Qa(l,d);const m=p=>{c=null,ar(p,d,13,!s)};if(o&&d.suspense||Ws)return f().then(p=>()=>Qa(p,d)).catch(p=>(m(p),()=>s?De(s,{error:p}):null));const w=Zt(!1),I=Zt(),v=Zt(!!r);return r&&setTimeout(()=>{v.value=!1},r),i!=null&&setTimeout(()=>{if(!w.value&&!I.value){const p=new Error(`Async component timed out after ${i}ms.`);m(p),I.value=p}},i),f().then(()=>{w.value=!0,d.parent&&ai(d.parent.vnode)&&ia(d.parent.update)}).catch(p=>{m(p),I.value=p}),()=>{if(w.value&&l)return Qa(l,d);if(I.value&&s)return De(s,{error:I.value});if(n&&!v.value)return De(n)}}})}function Qa(t,e){const{ref:n,props:s,children:r,ce:i}=e.vnode,o=De(t,s,r);return o.ref=n,o.ce=i,delete e.vnode.ce,o}const ai=t=>t.type.__isKeepAlive,B_={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(t,{slots:e}){const n=fn(),s=n.ctx;if(!s.renderer)return()=>{const p=e.default&&e.default();return p&&p.length===1?p[0]:p};const r=new Map,i=new Set;let o=null;const a=n.suspense,{renderer:{p:c,m:l,um:u,o:{createElement:h}}}=s,f=h("div");s.activate=(p,_,S,E,R)=>{const C=p.component;l(p,_,S,0,a),c(C.vnode,p,_,S,C,a,E,p.slotScopeIds,R),We(()=>{C.isDeactivated=!1,C.a&&Os(C.a);const b=p.props&&p.props.onVnodeMounted;b&&ht(b,C.parent,p)},a)},s.deactivate=p=>{const _=p.component;l(p,f,null,1,a),We(()=>{_.da&&Os(_.da);const S=p.props&&p.props.onVnodeUnmounted;S&&ht(S,_.parent,p),_.isDeactivated=!0},a)};function d(p){Xa(p),u(p,n,a,!0)}function m(p){r.forEach((_,S)=>{const E=$c(_.type);E&&(!p||!p(E))&&w(S)})}function w(p){const _=r.get(p);!o||_.type!==o.type?d(_):o&&Xa(o),r.delete(p),i.delete(p)}Ls(()=>[t.include,t.exclude],([p,_])=>{p&&m(S=>_r(p,S)),_&&m(S=>!_r(_,S))},{flush:"post",deep:!0});let I=null;const v=()=>{I!=null&&r.set(I,Ya(n.subTree))};return la(v),Np(v),ci(()=>{r.forEach(p=>{const{subTree:_,suspense:S}=n,E=Ya(_);if(p.type===E.type){Xa(E);const R=E.component.da;R&&We(R,S);return}d(p)})}),()=>{if(I=null,!e.default)return null;const p=e.default(),_=p[0];if(p.length>1)return o=null,p;if(!Ks(_)||!(_.shapeFlag&4)&&!(_.shapeFlag&128))return o=null,_;let S=Ya(_);const E=S.type,R=$c(os(S)?S.type.__asyncResolved||{}:E),{include:C,exclude:b,max:M}=t;if(C&&(!R||!_r(C,R))||b&&R&&_r(b,R))return o=S,_;const B=S.key==null?E:S.key,W=r.get(B);return S.el&&(S=sn(S),_.shapeFlag&128&&(_.ssContent=S)),I=B,W?(S.el=W.el,S.component=W.component,S.transition&&To(S,S.transition),S.shapeFlag|=512,i.delete(B),i.add(B)):(i.add(B),M&&i.size>parseInt(M,10)&&w(i.values().next().value)),S.shapeFlag|=256,o=S,Ep(_.type)?_:S}}},$_=B_;function _r(t,e){return Z(t)?t.some(n=>_r(n,e)):Pe(t)?t.split(",").includes(e):t.test?t.test(e):!1}function V_(t,e){Rp(t,"a",e)}function j_(t,e){Rp(t,"da",e)}function Rp(t,e,n=Fe){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(ca(e,s,n),n){let r=n.parent;for(;r&&r.parent;)ai(r.parent.vnode)&&H_(s,e,n,r),r=r.parent}}function H_(t,e,n,s){const r=ca(e,t,s,!0);Ql(()=>{Pl(s[e],r)},n)}function Xa(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function Ya(t){return t.shapeFlag&128?t.ssContent:t}function ca(t,e,n=Fe,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;ir(),Fn(n);const a=It(e,n,t,o);return On(),or(),a});return s?r.unshift(i):r.push(i),i}}const hn=t=>(e,n=Fe)=>(!Ws||t==="sp")&&ca(t,(...s)=>e(...s),n),q_=hn("bm"),la=hn("m"),K_=hn("bu"),Np=hn("u"),ci=hn("bum"),Ql=hn("um"),W_=hn("sp"),z_=hn("rtg"),G_=hn("rtc");function Dp(t,e=Fe){ca("ec",t,e)}function A1(t,e){const n=Qe;if(n===null)return t;const s=ha(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=Se]=e[i];o&&(te(o)&&(o={mounted:o,updated:o}),o.deep&&es(a),r.push({dir:o,instance:s,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function Mt(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(ir(),It(c,n,8,[t.el,a,t,e]),or())}}const Op="components";function Xl(t,e){return X_(Op,t,!0,e)||t}const Q_=Symbol();function X_(t,e,n=!0,s=!1){const r=Qe||Fe;if(r){const i=r.type;if(t===Op){const a=$c(i,!1);if(a&&(a===e||a===qt(e)||a===ta(qt(e))))return i}const o=Ah(r[t]||i[t],e)||Ah(r.appContext[t],e);return!o&&s?i:o}}function Ah(t,e){return t&&(t[e]||t[qt(e)]||t[ta(qt(e))])}function k1(t,e,n,s){let r;const i=n&&n[s];if(Z(t)||Pe(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,i&&i[o])}else if(Ce(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];r[a]=e(t[l],l,a,i&&i[a])}}else r=[];return n&&(n[s]=r),r}function R1(t,e,n={},s,r){if(Qe.isCE||Qe.parent&&os(Qe.parent)&&Qe.parent.isCE)return e!=="default"&&(n.name=e),De("slot",n,s&&s());let i=t[e];i&&i._c&&(i._d=!1),as();const o=i&&Pp(i(n)),a=Ms(ft,{key:n.key||o&&o.key||`_${e}`},o||(s?s():[]),o&&t._===1?64:-2);return!r&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function Pp(t){return t.some(e=>Ks(e)?!(e.type===lt||e.type===ft&&!Pp(e.children)):!0)?t:null}const Lc=t=>t?Gp(t)?ha(t)||t.proxy:Lc(t.parent):null,Cr=Ye(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Lc(t.parent),$root:t=>Lc(t.root),$emit:t=>t.emit,$options:t=>Yl(t),$forceUpdate:t=>t.f||(t.f=()=>ia(t.update)),$nextTick:t=>t.n||(t.n=ra.bind(t.proxy)),$watch:t=>M_.bind(t)}),Ja=(t,e)=>t!==Se&&!t.__isScriptSetup&&pe(t,e),Y_={get({_:t},e){const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(Ja(s,e))return o[e]=1,s[e];if(r!==Se&&pe(r,e))return o[e]=2,r[e];if((l=t.propsOptions[0])&&pe(l,e))return o[e]=3,i[e];if(n!==Se&&pe(n,e))return o[e]=4,n[e];Mc&&(o[e]=0)}}const u=Cr[e];let h,f;if(u)return e==="$attrs"&&vt(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Se&&pe(n,e))return o[e]=4,n[e];if(f=c.config.globalProperties,pe(f,e))return f[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return Ja(r,e)?(r[e]=n,!0):s!==Se&&pe(s,e)?(s[e]=n,!0):pe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==Se&&pe(t,o)||Ja(e,o)||(a=i[0])&&pe(a,o)||pe(s,o)||pe(Cr,o)||pe(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:pe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Mc=!0;function J_(t){const e=Yl(t),n=t.proxy,s=t.ctx;Mc=!1,e.beforeCreate&&kh(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:f,beforeUpdate:d,updated:m,activated:w,deactivated:I,beforeDestroy:v,beforeUnmount:p,destroyed:_,unmounted:S,render:E,renderTracked:R,renderTriggered:C,errorCaptured:b,serverPrefetch:M,expose:B,inheritAttrs:W,components:F,directives:se,filters:j}=e;if(l&&Z_(l,s,null,t.appContext.config.unwrapInjectedRef),o)for(const be in o){const we=o[be];te(we)&&(s[be]=we.bind(n))}if(r){const be=r.call(n,n);Ce(be)&&(t.data=Dt(be))}if(Mc=!0,i)for(const be in i){const we=i[be],Ct=te(we)?we.bind(n,n):te(we.get)?we.get.bind(n,n):Nt,Wn=!te(we)&&te(we.set)?we.set.bind(n):Nt,At=Ue({get:Ct,set:Wn});Object.defineProperty(s,be,{enumerable:!0,configurable:!0,get:()=>At.value,set:ut=>At.value=ut})}if(a)for(const be in a)xp(a[be],s,n,be);if(c){const be=te(c)?c.call(n):c;Reflect.ownKeys(be).forEach(we=>{is(we,be[we])})}u&&kh(u,t,"c");function fe(be,we){Z(we)?we.forEach(Ct=>be(Ct.bind(n))):we&&be(we.bind(n))}if(fe(q_,h),fe(la,f),fe(K_,d),fe(Np,m),fe(V_,w),fe(j_,I),fe(Dp,b),fe(G_,R),fe(z_,C),fe(ci,p),fe(Ql,S),fe(W_,M),Z(B))if(B.length){const be=t.exposed||(t.exposed={});B.forEach(we=>{Object.defineProperty(be,we,{get:()=>n[we],set:Ct=>n[we]=Ct})})}else t.exposed||(t.exposed={});E&&t.render===Nt&&(t.render=E),W!=null&&(t.inheritAttrs=W),F&&(t.components=F),se&&(t.directives=se)}function Z_(t,e,n=Nt,s=!1){Z(t)&&(t=Uc(t));for(const r in t){const i=t[r];let o;Ce(i)?"default"in i?o=St(i.from||r,i.default,!0):o=St(i.from||r):o=St(i),Re(o)&&s?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function kh(t,e,n){It(Z(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function xp(t,e,n,s){const r=s.includes(".")?Ip(n,s):()=>n[s];if(Pe(t)){const i=e[t];te(i)&&Ls(r,i)}else if(te(t))Ls(r,t.bind(n));else if(Ce(t))if(Z(t))t.forEach(i=>xp(i,e,n,s));else{const i=te(t.handler)?t.handler.bind(n):e[t.handler];te(i)&&Ls(r,i,t)}}function Yl(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!r.length&&!n&&!s?c=e:(c={},r.length&&r.forEach(l=>Io(c,l,o,!0)),Io(c,e,o)),Ce(e)&&i.set(e,c),c}function Io(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&Io(t,i,n,!0),r&&r.forEach(o=>Io(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=ew[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const ew={data:Rh,props:Xn,emits:Xn,methods:Xn,computed:Xn,beforeCreate:at,created:at,beforeMount:at,mounted:at,beforeUpdate:at,updated:at,beforeDestroy:at,beforeUnmount:at,destroyed:at,unmounted:at,activated:at,deactivated:at,errorCaptured:at,serverPrefetch:at,components:Xn,directives:Xn,watch:nw,provide:Rh,inject:tw};function Rh(t,e){return e?t?function(){return Ye(te(t)?t.call(this,this):t,te(e)?e.call(this,this):e)}:e:t}function tw(t,e){return Xn(Uc(t),Uc(e))}function Uc(t){if(Z(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function at(t,e){return t?[...new Set([].concat(t,e))]:e}function Xn(t,e){return t?Ye(Ye(Object.create(null),t),e):e}function nw(t,e){if(!t)return e;if(!e)return t;const n=Ye(Object.create(null),t);for(const s in e)n[s]=at(t[s],e[s]);return n}function sw(t,e,n,s=!1){const r={},i={};vo(i,ua,1),t.propsDefaults=Object.create(null),Lp(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:g_(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function rw(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=ge(r),[c]=t.propsOptions;let l=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(oa(t.emitsOptions,f))continue;const d=e[f];if(c)if(pe(i,f))d!==i[f]&&(i[f]=d,l=!0);else{const m=qt(f);r[m]=Fc(c,a,m,d,t,!1)}else d!==i[f]&&(i[f]=d,l=!0)}}}else{Lp(t,e,r,i)&&(l=!0);let u;for(const h in a)(!e||!pe(e,h)&&((u=rr(h))===h||!pe(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(r[h]=Fc(c,a,h,void 0,t,!0)):delete r[h]);if(i!==a)for(const h in i)(!e||!pe(e,h)&&!0)&&(delete i[h],l=!0)}l&&nn(t,"set","$attrs")}function Lp(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Sr(c))continue;const l=e[c];let u;r&&pe(r,u=qt(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:oa(t.emitsOptions,c)||(!(c in s)||l!==s[c])&&(s[c]=l,o=!0)}if(i){const c=ge(n),l=a||Se;for(let u=0;u<i.length;u++){const h=i[u];n[h]=Fc(r,c,h,l[h],t,!pe(l,h))}}return o}function Fc(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=pe(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&te(c)){const{propsDefaults:l}=r;n in l?s=l[n]:(Fn(r),s=l[n]=c.call(null,e),On())}else s=c}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===rr(n))&&(s=!0))}return s}function Mp(t,e,n=!1){const s=e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let c=!1;if(!te(t)){const u=h=>{c=!0;const[f,d]=Mp(h,e,!0);Ye(o,f),d&&a.push(...d)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return Ce(t)&&s.set(t,Ns),Ns;if(Z(i))for(let u=0;u<i.length;u++){const h=qt(i[u]);Nh(h)&&(o[h]=Se)}else if(i)for(const u in i){const h=qt(u);if(Nh(h)){const f=i[u],d=o[h]=Z(f)||te(f)?{type:f}:Object.assign({},f);if(d){const m=Ph(Boolean,d.type),w=Ph(String,d.type);d[0]=m>-1,d[1]=w<0||m<w,(m>-1||pe(d,"default"))&&a.push(h)}}}const l=[o,a];return Ce(t)&&s.set(t,l),l}function Nh(t){return t[0]!=="$"}function Dh(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function Oh(t,e){return Dh(t)===Dh(e)}function Ph(t,e){return Z(e)?e.findIndex(n=>Oh(n,t)):te(e)&&Oh(e,t)?0:-1}const Up=t=>t[0]==="_"||t==="$stable",Jl=t=>Z(t)?t.map(Et):[Et(t)],iw=(t,e,n)=>{if(e._n)return e;const s=Kl((...r)=>Jl(e(...r)),n);return s._c=!1,s},Fp=(t,e,n)=>{const s=t._ctx;for(const r in t){if(Up(r))continue;const i=t[r];if(te(i))e[r]=iw(r,i,s);else if(i!=null){const o=Jl(i);e[r]=()=>o}}},Bp=(t,e)=>{const n=Jl(e);t.slots.default=()=>n},ow=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ge(e),vo(e,"_",n)):Fp(e,t.slots={})}else t.slots={},e&&Bp(t,e);vo(t.slots,ua,1)},aw=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=Se;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(Ye(r,e),!n&&a===1&&delete r._):(i=!e.$stable,Fp(e,r)),o=e}else e&&(Bp(t,e),o={default:1});if(i)for(const a in r)!Up(a)&&!(a in o)&&delete r[a]};function $p(){return{app:null,config:{isNativeTag:Mv,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let cw=0;function lw(t,e){return function(s,r=null){te(s)||(s=Object.assign({},s)),r!=null&&!Ce(r)&&(r=null);const i=$p(),o=new Set;let a=!1;const c=i.app={_uid:cw++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:kw,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&te(l.install)?(o.add(l),l.install(c,...u)):te(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const f=De(s,r);return f.appContext=i,u&&e?e(f,l):t(f,l,h),a=!0,c._container=l,l.__vue_app__=c,ha(f.component)||f.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c}};return c}}function So(t,e,n,s,r=!1){if(Z(t)){t.forEach((f,d)=>So(f,e&&(Z(e)?e[d]:e),n,s,r));return}if(os(s)&&!r)return;const i=s.shapeFlag&4?ha(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===Se?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(Pe(l)?(u[l]=null,pe(h,l)&&(h[l]=null)):Re(l)&&(l.value=null)),te(c))Dn(c,a,12,[o,u]);else{const f=Pe(c),d=Re(c);if(f||d){const m=()=>{if(t.f){const w=f?pe(h,c)?h[c]:u[c]:c.value;r?Z(w)&&Pl(w,i):Z(w)?w.includes(i)||w.push(i):f?(u[c]=[i],pe(h,c)&&(h[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else f?(u[c]=o,pe(h,c)&&(h[c]=o)):d&&(c.value=o,t.k&&(u[t.k]=o))};o?(m.id=-1,We(m,n)):m()}}}let yn=!1;const Bi=t=>/svg/.test(t.namespaceURI)&&t.tagName!=="foreignObject",$i=t=>t.nodeType===8;function uw(t){const{mt:e,p:n,o:{patchProp:s,createText:r,nextSibling:i,parentNode:o,remove:a,insert:c,createComment:l}}=t,u=(v,p)=>{if(!p.hasChildNodes()){n(null,v,p),Eo(),p._vnode=v;return}yn=!1,h(p.firstChild,v,null,null,null),Eo(),p._vnode=v,yn&&console.error("Hydration completed but contains mismatches.")},h=(v,p,_,S,E,R=!1)=>{const C=$i(v)&&v.data==="[",b=()=>w(v,p,_,S,E,C),{type:M,ref:B,shapeFlag:W,patchFlag:F}=p;let se=v.nodeType;p.el=v,F===-2&&(R=!1,p.dynamicChildren=null);let j=null;switch(M){case Hs:se!==3?p.children===""?(c(p.el=r(""),o(v),v),j=v):j=b():(v.data!==p.children&&(yn=!0,v.data=p.children),j=i(v));break;case lt:se!==8||C?j=b():j=i(v);break;case Ar:if(C&&(v=i(v),se=v.nodeType),se===1||se===3){j=v;const ve=!p.children.length;for(let fe=0;fe<p.staticCount;fe++)ve&&(p.children+=j.nodeType===1?j.outerHTML:j.data),fe===p.staticCount-1&&(p.anchor=j),j=i(j);return C?i(j):j}else b();break;case ft:C?j=m(v,p,_,S,E,R):j=b();break;default:if(W&1)se!==1||p.type.toLowerCase()!==v.tagName.toLowerCase()?j=b():j=f(v,p,_,S,E,R);else if(W&6){p.slotScopeIds=E;const ve=o(v);if(e(p,ve,null,_,S,Bi(ve),R),j=C?I(v):i(v),j&&$i(j)&&j.data==="teleport end"&&(j=i(j)),os(p)){let fe;C?(fe=De(ft),fe.anchor=j?j.previousSibling:ve.lastChild):fe=v.nodeType===3?zp(""):De("div"),fe.el=v,p.component.subTree=fe}}else W&64?se!==8?j=b():j=p.type.hydrate(v,p,_,S,E,R,t,d):W&128&&(j=p.type.hydrate(v,p,_,S,Bi(o(v)),E,R,t,h))}return B!=null&&So(B,null,S,p),j},f=(v,p,_,S,E,R)=>{R=R||!!p.dynamicChildren;const{type:C,props:b,patchFlag:M,shapeFlag:B,dirs:W}=p,F=C==="input"&&W||C==="option";if(F||M!==-1){if(W&&Mt(p,null,_,"created"),b)if(F||!R||M&48)for(const j in b)(F&&j.endsWith("value")||oi(j)&&!Sr(j))&&s(v,j,null,b[j],!1,void 0,_);else b.onClick&&s(v,"onClick",null,b.onClick,!1,void 0,_);let se;if((se=b&&b.onVnodeBeforeMount)&&ht(se,_,p),W&&Mt(p,null,_,"beforeMount"),((se=b&&b.onVnodeMounted)||W)&&Tp(()=>{se&&ht(se,_,p),W&&Mt(p,null,_,"mounted")},S),B&16&&!(b&&(b.innerHTML||b.textContent))){let j=d(v.firstChild,p,v,_,S,E,R);for(;j;){yn=!0;const ve=j;j=j.nextSibling,a(ve)}}else B&8&&v.textContent!==p.children&&(yn=!0,v.textContent=p.children)}return v.nextSibling},d=(v,p,_,S,E,R,C)=>{C=C||!!p.dynamicChildren;const b=p.children,M=b.length;for(let B=0;B<M;B++){const W=C?b[B]:b[B]=Et(b[B]);if(v)v=h(v,W,S,E,R,C);else{if(W.type===Hs&&!W.children)continue;yn=!0,n(null,W,_,null,S,E,Bi(_),R)}}return v},m=(v,p,_,S,E,R)=>{const{slotScopeIds:C}=p;C&&(E=E?E.concat(C):C);const b=o(v),M=d(i(v),p,b,_,S,E,R);return M&&$i(M)&&M.data==="]"?i(p.anchor=M):(yn=!0,c(p.anchor=l("]"),b,M),M)},w=(v,p,_,S,E,R)=>{if(yn=!0,p.el=null,R){const M=I(v);for(;;){const B=i(v);if(B&&B!==M)a(B);else break}}const C=i(v),b=o(v);return a(v),n(null,p,b,C,_,S,Bi(b),E),C},I=v=>{let p=0;for(;v;)if(v=i(v),v&&$i(v)&&(v.data==="["&&p++,v.data==="]")){if(p===0)return i(v);p--}return v};return[u,h]}const We=Tp;function hw(t){return Vp(t)}function fw(t){return Vp(t,uw)}function Vp(t,e){const n=jv();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:f,setScopeId:d=Nt,insertStaticContent:m}=t,w=(g,y,T,A=null,N=null,L=null,V=!1,x=null,U=!!y.dynamicChildren)=>{if(g===y)return;g&&!Ft(g,y)&&(A=$(g),ut(g,N,L,!0),g=null),y.patchFlag===-2&&(U=!1,y.dynamicChildren=null);const{type:D,ref:Q,shapeFlag:q}=y;switch(D){case Hs:I(g,y,T,A);break;case lt:v(g,y,T,A);break;case Ar:g==null&&p(y,T,A,V);break;case ft:F(g,y,T,A,N,L,V,x,U);break;default:q&1?E(g,y,T,A,N,L,V,x,U):q&6?se(g,y,T,A,N,L,V,x,U):(q&64||q&128)&&D.process(g,y,T,A,N,L,V,x,U,de)}Q!=null&&N&&So(Q,g&&g.ref,L,y||g,!y)},I=(g,y,T,A)=>{if(g==null)s(y.el=a(y.children),T,A);else{const N=y.el=g.el;y.children!==g.children&&l(N,y.children)}},v=(g,y,T,A)=>{g==null?s(y.el=c(y.children||""),T,A):y.el=g.el},p=(g,y,T,A)=>{[g.el,g.anchor]=m(g.children,y,T,A,g.el,g.anchor)},_=({el:g,anchor:y},T,A)=>{let N;for(;g&&g!==y;)N=f(g),s(g,T,A),g=N;s(y,T,A)},S=({el:g,anchor:y})=>{let T;for(;g&&g!==y;)T=f(g),r(g),g=T;r(y)},E=(g,y,T,A,N,L,V,x,U)=>{V=V||y.type==="svg",g==null?R(y,T,A,N,L,V,x,U):M(g,y,N,L,V,x,U)},R=(g,y,T,A,N,L,V,x)=>{let U,D;const{type:Q,props:q,shapeFlag:X,transition:re,dirs:le}=g;if(U=g.el=o(g.type,L,q&&q.is,q),X&8?u(U,g.children):X&16&&b(g.children,U,null,A,N,L&&Q!=="foreignObject",V,x),le&&Mt(g,null,A,"created"),q){for(const Ee in q)Ee!=="value"&&!Sr(Ee)&&i(U,Ee,null,q[Ee],L,g.children,A,N,H);"value"in q&&i(U,"value",null,q.value),(D=q.onVnodeBeforeMount)&&ht(D,A,g)}C(U,g,g.scopeId,V,A),le&&Mt(g,null,A,"beforeMount");const Te=(!N||N&&!N.pendingBranch)&&re&&!re.persisted;Te&&re.beforeEnter(U),s(U,y,T),((D=q&&q.onVnodeMounted)||Te||le)&&We(()=>{D&&ht(D,A,g),Te&&re.enter(U),le&&Mt(g,null,A,"mounted")},N)},C=(g,y,T,A,N)=>{if(T&&d(g,T),A)for(let L=0;L<A.length;L++)d(g,A[L]);if(N){let L=N.subTree;if(y===L){const V=N.vnode;C(g,V,V.scopeId,V.slotScopeIds,N.parent)}}},b=(g,y,T,A,N,L,V,x,U=0)=>{for(let D=U;D<g.length;D++){const Q=g[D]=x?bn(g[D]):Et(g[D]);w(null,Q,y,T,A,N,L,V,x)}},M=(g,y,T,A,N,L,V)=>{const x=y.el=g.el;let{patchFlag:U,dynamicChildren:D,dirs:Q}=y;U|=g.patchFlag&16;const q=g.props||Se,X=y.props||Se;let re;T&&zn(T,!1),(re=X.onVnodeBeforeUpdate)&&ht(re,T,y,g),Q&&Mt(y,g,T,"beforeUpdate"),T&&zn(T,!0);const le=N&&y.type!=="foreignObject";if(D?B(g.dynamicChildren,D,x,T,A,le,L):V||we(g,y,x,null,T,A,le,L,!1),U>0){if(U&16)W(x,y,q,X,T,A,N);else if(U&2&&q.class!==X.class&&i(x,"class",null,X.class,N),U&4&&i(x,"style",q.style,X.style,N),U&8){const Te=y.dynamicProps;for(let Ee=0;Ee<Te.length;Ee++){const xe=Te[Ee],kt=q[xe],Es=X[xe];(Es!==kt||xe==="value")&&i(x,xe,kt,Es,N,g.children,T,A,H)}}U&1&&g.children!==y.children&&u(x,y.children)}else!V&&D==null&&W(x,y,q,X,T,A,N);((re=X.onVnodeUpdated)||Q)&&We(()=>{re&&ht(re,T,y,g),Q&&Mt(y,g,T,"updated")},A)},B=(g,y,T,A,N,L,V)=>{for(let x=0;x<y.length;x++){const U=g[x],D=y[x],Q=U.el&&(U.type===ft||!Ft(U,D)||U.shapeFlag&70)?h(U.el):T;w(U,D,Q,null,A,N,L,V,!0)}},W=(g,y,T,A,N,L,V)=>{if(T!==A){if(T!==Se)for(const x in T)!Sr(x)&&!(x in A)&&i(g,x,T[x],null,V,y.children,N,L,H);for(const x in A){if(Sr(x))continue;const U=A[x],D=T[x];U!==D&&x!=="value"&&i(g,x,D,U,V,y.children,N,L,H)}"value"in A&&i(g,"value",T.value,A.value)}},F=(g,y,T,A,N,L,V,x,U)=>{const D=y.el=g?g.el:a(""),Q=y.anchor=g?g.anchor:a("");let{patchFlag:q,dynamicChildren:X,slotScopeIds:re}=y;re&&(x=x?x.concat(re):re),g==null?(s(D,T,A),s(Q,T,A),b(y.children,T,Q,N,L,V,x,U)):q>0&&q&64&&X&&g.dynamicChildren?(B(g.dynamicChildren,X,T,N,L,V,x),(y.key!=null||N&&y===N.subTree)&&jp(g,y,!0)):we(g,y,T,Q,N,L,V,x,U)},se=(g,y,T,A,N,L,V,x,U)=>{y.slotScopeIds=x,g==null?y.shapeFlag&512?N.ctx.activate(y,T,A,V,U):j(y,T,A,N,L,V,U):ve(g,y,U)},j=(g,y,T,A,N,L,V)=>{const x=g.component=ww(g,A,N);if(ai(g)&&(x.ctx.renderer=de),Ew(x),x.asyncDep){if(N&&N.registerDep(x,fe),!g.el){const U=x.subTree=De(lt);v(null,U,y,T)}return}fe(x,g,y,T,N,L,V)},ve=(g,y,T)=>{const A=y.component=g.component;if(N_(g,y,T))if(A.asyncDep&&!A.asyncResolved){be(A,y,T);return}else A.next=y,I_(A.update),A.update();else y.el=g.el,A.vnode=y},fe=(g,y,T,A,N,L,V)=>{const x=()=>{if(g.isMounted){let{next:Q,bu:q,u:X,parent:re,vnode:le}=g,Te=Q,Ee;zn(g,!1),Q?(Q.el=le.el,be(g,Q,V)):Q=le,q&&Os(q),(Ee=Q.props&&Q.props.onVnodeBeforeUpdate)&&ht(Ee,re,Q,le),zn(g,!0);const xe=za(g),kt=g.subTree;g.subTree=xe,w(kt,xe,h(kt.el),$(kt),g,N,L),Q.el=xe.el,Te===null&&Wl(g,xe.el),X&&We(X,N),(Ee=Q.props&&Q.props.onVnodeUpdated)&&We(()=>ht(Ee,re,Q,le),N)}else{let Q;const{el:q,props:X}=y,{bm:re,m:le,parent:Te}=g,Ee=os(y);if(zn(g,!1),re&&Os(re),!Ee&&(Q=X&&X.onVnodeBeforeMount)&&ht(Q,Te,y),zn(g,!0),q&&ae){const xe=()=>{g.subTree=za(g),ae(q,g.subTree,g,N,null)};Ee?y.type.__asyncLoader().then(()=>!g.isUnmounted&&xe()):xe()}else{const xe=g.subTree=za(g);w(null,xe,T,A,g,N,L),y.el=xe.el}if(le&&We(le,N),!Ee&&(Q=X&&X.onVnodeMounted)){const xe=y;We(()=>ht(Q,Te,xe),N)}(y.shapeFlag&256||Te&&os(Te.vnode)&&Te.vnode.shapeFlag&256)&&g.a&&We(g.a,N),g.isMounted=!0,y=T=A=null}},U=g.effect=new Fl(x,()=>ia(D),g.scope),D=g.update=()=>U.run();D.id=g.uid,zn(g,!0),D()},be=(g,y,T)=>{y.component=g;const A=g.vnode.props;g.vnode=y,g.next=null,rw(g,y.props,A,T),aw(g,y.children,T),ir(),bh(),or()},we=(g,y,T,A,N,L,V,x,U=!1)=>{const D=g&&g.children,Q=g?g.shapeFlag:0,q=y.children,{patchFlag:X,shapeFlag:re}=y;if(X>0){if(X&128){Wn(D,q,T,A,N,L,V,x,U);return}else if(X&256){Ct(D,q,T,A,N,L,V,x,U);return}}re&8?(Q&16&&H(D,N,L),q!==D&&u(T,q)):Q&16?re&16?Wn(D,q,T,A,N,L,V,x,U):H(D,N,L,!0):(Q&8&&u(T,""),re&16&&b(q,T,A,N,L,V,x,U))},Ct=(g,y,T,A,N,L,V,x,U)=>{g=g||Ns,y=y||Ns;const D=g.length,Q=y.length,q=Math.min(D,Q);let X;for(X=0;X<q;X++){const re=y[X]=U?bn(y[X]):Et(y[X]);w(g[X],re,T,null,N,L,V,x,U)}D>Q?H(g,N,L,!0,!1,q):b(y,T,A,N,L,V,x,U,q)},Wn=(g,y,T,A,N,L,V,x,U)=>{let D=0;const Q=y.length;let q=g.length-1,X=Q-1;for(;D<=q&&D<=X;){const re=g[D],le=y[D]=U?bn(y[D]):Et(y[D]);if(Ft(re,le))w(re,le,T,null,N,L,V,x,U);else break;D++}for(;D<=q&&D<=X;){const re=g[q],le=y[X]=U?bn(y[X]):Et(y[X]);if(Ft(re,le))w(re,le,T,null,N,L,V,x,U);else break;q--,X--}if(D>q){if(D<=X){const re=X+1,le=re<Q?y[re].el:A;for(;D<=X;)w(null,y[D]=U?bn(y[D]):Et(y[D]),T,le,N,L,V,x,U),D++}}else if(D>X)for(;D<=q;)ut(g[D],N,L,!0),D++;else{const re=D,le=D,Te=new Map;for(D=le;D<=X;D++){const pt=y[D]=U?bn(y[D]):Et(y[D]);pt.key!=null&&Te.set(pt.key,D)}let Ee,xe=0;const kt=X-le+1;let Es=!1,hh=0;const pr=new Array(kt);for(D=0;D<kt;D++)pr[D]=0;for(D=re;D<=q;D++){const pt=g[D];if(xe>=kt){ut(pt,N,L,!0);continue}let xt;if(pt.key!=null)xt=Te.get(pt.key);else for(Ee=le;Ee<=X;Ee++)if(pr[Ee-le]===0&&Ft(pt,y[Ee])){xt=Ee;break}xt===void 0?ut(pt,N,L,!0):(pr[xt-le]=D+1,xt>=hh?hh=xt:Es=!0,w(pt,y[xt],T,null,N,L,V,x,U),xe++)}const fh=Es?dw(pr):Ns;for(Ee=fh.length-1,D=kt-1;D>=0;D--){const pt=le+D,xt=y[pt],dh=pt+1<Q?y[pt+1].el:A;pr[D]===0?w(null,xt,T,dh,N,L,V,x,U):Es&&(Ee<0||D!==fh[Ee]?At(xt,T,dh,2):Ee--)}}},At=(g,y,T,A,N=null)=>{const{el:L,type:V,transition:x,children:U,shapeFlag:D}=g;if(D&6){At(g.component.subTree,y,T,A);return}if(D&128){g.suspense.move(y,T,A);return}if(D&64){V.move(g,y,T,de);return}if(V===ft){s(L,y,T);for(let q=0;q<U.length;q++)At(U[q],y,T,A);s(g.anchor,y,T);return}if(V===Ar){_(g,y,T);return}if(A!==2&&D&1&&x)if(A===0)x.beforeEnter(L),s(L,y,T),We(()=>x.enter(L),N);else{const{leave:q,delayLeave:X,afterLeave:re}=x,le=()=>s(L,y,T),Te=()=>{q(L,()=>{le(),re&&re()})};X?X(L,le,Te):Te()}else s(L,y,T)},ut=(g,y,T,A=!1,N=!1)=>{const{type:L,props:V,ref:x,children:U,dynamicChildren:D,shapeFlag:Q,patchFlag:q,dirs:X}=g;if(x!=null&&So(x,null,T,g,!0),Q&256){y.ctx.deactivate(g);return}const re=Q&1&&X,le=!os(g);let Te;if(le&&(Te=V&&V.onVnodeBeforeUnmount)&&ht(Te,y,g),Q&6)k(g.component,T,A);else{if(Q&128){g.suspense.unmount(T,A);return}re&&Mt(g,null,y,"beforeUnmount"),Q&64?g.type.remove(g,y,T,N,de,A):D&&(L!==ft||q>0&&q&64)?H(D,y,T,!1,!0):(L===ft&&q&384||!N&&Q&16)&&H(U,y,T),A&&ws(g)}(le&&(Te=V&&V.onVnodeUnmounted)||re)&&We(()=>{Te&&ht(Te,y,g),re&&Mt(g,null,y,"unmounted")},T)},ws=g=>{const{type:y,el:T,anchor:A,transition:N}=g;if(y===ft){Oi(T,A);return}if(y===Ar){S(g);return}const L=()=>{r(T),N&&!N.persisted&&N.afterLeave&&N.afterLeave()};if(g.shapeFlag&1&&N&&!N.persisted){const{leave:V,delayLeave:x}=N,U=()=>V(T,L);x?x(g.el,L,U):U()}else L()},Oi=(g,y)=>{let T;for(;g!==y;)T=f(g),r(g),g=T;r(y)},k=(g,y,T)=>{const{bum:A,scope:N,update:L,subTree:V,um:x}=g;A&&Os(A),N.stop(),L&&(L.active=!1,ut(V,g,y,T)),x&&We(x,y),We(()=>{g.isUnmounted=!0},y),y&&y.pendingBranch&&!y.isUnmounted&&g.asyncDep&&!g.asyncResolved&&g.suspenseId===y.pendingId&&(y.deps--,y.deps===0&&y.resolve())},H=(g,y,T,A=!1,N=!1,L=0)=>{for(let V=L;V<g.length;V++)ut(g[V],y,T,A,N)},$=g=>g.shapeFlag&6?$(g.component.subTree):g.shapeFlag&128?g.suspense.next():f(g.anchor||g.el),G=(g,y,T)=>{g==null?y._vnode&&ut(y._vnode,null,null,!0):w(y._vnode||null,g,y,null,null,null,T),bh(),Eo(),y._vnode=g},de={p:w,um:ut,m:At,r:ws,mt:j,mc:b,pc:we,pbc:B,n:$,o:t};let Ne,ae;return e&&([Ne,ae]=e(de)),{render:G,hydrate:Ne,createApp:lw(G,Ne)}}function zn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function jp(t,e,n=!1){const s=t.children,r=e.children;if(Z(s)&&Z(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=bn(r[i]),a.el=o.el),n||jp(o,a)),a.type===Hs&&(a.el=o.el)}}function dw(t){const e=t.slice(),n=[0];let s,r,i,o,a;const c=t.length;for(s=0;s<c;s++){const l=t[s];if(l!==0){if(r=n[n.length-1],t[r]<l){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const pw=t=>t.__isTeleport,ft=Symbol(void 0),Hs=Symbol(void 0),lt=Symbol(void 0),Ar=Symbol(void 0),kr=[];let Tt=null;function as(t=!1){kr.push(Tt=t?null:[])}function Hp(){kr.pop(),Tt=kr[kr.length-1]||null}let qs=1;function xh(t){qs+=t}function qp(t){return t.dynamicChildren=qs>0?Tt||Ns:null,Hp(),qs>0&&Tt&&Tt.push(t),t}function N1(t,e,n,s,r,i){return qp(Wp(t,e,n,s,r,i,!0))}function Ms(t,e,n,s,r){return qp(De(t,e,n,s,r,!0))}function Ks(t){return t?t.__v_isVNode===!0:!1}function Ft(t,e){return t.type===e.type&&t.key===e.key}const ua="__vInternal",Kp=({key:t})=>t!=null?t:null,co=({ref:t,ref_key:e,ref_for:n})=>t!=null?Pe(t)||Re(t)||te(t)?{i:Qe,r:t,k:e,f:!!n}:t:null;function Wp(t,e=null,n=null,s=0,r=null,i=t===ft?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Kp(e),ref:e&&co(e),scopeId:aa,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Qe};return a?(Zl(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Pe(n)?8:16),qs>0&&!o&&Tt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Tt.push(c),c}const De=gw;function gw(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===Q_)&&(t=lt),Ks(t)){const a=sn(t,e,!0);return n&&Zl(a,n),qs>0&&!i&&Tt&&(a.shapeFlag&6?Tt[Tt.indexOf(t)]=a:Tt.push(a)),a.patchFlag|=-2,a}if(Sw(t)&&(t=t.__vccOpts),e){e=mw(e);let{class:a,style:c}=e;a&&!Pe(a)&&(e.class=Jo(a)),Ce(c)&&(up(c)&&!Z(c)&&(c=Ye({},c)),e.style=Yo(c))}const o=Pe(t)?1:Ep(t)?128:pw(t)?64:Ce(t)?4:te(t)?2:0;return Wp(t,e,n,s,r,o,i,!0)}function mw(t){return t?up(t)||ua in t?Ye({},t):t:null}function sn(t,e,n=!1){const{props:s,ref:r,patchFlag:i,children:o}=t,a=e?yw(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Kp(a),ref:e&&e.ref?n&&r?Z(r)?r.concat(co(e)):[r,co(e)]:co(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==ft?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&sn(t.ssContent),ssFallback:t.ssFallback&&sn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx}}function zp(t=" ",e=0){return De(Hs,null,t,e)}function D1(t,e){const n=De(Ar,null,t);return n.staticCount=e,n}function O1(t="",e=!1){return e?(as(),Ms(lt,null,t)):De(lt,null,t)}function Et(t){return t==null||typeof t=="boolean"?De(lt):Z(t)?De(ft,null,t.slice()):typeof t=="object"?bn(t):De(Hs,null,String(t))}function bn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:sn(t)}function Zl(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(Z(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),Zl(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(ua in e)?e._ctx=Qe:r===3&&Qe&&(Qe.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else te(e)?(e={default:e,_ctx:Qe},n=32):(e=String(e),s&64?(n=16,e=[zp(e)]):n=8);t.children=e,t.shapeFlag|=n}function yw(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=Jo([e.class,s.class]));else if(r==="style")e.style=Yo([e.style,s.style]);else if(oi(r)){const i=e[r],o=s[r];o&&i!==o&&!(Z(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function ht(t,e,n,s=null){It(t,e,7,[n,s])}const vw=$p();let _w=0;function ww(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||vw,i={uid:_w++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Yd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Mp(s,r),emitsOptions:wp(s,r),emit:null,emitted:null,propsDefaults:Se,inheritAttrs:s.inheritAttrs,ctx:Se,data:Se,props:Se,attrs:Se,slots:Se,refs:Se,setupState:Se,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=C_.bind(null,i),t.ce&&t.ce(i),i}let Fe=null;const fn=()=>Fe||Qe,Fn=t=>{Fe=t,t.scope.on()},On=()=>{Fe&&Fe.scope.off(),Fe=null};function Gp(t){return t.vnode.shapeFlag&4}let Ws=!1;function Ew(t,e=!1){Ws=e;const{props:n,children:s}=t.vnode,r=Gp(t);sw(t,n,r,e),ow(t,s);const i=r?bw(t,e):void 0;return Ws=!1,i}function bw(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=hs(new Proxy(t.ctx,Y_));const{setup:s}=n;if(s){const r=t.setupContext=s.length>1?Iw(t):null;Fn(t),ir();const i=Dn(s,t,0,[t.props,r]);if(or(),On(),Ll(i)){if(i.then(On,On),e)return i.then(o=>{Bc(t,o,e)}).catch(o=>{ar(o,t,0)});t.asyncDep=i}else Bc(t,i,e)}else Qp(t,e)}function Bc(t,e,n){te(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ce(e)&&(t.setupState=pp(e)),Qp(t,n)}let Lh;function Qp(t,e,n){const s=t.type;if(!t.render){if(!e&&Lh&&!s.render){const r=s.template||Yl(t).template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=s,l=Ye(Ye({isCustomElement:i,delimiters:a},o),c);s.render=Lh(r,l)}}t.render=s.render||Nt}Fn(t),ir(),J_(t),or(),On()}function Tw(t){return new Proxy(t.attrs,{get(e,n){return vt(t,"get","$attrs"),e[n]}})}function Iw(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=Tw(t))},slots:t.slots,emit:t.emit,expose:e}}function ha(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(pp(hs(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Cr)return Cr[n](t)},has(e,n){return n in e||n in Cr}}))}function $c(t,e=!0){return te(t)?t.displayName||t.name:t.name||e&&t.__name}function Sw(t){return te(t)&&"__vccOpts"in t}const Ue=(t,e)=>E_(t,e,Ws);function P1(t){const e=fn();let n=t();return On(),Ll(n)&&(n=n.catch(s=>{throw Fn(e),s})),[n,()=>Fn(e)]}function gt(t,e,n){const s=arguments.length;return s===2?Ce(e)&&!Z(e)?Ks(e)?De(t,null,[e]):De(t,e):De(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Ks(n)&&(n=[n]),De(t,e,n))}const Cw=Symbol(""),Aw=()=>St(Cw),kw="3.2.45",Rw="http://www.w3.org/2000/svg",Zn=typeof document<"u"?document:null,Mh=Zn&&Zn.createElement("template"),Nw={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e?Zn.createElementNS(Rw,t):Zn.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>Zn.createTextNode(t),createComment:t=>Zn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Zn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{Mh.innerHTML=s?`<svg>${t}</svg>`:t;const a=Mh.content;if(s){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Dw(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Ow(t,e,n){const s=t.style,r=Pe(n);if(n&&!r){for(const i in n)Vc(s,i,n[i]);if(e&&!Pe(e))for(const i in e)n[i]==null&&Vc(s,i,"")}else{const i=s.display;r?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=i)}}const Uh=/\s*!important$/;function Vc(t,e,n){if(Z(n))n.forEach(s=>Vc(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=Pw(t,e);Uh.test(n)?t.setProperty(rr(s),n.replace(Uh,""),"important"):t[s]=n}}const Fh=["Webkit","Moz","ms"],Za={};function Pw(t,e){const n=Za[e];if(n)return n;let s=qt(e);if(s!=="filter"&&s in t)return Za[e]=s;s=ta(s);for(let r=0;r<Fh.length;r++){const i=Fh[r]+s;if(i in t)return Za[e]=i}return e}const Bh="http://www.w3.org/1999/xlink";function xw(t,e,n,s,r){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Bh,e.slice(6,e.length)):t.setAttributeNS(Bh,e,n);else{const i=Lv(e);n==null||i&&!Wd(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function Lw(t,e,n,s,r,i,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,r,i),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n==null?"":n;(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Wd(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function Ss(t,e,n,s){t.addEventListener(e,n,s)}function Mw(t,e,n,s){t.removeEventListener(e,n,s)}function Uw(t,e,n,s,r=null){const i=t._vei||(t._vei={}),o=i[e];if(s&&o)o.value=s;else{const[a,c]=Fw(e);if(s){const l=i[e]=Vw(s,r);Ss(t,a,l,c)}else o&&(Mw(t,a,o,c),i[e]=void 0)}}const $h=/(?:Once|Passive|Capture)$/;function Fw(t){let e;if($h.test(t)){e={};let s;for(;s=t.match($h);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):rr(t.slice(2)),e]}let ec=0;const Bw=Promise.resolve(),$w=()=>ec||(Bw.then(()=>ec=0),ec=Date.now());function Vw(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;It(jw(s,n.value),e,5,[s])};return n.value=t,n.attached=$w(),n}function jw(t,e){if(Z(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const Vh=/^on[a-z]/,Hw=(t,e,n,s,r=!1,i,o,a,c)=>{e==="class"?Dw(t,s,r):e==="style"?Ow(t,n,s):oi(e)?Ol(e)||Uw(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):qw(t,e,s,r))?Lw(t,e,s,i,o,a,c):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),xw(t,e,s,r))};function qw(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&Vh.test(e)&&te(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Vh.test(e)&&Pe(n)?!1:e in t}const vn="transition",gr="animation",fa=(t,{slots:e})=>gt(Sp,Kw(t),e);fa.displayName="Transition";const Xp={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};fa.props=Ye({},Sp.props,Xp);const Gn=(t,e=[])=>{Z(t)?t.forEach(n=>n(...e)):t&&t(...e)},jh=t=>t?Z(t)?t.some(e=>e.length>1):t.length>1:!1;function Kw(t){const e={};for(const F in t)F in Xp||(e[F]=t[F]);if(t.css===!1)return e;const{name:n="v",type:s,duration:r,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:l=o,appearToClass:u=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:d=`${n}-leave-to`}=t,m=Ww(r),w=m&&m[0],I=m&&m[1],{onBeforeEnter:v,onEnter:p,onEnterCancelled:_,onLeave:S,onLeaveCancelled:E,onBeforeAppear:R=v,onAppear:C=p,onAppearCancelled:b=_}=e,M=(F,se,j)=>{Qn(F,se?u:a),Qn(F,se?l:o),j&&j()},B=(F,se)=>{F._isLeaving=!1,Qn(F,h),Qn(F,d),Qn(F,f),se&&se()},W=F=>(se,j)=>{const ve=F?C:p,fe=()=>M(se,F,j);Gn(ve,[se,fe]),Hh(()=>{Qn(se,F?c:i),_n(se,F?u:a),jh(ve)||qh(se,s,w,fe)})};return Ye(e,{onBeforeEnter(F){Gn(v,[F]),_n(F,i),_n(F,o)},onBeforeAppear(F){Gn(R,[F]),_n(F,c),_n(F,l)},onEnter:W(!1),onAppear:W(!0),onLeave(F,se){F._isLeaving=!0;const j=()=>B(F,se);_n(F,h),Qw(),_n(F,f),Hh(()=>{!F._isLeaving||(Qn(F,h),_n(F,d),jh(S)||qh(F,s,I,j))}),Gn(S,[F,j])},onEnterCancelled(F){M(F,!1),Gn(_,[F])},onAppearCancelled(F){M(F,!0),Gn(b,[F])},onLeaveCancelled(F){B(F),Gn(E,[F])}})}function Ww(t){if(t==null)return null;if(Ce(t))return[tc(t.enter),tc(t.leave)];{const e=tc(t);return[e,e]}}function tc(t){return Vs(t)}function _n(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function Qn(t,e){e.split(/\s+/).forEach(s=>s&&t.classList.remove(s));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function Hh(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let zw=0;function qh(t,e,n,s){const r=t._endId=++zw,i=()=>{r===t._endId&&s()};if(n)return setTimeout(i,n);const{type:o,timeout:a,propCount:c}=Gw(t,e);if(!o)return s();const l=o+"end";let u=0;const h=()=>{t.removeEventListener(l,f),i()},f=d=>{d.target===t&&++u>=c&&h()};setTimeout(()=>{u<c&&h()},a+1),t.addEventListener(l,f)}function Gw(t,e){const n=window.getComputedStyle(t),s=m=>(n[m]||"").split(", "),r=s(`${vn}Delay`),i=s(`${vn}Duration`),o=Kh(r,i),a=s(`${gr}Delay`),c=s(`${gr}Duration`),l=Kh(a,c);let u=null,h=0,f=0;e===vn?o>0&&(u=vn,h=o,f=i.length):e===gr?l>0&&(u=gr,h=l,f=c.length):(h=Math.max(o,l),u=h>0?o>l?vn:gr:null,f=u?u===vn?i.length:c.length:0);const d=u===vn&&/\b(transform|all)(,|$)/.test(s(`${vn}Property`).toString());return{type:u,timeout:h,propCount:f,hasTransform:d}}function Kh(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,s)=>Wh(n)+Wh(t[s])))}function Wh(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function Qw(){return document.body.offsetHeight}const zh=t=>{const e=t.props["onUpdate:modelValue"]||!1;return Z(e)?n=>Os(e,n):e};function Xw(t){t.target.composing=!0}function Gh(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const x1={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t._assign=zh(r);const i=s||r.props&&r.props.type==="number";Ss(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Vs(a)),t._assign(a)}),n&&Ss(t,"change",()=>{t.value=t.value.trim()}),e||(Ss(t,"compositionstart",Xw),Ss(t,"compositionend",Gh),Ss(t,"change",Gh))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:r}},i){if(t._assign=zh(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(r||t.type==="number")&&Vs(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},Yp=Ye({patchProp:Hw},Nw);let Rr,Qh=!1;function Yw(){return Rr||(Rr=hw(Yp))}function Jw(){return Rr=Qh?Rr:fw(Yp),Qh=!0,Rr}const Zw=(...t)=>{const e=Yw().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=Jp(s);if(!r)return;const i=e._component;!te(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e},eE=(...t)=>{const e=Jw().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=Jp(s);if(r)return n(r,!0,r instanceof SVGElement)},e};function Jp(t){return Pe(t)?document.querySelector(t):t}const tE=/"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,nE=/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,sE=/^["[{]|^-?\d[\d.]{0,14}$/;function rE(t,e){if(!(t==="__proto__"||t==="constructor"))return e}function iE(t,e={}){if(typeof t!="string")return t;const n=t.toLowerCase();if(n==="true")return!0;if(n==="false")return!1;if(n==="null")return null;if(n==="nan")return Number.NaN;if(n==="infinity")return Number.POSITIVE_INFINITY;if(n!=="undefined"){if(!sE.test(t)){if(e.strict)throw new SyntaxError("Invalid JSON");return t}try{return tE.test(t)||nE.test(t)?JSON.parse(t,rE):JSON.parse(t)}catch(s){if(e.strict)throw s;return t}}}const oE=/#/g,aE=/&/g,cE=/=/g,Zp=/\+/g,lE=/%5B/gi,uE=/%5D/gi,hE=/%5E/gi,fE=/%60/gi,dE=/%7B/gi,pE=/%7C/gi,gE=/%7D/gi,mE=/%20/gi;function yE(t){return encodeURI(""+t).replace(pE,"|").replace(lE,"[").replace(uE,"]")}function jc(t){return yE(t).replace(Zp,"%2B").replace(mE,"+").replace(oE,"%23").replace(aE,"%26").replace(fE,"`").replace(dE,"{").replace(gE,"}").replace(hE,"^")}function nc(t){return jc(t).replace(cE,"%3D")}function eg(t=""){try{return decodeURIComponent(""+t)}catch{return""+t}}function vE(t){return eg(t.replace(Zp," "))}function _E(t=""){const e={};t[0]==="?"&&(t=t.substr(1));for(const n of t.split("&")){const s=n.match(/([^=]+)=?(.*)/)||[];if(s.length<2)continue;const r=eg(s[1]);if(r==="__proto__"||r==="constructor")continue;const i=vE(s[2]||"");e[r]?Array.isArray(e[r])?e[r].push(i):e[r]=[e[r],i]:e[r]=i}return e}function wE(t,e){return(typeof e=="number"||typeof e=="boolean")&&(e=String(e)),e?Array.isArray(e)?e.map(n=>`${nc(t)}=${jc(n)}`).join("&"):`${nc(t)}=${jc(e)}`:nc(t)}function EE(t){return Object.keys(t).map(e=>wE(e,t[e])).join("&")}const bE=/^\w+:(\/\/)?/,TE=/^\/\/[^/]+/;function tg(t,e=!1){return bE.test(t)||e&&TE.test(t)}const IE=/\/$|\/\?/;function Hc(t="",e=!1){return e?IE.test(t):t.endsWith("/")}function SE(t="",e=!1){if(!e)return(Hc(t)?t.slice(0,-1):t)||"/";if(!Hc(t,!0))return t||"/";const[n,...s]=t.split("?");return(n.slice(0,-1)||"/")+(s.length?`?${s.join("?")}`:"")}function CE(t="",e=!1){if(!e)return t.endsWith("/")?t:t+"/";if(Hc(t,!0))return t||"/";const[n,...s]=t.split("?");return n+"/"+(s.length?`?${s.join("?")}`:"")}function AE(t=""){return t.startsWith("/")}function kE(t=""){return(AE(t)?t.substr(1):t)||"/"}function RE(t,e){if(DE(e)||tg(t))return t;const n=SE(e);return t.startsWith(n)?t:PE(n,t)}function NE(t,e){const n=ng(t),s={..._E(n.search),...e};return n.search=EE(s),xE(n)}function DE(t){return!t||t==="/"}function OE(t){return t&&t!=="/"}function PE(t,...e){let n=t||"";for(const s of e.filter(OE))n=n?CE(n)+kE(s):s;return n}function ng(t="",e){if(!tg(t,!0))return e?ng(e+t):Xh(t);const[n="",s,r=""]=(t.replace(/\\/g,"/").match(/([^:/]+:)?\/\/([^/@]+@)?(.*)/)||[]).splice(1),[i="",o=""]=(r.match(/([^/?#]*)(.*)?/)||[]).splice(1),{pathname:a,search:c,hash:l}=Xh(o);return{protocol:n,auth:s?s.substr(0,s.length-1):"",host:i,pathname:a,search:c,hash:l}}function Xh(t=""){const[e="",n="",s=""]=(t.match(/([^#?]*)(\?[^#]*)?(#.*)?/)||[]).splice(1);return{pathname:e,search:n,hash:s}}function xE(t){const e=t.pathname+(t.search?(t.search.startsWith("?")?"":"?")+t.search:"")+t.hash;return t.protocol?t.protocol+"//"+(t.auth?t.auth+"@":"")+t.host+e:e}class LE extends Error{constructor(){super(...arguments),this.name="FetchError"}}function ME(t,e,n){let s="";t&&n&&(s=`${n.status} ${n.statusText} (${t.toString()})`),e&&(s=`${e.message} (${s})`);const r=new LE(s);return Object.defineProperty(r,"request",{get(){return t}}),Object.defineProperty(r,"response",{get(){return n}}),Object.defineProperty(r,"data",{get(){return n&&n._data}}),Object.defineProperty(r,"status",{get(){return n&&n.status}}),Object.defineProperty(r,"statusText",{get(){return n&&n.statusText}}),Object.defineProperty(r,"statusCode",{get(){return n&&n.status}}),Object.defineProperty(r,"statusMessage",{get(){return n&&n.statusText}}),r}const UE=new Set(Object.freeze(["PATCH","POST","PUT","DELETE"]));function Yh(t="GET"){return UE.has(t.toUpperCase())}function FE(t){if(t===void 0)return!1;const e=typeof t;return e==="string"||e==="number"||e==="boolean"||e===null?!0:e!=="object"?!1:Array.isArray(t)?!0:t.constructor&&t.constructor.name==="Object"||typeof t.toJSON=="function"}const BE=new Set(["image/svg","application/xml","application/xhtml","application/html"]),$E=/^application\/(?:[\w!#$%&*`\-.^~]*\+)?json(;.+)?$/i;function VE(t=""){if(!t)return"json";const e=t.split(";").shift();return $E.test(e)?"json":BE.has(e)||e.startsWith("text/")?"text":"blob"}const jE=new Set([408,409,425,429,500,502,503,504]);function sg(t){const{fetch:e,Headers:n}=t;function s(o){const a=o.error&&o.error.name==="AbortError"||!1;if(o.options.retry!==!1&&!a){const l=typeof o.options.retry=="number"?o.options.retry:Yh(o.options.method)?0:1,u=o.response&&o.response.status||500;if(l>0&&jE.has(u))return r(o.request,{...o.options,retry:l-1})}const c=ME(o.request,o.error,o.response);throw Error.captureStackTrace&&Error.captureStackTrace(c,r),c}const r=async function(a,c={}){const l={request:a,options:{...t.defaults,...c},response:void 0,error:void 0};l.options.onRequest&&await l.options.onRequest(l),typeof l.request=="string"&&(l.options.baseURL&&(l.request=RE(l.request,l.options.baseURL)),(l.options.query||l.options.params)&&(l.request=NE(l.request,{...l.options.params,...l.options.query})),l.options.body&&Yh(l.options.method)&&FE(l.options.body)&&(l.options.body=typeof l.options.body=="string"?l.options.body:JSON.stringify(l.options.body),l.options.headers=new n(l.options.headers),l.options.headers.has("content-type")||l.options.headers.set("content-type","application/json"),l.options.headers.has("accept")||l.options.headers.set("accept","application/json"))),l.response=await e(l.request,l.options).catch(async h=>(l.error=h,l.options.onRequestError&&await l.options.onRequestError(l),s(l)));const u=(l.options.parseResponse?"json":l.options.responseType)||VE(l.response.headers.get("content-type")||"");if(u==="json"){const h=await l.response.text(),f=l.options.parseResponse||iE;l.response._data=f(h)}else u==="stream"?l.response._data=l.response.body:l.response._data=await l.response[u]();return l.options.onResponse&&await l.options.onResponse(l),l.response.status>=400&&l.response.status<600?(l.options.onResponseError&&await l.options.onResponseError(l),s(l)):l.response},i=function(a,c){return r(a,c).then(l=>l._data)};return i.raw=r,i.create=(o={})=>sg({...t,defaults:{...t.defaults,...o}}),i}const rg=function(){if(typeof globalThis<"u")return globalThis;if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")}(),HE=rg.fetch||(()=>Promise.reject(new Error("[ohmyfetch] global.fetch is not supported!"))),qE=rg.Headers,KE=sg({fetch:HE,Headers:qE}),WE=/\/$|\/\?/;function zE(t="",e=!1){return e?WE.test(t):t.endsWith("/")}function GE(t="",e=!1){if(!e)return t.endsWith("/")?t:t+"/";if(zE(t,!0))return t||"/";const[n,...s]=t.split("?");return n+"/"+(s.length>0?`?${s.join("?")}`:"")}function QE(t=""){return t.startsWith("/")}function XE(t=""){return(QE(t)?t.slice(1):t)||"/"}function YE(t){return t&&t!=="/"}function ig(t,...e){let n=t||"";for(const s of e.filter(r=>YE(r)))n=n?GE(n)+XE(s):s;return n}const JE=()=>{var t;return((t=window==null?void 0:window.__NUXT__)==null?void 0:t.config)||{}},Co=JE().app,ZE=()=>Co.baseURL,e0=()=>Co.buildAssetsDir,t0=(...t)=>ig(og(),e0(),...t),og=(...t)=>{const e=Co.cdnURL||Co.baseURL;return t.length?ig(e,...t):e};globalThis.__buildAssetsURL=t0;globalThis.__publicAssetsURL=og;function qc(t,e={},n){for(const s in t){const r=t[s],i=n?`${n}:${s}`:s;typeof r=="object"&&r!==null?qc(r,e,i):typeof r=="function"&&(e[i]=r)}return e}function n0(t,e){return t.reduce((n,s)=>n.then(()=>s.apply(void 0,e)),Promise.resolve())}function s0(t,e){return Promise.all(t.map(n=>n.apply(void 0,e)))}function sc(t,e){for(const n of t)n(e)}class r0{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(e,n,s={}){if(!e||typeof n!="function")return()=>{};const r=e;let i;for(;this._deprecatedHooks[e];)i=this._deprecatedHooks[e],e=i.to;if(i&&!s.allowDeprecated){let o=i.message;o||(o=`${r} hook has been deprecated`+(i.to?`, please use ${i.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(o)||(console.warn(o),this._deprecatedMessages.add(o))}return this._hooks[e]=this._hooks[e]||[],this._hooks[e].push(n),()=>{n&&(this.removeHook(e,n),n=void 0)}}hookOnce(e,n){let s,r=(...i)=>(typeof s=="function"&&s(),s=void 0,r=void 0,n(...i));return s=this.hook(e,r),s}removeHook(e,n){if(this._hooks[e]){const s=this._hooks[e].indexOf(n);s!==-1&&this._hooks[e].splice(s,1),this._hooks[e].length===0&&delete this._hooks[e]}}deprecateHook(e,n){this._deprecatedHooks[e]=typeof n=="string"?{to:n}:n;const s=this._hooks[e]||[];this._hooks[e]=void 0;for(const r of s)this.hook(e,r)}deprecateHooks(e){Object.assign(this._deprecatedHooks,e);for(const n in e)this.deprecateHook(n,e[n])}addHooks(e){const n=qc(e),s=Object.keys(n).map(r=>this.hook(r,n[r]));return()=>{for(const r of s.splice(0,s.length))r()}}removeHooks(e){const n=qc(e);for(const s in n)this.removeHook(s,n[s])}callHook(e,...n){return this.callHookWith(n0,e,...n)}callHookParallel(e,...n){return this.callHookWith(s0,e,...n)}callHookWith(e,n,...s){const r=this._before||this._after?{name:n,args:s,context:{}}:void 0;this._before&&sc(this._before,r);const i=e(this._hooks[n]||[],s);return i instanceof Promise?i.finally(()=>{this._after&&r&&sc(this._after,r)}):(this._after&&r&&sc(this._after,r),i)}beforeEach(e){return this._before=this._before||[],this._before.push(e),()=>{const n=this._before.indexOf(e);n!==-1&&this._before.splice(n,1)}}afterEach(e){return this._after=this._after||[],this._after.push(e),()=>{const n=this._after.indexOf(e);n!==-1&&this._after.splice(n,1)}}}function i0(){return new r0}function o0(){let t,e=!1;const n=s=>{if(t&&t!==s)throw new Error("Context conflict")};return{use:()=>{if(t===void 0)throw new Error("Context is not available");return t},tryUse:()=>t,set:(s,r)=>{r||n(s),t=s,e=!0},unset:()=>{t=void 0,e=!1},call:(s,r)=>{n(s),t=s;try{return r()}finally{e||(t=void 0)}},async callAsync(s,r){t=s;const i=()=>{t=s},o=()=>t===s?i:void 0;Kc.add(o);try{const a=r();return e||(t=void 0),await a}finally{Kc.delete(o)}}}}function a0(){const t={};return{get(e){return t[e]||(t[e]=o0()),t[e],t[e]}}}const Ao=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof global<"u"?global:typeof window<"u"?window:{},Jh="__unctx__",c0=Ao[Jh]||(Ao[Jh]=a0()),l0=t=>c0.get(t),Zh="__unctx_async_handlers__",Kc=Ao[Zh]||(Ao[Zh]=new Set);function u0(t){const e=[];for(const r of Kc){const i=r();i&&e.push(i)}const n=()=>{for(const r of e)r()};let s=t();return"catch"in s&&(s=s.catch(r=>{throw n(),r})),[s,n]}const ag=l0("nuxt-app"),h0="__nuxt_plugin";function f0(t){const e={provide:void 0,globalName:"nuxt",payload:Dt({data:{},state:{},_errors:{},...window.__NUXT__}),isHydrating:!0,_asyncDataPromises:{},_asyncData:{},...t};e.hooks=i0(),e.hook=e.hooks.hook,e.callHook=e.hooks.callHook,e.provide=(r,i)=>{const o="$"+r;Vi(e,o,i),Vi(e.vueApp.config.globalProperties,o,i)},Vi(e.vueApp,"$nuxt",e),Vi(e.vueApp.config.globalProperties,"$nuxt",e);const n=Dt(e.payload.config),s=new Proxy(n,{get(r,i){var o;return i==="public"?r.public:(o=r[i])!=null?o:r.public[i]},set(r,i,o){return i==="public"||i==="app"?!1:(r[i]=o,r.public[i]=o,!0)}});return e.provide("config",s),e}async function d0(t,e){if(typeof e!="function")return;const{provide:n}=await Tn(t,e,[t])||{};if(n&&typeof n=="object")for(const s in n)t.provide(s,n[s])}async function p0(t,e){for(const n of e)await d0(t,n)}function g0(t){return t.map(n=>typeof n!="function"?null:n.length>1?s=>n(s,s.provide):n).filter(Boolean)}function dn(t){return t[h0]=!0,t}function Tn(t,e,n){const s=()=>n?e(...n):e();return ag.set(t),s()}function He(){const t=ag.tryUse();if(!t){const e=fn();if(!e)throw new Error("nuxt instance unavailable");return e.appContext.app.$nuxt}return t}function cg(){return He().$config}function Vi(t,e,n){Object.defineProperty(t,e,{get:()=>n})}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Cs=typeof window<"u";function m0(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const _e=Object.assign;function rc(t,e){const n={};for(const s in e){const r=e[s];n[s]=Ot(r)?r.map(t):t(r)}return n}const Nr=()=>{},Ot=Array.isArray,y0=/\/$/,v0=t=>t.replace(y0,"");function ic(t,e,n="/"){let s,r={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(s=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),r=t(i)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=b0(s!=null?s:e,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:o}}function _0(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function ef(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function w0(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&zs(e.matched[s],n.matched[r])&&lg(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function zs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function lg(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!E0(t[n],e[n]))return!1;return!0}function E0(t,e){return Ot(t)?tf(t,e):Ot(e)?tf(e,t):t===e}function tf(t,e){return Ot(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function b0(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let r=n.length-1,i,o;for(i=0;i<s.length;i++)if(o=s[i],o!==".")if(o==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(i-(i===s.length?1:0)).join("/")}var qr;(function(t){t.pop="pop",t.push="push"})(qr||(qr={}));var Dr;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Dr||(Dr={}));function T0(t){if(!t)if(Cs){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),v0(t)}const I0=/^[^#]+#/;function S0(t,e){return t.replace(I0,"#")+e}function C0(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const da=()=>({left:window.pageXOffset,top:window.pageYOffset});function A0(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=C0(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function nf(t,e){return(history.state?history.state.position-e:-1)+t}const Wc=new Map;function k0(t,e){Wc.set(t,e)}function R0(t){const e=Wc.get(t);return Wc.delete(t),e}let N0=()=>location.protocol+"//"+location.host;function ug(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let a=r.includes(t.slice(i))?t.slice(i).length:1,c=r.slice(a);return c[0]!=="/"&&(c="/"+c),ef(c,"")}return ef(n,t)+s+r}function D0(t,e,n,s){let r=[],i=[],o=null;const a=({state:f})=>{const d=ug(t,location),m=n.value,w=e.value;let I=0;if(f){if(n.value=d,e.value=f,o&&o===m){o=null;return}I=w?f.position-w.position:0}else s(d);r.forEach(v=>{v(n.value,m,{delta:I,type:qr.pop,direction:I?I>0?Dr.forward:Dr.back:Dr.unknown})})};function c(){o=n.value}function l(f){r.push(f);const d=()=>{const m=r.indexOf(f);m>-1&&r.splice(m,1)};return i.push(d),d}function u(){const{history:f}=window;!f.state||f.replaceState(_e({},f.state,{scroll:da()}),"")}function h(){for(const f of i)f();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:l,destroy:h}}function sf(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?da():null}}function O0(t){const{history:e,location:n}=window,s={value:ug(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:N0()+t+c;try{e[u?"replaceState":"pushState"](l,"",f),r.value=l}catch(d){console.error(d),n[u?"replace":"assign"](f)}}function o(c,l){const u=_e({},e.state,sf(r.value.back,c,r.value.forward,!0),l,{position:r.value.position});i(c,u,!0),s.value=c}function a(c,l){const u=_e({},r.value,e.state,{forward:c,scroll:da()});i(u.current,u,!0);const h=_e({},sf(s.value,c,null),{position:u.position+1},l);i(c,h,!1),s.value=c}return{location:s,state:r,push:a,replace:o}}function hg(t){t=T0(t);const e=O0(t),n=D0(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=_e({location:"",base:t,go:s,createHref:S0.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function P0(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),hg(t)}function x0(t){return typeof t=="string"||t&&typeof t=="object"}function fg(t){return typeof t=="string"||typeof t=="symbol"}const wn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},dg=Symbol("");var rf;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(rf||(rf={}));function Gs(t,e){return _e(new Error,{type:t,[dg]:!0},e)}function Wt(t,e){return t instanceof Error&&dg in t&&(e==null||!!(t.type&e))}const of="[^/]+?",L0={sensitive:!1,strict:!1,start:!0,end:!0},M0=/[.+*?^${}()[\]/\\]/g;function U0(t,e){const n=_e({},L0,e),s=[];let r=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(r+="/");for(let h=0;h<l.length;h++){const f=l[h];let d=40+(n.sensitive?.25:0);if(f.type===0)h||(r+="/"),r+=f.value.replace(M0,"\\$&"),d+=40;else if(f.type===1){const{value:m,repeatable:w,optional:I,regexp:v}=f;i.push({name:m,repeatable:w,optional:I});const p=v||of;if(p!==of){d+=10;try{new RegExp(`(${p})`)}catch(S){throw new Error(`Invalid custom RegExp for param "${m}" (${p}): `+S.message)}}let _=w?`((?:${p})(?:/(?:${p}))*)`:`(${p})`;h||(_=I&&l.length<2?`(?:/${_})`:"/"+_),I&&(_+="?"),r+=_,d+=20,I&&(d+=-8),w&&(d+=-20),p===".*"&&(d+=-50)}u.push(d)}s.push(u)}if(n.strict&&n.end){const l=s.length-1;s[l][s[l].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const d=u[f]||"",m=i[f-1];h[m.name]=d&&m.repeatable?d.split("/"):d}return h}function c(l){let u="",h=!1;for(const f of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const d of f)if(d.type===0)u+=d.value;else if(d.type===1){const{value:m,repeatable:w,optional:I}=d,v=m in l?l[m]:"";if(Ot(v)&&!w)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const p=Ot(v)?v.join("/"):v;if(!p)if(I)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${m}"`);u+=p}}return u||"/"}return{re:o,score:s,keys:i,parse:a,stringify:c}}function F0(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function B0(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=F0(s[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-s.length)===1){if(af(s))return 1;if(af(r))return-1}return r.length-s.length}function af(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const $0={type:0,value:""},V0=/[a-zA-Z0-9_]/;function j0(t){if(!t)return[[]];if(t==="/")return[[$0]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(d){throw new Error(`ERR (${n})/"${l}": ${d}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,c,l="",u="";function h(){!l||(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function f(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):f();break;case 4:f(),n=s;break;case 1:c==="("?n=2:V0.test(c)?f():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),r}function H0(t,e,n){const s=U0(j0(t.path),n),r=_e(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function q0(t,e){const n=[],s=new Map;e=uf({strict:!1,end:!0,sensitive:!1},e);function r(u){return s.get(u)}function i(u,h,f){const d=!f,m=K0(u);m.aliasOf=f&&f.record;const w=uf(e,u),I=[m];if("alias"in u){const _=typeof u.alias=="string"?[u.alias]:u.alias;for(const S of _)I.push(_e({},m,{components:f?f.record.components:m.components,path:S,aliasOf:f?f.record:m}))}let v,p;for(const _ of I){const{path:S}=_;if(h&&S[0]!=="/"){const E=h.record.path,R=E[E.length-1]==="/"?"":"/";_.path=h.record.path+(S&&R+S)}if(v=H0(_,h,w),f?f.alias.push(v):(p=p||v,p!==v&&p.alias.push(v),d&&u.name&&!lf(v)&&o(u.name)),m.children){const E=m.children;for(let R=0;R<E.length;R++)i(E[R],v,f&&f.children[R])}f=f||v,(v.record.components&&Object.keys(v.record.components).length||v.record.name||v.record.redirect)&&c(v)}return p?()=>{o(p)}:Nr}function o(u){if(fg(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&B0(u,n[h])>=0&&(u.record.path!==n[h].record.path||!pg(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!lf(u)&&s.set(u.record.name,u)}function l(u,h){let f,d={},m,w;if("name"in u&&u.name){if(f=s.get(u.name),!f)throw Gs(1,{location:u});w=f.record.name,d=_e(cf(h.params,f.keys.filter(p=>!p.optional).map(p=>p.name)),u.params&&cf(u.params,f.keys.map(p=>p.name))),m=f.stringify(d)}else if("path"in u)m=u.path,f=n.find(p=>p.re.test(m)),f&&(d=f.parse(m),w=f.record.name);else{if(f=h.name?s.get(h.name):n.find(p=>p.re.test(h.path)),!f)throw Gs(1,{location:u,currentLocation:h});w=f.record.name,d=_e({},h.params,u.params),m=f.stringify(d)}const I=[];let v=f;for(;v;)I.unshift(v.record),v=v.parent;return{name:w,path:m,params:d,matched:I,meta:z0(I)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function cf(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function K0(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:W0(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function W0(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function lf(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function z0(t){return t.reduce((e,n)=>_e(e,n.meta),{})}function uf(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function pg(t,e){return e.children.some(n=>n===t||pg(t,n))}const gg=/#/g,G0=/&/g,Q0=/\//g,X0=/=/g,Y0=/\?/g,mg=/\+/g,J0=/%5B/g,Z0=/%5D/g,yg=/%5E/g,eb=/%60/g,vg=/%7B/g,tb=/%7C/g,_g=/%7D/g,nb=/%20/g;function eu(t){return encodeURI(""+t).replace(tb,"|").replace(J0,"[").replace(Z0,"]")}function sb(t){return eu(t).replace(vg,"{").replace(_g,"}").replace(yg,"^")}function zc(t){return eu(t).replace(mg,"%2B").replace(nb,"+").replace(gg,"%23").replace(G0,"%26").replace(eb,"`").replace(vg,"{").replace(_g,"}").replace(yg,"^")}function rb(t){return zc(t).replace(X0,"%3D")}function ib(t){return eu(t).replace(gg,"%23").replace(Y0,"%3F")}function ob(t){return t==null?"":ib(t).replace(Q0,"%2F")}function ko(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function ab(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(mg," "),o=i.indexOf("="),a=ko(o<0?i:i.slice(0,o)),c=o<0?null:ko(i.slice(o+1));if(a in e){let l=e[a];Ot(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function hf(t){let e="";for(let n in t){const s=t[n];if(n=rb(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Ot(s)?s.map(i=>i&&zc(i)):[s&&zc(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function cb(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Ot(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}const lb=Symbol(""),ff=Symbol(""),tu=Symbol(""),wg=Symbol(""),Gc=Symbol("");function mr(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function In(t,e,n,s,r){const i=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(Gs(4,{from:n,to:e})):h instanceof Error?a(h):x0(h)?a(Gs(2,{from:e,to:h})):(i&&s.enterCallbacks[r]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(s&&s.instances[r],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function oc(t,e,n,s){const r=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(ub(a)){const l=(a.__vccOpts||a)[e];l&&r.push(In(l,n,s,i,o))}else{let c=a();r.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=m0(l)?l.default:l;i.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&In(f,n,s,i,o)()}))}}return r}function ub(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function df(t){const e=St(tu),n=St(wg),s=Ue(()=>e.resolve(mt(t.to))),r=Ue(()=>{const{matched:c}=s.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const f=h.findIndex(zs.bind(null,u));if(f>-1)return f;const d=pf(c[l-2]);return l>1&&pf(u)===d&&h[h.length-1].path!==d?h.findIndex(zs.bind(null,c[l-2])):f}),i=Ue(()=>r.value>-1&&pb(n.params,s.value.params)),o=Ue(()=>r.value>-1&&r.value===n.matched.length-1&&lg(n.params,s.value.params));function a(c={}){return db(c)?e[mt(t.replace)?"replace":"push"](mt(t.to)).catch(Nr):Promise.resolve()}return{route:s,href:Ue(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}const hb=Ke({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:df,setup(t,{slots:e}){const n=Dt(df(t)),{options:s}=St(tu),r=Ue(()=>({[gf(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[gf(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:gt("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),fb=hb;function db(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function pb(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!Ot(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function pf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const gf=(t,e,n)=>t!=null?t:e!=null?e:n,gb=Ke({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=St(Gc),r=Ue(()=>t.route||s.value),i=St(ff,0),o=Ue(()=>{let l=mt(i);const{matched:u}=r.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=Ue(()=>r.value.matched[o.value]);is(ff,Ue(()=>o.value+1)),is(lb,a),is(Gc,r);const c=Zt();return Ls(()=>[c.value,a.value,t.name],([l,u,h],[f,d,m])=>{u&&(u.instances[h]=l,d&&d!==u&&l&&l===f&&(u.leaveGuards.size||(u.leaveGuards=d.leaveGuards),u.updateGuards.size||(u.updateGuards=d.updateGuards))),l&&u&&(!d||!zs(u,d)||!f)&&(u.enterCallbacks[h]||[]).forEach(w=>w(l))},{flush:"post"}),()=>{const l=r.value,u=t.name,h=a.value,f=h&&h.components[u];if(!f)return mf(n.default,{Component:f,route:l});const d=h.props[u],m=d?d===!0?l.params:typeof d=="function"?d(l):d:null,I=gt(f,_e({},m,e,{onVnodeUnmounted:v=>{v.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return mf(n.default,{Component:I,route:l})||I}}});function mf(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Eg=gb;function mb(t){const e=q0(t.routes,t),n=t.parseQuery||ab,s=t.stringifyQuery||hf,r=t.history,i=mr(),o=mr(),a=mr(),c=wo(wn);let l=wn;Cs&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=rc.bind(null,k=>""+k),h=rc.bind(null,ob),f=rc.bind(null,ko);function d(k,H){let $,G;return fg(k)?($=e.getRecordMatcher(k),G=H):G=k,e.addRoute(G,$)}function m(k){const H=e.getRecordMatcher(k);H&&e.removeRoute(H)}function w(){return e.getRoutes().map(k=>k.record)}function I(k){return!!e.getRecordMatcher(k)}function v(k,H){if(H=_e({},H||c.value),typeof k=="string"){const g=ic(n,k,H.path),y=e.resolve({path:g.path},H),T=r.createHref(g.fullPath);return _e(g,y,{params:f(y.params),hash:ko(g.hash),redirectedFrom:void 0,href:T})}let $;if("path"in k)$=_e({},k,{path:ic(n,k.path,H.path).path});else{const g=_e({},k.params);for(const y in g)g[y]==null&&delete g[y];$=_e({},k,{params:h(k.params)}),H.params=h(H.params)}const G=e.resolve($,H),de=k.hash||"";G.params=u(f(G.params));const Ne=_0(s,_e({},k,{hash:sb(de),path:G.path})),ae=r.createHref(Ne);return _e({fullPath:Ne,hash:de,query:s===hf?cb(k.query):k.query||{}},G,{redirectedFrom:void 0,href:ae})}function p(k){return typeof k=="string"?ic(n,k,c.value.path):_e({},k)}function _(k,H){if(l!==k)return Gs(8,{from:H,to:k})}function S(k){return C(k)}function E(k){return S(_e(p(k),{replace:!0}))}function R(k){const H=k.matched[k.matched.length-1];if(H&&H.redirect){const{redirect:$}=H;let G=typeof $=="function"?$(k):$;return typeof G=="string"&&(G=G.includes("?")||G.includes("#")?G=p(G):{path:G},G.params={}),_e({query:k.query,hash:k.hash,params:"path"in G?{}:k.params},G)}}function C(k,H){const $=l=v(k),G=c.value,de=k.state,Ne=k.force,ae=k.replace===!0,g=R($);if(g)return C(_e(p(g),{state:typeof g=="object"?_e({},de,g.state):de,force:Ne,replace:ae}),H||$);const y=$;y.redirectedFrom=H;let T;return!Ne&&w0(s,G,$)&&(T=Gs(16,{to:y,from:G}),Wn(G,G,!0,!1)),(T?Promise.resolve(T):M(y,G)).catch(A=>Wt(A)?Wt(A,2)?A:Ct(A):be(A,y,G)).then(A=>{if(A){if(Wt(A,2))return C(_e({replace:ae},p(A.to),{state:typeof A.to=="object"?_e({},de,A.to.state):de,force:Ne}),H||y)}else A=W(y,G,!0,ae,de);return B(y,G,A),A})}function b(k,H){const $=_(k,H);return $?Promise.reject($):Promise.resolve()}function M(k,H){let $;const[G,de,Ne]=yb(k,H);$=oc(G.reverse(),"beforeRouteLeave",k,H);for(const g of G)g.leaveGuards.forEach(y=>{$.push(In(y,k,H))});const ae=b.bind(null,k,H);return $.push(ae),bs($).then(()=>{$=[];for(const g of i.list())$.push(In(g,k,H));return $.push(ae),bs($)}).then(()=>{$=oc(de,"beforeRouteUpdate",k,H);for(const g of de)g.updateGuards.forEach(y=>{$.push(In(y,k,H))});return $.push(ae),bs($)}).then(()=>{$=[];for(const g of k.matched)if(g.beforeEnter&&!H.matched.includes(g))if(Ot(g.beforeEnter))for(const y of g.beforeEnter)$.push(In(y,k,H));else $.push(In(g.beforeEnter,k,H));return $.push(ae),bs($)}).then(()=>(k.matched.forEach(g=>g.enterCallbacks={}),$=oc(Ne,"beforeRouteEnter",k,H),$.push(ae),bs($))).then(()=>{$=[];for(const g of o.list())$.push(In(g,k,H));return $.push(ae),bs($)}).catch(g=>Wt(g,8)?g:Promise.reject(g))}function B(k,H,$){for(const G of a.list())G(k,H,$)}function W(k,H,$,G,de){const Ne=_(k,H);if(Ne)return Ne;const ae=H===wn,g=Cs?history.state:{};$&&(G||ae?r.replace(k.fullPath,_e({scroll:ae&&g&&g.scroll},de)):r.push(k.fullPath,de)),c.value=k,Wn(k,H,$,ae),Ct()}let F;function se(){F||(F=r.listen((k,H,$)=>{if(!Oi.listening)return;const G=v(k),de=R(G);if(de){C(_e(de,{replace:!0}),G).catch(Nr);return}l=G;const Ne=c.value;Cs&&k0(nf(Ne.fullPath,$.delta),da()),M(G,Ne).catch(ae=>Wt(ae,12)?ae:Wt(ae,2)?(C(ae.to,G).then(g=>{Wt(g,20)&&!$.delta&&$.type===qr.pop&&r.go(-1,!1)}).catch(Nr),Promise.reject()):($.delta&&r.go(-$.delta,!1),be(ae,G,Ne))).then(ae=>{ae=ae||W(G,Ne,!1),ae&&($.delta&&!Wt(ae,8)?r.go(-$.delta,!1):$.type===qr.pop&&Wt(ae,20)&&r.go(-1,!1)),B(G,Ne,ae)}).catch(Nr)}))}let j=mr(),ve=mr(),fe;function be(k,H,$){Ct(k);const G=ve.list();return G.length?G.forEach(de=>de(k,H,$)):console.error(k),Promise.reject(k)}function we(){return fe&&c.value!==wn?Promise.resolve():new Promise((k,H)=>{j.add([k,H])})}function Ct(k){return fe||(fe=!k,se(),j.list().forEach(([H,$])=>k?$(k):H()),j.reset()),k}function Wn(k,H,$,G){const{scrollBehavior:de}=t;if(!Cs||!de)return Promise.resolve();const Ne=!$&&R0(nf(k.fullPath,0))||(G||!$)&&history.state&&history.state.scroll||null;return ra().then(()=>de(k,H,Ne)).then(ae=>ae&&A0(ae)).catch(ae=>be(ae,k,H))}const At=k=>r.go(k);let ut;const ws=new Set,Oi={currentRoute:c,listening:!0,addRoute:d,removeRoute:m,hasRoute:I,getRoutes:w,resolve:v,options:t,push:S,replace:E,go:At,back:()=>At(-1),forward:()=>At(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:ve.add,isReady:we,install(k){const H=this;k.component("RouterLink",fb),k.component("RouterView",Eg),k.config.globalProperties.$router=H,Object.defineProperty(k.config.globalProperties,"$route",{enumerable:!0,get:()=>mt(c)}),Cs&&!ut&&c.value===wn&&(ut=!0,S(r.location).catch(de=>{}));const $={};for(const de in wn)$[de]=Ue(()=>c.value[de]);k.provide(tu,H),k.provide(wg,Dt($)),k.provide(Gc,c);const G=k.unmount;ws.add(k),k.unmount=function(){ws.delete(k),ws.size<1&&(l=wn,F&&F(),F=null,c.value=wn,ut=!1,fe=!1),G()}}};return Oi}function bs(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function yb(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>zs(l,a))?s.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>zs(l,c))||r.push(c))}return[n,s,r]}function vb(...t){const e=typeof t[t.length-1]=="string"?t.pop():void 0;typeof t[0]!="string"&&t.unshift(e);const[n,s]=t;if(!n||typeof n!="string")throw new TypeError("[nuxt] [useState] key must be a string: "+n);if(s!==void 0&&typeof s!="function")throw new Error("[nuxt] [useState] init must be a function: "+s);const r="$s"+n,i=He(),o=sa(i.payload.state,r);if(o.value===void 0&&s){const a=s();if(Re(a))return i.payload.state[r]=a,a;o.value=a}return o}class Qc extends Error{constructor(){super(...arguments),this.statusCode=500,this.fatal=!1,this.unhandled=!1,this.statusMessage="Internal Server Error"}}Qc.__h3_error__=!0;function Xc(t){var n;if(typeof t=="string")return new Qc(t);if(_b(t))return t;const e=new Qc((n=t.message)!=null?n:t.statusMessage,t.cause?{cause:t.cause}:void 0);if("stack"in t)try{Object.defineProperty(e,"stack",{get(){return t.stack}})}catch{try{e.stack=t.stack}catch{}}return t.statusCode&&(e.statusCode=t.statusCode),t.statusMessage&&(e.statusMessage=t.statusMessage),t.data&&(e.data=t.data),t.fatal!==void 0&&(e.fatal=t.fatal),t.unhandled!==void 0&&(e.unhandled=t.unhandled),e}function _b(t){var e;return((e=t==null?void 0:t.constructor)==null?void 0:e.__h3_error__)===!0}const pa=()=>sa(He().payload,"error"),wr=t=>{const e=bb(t);try{He().callHook("app:error",e);const s=pa();s.value=s.value||e}catch{throw e}return e},wb=async(t={})=>{const e=He(),n=pa();e.callHook("app:error:cleared",t),t.redirect&&await e.$router.replace(t.redirect),n.value=null},Eb=t=>!!(t&&typeof t=="object"&&"__nuxt_error"in t),bb=t=>{const e=Xc(t);return e.__nuxt_error=!0,e},Tb=/^\w+:(\/\/)?/,Ib=/^\/\/[^/]+/;function nu(t,e=!1){return Tb.test(t)||e&&Ib.test(t)}const Sb=/\/$|\/\?/;function Yc(t="",e=!1){return e?Sb.test(t):t.endsWith("/")}function Cb(t="",e=!1){if(!e)return(Yc(t)?t.slice(0,-1):t)||"/";if(!Yc(t,!0))return t||"/";const[n,...s]=t.split("?");return(n.slice(0,-1)||"/")+(s.length?`?${s.join("?")}`:"")}function Ab(t="",e=!1){if(!e)return t.endsWith("/")?t:t+"/";if(Yc(t,!0))return t||"/";const[n,...s]=t.split("?");return n+"/"+(s.length?`?${s.join("?")}`:"")}function kb(t=""){return t.startsWith("/")}function Rb(t=""){return(kb(t)?t.substr(1):t)||"/"}function yf(t,e){if(Nb(e))return t;const n=Cb(e);if(!t.startsWith(n))return t;const s=t.substring(n.length);return s[0]==="/"?s:"/"+s}function Nb(t){return!t||t==="/"}function Db(t){return t&&t!=="/"}function Ob(t,...e){let n=t||"";for(const s of e.filter(Db))n=n?Ab(n)+Rb(s):s;return n}function su(t="",e){if(!nu(t,!0))return e?su(e+t):vf(t);const[n="",s,r=""]=(t.replace(/\\/g,"/").match(/([^:/]+:)?\/\/([^/@]+@)?(.*)/)||[]).splice(1),[i="",o=""]=(r.match(/([^/?#]*)(.*)?/)||[]).splice(1),{pathname:a,search:c,hash:l}=vf(o);return{protocol:n,auth:s?s.substr(0,s.length-1):"",host:i,pathname:a,search:c,hash:l}}function vf(t=""){const[e="",n="",s=""]=(t.match(/([^#?]*)(\?[^#]*)?(#.*)?/)||[]).splice(1);return{pathname:e,search:n,hash:s}}const ga=()=>{var t;return(t=He())==null?void 0:t.$router},bg=()=>fn()?St("_route",He()._route):He()._route,Tg=(t,e,n={})=>{const s=He();n.global||typeof t=="function"?s._middleware.global.push(typeof t=="function"?t:e):s._middleware.named[t]=e},Pb=()=>{try{if(He()._processingMiddleware)return!0}catch{return!0}return!1},ru=(t,e)=>{t||(t="/");const n=typeof t=="string"?t:t.path||"/",s=nu(n,!0);if(s&&!(e!=null&&e.external))throw new Error("Navigating to external URL is not allowed by default. Use `nagivateTo (url, { external: true })`.");if(s&&su(n).protocol==="script:")throw new Error("Cannot navigate to an URL with script protocol.");if(!s&&Pb())return t;const r=ga();return s?(e!=null&&e.replace?location.replace(n):location.href=n,Promise.resolve()):e!=null&&e.replace?r.replace(t):r.push(t)},xb="modulepreload",Lb=function(t,e){return new URL(t,e).href},_f={},Ze=function(e,n,s){return!n||n.length===0?e():Promise.all(n.map(r=>{if(r=Lb(r,s),r in _f)return;_f[r]=!0;const i=r.endsWith(".css"),o=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${o}`))return;const a=document.createElement("link");if(a.rel=i?"stylesheet":xb,i||(a.as="script",a.crossOrigin=""),a.href=r,document.head.appendChild(a),i)return new Promise((c,l)=>{a.addEventListener("load",c),a.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e())};function wf(t,e={}){const n=Mb(t,e),s=He(),r=s._payloadCache=s._payloadCache||{};return r[n]?r[n]:(r[t]=Ub(n).then(i=>i||(delete r[t],null)),r[t])}function Mb(t,e={}){const n=su(t);if(n.search)throw new Error("Payload URL cannot contain search params: "+t);const s=e.hash||(e.fresh?Date.now():"");return Ob(n.pathname,s?`_payload.${s}.js`:"_payload.js")}async function Ub(t){const e=await Ze(()=>import(t),[],import.meta.url).catch(n=>{console.warn("[nuxt] Cannot load payload ",t,n)});return(e==null?void 0:e.default)||null}function Fb(){return!!He().payload.prerenderedAt}const Bb=(...t)=>t.find(e=>e!==void 0),$b="noopener noreferrer",Vb=globalThis.requestIdleCallback||(t=>{const e=Date.now(),n={didTimeout:!1,timeRemaining:()=>Math.max(0,50-(Date.now()-e))};return setTimeout(()=>{t(n)},1)}),jb=globalThis.cancelIdleCallback||(t=>{clearTimeout(t)});function Hb(t){const e=t.componentName||"NuxtLink";return Ke({name:e,props:{to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1},custom:{type:Boolean,default:void 0,required:!1}},setup(n,{slots:s}){const r=ga(),i=Ue(()=>n.to||n.href||""),o=Ue(()=>n.external||n.target&&n.target!=="_self"?!0:typeof i.value=="object"?!1:i.value===""||nu(i.value,!0)),a=Zt(!1),c=Zt(null);if(n.prefetch!==!1&&n.noPrefetch!==!0&&typeof i.value=="string"&&!Kb()){const u=He(),h=qb();let f,d=null;la(()=>{f=Vb(()=>{var m;(m=c==null?void 0:c.value)!=null&&m.tagName&&(d=h.observe(c.value,async()=>{d==null||d(),d=null,await Promise.all([u.hooks.callHook("link:prefetch",i.value).catch(()=>{}),Wb(i.value,r).catch(()=>{})]),a.value=!0}))})}),ci(()=>{f&&jb(f),d==null||d(),d=null})}return()=>{var d,m,w;if(!o.value)return gt(Xl("RouterLink"),{ref:I=>{c.value=I==null?void 0:I.$el},to:i.value,...a.value&&!n.custom?{class:n.prefetchedClass||t.prefetchedClass}:{},activeClass:n.activeClass||t.activeClass,exactActiveClass:n.exactActiveClass||t.exactActiveClass,replace:n.replace,ariaCurrentValue:n.ariaCurrentValue,custom:n.custom},s.default);const l=typeof i.value=="object"?(m=(d=r.resolve(i.value))==null?void 0:d.href)!=null?m:null:i.value||null,u=n.target||null,h=n.noRel?null:Bb(n.rel,t.externalRelAttribute,l?$b:"")||null,f=()=>ru(l,{replace:n.replace});return n.custom?s.default?s.default({href:l,navigate:f,route:r.resolve(l),rel:h,target:u,isActive:!1,isExactActive:!1}):null:gt("a",{href:l,rel:h,target:u},(w=s.default)==null?void 0:w.call(s))}}})}const L1=Hb({componentName:"NuxtLink"});function qb(){const t=He();if(t._observer)return t._observer;let e=null;const n=new Map,s=(i,o)=>(e||(e=new IntersectionObserver(a=>{for(const c of a){const l=n.get(c.target);(c.isIntersecting||c.intersectionRatio>0)&&l&&l()}})),n.set(i,o),e.observe(i),()=>{n.delete(i),e.unobserve(i),n.size===0&&(e.disconnect(),e=null)});return t._observer={observe:s}}function Kb(){const t=navigator.connection;return!!(t&&(t.saveData||/2g/.test(t.effectiveType)))}async function Wb(t,e=ga()){if(e._nuxtLinkPreloaded||(e._nuxtLinkPreloaded=new Set),e._nuxtLinkPreloaded.has(t))return;e._nuxtLinkPreloaded.add(t);const n=e.resolve(t).matched.map(r=>{var i;return(i=r.components)==null?void 0:i.default}).filter(r=>typeof r=="function"),s=[];for(const r of n){const i=Promise.resolve(r()).catch(()=>{});s.push(i)}await Promise.all(s)}function ac(t){return t!==null&&typeof t=="object"}function Jc(t,e,n=".",s){if(!ac(e))return Jc(t,{},n,s);const r=Object.assign({},e);for(const i in t){if(i==="__proto__"||i==="constructor")continue;const o=t[i];o!=null&&(s&&s(r,i,o,n)||(Array.isArray(o)&&Array.isArray(r[i])?r[i]=[...o,...r[i]]:ac(o)&&ac(r[i])?r[i]=Jc(o,r[i],(n?`${n}.`:"")+i.toString(),s):r[i]=o))}return r}function Ig(t){return(...e)=>e.reduce((n,s)=>Jc(n,s,"",t),{})}const zb=Ig(),Gb=Ig((t,e,n,s)=>{if(typeof t[e]<"u"&&typeof n=="function")return t[e]=n(t[e]),!0}),Qb={};Gb(Qb);function iu(t){const e=te(t)?Ue(t):t;He()._useHead(e)}const cc={},Xb=dn(t=>{for(const e in cc)t.vueApp.component(e,cc[e]),t.vueApp.component("Lazy"+e,cc[e])});var Yb="usehead",Ef="head:count",lc="data-head-attrs",Sg="data-meta-body",Jb=(t,e,n)=>{const s=n.createElement(t);for(const r of Object.keys(e))if(r==="body"&&e.body===!0)s.setAttribute(Sg,"true");else{let i=e[r];if(r==="renderPriority"||r==="key"||i===!1)continue;r==="children"?s.textContent=i:s.setAttribute(r,i)}return s};function bf(t,e){if(t instanceof HTMLElement&&e instanceof HTMLElement){const n=e.getAttribute("nonce");if(n&&!t.getAttribute("nonce")){const s=e.cloneNode(!0);return s.setAttribute("nonce",""),s.nonce=n,n===t.nonce&&t.isEqualNode(s)}}return t.isEqualNode(e)}var Zb=t=>{if(!["meta","base","script","link"].includes(t.tag))return!1;const{props:e,tag:n}=t;if(n==="base")return"base";if(n==="link"&&e.rel==="canonical")return"canonical";if(e.charset)return"charset";const s=["key","id","name","property","http-equiv"];for(const r of s){let i;if(typeof e.getAttribute=="function"&&e.hasAttribute(r)?i=e.getAttribute(r):i=e[r],i!==void 0)return`${n}-${r}-${i}`}return!1},eT=["title","meta","link","base","style","script","noscript","htmlAttrs","bodyAttrs"],tT=(t,e)=>t==null?"":typeof t=="string"?t.replace("%s",e!=null?e:""):t(mt(e)),nT=t=>{const e=[],n=Object.keys(t);for(const s of n)if(t[s]!=null)switch(s){case"title":e.push({tag:s,props:{children:t[s]}});break;case"titleTemplate":break;case"base":e.push({tag:s,props:{key:"default",...t[s]}});break;default:if(eT.includes(s)){const r=t[s];Array.isArray(r)?r.forEach(i=>{e.push({tag:s,props:mt(i)})}):r&&e.push({tag:s,props:r})}break}return e},Tf=(t,e)=>{const n=t.getAttribute(lc);if(n)for(const r of n.split(","))r in e||t.removeAttribute(r);const s=[];for(const r in e){const i=e[r];i!=null&&(i===!1?t.removeAttribute(r):t.setAttribute(r,i),s.push(r))}s.length?t.setAttribute(lc,s.join(",")):t.removeAttribute(lc)},sT=(t=window.document,e,n)=>{var s,r;const i=t.head,o=t.body;let a=i.querySelector(`meta[name="${Ef}"]`),c=o.querySelectorAll(`[${Sg}]`);const l=a?Number(a.getAttribute("content")):0,u=[],h=[];if(c)for(let d=0;d<c.length;d++)c[d]&&((s=c[d].tagName)==null?void 0:s.toLowerCase())===e&&h.push(c[d]);if(a)for(let d=0,m=a.previousElementSibling;d<l;d++,m=(m==null?void 0:m.previousElementSibling)||null)((r=m==null?void 0:m.tagName)==null?void 0:r.toLowerCase())===e&&u.push(m);else a=t.createElement("meta"),a.setAttribute("name",Ef),a.setAttribute("content","0"),i.append(a);let f=n.map(d=>{var m;return{element:Jb(d.tag,d.props,t),body:(m=d.props.body)!=null?m:!1}});f=f.filter(d=>{for(let m=0;m<u.length;m++){const w=u[m];if(bf(w,d.element))return u.splice(m,1),!1}for(let m=0;m<h.length;m++){const w=h[m];if(bf(w,d.element))return h.splice(m,1),!1}return!0}),h.forEach(d=>{var m;return(m=d.parentNode)==null?void 0:m.removeChild(d)}),u.forEach(d=>{var m;return(m=d.parentNode)==null?void 0:m.removeChild(d)}),f.forEach(d=>{d.body===!0?o.insertAdjacentElement("beforeend",d.element):i.insertBefore(d.element,a)}),a.setAttribute("content",""+(l-u.length+f.filter(d=>!d.body).length))},rT=t=>{let e=[],n=new Set;t&&e.push(wo(t));const s={install(r){r.config.globalProperties.$head=s,r.provide(Yb,s)},get headTags(){const r=[],i={},o=e.map(a=>mt(a).titleTemplate).reverse().find(a=>a!=null);return e.forEach((a,c)=>{nT(mt(a)).forEach((u,h)=>{u._position=c*1e4+h,o&&u.tag==="title"&&(u.props.children=tT(o,u.props.children));const f=Zb(u);f?i[f]=u:r.push(u)})}),r.push(...Object.values(i)),r.sort((a,c)=>a._position-c._position)},addHeadObjs(r){e.push(r)},removeHeadObjs(r){e=e.filter(i=>i!==r)},updateDOM(r=window.document){let i,o={},a={};const c={};for(const u of s.headTags.sort(iT)){if(u.tag==="title"){i=u.props.children;continue}if(u.tag==="htmlAttrs"){Object.assign(o,u.props);continue}if(u.tag==="bodyAttrs"){Object.assign(a,u.props);continue}c[u.tag]=c[u.tag]||[],c[u.tag].push(u)}i!==void 0&&(r.title=i),Tf(r.documentElement,o),Tf(r.body,a);const l=new Set([...Object.keys(c),...n]);for(const u of l)sT(r,u,c[u]||[]);n.clear(),Object.keys(c).forEach(u=>n.add(u))}};return s},iT=(t,e)=>{const n=s=>{if(s.props.renderPriority)return s.props.renderPriority;switch(s.tag){case"base":return-1;case"meta":return s.props.charset?-2:s.props["http-equiv"]==="content-security-policy"?0:10;default:return 10}};return n(t)-n(e)};const oT=dn(t=>{const e=rT();t.vueApp.use(e);let n=!1;t.hooks.hookOnce("app:mounted",()=>{Sh(()=>{e.updateDOM()}),n=!0}),t._useHead=s=>{const r=Zt(s),i=Ue(()=>{const a={meta:[]};return r.value.charset&&a.meta.push({key:"charset",charset:r.value.charset}),r.value.viewport&&a.meta.push({name:"viewport",content:r.value.viewport}),zb(a,r.value)});e.addHeadObjs(i),n&&Sh(()=>{e.updateDOM()}),fn()&&ci(()=>{e.removeHeadObjs(i),e.updateDOM()})}}),aT=t=>Object.fromEntries(Object.entries(t).filter(([,e])=>e!==void 0)),pn=(t,e)=>(n,s)=>(iu(()=>t({...aT(n),...s.attrs},s)),()=>{var r,i;return e?(i=(r=s.slots).default)==null?void 0:i.call(r):null}),Hn={accesskey:String,autocapitalize:String,autofocus:{type:Boolean,default:void 0},class:String,contenteditable:{type:Boolean,default:void 0},contextmenu:String,dir:String,draggable:{type:Boolean,default:void 0},enterkeyhint:String,exportparts:String,hidden:{type:Boolean,default:void 0},id:String,inputmode:String,is:String,itemid:String,itemprop:String,itemref:String,itemscope:String,itemtype:String,lang:String,nonce:String,part:String,slot:String,spellcheck:{type:Boolean,default:void 0},style:String,tabindex:String,title:String,translate:String},cT=Ke({name:"Script",inheritAttrs:!1,props:{...Hn,async:Boolean,crossorigin:{type:[Boolean,String],default:void 0},defer:Boolean,fetchpriority:String,integrity:String,nomodule:Boolean,nonce:String,referrerpolicy:String,src:String,type:String,charset:String,language:String},setup:pn(t=>({script:[t]}))}),lT=Ke({name:"NoScript",inheritAttrs:!1,props:{...Hn,title:String},setup:pn((t,{slots:e})=>{var r;const n={...t},s=(((r=e.default)==null?void 0:r.call(e))||[]).filter(({children:i})=>i).map(({children:i})=>i).join("");return s&&(n.children=s),{noscript:[n]}})}),uT=Ke({name:"Link",inheritAttrs:!1,props:{...Hn,as:String,crossorigin:String,disabled:Boolean,fetchpriority:String,href:String,hreflang:String,imagesizes:String,imagesrcset:String,integrity:String,media:String,prefetch:{type:Boolean,default:void 0},referrerpolicy:String,rel:String,sizes:String,title:String,type:String,methods:String,target:String},setup:pn(t=>({link:[t]}))}),hT=Ke({name:"Base",inheritAttrs:!1,props:{...Hn,href:String,target:String},setup:pn(t=>({base:t}))}),fT=Ke({name:"Title",inheritAttrs:!1,setup:pn((t,{slots:e})=>{var s,r,i;return{title:((i=(r=(s=e.default)==null?void 0:s.call(e))==null?void 0:r[0])==null?void 0:i.children)||null}})}),dT=Ke({name:"Meta",inheritAttrs:!1,props:{...Hn,charset:String,content:String,httpEquiv:String,name:String},setup:pn(t=>{const e={...t};return e.httpEquiv&&(e["http-equiv"]=e.httpEquiv,delete e.httpEquiv),{meta:[e]}})}),pT=Ke({name:"Style",inheritAttrs:!1,props:{...Hn,type:String,media:String,nonce:String,title:String,scoped:{type:Boolean,default:void 0}},setup:pn((t,{slots:e})=>{var r,i,o;const n={...t},s=(o=(i=(r=e.default)==null?void 0:r.call(e))==null?void 0:i[0])==null?void 0:o.children;return s&&(n.children=s),{style:[n]}})}),gT=Ke({name:"Head",inheritAttrs:!1,setup:(t,e)=>()=>{var n,s;return(s=(n=e.slots).default)==null?void 0:s.call(n)}}),mT=Ke({name:"Html",inheritAttrs:!1,props:{...Hn,manifest:String,version:String,xmlns:String},setup:pn(t=>({htmlAttrs:t}),!0)}),yT=Ke({name:"Body",inheritAttrs:!1,props:Hn,setup:pn(t=>({bodyAttrs:t}),!0)}),If=Object.freeze(Object.defineProperty({__proto__:null,Script:cT,NoScript:lT,Link:uT,Base:hT,Title:fT,Meta:dT,Style:pT,Head:gT,Html:mT,Body:yT},Symbol.toStringTag,{value:"Module"})),vT={meta:[],link:[],style:[],script:[],noscript:[],charset:"utf-8",viewport:"width=device-width, initial-scale=1"},_T={name:"layout",mode:"out-in"},wT={name:"page",mode:"out-in"},ET=!1,bT={created(){const t=fn();if(!t)return;const e=t.type;if(!e||!("head"in e))return;const n=He(),s=typeof e.head=="function"?Ue(()=>e.head(n)):e.head;iu(s)}},TT=dn(t=>{iu(hs({title:"",...vT})),t.vueApp.mixin(bT);for(const e in If)t.vueApp.component(e,If[e])}),IT=(t,e)=>e.path.replace(/(:\w+)\([^)]+\)/g,"$1").replace(/(:\w+)[?+*]/g,"$1").replace(/:\w+/g,n=>{var s;return((s=t.params[n.slice(1)])==null?void 0:s.toString())||""}),ST=(t,e)=>{var r;const n=e.route.matched.find(i=>{var o;return((o=i.components)==null?void 0:o.default)===e.Component.type}),s=(r=t!=null?t:n==null?void 0:n.meta.key)!=null?r:n&&IT(e.route,n);return typeof s=="function"?s(e.route):s},CT=(t,e)=>({default:()=>t?gt($_,t===!0?{}:t,e):e}),AT=Ke({setup(t,{slots:e}){return()=>{var n;return(n=e.default)==null?void 0:n.call(e)}}}),Zc=(t,e,n)=>({default:()=>e?gt(t,e===!0?{}:e,n):gt(AT,{},n)}),Sf=Symbol("isNested"),uc=Ke({name:"NuxtPage",inheritAttrs:!1,props:{name:{type:String},transition:{type:[Boolean,Object],default:void 0},keepalive:{type:[Boolean,Object],default:void 0},route:{type:Object},pageKey:{type:[Function,String],default:null}},setup(t,{attrs:e}){const n=He(),s=St(Sf,!1);return is(Sf,!0),()=>gt(Eg,{name:t.name,route:t.route,...e},{default:r=>{var a,c,l,u;if(!r.Component)return;const i=ST(t.pageKey,r),o=(c=(a=t.transition)!=null?a:r.route.meta.pageTransition)!=null?c:wT;return Zc(fa,o,CT((u=(l=t.keepalive)!=null?l:r.route.meta.keepalive)!=null?u:ET,s&&n.isHydrating?gt(Cf,{key:i,routeProps:r,pageKey:i,hasTransition:!!o}):gt(bp,{onPending:()=>n.callHook("page:start",r.Component),onResolve:()=>n.callHook("page:finish",r.Component)},{default:()=>gt(Cf,{key:i,routeProps:r,pageKey:i,hasTransition:!!o})}))).default()}})}}),Cf=Ke({props:["routeProps","pageKey","hasTransition"],setup(t){const e=t.pageKey,n=t.routeProps.route,s={};for(const r in t.routeProps.route)s[r]=Ue(()=>e===t.pageKey?t.routeProps.route[r]:n[r]);return is("_route",Dt(s)),()=>gt(t.routeProps.Component)}});/**
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
 */const Cg=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},kT=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Ag={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,l=c?t[r+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let f=(a&15)<<2|l>>6,d=l&63;c||(d=64,o||(f=64)),s.push(n[u],n[h],n[f],n[d])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Cg(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):kT(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const l=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||l==null||h==null)throw Error();const f=i<<2|a>>4;if(s.push(f),l!==64){const d=a<<4&240|l>>2;if(s.push(d),h!==64){const m=l<<6&192|h;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},RT=function(t){const e=Cg(t);return Ag.encodeByteArray(e,!0)},Ro=function(t){return RT(t).replace(/\./g,"")},kg=function(t){try{return Ag.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function it(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function NT(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(it())}function DT(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function OT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function PT(){const t=it();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function xT(){return typeof indexedDB=="object"}function LT(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function MT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const UT=()=>MT().__FIREBASE_DEFAULTS__,FT=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t=process.env.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},BT=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&kg(t[1]);return e&&JSON.parse(e)},ou=()=>{try{return UT()||FT()||BT()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Rg=t=>{var e,n;return(n=(e=ou())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},$T=t=>{const e=Rg(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},VT=()=>{var t;return(t=ou())===null||t===void 0?void 0:t.config},Ng=t=>{var e;return(e=ou())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class jT{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function HT(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Ro(JSON.stringify(n)),Ro(JSON.stringify(o)),a].join(".")}/**
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
 */const qT="FirebaseError";class gn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=qT,Object.setPrototypeOf(this,gn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,li.prototype.create)}}class li{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?KT(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new gn(r,a,s)}}function KT(t,e){return t.replace(WT,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const WT=/\{\$([^}]+)}/g;function zT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function No(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(Af(i)&&Af(o)){if(!No(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function Af(t){return t!==null&&typeof t=="object"}/**
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
 */function ui(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function GT(t,e){const n=new QT(t,e);return n.subscribe.bind(n)}class QT{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");XT(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=hc),r.error===void 0&&(r.error=hc),r.complete===void 0&&(r.complete=hc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function XT(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function hc(){}/**
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
 */function Pt(t){return t&&t._delegate?t._delegate:t}class fs{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Yn="[DEFAULT]";/**
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
 */class YT{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new jT;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ZT(e))try{this.getOrInitializeService({instanceIdentifier:Yn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=Yn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Yn){return this.instances.has(e)}getOptions(e=Yn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:JT(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Yn){return this.component?this.component.multipleInstances?e:Yn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function JT(t){return t===Yn?void 0:t}function ZT(t){return t.instantiationMode==="EAGER"}/**
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
 */class eI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new YT(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var me;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(me||(me={}));const tI={debug:me.DEBUG,verbose:me.VERBOSE,info:me.INFO,warn:me.WARN,error:me.ERROR,silent:me.SILENT},nI=me.INFO,sI={[me.DEBUG]:"log",[me.VERBOSE]:"log",[me.INFO]:"info",[me.WARN]:"warn",[me.ERROR]:"error"},rI=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=sI[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class au{constructor(e){this.name=e,this._logLevel=nI,this._logHandler=rI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in me))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?tI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,me.DEBUG,...e),this._logHandler(this,me.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,me.VERBOSE,...e),this._logHandler(this,me.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,me.INFO,...e),this._logHandler(this,me.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,me.WARN,...e),this._logHandler(this,me.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,me.ERROR,...e),this._logHandler(this,me.ERROR,...e)}}const iI=(t,e)=>e.some(n=>t instanceof n);let kf,Rf;function oI(){return kf||(kf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function aI(){return Rf||(Rf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Dg=new WeakMap,el=new WeakMap,Og=new WeakMap,fc=new WeakMap,cu=new WeakMap;function cI(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Pn(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Dg.set(n,t)}).catch(()=>{}),cu.set(e,t),e}function lI(t){if(el.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});el.set(t,e)}let tl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return el.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Og.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Pn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function uI(t){tl=t(tl)}function hI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(dc(this),e,...n);return Og.set(s,e.sort?e.sort():[e]),Pn(s)}:aI().includes(t)?function(...e){return t.apply(dc(this),e),Pn(Dg.get(this))}:function(...e){return Pn(t.apply(dc(this),e))}}function fI(t){return typeof t=="function"?hI(t):(t instanceof IDBTransaction&&lI(t),iI(t,oI())?new Proxy(t,tl):t)}function Pn(t){if(t instanceof IDBRequest)return cI(t);if(fc.has(t))return fc.get(t);const e=fI(t);return e!==t&&(fc.set(t,e),cu.set(e,t)),e}const dc=t=>cu.get(t);function dI(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=Pn(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Pn(o.result),c.oldVersion,c.newVersion,Pn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const pI=["get","getKey","getAll","getAllKeys","count"],gI=["put","add","delete","clear"],pc=new Map;function Nf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(pc.get(e))return pc.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=gI.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||pI.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),r&&c.done]))[0]};return pc.set(e,i),i}uI(t=>({...t,get:(e,n,s)=>Nf(e,n)||t.get(e,n,s),has:(e,n)=>!!Nf(e,n)||t.has(e,n)}));/**
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
 */class mI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(yI(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function yI(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const nl="@firebase/app",Df="0.8.4";/**
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
 */const ds=new au("@firebase/app"),vI="@firebase/app-compat",_I="@firebase/analytics-compat",wI="@firebase/analytics",EI="@firebase/app-check-compat",bI="@firebase/app-check",TI="@firebase/auth",II="@firebase/auth-compat",SI="@firebase/database",CI="@firebase/database-compat",AI="@firebase/functions",kI="@firebase/functions-compat",RI="@firebase/installations",NI="@firebase/installations-compat",DI="@firebase/messaging",OI="@firebase/messaging-compat",PI="@firebase/performance",xI="@firebase/performance-compat",LI="@firebase/remote-config",MI="@firebase/remote-config-compat",UI="@firebase/storage",FI="@firebase/storage-compat",BI="@firebase/firestore",$I="@firebase/firestore-compat",VI="firebase",jI="9.14.0";/**
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
 */const sl="[DEFAULT]",HI={[nl]:"fire-core",[vI]:"fire-core-compat",[wI]:"fire-analytics",[_I]:"fire-analytics-compat",[bI]:"fire-app-check",[EI]:"fire-app-check-compat",[TI]:"fire-auth",[II]:"fire-auth-compat",[SI]:"fire-rtdb",[CI]:"fire-rtdb-compat",[AI]:"fire-fn",[kI]:"fire-fn-compat",[RI]:"fire-iid",[NI]:"fire-iid-compat",[DI]:"fire-fcm",[OI]:"fire-fcm-compat",[PI]:"fire-perf",[xI]:"fire-perf-compat",[LI]:"fire-rc",[MI]:"fire-rc-compat",[UI]:"fire-gcs",[FI]:"fire-gcs-compat",[BI]:"fire-fst",[$I]:"fire-fst-compat","fire-js":"fire-js",[VI]:"fire-js-all"};/**
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
 */const Do=new Map,rl=new Map;function qI(t,e){try{t.container.addComponent(e)}catch(n){ds.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Qs(t){const e=t.name;if(rl.has(e))return ds.debug(`There were multiple attempts to register component ${e}.`),!1;rl.set(e,t);for(const n of Do.values())qI(n,t);return!0}function lu(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const KI={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},xn=new li("app","Firebase",KI);/**
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
 */class WI{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new fs("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw xn.create("app-deleted",{appName:this._name})}}/**
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
 */const hi=jI;function Pg(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:sl,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw xn.create("bad-app-name",{appName:String(r)});if(n||(n=VT()),!n)throw xn.create("no-options");const i=Do.get(r);if(i){if(No(n,i.options)&&No(s,i.config))return i;throw xn.create("duplicate-app",{appName:r})}const o=new eI(r);for(const c of rl.values())o.addComponent(c);const a=new WI(n,s,o);return Do.set(r,a),a}function xg(t=sl){const e=Do.get(t);if(!e&&t===sl)return Pg();if(!e)throw xn.create("no-app",{appName:t});return e}function Ln(t,e,n){var s;let r=(s=HI[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ds.warn(a.join(" "));return}Qs(new fs(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const zI="firebase-heartbeat-database",GI=1,Kr="firebase-heartbeat-store";let gc=null;function Lg(){return gc||(gc=dI(zI,GI,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Kr)}}}).catch(t=>{throw xn.create("idb-open",{originalErrorMessage:t.message})})),gc}async function QI(t){var e;try{return(await Lg()).transaction(Kr).objectStore(Kr).get(Mg(t))}catch(n){if(n instanceof gn)ds.warn(n.message);else{const s=xn.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});ds.warn(s.message)}}}async function Of(t,e){var n;try{const r=(await Lg()).transaction(Kr,"readwrite");return await r.objectStore(Kr).put(e,Mg(t)),r.done}catch(s){if(s instanceof gn)ds.warn(s.message);else{const r=xn.create("idb-set",{originalErrorMessage:(n=s)===null||n===void 0?void 0:n.message});ds.warn(r.message)}}}function Mg(t){return`${t.name}!${t.options.appId}`}/**
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
 */const XI=1024,YI=30*24*60*60*1e3;class JI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new eS(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Pf();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=YI}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Pf(),{heartbeatsToSend:n,unsentEntries:s}=ZI(this._heartbeatsCache.heartbeats),r=Ro(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Pf(){return new Date().toISOString().substring(0,10)}function ZI(t,e=XI){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),xf(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),xf(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class eS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return xT()?LT().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await QI(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Of(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Of(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function xf(t){return Ro(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function tS(t){Qs(new fs("platform-logger",e=>new mI(e),"PRIVATE")),Qs(new fs("heartbeat",e=>new JI(e),"PRIVATE")),Ln(nl,Df,t),Ln(nl,Df,"esm2017"),Ln("fire-js","")}tS("");var nS=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},K,uu=uu||{},ne=nS||self;function Oo(){}function ma(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function fi(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function sS(t){return Object.prototype.hasOwnProperty.call(t,mc)&&t[mc]||(t[mc]=++rS)}var mc="closure_uid_"+(1e9*Math.random()>>>0),rS=0;function iS(t,e,n){return t.call.apply(t.bind,arguments)}function oS(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function st(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?st=iS:st=oS,st.apply(null,arguments)}function ji(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function Je(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function qn(){this.s=this.s,this.o=this.o}var aS=0;qn.prototype.s=!1;qn.prototype.na=function(){!this.s&&(this.s=!0,this.M(),aS!=0)&&sS(this)};qn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Ug=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function hu(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function Lf(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(ma(s)){const r=t.length||0,i=s.length||0;t.length=r+i;for(let o=0;o<i;o++)t[r+o]=s[o]}else t.push(s)}}function rt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}rt.prototype.h=function(){this.defaultPrevented=!0};var cS=function(){if(!ne.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{ne.addEventListener("test",Oo,e),ne.removeEventListener("test",Oo,e)}catch{}return t}();function Po(t){return/^[\s\xa0]*$/.test(t)}var Mf=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function yc(t,e){return t<e?-1:t>e?1:0}function ya(){var t=ne.navigator;return t&&(t=t.userAgent)?t:""}function Bt(t){return ya().indexOf(t)!=-1}function fu(t){return fu[" "](t),t}fu[" "]=Oo;function lS(t){var e=fS;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var uS=Bt("Opera"),Xs=Bt("Trident")||Bt("MSIE"),Fg=Bt("Edge"),il=Fg||Xs,Bg=Bt("Gecko")&&!(ya().toLowerCase().indexOf("webkit")!=-1&&!Bt("Edge"))&&!(Bt("Trident")||Bt("MSIE"))&&!Bt("Edge"),hS=ya().toLowerCase().indexOf("webkit")!=-1&&!Bt("Edge");function $g(){var t=ne.document;return t?t.documentMode:void 0}var xo;e:{var vc="",_c=function(){var t=ya();if(Bg)return/rv:([^\);]+)(\)|;)/.exec(t);if(Fg)return/Edge\/([\d\.]+)/.exec(t);if(Xs)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(hS)return/WebKit\/(\S+)/.exec(t);if(uS)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(_c&&(vc=_c?_c[1]:""),Xs){var wc=$g();if(wc!=null&&wc>parseFloat(vc)){xo=String(wc);break e}}xo=vc}var fS={};function dS(){return lS(function(){let t=0;const e=Mf(String(xo)).split("."),n=Mf("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var r=e[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;t=yc(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||yc(r[2].length==0,i[2].length==0)||yc(r[2],i[2]),r=r[3],i=i[3]}while(t==0)}return 0<=t})}var ol;if(ne.document&&Xs){var Uf=$g();ol=Uf||parseInt(xo,10)||void 0}else ol=void 0;var pS=ol;function Wr(t,e){if(rt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Bg){e:{try{fu(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:gS[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Wr.X.h.call(this)}}Je(Wr,rt);var gS={2:"touch",3:"pen",4:"mouse"};Wr.prototype.h=function(){Wr.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var di="closure_listenable_"+(1e6*Math.random()|0),mS=0;function yS(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=r,this.key=++mS,this.ba=this.ea=!1}function va(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function du(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function Vg(t){const e={};for(const n in t)e[n]=t[n];return e}const Ff="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function jg(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<Ff.length;i++)n=Ff[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function _a(t){this.src=t,this.g={},this.h=0}_a.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=cl(t,e,s,r);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new yS(e,this.src,i,!!s,r),e.ea=n,t.push(e)),e};function al(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=Ug(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(va(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function cl(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.ba&&i.listener==e&&i.capture==!!n&&i.ha==s)return r}return-1}var pu="closure_lm_"+(1e6*Math.random()|0),Ec={};function Hg(t,e,n,s,r){if(s&&s.once)return Kg(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)Hg(t,e[i],n,s,r);return null}return n=yu(n),t&&t[di]?t.N(e,n,fi(s)?!!s.capture:!!s,r):qg(t,e,n,!1,s,r)}function qg(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=fi(r)?!!r.capture:!!r,a=mu(t);if(a||(t[pu]=a=new _a(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=vS(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)cS||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(zg(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function vS(){function t(n){return e.call(t.src,t.listener,n)}const e=_S;return t}function Kg(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Kg(t,e[i],n,s,r);return null}return n=yu(n),t&&t[di]?t.O(e,n,fi(s)?!!s.capture:!!s,r):qg(t,e,n,!0,s,r)}function Wg(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)Wg(t,e[i],n,s,r);else s=fi(s)?!!s.capture:!!s,n=yu(n),t&&t[di]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=cl(i,n,s,r),-1<n&&(va(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=mu(t))&&(e=t.g[e.toString()],t=-1,e&&(t=cl(e,n,s,r)),(n=-1<t?e[t]:null)&&gu(n))}function gu(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[di])al(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(zg(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=mu(e))?(al(n,t),n.h==0&&(n.src=null,e[pu]=null)):va(t)}}}function zg(t){return t in Ec?Ec[t]:Ec[t]="on"+t}function _S(t,e){if(t.ba)t=!0;else{e=new Wr(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&gu(t),t=n.call(s,e)}return t}function mu(t){return t=t[pu],t instanceof _a?t:null}var bc="__closure_events_fn_"+(1e9*Math.random()>>>0);function yu(t){return typeof t=="function"?t:(t[bc]||(t[bc]=function(e){return t.handleEvent(e)}),t[bc])}function qe(){qn.call(this),this.i=new _a(this),this.P=this,this.I=null}Je(qe,qn);qe.prototype[di]=!0;qe.prototype.removeEventListener=function(t,e,n,s){Wg(this,t,e,n,s)};function Xe(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new rt(e,t);else if(e instanceof rt)e.target=e.target||t;else{var r=e;e=new rt(s,t),jg(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=Hi(o,s,!0,e)&&r}if(o=e.g=t,r=Hi(o,s,!0,e)&&r,r=Hi(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=Hi(o,s,!1,e)&&r}qe.prototype.M=function(){if(qe.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)va(n[s]);delete t.g[e],t.h--}}this.I=null};qe.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};qe.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function Hi(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&al(t.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var vu=ne.JSON.stringify;function wS(){var t=Xg;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class ES{constructor(){this.h=this.g=null}add(e,n){const s=Gg.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var Gg=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new bS,t=>t.reset());class bS{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function TS(t){ne.setTimeout(()=>{throw t},0)}function Qg(t,e){ll||IS(),ul||(ll(),ul=!0),Xg.add(t,e)}var ll;function IS(){var t=ne.Promise.resolve(void 0);ll=function(){t.then(SS)}}var ul=!1,Xg=new ES;function SS(){for(var t;t=wS();){try{t.h.call(t.g)}catch(n){TS(n)}var e=Gg;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}ul=!1}function wa(t,e){qe.call(this),this.h=t||1,this.g=e||ne,this.j=st(this.lb,this),this.l=Date.now()}Je(wa,qe);K=wa.prototype;K.ca=!1;K.R=null;K.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Xe(this,"tick"),this.ca&&(_u(this),this.start()))}};K.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function _u(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}K.M=function(){wa.X.M.call(this),_u(this),delete this.g};function wu(t,e,n){if(typeof t=="function")n&&(t=st(t,n));else if(t&&typeof t.handleEvent=="function")t=st(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:ne.setTimeout(t,e||0)}function Yg(t){t.g=wu(()=>{t.g=null,t.i&&(t.i=!1,Yg(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class CS extends qn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Yg(this)}M(){super.M(),this.g&&(ne.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function zr(t){qn.call(this),this.h=t,this.g={}}Je(zr,qn);var Bf=[];function Jg(t,e,n,s){Array.isArray(n)||(n&&(Bf[0]=n.toString()),n=Bf);for(var r=0;r<n.length;r++){var i=Hg(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function Zg(t){du(t.g,function(e,n){this.g.hasOwnProperty(n)&&gu(e)},t),t.g={}}zr.prototype.M=function(){zr.X.M.call(this),Zg(this)};zr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Ea(){this.g=!0}Ea.prototype.Aa=function(){this.g=!1};function AS(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function kS(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function As(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+NS(t,n)+(s?" "+s:"")})}function RS(t,e){t.info(function(){return"TIMEOUT: "+e})}Ea.prototype.info=function(){};function NS(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return vu(n)}catch{return e}}var ys={},$f=null;function ba(){return $f=$f||new qe}ys.Pa="serverreachability";function em(t){rt.call(this,ys.Pa,t)}Je(em,rt);function Gr(t){const e=ba();Xe(e,new em(e))}ys.STAT_EVENT="statevent";function tm(t,e){rt.call(this,ys.STAT_EVENT,t),this.stat=e}Je(tm,rt);function ct(t){const e=ba();Xe(e,new tm(e,t))}ys.Qa="timingevent";function nm(t,e){rt.call(this,ys.Qa,t),this.size=e}Je(nm,rt);function pi(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return ne.setTimeout(function(){t()},e)}var Ta={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},sm={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Eu(){}Eu.prototype.h=null;function Vf(t){return t.h||(t.h=t.i())}function rm(){}var gi={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function bu(){rt.call(this,"d")}Je(bu,rt);function Tu(){rt.call(this,"c")}Je(Tu,rt);var hl;function Ia(){}Je(Ia,Eu);Ia.prototype.g=function(){return new XMLHttpRequest};Ia.prototype.i=function(){return{}};hl=new Ia;function mi(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new zr(this),this.O=DS,t=il?125:void 0,this.T=new wa(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new im}function im(){this.i=null,this.g="",this.h=!1}var DS=45e3,fl={},Lo={};K=mi.prototype;K.setTimeout=function(t){this.O=t};function dl(t,e,n){t.K=1,t.v=Ca(rn(e)),t.s=n,t.P=!0,om(t,null)}function om(t,e){t.F=Date.now(),yi(t),t.A=rn(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),pm(n.i,"t",s),t.C=0,n=t.l.H,t.h=new im,t.g=Lm(t.l,n?e:null,!t.s),0<t.N&&(t.L=new CS(st(t.La,t,t.g),t.N)),Jg(t.S,t.g,"readystatechange",t.ib),e=t.H?Vg(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),Gr(),AS(t.j,t.u,t.A,t.m,t.U,t.s)}K.ib=function(t){t=t.target;const e=this.L;e&&Qt(t)==3?e.l():this.La(t)};K.La=function(t){try{if(t==this.g)e:{const u=Qt(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>u)&&(u!=3||il||this.g&&(this.h.h||this.g.fa()||Kf(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?Gr(3):Gr(2)),Sa(this);var n=this.g.aa();this.Y=n;t:if(am(this)){var s=Kf(this.g);t="";var r=s.length,i=Qt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ts(this),Or(this);var o="";break t}this.h.i=new ne.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,kS(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Po(a)){var l=a;break t}}l=null}if(n=l)As(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,pl(this,n);else{this.i=!1,this.o=3,ct(12),ts(this),Or(this);break e}}this.P?(cm(this,u,o),il&&this.i&&u==3&&(Jg(this.S,this.T,"tick",this.hb),this.T.start())):(As(this.j,this.m,o,null),pl(this,o)),u==4&&ts(this),this.i&&!this.I&&(u==4?Dm(this.l,this):(this.i=!1,yi(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,ct(12)):(this.o=0,ct(13)),ts(this),Or(this)}}}catch{}finally{}};function am(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function cm(t,e,n){let s=!0,r;for(;!t.I&&t.C<n.length;)if(r=OS(t,n),r==Lo){e==4&&(t.o=4,ct(14),s=!1),As(t.j,t.m,null,"[Incomplete Response]");break}else if(r==fl){t.o=4,ct(15),As(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else As(t.j,t.m,r,null),pl(t,r);am(t)&&r!=Lo&&r!=fl&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,ct(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Nu(e),e.K=!0,ct(11))):(As(t.j,t.m,n,"[Invalid Chunked Response]"),ts(t),Or(t))}K.hb=function(){if(this.g){var t=Qt(this.g),e=this.g.fa();this.C<e.length&&(Sa(this),cm(this,t,e),this.i&&t!=4&&yi(this))}};function OS(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?Lo:(n=Number(e.substring(n,s)),isNaN(n)?fl:(s+=1,s+n>e.length?Lo:(e=e.substr(s,n),t.C=s+n,e)))}K.cancel=function(){this.I=!0,ts(this)};function yi(t){t.V=Date.now()+t.O,lm(t,t.O)}function lm(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=pi(st(t.gb,t),e)}function Sa(t){t.B&&(ne.clearTimeout(t.B),t.B=null)}K.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(RS(this.j,this.A),this.K!=2&&(Gr(),ct(17)),ts(this),this.o=2,Or(this)):lm(this,this.V-t)};function Or(t){t.l.G==0||t.I||Dm(t.l,t)}function ts(t){Sa(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,_u(t.T),Zg(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function pl(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||gl(n.h,t))){if(!t.J&&gl(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Fo(n),Ra(n);else break e;Ru(n),ct(18)}}else n.Ba=r[1],0<n.Ba-n.T&&37500>r[2]&&n.L&&n.A==0&&!n.v&&(n.v=pi(st(n.cb,n),6e3));if(1>=ym(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else ns(n,11)}else if((t.J||n.g==t)&&Fo(n),!Po(e))for(r=n.Fa.g.parse(e),e=0;e<r.length;e++){let l=r[e];if(n.T=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.I=l[1],n.ka=l[2];const u=l[3];u!=null&&(n.ma=u,n.j.info("VER="+n.ma));const h=l[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const f=l[5];f!=null&&typeof f=="number"&&0<f&&(s=1.5*f,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const d=t.g;if(d){const m=d.g?d.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var i=s.h;i.g||m.indexOf("spdy")==-1&&m.indexOf("quic")==-1&&m.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Iu(i,i.h),i.h=null))}if(s.D){const w=d.g?d.g.getResponseHeader("X-HTTP-Session-Id"):null;w&&(s.za=w,Ae(s.F,s.D,w))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=xm(s,s.H?s.ka:null,s.V),o.J){vm(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(Sa(a),yi(a)),s.g=o}else Rm(s);0<n.i.length&&Na(n)}else l[0]!="stop"&&l[0]!="close"||ns(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?ns(n,7):ku(n):l[0]!="noop"&&n.l&&n.l.wa(l),n.A=0)}}Gr(4)}catch{}}function PS(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(ma(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function xS(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(ma(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function um(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(ma(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=xS(t),s=PS(t),r=s.length,i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}var hm=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function LS(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function cs(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof cs){this.h=e!==void 0?e:t.h,Mo(this,t.j),this.s=t.s,this.g=t.g,Uo(this,t.m),this.l=t.l,e=t.i;var n=new Qr;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),jf(this,n),this.o=t.o}else t&&(n=String(t).match(hm))?(this.h=!!e,Mo(this,n[1]||"",!0),this.s=Er(n[2]||""),this.g=Er(n[3]||"",!0),Uo(this,n[4]),this.l=Er(n[5]||"",!0),jf(this,n[6]||"",!0),this.o=Er(n[7]||"")):(this.h=!!e,this.i=new Qr(null,this.h))}cs.prototype.toString=function(){var t=[],e=this.j;e&&t.push(br(e,Hf,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(br(e,Hf,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(br(n,n.charAt(0)=="/"?FS:US,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",br(n,$S)),t.join("")};function rn(t){return new cs(t)}function Mo(t,e,n){t.j=n?Er(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Uo(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function jf(t,e,n){e instanceof Qr?(t.i=e,VS(t.i,t.h)):(n||(e=br(e,BS)),t.i=new Qr(e,t.h))}function Ae(t,e,n){t.i.set(e,n)}function Ca(t){return Ae(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Er(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function br(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,MS),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function MS(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Hf=/[#\/\?@]/g,US=/[#\?:]/g,FS=/[#\?]/g,BS=/[#\?@]/g,$S=/#/g;function Qr(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Kn(t){t.g||(t.g=new Map,t.h=0,t.i&&LS(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}K=Qr.prototype;K.add=function(t,e){Kn(this),this.i=null,t=cr(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function fm(t,e){Kn(t),e=cr(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function dm(t,e){return Kn(t),e=cr(t,e),t.g.has(e)}K.forEach=function(t,e){Kn(this),this.g.forEach(function(n,s){n.forEach(function(r){t.call(e,r,s,this)},this)},this)};K.oa=function(){Kn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const r=t[s];for(let i=0;i<r.length;i++)n.push(e[s])}return n};K.W=function(t){Kn(this);let e=[];if(typeof t=="string")dm(this,t)&&(e=e.concat(this.g.get(cr(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};K.set=function(t,e){return Kn(this),this.i=null,t=cr(this,t),dm(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};K.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function pm(t,e,n){fm(t,e),0<n.length&&(t.i=null,t.g.set(cr(t,e),hu(n)),t.h+=n.length)}K.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const i=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),t.push(r)}}return this.i=t.join("&")};function cr(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function VS(t,e){e&&!t.j&&(Kn(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(fm(this,s),pm(this,r,n))},t)),t.j=e}var jS=class{constructor(t,e){this.h=t,this.g=e}};function gm(t){this.l=t||HS,ne.PerformanceNavigationTiming?(t=ne.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(ne.g&&ne.g.Ga&&ne.g.Ga()&&ne.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var HS=10;function mm(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function ym(t){return t.h?1:t.g?t.g.size:0}function gl(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Iu(t,e){t.g?t.g.add(e):t.h=e}function vm(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}gm.prototype.cancel=function(){if(this.i=_m(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function _m(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return hu(t.i)}function Su(){}Su.prototype.stringify=function(t){return ne.JSON.stringify(t,void 0)};Su.prototype.parse=function(t){return ne.JSON.parse(t,void 0)};function qS(){this.g=new Su}function KS(t,e,n){const s=n||"";try{um(t,function(r,i){let o=r;fi(r)&&(o=vu(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function WS(t,e){const n=new Ea;if(ne.Image){const s=new Image;s.onload=ji(qi,n,s,"TestLoadImage: loaded",!0,e),s.onerror=ji(qi,n,s,"TestLoadImage: error",!1,e),s.onabort=ji(qi,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=ji(qi,n,s,"TestLoadImage: timeout",!1,e),ne.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function qi(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function vi(t){this.l=t.ac||null,this.j=t.jb||!1}Je(vi,Eu);vi.prototype.g=function(){return new Aa(this.l,this.j)};vi.prototype.i=function(t){return function(){return t}}({});function Aa(t,e){qe.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Cu,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Je(Aa,qe);var Cu=0;K=Aa.prototype;K.open=function(t,e){if(this.readyState!=Cu)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Xr(this)};K.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||ne).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};K.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,_i(this)),this.readyState=Cu};K.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Xr(this)),this.g&&(this.readyState=3,Xr(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof ne.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;wm(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function wm(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}K.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?_i(this):Xr(this),this.readyState==3&&wm(this)}};K.Va=function(t){this.g&&(this.response=this.responseText=t,_i(this))};K.Ua=function(t){this.g&&(this.response=t,_i(this))};K.ga=function(){this.g&&_i(this)};function _i(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Xr(t)}K.setRequestHeader=function(t,e){this.v.append(t,e)};K.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};K.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Xr(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Aa.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var zS=ne.JSON.parse;function Oe(t){qe.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Em,this.K=this.L=!1}Je(Oe,qe);var Em="",GS=/^https?$/i,QS=["POST","PUT"];K=Oe.prototype;K.Ka=function(t){this.L=t};K.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():hl.g(),this.C=this.u?Vf(this.u):Vf(hl),this.g.onreadystatechange=st(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){qf(this,i);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())n.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),r=ne.FormData&&t instanceof ne.FormData,!(0<=Ug(QS,e))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Im(this),0<this.B&&((this.K=XS(this.g))?(this.g.timeout=this.B,this.g.ontimeout=st(this.qa,this)):this.A=wu(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){qf(this,i)}};function XS(t){return Xs&&dS()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}K.qa=function(){typeof uu<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Xe(this,"timeout"),this.abort(8))};function qf(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,bm(t),ka(t)}function bm(t){t.D||(t.D=!0,Xe(t,"complete"),Xe(t,"error"))}K.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Xe(this,"complete"),Xe(this,"abort"),ka(this))};K.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ka(this,!0)),Oe.X.M.call(this)};K.Ha=function(){this.s||(this.F||this.v||this.l?Tm(this):this.fb())};K.fb=function(){Tm(this)};function Tm(t){if(t.h&&typeof uu<"u"&&(!t.C[1]||Qt(t)!=4||t.aa()!=2)){if(t.v&&Qt(t)==4)wu(t.Ha,0,t);else if(Xe(t,"readystatechange"),Qt(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var r=String(t.H).match(hm)[1]||null;if(!r&&ne.self&&ne.self.location){var i=ne.self.location.protocol;r=i.substr(0,i.length-1)}s=!GS.test(r?r.toLowerCase():"")}n=s}if(n)Xe(t,"complete"),Xe(t,"success");else{t.m=6;try{var o=2<Qt(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",bm(t)}}finally{ka(t)}}}}function ka(t,e){if(t.g){Im(t);const n=t.g,s=t.C[0]?Oo:null;t.g=null,t.C=null,e||Xe(t,"ready");try{n.onreadystatechange=s}catch{}}}function Im(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(ne.clearTimeout(t.A),t.A=null)}function Qt(t){return t.g?t.g.readyState:0}K.aa=function(){try{return 2<Qt(this)?this.g.status:-1}catch{return-1}};K.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};K.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),zS(e)}};function Kf(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Em:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}K.Ea=function(){return this.m};K.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Sm(t){let e="";return du(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function Au(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=Sm(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Ae(t,e,n))}function yr(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Cm(t){this.Ca=0,this.i=[],this.j=new Ea,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=yr("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=yr("baseRetryDelayMs",5e3,t),this.bb=yr("retryDelaySeedMs",1e4,t),this.$a=yr("forwardChannelMaxRetries",2,t),this.ta=yr("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new gm(t&&t.concurrentRequestLimit),this.Fa=new qS,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}K=Cm.prototype;K.ma=8;K.G=1;function ku(t){if(Am(t),t.G==3){var e=t.U++,n=rn(t.F);Ae(n,"SID",t.I),Ae(n,"RID",e),Ae(n,"TYPE","terminate"),wi(t,n),e=new mi(t,t.j,e,void 0),e.K=2,e.v=Ca(rn(n)),n=!1,ne.navigator&&ne.navigator.sendBeacon&&(n=ne.navigator.sendBeacon(e.v.toString(),"")),!n&&ne.Image&&(new Image().src=e.v,n=!0),n||(e.g=Lm(e.l,null),e.g.da(e.v)),e.F=Date.now(),yi(e)}Pm(t)}function Ra(t){t.g&&(Nu(t),t.g.cancel(),t.g=null)}function Am(t){Ra(t),t.u&&(ne.clearTimeout(t.u),t.u=null),Fo(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&ne.clearTimeout(t.m),t.m=null)}function Na(t){mm(t.h)||t.m||(t.m=!0,Qg(t.Ja,t),t.C=0)}function YS(t,e){return ym(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=pi(st(t.Ja,t,e),Om(t,t.C)),t.C++,!0)}K.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const r=new mi(this,this.j,t,void 0);let i=this.s;if(this.S&&(i?(i=Vg(i),jg(i,this.S)):i=this.S),this.o!==null||this.N||(r.H=i,i=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=km(this,r,e),n=rn(this.F),Ae(n,"RID",t),Ae(n,"CVER",22),this.D&&Ae(n,"X-HTTP-Session-Id",this.D),wi(this,n),i&&(this.N?e="headers="+encodeURIComponent(String(Sm(i)))+"&"+e:this.o&&Au(n,this.o,i)),Iu(this.h,r),this.Ya&&Ae(n,"TYPE","init"),this.O?(Ae(n,"$req",e),Ae(n,"SID","null"),r.Z=!0,dl(r,n,null)):dl(r,n,e),this.G=2}}else this.G==3&&(t?Wf(this,t):this.i.length==0||mm(this.h)||Wf(this))};function Wf(t,e){var n;e?n=e.m:n=t.U++;const s=rn(t.F);Ae(s,"SID",t.I),Ae(s,"RID",n),Ae(s,"AID",t.T),wi(t,s),t.o&&t.s&&Au(s,t.o,t.s),n=new mi(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=km(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),Iu(t.h,n),dl(n,s,e)}function wi(t,e){t.ia&&du(t.ia,function(n,s){Ae(e,s,n)}),t.l&&um({},function(n,s){Ae(e,s,n)})}function km(t,e,n){n=Math.min(t.i.length,n);var s=t.l?st(t.l.Ra,t.l,t):null;e:{var r=t.i;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=r[c].h;const u=r[c].g;if(l-=i,0>l)i=Math.max(0,r[c].h-100),a=!1;else try{KS(u,o,"req"+l+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function Rm(t){t.g||t.u||(t.Z=1,Qg(t.Ia,t),t.A=0)}function Ru(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=pi(st(t.Ia,t),Om(t,t.A)),t.A++,!0)}K.Ia=function(){if(this.u=null,Nm(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=pi(st(this.eb,this),t)}};K.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,ct(10),Ra(this),Nm(this))};function Nu(t){t.B!=null&&(ne.clearTimeout(t.B),t.B=null)}function Nm(t){t.g=new mi(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=rn(t.sa);Ae(e,"RID","rpc"),Ae(e,"SID",t.I),Ae(e,"CI",t.L?"0":"1"),Ae(e,"AID",t.T),Ae(e,"TYPE","xmlhttp"),wi(t,e),t.o&&t.s&&Au(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Ca(rn(e)),n.s=null,n.P=!0,om(n,t)}K.cb=function(){this.v!=null&&(this.v=null,Ra(this),Ru(this),ct(19))};function Fo(t){t.v!=null&&(ne.clearTimeout(t.v),t.v=null)}function Dm(t,e){var n=null;if(t.g==e){Fo(t),Nu(t),t.g=null;var s=2}else if(gl(t.h,e))n=e.D,vm(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;s=ba(),Xe(s,new nm(s,n)),Na(t)}else Rm(t);else if(r=e.o,r==3||r==0&&0<t.pa||!(s==1&&YS(t,e)||s==2&&Ru(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),r){case 1:ns(t,5);break;case 4:ns(t,10);break;case 3:ns(t,6);break;default:ns(t,2)}}}function Om(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function ns(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=st(t.kb,t);n||(n=new cs("//www.google.com/images/cleardot.gif"),ne.location&&ne.location.protocol=="http"||Mo(n,"https"),Ca(n)),WS(n.toString(),s)}else ct(2);t.G=0,t.l&&t.l.va(e),Pm(t),Am(t)}K.kb=function(t){t?(this.j.info("Successfully pinged google.com"),ct(2)):(this.j.info("Failed to ping google.com"),ct(1))};function Pm(t){if(t.G=0,t.la=[],t.l){const e=_m(t.h);(e.length!=0||t.i.length!=0)&&(Lf(t.la,e),Lf(t.la,t.i),t.h.i.length=0,hu(t.i),t.i.length=0),t.l.ua()}}function xm(t,e,n){var s=n instanceof cs?rn(n):new cs(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),Uo(s,s.m);else{var r=ne.location;s=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var i=new cs(null,void 0);s&&Mo(i,s),e&&(i.g=e),r&&Uo(i,r),n&&(i.l=n),s=i}return n=t.D,e=t.za,n&&e&&Ae(s,n,e),Ae(s,"VER",t.ma),wi(t,s),s}function Lm(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new Oe(new vi({jb:!0})):new Oe(t.ra),e.Ka(t.H),e}function Mm(){}K=Mm.prototype;K.xa=function(){};K.wa=function(){};K.va=function(){};K.ua=function(){};K.Ra=function(){};function Bo(){if(Xs&&!(10<=Number(pS)))throw Error("Environmental error: no available transport.")}Bo.prototype.g=function(t,e){return new _t(t,e)};function _t(t,e){qe.call(this),this.g=new Cm(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!Po(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Po(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new lr(this)}Je(_t,qe);_t.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;ct(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=xm(t,null,t.V),Na(t)};_t.prototype.close=function(){ku(this.g)};_t.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=vu(t),t=n);e.i.push(new jS(e.ab++,t)),e.G==3&&Na(e)};_t.prototype.M=function(){this.g.l=null,delete this.j,ku(this.g),delete this.g,_t.X.M.call(this)};function Um(t){bu.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Je(Um,bu);function Fm(){Tu.call(this),this.status=1}Je(Fm,Tu);function lr(t){this.g=t}Je(lr,Mm);lr.prototype.xa=function(){Xe(this.g,"a")};lr.prototype.wa=function(t){Xe(this.g,new Um(t))};lr.prototype.va=function(t){Xe(this.g,new Fm)};lr.prototype.ua=function(){Xe(this.g,"b")};Bo.prototype.createWebChannel=Bo.prototype.g;_t.prototype.send=_t.prototype.u;_t.prototype.open=_t.prototype.m;_t.prototype.close=_t.prototype.close;Ta.NO_ERROR=0;Ta.TIMEOUT=8;Ta.HTTP_ERROR=6;sm.COMPLETE="complete";rm.EventType=gi;gi.OPEN="a";gi.CLOSE="b";gi.ERROR="c";gi.MESSAGE="d";qe.prototype.listen=qe.prototype.N;Oe.prototype.listenOnce=Oe.prototype.O;Oe.prototype.getLastError=Oe.prototype.Oa;Oe.prototype.getLastErrorCode=Oe.prototype.Ea;Oe.prototype.getStatus=Oe.prototype.aa;Oe.prototype.getResponseJson=Oe.prototype.Sa;Oe.prototype.getResponseText=Oe.prototype.fa;Oe.prototype.send=Oe.prototype.da;Oe.prototype.setWithCredentials=Oe.prototype.Ka;var JS=function(){return new Bo},ZS=function(){return ba()},Tc=Ta,eC=sm,tC=ys,zf={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},nC=vi,Ki=rm,sC=Oe;const Gf="@firebase/firestore";/**
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
 */class et{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}et.UNAUTHENTICATED=new et(null),et.GOOGLE_CREDENTIALS=new et("google-credentials-uid"),et.FIRST_PARTY=new et("first-party-uid"),et.MOCK_USER=new et("mock-user");/**
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
 */let ur="9.14.0";/**
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
 */const ps=new au("@firebase/firestore");function Qf(){return ps.logLevel}function z(t,...e){if(ps.logLevel<=me.DEBUG){const n=e.map(Du);ps.debug(`Firestore (${ur}): ${t}`,...n)}}function on(t,...e){if(ps.logLevel<=me.ERROR){const n=e.map(Du);ps.error(`Firestore (${ur}): ${t}`,...n)}}function ml(t,...e){if(ps.logLevel<=me.WARN){const n=e.map(Du);ps.warn(`Firestore (${ur}): ${t}`,...n)}}function Du(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
 */function ie(t="Unexpected state"){const e=`FIRESTORE (${ur}) INTERNAL ASSERTION FAILED: `+t;throw on(e),new Error(e)}function Ie(t,e){t||ie()}function oe(t,e){return t}/**
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
 */const O={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Y extends gn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class en{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Bm{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class rC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(et.UNAUTHENTICATED))}shutdown(){}}class iC{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class oC{constructor(e){this.t=e,this.currentUser=et.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new en;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new en,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(z("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new en)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Ie(typeof s.accessToken=="string"),new Bm(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Ie(e===null||typeof e=="string"),new et(e)}}class aC{constructor(e,n,s,r){this.h=e,this.l=n,this.m=s,this.g=r,this.type="FirstParty",this.user=et.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(Ie(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class cC{constructor(e,n,s,r){this.h=e,this.l=n,this.m=s,this.g=r}getToken(){return Promise.resolve(new aC(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(et.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class lC{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class uC{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const s=i=>{i.error!=null&&z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.A;return this.A=i.token,z("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.T.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.T.getImmediate({optional:!0});i?r(i):z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ie(typeof n.token=="string"),this.A=n.token,new lC(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function hC(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class $m{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=hC(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function ye(t,e){return t<e?-1:t>e?1:0}function Ys(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
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
 */class Be{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new Y(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new Y(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new Y(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Y(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Be.fromMillis(Date.now())}static fromDate(e){return Be.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new Be(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ye(this.nanoseconds,e.nanoseconds):ye(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class ce{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ce(e)}static min(){return new ce(new Be(0,0))}static max(){return new ce(new Be(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Yr{constructor(e,n,s){n===void 0?n=0:n>e.length&&ie(),s===void 0?s=e.length-n:s>e.length-n&&ie(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Yr.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Yr?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ke extends Yr{construct(e,n,s){return new ke(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new Y(O.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new ke(n)}static emptyPath(){return new ke([])}}const fC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class nt extends Yr{construct(e,n,s){return new nt(e,n,s)}static isValidIdentifier(e){return fC.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),nt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new nt(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new Y(O.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new Y(O.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new Y(O.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new Y(O.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new nt(n)}static emptyPath(){return new nt([])}}/**
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
 */class J{constructor(e){this.path=e}static fromPath(e){return new J(ke.fromString(e))}static fromName(e){return new J(ke.fromString(e).popFirst(5))}static empty(){return new J(ke.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ke.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ke.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new J(new ke(e.slice()))}}function dC(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=ce.fromTimestamp(s===1e9?new Be(n+1,0):new Be(n,s));return new Bn(r,J.empty(),e)}function pC(t){return new Bn(t.readTime,t.key,-1)}class Bn{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new Bn(ce.min(),J.empty(),-1)}static max(){return new Bn(ce.max(),J.empty(),-1)}}function gC(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=J.comparator(t.documentKey,e.documentKey),n!==0?n:ye(t.largestBatchId,e.largestBatchId))}/**
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
 */const mC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class yC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Ei(t){if(t.code!==O.FAILED_PRECONDITION||t.message!==mC)throw t;z("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class P{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ie(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new P((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof P?n:P.resolve(n)}catch(n){return P.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):P.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):P.reject(n)}static resolve(e){return new P((n,s)=>{n(e)})}static reject(e){return new P((n,s)=>{s(e)})}static waitFor(e){return new P((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(e){let n=P.resolve(!1);for(const s of e)n=n.next(r=>r?P.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(e,n){return new P((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===i&&s(o)},u=>r(u))}})}static doWhile(e,n){return new P((s,r)=>{const i=()=>{e()===!0?n().next(()=>{i()},r):s()};i()})}}function bi(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Ou{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>n.writeSequenceNumber(s))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}/**
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
 */function Xf(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function hr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Vm(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */Ou.at=-1;class Ve{constructor(e,n){this.comparator=e,this.root=n||ze.EMPTY}insert(e,n){return new Ve(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ze.BLACK,null,null))}remove(e){return new Ve(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ze.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Wi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Wi(this.root,e,this.comparator,!1)}getReverseIterator(){return new Wi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Wi(this.root,e,this.comparator,!0)}}class Wi{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ze{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s!=null?s:ze.RED,this.left=r!=null?r:ze.EMPTY,this.right=i!=null?i:ze.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new ze(e!=null?e:this.key,n!=null?n:this.value,s!=null?s:this.color,r!=null?r:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return ze.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return ze.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ze.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ze.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ie();const e=this.left.check();if(e!==this.right.check())throw ie();return e+(this.isRed()?0:1)}}ze.EMPTY=null,ze.RED=!0,ze.BLACK=!1;ze.EMPTY=new class{constructor(){this.size=0}get key(){throw ie()}get value(){throw ie()}get color(){throw ie()}get left(){throw ie()}get right(){throw ie()}copy(t,e,n,s,r){return this}insert(t,e,n){return new ze(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class $e{constructor(e){this.comparator=e,this.data=new Ve(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Yf(this.data.getIterator())}getIteratorFrom(e){return new Yf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof $e)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new $e(this.comparator);return n.data=e,n}}class Yf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class $t{constructor(e){this.fields=e,e.sort(nt.comparator)}static empty(){return new $t([])}unionWith(e){let n=new $e(nt.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new $t(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ys(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class ot{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new ot(n)}static fromUint8Array(e){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new ot(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ye(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ot.EMPTY_BYTE_STRING=new ot("");const vC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function $n(t){if(Ie(!!t),typeof t=="string"){let e=0;const n=vC.exec(t);if(Ie(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Me(t.seconds),nanos:Me(t.nanos)}}function Me(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Js(t){return typeof t=="string"?ot.fromBase64String(t):ot.fromUint8Array(t)}/**
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
 */function jm(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Hm(t){const e=t.mapValue.fields.__previous_value__;return jm(e)?Hm(e):e}function Jr(t){const e=$n(t.mapValue.fields.__local_write_time__.timestampValue);return new Be(e.seconds,e.nanos)}/**
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
 */class _C{constructor(e,n,s,r,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Zr{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Zr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Zr&&e.projectId===this.projectId&&e.database===this.database}}function Da(t){return t==null}function $o(t){return t===0&&1/t==-1/0}function wC(t){return typeof t=="number"&&Number.isInteger(t)&&!$o(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const zi={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function gs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?jm(t)?4:EC(t)?9007199254740991:10:ie()}function Kt(t,e){if(t===e)return!0;const n=gs(t);if(n!==gs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Jr(t).isEqual(Jr(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=$n(s.timestampValue),o=$n(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return Js(s.bytesValue).isEqual(Js(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return Me(s.geoPointValue.latitude)===Me(r.geoPointValue.latitude)&&Me(s.geoPointValue.longitude)===Me(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return Me(s.integerValue)===Me(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=Me(s.doubleValue),o=Me(r.doubleValue);return i===o?$o(i)===$o(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return Ys(t.arrayValue.values||[],e.arrayValue.values||[],Kt);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(Xf(i)!==Xf(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!Kt(i[a],o[a])))return!1;return!0}(t,e);default:return ie()}}function ei(t,e){return(t.values||[]).find(n=>Kt(n,e))!==void 0}function Zs(t,e){if(t===e)return 0;const n=gs(t),s=gs(e);if(n!==s)return ye(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return ye(t.booleanValue,e.booleanValue);case 2:return function(r,i){const o=Me(r.integerValue||r.doubleValue),a=Me(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Jf(t.timestampValue,e.timestampValue);case 4:return Jf(Jr(t),Jr(e));case 5:return ye(t.stringValue,e.stringValue);case 6:return function(r,i){const o=Js(r),a=Js(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=ye(o[c],a[c]);if(l!==0)return l}return ye(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,i){const o=ye(Me(r.latitude),Me(i.latitude));return o!==0?o:ye(Me(r.longitude),Me(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=Zs(o[c],a[c]);if(l)return l}return ye(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,i){if(r===zi.mapValue&&i===zi.mapValue)return 0;if(r===zi.mapValue)return 1;if(i===zi.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=i.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=ye(a[u],l[u]);if(h!==0)return h;const f=Zs(o[a[u]],c[l[u]]);if(f!==0)return f}return ye(a.length,l.length)}(t.mapValue,e.mapValue);default:throw ie()}}function Jf(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ye(t,e);const n=$n(t),s=$n(e),r=ye(n.seconds,s.seconds);return r!==0?r:ye(n.nanos,s.nanos)}function Us(t){return yl(t)}function yl(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const r=$n(s);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Js(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,J.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=yl(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${yl(s.fields[a])}`;return i+"}"}(t.mapValue):ie();var e,n}function vl(t){return!!t&&"integerValue"in t}function Pu(t){return!!t&&"arrayValue"in t}function Zf(t){return!!t&&"nullValue"in t}function ed(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function lo(t){return!!t&&"mapValue"in t}function Pr(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return hr(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=Pr(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Pr(t.arrayValue.values[n]);return e}return Object.assign({},t)}function EC(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class bt{constructor(e){this.value=e}static empty(){return new bt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!lo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Pr(n)}setAll(e){let n=nt.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=Pr(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());lo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Kt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];lo(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){hr(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new bt(Pr(this.value))}}function qm(t){const e=[];return hr(t.fields,(n,s)=>{const r=new nt([n]);if(lo(s)){const i=qm(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new $t(e)}/**
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
 */class Ge{constructor(e,n,s,r,i,o){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.data=i,this.documentState=o}static newInvalidDocument(e){return new Ge(e,0,ce.min(),ce.min(),bt.empty(),0)}static newFoundDocument(e,n,s){return new Ge(e,1,n,ce.min(),s,0)}static newNoDocument(e,n){return new Ge(e,2,n,ce.min(),bt.empty(),0)}static newUnknownDocument(e,n){return new Ge(e,3,n,ce.min(),bt.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=bt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=bt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ce.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ge&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ge(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class bC{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.ht=null}}function td(t,e=null,n=[],s=[],r=null,i=null,o=null){return new bC(t,e,n,s,r,i,o)}function xu(t){const e=oe(t);if(e.ht===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>{return(r=s).field.canonicalString()+r.op.toString()+Us(r.value);var r}).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),Da(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Us(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Us(s)).join(",")),e.ht=n}return e.ht}function TC(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(s=n).field.canonicalString()} ${s.op} ${Us(s.value)}`;var s}).join(", ")}]`),Da(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>Us(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>Us(n)).join(",")),`Target(${e})`}function Lu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let r=0;r<t.orderBy.length;r++)if(!DC(t.orderBy[r],e.orderBy[r]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let r=0;r<t.filters.length;r++)if(n=t.filters[r],s=e.filters[r],n.op!==s.op||!n.field.isEqual(s.field)||!Kt(n.value,s.value))return!1;var n,s;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!sd(t.startAt,e.startAt)&&sd(t.endAt,e.endAt)}function _l(t){return J.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class dt extends class{}{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.lt(e,n,s):new IC(e,n,s):n==="array-contains"?new AC(e,s):n==="in"?new kC(e,s):n==="not-in"?new RC(e,s):n==="array-contains-any"?new NC(e,s):new dt(e,n,s)}static lt(e,n,s){return n==="in"?new SC(e,s):new CC(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.ft(Zs(n,this.value)):n!==null&&gs(this.value)===gs(n)&&this.ft(Zs(n,this.value))}ft(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ie()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class IC extends dt{constructor(e,n,s){super(e,n,s),this.key=J.fromName(s.referenceValue)}matches(e){const n=J.comparator(e.key,this.key);return this.ft(n)}}class SC extends dt{constructor(e,n){super(e,"in",n),this.keys=Km("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class CC extends dt{constructor(e,n){super(e,"not-in",n),this.keys=Km("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Km(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>J.fromName(s.referenceValue))}class AC extends dt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Pu(n)&&ei(n.arrayValue,this.value)}}class kC extends dt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ei(this.value.arrayValue,n)}}class RC extends dt{constructor(e,n){super(e,"not-in",n)}matches(e){if(ei(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ei(this.value.arrayValue,n)}}class NC extends dt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Pu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>ei(this.value.arrayValue,s))}}class Vo{constructor(e,n){this.position=e,this.inclusive=n}}class xr{constructor(e,n="asc"){this.field=e,this.dir=n}}function DC(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function nd(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=J.comparator(J.fromName(o.referenceValue),n.key):s=Zs(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function sd(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Kt(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Oa{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this._t=null,this.wt=null,this.startAt,this.endAt}}function OC(t,e,n,s,r,i,o,a){return new Oa(t,e,n,s,r,i,o,a)}function Mu(t){return new Oa(t)}function rd(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function PC(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function xC(t){for(const e of t.filters)if(e.dt())return e.field;return null}function LC(t){return t.collectionGroup!==null}function ti(t){const e=oe(t);if(e._t===null){e._t=[];const n=xC(e),s=PC(e);if(n!==null&&s===null)n.isKeyField()||e._t.push(new xr(n)),e._t.push(new xr(nt.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e._t.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e._t.push(new xr(nt.keyField(),i))}}}return e._t}function an(t){const e=oe(t);if(!e.wt)if(e.limitType==="F")e.wt=td(e.path,e.collectionGroup,ti(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of ti(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new xr(i.field,o))}const s=e.endAt?new Vo(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Vo(e.startAt.position,e.startAt.inclusive):null;e.wt=td(e.path,e.collectionGroup,n,e.filters,e.limit,s,r)}return e.wt}function wl(t,e,n){return new Oa(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Pa(t,e){return Lu(an(t),an(e))&&t.limitType===e.limitType}function Wm(t){return`${xu(an(t))}|lt:${t.limitType}`}function El(t){return`Query(target=${TC(an(t))}; limitType=${t.limitType})`}function Uu(t,e){return e.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):J.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,s){for(const r of n.explicitOrderBy)if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=nd(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,ti(n),s)||n.endAt&&!function(r,i,o){const a=nd(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,ti(n),s))}(t,e)}function MC(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function zm(t){return(e,n)=>{let s=!1;for(const r of ti(t)){const i=UC(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function UC(t,e,n){const s=t.field.isKeyField()?J.comparator(e.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?Zs(a,c):ie()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return ie()}}/**
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
 */function Gm(t,e){if(t.gt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:$o(e)?"-0":e}}function Qm(t){return{integerValue:""+t}}function FC(t,e){return wC(e)?Qm(e):Gm(t,e)}/**
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
 */class xa{constructor(){this._=void 0}}function BC(t,e,n){return t instanceof jo?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,e):t instanceof ni?Ym(t,e):t instanceof si?Jm(t,e):function(s,r){const i=Xm(s,r),o=id(i)+id(s.yt);return vl(i)&&vl(s.yt)?Qm(o):Gm(s.It,o)}(t,e)}function $C(t,e,n){return t instanceof ni?Ym(t,e):t instanceof si?Jm(t,e):n}function Xm(t,e){return t instanceof Ho?vl(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class jo extends xa{}class ni extends xa{constructor(e){super(),this.elements=e}}function Ym(t,e){const n=Zm(e);for(const s of t.elements)n.some(r=>Kt(r,s))||n.push(s);return{arrayValue:{values:n}}}class si extends xa{constructor(e){super(),this.elements=e}}function Jm(t,e){let n=Zm(e);for(const s of t.elements)n=n.filter(r=>!Kt(r,s));return{arrayValue:{values:n}}}class Ho extends xa{constructor(e,n){super(),this.It=e,this.yt=n}}function id(t){return Me(t.integerValue||t.doubleValue)}function Zm(t){return Pu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function VC(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof ni&&s instanceof ni||n instanceof si&&s instanceof si?Ys(n.elements,s.elements,Kt):n instanceof Ho&&s instanceof Ho?Kt(n.yt,s.yt):n instanceof jo&&s instanceof jo}(t.transform,e.transform)}class jC{constructor(e,n){this.version=e,this.transformResults=n}}class Vt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Vt}static exists(e){return new Vt(void 0,e)}static updateTime(e){return new Vt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function uo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class La{}function ey(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Fu(t.key,Vt.none()):new Ti(t.key,t.data,Vt.none());{const n=t.data,s=bt.empty();let r=new $e(nt.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new vs(t.key,s,new $t(r.toArray()),Vt.none())}}function HC(t,e,n){t instanceof Ti?function(s,r,i){const o=s.value.clone(),a=ad(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof vs?function(s,r,i){if(!uo(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=ad(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(ty(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function Lr(t,e,n,s){return t instanceof Ti?function(r,i,o,a){if(!uo(r.precondition,i))return o;const c=r.value.clone(),l=cd(r.fieldTransforms,a,i);return c.setAll(l),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof vs?function(r,i,o,a){if(!uo(r.precondition,i))return o;const c=cd(r.fieldTransforms,a,i),l=i.data;return l.setAll(ty(r)),l.setAll(c),i.convertToFoundDocument(i.version,l).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(u=>u.field))}(t,e,n,s):function(r,i,o){return uo(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function qC(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=Xm(s.transform,r||null);i!=null&&(n===null&&(n=bt.empty()),n.set(s.field,i))}return n||null}function od(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Ys(n,s,(r,i)=>VC(r,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ti extends La{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class vs extends La{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function ty(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function ad(t,e,n){const s=new Map;Ie(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,$C(o,a,n[r]))}return s}function cd(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,BC(i,o,e))}return s}class Fu extends La{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class KC extends La{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class WC{constructor(e){this.count=e}}/**
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
 */var Le,he;function zC(t){switch(t){default:return ie();case O.CANCELLED:case O.UNKNOWN:case O.DEADLINE_EXCEEDED:case O.RESOURCE_EXHAUSTED:case O.INTERNAL:case O.UNAVAILABLE:case O.UNAUTHENTICATED:return!1;case O.INVALID_ARGUMENT:case O.NOT_FOUND:case O.ALREADY_EXISTS:case O.PERMISSION_DENIED:case O.FAILED_PRECONDITION:case O.ABORTED:case O.OUT_OF_RANGE:case O.UNIMPLEMENTED:case O.DATA_LOSS:return!0}}function ny(t){if(t===void 0)return on("GRPC error has no .code"),O.UNKNOWN;switch(t){case Le.OK:return O.OK;case Le.CANCELLED:return O.CANCELLED;case Le.UNKNOWN:return O.UNKNOWN;case Le.DEADLINE_EXCEEDED:return O.DEADLINE_EXCEEDED;case Le.RESOURCE_EXHAUSTED:return O.RESOURCE_EXHAUSTED;case Le.INTERNAL:return O.INTERNAL;case Le.UNAVAILABLE:return O.UNAVAILABLE;case Le.UNAUTHENTICATED:return O.UNAUTHENTICATED;case Le.INVALID_ARGUMENT:return O.INVALID_ARGUMENT;case Le.NOT_FOUND:return O.NOT_FOUND;case Le.ALREADY_EXISTS:return O.ALREADY_EXISTS;case Le.PERMISSION_DENIED:return O.PERMISSION_DENIED;case Le.FAILED_PRECONDITION:return O.FAILED_PRECONDITION;case Le.ABORTED:return O.ABORTED;case Le.OUT_OF_RANGE:return O.OUT_OF_RANGE;case Le.UNIMPLEMENTED:return O.UNIMPLEMENTED;case Le.DATA_LOSS:return O.DATA_LOSS;default:return ie()}}(he=Le||(Le={}))[he.OK=0]="OK",he[he.CANCELLED=1]="CANCELLED",he[he.UNKNOWN=2]="UNKNOWN",he[he.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",he[he.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",he[he.NOT_FOUND=5]="NOT_FOUND",he[he.ALREADY_EXISTS=6]="ALREADY_EXISTS",he[he.PERMISSION_DENIED=7]="PERMISSION_DENIED",he[he.UNAUTHENTICATED=16]="UNAUTHENTICATED",he[he.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",he[he.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",he[he.ABORTED=10]="ABORTED",he[he.OUT_OF_RANGE=11]="OUT_OF_RANGE",he[he.UNIMPLEMENTED=12]="UNIMPLEMENTED",he[he.INTERNAL=13]="INTERNAL",he[he.UNAVAILABLE=14]="UNAVAILABLE",he[he.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class fr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){hr(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return Vm(this.inner)}size(){return this.innerSize}}/**
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
 */const GC=new Ve(J.comparator);function cn(){return GC}const sy=new Ve(J.comparator);function Tr(...t){let e=sy;for(const n of t)e=e.insert(n.key,n);return e}function ry(t){let e=sy;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function ss(){return Mr()}function iy(){return Mr()}function Mr(){return new fr(t=>t.toString(),(t,e)=>t.isEqual(e))}const QC=new Ve(J.comparator),XC=new $e(J.comparator);function ue(...t){let e=XC;for(const n of t)e=e.add(n);return e}const YC=new $e(ye);function oy(){return YC}/**
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
 */class Ma{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const r=new Map;return r.set(e,Ii.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new Ma(ce.min(),r,oy(),cn(),ue())}}class Ii{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new Ii(s,n,ue(),ue(),ue())}}/**
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
 */class ho{constructor(e,n,s,r){this.Tt=e,this.removedTargetIds=n,this.key=s,this.Et=r}}class ay{constructor(e,n){this.targetId=e,this.At=n}}class cy{constructor(e,n,s=ot.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class ld{constructor(){this.Rt=0,this.bt=hd(),this.Pt=ot.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return this.Rt!==0}get Dt(){return this.Vt}Ct(e){e.approximateByteSize()>0&&(this.Vt=!0,this.Pt=e)}xt(){let e=ue(),n=ue(),s=ue();return this.bt.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:ie()}}),new Ii(this.Pt,this.vt,e,n,s)}Nt(){this.Vt=!1,this.bt=hd()}kt(e,n){this.Vt=!0,this.bt=this.bt.insert(e,n)}Ot(e){this.Vt=!0,this.bt=this.bt.remove(e)}Mt(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}}class JC{constructor(e){this.Bt=e,this.Lt=new Map,this.Ut=cn(),this.qt=ud(),this.Kt=new $e(ye)}Gt(e){for(const n of e.Tt)e.Et&&e.Et.isFoundDocument()?this.Qt(n,e.Et):this.jt(n,e.key,e.Et);for(const n of e.removedTargetIds)this.jt(n,e.key,e.Et)}Wt(e){this.forEachTarget(e,n=>{const s=this.zt(n);switch(e.state){case 0:this.Ht(n)&&s.Ct(e.resumeToken);break;case 1:s.Ft(),s.St||s.Nt(),s.Ct(e.resumeToken);break;case 2:s.Ft(),s.St||this.removeTarget(n);break;case 3:this.Ht(n)&&(s.$t(),s.Ct(e.resumeToken));break;case 4:this.Ht(n)&&(this.Jt(n),s.Ct(e.resumeToken));break;default:ie()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Lt.forEach((s,r)=>{this.Ht(r)&&n(r)})}Yt(e){const n=e.targetId,s=e.At.count,r=this.Xt(n);if(r){const i=r.target;if(_l(i))if(s===0){const o=new J(i.path);this.jt(n,o,Ge.newNoDocument(o,ce.min()))}else Ie(s===1);else this.Zt(n)!==s&&(this.Jt(n),this.Kt=this.Kt.add(n))}}te(e){const n=new Map;this.Lt.forEach((i,o)=>{const a=this.Xt(o);if(a){if(i.current&&_l(a.target)){const c=new J(a.target.path);this.Ut.get(c)!==null||this.ee(o,c)||this.jt(o,c,Ge.newNoDocument(c,e))}i.Dt&&(n.set(o,i.xt()),i.Nt())}});let s=ue();this.qt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Xt(c);return!l||l.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))}),this.Ut.forEach((i,o)=>o.setReadTime(e));const r=new Ma(e,n,this.Kt,this.Ut,s);return this.Ut=cn(),this.qt=ud(),this.Kt=new $e(ye),r}Qt(e,n){if(!this.Ht(e))return;const s=this.ee(e,n.key)?2:0;this.zt(e).kt(n.key,s),this.Ut=this.Ut.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ne(n.key).add(e))}jt(e,n,s){if(!this.Ht(e))return;const r=this.zt(e);this.ee(e,n)?r.kt(n,1):r.Ot(n),this.qt=this.qt.insert(n,this.ne(n).delete(e)),s&&(this.Ut=this.Ut.insert(n,s))}removeTarget(e){this.Lt.delete(e)}Zt(e){const n=this.zt(e).xt();return this.Bt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Mt(e){this.zt(e).Mt()}zt(e){let n=this.Lt.get(e);return n||(n=new ld,this.Lt.set(e,n)),n}ne(e){let n=this.qt.get(e);return n||(n=new $e(ye),this.qt=this.qt.insert(e,n)),n}Ht(e){const n=this.Xt(e)!==null;return n||z("WatchChangeAggregator","Detected inactive target",e),n}Xt(e){const n=this.Lt.get(e);return n&&n.St?null:this.Bt.se(e)}Jt(e){this.Lt.set(e,new ld),this.Bt.getRemoteKeysForTarget(e).forEach(n=>{this.jt(e,n,null)})}ee(e,n){return this.Bt.getRemoteKeysForTarget(e).has(n)}}function ud(){return new Ve(J.comparator)}function hd(){return new Ve(J.comparator)}/**
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
 */const ZC=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),eA=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class tA{constructor(e,n){this.databaseId=e,this.gt=n}}function qo(t,e){return t.gt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ly(t,e){return t.gt?e.toBase64():e.toUint8Array()}function nA(t,e){return qo(t,e.toTimestamp())}function tn(t){return Ie(!!t),ce.fromTimestamp(function(e){const n=$n(e);return new Be(n.seconds,n.nanos)}(t))}function Bu(t,e){return function(n){return new ke(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function uy(t){const e=ke.fromString(t);return Ie(dy(e)),e}function bl(t,e){return Bu(t.databaseId,e.path)}function Ic(t,e){const n=uy(e);if(n.get(1)!==t.databaseId.projectId)throw new Y(O.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Y(O.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new J(hy(n))}function Tl(t,e){return Bu(t.databaseId,e)}function sA(t){const e=uy(t);return e.length===4?ke.emptyPath():hy(e)}function Il(t){return new ke(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function hy(t){return Ie(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function fd(t,e,n){return{name:bl(t,e),fields:n.value.mapValue.fields}}function rA(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:ie()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(c,l){return c.gt?(Ie(l===void 0||typeof l=="string"),ot.fromBase64String(l||"")):(Ie(l===void 0||l instanceof Uint8Array),ot.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?O.UNKNOWN:ny(c.code);return new Y(l,c.message||"")}(o);n=new cy(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=Ic(t,s.document.name),i=tn(s.document.updateTime),o=new bt({mapValue:{fields:s.document.fields}}),a=Ge.newFoundDocument(r,i,o),c=s.targetIds||[],l=s.removedTargetIds||[];n=new ho(c,l,a.key,a)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=Ic(t,s.document),i=s.readTime?tn(s.readTime):ce.min(),o=Ge.newNoDocument(r,i),a=s.removedTargetIds||[];n=new ho([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=Ic(t,s.document),i=s.removedTargetIds||[];n=new ho([],i,r,null)}else{if(!("filter"in e))return ie();{e.filter;const s=e.filter;s.targetId;const r=s.count||0,i=new WC(r),o=s.targetId;n=new ay(o,i)}}return n}function iA(t,e){let n;if(e instanceof Ti)n={update:fd(t,e.key,e.value)};else if(e instanceof Fu)n={delete:bl(t,e.key)};else if(e instanceof vs)n={update:fd(t,e.key,e.data),updateMask:gA(e.fieldMask)};else{if(!(e instanceof KC))return ie();n={verify:bl(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof jo)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof ni)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof si)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Ho)return{fieldPath:i.field.canonicalString(),increment:o.yt};throw ie()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:nA(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:ie()}(t,e.precondition)),n}function oA(t,e){return t&&t.length>0?(Ie(e!==void 0),t.map(n=>function(s,r){let i=s.updateTime?tn(s.updateTime):tn(r);return i.isEqual(ce.min())&&(i=tn(r)),new jC(i,s.transformResults||[])}(n,e))):[]}function aA(t,e){return{documents:[Tl(t,e.path)]}}function cA(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=Tl(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Tl(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length===0)return;const l=c.map(u=>function(h){if(h.op==="=="){if(ed(h.value))return{unaryFilter:{field:Ts(h.field),op:"IS_NAN"}};if(Zf(h.value))return{unaryFilter:{field:Ts(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(ed(h.value))return{unaryFilter:{field:Ts(h.field),op:"IS_NOT_NAN"}};if(Zf(h.value))return{unaryFilter:{field:Ts(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ts(h.field),op:fA(h.op),value:h.value}}}(u));return l.length===1?l[0]:{compositeFilter:{op:"AND",filters:l}}}(e.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:Ts(u.field),direction:hA(u.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,l){return c.gt||Da(l)?l:{value:l}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function lA(t){let e=sA(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){Ie(s===1);const u=n.from[0];u.allDescendants?r=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=fy(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new xr(ks(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,Da(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(u){const h=!!u.before,f=u.values||[];return new Vo(f,h)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const h=!u.before,f=u.values||[];return new Vo(f,h)}(n.endAt)),OC(e,r,o,i,a,"F",c,l)}function uA(t,e){const n=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return ie()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function fy(t){return t?t.unaryFilter!==void 0?[pA(t)]:t.fieldFilter!==void 0?[dA(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>fy(e)).reduce((e,n)=>e.concat(n)):ie():[]}function hA(t){return ZC[t]}function fA(t){return eA[t]}function Ts(t){return{fieldPath:t.canonicalString()}}function ks(t){return nt.fromServerFormat(t.fieldPath)}function dA(t){return dt.create(ks(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ie()}}(t.fieldFilter.op),t.fieldFilter.value)}function pA(t){switch(t.unaryFilter.op){case"IS_NAN":const e=ks(t.unaryFilter.field);return dt.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=ks(t.unaryFilter.field);return dt.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=ks(t.unaryFilter.field);return dt.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=ks(t.unaryFilter.field);return dt.create(r,"!=",{nullValue:"NULL_VALUE"});default:return ie()}}function gA(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function dy(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class mA{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&HC(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=Lr(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=Lr(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=iy();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const c=ey(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(ce.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ue())}isEqual(e){return this.batchId===e.batchId&&Ys(this.mutations,e.mutations,(n,s)=>od(n,s))&&Ys(this.baseMutations,e.baseMutations,(n,s)=>od(n,s))}}class $u{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){Ie(e.mutations.length===s.length);let r=QC;const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new $u(e,n,s,r)}}/**
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
 */class yA{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class ls{constructor(e,n,s,r,i=ce.min(),o=ce.min(),a=ot.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new ls(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new ls(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new ls(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class vA{constructor(e){this.re=e}}function _A(t){const e=lA({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?wl(e,e.limit,"L"):e}/**
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
 */class wA{constructor(){this.Ye=new EA}addToCollectionParentIndex(e,n){return this.Ye.add(n),P.resolve()}getCollectionParents(e,n){return P.resolve(this.Ye.getEntries(n))}addFieldIndex(e,n){return P.resolve()}deleteFieldIndex(e,n){return P.resolve()}getDocumentsMatchingTarget(e,n){return P.resolve(null)}getIndexType(e,n){return P.resolve(0)}getFieldIndexes(e,n){return P.resolve([])}getNextCollectionGroupToUpdate(e){return P.resolve(null)}getMinOffset(e,n){return P.resolve(Bn.min())}getMinOffsetFromCollectionGroup(e,n){return P.resolve(Bn.min())}updateCollectionGroup(e,n,s){return P.resolve()}updateIndexEntries(e,n){return P.resolve()}}class EA{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new $e(ke.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new $e(ke.comparator)).toArray()}}/**
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
 */class er{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new er(0)}static vn(){return new er(-1)}}/**
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
 */class bA{constructor(){this.changes=new fr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ge.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?P.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class TA{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class IA{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.getBaseDocument(e,n,s))).next(r=>(s!==null&&Lr(s.mutation,r,$t.empty(),Be.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,ue()).next(()=>s))}getLocalViewOfDocuments(e,n,s=ue()){const r=ss();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let o=Tr();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=ss();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,ue()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,r){let i=cn();const o=Mr(),a=Mr();return n.forEach((c,l)=>{const u=s.get(l.key);r.has(l.key)&&(u===void 0||u.mutation instanceof vs)?i=i.insert(l.key,l):u!==void 0&&(o.set(l.key,u.mutation.getFieldMask()),Lr(u.mutation,l,u.mutation.getFieldMask(),Be.now()))}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new TA(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=Mr();let r=new Ve((o,a)=>o-a),i=ue();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=s.get(c)||$t.empty();u=a.applyToLocalView(l,u),s.set(c,u);const h=(r.get(a.batchId)||ue()).add(c);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=iy();u.forEach(f=>{if(!i.has(f)){const d=ey(n.get(f),s.get(f));d!==null&&h.set(f,d),i=i.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return P.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(r){return J.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):LC(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):P.resolve(ss());let a=-1,c=i;return o.next(l=>P.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?P.resolve():this.getBaseDocument(e,u,h).next(f=>{c=c.insert(u,f)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,ue())).next(u=>({batchId:a,changes:ry(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new J(n)).next(s=>{let r=Tr();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const r=n.collectionGroup;let i=Tr();return this.indexManager.getCollectionParents(e,r).next(o=>P.forEach(o,a=>{const c=function(l,u){return new Oa(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(l=>{l.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,s){let r;return this.remoteDocumentCache.getAllFromCollection(e,n.path,s).next(i=>(r=i,this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId))).next(i=>{i.forEach((a,c)=>{const l=c.getKey();r.get(l)===null&&(r=r.insert(l,Ge.newInvalidDocument(l)))});let o=Tr();return r.forEach((a,c)=>{const l=i.get(a);l!==void 0&&Lr(l.mutation,c,$t.empty(),Be.now()),Uu(n,c)&&(o=o.insert(a,c))}),o})}getBaseDocument(e,n,s){return s===null||s.mutation.type===1?this.remoteDocumentCache.getEntry(e,n):P.resolve(Ge.newInvalidDocument(n))}}/**
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
 */class SA{constructor(e){this.It=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return P.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var s;return this.Zn.set(n.id,{id:(s=n).id,version:s.version,createTime:tn(s.createTime)}),P.resolve()}getNamedQuery(e,n){return P.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(s){return{name:s.name,query:_A(s.bundledQuery),readTime:tn(s.readTime)}}(n)),P.resolve()}}/**
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
 */class CA{constructor(){this.overlays=new Ve(J.comparator),this.es=new Map}getOverlay(e,n){return P.resolve(this.overlays.get(n))}getOverlays(e,n){const s=ss();return P.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.ue(e,n,i)}),P.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.es.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.es.delete(s)),P.resolve()}getOverlaysForCollection(e,n,s){const r=ss(),i=n.length+1,o=new J(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return P.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new Ve((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>s){let u=i.get(l.largestBatchId);u===null&&(u=ss(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=ss(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=r)););return P.resolve(a)}ue(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.es.get(r.largestBatchId).delete(s.key);this.es.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new yA(n,s));let i=this.es.get(n);i===void 0&&(i=ue(),this.es.set(n,i)),this.es.set(n,i.add(s.key))}}/**
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
 */class Vu{constructor(){this.ns=new $e(je.ss),this.rs=new $e(je.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const s=new je(e,n);this.ns=this.ns.add(s),this.rs=this.rs.add(s)}us(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.cs(new je(e,n))}hs(e,n){e.forEach(s=>this.removeReference(s,n))}ls(e){const n=new J(new ke([])),s=new je(n,e),r=new je(n,e+1),i=[];return this.rs.forEachInRange([s,r],o=>{this.cs(o),i.push(o.key)}),i}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new J(new ke([])),s=new je(n,e),r=new je(n,e+1);let i=ue();return this.rs.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new je(e,0),s=this.ns.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class je{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return J.comparator(e.key,n.key)||ye(e._s,n._s)}static os(e,n){return ye(e._s,n._s)||J.comparator(e.key,n.key)}}/**
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
 */class AA{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new $e(je.ss)}checkEmpty(e){return P.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new mA(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.gs=this.gs.add(new je(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return P.resolve(o)}lookupMutationBatch(e,n){return P.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.ps(s),i=r<0?0:r;return P.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return P.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return P.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new je(n,0),r=new je(n,Number.POSITIVE_INFINITY),i=[];return this.gs.forEachInRange([s,r],o=>{const a=this.ys(o._s);i.push(a)}),P.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new $e(ye);return n.forEach(r=>{const i=new je(r,0),o=new je(r,Number.POSITIVE_INFINITY);this.gs.forEachInRange([i,o],a=>{s=s.add(a._s)})}),P.resolve(this.Is(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;J.isDocumentKey(i)||(i=i.child(""));const o=new je(new J(i),0);let a=new $e(ye);return this.gs.forEachWhile(c=>{const l=c.key.path;return!!s.isPrefixOf(l)&&(l.length===r&&(a=a.add(c._s)),!0)},o),P.resolve(this.Is(a))}Is(e){const n=[];return e.forEach(s=>{const r=this.ys(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){Ie(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.gs;return P.forEach(n.mutations,r=>{const i=new je(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.gs=s})}An(e){}containsKey(e,n){const s=new je(n,0),r=this.gs.firstAfterOrEqual(s);return P.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,P.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class kA{constructor(e){this.Es=e,this.docs=new Ve(J.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Es(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return P.resolve(s?s.document.mutableCopy():Ge.newInvalidDocument(n))}getEntries(e,n){let s=cn();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():Ge.newInvalidDocument(r))}),P.resolve(s)}getAllFromCollection(e,n,s){let r=cn();const i=new J(n.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:a,value:{document:c}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||gC(pC(c),s)<=0||(r=r.insert(c.key,c.mutableCopy()))}return P.resolve(r)}getAllFromCollectionGroup(e,n,s,r){ie()}As(e,n){return P.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new RA(this)}getSize(e){return P.resolve(this.size)}}class RA extends bA{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.Yn.addEntry(e,r)):this.Yn.removeEntry(s)}),P.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
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
 */class NA{constructor(e){this.persistence=e,this.Rs=new fr(n=>xu(n),Lu),this.lastRemoteSnapshotVersion=ce.min(),this.highestTargetId=0,this.bs=0,this.Ps=new Vu,this.targetCount=0,this.vs=er.Pn()}forEachTarget(e,n){return this.Rs.forEach((s,r)=>n(r)),P.resolve()}getLastRemoteSnapshotVersion(e){return P.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return P.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),P.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.bs&&(this.bs=n),P.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new er(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,P.resolve()}updateTargetData(e,n){return this.Dn(n),P.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,P.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Rs.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),P.waitFor(i).next(()=>r)}getTargetCount(e){return P.resolve(this.targetCount)}getTargetData(e,n){const s=this.Rs.get(n)||null;return P.resolve(s)}addMatchingKeys(e,n,s){return this.Ps.us(n,s),P.resolve()}removeMatchingKeys(e,n,s){this.Ps.hs(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),P.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),P.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Ps.ds(n);return P.resolve(s)}containsKey(e,n){return P.resolve(this.Ps.containsKey(n))}}/**
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
 */class DA{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new Ou(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new NA(this),this.indexManager=new wA,this.remoteDocumentCache=function(s){return new kA(s)}(s=>this.referenceDelegate.xs(s)),this.It=new vA(n),this.Ns=new SA(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new CA,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Vs[e.toKey()];return s||(s=new AA(n,this.referenceDelegate),this.Vs[e.toKey()]=s),s}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,s){z("MemoryPersistence","Starting transaction:",e);const r=new OA(this.Ss.next());return this.referenceDelegate.ks(),s(r).next(i=>this.referenceDelegate.Os(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Ms(e,n){return P.or(Object.values(this.Vs).map(s=>()=>s.containsKey(e,n)))}}class OA extends yC{constructor(e){super(),this.currentSequenceNumber=e}}class ju{constructor(e){this.persistence=e,this.Fs=new Vu,this.$s=null}static Bs(e){return new ju(e)}get Ls(){if(this.$s)return this.$s;throw ie()}addReference(e,n,s){return this.Fs.addReference(s,n),this.Ls.delete(s.toString()),P.resolve()}removeReference(e,n,s){return this.Fs.removeReference(s,n),this.Ls.add(s.toString()),P.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),P.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(r=>this.Ls.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.Ls.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}ks(){this.$s=new Set}Os(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return P.forEach(this.Ls,s=>{const r=J.fromPath(s);return this.Us(e,r).next(i=>{i||n.removeEntry(r,ce.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.Us(e,n).next(s=>{s?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}Us(e,n){return P.or([()=>P.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ms(e,n)])}}/**
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
 */class Hu{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.Si=s,this.Di=r}static Ci(e,n){let s=ue(),r=ue();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Hu(e,n.fromCache,s,r)}}/**
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
 */class PA{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,s,r){return this.ki(e,n).next(i=>i||this.Oi(e,n,r,s)).next(i=>i||this.Mi(e,n))}ki(e,n){if(rd(n))return P.resolve(null);let s=an(n);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=wl(n,null,"F"),s=an(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=ue(...i);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const l=this.Fi(n,a);return this.$i(n,l,o,c.readTime)?this.ki(e,wl(n,null,"F")):this.Bi(e,l,n,c)}))})))}Oi(e,n,s,r){return rd(n)||r.isEqual(ce.min())?this.Mi(e,n):this.Ni.getDocuments(e,s).next(i=>{const o=this.Fi(n,i);return this.$i(n,o,s,r)?this.Mi(e,n):(Qf()<=me.DEBUG&&z("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),El(n)),this.Bi(e,o,n,dC(r,-1)))})}Fi(e,n){let s=new $e(zm(e));return n.forEach((r,i)=>{Uu(e,i)&&(s=s.add(i))}),s}$i(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Mi(e,n){return Qf()<=me.DEBUG&&z("QueryEngine","Using full collection scan to execute query:",El(n)),this.Ni.getDocumentsMatchingQuery(e,n,Bn.min())}Bi(e,n,s,r){return this.Ni.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class xA{constructor(e,n,s,r){this.persistence=e,this.Li=n,this.It=r,this.Ui=new Ve(ye),this.qi=new fr(i=>xu(i),Lu),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(s)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new IA(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ui))}}function LA(t,e,n,s){return new xA(t,e,n,s)}async function py(t,e){const n=oe(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.Qi(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=ue();for(const l of r){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(s,c).next(l=>({ji:l,removedBatchIds:o,addedBatchIds:a}))})})}function MA(t,e){const n=oe(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,h=u.keys();let f=P.resolve();return h.forEach(d=>{f=f.next(()=>l.getEntry(a,d)).next(m=>{const w=c.docVersions.get(d);Ie(w!==null),m.version.compareTo(w)<0&&(u.applyToRemoteDocument(m,c),m.isValidDocument()&&(m.setReadTime(c.commitVersion),l.addEntry(m)))})}),f.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=ue();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,r))})}function gy(t){const e=oe(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function UA(t,e){const n=oe(t),s=e.snapshotVersion;let r=n.Ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});r=n.Ui;const a=[];e.targetChanges.forEach((u,h)=>{const f=r.get(h);if(!f)return;a.push(n.Cs.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.Cs.addMatchingKeys(i,u.addedDocuments,h)));let d=f.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(h)?d=d.withResumeToken(ot.EMPTY_BYTE_STRING,ce.min()).withLastLimboFreeSnapshotVersion(ce.min()):u.resumeToken.approximateByteSize()>0&&(d=d.withResumeToken(u.resumeToken,s)),r=r.insert(h,d),function(m,w,I){return m.resumeToken.approximateByteSize()===0||w.snapshotVersion.toMicroseconds()-m.snapshotVersion.toMicroseconds()>=3e8?!0:I.addedDocuments.size+I.modifiedDocuments.size+I.removedDocuments.size>0}(f,d,u)&&a.push(n.Cs.updateTargetData(i,d))});let c=cn(),l=ue();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(FA(i,o,e.documentUpdates).next(u=>{c=u.Wi,l=u.zi})),!s.isEqual(ce.min())){const u=n.Cs.getLastRemoteSnapshotVersion(i).next(h=>n.Cs.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(u)}return P.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.Ui=r,i))}function FA(t,e,n){let s=ue(),r=ue();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let o=cn();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(ce.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):z("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{Wi:o,zi:r}})}function BA(t,e){const n=oe(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function $A(t,e){const n=oe(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Cs.getTargetData(s,e).next(i=>i?(r=i,P.resolve(r)):n.Cs.allocateTargetId(s).next(o=>(r=new ls(e,o,0,s.currentSequenceNumber),n.Cs.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.Ui.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ui=n.Ui.insert(s.targetId,s),n.qi.set(e,s.targetId)),s})}async function Sl(t,e,n){const s=oe(t),r=s.Ui.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!bi(o))throw o;z("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Ui=s.Ui.remove(e),s.qi.delete(r.target)}function dd(t,e,n){const s=oe(t);let r=ce.min(),i=ue();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=oe(a),h=u.qi.get(l);return h!==void 0?P.resolve(u.Ui.get(h)):u.Cs.getTargetData(c,l)}(s,o,an(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Cs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Li.getDocumentsMatchingQuery(o,e,n?r:ce.min(),n?i:ue())).next(a=>(VA(s,MC(e),a),{documents:a,Hi:i})))}function VA(t,e,n){let s=t.Ki.get(e)||ce.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.Ki.set(e,s)}class pd{constructor(){this.activeTargetIds=oy()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class jA{constructor(){this.Lr=new pd,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Lr.er(e),this.Ur[e]||"not-current"}updateQueryState(e,n,s){this.Ur[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.Ur[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new pd,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class HA{qr(e){}shutdown(){}}/**
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
 */class gd{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}qr(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){z("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){z("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const qA={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class KA{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
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
 */class WA extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,n,s,r,i){const o=this.ho(e,n);z("RestConnection","Sending: ",o,s);const a={};return this.lo(a,r,i),this.fo(e,o,a,s).then(c=>(z("RestConnection","Received: ",c),c),c=>{throw ml("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",s),c})}_o(e,n,s,r,i,o){return this.ao(e,n,s,r,i)}lo(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+ur,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}ho(e,n){const s=qA[e];return`${this.oo}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,n,s,r){return new Promise((i,o)=>{const a=new sC;a.setWithCredentials(!0),a.listenOnce(eC.COMPLETE,()=>{var l;try{switch(a.getLastErrorCode()){case Tc.NO_ERROR:const u=a.getResponseJson();z("Connection","XHR received:",JSON.stringify(u)),i(u);break;case Tc.TIMEOUT:z("Connection",'RPC "'+e+'" timed out'),o(new Y(O.DEADLINE_EXCEEDED,"Request time out"));break;case Tc.HTTP_ERROR:const h=a.getStatus();if(z("Connection",'RPC "'+e+'" failed with status:',h,"response text:",a.getResponseText()),h>0){let f=a.getResponseJson();Array.isArray(f)&&(f=f[0]);const d=(l=f)===null||l===void 0?void 0:l.error;if(d&&d.status&&d.message){const m=function(w){const I=w.toLowerCase().replace(/_/g,"-");return Object.values(O).indexOf(I)>=0?I:O.UNKNOWN}(d.status);o(new Y(m,d.message))}else o(new Y(O.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new Y(O.UNAVAILABLE,"Connection failed."));break;default:ie()}}finally{z("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(r);a.send(n,"POST",c,s,15)})}wo(e,n,s){const r=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=JS(),o=ZS(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new nC({})),this.lo(a.initMessageHeaders,n,s),a.encodeInitMessageHeaders=!0;const c=r.join("");z("Connection","Creating WebChannel: "+c,a);const l=i.createWebChannel(c,a);let u=!1,h=!1;const f=new KA({Hr:m=>{h?z("Connection","Not sending because WebChannel is closed:",m):(u||(z("Connection","Opening WebChannel transport."),l.open(),u=!0),z("Connection","WebChannel sending:",m),l.send(m))},Jr:()=>l.close()}),d=(m,w,I)=>{m.listen(w,v=>{try{I(v)}catch(p){setTimeout(()=>{throw p},0)}})};return d(l,Ki.EventType.OPEN,()=>{h||z("Connection","WebChannel transport opened.")}),d(l,Ki.EventType.CLOSE,()=>{h||(h=!0,z("Connection","WebChannel transport closed"),f.io())}),d(l,Ki.EventType.ERROR,m=>{h||(h=!0,ml("Connection","WebChannel transport errored:",m),f.io(new Y(O.UNAVAILABLE,"The operation could not be completed")))}),d(l,Ki.EventType.MESSAGE,m=>{var w;if(!h){const I=m.data[0];Ie(!!I);const v=I,p=v.error||((w=v[0])===null||w===void 0?void 0:w.error);if(p){z("Connection","WebChannel received error:",p);const _=p.status;let S=function(R){const C=Le[R];if(C!==void 0)return ny(C)}(_),E=p.message;S===void 0&&(S=O.INTERNAL,E="Unknown error status: "+_+" with message "+p.message),h=!0,f.io(new Y(S,E)),l.close()}else z("Connection","WebChannel received:",I),f.ro(I)}}),d(o,tC.STAT_EVENT,m=>{m.stat===zf.PROXY?z("Connection","Detected buffering proxy"):m.stat===zf.NOPROXY&&z("Connection","Detected no buffering proxy")}),setTimeout(()=>{f.so()},0),f}}function Sc(){return typeof document<"u"?document:null}/**
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
 */function Ua(t){return new tA(t,!0)}class my{constructor(e,n,s=1e3,r=1.5,i=6e4){this.Hs=e,this.timerId=n,this.mo=s,this.yo=r,this.po=i,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),s=Math.max(0,Date.now()-this.Eo),r=Math.max(0,n-s);r>0&&z("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,r,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
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
 */class yy{constructor(e,n,s,r,i,o,a,c){this.Hs=e,this.vo=s,this.Vo=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new my(e,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,n){this.Lo(),this.Uo(),this.xo.cancel(),this.So++,e!==4?this.xo.reset():n&&n.code===O.RESOURCE_EXHAUSTED?(on(n.toString()),on("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):n&&n.code===O.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}qo(){}auth(){this.state=1;const e=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.So===n&&this.Go(s,r)},s=>{e(()=>{const r=new Y(O.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Qo(r)})})}Go(e,n){const s=this.Ko(this.So);this.stream=this.jo(e,n),this.stream.Yr(()=>{s(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(r=>{s(()=>this.Qo(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(e){return z("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return n=>{this.Hs.enqueueAndForget(()=>this.So===e?n():(z("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class zA extends yy{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.It=i}jo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.xo.reset();const n=rA(this.It,e),s=function(r){if(!("targetChange"in r))return ce.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?ce.min():i.readTime?tn(i.readTime):ce.min()}(e);return this.listener.Wo(n,s)}zo(e){const n={};n.database=Il(this.It),n.addTarget=function(r,i){let o;const a=i.target;return o=_l(a)?{documents:aA(r,a)}:{query:cA(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=ly(r,i.resumeToken):i.snapshotVersion.compareTo(ce.min())>0&&(o.readTime=qo(r,i.snapshotVersion.toTimestamp())),o}(this.It,e);const s=uA(this.It,e);s&&(n.labels=s),this.Bo(n)}Ho(e){const n={};n.database=Il(this.It),n.removeTarget=e,this.Bo(n)}}class GA extends yy{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.It=i,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Jo&&this.Xo([])}jo(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(Ie(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const n=oA(e.writeResults,e.commitTime),s=tn(e.commitTime);return this.listener.Zo(s,n)}return Ie(!e.writeResults||e.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=Il(this.It),this.Bo(e)}Xo(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>iA(this.It,s))};this.Bo(n)}}/**
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
 */class QA extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.It=r,this.nu=!1}su(){if(this.nu)throw new Y(O.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,n,s){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.ao(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new Y(O.UNKNOWN,r.toString())})}_o(e,n,s,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection._o(e,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new Y(O.UNKNOWN,i.toString())})}terminate(){this.nu=!0}}class XA{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,e==="Online"&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(on(n),this.ou=!1):z("OnlineStateTracker",n)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
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
 */class YA{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=i,this.mu.qr(o=>{s.enqueueAndForget(async()=>{_s(this)&&(z("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=oe(a);c._u.add(4),await Si(c),c.gu.set("Unknown"),c._u.delete(4),await Fa(c)}(this))})}),this.gu=new XA(s,r)}}async function Fa(t){if(_s(t))for(const e of t.wu)await e(!0)}async function Si(t){for(const e of t.wu)await e(!1)}function vy(t,e){const n=oe(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),Wu(n)?Ku(n):dr(n).ko()&&qu(n,e))}function _y(t,e){const n=oe(t),s=dr(n);n.du.delete(e),s.ko()&&wy(n,e),n.du.size===0&&(s.ko()?s.Fo():_s(n)&&n.gu.set("Unknown"))}function qu(t,e){t.yu.Mt(e.targetId),dr(t).zo(e)}function wy(t,e){t.yu.Mt(e),dr(t).Ho(e)}function Ku(t){t.yu=new JC({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),se:e=>t.du.get(e)||null}),dr(t).start(),t.gu.uu()}function Wu(t){return _s(t)&&!dr(t).No()&&t.du.size>0}function _s(t){return oe(t)._u.size===0}function Ey(t){t.yu=void 0}async function JA(t){t.du.forEach((e,n)=>{qu(t,e)})}async function ZA(t,e){Ey(t),Wu(t)?(t.gu.hu(e),Ku(t)):t.gu.set("Unknown")}async function ek(t,e,n){if(t.gu.set("Online"),e instanceof cy&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.du.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.du.delete(o),s.yu.removeTarget(o))}(t,e)}catch(s){z("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Ko(t,s)}else if(e instanceof ho?t.yu.Gt(e):e instanceof ay?t.yu.Yt(e):t.yu.Wt(e),!n.isEqual(ce.min()))try{const s=await gy(t.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.yu.te(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=r.du.get(c);l&&r.du.set(c,l.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=r.du.get(a);if(!c)return;r.du.set(a,c.withResumeToken(ot.EMPTY_BYTE_STRING,c.snapshotVersion)),wy(r,a);const l=new ls(c.target,a,1,c.sequenceNumber);qu(r,l)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){z("RemoteStore","Failed to raise snapshot:",s),await Ko(t,s)}}async function Ko(t,e,n){if(!bi(e))throw e;t._u.add(1),await Si(t),t.gu.set("Offline"),n||(n=()=>gy(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{z("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await Fa(t)})}function by(t,e){return e().catch(n=>Ko(t,n,e))}async function Ba(t){const e=oe(t),n=Vn(e);let s=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;tk(e);)try{const r=await BA(e.localStore,s);if(r===null){e.fu.length===0&&n.Fo();break}s=r.batchId,nk(e,r)}catch(r){await Ko(e,r)}Ty(e)&&Iy(e)}function tk(t){return _s(t)&&t.fu.length<10}function nk(t,e){t.fu.push(e);const n=Vn(t);n.ko()&&n.Yo&&n.Xo(e.mutations)}function Ty(t){return _s(t)&&!Vn(t).No()&&t.fu.length>0}function Iy(t){Vn(t).start()}async function sk(t){Vn(t).eu()}async function rk(t){const e=Vn(t);for(const n of t.fu)e.Xo(n.mutations)}async function ik(t,e,n){const s=t.fu.shift(),r=$u.from(s,e,n);await by(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await Ba(t)}async function ok(t,e){e&&Vn(t).Yo&&await async function(n,s){if(r=s.code,zC(r)&&r!==O.ABORTED){const i=n.fu.shift();Vn(n).Mo(),await by(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Ba(n)}var r}(t,e),Ty(t)&&Iy(t)}async function md(t,e){const n=oe(t);n.asyncQueue.verifyOperationInProgress(),z("RemoteStore","RemoteStore received new credentials");const s=_s(n);n._u.add(3),await Si(n),s&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await Fa(n)}async function ak(t,e){const n=oe(t);e?(n._u.delete(2),await Fa(n)):e||(n._u.add(2),await Si(n),n.gu.set("Unknown"))}function dr(t){return t.pu||(t.pu=function(e,n,s){const r=oe(e);return r.su(),new zA(n,r.connection,r.authCredentials,r.appCheckCredentials,r.It,s)}(t.datastore,t.asyncQueue,{Yr:JA.bind(null,t),Zr:ZA.bind(null,t),Wo:ek.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Mo(),Wu(t)?Ku(t):t.gu.set("Unknown")):(await t.pu.stop(),Ey(t))})),t.pu}function Vn(t){return t.Iu||(t.Iu=function(e,n,s){const r=oe(e);return r.su(),new GA(n,r.connection,r.authCredentials,r.appCheckCredentials,r.It,s)}(t.datastore,t.asyncQueue,{Yr:sk.bind(null,t),Zr:ok.bind(null,t),tu:rk.bind(null,t),Zo:ik.bind(null,t)}),t.wu.push(async e=>{e?(t.Iu.Mo(),await Ba(t)):(await t.Iu.stop(),t.fu.length>0&&(z("RemoteStore",`Stopping write stream with ${t.fu.length} pending writes`),t.fu=[]))})),t.Iu}/**
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
 */class zu{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new en,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new zu(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Y(O.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Gu(t,e){if(on("AsyncQueue",`${e}: ${t}`),bi(t))return new Y(O.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Fs{constructor(e){this.comparator=e?(n,s)=>e(n,s)||J.comparator(n.key,s.key):(n,s)=>J.comparator(n.key,s.key),this.keyedMap=Tr(),this.sortedSet=new Ve(this.comparator)}static emptySet(e){return new Fs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Fs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new Fs;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
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
 */class yd{constructor(){this.Tu=new Ve(J.comparator)}track(e){const n=e.doc.key,s=this.Tu.get(n);s?e.type!==0&&s.type===3?this.Tu=this.Tu.insert(n,e):e.type===3&&s.type!==1?this.Tu=this.Tu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Tu=this.Tu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Tu=this.Tu.remove(n):e.type===1&&s.type===2?this.Tu=this.Tu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):ie():this.Tu=this.Tu.insert(n,e)}Eu(){const e=[];return this.Tu.inorderTraversal((n,s)=>{e.push(s)}),e}}class tr{constructor(e,n,s,r,i,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,s,r,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new tr(e,n,Fs.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Pa(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
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
 */class ck{constructor(){this.Au=void 0,this.listeners=[]}}class lk{constructor(){this.queries=new fr(e=>Wm(e),Pa),this.onlineState="Unknown",this.Ru=new Set}}async function Sy(t,e){const n=oe(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new ck),r)try{i.Au=await n.onListen(s)}catch(o){const a=Gu(o,`Initialization of query '${El(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.listeners.push(e),e.bu(n.onlineState),i.Au&&e.Pu(i.Au)&&Qu(n)}async function Cy(t,e){const n=oe(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function uk(t,e){const n=oe(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Pu(r)&&(s=!0);o.Au=r}}s&&Qu(n)}function hk(t,e,n){const s=oe(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function Qu(t){t.Ru.forEach(e=>{e.next()})}class Ay{constructor(e,n,s){this.query=e,this.vu=n,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=s||{}}Pu(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new tr(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),n=!0):this.Cu(e,this.onlineState)&&(this.xu(e),n=!0),this.Su=e,n}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let n=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),n=!0),n}Cu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.Nu||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Du(e){if(e.docChanges.length>0)return!0;const n=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}xu(e){e=tr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.vu.next(e)}}/**
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
 */class ky{constructor(e){this.key=e}}class Ry{constructor(e){this.key=e}}class fk{constructor(e,n){this.query=e,this.Uu=n,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=ue(),this.mutatedKeys=ue(),this.Gu=zm(e),this.Qu=new Fs(this.Gu)}get ju(){return this.Uu}Wu(e,n){const s=n?n.zu:new yd,r=n?n.Qu:this.Qu;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,l=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((u,h)=>{const f=r.get(u),d=Uu(this.query,h)?h:null,m=!!f&&this.mutatedKeys.has(f.key),w=!!d&&(d.hasLocalMutations||this.mutatedKeys.has(d.key)&&d.hasCommittedMutations);let I=!1;f&&d?f.data.isEqual(d.data)?m!==w&&(s.track({type:3,doc:d}),I=!0):this.Hu(f,d)||(s.track({type:2,doc:d}),I=!0,(c&&this.Gu(d,c)>0||l&&this.Gu(d,l)<0)&&(a=!0)):!f&&d?(s.track({type:0,doc:d}),I=!0):f&&!d&&(s.track({type:1,doc:f}),I=!0,(c||l)&&(a=!0)),I&&(d?(o=o.add(d),i=w?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),s.track({type:1,doc:u})}return{Qu:o,zu:s,$i:a,mutatedKeys:i}}Hu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const r=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const i=e.zu.Eu();i.sort((l,u)=>function(h,f){const d=m=>{switch(m){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ie()}};return d(h)-d(f)}(l.type,u.type)||this.Gu(l.doc,u.doc)),this.Ju(s);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,c=a!==this.qu;return this.qu=a,i.length!==0||c?{snapshot:new tr(this.query,e.Qu,r,i,e.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new yd,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.Uu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(n=>this.Uu=this.Uu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Uu=this.Uu.delete(n)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=ue(),this.Qu.forEach(s=>{this.Zu(s.key)&&(this.Ku=this.Ku.add(s.key))});const n=[];return e.forEach(s=>{this.Ku.has(s)||n.push(new Ry(s))}),this.Ku.forEach(s=>{e.has(s)||n.push(new ky(s))}),n}tc(e){this.Uu=e.Hi,this.Ku=ue();const n=this.Wu(e.documents);return this.applyChanges(n,!0)}ec(){return tr.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class dk{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class pk{constructor(e){this.key=e,this.nc=!1}}class gk{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new fr(a=>Wm(a),Pa),this.rc=new Map,this.oc=new Set,this.uc=new Ve(J.comparator),this.cc=new Map,this.ac=new Vu,this.hc={},this.lc=new Map,this.fc=er.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function mk(t,e){const n=Ck(t);let s,r;const i=n.ic.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.ec();else{const o=await $A(n.localStore,an(e));n.isPrimaryClient&&vy(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await yk(n,e,s,a==="current",o.resumeToken)}return r}async function yk(t,e,n,s,r){t._c=(h,f,d)=>async function(m,w,I,v){let p=w.view.Wu(I);p.$i&&(p=await dd(m.localStore,w.query,!1).then(({documents:E})=>w.view.Wu(E,p)));const _=v&&v.targetChanges.get(w.targetId),S=w.view.applyChanges(p,m.isPrimaryClient,_);return _d(m,w.targetId,S.Xu),S.snapshot}(t,h,f,d);const i=await dd(t.localStore,e,!0),o=new fk(e,i.Hi),a=o.Wu(i.documents),c=Ii.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",r),l=o.applyChanges(a,t.isPrimaryClient,c);_d(t,n,l.Xu);const u=new dk(e,n,o);return t.ic.set(e,u),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),l.snapshot}async function vk(t,e){const n=oe(t),s=n.ic.get(e),r=n.rc.get(s.targetId);if(r.length>1)return n.rc.set(s.targetId,r.filter(i=>!Pa(i,e))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Sl(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),_y(n.remoteStore,s.targetId),Cl(n,s.targetId)}).catch(Ei)):(Cl(n,s.targetId),await Sl(n.localStore,s.targetId,!0))}async function _k(t,e,n){const s=Ak(t);try{const r=await function(i,o){const a=oe(i),c=Be.now(),l=o.reduce((f,d)=>f.add(d.key),ue());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",f=>{let d=cn(),m=ue();return a.Gi.getEntries(f,l).next(w=>{d=w,d.forEach((I,v)=>{v.isValidDocument()||(m=m.add(I))})}).next(()=>a.localDocuments.getOverlayedDocuments(f,d)).next(w=>{u=w;const I=[];for(const v of o){const p=qC(v,u.get(v.key).overlayedDocument);p!=null&&I.push(new vs(v.key,p,qm(p.value.mapValue),Vt.exists(!0)))}return a.mutationQueue.addMutationBatch(f,c,I,o)}).next(w=>{h=w;const I=w.applyToLocalDocumentSet(u,m);return a.documentOverlayCache.saveOverlays(f,w.batchId,I)})}).then(()=>({batchId:h.batchId,changes:ry(u)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let c=i.hc[i.currentUser.toKey()];c||(c=new Ve(ye)),c=c.insert(o,a),i.hc[i.currentUser.toKey()]=c}(s,r.batchId,n),await Ci(s,r.changes),await Ba(s.remoteStore)}catch(r){const i=Gu(r,"Failed to persist write");n.reject(i)}}async function Ny(t,e){const n=oe(t);try{const s=await UA(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.cc.get(i);o&&(Ie(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.nc=!0:r.modifiedDocuments.size>0?Ie(o.nc):r.removedDocuments.size>0&&(Ie(o.nc),o.nc=!1))}),await Ci(n,s,e)}catch(s){await Ei(s)}}function vd(t,e,n){const s=oe(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.ic.forEach((i,o)=>{const a=o.view.bu(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=oe(i);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.bu(o)&&(c=!0)}),c&&Qu(a)}(s.eventManager,e),r.length&&s.sc.Wo(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function wk(t,e,n){const s=oe(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.cc.get(e),i=r&&r.key;if(i){let o=new Ve(J.comparator);o=o.insert(i,Ge.newNoDocument(i,ce.min()));const a=ue().add(i),c=new Ma(ce.min(),new Map,new $e(ye),o,a);await Ny(s,c),s.uc=s.uc.remove(i),s.cc.delete(e),Xu(s)}else await Sl(s.localStore,e,!1).then(()=>Cl(s,e,n)).catch(Ei)}async function Ek(t,e){const n=oe(t),s=e.batch.batchId;try{const r=await MA(n.localStore,e);Oy(n,s,null),Dy(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Ci(n,r)}catch(r){await Ei(r)}}async function bk(t,e,n){const s=oe(t);try{const r=await function(i,o){const a=oe(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.mutationQueue.lookupMutationBatch(c,o).next(u=>(Ie(u!==null),l=u.keys(),a.mutationQueue.removeMutationBatch(c,u))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>a.localDocuments.getDocuments(c,l))})}(s.localStore,e);Oy(s,e,n),Dy(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Ci(s,r)}catch(r){await Ei(r)}}function Dy(t,e){(t.lc.get(e)||[]).forEach(n=>{n.resolve()}),t.lc.delete(e)}function Oy(t,e,n){const s=oe(t);let r=s.hc[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.hc[s.currentUser.toKey()]=r}}function Cl(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.rc.get(e))t.ic.delete(s),n&&t.sc.wc(s,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach(s=>{t.ac.containsKey(s)||Py(t,s)})}function Py(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);n!==null&&(_y(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),Xu(t))}function _d(t,e,n){for(const s of n)s instanceof ky?(t.ac.addReference(s.key,e),Tk(t,s)):s instanceof Ry?(z("SyncEngine","Document no longer in limbo: "+s.key),t.ac.removeReference(s.key,e),t.ac.containsKey(s.key)||Py(t,s.key)):ie()}function Tk(t,e){const n=e.key,s=n.path.canonicalString();t.uc.get(n)||t.oc.has(s)||(z("SyncEngine","New document in limbo: "+n),t.oc.add(s),Xu(t))}function Xu(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new J(ke.fromString(e)),s=t.fc.next();t.cc.set(s,new pk(n)),t.uc=t.uc.insert(n,s),vy(t.remoteStore,new ls(an(Mu(n.path)),s,2,Ou.at))}}async function Ci(t,e,n){const s=oe(t),r=[],i=[],o=[];s.ic.isEmpty()||(s.ic.forEach((a,c)=>{o.push(s._c(c,e,n).then(l=>{if((l||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){r.push(l);const u=Hu.Ci(c.targetId,l);i.push(u)}}))}),await Promise.all(o),s.sc.Wo(r),await async function(a,c){const l=oe(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>P.forEach(c,h=>P.forEach(h.Si,f=>l.persistence.referenceDelegate.addReference(u,h.targetId,f)).next(()=>P.forEach(h.Di,f=>l.persistence.referenceDelegate.removeReference(u,h.targetId,f)))))}catch(u){if(!bi(u))throw u;z("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const f=l.Ui.get(h),d=f.snapshotVersion,m=f.withLastLimboFreeSnapshotVersion(d);l.Ui=l.Ui.insert(h,m)}}}(s.localStore,i))}async function Ik(t,e){const n=oe(t);if(!n.currentUser.isEqual(e)){z("SyncEngine","User change. New user:",e.toKey());const s=await py(n.localStore,e);n.currentUser=e,function(r,i){r.lc.forEach(o=>{o.forEach(a=>{a.reject(new Y(O.CANCELLED,i))})}),r.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Ci(n,s.ji)}}function Sk(t,e){const n=oe(t),s=n.cc.get(e);if(s&&s.nc)return ue().add(s.key);{let r=ue();const i=n.rc.get(e);if(!i)return r;for(const o of i){const a=n.ic.get(o);r=r.unionWith(a.view.ju)}return r}}function Ck(t){const e=oe(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Ny.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Sk.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=wk.bind(null,e),e.sc.Wo=uk.bind(null,e.eventManager),e.sc.wc=hk.bind(null,e.eventManager),e}function Ak(t){const e=oe(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Ek.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=bk.bind(null,e),e}class kk{constructor(){this.synchronizeTabs=!1}async initialize(e){this.It=Ua(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,n){return null}Ec(e,n){return null}Ic(e){return LA(this.persistence,new PA,e.initialUser,this.It)}yc(e){return new DA(ju.Bs,this.It)}gc(e){return new jA}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Rk{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>vd(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=Ik.bind(null,this.syncEngine),await ak(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new lk}createDatastore(e){const n=Ua(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new WA(r));var r;return function(i,o,a,c){return new QA(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>vd(this.syncEngine,a,0),o=gd.C()?new gd:new HA,new YA(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(e,n){return function(s,r,i,o,a,c,l){const u=new gk(s,r,i,o,a,c);return l&&(u.dc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=oe(e);z("RemoteStore","RemoteStore shutting down."),n._u.add(5),await Si(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
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
 */function xy(t,e,n){if(!n)throw new Y(O.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Nk(t,e,n,s){if(e===!0&&s===!0)throw new Y(O.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function wd(t){if(!J.isDocumentKey(t))throw new Y(O.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Ed(t){if(J.isDocumentKey(t))throw new Y(O.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Yu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ie()}function jn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Y(O.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Yu(t);throw new Y(O.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */const bd=new Map;class Td{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new Y(O.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new Y(O.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,Nk("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class $a{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Td({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Y(O.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new Y(O.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Td(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new rC;switch(n.type){case"gapi":const s=n.client;return new cC(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new Y(O.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=bd.get(e);n&&(z("ComponentProvider","Removing Datastore"),bd.delete(e),n.terminate())}(this),Promise.resolve()}}function Dk(t,e,n,s={}){var r;const i=(t=jn(t,$a))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==e&&ml("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=et.MOCK_USER;else{o=HT(s.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new Y(O.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new et(c)}t._authCredentials=new iC(new Bm(o,a))}}/**
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
 */class yt{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Mn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new yt(this.firestore,e,this._key)}}class Va{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Va(this.firestore,e,this._query)}}class Mn extends Va{constructor(e,n,s){super(e,n,Mu(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new yt(this.firestore,null,new J(e))}withConverter(e){return new Mn(this.firestore,e,this._path)}}function M1(t,e,...n){if(t=Pt(t),xy("collection","path",e),t instanceof $a){const s=ke.fromString(e,...n);return Ed(s),new Mn(t,null,s)}{if(!(t instanceof yt||t instanceof Mn))throw new Y(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(ke.fromString(e,...n));return Ed(s),new Mn(t.firestore,null,s)}}function U1(t,e,...n){if(t=Pt(t),arguments.length===1&&(e=$m.R()),xy("doc","path",e),t instanceof $a){const s=ke.fromString(e,...n);return wd(s),new yt(t,null,new J(s))}{if(!(t instanceof yt||t instanceof Mn))throw new Y(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(ke.fromString(e,...n));return wd(s),new yt(t.firestore,t instanceof Mn?t.converter:null,new J(s))}}/**
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
 */class Ly{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):on("Uncaught Error in snapshot listener:",e.toString())}bc(){this.muted=!0}Rc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class Ok{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=et.UNAUTHENTICATED,this.clientId=$m.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{z("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(z("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Y(O.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new en;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Gu(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Pk(t,e){t.asyncQueue.verifyOperationInProgress(),z("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await py(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function xk(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Lk(t);z("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>md(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>md(e.remoteStore,i)),t.onlineComponents=e}async function Lk(t){return t.offlineComponents||(z("FirestoreClient","Using default OfflineComponentProvider"),await Pk(t,new kk)),t.offlineComponents}async function My(t){return t.onlineComponents||(z("FirestoreClient","Using default OnlineComponentProvider"),await xk(t,new Rk)),t.onlineComponents}function Mk(t){return My(t).then(e=>e.syncEngine)}async function Uy(t){const e=await My(t),n=e.eventManager;return n.onListen=mk.bind(null,e.syncEngine),n.onUnlisten=vk.bind(null,e.syncEngine),n}function Uk(t,e,n={}){const s=new en;return t.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const l=new Ly({next:h=>{i.enqueueAndForget(()=>Cy(r,u));const f=h.docs.has(o);!f&&h.fromCache?c.reject(new Y(O.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&h.fromCache&&a&&a.source==="server"?c.reject(new Y(O.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new Ay(Mu(o.path),l,{includeMetadataChanges:!0,Nu:!0});return Sy(r,u)}(await Uy(t),t.asyncQueue,e,n,s)),s.promise}function Fk(t,e,n={}){const s=new en;return t.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const l=new Ly({next:h=>{i.enqueueAndForget(()=>Cy(r,u)),h.fromCache&&a.source==="server"?c.reject(new Y(O.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new Ay(o,l,{includeMetadataChanges:!0,Nu:!0});return Sy(r,u)}(await Uy(t),t.asyncQueue,e,n,s)),s.promise}class Bk{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.Uc=!1,this.qc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new my(this,"async_queue_retry"),this.Wc=()=>{const n=Sc();n&&z("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.Po()};const e=Sc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.Uc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.Uc){this.Uc=!0,this.Qc=e||!1;const n=Sc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.Uc)return new Promise(()=>{});const n=new en;return this.Hc(()=>this.Uc&&this.Qc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(e){if(!bi(e))throw e;z("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(e){const n=this.Bc.then(()=>(this.Gc=!0,e().catch(s=>{this.Kc=s,this.Gc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw on("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Gc=!1,s))));return this.Bc=n,n}enqueueAfterDelay(e,n,s){this.zc(),this.jc.indexOf(e)>-1&&(n=0);const r=zu.createAndSchedule(this,e,n,s,i=>this.Yc(i));return this.qc.push(r),r}zc(){this.Kc&&ie()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const n of this.qc)if(n.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.qc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.qc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const n=this.qc.indexOf(e);this.qc.splice(n,1)}}class Ai extends $a{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=new Bk,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Fy(this),this._firestoreClient.terminate()}}function $k(t,e){const n=typeof t=="object"?t:xg(),s=typeof t=="string"?t:e||"(default)",r=lu(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=$T("firestore");i&&Dk(r,...i)}return r}function Ju(t){return t._firestoreClient||Fy(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Fy(t){var e;const n=t._freezeSettings(),s=function(r,i,o,a){return new _C(r,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new Ok(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
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
 */class nr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new nr(ot.fromBase64String(e))}catch(n){throw new Y(O.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new nr(ot.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Zu{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new Y(O.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new nt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class By{constructor(e){this._methodName=e}}/**
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
 */class eh{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new Y(O.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new Y(O.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ye(this._lat,e._lat)||ye(this._long,e._long)}}/**
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
 */const Vk=/^__.*__$/;class jk{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new vs(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ti(e,this.data,n,this.fieldTransforms)}}function $y(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ie()}}class th{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.It=s,this.ignoreUndefinedProperties=r,i===void 0&&this.na(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new th(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.It,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.ia({path:s,oa:!1});return r.ua(e),r}ca(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.ia({path:s,oa:!1});return r.na(),r}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return Wo(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(e.length===0)throw this.ha("Document fields must not be empty");if($y(this.sa)&&Vk.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class Hk{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.It=s||Ua(e)}da(e,n,s,r=!1){return new th({sa:e,methodName:n,fa:s,path:nt.emptyPath(),oa:!1,la:r},this.databaseId,this.It,this.ignoreUndefinedProperties)}}function qk(t){const e=t._freezeSettings(),n=Ua(t._databaseId);return new Hk(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Kk(t,e,n,s,r,i={}){const o=t.da(i.merge||i.mergeFields?2:0,e,n,r);qy("Data must be an object, but it was:",o,s);const a=jy(s,o);let c,l;if(i.merge)c=new $t(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const f=Wk(e,h,n);if(!o.contains(f))throw new Y(O.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);Gk(u,f)||u.push(f)}c=new $t(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new jk(new bt(a),c,l)}function Vy(t,e){if(Hy(t=Pt(t)))return qy("Unsupported field value:",e,t),jy(t,e);if(t instanceof By)return function(n,s){if(!$y(s.sa))throw s.ha(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.ha(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.oa&&e.sa!==4)throw e.ha("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=Vy(o,s.aa(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(t,e)}return function(n,s){if((n=Pt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return FC(s.It,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=Be.fromDate(n);return{timestampValue:qo(s.It,r)}}if(n instanceof Be){const r=new Be(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:qo(s.It,r)}}if(n instanceof eh)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof nr)return{bytesValue:ly(s.It,n._byteString)};if(n instanceof yt){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s.ha(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:Bu(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.ha(`Unsupported field value: ${Yu(n)}`)}(t,e)}function jy(t,e){const n={};return Vm(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):hr(t,(s,r)=>{const i=Vy(r,e.ra(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function Hy(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Be||t instanceof eh||t instanceof nr||t instanceof yt||t instanceof By)}function qy(t,e,n){if(!Hy(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=Yu(n);throw s==="an object"?e.ha(t+" a custom object"):e.ha(t+" "+s)}}function Wk(t,e,n){if((e=Pt(e))instanceof Zu)return e._internalPath;if(typeof e=="string")return Ky(t,e);throw Wo("Field path arguments must be of type string or ",t,!1,void 0,n)}const zk=new RegExp("[~\\*/\\[\\]]");function Ky(t,e,n){if(e.search(zk)>=0)throw Wo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Zu(...e.split("."))._internalPath}catch{throw Wo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Wo(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new Y(O.INVALID_ARGUMENT,a+t+c)}function Gk(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class Wy{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new yt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Qk(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(zy("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Qk extends Wy{data(){return super.data()}}function zy(t,e){return typeof e=="string"?Ky(t,e):e instanceof Zu?e._internalPath:e._delegate._internalPath}/**
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
 */function Xk(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new Y(O.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}function F1(t,...e){for(const n of e)t=n._apply(t);return t}/**
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
 */class Yk{convertValue(e,n="none"){switch(gs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Me(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Js(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw ie()}}convertObject(e,n){const s={};return hr(e.fields,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new eh(Me(e.latitude),Me(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=Hm(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Jr(e));default:return null}}convertTimestamp(e){const n=$n(e);return new Be(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=ke.fromString(e);Ie(dy(s));const r=new Zr(s.get(1),s.get(3)),i=new J(s.popFirst(5));return r.isEqual(n)||on(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function Jk(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
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
 */class Ir{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Gy extends Wy{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new fo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(zy("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class fo extends Gy{data(e={}){return super.data(e)}}class Zk{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new Ir(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new fo(this._firestore,this._userDataWriter,s.key,s,new Ir(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new Y(O.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>{const a=new fo(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Ir(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new fo(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Ir(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,l=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),l=i.indexOf(o.doc.key)),{type:eR(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function eR(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ie()}}/**
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
 */function B1(t){t=jn(t,yt);const e=jn(t.firestore,Ai);return Uk(Ju(e),t._key).then(n=>tR(e,t,n))}class Qy extends Yk{constructor(e){super(),this.firestore=e}convertBytes(e){return new nr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new yt(this.firestore,null,n)}}function $1(t){t=jn(t,Va);const e=jn(t.firestore,Ai),n=Ju(e),s=new Qy(e);return Xk(t._query),Fk(n,t._query).then(r=>new Zk(e,s,t,r))}function V1(t,e,n){t=jn(t,yt);const s=jn(t.firestore,Ai),r=Jk(t.converter,e,n);return Xy(s,[Kk(qk(s),"setDoc",t._key,r,t.converter!==null,n).toMutation(t._key,Vt.none())])}function j1(t){return Xy(jn(t.firestore,Ai),[new Fu(t._key,Vt.none())])}function Xy(t,e){return function(n,s){const r=new en;return n.asyncQueue.enqueueAndForget(async()=>_k(await Mk(n),s,r)),r.promise}(Ju(t),e)}function tR(t,e,n){const s=n.docs.get(e._key),r=new Qy(t);return new Gy(t,r,e._key,s,new Ir(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){ur=n})(hi),Qs(new fs("firestore",(n,{instanceIdentifier:s,options:r})=>{const i=n.getProvider("app").getImmediate(),o=new Ai(new oC(n.getProvider("auth-internal")),new uC(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new Y(O.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Zr(a.options.projectId,c)}(i,s),i);return r=Object.assign({useFetchStreams:e},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),Ln(Gf,"3.7.3",t),Ln(Gf,"3.7.3","esm2017")})();function nh(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function Yy(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const nR=Yy,Jy=new li("auth","Firebase",Yy());/**
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
 */const Id=new au("@firebase/auth");function po(t,...e){Id.logLevel<=me.ERROR&&Id.error(`Auth (${hi}): ${t}`,...e)}/**
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
 */function ln(t,...e){throw sh(t,...e)}function jt(t,...e){return sh(t,...e)}function sR(t,e,n){const s=Object.assign(Object.assign({},nR()),{[e]:n});return new li("auth","Firebase",s).create(e,{appName:t.name})}function sh(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Jy.create(t,...e)}function ee(t,e,...n){if(!t)throw sh(e,...n)}function Xt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw po(e),new Error(e)}function un(t,e){t||Xt(e)}/**
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
 */const Sd=new Map;function Yt(t){un(t instanceof Function,"Expected a class definition");let e=Sd.get(t);return e?(un(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Sd.set(t,e),e)}/**
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
 */function rR(t,e){const n=lu(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(No(i,e!=null?e:{}))return r;ln(r,"already-initialized")}return n.initialize({options:e})}function iR(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Yt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function Al(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function oR(){return Cd()==="http:"||Cd()==="https:"}function Cd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function aR(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(oR()||DT()||"connection"in navigator)?navigator.onLine:!0}function cR(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class ki{constructor(e,n){this.shortDelay=e,this.longDelay=n,un(n>e,"Short delay should be less than long delay!"),this.isMobile=NT()||OT()}get(){return aR()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function rh(t,e){un(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Zy{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Xt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Xt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Xt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const lR={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const uR=new ki(3e4,6e4);function hR(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ja(t,e,n,s,r={}){return ev(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=ui(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Zy.fetch()(tv(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function ev(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},lR),e);try{const r=new dR(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Gi(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Gi(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Gi(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Gi(t,"user-disabled",o);const u=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw sR(t,u,l);ln(t,u)}}catch(r){if(r instanceof gn)throw r;ln(t,"network-request-failed")}}async function fR(t,e,n,s,r={}){const i=await ja(t,e,n,s,r);return"mfaPendingCredential"in i&&ln(t,"multi-factor-auth-required",{_serverResponse:i}),i}function tv(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?rh(t.config,r):`${t.config.apiScheme}://${r}`}class dR{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(jt(this.auth,"network-request-failed")),uR.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Gi(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=jt(t,e,s);return r.customData._tokenResponse=n,r}/**
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
 */async function pR(t,e){return ja(t,"POST","/v1/accounts:delete",e)}async function gR(t,e){return ja(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ur(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function mR(t,e=!1){const n=Pt(t),s=await n.getIdToken(e),r=ih(s);ee(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:Ur(Cc(r.auth_time)),issuedAtTime:Ur(Cc(r.iat)),expirationTime:Ur(Cc(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Cc(t){return Number(t)*1e3}function ih(t){var e;const[n,s,r]=t.split(".");if(n===void 0||s===void 0||r===void 0)return po("JWT malformed, contained fewer than 3 sections"),null;try{const i=kg(s);return i?JSON.parse(i):(po("Failed to decode base64 JWT payload"),null)}catch(i){return po("Caught error parsing JWT payload as JSON",(e=i)===null||e===void 0?void 0:e.toString()),null}}function yR(t){const e=ih(t);return ee(e,"internal-error"),ee(typeof e.exp<"u","internal-error"),ee(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ri(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof gn&&vR(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function vR({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class _R{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class nv{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ur(this.lastLoginAt),this.creationTime=Ur(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function zo(t){var e;const n=t.auth,s=await t.getIdToken(),r=await ri(t,gR(n,{idToken:s}));ee(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?bR(i.providerUserInfo):[],a=ER(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new nv(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function wR(t){const e=Pt(t);await zo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function ER(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function bR(t){return t.map(e=>{var{providerId:n}=e,s=nh(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function TR(t,e){const n=await ev(t,{},async()=>{const s=ui({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=tv(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Zy.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class ii{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ee(e.idToken,"internal-error"),ee(typeof e.idToken<"u","internal-error"),ee(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):yR(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return ee(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await TR(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new ii;return s&&(ee(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(ee(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(ee(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ii,this.toJSON())}_performRefresh(){return Xt("not implemented")}}/**
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
 */function En(t,e){ee(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class us{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=nh(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new _R(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new nv(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await ri(this,this.stsTokenManager.getToken(this.auth,e));return ee(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return mR(this,e)}reload(){return wR(this)}_assign(e){this!==e&&(ee(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new us(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){ee(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await zo(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ri(this,pR(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,c,l,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,f=(r=n.email)!==null&&r!==void 0?r:void 0,d=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,I=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,v=(l=n.createdAt)!==null&&l!==void 0?l:void 0,p=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:_,emailVerified:S,isAnonymous:E,providerData:R,stsTokenManager:C}=n;ee(_&&C,e,"internal-error");const b=ii.fromJSON(this.name,C);ee(typeof _=="string",e,"internal-error"),En(h,e.name),En(f,e.name),ee(typeof S=="boolean",e,"internal-error"),ee(typeof E=="boolean",e,"internal-error"),En(d,e.name),En(m,e.name),En(w,e.name),En(I,e.name),En(v,e.name),En(p,e.name);const M=new us({uid:_,auth:e,email:f,emailVerified:S,displayName:h,isAnonymous:E,photoURL:m,phoneNumber:d,tenantId:w,stsTokenManager:b,createdAt:v,lastLoginAt:p});return R&&Array.isArray(R)&&(M.providerData=R.map(B=>Object.assign({},B))),I&&(M._redirectEventId=I),M}static async _fromIdTokenResponse(e,n,s=!1){const r=new ii;r.updateFromServerResponse(n);const i=new us({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await zo(i),i}}/**
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
 */class sv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}sv.type="NONE";const Ad=sv;/**
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
 */function go(t,e,n){return`firebase:${t}:${e}:${n}`}class Bs{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=go(this.userKey,r.apiKey,i),this.fullPersistenceKey=go("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?us._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Bs(Yt(Ad),e,s);const r=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=r[0]||Yt(Ad);const o=go(s,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=us._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=r.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Bs(i,e,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new Bs(i,e,s))}}/**
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
 */function kd(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ov(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(rv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(cv(e))return"Blackberry";if(lv(e))return"Webos";if(oh(e))return"Safari";if((e.includes("chrome/")||iv(e))&&!e.includes("edge/"))return"Chrome";if(av(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function rv(t=it()){return/firefox\//i.test(t)}function oh(t=it()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function iv(t=it()){return/crios\//i.test(t)}function ov(t=it()){return/iemobile/i.test(t)}function av(t=it()){return/android/i.test(t)}function cv(t=it()){return/blackberry/i.test(t)}function lv(t=it()){return/webos/i.test(t)}function Ha(t=it()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function IR(t=it()){var e;return Ha(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function SR(){return PT()&&document.documentMode===10}function uv(t=it()){return Ha(t)||av(t)||lv(t)||cv(t)||/windows phone/i.test(t)||ov(t)}function CR(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function hv(t,e=[]){let n;switch(t){case"Browser":n=kd(it());break;case"Worker":n=`${kd(it())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${hi}/${s}`}/**
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
 */class AR{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const s=[];try{for(const r of this.queue)await r(e),r.onAbort&&s.push(r.onAbort)}catch(r){s.reverse();for(const i of s)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=r)===null||n===void 0?void 0:n.message})}}}/**
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
 */class kR{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Rd(this),this.idTokenSubscription=new Rd(this),this.beforeStateQueue=new AR(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Jy,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Yt(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await Bs.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c==null?void 0:c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return ee(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await zo(e)}catch(s){if(((n=s)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=cR()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Pt(e):null;return n&&ee(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ee(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Yt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new li("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Yt(e)||this._popupRedirectResolver;ee(n,this,"argument-error"),this.redirectPersistenceManager=await Bs.create(this,[Yt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return ee(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,s,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ee(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=hv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function ah(t){return Pt(t)}class Rd{constructor(e){this.auth=e,this.observer=null,this.addObserver=GT(n=>this.observer=n)}get next(){return ee(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function RR(t,e,n){const s=ah(t);ee(s._canInitEmulator,s,"emulator-config-failed"),ee(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!!(n!=null&&n.disableWarnings),i=fv(e),{host:o,port:a}=NR(e),c=a===null?"":`:${a}`;s.config.emulator={url:`${i}//${o}${c}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||DR()}function fv(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function NR(t){const e=fv(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:Nd(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:Nd(o)}}}function Nd(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function DR(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class dv{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Xt("not implemented")}_getIdTokenResponse(e){return Xt("not implemented")}_linkToIdToken(e,n){return Xt("not implemented")}_getReauthenticationResolver(e){return Xt("not implemented")}}/**
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
 */async function $s(t,e){return fR(t,"POST","/v1/accounts:signInWithIdp",hR(t,e))}/**
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
 */const OR="http://localhost";class ms extends dv{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ms(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ln("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=nh(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new ms(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return $s(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,$s(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,$s(e,n)}buildRequest(){const e={requestUri:OR,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ui(n)}return e}}/**
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
 */class pv{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ri extends pv{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Cn extends Ri{constructor(){super("facebook.com")}static credential(e){return ms._fromParams({providerId:Cn.PROVIDER_ID,signInMethod:Cn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Cn.credentialFromTaggedObject(e)}static credentialFromError(e){return Cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Cn.credential(e.oauthAccessToken)}catch{return null}}}Cn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Cn.PROVIDER_ID="facebook.com";/**
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
 */class An extends Ri{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ms._fromParams({providerId:An.PROVIDER_ID,signInMethod:An.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return An.credentialFromTaggedObject(e)}static credentialFromError(e){return An.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return An.credential(n,s)}catch{return null}}}An.GOOGLE_SIGN_IN_METHOD="google.com";An.PROVIDER_ID="google.com";/**
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
 */class kn extends Ri{constructor(){super("github.com")}static credential(e){return ms._fromParams({providerId:kn.PROVIDER_ID,signInMethod:kn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return kn.credentialFromTaggedObject(e)}static credentialFromError(e){return kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return kn.credential(e.oauthAccessToken)}catch{return null}}}kn.GITHUB_SIGN_IN_METHOD="github.com";kn.PROVIDER_ID="github.com";/**
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
 */class Rn extends Ri{constructor(){super("twitter.com")}static credential(e,n){return ms._fromParams({providerId:Rn.PROVIDER_ID,signInMethod:Rn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Rn.credentialFromTaggedObject(e)}static credentialFromError(e){return Rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Rn.credential(n,s)}catch{return null}}}Rn.TWITTER_SIGN_IN_METHOD="twitter.com";Rn.PROVIDER_ID="twitter.com";/**
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
 */class sr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await us._fromIdTokenResponse(e,s,r),o=Dd(s);return new sr({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=Dd(s);return new sr({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function Dd(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Go extends gn{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,Go.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new Go(e,n,s,r)}}function gv(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Go._fromErrorAndOperation(t,i,e,s):i})}async function PR(t,e,n=!1){const s=await ri(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return sr._forOperation(t,"link",s)}/**
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
 */async function xR(t,e,n=!1){var s;const{auth:r}=t,i="reauthenticate";try{const o=await ri(t,gv(r,i,e,t),n);ee(o.idToken,r,"internal-error");const a=ih(o.idToken);ee(a,r,"internal-error");const{sub:c}=a;return ee(t.uid===c,r,"user-mismatch"),sr._forOperation(t,i,o)}catch(o){throw((s=o)===null||s===void 0?void 0:s.code)==="auth/user-not-found"&&ln(r,"user-mismatch"),o}}/**
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
 */async function LR(t,e,n=!1){const s="signIn",r=await gv(t,s,e),i=await sr._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}function MR(t,e,n,s){return Pt(t).onIdTokenChanged(e,n,s)}function UR(t,e,n){return Pt(t).beforeAuthStateChanged(e,n)}const Qo="__sak";/**
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
 */class mv{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Qo,"1"),this.storage.removeItem(Qo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function FR(){const t=it();return oh(t)||Ha(t)}const BR=1e3,$R=10;class yv extends mv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=FR()&&CR(),this.fallbackToPolling=uv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);SR()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,$R):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},BR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}yv.type="LOCAL";const VR=yv;/**
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
 */class vv extends mv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}vv.type="SESSION";const _v=vv;/**
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
 */function jR(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class qa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new qa(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await jR(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}qa.receivers=[];/**
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
 */function ch(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class HR{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=ch("",20);r.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(h){const f=h;if(f.data.eventId===l)switch(f.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(f.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Ht(){return window}function qR(t){Ht().location.href=t}/**
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
 */function wv(){return typeof Ht().WorkerGlobalScope<"u"&&typeof Ht().importScripts=="function"}async function KR(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function WR(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function zR(){return wv()?self:null}/**
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
 */const Ev="firebaseLocalStorageDb",GR=1,Xo="firebaseLocalStorage",bv="fbase_key";class Ni{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ka(t,e){return t.transaction([Xo],e?"readwrite":"readonly").objectStore(Xo)}function QR(){const t=indexedDB.deleteDatabase(Ev);return new Ni(t).toPromise()}function kl(){const t=indexedDB.open(Ev,GR);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Xo,{keyPath:bv})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Xo)?e(s):(s.close(),await QR(),e(await kl()))})})}async function Od(t,e,n){const s=Ka(t,!0).put({[bv]:e,value:n});return new Ni(s).toPromise()}async function XR(t,e){const n=Ka(t,!1).get(e),s=await new Ni(n).toPromise();return s===void 0?null:s.value}function Pd(t,e){const n=Ka(t,!0).delete(e);return new Ni(n).toPromise()}const YR=800,JR=3;class Tv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await kl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>JR)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return wv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=qa._getInstance(zR()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await KR(),!this.activeServiceWorker)return;this.sender=new HR(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);!s||((e=s[0])===null||e===void 0?void 0:e.fulfilled)&&((n=s[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||WR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await kl();return await Od(e,Qo,"1"),await Pd(e,Qo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Od(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>XR(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Pd(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=Ka(r,!1).getAll();return new Ni(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),YR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Tv.type="LOCAL";const ZR=Tv;/**
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
 */function eN(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function tN(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=jt("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",eN().appendChild(s)})}function nN(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new ki(3e4,6e4);/**
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
 */function sN(t,e){return e?Yt(e):(ee(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class lh extends dv{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return $s(e,this._buildIdpRequest())}_linkToIdToken(e,n){return $s(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return $s(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function rN(t){return LR(t.auth,new lh(t),t.bypassAuthState)}function iN(t){const{auth:e,user:n}=t;return ee(n,e,"internal-error"),xR(n,new lh(t),t.bypassAuthState)}async function oN(t){const{auth:e,user:n}=t;return ee(n,e,"internal-error"),PR(n,new lh(t),t.bypassAuthState)}/**
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
 */class Iv{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return rN;case"linkViaPopup":case"linkViaRedirect":return oN;case"reauthViaPopup":case"reauthViaRedirect":return iN;default:ln(this.auth,"internal-error")}}resolve(e){un(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){un(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const aN=new ki(2e3,1e4);class Rs extends Iv{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,Rs.currentPopupAction&&Rs.currentPopupAction.cancel(),Rs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ee(e,this.auth,"internal-error"),e}async onExecution(){un(this.filter.length===1,"Popup operations only handle one event");const e=ch();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(jt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(jt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Rs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(jt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,aN.get())};e()}}Rs.currentPopupAction=null;/**
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
 */const cN="pendingRedirect",mo=new Map;class lN extends Iv{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=mo.get(this.auth._key());if(!e){try{const s=await uN(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}mo.set(this.auth._key(),e)}return this.bypassAuthState||mo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function uN(t,e){const n=dN(e),s=fN(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function hN(t,e){mo.set(t._key(),e)}function fN(t){return Yt(t._redirectPersistence)}function dN(t){return go(cN,t.config.apiKey,t.name)}async function pN(t,e,n=!1){const s=ah(t),r=sN(s,e),o=await new lN(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const gN=10*60*1e3;class mN{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!yN(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Sv(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(jt(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=gN&&this.cachedEventUids.clear(),this.cachedEventUids.has(xd(e))}saveEventToCache(e){this.cachedEventUids.add(xd(e)),this.lastProcessedEventTime=Date.now()}}function xd(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Sv({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function yN(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Sv(t);default:return!1}}/**
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
 */async function vN(t,e={}){return ja(t,"GET","/v1/projects",e)}/**
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
 */const _N=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,wN=/^https?/;async function EN(t){if(t.config.emulator)return;const{authorizedDomains:e}=await vN(t);for(const n of e)try{if(bN(n))return}catch{}ln(t,"unauthorized-domain")}function bN(t){const e=Al(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!wN.test(n))return!1;if(_N.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const TN=new ki(3e4,6e4);function Ld(){const t=Ht().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function IN(t){return new Promise((e,n)=>{var s,r,i;function o(){Ld(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ld(),n(jt(t,"network-request-failed"))},timeout:TN.get()})}if(!((r=(s=Ht().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=Ht().gapi)===null||i===void 0)&&i.load)o();else{const a=nN("iframefcb");return Ht()[a]=()=>{gapi.load?o():n(jt(t,"network-request-failed"))},tN(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw yo=null,e})}let yo=null;function SN(t){return yo=yo||IN(t),yo}/**
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
 */const CN=new ki(5e3,15e3),AN="__/auth/iframe",kN="emulator/auth/iframe",RN={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},NN=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function DN(t){const e=t.config;ee(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?rh(e,kN):`https://${t.config.authDomain}/${AN}`,s={apiKey:e.apiKey,appName:t.name,v:hi},r=NN.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${ui(s).slice(1)}`}async function ON(t){const e=await SN(t),n=Ht().gapi;return ee(n,t,"internal-error"),e.open({where:document.body,url:DN(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:RN,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=jt(t,"network-request-failed"),a=Ht().setTimeout(()=>{i(o)},CN.get());function c(){Ht().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const PN={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},xN=500,LN=600,MN="_blank",UN="http://localhost";class Md{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function FN(t,e,n,s=xN,r=LN){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},PN),{width:s.toString(),height:r.toString(),top:i,left:o}),l=it().toLowerCase();n&&(a=iv(l)?MN:n),rv(l)&&(e=e||UN,c.scrollbars="yes");const u=Object.entries(c).reduce((f,[d,m])=>`${f}${d}=${m},`,"");if(IR(l)&&a!=="_self")return BN(e||"",a),new Md(null);const h=window.open(e||"",a,u);ee(h,t,"popup-blocked");try{h.focus()}catch{}return new Md(h)}function BN(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const $N="__/auth/handler",VN="emulator/auth/handler";function Ud(t,e,n,s,r,i){ee(t.config.authDomain,t,"auth-domain-config-required"),ee(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:hi,eventId:r};if(e instanceof pv){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",zT(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(i||{}))o[c]=l}if(e instanceof Ri){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${jN(t)}?${ui(a).slice(1)}`}function jN({config:t}){return t.emulator?rh(t,VN):`https://${t.authDomain}/${$N}`}/**
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
 */const Ac="webStorageSupport";class HN{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=_v,this._completeRedirectFn=pN,this._overrideRedirectResult=hN}async _openPopup(e,n,s,r){var i;un((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=Ud(e,n,s,Al(),r);return FN(e,o,ch())}async _openRedirect(e,n,s,r){return await this._originValidation(e),qR(Ud(e,n,s,Al(),r)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(un(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await ON(e),s=new mN(e);return n.register("authEvent",r=>(ee(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ac,{type:Ac},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[Ac];o!==void 0&&n(!!o),ln(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=EN(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return uv()||oh()||Ha()}}const qN=HN;var Fd="@firebase/auth",Bd="0.20.11";/**
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
 */class KN{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{var r;e(((r=s)===null||r===void 0?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ee(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function WN(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function zN(t){Qs(new fs("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=s.options;return((a,c)=>{ee(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),ee(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:hv(t)},u=new kR(a,c,l);return iR(u,n),u})(s,r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Qs(new fs("auth-internal",e=>{const n=ah(e.getProvider("auth").getImmediate());return(s=>new KN(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ln(Fd,Bd,WN(t)),Ln(Fd,Bd,"esm2017")}/**
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
 */const GN=5*60,QN=Ng("authIdTokenMaxAge")||GN;let $d=null;const XN=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>QN)return;const r=n==null?void 0:n.token;$d!==r&&($d=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function YN(t=xg()){const e=lu(t,"auth");if(e.isInitialized())return e.getImmediate();const n=rR(t,{popupRedirectResolver:qN,persistence:[ZR,VR,_v]}),s=Ng("authTokenSyncURL");if(s){const i=XN(s);UR(n,i,()=>i(n.currentUser)),MR(n,o=>i(o))}const r=Rg("auth");return r&&RR(n,`http://${r}`),n}zN("Browser");const JN=!1;/*!
  * pinia v2.0.23
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */let Cv;const Di=t=>Cv=t,Av=Symbol();function Rl(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Fr;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Fr||(Fr={}));function ZN(){const t=Jd(!0),e=t.run(()=>Zt({}));let n=[],s=[];const r=hs({install(i){Di(r),r._a=i,i.provide(Av,r),i.config.globalProperties.$pinia=r,s.forEach(o=>n.push(o)),s=[]},use(i){return!this._a&&!JN?s.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return r}const kv=()=>{};function Vd(t,e,n,s=kv){t.push(e);const r=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),s())};return!n&&fn()&&Ql(r),r}function Is(t,...e){t.slice().forEach(n=>{n(...e)})}function Nl(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,s)=>t.set(s,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],r=t[n];Rl(r)&&Rl(s)&&t.hasOwnProperty(n)&&!Re(s)&&!Jt(s)?t[n]=Nl(r,s):t[n]=s}return t}const e1=Symbol();function t1(t){return!Rl(t)||!t.hasOwnProperty(e1)}const{assign:Sn}=Object;function n1(t){return!!(Re(t)&&t.effect)}function s1(t,e,n,s){const{state:r,actions:i,getters:o}=e,a=n.state.value[t];let c;function l(){a||(n.state.value[t]=r?r():{});const u=v_(n.state.value[t]);return Sn(u,i,Object.keys(o||{}).reduce((h,f)=>(h[f]=hs(Ue(()=>{Di(n);const d=n._s.get(t);return o[f].call(d,d)})),h),{}))}return c=Rv(t,l,e,n,s,!0),c.$reset=function(){const h=r?r():{};this.$patch(f=>{Sn(f,h)})},c}function Rv(t,e,n={},s,r,i){let o;const a=Sn({actions:{}},n),c={deep:!0};let l,u,h=hs([]),f=hs([]),d;const m=s.state.value[t];!i&&!m&&(s.state.value[t]={}),Zt({});let w;function I(C){let b;l=u=!1,typeof C=="function"?(C(s.state.value[t]),b={type:Fr.patchFunction,storeId:t,events:d}):(Nl(s.state.value[t],C),b={type:Fr.patchObject,payload:C,storeId:t,events:d});const M=w=Symbol();ra().then(()=>{w===M&&(l=!0)}),u=!0,Is(h,b,s.state.value[t])}const v=kv;function p(){o.stop(),h=[],f=[],s._s.delete(t)}function _(C,b){return function(){Di(s);const M=Array.from(arguments),B=[],W=[];function F(ve){B.push(ve)}function se(ve){W.push(ve)}Is(f,{args:M,name:C,store:E,after:F,onError:se});let j;try{j=b.apply(this&&this.$id===t?this:E,M)}catch(ve){throw Is(W,ve),ve}return j instanceof Promise?j.then(ve=>(Is(B,ve),ve)).catch(ve=>(Is(W,ve),Promise.reject(ve))):(Is(B,j),j)}}const S={_p:s,$id:t,$onAction:Vd.bind(null,f),$patch:I,$reset:v,$subscribe(C,b={}){const M=Vd(h,C,b.detached,()=>B()),B=o.run(()=>Ls(()=>s.state.value[t],W=>{(b.flush==="sync"?u:l)&&C({storeId:t,type:Fr.direct,events:d},W)},Sn({},c,b)));return M},$dispose:p},E=Dt(S);s._s.set(t,E);const R=s._e.run(()=>(o=Jd(),o.run(()=>e())));for(const C in R){const b=R[C];if(Re(b)&&!n1(b)||Jt(b))i||(m&&t1(b)&&(Re(b)?b.value=m[C]:Nl(b,m[C])),s.state.value[t][C]=b);else if(typeof b=="function"){const M=_(C,b);R[C]=M,a.actions[C]=b}}return Sn(E,R),Sn(ge(E),R),Object.defineProperty(E,"$state",{get:()=>s.state.value[t],set:C=>{I(b=>{Sn(b,C)})}}),s._p.forEach(C=>{Sn(E,o.run(()=>C({store:E,app:s._a,pinia:s,options:a})))}),m&&i&&n.hydrate&&n.hydrate(E.$state,m),l=!0,u=!0,E}function uh(t,e,n){let s,r;const i=typeof e=="function";typeof t=="string"?(s=t,r=i?n:e):(r=t,s=t.id);function o(a,c){const l=fn();return a=a||l&&St(Av),a&&Di(a),a=Cv,a._s.has(s)||(i?Rv(s,e,r,a):s1(s,r,a)),a._s.get(s)}return o.$id=s,o}function H1(t){{t=ge(t);const e={};for(const n in t){const s=t[n];(Re(s)||Jt(s))&&(e[n]=sa(t,n))}return e}}const q1=uh("userState",{state:()=>({isLogged:JSON.parse(localStorage.getItem("isLogged"))}),getters:{},actions:{setStatusToLogged(){this.isLogged=!0,localStorage.setItem("isLogged",JSON.stringify(!0))},setStatusToLoggedOut(){this.isLogged=!1,localStorage.setItem("isLogged",JSON.stringify(!1))}}}),K1=uh("globalError",{state:()=>({error:null}),getters:{},actions:{setError(t){this.error=t},resetError(){this.error=null}}}),W1=uh("mainStore",{state:()=>({selectedProfile:JSON.parse(localStorage.getItem("selectedProfile"))}),getters:{},actions:{setProfile(t){this.selectedProfile=t,localStorage.setItem("selectedProfile",JSON.stringify(t))},resetProfile(){this.selectedProfile=null,localStorage.setItem("selectedProfile",JSON.stringify(null))}}});var r1={exports:{}};(function(t){var e=(()=>{var n=Object.defineProperty,s=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,o=(I,v,p)=>v in I?n(I,v,{enumerable:!0,configurable:!0,writable:!0,value:p}):I[v]=p,a=(I,v)=>{for(var p in v||(v={}))r.call(v,p)&&o(I,p,v[p]);if(s)for(var p of s(v))i.call(v,p)&&o(I,p,v[p]);return I},c=I=>n(I,"__esModule",{value:!0}),l=(I,v)=>{c(I);for(var p in v)n(I,p,{get:v[p],enumerable:!0})},u={};l(u,{DEFAULT_UUID_LENGTH:()=>f,default:()=>w});var h="4.4.4",f=6,d={dictionary:"alphanum",shuffle:!0,debug:!1,length:f},m=class extends Function{constructor(I={}){super(),this.dictIndex=0,this.dictRange=[],this.lowerBound=0,this.upperBound=0,this.dictLength=0,this._digit_first_ascii=48,this._digit_last_ascii=58,this._alpha_lower_first_ascii=97,this._alpha_lower_last_ascii=123,this._hex_last_ascii=103,this._alpha_upper_first_ascii=65,this._alpha_upper_last_ascii=91,this._number_dict_ranges={digits:[this._digit_first_ascii,this._digit_last_ascii]},this._alpha_dict_ranges={lowerCase:[this._alpha_lower_first_ascii,this._alpha_lower_last_ascii],upperCase:[this._alpha_upper_first_ascii,this._alpha_upper_last_ascii]},this._alpha_lower_dict_ranges={lowerCase:[this._alpha_lower_first_ascii,this._alpha_lower_last_ascii]},this._alpha_upper_dict_ranges={upperCase:[this._alpha_upper_first_ascii,this._alpha_upper_last_ascii]},this._alphanum_dict_ranges={digits:[this._digit_first_ascii,this._digit_last_ascii],lowerCase:[this._alpha_lower_first_ascii,this._alpha_lower_last_ascii],upperCase:[this._alpha_upper_first_ascii,this._alpha_upper_last_ascii]},this._alphanum_lower_dict_ranges={digits:[this._digit_first_ascii,this._digit_last_ascii],lowerCase:[this._alpha_lower_first_ascii,this._alpha_lower_last_ascii]},this._alphanum_upper_dict_ranges={digits:[this._digit_first_ascii,this._digit_last_ascii],upperCase:[this._alpha_upper_first_ascii,this._alpha_upper_last_ascii]},this._hex_dict_ranges={decDigits:[this._digit_first_ascii,this._digit_last_ascii],alphaDigits:[this._alpha_lower_first_ascii,this._hex_last_ascii]},this.log=(...E)=>{const R=[...E];if(R[0]=`[short-unique-id] ${E[0]}`,this.debug===!0&&typeof console<"u"&&console!==null)return console.log(...R)},this.setDictionary=(E,R)=>{let C;if(E&&Array.isArray(E)&&E.length>1)C=E;else{C=[];let b;this.dictIndex=b=0;const M=`_${E}_dict_ranges`,B=this[M];Object.keys(B).forEach(W=>{const F=W;for(this.dictRange=B[F],this.lowerBound=this.dictRange[0],this.upperBound=this.dictRange[1],this.dictIndex=b=this.lowerBound;this.lowerBound<=this.upperBound?b<this.upperBound:b>this.upperBound;this.dictIndex=this.lowerBound<=this.upperBound?b+=1:b-=1)C.push(String.fromCharCode(this.dictIndex))})}R&&(C=C.sort(()=>Math.random()-.5)),this.dict=C,this.dictLength=this.dict.length,this.counter=0},this.seq=()=>this.sequentialUUID(),this.sequentialUUID=()=>{let E,R,C="";E=this.counter;do R=E%this.dictLength,E=Math.trunc(E/this.dictLength),C+=this.dict[R];while(E!==0);return this.counter+=1,C},this.randomUUID=(E=this.uuidLength||f)=>{let R,C,b;if(E===null||typeof E>"u"||E<1)throw new Error("Invalid UUID Length Provided");for(R="",b=0;b<E;b+=1)C=parseInt((Math.random()*this.dictLength).toFixed(0),10)%this.dictLength,R+=this.dict[C];return R},this.availableUUIDs=(E=this.uuidLength)=>parseFloat(Math.pow([...new Set(this.dict)].length,E).toFixed(0)),this.approxMaxBeforeCollision=(E=this.availableUUIDs(this.uuidLength))=>parseFloat(Math.sqrt(Math.PI/2*E).toFixed(20)),this.collisionProbability=(E=this.availableUUIDs(this.uuidLength),R=this.uuidLength)=>parseFloat((this.approxMaxBeforeCollision(E)/this.availableUUIDs(R)).toFixed(20)),this.uniqueness=(E=this.availableUUIDs(this.uuidLength))=>{const R=parseFloat((1-this.approxMaxBeforeCollision(E)/E).toFixed(20));return R>1?1:R<0?0:R},this.getVersion=()=>this.version,this.stamp=E=>{if(typeof E!="number"||E<10)throw new Error("Param finalLength must be number greater than 10");const R=Math.floor(+new Date/1e3).toString(16),C=E-9,b=Math.round(Math.random()*(C>15?15:C)),M=this.randomUUID(C);return`${M.substr(0,b)}${R}${M.substr(b)}${b.toString(16)}`},this.parseStamp=E=>{if(E.length<10)throw new Error("Stamp length invalid");const R=parseInt(E.substr(E.length-1,1),16);return new Date(parseInt(E.substr(R,8),16)*1e3)};const v=a(a({},d),I);this.counter=0,this.debug=!1,this.dict=[],this.version=h;const{dictionary:p,shuffle:_,length:S}=v;return this.uuidLength=S,this.setDictionary(p,_),this.debug=v.debug,this.log(this.dict),this.log(`Generator instantiated with Dictionary Size ${this.dictLength}`),new Proxy(this,{apply:(E,R,C)=>this.randomUUID(...C)})}},w=m;return w.default=m,u})();t.exports=e.default,typeof window<"u"&&(e=e.default)})(r1);const Qi=void 0,Xi={middleware:"auth"},Yi={middleware:"auth"},Ji={middleware:"auth"};const i1=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n},Zi={middleware:"auth"},eo={middleware:"notAuth"};const to={middleware:"auth"},no={middleware:"notAuth"},so={middleware:"auth"},ro={middleware:"auth"};const io={middleware:"auth"},oo={middleware:"auth"},ao={middleware:"notAuth"},jd=[{name:"customer",path:"/:customer",file:"C:/Users/NZXT.-PC/Documents/ALL/Front/FeedCap/pages/[customer]/index.vue",children:[],meta:Qi,alias:(Qi==null?void 0:Qi.alias)||[],component:()=>Ze(()=>import("./index.ddd9e9d8.js"),["index.ddd9e9d8.js","index.f0bb05d6.css","useFirestore.86d97d27.js","useFirebaseAuth.c906f681.js","message_blue.1f39f60f.js"],import.meta.url).then(t=>t.default||t)},{name:"account-change-password",path:"/account/change-password",file:"C:/Users/NZXT.-PC/Documents/ALL/Front/FeedCap/pages/account/change-password/index.vue",children:[],meta:Xi,alias:(Xi==null?void 0:Xi.alias)||[],component:()=>Ze(()=>import("./index.8125c3b1.js"),["index.8125c3b1.js","index.8852b4bd.css"],import.meta.url).then(t=>t.default||t)},{name:"account",path:"/account",file:"C:/Users/NZXT.-PC/Documents/ALL/Front/FeedCap/pages/account/index.vue",children:[],meta:Yi,alias:(Yi==null?void 0:Yi.alias)||[],component:()=>Ze(()=>import("./index.fc846368.js"),["index.fc846368.js","index.81098e9b.css","useFirebaseAuth.c906f681.js"],import.meta.url).then(t=>t.default||t)},{name:"gifts-code",path:"/gifts/:code",file:"C:/Users/NZXT.-PC/Documents/ALL/Front/FeedCap/pages/gifts/[code]/index.vue",children:[],meta:Ji,alias:(Ji==null?void 0:Ji.alias)||[],component:()=>Ze(()=>import("./index.c93f8276.js"),["index.c93f8276.js","index.df6f8994.css"],import.meta.url).then(t=>t.default||t)},{name:"gifts",path:"/gifts",file:"C:/Users/NZXT.-PC/Documents/ALL/Front/FeedCap/pages/gifts/index.vue",children:[],meta:Zi,alias:(Zi==null?void 0:Zi.alias)||[],component:()=>Ze(()=>import("./index.7bea15f8.js"),["index.7bea15f8.js","index.765dd341.css"],import.meta.url).then(t=>t.default||t)},{name:"index",path:"/",file:"C:/Users/NZXT.-PC/Documents/ALL/Front/FeedCap/pages/index.vue",children:[],meta:eo,alias:(eo==null?void 0:eo.alias)||[],component:()=>Ze(()=>import("./index.dea3259b.js"),["index.dea3259b.js","index.becdbd34.css"],import.meta.url).then(t=>t.default||t)},{name:"liked",path:"/liked",file:"C:/Users/NZXT.-PC/Documents/ALL/Front/FeedCap/pages/liked/index.vue",children:[],meta:to,alias:(to==null?void 0:to.alias)||[],component:()=>Ze(()=>import("./index.46235cab.js"),["index.46235cab.js","index.fa4b5a44.css","ScrollList.a7e9cb07.js","heart_pink.4c6241f4.js","useFirestore.86d97d27.js","useFirebaseAuth.c906f681.js"],import.meta.url).then(t=>t.default||t)},{name:"login",path:"/login",file:"C:/Users/NZXT.-PC/Documents/ALL/Front/FeedCap/pages/login/index.vue",children:[],meta:no,alias:(no==null?void 0:no.alias)||[],component:()=>Ze(()=>import("./index.c6e1cd82.js"),["index.c6e1cd82.js","index.92fb6f65.css","login_icon.ac253b47.js"],import.meta.url).then(t=>t.default||t)},{name:"messages",path:"/messages",file:"C:/Users/NZXT.-PC/Documents/ALL/Front/FeedCap/pages/messages/index.vue",children:[],meta:so,alias:(so==null?void 0:so.alias)||[],component:()=>Ze(()=>import("./index.09767671.js"),["index.09767671.js","index.466bf3a5.css","useFirestore.86d97d27.js","useFirebaseAuth.c906f681.js","heart_pink.4c6241f4.js"],import.meta.url).then(t=>t.default||t)},{name:"messages-list",path:"/messages/list",file:"C:/Users/NZXT.-PC/Documents/ALL/Front/FeedCap/pages/messages/list/index.vue",children:[],meta:ro,alias:(ro==null?void 0:ro.alias)||[],component:()=>Ze(()=>import("./index.316e6fb5.js"),["index.316e6fb5.js","index.2ae01be6.css","ScrollList.a7e9cb07.js","heart_pink.4c6241f4.js","useFirestore.86d97d27.js","useFirebaseAuth.c906f681.js"],import.meta.url).then(t=>t.default||t)},{name:"profiles",path:"/profiles",file:"C:/Users/NZXT.-PC/Documents/ALL/Front/FeedCap/pages/profiles/index.vue",children:[],meta:io,alias:(io==null?void 0:io.alias)||[],component:()=>Ze(()=>import("./index.40417bb3.js"),["index.40417bb3.js","index.ff2df76e.css","useFirestore.86d97d27.js","useFirebaseAuth.c906f681.js"],import.meta.url).then(t=>t.default||t)},{name:"profiles-new-profile",path:"/profiles/new-profile",file:"C:/Users/NZXT.-PC/Documents/ALL/Front/FeedCap/pages/profiles/new-profile/index.vue",children:[],meta:oo,alias:(oo==null?void 0:oo.alias)||[],component:()=>Ze(()=>import("./index.cecf9c62.js"),["index.cecf9c62.js","index.72dfcf82.css","useFirestore.86d97d27.js","useFirebaseAuth.c906f681.js"],import.meta.url).then(t=>t.default||t)},{name:"signup",path:"/signup",file:"C:/Users/NZXT.-PC/Documents/ALL/Front/FeedCap/pages/signup/index.vue",children:[],meta:ao,alias:(ao==null?void 0:ao.alias)||[],component:()=>Ze(()=>import("./index.3e00fa45.js"),["index.3e00fa45.js","index.951168b3.css","login_icon.ac253b47.js"],import.meta.url).then(t=>t.default||t)}],o1={},zt={...o1},a1=[],kc={};function c1(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){const a=r.includes(t.slice(i))?t.slice(i).length:1;let c=r.slice(a);return c[0]!=="/"&&(c="/"+c),yf(c,"")}return yf(n,t)+s+r}const l1=dn(async t=>{var m,w,I,v;let e,n;t.vueApp.component("NuxtPage",uc),t.vueApp.component("NuxtNestedPage",uc),t.vueApp.component("NuxtChild",uc);let s=cg().app.baseURL;zt.hashMode&&!s.includes("#")&&(s+="#");const r=(w=(m=zt.history)==null?void 0:m.call(zt,s))!=null?w:zt.hashMode?P0(s):hg(s),i=(v=(I=zt.routes)==null?void 0:I.call(zt,jd))!=null?v:jd,o=c1(s,window.location),a=mb({...zt,history:r,routes:i});t.vueApp.use(a);const c=wo(a.currentRoute.value);a.afterEach((p,_)=>{c.value=_}),Object.defineProperty(t.vueApp.config.globalProperties,"previousRoute",{get:()=>c.value});const l=wo(a.resolve(o)),u=()=>{l.value=a.currentRoute.value};t.hook("page:finish",u),a.afterEach((p,_)=>{var S,E,R,C;((E=(S=p.matched[0])==null?void 0:S.components)==null?void 0:E.default)===((C=(R=_.matched[0])==null?void 0:R.components)==null?void 0:C.default)&&u()});const h={};for(const p in l.value)h[p]=Ue(()=>l.value[p]);t._route=Dt(h),t._middleware=t._middleware||{global:[],named:{}};const f=pa();try{[e,n]=u0(()=>a.isReady()),await e,n()}catch(p){Tn(t,wr,[p])}const d=vb("_layout");return a.beforeEach(async(p,_)=>{var E,R;p.meta=Dt(p.meta),t.isHydrating&&(p.meta.layout=(E=d.value)!=null?E:p.meta.layout),t._processingMiddleware=!0;const S=new Set([...a1,...t._middleware.global]);for(const C of p.matched){const b=C.meta.middleware;if(!!b)if(Array.isArray(b))for(const M of b)S.add(M);else S.add(b)}for(const C of S){const b=typeof C=="string"?t._middleware.named[C]||await((R=kc[C])==null?void 0:R.call(kc).then(B=>B.default||B)):C;if(!b)throw new Error(`Unknown route middleware: '${C}'.`);const M=await Tn(t,b,[p,_]);if(!t.payload.serverRendered&&t.isHydrating&&(M===!1||M instanceof Error)){const B=M||Xc({statusMessage:`Route navigation aborted: ${o}`});return Tn(t,wr,[B])}if(M||M===!1)return M}}),a.afterEach(async p=>{delete t._processingMiddleware,!t.isHydrating&&f.value&&await Tn(t,wb),p.matched.length===0&&Tn(t,wr,[Xc({statusCode:404,fatal:!1,statusMessage:`Page not found: ${p.fullPath}`})])}),t.hooks.hookOnce("app:created",async()=>{try{await a.replace({...a.resolve(o),name:void 0,force:!0})}catch(p){Tn(t,wr,[p])}}),{provide:{router:a}}}),u1=dn(t=>{const e=ZN();return t.vueApp.use(e),Di(e),t.payload&&t.payload.pinia&&(e.state.value=t.payload.pinia),{provide:{pinia:e}}}),h1=dn(t=>{!Fb()||(t.hooks.hook("link:prefetch",e=>wf(e)),ga().beforeResolve(async(e,n)=>{if(e.path===n.path)return;const s=await wf(e.path);!s||Object.assign(t.payload.data,s.data)}))}),f1=dn(()=>{Tg("auth",()=>{if(!JSON.parse(localStorage.getItem("isLogged")))return ru("/login")})});var d1="firebase",p1="9.14.0";/**
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
 */Ln(d1,p1,"app");const g1=dn(t=>{const n={apiKey:cg().public.apiBase,projectId:"feedcap"},s=Pg(n),r=$k(s),i=YN();t.provide("firestore",r),t.provide("auth",i)}),m1=dn(()=>{Tg("notAuth",()=>{const t=JSON.parse(localStorage.getItem("isLogged")),e=JSON.parse(localStorage.getItem("selectedProfile"));if(t&&e)return ru("/messages")})}),y1=[Xb,oT,TT,l1,u1,h1,f1,g1,m1],Hd={__name:"nuxt-root",setup(t){const e=kp(()=>Ze(()=>import("./error-component.4e4f233a.js"),[],import.meta.url).then(i=>i.default||i)),n=He(),s=()=>n.callHook("app:suspense:resolve");is("_route",bg()),n.hooks.callHookWith(i=>i.map(o=>o()),"vue:setup");const r=pa();return Dp((i,o,a)=>{n.hooks.callHook("vue:error",i,o,a).catch(c=>console.error("[nuxt] Error in `vue:error` hook",c)),Eb(i)&&(i.fatal||i.unhandled)&&Tn(n,wr,[i])}),(i,o)=>{const a=Xl("App");return as(),Ms(bp,{onResolve:s},{default:Kl(()=>[mt(r)?(as(),Ms(mt(e),{key:0,error:mt(r)},null,8,["error"])):(as(),Ms(a,{key:1}))]),_:1})}}},qd={default:kp(()=>Ze(()=>import("./default.528ba337.js"),["default.528ba337.js","default.e7cbd0e2.css","message_blue.1f39f60f.js"],import.meta.url).then(t=>t.default||t))},v1=Ke({props:{name:{type:[String,Boolean,Object],default:null}},setup(t,e){const n=bg();return()=>{var o,a,c;const s=(a=(o=Re(t.name)?t.name.value:t.name)!=null?o:n.meta.layout)!=null?a:"default",r=s&&s in qd,i=(c=n.meta.layoutTransition)!=null?c:_T;return Zc(fa,r&&i,{default:()=>Zc(qd[s],r,e.slots).default()}).default()}}}),_1={};function w1(t,e){const n=Xl("NuxtPage"),s=v1;return as(),Ms(s,null,{default:Kl(()=>[De(n)]),_:1})}const E1=i1(_1,[["render",w1]]);globalThis.$fetch||(globalThis.$fetch=KE.create({baseURL:ZE()}));let Kd;const b1=g0(y1);Kd=async function(){var r;const n=Boolean((r=window.__NUXT__)==null?void 0:r.serverRendered)?eE(Hd):Zw(Hd);n.component("App",E1);const s=f0({vueApp:n});s.hooks.hookOnce("app:suspense:resolve",()=>{s.isHydrating=!1});try{await p0(s,b1)}catch(i){await s.callHook("app:error",i),s.payload.error=s.payload.error||i}try{await s.hooks.callHook("app:created",n),await s.hooks.callHook("app:beforeMount",n),n.mount("#__nuxt"),await s.hooks.callHook("app:mounted",n),await ra()}catch(i){await s.callHook("app:error",i),s.payload.error=s.payload.error||i}},Kd().catch(t=>{console.error("Error while mounting app:",t)});export{V1 as A,W1 as B,j1 as C,q1 as D,ru as E,De as F,Kl as G,L1 as H,zp as I,P1 as J,ft as K,k1 as L,F1 as M,R1 as N,K1 as O,Ue as P,H1 as Q,iu as R,Ze as _,Ke as a,bg as b,Ms as c,kp as d,N1 as e,Wp as f,mw as g,O1 as h,Re as i,Jo as j,D1 as k,C1 as l,i1 as m,T1 as n,as as o,S1 as p,He as q,Zt as r,U1 as s,I1 as t,mt as u,x1 as v,A1 as w,B1 as x,M1 as y,$1 as z};
