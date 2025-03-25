import{r as a,w as k,e as m,c as e,o as l,a as o,h as u,n as f}from"./index-DlFSwqvT.js";const w={__name:"loading",props:{duration:{type:Number,required:!0}},emits:["hide"],setup(p,{expose:r,emit:v}){const n=v,i=p,h=a(null),t=a(!1);k(()=>{t.value&&n("hide")});const d=()=>{h.value&&Array.from(h.value.children).filter(c=>c instanceof SVGPathElement).forEach(c=>{const M=c.getTotalLength()??0;c.style.setProperty("--l",`${M}`)})};return m(()=>{d(),setTimeout(()=>{t.value=!0},i.duration)}),r({showAnimation:t}),(z,s)=>(l(),e("div",{class:f(["page-animate",{hide:t.value}])},[s[1]||(s[1]=o("div",{class:"circle1"},null,-1)),(l(),e("svg",{ref_key:"iSvg",ref:h,class:"icon icon-pp",width:"50%",height:"30%",viewBox:"0 0 69 32"},s[0]||(s[0]=[u('<path class="stroke-move" d="M14.558 6.045l-0.373 2.433-5.892 3.367-0.092 2.994 3.928-0.934-1.214-2.525 2.525 1.311-0.092 1.311 1.872 1.964h14.304l-6.917 1.311-0.092 2.617-5.515 3.647 0.653-3.928 2.525 1.122-1.214-2.713-1.495 0.189-1.683-1.964h-14.128l5.050-1.122v-4.392l7.851-4.673v-0.013z"></path><path class="stroke-move" d="M15.492 1.556v14.119l2.152-2.152v-1.311l2.709-1.311-1.122 2.713 3.928 0.561-3.647-5.795-2.617 0.188-1.403-7.014z"></path><path class="stroke-move" d="M6.611 16.982l1.591 0.653v2.525l5.795 3.367-0.75-3.928-2.617 1.311 1.403-2.805 1.214 0.281 2.244-2.056-0.092 13.65-0.842-4.112-7.947-4.489v-4.397z"></path><path class="stroke-move" d="M17.552 6.137l4.953 3.178-1.311-4.489-3.643 1.311z"></path><path class="stroke-path" d="M49.214 11.275h-0.324c-0.026-0.123-0.070-0.232-0.132-0.338s-0.14-0.193-0.237-0.272c-0.096-0.079-0.202-0.136-0.324-0.18-0.118-0.044-0.25-0.066-0.39-0.066-0.224 0-0.43 0.057-0.614 0.175s-0.329 0.289-0.443 0.513c-0.11 0.224-0.167 0.5-0.167 0.829s0.057 0.605 0.167 0.833c0.11 0.224 0.259 0.395 0.443 0.513 0.184 0.114 0.39 0.175 0.614 0.175 0.14 0 0.272-0.022 0.39-0.066s0.228-0.101 0.324-0.18c0.096-0.079 0.175-0.167 0.237-0.272s0.105-0.215 0.132-0.338h0.324c-0.031 0.162-0.083 0.316-0.162 0.456s-0.18 0.263-0.303 0.368c-0.123 0.105-0.263 0.188-0.421 0.245s-0.333 0.088-0.522 0.088c-0.298 0-0.561-0.075-0.793-0.224s-0.412-0.359-0.544-0.636c-0.132-0.272-0.197-0.596-0.197-0.964s0.066-0.693 0.197-0.964c0.132-0.272 0.311-0.482 0.544-0.631s0.495-0.224 0.793-0.224c0.188 0 0.364 0.031 0.522 0.088s0.298 0.14 0.421 0.245c0.123 0.105 0.224 0.228 0.303 0.368s0.136 0.294 0.162 0.456z"></path><path class="stroke-path" d="M45.221 10.17v3.546h-0.324v-3.546h0.324z"></path><path class="stroke-path" d="M43.468 11.274c-0.031-0.118-0.079-0.228-0.14-0.329-0.061-0.105-0.14-0.193-0.232-0.272s-0.197-0.14-0.316-0.184-0.25-0.066-0.399-0.066c-0.232 0-0.438 0.061-0.618 0.18-0.184 0.118-0.329 0.294-0.434 0.522s-0.158 0.5-0.158 0.82 0.053 0.587 0.158 0.815c0.105 0.228 0.25 0.399 0.438 0.522 0.184 0.118 0.399 0.18 0.636 0.18 0.219 0 0.412-0.048 0.579-0.145s0.298-0.237 0.39-0.416c0.096-0.18 0.14-0.395 0.14-0.644l0.105 0.035h-1.135v-0.289h1.346v0.289c0 0.302-0.061 0.565-0.184 0.785s-0.289 0.39-0.504 0.513c-0.215 0.118-0.46 0.18-0.736 0.18-0.311 0-0.579-0.075-0.811-0.224s-0.412-0.359-0.544-0.636c-0.127-0.272-0.193-0.596-0.193-0.964 0-0.276 0.035-0.53 0.11-0.754s0.18-0.416 0.316-0.574c0.136-0.158 0.298-0.281 0.482-0.364s0.39-0.127 0.618-0.127c0.193 0 0.373 0.031 0.53 0.092 0.162 0.061 0.303 0.145 0.425 0.254 0.123 0.105 0.224 0.228 0.302 0.368s0.132 0.285 0.162 0.443h-0.333v-0.009z"></path><path class="stroke-path" d="M37.712 13.716h-0.338l1.289-3.546h0.346l1.289 3.546h-0.338l-1.113-3.125h-0.026l-1.113 3.125h0.004zM37.953 12.357h1.758v0.289h-1.758v-0.289z"></path><path class="stroke-path" d="M33.14 10.17h0.373l1.289 3.090h0.031l1.289-3.090h0.373v3.546h-0.307v-2.862h-0.026l-1.197 2.862h-0.294l-1.197-2.862h-0.026v2.862h-0.307v-3.546z"></path><path class="stroke-path" d="M66.056 18.604c-0.031-0.254-0.153-0.451-0.364-0.592-0.215-0.14-0.473-0.21-0.785-0.21-0.228 0-0.425 0.035-0.596 0.11-0.167 0.075-0.298 0.175-0.394 0.302-0.092 0.127-0.14 0.276-0.14 0.438 0 0.136 0.031 0.254 0.097 0.351s0.153 0.18 0.254 0.241c0.105 0.061 0.21 0.114 0.324 0.158 0.114 0.039 0.219 0.075 0.311 0.096l0.522 0.14c0.132 0.035 0.28 0.083 0.447 0.145s0.325 0.145 0.473 0.254c0.153 0.105 0.276 0.241 0.377 0.403 0.097 0.167 0.149 0.368 0.149 0.609 0 0.276-0.075 0.526-0.219 0.75s-0.355 0.403-0.631 0.535c-0.276 0.131-0.61 0.197-1.004 0.197-0.369 0-0.684-0.061-0.952-0.18s-0.478-0.285-0.631-0.495c-0.153-0.21-0.236-0.456-0.258-0.736h0.64c0.017 0.193 0.083 0.355 0.197 0.482s0.258 0.219 0.434 0.281c0.175 0.061 0.368 0.092 0.57 0.092 0.236 0 0.452-0.039 0.64-0.114 0.188-0.079 0.337-0.189 0.447-0.324 0.11-0.14 0.167-0.302 0.167-0.491 0-0.171-0.048-0.307-0.145-0.416-0.097-0.105-0.219-0.193-0.377-0.259-0.153-0.066-0.324-0.127-0.504-0.175l-0.631-0.18c-0.399-0.114-0.719-0.281-0.951-0.491-0.232-0.215-0.351-0.491-0.351-0.837 0-0.285 0.079-0.539 0.232-0.75 0.158-0.215 0.369-0.381 0.631-0.5 0.268-0.118 0.561-0.18 0.89-0.18s0.622 0.061 0.881 0.18c0.258 0.118 0.46 0.276 0.609 0.482 0.153 0.202 0.232 0.434 0.241 0.693h-0.6v-0.009z"></path><path class="stroke-path" d="M61.563 18.604c-0.031-0.254-0.153-0.451-0.364-0.592-0.215-0.14-0.473-0.21-0.785-0.21-0.228 0-0.425 0.035-0.596 0.11-0.167 0.075-0.298 0.175-0.395 0.302-0.092 0.127-0.14 0.276-0.14 0.438 0 0.136 0.030 0.254 0.096 0.351s0.153 0.18 0.254 0.241c0.105 0.061 0.211 0.114 0.325 0.158 0.114 0.039 0.219 0.075 0.311 0.096l0.521 0.14c0.132 0.035 0.281 0.083 0.447 0.145s0.324 0.145 0.473 0.254c0.153 0.105 0.276 0.241 0.377 0.403 0.097 0.167 0.149 0.368 0.149 0.609 0 0.276-0.074 0.526-0.219 0.75s-0.356 0.403-0.632 0.535-0.609 0.197-1.004 0.197c-0.368 0-0.684-0.061-0.951-0.18s-0.478-0.285-0.631-0.495c-0.153-0.21-0.237-0.456-0.259-0.736h0.64c0.018 0.193 0.083 0.355 0.197 0.482s0.259 0.219 0.434 0.281c0.175 0.061 0.368 0.092 0.569 0.092 0.237 0 0.452-0.039 0.64-0.114 0.188-0.079 0.338-0.189 0.447-0.324 0.11-0.14 0.167-0.302 0.167-0.491 0-0.171-0.048-0.307-0.145-0.416-0.097-0.105-0.219-0.193-0.377-0.259-0.153-0.066-0.325-0.127-0.504-0.175l-0.631-0.18c-0.399-0.114-0.719-0.281-0.951-0.491s-0.351-0.491-0.351-0.837c0-0.285 0.079-0.539 0.232-0.75 0.158-0.215 0.368-0.381 0.631-0.5s0.561-0.18 0.89-0.18 0.622 0.061 0.881 0.18c0.258 0.118 0.46 0.276 0.609 0.482 0.153 0.202 0.232 0.434 0.241 0.693h-0.601v-0.009z"></path><path class="stroke-path" d="M54.207 22.448h-0.649l1.881-5.124h0.64l1.881 5.124h-0.649l-1.53-4.313h-0.039l-1.53 4.313h-0.004zM54.448 20.445h2.621v0.552h-2.621v-0.552z"></path><path class="stroke-path" d="M50.047 22.448v-5.124h1.731c0.403 0 0.732 0.075 0.986 0.219 0.259 0.145 0.447 0.338 0.57 0.583s0.184 0.517 0.184 0.82-0.061 0.574-0.184 0.824c-0.123 0.245-0.311 0.443-0.565 0.592-0.254 0.145-0.583 0.219-0.982 0.219h-1.241v-0.552h1.223c0.276 0 0.495-0.048 0.662-0.145s0.289-0.224 0.364-0.386c0.079-0.162 0.114-0.346 0.114-0.552s-0.039-0.39-0.114-0.552c-0.075-0.162-0.197-0.289-0.364-0.381s-0.39-0.14-0.671-0.14h-1.092v4.572h-0.622v0.004z"></path><path class="stroke-path" d="M43.779 17.324h0.741l1.74 4.252h0.061l1.74-4.252h0.741v5.124h-0.579v-3.893h-0.048l-1.6 3.893h-0.561l-1.6-3.893h-0.048v3.893h-0.579v-5.124h-0.009z"></path><path class="stroke-path" d="M42.735 19.884c0 0.539-0.096 1.008-0.294 1.403s-0.465 0.697-0.802 0.912-0.728 0.32-1.166 0.32c-0.438 0-0.824-0.105-1.166-0.32s-0.609-0.517-0.802-0.912c-0.197-0.395-0.294-0.859-0.294-1.403s0.096-1.008 0.294-1.403c0.197-0.395 0.465-0.697 0.802-0.912 0.342-0.215 0.728-0.32 1.166-0.32s0.824 0.105 1.166 0.32c0.342 0.215 0.609 0.517 0.802 0.912 0.197 0.395 0.294 0.859 0.294 1.403zM42.135 19.884c0-0.443-0.075-0.82-0.224-1.122-0.145-0.307-0.346-0.535-0.596-0.693s-0.53-0.237-0.842-0.237c-0.311 0-0.592 0.079-0.842 0.237s-0.452 0.386-0.596 0.693c-0.145 0.307-0.219 0.679-0.219 1.122s0.075 0.82 0.219 1.122c0.149 0.307 0.346 0.535 0.596 0.693s0.535 0.237 0.842 0.237 0.592-0.079 0.842-0.237c0.25-0.158 0.452-0.386 0.596-0.693 0.149-0.307 0.224-0.679 0.224-1.122z"></path><path class="stroke-path" d="M37.409 18.924h-0.622c-0.035-0.18-0.101-0.333-0.193-0.469s-0.202-0.25-0.329-0.342c-0.127-0.092-0.272-0.162-0.43-0.21s-0.32-0.070-0.491-0.070c-0.311 0-0.592 0.079-0.842 0.237s-0.452 0.386-0.596 0.693c-0.145 0.307-0.219 0.679-0.219 1.122s0.075 0.82 0.219 1.122c0.149 0.307 0.346 0.535 0.596 0.693s0.535 0.237 0.842 0.237c0.171 0 0.333-0.022 0.491-0.070s0.298-0.114 0.43-0.206c0.132-0.092 0.241-0.206 0.329-0.342 0.092-0.136 0.158-0.294 0.193-0.469h0.622c-0.048 0.263-0.132 0.495-0.254 0.701s-0.276 0.381-0.46 0.526c-0.184 0.145-0.39 0.254-0.618 0.329s-0.469 0.114-0.728 0.114c-0.438 0-0.824-0.105-1.166-0.32s-0.609-0.517-0.802-0.912c-0.197-0.395-0.294-0.859-0.294-1.403s0.096-1.008 0.294-1.403c0.197-0.395 0.465-0.697 0.802-0.912 0.342-0.215 0.728-0.32 1.166-0.32 0.259 0 0.5 0.039 0.728 0.114s0.434 0.184 0.618 0.329c0.184 0.145 0.338 0.32 0.46 0.526s0.21 0.438 0.254 0.701v0.004z"></path>',16)]),512)),s[2]||(s[2]=o("div",{class:"circle2"},null,-1))],2))}};export{w as _};
