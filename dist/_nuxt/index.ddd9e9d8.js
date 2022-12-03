import{a as Z,b as I,r as _,o,e as n,u as s,f as t,t as v,h as p,w,v as f,i as x,j as E,k as T,p as U,l as R,m as Y}from"./entry.959975eb.js";import{f as j,s as z}from"./useFirestore.86d97d27.js";import{_ as F,a as P}from"./message_blue.1f39f60f.js";import"./useFirebaseAuth.c906f681.js";const i=r=>(U("data-v-07b6a0b5"),r=r(),R(),r),q={class:"customer-page"},A={key:0,class:"header-section"},G={key:0},H={class:"profile-name"},J=T('<div class="stats-icons" data-v-07b6a0b5><div class="gifts-stats" data-v-07b6a0b5><img src="'+F+'" alt="gift icon" data-v-07b6a0b5><span data-v-07b6a0b5>4</span></div><div class="messages-stats" data-v-07b6a0b5><img src="'+P+'" alt="comment icon" data-v-07b6a0b5><span data-v-07b6a0b5>37</span></div></div><button class="info-button" data-v-07b6a0b5><svg width="19" height="20" viewBox="0 0 19 20" xmlns="http://www.w3.org/2000/svg" data-v-07b6a0b5><path fill-rule="evenodd" clip-rule="evenodd" d="M9.41333 18.0147C13.8366 18.0147 17.4224 14.4289 17.4224 10.0056C17.4224 5.58232 13.8366 1.99654 9.41333 1.99654C4.99004 1.99654 1.40425 5.58232 1.40425 10.0056C1.40425 14.4289 4.99004 18.0147 9.41333 18.0147ZM9.41333 19.3485C14.5733 19.3485 18.7562 15.1656 18.7562 10.0056C18.7562 4.84568 14.5733 0.66272 9.41333 0.66272C4.25339 0.66272 0.0704346 4.84568 0.0704346 10.0056C0.0704346 15.1656 4.25339 19.3485 9.41333 19.3485Z" data-v-07b6a0b5></path><path d="M10.3711 15.3267C10.3711 15.6042 10.2804 15.8389 10.099 16.031C9.91762 16.2124 9.6882 16.3031 9.41077 16.3031C9.13334 16.3031 8.90392 16.2124 8.72252 16.031C8.54112 15.8389 8.45042 15.6042 8.45042 15.3267V8.71634C8.45042 8.43891 8.54112 8.20949 8.72252 8.02809C8.90392 7.83602 9.13334 7.73999 9.41077 7.73999C9.6882 7.73999 9.91762 7.83602 10.099 8.02809C10.2804 8.20949 10.3711 8.43891 10.3711 8.71634V15.3267ZM9.39476 6.69961C9.03197 6.69961 8.77587 6.64092 8.62649 6.52355C8.4771 6.40617 8.4024 6.1981 8.4024 5.89932V5.59521C8.4024 5.28577 8.48243 5.07769 8.64249 4.97099C8.81322 4.85361 9.06931 4.79492 9.41077 4.79492C9.78424 4.79492 10.0457 4.85361 10.1951 4.97099C10.3444 5.08836 10.4191 5.29644 10.4191 5.59521V5.89932C10.4191 6.20877 10.3391 6.42218 10.179 6.53955C10.019 6.64626 9.75756 6.69961 9.39476 6.69961Z" data-v-07b6a0b5></path></svg></button>',2),K={key:1},O={class:"customer-name"},Q={class:"customer-email"},W={class:"body-section"},X={key:0,class:"flex-column"},$=i(()=>t("span",null,"Next",-1)),t1=i(()=>t("svg",{width:"7",height:"11",viewBox:"0 0 7 11",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M1.07234 1.67443L4.00572 4.62646L4.71311 5.33847L4.87231 5.49874C4.97905 5.60534 5.03206 5.74554 5.03206 5.88574C5.03206 6.02593 4.97905 6.16613 4.87231 6.27274C4.8222 6.32315 4.76938 6.37706 4.71341 6.43338L3.28919 7.86583L1.07624 10.093C0.889235 10.3054 0.89817 10.6326 1.10305 10.8386C1.20979 10.946 1.34921 11 1.4879 11C1.62659 11.0007 1.76383 10.9481 1.86912 10.843C1.86912 10.843 5.13747 7.55349 6.41039 6.27274C6.51714 6.16613 6.57014 6.02593 6.57014 5.88574C6.57014 5.74554 6.51714 5.60534 6.41039 5.49874C5.1382 4.21798 1.87058 0.929935 1.87058 0.929935C1.76529 0.824058 1.6266 0.771484 1.4879 0.771484C1.34921 0.772215 1.20979 0.825519 1.10305 0.932857C0.900109 1.13693 0.890083 1.46058 1.07234 1.67443Z"})],-1)),s1=[$,t1],e1={key:1},a1={class:"buttons-group"},o1=i(()=>t("svg",{width:"6",height:"12",viewBox:"0 0 6 12",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M5.77135 10.2311L2.83797 7.27906L2.13058 6.56705L1.97138 6.40678C1.86464 6.30017 1.81163 6.15998 1.81163 6.01978C1.81163 5.87959 1.86464 5.73939 1.97138 5.63278C2.02149 5.58236 2.07431 5.52846 2.13028 5.47214L3.5545 4.03969L5.76745 1.81254C5.95445 1.60015 5.94552 1.27293 5.74064 1.0669C5.6339 0.959565 5.49448 0.905531 5.35579 0.905531C5.2171 0.904801 5.07986 0.957375 4.97457 1.06252C4.97457 1.06252 1.70622 4.35203 0.433295 5.63278C0.326553 5.73939 0.273545 5.87959 0.273545 6.01978C0.273545 6.15998 0.326553 6.30017 0.433295 6.40678C1.70549 7.68753 4.97311 10.9756 4.97311 10.9756C5.0784 11.0815 5.21709 11.134 5.35579 11.134C5.49448 11.1333 5.6339 11.08 5.74064 10.9727C5.94358 10.7686 5.95361 10.4449 5.77135 10.2311Z"})],-1)),n1=i(()=>t("span",null,"Back",-1)),i1=[o1,n1],c1={key:2},d1=i(()=>t("div",{class:"thanks"},"Thank you for your feedback",-1)),l1=i(()=>t("div",{class:"sent-status"},"Your message has been successfully sent",-1)),r1=[d1,l1],u1=Z({__name:"index",setup(r){const y=I(),C=_("send-button"),m=y.path.substring(1).split("-"),h=m[0],k=m[1],c=_(),d=_();let b=null;const M=u=>{b=u.target.innerText},S=async()=>{C.value="send-button clicked";const u=await j(k),a=new Date,l=String(a.getDate()).padStart(2,"0"),B=String(a.getMonth()+1).padStart(2,"0"),D=a.getFullYear(),N=l+"."+B+"."+D,V=Date.now().toString();await z(u,h,d.value,c.value,b,N,V),g()},e=_(1),g=()=>{e.value+=1},L=()=>{e.value-=1};return(u,a)=>(o(),n("div",q,[s(e)!==3?(o(),n("div",A,[s(e)===1?(o(),n("div",G,[t("div",H,v(s(h)),1),J])):s(e)===2?(o(),n("div",K,[t("div",O,v(s(c)),1),t("div",Q,v(s(d)),1)])):p("",!0)])):p("",!0),t("div",W,[s(e)===1?(o(),n("div",X,[w(t("input",{class:"customer-name","onUpdate:modelValue":a[0]||(a[0]=l=>x(c)?c.value=l:null),type:"text",placeholder:"Name"},null,512),[[f,s(c)]]),w(t("input",{class:"customer-email","onUpdate:modelValue":a[1]||(a[1]=l=>x(d)?d.value=l:null),type:"email",placeholder:"Email"},null,512),[[f,s(d)]]),t("button",{class:"next-button",onClick:g},s1)])):s(e)===2?(o(),n("div",e1,[t("span",{class:"textarea-input",onBlur:M,role:"textbox",contenteditable:"true",spellcheck:"false"},null,32),t("div",a1,[t("button",{class:"back-button",onClick:L},i1),t("button",{class:E(s(C)),onClick:S},"Send",2)])])):s(e)===3?(o(),n("div",c1,r1)):p("",!0)])]))}});const m1=Y(u1,[["__scopeId","data-v-07b6a0b5"]]);export{m1 as default};
