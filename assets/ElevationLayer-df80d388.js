import{_ as n}from"./preload-helper-41c905a7.js";import{e as a,y as p,a as u}from"./JSONSupport-32b5ad86.js";import{U as m,A as v}from"./request-f01affa1.js";import{a as f}from"./Error-62cc7aff.js";import{y as w,r as d}from"./typedArrayUtil-70e1d79e.js";import{O as g}from"./MultiOriginJSONSupport-247be6b9.js";import{w as _,f as c}from"./promiseUtils-59dab60c.js";import"./ensureType-249b88cd.js";import{o as T}from"./Extent-2ad2c9a9.js";import{v as S}from"./HeightModelInfo-bc3bd77c.js";import{b as $}from"./Layer-ab90f8be.js";import{s as I}from"./ArcGISCachedService-5f31f6cf.js";import{p as O}from"./ArcGISService-69574b36.js";import{c as b,f as D}from"./OperationalLayer-892ef1ff.js";import{_ as E}from"./PortalLayer-f8afa381.js";import{n as A,e as L}from"./LercDecoder-bc94632d.js";import"./string-7a2f1d87.js";import"./nextTick-3ee5a785.js";import"./Ellipsoid-89682c5e.js";import"./geometry-f89ca072.js";import"./Polyline-cf51ad23.js";import"./typeUtils-05f9d41d.js";import"./Evented-36093e88.js";import"./Identifiable-99d92428.js";import"./Loadable-7c3ecd79.js";import"./Promise-3959c3ee.js";import"./TilemapCache-d945999b.js";import"./TileInfo-c1a6fc90.js";import"./aaBoundingRect-42f9721f.js";import"./mathUtils-5b623c84.js";import"./vec3-015ca254.js";import"./common-d0b63c2d.js";import"./vec4-c7a19f0d.js";import"./byteSizeEstimations-f0cab514.js";import"./HandleOwner-f4554d8c.js";import"./reactiveUtils-e6d6c898.js";import"./LRUCache-805da42e.js";import"./MemCache-a072224a.js";import"./arcgisLayerUrl-1177870a.js";import"./persistableUrlUtils-ccf13db2.js";import"./TimeExtent-4bfae662.js";import"./ElevationInfo-bc15f954.js";import"./fieldUtils-e397be4b.js";import"./arcadeOnDemand-5c3ab3f7.js";import"./lengthUtils-e2d3809d.js";import"./opacityUtils-c0957a27.js";import"./asyncUtils-8de18dd2.js";import"./layerUtils-ff76096c.js";import"./Portal-52d960e8.js";import"./locale-30120714.js";import"./PortalGroup-b49a7409.js";import"./PortalUser-85cf1ca9.js";import"./PortalItem-476b4f2f.js";import"./assets-640b4d04.js";import"./portalItemUtils-f08de884.js";import"./projection-d42b91be.js";import"./SimpleObservable-a6d3d2d8.js";import"./mat4-4714ff8c.js";import"./zscale-d428b1da.js";import"./workers-591e0dfc.js";import"./Connection-000cba43.js";import"./intl-0ee83c79.js";import"./number-2db5f4a2.js";import"./messages-f54f7f46.js";let o=class extends I(O(b(E(g($))))){constructor(...e){super(...e),this.copyright=null,this.heightModelInfo=null,this.path=null,this.minScale=void 0,this.maxScale=void 0,this.opacity=1,this.operationalLayerType="ArcGISTiledElevationServiceLayer",this.sourceJSON=null,this.type="elevation",this.url=null,this.version=null,this._lercDecoder=A()}normalizeCtorArgs(e,r){return typeof e=="string"?{url:e,...r}:e}destroy(){this._lercDecoder=w(this._lercDecoder)}readVersion(e,r){let t=r.currentVersion;return t||(t=9.3),t}load(e){const r=d(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Image Service"],supportsData:!1,validateItem:t=>{for(let i=0;i<t.typeKeywords.length;i++)if(t.typeKeywords[i].toLowerCase()==="elevation 3d layer")return!0;throw new f("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}' ",{type:"Image Service",expectedType:"Image Service Elevation 3D Layer"})}},e).catch(_).then(()=>this._fetchImageService(r))),Promise.resolve(this)}fetchTile(e,r,t,i){const s=d((i=i||{signal:null}).signal)?i.signal:i.signal=new AbortController().signal,h={responseType:"array-buffer",signal:s},y={noDataValue:i.noDataValue,returnFileInfo:!0};return this.load().then(()=>this._fetchTileAvailability(e,r,t,i)).then(()=>m(this.getTileUrl(e,r,t),h)).then(l=>this._lercDecoder.decode(l.data,y,s)).then(l=>new L(l))}getTileUrl(e,r,t){const i=!this.tilemapCache&&this.supportsBlankTile,s=v({...this.parsedUrl.query,blankTile:!i&&null});return`${this.parsedUrl.path}/tile/${e}/${r}/${t}${s?"?"+s:""}`}async queryElevation(e,r){const{ElevationQuery:t}=await n(()=>import("./ElevationQuery-05599f7b.js"),["./ElevationQuery-05599f7b.js","./asyncUtils-8de18dd2.js","./JSONSupport-32b5ad86.js","./string-7a2f1d87.js","./typedArrayUtil-70e1d79e.js","./ensureType-249b88cd.js","./Error-62cc7aff.js","./nextTick-3ee5a785.js","./promiseUtils-59dab60c.js","./Extent-2ad2c9a9.js","./Ellipsoid-89682c5e.js","./Polyline-cf51ad23.js","./projection-d42b91be.js","./preload-helper-41c905a7.js","./mathUtils-5b623c84.js","./vec3-015ca254.js","./common-d0b63c2d.js","./vec4-c7a19f0d.js","./SimpleObservable-a6d3d2d8.js","./mat4-4714ff8c.js","./assets-640b4d04.js","./request-f01affa1.js","./aaBoundingRect-42f9721f.js","./zscale-d428b1da.js","./ElevationSamplerData-89295dc0.js","./geometry-f89ca072.js","./typeUtils-05f9d41d.js","./TileInfo-c1a6fc90.js"],import.meta.url);return c(r),new t().query(this,e,r)}async createElevationSampler(e,r){const{ElevationQuery:t}=await n(()=>import("./ElevationQuery-05599f7b.js"),["./ElevationQuery-05599f7b.js","./asyncUtils-8de18dd2.js","./JSONSupport-32b5ad86.js","./string-7a2f1d87.js","./typedArrayUtil-70e1d79e.js","./ensureType-249b88cd.js","./Error-62cc7aff.js","./nextTick-3ee5a785.js","./promiseUtils-59dab60c.js","./Extent-2ad2c9a9.js","./Ellipsoid-89682c5e.js","./Polyline-cf51ad23.js","./projection-d42b91be.js","./preload-helper-41c905a7.js","./mathUtils-5b623c84.js","./vec3-015ca254.js","./common-d0b63c2d.js","./vec4-c7a19f0d.js","./SimpleObservable-a6d3d2d8.js","./mat4-4714ff8c.js","./assets-640b4d04.js","./request-f01affa1.js","./aaBoundingRect-42f9721f.js","./zscale-d428b1da.js","./ElevationSamplerData-89295dc0.js","./geometry-f89ca072.js","./typeUtils-05f9d41d.js","./TileInfo-c1a6fc90.js"],import.meta.url);return c(r),new t().createSampler(this,e,r)}_fetchTileAvailability(e,r,t,i){return this.tilemapCache?this.tilemapCache.fetchAvailability(e,r,t,i):Promise.resolve("unknown")}async _fetchImageService(e){var i;if(this.sourceJSON)return this.sourceJSON;const r={query:{f:"json",...this.parsedUrl.query},responseType:"json",signal:e},t=await m(this.parsedUrl.path,r);t.ssl&&(this.url=(i=this.url)==null?void 0:i.replace(/^http:/i,"https:")),this.sourceJSON=t.data,this.read(t.data,{origin:"service",url:this.parsedUrl})}get hasOverriddenFetchTile(){return!this.fetchTile.__isDefault__}};a([p({json:{read:{source:"copyrightText"}}})],o.prototype,"copyright",void 0),a([p({readOnly:!0,type:S})],o.prototype,"heightModelInfo",void 0),a([p({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],o.prototype,"path",void 0),a([p({type:["show","hide"]})],o.prototype,"listMode",void 0),a([p({json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}},readOnly:!0})],o.prototype,"minScale",void 0),a([p({json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}},readOnly:!0})],o.prototype,"maxScale",void 0),a([p({json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],o.prototype,"opacity",void 0),a([p({type:["ArcGISTiledElevationServiceLayer"]})],o.prototype,"operationalLayerType",void 0),a([p()],o.prototype,"sourceJSON",void 0),a([p({json:{read:!1},value:"elevation",readOnly:!0})],o.prototype,"type",void 0),a([p(D)],o.prototype,"url",void 0),a([p()],o.prototype,"version",void 0),a([T("version",["currentVersion"])],o.prototype,"readVersion",null),o=a([u("esri.layers.ElevationLayer")],o),o.prototype.fetchTile.__isDefault__=!0;const Fe=o;export{Fe as default};
