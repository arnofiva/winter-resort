import{e as d,a as f}from"./JSONSupport-32b5ad86.js";import{a as c}from"./Error-62cc7aff.js";import{r as h}from"./typedArrayUtil-70e1d79e.js";import"./ensureType-249b88cd.js";import"./string-7a2f1d87.js";import{v as m,c as w}from"./fieldUtils-e397be4b.js";import{s as l,d as F}from"./popupUtils-ec9821da.js";const G=u=>{let r=class extends u{_validateFetchPopupFeatures(p){const{layer:e}=this,{popupEnabled:t}=e;if(!t)throw new c("scenelayerview3d:fetchPopupFeatures","Popups are disabled",{layer:e});if(!l(e,p))throw new c("scenelayerview3d:fetchPopupFeatures","Layer does not define a popup template",{layer:e})}async prepareFetchPopupFeatures(p){}async fetchPopupFeatures(p,e){this._validateFetchPopupFeatures(e);const t=h(e)?e.clientGraphics:null;if(!t||t.length===0)return[];const y=this.layer.type==="scene"&&h(this.layer.associatedLayer)?this.layer.associatedLayer:this.layer;let i=[];"fieldsIndex"in this.layer&&(i=m(this.layer.fieldsIndex,await F(y,l(this.layer,e)))),await this.prepareFetchPopupFeatures(i);const n=new Set,o=[],a=[];for(const s of t)w(i,s,n)?a.push(s):o.push(s);return a.length===0?o:this.whenGraphicAttributes(a,[...n]).catch(()=>a).then(s=>o.concat(s))}};return r=d([f("esri.views.3d.layers.support.PopupSceneLayerView")],r),r};export{G as c};
