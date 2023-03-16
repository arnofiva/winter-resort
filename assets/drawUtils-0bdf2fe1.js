import{b as H}from"./mathUtils-5b623c84.js";import{u as A}from"./aaBoundingRect-42f9721f.js";import{e as j,g as B}from"./Polyline-cf51ad23.js";function b(n,i,e,o){if(o==null||n.hasZ||(o=void 0),n.type==="point")return n.x+=i,n.y+=e,n.hasZ&&o!=null&&(n.z+=o),n;if(n.type==="multipoint"){const x=n.points;for(let a=0;a<x.length;a++)x[a]=C(x[a],i,e,o);return n}if(n.type==="extent")return n.xmin+=i,n.xmax+=i,n.ymin+=e,n.ymax+=e,o!=null&&(n.zmin??(n.zmin=0),n.zmin+=o,n.zmax??(n.zmax=0),n.zmax+=o),n;const s=j(n),t=n.type==="polyline"?n.paths:n.rings;for(let x=0;x<s.length;x++){const a=s[x];for(let m=0;m<a.length;m++)a[m]=C(a[m],i,e,o)}return"paths"in n?n.paths=t:n.rings=t,n}function L(n,i,e,o,s){const t=n.clone(),x=o.resolution;if(t.type==="point"){if(s)b(t,i*x,-e*x);else{const a=o.state.transform,m=o.state.inverseTransform,l=a[0]*t.x+a[2]*t.y+a[4],y=a[1]*t.x+a[3]*t.y+a[5];t.x=m[0]*(l+i)+m[2]*(y+e)+m[4],t.y=m[1]*(l+i)+m[3]*(y+e)+m[5]}return t}if(t.type==="multipoint"){if(s)b(t,i*x,-e*x);else{const a=t.points,m=o.state.transform,l=o.state.inverseTransform;for(let y=0;y<a.length;y++){const c=a[y],p=m[0]*c[0]+m[2]*c[1]+m[4],z=m[1]*c[0]+m[3]*c[1]+m[5],f=l[0]*(p+i)+l[2]*(z+e)+l[4],u=l[1]*(p+i)+l[3]*(z+e)+l[5];a[y]=q(c,f,u,void 0)}}return t}if(t.type==="extent"){if(s)b(t,i*x,-e*x);else{const a=o.state.transform,m=o.state.inverseTransform,l=a[0]*t.xmin+a[2]*t.ymin+a[4],y=a[1]*t.xmin+a[3]*t.ymin+a[5],c=a[0]*t.xmax+a[2]*t.ymax+a[4],p=a[1]*t.xmax+a[3]*t.ymax+a[5];t.xmin=m[0]*(l+i)+m[2]*(y+e)+m[4],t.ymin=m[1]*(l+i)+m[3]*(y+e)+m[5],t.xmax=m[0]*(c+i)+m[2]*(p+e)+m[4],t.ymax=m[1]*(c+i)+m[3]*(p+e)+m[5]}return t}if(s)b(t,i*x,-e*x);else{const a=j(t),m=t.type==="polyline"?t.paths:t.rings,l=o.state.transform,y=o.state.inverseTransform;for(let c=0;c<a.length;c++){const p=a[c];for(let z=0;z<p.length;z++){const f=p[z],u=l[0]*f[0]+l[2]*f[1]+l[4],h=l[1]*f[0]+l[3]*f[1]+l[5],v=y[0]*(u+i)+y[2]*(h+e)+y[4],g=y[1]*(u+i)+y[3]*(h+e)+y[5];p[z]=q(f,v,g,void 0)}}"paths"in t?t.paths=m:t.rings=m}return t}function N(n,i,e,o){if(n.type==="point"){const{x:f,y:u}=n,h=o?o[0]:f,v=o?o[1]:u,g=n.clone(),M=(f-h)*i+h,r=(u-v)*e+v;return g.x=M,g.y=r,g}if(n.type==="multipoint"){const f=j(n),u=A(),[h,v,g,M]=B(u,[f]),r=o?o[0]:(h+g)/2,d=o?o[1]:(M+v)/2,T=n.clone(),k=T.points;for(let Z=0;Z<k.length;Z++){const w=k[Z],[D,E]=w,F=(D-r)*i+r,G=(E-d)*e+d;k[Z]=q(w,F,G,void 0)}return T}if(n.type==="extent"){const{xmin:f,xmax:u,ymin:h,ymax:v}=n,g=o?o[0]:(f+u)/2,M=o?o[1]:(v+h)/2,r=n.clone();if(r.xmin=(f-g)*i+g,r.ymax=(v-M)*e+M,r.xmax=(u-g)*i+g,r.ymin=(h-M)*e+M,r.xmin>r.xmax){const d=r.xmin,T=r.xmax;r.xmin=T,r.xmax=d}if(r.ymin>r.ymax){const d=r.ymin,T=r.ymax;r.ymin=T,r.ymax=d}return r}const s=j(n),t=A(),[x,a,m,l]=B(t,s),y=o?o[0]:(x+m)/2,c=o?o[1]:(l+a)/2,p=n.clone(),z=p.type==="polyline"?p.paths:p.rings;for(let f=0;f<s.length;f++){const u=s[f];for(let h=0;h<u.length;h++){const v=u[h],[g,M]=v,r=(g-y)*i+y,d=(M-c)*e+c;z[f][h]=q(v,r,d,void 0)}}return"paths"in p?p.paths=z:p.rings=z,p}function O(n,i,e,o,s,t){const x=Math.sqrt((e-n)*(e-n)+(o-i)*(o-i));return Math.sqrt((s-n)*(s-n)+(t-i)*(t-i))/x}function P(n,i,e,o=!1){const s=Math.atan2(i.y-e.y,i.x-e.x)-Math.atan2(n.y-e.y,n.x-e.x),t=Math.atan2(Math.sin(s),Math.cos(s));return o?t:H(t)}function C(n,i,e,o){return q(n,n[0]+i,n[1]+e,n[2]!=null&&o!=null?n[2]+o:void 0)}function q(n,i,e,o){const s=[i,e];return n.length>2&&s.push(o??n[2]),n.length>3&&s.push(n[3]),s}export{P as a,b as i,O as m,L as r,N as s};
