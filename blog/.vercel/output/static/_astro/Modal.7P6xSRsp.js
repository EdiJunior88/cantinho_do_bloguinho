import{d as c,o as i,c as l,a as e,w as d,v as p,r as m}from"./runtime-dom.esm-bundler.D2dB0PTj.js";const u=(t,a)=>{const o=t.__vccOpts||t;for(const[s,n]of a)o[s]=n;return o},_=c({__name:"Modal",setup(t,{expose:a}){a();const o=m(!1),r={isModalOpened:o,openModal:()=>{o.value=!0},closeModal:()=>{o.value=!1}};return Object.defineProperty(r,"__isScriptSetup",{enumerable:!1,value:!0}),r}}),f={class:"flex justify-center"},x={class:"absolute inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50 backdrop-blur-sm"},v={class:"mx-4 max-w-2xl rounded-lg bg-white p-6 shadow-xl"},h={class:"flex items-center justify-end"},g=e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1),b=[g],w=e("div",{class:"mt-4"},[e("p",{class:"mb-4 px-4 text-justify indent-10 text-base font-semibold leading-loose"}," Cantinho do blog foi criado utilizando a tecnologia VueJS 3 e TypeScript, com o intuito especialmente de catalogar e guardar as minhas dúvidas com relação à desenvolvimento de software, outro ponto importante é que também serve para demonstrar e compartilhar de uma forma intuitiva me estimulando a pensar em formas de trazer o conteúdo entendível tanto para pessoas leigas como para profissionais sem deixar de lados os termos técnicos. ")],-1);function M(t,a,o,s,n,r){return i(),l("div",null,[e("div",f,[e("div",{onClick:s.openModal,class:"cursor-pointer"},"Sobre"),d(e("div",x,[e("div",v,[e("div",h,[(i(),l("svg",{onClick:s.closeModal,xmlns:"http://www.w3.org/2000/svg",class:"h-8 w-8 cursor-pointer",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},b))]),w])],512),[[p,s.isModalOpened]])])])}const y=u(_,[["render",M]]);export{y as default};
