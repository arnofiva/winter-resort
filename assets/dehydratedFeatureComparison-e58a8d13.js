import"./string-7a2f1d87.js";import{r as s,t as f}from"./typedArrayUtil-70e1d79e.js";import{E as i}from"./Extent-2ad2c9a9.js";function l(n,r){if(n===r)return!0;if(n==null||r==null||n.length!==r.length)return!1;for(let e=0;e<n.length;e++){const t=n[e],a=r[e];if(t.length!==a.length)return!1;for(let u=0;u<t.length;u++)if(t[u]!==a[u])return!1}return!0}function o(n,r){if(n===r)return!0;if(n==null||r==null||n.length!==r.length)return!1;for(let e=0;e<n.length;e++)if(!l(n[e],r[e]))return!1;return!0}function c(n,r){return n===r||s(n)&&s(r)&&i(n.spatialReference,r.spatialReference)&&n.x===r.x&&n.y===r.y&&n.z===r.z&&n.m===r.m}function h(n,r){return n.hasZ===r.hasZ&&n.hasM===r.hasM&&!!i(n.spatialReference,r.spatialReference)&&o(n.paths,r.paths)}function p(n,r){return n.hasZ===r.hasZ&&n.hasM===r.hasM&&!!i(n.spatialReference,r.spatialReference)&&o(n.rings,r.rings)}function m(n,r){return n.hasZ===r.hasZ&&n.hasM===r.hasM&&!!i(n.spatialReference,r.spatialReference)&&l(n.points,r.points)}function g(n,r){return n.hasZ===r.hasZ&&n.hasM===r.hasM&&!!i(n.spatialReference,r.spatialReference)&&n.xmin===r.xmin&&n.ymin===r.ymin&&n.zmin===r.zmin&&n.xmax===r.xmax&&n.ymax===r.ymax&&n.zmax===r.zmax}function y(n,r){if(n===r)return!0;if(f(n)||f(r)||n.type!==r.type)return!1;switch(n.type){case"point":return c(n,r);case"extent":return g(n,r);case"polyline":return h(n,r);case"polygon":return p(n,r);case"multipoint":return m(n,r);case"mesh":return!1;default:return}}function x(n,r){if(n===r)return!0;if(!n||!r)return!1;const e=Object.keys(n),t=Object.keys(r);if(e.length!==t.length)return!1;for(const a of e)if(n[a]!==r[a])return!1;return!0}function b(n,r){return n===r||n!=null&&r!=null&&n.objectId===r.objectId&&!!y(n.geometry,r.geometry)&&!!x(n.attributes,r.attributes)}export{b as h,c as i};
