import{e as w,r as d,p as j,a as p,v as h}from"./promiseUtils-59dab60c.js";import{P as L,w as U,n as q}from"./JSONSupport-32b5ad86.js";import{p as a}from"./typedArrayUtil-70e1d79e.js";import"./string-7a2f1d87.js";import"./Error-62cc7aff.js";function v(e,o,r={}){return m(e,o,r,$)}function B(e,o,r={}){return m(e,o,r,y)}function m(e,o,r={},n){let i=null;const u=r.once?(t,l)=>{n(t)&&(a(i),o(t,l))}:(t,l)=>{n(t)&&o(t,l)};if(i=L(e,u,r.sync,r.equals),r.initial){const t=e();u(t,t)}return i}function C(e,o,r,n={}){let i=null,u=null,t=null;function l(){var c;i&&u&&(u.remove(),(c=n.onListenerRemove)==null||c.call(n,i),i=null,u=null)}function f(c){n.once&&n.once&&a(t),r(c)}const P=v(e,(c,A)=>{var s;l(),w(c)&&(i=c,u=d(c,o,f),(s=n.onListenerAdd)==null||s.call(n,c))},{sync:n.sync,initial:!0});return t=q(()=>{P.remove(),l()}),t}function D(e,o){return x(e,y,o)}function x(e,o,r){if(j(r))return Promise.reject(p());const n=e();if(o!=null&&o(n))return Promise.resolve(n);let i=null;function u(){i=a(i)}return new Promise((t,l)=>{i=U([h(r,()=>{u(),l(p())}),m(e,f=>{u(),t(f)},{sync:!1,once:!0},o??$)])})}function $(e){return!0}function y(e){return!!e}function E(e,o,r={}){let n=!1;const i=v(e,(u,t)=>{n||o(u,t)},r);return{remove(){i.remove()},pause(){n=!0},resume(){n=!1}}}const F={sync:!0},G={initial:!0},H={sync:!0,initial:!0};export{E as P,F as U,C as a,B as f,G as h,D as j,v as l,H as w};
