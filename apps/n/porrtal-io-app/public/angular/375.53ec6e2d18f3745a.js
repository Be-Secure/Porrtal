"use strict";(self.webpackChunka_porrtal_io_app=self.webpackChunka_porrtal_io_app||[]).push([[375],{17926:($,U,a)=>{var l,p,o;a.d(U,{B:()=>p,P:()=>l}),(o=l||(l={}))[o.None=0]="None",o[o.Int16=1]="Int16",o[o.Int32=2]="Int32",function(o){o[o.Replace=0]="Replace",o[o.Outside=1]="Outside",o[o.Inside=2]="Inside",o[o.Finished=3]="Finished"}(p||(p={}))},30375:($,U,a)=>{a.r(U),a.d(U,{destroyContext:()=>H,dracoDecompressPointCloudData:()=>g,filterObbsForModifications:()=>R,filterObbsForModificationsSync:()=>W,initialize:()=>F,interpretObbModificationResults:()=>oe,process:()=>D,setLegacySchema:()=>k,setModifications:()=>B,setModificationsSync:()=>z,test:()=>re});var l=a(15861),p=a(62208),o=a(55713),v=a(17926),I=a(54346);function x(e){return(0,I.V)(`esri/libs/i3s/${e}`)}let b;var C=a(52565);function D(e){return t.apply(this,arguments)}function t(){return(t=(0,l.Z)(function*(e){yield F();const n=[e.geometryBuffer];return{result:G(e,n),transferList:n}})).apply(this,arguments)}function g(e){return h.apply(this,arguments)}function h(){return(h=(0,l.Z)(function*(e){yield F();const n=[e.geometryBuffer],{geometryBuffer:i}=e,d=i.byteLength,f=s._malloc(d),P=new Uint8Array(s.HEAPU8.buffer,f,d);P.set(new Uint8Array(i));const u=s.dracoDecompressPointCloudData(f,P.byteLength);if(s._free(f),u.error.length>0)throw`i3s.wasm: ${u.error}`;const N=u.featureIds?.length>0?(0,o.tP)(u.featureIds):null,T=(0,o.tP)(u.positions);return N&&n.push(N.buffer),n.push(T.buffer),{result:{positions:T,featureIds:N},transferList:n}})).apply(this,arguments)}function R(e){return E.apply(this,arguments)}function E(){return(E=(0,l.Z)(function*(e){yield F(),W(e);const n={buffer:e.buffer};return{result:n,transferList:[n.buffer]}})).apply(this,arguments)}function B(e){return S.apply(this,arguments)}function S(){return(S=(0,l.Z)(function*(e){yield F(),z(e)})).apply(this,arguments)}function k(e){return _.apply(this,arguments)}function _(){return(_=(0,l.Z)(function*(e){yield F(),s.setLegacySchema(e.context,e.jsonSchema)})).apply(this,arguments)}function H(e){K(e)}let M,s;function z(e){const n=e.modifications,i=s._malloc(8*n.length),d=new Float64Array(s.HEAPU8.buffer,i,n.length);for(let f=0;f<n.length;++f)d[f]=n[f];s.setModifications(e.context,i,n.length,e.isGeodetic),s._free(i)}function G(e,n){if(!s)return null;const{context:i,localOrigin:d,globalTrafo:f,mbs:P,obb:u,elevationOffset:N,geometryBuffer:T,geometryDescriptor:se,indexToVertexProjector:ie,vertexToRenderProjector:ae}=e,Y=s._malloc(T.byteLength),Z=s._malloc(33*Float64Array.BYTES_PER_ELEMENT),J=new Uint8Array(s.HEAPU8.buffer,Y,T.byteLength);J.set(new Uint8Array(T));const c=new Float64Array(s.HEAPU8.buffer,Z,33);O(c,d);let m=c.byteOffset+3*c.BYTES_PER_ELEMENT,y=new Float64Array(c.buffer,m);O(y,f),m+=16*c.BYTES_PER_ELEMENT,y=new Float64Array(c.buffer,m),O(y,P),m+=4*c.BYTES_PER_ELEMENT,(0,p.pC)(u)&&(y=new Float64Array(c.buffer,m),O(y,u.center),m+=3*c.BYTES_PER_ELEMENT,y=new Float64Array(c.buffer,m),O(y,u.halfSize),m+=3*c.BYTES_PER_ELEMENT,y=new Float64Array(c.buffer,m),O(y,u.quaternion));const X=se,fe={isDraco:!1,isLegacy:!1,color:e.layouts.some(L=>L.some(w=>"color"===w.name)),normal:e.needNormals&&e.layouts.some(L=>L.some(w=>"normalCompressed"===w.name)),uv0:e.layouts.some(L=>L.some(w=>"uv0"===w.name)),uvRegion:e.layouts.some(L=>L.some(w=>"uvRegion"===w.name)),featureIndex:X.featureIndex},r=s.process(i,!!e.obb,Y,J.byteLength,X,fe,Z,N,ie,ae,e.normalReferenceFrame);if(s._free(Z),s._free(Y),r.error.length>0)throw`i3s.wasm: ${r.error}`;if(r.discarded)return null;const j=r.componentOffsets.length>0?(0,o.tP)(r.componentOffsets):null,V=r.featureIds.length>0?(0,o.tP)(r.featureIds):null,q=(0,o.tP)(r.interleavedVertedData).buffer,ee=(0,o.tP)(r.indicesType===v.P.Int16?new Uint16Array(r.indices.buffer,r.indices.byteOffset,r.indices.byteLength/2):new Uint32Array(r.indices.buffer,r.indices.byteOffset,r.indices.byteLength/4)),te=(0,o.tP)(r.positions),ne=(0,o.tP)(r.positionIndicesType===v.P.Int16?new Uint16Array(r.positionIndices.buffer,r.positionIndices.byteOffset,r.positionIndices.byteLength/2):new Uint32Array(r.positionIndices.buffer,r.positionIndices.byteOffset,r.positionIndices.byteLength/4)),ue={layout:e.layouts[0],interleavedVertexData:q,indices:ee,hasColors:r.hasColors,hasModifications:r.hasModifications,positionData:{data:te,indices:ne}};return V&&n.push(V.buffer),j&&n.push(j.buffer),n.push(q),n.push(ee.buffer),n.push(te.buffer),n.push(ne.buffer),{componentOffsets:j,featureIds:V,transformedGeometry:ue,obb:r.obb}}function oe(e){return 0===e?C.O4.Unmodified:1===e?C.O4.PotentiallyModified:2===e?C.O4.Culled:C.O4.Unknown}function W(e){const{context:n,buffer:i}=e,d=s._malloc(i.byteLength),f=i.byteLength/Float64Array.BYTES_PER_ELEMENT,P=new Float64Array(s.HEAPU8.buffer,d,f),u=new Float64Array(i);P.set(u),s.filterOBBs(n,d,f),u.set(P),s._free(d)}function K(e){s&&s.destroy(e)}function O(e,n){for(let i=0;i<n.length;++i)e[i]=n[i]}function F(){return s?Promise.resolve():(M||(M=function A(){return b||(b=new Promise(e=>a.e(5979).then(a.bind(a,85979)).then(n=>n.i).then(({default:n})=>{const i=n({locateFile:x,onRuntimeInitialized:()=>e(i)});delete i.then})).catch(e=>{throw e})),b}().then(e=>{s=e,M=null})),M)}const re={transform:G,destroy:K}},52565:($,U,a)=>{a.d(U,{$i:()=>p,FE:()=>b,Hw:()=>A,NB:()=>C,O4:()=>I,U_:()=>v,oQ:()=>D,rw:()=>o,w5:()=>x});var v,I,A,x,b,t,l=a(97126);class p{constructor(g,h){this.id=g,this.mbs=h,this.renderMbs=(0,l.f)(0,0,0,-1),this.elevationRange=null}}class o{constructor(){this.min=1/0,this.max=-1/0,this.valid=!1}}(t=v||(v={}))[t.Unmodified=0]="Unmodified",t[t.Culled=1]="Culled",t[t.NotChecked=2]="NotChecked",function(t){t[t.Unmodified=0]="Unmodified",t[t.PotentiallyModified=1]="PotentiallyModified",t[t.Culled=2]="Culled",t[t.Unknown=3]="Unknown",t[t.NotChecked=4]="NotChecked"}(I||(I={}));class C extends p{constructor(g,h,R,E,B,S,k,_,H,M){super(g,R),this.index=h,this.childCount=E,this.level=B,this.resources=S,this.version=k,this.lodMetric=_,this.maxError=H,this.numFeatures=M,this.failed=!1,this.cacheState=A.Unknown,this.vertexCount=0,this.memory=0,this.childrenLoaded=0,this.hasModifications=!1,this.imModificationImpact=I.NotChecked}}(function(t){t[t.Unknown=0]="Unknown",t[t.Uncached=1]="Uncached",t[t.Cached=2]="Cached"})(A||(A={})),function(t){t[t.None=0]="None",t[t.MaxScreenThreshold=1]="MaxScreenThreshold",t[t.ScreenSpaceRelative=2]="ScreenSpaceRelative",t[t.RemovedFeatureDiameter=3]="RemovedFeatureDiameter",t[t.DistanceRangeFromDefaultCamera=4]="DistanceRangeFromDefaultCamera"}(x||(x={})),function(t){t[t.Hole=0]="Hole",t[t.Leaf=1]="Leaf"}(b||(b={}));class D{constructor(g,h,R,E){this.nodeHasLOD=g,this.isChosen=h,this.lodLevel=R,this.version=E}}}}]);