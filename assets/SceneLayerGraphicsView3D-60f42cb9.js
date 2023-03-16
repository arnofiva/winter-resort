import{_ as q}from"./preload-helper-41c905a7.js";import{e as c,y as u,a as H}from"./JSONSupport-32b5ad86.js";import{g as F}from"./Graphic-46941d56.js";import{t as _,r as f,a as b,e as U,M as Q}from"./typedArrayUtil-70e1d79e.js";import{s as E}from"./Error-62cc7aff.js";import{h as C,l as T}from"./reactiveUtils-e6d6c898.js";import{n as z}from"./ensureType-249b88cd.js";import{o as k,n as B}from"./vec3-015ca254.js";import{x as G,j as W}from"./projection-d42b91be.js";import{a2 as Z}from"./Extent-2ad2c9a9.js";import{o as J}from"./zscale-d428b1da.js";import{T as O,C as K,u as Y,a3 as X,O as ee}from"./index-a7842505.js";import{M as te,N as re}from"./dehydratedFeatures-be6dfdbf.js";import{A as S,t as ie}from"./I3SOverrides-902ffd50.js";import{y as oe}from"./FeatureReductionLayer-5d021257.js";import{x as A}from"./Query-6df7497c.js";import{h as se}from"./LercDecoder-bc94632d.js";import{n as ae}from"./LayerView3D-ecd60577.js";import{F as ne,p as pe}from"./FeatureLikeLayerView3D-a1c9f793.js";import{c as de,i as le,u as he,b as me,E as ce}from"./SceneLayerView-0b57f3f2.js";import{n as ue}from"./Evented-36093e88.js";import{g as ge,w as fe,J as _e,a as ye,m as L}from"./I3SUtil-66e1266a.js";import{t as be}from"./DefinitionExpressionSceneLayerView-eee0a8b9.js";import{c as ve}from"./PopupSceneLayerView-811bb436.js";import{Q as xe}from"./orientedBoundingBox-7f391048.js";import{s as Ee}from"./Attribute-f72d3f37.js";import{n as M}from"./MeshComponent-76cc0acf.js";import{R as Ie}from"./Scheduler-22864fbd.js";import"./string-7a2f1d87.js";import"./nextTick-3ee5a785.js";import"./promiseUtils-59dab60c.js";import"./geometry-f89ca072.js";import"./Polyline-cf51ad23.js";import"./typeUtils-05f9d41d.js";import"./PopupTemplate-c1fb66ed.js";import"./Clonable-95fa5d2d.js";import"./Collection-9e42cc30.js";import"./SimpleObservable-a6d3d2d8.js";import"./fieldUtils-e397be4b.js";import"./arcadeOnDemand-5c3ab3f7.js";import"./enumeration-504d95a2.js";import"./number-2db5f4a2.js";import"./locale-30120714.js";import"./Identifiable-99d92428.js";import"./symbols-5a102dff.js";import"./CIMSymbol-561444b9.js";import"./Color-5a385b27.js";import"./colorUtils-639f4d25.js";import"./mathUtils-5b623c84.js";import"./vec4-c7a19f0d.js";import"./common-d0b63c2d.js";import"./screenUtils-410d12c0.js";import"./opacityUtils-c0957a27.js";import"./symbolLayerUtils3D-5a2f49a8.js";import"./aaBoundingBox-dfb04110.js";import"./aaBoundingRect-42f9721f.js";import"./request-f01affa1.js";import"./persistableUrlUtils-ccf13db2.js";import"./Symbol3DAnchorPosition2D-d0207ef9.js";import"./collectionUtils-61fc1a27.js";import"./Portal-52d960e8.js";import"./Loadable-7c3ecd79.js";import"./Promise-3959c3ee.js";import"./PortalGroup-b49a7409.js";import"./PortalUser-85cf1ca9.js";import"./Ellipsoid-89682c5e.js";import"./jsonUtils-6d0a72e3.js";import"./mat4-4714ff8c.js";import"./assets-640b4d04.js";import"./IdentityManager-844d980b.js";import"./intl-0ee83c79.js";import"./messages-f54f7f46.js";import"./uuid-73213768.js";import"./dom-2ec1e33c.js";import"./Cyclical-34b2a5e3.js";import"./workers-591e0dfc.js";import"./Connection-000cba43.js";import"./GraphicsLayer-78551f17.js";import"./HandleOwner-f4554d8c.js";import"./Layer-ab90f8be.js";import"./BlendLayer-fe49ee20.js";import"./mat4f32-60a2394b.js";import"./ScaleRangeLayer-56857dcb.js";import"./ElevationInfo-bc15f954.js";import"./lengthUtils-e2d3809d.js";import"./HeightModelInfo-bc3bd77c.js";import"./sphere-092242fd.js";import"./vec4f64-6d0e93be.js";import"./byteSizeEstimations-f0cab514.js";import"./mat3f64-50f3b9f6.js";import"./mat4f64-abdda1bb.js";import"./quatf64-f8f1c132.js";import"./vec2f64-f35767d6.js";import"./lineSegment-8ffcb750.js";import"./plane-fef3662c.js";import"./spatialReferenceEllipsoidUtils-26c8dea5.js";import"./scaleUtils-b27f2fc2.js";import"./layerUtils-ff76096c.js";import"./AttachmentInfo-2774f92c.js";import"./AttachmentQuery-be73c1f4.js";import"./LegendOptions-d1ee6f9f.js";import"./DimensionalDefinition-89a02a09.js";import"./UniqueValueRenderer-31cfe725.js";import"./diffUtils-a2efee1b.js";import"./colorRamps-844ba070.js";import"./sizeVariableUtils-d4870b0d.js";import"./visualVariableUtils-6f78f1dd.js";import"./compilerUtils-2eb56463.js";import"./jsonUtils-ba20c384.js";import"./styleUtils-ba5d50e4.js";import"./vectorFieldUtils-b0aae2f9.js";import"./colorUtils-7641d345.js";import"./normalizeUtils-11faac16.js";import"./normalizeUtilsCommon-f5194d67.js";import"./asyncUtils-8de18dd2.js";import"./ItemCache-47345b61.js";import"./MemCache-a072224a.js";import"./cimSymbolUtils-12c2ae8a.js";import"./utils-3d986af0.js";import"./jsonUtils-0cd7beab.js";import"./DictionaryLoader-e5256637.js";import"./LRUCache-805da42e.js";import"./deprecate-2ea4a12e.js";import"./heatmapUtils-bc76f08e.js";import"./executeQueryJSON-c3e8823f.js";import"./query-159ca0c6.js";import"./pbfQueryUtils-e595cc71.js";import"./pbf-490f560a.js";import"./OptimizedFeature-cb86a86f.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./queryZScale-7c3cd57e.js";import"./FeatureSet-adc6c42d.js";import"./Field-efd8d6fa.js";import"./fieldType-ec749512.js";import"./featureConversionUtils-66a9b1ed.js";import"./RelationshipQuery-1388e5e8.js";import"./TimeExtent-4bfae662.js";import"./TopFeaturesQuery-c51356f1.js";import"./FeatureLayer-c3299dce.js";import"./MultiOriginJSONSupport-247be6b9.js";import"./serviceCapabilitiesUtils-d47be03f.js";import"./arcgisLayerUrl-1177870a.js";import"./FeatureLayerBase-4bc86305.js";import"./OperationalLayer-892ef1ff.js";import"./TimeReference-dbe22fa2.js";import"./datetime-b6333958.js";import"./editsZScale-1f9f5428.js";import"./APIKeyMixin-a999140b.js";import"./ArcGISService-69574b36.js";import"./CustomParametersMixin-0cb5d402.js";import"./EditBusLayer-40721674.js";import"./OrderedLayer-e39f681d.js";import"./PortalLayer-f8afa381.js";import"./PortalItem-476b4f2f.js";import"./portalItemUtils-f08de884.js";import"./RefreshableLayer-6e09e5c7.js";import"./TemporalLayer-1cafdc62.js";import"./FeatureTemplate-c492af3e.js";import"./FeatureType-9aee1062.js";import"./fieldProperties-13016a3b.js";import"./FieldsIndex-3347fdc5.js";import"./labelingInfo-81f8350c.js";import"./labelUtils-2517fbb8.js";import"./defaultsJSON-59981e75.js";import"./versionUtils-3b55ef95.js";import"./styleUtils-a2cb1d02.js";import"./popupUtils-ef59e204.js";import"./callExpressionWithFeature-b2780134.js";import"./quantizationUtils-5accf704.js";import"./webStyleSymbolUtils-7af9b968.js";import"./devEnvironmentUtils-5002a058.js";import"./ElevationSamplerData-89295dc0.js";import"./TileInfo-c1a6fc90.js";import"./Basemap-a98ee4eb.js";import"./loadAll-b0bbaf30.js";import"./writeUtils-054a51f5.js";import"./CollectionFlattener-53f524d1.js";import"./TablesMixin-d0eb7f9b.js";import"./ViewingMode-5d7d590b.js";import"./vec2-8acac370.js";import"./PhysicallyBasedRendering.glsl-d72e2a11.js";import"./View.glsl-725bf3cf.js";import"./ShaderBuilder-c7fc4a30.js";import"./FloatPassUniform-8a52db3d.js";import"./Float4PassUniform-52993952.js";import"./RgbaFloatEncoding.glsl-31b2b966.js";import"./Texture2DPassUniform-1510cbb0.js";import"./vec3f32-01c06d8d.js";import"./VertexAttribute-15d1866a.js";import"./Texture2DDrawUniform-d1eaa0d6.js";import"./basicInterfaces-7449a8bf.js";import"./PiUtils.glsl-9dc0973a.js";import"./ReadLinearDepth.glsl-9abddde9.js";import"./WaterSurface.glsl-ad07df19.js";import"./ForwardLinearDepth.glsl-3606f02d.js";import"./Matrix3PassUniform-285be0f9.js";import"./Slice.glsl-e5fdd8d3.js";import"./Transform.glsl-e6366353.js";import"./OutputHighlight.glsl-569dde3f.js";import"./MultipassTerrainTest.glsl-029ffa3f.js";import"./NormalUtils.glsl-d1e61521.js";import"./AlphaCutoff-96178e0d.js";import"./TransparencyPassType-a1cb0602.js";import"./EvaluateSceneLighting.glsl-ed7fcdc2.js";import"./VisualVariablePassParameters-ded3d86d.js";import"./enums-fc527c7c.js";import"./VertexElementDescriptor-2925c6af.js";import"./Texture-42bd3a76.js";import"./context-util-eb98c678.js";import"./Util-c12e93ba.js";import"./SSAOBlur.glsl-2bfd75b0.js";import"./ScreenSpacePass.glsl-28a2b6e5.js";import"./SSAO.glsl-1d087e8c.js";import"./ShaderTechniqueConfiguration-5b4afc58.js";import"./mat3-4fd89d48.js";import"./HUD.glsl-03dc2889.js";import"./VerticalOffset.glsl-2b654767.js";import"./Octree-fac2eadb.js";import"./objectResourceUtils-f1a10a8c.js";import"./BufferView-da65c548.js";import"./vec33-6cea25ab.js";import"./DefaultMaterial_COLOR_GAMMA-8afda99b.js";import"./types-e1c0a5bf.js";import"./Version-b7702d36.js";import"./quat-99c4e099.js";import"./resourceUtils-527631ac.js";import"./Indices-7097baff.js";import"./DefaultMaterial.glsl-0c704a85.js";import"./MixExternalColor.glsl-96fc9ef8.js";import"./symbolColorUtils-7c94928f.js";import"./ObjectAndLayerIdColor.glsl-751e40ac.js";import"./OutputDepth.glsl-ccbc6366.js";import"./VisualVariables.glsl-655a358f.js";import"./DiscardOrAdjustAlphaBlend.glsl-27b032af.js";import"./VertexColor.glsl-e2eb2da5.js";import"./Normals.glsl-81bc0899.js";import"./vec2f32-eaf29605.js";import"./Texture-2b2e584f.js";import"./TextureOnly.glsl-12d60c43.js";import"./InterleavedLayout-d75b8228.js";import"./DefaultTechniqueConfiguration-d3c0bf46.js";import"./RealisticTree.glsl-f514fb19.js";import"./edgeProcessing-9fe73f05.js";import"./deduplicate-3aef92f2.js";import"./projection-720a032f.js";import"./HUDMaterial.glsl-bcc90ab4.js";import"./sdfPrimitives-16d07d48.js";import"./floatRGBA-11065dbc.js";import"./labelFormatUtils-deccc57b.js";import"./LineCallout.glsl-828f2c8d.js";import"./earcut-61f7b102.js";import"./QueryEngineResult-60e819c8.js";import"./WhereClause-ec2695a9.js";import"./executionError-fb3f283a.js";import"./utils-eec406bb.js";import"./generateRendererUtils-9fa055c1.js";import"./json-48e3ea08.js";import"./MarkerSizing.glsl-1e815ddd.js";import"./RibbonLine.glsl-3b5ffb4c.js";import"./LineStipple.glsl-df787c01.js";import"./LineMarker.glsl-af47e9ca.js";import"./NativeLine.glsl-eddd3297.js";import"./Path.glsl-98387e31.js";import"./ColorMaterial.glsl-2f16b93b.js";import"./Pattern.glsl-3d1048ed.js";import"./enums-fb086c25.js";import"./config-f7904f35.js";import"./TileKey-5f02dc79.js";import"./workerHelper-7b69330e.js";import"./capabilities-ef053cf2.js";import"./originUtils-1469eeaf.js";import"./multiOriginJSONSupportUtils-c978f4c3.js";import"./saveUtils-44b7e317.js";import"./resourceUtils-a295dbcf.js";import"./floating-ui-8c8de742.js";import"./StreamLayer-869211a2.js";import"./geometryEngine-5399ce6b.js";import"./geometryEngineBase-e1a33b0a.js";import"./hydrated-d446f5f6.js";import"./SceneFilter-9f7d00a7.js";import"./persistable-5845b8f0.js";import"./resourceExtension-58c3e69d.js";import"./elevationInfoUtils-cb162a43.js";import"./DimensionAnalysis-26fb1362.js";import"./Analysis-ba6617ff.js";import"./ExportImageParameters-1fbdfa05.js";import"./sublayerUtils-1d562031.js";import"./quatf32-51a323b8.js";import"./I3SNode-748304db.js";import"./I3SBinaryReader-c63d93b8.js";import"./RenderTexture-aefd9441.js";import"./FeatureLayerView3D-9fb89773.js";import"./FeatureLayerViewBase3D-43f0cde9.js";import"./EventedSet-c2261a24.js";import"./popupUtils-ec9821da.js";import"./LayerView-facba986.js";import"./RefreshableLayerView-e9eef719.js";import"./dehydratedFeatureComparison-e58a8d13.js";import"./queryForSymbologySnapping-a241de4d.js";import"./hash-0ddfbf4b.js";import"./Graphics3DObjectStates-63ee4559.js";import"./optimizedFeatureQueryEngineAdapter-5596e92b.js";import"./centroid-31e9f7c2.js";import"./PooledRBush-15b28b04.js";import"./quickselect-56c5966e.js";import"./QueryEngine-146c01b4.js";import"./QueryEngineCapabilities-42e44ded.js";import"./FeatureStore-b6e7eda2.js";import"./BoundsStore-3597a01f.js";import"./Heatmap.glsl-e23f16d3.js";import"./HeatmapDensity.glsl-c908d3cd.js";import"./projectExtentUtils-8d020b3e.js";class P extends se{constructor(t){super("SceneLayerWorker","dracoDecompressPointCloudData",{dracoDecompressPointCloudData:i=>[i.geometryBuffer]},t,{hasInitialize:!0})}}class we extends ue{constructor(t,i){super(),this._updateAndCompare=t,this._notifyUpdated=i,this._nodes=new Map,this._graphics=new Map,this._duplicates=new Map}clear(){if(this._graphics.size>0){const t=this.toArray();this._graphics.clear(),this.emit("change",{added:[],removed:t})}this._nodes.clear()}get length(){return this._graphics.size}get(t){return this._graphics.get(t)}getNode(t){return this._nodes.get(t)}hasNode(t){return this._nodes.has(t)}nodes(){return this._nodes.values()}addNode(t,i){this._nodes.set(t,i);const r=i.graphics;if(r.length===0)return;const o=new Set;for(let a=0;a<r.length;a++){const n=r[a],p=n.objectId,l=this._graphics.get(p);if(l){o.add(p),n!==l&&(r[a]=l);const d=this._duplicates.get(p);d?d.push(t):this._duplicates.set(p,[l.nodeIndex,t])}else n.nodeIndex=t,this._graphics.set(p,n)}o.size&&this._updateForeignGraphics(i);const s=o.size>0?r.filter(a=>!o.has(a.objectId)):r;s.length>0&&this.emit("change",{added:s,removed:[]})}removeNode(t){const i=this._nodes.get(t);if(!i)return void console.error("Removing unknown node");this._nodes.delete(t);const r=new Set,o=[];for(const s of i.graphics){const a=s.objectId,n=this._graphics.get(a);if(!n)continue;const p=this._duplicates.get(a);if(p){const l=p.indexOf(t);if(l===-1){console.error("error: removing graphic from node that should not reference it.");continue}if(p.splice(l,1),n.nodeIndex===t){let d=this.getNode(p[0]);for(let m=1;m<p.length;m++){const g=this.getNode(p[m]);(_(d)||f(g)&&g.node.level>d.node.level)&&(d=g)}f(d)&&r.add(d)}p.length===1&&this._duplicates.delete(a)}else this._graphics.delete(a),o.push(s)}o.length>0&&this.emit("change",{added:[],removed:o}),r.forEach(s=>this._updateForeignGraphics(s))}_updateForeignGraphics(t){const i=[],r=t.node.index,o=t.node.level;let s=0;for(;s<t.graphics.length;){const a=t.graphics[s].nodeIndex;if(a===r){s++;continue}let n=1;for(;s+n<t.graphics.length&&t.graphics[s+n].nodeIndex===a;)n++;const p=this.getNode(a);if(f(p)&&p.node.level>o)s+=n;else{for(let l=s;l<s+n;l++){const d=t.graphics[l];d.nodeIndex=r,this._updateAndCompare(d,t,l)&&i.push(d)}s+=n}}this._notifyUpdated(i)}toArray(){return Array.from(this._graphics.values())}find(t){let i;return z(this._graphics,r=>!!t(r)&&(i=r,!0)),i}forEach(t){this._graphics.forEach(i=>t(i))}forEachNode(t){this._nodes.forEach((i,r)=>t(i,r))}get nodeCount(){return this._nodes.size}_checkInvariants(){const t=new Map;this._nodes.forEach((r,o)=>{o!==r.node.index&&console.error("Mismatched node index"),r.graphics.forEach(s=>{t.set(s.objectId,1+(t.get(s.objectId)??0));const a=this._duplicates.get(s.objectId);a&&!a.includes(o)&&console.error("Node not listed in duplicate list"),a||s.nodeIndex===o||console.error("Unique graphic does not reference owning node index")})}),this._graphics.size!==t.size&&console.error("Mismatch between actual and expected number of graphics");let i=0;t.forEach((r,o)=>{i+=r>1?1:0;const s=this._graphics.get(o);if(!s)return void console.error("Missing graphic entry");const a=this._nodes.get(s.nodeIndex);if(!a)return void console.error("Graphic references unkown node");const n=this._duplicates.get(o);n?(n.length!==r&&console.error("Wrong number of entries in duplicate list"),n.forEach(p=>{const l=this._nodes.get(p);l?l.node.level>a.node.level&&console.error("Duplicated graphic does not reference highest level node"):console.error("Unknown node in duplicate list")})):r>1&&console.error("Missing duplicates entry")}),this._duplicates.size!==i&&console.error("Mismatch between expected and actual number of duplicate entries")}}const R=me();let h=class extends be(ve(ae(ce))){constructor(){super(...arguments),this.type="scene-layer-graphics-3d",this._queryEngine=null,this._memCache=null,this._interactiveEditingSessions=new Map,this.loadedGraphics=new we((e,t,i)=>Ce(e,t,i),e=>this.processor.graphicsCore.recreateGraphics(e)),this.holeFilling="always",this.progressiveLoadFactor=1,this.supportsHeightUnitConversion=!0,this._coordinatesOutsideExtentErrors=0,this._maxCoordinatesOutsideExtentErrors=20}tryRecycleWith(e,t){return e.url===this.layer.url&&this._i3sOverrides.isEmpty?e.load(t).then(()=>{var r;ge(this.layer,e,this._i3sOverrides),this.layer=e,this._i3sOverrides.destroy();const i=(r=this.view.resourceController)==null?void 0:r.memoryController;this._i3sOverrides=new S({view:this.view,layer:e,memoryController:i}),b(this._queryEngine),this._setupQueryEngine(),this.processor.resetObjectStates()}):null}initialize(){var t,i;this.addResolvingPromise(this.layer.indexInfo);const e=(t=this.view.resourceController)==null?void 0:t.memoryController;this._i3sOverrides=new S({view:this.view,layer:this.layer,memoryController:e}),fe(this.layer,this.view.spatialReference,this.view.viewingMode),this._fieldsHelper=new de({layerView:this}),this.updatingHandles.add(()=>this.layer.rangeInfos,r=>this._rangeInfosChanged(r),C),this.updatingHandles.add(()=>this.layer.renderer,(r,o)=>this._rendererChange(r,o)),this.updatingHandles.add(()=>[this.parsedDefinitionExpression,this._excludeObjectIdsSorted],()=>this._filterChange()),this.handles.add(T(()=>O.I3S_TREE_SHOW_TILES,r=>{if(r&&!this._treeDebugger){const o=this._controller.crsIndex;q(()=>import("./I3STreeDebugger-61379900.js"),["./I3STreeDebugger-61379900.js","./JSONSupport-32b5ad86.js","./string-7a2f1d87.js","./typedArrayUtil-70e1d79e.js","./ensureType-249b88cd.js","./Error-62cc7aff.js","./nextTick-3ee5a785.js","./promiseUtils-59dab60c.js","./geometry-f89ca072.js","./Extent-2ad2c9a9.js","./Ellipsoid-89682c5e.js","./Polyline-cf51ad23.js","./typeUtils-05f9d41d.js","./mat4-4714ff8c.js","./vec3-015ca254.js","./common-d0b63c2d.js","./mat4f64-abdda1bb.js","./projection-d42b91be.js","./preload-helper-41c905a7.js","./mathUtils-5b623c84.js","./vec4-c7a19f0d.js","./SimpleObservable-a6d3d2d8.js","./assets-640b4d04.js","./request-f01affa1.js","./aaBoundingRect-42f9721f.js","./zscale-d428b1da.js","./TileTreeDebugger-4c1f6a1b.js","./Color-5a385b27.js","./colorUtils-639f4d25.js","./Graphic-46941d56.js","./PopupTemplate-c1fb66ed.js","./Clonable-95fa5d2d.js","./Collection-9e42cc30.js","./Evented-36093e88.js","./fieldUtils-e397be4b.js","./arcadeOnDemand-5c3ab3f7.js","./enumeration-504d95a2.js","./number-2db5f4a2.js","./locale-30120714.js","./Identifiable-99d92428.js","./symbols-5a102dff.js","./CIMSymbol-561444b9.js","./screenUtils-410d12c0.js","./opacityUtils-c0957a27.js","./symbolLayerUtils3D-5a2f49a8.js","./aaBoundingBox-dfb04110.js","./persistableUrlUtils-ccf13db2.js","./Symbol3DAnchorPosition2D-d0207ef9.js","./collectionUtils-61fc1a27.js","./Portal-52d960e8.js","./Loadable-7c3ecd79.js","./Promise-3959c3ee.js","./PortalGroup-b49a7409.js","./PortalUser-85cf1ca9.js","./jsonUtils-6d0a72e3.js"],import.meta.url).then(({I3STreeDebugger:s})=>{!this._treeDebugger&&O.I3S_TREE_SHOW_TILES&&(this._treeDebugger=new s({lv:this,view:this.view,nodeSR:o}))})}else r||!this._treeDebugger||O.I3S_TREE_SHOW_TILES||(this._treeDebugger.destroy(),this._treeDebugger=null)},C)),this._set("processor",new ne({owner:this,preferredUpdatePolicy:K.ASYNC,scaleVisibilityEnabled:!0,filterVisibilityEnabled:!0,timeExtentEnabled:!1,frustumVisibilityEnabled:!1,elevationAlignmentEnabled:!0,elevationFeatureExpressionEnabled:!1,setUidToIdOnAdd:!1,dataExtent:this.layer.fullExtent,updateClippingExtent:r=>this._updateClippingExtent(r)})),(i=this.processor.elevationAlignment)==null||i.events.on("invalidate-elevation",r=>this._controller.updateElevationChanged(r.extent,r.spatialReference)),this.supportsHeightUnitConversion&&(this._verticalScale=J("point",this.layer.spatialReference,this.view.spatialReference)),this.addResolvingPromise(this.processor.initializePromise),this._memCache=this.view.resourceController.memoryController.newCache(this.uid),this._controller=new ie({layerView:this,scaleVisibilityEnabled:!1}),_e(this.layer.geometryDefinitions)&&(this._worker=new P(r=>this.view.resourceController.immediate.schedule(r))),this.handles.add(this.layer.on("apply-edits",r=>this.updatingHandles.addPromise(r.result))),this.handles.add(this.layer.on("edits",r=>this._handleEdits(r))),this.when(()=>{this._setupQueryEngine(),this.updatingHandles.add(()=>this.maximumNumberOfFeatures,r=>this._controller.featureTarget=r,C),this.updatingHandles.add(()=>this.suspended,r=>{r&&this._removeAllNodeData()})})}destroy(){this._treeDebugger=b(this._treeDebugger),this._i3sOverrides=b(this._i3sOverrides),this._set("processor",b(this.processor)),this._controller=b(this._controller),this._queryEngine=b(this._queryEngine),this._worker=b(this._worker),this._memCache=b(this._memCache),this.loadedGraphics.clear(),this._fieldsHelper=b(this._fieldsHelper)}get i3slayer(){return this.layer}get updatingProgressValue(){var e;return((e=this._controller)==null?void 0:e.updatingProgress)??1}get requiredFields(){var e;return((e=this._fieldsHelper)==null?void 0:e.requiredFields)??[]}get maximumNumberOfFeatures(){var t,i;const e=(i=(t=this.processor)==null?void 0:t.graphicsCore)==null?void 0:i.displayFeatureLimit;return(e==null?void 0:e.maximumNumberOfFeatures)??0}set maximumNumberOfFeatures(e){e!=null?(this._override("maximumNumberOfFeatures",e),this._controller.fixedFeatureTarget=!0):(this._clearOverride("maximumNumberOfFeatures"),this._controller.fixedFeatureTarget=!1)}get maximumNumberOfFeaturesExceeded(){var e;return!this.suspended&&!!((e=this._controller)!=null&&e.useMaximumNumberOfFeatures)&&!this._controller.leavesReached}get _excludeObjectIdsSorted(){const e=this.layer.excludeObjectIds;return e.length?e.toArray().sort((t,i)=>t-i):null}get lodFactor(){return this.layer.semantic==="Labels"?1:this.view.qualitySettings.sceneService.point.lodFactor}get hasM(){return!1}get hasZ(){return!0}async whenGraphicAttributes(e,t){return ye(this.layer,e,this._getObjectIdField(),t,()=>[...this.loadedGraphics.nodes()])}getHit(e){if(!this.loadedGraphics)return null;const t=Y(this.loadedGraphics.find(r=>r.uid===e),this.layer),i=this._getObjectIdField();return t&&t.attributes&&t.attributes[i]?(t.layer=this.layer,t.sourceLayer=this.layer,{type:"graphic",graphic:t,layer:t.layer}):null}whenGraphicBounds(e,t){return this.processor.whenGraphicBounds(e,t)}computeAttachmentOrigin(e,t){return this.processor.computeAttachmentOrigin(e,t)}canResume(){return super.canResume()&&(!this._controller||this._controller.rootNodeVisible)}isUpdating(){var e,t,i;return!!((e=this._controller)!=null&&e.updating||(t=this.processor)!=null&&t.updating||(i=this._fieldsHelper)!=null&&i.updating||this.layerFilterUpdating)}highlight(e){return this.processor.highlight(e,this.layer.objectIdField)}get updatePolicy(){return this.processor.graphicsCore.effectiveUpdatePolicy}createInteractiveEditSession(e){return le(this._attributeEditingContext,e)}async _decompressBinaryPointData(e,t){const i={geometryBuffer:e.geometryBuffer};_(this._worker)&&(this._worker=new P(o=>this.view.resourceController.immediate.schedule(o)));const r=await this._worker.invoke(i,t);if(_(r))throw new Error("Failed to decompress Draco point data");return{positionData:r.positions,featureIds:r.featureIds}}async addNode(e,t,i){if(!D(t)&&!Ne(t))throw new Error;if(this.loadedGraphics.hasNode(e.index))return void E.getLogger(this.declaredClass).error("I3S node "+e.id+" already added");const r=f(this.layer.fullExtent)?Oe(this.layer.fullExtent.clone(),.5):null,o=[],{featureIds:s,pointPositions:a}=D(t)?await this._extractBinaryPointPositions(e,t,i):this._extractLegacyPointPositions(t);this._validatePositions(e,s,a,r,o);const n=this._controller.crsVertex,p=this.view.spatialReference;G(a,n,0,a,p,0,s.length);const l=D(t)?e.level:0,d={graphics:this._createGraphics(s,a,e.index,l),featureIds:s,attributeInfo:t.attributeDataInfo,node:e};if(await this._i3sOverrides.apply(d.featureIds,t.attributeDataInfo,i),e.numFeatures=d.graphics.length,this._updateNodeMemory(e),$(d),o.length>0&&(this._computeObb(e,o,n),this._controller.updateVisibility(e.index)),!this._controller.isGeometryVisible(e))return void this._cacheNodeData(d);if(f(this._verticalScale))for(const g of d.graphics)this._verticalScale(g.geometry);const m=this.view._stage.renderView.objectAndLayerIdRenderHelper;if(f(m))for(let g=0;g<d.featureIds.length;g++){const v=d.featureIds[g];m.setUidToObjectAndLayerId(v,d.graphics[g].uid,this.layer.id,this.layer.uid,this.layer.popupEnabled,d.node.resources.attributes,g)}this.loadedGraphics.addNode(e.index,d),this._controller.updateLoadStatus(e.index,!0),this._filterNode(d),this._treeDebugger&&this._treeDebugger.update()}_computeObb(e,t,i){const r=this._controller.crsIndex,o=r.isGeographic?this.view.renderSpatialReference:r;G(t,i,0,t,o,0,t.length/3),e.serviceObb=xe(new Ee(t,3)),r.isGeographic&&W(e.serviceObb.center,o,e.serviceObb.center,r)}isNodeLoaded(e){return this.loadedGraphics.hasNode(e)}isNodeReloading(){return!1}updateNodeState(){}async _extractBinaryPointPositions(e,t,i){const r=await this._decompressBinaryPointData(t,i),o=r.positionData,s=3,a=o.length/s,n=M(3*a),p=f(e.serviceObb)?e.serviceObb.center:[0,0,0],l=Math.abs(p[2])*2**-20;for(let d=0;d<a;d++){const m=d*s;n[m+0]=o[m+0]+p[0],n[m+1]=o[m+1]+p[1],n[m+2]=o[m+2]+p[2],Math.abs(n[m+2])<l&&(n[m+2]=0)}return{featureIds:r.featureIds?Array.from(r.featureIds):[],pointPositions:n}}_extractLegacyPointPositions(e){var o,s;const t=e.pointData.length,i=M(3*t),r=new Array;for(let a=0;a<t;a++){const n=e.pointData[a],p=n.featureDataPosition,l=p.length,d=((o=n.geometries)==null?void 0:o[0])??De[l],m=n.featureIds[0];if(d.type!=="Embedded"||d.params.type!=="points"||l<2||l>3)continue;const g=((s=d.params.vertexAttributes)==null?void 0:s.position)??[0,0,0],v=3*r.length;i[v+0]=p[0]+g[0],i[v+1]=p[1]+g[1],i[v+2]=l===3?p[2]+g[2]:NaN,r.push(m)}return{featureIds:r,pointPositions:i}}_validatePositions(e,t,i,r,o){if(_(r)&&e.serviceObb)return;const s=t.length,a=3;for(let n=0;n<s;n++){const p=n*a;k(I,i[p],i[p+1],i[p+2]),f(r)&&!Z(r,I)&&(this._coordinatesOutsideExtentErrors<this._maxCoordinatesOutsideExtentErrors&&E.getLogger(this.declaredClass).error("Service Error: Coordinates outside of layer extent"),this._coordinatesOutsideExtentErrors+1===this._maxCoordinatesOutsideExtentErrors&&E.getLogger(this.declaredClass).error("Maximum number of errors reached. Further errors are ignored."),this._coordinatesOutsideExtentErrors++),e.serviceObb||o.push(I[0],I[1],I[2])}}_createGraphics(e,t,i,r){const o=e.length,s=3,a=this._getObjectIdField(),n=this.processor.graphicsCore,p=new Array,l=this.view.spatialReference;for(let d=0;d<o;d++){const m=e[d],g={};m!=null&&(g[a]=m);const v=m??F.generateUID(),w=d*s,j=isNaN(t[w+2])?void 0:t[w+2],N=te(t[w],t[w+1],j,l),x=this.loadedGraphics.get(v);if(f(x))(x.level==null||x.level<r)&&(y.property="geometry",y.graphic=x,y.oldValue=U(x.geometry),y.newValue=N,x.geometry=N,x.level=r,n.graphicUpdateHandler(y)),p.push(x);else{const V=F.generateUID();p.push({objectId:v,uid:V,geometry:N,attributes:g,visible:!0,nodeIndex:i,level:r})}}return p}_updateNodeMemory(e){e.memory=4096+(f(e.numFeatures)?e.numFeatures*this.processor.graphicsCore.usedMemoryPerGraphic:0)}_cacheNodeData(e){const t=e.graphics.reduce((i,r)=>re(r)+i,512+8*e.featureIds.length+1024);this._memCache.put(this._getMemCacheKey(e.node),e,t)}_getMemCacheKey(e){return`${e.index}`}_removeAllNodeData(){this.loadedGraphics.forEachNode((e,t)=>{if(e){const i=e.node;this._updateNodeMemory(i),this._cacheNodeData(e)}this._controller.updateLoadStatus(t,!1)}),this._treeDebugger&&this._treeDebugger.update(),this.loadedGraphics.clear()}removeNode(e){const t=this._removeNodeStageData(e);t&&(this._updateNodeMemory(t.node),this._cacheNodeData(t))}_removeNodeStageData(e){const t=this.loadedGraphics.getNode(e);return _(t)?null:(this._controller.updateLoadStatus(e,!1),this.loadedGraphics.removeNode(e),this._treeDebugger&&this._treeDebugger.update(),t)}async loadCachedNodeData(e){var t;return(t=this._memCache)==null?void 0:t.pop(this._getMemCacheKey(e))}async addCachedNodeData(e,t,i,r){this.loadedGraphics.hasNode(e.index)?E.getLogger(this.declaredClass).error("I3S node "+e.id+" already added"):(await this._i3sOverrides.apply(t.featureIds,i,r),this.loadedGraphics.addNode(e.index,t),this._controller.updateLoadStatus(e.index,!0),this._updateNodeMemory(e),t.attributeInfo=i,this._attributeValuesChanged(t),this._filterNode(t),this._treeDebugger&&this._treeDebugger.update())}getLoadedNodeIds(){const e=[];return this.loadedGraphics.forEachNode(t=>e.push(t.node.id)),e.sort()}getVisibleNodes(){const e=new Array;return this.loadedGraphics.forEachNode(t=>e.push(t.node)),e}getLoadedNodeIndices(e){this.loadedGraphics.forEachNode((t,i)=>e.push(i))}getLoadedAttributes(e){const t=this.loadedGraphics.getNode(e);if(f(t)&&f(t.attributeInfo))return t.attributeInfo.loadedAttributes}getAttributeData(e){const t=this.loadedGraphics.getNode(e);if(f(t)&&f(t.attributeInfo))return t.attributeInfo.attributeData}_setAttributeData(e,t){const i=this.loadedGraphics.getNode(e);_(i)||_(i.attributeInfo)||(i.attributeInfo.attributeData=t,this._attributeValuesChanged(i))}async updateAttributes(e,t,i){const r=this.loadedGraphics.getNode(e);_(r)||(await this._i3sOverrides.apply(r.featureIds,t,i),r.attributeInfo=t,this._attributeValuesChanged(r))}_attributeValuesChanged(e){if($(e),this._filterNode(e),this.processor.graphicsCore.labelsEnabled){const t=e.graphics.map(i=>i.uid);this.processor.graphicsCore.updateLabelingInfo(t)}}_updateClippingExtent(e){return this._controller&&this._controller.updateClippingArea(e),!1}_getObjectIdField(){return this.layer.objectIdField||X}async _rendererChange(e,t){const{layer:{fieldsIndex:i}}=this,r=new Set;let o,s;e?(await e.collectRequiredFields(r,i),o=Array.from(r).sort()):o=[],r.clear(),t?(await t.collectRequiredFields(r,i),s=Array.from(r).sort()):s=[],o.length===s.length&&o.every((a,n)=>o[n]===s[n])||this._reloadAllNodes()}_rangeInfosChanged(e){e!=null&&e.length>0&&E.getLogger(this.declaredClass).warn("Unsupported property: rangeInfos are currently only serialized to and from web scenes but do not affect rendering.")}_filterChange(){this.loadedGraphics.forEachNode(e=>this._filterNode(e))}_reloadAllNodes(){this._removeAllNodeData(),this._controller&&this._controller.restartNodeLoading()}_filterNode(e){const t=this.parsedDefinitionExpression,i=this._excludeObjectIdsSorted,r=this._getObjectIdField();for(const o of e.graphics){const s=o.visible,a=!t||this._evaluateClause(t,o),n=_(i)||Q(i,o.attributes[r])<0;o.visible=a&&n,s!==o.visible&&(y.graphic=o,y.property="visible",y.oldValue=s,y.newValue=o.visible,this.processor.graphicsCore.graphicUpdateHandler(y))}}createQuery(){const e={outFields:["*"],returnGeometry:!0,outSpatialReference:this.view.spatialReference};return f(this.filter)?this.filter.createQuery(e):new A(e)}queryFeatures(e,t){return this._queryEngine.executeQuery(this._ensureQuery(e),t==null?void 0:t.signal)}queryObjectIds(e,t){return this._queryEngine.executeQueryForIds(this._ensureQuery(e),t==null?void 0:t.signal)}queryFeatureCount(e,t){return this._queryEngine.executeQueryForCount(this._ensureQuery(e),t==null?void 0:t.signal)}queryExtent(e,t){return this._queryEngine.executeQueryForExtent(this._ensureQuery(e),t==null?void 0:t.signal)}_ensureQuery(e){return this._addDefinitionExpressionToQuery(_(e)?this.createQuery():A.from(e))}_setupQueryEngine(){const e=()=>this.processor.featureStore;this._queryEngine=new pe({context:{spatialReference:this.view.spatialReference,layer:this.layer,scheduler:this.view.resourceController.scheduler,get featureStore(){return e()},hasZ:this.hasZ,hasM:this.hasM},priority:Ie.FEATURE_QUERY_ENGINE})}getUsedMemory(){var e,t;return((t=(e=this.processor)==null?void 0:e.graphicsCore)==null?void 0:t.usedMemory)??0}getUnloadedMemory(){var e,t,i;return .8*((((e=this._controller)==null?void 0:e.unloadedMemoryEstimate)??0)+(((i=(t=this.processor)==null?void 0:t.graphicsCore)==null?void 0:i.unprocessedMemoryEstimate)??0))}ignoresMemoryFactor(){return this._controller&&this._controller.fixedFeatureTarget}_handleEdits(e){he(this._attributeEditingContext,e)}get _attributeEditingContext(){const e=this._getObjectIdField();return{sessions:this._interactiveEditingSessions,fieldsIndex:this.layer.fieldsIndex,objectIdField:e,forEachNode:t=>this.loadedGraphics.forEachNode(i=>t(i.node,i.featureIds)),attributeStorageInfo:this.i3slayer.attributeStorageInfo??[],i3sOverrides:this._i3sOverrides,getAttributeData:t=>this.getAttributeData(t),setAttributeData:(t,i,r)=>{this._setAttributeData(t,i);const o=this.loadedGraphics.getNode(t);if(f(r)){const s=this.loadedGraphics.get(r.attributes[e]);f(s)&&this.processor.graphicsCore.recreateGraphics([s])}else f(o)&&this.processor.graphicsCore.recreateGraphics(o.graphics)},clearMemCache:()=>{}}}get performanceInfo(){const e={displayedNumberOfFeatures:this.loadedGraphics.length,maximumNumberOfFeatures:this.maximumNumberOfFeatures,totalNumberOfFeatures:-1,nodes:this.loadedGraphics.nodeCount,core:this.processor.graphicsCore.performanceInfo};return this._controller&&this._controller.updateStats(e),e}get test(){return{controller:this._controller,numNodes:this.loadedGraphics.nodeCount,loadedGraphics:this.loadedGraphics}}};c([u()],h.prototype,"processor",void 0),c([u({type:oe})],h.prototype,"filter",void 0),c([u()],h.prototype,"loadedGraphics",void 0),c([u()],h.prototype,"i3slayer",null),c([u()],h.prototype,"_controller",void 0),c([u()],h.prototype,"updating",void 0),c([u()],h.prototype,"suspended",void 0),c([u()],h.prototype,"holeFilling",void 0),c([u(ee)],h.prototype,"updatingProgress",void 0),c([u()],h.prototype,"updatingProgressValue",null),c([u(R.requiredFields)],h.prototype,"requiredFields",null),c([u(R.availableFields)],h.prototype,"availableFields",void 0),c([u()],h.prototype,"_fieldsHelper",void 0),c([u({type:Number})],h.prototype,"maximumNumberOfFeatures",null),c([u({readOnly:!0})],h.prototype,"maximumNumberOfFeaturesExceeded",null),c([u()],h.prototype,"_excludeObjectIdsSorted",null),c([u({readOnly:!0})],h.prototype,"lodFactor",null),c([u({readOnly:!0})],h.prototype,"hasM",null),c([u({readOnly:!0})],h.prototype,"hasZ",null),h=c([H("esri.views.3d.layers.SceneLayerGraphicsView3D")],h);const ya=h;function Ne(e){return"pointData"in e}function D(e){return"geometryBuffer"in e&&e.geometryBuffer!==null}function Ce(e,t,i){const r=t.attributeInfo;if(_(r)||_(r.loadedAttributes)||_(r.attributeData))return!1;let o=!1;for(const{name:s}of r.loadedAttributes)if(r.attributeData[s]){const a=L(r.attributeData[s],i);a!==e.attributes[s]&&(e.attributes[s]=a,o=!0)}return o}function $(e){const t=e.attributeInfo,i=e.node.index;if(!(_(t)||_(t.loadedAttributes)||_(t.attributeData)))for(let r=0;r<e.graphics.length;r++){const o=e.graphics[r];if(o.nodeIndex===i){o.attributes||(o.attributes={});for(const{name:s}of t.loadedAttributes)t.attributeData[s]&&(o.attributes[s]=L(t.attributeData[s],r))}}}function Oe(e,t){return e.xmin-=t,e.ymin-=t,e.xmax+=t,e.ymax+=t,e.zmin!=null&&e.zmax!=null&&(e.zmin-=t,e.zmax+=t),e.mmin!=null&&e.mmax!=null&&(e.mmin-=t,e.mmax+=t),e}const De={2:{type:"Embedded",params:{type:"points",vertexAttributes:{position:[0,0]}}},3:{type:"Embedded",params:{type:"points",vertexAttributes:{position:[0,0,0]}}}},I=B(),y={graphic:null,property:null,oldValue:null,newValue:null};export{ya as default};
