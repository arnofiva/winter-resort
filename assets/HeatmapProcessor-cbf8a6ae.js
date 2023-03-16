import{e as _,a as F}from"./JSONSupport-32b5ad86.js";import"./string-7a2f1d87.js";import{r as S,o as f}from"./typedArrayUtil-70e1d79e.js";import"./Error-62cc7aff.js";import"./ensureType-249b88cd.js";import{m as U}from"./diffUtils-a2efee1b.js";import{s as v}from"./heatmapUtils-bc76f08e.js";import{o as E}from"./definitions-12364007.js";import{p as O,o as a}from"./tileUtils-31306c58.js";import"./nextTick-3ee5a785.js";import"./promiseUtils-59dab60c.js";import"./Collection-9e42cc30.js";import"./Evented-36093e88.js";import"./SimpleObservable-a6d3d2d8.js";import"./mathUtils-5b623c84.js";import"./vec3-015ca254.js";import"./common-d0b63c2d.js";import"./vec4-c7a19f0d.js";import"./screenUtils-410d12c0.js";import"./vec4f64-6d0e93be.js";import"./HandleOwner-f4554d8c.js";import"./reactiveUtils-e6d6c898.js";class n{constructor(t,s){this.offset=t,this.extent=s}}function g(i){const t=i.key,s=new Map,r=256,e=E,o=i.tileInfoView.tileInfo.isWrappable;return s.set(a(t,-1,-1,o).id,new n([-e,-e],[e-r,e-r,e,e])),s.set(a(t,0,-1,o).id,new n([0,-e],[0,e-r,e,e])),s.set(a(t,1,-1,o).id,new n([e,-e],[0,e-r,r,e])),s.set(a(t,-1,0,o).id,new n([-e,0],[e-r,0,e,e])),s.set(a(t,1,0,o).id,new n([e,0],[0,0,r,e])),s.set(a(t,-1,1,o).id,new n([-e,e],[e-r,0,e,r])),s.set(a(t,0,1,o).id,new n([0,e],[0,0,e,r])),s.set(a(t,1,1,o).id,new n([e,e],[0,0,r,r])),s}let l=class extends O{constructor(){super(...arguments),this.type="heatmap",this._tileKeyToFeatureSets=new Map}initialize(){this.handles.add([this.tileStore.on("update",this.onTileUpdate.bind(this))])}async update(i,t){const s=t.schema.processors[0];s.type==="heatmap"&&U(this._schema,s)&&(i.mesh=!0,this._schema=s)}onTileUpdate(i){for(const t of i.removed)this._tileKeyToFeatureSets.delete(t.key.id)}onTileClear(i){const t={clear:!0};return this._tileKeyToFeatureSets.delete(i.key.id),this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:i.id,data:t})}async onTileMessage(i,t,s){this._tileKeyToFeatureSets.has(i.key.id)||this._tileKeyToFeatureSets.set(i.key.id,new Map);const r=this._tileKeyToFeatureSets.get(i.key.id);if(r&&S(t.addOrUpdate)&&t.addOrUpdate.hasFeatures&&r.set(t.addOrUpdate.instance,t),t.end){const e=[],o=g(i);this._tileKeyToFeatureSets.forEach((c,d)=>{if(d===i.key.id)c.forEach(p=>f(p.addOrUpdate,m=>e.push(m)));else if(o.has(d)){const p=o.get(d),[m,T]=p.offset;c.forEach(w=>f(w.addOrUpdate,k=>{const K=k.transform(m,T,1,1);e.push(K)}))}});const h=v(e,this._schema.mesh,512,512),u={tileKey:i.key.id,intensityInfo:h},y=[h.matrix];return this.remoteClient.invoke("tileRenderer.onTileData",u,{...s,transferList:y})}}onTileError(i,t,s){return this.remoteClient.invoke("tileRenderer.onTileError",{tileKey:i.id,error:t},s)}};l=_([F("esri.views.2d.layers.features.processors.HeatmapProcessor")],l);const X=l;export{X as default};
