import{e as r,y as a,l as j,a as M,C as L}from"./JSONSupport-32b5ad86.js";import{t as P}from"./typedArrayUtil-70e1d79e.js";import{o as S,r as W,f as _,I as F,w as y,k as b,$ as G,m as I,E as $,M as A}from"./Extent-2ad2c9a9.js";import{T as z}from"./ensureType-249b88cd.js";import{u as E}from"./aaBoundingRect-42f9721f.js";var R;let f=R=class extends j{constructor(e){super(e),this.cols=null,this.level=0,this.levelValue=null,this.origin=null,this.resolution=0,this.rows=null,this.scale=0}clone(){return new R({cols:this.cols,level:this.level,levelValue:this.levelValue,resolution:this.resolution,rows:this.rows,scale:this.scale})}};r([a({json:{write:!0,origins:{"web-document":{read:!1,write:!1},"portal-item":{read:!1,write:!1}}}})],f.prototype,"cols",void 0),r([a({type:z,json:{write:!0}})],f.prototype,"level",void 0),r([a({type:String,json:{write:!0}})],f.prototype,"levelValue",void 0),r([a({json:{write:!0,origins:{"web-document":{read:!1,write:!1},"portal-item":{read:!1,write:!1}}}})],f.prototype,"origin",void 0),r([a({type:Number,json:{write:!0}})],f.prototype,"resolution",void 0),r([a({json:{write:!0,origins:{"web-document":{read:!1,write:!1},"portal-item":{read:!1,write:!1}}}})],f.prototype,"rows",void 0),r([a({type:Number,json:{write:!0}})],f.prototype,"scale",void 0),f=R=r([M("esri.layers.support.LOD")],f);const w=f;class D{constructor(t,o,i,s,l){this.id=t,this.level=o,this.row=i,this.col=s,this.extent=l}}var d;const T=new L({PNG:"png",PNG8:"png8",PNG24:"png24",PNG32:"png32",JPEG:"jpg",JPG:"jpg",DIB:"dib",TIFF:"tiff",EMF:"emf",PS:"ps",PDF:"pdf",GIF:"gif",SVG:"svg",SVGZ:"svgz",Mixed:"mixed",MIXED:"mixed",LERC:"lerc",LERC2D:"lerc2d",RAW:"raw",pbf:"pbf"});let n=d=class extends j{static create(e={}){const{resolutionFactor:t=1,scales:o,size:i=256,spatialReference:s=_.WebMercator,numLODs:l=24}=e;if(!F(s)){const c=[];if(o)for(let u=0;u<o.length;u++){const h=o[u];c.push(new w({level:u,scale:h,resolution:h}))}else{let u=5e-4;for(let h=l-1;h>=0;h--)c.unshift(new w({level:h,scale:u,resolution:u})),u*=2}return new d({dpi:96,lods:c,origin:new y(0,0,s),size:[i,i],spatialReference:s})}const p=b(s),x=e.origin?new y({x:e.origin.x,y:e.origin.y,spatialReference:s}):new y(p?{x:p.origin[0],y:p.origin[1],spatialReference:s}:{x:0,y:0,spatialReference:s}),m=96,v=1/(G(s)*39.37*m),g=[];if(o)for(let c=0;c<o.length;c++){const u=o[c],h=u*v;g.push(new w({level:c,scale:u,resolution:h}))}else{let c=I(s)?512/i*5916575275917094e-7:256/i*591657527591555e-6;const u=Math.ceil(l/t);g.push(new w({level:0,scale:c,resolution:c*v}));for(let h=1;h<u;h++){const O=c/2**t,N=O*v;g.push(new w({level:h,scale:O,resolution:N})),c=O}}return new d({dpi:m,lods:g,origin:x,size:[i,i],spatialReference:s})}constructor(e){super(e),this.dpi=96,this.format=null,this.origin=null,this.minScale=0,this.maxScale=0,this.size=null,this.spatialReference=null}get isWrappable(){const{spatialReference:e,origin:t}=this;if(e&&t){const o=b(e);return e.isWrappable&&!!o&&Math.abs(o.origin[0]-t.x)<=o.dx}return!1}readOrigin(e,t){return y.fromJSON({spatialReference:t.spatialReference,...e})}set lods(e){let t=0,o=0;const i=[],s=this._levelToLOD={};e&&(t=-1/0,o=1/0,e.forEach(l=>{i.push(l.scale),t=l.scale>t?l.scale:t,o=l.scale<o?l.scale:o,s[l.level]=l})),this._set("scales",i),this._set("minScale",t),this._set("maxScale",o),this._set("lods",e),this._initializeUpsampleLevels()}readSize(e,t){return[t.cols,t.rows]}writeSize(e,t){t.cols=e[0],t.rows=e[1]}zoomToScale(e){const t=this.scales;if(e<=0)return t[0];if(e>=t.length-1)return t[t.length-1];const o=Math.floor(e),i=o+1;return t[o]/(t[o]/t[i])**(e-o)}scaleToZoom(e){const t=this.scales,o=t.length-1;let i=0;for(;i<o;i++){const s=t[i],l=t[i+1];if(s<=e)return i;if(l===e)return i+1;if(s>e&&l<e)return i+Math.log(s/e)/Math.log(s/l)}return i}snapScale(e,t=.95){const o=this.scaleToZoom(e);return o%Math.floor(o)>=t?this.zoomToScale(Math.ceil(o)):this.zoomToScale(Math.floor(o))}tileAt(e,t,o,i){const s=this.lodAt(e);if(!s)return null;let l,p;if(typeof t=="number")l=t,p=o;else if($(t.spatialReference,this.spatialReference))l=t.x,p=t.y,i=o;else{const v=A(t,this.spatialReference);if(P(v))return null;l=v.x,p=v.y,i=o}const x=s.resolution*this.size[0],m=s.resolution*this.size[1];return i||(i=new D(null,0,0,0,E())),i.level=e,i.row=Math.floor((this.origin.y-p)/m+.001),i.col=Math.floor((l-this.origin.x)/x+.001),this.updateTileInfo(i),i}updateTileInfo(e,t=d.ExtrapolateOptions.NONE){let o=this.lodAt(e.level);if(!o&&t===d.ExtrapolateOptions.POWER_OF_TWO){const p=this.lods[this.lods.length-1];p.level<e.level&&(o=p)}if(!o)return;const i=e.level-o.level,s=o.resolution*this.size[0]/2**i,l=o.resolution*this.size[1]/2**i;e.id=`${e.level}/${e.row}/${e.col}`,e.extent||(e.extent=E()),e.extent[0]=this.origin.x+e.col*s,e.extent[1]=this.origin.y-(e.row+1)*l,e.extent[2]=e.extent[0]+s,e.extent[3]=e.extent[1]+l}upsampleTile(e){const t=this._upsampleLevels[e.level];return!(!t||t.parentLevel===-1)&&(e.level=t.parentLevel,e.row=Math.floor(e.row/t.factor+.001),e.col=Math.floor(e.col/t.factor+.001),this.updateTileInfo(e),!0)}getTileBounds(e,t){const o=this.lodAt(t.level);if(o==null)return null;const{resolution:i}=o,s=i*this.size[0],l=i*this.size[1];return e[0]=this.origin.x+t.col*s,e[1]=this.origin.y-(t.row+1)*l,e[2]=e[0]+s,e[3]=e[1]+l,e}lodAt(e){var t;return((t=this._levelToLOD)==null?void 0:t[e])??null}clone(){return d.fromJSON(this.write({}))}getOrCreateCompatible(e,t){if(this.size[0]===256&&this.size[1]===256)return e===256?this:null;const o=[],i=this.lods.length;for(let s=0;s<i;s++){const l=this.lods[s],p=l.resolution*t;o.push(new w({level:l.level,scale:l.scale,resolution:p}))}return new d({size:[e,e],dpi:this.dpi,format:this.format,compressionQuality:this.compressionQuality,origin:this.origin,spatialReference:this.spatialReference,lods:o})}_initializeUpsampleLevels(){const e=this.lods;this._upsampleLevels=[];let t=null;for(let o=0;o<e.length;o++){const i=e[o];this._upsampleLevels[i.level]={parentLevel:t?t.level:-1,factor:t?t.resolution/i.resolution:0},t=i}}};r([a({type:Number,json:{write:!0}})],n.prototype,"compressionQuality",void 0),r([a({type:Number,json:{write:!0}})],n.prototype,"dpi",void 0),r([a({type:String,json:{read:T.read,write:T.write,origins:{"web-scene":{read:!1,write:!1}}}})],n.prototype,"format",void 0),r([a({readOnly:!0})],n.prototype,"isWrappable",null),r([a({type:y,json:{write:!0}})],n.prototype,"origin",void 0),r([S("origin")],n.prototype,"readOrigin",null),r([a({type:[w],value:null,json:{write:!0}})],n.prototype,"lods",null),r([a({readOnly:!0})],n.prototype,"minScale",void 0),r([a({readOnly:!0})],n.prototype,"maxScale",void 0),r([a({readOnly:!0})],n.prototype,"scales",void 0),r([a({cast:e=>Array.isArray(e)?e:typeof e=="number"?[e,e]:[256,256]})],n.prototype,"size",void 0),r([S("size",["rows","cols"])],n.prototype,"readSize",null),r([W("size",{cols:{type:z},rows:{type:z}})],n.prototype,"writeSize",null),r([a({type:_,json:{write:!0}})],n.prototype,"spatialReference",void 0),n=d=r([M("esri.layers.support.TileInfo")],n),function(e){var t;(t=e.ExtrapolateOptions||(e.ExtrapolateOptions={}))[t.NONE=0]="NONE",t[t.POWER_OF_TWO=1]="POWER_OF_TWO"}(n||(n={}));const B=n;export{B as j,w as p,D as t};
