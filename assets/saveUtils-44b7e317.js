import{b as m}from"./asyncUtils-8de18dd2.js";import{a as I}from"./Error-62cc7aff.js";import{r as S}from"./typedArrayUtil-70e1d79e.js";import{E as g,f as y}from"./promiseUtils-59dab60c.js";import{n as v}from"./uuid-73213768.js";import{getSiblingOfSameTypeI as E}from"./resourceUtils-a295dbcf.js";async function K(r,e,t){if(!e||!e.resources)return;const s=e.portalItem===r.portalItem?new Set(r.paths):new Set;r.paths.length=0,r.portalItem=e.portalItem;const c=new Set(e.resources.toKeep.map(o=>o.resource.path)),n=new Set,a=[];c.forEach(o=>{s.delete(o),r.paths.push(o)});for(const o of e.resources.toUpdate)if(s.delete(o.resource.path),c.has(o.resource.path)||n.has(o.resource.path)){const{resource:p,content:l,finish:d,error:w}=o,u=E(p,v());r.paths.push(u.path),a.push(i({resource:u,content:l,compress:o.compress,finish:d,error:w},t))}else r.paths.push(o.resource.path),a.push($(o,t)),n.add(o.resource.path);for(const o of e.resources.toAdd)a.push(i(o,t)),r.paths.push(o.resource.path);if(s.forEach(o=>{if(e.portalItem){const p=e.portalItem.resourceFromPath(o);a.push(p.portalItem.removeResource(p).catch(()=>{}))}}),a.length===0)return;const f=await g(a);y(t);const h=f.filter(o=>"error"in o).map(o=>o.error);if(h.length>0)throw new I("save:resources","Failed to save one or more resources",{errors:h})}async function i(r,e){var c,n;const t={...S(e)?e:{},compress:r.compress},s=await m(r.resource.portalItem.addResource(r.resource,r.content,t));if(s.ok!==!0)throw(c=r.error)==null||c.call(r,s.error),s.error;(n=r.finish)==null||n.call(r,r.resource)}async function $(r,e){var s,c;const t=await m(r.resource.update(r.content,e));if(t.ok!==!0)throw(s=r.error)==null||s.call(r,t.error),t.error;(c=r.finish)==null||c.call(r,r.resource)}export{K as a};
