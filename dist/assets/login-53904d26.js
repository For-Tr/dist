import{d as h,u as v,a as w,b as f,o as x,e as b,f as s,g as o,w as d,v as p,m as u,p as y,h as F}from"./index-da835352.js";import{l as S}from"./k-logo-b1d5237f.js";import{M as I,P as k}from"./pwd-icon-ae51b783.js";import{_ as C}from"./_plugin-vue_export-helper-c27b6911.js";const i=t=>(y("data-v-118fd480"),t=t(),F(),t),U={class:"container"},B={class:"login-page pc-style"},D=["src"],L=i(()=>s("div",{class:"login-tab"},[s("div",{class:"tab-selected"},[s("span",{class:"title"},"Log in"),s("span",{class:"tabline tabline-width"})])],-1)),M={class:"mail-login",type:"login"},P={class:"common-input"},V=["src"],j={class:"input-view"},A=i(()=>s("p",{class:"err-view"},null,-1)),E={class:"common-input"},G=["src"],N={class:"input-view"},O=i(()=>s("p",{class:"err-view"},null,-1)),R=h({__name:"login",setup(t){const r=v(),n=w(),e=f({loginForm:{username:"",password:""}}),_=()=>{n.login({username:e.loginForm.username,password:e.loginForm.password}).then(l=>{g(),console.log("success==>",n.user_name),console.log("success==>",n.user_id),console.log("success==>",n.user_token)}).catch(l=>{u.warn(l.msg||"Oh no!!!")})},m=()=>{r.push({name:"register"})},g=()=>{r.push({name:"portal"}),u.success("Good job！")};return(l,a)=>(x(),b("div",U,[s("div",B,[s("img",{src:o(S),alt:"logo",class:"logo-icon"},null,8,D),L,s("div",M,[s("div",P,[s("img",{src:o(I),class:"left-icon"},null,8,V),s("div",j,[d(s("input",{placeholder:"Account","onUpdate:modelValue":a[0]||(a[0]=c=>o(e).loginForm.username=c),type:"text",class:"input"},null,512),[[p,o(e).loginForm.username]]),A])]),s("div",E,[s("img",{src:o(k),class:"left-icon"},null,8,G),s("div",N,[d(s("input",{placeholder:"Password","onUpdate:modelValue":a[1]||(a[1]=c=>o(e).loginForm.password=c),type:"password",class:"input"},null,512),[[p,o(e).loginForm.password]]),O])]),s("div",{class:"next-btn-view"},[s("button",{class:"next-btn btn-active",style:{margin:"16px 0px"},onClick:_},"Log in")])]),s("div",{class:"operation"},[s("a",{onClick:m,class:"forget-pwd",style:{"text-align":"right"}},"Don't have an account? Sign up")])])]))}});const J=C(R,[["__scopeId","data-v-118fd480"]]);export{J as default};