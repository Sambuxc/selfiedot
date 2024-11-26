import{e as $,J as C,Y as M,ai as S,c as l,_ as k,aj as N,o as c,n as A,ak as B,w as x,A as v,al as V,b as i,q as p,F as b,a as s,am as D,ad as H,y as I,d as Y,t as E,p as F,z as y,an as L}from"./BBGZjNxc.js";import{_ as O}from"./dia7k93P.js";import T from"./DK2KhvMk.js";import{u as P}from"./CbzFMUn6.js";const j=Symbol.for("nuxt:client-only"),z=$({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(_,{slots:e,attrs:r}){const d=C(!1);return M(()=>{d.value=!0}),S(j,!0),t=>{var n;if(d.value)return(n=e.default)==null?void 0:n.call(e);const u=e.fallback||e.placeholder;if(u)return u();const o=t.fallback||t.placeholder||"",a=t.fallbackTag||t.placeholderTag||"span";return l(a,r,o)}}}),G={name:N,props:{placeholder:String,tag:{type:String,default:"span"}}};function q(_,e,r,d,t,u){const o=z;return c(),A(o,{placeholder:r.placeholder,"placeholder-tag":r.tag},B({default:x(()=>[v(_.$slots,"default")]),_:2},[r.placeholder?void 0:{name:"fallback",fn:x(()=>[v(_.$slots,"placeholder")]),key:"0"}]),1032,["placeholder","placeholder-tag"])}const J=k(G,[["render",q]]),R=()=>V("color-mode").value,W=$({__name:"ColorModeSwitch",setup(_){const e=R(),r=()=>e.value==="light"?e.preference="dark":e.preference="light",d=()=>C(e.value==="dark"),t=typeof document<"u"&&document.startViewTransition&&!window.matchMedia("(prefers-reduced-motion: reduce)").matches;function u(o){if(!t||!o){r();return}const a=o.clientX,n=o.clientY,m=Math.hypot(Math.max(a,innerWidth-a),Math.max(n,innerHeight-n));document.startViewTransition(async()=>{r(),await D()}).ready.then(()=>{const h=[`circle(0px at ${a}px ${n}px)`,`circle(${m}px at ${a}px ${n}px)`];document.documentElement.animate({clipPath:d.value?[...h].reverse():h},{duration:400,easing:"ease-in",pseudoElement:d.value?"::view-transition-old(root)":"::view-transition-new(root)"})})}return(o,a)=>{const n=T,m=J;return c(),l("button",{"aria-label":"Color Mode",class:"inline-block w-5",onClick:u},[i(m,{placeholder:"..."},{default:x(()=>[p(e).value==="dark"?(c(),l(b,{key:0},[i(n,{name:"carbon:moon",class:"w-5 h-5"}),a[0]||(a[0]=s("span",{class:"sr-only"},"Dark Mode",-1))],64)):(c(),l(b,{key:1},[i(n,{name:"carbon:sun",class:"w-5 h-5"}),a[1]||(a[1]=s("span",{class:"sr-only"},"Light Mode",-1))],64))]),_:1})])}}}),X={class:"flex justify-between px-4 py-4 mx-auto max-w-2xl sm:px-8"},K={class:"flex space-x-4 text-gray-700 dark:text-gray-200"},Q={class:"flex space-x-3 text-gray-500 transition socials"},U={key:0},Z=["href"],ee={key:1},te=["href"],ae={key:2},ne=["href"],oe={__name:"NavBar",setup(_){const e=H(),r=[{name:"Home",path:"/"},{name:"Articles",path:"/articles"},{name:"Features",path:"/features",hidden:!0}];return(d,t)=>{var a,n,m,g,h,w;const u=O,o=T;return c(),l("nav",X,[s("ul",K,[(c(),l(b,null,I(r,f=>s("li",{key:f.name},[i(u,{to:f.path,"active-class":"font-bold",class:F(["mr-6 hover:text-blue-600 hover:transition-all hover:duration-300",{"text-transparent dark:!text-transparent dark:hover:!text-gray-300":f.hidden}])},{default:x(()=>[Y(E(f.name),1)]),_:2},1032,["to","class"])])),64))]),s("ul",Q,[(a=p(e).socials)!=null&&a.twitter?(c(),l("li",U,[s("a",{title:"Twitter",href:`https://twitter.com/${(n=p(e).socials)==null?void 0:n.twitter}`,target:"_blank"},[t[0]||(t[0]=s("span",{class:"sr-only","aria-hidden":"true"},"Twitter link",-1)),i(o,{name:"fa-brands:twitter",class:"w-5 h-5"})],8,Z)])):y("",!0),(m=p(e).socials)!=null&&m.github?(c(),l("li",ee,[s("a",{title:"GitHub",href:`https://github.com/${(g=p(e).socials)==null?void 0:g.github}`,target:"_blank"},[t[1]||(t[1]=s("span",{class:"sr-only","aria-hidden":"true"},"Github link",-1)),i(o,{name:"fa-brands:github",class:"w-5 h-5"})],8,te)])):y("",!0),(h=p(e).socials)!=null&&h.youtube?(c(),l("li",ae,[s("a",{title:"YouTube",href:`https://youtube.com/${(w=p(e).socials)==null?void 0:w.youtube}`,target:"_blank"},[t[2]||(t[2]=s("span",{class:"sr-only","aria-hidden":"true"},"Youtube link",-1)),i(o,{name:"fa-brands:youtube",class:"w-5 h-5"})],8,ne)])):y("",!0),s("li",null,[i(W,{class:"dark:text-gray-100 hover:text-gray-700 dark:hover:text-gray-300"})])])])}}},se=k(oe,[["__scopeId","data-v-e41469c4"]]),re={class:"container"},le={__name:"default",setup(_){return P({htmlAttrs:{lang:"en"}}),(e,r)=>{const d=L;return c(),l("div",re,[i(se),i(d)])}}},pe=k(le,[["__scopeId","data-v-c06020bd"]]);export{pe as default};