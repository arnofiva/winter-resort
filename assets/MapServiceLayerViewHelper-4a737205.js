import{_ as D}from"./preload-helper-41c905a7.js";import{e as l,y as u,a as P,l as J,v as q}from"./JSONSupport-32b5ad86.js";import{g as G}from"./Graphic-46941d56.js";import{j as Z}from"./Collection-9e42cc30.js";import{a as A}from"./Error-62cc7aff.js";import{h as C}from"./string-7a2f1d87.js";import{v as W,r as K}from"./ensureType-249b88cd.js";import{r as j,l as X,t as Y}from"./typedArrayUtil-70e1d79e.js";import{x as ee,E as te}from"./promiseUtils-59dab60c.js";import{a as re}from"./reactiveUtils-e6d6c898.js";import{e as M,f as ie,o as se,r as oe,$ as ne}from"./Extent-2ad2c9a9.js";import{i as ae,r as le}from"./scaleUtils-b27f2fc2.js";import{n as I}from"./ExportImageParameters-1fbdfa05.js";import{s as T}from"./drapedUtils-e5dd7bab.js";import{U as pe}from"./request-f01affa1.js";import{f as ue,v as ye,s as ce,i as me}from"./normalizeUtils-11faac16.js";import{t as he}from"./serviceCapabilitiesUtils-d47be03f.js";import{c as fe,v as de}from"./jsonUtils-6d0a72e3.js";import{i as ge}from"./sublayerUtils-1d562031.js";import{n as we}from"./geometry-f89ca072.js";import{T as be}from"./TimeExtent-4bfae662.js";import{i as ve}from"./typeUtils-05f9d41d.js";import{i as xe}from"./arcadeOnDemand-5c3ab3f7.js";import{y as L}from"./symbols-5a102dff.js";import{d as $e,s as Se}from"./popupUtils-ec9821da.js";const U=t=>t.spatialReference.wkid||JSON.stringify(t.spatialReference);function Fe(t,e){const{dpi:i,gdbVersion:s,geometry:r,geometryPrecision:o,height:n,layerOption:a,mapExtent:c,maxAllowableOffset:p,returnFieldName:y,returnGeometry:h,returnUnformattedValues:m,returnZ:S,spatialReference:x,timeExtent:b,tolerance:d,width:F}=t.toJSON(),{dynamicLayers:g,layerDefs:w,layerIds:$}=Oe(t),V=e&&j(e.geometry)?e.geometry:null,v={geometryPrecision:o,maxAllowableOffset:p,returnFieldName:y,returnGeometry:h,returnUnformattedValues:m,returnZ:S,tolerance:d},E=V&&V.toJSON()||r;if(v.imageDisplay=`${F},${n},${i}`,s&&(v.gdbVersion=s),E&&(delete E.spatialReference,v.geometry=JSON.stringify(E),v.geometryType=fe(E)),x?v.sr=x.wkid||JSON.stringify(x):E&&E.spatialReference?v.sr=U(E):c&&c.spatialReference&&(v.sr=U(c)),v.time=b?[b.start,b.end].join(","):null,c){const{xmin:Q,ymin:k,xmax:z,ymax:B}=c;v.mapExtent=`${Q},${k},${z},${B}`}return w&&(v.layerDefs=w),g&&!w&&(v.dynamicLayers=g),v.layers=a==="popup"?"visible":a,$&&!g&&(v.layers+=`:${$.join(",")}`),v}function Oe(t){var x,b;const{mapExtent:e,floors:i,width:s,sublayers:r,layerIds:o,layerOption:n,gdbVersion:a}=t,c=(b=(x=r==null?void 0:r.find(d=>d.layer!=null))==null?void 0:x.layer)==null?void 0:b.serviceSublayers,p=n==="popup",y={},h=ae({extent:e,width:s,spatialReference:e==null?void 0:e.spatialReference}),m=[],S=d=>{const F=h===0,g=d.minScale===0||h<=d.minScale,w=d.maxScale===0||h>=d.maxScale;if(d.visible&&(F||g&&w))if(d.sublayers)d.sublayers.forEach(S);else{if((o==null?void 0:o.includes(d.id))===!1||p&&(!d.popupTemplate||!d.popupEnabled))return;m.unshift(d)}};if(r==null||r.forEach(S),r&&!m.length)y.layerIds=[];else{const d=ge(m,c,a),F=m.map(g=>{const w=I(i,g);return g.toExportImageJSON(w)});if(d)y.dynamicLayers=JSON.stringify(F);else{if(r){let w=m.map(({id:$})=>$);o&&(w=w.filter($=>o.includes($))),y.layerIds=w}else o!=null&&o.length&&(y.layerIds=o);const g=je(i,m);if(j(g)&&g.length){const w={};for(const $ of g)$.definitionExpression&&(w[$.id]=$.definitionExpression);Object.keys(w).length&&(y.layerDefs=JSON.stringify(w))}}}return y}function je(t,e){const i=!!(t!=null&&t.length),s=e.filter(r=>r.definitionExpression!=null||i&&r.floorInfo!=null);return s.length?s.map(r=>{const o=I(t,r),n=he(o,r.definitionExpression);return{id:r.id,definitionExpression:X(n,void 0)}}):null}var _;let f=_=class extends J{static from(t){return W(_,t)}constructor(t){super(t),this.dpi=96,this.floors=null,this.gdbVersion=null,this.geometry=null,this.geometryPrecision=null,this.height=400,this.layerIds=null,this.layerOption="top",this.mapExtent=null,this.maxAllowableOffset=null,this.returnFieldName=!0,this.returnGeometry=!1,this.returnM=!1,this.returnUnformattedValues=!0,this.returnZ=!1,this.spatialReference=null,this.sublayers=null,this.timeExtent=null,this.tolerance=null,this.width=400}};l([u({type:Number,json:{write:!0}})],f.prototype,"dpi",void 0),l([u()],f.prototype,"floors",void 0),l([u({type:String,json:{write:!0}})],f.prototype,"gdbVersion",void 0),l([u({types:we,json:{read:de,write:!0}})],f.prototype,"geometry",void 0),l([u({type:Number,json:{write:!0}})],f.prototype,"geometryPrecision",void 0),l([u({type:Number,json:{write:!0}})],f.prototype,"height",void 0),l([u({type:[Number],json:{write:!0}})],f.prototype,"layerIds",void 0),l([u({type:["top","visible","all","popup"],json:{write:!0}})],f.prototype,"layerOption",void 0),l([u({type:M,json:{write:!0}})],f.prototype,"mapExtent",void 0),l([u({type:Number,json:{write:!0}})],f.prototype,"maxAllowableOffset",void 0),l([u({type:Boolean,json:{write:!0}})],f.prototype,"returnFieldName",void 0),l([u({type:Boolean,json:{write:!0}})],f.prototype,"returnGeometry",void 0),l([u({type:Boolean,json:{write:!0}})],f.prototype,"returnM",void 0),l([u({type:Boolean,json:{write:!0}})],f.prototype,"returnUnformattedValues",void 0),l([u({type:Boolean,json:{write:!0}})],f.prototype,"returnZ",void 0),l([u({type:ie,json:{write:!0}})],f.prototype,"spatialReference",void 0),l([u()],f.prototype,"sublayers",void 0),l([u({type:be,json:{write:!0}})],f.prototype,"timeExtent",void 0),l([u({type:Number,json:{write:!0}})],f.prototype,"tolerance",void 0),l([u({type:Number,json:{write:!0}})],f.prototype,"width",void 0),f=_=l([P("esri.rest.support.IdentifyParameters")],f);const H=f;let O=class extends J{constructor(e){super(e),this.displayFieldName=null,this.feature=null,this.layerId=null,this.layerName=null}readFeature(e,i){return G.fromJSON({attributes:{...i.attributes},geometry:{...i.geometry}})}writeFeature(e,i){if(!e)return;const{attributes:s,geometry:r}=e;s&&(i.attributes={...s}),j(r)&&(i.geometry=r.toJSON(),i.geometryType=ve.toJSON(r.type))}};l([u({type:String,json:{write:!0}})],O.prototype,"displayFieldName",void 0),l([u({type:G})],O.prototype,"feature",void 0),l([se("feature",["attributes","geometry"])],O.prototype,"readFeature",null),l([oe("feature")],O.prototype,"writeFeature",null),l([u({type:Number,json:{write:!0}})],O.prototype,"layerId",void 0),l([u({type:String,json:{write:!0}})],O.prototype,"layerName",void 0),O=l([P("esri.rest.support.IdentifyResult")],O);const Ee=O;async function Ne(t,e,i){const s=(e=_e(e)).geometry?[e.geometry]:[],r=ue(t);return r.path+="/identify",ye(s).then(o=>{const n=Fe(e,{geometry:o&&o[0]}),a=ce({...r.query,f:"json",...n}),c=me(a,i);return pe(r.path,c).then(Re).then(p=>Pe(p,e.sublayers))})}function Re(t){const e=t.data;return e.results=e.results||[],e.exceededTransferLimit=Boolean(e.exceededTransferLimit),e.results=e.results.map(i=>Ee.fromJSON(i)),e}function _e(t){return t=H.from(t)}function Pe(t,e){if(!(e!=null&&e.length))return t;const i=new Map;function s(r){i.set(r.id,r),r.sublayers&&r.sublayers.forEach(s)}e.forEach(s);for(const r of t.results)r.feature.sourceLayer=i.get(r.layerId);return t}let R=null;function lt(t,e){return e.type==="tile"||e.type==="map-image"}let N=class extends q{constructor(t){super(t),this._featuresResolutions=new WeakMap,this.highlightGraphics=null,this.highlightGraphicUpdated=null,this.updateHighlightedFeatures=ee(async e=>{this.destroyed||this.updatingHandles.addPromise(this._updateHighlightedFeaturesGeometries(e).catch(()=>{}))})}initialize(){const t=e=>{this.updatingHandles.addPromise(this._updateHighlightedFeaturesSymbols(e).catch(()=>{})),this.updateHighlightedFeatures(this._highlightGeometriesResolution)};this.addHandles([re(()=>this.highlightGraphics,"change",e=>t(e.added),{onListenerAdd:e=>t(e)})])}async fetchPopupFeatures(t,e){var n,a;const{layerView:{layer:i,view:{scale:s}}}=this;if(!t)throw new A("fetchPopupFeatures:invalid-area","Nothing to fetch without area",{layer:i});const r=Ge(i.sublayers,s,e);if(!r.length)return[];const o=await Ve(i,r);if(!((((a=(n=i.capabilities)==null?void 0:n.operations)==null?void 0:a.supportsIdentify)??!0)&&i.version>=10.5)&&!o)throw new A("fetchPopupFeatures:not-supported","query operation is disabled for this service",{layer:i});return o?this._fetchPopupFeaturesUsingQueries(t,r,e):this._fetchPopupFeaturesUsingIdentify(t,r,e)}clearHighlights(){var t;(t=this.highlightGraphics)==null||t.removeAll()}highlight(t){const e=this.highlightGraphics;if(!e)return{remove(){}};let i=null;if(t instanceof G?i=[t]:Z.isCollection(t)&&t.length>0?i=t.toArray():Array.isArray(t)&&t.length>0&&(i=t),i=i==null?void 0:i.filter(j),!i||!i.length)return{remove:()=>{}};for(const s of i){const r=s.sourceLayer;r!=null&&"geometryType"in r&&r.geometryType==="point"&&(s.visible=!1)}return e.addMany(i),{remove:()=>{e.removeMany(i??[])}}}async _updateHighlightedFeaturesSymbols(t){const{layerView:{view:e},highlightGraphics:i,highlightGraphicUpdated:s}=this;if(i&&s)for(const r of t){const o=r.sourceLayer&&"renderer"in r.sourceLayer&&r.sourceLayer.renderer;r.sourceLayer&&"geometryType"in r.sourceLayer&&r.sourceLayer.geometryType==="point"&&o&&"getSymbolAsync"in o&&o.getSymbolAsync(r).then(async n=>{var p;n||(n=new L);let a=null;const c="visualVariables"in o?(p=o.visualVariables)==null?void 0:p.find(y=>y.type==="size"):void 0;c&&(R||(R=(await D(()=>import("./visualVariableUtils-6f78f1dd.js"),["./visualVariableUtils-6f78f1dd.js","./Color-5a385b27.js","./colorUtils-639f4d25.js","./mathUtils-5b623c84.js","./vec3-015ca254.js","./common-d0b63c2d.js","./vec4-c7a19f0d.js","./typedArrayUtil-70e1d79e.js","./ensureType-249b88cd.js","./string-7a2f1d87.js","./Error-62cc7aff.js","./Graphic-46941d56.js","./JSONSupport-32b5ad86.js","./nextTick-3ee5a785.js","./promiseUtils-59dab60c.js","./geometry-f89ca072.js","./Extent-2ad2c9a9.js","./Ellipsoid-89682c5e.js","./Polyline-cf51ad23.js","./typeUtils-05f9d41d.js","./PopupTemplate-c1fb66ed.js","./Clonable-95fa5d2d.js","./Collection-9e42cc30.js","./Evented-36093e88.js","./SimpleObservable-a6d3d2d8.js","./fieldUtils-e397be4b.js","./preload-helper-41c905a7.js","./arcadeOnDemand-5c3ab3f7.js","./enumeration-504d95a2.js","./number-2db5f4a2.js","./locale-30120714.js","./Identifiable-99d92428.js","./symbols-5a102dff.js","./CIMSymbol-561444b9.js","./screenUtils-410d12c0.js","./opacityUtils-c0957a27.js","./symbolLayerUtils3D-5a2f49a8.js","./aaBoundingBox-dfb04110.js","./aaBoundingRect-42f9721f.js","./request-f01affa1.js","./persistableUrlUtils-ccf13db2.js","./Symbol3DAnchorPosition2D-d0207ef9.js","./collectionUtils-61fc1a27.js","./Portal-52d960e8.js","./Loadable-7c3ecd79.js","./Promise-3959c3ee.js","./PortalGroup-b49a7409.js","./PortalUser-85cf1ca9.js","./jsonUtils-6d0a72e3.js","./compilerUtils-2eb56463.js","./lengthUtils-e2d3809d.js","./sizeVariableUtils-d4870b0d.js"],import.meta.url)).getSize),a=R(c,r,{view:e.type,scale:e.scale,shape:n.type==="simple-marker"?n.style:null})),a||(a="width"in n&&"height"in n&&n.width!=null&&n.height!=null?Math.max(n.width,n.height):"size"in n?n.size:16),i.includes(r)&&(r.symbol=new L({style:"square",size:a,xoffset:"xoffset"in n?n.xoffset:0,yoffset:"yoffset"in n?n.yoffset:0}),s(r,"symbol"),r.visible=!0)})}}async _updateHighlightedFeaturesGeometries(t){const{layerView:{layer:e,view:i},highlightGraphics:s,highlightGraphicUpdated:r}=this;if(this._highlightGeometriesResolution=t,!r||!(s!=null&&s.length)||!e.capabilities.operations.supportsQuery)return;const o=this._getTargetResolution(t),n=new Map;for(const p of s)if(!this._featuresResolutions.has(p)||this._featuresResolutions.get(p)>o){const y=p.sourceLayer;K(n,y,()=>new Map).set(p.getObjectId(),p)}const a=Array.from(n,([p,y])=>{const h=p.createQuery();return h.objectIds=[...y.keys()],h.outFields=[p.objectIdField],h.returnGeometry=!0,h.maxAllowableOffset=o,h.outSpatialReference=i.spatialReference,p.queryFeatures(h)}),c=await Promise.all(a);if(!this.destroyed)for(const{features:p}of c)for(const y of p){const h=y.sourceLayer,m=n.get(h).get(y.getObjectId());m&&s.includes(m)&&(m.geometry=y.geometry,r(m,"geometry"),this._featuresResolutions.set(m,o))}}_getTargetResolution(t){const e=t*ne(this.layerView.view.spatialReference),i=e/16;return i<=10?0:t/e*i}async _fetchPopupFeaturesUsingIdentify(t,e,i){const s=await this._createIdentifyParameters(t,e,i);if(Y(s))return[];const{results:r}=await Ne(this.layerView.layer.parsedUrl,s);return r.map(o=>o.feature)}async _createIdentifyParameters(t,e,i){const{floors:s,layer:r,timeExtent:o,view:{spatialReference:n,scale:a}}=this.layerView,c=j(i)?i.event:null;if(!e.length)return null;await Promise.all(e.map(({sublayer:x})=>x.load().catch(()=>{})));const p=Math.min(C("mapservice-popup-identify-max-tolerance"),r.allSublayers.reduce((x,b)=>b.renderer?T({renderer:b.renderer,event:c}):x,2)),y=this.createFetchPopupFeaturesQueryGeometry(t,p),h=le(a,n),m=Math.round(y.width/h),S=new M({xmin:y.center.x-h*m,ymin:y.center.y-h*m,xmax:y.center.x+h*m,ymax:y.center.y+h*m,spatialReference:y.spatialReference});return new H({floors:s,gdbVersion:"gdbVersion"in r?r.gdbVersion:void 0,geometry:t,height:m,layerOption:"popup",mapExtent:S,returnGeometry:!0,spatialReference:n,sublayers:r.sublayers,timeExtent:o,tolerance:p,width:m})}async _fetchPopupFeaturesUsingQueries(t,e,i){const{layerView:{floors:s,timeExtent:r}}=this,o=j(i)?i.event:null,n=e.map(async({sublayer:a,popupTemplate:c})=>{if(await a.load().catch(()=>{}),a.capabilities&&!a.capabilities.operations.supportsQuery)return[];const p=a.createQuery(),y=T({renderer:a.renderer,event:o}),h=this.createFetchPopupFeaturesQueryGeometry(t,y);if(p.geometry=h,p.outFields=await $e(a,c),p.timeExtent=r,s){const F=s.clone(),g=I(F,a);j(g)&&(p.where=p.where?`(${p.where}) AND (${g})`:g)}const m=this._getTargetResolution(h.width/y),S=await Ie(c),x=a.geometryType==="point"||S&&S.arcadeUtils.hasGeometryOperations(c);x||(p.maxAllowableOffset=m);let{features:b}=await a.queryFeatures(p);const d=x?0:m;b=await Ae(a,b);for(const F of b)this._featuresResolutions.set(F,d);return b});return(await te(n)).reverse().reduce((a,c)=>c.value?[...a,...c.value]:a,[]).filter(a=>a!=null)}};function Ge(t,e,i){const s=[],r=o=>{const n=o.minScale===0||e<=o.minScale,a=o.maxScale===0||e>=o.maxScale;if(o.visible&&n&&a){if(o.sublayers)o.sublayers.forEach(r);else if(o.popupEnabled){const c=Se(o,{...i,defaultPopupTemplateEnabled:!1});j(c)&&s.unshift({sublayer:o,popupTemplate:c})}}};return((t==null?void 0:t.toArray())??[]).reverse().map(r),s}function Ie(t){var e;return(e=t.expressionInfos)!=null&&e.length||Array.isArray(t.content)&&t.content.some(i=>i.type==="expression")?xe():Promise.resolve()}async function Ve(t,e){var i,s;if((s=(i=t.capabilities)==null?void 0:i.operations)!=null&&s.supportsQuery)return!0;try{return await Promise.any(e.map(({sublayer:r})=>r.load().then(()=>r.capabilities.operations.supportsQuery)))}catch{return!1}}async function Ae(t,e){const i=t.renderer;return i&&"defaultSymbol"in i&&!i.defaultSymbol&&(e=i.valueExpression?await Promise.all(e.map(s=>i.getSymbolAsync(s).then(r=>r?s:null))).then(s=>s.filter(r=>r!=null)):e.filter(s=>i.getSymbol(s)!=null)),e}l([u({constructOnly:!0})],N.prototype,"createFetchPopupFeaturesQueryGeometry",void 0),l([u({constructOnly:!0})],N.prototype,"layerView",void 0),l([u({constructOnly:!0})],N.prototype,"highlightGraphics",void 0),l([u({constructOnly:!0})],N.prototype,"highlightGraphicUpdated",void 0),l([u({constructOnly:!0})],N.prototype,"updatingHandles",void 0),N=l([P("esri.views.layers.support.MapService")],N);export{lt as P,N as S};
