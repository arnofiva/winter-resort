import{f}from"./normalizeUtils-11faac16.js";import{S as a,p as e}from"./query-159ca0c6.js";import{x as m}from"./Query-6df7497c.js";async function u(t,n,o){const r=f(t);return a(r,m.from(n),{...o}).then(c=>c.data.count)}async function d(t,n,o){const r=f(t);return e(r,m.from(n),{...o}).then(c=>c.data.objectIds)}export{u as n,d as s};
