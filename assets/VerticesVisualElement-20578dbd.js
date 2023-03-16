import{l as g}from"./Color-5a385b27.js";import"./string-7a2f1d87.js";import{Z as $}from"./JSONSupport-32b5ad86.js";import{r as x,t as W,l as te,B as A,e as Oe}from"./typedArrayUtil-70e1d79e.js";import{n as m,r as ye,a as M,e as we,F as V,j as Re,z as xe,u as Ee,A as Se,o as Ce}from"./vec3-015ca254.js";import{j as Ae}from"./projection-d42b91be.js";import{Z as re,E as ie}from"./elevationInfoUtils-cb162a43.js";import{l as Ge}from"./reactiveUtils-e6d6c898.js";import{l as se,i as be}from"./screenUtils-410d12c0.js";import{v as Pe,o as $e,l as B,r as Me,s as j}from"./vec2-8acac370.js";import{n as ee}from"./vec2f64-f35767d6.js";import{D as G,a as z}from"./vec4-c7a19f0d.js";import{au as Z,b6 as ze,aQ as L,X as ve,aY as X,ag as Q,bf as ne,bg as oe,a$ as p,bh as N,bi as Y,bj as Te,bk as je,bl as Fe,aA as J,bm as Ie,a7 as We,bd as Ve}from"./index-a7842505.js";import{M as Le}from"./dehydratedFeatures-be6dfdbf.js";import{t as De,S as He}from"./RightAngleQuadVisualElement-31083cb8.js";import{g as u}from"./VisualVariablePassParameters-ded3d86d.js";import{O as H}from"./VertexAttribute-15d1866a.js";import{d as Ue,S as ae}from"./PointVisualElement-d5bac6a0.js";import{r as Be}from"./SnappingContext-2f59ac45.js";import{y as Ne,p as Ye}from"./colorUtils-7641d345.js";import{e as qe}from"./vec4f64-6d0e93be.js";import{a as ke,y as Ze,b as Xe,c as Qe,g as Je}from"./Octree-fac2eadb.js";import{v as Ke,b as le,l as E}from"./lineSegment-8ffcb750.js";import{d as et,h as q}from"./sphere-092242fd.js";import{n as tt}from"./LineVisualElement-2ff4c993.js";import{n as he}from"./MeshComponent-76cc0acf.js";import{n as ce}from"./basicInterfaces-7449a8bf.js";import{v as de}from"./manipulatorUtils-cb1ff919.js";class rt extends De{constructor(e){super(e),this._ray=et(),this._isWorldDown=!1,this._start=m(),this._end=ye(1,0,0),this._width=1,this._color=Z(1,0,1,1),this._polygonOffset=!1,this._writeDepthEnabled=!0,this._innerWidth=0,this._innerColor=Z(1,1,1,1),this._stipplePattern=null,this._stippleOffColor=null,this._stipplePreferContinuous=!0,this._falloff=0,this._extensionType=O.LINE,this._laserlineStyle=null,this._laserlineEnabled=!1,this._renderOccluded=u.OccludeAndTransparent,this._fadedExtensions=_e,this._laserline=new Ue({view:this.view}),this.applyProps(e)}destroy(){this._laserline.destroy(),super.destroy()}createObject3DResourceFactory(e){return{view:e,createResources:t=>this._createObject3DResources(t),destroyResources:t=>this._destroyExternalResources(t),recreateGeometry:(t,r)=>this._recreateObject3DGeometry(t,r),cameraChanged:()=>this._updateGeometry()}}createDrapedResourceFactory(e){return{view:e,createResources:()=>this._createDrapedResources(),destroyResources:t=>this._destroyExternalResources(t),recreateGeometry:t=>this._recreateDrapedGeometry(t)}}updateVisibility(e){super.updateVisibility(e),this._laserline.visible=e}onAttachedChange(){this._laserline.attached=this._laserlineAttached}setStartEndFromWorldDownAtLocation(e){this._isWorldDown=!0,M(this._start,e),this.view.renderCoordsHelper.worldUpAtPosition(e,this._end),we(this._end,e,this._end),q(this._start,this._end,this._ray),this._updateGeometry()}get start(){return this._start}set start(e){this._isWorldDown=!1,V(this._start,e)||(M(this._start,e),q(this._start,this._end,this._ray),this._updateGeometry())}get end(){return this._end}set end(e){this._isWorldDown=!1,V(this._end,e)||(M(this._end,e),q(this._start,this._end,this._ray),this._updateGeometry())}get width(){return this._width}set width(e){e!==this._width&&(this._width=e,this._updateMaterial())}get color(){return this._color}set color(e){G(e,this._color)||(z(this._color,e),this._updateMaterial())}get polygonOffset(){return this._polygonOffset}set polygonOffset(e){e!==this._polygonOffset&&(this._polygonOffset=e,this._updateMaterial())}get writeDepthEnabled(){return this._writeDepthEnabled}set writeDepthEnabled(e){this._writeDepthEnabled!==e&&(this._writeDepthEnabled=e,this._updateMaterial())}get innerWidth(){return this._innerWidth}set innerWidth(e){e!==this._innerWidth&&(this._innerWidth=e,this._updateMaterial())}get innerColor(){return this._innerColor}set innerColor(e){G(e,this._innerColor)||(z(this._innerColor,e),this._updateMaterial())}get stipplePattern(){return this._stipplePattern}set stipplePattern(e){const t=x(e)!==x(this._stipplePattern);this._stipplePattern=e,t?this.recreate():this._updateMaterial()}get stippleOffColor(){return this._stippleOffColor}set stippleOffColor(e){(W(e)||W(this._stippleOffColor)||!G(e,this._stippleOffColor))&&(this._stippleOffColor=x(e)?ze(e):null,this._updateMaterial())}get stipplePreferContinuous(){return this._stipplePreferContinuous}set stipplePreferContinuous(e){e!==this._stipplePreferContinuous&&(this._stipplePreferContinuous=e,this._updateMaterial())}get falloff(){return this._falloff}set falloff(e){e!==this._falloff&&(this._falloff=e,this._updateMaterial())}get extensionType(){return this._extensionType}set extensionType(e){e!==this._extensionType&&(this._extensionType=e,this.recreateGeometry())}get _laserlineAttached(){return this._laserlineEnabled&&x(this._laserlineStyle)&&this.attached&&!this.isDraped}get laserlineStyle(){return this._laserlineStyle}set laserlineStyle(e){this._laserlineStyle=e,this._laserline.attached=this._laserlineAttached,x(e)&&(this._laserline.style=e)}get laserlineEnabled(){return this._laserlineEnabled}set laserlineEnabled(e){this._laserlineEnabled!==e&&(this._laserlineEnabled=e,this._laserline.attached=this._laserlineAttached)}get renderOccluded(){return this._renderOccluded}set renderOccluded(e){e!==this._renderOccluded&&(this._renderOccluded=e,this._updateMaterial())}get _normalizedRenderOccluded(){return this.isDraped&&this._renderOccluded===u.OccludeAndTransparentStencil?u.OccludeAndTransparent:this._renderOccluded}get fadedExtensions(){return this._fadedExtensions}set fadedExtensions(e){this._fadedExtensions=te(e,_e),this.recreateGeometry()}_updateMaterial(){var t,r;const{materialParameters:e}=this;(t=A(this.object3dResources.resources))==null||t.material.setParameters(e),(r=A(this.drapedResources.resources))==null||r.material.setParameters(e)}get materialParameters(){return{width:this._width,color:this._color,stippleOffColor:this._stippleOffColor,stipplePattern:this._stipplePattern,stipplePreferContinuous:this._stipplePreferContinuous,innerWidth:this._innerWidth,innerColor:this._innerColor,falloff:this._falloff,hasPolygonOffset:this._polygonOffset,renderOccluded:this._normalizedRenderOccluded,writeDepth:this._writeDepthEnabled}}_createObject3DResources(e){const t=new L(this.materialParameters),r=new Array;return this._createObject3DGeometry(t,e,r),{material:t,geometries:r,forEach:i=>{i(t),r.forEach(i)}}}_destroyExternalResources(e){e.geometries=[],e.material.dispose()}_recreateObject3DGeometry(e,t){e.geometries.length=0,this._createObject3DGeometry(e.material,t,e.geometries)}_createObject3DGeometry(e,t,r){const i=this._createGeometry(e);r.push(i),t.addGeometry(i),this._updateVerticesObject3D(t)}_createDrapedResources(){const e=new L(this.materialParameters);return{material:e,geometries:[this._createDrapedGeometry(e)]}}_recreateDrapedGeometry(e){e.geometries=[this._createDrapedGeometry(e.material)]}_createDrapedGeometry(e){const t=this._createGeometry(e);this._updateVerticesDraped(t);const r=new ve(t,{boundingInfo:t.boundingInfo});return r.computeBoundingSphere(r.transformation,r.boundingSphere),r}_createGeometry(e){const t=this.extensionType===O.FADED,r=t?[m(),m(),m(),m()]:[m(),m()];return X(e,r,null,t?[1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,0]:null)}_updateGeometry(){if(this.isDraped)this.drapedResources.recreateGeometry();else{const e=A(this.object3dResources.object);e&&this._updateVerticesObject3D(e)}}_updateVerticesObject3D(e){const t=this._lineSegment;this._updateVertexAttributesObject3D(e,t),this._laserline.intersectsLine=t}_updateVerticesDraped(e){this._updateVertexAttributesDraped(e,this._lineSegment)}get _lineSegment(){return this._extensionType===O.FADED?this._updateLineSegmentFinite(ue):this._updateLineSegmentInfinite(this._extensionType,ue)}_updateLineSegmentFinite(e){return le(this._start,this._end,e)}_updateLineSegmentInfinite(e,t){const r=this.view.state.camera;switch(Ze(this._ray,b),e){case O.LINE:b.c0=-Number.MAX_VALUE;break;case O.RAY:case O.GROUND_RAY:{const n=this._ray.origin,h=te(this.view.elevationProvider.getElevation(n[0],n[1],n[2],this.view.renderCoordsHelper.spatialReference,"ground"),0),l=this.view.renderCoordsHelper.getAltitude(n);this._isWorldDown&&l<h&&Re(b.ray.direction,b.ray.direction),this._extensionType===O.GROUND_RAY&&h!=null&&(b.c1=Math.abs(l-h));break}}if(!Xe(r.frustum,b))return this._updateLineSegmentFinite(t);const i=Qe(b,D),s=Je(b,it);return le(i,s,t)}_updateVertexAttributesObject3D(e,t){var s;const r=(s=e.geometries[0].getMutableAttribute(H.POSITION))==null?void 0:s.data;if(!r)return;let i=0;for(const n of this._lineVertices(t))r[i++]=n[0],r[i++]=n[1],r[i++]=n[2];e.geometryVertexAttrsUpdated(e.geometries[0])}_updateVertexAttributesDraped(e,t){var s;const r=(s=e.getMutableAttribute(H.POSITION))==null?void 0:s.data;if(!r)return;let i=0;for(const n of this._lineVertices(t))r[i++]=n[0],r[i++]=n[1],r[i++]=Q;e.invalidateBoundingInfo()}*_lineVertices(e){this.extensionType===O.FADED?(yield E(e,-this.fadedExtensions.start,D),yield E(e,0,D),yield E(e,1,D),yield E(e,1+this.fadedExtensions.end,D)):(yield E(e,0,D),yield E(e,1,D))}}const b=ke(),D=m(),it=m(),ue=Ke();var O;(function(o){o[o.LINE=0]="LINE",o[o.RAY=1]="RAY",o[o.GROUND_RAY=2]="GROUND_RAY",o[o.FADED=3]="FADED"})(O||(O={}));const pe=1/3,_e={start:pe,end:pe};let st=class extends De{constructor(e){super(e),this._location=m(),this._direction=ye(1,0,0),this._width=1,this._offset=1,this._length=18,this._color=Z(1,0,1,1),this._renderOccluded=u.OccludeAndTransparent,this.applyProps(e)}createObject3DResourceFactory(e){return{view:e,createResources:t=>this._createObject3DResources(t),destroyResources:t=>this._destroyObject3DResources(t),recreateGeometry:(t,r)=>this._recreateObject3DGeometry(t,r),cameraChanged:()=>this._updateGeometry()}}createDrapedResourceFactory(e){return{view:e,createResources:()=>this._createDrapedResources(),destroyResources:t=>this._destroyDrapedResources(t),recreateGeometry:t=>this._recreateDrapedGeometry(t)}}get location(){return this._location}set location(e){V(this._location,e)||(M(this._location,e),this._updateGeometry())}get direction(){return this._direction}set direction(e){V(this._direction,e)||(M(this._direction,e),this._updateGeometry())}setDirectionFromPoints(e,t){xe(this._direction,we(this._direction,t,e)),this._updateGeometry()}get width(){return this._width}set width(e){e!==this._width&&(this._width=e,this._updateMaterial())}get offset(){return this._offset}set offset(e){e!==this._offset&&(this._offset=e,this._updateGeometry())}get length(){return this._length}set length(e){e!==this._length&&(this._length=e,this._updateGeometry())}get color(){return this._color}set color(e){G(e,this._color)||(z(this._color,e),this._updateMaterial())}get renderOccluded(){return this._renderOccluded}set renderOccluded(e){e!==this._renderOccluded&&(this._renderOccluded=e,this._updateMaterial())}_createObject3DResources(e){const t=new L(this.materialParameters),r=new Array;return this._createObject3DGeometry(t,e,r),{material:t,geometries:r,forEach:i=>{i(t),r.forEach(i)}}}_destroyObject3DResources(e){e.geometries.length=0,e.material.dispose()}_recreateObject3DGeometry(e,t){e.geometries.length=0,this._createObject3DGeometry(e.material,t,e.geometries)}_createObject3DGeometry(e,t,r){const[i,s]=this._createGeometries(e);t.addGeometry(i),t.addGeometry(s),r.push(i),r.push(s),this._updateVerticesObject3D(t)}_createDrapedResources(){const e=new L(this.materialParameters),t=Ge(()=>this.view.state.contentPixelRatio,()=>{this.drapedResources.recreateGeometry()});return{material:e,geometries:this._createDrapedGeometry(e),pixelRatioHandle:t}}_destroyDrapedResources(e){e.pixelRatioHandle.remove(),e.geometries=[],e.material.dispose()}_recreateDrapedGeometry(e){e.geometries=this._createDrapedGeometry(e.material)}_createDrapedGeometry(e){const t=this._createGeometries(e);this._updateVerticesDraped(t);const r=t.map(i=>new ve(i,{boundingInfo:i.boundingInfo}));for(const i of r)i.computeBoundingSphere(i.transformation,i.boundingSphere);return r}_createGeometries(e){return[X(e,[m(),m()]),X(e,[m(),m()])]}_updateMaterial(){var t,r;const{materialParameters:e}=this;(t=A(this.object3dResources.resources))==null||t.material.setParameters(e),(r=A(this.drapedResources.resources))==null||r.material.setParameters(e)}get materialParameters(){return{width:this._width,color:this._color,renderOccluded:this._renderOccluded}}_updateGeometry(){if(this.isDraped)this.drapedResources.recreateGeometry();else{const e=A(this.object3dResources.object);e&&this._updateVerticesObject3D(e)}}_updateVerticesObject3D(e){const t=this.view.state.camera;t.projectToScreen(this.location,I),Ee(w,this.location,this.direction),t.projectToScreen(w,S),Pe(S,$e(S,S,I)),this._updateVertexAttributesObject3D(t,e,0,I,S,1),this._updateVertexAttributesObject3D(t,e,1,I,S,-1)}_updateVertexAttributesObject3D(e,t,r,i,s,n){var _;const h=t.geometries[r],l=(_=h.getMutableAttribute(H.POSITION))==null?void 0:_.data;if(!l)return;const{start:c,end:d}=this._computeStartEnd(s,i,n,this.offset,this.width,this.length);e.unprojectFromScreen(se(c),w),l[0]=w[0],l[1]=w[1],l[2]=w[2],e.unprojectFromScreen(se(d),w),l[3]=w[0],l[4]=w[1],l[5]=w[2],t.geometryVertexAttrsUpdated(h)}_updateVerticesDraped(e){const{view:{basemapTerrain:{overlayManager:t},state:{contentPixelRatio:r}}}=this,{location:i,width:s,length:n,offset:h}=this,l=nt;l.spatialReference=Oe(t.renderer.spatialReference),l.x=i[0],l.y=i[1];const c=t.overlayPixelSizeInMapUnits(l)*r,d=s*c,_=n*c,f=h*c;this._updateVertexAttributesDraped(e[0],d,_,f,-1),this._updateVertexAttributesDraped(e[1],d,_,f,1)}_updateVertexAttributesDraped(e,t,r,i,s){var _;const n=(_=e.getMutableAttribute(H.POSITION))==null?void 0:_.data;if(!n)return;const{location:h,direction:l}=this,{start:c,end:d}=this._computeStartEnd(l,h,s,i,t,r);n[0]=c[0],n[1]=c[1],n[2]=Q,n[3]=d[0],n[4]=d[1],n[5]=Q,e.invalidateBoundingInfo()}_computeStartEnd(e,t,r,i,s,n){const h=B(fe,Me(fe,e[1]*r,e[0]*-r),i+s/2),l=j(F,j(F,j(F,t,B(F,e,n/2)),h),h);return{start:l,end:j(me,l,B(me,e,-n))}}};const w=m(),fe=ee(),F=ee(),me=ee(),I=be(),S=be(),nt=Le(0,0,void 0,null);class qt extends Be{sortUniqueHints(e){return e.sort((t,r)=>(r instanceof ne?r.length:0)-(t instanceof ne?t.length:0))}visualizeIntersectionPoint(e,t){const{spatialReference:r,view:i}=t;return $(new ae({view:i,primitive:"circle",geometry:oe(e.intersectionPoint,r),elevationInfo:e.isDraped?re:ie,size:20,outlineSize:2,color:[0,0,0,0],outlineColor:g.toUnitRGBA(p.orange),pixelSnappingEnabled:!1}))}visualizePoint(e,t){const{view:r,spatialReference:i}=t,s=this._alignPoint(e.point,e.domain,t);return $(new ae({view:r,primitive:"circle",geometry:oe(s,i),elevationInfo:this._hintElevationInfo(e,t),size:20,outlineSize:2,color:[0,0,0,0],outlineColor:g.toUnitRGBA(p.orange),pixelSnappingEnabled:!1}))}visualizeLine(e,t){const{view:r,spatialReference:i}=t,s=this._alignPoint(e.lineStart,e.domain,t),n=this._alignPoint(e.lineEnd,e.domain,t);return $(this._createLineSegmentHint(e.type,s,n,i,this._hintElevationInfo(e,t),r,e.isDraped,e.fadeLeft,e.fadeRight))}visualizeParallelSign(e,t){const{view:r,spatialReference:i}=t,{isDraped:s}=e,n=this._hintElevationInfo(e,t),h=this._alignPoint(e.lineStart,e.domain,t),l=this._alignPoint(e.lineEnd,e.domain,t),c=R(h,i,n,r,s),d=R(l,i,n,r,s),_=Se(d,c,d,.5),f=new st({view:r,attached:!1,offset:p.parallelLineHintOffset,length:p.parallelLineHintLength,width:p.parallelLineHintWidth,color:g.toUnitRGBA(p.orange),location:_,renderOccluded:s?u.OccludeAndTransparent:u.Opaque,isDraped:s,renderGroup:N.SnappingHint});return f.setDirectionFromPoints(c,_),f.attached=!0,$(f)}visualizeRightAngleQuad(e,t){const{view:r,spatialReference:i}=t,s=this._hintElevationInfo(e,t),{isDraped:n}=e,h=this._alignPoint(e.previousVertex,e.domain,t),l=this._alignPoint(e.centerVertex,e.domain,t),c=this._alignPoint(e.nextVertex,e.domain,t),d=R(h,i,s,r,n),_=R(l,i,s,r,n),f=R(c,i,s,r,n);return $(new He({view:r,attached:!0,color:n?g.toUnitRGBA(p.orangeTransparent):g.toUnitRGBA(p.orange),renderOccluded:n?u.OccludeAndTransparent:u.Transparent,outlineRenderOccluded:n?u.OccludeAndTransparent:u.Opaque,outlineColor:g.toUnitRGBA(p.orange),outlineSize:p.rightAngleHintOutlineSize,size:p.rightAngleHintSize,isDraped:n,geometry:{previous:d,center:_,next:f},renderGroup:N.SnappingHint}))}_createLineSegmentHint(e,t,r,i,s,n,h=!1,l=!0,c=!0){const d=R(t,i,s,n,h),_=R(r,i,s,n,h),f=new rt({view:n,extensionType:O.FADED,start:d,end:_,isDraped:h,color:g.toUnitRGBA(p.orange),renderOccluded:h?u.OccludeAndTransparent:u.Opaque,renderGroup:N.SnappingHint});switch(e){case Y.TARGET:f.width=p.lineHintWidthTarget,f.fadedExtensions={start:0,end:p.lineHintFadedExtensions};break;case Y.REFERENCE_EXTENSION:f.width=p.lineHintWidthReference,f.fadedExtensions={start:0,end:0};break;case Y.REFERENCE:f.width=p.lineHintWidthReference,f.fadedExtensions={start:l?p.lineHintFadedExtensions:0,end:c?p.lineHintFadedExtensions:0}}return f.attached=!0,f}_alignPoint(e,t,r){const i=this._getSelfSnappingZ(t,r);return W(i)?e:Te(e[0],e[1],i)}_hintElevationInfo(e,t){return x(this._getSelfSnappingZ(e.domain,t))?Oe(t.selfSnappingZ).elevationInfo:e.isDraped?re:ie}_getSelfSnappingZ(e,{selfSnappingZ:t}){return e===je.SELF&&x(t)?t.value:null}}function R(o,e,t,r,i,s=m()){if(i){const n=r.basemapTerrain.overlayManager.renderer.spatialReference;Ae(o,e,s,n)}else Fe(o,e,t,r,s);return s}const a={main:new g([255,127,0]),selected:new g([255,255,255]),staged:new g([12,207,255]),outline:new g([0,0,0,.5]),selectedOutline:new g([255,255,255])},P=.3;function T(o,e){const t=o.clone();return t.a*=e,t}function ot(o,e){const t=o.clone(),r=Ne(t);r.s*=e;const i=Ye(r);return t.r=i.r,t.g=i.g,t.b=i.b,t}function y(o,e){if(e)for(const t in e)o[t]=e[t]}class at{constructor(e){this.color=a.main,this.height=90,this.coneHeight=40,this.coneWidth=23,this.width=3,this.renderOccluded=u.Opaque,y(this,e)}}let k=class{constructor(e){this.size=11,this.outlineSize=1,this.collisionPadding=9,this.color=a.main,this.outlineColor=a.outline,this.renderOccluded=u.Opaque,this.hoverOutlineColor=a.selectedOutline,y(this,e)}apply(e,t){const r=this[e];t.setParameters({color:v(r),transparent:e!=="color"||r.a<1,renderOccluded:this.renderOccluded})}};class lt{constructor(e){this.size=40,this.height=.2,this.offset=.25,this.collisionPadding=2,this.color=T(a.main,.5),this.hoverColor=a.main,this.renderOccluded=u.Transparent,this.minSquaredEdgeLength=900,y(this,e)}apply(e,t){const r=this[e];t.setParameters({color:v(r),transparent:r.a<1,renderOccluded:this.renderOccluded})}}class ht{constructor(e){this.vertex=new k({color:a.main,outlineColor:a.outline}),this.edge=new k({color:ot(T(a.main,2/3),.5),outlineColor:T(a.outline,.5),size:8,collisionPadding:8}),this.selected=new k({color:a.selected,outlineColor:a.outline}),this.edgeOffset=new lt,y(this,e)}}class K{constructor(e){this.color=a.selected,this.width=1.5,this.stipplePattern=J(5),this.stippleOffColor=a.outline,this.falloff=0,this.innerWidth=1.5,this.innerColor=a.selected,this.renderOccluded=u.OccludeAndTransparent,y(this,e)}apply(e){e.color=v(this.color),e.width=this.width,e.stipplePattern=this.stipplePattern,e.stippleOffColor=v(this.stippleOffColor),e.falloff=this.falloff,e.innerWidth=this.innerWidth,e.innerColor=v(this.innerColor),e.renderOccluded=this.renderOccluded}}class ct{constructor(e){this.color=a.selected,this.size=4,this.outlineSize=1,this.outlineColor=a.outline,this.shape="square",y(this,e)}apply(e){e.color=v(this.color),e.size=this.size,e.outlineSize=this.outlineSize,e.outlineColor=v(this.outlineColor),e.primitive=this.shape}}let U=class{constructor(e){this.innerColor=a.selected,this.innerWidth=1,this.glowColor=a.main,this.glowWidth=8,this.glowFalloff=8,this.globalAlpha=P,this.globalAlphaContrastBoost=1.5,this.radius=3,this.heightFillColor=a.main,y(this,e)}apply(e,t=1){const r={glowColor:g.toUnitRGB(this.glowColor),glowFalloff:this.glowFalloff,glowWidth:this.glowWidth,innerColor:g.toUnitRGB(this.innerColor),innerWidth:this.innerWidth,globalAlpha:this.globalAlpha*t,globalAlphaContrastBoost:this.globalAlphaContrastBoost,intersectsLineRadius:this.radius};"style"in e?e.style=r:e.laserlineStyle=r}};class dt{constructor(e){this.outline=new K({color:a.outline,renderOccluded:u.OccludeAndTransparentStencil,stippleOffColor:a.selected,stipplePattern:J(5),width:1.5,innerWidth:0}),this.staged=new K({color:a.selected,renderOccluded:u.OccludeAndTransparentStencil,innerColor:a.staged,stippleOffColor:a.outline,stipplePattern:J(5),width:1.5}),this.shadowStyle=new U({globalAlpha:P,glowColor:a.main,glowFalloff:8,glowWidth:8,innerColor:a.selected,innerWidth:1}),y(this,e)}}class ut{constructor(e){this.outline=new ct({color:a.selected,outlineColor:a.outline,outlineSize:1,shape:"circle",size:4}),this.shadowStyle=new U({globalAlpha:P,glowColor:a.main,glowFalloff:1.5,glowWidth:6,innerColor:a.selected,innerWidth:1,radius:2}),y(this,e)}}class pt extends K{constructor(e){super(),this.extensionType=O.GROUND_RAY,y(this,e)}}class _t{constructor(e){this.lineGraphics=new dt,this.pointGraphics=new ut,this.heightPlane=new U({globalAlpha:P,glowColor:a.main,glowFalloff:8,glowWidth:8,innerColor:a.selected,innerWidth:1}),this.heightBox=new U({globalAlpha:P,glowColor:a.main,glowFalloff:8,glowWidth:8,innerColor:a.selected,innerWidth:0,heightFillColor:a.main}),this.zVerticalLine=new pt({color:T(a.main,5*P/3),falloff:2,innerColor:T(a.selected,0),renderOccluded:u.OccludeAndTransparent,stipplePattern:null,width:5,extensionType:O.GROUND_RAY}),this.laserlineAlphaMultiplier=1.5,this.heightPlaneAngleCutoff=20,y(this,e)}}class ft{constructor(e){this.visualElements=new _t,this.reshapeManipulators=new ht,this.zManipulator=new at,y(this,e)}colorToVec4(e){return v(e)}}function v(o){return qe(g.toUnitRGBA(o))}const C=new ft;function mt(o,e,t,r,i){const s=he(3*o.length),n=he(s.length);o.forEach((c,d)=>{s[3*d+0]=c[0],s[3*d+1]=c[1],s[3*d+2]=c.length>2?c[2]:0});const h=Ie(s,e,0,n,0,s,0,s.length/3,t,r,i),l=h!=null;return{numVertices:o.length,position:s,mapPositions:n,projectionSuccess:l,sampledElevation:h}}class Xt extends tt{constructor(e){super(e),this.view=null,this._renderOccluded=u.OccludeAndTransparent,this._vertices=null,this._spatialReference=null,this._color=C.colorToVec4(C.reshapeManipulators.vertex.color),this._size=C.reshapeManipulators.vertex.size,this._outlineColor=C.colorToVec4(C.reshapeManipulators.vertex.outlineColor),this._outlineSize=C.reshapeManipulators.vertex.outlineSize,this._elevationInfo=null,this.applyProps(e)}get renderOccluded(){return this._renderOccluded}set renderOccluded(e){e!==this._renderOccluded&&(this._renderOccluded=e,this._updateMaterial(),this._updateOutlineMaterial())}get vertices(){return this._vertices}set vertices(e){this._vertices=e,this.recreateGeometry()}get spatialReference(){return this._spatialReference}set spatialReference(e){this._spatialReference=e,this.recreateGeometry()}get color(){return this._color}set color(e){G(e,this._color)||(z(this._color,e),this._updateMaterial())}get size(){return this._size}set size(e){e!==this._size&&(this._size=e,this._updateMaterial())}get outlineColor(){return this._outlineColor}set outlineColor(e){G(e,this._outlineColor)||(z(this._outlineColor,e),this._updateOutlineMaterial())}get outlineSize(){return this._outlineSize}set outlineSize(e){e!==this._outlineSize&&(this._outlineSize=e,this._updateOutlineMaterial())}get elevationInfo(){return this._elevationInfo}set elevationInfo(e){this._elevationInfo=e,this.recreateGeometry()}get _vertexMaterialParameters(){return{color:this._color,transparent:this._color[3]<1,screenSizeScale:this.size,renderOccluded:this._renderOccluded}}get _vertexOutlineMaterialParameters(){return{color:this._outlineColor,transparent:this._outlineColor[3]<1,screenSizeScale:this.size+2*this.outlineSize,renderOccluded:this._renderOccluded}}_updateMaterial(){this.attached&&this._vertexMaterial.setParameters(this._vertexMaterialParameters)}_updateOutlineMaterial(){this.attached&&this._vertexOutlineMaterial.setParameters(this._vertexOutlineMaterialParameters)}_createRenderGeometries(){const e=this.vertices;if(W(e)||e.length===0)return[];const t=.5,r=.5,i=mt(e,this.spatialReference,this.view.elevationProvider,this.view.renderCoordsHelper,We.fromElevationInfo(this.elevationInfo)),s=[],n=i.numVertices,h=i.position;for(let l=0;l<n;++l){const c=Ce(gt,h[3*l+0],h[3*l+1],h[3*l+2]),d=ge(this._vertexMaterial,t,c),_=ge(this._vertexOutlineMaterial,r,c);s.push({vertexGeometry:d,vertexOutlineGeometry:_})}return s}createGeometries(e){const t=this._createRenderGeometries();for(const{vertexGeometry:r,vertexOutlineGeometry:i}of t)e.addGeometry(r),e.addGeometry(i)}createExternalResources(){this._vertexMaterial=new de({...this._vertexMaterialParameters,writeDepth:!0,cullFace:ce.Back,screenSizeEnabled:!0}),this._vertexOutlineMaterial=new de({...this._vertexOutlineMaterialParameters,transparent:!0,writeDepth:!0,cullFace:ce.Front,screenSizeEnabled:!0,shadingEnabled:!1})}destroyExternalResources(){this._vertexMaterial=null,this._vertexOutlineMaterial=null}forEachExternalMaterial(e){e(this._vertexMaterial),e(this._vertexOutlineMaterial)}}const gt=m();function ge(o,e,t){return Ve(o,e,16,16,{offset:t})}export{Xt as _,a as r,rt as v,qt as x,C as y};
