import{G as s,a5 as i,a6 as u,a7 as c,a8 as l,a9 as d,aa as f,ab as m,ac as h,ad as A,ae as g,$ as P,d as v,u as w,j as y,A as C,af as R,ag as _,ah as b,ai as E}from"./chunks/framework.3b291362.js";import{t as r}from"./chunks/theme.8932c240.js";const D={...r,enhanceApp(e){r.enhanceApp(e)}};function p(e){if(e.extends){const a=p(e.extends);return{...a,...e,async enhanceApp(t){a.enhanceApp&&await a.enhanceApp(t),e.enhanceApp&&await e.enhanceApp(t)}}}return e}const o=p(D),T=v({name:"VitePressApp",setup(){const{site:e}=w();return y(()=>{C(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),R(),_(),b(),o.setup&&o.setup(),()=>E(o.Layout)}});async function j(){const e=O(),a=x();a.provide(u,e);const t=c(e.route);return a.provide(l,t),a.component("Content",d),a.component("ClientOnly",f),Object.defineProperties(a.config.globalProperties,{$frontmatter:{get(){return t.frontmatter.value}},$params:{get(){return t.page.value.params}}}),o.enhanceApp&&await o.enhanceApp({app:a,router:e,siteData:m}),{app:a,router:e,data:t}}function x(){return h(T)}function O(){let e=s,a;return A(t=>{let n=g(t);return n?(e&&(a=n),(e||a===n)&&(n=n.replace(/\.js$/,".lean.js")),s&&(e=!1),P(()=>import(n),[])):null},o.NotFound)}s&&j().then(({app:e,router:a,data:t})=>{a.go().then(()=>{i(a.route,t.site),e.mount("#app")})});export{j as createApp};
