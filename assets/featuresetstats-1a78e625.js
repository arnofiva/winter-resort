import{t as y,e as F}from"./executionError-fb3f283a.js";import{B as h,G as f,J as c,v as A,V as d,al as p,y as u}from"./arcadeUtils-150aa9fc.js";import{f as l}from"./WhereClause-ec2695a9.js";import"./geometry-f89ca072.js";import"./ensureType-249b88cd.js";import"./string-7a2f1d87.js";import"./typedArrayUtil-70e1d79e.js";import"./Error-62cc7aff.js";import"./Extent-2ad2c9a9.js";import"./JSONSupport-32b5ad86.js";import"./nextTick-3ee5a785.js";import"./promiseUtils-59dab60c.js";import"./Ellipsoid-89682c5e.js";import"./Polyline-cf51ad23.js";import"./typeUtils-05f9d41d.js";import"./preload-helper-41c905a7.js";import"./ArcadeDate-3d8ef842.js";import"./datetime-b6333958.js";import"./number-9d73a551.js";import"./locale-30120714.js";import"./Field-efd8d6fa.js";import"./enumeration-504d95a2.js";import"./fieldType-ec749512.js";import"./jsonUtils-6d0a72e3.js";import"./featureConversionUtils-66a9b1ed.js";import"./aaBoundingBox-dfb04110.js";import"./aaBoundingRect-42f9721f.js";import"./mathUtils-5b623c84.js";import"./vec3-015ca254.js";import"./common-d0b63c2d.js";import"./vec4-c7a19f0d.js";import"./OptimizedFeature-cb86a86f.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./request-f01affa1.js";import"./hash-0ddfbf4b.js";import"./Portal-52d960e8.js";import"./Loadable-7c3ecd79.js";import"./Promise-3959c3ee.js";import"./PortalGroup-b49a7409.js";import"./PortalUser-85cf1ca9.js";import"./sizeVariableUtils-d4870b0d.js";async function m(r,n,i,t,e,o){if(t.length===1){if(c(t[0]))return p(r,t[0],u(t[1],-1));if(d(t[0]))return p(r,t[0].toArray(),u(t[1],-1))}else if(t.length===2){if(c(t[0]))return p(r,t[0],u(t[1],-1));if(d(t[0]))return p(r,t[0].toArray(),u(t[1],-1));if(f(t[0])){const a=await t[0].load(),s=await g(l.create(t[1],a.getFieldsIndex()),o,e);return t[0].calculateStatistic(r,s,u(t[2],1e3),n.abortSignal)}}else if(t.length===3&&f(t[0])){const a=await t[0].load(),s=await g(l.create(t[1],a.getFieldsIndex()),o,e);return t[0].calculateStatistic(r,s,u(t[2],1e3),n.abortSignal)}return p(r,t,-1)}async function g(r,n,i){const t=r.getVariables();if(t.length>0){const e=[];for(let a=0;a<t.length;a++){const s={name:t[a]};e.push(await n.evaluateIdentifier(i,s))}const o={};for(let a=0;a<t.length;a++)o[t[a]]=e[a];return r.parameters=o,r}return r}function mt(r){r.mode==="async"&&(r.functions.stdev=function(n,i){return r.standardFunctionAsync(n,i,(t,e,o)=>m("stdev",t,e,o,n,r))},r.functions.variance=function(n,i){return r.standardFunctionAsync(n,i,(t,e,o)=>m("variance",t,e,o,n,r))},r.functions.average=function(n,i){return r.standardFunctionAsync(n,i,(t,e,o)=>m("mean",t,e,o,n,r))},r.functions.mean=function(n,i){return r.standardFunctionAsync(n,i,(t,e,o)=>m("mean",t,e,o,n,r))},r.functions.sum=function(n,i){return r.standardFunctionAsync(n,i,(t,e,o)=>m("sum",t,e,o,n,r))},r.functions.min=function(n,i){return r.standardFunctionAsync(n,i,(t,e,o)=>m("min",t,e,o,n,r))},r.functions.max=function(n,i){return r.standardFunctionAsync(n,i,(t,e,o)=>m("max",t,e,o,n,r))},r.functions.count=function(n,i){return r.standardFunctionAsync(n,i,(t,e,o)=>{if(h(o,1,1,n,i),f(o[0]))return o[0].count(t.abortSignal);if(c(o[0])||A(o[0]))return o[0].length;if(d(o[0]))return o[0].length();throw new y(n,F.InvalidParameter,i)})})}export{mt as registerFunctions};
