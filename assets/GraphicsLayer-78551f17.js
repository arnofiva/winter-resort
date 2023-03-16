import{e as r,y as s,a as p}from"./JSONSupport-32b5ad86.js";import{b as c}from"./ensureType-249b88cd.js";import{t as y}from"./typedArrayUtil-70e1d79e.js";import{j as a,n as d}from"./Collection-9e42cc30.js";import{t as f,n as u}from"./collectionUtils-61fc1a27.js";import{a as v}from"./HandleOwner-f4554d8c.js";import"./string-7a2f1d87.js";import"./Error-62cc7aff.js";import{b as w}from"./Layer-ab90f8be.js";import{a as g}from"./BlendLayer-fe49ee20.js";import{t as _}from"./ScaleRangeLayer-56857dcb.js";import{g as l}from"./Graphic-46941d56.js";import{x as $}from"./ElevationInfo-bc15f954.js";let n=class extends v(a){constructor(e){super(e),this.handles.add([this.on("before-add",t=>{y(t.item)&&t.preventDefault()}),this.on("after-add",t=>this._own(t.item)),this.on("after-remove",t=>this._release(t.item))])}get owner(){return this._get("owner")}set owner(e){e!==this._get("owner")&&(this._releaseAll(),this._set("owner",e),this._ownAll())}_ownAll(){for(const e of this.items)this._own(e)}_releaseAll(){for(const e of this.items)this._release(e)}_createNewInstance(e){return this.itemType?new(a.ofType(this.itemType.Type))(e):new a(e)}};function A(e,t){return{type:e,cast:f,set(m){const h=u(m,this._get(t),e);h.owner=this,this._set(t,h)}}}r([s()],n.prototype,"owner",null),n=r([p("esri.core.support.OwningCollection")],n);let i=class extends n{_own(e){e.layer&&"remove"in e.layer&&e.layer!==this.owner&&e.layer.remove(e),e.layer=this.owner}_release(e){e.layer===this.owner&&(e.layer=null)}};r([d({Type:l,ensureType:c(l)})],i.prototype,"itemType",void 0),i=r([p("esri.support.GraphicsCollection")],i);let o=class extends g(_(w)){constructor(e){super(e),this.elevationInfo=null,this.graphics=new i,this.screenSizePerspectiveEnabled=!0,this.type="graphics",this.internal=!1}destroy(){this.removeAll(),this.graphics.destroy()}add(e){return this.graphics.add(e),this}addMany(e){return this.graphics.addMany(e),this}removeAll(){return this.graphics.removeAll(),this}remove(e){this.graphics.remove(e)}removeMany(e){this.graphics.removeMany(e)}on(e,t){return super.on(e,t)}graphicChanged(e){this.emit("graphic-update",e)}};r([s({type:$})],o.prototype,"elevationInfo",void 0),r([s(A(i,"graphics"))],o.prototype,"graphics",void 0),r([s({type:["show","hide"]})],o.prototype,"listMode",void 0),r([s()],o.prototype,"screenSizePerspectiveEnabled",void 0),r([s({readOnly:!0})],o.prototype,"type",void 0),r([s({constructOnly:!0})],o.prototype,"internal",void 0),o=r([p("esri.layers.GraphicsLayer")],o);const D=o;export{A as a,D as h,i,n as l};
