const f="modulepreload",h=function(s){return"/"+s},u={},m=function(i,r,a){if(!r||r.length===0)return i();const c=document.getElementsByTagName("link");return Promise.all(r.map(e=>{if(e=h(e),e in u)return;u[e]=!0;const t=e.endsWith(".css"),d=t?'[rel="stylesheet"]':"";if(!!a)for(let o=c.length-1;o>=0;o--){const l=c[o];if(l.href===e&&(!t||l.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${d}`))return;const n=document.createElement("link");if(n.rel=t?"stylesheet":f,t||(n.as="script",n.crossOrigin=""),n.href=e,document.head.appendChild(n),t)return new Promise((o,l)=>{n.addEventListener("load",o),n.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>i()).catch(e=>{const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e})},v=document.body,E={childList:!0,subtree:!0},y=function(s,i){for(const r of s)r.type==="childList"&&r.addedNodes.forEach(a=>{a.nodeName==="CANVAS"&&(m(()=>import("../model_manager/main-z6lahSXo.js"),__vite__mapDeps([])).then(({setupReact:c})=>{c()}),i.disconnect())})},b=new MutationObserver(y);b.observe(v,E);
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}