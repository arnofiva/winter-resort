import{n as b,a as q}from"./common-d0b63c2d.js";function p(n,r){return n[0]=r[0],n[1]=r[1],n}function g(n,r,t){return n[0]=r,n[1]=t,n}function x(n,r,t){return n[0]=r[0]+t[0],n[1]=r[1]+t[1],n}function f(n,r,t){return n[0]=r[0]-t[0],n[1]=r[1]-t[1],n}function a(n,r,t){return n[0]=r[0]*t[0],n[1]=r[1]*t[1],n}function M(n,r,t){return n[0]=r[0]/t[0],n[1]=r[1]/t[1],n}function v(n,r){return n[0]=Math.ceil(r[0]),n[1]=Math.ceil(r[1]),n}function y(n,r){return n[0]=Math.floor(r[0]),n[1]=Math.floor(r[1]),n}function _(n,r,t){return n[0]=Math.min(r[0],t[0]),n[1]=Math.min(r[1],t[1]),n}function j(n,r,t){return n[0]=Math.max(r[0],t[0]),n[1]=Math.max(r[1],t[1]),n}function A(n,r){return n[0]=Math.round(r[0]),n[1]=Math.round(r[1]),n}function P(n,r,t){return n[0]=r[0]*t,n[1]=r[1]*t,n}function S(n,r,t,o){return n[0]=r[0]+t[0]*o,n[1]=r[1]+t[1]*o,n}function h(n,r){const t=r[0]-n[0],o=r[1]-n[1];return Math.sqrt(t*t+o*o)}function l(n,r){const t=r[0]-n[0],o=r[1]-n[1];return t*t+o*o}function d(n){const r=n[0],t=n[1];return Math.sqrt(r*r+t*t)}function m(n){const r=n[0],t=n[1];return r*r+t*t}function z(n,r){return n[0]=-r[0],n[1]=-r[1],n}function D(n,r){return n[0]=1/r[0],n[1]=1/r[1],n}function I(n,r){const t=r[0],o=r[1];let u=t*t+o*o;return u>0&&(u=1/Math.sqrt(u),n[0]=r[0]*u,n[1]=r[1]*u),n}function L(n,r){return n[0]*r[0]+n[1]*r[1]}function O(n,r,t){const o=r[0]*t[1]-r[1]*t[0];return n[0]=n[1]=0,n[2]=o,n}function E(n,r,t,o){const u=r[0],e=r[1];return n[0]=u+o*(t[0]-u),n[1]=e+o*(t[1]-e),n}function k(n,r){r=r||1;const t=2*b()*Math.PI;return n[0]=Math.cos(t)*r,n[1]=Math.sin(t)*r,n}function w(n,r,t){const o=r[0],u=r[1];return n[0]=t[0]*o+t[2]*u,n[1]=t[1]*o+t[3]*u,n}function B(n,r,t){const o=r[0],u=r[1];return n[0]=t[0]*o+t[2]*u+t[4],n[1]=t[1]*o+t[3]*u+t[5],n}function C(n,r,t){const o=r[0],u=r[1];return n[0]=t[0]*o+t[3]*u+t[6],n[1]=t[1]*o+t[4]*u+t[7],n}function F(n,r,t){const o=r[0],u=r[1];return n[0]=t[0]*o+t[4]*u+t[12],n[1]=t[1]*o+t[5]*u+t[13],n}function G(n,r,t,o){const u=r[0]-t[0],e=r[1]-t[1],c=Math.sin(o),s=Math.cos(o);return n[0]=u*s-e*c+t[0],n[1]=u*c+e*s+t[1],n}function H(n,r){const t=n[0],o=n[1],u=r[0],e=r[1];let c=t*t+o*o;c>0&&(c=1/Math.sqrt(c));let s=u*u+e*e;s>0&&(s=1/Math.sqrt(s));const i=(t*u+o*e)*c*s;return i>1?0:i<-1?Math.PI:Math.acos(i)}function J(n){return"vec2("+n[0]+", "+n[1]+")"}function K(n,r){return n[0]===r[0]&&n[1]===r[1]}function T(n,r){const t=n[0],o=n[1],u=r[0],e=r[1],c=q();return Math.abs(t-u)<=c*Math.max(1,Math.abs(t),Math.abs(u))&&Math.abs(o-e)<=c*Math.max(1,Math.abs(o),Math.abs(e))}function N(n,r,t,o,u){let e=r[0]-t[0],c=r[1]-t[1];const s=(o[0]*e+o[1]*c)*(u-1);return e=o[0]*s,c=o[1]*s,n[0]=r[0]+e,n[1]=r[1]+c,n}const Q=d,R=f,U=a,V=M,W=h,X=l,Y=m;Object.freeze(Object.defineProperty({__proto__:null,add:x,angle:H,ceil:v,copy:p,cross:O,dist:W,distance:h,div:V,divide:M,dot:L,equals:T,exactEquals:K,floor:y,inverse:D,len:Q,length:d,lerp:E,max:j,min:_,mul:U,multiply:a,negate:z,normalize:I,projectAndScale:N,random:k,rotate:G,round:A,scale:P,scaleAndAdd:S,set:g,sqrDist:X,sqrLen:Y,squaredDistance:l,squaredLength:m,str:J,sub:R,subtract:f,transformMat2:w,transformMat2d:B,transformMat3:C,transformMat4:F},Symbol.toStringTag,{value:"Module"}));export{E as A,R as C,K as E,W as H,G as L,j as M,w as _,p as a,l as b,S as d,_ as f,z as g,L as j,T as k,P as l,h as m,f as o,m as p,d as q,g as r,x as s,I as v,N as w,O as y,B as z};
