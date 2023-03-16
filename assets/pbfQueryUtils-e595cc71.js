import{a as w}from"./Error-62cc7aff.js";import{r as S}from"./typedArrayUtil-70e1d79e.js";import{n as U}from"./pbf-490f560a.js";import{e as G,s as D,t as y}from"./OptimizedFeature-cb86a86f.js";import{E as R,L as d}from"./Extent-2ad2c9a9.js";import{e as x}from"./OptimizedFeatureSet-1d1ac4b9.js";const F=["esriGeometryPoint","esriGeometryMultipoint","esriGeometryPolyline","esriGeometryPolygon"];class se{constructor(e){this._options=e,this.geometryTypes=F,this._coordinatePtr=0,this._vertexDimension=0}createFeatureResult(){return new x}prepareFeatures(e){this._vertexDimension=2,e.hasZ&&this._vertexDimension++,e.hasM&&this._vertexDimension++}finishFeatureResult(e){if(!e||!e.features||!e.hasZ||!this._options.sourceSpatialReference||!e.spatialReference||R(e.spatialReference,this._options.sourceSpatialReference)||e.spatialReference.vcsWkid)return;const a=d(this._options.sourceSpatialReference)/d(e.spatialReference);if(a!==1)for(const n of e.features){if(!G(n))continue;const s=n.geometry.coords;for(let r=2;r<s.length;r+=3)s[r]*=a}}addFeature(e,a){e.features.push(a)}createFeature(){return new D}createSpatialReference(){return{wkid:0}}createGeometry(){return new y}addField(e,a){e.fields.push(a)}allocateCoordinates(e){e.coords.length=e.lengths.reduce((a,n)=>a+n,0)*this._vertexDimension,this._coordinatePtr=0}addCoordinate(e,a){e.coords[this._coordinatePtr++]=a}addCoordinatePoint(e,a){e.coords.push(a)}addLength(e,a){e.lengths.push(a)}addQueryGeometry(e,a){e.queryGeometry=a.queryGeometry,e.queryGeometryType=a.queryGeometryType}createPointGeometry(){return new y}}const b=["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble","esriFieldTypeString","esriFieldTypeDate","esriFieldTypeOID","esriFieldTypeGeometry","esriFieldTypeBlob","esriFieldTypeRaster","esriFieldTypeGUID","esriFieldTypeGlobalID","esriFieldTypeXML"],h=["sqlTypeBigInt","sqlTypeBinary","sqlTypeBit","sqlTypeChar","sqlTypeDate","sqlTypeDecimal","sqlTypeDouble","sqlTypeFloat","sqlTypeGeometry","sqlTypeGUID","sqlTypeInteger","sqlTypeLongNVarchar","sqlTypeLongVarbinary","sqlTypeLongVarchar","sqlTypeNChar","sqlTypeNVarchar","sqlTypeOther","sqlTypeReal","sqlTypeSmallInt","sqlTypeSqlXml","sqlTypeTime","sqlTypeTimestamp","sqlTypeTimestamp2","sqlTypeTinyInt","sqlTypeVarbinary","sqlTypeVarchar"],m=["upperLeft","lowerLeft"];function k(t){return t>=b.length?null:b[t]}function M(t){return t>=h.length?null:h[t]}function T(t){return t>=m.length?null:m[t]}function q(t,e){return e>=t.geometryTypes.length?null:t.geometryTypes[e]}function P(t,e,a){const s=t.asUnsafe(),r=e.createPointGeometry(a);for(;s.next();)switch(s.tag()){case 3:{const i=s.getUInt32(),o=s.pos()+i;let c=0;for(;s.pos()<o;)e.addCoordinatePoint(r,s.getSInt64(),c++);break}default:s.skip()}return r}function _(t,e,a){const r=t.asUnsafe(),i=e.createGeometry(a),o=2+(a.hasZ?1:0)+(a.hasM?1:0);for(;r.next();)switch(r.tag()){case 2:{const c=r.getUInt32(),p=r.pos()+c;let l=0;for(;r.pos()<p;)e.addLength(i,r.getUInt32(),l++);break}case 3:{const c=r.getUInt32(),p=r.pos()+c;let l=0;for(e.allocateCoordinates(i);r.pos()<p;)e.addCoordinate(i,r.getSInt64(),l),l++,l===o&&(l=0);break}default:r.skip()}return i}function L(t){const s=t.asUnsafe(),r=new y;let i="esriGeometryPoint";for(;s.next();)switch(s.tag()){case 2:{const o=s.getUInt32(),c=s.pos()+o;for(;s.pos()<c;)r.lengths.push(s.getUInt32());break}case 3:{const o=s.getUInt32(),c=s.pos()+o;for(;s.pos()<c;)r.coords.push(s.getSInt64());break}case 1:i=F[s.getEnum()];break;default:s.skip()}return{queryGeometry:r,queryGeometryType:i}}function W(t){const l=t.asUnsafe();for(;l.next();)switch(l.tag()){case 1:return l.getString();case 2:return l.getFloat();case 3:return l.getDouble();case 4:return l.getSInt32();case 5:return l.getUInt32();case 6:return l.getInt64();case 7:return l.getUInt64();case 8:return l.getSInt64();case 9:return l.getBool();default:return l.skip(),null}return null}function B(t){const o=t.asUnsafe(),c={type:k(0)};for(;o.next();)switch(o.tag()){case 1:c.name=o.getString();break;case 2:c.type=k(o.getEnum());break;case 3:c.alias=o.getString();break;case 4:c.sqlType=M(o.getEnum());break;case 5:o.skip();break;case 6:c.defaultValue=o.getString();break;default:o.skip()}return c}function N(t){const n={},s=t.asUnsafe();for(;s.next();)switch(s.tag()){case 1:n.name=s.getString();break;case 2:n.isSystemMaintained=s.getBool();break;default:s.skip()}return n}function A(t,e,a,n){const o=e.createFeature(a);let c=0;for(;t.next();)switch(t.tag()){case 1:{const p=n[c++].name;o.attributes[p]=t.processMessage(W);break}case 2:o.geometry=t.processMessageWithArgs(_,e,a);break;case 4:o.centroid=t.processMessageWithArgs(P,e,a);break;default:t.skip()}return o}function V(t){const r=[1,1,1,1],i=t.asUnsafe();for(;i.next();)switch(i.tag()){case 1:r[0]=i.getDouble();break;case 2:r[1]=i.getDouble();break;case 4:r[2]=i.getDouble();break;case 3:r[3]=i.getDouble();break;default:i.skip()}return r}function $(t){const r=[0,0,0,0],i=t.asUnsafe();for(;i.next();)switch(i.tag()){case 1:r[0]=i.getDouble();break;case 2:r[1]=i.getDouble();break;case 4:r[2]=i.getDouble();break;case 3:r[3]=i.getDouble();break;default:i.skip()}return r}function C(t){const s={originPosition:T(0)},r=t.asUnsafe();for(;r.next();)switch(r.tag()){case 1:s.originPosition=T(r.getEnum());break;case 2:s.scale=r.processMessage(V);break;case 3:s.translate=r.processMessage($);break;default:r.skip()}return s}function E(t){const s={},r=t.asUnsafe();for(;r.next();)switch(r.tag()){case 1:s.shapeAreaFieldName=r.getString();break;case 2:s.shapeLengthFieldName=r.getString();break;case 3:s.units=r.getString();break;default:r.skip()}return s}function v(t,e){const o=e.createSpatialReference();for(;t.next();)switch(t.tag()){case 1:o.wkid=t.getUInt32();break;case 5:o.wkt=t.getString();break;case 2:o.latestWkid=t.getUInt32();break;case 3:o.vcsWkid=t.getUInt32();break;case 4:o.latestVcsWkid=t.getUInt32();break;default:t.skip()}return o}function j(t,e){const u=e.createFeatureResult(),g=t.asUnsafe();u.geometryType=q(e,0);let f=!1;for(;g.next();)switch(g.tag()){case 1:u.objectIdFieldName=g.getString();break;case 3:u.globalIdFieldName=g.getString();break;case 4:u.geohashFieldName=g.getString();break;case 5:u.geometryProperties=g.processMessage(E);break;case 7:u.geometryType=q(e,g.getEnum());break;case 8:u.spatialReference=g.processMessageWithArgs(v,e);break;case 10:u.hasZ=g.getBool();break;case 11:u.hasM=g.getBool();break;case 12:u.transform=g.processMessage(C);break;case 9:{const I=g.getBool();u.exceededTransferLimit=I;break}case 13:e.addField(u,g.processMessage(B));break;case 15:f||(e.prepareFeatures(u),f=!0),e.addFeature(u,g.processMessageWithArgs(A,e,u,u.fields));break;case 2:u.uniqueIdField=g.processMessage(N);break;default:g.skip()}return e.finishFeatureResult(u),u}function Z(t,e){const s={};let r=null;for(;t.next();)switch(t.tag()){case 4:r=t.processMessageWithArgs(L);break;case 1:s.featureResult=t.processMessageWithArgs(j,e);break;default:t.skip()}return S(r)&&s.featureResult&&e.addQueryGeometry(s,r),s}function O(t,e){try{const n=new U(new Uint8Array(t),new DataView(t)),s={};for(;n.next();)n.tag()===2?s.queryResult=n.processMessageWithArgs(Z,e):n.skip();return s}catch(a){throw new w("query:parsing-pbf","Error while parsing FeatureSet PBF payload",{error:a})}}function ae(t,e){const a=O(t,e),n=a.queryResult.featureResult,s=a.queryResult.queryGeometry,r=a.queryResult.queryGeometryType;if(n&&n.features&&n.features.length&&n.objectIdFieldName){const i=n.objectIdFieldName;for(const o of n.features)o.attributes&&(o.objectId=o.attributes[i])}return n&&(n.queryGeometry=s,n.queryGeometryType=r),n}export{se as a,k as c,C as q,ae as t};
