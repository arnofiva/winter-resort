import"./geometry-f89ca072.js";import{f as i}from"./normalizeUtils-11faac16.js";import{p as e}from"./queryTopFeatures-ff482749.js";import{v as a}from"./TopFeaturesQuery-c51356f1.js";import{e as n}from"./Extent-2ad2c9a9.js";import"./ensureType-249b88cd.js";import"./string-7a2f1d87.js";import"./typedArrayUtil-70e1d79e.js";import"./Error-62cc7aff.js";import"./Polyline-cf51ad23.js";import"./JSONSupport-32b5ad86.js";import"./nextTick-3ee5a785.js";import"./promiseUtils-59dab60c.js";import"./typeUtils-05f9d41d.js";import"./normalizeUtilsCommon-f5194d67.js";import"./jsonUtils-6d0a72e3.js";import"./request-f01affa1.js";import"./preload-helper-41c905a7.js";import"./query-159ca0c6.js";import"./pbfQueryUtils-e595cc71.js";import"./pbf-490f560a.js";import"./OptimizedFeature-cb86a86f.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./queryZScale-7c3cd57e.js";import"./zscale-d428b1da.js";import"./TimeExtent-4bfae662.js";import"./Ellipsoid-89682c5e.js";async function C(o,r,m){const p=i(o),t=await e(p,a.from(r),{...m});return{count:t.data.count,extent:n.fromJSON(t.data.extent)}}export{C as executeForTopExtents};
