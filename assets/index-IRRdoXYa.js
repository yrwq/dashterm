var K=Object.defineProperty;var R=(e,t,n)=>t in e?K(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var E=(e,t,n)=>(R(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const u of r)if(u.type==="childList")for(const c of u.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function n(r){const u={};return r.integrity&&(u.integrity=r.integrity),r.referrerPolicy&&(u.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?u.credentials="include":r.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function o(r){if(r.ep)return;r.ep=!0;const u=n(r);fetch(r.href,u)}})();function w(){}function M(e){return e()}function P(){return Object.create(null)}function v(e){e.forEach(M)}function F(e){return typeof e=="function"}function T(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function U(e){return Object.keys(e).length===0}function a(e,t){e.appendChild(t)}function V(e,t,n){e.insertBefore(t,n||null)}function q(e){e.parentNode&&e.parentNode.removeChild(e)}function y(e){return document.createElement(e)}function O(e){return document.createTextNode(e)}function S(){return O(" ")}function j(e,t,n,o){return e.addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)}function b(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function D(e){return Array.from(e.childNodes)}function G(e,t){t=""+t,e.data!==t&&(e.data=t)}function I(e,t){e.value=t??""}let k;function $(e){k=e}function H(){if(!k)throw new Error("Function called outside component initialization");return k}function J(e){H().$$.on_mount.push(e)}const m=[],L=[];let g=[];const B=[],Q=Promise.resolve();let N=!1;function W(){N||(N=!0,Q.then(z))}function A(e){g.push(e)}const x=new Set;let _=0;function z(){if(_!==0)return;const e=k;do{try{for(;_<m.length;){const t=m[_];_++,$(t),X(t.$$)}}catch(t){throw m.length=0,_=0,t}for($(null),m.length=0,_=0;L.length;)L.pop()();for(let t=0;t<g.length;t+=1){const n=g[t];x.has(n)||(x.add(n),n())}g.length=0}while(m.length);for(;B.length;)B.pop()();N=!1,x.clear(),$(e)}function X(e){if(e.fragment!==null){e.update(),v(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(A)}}function Y(e){const t=[],n=[];g.forEach(o=>e.indexOf(o)===-1?t.push(o):n.push(o)),n.forEach(o=>o()),g=t}const Z=new Set;function ee(e,t){e&&e.i&&(Z.delete(e),e.i(t))}function te(e,t,n){const{fragment:o,after_update:r}=e.$$;o&&o.m(t,n),A(()=>{const u=e.$$.on_mount.map(M).filter(F);e.$$.on_destroy?e.$$.on_destroy.push(...u):v(u),e.$$.on_mount=[]}),r.forEach(A)}function ne(e,t){const n=e.$$;n.fragment!==null&&(Y(n.after_update),v(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function re(e,t){e.$$.dirty[0]===-1&&(m.push(e),W(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function oe(e,t,n,o,r,u,c=null,h=[-1]){const l=k;$(e);const i=e.$$={fragment:null,ctx:[],props:u,update:w,not_equal:r,bound:P(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(l?l.$$.context:[])),callbacks:P(),dirty:h,skip_bound:!1,root:t.target||l.$$.root};c&&c(i.root);let d=!1;if(i.ctx=n?n(e,t.props||{},(s,f,...p)=>{const C=p.length?p[0]:f;return i.ctx&&r(i.ctx[s],i.ctx[s]=C)&&(!i.skip_bound&&i.bound[s]&&i.bound[s](C),d&&re(e,s)),f}):[],i.update(),d=!0,v(i.before_update),i.fragment=o?o(i.ctx):!1,t.target){if(t.hydrate){const s=D(t.target);i.fragment&&i.fragment.l(s),s.forEach(q)}else i.fragment&&i.fragment.c();t.intro&&ee(e.$$.fragment),te(e,t.target,t.anchor),z()}$(l)}class ie{constructor(){E(this,"$$");E(this,"$$set")}$destroy(){ne(this,1),this.$destroy=w}$on(t,n){if(!F(n))return w;const o=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return o.push(n),()=>{const r=o.indexOf(n);r!==-1&&o.splice(r,1)}}$set(t){this.$$set&&!U(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const ue="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(ue);function ce(e){let t,n,o,r,u,c,h,l,i,d,s;return{c(){t=y("main"),n=y("div"),o=y("div"),r=O(e[2]),u=S(),c=y("div"),h=O(se),l=S(),i=y("input"),b(o,"id","content"),b(i,"id","name"),b(i,"type","text"),b(c,"id","prompt"),b(n,"id","terminal")},m(f,p){V(f,t,p),a(t,n),a(n,o),a(o,r),a(n,u),a(n,c),a(c,h),a(c,l),a(c,i),I(i,e[1]),e[5](i),d||(s=[j(window,"keydown",e[3]),j(i,"input",e[4])],d=!0)},p(f,[p]){p&4&&G(r,f[2]),p&2&&i.value!==f[1]&&I(i,f[1])},i:w,o:w,d(f){f&&q(t),e[5](null),d=!1,v(s)}}}let se=":: ";function fe(e,t,n){let o,r,u,c="";function h(){switch(u=r,r){case"help":{n(1,r=""),n(2,c="help, clear");break}case"clear":{n(1,r=""),n(2,c="");break}default:{n(1,r="");break}}}function l(s){s.keyCode==13?h():s.keyCode==38&&n(1,r=u)}J(()=>{o.focus()});function i(){r=this.value,n(1,r)}function d(s){L[s?"unshift":"push"](()=>{o=s,n(0,o)})}return[o,r,c,l,i,d]}class le extends ie{constructor(t){super(),oe(this,t,fe,ce,T,{})}}new le({target:document.getElementById("app")});
