import{E as F}from"./OzbZc6Xg.js";import{_ as O}from"./Ckqkxhxz.js";import{_ as Q,u as R}from"./_HAIwVXa.js";/* empty css        */import{_ as V}from"./DKu82GiH.js";import j from"./DlIxTYjM.js";import J from"./UJvKeMx-.js";import L from"./Cf8ai8Vm.js";import{C as u}from"./BVZP3Ntb.js";import{u as K}from"./c6ZmMwjk.js";import{u as Z}from"./DbcsgOD4.js";import{d as D}from"./BHqgVoJ_.js";import{b as x,m as tt,E as st,k as et,P as i,Q as t,a0 as e,u as s,H as p,ae as H,G as f,_ as U,ah as h,$ as ot,Y as d,a6 as nt,n as at,O as r}from"./BqoG-WQz.js";import"./Cjz2gp5U.js";import"./BrkpbKwy.js";import"./ByGyayRx.js";import"./Dkukaccb.js";import"./Bwev0DvE.js";const lt=""+new URL("descPic.9hqYoxNU.png",import.meta.url).href,it={class:"program"},rt={class:"title"},ct=["lang"],pt={class:"textCon"},dt={class:"p1"},_t={class:"p2"},ut={class:"textCon"},mt={class:"p1"},vt={class:"textCon"},ft={class:"p1"},ht={class:"p2"},gt={class:"tableWrapMob mob_show"},xt=["onClick"],Ct={class:"list"},bt={class:"item"},kt={class:"level"},Lt={class:"name"},yt={class:"text"},wt={class:"num"},Et={class:"tableWrap pc_show"},It={class:"nameBox"},Bt={class:"level"},Nt={class:"name"},St={class:"text1"},Tt={class:"text2"},Wt={class:"btnComponents"},Mt={class:"num"},zt={class:"t"},$t={__name:"index",setup(Pt){const{challengesData:m,isEmptyData:C,getChallengeInfoHooks:A}=Z(),_=x(0),y=x(0),g=x(0),w=x(0),{t:o,locale:G}=R(),X=tt(()=>K().getItem()),b=()=>{if(!X.value)return!1;at(()=>{const v=Math.round(window.innerWidth/375*20),n=document.getElementsByClassName("liItem");y.value=n[0].offsetWidth+v})},Y=v=>{g.value=v,w.value=-(y.value*g.value)},q=v=>{_.value=v};return st(()=>{A(()=>{b()}),window.addEventListener("resize",D(b,500))}),et(()=>{window.removeEventListener("resize",D(b,500))}),(v,n)=>{var B,N,S,T,W,M,z,$,P;const E=F,I=O;return r(),i("div",it,[t("h3",rt,e(s(o)(s(u).title)),1),p(j,{curIndex:_.value,data:(B=s(m))==null?void 0:B.list,onCurChange:q},null,8,["curIndex","data"]),t("div",{class:"descWrap",lang:s(G)},[t("div",pt,[t("p",dt,e(s(o)(s(u).accountSize)),1),t("p",_t,e(s(C)?"--":(S=(N=s(m))==null?void 0:N.list[_.value])==null?void 0:S.amount),1)]),t("div",ut,[t("p",mt,e(s(o)(s(u).stages)),1),n[0]||(n[0]=t("p",{class:"p2"},"3",-1))]),t("div",vt,[t("p",ft,e(s(o)(s(u).profits)),1),t("p",ht,[H(e(s(o)(s(u).highest))+" "+e(s(C)?"":"90%"),1),t("span",null,"("+e(s(o)(s(u).noLimit))+")",1)])]),n[1]||(n[1]=t("img",{class:"pic",alt:"",src:lt},null,-1))],8,ct),s(C)?nt("",!0):(r(),i(f,{key:0},[t("div",gt,[t("div",{class:U(["levelTaps",`current${g.value+1}`])},[(r(!0),i(f,null,h((W=(T=s(m))==null?void 0:T.list[_.value])==null?void 0:W.levelList,(a,c)=>(r(),i("p",{class:U(["tap",{active:g.value===c}]),onClick:l=>Y(c),key:c},"Step "+e(a.step),11,xt))),128))],2),t("div",Ct,[t("div",{class:"list_inner",style:ot({transform:`translateX(${w.value}px)`})},[(r(!0),i(f,null,h((z=(M=s(m))==null?void 0:M.list[_.value])==null?void 0:z.levelList,(a,c)=>(r(),i("div",{class:"liItem",key:c},[p(L,null,{default:d(()=>[t("div",bt,[t("p",kt,"Step "+e(a.step),1),t("p",Lt,e(s(o)(a.tag)),1),n[3]||(n[3]=t("div",{class:"line"},null,-1)),(r(!0),i(f,null,h(a.children,(l,k)=>(r(),i("div",{class:"textCon",key:k},[t("p",yt,[p(I,null,{default:d(()=>[p(E,{"show-after":300,class:"box-item",trigger:"click",effect:"dark",content:s(o)(l.desc),placement:"bottom","append-to":".program","popper-class":"aTips"},{default:d(()=>n[2]||(n[2]=[t("img",{class:"icon",alt:"",src:V},null,-1)])),_:2},1032,["content"])]),_:2},1024),t("span",null,e(s(o)(l.title)),1)]),t("p",wt,e(l.isLang?s(o)(l.content):l.content),1)]))),128))])]),_:2},1024)]))),128))],4)])]),t("div",Et,[(r(!0),i(f,null,h((P=($=s(m))==null?void 0:$.list[_.value])==null?void 0:P.levelList,(a,c)=>(r(),i("div",{class:"tableCon",key:c},[p(L,{class:"leftBorder"},{default:d(()=>[t("div",It,[t("p",Bt,"Step "+e(a.step),1),t("p",Nt,e(s(o)(a.tag)),1)])]),_:2},1024),p(L,{class:"rightBorder"},{default:d(()=>[(r(!0),i(f,null,h(a.children,(l,k)=>(r(),i("div",{class:"textLine",key:k},[t("p",St,[p(I,null,{default:d(()=>[p(E,{"show-after":300,class:"box-item",effect:"dark",content:s(o)(l.desc),placement:"left","append-to":".program","popper-class":"aTips"},{default:d(()=>n[4]||(n[4]=[t("img",{class:"icon",alt:"",src:V},null,-1)])),_:2},1032,["content"])]),_:2},1024),H(" "+e(s(o)(l.title)),1)]),t("p",Tt,e(l.isLang?s(o)(l.content):l.content),1)]))),128))]),_:2},1024)]))),128))]),t("div",Wt,[p(J,{url:"/user"},{default:d(()=>{var a,c;return[t("p",Mt,e((c=(a=s(m))==null?void 0:a.list[_.value])==null?void 0:c.payment),1),t("p",zt,e(s(o)(s(u).start)),1)]}),_:1})])],64))])}}},ss=Q($t,[["__scopeId","data-v-39051b0c"]]);export{ss as default};
