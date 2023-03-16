import{d as S}from"./string-7a2f1d87.js";import{l as E}from"./locale-30120714.js";const x={ar:[".",","],bg:[","," "],bs:[",","."],ca:[",","."],cs:[","," "],da:[",","."],de:[",","."],"de-ch":[".","’"],el:[",","."],en:[".",","],"en-au":[".",","],es:[",","."],"es-mx":[".",","],et:[","," "],fi:[","," "],fr:[","," "],"fr-ch":[","," "],he:[".",","],hi:[".",",","#,##,##0.###"],hr:[",","."],hu:[","," "],id:[",","."],it:[",","."],"it-ch":[".","’"],ja:[".",","],ko:[".",","],lt:[","," "],lv:[","," "],mk:[",","."],nb:[","," "],nl:[",","."],pl:[","," "],pt:[",","."],"pt-pt":[","," "],ro:[",","."],ru:[","," "],sk:[","," "],sl:[",","."],sr:[",","."],sv:[","," "],th:[".",","],tr:[",","."],uk:[","," "],vi:[",","."],zh:[".",","]};function w(e=E()){let t=(e=e.toLowerCase())in x;if(!t){const l=e.split("-");l.length>1&&l[0]in x&&(e=l[0],t=!0),t||(e="en")}const[n,r,s="#,##0.###"]=x[e];return{decimal:n,group:r,pattern:s}}function $(e,t){const n=w((t={...t}).locale);t.customs=n;const r=t.pattern||n.pattern;return isNaN(e)||Math.abs(e)===1/0?null:v(e,r,t)}const N=/[#0,]*[#0](?:\.0*#*)?/;function v(e,t,n){const r=(n=n||{}).customs.group,s=n.customs.decimal,l=t.split(";"),o=l[0];if((t=l[e<0?1:0]||"-"+o).includes("%"))e*=100;else if(t.includes("‰"))e*=1e3;else{if(t.includes("¤"))throw new Error("currency notation not supported");if(t.includes("E"))throw new Error("exponential notation not supported")}const d=N,u=o.match(d);if(!u)throw new Error("unable to find a number expression in pattern: "+t);return n.fractional===!1&&(n.places=0),t.replace(d,z(e,u[0],{decimal:s,group:r,places:n.places,round:n.round}))}function z(e,t,n){(n=n||{}).places===!0&&(n.places=0),n.places===1/0&&(n.places=6);const r=t.split("."),s=typeof n.places=="string"&&n.places.indexOf(",");let l=n.places;s?l=n.places.substring(s+1):l>=0||(l=(r[1]||[]).length),n.round<0||(e=Number(e.toFixed(Number(l))));const o=String(Math.abs(e)).split("."),d=o[1]||"";if(r[1]||n.places){s&&(n.places=n.places.substring(0,s));const c=n.places!==void 0?n.places:r[1]&&r[1].lastIndexOf("0")+1;c>d.length&&(o[1]=d.padEnd(Number(c),"0")),l<d.length&&(o[1]=d.substr(0,Number(l)))}else o[1]&&o.pop();const u=r[0].replace(",","");let f=u.indexOf("0");f!==-1&&(f=u.length-f,f>o[0].length&&(o[0]=o[0].padStart(f,"0")),u.includes("#")||(o[0]=o[0].substr(o[0].length-f)));let p,i,a=r[0].lastIndexOf(",");if(a!==-1){p=r[0].length-a-1;const c=r[0].substr(0,a);a=c.lastIndexOf(","),a!==-1&&(i=c.length-a-1)}const g=[];for(let c=o[0];c;){const m=c.length-p;g.push(m>0?c.substr(m):c),c=m>0?c.slice(0,m):"",i&&(p=i,i=void 0)}return o[0]=g.reverse().join(n.group||","),o.join(n.decimal||".")}function O(e){const t=w((e=e||{}).locale),n=e.pattern||t.pattern,r=t.group,s=t.decimal;let l=1;if(n.includes("%"))l/=100;else if(n.includes("‰"))l/=1e3;else if(n.includes("¤"))throw new Error("currency notation not supported");const o=n.split(";");return o.length===1&&o.push("-"+o[0]),{regexp:h(o,u=>(u="(?:"+S(u,".")+")").replace(N,f=>{const p={signed:!1,separator:e.strict?r:[r,""],fractional:e.fractional,decimal:s,exponent:!1},i=f.split(".");let a=e.places;i.length===1&&l!==1&&(i[1]="###"),i.length===1||a===0?p.fractional=!1:(a===void 0&&(a=e.pattern?i[1].lastIndexOf("0")+1:1/0),a&&e.fractional==null&&(p.fractional=!0),!e.places&&a<i[1].length&&(a+=","+i[1].length),p.places=a);const g=i[0].split(",");return g.length>1&&(p.groupSize=g.pop().length,g.length>1&&(p.groupSize2=g.pop().length)),"("+y(p)+")"}),!0).replace(/[\xa0 ]/g,"[\\s\\xa0]"),group:r,decimal:s,factor:l}}function M(e,t){const n=O(t),r=new RegExp("^"+n.regexp+"$").exec(e);if(!r)return NaN;let s=r[1];if(!r[1]){if(!r[2])return NaN;s=r[2],n.factor*=-1}return s=s.replace(new RegExp("["+n.group+"\\s\\xa0]","g"),"").replace(n.decimal,"."),Number(s)*n.factor}function y(e){"places"in(e=e||{})||(e.places=1/0),typeof e.decimal!="string"&&(e.decimal="."),"fractional"in e&&!/^0/.test(String(e.places))||(e.fractional=[!0,!1]),"exponent"in e||(e.exponent=[!0,!1]),"eSigned"in e||(e.eSigned=[!0,!1]);const t=b(e),n=h(e.fractional,s=>{let l="";return s&&e.places!==0&&(l="\\"+e.decimal,e.places===1/0?l="(?:"+l+"\\d+)?":l+="\\d{"+e.places+"}"),l},!0);let r=t+n;return n&&(r="(?:(?:"+r+")|(?:"+n+"))"),r+h(e.exponent,s=>s?"([eE]"+b({signed:e.eSigned})+")":"")}function b(e){return"signed"in(e=e||{})||(e.signed=[!0,!1]),"separator"in e?"groupSize"in e||(e.groupSize=3):e.separator="",h(e.signed,t=>t?"[-+]":"",!0)+h(e.separator,t=>{if(!t)return"(?:\\d+)";(t=S(t))===" "?t="\\s":t===" "&&(t="\\s\\xa0");const n=e.groupSize,r=e.groupSize2;if(r){const s="(?:0|[1-9]\\d{0,"+(r-1)+"}(?:["+t+"]\\d{"+r+"})*["+t+"]\\d{"+n+"})";return n-r>0?"(?:"+s+"|(?:0|[1-9]\\d{0,"+(n-1)+"}))":s}return"(?:0|[1-9]\\d{0,"+(n-1)+"}(?:["+t+"]\\d{"+n+"})*)"},!0)}const h=(e,t,n)=>{if(!(e instanceof Array))return t(e);const r=[];for(let s=0;s<e.length;s++)r.push(t(e[s]));return j(r.join("|"),Boolean(n))},j=(e,t)=>"("+(t?"?:":"")+e+")";export{O as a,M as p,$ as s};
