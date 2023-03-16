import{e,y as i,l as y,a as h,C as c}from"./JSONSupport-32b5ad86.js";import{n as m}from"./geometry-f89ca072.js";import{T as v}from"./TimeExtent-4bfae662.js";import{p as w}from"./string-7a2f1d87.js";import{r as l}from"./typedArrayUtil-70e1d79e.js";import{b as S}from"./ensureType-249b88cd.js";import{r as a,f as R}from"./Extent-2ad2c9a9.js";import{v as j}from"./jsonUtils-6d0a72e3.js";var s;let o=s=class extends y{constructor(r){super(r),this.groupByFields=void 0,this.topCount=void 0,this.orderByFields=void 0}clone(){return new s({groupByFields:this.groupByFields,topCount:this.topCount,orderByFields:this.orderByFields})}};e([i({type:[String],json:{write:!0}})],o.prototype,"groupByFields",void 0),e([i({type:Number,json:{write:!0}})],o.prototype,"topCount",void 0),e([i({type:[String],json:{write:!0}})],o.prototype,"orderByFields",void 0),o=s=e([h("esri.rest.support.TopFilter")],o);const f=o;var n;const d=new c({esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"envelope-intersects",esriSpatialRelIndexIntersects:"index-intersects",esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:"relation"}),u=new c({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"});let t=n=class extends y{constructor(r){super(r),this.cacheHint=void 0,this.distance=void 0,this.geometry=null,this.geometryPrecision=void 0,this.maxAllowableOffset=void 0,this.num=void 0,this.objectIds=null,this.orderByFields=null,this.outFields=null,this.outSpatialReference=null,this.resultType=null,this.returnGeometry=!1,this.returnM=void 0,this.returnZ=void 0,this.start=void 0,this.spatialRelationship="intersects",this.timeExtent=null,this.topFilter=void 0,this.units=null,this.where="1=1"}writeStart(r,p){p.resultOffset=this.start,p.resultRecordCount=this.num||10}clone(){return new n(w({cacheHint:this.cacheHint,distance:this.distance,geometry:this.geometry,geometryPrecision:this.geometryPrecision,maxAllowableOffset:this.maxAllowableOffset,num:this.num,objectIds:this.objectIds,orderByFields:this.orderByFields,outFields:this.outFields,outSpatialReference:this.outSpatialReference,resultType:this.resultType,returnGeometry:this.returnGeometry,returnZ:this.returnZ,returnM:this.returnM,start:this.start,spatialRelationship:this.spatialRelationship,timeExtent:this.timeExtent,topFilter:this.topFilter,units:this.units,where:this.where}))}};e([i({type:Boolean,json:{write:!0}})],t.prototype,"cacheHint",void 0),e([i({type:Number,json:{write:{overridePolicy:r=>({enabled:r>0})}}})],t.prototype,"distance",void 0),e([i({types:m,json:{read:j,write:!0}})],t.prototype,"geometry",void 0),e([i({type:Number,json:{write:!0}})],t.prototype,"geometryPrecision",void 0),e([i({type:Number,json:{write:!0}})],t.prototype,"maxAllowableOffset",void 0),e([i({type:Number,json:{read:{source:"resultRecordCount"}}})],t.prototype,"num",void 0),e([i({json:{write:!0}})],t.prototype,"objectIds",void 0),e([i({type:[String],json:{write:!0}})],t.prototype,"orderByFields",void 0),e([i({type:[String],json:{write:!0}})],t.prototype,"outFields",void 0),e([i({type:R,json:{read:{source:"outSR"},write:{target:"outSR"}}})],t.prototype,"outSpatialReference",void 0),e([i({type:String,json:{write:!0}})],t.prototype,"resultType",void 0),e([i({json:{write:!0}})],t.prototype,"returnGeometry",void 0),e([i({type:Boolean,json:{write:{overridePolicy:r=>({enabled:r})}}})],t.prototype,"returnM",void 0),e([i({type:Boolean,json:{write:{overridePolicy:r=>({enabled:r})}}})],t.prototype,"returnZ",void 0),e([i({type:Number,json:{read:{source:"resultOffset"}}})],t.prototype,"start",void 0),e([a("start"),a("num")],t.prototype,"writeStart",null),e([i({type:String,json:{read:{source:"spatialRel",reader:d.read},write:{target:"spatialRel",writer:d.write}}})],t.prototype,"spatialRelationship",void 0),e([i({type:v,json:{write:!0}})],t.prototype,"timeExtent",void 0),e([i({type:f,json:{write:!0}})],t.prototype,"topFilter",void 0),e([i({type:String,json:{read:u.read,write:{writer:u.write,overridePolicy(r){return{enabled:l(r)&&l(this.distance)&&this.distance>0}}}}})],t.prototype,"units",void 0),e([i({type:String,json:{write:!0}})],t.prototype,"where",void 0),t=n=e([h("esri.rest.support.TopFeaturesQuery")],t),t.from=S(t);const N=t;export{N as v};
