import{g as q}from"./Graphic-46941d56.js";import{U as O}from"./request-f01affa1.js";import{h as I}from"./string-7a2f1d87.js";import{s as $}from"./Error-62cc7aff.js";import{r as P,p as L,t as D}from"./typedArrayUtil-70e1d79e.js";import{j as N}from"./promiseUtils-59dab60c.js";import{l as C}from"./reactiveUtils-e6d6c898.js";import{x as H,n as z}from"./vec3-015ca254.js";import{F as j,G,H as X,I as K,J as Y,t as Q,U as J,K as Z}from"./index-a7842505.js";import{l as v,U as T}from"./Octree-fac2eadb.js";import{_ as tt}from"./preload-helper-41c905a7.js";import{a as et}from"./assets-640b4d04.js";import{l as it}from"./ViewingMode-5d7d590b.js";import{h as rt}from"./Matrix3PassUniform-285be0f9.js";import{E as st}from"./objectResourceUtils-f1a10a8c.js";import{r as ot}from"./context-util-eb98c678.js";import{I as at,N as F,O as w}from"./enums-fc527c7c.js";import"./JSONSupport-32b5ad86.js";import"./ensureType-249b88cd.js";import"./nextTick-3ee5a785.js";import"./geometry-f89ca072.js";import"./Extent-2ad2c9a9.js";import"./Ellipsoid-89682c5e.js";import"./Polyline-cf51ad23.js";import"./typeUtils-05f9d41d.js";import"./PopupTemplate-c1fb66ed.js";import"./Clonable-95fa5d2d.js";import"./Collection-9e42cc30.js";import"./Evented-36093e88.js";import"./SimpleObservable-a6d3d2d8.js";import"./fieldUtils-e397be4b.js";import"./arcadeOnDemand-5c3ab3f7.js";import"./enumeration-504d95a2.js";import"./number-2db5f4a2.js";import"./locale-30120714.js";import"./Identifiable-99d92428.js";import"./symbols-5a102dff.js";import"./CIMSymbol-561444b9.js";import"./Color-5a385b27.js";import"./colorUtils-639f4d25.js";import"./mathUtils-5b623c84.js";import"./vec4-c7a19f0d.js";import"./common-d0b63c2d.js";import"./screenUtils-410d12c0.js";import"./opacityUtils-c0957a27.js";import"./symbolLayerUtils3D-5a2f49a8.js";import"./aaBoundingBox-dfb04110.js";import"./aaBoundingRect-42f9721f.js";import"./persistableUrlUtils-ccf13db2.js";import"./Symbol3DAnchorPosition2D-d0207ef9.js";import"./collectionUtils-61fc1a27.js";import"./Portal-52d960e8.js";import"./Loadable-7c3ecd79.js";import"./Promise-3959c3ee.js";import"./PortalGroup-b49a7409.js";import"./PortalUser-85cf1ca9.js";import"./jsonUtils-6d0a72e3.js";import"./IdentityManager-844d980b.js";import"./intl-0ee83c79.js";import"./messages-f54f7f46.js";import"./uuid-73213768.js";import"./dom-2ec1e33c.js";import"./Cyclical-34b2a5e3.js";import"./workers-591e0dfc.js";import"./Connection-000cba43.js";import"./GraphicsLayer-78551f17.js";import"./HandleOwner-f4554d8c.js";import"./Layer-ab90f8be.js";import"./BlendLayer-fe49ee20.js";import"./mat4f32-60a2394b.js";import"./mat4-4714ff8c.js";import"./ScaleRangeLayer-56857dcb.js";import"./ElevationInfo-bc15f954.js";import"./lengthUtils-e2d3809d.js";import"./HeightModelInfo-bc3bd77c.js";import"./projection-d42b91be.js";import"./zscale-d428b1da.js";import"./sphere-092242fd.js";import"./vec4f64-6d0e93be.js";import"./byteSizeEstimations-f0cab514.js";import"./mat3f64-50f3b9f6.js";import"./mat4f64-abdda1bb.js";import"./quatf64-f8f1c132.js";import"./vec2f64-f35767d6.js";import"./lineSegment-8ffcb750.js";import"./plane-fef3662c.js";import"./spatialReferenceEllipsoidUtils-26c8dea5.js";import"./scaleUtils-b27f2fc2.js";import"./layerUtils-ff76096c.js";import"./AttachmentInfo-2774f92c.js";import"./AttachmentQuery-be73c1f4.js";import"./LegendOptions-d1ee6f9f.js";import"./DimensionalDefinition-89a02a09.js";import"./UniqueValueRenderer-31cfe725.js";import"./diffUtils-a2efee1b.js";import"./colorRamps-844ba070.js";import"./sizeVariableUtils-d4870b0d.js";import"./visualVariableUtils-6f78f1dd.js";import"./compilerUtils-2eb56463.js";import"./jsonUtils-ba20c384.js";import"./styleUtils-ba5d50e4.js";import"./vectorFieldUtils-b0aae2f9.js";import"./colorUtils-7641d345.js";import"./normalizeUtils-11faac16.js";import"./normalizeUtilsCommon-f5194d67.js";import"./asyncUtils-8de18dd2.js";import"./ItemCache-47345b61.js";import"./MemCache-a072224a.js";import"./cimSymbolUtils-12c2ae8a.js";import"./utils-3d986af0.js";import"./jsonUtils-0cd7beab.js";import"./DictionaryLoader-e5256637.js";import"./LRUCache-805da42e.js";import"./deprecate-2ea4a12e.js";import"./heatmapUtils-bc76f08e.js";import"./Query-6df7497c.js";import"./TimeExtent-4bfae662.js";import"./Field-efd8d6fa.js";import"./fieldType-ec749512.js";import"./executeQueryJSON-c3e8823f.js";import"./query-159ca0c6.js";import"./pbfQueryUtils-e595cc71.js";import"./pbf-490f560a.js";import"./OptimizedFeature-cb86a86f.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./queryZScale-7c3cd57e.js";import"./FeatureSet-adc6c42d.js";import"./featureConversionUtils-66a9b1ed.js";import"./RelationshipQuery-1388e5e8.js";import"./TopFeaturesQuery-c51356f1.js";import"./FeatureLayer-c3299dce.js";import"./MultiOriginJSONSupport-247be6b9.js";import"./serviceCapabilitiesUtils-d47be03f.js";import"./arcgisLayerUrl-1177870a.js";import"./FeatureLayerBase-4bc86305.js";import"./OperationalLayer-892ef1ff.js";import"./TimeReference-dbe22fa2.js";import"./datetime-b6333958.js";import"./editsZScale-1f9f5428.js";import"./APIKeyMixin-a999140b.js";import"./ArcGISService-69574b36.js";import"./CustomParametersMixin-0cb5d402.js";import"./EditBusLayer-40721674.js";import"./FeatureReductionLayer-5d021257.js";import"./labelingInfo-81f8350c.js";import"./labelUtils-2517fbb8.js";import"./defaultsJSON-59981e75.js";import"./OrderedLayer-e39f681d.js";import"./PortalLayer-f8afa381.js";import"./PortalItem-476b4f2f.js";import"./portalItemUtils-f08de884.js";import"./RefreshableLayer-6e09e5c7.js";import"./TemporalLayer-1cafdc62.js";import"./FeatureTemplate-c492af3e.js";import"./FeatureType-9aee1062.js";import"./fieldProperties-13016a3b.js";import"./FieldsIndex-3347fdc5.js";import"./versionUtils-3b55ef95.js";import"./styleUtils-a2cb1d02.js";import"./popupUtils-ef59e204.js";import"./callExpressionWithFeature-b2780134.js";import"./quantizationUtils-5accf704.js";import"./webStyleSymbolUtils-7af9b968.js";import"./devEnvironmentUtils-5002a058.js";import"./Scheduler-22864fbd.js";import"./ElevationSamplerData-89295dc0.js";import"./TileInfo-c1a6fc90.js";import"./Basemap-a98ee4eb.js";import"./loadAll-b0bbaf30.js";import"./writeUtils-054a51f5.js";import"./CollectionFlattener-53f524d1.js";import"./TablesMixin-d0eb7f9b.js";import"./vec2-8acac370.js";import"./PhysicallyBasedRendering.glsl-d72e2a11.js";import"./View.glsl-725bf3cf.js";import"./ShaderBuilder-c7fc4a30.js";import"./FloatPassUniform-8a52db3d.js";import"./Float4PassUniform-52993952.js";import"./RgbaFloatEncoding.glsl-31b2b966.js";import"./Texture2DPassUniform-1510cbb0.js";import"./vec3f32-01c06d8d.js";import"./VertexAttribute-15d1866a.js";import"./Texture2DDrawUniform-d1eaa0d6.js";import"./basicInterfaces-7449a8bf.js";import"./PiUtils.glsl-9dc0973a.js";import"./ReadLinearDepth.glsl-9abddde9.js";import"./WaterSurface.glsl-ad07df19.js";import"./ForwardLinearDepth.glsl-3606f02d.js";import"./Slice.glsl-e5fdd8d3.js";import"./Transform.glsl-e6366353.js";import"./OutputHighlight.glsl-569dde3f.js";import"./MultipassTerrainTest.glsl-029ffa3f.js";import"./NormalUtils.glsl-d1e61521.js";import"./AlphaCutoff-96178e0d.js";import"./TransparencyPassType-a1cb0602.js";import"./EvaluateSceneLighting.glsl-ed7fcdc2.js";import"./VisualVariablePassParameters-ded3d86d.js";import"./VertexElementDescriptor-2925c6af.js";import"./Texture-42bd3a76.js";import"./Util-c12e93ba.js";import"./SSAOBlur.glsl-2bfd75b0.js";import"./ScreenSpacePass.glsl-28a2b6e5.js";import"./SSAO.glsl-1d087e8c.js";import"./ShaderTechniqueConfiguration-5b4afc58.js";import"./mat3-4fd89d48.js";import"./HUD.glsl-03dc2889.js";import"./VerticalOffset.glsl-2b654767.js";import"./DefaultTechniqueConfiguration-d3c0bf46.js";import"./edgeProcessing-9fe73f05.js";import"./deduplicate-3aef92f2.js";import"./Indices-7097baff.js";import"./InterleavedLayout-d75b8228.js";import"./BufferView-da65c548.js";import"./types-e1c0a5bf.js";import"./Attribute-f72d3f37.js";import"./MeshComponent-76cc0acf.js";import"./earcut-61f7b102.js";import"./projection-720a032f.js";import"./quat-99c4e099.js";import"./vec33-6cea25ab.js";import"./HUDMaterial.glsl-bcc90ab4.js";import"./sdfPrimitives-16d07d48.js";import"./floatRGBA-11065dbc.js";import"./Texture-2b2e584f.js";import"./TextureOnly.glsl-12d60c43.js";import"./ObjectAndLayerIdColor.glsl-751e40ac.js";import"./VisualVariables.glsl-655a358f.js";import"./dehydratedFeatures-be6dfdbf.js";import"./labelFormatUtils-deccc57b.js";import"./orientedBoundingBox-7f391048.js";import"./quatf32-51a323b8.js";import"./vec2f32-eaf29605.js";import"./LineCallout.glsl-828f2c8d.js";import"./QueryEngineResult-60e819c8.js";import"./WhereClause-ec2695a9.js";import"./executionError-fb3f283a.js";import"./utils-eec406bb.js";import"./generateRendererUtils-9fa055c1.js";import"./json-48e3ea08.js";import"./MarkerSizing.glsl-1e815ddd.js";import"./RibbonLine.glsl-3b5ffb4c.js";import"./OutputDepth.glsl-ccbc6366.js";import"./LineStipple.glsl-df787c01.js";import"./MixExternalColor.glsl-96fc9ef8.js";import"./symbolColorUtils-7c94928f.js";import"./DiscardOrAdjustAlphaBlend.glsl-27b032af.js";import"./LineMarker.glsl-af47e9ca.js";import"./resourceUtils-527631ac.js";import"./NativeLine.glsl-eddd3297.js";import"./VertexColor.glsl-e2eb2da5.js";import"./Normals.glsl-81bc0899.js";import"./Path.glsl-98387e31.js";import"./ColorMaterial.glsl-2f16b93b.js";import"./Pattern.glsl-3d1048ed.js";import"./DefaultMaterial_COLOR_GAMMA-8afda99b.js";import"./Version-b7702d36.js";import"./LercDecoder-bc94632d.js";import"./DefaultMaterial.glsl-0c704a85.js";import"./enums-fb086c25.js";import"./config-f7904f35.js";import"./TileKey-5f02dc79.js";import"./workerHelper-7b69330e.js";import"./capabilities-ef053cf2.js";import"./originUtils-1469eeaf.js";import"./multiOriginJSONSupportUtils-c978f4c3.js";import"./saveUtils-44b7e317.js";import"./resourceUtils-a295dbcf.js";import"./floating-ui-8c8de742.js";import"./StreamLayer-869211a2.js";import"./geometryEngine-5399ce6b.js";import"./geometryEngineBase-e1a33b0a.js";import"./hydrated-d446f5f6.js";import"./SceneFilter-9f7d00a7.js";import"./persistable-5845b8f0.js";import"./resourceExtension-58c3e69d.js";import"./elevationInfoUtils-cb162a43.js";import"./DimensionAnalysis-26fb1362.js";import"./Analysis-ba6617ff.js";import"./ExportImageParameters-1fbdfa05.js";import"./sublayerUtils-1d562031.js";import"./RealisticTree.glsl-f514fb19.js";var A,V,S,M,x,R;(function(r){r[r.Binary=0]="Binary",r[r.JSON=1]="JSON"})(A||(A={})),function(r){r[r.TreeIndex=0]="TreeIndex",r[r.TreeStats=1]="TreeStats",r[r.TreeData=2]="TreeData",r[r.BrickBundles=3]="BrickBundles",r[r.Section=4]="Section",r[r.VariableStats=5]="VariableStats"}(V||(V={})),function(r){r[r.None=1]="None",r[r.Front=2]="Front",r[r.Back=3]="Back"}(S||(S={})),function(r){r[r.Low=0]="Low",r[r.Medium=1]="Medium",r[r.High=2]="High"}(M||(M={})),function(r){r[r.None=0]="None",r[r.StaticSections=1]="StaticSections",r[r.Slices=2]="Slices",r[r.DynamicSections=4]="DynamicSections",r[r.GhostShell=8]="GhostShell",r[r.Isosurface=16]="Isosurface",r[r.Quality=32]="Quality",r[r.SunLocation=64]="SunLocation",r[r.StaticSectionSelection=128]="StaticSectionSelection",r[r.ExaggerationAndOffset=256]="ExaggerationAndOffset",r[r.CurrentTime=512]="CurrentTime",r[r.CurrentVariable=1024]="CurrentVariable",r[r.DeleteIsosurface=2048]="DeleteIsosurface",r[r.ContainerVisibility=4096]="ContainerVisibility",r[r.RenderMode=8192]="RenderMode",r[r.Optimization=16384]="Optimization",r[r.VariableStyles=32768]="VariableStyles",r[r.VolumeStyles=65536]="VolumeStyles",r[r.AnalysisSlice=131072]="AnalysisSlice"}(x||(x={})),function(r){r[r.Isosurfaces=0]="Isosurfaces",r[r.DynamicSections=1]="DynamicSections",r[r.StaticSections=2]="StaticSections"}(R||(R={}));function nt(r){return new Promise(t=>tt(()=>import("./vxlLayer-72fdec1c.js"),[],import.meta.url).then(e=>e.v).then(({default:e})=>{const i=e({locateFile:lt,preinitializedWebGLContext:r,onRuntimeInitialized:()=>t(i)})})).catch(t=>{throw t})}function lt(r){return et(`esri/libs/vxl/${r}`)}const b=$.getLogger("esri.layers.VoxelWasmPerSceneView");var l;(function(r){r[r.Lifetime=1]="Lifetime",r[r.RequestResponse=2]="RequestResponse",r[r.Rendering=3]="Rendering",r[r.Error=4]="Error"})(l||(l={}));class bo{constructor(t){this._halfIntTexturesAvailable=!1,this._textureFloatLinearAvailable=!1,this._havePreparedWithAllLayers=!1,this._readyWatchHandle=null,this._qualityWatchHandle=null,this._stationaryWatchHandle=null,this._timeExtentWatchHandle=null,this._renderPluginContext=null,this._vxlPromise=null,this._vxl=null,this._pluginIsActive=!1,this._moreToLoad=!1,this._viewportWidth=-1,this._viewportHeight=-1,this._newLayers=[],this._layers=new Map,this._shaderOutput=rt.Color,this._renderSlot=st.VOXEL,this._rctx=null,this._renderTargetToRestore=null,this._lastFrameWasStationary=!1,this._wasmMemBlockSizes=[512,1024,2048,4096,8192,16384,32768,65536],this._wasmMemBlocks=new Map,this._dbgFlags=new Set,this._captureFrustum=!1,this._frustum=null,this._frustumRenderableId=-1,this._renderCoordsHelper=null,this.type=j.VOXEL,this.slicePlaneEnabled=!0,this.isGround=!1,this.layerUid=[],this._view=t,this._initialize()}get canRender(){return!!this._vxl&&this._view.viewingMode==="local"}_dbg(t,e){this._dbgFlags.has(t)&&(t===l.Error?b.error(e):b.warn(e))}_removeRenderPlugin(){this._pluginIsActive&&this._view._stage&&(this._dbg(l.Lifetime,"--removeRenderPlugin--"),this._view._stage.removeRenderPlugin(this)),this._pluginIsActive=!1}_initialize(){this._dbg(l.Lifetime,"--initialize--");for(const t of this._wasmMemBlockSizes)this._wasmMemBlocks.set(t,0);this._readyWatchHandle=C(()=>this._view.ready,t=>{t&&this._view.viewingMode==="local"?(this._dbg(l.Lifetime,"view ready status changed to ready on a local view, calling addRenderPlugin"),this._view._stage.addRenderPlugin([this._renderSlot],this),this._pluginIsActive=!0):(this._dbg(l.Lifetime,"view ready status changed, not ready or not a local view!"),this._removeRenderPlugin())},{initial:!0}),this._qualityWatchHandle=C(()=>{var t;return(t=this._view)==null?void 0:t.qualityProfile},t=>{this._dbg(l.Rendering,"qualityProfile changed to "+t),this._vxl&&this._vxl.set_quality(this._toWasmQuality(t))},{initial:!0}),this._timeExtentWatchHandle=C(()=>{var t;return(t=this._view)==null?void 0:t.timeExtent},()=>{var t;if(this._vxl){const e=this._getTimeArgs((t=this._view)==null?void 0:t.timeExtent);this._dbg(l.Rendering,"sceneView timeExtent changed to useTime="+e.useTime+" st="+e.startTime+" et="+e.endTime),this._vxl.set_scene_time_extent(e.startTime,e.endTime,e.useTime),this._renderPluginContext.requestRender()}},{initial:!0}),this._stationaryWatchHandle=C(()=>{var t;return(t=this._view)==null?void 0:t.stationary},t=>{this._vxl&&t&&!this._lastFrameWasStationary&&this._renderPluginContext.requestRender()})}initializeRenderContext(t){this._dbg(l.Lifetime,"--initializeRenderContext--");const e=t.renderContext.rctx;e.type===ot.WEBGL2?(this._renderPluginContext=t,this._rctx=t.renderContext.rctx,this._halfIntTexturesAvailable=!!this._rctx.capabilities.textureNorm16,this._textureFloatLinearAvailable=this._rctx.capabilities.textureFloatLinear,this._initializeWasm(e.gl)):this._dbg(l.Error,"WebGL 1 context only!")}uninitializeRenderContext(){this._renderPluginContext=null,this._rctx=null,this._dbg(l.Lifetime,"--uninitializeRenderContext--")}_restoreFramebuffer(){if(!this._renderTargetToRestore)return;const t=this._renderTargetToRestore.fbo;if(!this._rctx)return void this._dbg(l.Error,"no context in restoreFramebuffer!");this._rctx.bindFramebuffer(t,!0);const e=this._renderTargetToRestore.viewport;this._rctx.setViewport(e.x,e.y,e.width,e.height)}_bindPreviousDepthToSlot(t,e){const i=!!this._rctx,s=!!this._renderTargetToRestore;if(!i||!s)return 0;const a=this._renderTargetToRestore.fbo.depthStencilTexture;return a?(e===0?this._rctx.bindTexture(null,t,!0):this._rctx.bindTexture(a,t,!0),1):(this._dbg(l.Error,"no depth/stencil texture exists!"),0)}_modifyResourceCount(t,e,i){if(!this._rctx)return void this._dbg(l.Error,"modifyAllocation callback has no rendering context!");const s=t;i===1?this._rctx.instanceCounter.increment(s,e):this._rctx.instanceCounter.decrement(s,e)}_setBlendState(t,e,i,s){this._rctx?(this._rctx.setBlendingEnabled(t===1),this._rctx.setBlendFunction(e,i),this._rctx.setBlendEquation(s)):this._dbg(l.Error,"setBlendState callback has no rendering context!")}_setFrontFace(t){this._rctx?this._rctx.setFrontFace(t):this._dbg(l.Error,"setFrontFace callback has no rendering context!")}_setDepthStencilStateFunction(t,e,i){this._rctx?(this._rctx.setDepthFunction(i),this._rctx.setDepthTestEnabled(t===1),this._rctx.setDepthWriteEnabled(e===1),this._rctx.setStencilTestEnabled(!1),this._rctx.setStencilFunction(at.ALWAYS,0,255),this._rctx.setStencilOpSeparate(F.FRONT,w.KEEP,w.INCR,w.KEEP),this._rctx.setStencilOpSeparate(F.BACK,w.KEEP,w.DECR,w.KEEP)):this._dbg(l.Error,"setDepthStencilStateFunction callback has no rendering context!")}_setRasterizerState(t){if(this._rctx)switch(t){case S.None:this._rctx.setFaceCullingEnabled(!1);break;case S.Back:this._rctx.setCullFace(F.BACK),this._rctx.setFaceCullingEnabled(!0);break;case S.Front:this._rctx.setCullFace(F.FRONT),this._rctx.setFaceCullingEnabled(!0)}else this._dbg(l.Error,"setRasterizerState callback has no rendering context!")}_setViewport(t,e,i,s){this._rctx?this._rctx.setViewport(t,e,i,s):this._dbg(l.Error,"setViewport callback has no rendering context!")}_updateMemoryUsage(){this._layers.forEach((t,e)=>{if(t.needMemoryUsageUpdate){const i=this._vxl.estimate_memory_usage(e);i>=0&&(t.needMemoryUsageUpdate=!1,t.layerView.setUsedMemory(i))}})}_syncRequestsResponses(){this._layers.forEach((t,e)=>{const i=[];t.responses.forEach((o,d)=>{i.push(d),this._dbg(l.RequestResponse,"responding for requestID:"+d+" size:"+o.size),this._vxl.respond(e,d,o),o.requestType!==V.TreeIndex&&o.requestType!==V.Section||(t.needMemoryUsageUpdate=!0)});const s=t.responses;for(const o of i)s.delete(o);const a=this._vxl.get_new_requests(e),n=t.abortController.signal;for(const o in a){t.outstandingRequestCount+=1,t.outstandingRequestCount===1&&t.layerView.updatingFlagChanged();const d=a[o],f={responseType:"array-buffer",signal:n};this._dbg(l.RequestResponse,"making requestID:"+o+" url:"+d.url),O(d.url,f).then(h=>{t.outstandingRequestCount-=1,t.outstandingRequestCount===0&&t.layerView.updatingFlagChanged(),this._dbg(l.RequestResponse,"have response for requestID:"+o);let _=0;if(h.data.byteLength>0){_=this._vxl._malloc(h.data.byteLength);const p=new Uint8Array(this._vxl.HEAPU8.buffer,_,h.data.byteLength),c=new Uint8Array(h.data);for(let g=0;g<h.data.byteLength;++g)p[g]=c[g]}s.set(+o,{responseType:d.responseType,ptr:_,size:h.data.byteLength,success:!0,requestType:d.requestType})}).catch(h=>{t.outstandingRequestCount-=1,t.outstandingRequestCount===0&&t.layerView.updatingFlagChanged(),N(h)||(this._dbg(l.Error,`requestID:${o} failed, error=${h.toString()}`),s.set(+o,{responseType:d.responseType,ptr:0,size:0,success:!1,requestType:d.requestType}))})}})}updateWasmCamera(t){this._vxl.set_projection_matrix.apply(this._vxl,t.projectionMatrix),this._vxl.set_view_matrix.apply(this._vxl,t.viewMatrix),this._vxl.set_near_far(t.near,t.far)}isUpdating(t){if(!this._vxl&&this._vxlPromise)return!0;const e=this._layers.get(t);return!!e&&e.outstandingRequestCount>0}getLayerTimes(t){const e=[];return this._layers.forEach((i,s)=>{if(i.layerView.wasmLayerId===t.wasmLayerId){const a=this._vxl.get_layer_epoch_times(s,t.layer.currentVariableId);for(let n=0;n<a.length;++n)e.push(a[n])}}),e}getCurrentLayerTimeIndex(t){let e=0;return this._layers.forEach((i,s)=>{i.layerView.wasmLayerId===t.wasmLayerId&&(e=this._vxl.get_layer_current_time_id(s))}),e}setEnabled(t,e){this._layers.forEach((i,s)=>{i.layerView.wasmLayerId===t.wasmLayerId&&(this._vxl.set_enabled(s,e),i.needMemoryUsageUpdate=!0,this._renderPluginContext.requestRender())})}setStaticSections(t,e){const i={mask:x.StaticSections,staticSections:e};return this._doMaskedUIUpdate(t,i,!0)}setCurrentVariable(t,e){const i={mask:x.CurrentVariable,currentVariable:e};return this._doMaskedUIUpdate(t,i,!0)}setRenderMode(t,e){const i={mask:x.RenderMode,renderMode:e};return this._doMaskedUIUpdate(t,i,!0)}setVerticalExaggerationAndOffset(t,e,i,s){const a={mask:x.ExaggerationAndOffset,volStyleDesc:{volumeId:e,verticalExaggeration:i,verticalOffset:s}};return this._doMaskedUIUpdate(t,a,!0)}setVariableStyles(t,e){const i={mask:x.VariableStyles,variableStyles:e};return this._doMaskedUIUpdate(t,i,!0)}setVolumeStyles(t,e){const i={mask:x.VolumeStyles,volumeStyles:e};return this._doMaskedUIUpdate(t,i,!0)}setEnableDynamicSections(t,e){const i={mask:x.ContainerVisibility,containerIsVisible:e,container:R.DynamicSections};return this._doMaskedUIUpdate(t,i,!0)}setEnableIsosurfaces(t,e){const i={mask:x.ContainerVisibility,containerIsVisible:e,container:R.Isosurfaces};return this._doMaskedUIUpdate(t,i,!0)}setEnableSections(t,e){const i={mask:x.ContainerVisibility,containerIsVisible:e,container:R.StaticSections};return this._doMaskedUIUpdate(t,i,!0)}setAnalysisSlice(t,e,i,s){const a={mask:x.AnalysisSlice,analysisSlice:{point:i,normal:s,enabled:e}};return this._doMaskedUIUpdate(t,a,!0)}_doMaskedUIUpdate(t,e,i){if(!this._vxl)return!1;let s=!1;return this._layers.forEach((a,n)=>{if(a.layerView.wasmLayerId===t.wasmLayerId){const o={str:JSON.stringify(e),byteCount:0,ptr:0,isReusable:!1};this._allocateBlock(o)&&(s=this._vxl.handle_masked_ui_update(n,o.ptr,o.byteCount)===1,o.isReusable||this._vxl._free(o.ptr))}}),s&&i&&this._renderPluginContext.requestRender(),s}_addTriangleToWasmBuffer(t,e,i,s,a){return t[3*e+0]=i[0],t[3*e+1]=i[1],t[3*e+2]=i[2],t[3*(e+=1)+0]=s[0],t[3*e+1]=s[1],t[3*e+2]=s[2],t[3*(e+=1)+0]=a[0],t[3*e+1]=a[1],t[3*e+2]=a[2],e+=1}_addNormalToWasmBuffer(t,e,i){return t[3*e+0]=i[0],t[3*e+1]=i[1],t[3*e+2]=i[2],e+=1}_doCaptureFrustum(){if(!this._vxl)return;const t=36,e=t/3,i=this._vxl._malloc(3*t*Float32Array.BYTES_PER_ELEMENT),s=new Float32Array(this._vxl.HEAPF32.buffer,i,3*t),a=this._vxl._malloc(3*e*Float32Array.BYTES_PER_ELEMENT),n=new Float32Array(this._vxl.HEAPF32.buffer,a,t),o=this._frustum.points[v.NEAR_BOTTOM_LEFT],d=this._frustum.points[v.NEAR_BOTTOM_RIGHT],f=this._frustum.points[v.NEAR_TOP_RIGHT],h=this._frustum.points[v.NEAR_TOP_LEFT],_=this._frustum.points[v.FAR_BOTTOM_LEFT],p=this._frustum.points[v.FAR_BOTTOM_RIGHT],c=this._frustum.points[v.FAR_TOP_RIGHT],g=this._frustum.points[v.FAR_TOP_LEFT];let m=0,u=0;const y=this._frustum.planes[T.NEAR];m=this._addTriangleToWasmBuffer(s,m,f,d,o),u=this._addNormalToWasmBuffer(n,u,y),m=this._addTriangleToWasmBuffer(s,m,o,h,f),u=this._addNormalToWasmBuffer(n,u,y);const E=this._frustum.planes[T.FAR];m=this._addTriangleToWasmBuffer(s,m,_,p,c),u=this._addNormalToWasmBuffer(n,u,E),m=this._addTriangleToWasmBuffer(s,m,c,g,_),u=this._addNormalToWasmBuffer(n,u,E);const W=this._frustum.planes[T.TOP];m=this._addTriangleToWasmBuffer(s,m,c,f,h),u=this._addNormalToWasmBuffer(n,u,W),m=this._addTriangleToWasmBuffer(s,m,h,g,c),u=this._addNormalToWasmBuffer(n,u,W);const k=this._frustum.planes[T.BOTTOM];m=this._addTriangleToWasmBuffer(s,m,o,d,p),u=this._addNormalToWasmBuffer(n,u,k),m=this._addTriangleToWasmBuffer(s,m,p,_,o),u=this._addNormalToWasmBuffer(n,u,k);const U=this._frustum.planes[T.LEFT];m=this._addTriangleToWasmBuffer(s,m,h,o,_),u=this._addNormalToWasmBuffer(n,u,U),m=this._addTriangleToWasmBuffer(s,m,_,g,h),u=this._addNormalToWasmBuffer(n,u,U);const B=this._frustum.planes[T.RIGHT];m=this._addTriangleToWasmBuffer(s,m,f,c,p),u=this._addNormalToWasmBuffer(n,u,B),m=this._addTriangleToWasmBuffer(s,m,p,d,f),u=this._addNormalToWasmBuffer(n,u,B),this._frustumRenderableId!==-1&&this._vxl.remove_generic_mesh(this._frustumRenderableId),this._frustumRenderableId=this._vxl.add_generic_mesh(i,3*t,a,t,255,0,0,64),this._vxl._free(i),this._vxl._free(a),this._captureFrustum=!1,this._renderPluginContext.requestRender()}captureFrustum(){this._renderCoordsHelper===null&&(this._renderCoordsHelper=G.create(it.Local,X(!1,this._view.spatialReference))),this._frustum===null&&(this._frustum=new K(this._renderCoordsHelper)),this._captureFrustum=!0,this._renderPluginContext!==null&&this._renderPluginContext.requestRender()}toggleFullVolumeExtentDraw(t){this._vxl&&this._layers.forEach((e,i)=>{e.layerView.wasmLayerId===t.wasmLayerId&&(this._vxl.toggle_full_volume_extent_draw(i),this._renderPluginContext.requestRender())})}addVoxelLayer(t){if(!this._vxl){const i={layerView:t,resolveCallback:null,rejectCallback:null},s=new Promise((a,n)=>{i.resolveCallback=a,i.rejectCallback=n});return this._newLayers.push(i),s}const e=this._addVoxelLayer(t);return e<0?Promise.reject(-1):Promise.resolve(e)}removeVoxelLayer(t){if(!this._vxl){const s=this._newLayers.findIndex(n=>t.uid===n.layerView.uid);s>=0&&(this._newLayers[s].resolveCallback(-1),this._newLayers.splice(s,1));const a=this._newLayers.length;return a===0&&(this._dbg(l.Lifetime," no voxel layers left after removing a layer, removing RenderPlugin and destroying"),this.destroy()),a}let e=-1;this._layers.forEach((s,a)=>{if(s.layerView.wasmLayerId===t.wasmLayerId){e=a,s.abortController.abort(),this._vxl.remove_layer(e);const n=this.layerUid.indexOf(t.layer.uid);n!==-1&&this.layerUid.splice(n,1)}}),e>=0&&this._layers.delete(e);const i=this._layers.size;return i===0&&(this._dbg(l.Lifetime," no voxel layers left after removing a layer, removing RenderPlugin and destroying"),this.destroy()),i}_getBlockSize(t){for(const e of this._wasmMemBlockSizes)if(t<e)return e;return-1}_allocateBlock(t){t.byteCount=this._vxl.lengthBytesUTF8(t.str)+1;const e=this._getBlockSize(t.byteCount);return e<0?(t.isReusable=!1,t.ptr=this._vxl._malloc(t.byteCount)):(t.isReusable=!0,t.ptr=this._wasmMemBlocks.get(e),t.ptr===0&&(t.ptr=this._vxl._malloc(e),this._wasmMemBlocks.set(e,t.ptr))),t.ptr!==0&&(this._vxl.stringToUTF8(t.str,t.ptr,t.byteCount),!0)}_getTimeArgs(t){let e=-Number.MAX_VALUE,i=Number.MAX_VALUE,s=!1;return P(t)&&(t.isAllTime?s=!0:(P(t.start)&&(s=!0,e=t.start.getTime()/1e3),P(t.end)&&(s=!0,i=t.end.getTime()/1e3))),{startTime:e,endTime:i,useTime:s}}_addVoxelLayer(t){var d,f;const e=t.layer;let i=-1;const s=e.getConfiguration();if(s.length<1)return-1;const a={str:s,byteCount:0,ptr:0,isReusable:!1};if(!this._allocateBlock(a))return-1;const n=this._getTimeArgs((d=this._view)==null?void 0:d.timeExtent),o=this._view.spatialReference.isWGS84&&e.spatialReference.isWGS84?111319.49079327357:1;if(i=this._vxl.add_layer(e.serviceRoot,a.ptr,a.byteCount,o,o,n.startTime,n.endTime,n.useTime,this._toWasmQuality(this._view.qualityProfile)),a.isReusable||this._vxl._free(a.ptr),i>=0){(f=e.test)!=null&&f.constantUpscaling&&(this._setUpscalingLimits(0,.25,.25),this._setUpscalingLimits(1,.5,.5),this._setUpscalingLimits(2,.75,.75));const h=new AbortController;if(this._layers.set(i,{layerView:t,responses:new Map,outstandingRequestCount:0,abortController:h,needMemoryUsageUpdate:!1}),this.layerUid.push(t.layer.uid),!this._halfIntTexturesAvailable||I("mac")){const _=[];let p="";for(const c of t.layer.variables)c.renderingFormat.type!=="Int16"&&c.renderingFormat.type!=="UInt16"||(_.push(c.name),c.id===t.layer.currentVariableId&&(p=c.name));p!==""&&b.error("#addVoxelLayer_error()",t.layer,`The voxel layer '${t.layer.title}' cannot render the current variable '${p}' in this browser`),_.length>0&&b.warn("#addVoxelLayer_warning()",t.layer,`The voxel layer '${t.layer.title}' cannot render the variables '${_.toString()}' in this browser`)}if(!this._textureFloatLinearAvailable){const _=[];let p="";for(const c of t.layer.variables)c.renderingFormat.type==="Float32"&&(_.push(c.name),c.id===t.layer.currentVariableId&&(p=c.name));p!==""&&b.error("#addVoxelLayer_error()",t.layer,`The voxel layer '${t.layer.title}' cannot render the current variable '${p}' in this browser`),_.length>0&&b.warn("#addVoxelLayer_warning()",t.layer,`The voxel layer '${t.layer.title}' cannot render the variables '${_.toString()}' in this browser`)}return I("esri-mobile")&&b.warnOnce("Mobile support differs across devices. Voxel layer might not display as expected."),i}return-1}prepareRender(t){if(!this._vxl)return;const e=t.bindParameters.camera.viewForward,i=t.bindParameters.camera.eye;this._vxl.update_camera_pos_and_direction(i[0],i[1],i[2],e[0],e[1],e[2]);const s=this._vxl.cull();this._dbg(l.RequestResponse,"missingResourceCount="+s),this._moreToLoad=s>0,this._havePreparedWithAllLayers=this._newLayers.length===0,this._updateMemoryUsage()}render(t){if(!this._vxl||t.output!==this._shaderOutput||t.bindParameters.slot!==this._renderSlot)return;for(const i of this._newLayers){const s=this._addVoxelLayer(i.layerView);s===-1?i.rejectCallback(-1):i.resolveCallback(s)}if(this._newLayers=[],this._layers.size===0)return void this._dbg(l.Error,"No voxel layers but RenderPlugin instance is being asked to render!");this._lastFrameWasStationary=this._view.stationary,this._syncRequestsResponses(),this._beforeDraw(),this._vxl.begin_color_frame(!this._view._stage.renderer.isFeatureEnabled(Y.HighQualityVoxel),t.bindParameters.lighting.mainLight.direction[0],t.bindParameters.lighting.mainLight.direction[1],t.bindParameters.lighting.mainLight.direction[2]);const e=this._renderTargetToRestore.viewport;e.width===this._viewportWidth&&e.height===this._viewportHeight||(this._viewportWidth=e.width,this._viewportHeight=e.height,this._vxl.set_viewport(e.width,e.height),this._layers.forEach(i=>{i.needMemoryUsageUpdate=!0})),e.x===0&&e.y===0||this._dbg(l.Error,"Unsupported viewport parameters detected!"),this.updateWasmCamera(t.bindParameters.camera),this._captureFrustum&&(this._frustum.update(t.bindParameters.camera),this._doCaptureFrustum()),this._vxl.draw(),this._afterDraw(),(this._moreToLoad||!this._havePreparedWithAllLayers&&this._layers.size>0)&&this._renderPluginContext.requestRender()}destroy(){this._dbg(l.Lifetime,"--destroy--"),this._removeRenderPlugin(),this._readyWatchHandle=L(this._readyWatchHandle),this._qualityWatchHandle=L(this._qualityWatchHandle),this._timeExtentWatchHandle=L(this._timeExtentWatchHandle),this._stationaryWatchHandle=L(this._stationaryWatchHandle),this._vxl&&(this._layers.forEach(t=>{t.abortController.abort()}),this._wasmMemBlocks.forEach(t=>{t!==0&&this._vxl._free(t)}),this._vxl.uninitialize_voxel_wasm(),this._vxl=null)}_initializeWasm(t){return this._vxl?Promise.resolve():(this._vxlPromise||(this._vxlPromise=nt(t).then(e=>{var g;if(this._vxl=e,this._vxlPromise=null,this._newLayers.length<=0)return this._dbg(l.Lifetime," no voxel layers left after WASM downloaded, removing RenderPlugin and destroying"),void this.destroy();const i=this._getTimeArgs((g=this._view)==null?void 0:g.timeExtent),s=this._vxl.addFunction(this._restoreFramebuffer.bind(this),"v"),a=this._vxl.addFunction(this._setBlendState.bind(this),"viiii"),n=this._vxl.addFunction(this._setFrontFace.bind(this),"vi"),o=this._vxl.addFunction(this._setRasterizerState.bind(this),"vi"),d=this._vxl.addFunction(this._setDepthStencilStateFunction.bind(this),"viii"),f=this._vxl.addFunction(this._setViewport.bind(this),"viiii"),h=this._vxl.addFunction(this._bindPreviousDepthToSlot.bind(this),"iii"),_=this._vxl.addFunction(this._modifyResourceCount.bind(this),"viii"),p=this._halfIntTexturesAvailable&&!I("mac"),c=this._textureFloatLinearAvailable;this._vxl.initialize_voxel_wasm(s,a,n,o,d,f,h,_,i.startTime,i.endTime,i.useTime,p,c),this._renderPluginContext&&this._renderPluginContext.requestRender()}).catch(()=>{for(const e of this._newLayers)e.rejectCallback(-2);this._dbg(l.Error," WASM failed to download, removing RenderPlugin and destroying"),this.destroy()})),this._vxlPromise)}pickDepth(t,e,i){if(!this._vxl||!this._rctx||this._layers.size===0)return null;const s=i.viewport[3]-e;if(t<0||t>i.viewport[2]||e<0||e>i.viewport[3])return this._dbg(l.Error,`[js] pickDepth: outOfRange, screenXY=[${t.toFixed(0)}, ${s.toFixed(0)}]]`),null;this._beforeDraw();const a=i.viewForward,n=i.eye;this._vxl.update_camera_pos_and_direction(n[0],n[1],n[2],a[0],a[1],a[2]),this.updateWasmCamera(i),this._vxl.begin_frame();const o=this._vxl.pick_depth(t,s);return this._afterDraw(),o.success?o.distanceToCamera:null}pickObject(t,e,i,s){if(!this._vxl||!this._rctx||this._layers.size===0)return null;const a=Math.round(t),n=Math.round(e);if(a<0||a>i.viewport[2]||n<0||n>i.viewport[3])return this._dbg(l.Error,`[js] pickObject: outOfRange, screenXY=[${a}, ${n}], vp=[${i.viewport.toString()}]`),null;this._beforeDraw();const o=i.viewForward,d=i.eye;this._vxl.update_camera_pos_and_direction(d[0],d[1],d[2],o[0],o[1],o[2]),this.updateWasmCamera(i),this._vxl.begin_frame();let f=null;if(s.length===0)f=this._vxl.pick_object(a,n,0,0);else{const h={str:JSON.stringify({layerIds:s}),byteCount:0,ptr:0,isReusable:!1};this._allocateBlock(h)&&(f=this._vxl.pick_object(a,n,h.ptr,h.byteCount),h.isReusable||this._vxl._free(h.ptr))}return this._afterDraw(),f}_beforeDraw(){this._renderTargetToRestore={fbo:this._rctx.getBoundFramebufferObject(),viewport:this._rctx.getViewport()},this._rctx.setPolygonOffsetFillEnabled(!1),this._rctx.setScissorTestEnabled(!1),this._rctx.setColorMask(!0,!0,!0,!0)}_afterDraw(){this._renderTargetToRestore.fbo=null,this._rctx.externalTextureUnitUpdate(this._vxl.get_texture_units_bound_in_frame(),this._vxl.get_active_texture_unit()),this._rctx.externalVertexArrayObjectUpdate(),this._rctx.externalVertexBufferUpdate(),this._rctx.externalProgramUpdate()}intersect(t,e,i,s,a){if(!this._vxl||!this._rctx||this._layers.size===0||!t.options.selectionMode||t.options.isFiltered)return;if(a[0]<0||a[0]>t.camera.viewport[2]||a[1]<0||a[1]>t.camera.viewport[3])return this._dbg(l.Error,`[js] VoxelWasmPerScene.intersect: outOfRange, screenXY=[${a[0].toFixed(0)}, ${a[1].toFixed(0)}]`),null;const n=[];this._layers.forEach(f=>{t.options.filteredLayerUids.includes(f.layerView.layer.uid)&&n.push(f.layerView.wasmLayerId)});const o=this.pickObject(a[0],a[1],t.camera,n);if(D(o)||o.layerId===-1)return;const d=this._layers.get(o.layerId);if(d){const f=d.layerView.layer.uid,h=o.distanceToCamera/H(i,s),_=z();_[0]=o.worldX,_[1]=o.worldY,_[2]=o.worldZ;const p={};if(o.uniqueValue.length===0?p["Voxel.ServiceValue"]=`${o.continuousValue.toLocaleString()} ${o.continuousValueUnits}`:p["Voxel.ServiceValue"]=o.uniqueValue,p["Voxel.ServiceVariableLabel"]=o.variableLabel,p["Voxel.Position"]=o.voxelSpacePosition,o.nativeTime.length>0){const y=new Date(o.epochTime);p["Voxel.ServiceLocalTime"]=y.toString(),p["Voxel.ServiceNativeTime"]=o.nativeTime}o.hasDepth&&(p["Voxel.ServiceDepth"]=`${o.depth.toLocaleString()} ${o.depthUnits}`);const c=o.faceNormal;p["Voxel.WorldPosition"]=`[${_[0]}, ${_[1]}, ${_[2]}]`;const g=y=>{const E=new Z(_,f,()=>this._createVoxelGraphic(d.layerView.layer,p));y.set(this.type,E,h,c)},m=t.results,u=t.options.store===Q.ALL;if((m.min.dist==null||h<m.min.dist)&&g(m.min),(m.max.dist==null||h>m.max.dist)&&g(m.max),u){const y=J(t.ray);g(y),t.results.all.push(y)}}}_createVoxelGraphic(t,e){return new q({layer:t,sourceLayer:t,attributes:e})}_toWasmQuality(t){switch(t){case"low":return 0;case"medium":return 1;case"high":return 2}}_setUpscalingLimits(t,e,i){this._vxl&&this._vxl.set_upscaling_limits(t,e,i)}}export{bo as default};
