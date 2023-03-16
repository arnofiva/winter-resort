import{c as he}from"./ArcadeDate-3d8ef842.js";import{B as x,G as v,b as R,v as P,r as A,ah as ge,Q as we,U as le,y as S,K as z,J as N,z as B,P as Ie,V as j,ai as Fe,C as Ee,l as H,p as De,aj as be,ak as V,a0 as K,al as Y}from"./arcadeUtils-150aa9fc.js";import{t as d,e as p}from"./executionError-fb3f283a.js";import{e as se,E as Ae,j as fe,f as xe,c as me,a as Ne,b as Te,d as Se,S as X,C as ve,I as Le,A as Pe,y as k,g as Re,x as J,D as L,h as _}from"./featureSetUtils-fa651e06.js";import{t as Ce}from"./portalUtils-f4c06a4a.js";import{e as Me,A as ce}from"./SpatialFilter-71f2f7d8.js";import{C as Oe}from"./promiseUtils-59dab60c.js";import{f as D}from"./WhereClause-ec2695a9.js";import $ from"./FeatureLayer-c3299dce.js";import{y as W}from"./Field-efd8d6fa.js";import"./datetime-b6333958.js";import"./geometry-f89ca072.js";import"./ensureType-249b88cd.js";import"./string-7a2f1d87.js";import"./typedArrayUtil-70e1d79e.js";import"./Error-62cc7aff.js";import"./Extent-2ad2c9a9.js";import"./JSONSupport-32b5ad86.js";import"./nextTick-3ee5a785.js";import"./Ellipsoid-89682c5e.js";import"./Polyline-cf51ad23.js";import"./typeUtils-05f9d41d.js";import"./preload-helper-41c905a7.js";import"./number-9d73a551.js";import"./locale-30120714.js";import"./jsonUtils-6d0a72e3.js";import"./featureConversionUtils-66a9b1ed.js";import"./aaBoundingBox-dfb04110.js";import"./aaBoundingRect-42f9721f.js";import"./mathUtils-5b623c84.js";import"./vec3-015ca254.js";import"./common-d0b63c2d.js";import"./vec4-c7a19f0d.js";import"./OptimizedFeature-cb86a86f.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./request-f01affa1.js";import"./hash-0ddfbf4b.js";import"./Portal-52d960e8.js";import"./Loadable-7c3ecd79.js";import"./Promise-3959c3ee.js";import"./PortalGroup-b49a7409.js";import"./PortalUser-85cf1ca9.js";import"./sizeVariableUtils-d4870b0d.js";import"./Graphic-46941d56.js";import"./PopupTemplate-c1fb66ed.js";import"./Clonable-95fa5d2d.js";import"./Collection-9e42cc30.js";import"./Evented-36093e88.js";import"./SimpleObservable-a6d3d2d8.js";import"./fieldUtils-e397be4b.js";import"./arcadeOnDemand-5c3ab3f7.js";import"./enumeration-504d95a2.js";import"./number-2db5f4a2.js";import"./Identifiable-99d92428.js";import"./symbols-5a102dff.js";import"./CIMSymbol-561444b9.js";import"./Color-5a385b27.js";import"./colorUtils-639f4d25.js";import"./screenUtils-410d12c0.js";import"./opacityUtils-c0957a27.js";import"./symbolLayerUtils3D-5a2f49a8.js";import"./persistableUrlUtils-ccf13db2.js";import"./Symbol3DAnchorPosition2D-d0207ef9.js";import"./collectionUtils-61fc1a27.js";import"./FeatureReductionLayer-5d021257.js";import"./BlendLayer-fe49ee20.js";import"./mat4f32-60a2394b.js";import"./mat4-4714ff8c.js";import"./TimeExtent-4bfae662.js";import"./Query-6df7497c.js";import"./UniqueValueRenderer-31cfe725.js";import"./LegendOptions-d1ee6f9f.js";import"./reactiveUtils-e6d6c898.js";import"./diffUtils-a2efee1b.js";import"./colorRamps-844ba070.js";import"./visualVariableUtils-6f78f1dd.js";import"./compilerUtils-2eb56463.js";import"./lengthUtils-e2d3809d.js";import"./jsonUtils-ba20c384.js";import"./layerUtils-ff76096c.js";import"./styleUtils-ba5d50e4.js";import"./jsonUtils-0cd7beab.js";import"./DictionaryLoader-e5256637.js";import"./LRUCache-805da42e.js";import"./MemCache-a072224a.js";import"./deprecate-2ea4a12e.js";import"./heatmapUtils-bc76f08e.js";import"./vec4f64-6d0e93be.js";import"./OperationalLayer-892ef1ff.js";import"./ElevationInfo-bc15f954.js";import"./labelingInfo-81f8350c.js";import"./labelUtils-2517fbb8.js";import"./defaultsJSON-59981e75.js";import"./FieldsIndex-3347fdc5.js";import"./executeQueryJSON-c3e8823f.js";import"./normalizeUtils-11faac16.js";import"./normalizeUtilsCommon-f5194d67.js";import"./query-159ca0c6.js";import"./pbfQueryUtils-e595cc71.js";import"./pbf-490f560a.js";import"./queryZScale-7c3cd57e.js";import"./zscale-d428b1da.js";import"./FeatureSet-adc6c42d.js";import"./AttachmentInfo-2774f92c.js";import"./AttachmentQuery-be73c1f4.js";import"./executeForIds-daed29ad.js";import"./RelationshipQuery-1388e5e8.js";import"./fieldType-ec749512.js";import"./TopFeaturesQuery-c51356f1.js";import"./FeatureType-9aee1062.js";import"./FeatureTemplate-c492af3e.js";import"./PortalItem-476b4f2f.js";import"./assets-640b4d04.js";import"./arcadeTimeUtils-ff4f0a96.js";import"./TimeReference-dbe22fa2.js";import"./geometryEngineAsync-a77d823a.js";import"./workers-591e0dfc.js";import"./Connection-000cba43.js";import"./intl-0ee83c79.js";import"./messages-f54f7f46.js";import"./MultiOriginJSONSupport-247be6b9.js";import"./serviceCapabilitiesUtils-d47be03f.js";import"./arcgisLayerUrl-1177870a.js";import"./FeatureLayerBase-4bc86305.js";import"./HeightModelInfo-bc3bd77c.js";import"./Layer-ab90f8be.js";import"./HandleOwner-f4554d8c.js";import"./editsZScale-1f9f5428.js";import"./APIKeyMixin-a999140b.js";import"./ArcGISService-69574b36.js";import"./CustomParametersMixin-0cb5d402.js";import"./EditBusLayer-40721674.js";import"./OrderedLayer-e39f681d.js";import"./PortalLayer-f8afa381.js";import"./asyncUtils-8de18dd2.js";import"./portalItemUtils-f08de884.js";import"./projection-d42b91be.js";import"./RefreshableLayer-6e09e5c7.js";import"./ScaleRangeLayer-56857dcb.js";import"./TemporalLayer-1cafdc62.js";import"./fieldProperties-13016a3b.js";import"./versionUtils-3b55ef95.js";import"./styleUtils-a2cb1d02.js";import"./popupUtils-ef59e204.js";function ke(o,t,n,u){if(u.length===1){if(N(u[0]))return Y(o,u[0],-1);if(j(u[0]))return Y(o,u[0].toArray(),-1)}return Y(o,u,-1)}async function ee(o,t,n){const u=o.getVariables();if(u.length>0){const w=[];for(let r=0;r<u.length;r++){const i={name:u[r]};w.push(await t.evaluateIdentifier(n,i))}const e={};for(let r=0;r<u.length;r++)e[u[r]]=w[r];return o.parameters=e,o}return o}function c(o,t,n=null){for(const u in o)if(u.toLowerCase()===t.toLowerCase())return o[u];return n}function ue(o){if(o===null)return null;const t={type:c(o,"type",""),name:c(o,"name","")};if(t.type==="range")t.range=c(o,"range",[]);else{t.codedValues=[];for(const n of c(o,"codedValues",[]))t.codedValues.push({name:c(n,"name",""),code:c(n,"code",null)})}return t}function te(o){if(o===null)return null;const t={},n=c(o,"wkt",null);n!==null&&(t.wkt=n);const u=c(o,"wkid",null);return u!==null&&(t.wkid=u),t}function de(o){if(o===null)return null;const t={hasZ:c(o,"hasz",!1),hasM:c(o,"hasm",!1)},n=c(o,"spatialreference",null);n&&(t.spatialReference=te(n));const u=c(o,"x",null);if(u!==null)return t.x=u,t.y=c(o,"y",null),t;const w=c(o,"rings",null);if(w!==null)return t.rings=w,t;const e=c(o,"paths",null);if(e!==null)return t.paths=e,t;const r=c(o,"points",null);if(r!==null)return t.points=r,t;for(const i of["xmin","xmax","ymin","ymax","zmin","zmax","mmin","mmax"]){const m=c(o,i,null);m!==null&&(t[i]=m)}return t}function je(o,t){for(const n of t)if(n===o)return!0;return!1}function ze(o){return!!o.layerDefinition&&!!o.featureSet&&je(o.layerDefinition.geometryType,["",null,"esriGeometryNull","esriGeometryPoint","esriGeometryPolyline","esriGeometryPolygon","esriGeometryMultipoint","esriGeometryEnvelope"])!==!1&&o.layerDefinition.objectIdField!==null&&o.layerDefinition.objectIdField!==""&&N(o.layerDefinition.fields)!==!1&&N(o.featureSet.features)!==!1}function Di(o){o.mode==="async"&&(o.functions.timezone=function(t,n){return o.standardFunctionAsync(t,n,async(u,w,e)=>{if(x(e,1,2,t,n),v(e[0])){if(await e[0].load(),e.length===1||e[1]===null)return e[0].dateTimeReferenceFieldIndex.layerDateFieldsTimeZone;if(!(e[1]instanceof R)||e[1].hasField("type")===!1)throw new d(t,p.InvalidParameter,n);const m=e[1].field("type");if(P(m)===!1)throw new d(t,p.InvalidParameter,n);switch(A(m).toLowerCase()){case"preferredtimezone":return e[0].dateTimeReferenceFieldIndex.layerPreferredTimeZone;case"editfieldsinfo":return e[0].dateTimeReferenceFieldIndex.layerEditFieldsTimeZone;case"timeinfo":return e[0].dateTimeReferenceFieldIndex.layerTimeInfoTimeZone;case"field":if(e[1].hasField("fieldname")&&P(e[1].field("fieldname")))return e[0].dateTimeReferenceFieldIndex.fieldTimeZone(A(e[1].field("fieldname")))}throw new d(t,p.InvalidParameter,n)}const r=ge(e[0],we(t));if(r===null)return null;const i=r.timeZone;return i==="system"?he.systemTimeZoneCanonicalName:i})},o.functions.sqltimestamp=function(t,n){return o.standardFunctionAsync(t,n,async(u,w,e)=>{x(e,1,3,t,n);const r=e[0];if(le(r)){if(e.length===1)return r.toSQLString();if(e.length===2)return r.changeTimeZone(A(e[1])).toSQLString();throw new d(t,p.InvalidParameter,n)}if(v(r)){if(e.length!==3)throw new d(t,p.InvalidParameter,n);await r.load();const i=A(e[1]);if(le(e[2])===!1)throw new d(t,p.InvalidParameter,n);const m=r.fieldTimeZone(i);return m===null?e[2].toSQLString():e[2].changeTimeZone(m).toSQLString()}throw new d(t,p.InvalidParameter,n)})},o.signatures.push({name:"sqltimestamp",min:2,max:4}),o.functions.featuresetbyid=function(t,n){return o.standardFunctionAsync(t,n,(u,w,e)=>{if(x(e,2,4,t,n),e[0]instanceof se){const r=A(e[1]);let i=S(e[2],null);const m=z(S(e[3],!0));if(i===null&&(i=["*"]),N(i)===!1)throw new d(t,p.InvalidParameter,n);return e[0].featureSetById(r,m,i)}throw new d(t,p.InvalidParameter,n)})},o.signatures.push({name:"featuresetbyid",min:2,max:4}),o.functions.getfeatureset=function(t,n){return o.standardFunctionAsync(t,n,(u,w,e)=>{if(x(e,1,2,t,n),B(e[0])){let r=S(e[1],"datasource");return r===null&&(r="datasource"),r=A(r).toLowerCase(),Ae(e[0].fullSchema(),r,t.lrucache,t.interceptor,t.spatialReference)}throw new d(t,p.InvalidParameter,n)})},o.signatures.push({name:"getfeatureset",min:1,max:2}),o.functions.featuresetbyportalitem=function(t,n){return o.standardFunctionAsync(t,n,(u,w,e)=>{if(x(e,2,5,t,n),e[0]===null)throw new d(t,p.PortalRequired,n);if(e[0]instanceof Ie){const s=A(e[1]),a=A(e[2]);let l=S(e[3],null);const f=z(S(e[4],!0));if(l===null&&(l=["*"]),N(l)===!1)throw new d(t,p.InvalidParameter,n);let F=null;return t.services&&t.services.portal&&(F=t.services.portal),F=Ce(e[0],F),fe(s,a,t.spatialReference,l,f,F,t.lrucache,t.interceptor)}if(P(e[0])===!1)throw new d(t,p.PortalRequired,n);const r=A(e[0]),i=A(e[1]);let m=S(e[2],null);const y=z(S(e[3],!0));if(m===null&&(m=["*"]),N(m)===!1)throw new d(t,p.InvalidParameter,n);if(t.services&&t.services.portal)return fe(r,i,t.spatialReference,m,y,t.services.portal,t.lrucache,t.interceptor);throw new d(t,p.PortalRequired,n)})},o.signatures.push({name:"featuresetbyportalitem",min:2,max:5}),o.functions.featuresetbyname=function(t,n){return o.standardFunctionAsync(t,n,(u,w,e)=>{if(x(e,2,4,t,n),e[0]instanceof se){const r=A(e[1]);let i=S(e[2],null);const m=z(S(e[3],!0));if(i===null&&(i=["*"]),N(i)===!1)throw new d(t,p.InvalidParameter,n);return e[0].featureSetByName(r,m,i)}throw new d(t,p.InvalidParameter,n)})},o.signatures.push({name:"featuresetbyname",min:2,max:4}),o.functions.featureset=function(t,n){return o.standardFunction(t,n,(u,w,e)=>{var m;x(e,1,1,t,n);let r=e[0];const i={layerDefinition:{geometryType:"",objectIdField:"",globalIdField:"",typeIdField:"",fields:[]},featureSet:{geometryType:"",features:[]}};if(P(r))r=JSON.parse(r),r.layerDefinition!==void 0?(i.layerDefinition=r.layerDefinition,i.featureSet=r.featureSet,r.layerDefinition.spatialReference&&(i.layerDefinition.spatialReference=r.layerDefinition.spatialReference)):(i.featureSet.features=r.features,i.featureSet.geometryType=r.geometryType,i.layerDefinition.geometryType=i.featureSet.geometryType,i.layerDefinition.objectIdField=r.objectIdFieldName,i.layerDefinition.typeIdField=r.typeIdFieldName,i.layerDefinition.globalIdField=r.globalIdFieldName,i.layerDefinition.fields=r.fields,r.spatialReference&&(i.layerDefinition.spatialReference=r.spatialReference));else{if(!(e[0]instanceof R))throw new d(t,p.InvalidParameter,n);{r=JSON.parse(e[0].castToText(!0));const y=c(r,"layerdefinition");if(y!==null){i.layerDefinition.geometryType=c(y,"geometrytype",""),i.featureSet.geometryType=i.layerDefinition.geometryType,i.layerDefinition.globalIdField=c(y,"globalidfield",""),i.layerDefinition.objectIdField=c(y,"objectidfield",""),i.layerDefinition.typeIdField=c(y,"typeidfield","");const s=c(y,"spatialreference",null);s&&(i.layerDefinition.spatialReference=te(s));for(const l of c(y,"fields",[])){const f={name:c(l,"name",""),alias:c(l,"alias",""),type:c(l,"type",""),nullable:c(l,"nullable",!0),editable:c(l,"editable",!0),length:c(l,"length",null),domain:ue(c(l,"domain"))};i.layerDefinition.fields.push(f)}const a=c(r,"featureset",null);if(a){const l={};for(const f of i.layerDefinition.fields)l[f.name.toLowerCase()]=f.name;for(const f of c(a,"features",[])){const F={},E=c(f,"attributes",{});for(const I in E)F[l[I.toLowerCase()]]=E[I];i.featureSet.features.push({attributes:F,geometry:de(c(f,"geometry",null))})}}}else{i.layerDefinition.geometryType=c(r,"geometrytype",""),i.featureSet.geometryType=i.layerDefinition.geometryType,i.layerDefinition.objectIdField=c(r,"objectidfieldname",""),i.layerDefinition.typeIdField=c(r,"typeidfieldname","");const s=c(r,"spatialreference",null);s&&(i.layerDefinition.spatialReference=te(s));for(const l of c(r,"fields",[])){const f={name:c(l,"name",""),alias:c(l,"alias",""),type:c(l,"type",""),nullable:c(l,"nullable",!0),editable:c(l,"editable",!0),length:c(l,"length",null),domain:ue(c(l,"domain"))};i.layerDefinition.fields.push(f)}const a={};for(const l of i.layerDefinition.fields)a[l.name.toLowerCase()]=l.name;for(const l of c(r,"features",[])){const f={},F=c(l,"attributes",{});for(const E in F)f[a[E.toLowerCase()]]=F[E];i.featureSet.features.push({attributes:f,geometry:de(c(l,"geometry",null))})}}}}if(ze(i)===!1)throw new d(t,p.InvalidParameter,n);return(((m=i==null?void 0:i.layerDefinition)==null?void 0:m.geometryType)||"")===""&&(i.layerDefinition.geometryType="esriGeometryNull"),xe.create(i,t.spatialReference)})},o.signatures.push({name:"featureset",min:1,max:1}),o.functions.filter=function(t,n){return o.standardFunctionAsync(t,n,async(u,w,e)=>{if(x(e,2,2,t,n),N(e[0])||j(e[0])){const r=[];let i=e[0];i instanceof Fe&&(i=i.toArray());let m=null;if(!Ee(e[1]))throw new d(t,p.InvalidParameter,n);m=e[1].createFunction(t);for(const y of i){const s=m(y);Oe(s)?await s===!0&&r.push(y):s===!0&&r.push(y)}return r}if(v(e[0])){const r=await e[0].load(),i=D.create(e[1],r.getFieldsIndex()),m=i.getVariables();if(m.length>0){const y=[];for(let a=0;a<m.length;a++){const l={name:m[a]};y.push(await o.evaluateIdentifier(t,l))}const s={};for(let a=0;a<m.length;a++)s[m[a]]=y[a];return i.parameters=s,new me({parentfeatureset:e[0],whereclause:i})}return new me({parentfeatureset:e[0],whereclause:i})}throw new d(t,p.InvalidParameter,n)})},o.signatures.push({name:"filter",min:2,max:2}),o.functions.orderby=function(t,n){return o.standardFunctionAsync(t,n,async(u,w,e)=>{if(x(e,2,2,t,n),v(e[0])){const r=new Ne(e[1]);return new Te({parentfeatureset:e[0],orderbyclause:r})}throw new d(t,p.InvalidParameter,n)})},o.signatures.push({name:"orderby",min:2,max:2}),o.functions.top=function(t,n){return o.standardFunctionAsync(t,n,async(u,w,e)=>{if(x(e,2,2,t,n),v(e[0]))return new Se({parentfeatureset:e[0],topnum:e[1]});if(N(e[0]))return H(e[1])>=e[0].length?e[0].slice(0):e[0].slice(0,H(e[1]));if(j(e[0]))return H(e[1])>=e[0].length()?e[0].slice(0):e[0].slice(0,H(e[1]));throw new d(t,p.InvalidParameter,n)})},o.signatures.push({name:"top",min:2,max:2}),o.functions.first=function(t,n){return o.standardFunctionAsync(t,n,async(u,w,e)=>{if(x(e,1,1,t,n),v(e[0])){const r=await e[0].first(u.abortSignal);if(r!==null){const i=De.createFromGraphicLikeObject(r.geometry,r.attributes,e[0],t.timeReference);return i._underlyingGraphic=r,i}return r}return N(e[0])?e[0].length===0?null:e[0][0]:j(e[0])?e[0].length()===0?null:e[0].get(0):null})},o.signatures.push({name:"first",min:1,max:1}),o.functions.attachments=function(t,n){return o.standardFunctionAsync(t,n,async(u,w,e)=>{x(e,1,2,t,n);const r={minsize:-1,maxsize:-1,types:null,returnMetadata:!1};if(e.length>1){if(e[1]instanceof R){if(e[1].hasField("minsize")&&(r.minsize=H(e[1].field("minsize"))),e[1].hasField("metadata")&&(r.returnMetadata=z(e[1].field("metadata"))),e[1].hasField("maxsize")&&(r.maxsize=H(e[1].field("maxsize"))),e[1].hasField("types")){const i=be(e[1].field("types"),!1);i.length>0&&(r.types=i)}}else if(e[1]!==null)throw new d(t,p.InvalidParameter,n)}if(B(e[0])){let i=e[0]._layer;return i instanceof $&&(i=X(i,t.spatialReference,["*"],!0,t.lrucache,t.interceptor)),i===null?[]:v(i)===!1?[]:(await i.load(),i.queryAttachments(e[0].field(i.objectIdField),r.minsize,r.maxsize,r.types,r.returnMetadata))}if(e[0]===null)return[];throw new d(t,p.InvalidParameter,n)})},o.signatures.push({name:"attachments",min:1,max:2}),o.functions.featuresetbyrelationshipname=function(t,n){return o.standardFunctionAsync(t,n,async(u,w,e)=>{x(e,2,4,t,n);const r=e[0],i=A(e[1]);let m=S(e[2],null);const y=z(S(e[3],!0));if(m===null&&(m=["*"]),N(m)===!1)throw new d(t,p.InvalidParameter,n);if(e[0]===null)return null;if(!B(e[0]))throw new d(t,p.InvalidParameter,n);let s=r._layer;if(s instanceof $&&(s=X(s,t.spatialReference,["*"],!0,t.lrucache,t.interceptor)),s===null||v(s)===!1)return null;s=await s.load();const a=s.relationshipMetaData().filter(I=>I.name===i);if(a.length===0)return null;if(a[0].relationshipTableId!==void 0&&a[0].relationshipTableId!==null&&a[0].relationshipTableId>-1)return ve(s,a[0],r.field(s.objectIdField),s.spatialReference,m,y,t.lrucache,t.interceptor);let l=s.serviceUrl();if(!l)return null;l=l.charAt(l.length-1)==="/"?l+a[0].relatedTableId.toString():l+"/"+a[0].relatedTableId.toString();const f=await Le(l,s.spatialReference,m,y,t.lrucache,t.interceptor);await f.load();let F=f.relationshipMetaData();if(F=F.filter(I=>I.id===a[0].id),r.hasField(a[0].keyField)===!1||r.field(a[0].keyField)===null){const I=await s.getFeatureByObjectId(r.field(s.objectIdField),[a[0].keyField]);if(I){const b=D.create(F[0].keyField+"= @id",f.getFieldsIndex());return b.parameters={id:I.attributes[a[0].keyField]},f.filter(b)}return new Me({parentfeatureset:f})}const E=D.create(F[0].keyField+"= @id",f.getFieldsIndex());return E.parameters={id:r.field(a[0].keyField)},f.filter(E)})},o.signatures.push({name:"featuresetbyrelationshipname",min:2,max:4}),o.functions.featuresetbyassociation=function(t,n){return o.standardFunctionAsync(t,n,async(u,w,e)=>{x(e,2,3,t,n);const r=e[0],i=A(S(e[1],"")).toLowerCase(),m=P(e[2])?A(e[2]):null;if(e[0]===null)return null;if(!B(e[0]))throw new d(t,p.InvalidParameter,n);let y=r._layer;if(y instanceof $&&(y=X(y,t.spatialReference,["*"],!0,t.lrucache,t.interceptor)),y===null||v(y)===!1)return null;await y.load();const s=y.serviceUrl(),a=await Pe(s,t.spatialReference);let l=null,f=null,F=!1;if(m!==null&&m!==""&&m!==void 0){for(const g of a.terminals)g.terminalName===m&&(f=g.terminalId);f===null&&(F=!0)}const E=a.associations.getFieldsIndex(),I=E.get("TOGLOBALID").name,b=E.get("FROMGLOBALID").name,Q=E.get("TOTERMINALID").name,q=E.get("FROMTERMINALID").name,G=E.get("FROMNETWORKSOURCEID").name,Z=E.get("TONETWORKSOURCEID").name,O=E.get("ASSOCIATIONTYPE").name,pe=E.get("ISCONTENTVISIBLE").name,ye=E.get("OBJECTID").name;for(const g of y.fields)if(g.type==="global-id"){l=r.field(g.name);break}let C=null,ne=new k(new W({name:"percentalong",alias:"percentalong",type:"double"}),D.create("0",a.associations.getFieldsIndex())),ie=new k(new W({name:"side",alias:"side",type:"string"}),D.create("''",a.associations.getFieldsIndex()));const T="globalid",re="globalId",ae={};for(const g in a.lkp)ae[g]=a.lkp[g].sourceId;const M=new Re(new W({name:"classname",alias:"classname",type:"string"}),null,ae);let h="";switch(i){case"midspan":{h=`((${I}='${l}') OR ( ${b}='${l}')) AND (${O} IN (5))`,M.codefield=D.create(`CASE WHEN (${I}='${l}') THEN ${G} ELSE ${Z} END`,a.associations.getFieldsIndex());const g=K(L.findField(a.associations.fields,b));g.name=T,g.alias=T,C=new k(g,D.create(`CASE WHEN (${b}='${l}') THEN ${I} ELSE ${b} END`,a.associations.getFieldsIndex())),ne=a.unVersion>=4?new _(L.findField(a.associations.fields,E.get("PERCENTALONG").name)):new k(new W({name:"percentalong",alias:"percentalong",type:"double"}),D.create("0",a.associations.getFieldsIndex()));break}case"junctionedge":{h=`((${I}='${l}') OR ( ${b}='${l}')) AND (${O} IN (4,6))`,M.codefield=D.create(`CASE WHEN (${I}='${l}') THEN ${G} ELSE ${Z} END`,a.associations.getFieldsIndex());const g=K(L.findField(a.associations.fields,b));g.name=T,g.alias=T,C=new k(g,D.create(`CASE WHEN (${b}='${l}') THEN ${I} ELSE ${b} END`,a.associations.getFieldsIndex())),ie=new k(new W({name:"side",alias:"side",type:"string"}),D.create(`CASE WHEN (${O}=4) THEN 'from' ELSE 'to' END`,a.associations.getFieldsIndex()));break}case"connected":{let g=`${I}='@T'`,oe=`${b}='@T'`;f!==null&&(g+=` AND ${Q}=@A`,oe+=` AND ${q}=@A`),h="(("+g+") OR ("+oe+"))",h=V(h,"@T",l??""),g=V(g,"@T",l??""),f!==null&&(g=V(g,"@A",f.toString()),h=V(h,"@A",f.toString())),M.codefield=D.create("CASE WHEN "+g+` THEN ${G} ELSE ${Z} END`,a.associations.getFieldsIndex());const U=K(L.findField(a.associations.fields,b));U.name=T,U.alias=T,C=new k(U,D.create("CASE WHEN "+g+` THEN ${b} ELSE ${I} END`,a.associations.getFieldsIndex()));break}case"container":h=`${I}='${l}' AND ${O} = 2`,f!==null&&(h+=` AND ${Q} = `+f.toString()),M.codefield=G,h="( "+h+" )",C=new J(L.findField(a.associations.fields,b),T,T);break;case"content":h=`(${b}='${l}' AND ${O} = 2)`,f!==null&&(h+=` AND ${q} = `+f.toString()),M.codefield=Z,h="( "+h+" )",C=new J(L.findField(a.associations.fields,I),T,T);break;case"structure":h=`(${I}='${l}' AND ${O} = 3)`,f!==null&&(h+=` AND ${Q} = `+f.toString()),M.codefield=G,h="( "+h+" )",C=new J(L.findField(a.associations.fields,b),T,re);break;case"attached":h=`(${b}='${l}' AND ${O} = 3)`,f!==null&&(h+=` AND ${q} = `+f.toString()),M.codefield=Z,h="( "+h+" )",C=new J(L.findField(a.associations.fields,I),T,re);break;default:throw new d(t,p.InvalidParameter,n)}return F&&(h="1 <> 1"),new L({parentfeatureset:a.associations,adaptedFields:[new _(L.findField(a.associations.fields,ye)),new _(L.findField(a.associations.fields,pe)),C,ie,M,ne],extraFilter:h?D.create(h,a.associations.getFieldsIndex()):null})})},o.signatures.push({name:"featuresetbyassociation",min:2,max:6}),o.functions.groupby=function(t,n){return o.standardFunctionAsync(t,n,async(u,w,e)=>{if(x(e,3,3,t,n),!v(e[0]))throw new d(t,p.InvalidParameter,n);const r=await e[0].load(),i=[],m=[];let y=!1,s=[];if(P(e[1]))s.push(e[1]);else if(e[1]instanceof R)s.push(e[1]);else if(N(e[1]))s=e[1];else{if(!j(e[1]))throw new d(t,p.InvalidParameter,n);s=e[1].toArray()}for(const a of s)if(P(a)){const l=D.create(A(a),r.getFieldsIndex()),f=ce(l)===!0?A(a):"%%%%FIELDNAME";i.push({name:f,expression:l}),f==="%%%%FIELDNAME"&&(y=!0)}else{if(!(a instanceof R))throw new d(t,p.InvalidParameter,n);{const l=a.hasField("name")?a.field("name"):"%%%%FIELDNAME",f=a.hasField("expression")?a.field("expression"):"";if(l==="%%%%FIELDNAME"&&(y=!0),!l)throw new d(t,p.InvalidParameter,n);i.push({name:l,expression:D.create(f||l,r.getFieldsIndex())})}}if(s=[],P(e[2]))s.push(e[2]);else if(N(e[2]))s=e[2];else if(j(e[2]))s=e[2].toArray();else{if(!(e[2]instanceof R))throw new d(t,p.InvalidParameter,n);s.push(e[2])}for(const a of s){if(!(a instanceof R))throw new d(t,p.InvalidParameter,n);{const l=a.hasField("name")?a.field("name"):"",f=a.hasField("statistic")?a.field("statistic"):"",F=a.hasField("expression")?a.field("expression"):"";if(!l||!f||!F)throw new d(t,p.InvalidParameter,n);m.push({name:l,statistic:f.toLowerCase(),expression:D.create(F,r.getFieldsIndex())})}}if(y){const a={};for(const f of r.fields)a[f.name.toLowerCase()]=1;for(const f of i)f.name!=="%%%%FIELDNAME"&&(a[f.name.toLowerCase()]=1);for(const f of m)f.name!=="%%%%FIELDNAME"&&(a[f.name.toLowerCase()]=1);let l=0;for(const f of i)if(f.name==="%%%%FIELDNAME"){for(;a["field_"+l.toString()]===1;)l++;a["field_"+l.toString()]=1,f.name="FIELD_"+l.toString()}}for(const a of i)await ee(a.expression,o,t);for(const a of m)await ee(a.expression,o,t);return e[0].groupby(i,m)})},o.signatures.push({name:"groupby",min:3,max:3}),o.functions.distinct=function(t,n){return o.standardFunctionAsync(t,n,async(u,w,e)=>{if(v(e[0])){x(e,2,2,t,n);const r=await e[0].load(),i=[];let m=[];if(P(e[1]))m.push(e[1]);else if(e[1]instanceof R)m.push(e[1]);else if(N(e[1]))m=e[1];else{if(!j(e[1]))throw new d(t,p.InvalidParameter,n);m=e[1].toArray()}let y=!1;for(const s of m)if(P(s)){const a=D.create(A(s),r.getFieldsIndex()),l=ce(a)===!0?A(s):"%%%%FIELDNAME";i.push({name:l,expression:a}),l==="%%%%FIELDNAME"&&(y=!0)}else{if(!(s instanceof R))throw new d(t,p.InvalidParameter,n);{const a=s.hasField("name")?s.field("name"):"%%%%FIELDNAME",l=s.hasField("expression")?s.field("expression"):"";if(a==="%%%%FIELDNAME"&&(y=!0),!a)throw new d(t,p.InvalidParameter,n);i.push({name:a,expression:D.create(l||a,r.getFieldsIndex())})}}if(y){const s={};for(const l of r.fields)s[l.name.toLowerCase()]=1;for(const l of i)l.name!=="%%%%FIELDNAME"&&(s[l.name.toLowerCase()]=1);let a=0;for(const l of i)if(l.name==="%%%%FIELDNAME"){for(;s["field_"+a.toString()]===1;)a++;s["field_"+a.toString()]=1,l.name="FIELD_"+a.toString()}}for(const s of i)await ee(s.expression,o,t);return e[0].groupby(i,[])}return ke("distinct",u,w,e)})})}export{Di as registerFunctions};
