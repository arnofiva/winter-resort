import{t as o}from"./typedArrayUtil-70e1d79e.js";import{e as r}from"./centroid-31e9f7c2.js";import{s as i,t as m}from"./OptimizedFeature-cb86a86f.js";const c={getObjectId:t=>t.objectId,getAttributes:t=>t.attributes,getAttribute:(t,e)=>t.attributes[e],cloneWithGeometry:(t,e)=>new i(e,t.attributes,null,t.objectId),getGeometry:t=>t.geometry,getCentroid:(t,e)=>(o(t.centroid)&&(t.centroid=r(new m,t.geometry,e.hasZ,e.hasM)),t.centroid)};export{c as i};
