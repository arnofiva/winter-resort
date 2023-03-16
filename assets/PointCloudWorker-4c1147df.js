import{r as p,R as A}from"./typedArrayUtil-70e1d79e.js";import{S}from"./quat-99c4e099.js";import{e as d}from"./quatf32-51a323b8.js";import{E as y}from"./vec3-015ca254.js";import{r as D,n as c}from"./vec3f32-01c06d8d.js";import{x as M}from"./projection-d42b91be.js";import{f as h}from"./Extent-2ad2c9a9.js";import{c as g,a as l,f as w,m as x}from"./PointCloudWorkerUtil-212fccb8.js";import"./mat3f64-50f3b9f6.js";import"./quatf64-f8f1c132.js";import"./common-d0b63c2d.js";import"./vec4-c7a19f0d.js";import"./preload-helper-41c905a7.js";import"./Error-62cc7aff.js";import"./string-7a2f1d87.js";import"./mathUtils-5b623c84.js";import"./promiseUtils-59dab60c.js";import"./JSONSupport-32b5ad86.js";import"./ensureType-249b88cd.js";import"./nextTick-3ee5a785.js";import"./SimpleObservable-a6d3d2d8.js";import"./mat4-4714ff8c.js";import"./Polyline-cf51ad23.js";import"./assets-640b4d04.js";import"./request-f01affa1.js";import"./aaBoundingRect-42f9721f.js";import"./Ellipsoid-89682c5e.js";import"./zscale-d428b1da.js";import"./PointCloudUniqueValueRenderer-6cce9ee5.js";import"./enumeration-504d95a2.js";import"./LegendOptions-d1ee6f9f.js";import"./Color-5a385b27.js";import"./colorUtils-639f4d25.js";import"./I3SBinaryReader-c63d93b8.js";import"./VertexAttribute-15d1866a.js";class z{transform(t){const o=this._transform(t),r=[o.points.buffer,o.rgb.buffer];p(o.pointIdFilterMap)&&r.push(o.pointIdFilterMap.buffer);for(const e of o.attributes)"buffer"in e.values&&A(e.values.buffer)&&e.values.buffer!==o.rgb.buffer&&r.push(e.values.buffer);return Promise.resolve({result:o,transferList:r})}_transform(t){const o=g(t.schema,t.geometryBuffer);let r=o.length/3,e=null;const n=[],s=l(t.primaryAttributeData,o,r);p(t.primaryAttributeData)&&s&&n.push({attributeInfo:t.primaryAttributeData.attributeInfo,values:s});const a=l(t.modulationAttributeData,o,r);p(t.modulationAttributeData)&&a&&n.push({attributeInfo:t.modulationAttributeData.attributeInfo,values:a});let f=w(t.rendererInfo,s,a,r);if(t.filterInfo&&t.filterInfo.length>0&&p(t.filterAttributesData)){const i=t.filterAttributesData.filter(p).map(u=>{const v=l(u,o,r),b={attributeInfo:u.attributeInfo,values:v};return n.push(b),b});e=new Uint32Array(r),r=x(o,f,e,t.filterInfo,i)}for(const i of t.userAttributesData){const u=l(i,o,r);n.push({attributeInfo:i.attributeInfo,values:u})}3*r<f.length&&(f=new Uint8Array(f.buffer.slice(0,3*r))),this._applyElevationOffsetInPlace(o,r,t.elevationOffset);const m=this._transformCoordinates(o,r,t.obb,h.fromJSON(t.inSR),h.fromJSON(t.outSR));return{obb:t.obb,points:m,rgb:f,attributes:n,pointIdFilterMap:e}}_transformCoordinates(t,o,r,e,n){if(!M(t,e,0,t,n,0,o))throw new Error("Can't reproject");const s=D(r.center[0],r.center[1],r.center[2]),a=c(),f=c();S(I,r.quaternion);const m=new Float32Array(3*o);for(let i=0;i<o;i++)a[0]=t[3*i]-s[0],a[1]=t[3*i+1]-s[1],a[2]=t[3*i+2]-s[2],y(f,a,I),r.halfSize[0]=Math.max(r.halfSize[0],Math.abs(f[0])),r.halfSize[1]=Math.max(r.halfSize[1],Math.abs(f[1])),r.halfSize[2]=Math.max(r.halfSize[2],Math.abs(f[2])),m[3*i]=a[0],m[3*i+1]=a[1],m[3*i+2]=a[2];return m}_applyElevationOffsetInPlace(t,o,r){if(r!==0)for(let e=0;e<o;e++)t[3*e+2]+=r}}const I=d();function pt(){return new z}export{pt as default};
