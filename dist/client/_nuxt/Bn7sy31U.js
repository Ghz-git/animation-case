import{x as we,D as H,az as he,a4 as ue,aA as Le,aB as Ee,z as ke,B as be,a8 as Se,E as N,aC as xe,aD as Ne,aE as Oe,aF as Ae,aG as Te,aH as $e,aI as Me,aJ as $,C as _e,a1 as T,aK as Re,F as Ie,$ as Be,Y as F,a6 as Ve,aL as Ye}from"./_HAIwVXa.js";import{l as ne,x as pe,b as h,e as Pe,j as De,m as f,c as de,n as ze,E as Ce,O as w,a5 as fe,Y as b,H as c,a2 as Xe,Q as y,_ as d,u as a,$ as ge,a8 as Fe,a6 as C,P as E,G as te,a7 as He,ah as je,Z as Ke,a1 as We,W as ae,at as Ze,a0 as Ge,X as ye,M as qe}from"./BqoG-WQz.js";import{E as Je}from"./Cjz2gp5U.js";import{t as ce,u as Qe,i as Ue}from"./CzjMnXGo.js";import{g as ea}from"./Z2fCOrM8.js";const aa=we({urlList:{type:H(Array),default:()=>he([])},zIndex:{type:Number},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},hideOnClickModal:Boolean,teleported:Boolean,closeOnPressEscape:{type:Boolean,default:!0},zoomRate:{type:Number,default:1.2},minScale:{type:Number,default:.2},maxScale:{type:Number,default:7},crossorigin:{type:H(String)}}),ta={close:()=>!0,switch:v=>ue(v),rotate:v=>ue(v)},na=ne({name:"ElImageViewer"}),sa=ne({...na,props:aa,emits:ta,setup(v,{expose:O,emit:u}){var M;const i=v,m={CONTAIN:{name:"contain",icon:pe(Le)},ORIGINAL:{name:"original",icon:pe(Ee)}},{t:se}=ke(),s=be("image-viewer"),{nextZIndex:oe}=Se(),A=h(),S=h([]),L=Pe(),_=h(!0),p=h(i.initialIndex),g=De(m.CONTAIN),o=h({scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}),R=h((M=i.zIndex)!=null?M:oe()),B=f(()=>{const{urlList:t}=i;return t.length<=1}),j=f(()=>p.value===0),K=f(()=>p.value===i.urlList.length-1),V=f(()=>i.urlList[p.value]),le=f(()=>[s.e("btn"),s.e("prev"),s.is("disabled",!i.infinite&&j.value)]),W=f(()=>[s.e("btn"),s.e("next"),s.is("disabled",!i.infinite&&K.value)]),Y=f(()=>{const{scale:t,deg:r,offsetX:n,offsetY:k,enableTransition:I}=o.value;let z=n/t,x=k/t;const X=r*Math.PI/180,ve=Math.cos(X),me=Math.sin(X);z=z*ve+x*me,x=x*ve-n/t*me;const ie={transform:`scale(${t}) rotate(${r}deg) translate(${z}px, ${x}px)`,transition:I?"transform .3s":""};return g.value.name===m.CONTAIN.name&&(ie.maxWidth=ie.maxHeight="100%"),ie});function P(){Z(),u("close")}function re(){const t=ce(n=>{switch(n.code){case T.esc:i.closeOnPressEscape&&P();break;case T.space:U();break;case T.left:ee();break;case T.up:l("zoomIn");break;case T.right:e();break;case T.down:l("zoomOut");break}}),r=ce(n=>{const k=n.deltaY||n.deltaX;l(k<0?"zoomIn":"zoomOut",{zoomRate:i.zoomRate,enableTransition:!1})});L.run(()=>{$(document,"keydown",t),$(document,"wheel",r)})}function Z(){L.stop()}function G(){_.value=!1}function q(t){_.value=!1,t.target.alt=se("el.image.error")}function J(t){if(_.value||t.button!==0||!A.value)return;o.value.enableTransition=!1;const{offsetX:r,offsetY:n}=o.value,k=t.pageX,I=t.pageY,z=ce(X=>{o.value={...o.value,offsetX:r+X.pageX-k,offsetY:n+X.pageY-I}}),x=$(document,"mousemove",z);$(document,"mouseup",()=>{x()}),t.preventDefault()}function Q(){o.value={scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}}function U(){if(_.value)return;const t=Re(m),r=Object.values(m),n=g.value.name,I=(r.findIndex(z=>z.name===n)+1)%t.length;g.value=m[t[I]],Q()}function D(t){const r=i.urlList.length;p.value=(t+r)%r}function ee(){j.value&&!i.infinite||D(p.value-1)}function e(){K.value&&!i.infinite||D(p.value+1)}function l(t,r={}){if(_.value)return;const{minScale:n,maxScale:k}=i,{zoomRate:I,rotateDeg:z,enableTransition:x}={zoomRate:i.zoomRate,rotateDeg:90,enableTransition:!0,...r};switch(t){case"zoomOut":o.value.scale>n&&(o.value.scale=Number.parseFloat((o.value.scale/I).toFixed(3)));break;case"zoomIn":o.value.scale<k&&(o.value.scale=Number.parseFloat((o.value.scale*I).toFixed(3)));break;case"clockwise":o.value.deg+=z,u("rotate",o.value.deg);break;case"anticlockwise":o.value.deg-=z,u("rotate",o.value.deg);break}o.value.enableTransition=x}return de(V,()=>{ze(()=>{const t=S.value[0];t!=null&&t.complete||(_.value=!0)})}),de(p,t=>{Q(),u("switch",t)}),Ce(()=>{var t,r;re(),(r=(t=A.value)==null?void 0:t.focus)==null||r.call(t)}),O({setActiveItem:D}),(t,r)=>(w(),fe(a(Je),{to:"body",disabled:!t.teleported},{default:b(()=>[c(Xe,{name:"viewer-fade",appear:""},{default:b(()=>[y("div",{ref_key:"wrapper",ref:A,tabindex:-1,class:d(a(s).e("wrapper")),style:ge({zIndex:R.value})},[y("div",{class:d(a(s).e("mask")),onClick:Fe(n=>t.hideOnClickModal&&P(),["self"])},null,10,["onClick"]),C(" CLOSE "),y("span",{class:d([a(s).e("btn"),a(s).e("close")]),onClick:P},[c(a(N),null,{default:b(()=>[c(a(xe))]),_:1})],2),C(" ARROW "),a(B)?C("v-if",!0):(w(),E(te,{key:0},[y("span",{class:d(a(le)),onClick:ee},[c(a(N),null,{default:b(()=>[c(a(Ne))]),_:1})],2),y("span",{class:d(a(W)),onClick:e},[c(a(N),null,{default:b(()=>[c(a(Oe))]),_:1})],2)],64)),C(" ACTIONS "),y("div",{class:d([a(s).e("btn"),a(s).e("actions")])},[y("div",{class:d(a(s).e("actions__inner"))},[c(a(N),{onClick:n=>l("zoomOut")},{default:b(()=>[c(a(Ae))]),_:1},8,["onClick"]),c(a(N),{onClick:n=>l("zoomIn")},{default:b(()=>[c(a(Te))]),_:1},8,["onClick"]),y("i",{class:d(a(s).e("actions__divider"))},null,2),c(a(N),{onClick:U},{default:b(()=>[(w(),fe(He(a(g).icon)))]),_:1}),y("i",{class:d(a(s).e("actions__divider"))},null,2),c(a(N),{onClick:n=>l("anticlockwise")},{default:b(()=>[c(a($e))]),_:1},8,["onClick"]),c(a(N),{onClick:n=>l("clockwise")},{default:b(()=>[c(a(Me))]),_:1},8,["onClick"])],2)],2),C(" CANVAS "),y("div",{class:d(a(s).e("canvas"))},[(w(!0),E(te,null,je(t.urlList,(n,k)=>Ke((w(),E("img",{ref_for:!0,ref:I=>S.value[k]=I,key:n,src:n,style:ge(a(Y)),class:d(a(s).e("img")),crossorigin:t.crossorigin,onLoad:G,onError:q,onMousedown:J},null,46,["src","crossorigin"])),[[We,k===p.value]])),128))],2),ae(t.$slots,"default")],6)]),_:3})]),_:3},8,["disabled"]))}});var oa=_e(sa,[["__file","image-viewer.vue"]]);const la=Ie(oa),ra=we({hideOnClickModal:Boolean,src:{type:String,default:""},fit:{type:String,values:["","contain","cover","fill","none","scale-down"],default:""},loading:{type:String,values:["eager","lazy"]},lazy:Boolean,scrollContainer:{type:H([String,Object])},previewSrcList:{type:H(Array),default:()=>he([])},previewTeleported:Boolean,zIndex:{type:Number},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},zoomRate:{type:Number,default:1.2},minScale:{type:Number,default:.2},maxScale:{type:Number,default:7},crossorigin:{type:H(String)}}),ia={load:v=>v instanceof Event,error:v=>v instanceof Event,switch:v=>ue(v),close:()=>!0,show:()=>!0},ca=ne({name:"ElImage",inheritAttrs:!1}),ua=ne({...ca,props:ra,emits:ia,setup(v,{emit:O}){const u=v;let M="";const{t:i}=ke(),m=be("image"),se=Ze(),s=f(()=>Be(Object.entries(se).filter(([e])=>/^(data-|on[A-Z])/i.test(e)||["id","style"].includes(e)))),oe=Qe({excludeListeners:!0,excludeKeys:f(()=>Object.keys(s.value))}),A=h(),S=h(!1),L=h(!0),_=h(!1),p=h(),g=h(),o=F&&"loading"in HTMLImageElement.prototype;let R,B;const j=f(()=>[m.e("inner"),V.value&&m.e("preview"),L.value&&m.is("loading")]),K=f(()=>{const{fit:e}=u;return F&&e?{objectFit:e}:{}}),V=f(()=>{const{previewSrcList:e}=u;return Array.isArray(e)&&e.length>0}),le=f(()=>{const{previewSrcList:e,initialIndex:l}=u;let t=l;return l>e.length-1&&(t=0),t}),W=f(()=>u.loading==="eager"?!1:!o&&u.loading==="lazy"||u.lazy),Y=()=>{F&&(L.value=!0,S.value=!1,A.value=u.src)};function P(e){L.value=!1,S.value=!1,O("load",e)}function re(e){L.value=!1,S.value=!0,O("error",e)}function Z(){Ue(p.value,g.value)&&(Y(),J())}const G=Ye(Z,200,!0);async function q(){var e;if(!F)return;await ze();const{scrollContainer:l}=u;Ve(l)?g.value=l:qe(l)&&l!==""?g.value=(e=document.querySelector(l))!=null?e:void 0:p.value&&(g.value=ea(p.value)),g.value&&(R=$(g,"scroll",G),setTimeout(()=>Z(),100))}function J(){!F||!g.value||!G||(R==null||R(),g.value=void 0)}function Q(e){if(e.ctrlKey){if(e.deltaY<0)return e.preventDefault(),!1;if(e.deltaY>0)return e.preventDefault(),!1}}function U(){V.value&&(B=$("wheel",Q,{passive:!1}),M=document.body.style.overflow,document.body.style.overflow="hidden",_.value=!0,O("show"))}function D(){B==null||B(),document.body.style.overflow=M,_.value=!1,O("close")}function ee(e){O("switch",e)}return de(()=>u.src,()=>{W.value?(L.value=!0,S.value=!1,J(),q()):Y()}),Ce(()=>{W.value?q():Y()}),(e,l)=>(w(),E("div",ye({ref_key:"container",ref:p},a(s),{class:[a(m).b(),e.$attrs.class]}),[S.value?ae(e.$slots,"error",{key:0},()=>[y("div",{class:d(a(m).e("error"))},Ge(a(i)("el.image.error")),3)]):(w(),E(te,{key:1},[A.value!==void 0?(w(),E("img",ye({key:0},a(oe),{src:A.value,loading:e.loading,style:a(K),class:a(j),crossorigin:e.crossorigin,onClick:U,onLoad:P,onError:re}),null,16,["src","loading","crossorigin"])):C("v-if",!0),L.value?(w(),E("div",{key:1,class:d(a(m).e("wrapper"))},[ae(e.$slots,"placeholder",{},()=>[y("div",{class:d(a(m).e("placeholder"))},null,2)])],2)):C("v-if",!0)],64)),a(V)?(w(),E(te,{key:2},[_.value?(w(),fe(a(la),{key:0,"z-index":e.zIndex,"initial-index":a(le),infinite:e.infinite,"zoom-rate":e.zoomRate,"min-scale":e.minScale,"max-scale":e.maxScale,"url-list":e.previewSrcList,crossorigin:e.crossorigin,"hide-on-click-modal":e.hideOnClickModal,teleported:e.previewTeleported,"close-on-press-escape":e.closeOnPressEscape,onClose:D,onSwitch:ee},{default:b(()=>[e.$slots.viewer?(w(),E("div",{key:0},[ae(e.$slots,"viewer")])):C("v-if",!0)]),_:3},8,["z-index","initial-index","infinite","zoom-rate","min-scale","max-scale","url-list","crossorigin","hide-on-click-modal","teleported","close-on-press-escape"])):C("v-if",!0)],64)):C("v-if",!0)],16))}});var da=_e(ua,[["__file","image.vue"]]);const ya=Ie(da);export{ya as E};
