import{_ as k,u as y,k as h,al as x,a as P}from"./_HAIwVXa.js";import{a as b}from"./CwA0ZOBr.js";import{_ as w}from"./B8ZCVJzE.js";import T from"./729J9htQ.js";import C from"./DelaYRVi.js";import{g as N}from"./C0AqQVWm.js";import{u as R}from"./BXx2m1YV.js";import{b as m,E as B,P as E,Q as s,H as l,Y as r,a0 as t,u as i,_ as u,a5 as f,ae as e,O as g}from"./BqoG-WQz.js";import"./BGwd1ZC3.js";import"./Dmb7my4Z.js";import"./c6ZmMwjk.js";import"./BHqgVoJ_.js";const M={class:"content"},V={class:"loginCel"},I={class:"title pc_show"},S={class:"taps_wrap"},$={class:"goSignUp"},A={class:"mob_line mob_show"},D={class:"fl"},q={class:"fr"},z={class:"tips"},H={class:"mob_more mob_show"},O={class:"tips"},Q={__name:"index",setup(U){const c=m(1),p=m(),{t:o}=y(),d=_=>{c.value=_};R({}),B(()=>{h().query.code==="401"&&x.error(o("Login.tips")),N({types:"first_visit",params:{page_name:"Log In"},isDailyVisit:!0})});const v=()=>{p.value&&p.value.bindPhonePrefixTransfer()};return(_,n)=>{const a=P;return g(),E("div",{class:"loginMain",onClick:v},[s("div",M,[l(a,{to:"/"},{default:r(()=>n[2]||(n[2]=[s("img",{class:"close mob_show",src:b},null,-1)])),_:1}),s("div",V,[s("p",I,t(i(o)("Login.title1")),1),n[4]||(n[4]=s("img",{class:"logo mob_show",src:w},null,-1)),s("div",S,[s("p",{class:u(["tap",{active:c.value===1}]),onClick:n[0]||(n[0]=L=>d(1))},t(i(o)("Login.loginType1")),3),s("p",{class:u(["tap",{active:c.value===2}]),onClick:n[1]||(n[1]=L=>d(2))},t(i(o)("Login.loginType2")),3)]),c.value===1?(g(),f(T,{key:0})):(g(),f(C,{key:1,ref_key:"loginPhoneRef",ref:p},null,512)),s("p",$,[e(t(i(o)("Login.Noaccount"))+"? ",1),l(a,{to:"/register",class:"link"},{default:r(()=>[e(t(i(o)("Login.title2")),1)]),_:1})]),s("div",A,[s("div",D,[l(a,{class:"link",to:"/forgetPassword?type="+c.value},{default:r(()=>[e(t(i(o)("Login.forget"))+"?",1)]),_:1},8,["to"])]),s("div",q,[s("span",null,[e(t(i(o)("Login.Noaccount"))+"? ",1),l(a,{to:"/register",class:"link"},{default:r(()=>[e(t(i(o)("Login.title2")),1)]),_:1})])])]),s("div",z,[e(t(i(o)("Login.loginTips1"))+" ",1),l(a,{to:"/privacy",class:"link"},{default:r(()=>[e(t(i(o)("Login.tipsPrivacy")),1)]),_:1}),n[3]||(n[3]=e(", ")),l(a,{to:"/service",class:"link"},{default:r(()=>[e(t(i(o)("Login.tipsAgreement")),1)]),_:1}),e(". "+t(i(o)("Login.loginTips2")),1)])]),s("div",H,[s("div",O,[e(t(i(o)("Login.loginTips1"))+" ",1),l(a,{to:"/privacy",class:"link"},{default:r(()=>[e(t(i(o)("Login.tipsPrivacy")),1)]),_:1}),n[5]||(n[5]=e(", ")),l(a,{to:"/service",class:"link"},{default:r(()=>[e(t(i(o)("Login.tipsAgreement")),1)]),_:1}),e(". "+t(i(o)("Login.loginTips2")),1)])])])])}}},io=k(Q,[["__scopeId","data-v-bfacd8d9"]]);export{io as default};
