import"./ArcadeDate-3d8ef842.js";import{r as z}from"./FieldsIndex-3347fdc5.js";import{o as E}from"./TimeReference-dbe22fa2.js";function P(n){return n!=null&&n.timeZoneIANA?n==null?void 0:n.timeZoneIANA:n!=null&&n.timeZone?E(n,""):""}class U{constructor(){this.dateTimeReferenceMetaData=null,this._fieldTimeZoneIndex={},this._fieldIndex=null,this._ianaPreferred=null,this._ianaTimeInfo=null,this._ianaEditFields=null,this._ianaLayerDateFields=null}static create(i,e){const t=new U;return t.dateTimeReferenceMetaData=e,t._fieldIndex=i instanceof z?i:new z(i),t}fieldTimeZone(i){var d,o,f,m,l,c,T,h,I,R,u,D,_,F,M,A,w,k,y,Z,N,p,v;const e=(d=this._fieldIndex)==null?void 0:d.get(i);if(!e||e.type!=="date"&&e.type!=="esriFieldTypeDate")return null;const t=this._fieldTimeZoneIndex[e.name];if(t!==void 0)return t;const a=[{field:(f=(o=this.dateTimeReferenceMetaData)==null?void 0:o.editFieldsInfo)==null?void 0:f.creationDateField,timeReference:(l=(m=this.dateTimeReferenceMetaData)==null?void 0:m.editFieldsInfo)==null?void 0:l.dateFieldsTimeReference,isunknown:((c=this.dateTimeReferenceMetaData)==null?void 0:c.datesInUnknownTimezone)===!0},{field:(h=(T=this.dateTimeReferenceMetaData)==null?void 0:T.editFieldsInfo)==null?void 0:h.editDateField,timeReference:(R=(I=this.dateTimeReferenceMetaData)==null?void 0:I.editFieldsInfo)==null?void 0:R.dateFieldsTimeReference,isunknown:((u=this.dateTimeReferenceMetaData)==null?void 0:u.datesInUnknownTimezone)===!0},{field:(_=(D=this.dateTimeReferenceMetaData)==null?void 0:D.timeInfo)==null?void 0:_.startTimeField,timeReference:(M=(F=this.dateTimeReferenceMetaData)==null?void 0:F.timeInfo)==null?void 0:M.timeReference,isunknown:((A=this.dateTimeReferenceMetaData)==null?void 0:A.datesInUnknownTimezone)===!0},{field:(k=(w=this.dateTimeReferenceMetaData)==null?void 0:w.timeInfo)==null?void 0:k.endTimeField,timeReference:(Z=(y=this.dateTimeReferenceMetaData)==null?void 0:y.timeInfo)==null?void 0:Z.timeReference,isunknown:((N=this.dateTimeReferenceMetaData)==null?void 0:N.datesInUnknownTimezone)===!0}];for(const r of a)if(r.field===e.name){const x=this.convertToIANA(r.timeReference,r.isunknown);return this._fieldTimeZoneIndex[e.name]=x,x}const s=this.convertToIANA((p=this.dateTimeReferenceMetaData)==null?void 0:p.dateFieldsTimeReference,(v=this.dateTimeReferenceMetaData)==null?void 0:v.datesInUnknownTimezone);return this._fieldTimeZoneIndex[e.name]=s,s}convertToIANA(i,e){return e?"unknown":P(i)}get layerPreferredTimeZone(){var e,t;if(this._ianaPreferred!==null)return this._ianaPreferred;this._ianaPreferred="";const i=(e=this.dateTimeReferenceMetaData)==null?void 0:e.preferredTimeReference;return this._ianaPreferred=this.convertToIANA(i,((t=this.dateTimeReferenceMetaData)==null?void 0:t.datesInUnknownTimezone)===!0),this._ianaPreferred}get layerTimeInfoTimeZone(){var e,t;if(this._ianaTimeInfo!==null)return this._ianaTimeInfo;this._ianaTimeInfo="";const i=(t=(e=this.dateTimeReferenceMetaData)==null?void 0:e.timeInfo)==null?void 0:t.timeReference;return this._ianaTimeInfo=this.convertToIANA(i,!1),this._ianaTimeInfo}get layerEditFieldsTimeZone(){var e,t,a;if(this._ianaEditFields!==null)return this._ianaEditFields;this._ianaEditFields="";const i=(t=(e=this.dateTimeReferenceMetaData)==null?void 0:e.editFieldsInfo)==null?void 0:t.dateFieldsTimeReference;return this._ianaEditFields=this.convertToIANA(i,(a=this.dateTimeReferenceMetaData)==null?void 0:a.datesInUnknownTimezone),this._ianaEditFields}get layerDateFieldsTimeZone(){var e,t;if(this._ianaLayerDateFields!==null)return this._ianaLayerDateFields;this._ianaLayerDateFields="";const i=(e=this.dateTimeReferenceMetaData)==null?void 0:e.dateFieldsTimeReference;return this._ianaLayerDateFields=this.convertToIANA(i,((t=this.dateTimeReferenceMetaData)==null?void 0:t.datesInUnknownTimezone)===!0),this._ianaLayerDateFields}}export{U as T};
