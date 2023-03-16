import{k as x}from"./Extent-2ad2c9a9.js";import{r as U}from"./typedArrayUtil-70e1d79e.js";import{e as z}from"./TileKey-5f02dc79.js";import{e as Y}from"./ensureType-249b88cd.js";var R,y,B,p,v,N,P;(function(o){o[o.FILL=0]="FILL",o[o.LINE=1]="LINE",o[o.MARKER=2]="MARKER",o[o.TEXT=3]="TEXT",o[o.LABEL=4]="LABEL"})(R||(R={})),function(o){o[o.NONE=0]="NONE",o[o.MAP=1]="MAP",o[o.LABEL=2]="LABEL",o[o.LABEL_ALPHA=4]="LABEL_ALPHA",o[o.HITTEST=8]="HITTEST",o[o.HIGHLIGHT=16]="HIGHLIGHT",o[o.CLIP=32]="CLIP",o[o.DEBUG=64]="DEBUG",o[o.NUM_DRAW_PHASES=9]="NUM_DRAW_PHASES"}(y||(y={})),function(o){o[o.SIZE=0]="SIZE",o[o.COLOR=1]="COLOR",o[o.OPACITY=2]="OPACITY",o[o.ROTATION=3]="ROTATION"}(B||(B={})),function(o){o[o.NONE=0]="NONE",o[o.OPACITY=1]="OPACITY",o[o.COLOR=2]="COLOR",o[o.ROTATION=4]="ROTATION",o[o.SIZE_MINMAX_VALUE=8]="SIZE_MINMAX_VALUE",o[o.SIZE_SCALE_STOPS=16]="SIZE_SCALE_STOPS",o[o.SIZE_FIELD_STOPS=32]="SIZE_FIELD_STOPS",o[o.SIZE_UNIT_VALUE=64]="SIZE_UNIT_VALUE"}(p||(p={})),function(o){o[o.MINMAX_TARGETS_OUTLINE=128]="MINMAX_TARGETS_OUTLINE",o[o.SCALE_TARGETS_OUTLINE=256]="SCALE_TARGETS_OUTLINE",o[o.FIELD_TARGETS_OUTLINE=512]="FIELD_TARGETS_OUTLINE",o[o.UNIT_TARGETS_OUTLINE=1024]="UNIT_TARGETS_OUTLINE"}(v||(v={})),function(o){o[o.SPRITE=0]="SPRITE",o[o.GLYPH=1]="GLYPH"}(N||(N={})),function(o){o[o.DEFAULT=0]="DEFAULT",o[o.SIMPLE=1]="SIMPLE",o[o.DOT_DENSITY=2]="DOT_DENSITY",o[o.OUTLINE_FILL=3]="OUTLINE_FILL",o[o.OUTLINE_FILL_SIMPLE=4]="OUTLINE_FILL_SIMPLE",o[o.HEATMAP=5]="HEATMAP",o[o.PIE_CHART=6]="PIE_CHART"}(P||(P={}));let F=class{constructor(){this.spans=[]}acquire(t){this.lodInfo=t}release(){this.lodInfo=null,this.spans.length=0}forEach(t,e){const{spans:i,lodInfo:l}=this,{level:s}=l;if(i.length!==0)for(const{row:n,colFrom:r,colTo:a}of i)for(let h=r;h<=a;h++)t.call(e,s,n,l.normalizeCol(h),l.getWorldForColumn(h))}};F.pool=new Y(F);function A(o,t){return[o,t]}function M(o,t,e){return o[0]=t,o[1]=e,o}function D(o,t,e,i,l){return o[0]=t,o[1]=e,o[2]=i,o[3]=l,o}const S=new z("0/0/0/0");class C{static create(t,e,i=null){const l=x(t.spatialReference),s=e.origin||A(t.origin.x,t.origin.y),n=A(t.size[0]*e.resolution,t.size[1]*e.resolution),r=A(-1/0,-1/0),a=A(1/0,1/0),h=A(1/0,1/0);U(i)&&(M(r,Math.max(0,Math.floor((i.xmin-s[0])/n[0])),Math.max(0,Math.floor((s[1]-i.ymax)/n[1]))),M(a,Math.max(0,Math.floor((i.xmax-s[0])/n[0])),Math.max(0,Math.floor((s[1]-i.ymin)/n[1]))),M(h,a[0]-r[0]+1,a[1]-r[1]+1));const{cols:T,rows:I}=e;let _,g,d,f;return!i&&T&&I&&(M(r,T[0],I[0]),M(a,T[1],I[1]),M(h,T[1]-T[0]+1,I[1]-I[0]+1)),t.isWrappable?(_=A(Math.ceil(Math.round((l.valid[1]-l.valid[0])/e.resolution)/t.size[0]),h[1]),g=A(Math.floor((l.origin[0]-s[0])/n[0]),r[1]),d=A(_[0]+g[0]-1,a[1]),f=!0):(g=r,d=a,_=h,f=!1),new C(e.level,e.resolution,e.scale,s,r,a,h,n,g,d,_,f)}constructor(t,e,i,l,s,n,r,a,h,T,I,_){this.level=t,this.resolution=e,this.scale=i,this.origin=l,this.first=s,this.last=n,this.size=r,this.norm=a,this.worldStart=h,this.worldEnd=T,this.worldSize=I,this.wrap=_}normalizeCol(t){if(!this.wrap)return t;const e=this.worldSize[0];return t<0?e-1-Math.abs((t+1)%e):t%e}denormalizeCol(t,e){return this.wrap?this.worldSize[0]*e+t:t}getWorldForColumn(t){return this.wrap?Math.floor(t/this.worldSize[0]):0}getFirstColumnForWorld(t){return t*this.worldSize[0]+this.first[0]}getLastColumnForWorld(t){return t*this.worldSize[0]+this.first[0]+this.size[0]-1}getColumnForX(t){return(t-this.origin[0])/this.norm[0]}getXForColumn(t){return this.origin[0]+t*this.norm[0]}getRowForY(t){return(this.origin[1]-t)/this.norm[1]}getYForRow(t){return this.origin[1]-t*this.norm[1]}getTileBounds(t,e,i=!1){S.set(e);const l=i?S.col:this.denormalizeCol(S.col,S.world),s=S.row;return D(t,this.getXForColumn(l),this.getYForRow(s+1),this.getXForColumn(l+1),this.getYForRow(s)),t}getTileCoords(t,e,i=!1){S.set(e);const l=i?S.col:this.denormalizeCol(S.col,S.world);return Array.isArray(t)?M(t,this.getXForColumn(l),this.getYForRow(S.row)):(t.x=this.getXForColumn(l),t.y=this.getYForRow(S.row)),t}}class w{constructor(t,e,i){this.row=t,this.colFrom=e,this.colTo=i}}const u=new z("0/0/0/0");class O{static create(t,e){t[1]>e[1]&&([t,e]=[e,t]);const[i,l]=t,[s,n]=e,r=s-i,a=n-l,h=a!==0?r/a:0,T=(Math.ceil(l)-l)*h,I=(Math.floor(l)-l)*h;return new O(i,Math.floor(l),Math.ceil(n),h,r<0?T:I,r<0?I:T,r<0?s:i,r<0?i:s)}constructor(t,e,i,l,s,n,r,a){this.x=t,this.ymin=e,this.ymax=i,this.invM=l,this.leftAdjust=s,this.rightAdjust=n,this.leftBound=r,this.rightBound=a}incrRow(){this.x+=this.invM}getLeftCol(){return Math.max(this.x+this.leftAdjust,this.leftBound)}getRightCol(){return Math.min(this.x+this.rightAdjust,this.rightBound)}}const m=[[0,0],[0,0],[0,0],[0,0]],H=1e-6;class ${constructor(t,e=null){this.tileInfo=t,this.fullExtent=e,this.scales=[],this._infoByScale={},this._infoByLevel={};const i=t.lods.slice();i.sort((s,n)=>n.scale-s.scale);const l=this._lodInfos=i.map(s=>C.create(t,s,e));i.forEach((s,n)=>{this._infoByLevel[s.level]=l[n],this._infoByScale[s.scale]=l[n],this.scales[n]=s.scale},this),this._wrap=t.isWrappable}get spatialReference(){return this.tileInfo.spatialReference}getLODInfoAt(t){return this._infoByLevel[typeof t=="number"?t:t.level]}getTileBounds(t,e,i=!1){u.set(e);const l=this._infoByLevel[u.level];return l?l.getTileBounds(t,u,i):t}getTileCoords(t,e,i=!1){u.set(e);const l=this._infoByLevel[u.level];return l?l.getTileCoords(t,u,i):t}getTileCoverage(t,e=192,i="closest"){const l=i==="closest"?this.getClosestInfoForScale(t.scale):this.getSmallestInfoForScale(t.scale),s=F.pool.acquire(l),n=this._wrap;let r,a,h,T=1/0,I=-1/0;const _=s.spans;m[0][0]=m[0][1]=m[1][1]=m[3][0]=-e,m[1][0]=m[2][0]=t.size[0]+e,m[2][1]=m[3][1]=t.size[1]+e;for(const c of m)t.toMap(c,c),c[0]=l.getColumnForX(c[0]),c[1]=l.getRowForY(c[1]);const g=[];let d=3;for(let c=0;c<4;c++){if(m[c][1]===m[d][1]){d=c;continue}const L=O.create(m[c],m[d]);T=Math.min(L.ymin,T),I=Math.max(L.ymax,I),g[L.ymin]===void 0&&(g[L.ymin]=[]),g[L.ymin].push(L),d=c}if(T==null||I==null||I-T>100)return null;let f=[];for(r=T;r<I;){g[r]!=null&&(f=f.concat(g[r])),a=1/0,h=-1/0;for(let c=f.length-1;c>=0;c--){const L=f[c];a=Math.min(a,L.getLeftCol()),h=Math.max(h,L.getRightCol())}if(a=Math.floor(a),h=Math.floor(h),r>=l.first[1]&&r<=l.last[1])if(n)if(l.size[0]<l.worldSize[0]){const c=Math.floor(h/l.worldSize[0]);for(let L=Math.floor(a/l.worldSize[0]);L<=c;L++)_.push(new w(r,Math.max(l.getFirstColumnForWorld(L),a),Math.min(l.getLastColumnForWorld(L),h)))}else _.push(new w(r,a,h));else a>l.last[0]||h<l.first[0]||(a=Math.max(a,l.first[0]),h=Math.min(h,l.last[0]),_.push(new w(r,a,h)));r+=1;for(let c=f.length-1;c>=0;c--){const L=f[c];L.ymax>=r?L.incrRow():f.splice(c,1)}}return s}getTileParentId(t){u.set(t);const e=this._infoByLevel[u.level],i=this._lodInfos.indexOf(e)-1;return i<0?null:(this._getTileIdAtLOD(u,this._lodInfos[i],u),u.id)}getTileResolution(t){const e=this._infoByLevel[typeof t=="object"?t.level:t];return e?e.resolution:-1}getTileScale(t){const e=this._infoByLevel[t.level];return e?e.scale:-1}intersects(t,e){u.set(e);const i=this._infoByLevel[u.level],l=t.lodInfo;if(l.resolution>i.resolution){this._getTileIdAtLOD(u,l,u);const n=l.denormalizeCol(u.col,u.world);for(const r of t.spans)if(r.row===u.row&&r.colFrom<=n&&r.colTo>=n)return!0}if(l.resolution<i.resolution){const[n,r,a,h]=t.spans.reduce((f,c)=>(f[0]=Math.min(f[0],c.row),f[1]=Math.max(f[1],c.row),f[2]=Math.min(f[2],c.colFrom),f[3]=Math.max(f[3],c.colTo),f),[1/0,-1/0,1/0,-1/0]),T=i.denormalizeCol(u.col,u.world),I=l.getColumnForX(i.getXForColumn(T)),_=l.getRowForY(i.getYForRow(u.row)),g=l.getColumnForX(i.getXForColumn(T+1))-1,d=l.getRowForY(i.getYForRow(u.row+1))-1;return!(I>h||g<a||_>r||d<n)}const s=l.denormalizeCol(u.col,u.world);return t.spans.some(n=>n.row===u.row&&n.colFrom<=s&&n.colTo>=s)}normalizeBounds(t,e,i){if(t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],this._wrap){const l=x(this.tileInfo.spatialReference),s=-i*(l.valid[1]-l.valid[0]);t[0]+=s,t[2]+=s}return t}getSmallestInfoForScale(t){const e=this.scales;if(this._infoByScale[t])return this._infoByScale[t];if(t>e[0])return this._infoByScale[e[0]];for(let i=1;i<e.length-1;i++)if(t>e[i]+H)return this._infoByScale[e[i-1]];return this._infoByScale[e[e.length-1]]}getClosestInfoForScale(t){const e=this.scales;return this._infoByScale[t]||(t=e.reduce((i,l)=>Math.abs(l-t)<Math.abs(i-t)?l:i,e[0])),this._infoByScale[t]}scaleToLevel(t){const e=this.scales;if(this._infoByScale[t])return this._infoByScale[t].level;for(let i=e.length-1;i>=0;i--)if(t<e[i])return i===e.length-1?this._infoByScale[e[e.length-1]].level:this._infoByScale[e[i]].level+(e[i]-t)/(e[i]-e[i+1]);return this._infoByScale[e[0]].level}scaleToZoom(t){return this.tileInfo.scaleToZoom(t)}_getTileIdAtLOD(t,e,i){const l=this._infoByLevel[i.level];return t.set(i),e.resolution<l.resolution?null:(e.resolution===l.resolution||(t.level=e.level,t.col=Math.floor(i.col*l.resolution/e.resolution+.01),t.row=Math.floor(i.row*l.resolution/e.resolution+.01)),t)}}export{v as A,R as E,p as L,P as S,y as T,$ as h,F as l};
