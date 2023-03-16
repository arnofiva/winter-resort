import{e as o,y as a,a as T,C as x}from"./JSONSupport-32b5ad86.js";import"./geometry-f89ca072.js";import{U as c}from"./request-f01affa1.js";import{a as u}from"./Error-62cc7aff.js";import{r as f,t as M}from"./typedArrayUtil-70e1d79e.js";import{O as B}from"./MultiOriginJSONSupport-247be6b9.js";import"./ensureType-249b88cd.js";import{f as y,e as P,w as R}from"./Extent-2ad2c9a9.js";import{u as $}from"./aaBoundingRect-42f9721f.js";import{b as k}from"./Layer-ab90f8be.js";import{a as S}from"./BlendLayer-fe49ee20.js";import{p as I}from"./RefreshableLayer-6e09e5c7.js";import{t as O}from"./ScaleRangeLayer-56857dcb.js";import{e as _}from"./imageBitmapUtils-400e9918.js";import{j as h,t as L,p as r}from"./TileInfo-c1a6fc90.js";import{c as A}from"./OperationalLayer-892ef1ff.js";import"./string-7a2f1d87.js";import"./nextTick-3ee5a785.js";import"./promiseUtils-59dab60c.js";import"./Polyline-cf51ad23.js";import"./typeUtils-05f9d41d.js";import"./preload-helper-41c905a7.js";import"./Ellipsoid-89682c5e.js";import"./mathUtils-5b623c84.js";import"./vec3-015ca254.js";import"./common-d0b63c2d.js";import"./vec4-c7a19f0d.js";import"./Evented-36093e88.js";import"./Identifiable-99d92428.js";import"./Loadable-7c3ecd79.js";import"./Promise-3959c3ee.js";import"./colorUtils-639f4d25.js";import"./screenUtils-410d12c0.js";import"./mat4f32-60a2394b.js";import"./mat4-4714ff8c.js";import"./Collection-9e42cc30.js";import"./SimpleObservable-a6d3d2d8.js";import"./TimeExtent-4bfae662.js";import"./persistableUrlUtils-ccf13db2.js";import"./ElevationInfo-bc15f954.js";import"./fieldUtils-e397be4b.js";import"./arcadeOnDemand-5c3ab3f7.js";import"./lengthUtils-e2d3809d.js";import"./opacityUtils-c0957a27.js";var w;const m=new L("0/0/0",0,0,0,void 0);let g=w=class extends S(O(I(k))){constructor(){super(...arguments),this.tileInfo=h.create({spatialReference:y.WebMercator,size:256}),this.type="base-tile",this.fullExtent=new P(-20037508342787e-6,-2003750834278e-5,2003750834278e-5,20037508342787e-6,y.WebMercator),this.spatialReference=y.WebMercator}getTileBounds(e,t,i,n){const l=n||$();return m.level=e,m.row=t,m.col=i,m.extent=l,this.tileInfo.updateTileInfo(m),m.extent=void 0,l}fetchTile(e,t,i,n={}){const{signal:l}=n,p=this.getTileUrl(e,t,i),d={responseType:"image",signal:l,query:{...this.refreshParameters}};return c(p??"",d).then(b=>b.data)}async fetchImageBitmapTile(e,t,i,n={}){const{signal:l}=n;if(this.fetchTile!==w.prototype.fetchTile){const j=await this.fetchTile(e,t,i,n);try{return createImageBitmap(j)}catch(U){throw new u("request:server",`Unable to load tile ${e}/${t}/${i}`,{error:U,level:e,row:t,col:i})}}const p=this.getTileUrl(e,t,i)??"",d={responseType:"blob",signal:l,query:{...this.refreshParameters}},{data:b}=await c(p,d);return _(b,p)}getTileUrl(){throw new u("basetilelayer:gettileurl-not-implemented","getTileUrl() is not implemented")}};o([a({type:h})],g.prototype,"tileInfo",void 0),o([a({type:["show","hide"]})],g.prototype,"listMode",void 0),o([a({readOnly:!0,value:"base-tile"})],g.prototype,"type",void 0),o([a({nonNullable:!0})],g.prototype,"fullExtent",void 0),o([a()],g.prototype,"spatialReference",void 0),g=w=o([T("esri.layers.BaseTileLayer")],g);const q=g,v=new x({BingMapsAerial:"aerial",BingMapsRoad:"road",BingMapsHybrid:"hybrid"}),z="https://dev.virtualearth.net";let s=class extends S(A(B(q))){constructor(e){super(e),this.type="bing-maps",this.tileInfo=new h({size:[256,256],dpi:96,origin:new R({x:-20037508342787e-6,y:20037508342787e-6,spatialReference:y.WebMercator}),spatialReference:y.WebMercator,lods:[new r({level:1,resolution:78271.5169639999,scale:295828763795777e-6}),new r({level:2,resolution:39135.7584820001,scale:147914381897889e-6}),new r({level:3,resolution:19567.8792409999,scale:73957190948944e-6}),new r({level:4,resolution:9783.93962049996,scale:36978595474472e-6}),new r({level:5,resolution:4891.96981024998,scale:18489297737236e-6}),new r({level:6,resolution:2445.98490512499,scale:9244648868618e-6}),new r({level:7,resolution:1222.99245256249,scale:4622324434309e-6}),new r({level:8,resolution:611.49622628138,scale:2311162217155e-6}),new r({level:9,resolution:305.748113140558,scale:1155581108577e-6}),new r({level:10,resolution:152.874056570411,scale:577790.554289}),new r({level:11,resolution:76.4370282850732,scale:288895.277144}),new r({level:12,resolution:38.2185141425366,scale:144447.638572}),new r({level:13,resolution:19.1092570712683,scale:72223.819286}),new r({level:14,resolution:9.55462853563415,scale:36111.909643}),new r({level:15,resolution:4.77731426794937,scale:18055.954822}),new r({level:16,resolution:2.38865713397468,scale:9027.977411}),new r({level:17,resolution:1.19432856685505,scale:4513.988705}),new r({level:18,resolution:.597164283559817,scale:2256.994353}),new r({level:19,resolution:.298582141647617,scale:1128.497176}),new r({level:20,resolution:.1492910708238085,scale:564.248588})]}),this.key=null,this.style="road",this.culture="en-US",this.region=null,this.portalUrl=null,this.hasAttributionData=!0}get bingMetadata(){return this._get("bingMetadata")}set bingMetadata(e){this._set("bingMetadata",e)}get copyright(){return f(this.bingMetadata)?this.bingMetadata.copyright:null}get operationalLayerType(){return v.toJSON(this.style)}get bingLogo(){return f(this.bingMetadata)?this.bingMetadata.brandLogoUri:null}load(e){return this.key?this.addResolvingPromise(this._getMetadata()):this.portalUrl?this.addResolvingPromise(this._getPortalBingKey().then(()=>this._getMetadata())):this.addResolvingPromise(Promise.reject(new u("bingmapslayer:load","Bing layer must have bing key."))),Promise.resolve(this)}getTileUrl(e,t,i){if(!this.loaded||M(this.bingMetadata))return null;const n=this.bingMetadata.resourceSets[0].resources[0],l=n.imageUrlSubdomains[t%n.imageUrlSubdomains.length],p=this._getQuadKey(e,t,i);return n.imageUrl.replace("{subdomain}",l).replace("{quadkey}",p)}async fetchAttributionData(){return this.load().then(()=>M(this.bingMetadata)?null:{contributors:this.bingMetadata.resourceSets[0].resources[0].imageryProviders.map(e=>({attribution:e.attribution,coverageAreas:e.coverageAreas.map(t=>({zoomMin:t.zoomMin,zoomMax:t.zoomMax,score:1,bbox:[t.bbox[0],t.bbox[1],t.bbox[2],t.bbox[3]]}))}))})}_getMetadata(){const e={road:"roadOnDemand",aerial:"aerial",hybrid:"aerialWithLabelsOnDemand"}[this.style];return c(`${z}/REST/v1/Imagery/Metadata/${e}`,{responseType:"json",query:{include:"ImageryProviders",uriScheme:"https",key:this.key,suppressStatus:!0,output:"json",culture:this.culture,userRegion:this.region}}).then(t=>{const i=t.data;if(i.statusCode!==200)throw new u("bingmapslayer:getmetadata",i.statusDescription);if(this.bingMetadata=i,this.bingMetadata.resourceSets.length===0)throw new u("bingmapslayer:getmetadata","no bing resourcesets");if(this.bingMetadata.resourceSets[0].resources.length===0)throw new u("bingmapslayer:getmetadata","no bing resources")}).catch(t=>{throw new u("bingmapslayer:getmetadata",t.message)})}_getPortalBingKey(){return c(this.portalUrl??"",{responseType:"json",authMode:"no-prompt",query:{f:"json"}}).then(e=>{if(!e.data.bingKey)throw new u("bingmapslayer:getportalbingkey","The referenced Portal does not contain a valid bing key");this.key=e.data.bingKey}).catch(e=>{throw new u("bingmapslayer:getportalbingkey",e.message)})}_getQuadKey(e,t,i){let n="";for(let l=e;l>0;l--){let p=0;const d=1<<l-1;i&d&&(p+=1),t&d&&(p+=2),n+=p.toString()}return n}};o([a({json:{read:!1,write:!1},value:null})],s.prototype,"bingMetadata",null),o([a({json:{read:!1,write:!1},value:"bing-maps",readOnly:!0})],s.prototype,"type",void 0),o([a({type:h})],s.prototype,"tileInfo",void 0),o([a({type:String,readOnly:!0,json:{read:!1,write:!1}})],s.prototype,"copyright",null),o([a({type:String,json:{write:!1,read:!1}})],s.prototype,"key",void 0),o([a({type:v.apiValues,nonNullable:!0,json:{read:{source:"layerType",reader:v.read}}})],s.prototype,"style",void 0),o([a({type:["BingMapsAerial","BingMapsHybrid","BingMapsRoad"]})],s.prototype,"operationalLayerType",null),o([a({type:String,json:{write:!1,read:!1}})],s.prototype,"culture",void 0),o([a({type:String,json:{write:!1,read:!1}})],s.prototype,"region",void 0),o([a({type:String,json:{write:!0,read:!0}})],s.prototype,"portalUrl",void 0),o([a({type:Boolean,json:{write:!1,read:!1}})],s.prototype,"hasAttributionData",void 0),o([a({type:String,readOnly:!0})],s.prototype,"bingLogo",null),s=o([T("esri.layers.BingMapsLayer")],s);const Re=s;export{Re as default};
