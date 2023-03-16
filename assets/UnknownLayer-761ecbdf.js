import{d as s,e as t,y as p,a as n}from"./JSONSupport-32b5ad86.js";import{a}from"./Error-62cc7aff.js";import{O as y}from"./MultiOriginJSONSupport-247be6b9.js";import"./ensureType-249b88cd.js";import"./typedArrayUtil-70e1d79e.js";import{b as l}from"./Layer-ab90f8be.js";import{_ as u}from"./PortalLayer-f8afa381.js";import"./string-7a2f1d87.js";import"./nextTick-3ee5a785.js";import"./promiseUtils-59dab60c.js";import"./preload-helper-41c905a7.js";import"./geometry-f89ca072.js";import"./Extent-2ad2c9a9.js";import"./Ellipsoid-89682c5e.js";import"./Polyline-cf51ad23.js";import"./typeUtils-05f9d41d.js";import"./request-f01affa1.js";import"./Evented-36093e88.js";import"./Identifiable-99d92428.js";import"./Loadable-7c3ecd79.js";import"./Promise-3959c3ee.js";import"./asyncUtils-8de18dd2.js";import"./layerUtils-ff76096c.js";import"./Portal-52d960e8.js";import"./locale-30120714.js";import"./PortalGroup-b49a7409.js";import"./PortalUser-85cf1ca9.js";import"./PortalItem-476b4f2f.js";import"./assets-640b4d04.js";import"./portalItemUtils-f08de884.js";import"./projection-d42b91be.js";import"./mathUtils-5b623c84.js";import"./vec3-015ca254.js";import"./common-d0b63c2d.js";import"./vec4-c7a19f0d.js";import"./SimpleObservable-a6d3d2d8.js";import"./mat4-4714ff8c.js";import"./aaBoundingRect-42f9721f.js";import"./zscale-d428b1da.js";let r=class extends u(y(l)){constructor(o){super(o),this.resourceInfo=null,this.type="unknown"}initialize(){this.addResolvingPromise(new Promise((o,i)=>{s(()=>{const e=this.resourceInfo&&(this.resourceInfo.layerType||this.resourceInfo.type);let m="Unknown layer type";e&&(m+=" "+e),i(new a("layer:unknown-layer-type",m,{layerType:e}))})}))}read(o,i){super.read({resourceInfo:o},i)}write(){return null}};t([p({readOnly:!0})],r.prototype,"resourceInfo",void 0),t([p({type:["show","hide"]})],r.prototype,"listMode",void 0),t([p({json:{read:!1},readOnly:!0,value:"unknown"})],r.prototype,"type",void 0),r=t([n("esri.layers.UnknownLayer")],r);const Y=r;export{Y as default};
