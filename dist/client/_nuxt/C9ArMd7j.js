import{_ as c}from"./_HAIwVXa.js";import{C as l,m as p,P as u,u as d,O as f}from"./BqoG-WQz.js";const i=["innerHTML"],_={__name:"title",props:{context:{type:String,default:""},keyWords:{type:Array,default:[]}},setup(n){const s=n,{context:r,keyWords:t}=l(s),o=p(()=>{if(t.value&&t.value.length>0){let e=r.value;return t.value.forEach(a=>{e=e.replace(new RegExp(a,"g"),`<span style="color: transparent;background: linear-gradient(90deg, #FF7700 62.43%, #F69846 100%);background-clip: text;">${a}</span>`)}),e}else return r.value});return(e,a)=>(f(),u("h2",{class:"faqTitle",innerHTML:d(o)},null,8,i))}},x=c(_,[["__scopeId","data-v-1827be45"]]);export{x as default};
