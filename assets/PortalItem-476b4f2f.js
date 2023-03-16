import{_ as g}from"./preload-helper-41c905a7.js";import{e as r,s as T,y as o,a as S,v as R,u as _}from"./JSONSupport-32b5ad86.js";import{a as q}from"./assets-640b4d04.js";import{s as L,a as y}from"./Error-62cc7aff.js";import{p as l,l as j}from"./string-7a2f1d87.js";import{m as $}from"./Loadable-7c3ecd79.js";import{r as h,t as x,x as C,c as u}from"./typedArrayUtil-70e1d79e.js";import{Y as P,G as F,c as N,F as J}from"./request-f01affa1.js";import{v as D}from"./ensureType-249b88cd.js";import{e as O,o as E}from"./Extent-2ad2c9a9.js";import{b as U}from"./Portal-52d960e8.js";import"./nextTick-3ee5a785.js";import"./promiseUtils-59dab60c.js";import"./Promise-3959c3ee.js";import"./Ellipsoid-89682c5e.js";import"./locale-30120714.js";import"./PortalGroup-b49a7409.js";import"./PortalUser-85cf1ca9.js";let p=class extends R{constructor(e){super(e),this.portalItem=null}normalizeCtorArgs(e){return e&&e.portalItem&&e.path?{...e,path:this._normalizePath(e.path,e.portalItem)}:e}set path(e){h(e)&&P(e)?L.getLogger(this.declaredClass).error("portalitemresource:invalid-path","A portal item resource path must be relative"):this._set("path",e)}_castPath(e){return this._normalizePath(e,this.portalItem)}get url(){return this.portalItem&&this.path?`${this.portalItem.itemUrl}/resources/${this.path}`:null}get itemRelativeUrl(){return this.portalItem&&this.path?`./resources/${this.path}`:null}fetch(e="json",t){const i=this.url;if(x(i))throw new y("portal-item-resource:fetch","Portal item resource does not refer to a valid item or path");return this.portalItem.portal.request(i,{responseType:e,query:{token:this.portalItem.apiKey},signal:C(t,"signal")})}async update(e,t){return(await g(()=>import("./resourceUtils-a295dbcf.js"),["./resourceUtils-a295dbcf.js","./request-f01affa1.js","./preload-helper-41c905a7.js","./Error-62cc7aff.js","./string-7a2f1d87.js","./typedArrayUtil-70e1d79e.js","./promiseUtils-59dab60c.js"],import.meta.url)).addOrUpdateResource(this,"update",e,t)}hasPath(){return h(this.path)}_normalizePath(e,t){return x(e)?e:(e=e.replace(/^\/+/,""),h(t)&&P(e)&&(e=F(e,t.itemUrl)),e==null?void 0:e.replace(/^\/+/,"").replace(/^(\.\/)?resources\//,""))}};r([o()],p.prototype,"portalItem",void 0),r([o({type:String,value:null})],p.prototype,"path",null),r([T("path")],p.prototype,"_castPath",null),r([o({type:String,readOnly:!0})],p.prototype,"url",null),r([o({type:String,readOnly:!0})],p.prototype,"itemRelativeUrl",null),p=r([S("esri.portal.PortalItemResource")],p);const K=p;let v=class extends R{constructor(e){super(e),this.created=null,this.rating=null}};r([o()],v.prototype,"created",void 0),r([o()],v.prototype,"rating",void 0),v=r([S("esri.portal.PortalRating")],v);const k=v;var d;const V=new Set(["Map Service","Feature Service","Feature Collection","Scene Service","Image Service","Stream Service","Vector Tile Service","GeoJson","CSV","KML","WFS","WMTS","WMS","Feed"]),A=new Set(["KML","GeoJson","CSV"]);let a=d=class extends _($){static from(e){return D(d,e)}constructor(e){super(e),this.access=null,this.accessInformation=null,this.apiKey=null,this.applicationProxies=null,this.avgRating=null,this.categories=null,this.created=null,this.culture=null,this.description=null,this.extent=null,this.groupCategories=null,this.id=null,this.isOrgItem=!1,this.itemControl=null,this.licenseInfo=null,this.modified=null,this.name=null,this.numComments=null,this.numRatings=null,this.numViews=null,this.owner=null,this.ownerFolder=null,this.portal=null,this.screenshots=null,this.size=null,this.snippet=null,this.sourceJSON=null,this.sourceUrl=null,this.spatialReference=null,this.tags=null,this.title=null,this.type=null,this.typeKeywords=null,this.url=null}destroy(){this.portal=null}get displayName(){const e=this.type,t=this.typeKeywords||[];let i=e;return e==="Feature Service"||e==="Feature Collection"?i=t.includes("Table")?"Table":t.includes("Route Layer")?"Route Layer":t.includes("Markup")?"Markup":"Feature Layer":e==="Image Service"?i=t.includes("Elevation 3D Layer")?"Elevation Layer":t.includes("Tiled Imagery")?"Tiled Imagery Layer":"Imagery Layer":e==="Scene Service"?i="Scene Layer":e==="Video Service"?i="Video Layer":e==="Scene Package"?i="Scene Layer Package":e==="Stream Service"?i="Feature Layer":e==="Geoprocessing Service"&&this.portal&&this.portal.isPortal?i=t.includes("Web Tool")?"Tool":"Geoprocessing Service":e==="Geocoding Service"?i="Locator":e==="Geoenrichment Service"?i="GeoEnrichment Service":e==="Microsoft Powerpoint"?i="Microsoft PowerPoint":e==="GeoJson"?i="GeoJSON":e==="Globe Service"?i="Globe Layer":e==="Vector Tile Service"?i="Tile Layer":e==="netCDF"?i="NetCDF":e==="Map Service"?i=t.includes("Spatiotemporal")||!t.includes("Hosted Service")&&!t.includes("Tiled")||t.includes("Relational")?"Map Image Layer":"Tile Layer":e&&e.toLowerCase().includes("add in")?i=e.replace(/(add in)/gi,"Add-In"):e==="datastore catalog service"?i="Big Data File Share":e==="Compact Tile Package"?i="Tile Package (tpkx)":e==="OGCFeatureServer"?i="OGC Feature Layer":e==="web mapping application"&&t.includes("configurableApp")?i="Instant App":e==="Insights Page"&&(i="Insights Report"),i}readExtent(e){return e&&e.length?new O(e[0][0],e[0][1],e[1][0],e[1][1]):null}get iconUrl(){const e=this.type&&this.type.toLowerCase()||"",t=this.typeKeywords||[],i="esri/images/portal/",s="16";let n,c=!1,m=!1,w=!1,f=!1,b=!1,I=!1;return e.indexOf("service")>0||e==="feature collection"||e==="kml"||e==="wms"||e==="wmts"||e==="wfs"?(c=t.includes("Hosted Service"),e==="feature service"||e==="feature collection"||e==="kml"||e==="wfs"?(m=t.includes("Table"),w=t.includes("Route Layer"),f=t.includes("Markup"),b=t.includes("Spatiotemporal"),I=t.includes("UtilityNetwork"),n=b&&m?"spatiotemporaltable":m?"table":w?"routelayer":f?"markup":b?"spatiotemporal":c?"featureshosted":I?"utilitynetwork":"features"):n=e==="map service"||e==="wms"||e==="wmts"?c||t.includes("Tiled")||e==="wmts"?"maptiles":"mapimages":e==="scene service"?t.includes("Line")?"sceneweblayerline":t.includes("3DObject")?"sceneweblayermultipatch":t.includes("Point")?"sceneweblayerpoint":t.includes("IntegratedMesh")?"sceneweblayermesh":t.includes("PointCloud")?"sceneweblayerpointcloud":t.includes("Polygon")?"sceneweblayerpolygon":t.includes("Building")?"sceneweblayerbuilding":t.includes("Voxel")?"sceneweblayervoxel":"sceneweblayer":e==="image service"?t.includes("Elevation 3D Layer")?"elevationlayer":t.includes("Tiled Imagery")?"tiledimagerylayer":"imagery":e==="stream service"?"streamlayer":e==="video service"?"mediaservice":e==="vector tile service"?"vectortile":e==="datastore catalog service"?"datastorecollection":e==="geocoding service"?"geocodeservice":e==="geoprocessing service"?t.includes("Web Tool")&&this.portal&&this.portal.isPortal?"tool":"layers":e==="geodata service"?"geodataservice":"layers"):n=e==="web map"||e==="cityengine web scene"?"maps":e==="web scene"?t.includes("ViewingMode-Local")?"webscenelocal":"websceneglobal":e==="web mapping application"&&t.includes("configurableApp")?"instantapps":e==="web mapping application"||e==="mobile application"||e==="application"||e==="operation view"||e==="desktop application"?"apps":e==="map document"||e==="map package"||e==="published map"||e==="scene document"||e==="globe document"||e==="basemap package"||e==="mobile basemap package"||e==="mobile map package"||e==="project package"||e==="project template"||e==="pro map"||e==="layout"||e==="layer"&&t.includes("ArcGIS Pro")||e==="explorer map"&&t.indexOf("Explorer Document")?"mapsgray":e==="service definition"||e==="csv"||e==="shapefile"||e==="cad drawing"||e==="geojson"||e==="360 vr experience"||e==="netcdf"||e==="administrative report"?"datafiles":e==="explorer add in"||e==="desktop add in"||e==="windows viewer add in"||e==="windows viewer configuration"?"appsgray":e==="arcgis pro add in"||e==="arcgis pro configuration"?"addindesktop":e==="rule package"||e==="file geodatabase"||e==="sqlite geodatabase"||e==="csv collection"||e==="kml collection"||e==="windows mobile package"||e==="map template"||e==="desktop application template"||e==="gml"||e==="arcpad package"||e==="code sample"||e==="form"||e==="document link"||e==="earth configuration"||e==="operations dashboard add in"||e==="rules package"||e==="image"||e==="workflow manager package"||e==="explorer map"&&t.includes("Explorer Mapping Application")||t.includes("Document")?"datafilesgray":e==="network analysis service"||e==="geoprocessing service"||e==="geodata service"||e==="geometry service"||e==="geoprocessing package"||e==="locator package"||e==="geoprocessing sample"||e==="workflow manager service"?"toolsgray":e==="layer"||e==="layer package"||e==="explorer layer"?"layersgray":e==="scene package"?"scenepackage":e==="mobile scene package"?"mobilescenepackage":e==="tile package"||e==="compact tile package"?"tilepackage":e==="task file"?"taskfile":e==="report template"?"report-template":e==="statistical data collection"?"statisticaldatacollection":e==="insights workbook"?"workbook":e==="insights model"?"insightsmodel":e==="insights page"?"insightspage":e==="insights theme"?"insightstheme":e==="hub initiative"?"hubinitiative":e==="hubpage"?"hubpage":e==="hub event"?"hubevent":e==="hub site application"?"hubsite":e==="hub project"?"hubproject":e==="relational database connection"?"relationaldatabaseconnection":e==="big data file share"?"datastorecollection":e==="image collection"?"imagecollection":e==="style"?"style":e==="desktop style"?"desktopstyle":e==="dashboard"?"dashboard":e==="raster function template"?"rasterprocessingtemplate":e==="vector tile package"?"vectortilepackage":e==="ortho mapping project"?"orthomappingproject":e==="ortho mapping template"?"orthomappingtemplate":e==="solution"?"solutions":e==="geopackage"?"geopackage":e==="deep learning package"?"deeplearningpackage":e==="real time analytic"?"realtimeanalytics":e==="big data analytic"?"bigdataanalytics":e==="feed"?"feed":e==="excalibur imagery project"?"excaliburimageryproject":e==="notebook"?"notebook":e==="storymap"?"storymap":e==="survey123 add in"?"survey123addin":e==="mission"?"mission":e==="mission report"?"missionreport":e==="quickcapture project"?"quickcaptureproject":e==="pro report"?"proreport":e==="pro report template"?"proreporttemplate":e==="urban model"?"urbanmodel":e==="web experience"?"experiencebuilder":e==="web experience template"?"webexperiencetemplate":e==="experience builder widget"?"experiencebuilderwidget":e==="experience builder widget package"?"experiencebuilderwidgetpackage":e==="workflow"?"workflow":e==="insights script"?"insightsscript":e==="kernel gateway connection"?"kernelgatewayconnection":e==="hub initiative template"?"hubinitiativetemplate":e==="storymap theme"?"storymaptheme":e==="knowledge graph"?"knowledgegraph":e==="native application"?"nativeapp":e==="native application installer"?"nativeappinstaller":e==="link chart"?"linkchart":e==="investigation"?"investigation":e==="ogcfeatureserver"?"features":e==="pro project"?"proproject":e==="insights workbook package"?"insightsworkbookpackage":e==="apache parquet"?"apacheparquet":e==="notebook code snippets"||e==="notebook code snippet library"?"notebookcodesnippets":e==="suitability model"?"suitabilitymodel":e==="esri classifier definition"?"classifierdefinition":e==="esri classification schema"?"classificationschema":e==="insights data engineering workbook"?"dataengineeringworkbook":e==="insights data engineering model"?"dataengineeringmodel":e==="deep learning studio project"?"deeplearningproject":e==="discussion"?"discussion":e==="allsource project"?"allsourceproject":e==="api key"?"apikey":"maps",n?q(i+n+s+".png"):null}get isLayer(){return this.type!=null&&V.has(this.type)}get itemPageUrl(){var t;const e=(t=this.portal)==null?void 0:t.itemPageUrl;return e&&this.id?`${e}?id=${this.id}`:null}get itemUrl(){var t;const e=(t=this.portal)==null?void 0:t.restUrl;return e&&this.id?`${e}/content/items/${this.id}`:null}get thumbnailUrl(){var i;const e=this.itemUrl,t=this.thumbnail;return e&&t?((i=this.portal)==null?void 0:i.normalizeUrl(`${e}/info/${t}?f=json`))??null:null}get userItemUrl(){const e=this.get("portal.restUrl");if(!e)return null;const t=this.owner||this.get("portal.user.username");return t?`${e}/content/users/${this.ownerFolder?`${t}/${this.ownerFolder}`:t}/items/${this.id}`:null}load(e){const t=this.portal??(this.portal=U.getDefault()),i=t.load(e).then(()=>this.sourceJSON?this.sourceJSON:this.id&&this.itemUrl?t.request(this.itemUrl,{signal:h(e)?e.signal:null,query:{token:this.apiKey}}):{}).then(s=>{this.sourceJSON=s,this.read(s)});return this.addResolvingPromise(i),Promise.resolve(this)}async addRating(e){const t={method:"post",query:{}};return e instanceof k&&(e=e.rating),e==null||isNaN(e)||typeof e!="number"||(t.query.rating=e),this.portal?(await this.portal.request(this.itemUrl+"/addRating",t),new k({rating:e,created:new Date})):null}clone(){const e={access:this.access,accessInformation:this.accessInformation,applicationProxies:l(this.applicationProxies),avgRating:this.avgRating,categories:l(this.categories),created:l(this.created),culture:this.culture,description:this.description,extent:l(this.extent),groupCategories:l(this.groupCategories),id:this.id,itemControl:this.itemControl,licenseInfo:this.licenseInfo,modified:l(this.modified),name:this.name,numComments:this.numComments,numRatings:this.numRatings,numViews:this.numViews,owner:this.owner,ownerFolder:this.ownerFolder,portal:this.portal,screenshots:l(this.screenshots),size:this.size,snippet:this.snippet,sourceUrl:this.sourceUrl,spatialReference:this.spatialReference,tags:l(this.tags),thumbnail:this.thumbnail,title:this.title,type:this.type,typeKeywords:l(this.typeKeywords),url:this.url};this.loaded&&(e.loadStatus="loaded");const t=new d({sourceJSON:this.sourceJSON}).set(e);return t._set("isOrgItem",this.isOrgItem),t}createPostQuery(){const e=this.toJSON();for(const i of["tags","typeKeywords","categories"])e[i]&&(e[i]=e[i].join(", "));const{extent:t}=e;return t&&(e.extent=JSON.stringify(t)),e}async deleteRating(){await u(this.portal).request(this.itemUrl+"/deleteRating",{method:"post"})}fetchData(e="json",t){return u(this.portal).request(this.itemUrl+"/data",{responseType:e,...t,query:{token:this.apiKey}})}async fetchRating(e){const t=await u(this.portal).request(this.itemUrl+"/rating",{query:{token:this.apiKey},...e});return t.rating!=null?(t.created=new Date(t.created),new k(t)):null}fetchRelatedItems(e,t){return u(this.portal).requestToTypedArray(this.itemUrl+"/relatedItems",{query:{...e,token:this.apiKey},...t},d)}getThumbnailUrl(e){let t=this.thumbnailUrl;return t&&e&&(t+=`&w=${e}`),t}reload(){return u(this.portal).request(this.itemUrl??"",{cacheBust:!0,query:{token:this.apiKey}}).then(e=>(this.sourceJSON=e,this.read(e),this))}update(e){return this.id?this.load().then(()=>u(this.portal).signIn()).then(()=>{const t=e&&e.data,i={method:"post"};i.query=this.createPostQuery();for(const s in i.query)i.query[s]===null&&(i.query[s]="");return i.query.clearEmptyFields=!0,t!=null&&(typeof t=="string"?i.query.text=t:typeof t=="object"&&(i.query.text=JSON.stringify(t))),this.portal.request(`${this.userItemUrl}/update`,i).then(()=>this.reload())}):Promise.reject(new y("portal:item-does-not-exist","The item does not exist yet and cannot be updated"))}async copy(e){if(!this.id)throw new y("portal:item-does-not-exist","The item does not exist yet");await this.load();const{portal:t,itemUrl:i}=this;await u(t).signIn();const{copyResources:s,folder:n,tags:c,title:m}=e||{},w={method:"post",query:{copyPrivateResources:s==="all",folder:typeof n=="string"?n:n==null?void 0:n.id,includeResources:!!s,tags:c==null?void 0:c.join(","),title:m}},{itemId:f}=await t.request(`${i}/copy`,w);return new d({id:f,portal:t})}updateThumbnail(e){return this.id?this.load().then(()=>this.portal.signIn()).then(()=>{const t=e.thumbnail,i=e.filename,s={method:"post"};if(typeof t=="string")N(t)?s.query={data:t}:s.query={url:J(t)},h(i)&&(s.query.filename=i);else{const n=new FormData;h(i)?n.append("file",t,i):n.append("file",t),s.body=n}return this.portal.request(`${this.userItemUrl}/updateThumbnail`,s).then(()=>this.reload())}):Promise.reject(new y("portal:item-does-not-exist","The item does not exist yet and cannot be updated"))}async fetchResources(e={},t){return(await g(()=>import("./resourceUtils-a295dbcf.js"),["./resourceUtils-a295dbcf.js","./request-f01affa1.js","./preload-helper-41c905a7.js","./Error-62cc7aff.js","./string-7a2f1d87.js","./typedArrayUtil-70e1d79e.js","./promiseUtils-59dab60c.js"],import.meta.url)).fetchResources(this,e,t)}async addResource(e,t,i){const s=await g(()=>import("./resourceUtils-a295dbcf.js"),["./resourceUtils-a295dbcf.js","./request-f01affa1.js","./preload-helper-41c905a7.js","./Error-62cc7aff.js","./string-7a2f1d87.js","./typedArrayUtil-70e1d79e.js","./promiseUtils-59dab60c.js"],import.meta.url);return e.portalItem=this,s.addOrUpdateResource(e,"add",t,i)}async removeResource(e,t){const i=await g(()=>import("./resourceUtils-a295dbcf.js"),["./resourceUtils-a295dbcf.js","./request-f01affa1.js","./preload-helper-41c905a7.js","./Error-62cc7aff.js","./string-7a2f1d87.js","./typedArrayUtil-70e1d79e.js","./promiseUtils-59dab60c.js"],import.meta.url);if(e.portalItem&&e.portalItem.itemUrl!==this.itemUrl)throw new y("removeresource:portal-item-mismatch","The portal item associated with the provided resource does not match the item");return i.removeResource(this,e,t)}async removeAllResources(e){return(await g(()=>import("./resourceUtils-a295dbcf.js"),["./resourceUtils-a295dbcf.js","./request-f01affa1.js","./preload-helper-41c905a7.js","./Error-62cc7aff.js","./string-7a2f1d87.js","./typedArrayUtil-70e1d79e.js","./promiseUtils-59dab60c.js"],import.meta.url)).removeAllResources(this,e)}resourceFromPath(e){return new K({portalItem:this,path:e})}toJSON(){const e=this.extent,t={accessInformation:this.accessInformation,categories:l(this.categories),created:this.created&&this.created.getTime(),description:this.description,extent:e&&[[e.xmin,e.ymin],[e.xmax,e.ymax]],id:this.id,isOrgItem:this.isOrgItem,licenseInfo:this.licenseInfo,modified:this.modified&&this.modified.getTime(),name:this.name,owner:this.owner,ownerFolder:this.ownerFolder,snippet:this.snippet,sourceUrl:this.sourceUrl,spatialReference:this.spatialReference,tags:l(this.tags),thumbnail:this.thumbnail,title:this.title,type:this.type,typeKeywords:l(this.typeKeywords),url:this.url};return j(t)}static fromJSON(e){if(!e)return null;if(e.declaredClass)throw new Error("JSON object is already hydrated");return new d({sourceJSON:e})}_getPostQuery(){const e=this.toJSON();for(const t in e)t==="tags"&&e[t]!==null&&(e[t]=e[t].join(", ")),t==="typeKeywords"&&e[t]!==null&&(e[t]=e[t].join(", ")),t==="extent"&&e[t]&&(e[t]=JSON.stringify(e[t]));return e}};r([o({type:["private","shared","org","public"]})],a.prototype,"access",void 0),r([o()],a.prototype,"accessInformation",void 0),r([o({type:String})],a.prototype,"apiKey",void 0),r([o({json:{read:{source:"appProxies"}}})],a.prototype,"applicationProxies",void 0),r([o()],a.prototype,"avgRating",void 0),r([o()],a.prototype,"categories",void 0),r([o({type:Date})],a.prototype,"created",void 0),r([o()],a.prototype,"culture",void 0),r([o()],a.prototype,"description",void 0),r([o({readOnly:!0})],a.prototype,"displayName",null),r([o({type:O})],a.prototype,"extent",void 0),r([E("extent")],a.prototype,"readExtent",null),r([o()],a.prototype,"groupCategories",void 0),r([o({readOnly:!0})],a.prototype,"iconUrl",null),r([o()],a.prototype,"id",void 0),r([o({readOnly:!0})],a.prototype,"isLayer",null),r([o({type:Boolean,readOnly:!0})],a.prototype,"isOrgItem",void 0),r([o()],a.prototype,"itemControl",void 0),r([o({readOnly:!0})],a.prototype,"itemPageUrl",null),r([o({readOnly:!0})],a.prototype,"itemUrl",null),r([o()],a.prototype,"licenseInfo",void 0),r([o({type:Date})],a.prototype,"modified",void 0),r([o()],a.prototype,"name",void 0),r([o()],a.prototype,"numComments",void 0),r([o()],a.prototype,"numRatings",void 0),r([o()],a.prototype,"numViews",void 0),r([o()],a.prototype,"owner",void 0),r([o()],a.prototype,"ownerFolder",void 0),r([o({type:U})],a.prototype,"portal",void 0),r([o()],a.prototype,"screenshots",void 0),r([o()],a.prototype,"size",void 0),r([o()],a.prototype,"snippet",void 0),r([o()],a.prototype,"sourceJSON",void 0),r([o({type:String})],a.prototype,"sourceUrl",void 0),r([o({type:String})],a.prototype,"spatialReference",void 0),r([o()],a.prototype,"tags",void 0),r([o()],a.prototype,"thumbnail",void 0),r([o({readOnly:!0})],a.prototype,"thumbnailUrl",null),r([o()],a.prototype,"title",void 0),r([o()],a.prototype,"type",void 0),r([o()],a.prototype,"typeKeywords",void 0),r([o({type:String,json:{read(e,t){var i;if(A.has(t.type)){const s=(i=this.portal)==null?void 0:i.restUrl;e||(e=s&&this.id?`${s}/content/items/${this.id}/data`:null)}return e}}})],a.prototype,"url",void 0),r([o({readOnly:!0})],a.prototype,"userItemUrl",null),a=d=r([S("esri.portal.PortalItem")],a);const le=a;export{le as default};
