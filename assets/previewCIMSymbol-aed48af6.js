import{e as w,u as P}from"./screenUtils-410d12c0.js";import{s as V,i as x}from"./cimAnalyzer-8fa8dcd4.js";import{GeometryStyle as G,CIMSymbolRasterizer as q}from"./CIMSymbolRasterizer-e72b51ea.js";import{O as D}from"./utils-3d986af0.js";import{cJ as b,cM as E}from"./index-a7842505.js";import"./Color-5a385b27.js";import"./colorUtils-639f4d25.js";import"./mathUtils-5b623c84.js";import"./vec3-015ca254.js";import"./common-d0b63c2d.js";import"./vec4-c7a19f0d.js";import"./typedArrayUtil-70e1d79e.js";import"./ensureType-249b88cd.js";import"./string-7a2f1d87.js";import"./Error-62cc7aff.js";import"./fontUtils-0371ec50.js";import"./arcadeOnDemand-5c3ab3f7.js";import"./preload-helper-41c905a7.js";import"./geometry-f89ca072.js";import"./Extent-2ad2c9a9.js";import"./JSONSupport-32b5ad86.js";import"./nextTick-3ee5a785.js";import"./promiseUtils-59dab60c.js";import"./Ellipsoid-89682c5e.js";import"./Polyline-cf51ad23.js";import"./typeUtils-05f9d41d.js";import"./BidiEngine-836b7ef6.js";import"./aaBoundingRect-42f9721f.js";import"./jsonUtils-6d0a72e3.js";import"./TileClipper-ae6eca9e.js";import"./enums-e09487cb.js";import"./callExpressionWithFeature-b2780134.js";import"./quantizationUtils-5accf704.js";import"./vec2-8acac370.js";import"./vec2f32-eaf29605.js";import"./number-b10bd8f5.js";import"./definitions-12364007.js";import"./floatRGBA-11065dbc.js";import"./request-f01affa1.js";import"./_commonjsHelpers-2f3e7994.js";import"./imageutils-014872a4.js";import"./rasterizingUtils-c1ac9856.js";import"./cimSymbolUtils-12c2ae8a.js";import"./Symbol3DAnchorPosition2D-d0207ef9.js";import"./IdentityManager-844d980b.js";import"./Evented-36093e88.js";import"./reactiveUtils-e6d6c898.js";import"./intl-0ee83c79.js";import"./number-2db5f4a2.js";import"./locale-30120714.js";import"./messages-f54f7f46.js";import"./assets-640b4d04.js";import"./Promise-3959c3ee.js";import"./uuid-73213768.js";import"./dom-2ec1e33c.js";import"./Clonable-95fa5d2d.js";import"./Cyclical-34b2a5e3.js";import"./Graphic-46941d56.js";import"./PopupTemplate-c1fb66ed.js";import"./Collection-9e42cc30.js";import"./SimpleObservable-a6d3d2d8.js";import"./fieldUtils-e397be4b.js";import"./enumeration-504d95a2.js";import"./Identifiable-99d92428.js";import"./symbols-5a102dff.js";import"./CIMSymbol-561444b9.js";import"./opacityUtils-c0957a27.js";import"./symbolLayerUtils3D-5a2f49a8.js";import"./aaBoundingBox-dfb04110.js";import"./persistableUrlUtils-ccf13db2.js";import"./collectionUtils-61fc1a27.js";import"./Portal-52d960e8.js";import"./Loadable-7c3ecd79.js";import"./PortalGroup-b49a7409.js";import"./PortalUser-85cf1ca9.js";import"./workers-591e0dfc.js";import"./Connection-000cba43.js";import"./GraphicsLayer-78551f17.js";import"./HandleOwner-f4554d8c.js";import"./Layer-ab90f8be.js";import"./BlendLayer-fe49ee20.js";import"./mat4f32-60a2394b.js";import"./mat4-4714ff8c.js";import"./ScaleRangeLayer-56857dcb.js";import"./ElevationInfo-bc15f954.js";import"./lengthUtils-e2d3809d.js";import"./HeightModelInfo-bc3bd77c.js";import"./projection-d42b91be.js";import"./zscale-d428b1da.js";import"./sphere-092242fd.js";import"./vec4f64-6d0e93be.js";import"./byteSizeEstimations-f0cab514.js";import"./mat3f64-50f3b9f6.js";import"./mat4f64-abdda1bb.js";import"./quatf64-f8f1c132.js";import"./vec2f64-f35767d6.js";import"./lineSegment-8ffcb750.js";import"./plane-fef3662c.js";import"./spatialReferenceEllipsoidUtils-26c8dea5.js";import"./scaleUtils-b27f2fc2.js";import"./layerUtils-ff76096c.js";import"./AttachmentInfo-2774f92c.js";import"./AttachmentQuery-be73c1f4.js";import"./LegendOptions-d1ee6f9f.js";import"./DimensionalDefinition-89a02a09.js";import"./UniqueValueRenderer-31cfe725.js";import"./diffUtils-a2efee1b.js";import"./colorRamps-844ba070.js";import"./sizeVariableUtils-d4870b0d.js";import"./visualVariableUtils-6f78f1dd.js";import"./compilerUtils-2eb56463.js";import"./jsonUtils-ba20c384.js";import"./styleUtils-ba5d50e4.js";import"./vectorFieldUtils-b0aae2f9.js";import"./colorUtils-7641d345.js";import"./normalizeUtils-11faac16.js";import"./normalizeUtilsCommon-f5194d67.js";import"./asyncUtils-8de18dd2.js";import"./ItemCache-47345b61.js";import"./MemCache-a072224a.js";import"./jsonUtils-0cd7beab.js";import"./DictionaryLoader-e5256637.js";import"./LRUCache-805da42e.js";import"./deprecate-2ea4a12e.js";import"./heatmapUtils-bc76f08e.js";import"./Query-6df7497c.js";import"./TimeExtent-4bfae662.js";import"./Field-efd8d6fa.js";import"./fieldType-ec749512.js";import"./executeQueryJSON-c3e8823f.js";import"./query-159ca0c6.js";import"./pbfQueryUtils-e595cc71.js";import"./pbf-490f560a.js";import"./OptimizedFeature-cb86a86f.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./queryZScale-7c3cd57e.js";import"./FeatureSet-adc6c42d.js";import"./featureConversionUtils-66a9b1ed.js";import"./RelationshipQuery-1388e5e8.js";import"./TopFeaturesQuery-c51356f1.js";import"./FeatureLayer-c3299dce.js";import"./MultiOriginJSONSupport-247be6b9.js";import"./serviceCapabilitiesUtils-d47be03f.js";import"./arcgisLayerUrl-1177870a.js";import"./FeatureLayerBase-4bc86305.js";import"./OperationalLayer-892ef1ff.js";import"./TimeReference-dbe22fa2.js";import"./datetime-b6333958.js";import"./editsZScale-1f9f5428.js";import"./APIKeyMixin-a999140b.js";import"./ArcGISService-69574b36.js";import"./CustomParametersMixin-0cb5d402.js";import"./EditBusLayer-40721674.js";import"./FeatureReductionLayer-5d021257.js";import"./labelingInfo-81f8350c.js";import"./labelUtils-2517fbb8.js";import"./defaultsJSON-59981e75.js";import"./OrderedLayer-e39f681d.js";import"./PortalLayer-f8afa381.js";import"./PortalItem-476b4f2f.js";import"./portalItemUtils-f08de884.js";import"./RefreshableLayer-6e09e5c7.js";import"./TemporalLayer-1cafdc62.js";import"./FeatureTemplate-c492af3e.js";import"./FeatureType-9aee1062.js";import"./fieldProperties-13016a3b.js";import"./FieldsIndex-3347fdc5.js";import"./versionUtils-3b55ef95.js";import"./styleUtils-a2cb1d02.js";import"./popupUtils-ef59e204.js";import"./webStyleSymbolUtils-7af9b968.js";import"./devEnvironmentUtils-5002a058.js";import"./Scheduler-22864fbd.js";import"./ElevationSamplerData-89295dc0.js";import"./TileInfo-c1a6fc90.js";import"./Basemap-a98ee4eb.js";import"./loadAll-b0bbaf30.js";import"./writeUtils-054a51f5.js";import"./CollectionFlattener-53f524d1.js";import"./TablesMixin-d0eb7f9b.js";import"./ViewingMode-5d7d590b.js";import"./PhysicallyBasedRendering.glsl-d72e2a11.js";import"./View.glsl-725bf3cf.js";import"./ShaderBuilder-c7fc4a30.js";import"./FloatPassUniform-8a52db3d.js";import"./Float4PassUniform-52993952.js";import"./RgbaFloatEncoding.glsl-31b2b966.js";import"./Texture2DPassUniform-1510cbb0.js";import"./vec3f32-01c06d8d.js";import"./VertexAttribute-15d1866a.js";import"./Texture2DDrawUniform-d1eaa0d6.js";import"./basicInterfaces-7449a8bf.js";import"./PiUtils.glsl-9dc0973a.js";import"./ReadLinearDepth.glsl-9abddde9.js";import"./WaterSurface.glsl-ad07df19.js";import"./ForwardLinearDepth.glsl-3606f02d.js";import"./Matrix3PassUniform-285be0f9.js";import"./Slice.glsl-e5fdd8d3.js";import"./Transform.glsl-e6366353.js";import"./OutputHighlight.glsl-569dde3f.js";import"./MultipassTerrainTest.glsl-029ffa3f.js";import"./NormalUtils.glsl-d1e61521.js";import"./AlphaCutoff-96178e0d.js";import"./TransparencyPassType-a1cb0602.js";import"./EvaluateSceneLighting.glsl-ed7fcdc2.js";import"./VisualVariablePassParameters-ded3d86d.js";import"./enums-fc527c7c.js";import"./VertexElementDescriptor-2925c6af.js";import"./Texture-42bd3a76.js";import"./context-util-eb98c678.js";import"./Util-c12e93ba.js";import"./SSAOBlur.glsl-2bfd75b0.js";import"./ScreenSpacePass.glsl-28a2b6e5.js";import"./SSAO.glsl-1d087e8c.js";import"./ShaderTechniqueConfiguration-5b4afc58.js";import"./mat3-4fd89d48.js";import"./HUD.glsl-03dc2889.js";import"./VerticalOffset.glsl-2b654767.js";import"./Octree-fac2eadb.js";import"./objectResourceUtils-f1a10a8c.js";import"./BufferView-da65c548.js";import"./vec33-6cea25ab.js";import"./DefaultMaterial_COLOR_GAMMA-8afda99b.js";import"./types-e1c0a5bf.js";import"./Version-b7702d36.js";import"./quat-99c4e099.js";import"./resourceUtils-527631ac.js";import"./Indices-7097baff.js";import"./DefaultMaterial.glsl-0c704a85.js";import"./MixExternalColor.glsl-96fc9ef8.js";import"./symbolColorUtils-7c94928f.js";import"./ObjectAndLayerIdColor.glsl-751e40ac.js";import"./OutputDepth.glsl-ccbc6366.js";import"./VisualVariables.glsl-655a358f.js";import"./DiscardOrAdjustAlphaBlend.glsl-27b032af.js";import"./VertexColor.glsl-e2eb2da5.js";import"./Normals.glsl-81bc0899.js";import"./Texture-2b2e584f.js";import"./TextureOnly.glsl-12d60c43.js";import"./Attribute-f72d3f37.js";import"./InterleavedLayout-d75b8228.js";import"./DefaultTechniqueConfiguration-d3c0bf46.js";import"./RealisticTree.glsl-f514fb19.js";import"./edgeProcessing-9fe73f05.js";import"./deduplicate-3aef92f2.js";import"./MeshComponent-76cc0acf.js";import"./earcut-61f7b102.js";import"./projection-720a032f.js";import"./HUDMaterial.glsl-bcc90ab4.js";import"./sdfPrimitives-16d07d48.js";import"./dehydratedFeatures-be6dfdbf.js";import"./labelFormatUtils-deccc57b.js";import"./orientedBoundingBox-7f391048.js";import"./quatf32-51a323b8.js";import"./LineCallout.glsl-828f2c8d.js";import"./QueryEngineResult-60e819c8.js";import"./WhereClause-ec2695a9.js";import"./executionError-fb3f283a.js";import"./utils-eec406bb.js";import"./generateRendererUtils-9fa055c1.js";import"./json-48e3ea08.js";import"./MarkerSizing.glsl-1e815ddd.js";import"./RibbonLine.glsl-3b5ffb4c.js";import"./LineStipple.glsl-df787c01.js";import"./LineMarker.glsl-af47e9ca.js";import"./NativeLine.glsl-eddd3297.js";import"./Path.glsl-98387e31.js";import"./ColorMaterial.glsl-2f16b93b.js";import"./Pattern.glsl-3d1048ed.js";import"./LercDecoder-bc94632d.js";import"./enums-fb086c25.js";import"./config-f7904f35.js";import"./TileKey-5f02dc79.js";import"./workerHelper-7b69330e.js";import"./capabilities-ef053cf2.js";import"./originUtils-1469eeaf.js";import"./multiOriginJSONSupportUtils-c978f4c3.js";import"./saveUtils-44b7e317.js";import"./resourceUtils-a295dbcf.js";import"./floating-ui-8c8de742.js";import"./StreamLayer-869211a2.js";import"./geometryEngine-5399ce6b.js";import"./geometryEngineBase-e1a33b0a.js";import"./hydrated-d446f5f6.js";import"./SceneFilter-9f7d00a7.js";import"./persistable-5845b8f0.js";import"./resourceExtension-58c3e69d.js";import"./elevationInfoUtils-cb162a43.js";import"./DimensionAnalysis-26fb1362.js";import"./Analysis-ba6617ff.js";import"./ExportImageParameters-1fbdfa05.js";import"./sublayerUtils-1d562031.js";const g=new q(null,!0),s=w(b.size),F=w(b.maxSize),L=w(b.lineWidth),k=1;function A(i){const t=i==null?void 0:i.size;return typeof t=="number"?{width:t,height:t}:{width:t!=null&&typeof t=="object"&&"width"in t?t.width:null,height:t!=null&&typeof t=="object"&&"height"in t?t.height:null}}async function sp(i,t={}){var I;const{node:M,opacity:v,symbolConfig:a}=t,j=typeof a=="object"&&"isSquareFill"in a&&a.isSquareFill,S=t.cimOptions||t,r=S.geometryType||D((I=i==null?void 0:i.data)==null?void 0:I.symbol),o=A(t),{feature:C,fieldMap:z}=S;if(o.width==null||o.height==null){const m=await V.resolveSymbolOverrides(i.data,C,null,z,r);if(!m)return null;(i=i.clone()).data={type:"CIMSymbolReference",symbol:m},i.data.primitiveOverrides=void 0;const y=[];x.fetchResources(m,g.resourceManager,y),y.length>0&&await Promise.all(y);const p=x.getEnvelope(m,null,g.resourceManager),f=p==null?void 0:p.width,d=p==null?void 0:p.height;o.width=r==="esriGeometryPolygon"?s:r==="esriGeometryPolyline"?L:f!=null&&isFinite(f)?Math.min(f,F):s,o.height=r==="esriGeometryPolygon"?s:d!=null&&isFinite(d)?Math.max(Math.min(d,F),k):s}const h=await g.rasterizeCIMSymbolAsync(i,C,o,j||r!=="esriGeometryPolygon"?G.Preview:G.Legend,z,r);if(!h)return null;const{width:O,height:R}=h,e=document.createElement("canvas");e.width=O,e.height=R,e.getContext("2d").putImageData(h,0,0);const c=P(o.width),u=P(o.height),n=new Image(c,u);n.src=e.toDataURL(),v!=null&&(n.style.opacity=`${v}`);let l=n;if(t.effectView!=null){const m={shape:{type:"image",x:0,y:0,width:c,height:u,src:n.src},fill:null,stroke:null,offset:[0,0]};l=E([[m]],[c,u],{effectView:t.effectView})}return M&&l&&M.appendChild(l),l}export{sp as previewCIMSymbol};
