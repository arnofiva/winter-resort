import{e,y as o,l as b,a as p,s as Ie,C as ae}from"./JSONSupport-32b5ad86.js";import{p as M}from"./string-7a2f1d87.js";import{o as d,r as A,V as Le,Z as Re,e as Ae,f as he}from"./Extent-2ad2c9a9.js";import{S as Ce}from"./ensureType-249b88cd.js";import{r as Fe}from"./typedArrayUtil-70e1d79e.js";import{n as De,i as Ne}from"./Field-efd8d6fa.js";import{l as Pe}from"./PopupTemplate-c1fb66ed.js";import{j as me}from"./Collection-9e42cc30.js";import{a as l,s as qe}from"./Error-62cc7aff.js";import{v as Ge}from"./HeightModelInfo-bc3bd77c.js";import{b as Be,C as Ue}from"./arcgisLayerUrl-1177870a.js";import{d as ke,I as Qe,D as We,f as He}from"./OperationalLayer-892ef1ff.js";import{i as B}from"./Clonable-95fa5d2d.js";import{a as Z}from"./TimeReference-dbe22fa2.js";import{_ as Ze}from"./preload-helper-41c905a7.js";import{r as C}from"./request-f01affa1.js";import{r as _e,p as ze,n as Je}from"./serviceCapabilitiesUtils-d47be03f.js";import{b as Ke}from"./layerUtils-ff76096c.js";import{c as Xe}from"./AttachmentQuery-be73c1f4.js";import{x as U}from"./Query-6df7497c.js";import $e from"./RelationshipQuery-1388e5e8.js";var _;let x=_=class extends b{constructor(t){super(t),this.expression=null,this.name=null,this.returnType="boolean",this.title=null}clone(){return new _({name:this.name,title:this.title,expression:this.expression,returnType:this.returnType})}};e([o({type:String,json:{write:!0}})],x.prototype,"expression",void 0),e([o({type:String,json:{write:!0}})],x.prototype,"name",void 0),e([o({type:["boolean","date","number","string"],json:{write:!0}})],x.prototype,"returnType",void 0),e([o({type:String,json:{write:!0}})],x.prototype,"title",void 0),x=_=e([p("esri.form.ExpressionInfo")],x);const Ye=x;let j=class extends b{constructor(i){super(i),this.description=null,this.label=null,this.type=null,this.visibilityExpression=null}};e([o({type:String,json:{write:!0}})],j.prototype,"description",void 0),e([o({type:String,json:{write:!0}})],j.prototype,"label",void 0),e([o()],j.prototype,"type",void 0),e([o({type:String,json:{write:!0}})],j.prototype,"visibilityExpression",void 0),j=e([p("esri.form.elements.Element")],j);const V=j;var z;let D=z=class extends b{constructor(t){super(t),this.type=null}clone(){return new z({type:this.type})}};e([o({type:["attachment","audio","document","image","signature","video"],json:{write:!0}})],D.prototype,"type",void 0),D=z=e([p("esri.form.elements.inputs.AttachmentInput")],D);const et=D;var J;let I=J=class extends V{constructor(t){super(t),this.attachmentKeyword=null,this.editable=!0,this.input=null,this.type="attachment"}clone(){return new J({attachmentKeyword:this.attachmentKeyword,description:this.description,editable:this.editable,input:this.input,label:this.label,visibilityExpression:this.visibilityExpression})}};e([o({type:String,json:{write:!0}})],I.prototype,"attachmentKeyword",void 0),e([o({type:Boolean,json:{write:!0}})],I.prototype,"editable",void 0),e([o({type:et,json:{read:{source:"inputType"},write:{target:"inputType"}}})],I.prototype,"input",void 0),e([o({type:["attachment"],json:{read:!1,write:!0}})],I.prototype,"type",void 0),I=J=e([p("esri.form.elements.AttachmentElement")],I);const fe=I;let N=class extends b{constructor(t){super(t),this.type=null}};e([o()],N.prototype,"type",void 0),N=e([p("esri.form.elements.inputs.Input")],N);const L=N;let R=class extends L{constructor(i){super(i),this.maxLength=null,this.minLength=0}};e([o({type:Number,json:{write:!0}})],R.prototype,"maxLength",void 0),e([o({type:Number,json:{write:!0}})],R.prototype,"minLength",void 0),R=e([p("esri.form.elements.inputs.TextInput")],R);const le=R;var K;let P=K=class extends le{constructor(t){super(t),this.type="barcode-scanner"}clone(){return new K({maxLength:this.maxLength,minLength:this.minLength})}};e([o({type:["barcode-scanner"],json:{read:!1,write:!0}})],P.prototype,"type",void 0),P=K=e([p("esri.form.elements.inputs.BarcodeScannerInput")],P);const tt=P;var X;let E=X=class extends L{constructor(t){super(t),this.noValueOptionLabel=null,this.showNoValueOption=!0,this.type="combo-box"}clone(){return new X({showNoValueOption:this.showNoValueOption,noValueOptionLabel:this.noValueOptionLabel})}};e([o({type:String,json:{write:!0}})],E.prototype,"noValueOptionLabel",void 0),e([o({type:Boolean,json:{write:!0}})],E.prototype,"showNoValueOption",void 0),e([o({type:["combo-box"],json:{read:!1,write:!0}})],E.prototype,"type",void 0),E=X=e([p("esri.form.elements.inputs.ComboBoxInput")],E);const it=E;var Y;function ve(t){return t!=null?new Date(t):null}function we(t){return t?t.getTime():null}let c=Y=class extends L{constructor(t){super(t),this.includeTime=!1,this.max=null,this.min=null,this.type="datetime-picker"}readMax(t,i){return ve(i.max)}writeMax(t,i){i.max=we(t)}readMin(t,i){return ve(i.min)}writeMin(t,i){i.min=we(t)}clone(){return new Y({includeTime:this.includeTime,max:this.max,min:this.min})}};e([o({type:Boolean,json:{write:!0}})],c.prototype,"includeTime",void 0),e([o({type:Date,json:{type:Number,write:!0}})],c.prototype,"max",void 0),e([d("max")],c.prototype,"readMax",null),e([A("max")],c.prototype,"writeMax",null),e([o({type:Date,json:{type:Number,write:!0}})],c.prototype,"min",void 0),e([d("min")],c.prototype,"readMin",null),e([A("min")],c.prototype,"writeMin",null),e([o({type:["datetime-picker"],json:{read:!1,write:!0}})],c.prototype,"type",void 0),c=Y=e([p("esri.form.elements.inputs.DateTimePickerInput")],c);const ot=c;var ee;let S=ee=class extends L{constructor(t){super(t),this.noValueOptionLabel=null,this.showNoValueOption=!0,this.type="radio-buttons"}clone(){return new ee({noValueOptionLabel:this.noValueOptionLabel,showNoValueOption:this.showNoValueOption})}};e([o({type:String,json:{write:!0}})],S.prototype,"noValueOptionLabel",void 0),e([o({type:Boolean,json:{write:!0}})],S.prototype,"showNoValueOption",void 0),e([o({type:["radio-buttons"],json:{read:!1,write:!0}})],S.prototype,"type",void 0),S=ee=e([p("esri.form.elements.inputs.RadioButtonsInput")],S);const rt=S;var te;let O=te=class extends L{constructor(t){super(t),this.offValue=null,this.onValue=null,this.type="switch"}clone(){return new te({offValue:this.offValue,onValue:this.onValue})}};e([o({type:[String,Number],json:{write:!0}})],O.prototype,"offValue",void 0),e([o({type:[String,Number],json:{write:!0}})],O.prototype,"onValue",void 0),e([o({type:["switch"],json:{read:!1,write:!0}})],O.prototype,"type",void 0),O=te=e([p("esri.form.elements.inputs.SwitchInput")],O);const st=O;var ie;let q=ie=class extends le{constructor(t){super(t),this.type="text-area"}clone(){return new ie({maxLength:this.maxLength,minLength:this.minLength})}};e([o({type:["text-area"],json:{read:!1,write:!0}})],q.prototype,"type",void 0),q=ie=e([p("esri.form.elements.inputs.TextAreaInput")],q);const nt=q;var oe;let G=oe=class extends le{constructor(t){super(t),this.type="text-box"}clone(){return new oe({maxLength:this.maxLength,minLength:this.minLength})}};e([o({type:["text-box"],json:{read:!1,write:!0}})],G.prototype,"type",void 0),G=oe=e([p("esri.form.elements.inputs.TextBoxInput")],G);const pt=G,at={base:L,key:"type",typeMap:{"barcode-scanner":tt,"combo-box":it,"datetime-picker":ot,"radio-buttons":rt,switch:st,"text-area":nt,"text-box":pt}};var re;let u=re=class extends V{constructor(t){super(t),this.domain=null,this.editable=!0,this.editableExpression=null,this.fieldName=null,this.hint=null,this.input=null,this.requiredExpression=null,this.type="field",this.valueExpression=null}clone(){return new re({description:this.description,domain:this.domain,editable:this.editable,editableExpression:this.editableExpression,fieldName:this.fieldName,hint:this.hint,input:this.input,label:this.label,requiredExpression:this.requiredExpression,valueExpression:this.valueExpression,visibilityExpression:this.visibilityExpression})}};e([o({types:De,json:{read:{reader:Ne},write:!0}})],u.prototype,"domain",void 0),e([o({type:Boolean,json:{write:!0}})],u.prototype,"editable",void 0),e([o({type:String,json:{write:!0}})],u.prototype,"editableExpression",void 0),e([o({type:String,json:{write:!0}})],u.prototype,"fieldName",void 0),e([o({type:String,json:{write:!0}})],u.prototype,"hint",void 0),e([o({types:at,json:{read:{source:"inputType"},write:{target:"inputType"}}})],u.prototype,"input",void 0),e([o({type:String,json:{write:!0}})],u.prototype,"requiredExpression",void 0),e([o({type:String,json:{read:!1,write:!0}})],u.prototype,"type",void 0),e([o({type:String,json:{write:!0}})],u.prototype,"valueExpression",void 0),u=re=e([p("esri.form.elements.FieldElement")],u);const be=u;var se;let v=se=class extends V{constructor(t){super(t),this.displayCount=null,this.displayType="list",this.editable=!0,this.orderByFields=null,this.relationshipId=null,this.type="relationship"}clone(){return new se({description:this.description,displayCount:this.displayCount,displayType:this.displayType,editable:this.editable,label:this.label,orderByFields:M(this.orderByFields),relationshipId:this.relationshipId,visibilityExpression:this.visibilityExpression})}};e([o({type:Number,json:{write:!0}})],v.prototype,"displayCount",void 0),e([o({type:["list"],json:{write:!0}})],v.prototype,"displayType",void 0),e([o({type:Boolean,json:{write:!0}})],v.prototype,"editable",void 0),e([o({type:[Pe],json:{write:!0}})],v.prototype,"orderByFields",void 0),e([o({type:Number,json:{write:!0}})],v.prototype,"relationshipId",void 0),e([o({type:["relationship"],json:{read:!1,write:!0}})],v.prototype,"type",void 0),v=se=e([p("esri.form.elements.RelationshipElement")],v);const ge=v;function Ee(t){return{typesWithGroup:{base:V,key:"type",typeMap:{attachment:fe,field:be,group:t,relationship:ge}},typesWithoutGroup:{base:V,key:"type",typeMap:{attachment:fe,field:be,relationship:ge}}}}function Se(t,i,s=!0){if(!t)return null;const r=s?i.typesWithGroup.typeMap:i.typesWithoutGroup.typeMap;return t.filter(n=>r[n.type]).map(n=>r[n.type].fromJSON(n))}function Oe(t,i,s=!0){if(!t)return null;const r=s?i.typesWithGroup.typeMap:i.typesWithoutGroup.typeMap;return t.filter(n=>r[n.type]).map(n=>n.toJSON())}function Te(t,i,s=!0){return t?t.map(r=>Ce(s?i.typesWithGroup:i.typesWithoutGroup,r)):null}var ne;let m=ne=class extends V{constructor(t){super(t),this.elements=null,this.initialState="expanded",this.type="group"}castElements(t){return Te(t,W,!1)}readElements(t,i){return Se(i.formElements,W,!1)}writeElements(t,i){i.formElements=Oe(t,W,!1)}clone(){return new ne({description:this.description,elements:M(this.elements),initialState:this.initialState,label:this.label,visibilityExpression:this.visibilityExpression})}};e([o({json:{write:!0}})],m.prototype,"elements",void 0),e([Ie("elements")],m.prototype,"castElements",null),e([d("elements",["formElements"])],m.prototype,"readElements",null),e([A("elements")],m.prototype,"writeElements",null),e([o({type:["collapsed","expanded"],json:{write:!0}})],m.prototype,"initialState",void 0),e([o({type:String,json:{read:!1,write:!0}})],m.prototype,"type",void 0),m=ne=e([p("esri.form.elements.GroupElement")],m);const W=Ee(m),lt=m;var pe;const H=Ee(lt);let h=pe=class extends b{constructor(t){super(t),this.description=null,this.elements=null,this.expressionInfos=null,this.preserveFieldValuesWhenHidden=!1,this.title=null}castElements(t){return Te(t,H)}readElements(t,i){return Se(i.formElements,H)}writeElements(t,i){i.formElements=Oe(t,H)}clone(){return new pe({description:this.description,expressionInfos:M(this.expressionInfos),elements:M(this.elements),title:this.title,preserveFieldValuesWhenHidden:this.preserveFieldValuesWhenHidden})}};e([o({type:String,json:{write:!0}})],h.prototype,"description",void 0),e([o({json:{write:!0}})],h.prototype,"elements",void 0),e([Ie("elements")],h.prototype,"castElements",null),e([d("elements",["formElements"])],h.prototype,"readElements",null),e([A("elements")],h.prototype,"writeElements",null),e([o({type:[Ye],json:{write:!0}})],h.prototype,"expressionInfos",void 0),e([o({type:Boolean,json:{default:!1,write:!0}})],h.prototype,"preserveFieldValuesWhenHidden",void 0),e([o({type:String,json:{write:!0}})],h.prototype,"title",void 0),h=pe=e([p("esri.form.FormTemplate")],h);const Bt=h;let w=class extends B(b){constructor(i){super(i),this.creatorField=null,this.creationDateField=null,this.editorField=null,this.editDateField=null,this.realm=null,this.dateFieldsTimeReference=null}};e([o()],w.prototype,"creatorField",void 0),e([o()],w.prototype,"creationDateField",void 0),e([o()],w.prototype,"editorField",void 0),e([o()],w.prototype,"editDateField",void 0),e([o()],w.prototype,"realm",void 0),e([o({type:Z})],w.prototype,"dateFieldsTimeReference",void 0),w=e([p("esri.layers.support.EditFieldsInfo")],w);const dt=w;let f=class extends B(b){constructor(i){super(i)}};e([o({constructOnly:!0,json:{write:!0}})],f.prototype,"name",void 0),e([o({constructOnly:!0,json:{write:!0}})],f.prototype,"fields",void 0),e([o({constructOnly:!0,json:{write:!0}})],f.prototype,"isAscending",void 0),e([o({constructOnly:!0,json:{write:!0}})],f.prototype,"indexType",void 0),e([o({constructOnly:!0,json:{write:!0}})],f.prototype,"isUnique",void 0),e([o({constructOnly:!0,json:{write:!0}})],f.prototype,"description",void 0),f=e([p("esri.layers.support.FeatureIndex")],f);const ut=new ae({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryMultiPatch:"multipatch"});async function Qt(t,i,s,r){const n=await g(t);if(await de(t,i,r),!n.addAttachment)throw new l(r,"Layer source does not support addAttachment capability");return n.addAttachment(i,s)}function de(t,i,s){const{attributes:r}=i,{objectIdField:n}=t;return t.get("capabilities.data.supportsAttachment")?i?r?n&&r[n]?Promise.resolve():Promise.reject(new l(s,`feature is missing the identifying attribute ${n}`)):Promise.reject(new l(s,"'attributes' are required on a feature to query attachments")):Promise.reject(new l(s,"A feature is required to add/delete/update attachments")):Promise.reject(new l(s,"this layer doesn't support attachments"))}async function Wt(t,i,s,r,n){const a=await g(t);if(await de(t,i,n),!a.updateAttachment)throw new l(n,"Layer source does not support updateAttachment capability");return a.updateAttachment(i,s,r)}async function Ht(t,i,s){const r=await Ze(()=>import("./editingSupport-bf767521.js"),["./editingSupport-bf767521.js","./Graphic-46941d56.js","./JSONSupport-32b5ad86.js","./string-7a2f1d87.js","./typedArrayUtil-70e1d79e.js","./ensureType-249b88cd.js","./Error-62cc7aff.js","./nextTick-3ee5a785.js","./promiseUtils-59dab60c.js","./geometry-f89ca072.js","./Extent-2ad2c9a9.js","./Ellipsoid-89682c5e.js","./Polyline-cf51ad23.js","./typeUtils-05f9d41d.js","./PopupTemplate-c1fb66ed.js","./Clonable-95fa5d2d.js","./Collection-9e42cc30.js","./Evented-36093e88.js","./SimpleObservable-a6d3d2d8.js","./fieldUtils-e397be4b.js","./preload-helper-41c905a7.js","./arcadeOnDemand-5c3ab3f7.js","./enumeration-504d95a2.js","./number-2db5f4a2.js","./locale-30120714.js","./Identifiable-99d92428.js","./symbols-5a102dff.js","./CIMSymbol-561444b9.js","./Color-5a385b27.js","./colorUtils-639f4d25.js","./mathUtils-5b623c84.js","./vec3-015ca254.js","./common-d0b63c2d.js","./vec4-c7a19f0d.js","./screenUtils-410d12c0.js","./opacityUtils-c0957a27.js","./symbolLayerUtils3D-5a2f49a8.js","./aaBoundingBox-dfb04110.js","./aaBoundingRect-42f9721f.js","./request-f01affa1.js","./persistableUrlUtils-ccf13db2.js","./Symbol3DAnchorPosition2D-d0207ef9.js","./collectionUtils-61fc1a27.js","./Portal-52d960e8.js","./Loadable-7c3ecd79.js","./Promise-3959c3ee.js","./PortalGroup-b49a7409.js","./PortalUser-85cf1ca9.js","./jsonUtils-6d0a72e3.js","./uuid-73213768.js","./normalizeUtils-11faac16.js","./normalizeUtilsCommon-f5194d67.js","./assetEditingSupport-2cebf928.js","./EditBusLayer-40721674.js","./layerUtils-ff76096c.js"],import.meta.url),n=await t.load();return r.applyEdits(n,n.source,i,s)}async function Zt(t,i,s,r){const n=await g(t);if(await de(t,i,r),!n.deleteAttachments)throw new l(r,"Layer source does not support deleteAttachments capability");return n.deleteAttachments(i,s)}async function _t(t,i,s){const r=(await t.load({signal:i==null?void 0:i.signal})).source;if(!r.fetchRecomputedExtents)throw new l(s,"Layer source does not support fetchUpdates capability");return r.fetchRecomputedExtents(i)}async function zt(t,i,s,r){var ye,ce;i=Xe.from(i),await t.load();const n=t.source,a=t.capabilities;if(!((ye=a==null?void 0:a.data)!=null&&ye.supportsAttachment))throw new l(r,"this layer doesn't support attachments");const{attachmentTypes:F,objectIds:k,globalIds:$,num:Me,size:Q,start:Ve,where:ue}=i;if(!((ce=a==null?void 0:a.operations)!=null&&ce.supportsQueryAttachments)&&((F==null?void 0:F.length)>0||($==null?void 0:$.length)>0||(Q==null?void 0:Q.length)>0||Me||Ve||ue))throw new l(r,"when 'capabilities.operations.supportsQueryAttachments' is false, only objectIds is supported",i);if(!(k!=null&&k.length||$!=null&&$.length||ue))throw new l(r,"'objectIds', 'globalIds', or 'where' are required to perform attachment query",i);if(!n.queryAttachments)throw new l(r,"Layer source does not support queryAttachments capability",i);return n.queryAttachments(i)}async function Jt(t,i,s,r){const n=await g(t);if(!n.queryObjectIds)throw new l(r,"Layer source does not support queryObjectIds capability");return n.queryObjectIds(U.from(i)??t.createQuery(),s)}async function Kt(t,i,s,r){const n=await g(t);if(!n.queryFeatureCount)throw new l(r,"Layer source does not support queryFeatureCount capability");return n.queryFeatureCount(U.from(i)??t.createQuery(),s)}async function Xt(t,i,s,r){const n=await g(t);if(!n.queryExtent)throw new l(r,"Layer source does not support queryExtent capability");return n.queryExtent(U.from(i)??t.createQuery(),s)}async function Yt(t,i,s,r){const n=await g(t);if(!n.queryRelatedFeatures)throw new l(r,"Layer source does not support queryRelatedFeatures capability");return n.queryRelatedFeatures($e.from(i),s)}async function ei(t,i,s,r){const n=await g(t);if(!n.queryRelatedFeaturesCount)throw new l(r,"Layer source does not support queryRelatedFeaturesCount capability");return n.queryRelatedFeaturesCount($e.from(i),s)}async function ti(t){const i=t.source;if(i!=null&&i.refresh)try{const{dataChanged:s,updates:r}=await i.refresh();if(Fe(r)&&(t.sourceJSON={...t.sourceJSON,...r},t.read(r,{origin:"service",url:t.parsedUrl})),s)return!0}catch{}if(t.definitionExpression)try{return(await _e(t.definitionExpression,t.fieldsIndex)).hasDateFunctions}catch{}return!1}function ii(t){const i=new U,s=t.get("capabilities.data"),r=t.get("capabilities.query");i.historicMoment=t.historicMoment,i.gdbVersion=t.gdbVersion,i.returnGeometry=!0,r&&(i.compactGeometryEnabled=r.supportsCompactGeometry,i.defaultSpatialReferenceEnabled=r.supportsDefaultSpatialReference),s&&(s.supportsZ&&t.returnZ!=null&&(i.returnZ=t.returnZ),s.supportsM&&t.returnM!=null&&(i.returnM=t.returnM)),i.outFields=["*"];const{timeOffset:n,timeExtent:a}=t;return i.timeExtent=n!=null&&a!=null?a.offset(-n.value,n.unit):a||null,i.multipatchOption=t.geometryType==="multipatch"?"xyFootprint":null,i}function yt(t){const{globalIdField:i,fields:s}=t;if(i)return i;if(s){for(const r of s)if(r.type==="esriFieldTypeGlobalID")return r.name}}function ct(t){const{objectIdField:i,fields:s}=t;if(i)return i;if(s){for(const r of s)if(r.type==="esriFieldTypeOID")return r.name}}function ht(t){return t.currentVersion?t.currentVersion:t.hasOwnProperty("capabilities")||t.hasOwnProperty("drawingInfo")||t.hasOwnProperty("hasAttachments")||t.hasOwnProperty("htmlPopupType")||t.hasOwnProperty("relationships")||t.hasOwnProperty("timeInfo")||t.hasOwnProperty("typeIdField")||t.hasOwnProperty("types")?10:9.3}async function g(t){return(await t.load()).source}async function mt(t,i){if(!C||C.findCredential(t))return;let s;try{const r=await Ke(t,i);r&&(s=await C.checkSignInStatus(`${r}/sharing`))}catch{}if(s)try{const r=Fe(i)?i.signal:null;await C.getCredential(t,{signal:r})}catch{}}async function oi(t,i){var n;const s=(n=t.parsedUrl)==null?void 0:n.path;if(!s)return;const r=t.editFieldsInfo;(t.userHasUpdateItemPrivileges||t.userHasFullEditingPrivileges&&t.capabilities.operations.supportsEditing||r!=null&&r.creatorField||r!=null&&r.editorField)&&await mt(s,i)}function ri(t){var i;return!((i=t.sourceJSON)!=null&&i.isMultiServicesView)&&(t.userHasUpdateItemPrivileges||t.editingEnabled)}let T=class extends B(b){constructor(i){super(i),this.shapeAreaField=null,this.shapeLengthField=null,this.units=null}};e([o({type:String,json:{read:{source:"shapeAreaFieldName"}}})],T.prototype,"shapeAreaField",void 0),e([o({type:String,json:{read:{source:"shapeLengthFieldName"}}})],T.prototype,"shapeLengthField",void 0),e([o({type:String,json:{read:t=>Le.read(t)||Re.read(t)}})],T.prototype,"units",void 0),T=e([p("esri.layers.support.GeometryFieldsInfo")],T);const ft=T,xe=new ae({esriRelCardinalityOneToOne:"one-to-one",esriRelCardinalityOneToMany:"one-to-many",esriRelCardinalityManyToMany:"many-to-many"}),je=new ae({esriRelRoleOrigin:"origin",esriRelRoleDestination:"destination"});let y=class extends B(b){constructor(t){super(t),this.cardinality=null,this.composite=null,this.id=null,this.keyField=null,this.keyFieldInRelationshipTable=null,this.name=null,this.relatedTableId=null,this.relationshipTableId=null,this.role=null}};e([o({json:{read:xe.read,write:xe.write}})],y.prototype,"cardinality",void 0),e([o({json:{read:!0,write:!0}})],y.prototype,"composite",void 0),e([o({json:{read:!0,write:!0}})],y.prototype,"id",void 0),e([o({json:{read:!0,write:!0}})],y.prototype,"keyField",void 0),e([o({json:{read:!0,write:!0}})],y.prototype,"keyFieldInRelationshipTable",void 0),e([o({json:{read:!0,write:!0}})],y.prototype,"name",void 0),e([o({json:{read:!0,write:!0}})],y.prototype,"relatedTableId",void 0),e([o({json:{read:!0,write:!0}})],y.prototype,"relationshipTableId",void 0),e([o({json:{read:je.read,write:je.write}})],y.prototype,"role",void 0),y=e([p("esri.layers.support.Relationship")],y);const vt=y,ni=t=>{let i=class extends t{constructor(){super(...arguments),this.capabilities=null,this.copyright=null,this.dateFieldsTimeReference=null,this.datesInUnknownTimezone=!1,this.displayField=null,this.definitionExpression=null,this.editFieldsInfo=null,this.editingInfo=null,this.elevationInfo=null,this.floorInfo=null,this.fullExtent=null,this.gdbVersion=null,this.geometryFieldsInfo=null,this.geometryType=null,this.hasM=void 0,this.hasZ=void 0,this.heightModelInfo=null,this.historicMoment=null,this.isTable=!1,this.layerId=void 0,this.minScale=0,this.maxScale=0,this.globalIdField=null,this.objectIdField=null,this.preferredTimeReference=null,this.relationships=null,this.sourceJSON=null,this.returnM=void 0,this.returnZ=void 0,this.serviceDefinitionExpression=null,this.serviceItemId=null,this.spatialReference=he.WGS84,this.subtypeField=null,this.trackIdField=null,this.indexes=new(me.ofType(f)),this.version=void 0}readCapabilitiesFromService(s,r){return Je(r,this.url)}get effectiveCapabilities(){var F;const s=this.capabilities;if(!s)return null;const r=M(s),{operations:n,editing:a}=r;return(F=this.sourceJSON)!=null&&F.isMultiServicesView?(this.userHasUpdateItemPrivileges&&(n.supportsQuery=!0),r):this.userHasUpdateItemPrivileges?(n.supportsAdd=n.supportsDelete=n.supportsEditing=n.supportsQuery=n.supportsUpdate=a.supportsDeleteByOthers=a.supportsGeometryUpdate=a.supportsUpdateByOthers=!0,r):(this.userHasFullEditingPrivileges&&n.supportsEditing&&(n.supportsAdd=n.supportsDelete=n.supportsUpdate=a.supportsGeometryUpdate=!0),r)}readEditingInfo(s,r){const{editingInfo:n}=r;return n?{lastEditDate:n.lastEditDate!=null?new Date(n.lastEditDate):null}:null}readIsTableFromService(s,r){return r.type==="Table"}readMinScale(s,r){return r.effectiveMinScale||s||0}readMaxScale(s,r){return r.effectiveMaxScale||s||0}readGlobalIdFieldFromService(s,r){return yt(r)}readObjectIdFieldFromService(s,r){return ct(r)}readServiceDefinitionExpression(s,r){return r.definitionQuery||r.definitionExpression}set url(s){const r=Be({layer:this,url:s,nonStandardUrlAllowed:!0,logger:qe.getLogger(this.declaredClass)});this._set("url",r.url),r.layerId!=null&&this._set("layerId",r.layerId)}writeUrl(s,r,n,a){Ue(this,s,null,r,a)}readVersion(s,r){return ht(r)}};return e([o({readOnly:!0,json:{read:!1,origins:{service:{read:{source:["advancedQueryCapabilities","allowGeometryUpdates","allowUpdateWithoutMValues","archivingInfo","capabilities","datesInUnknownTimezone","hasAttachments","hasM","hasZ","maxRecordCount","maxRecordCountFactor","ownershipBasedAccessControlForFeatures","standardMaxRecordCount","supportedQueryFormats","supportsAdvancedQueries","supportsApplyEditsWithGlobalIds","supportsAttachmentsByUploadId","supportsAttachmentsResizing","supportsCalculate","supportsCoordinatesQuantization","supportsExceedsLimitStatistics","supportsFieldDescriptionProperty","supportsQuantizationEditMode","supportsRollbackOnFailureParameter","supportsStatistics","supportsTruncate","supportsValidateSql","tileMaxRecordCount","useStandardizedQueries"]}}}}})],i.prototype,"capabilities",void 0),e([d("service","capabilities")],i.prototype,"readCapabilitiesFromService",null),e([o({readOnly:!0})],i.prototype,"effectiveCapabilities",null),e([o({type:String,json:{origins:{service:{read:{source:"copyrightText"}}}}})],i.prototype,"copyright",void 0),e([o({type:Z})],i.prototype,"dateFieldsTimeReference",void 0),e([o({type:Boolean})],i.prototype,"datesInUnknownTimezone",void 0),e([o({type:String,json:{origins:{service:{read:{source:"displayField"}}}}})],i.prototype,"displayField",void 0),e([o({type:String,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],i.prototype,"definitionExpression",void 0),e([o({readOnly:!0,type:dt})],i.prototype,"editFieldsInfo",void 0),e([o({readOnly:!0})],i.prototype,"editingInfo",void 0),e([d("editingInfo")],i.prototype,"readEditingInfo",null),e([o((()=>{const s=M(ke),r=s.json.origins;return r["web-map"]={read:!1,write:!1},r["portal-item"]={read:!1,write:!1},s})())],i.prototype,"elevationInfo",void 0),e([o({type:ze,json:{read:{source:"layerDefinition.floorInfo"},write:{target:"layerDefinition.floorInfo"}}})],i.prototype,"floorInfo",void 0),e([o({type:Ae,json:{origins:{service:{read:{source:"extent"}}}}})],i.prototype,"fullExtent",void 0),e([o()],i.prototype,"gdbVersion",void 0),e([o({readOnly:!0,type:ft,json:{read:{source:"geometryProperties"}}})],i.prototype,"geometryFieldsInfo",void 0),e([o({type:["point","polygon","polyline","multipoint","multipatch","mesh"],json:{origins:{service:{read:ut.read}}}})],i.prototype,"geometryType",void 0),e([o({type:Boolean,json:{origins:{service:{read:!0}}}})],i.prototype,"hasM",void 0),e([o({type:Boolean,json:{origins:{service:{read:!0}}}})],i.prototype,"hasZ",void 0),e([o({readOnly:!0,type:Ge})],i.prototype,"heightModelInfo",void 0),e([o({type:Date})],i.prototype,"historicMoment",void 0),e([o({readOnly:!0})],i.prototype,"isTable",void 0),e([d("service","isTable",["type"])],i.prototype,"readIsTableFromService",null),e([o({type:Number,json:{origins:{service:{read:{source:"id"}},"portal-item":{read:!1,write:{target:"id"}}},read:!1}})],i.prototype,"layerId",void 0),e([o(Qe)],i.prototype,"minScale",void 0),e([d("service","minScale",["minScale","effectiveMinScale"])],i.prototype,"readMinScale",null),e([o(We)],i.prototype,"maxScale",void 0),e([d("service","maxScale",["maxScale","effectiveMaxScale"])],i.prototype,"readMaxScale",null),e([o({type:String})],i.prototype,"globalIdField",void 0),e([d("service","globalIdField",["globalIdField","fields"])],i.prototype,"readGlobalIdFieldFromService",null),e([o({type:String})],i.prototype,"objectIdField",void 0),e([d("service","objectIdField",["objectIdField","fields"])],i.prototype,"readObjectIdFieldFromService",null),e([o({type:Z})],i.prototype,"preferredTimeReference",void 0),e([o({type:[vt],readOnly:!0})],i.prototype,"relationships",void 0),e([o()],i.prototype,"sourceJSON",void 0),e([o({type:Boolean})],i.prototype,"returnM",void 0),e([o({type:Boolean})],i.prototype,"returnZ",void 0),e([o({readOnly:!0})],i.prototype,"serviceDefinitionExpression",void 0),e([d("service","serviceDefinitionExpression",["definitionQuery","definitionExpression"])],i.prototype,"readServiceDefinitionExpression",null),e([o({type:String,readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],i.prototype,"serviceItemId",void 0),e([o({type:he,json:{origins:{service:{read:{source:"extent.spatialReference"}}}}})],i.prototype,"spatialReference",void 0),e([o({type:String,readOnly:!0,json:{origins:{service:{read:!0}}}})],i.prototype,"subtypeField",void 0),e([o({type:String,json:{read:{source:"timeInfo.trackIdField"}}})],i.prototype,"trackIdField",void 0),e([o({readOnly:!0,json:{write:!1}})],i.prototype,"serverGens",void 0),e([o({type:me.ofType(f),readOnly:!0})],i.prototype,"indexes",void 0),e([o(He)],i.prototype,"url",null),e([A("url")],i.prototype,"writeUrl",null),e([o({json:{origins:{service:{read:!0}},read:!1}})],i.prototype,"version",void 0),e([d("service","version",["currentVersion","capabilities","drawingInfo","hasAttachments","htmlPopupType","relationships","timeInfo","typeIdField","types"])],i.prototype,"readVersion",null),i=e([p("esri.layers.mixins.FeatureLayerBase")],i),i};export{ct as A,ri as C,ti as F,ii as I,yt as P,oi as R,ni as T,Bt as a,Kt as b,ut as c,Ht as d,Zt as f,Xt as g,zt as h,ei as j,_t as m,Qt as p,Yt as q,Jt as w,Wt as y};
