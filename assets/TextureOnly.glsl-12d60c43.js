import{r as e}from"./vec4f64-6d0e93be.js";import{o as t}from"./ScreenSpacePass.glsl-28a2b6e5.js";import{e as n}from"./Float4PassUniform-52993952.js";import{n as a,o as l,a as m}from"./ShaderBuilder-c7fc4a30.js";import{f as s}from"./Texture2DPassUniform-1510cbb0.js";class u extends a{constructor(){super(...arguments),this.color=e(1,1,1,1)}}function i(){const o=new l;return o.include(t),o.fragment.uniforms.add([new s("tex",r=>r.texture),new n("uColor",r=>r.color)]),o.fragment.code.add(m`void main() {
vec4 texColor = texture2D(tex, uv);
gl_FragColor = texColor * uColor;
}`),o}const g=Object.freeze(Object.defineProperty({__proto__:null,TextureOnlyPassParameters:u,build:i},Symbol.toStringTag,{value:"Module"}));export{g as d,u as i,i as l};
