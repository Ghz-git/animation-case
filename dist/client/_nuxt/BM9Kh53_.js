import{_ as x,u as L,a as F}from"./_HAIwVXa.js";import N from"./ySpMy6g5.js";import V from"./kpZaamV4.js";import y from"./BJTWggWJ.js";import{H as U}from"./BVZP3Ntb.js";import{u as Y}from"./c6ZmMwjk.js";import{d as b}from"./BHqgVoJ_.js";import{b as i,m as O,E as W,k as P,P as a,Q as e,a6 as p,a0 as c,u as d,$ as H,G as f,ah as g,H as E,n as R,O as l,_ as M,a5 as I,Y as Q}from"./BqoG-WQz.js";import"./DUqSV5Db.js";import"./CEdoGBVK.js";import"./BrkpbKwy.js";const B="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKtSURBVHgBvVc7s1lRFF7nUCgU8gNwGH3oNIwZzaWJRpFRJKO6jZFUGapbJlUSfkCuFoVbSaq44zFGddJomMlBo2QoEuORtTYxBGPvE+43s+c89/72t856HQk4EAgELPP53C1J0gscgdVqpeBty+bxCIe6GY/VarXEs6Z0jnC5XCaR6M0O0TlouLn72WyWazab2qmXDKce+P3+JJLS7m9wmIAftMGAwWCI2O32cb/fV7mJkfQjqrwTJDy2gYiiKJZer/ftLLHP5/uCh1u4HLyoXEHlDyeJSemFSf/C/a/yLTEqfY2H93A9eDffvEkXzKvRe5XFYvEdTxW4LkbodI5KpTKS6Qq999UTkBIoH1BorhWjmX/yEuO70Ol0YDgcgk4w1TIuFAEBtYlEAjKZDLjdbtAJlgUNNpvtFjONl3cWpkQIhUIQjUbZtaqqoANjA3raOxBQPJ1OoVAogNlshlgsBi6XC9rtNrvPC1mWTUT8CXRkqFarBZPJBMLhMASDQWYJAXITeTVv8j9AsViEeDzO1OfzeaaeExYZ/gNEmE6n2ZHM3+12uecaYV1PhVV7PB5IpVKMNJvNMmIBjIxYhah+CsUGeTSFFcUymVo0ppFTJcWPOLiJSSWFU7lcZkpFvHkHP4iYin2Sd4ZO0+4BLVyRqL3BAkEpU7d3C0LD0HPIVCnQ5p/hiYBcOTqycDIajZRERnB9aJin7+mENQKapv2yWq2/0fY3cF28bTQalS0xYTAYNLFgPBMpGCKgz1mr1bYdzl7PhW3JV8zdDhAIL07kkHSvlzvoMpG8dEnlG6UHDeTRvnqjvAdr5XrDbIQtVaper98de3jyT4L+AJxO5wNOHqN6RWADFJ4fMFJeYrxWTr0kASeoRcIFA3j6fJPbLTtEGqxTbwkJVcoN59b7A1nZJOX/JMGdAAAAAElFTkSuQmCC",X={class:"how-to-success"},j={class:"m-wrap__title"},D={class:"subTitle"},q={class:"list"},z={class:"item tableBorder"},G=["src"],K={class:"item-inner"},Z={class:"item-inner__header"},$={class:"text"},ee={class:"t"},te={__name:"index",setup(se){const v=i(),{t:r,locale:le}=L(),u=i(U),w=O(()=>Y().getItem()),_=i(0),o=i(0),h=i(0),A=()=>{if(!w)return!1;R(()=>{var m;const n=Math.round(window.innerWidth/375*20),s=document.getElementsByClassName("htsItem");_.value=((m=s[0])==null?void 0:m.offsetWidth)+n})},C=n=>{if(n===1){if(o.value===0)return!1;o.value--}else{if(o.value===u.value.length-1)return!1;o.value++}h.value=-(_.value*o.value)},J=n=>{v.value.shower(n-1)};return W(()=>{A(),window.addEventListener("resize",b(A,500))}),P(()=>{window.removeEventListener("resize",b(A,500))}),(n,s)=>{const m=F;return l(),a(f,null,[e("div",X,[e("h1",j,[o.value!==0?(l(),a("img",{key:0,class:"mob_show prev",onClick:s[0]||(s[0]=t=>C(1)),alt:"",src:B})):p("",!0),e("span",null,c(d(r)("common.successful")),1),o.value!==u.value.length-1?(l(),a("img",{key:1,class:"mob_show next",onClick:s[1]||(s[1]=t=>C(2)),alt:"",src:B})):p("",!0)]),e("p",D,c(d(r)("common.fund60")),1),e("div",q,[e("div",{class:"list_inner",style:H({transform:`translateX(${h.value}px)`})},[(l(!0),a(f,null,g(u.value,(t,T)=>(l(),a("div",{class:"tableWrap htsItem",key:T},[s[2]||(s[2]=e("p",{class:"line1"},null,-1)),s[3]||(s[3]=e("p",{class:"line2"},null,-1)),e("div",z,[e("img",{class:"item-shadow",alt:"",src:t.shadow},null,8,G),e("div",K,[e("div",null,[e("div",Z,[e("div",{class:M(`pic pic${T+1}`)},null,2),e("span",$,c(d(r)(t.headerTitle)),1)]),(l(!0),a(f,null,g(t.stepList,(k,S)=>(l(),I(V,{itemInfo:k,key:S,onCall:oe=>J(k.stepNum)},null,8,["itemInfo","onCall"]))),128)),t.listTitle?(l(),I(y,{key:0,itemInfo:t.list,listTitle:t.listTitle,listTitleColor:t.listTitleColor},null,8,["itemInfo","listTitle","listTitleColor"])):p("",!0)]),E(m,{class:"lightingBtn",to:t.btnUrl},{default:Q(()=>[e("p",ee,c(d(r)(t.btnStr)),1)]),_:2},1032,["to"])])])]))),128))],4)])]),E(N,{ref_key:"detailPopupRef",ref:v},null,512)],64)}}},ve=x(te,[["__scopeId","data-v-7e26f1d9"]]);export{ve as default};
