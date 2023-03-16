import{H as h,e as t,y as l,a as p,l as w}from"./JSONSupport-32b5ad86.js";import{g as U,T as d}from"./TimeExtent-4bfae662.js";import{i as x}from"./Clonable-95fa5d2d.js";import"./ensureType-249b88cd.js";import{r as y}from"./typedArrayUtil-70e1d79e.js";import{o as E}from"./enumeration-504d95a2.js";import{o as u,r as T}from"./Extent-2ad2c9a9.js";import{b as O}from"./fieldUtils-e397be4b.js";import{a as j}from"./TimeReference-dbe22fa2.js";const I=h()({esriTimeUnitsMilliseconds:"milliseconds",esriTimeUnitsSeconds:"seconds",esriTimeUnitsMinutes:"minutes",esriTimeUnitsHours:"hours",esriTimeUnitsDays:"days",esriTimeUnitsWeeks:"weeks",esriTimeUnitsMonths:"months",esriTimeUnitsYears:"years",esriTimeUnitsDecades:"decades",esriTimeUnitsCenturies:"centuries",esriTimeUnitsUnknown:void 0});let s=class extends x(w){constructor(i){super(i),this.unit="milliseconds",this.value=0}toMilliseconds(){return U(this.value,this.unit,"milliseconds")}};t([E(I,{nonNullable:!0})],s.prototype,"unit",void 0),t([l({type:Number,json:{write:!0},nonNullable:!0})],s.prototype,"value",void 0),s=t([p("esri.TimeInterval")],s);const o=s;function c(i,e){return o.fromJSON({value:i,unit:e})}let n=class extends x(w){constructor(i){super(i),this.cumulative=!1,this.endField=null,this.fullTimeExtent=null,this.hasLiveData=!1,this.interval=null,this.startField=null,this.timeReference=null,this.trackIdField=null,this.useTime=!0}readFullTimeExtent(i,e){if(!e.timeExtent||!Array.isArray(e.timeExtent)||e.timeExtent.length!==2)return null;const r=new Date(e.timeExtent[0]),a=new Date(e.timeExtent[1]);return new d({start:r,end:a})}writeFullTimeExtent(i,e){i&&y(i.start)&&y(i.end)?e.timeExtent=[i.start.getTime(),i.end.getTime()]:e.timeExtent=null}readInterval(i,e){return e.timeInterval&&e.timeIntervalUnits?c(e.timeInterval,e.timeIntervalUnits):e.defaultTimeInterval&&e.defaultTimeIntervalUnits?c(e.defaultTimeInterval,e.defaultTimeIntervalUnits):null}writeInterval(i,e){e.timeInterval=(i==null?void 0:i.toJSON().value)??null,e.timeIntervalUnits=(i==null?void 0:i.toJSON().unit)??null}};t([l({type:Boolean,json:{name:"exportOptions.timeDataCumulative",write:!0}})],n.prototype,"cumulative",void 0),t([l({type:String,json:{name:"endTimeField",write:{enabled:!0,allowNull:!0}}})],n.prototype,"endField",void 0),t([l({type:d,json:{write:{enabled:!0,allowNull:!0}}})],n.prototype,"fullTimeExtent",void 0),t([u("fullTimeExtent",["timeExtent"])],n.prototype,"readFullTimeExtent",null),t([T("fullTimeExtent")],n.prototype,"writeFullTimeExtent",null),t([l({type:Boolean,json:{write:!0}})],n.prototype,"hasLiveData",void 0),t([l({type:o,json:{write:{enabled:!0,allowNull:!0}}})],n.prototype,"interval",void 0),t([u("interval",["timeInterval","timeIntervalUnits","defaultTimeInterval","defaultTimeIntervalUnits"])],n.prototype,"readInterval",null),t([T("interval")],n.prototype,"writeInterval",null),t([l({type:String,json:{name:"startTimeField",write:{enabled:!0,allowNull:!0}}})],n.prototype,"startField",void 0),t([l({type:j,json:{write:{enabled:!0,allowNull:!0}}})],n.prototype,"timeReference",void 0),t([l({type:String,json:{write:{enabled:!0,allowNull:!0}}})],n.prototype,"trackIdField",void 0),t([l({type:Boolean,json:{name:"exportOptions.useTime",write:!0}})],n.prototype,"useTime",void 0),n=t([p("esri.layers.support.TimeInfo")],n);const N=n,J=i=>{let e=class extends i{constructor(){super(...arguments),this.timeExtent=null,this.timeOffset=null,this.useViewTime=!0}readOffset(r,a){const m=a.timeInfo.exportOptions;if(!m)return null;const v=m.timeOffset,f=I.fromJSON(m.timeOffsetUnits);return v&&f?new o({value:v,unit:f}):null}set timeInfo(r){O(r,this.fieldsIndex),this._set("timeInfo",r)}};return t([l({type:d,json:{write:!1}})],e.prototype,"timeExtent",void 0),t([l({type:o})],e.prototype,"timeOffset",void 0),t([u("service","timeOffset",["timeInfo.exportOptions"])],e.prototype,"readOffset",null),t([l({value:null,type:N,json:{write:!0,origins:{"web-document":{read:!1,write:!1},"portal-item":{read:!1,write:!1}}}})],e.prototype,"timeInfo",null),t([l({type:Boolean,json:{read:{source:"timeAnimation"},write:{target:"timeAnimation"},origins:{"web-scene":{read:!1,write:!1}}}})],e.prototype,"useViewTime",void 0),e=t([p("esri.layers.mixins.TemporalLayer")],e),e};export{J as a,N as v};
