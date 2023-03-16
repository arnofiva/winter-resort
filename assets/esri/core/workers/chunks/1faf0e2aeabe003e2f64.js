"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[9771,6502],{3388:(e,t,r)=>{var s;r.d(t,{i:()=>s}),function(e){e[e.PROJECT_VERTICES=1]="PROJECT_VERTICES"}(s||(s={}))},61159:(e,t,r)=>{r.d(t,{g:()=>s});const s={supportsStatistics:!0,supportsPercentileStatistics:!0,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsCentroid:!0,supportsCacheHint:!1,supportsDistance:!0,supportsDistinct:!0,supportsExtent:!0,supportsGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQuantization:!0,supportsQuantizationEditMode:!1,supportsQueryGeometry:!0,supportsResultType:!1,supportsSqlExpression:!0,supportsMaxRecordCountFactor:!1,supportsStandardizedQueriesOnly:!0,supportsTopFeaturesQuery:!1,supportsQueryByOthers:!0,supportsHistoricMoment:!1,supportsFormatPBF:!1,supportsDisjointSpatialRelationship:!0,supportsDefaultSpatialReference:!1,supportsFullTextSearch:!1,supportsCompactGeometry:!1,maxRecordCountFactor:void 0,maxRecordCount:void 0,standardMaxRecordCount:void 0,tileMaxRecordCount:void 0}},6502:(e,t,r)=>{r.r(t),r.d(t,{default:()=>v});var s=r(43697),a=(r(66577),r(38171)),o=r(3172),n=r(92835),i=r(20102),u=r(80442),l=r(35454),d=r(83379),c=r(70586),p=r(78286),h=r(95330),y=r(17452),f=r(5600),m=(r(75215),r(67676),r(52011)),g=r(6570),_=r(33955),b=r(3388),R=r(25278),F=r(74654),S=r(66677),C=r(59431),w=r(82971);const q=new l.X({originalAndCurrentFeatures:"original-and-current-features",none:"none"});async function O(e){return"string"==typeof e?(0,y.sJ)(e)||{data:e}:new Promise(((t,r)=>{const s=new FileReader;s.readAsDataURL(e),s.onload=()=>t((0,y.sJ)(s.result)),s.onerror=e=>r(e)}))}const x=new Set(["Feature Layer","Table"]),I=new l.X({Started:"published",Publishing:"publishing",Stopped:"unavailable"});let T=class extends d.Z{constructor(){super(...arguments),this.type="feature-layer",this.refresh=(0,h.Ds)((async()=>{await this.load();const e=this.sourceJSON.editingInfo?.lastEditDate;if(null==e)return{dataChanged:!0,updates:{}};try{await this._fetchService(null)}catch{return{dataChanged:!0,updates:{}}}const t=e!==this.sourceJSON.editingInfo?.lastEditDate;return{dataChanged:t,updates:t?{editingInfo:this.sourceJSON.editingInfo,extent:this.sourceJSON.extent}:null}}))}load(e){const t=(0,c.pC)(e)?e.signal:null,r=this.layer.sourceJSON;return this.addResolvingPromise(this._fetchService(r,t)),Promise.resolve(this)}get queryTask(){const{capabilities:e,parsedUrl:t,dynamicDataSource:r,infoFor3D:s,gdbVersion:a,spatialReference:o,fieldsIndex:n}=this.layer,i=(0,u.Z)("featurelayer-pbf")&&e?.query.supportsFormatPBF&&(0,c.Wi)(s),l=e?.operations?.supportsQueryAttachments??!1;return new F.Z({url:t.path,pbfSupported:i,fieldsIndex:n,infoFor3D:s,dynamicDataSource:r,gdbVersion:a,sourceSpatialReference:o,queryAttachmentsSupported:l})}async addAttachment(e,t){await this.load();const r=e.attributes[this.layer.objectIdField],s=this.layer.parsedUrl.path+"/"+r+"/addAttachment",a=this._getLayerRequestOptions(),n=this._getFormDataForAttachment(t,a.query);try{const e=await(0,o.default)(s,{body:n});return this._createFeatureEditResult(e.data.addAttachmentResult)}catch(e){throw this._createAttachmentErrorResult(r,e)}}async updateAttachment(e,t,r){await this.load();const s=e.attributes[this.layer.objectIdField],a=this.layer.parsedUrl.path+"/"+s+"/updateAttachment",n=this._getLayerRequestOptions({query:{attachmentId:t}}),i=this._getFormDataForAttachment(r,n.query);try{const e=await(0,o.default)(a,{body:i});return this._createFeatureEditResult(e.data.updateAttachmentResult)}catch(e){throw this._createAttachmentErrorResult(s,e)}}async applyEdits(e,t){await this.load();const r=this.layer.infoFor3D,s=(0,c.pC)(r),a=s||(t?.globalIdUsed??!1),n=e.addFeatures?.map((e=>this._serializeFeature(e,r))).filter(c.pC)??[],i=e.updateFeatures?.map((e=>this._serializeFeature(e,r))).filter(c.pC)??[],u=this._getFeatureIds(e.deleteFeatures,a);(0,C.P)(n,i,this.layer.spatialReference);const l=[],d=[],p=[...e.deleteAttachments??[]];for(const t of e.addAttachments??[])l.push(await this._serializeAttachment(t));for(const t of e.updateAttachments??[])d.push(await this._serializeAttachment(t));const h=l.length||d.length||p.length?{adds:l,updates:d,deletes:p}:null;let y,f=null;if(s){f=new Map;const t=[];for(const r of e.addAssets??[])t.push(this._serializeAssetMapEditAndUploadAssets(r,f));const r=await Promise.all(t);y=r.length?{adds:r,updates:[],deletes:[]}:void 0}const m={gdbVersion:t?.gdbVersion||this.layer.gdbVersion,rollbackOnFailure:t?.rollbackOnFailureEnabled,useGlobalIds:a,returnEditMoment:t?.returnEditMoment,usePreviousEditMoment:t?.usePreviousEditMoment,sessionId:t?.sessionId};t?.returnServiceEditsOption?(m.edits=JSON.stringify([{id:this.layer.layerId,adds:n,updates:i,deletes:u,attachments:h,assetMaps:(0,c.Wg)(y)}]),m.returnServiceEditsOption=q.toJSON(t?.returnServiceEditsOption),m.returnServiceEditsInSourceSR=t?.returnServiceEditsInSourceSR):(m.adds=n.length?JSON.stringify(n):null,m.updates=i.length?JSON.stringify(i):null,m.deletes=u.length?a?JSON.stringify(u):u.join(","):null,m.attachments=h&&JSON.stringify(h),m.assetMaps=(0,c.pC)(y)?JSON.stringify(y):void 0);const g=this._getLayerRequestOptions({method:"post",query:m}),_=t?.returnServiceEditsOption?this.layer.url:this.layer.parsedUrl.path,b=await(0,o.default)(_+"/applyEdits",g);if(s&&null!=b.data&&null!=b.data.assetMaps){const e=b.data,t=this.layer.objectIdField,r=[];for(const t of e.addResults)t.success&&r.push(t.objectId);for(const t of e.updateResults)t.success&&r.push(t.objectId);const s=this._createRequestQueryOptions(),a=await(0,o.default)(_+"/query",{...s,query:{f:"json",formatOf3DObjects:"3D_glb",where:`OBJECTID IN (${r.join(",")})`,outFields:`${t}`}});if(a&&a.data&&a.data.assetMaps&&(0,c.pC)(f)){const e=a.data.assetMaps;for(const t of e){const e=f.get(t.parentGlobalId).geometry;(0,c.pC)(e)&&"mesh"===e.type&&e.updateExternalSource({source:[{name:t.assetName,source:t.assetName}],extent:e.extent})}}}return this._createEditsResult(b)}async deleteAttachments(e,t){await this.load();const r=e.attributes[this.layer.objectIdField],s=this.layer.parsedUrl.path+"/"+r+"/deleteAttachments";try{return(await(0,o.default)(s,this._getLayerRequestOptions({query:{attachmentIds:t.join(",")},method:"post"}))).data.deleteAttachmentResults.map(this._createFeatureEditResult)}catch(e){throw this._createAttachmentErrorResult(r,e)}}fetchRecomputedExtents(e={}){const t=e.signal;return this.load({signal:t}).then((async()=>{const t=this._getLayerRequestOptions({...e,query:{returnUpdates:!0}}),{layerId:r,url:s}=this.layer,{data:a}=await(0,o.default)(`${s}/${r}`,t),{id:i,extent:u,fullExtent:l,timeExtent:d}=a,c=u||l;return{id:i,fullExtent:c&&g.Z.fromJSON(c),timeExtent:d&&n.Z.fromJSON({start:d[0],end:d[1]})}}))}async queryAttachments(e,t={}){await this.load();const r=this._getLayerRequestOptions(t);return this.queryTask.executeAttachmentQuery(e,r)}async queryFeatures(e,t){return await this.load(),this.queryTask.execute(e,{...t,query:this._createRequestQueryOptions(t)})}async queryFeaturesJSON(e,t){return await this.load(),this.queryTask.executeJSON(e,{...t,query:this._createRequestQueryOptions(t)})}async queryObjectIds(e,t){return await this.load(),this.queryTask.executeForIds(e,{...t,query:this._createRequestQueryOptions(t)})}async queryFeatureCount(e,t){return await this.load(),this.queryTask.executeForCount(e,{...t,query:this._createRequestQueryOptions(t)})}async queryExtent(e,t){return await this.load(),this.queryTask.executeForExtent(e,{...t,query:this._createRequestQueryOptions(t)})}async queryRelatedFeatures(e,t){return await this.load(),this.queryTask.executeRelationshipQuery(e,{...t,query:this._createRequestQueryOptions(t)})}async queryRelatedFeaturesCount(e,t){return await this.load(),this.queryTask.executeRelationshipQueryForCount(e,{...t,query:this._createRequestQueryOptions(t)})}async queryTopFeatures(e,t){return await this.load(),this.queryTask.executeTopFeaturesQuery(e,{...t,query:this._createRequestQueryOptions(t)})}async queryTopObjectIds(e,t){return await this.load(),this.queryTask.executeForTopIds(e,{...t,query:this._createRequestQueryOptions(t)})}async queryTopExtents(e,t){return await this.load(),this.queryTask.executeForTopExtents(e,{...t,query:this._createRequestQueryOptions(t)})}async queryTopCount(e,t){return await this.load(),this.queryTask.executeForTopCount(e,{...t,query:this._createRequestQueryOptions(t)})}async fetchPublishingStatus(){if(!(0,S.M8)(this.layer.url))return"unavailable";const e=(0,y.v_)(this.layer.url,"status"),t=await(0,o.default)(e,{query:{f:"json"}});return I.fromJSON(t.data.status)}_createRequestQueryOptions(e){const t={...this.layer.customParameters,token:this.layer.apiKey,...e?.query};return this.layer.datesInUnknownTimezone&&(t.timeReferenceUnknownClient=!0),t}async _fetchService(e,t){if(!e){const{data:r}=await(0,o.default)(this.layer.parsedUrl.path,this._getLayerRequestOptions({query:(0,u.Z)("featurelayer-advanced-symbols")?{returnAdvancedSymbols:!0}:{},signal:t}));e=r}this.sourceJSON=this._patchServiceJSON(e);const r=e.type;if(!x.has(r))throw new i.Z("feature-layer-source:unsupported-type",`Source type "${r}" is not supported`)}_patchServiceJSON(e){if("Table"!==e.type&&e.geometryType&&!e?.drawingInfo?.renderer&&!e.defaultSymbol){const t=(0,R.bU)(e.geometryType).renderer;(0,p.RB)("drawingInfo.renderer",t,e)}return"esriGeometryMultiPatch"===e.geometryType&&e.infoFor3D&&(e.geometryType="mesh"),e}_serializeFeature(e,t){const{geometry:r,attributes:s}=e;if((0,c.pC)(t)&&(0,c.pC)(e.geometry)&&"mesh"===e.geometry.type){const r={...s},a=e.geometry,o=a.origin,n=a.transform;if(r[t.transformFieldRoles.originX]=o.x,r[t.transformFieldRoles.originY]=o.y,r[t.transformFieldRoles.originZ]=o.z,(0,c.pC)(n)){const e=n.translation,s=n.scale,a=n.rotation;r[t.transformFieldRoles.translationX]=e[0],r[t.transformFieldRoles.translationY]=-e[2],r[t.transformFieldRoles.translationZ]=e[1],r[t.transformFieldRoles.scaleX]=s[0],r[t.transformFieldRoles.scaleY]=s[1],r[t.transformFieldRoles.scaleZ]=s[2],r[t.transformFieldRoles.rotationX]=a[0],r[t.transformFieldRoles.rotationY]=a[2],r[t.transformFieldRoles.rotationZ]=a[1],r[t.transformFieldRoles.rotationDeg]=a[3]}return{geometry:null,attributes:r}}return(0,c.Wi)(r)?{attributes:s}:"mesh"===r.type||"extent"===r.type?null:{geometry:r.toJSON(),attributes:s}}async _serializeAttachment(e){const{feature:t,attachment:r}=e,{globalId:s,name:a,contentType:o,data:n,uploadId:i}=r,u={globalId:s,parentGlobalId:null,contentType:null,name:null,uploadId:null,data:null};if(t&&(u.parentGlobalId="attributes"in t?t.attributes&&t.attributes[this.layer.globalIdField]:t.globalId),i)u.uploadId=i;else if(n){const e=await O(n);e&&(u.contentType=e.mediaType,u.data=e.data),n instanceof File&&(u.name=n.name)}return a&&(u.name=a),o&&(u.contentType=o),u}async _serializeAssetMapEditAndUploadAssets(e,t){const r=this.layer.url;let s=null;try{const t=new Blob([e.data],{type:e.mimeType}),a=new FormData;a.append("f","json"),a.append("file",t,`${e.assetName}`);const n={body:a,method:"post",responseType:"json"},{data:u}=await(0,o.default)(`${r}/uploads/upload`,n);if(!u.success)throw new i.Z("feature-layer-source:upload-failure","Expected upload to be successfull.");s={assetType:e.assetType,assetUploadId:u.item.itemID}}catch(e){s=null}if((0,c.Wi)(s)){const t=await O(new Blob([e.data]));if(!t.isBase64)throw new i.Z("feature-layer-source:uploadAssets-failure","Expected gltf data in base64 format after conversion.");s={assetType:e.assetType,assetData:t.data}}if((0,c.Wi)(s))throw new i.Z("feature-layer-source:uploadAssets-failure","Unable to prepare uploadAsset request options.");const a={method:"post",query:{f:"json",assets:JSON.stringify([s])},responseType:"json"},n=await(0,o.default)((0,y.v_)(this.layer.parsedUrl.path,"uploadAssets"),a);if(1!==n.data.uploadResults.length||!n.data.uploadResults[0].success)throw new i.Z("feature-layer-source:uploadAssets-failure","Bad response.");const u=n.data.uploadResults[0].assetHash,l=[];e.flags&b.i.PROJECT_VERTICES&&l.push("PROJECT_VERTICES");const d={globalId:e.assetMapGlobalId,parentGlobalId:e.featureGlobalId,assetName:e.assetName,assetHash:u,flags:l};return t.set(e.featureGlobalId,e.feature),d}_getFeatureIds(e,t){const r=e?.[0];return r?this._canUseGlobalIds(t,e)?this._getGlobalIdsFromFeatureIdentifier(e):"objectId"in r?this._getObjectIdsFromFeatureIdentifier(e):this._getIdsFromFeatures(e):[]}_getIdsFromFeatures(e){const t=this.layer.objectIdField;return e.map((e=>e.attributes&&e.attributes[t]))}_canUseGlobalIds(e,t){return e&&"globalId"in t[0]}_getObjectIdsFromFeatureIdentifier(e){return e.map((e=>e.objectId))}_getGlobalIdsFromFeatureIdentifier(e){return e.map((e=>e.globalId))}_createEditsResult(e){const t=e.data,{layerId:r}=this.layer,s=[];let a=null;if(Array.isArray(t))for(const e of t)s.push({id:e.id,editedFeatures:e.editedFeatures}),e.id===r&&(a={addResults:e.addResults??[],updateResults:e.updateResults??[],deleteResults:e.deleteResults??[],attachments:e.attachments,editMoment:e.editMoment});else a=t;const o=a?.attachments,n={addFeatureResults:a?.addResults?.map(this._createFeatureEditResult,this)??[],updateFeatureResults:a?.updateResults?.map(this._createFeatureEditResult,this)??[],deleteFeatureResults:a?.deleteResults?.map(this._createFeatureEditResult,this)??[],addAttachmentResults:o&&o.addResults?o.addResults.map(this._createFeatureEditResult,this):[],updateAttachmentResults:o&&o.updateResults?o.updateResults.map(this._createFeatureEditResult,this):[],deleteAttachmentResults:o&&o.deleteResults?o.deleteResults.map(this._createFeatureEditResult,this):[]};if(a?.editMoment&&(n.editMoment=a.editMoment),s.length>0){n.editedFeatureResults=[];for(const e of s){const{adds:t,updates:r,deletes:s,spatialReference:a}=e.editedFeatures,o=a?new w.Z(a):null;n.editedFeatureResults.push({layerId:e.id,editedFeatures:{adds:t?.map((e=>this._createEditedFeature(e,o)))||[],updates:r?.map((e=>({original:this._createEditedFeature(e[0],o),current:this._createEditedFeature(e[1],o)})))||[],deletes:s?.map((e=>this._createEditedFeature(e,o)))||[],spatialReference:o}})}}return n}_createEditedFeature(e,t){return new a.Z({attributes:e.attributes,geometry:(0,_.im)({...e.geometry,spatialReference:t})})}_createFeatureEditResult(e){const t=!0===e.success?null:e.error||{code:void 0,description:void 0};return{objectId:e.objectId,globalId:e.globalId,error:t?new i.Z("feature-layer-source:edit-failure",t.description,{code:t.code}):null}}_createAttachmentErrorResult(e,t){const r=t.details.messages&&t.details.messages[0]||t.message,s=t.details.httpStatus||t.details.messageCode;return{objectId:e,globalId:null,error:new i.Z("feature-layer-source:attachment-failure",r,{code:s})}}_getFormDataForAttachment(e,t){const r=e instanceof FormData?e:e&&e.elements?new FormData(e):null;if(r)for(const e in t){const s=t[e];null!=s&&(r.set?r.set(e,s):r.append(e,s))}return r}_getLayerRequestOptions(e={}){const{parsedUrl:t,gdbVersion:r,dynamicDataSource:s}=this.layer;return{...e,query:{gdbVersion:r,layer:s?JSON.stringify({source:s}):void 0,...t.query,f:"json",...this._createRequestQueryOptions(e)},responseType:"json"}}};(0,s._)([(0,f.Cb)()],T.prototype,"type",void 0),(0,s._)([(0,f.Cb)({constructOnly:!0})],T.prototype,"layer",void 0),(0,s._)([(0,f.Cb)({readOnly:!0})],T.prototype,"queryTask",null),T=(0,s._)([(0,m.j)("esri.layers.graphics.sources.FeatureLayerSource")],T);const v=T},74654:(e,t,r)=>{r.d(t,{Z:()=>A});var s=r(43697),a=r(15923),o=r(20102),n=r(80442),i=r(70586),u=r(95330),l=r(17452),d=r(5600),c=(r(75215),r(67676),r(52011)),p=r(10158),h=r(11282),y=r(41818),f=(r(66577),r(34599)),m=r(14165),g=r(6570),_=r(5396),b=r(4967),R=r(69285),F=r(98732);function S(e,t){return t}function C(e,t,r,s){switch(r){case 0:return x(e,t+s,0);case 1:return"lowerLeft"===e.originPosition?x(e,t+s,1):function({translate:e,scale:t},r,s){return e[s]-r*t[s]}(e,t+s,1)}}function w(e,t,r,s){return 2===r?x(e,t,2):C(e,t,r,s)}function q(e,t,r,s){return 2===r?x(e,t,3):C(e,t,r,s)}function O(e,t,r,s){return 3===r?x(e,t,3):w(e,t,r,s)}function x({translate:e,scale:t},r,s){return e[s]+r*t[s]}class I{constructor(e){this._options=e,this.geometryTypes=["esriGeometryPoint","esriGeometryMultipoint","esriGeometryPolyline","esriGeometryPolygon"],this._previousCoordinate=[0,0],this._transform=null,this._applyTransform=S,this._lengths=[],this._currentLengthIndex=0,this._toAddInCurrentPath=0,this._vertexDimension=0,this._coordinateBuffer=null,this._coordinateBufferPtr=0,this._attributesConstructor=class{}}createFeatureResult(){return{fields:[],features:[]}}finishFeatureResult(e){if(this._options.applyTransform&&(e.transform=null),this._attributesConstructor=class{},this._coordinateBuffer=null,this._lengths.length=0,!e.hasZ)return;const t=(0,R.k)(e.geometryType,this._options.sourceSpatialReference,e.spatialReference);if(!(0,i.Wi)(t))for(const r of e.features)t(r.geometry)}createSpatialReference(){return{}}addField(e,t){const r=e.fields;(0,i.O3)(r),r.push(t);const s=r.map((e=>e.name));this._attributesConstructor=function(){for(const e of s)this[e]=null}}addFeature(e,t){e.features.push(t)}prepareFeatures(e){switch(this._transform=e.transform,this._options.applyTransform&&e.transform&&(this._applyTransform=this._deriveApplyTransform(e)),this._vertexDimension=2,e.hasZ&&this._vertexDimension++,e.hasM&&this._vertexDimension++,e.geometryType){case"esriGeometryPoint":this.addCoordinate=(e,t,r)=>this.addCoordinatePoint(e,t,r),this.createGeometry=e=>this.createPointGeometry(e);break;case"esriGeometryPolygon":this.addCoordinate=(e,t,r)=>this._addCoordinatePolygon(e,t,r),this.createGeometry=e=>this._createPolygonGeometry(e);break;case"esriGeometryPolyline":this.addCoordinate=(e,t,r)=>this._addCoordinatePolyline(e,t,r),this.createGeometry=e=>this._createPolylineGeometry(e);break;case"esriGeometryMultipoint":this.addCoordinate=(e,t,r)=>this._addCoordinateMultipoint(e,t,r),this.createGeometry=e=>this._createMultipointGeometry(e)}}createFeature(){return this._lengths.length=0,this._currentLengthIndex=0,this._previousCoordinate[0]=0,this._previousCoordinate[1]=0,this._coordinateBuffer=null,this._coordinateBufferPtr=0,{attributes:new this._attributesConstructor}}allocateCoordinates(){}addLength(e,t,r){0===this._lengths.length&&(this._toAddInCurrentPath=t),this._lengths.push(t)}addQueryGeometry(e,t){const{queryGeometry:r,queryGeometryType:s}=t,a=(0,F.$g)(r.clone(),r,!1,!1,this._transform),o=(0,F.di)(a,s,!1,!1);e.queryGeometryType=s,e.queryGeometry={...o}}createPointGeometry(e){const t={x:0,y:0,spatialReference:e.spatialReference};return e.hasZ&&(t.z=0),e.hasM&&(t.m=0),t}addCoordinatePoint(e,t,r){const s=(0,i.s3)(this._transform,"transform");switch(t=this._applyTransform(s,t,r,0),r){case 0:e.x=t;break;case 1:e.y=t;break;case 2:"z"in e?e.z=t:e.m=t;break;case 3:e.m=t}}_transformPathLikeValue(e,t){let r=0;t<=1&&(r=this._previousCoordinate[t],this._previousCoordinate[t]+=e);const s=(0,i.s3)(this._transform,"transform");return this._applyTransform(s,e,t,r)}_addCoordinatePolyline(e,t,r){this._dehydratedAddPointsCoordinate(e.paths,t,r)}_addCoordinatePolygon(e,t,r){this._dehydratedAddPointsCoordinate(e.rings,t,r)}_addCoordinateMultipoint(e,t,r){0===r&&e.points.push([]);const s=this._transformPathLikeValue(t,r);e.points[e.points.length-1].push(s)}_createPolygonGeometry(e){return{rings:[[]],spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM}}_createPolylineGeometry(e){return{paths:[[]],spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM}}_createMultipointGeometry(e){return{points:[],spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM}}_dehydratedAddPointsCoordinate(e,t,r){0===r&&0==this._toAddInCurrentPath--&&(e.push([]),this._toAddInCurrentPath=this._lengths[++this._currentLengthIndex]-1,this._previousCoordinate[0]=0,this._previousCoordinate[1]=0);const s=this._transformPathLikeValue(t,r),a=e[e.length-1];0===r&&(this._coordinateBufferPtr=0,this._coordinateBuffer=new Array(this._vertexDimension),a.push(this._coordinateBuffer)),this._coordinateBuffer[this._coordinateBufferPtr++]=s}_deriveApplyTransform(e){const{hasZ:t,hasM:r}=e;return t&&r?O:t?w:r?q:C}}var T=r(74889);let v=class extends a.Z{constructor(e){super(e),this.dynamicDataSource=null,this.fieldsIndex=null,this.gdbVersion=null,this.infoFor3D=null,this.pbfSupported=!1,this.queryAttachmentsSupported=!1,this.sourceSpatialReference=null,this.url=null}get parsedUrl(){return(0,l.mN)(this.url)}async execute(e,t){const r=await this.executeJSON(e,t);return this.featureSetFromJSON(e,r,t)}async executeJSON(e,t){const r=this._normalizeQuery(e),s=null!=e.outStatistics?.[0],a=(0,n.Z)("featurelayer-pbf-statistics"),o=!s||a;let i;if(this.pbfSupported&&o)try{i=await async function(e,t,r){const s=(0,h.en)(e),a={...r},o=m.Z.from(t),n=!o.quantizationParameters,{data:i}=await(0,f.qp)(s,o,new I({sourceSpatialReference:o.sourceSpatialReference,applyTransform:n}),a);return i}(this.url,r,t)}catch(e){if("query:parsing-pbf"!==e.name)throw e;this.pbfSupported=!1}return this.pbfSupported&&o||(i=await(0,b.F)(this.url,r,t)),this._normalizeFields(i.fields),i}async featureSetFromJSON(e,t,s){if(!this._queryIs3DObjectFormat(e)||(0,i.Wi)(this.infoFor3D)||!t.assetMaps||!t.features||!t.features.length)return T.Z.fromJSON(t);const{meshFeatureSetFromJSON:a}=await(0,u.Hl)(Promise.all([r.e(6481),r.e(6459),r.e(1932)]).then(r.bind(r,21932)),s);return a(e,this.infoFor3D,t)}executeForCount(e,t){return(0,y.P)(this.url,this._normalizeQuery(e),t)}executeForExtent(e,t){return async function(e,t,r){const s=(0,h.en)(e);return(0,f.Vr)(s,m.Z.from(t),{...r}).then((e=>({count:e.data.count,extent:g.Z.fromJSON(e.data.extent)})))}(this.url,this._normalizeQuery(e),t)}executeForIds(e,t){return(0,_.G)(this.url,this._normalizeQuery(e),t)}async executeRelationshipQuery(e,t){const[{default:s},{executeRelationshipQuery:a}]=await(0,u.Hl)(Promise.all([r.e(5935).then(r.bind(r,75935)),r.e(1073).then(r.bind(r,81073))]),t);return e=s.from(e),(this.gdbVersion||this.dynamicDataSource)&&((e=e.clone()).gdbVersion=e.gdbVersion||this.gdbVersion,e.dynamicDataSource=e.dynamicDataSource||this.dynamicDataSource),a(this.url,e,t)}async executeRelationshipQueryForCount(e,t){const[{default:s},{executeRelationshipQueryForCount:a}]=await(0,u.Hl)(Promise.all([r.e(5935).then(r.bind(r,75935)),r.e(1073).then(r.bind(r,81073))]),t);return e=s.from(e),(this.gdbVersion||this.dynamicDataSource)&&((e=e.clone()).gdbVersion=e.gdbVersion||this.gdbVersion,e.dynamicDataSource=e.dynamicDataSource||this.dynamicDataSource),a(this.url,e,t)}async executeAttachmentQuery(e,t){const{executeAttachmentQuery:s,fetchAttachments:a,processAttachmentQueryResult:o}=await(0,u.Hl)(r.e(540).then(r.bind(r,30540)),t),n=(0,h.en)(this.url);return o(n,await(this.queryAttachmentsSupported?s(n,e,t):a(n,e,t)))}async executeTopFeaturesQuery(e,t){const{executeTopFeaturesQuery:s}=await(0,u.Hl)(r.e(1158).then(r.bind(r,71158)),t);return s(this.parsedUrl,e,this.sourceSpatialReference,t)}async executeForTopIds(e,t){const{executeForTopIds:s}=await(0,u.Hl)(r.e(3992).then(r.bind(r,33992)),t);return s(this.parsedUrl,e,t)}async executeForTopExtents(e,t){const{executeForTopExtents:s}=await(0,u.Hl)(r.e(1790).then(r.bind(r,21790)),t);return s(this.parsedUrl,e,t)}async executeForTopCount(e,t){const{executeForTopCount:s}=await(0,u.Hl)(r.e(4371).then(r.bind(r,14371)),t);return s(this.parsedUrl,e,t)}_normalizeQuery(e){let t=m.Z.from(e);if(t.sourceSpatialReference=t.sourceSpatialReference||this.sourceSpatialReference,(this.gdbVersion||this.dynamicDataSource)&&(t=t===e?t.clone():t,t.gdbVersion=e.gdbVersion||this.gdbVersion,t.dynamicDataSource=e.dynamicDataSource?p.n.from(e.dynamicDataSource):this.dynamicDataSource),(0,i.pC)(this.infoFor3D)&&this._queryIs3DObjectFormat(e)){t=t===e?t.clone():t,t.formatOf3DObjects=null;for(const e of this.infoFor3D.queryFormats){if("3D_glb"===e){t.formatOf3DObjects=e;break}"3D_gltf"!==e||t.formatOf3DObjects||(t.formatOf3DObjects=e)}if(!t.formatOf3DObjects)throw new o.Z("query:unsupported-3d-query-formats","Could not find any supported 3D object query format. Only supported formats are 3D_glb and 3D_gltf");if((0,i.Wi)(t.outFields)||!t.outFields.includes("*")){t=t===e?t.clone():t,(0,i.Wi)(t.outFields)&&(t.outFields=[]);const{originX:r,originY:s,originZ:a,translationX:o,translationY:n,translationZ:u,scaleX:l,scaleY:d,scaleZ:c,rotationX:p,rotationY:h,rotationZ:y,rotationDeg:f}=this.infoFor3D.transformFieldRoles;t.outFields.push(r,s,a,o,n,u,l,d,c,p,h,y,f)}}return t}_normalizeFields(e){if((0,i.pC)(this.fieldsIndex)&&(0,i.pC)(e))for(const t of e){const e=this.fieldsIndex.get(t.name);e&&Object.assign(t,e.toJSON())}}_queryIs3DObjectFormat(e){return(0,i.pC)(this.infoFor3D)&&!0===e.returnGeometry&&"xyFootprint"!==e.multipatchOption&&!e.outStatistics}};(0,s._)([(0,d.Cb)({type:p.n})],v.prototype,"dynamicDataSource",void 0),(0,s._)([(0,d.Cb)()],v.prototype,"fieldsIndex",void 0),(0,s._)([(0,d.Cb)()],v.prototype,"gdbVersion",void 0),(0,s._)([(0,d.Cb)()],v.prototype,"infoFor3D",void 0),(0,s._)([(0,d.Cb)({readOnly:!0})],v.prototype,"parsedUrl",null),(0,s._)([(0,d.Cb)()],v.prototype,"pbfSupported",void 0),(0,s._)([(0,d.Cb)()],v.prototype,"queryAttachmentsSupported",void 0),(0,s._)([(0,d.Cb)()],v.prototype,"sourceSpatialReference",void 0),(0,s._)([(0,d.Cb)({type:String})],v.prototype,"url",void 0),v=(0,s._)([(0,c.j)("esri.tasks.QueryTask")],v);const A=v},25278:(e,t,r)=>{r.d(t,{Dm:()=>d,Hq:()=>c,MS:()=>p,bU:()=>i});var s=r(80442),a=r(22974),o=r(61159),n=r(58333);function i(e){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===e||"esriGeometryMultipoint"===e?n.I4:"esriGeometryPolyline"===e?n.ET:n.lF}}}const u=/^[_$a-zA-Z][_$a-zA-Z0-9]*$/;let l=1;function d(e,t){if((0,s.Z)("esri-csp-restrictions"))return()=>({[t]:null,...e});try{let r=`this.${t} = null;`;for(const t in e)r+=`this${u.test(t)?`.${t}`:`["${t}"]`} = ${JSON.stringify(e[t])};`;const s=new Function(`\n      return class AttributesClass$${l++} {\n        constructor() {\n          ${r};\n        }\n      }\n    `)();return()=>new s}catch(r){return()=>({[t]:null,...e})}}function c(e={}){return[{name:"New Feature",description:"",prototype:{attributes:(0,a.d9)(e)}}]}function p(e,t){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:t,supportsDelete:t,supportsEditing:t,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:t,supportsExceedsLimitStatistics:!0},query:o.g,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},editing:{supportsGeometryUpdate:t,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1}}}},41818:(e,t,r)=>{r.d(t,{P:()=>n});var s=r(11282),a=r(34599),o=r(14165);async function n(e,t,r){const n=(0,s.en)(e);return(0,a.hH)(n,o.Z.from(t),{...r}).then((e=>e.data.count))}},5396:(e,t,r)=>{r.d(t,{G:()=>n});var s=r(11282),a=r(34599),o=r(14165);async function n(e,t,r){const n=(0,s.en)(e);return(0,a.Ev)(n,o.Z.from(t),{...r}).then((e=>e.data.objectIds))}},4967:(e,t,r)=>{r.d(t,{F:()=>u,e:()=>i});var s=r(11282),a=r(34599),o=r(74889),n=r(14165);async function i(e,t,r){const s=await u(e,t,r);return o.Z.fromJSON(s)}async function u(e,t,r){const o=(0,s.en)(e),i={...r},u=n.Z.from(t),{data:l}=await(0,a.JT)(o,u,u.sourceSpatialReference,i);return l}},59431:(e,t,r)=>{r.d(t,{P:()=>i});var s=r(70586),a=r(67900),o=r(8744);function n(e,t,r){if(null==e.hasM||e.hasZ)for(const e of t)for(const t of e)t.length>2&&(t[2]*=r)}function i(e,t,r){if(!e&&!t||!r)return;const s=(0,a._R)(r);u(e,r,s),u(t,r,s)}function u(e,t,r){if(e)for(const s of e)l(s.geometry,t,r)}function l(e,t,r){if((0,s.Wi)(e)||!e.spatialReference||(0,o.fS)(e.spatialReference,t))return;const i=(0,a._R)(e.spatialReference)/r;if(1!==i)if("x"in e)null!=e.z&&(e.z*=i);else if("rings"in e)n(e,e.rings,i);else if("paths"in e)n(e,e.paths,i);else if("points"in e&&(null==e.hasM||e.hasZ))for(const t of e.points)t.length>2&&(t[2]*=i)}},28694:(e,t,r)=>{r.d(t,{p:()=>o});var s=r(70586),a=r(69285);function o(e,t,r){if(!r||!r.features||!r.hasZ)return;const o=(0,a.k)(r.geometryType,t,e.outSpatialReference);if(!(0,s.Wi)(o))for(const e of r.features)o(e.geometry)}},74889:(e,t,r)=>{r.d(t,{Z:()=>R});var s,a=r(43697),o=r(66577),n=r(38171),i=r(35454),u=r(96674),l=r(22974),d=r(70586),c=r(5600),p=(r(75215),r(71715)),h=r(52011),y=r(30556),f=r(82971),m=r(33955),g=r(1231);const _=new i.X({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryEnvelope:"extent",mesh:"mesh","":null});let b=s=class extends u.wq{constructor(e){super(e),this.displayFieldName=null,this.exceededTransferLimit=!1,this.features=[],this.fields=null,this.geometryType=null,this.hasM=!1,this.hasZ=!1,this.queryGeometry=null,this.spatialReference=null}readFeatures(e,t){const r=f.Z.fromJSON(t.spatialReference),s=[];for(let t=0;t<e.length;t++){const a=e[t],o=n.Z.fromJSON(a),i=a.geometry&&a.geometry.spatialReference;(0,d.pC)(o.geometry)&&!i&&(o.geometry.spatialReference=r);const u=a.aggregateGeometries,l=o.aggregateGeometries;if(u&&(0,d.pC)(l))for(const e in l){const t=l[e],s=u[e]?.spatialReference;(0,d.pC)(t)&&!s&&(t.spatialReference=r)}s.push(o)}return s}writeGeometryType(e,t,r,s){if(e)return void _.write(e,t,r,s);const{features:a}=this;if(a)for(const e of a)if(e&&(0,d.pC)(e.geometry))return void _.write(e.geometry.type,t,r,s)}readQueryGeometry(e,t){if(!e)return null;const r=!!e.spatialReference,s=(0,m.im)(e);return s&&!r&&t.spatialReference&&(s.spatialReference=f.Z.fromJSON(t.spatialReference)),s}writeSpatialReference(e,t){if(e)return void(t.spatialReference=e.toJSON());const{features:r}=this;if(r)for(const e of r)if(e&&(0,d.pC)(e.geometry)&&e.geometry.spatialReference)return void(t.spatialReference=e.geometry.spatialReference.toJSON())}clone(){return new s(this.cloneProperties())}cloneProperties(){return(0,l.d9)({displayFieldName:this.displayFieldName,exceededTransferLimit:this.exceededTransferLimit,features:this.features,fields:this.fields,geometryType:this.geometryType,hasM:this.hasM,hasZ:this.hasZ,queryGeometry:this.queryGeometry,spatialReference:this.spatialReference,transform:this.transform})}toJSON(e){const t=this.write();if(t.features&&Array.isArray(e)&&e.length>0)for(let r=0;r<t.features.length;r++){const s=t.features[r];if(s.geometry){const t=e&&e[r];s.geometry=t&&t.toJSON()||s.geometry}}return t}quantize(e){const{scale:[t,r],translate:[s,a]}=e,o=this.features,n=this._getQuantizationFunction(this.geometryType,(e=>Math.round((e-s)/t)),(e=>Math.round((a-e)/r)));for(let e=0,t=o.length;e<t;e++)n?.((0,d.Wg)(o[e].geometry))||(o.splice(e,1),e--,t--);return this.transform=e,this}unquantize(){const{geometryType:e,features:t,transform:r}=this;if(!r)return this;const{translate:[s,a],scale:[o,n]}=r,i=this._getHydrationFunction(e,(e=>e*o+s),(e=>a-e*n));for(const{geometry:e}of t)(0,d.pC)(e)&&i&&i(e);return this.transform=null,this}_quantizePoints(e,t,r){let s,a;const o=[];for(let n=0,i=e.length;n<i;n++){const i=e[n];if(n>0){const e=t(i[0]),n=r(i[1]);e===s&&n===a||(o.push([e-s,n-a]),s=e,a=n)}else s=t(i[0]),a=r(i[1]),o.push([s,a])}return o.length>0?o:null}_getQuantizationFunction(e,t,r){return"point"===e?e=>(e.x=t(e.x),e.y=r(e.y),e):"polyline"===e||"polygon"===e?e=>{const s=(0,m.oU)(e)?e.rings:e.paths,a=[];for(let e=0,o=s.length;e<o;e++){const o=s[e],n=this._quantizePoints(o,t,r);n&&a.push(n)}return a.length>0?((0,m.oU)(e)?e.rings=a:e.paths=a,e):null}:"multipoint"===e?e=>{const s=this._quantizePoints(e.points,t,r);return s&&s.length>0?(e.points=s,e):null}:"extent"===e?e=>e:null}_getHydrationFunction(e,t,r){return"point"===e?e=>{e.x=t(e.x),e.y=r(e.y)}:"polyline"===e||"polygon"===e?e=>{const s=(0,m.oU)(e)?e.rings:e.paths;let a,o;for(let e=0,n=s.length;e<n;e++){const n=s[e];for(let e=0,s=n.length;e<s;e++){const s=n[e];e>0?(a+=s[0],o+=s[1]):(a=s[0],o=s[1]),s[0]=t(a),s[1]=r(o)}}}:"extent"===e?e=>{e.xmin=t(e.xmin),e.ymin=r(e.ymin),e.xmax=t(e.xmax),e.ymax=r(e.ymax)}:"multipoint"===e?e=>{const s=e.points;let a,o;for(let e=0,n=s.length;e<n;e++){const n=s[e];e>0?(a+=n[0],o+=n[1]):(a=n[0],o=n[1]),n[0]=t(a),n[1]=r(o)}}:null}};(0,a._)([(0,c.Cb)({type:String,json:{write:!0}})],b.prototype,"displayFieldName",void 0),(0,a._)([(0,c.Cb)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],b.prototype,"exceededTransferLimit",void 0),(0,a._)([(0,c.Cb)({type:[n.Z],json:{write:!0}})],b.prototype,"features",void 0),(0,a._)([(0,p.r)("features")],b.prototype,"readFeatures",null),(0,a._)([(0,c.Cb)({type:[g.Z],json:{write:!0}})],b.prototype,"fields",void 0),(0,a._)([(0,c.Cb)({type:["point","multipoint","polyline","polygon","extent","mesh"],json:{read:{reader:_.read}}})],b.prototype,"geometryType",void 0),(0,a._)([(0,y.c)("geometryType")],b.prototype,"writeGeometryType",null),(0,a._)([(0,c.Cb)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],b.prototype,"hasM",void 0),(0,a._)([(0,c.Cb)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],b.prototype,"hasZ",void 0),(0,a._)([(0,c.Cb)({types:o.qM,json:{write:!0}})],b.prototype,"queryGeometry",void 0),(0,a._)([(0,p.r)("queryGeometry")],b.prototype,"readQueryGeometry",null),(0,a._)([(0,c.Cb)({type:f.Z,json:{write:!0}})],b.prototype,"spatialReference",void 0),(0,a._)([(0,y.c)("spatialReference")],b.prototype,"writeSpatialReference",null),(0,a._)([(0,c.Cb)({json:{write:!0}})],b.prototype,"transform",void 0),b=s=(0,a._)([(0,h.j)("esri.rest.support.FeatureSet")],b),b.prototype.toJSON.isDefaultToJSON=!0;const R=b}}]);