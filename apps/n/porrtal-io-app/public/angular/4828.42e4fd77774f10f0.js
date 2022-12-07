"use strict";(self.webpackChunka_porrtal_io_app=self.webpackChunka_porrtal_io_app||[]).push([[4828],{9088:(ee,z,t)=>{t.d(z,{L:()=>U,b:()=>y});var s=t(28347),_=t(43703),P=t(67831),h=t(99770),L=t(47634),M=t(95285),x=t(65787),W=t(17625),A=t(63123),T=t(22355),w=t(16396);function y(I){const f=new T.kG;f.include(L.j,I);const{vertex:S,fragment:V}=f;return S.uniforms.add([new A.g("modelView",(C,m)=>(0,s.v)(v,m.camera.viewMatrix,C.origin)),new A.g("proj",(C,m)=>m.camera.projectionMatrix),new x.p("glowWidth",(C,m)=>C.glowWidth*m.camera.pixelRatio),new M.A("pixelToNDC",(C,m)=>(0,P.s)(d,2/m.camera.fullViewport[2],2/m.camera.fullViewport[3]))]),f.attributes.add(w.T.START,"vec3"),f.attributes.add(w.T.END,"vec3"),f.attributes.add(w.T.UP,"vec3"),f.attributes.add(w.T.EXTRUDE,"vec2"),f.varyings.add("uv","vec2"),f.varyings.add("vViewStart","vec3"),f.varyings.add("vViewEnd","vec3"),f.varyings.add("vViewPlane","vec4"),S.code.add(W.H`void main() {
vec3 pos = mix(start, end, extrude.x);
vec4 viewPos = modelView * vec4(pos, 1);
vec4 projPos = proj * viewPos;
vec2 ndcPos = projPos.xy / projPos.w;
vec3 viewUp = (modelView * vec4(extrude.y * up, 0)).xyz;
vec4 projPosUp = proj * vec4(viewPos.xyz + viewUp, 1);
vec2 projExtrudeDir = normalize(projPosUp.xy / projPosUp.w - ndcPos);
vec2 lxy = abs(sign(projExtrudeDir) - ndcPos);
ndcPos += length(lxy) * projExtrudeDir;
vec3 worldPlaneNormal = normalize(cross(up, normalize(end - start)));
vec3 viewPlaneNormal = (modelView * vec4(worldPlaneNormal, 0)).xyz;
vViewStart = (modelView * vec4(start, 1)).xyz;
vViewEnd = (modelView * vec4(end, 1)).xyz;
vViewPlane = vec4(viewPlaneNormal, -dot(viewPlaneNormal, vViewStart));
float xPaddingPixels = sign(dot(viewPlaneNormal, viewPos.xyz)) * (extrude.x * 2.0 - 1.0) * glowWidth;
ndcPos.x += xPaddingPixels * pixelToNDC.x;
uv = ndcPos * 0.5 + 0.5;
gl_Position = vec4(ndcPos, 0, 1);
}`),V.uniforms.add(new x.p("perScreenPixelRatio",(C,m)=>m.camera.perScreenPixelRatio)),V.code.add(W.H`float planeDistancePixels(vec4 plane, vec3 pos, vec3 start, vec3 end) {
vec3 origin = mix(start, end, 0.5);
vec3 basis = end - origin;
vec3 posAtOrigin = pos - origin;
float x = dot(normalize(basis), posAtOrigin);
float y = dot(plane.xyz, posAtOrigin);
float dx = max(abs(x) - length(basis), 0.0);
float dy = y;
float dist = length(vec2(dx, dy));
float width = fwidth(y);
float maxPixelDistance = length(pos) * perScreenPixelRatio * 2.0;
float pixelDist = dist / min(width, maxPixelDistance);
return abs(pixelDist);
}
void main() {
vec3 pos;
vec3 normal;
float depthDiscontinuityAlpha;
if (!laserlineReconstructFromDepth(pos, normal, depthDiscontinuityAlpha)) {
discard;
}
float distance = planeDistancePixels(vViewPlane, pos, vViewStart, vViewEnd);
vec4 color = laserlineProfile(distance);
float alpha = 1.0 - smoothstep(0.995, 0.999, abs(dot(normal, vViewPlane.xyz)));
gl_FragColor = laserlineOutput(color * alpha * depthDiscontinuityAlpha);
}`),f}const d=(0,h.a)(),v=(0,_.c)(),U=Object.freeze(Object.defineProperty({__proto__:null,build:y},Symbol.toStringTag,{value:"Module"}))},66501:(ee,z,t)=>{t.d(z,{L:()=>G,b:()=>C,d:()=>V});var s=t(21286),_=t(67831),P=t(99770),h=t(84161),L=t(28093),M=t(993),x=t(4794),W=t(13777),A=t(90014),T=t(97126),w=t(47634),y=t(98071),d=t(95285),v=t(97139),U=t(69960),I=t(65787),f=t(17625),S=t(22355);const V=(0,s.Vl)(6);function C(o){const b=new S.kG;b.extensions.add("GL_OES_standard_derivatives"),b.include(y.k),b.include(w.j,o);const l=b.fragment;if(o.lineVerticalPlaneEnabled||o.heightManifoldEnabled)if(l.uniforms.add(new I.p("maxPixelDistance",(a,u)=>o.heightManifoldEnabled?2*u.camera.computeScreenPixelSizeAt(a.heightManifoldTarget):2*u.camera.computeScreenPixelSizeAt(a.lineVerticalPlaneSegment.origin))),l.code.add(f.H`float planeDistancePixels(vec4 plane, vec3 pos) {
float dist = dot(plane.xyz, pos) + plane.w;
float width = fwidth(dist);
dist /= min(width, maxPixelDistance);
return abs(dist);
}`),o.spherical){const a=(E,O,ie)=>(0,h.m)(E,O.heightManifoldTarget,ie.camera.viewMatrix),u=(E,O)=>(0,h.m)(E,[0,0,0],O.camera.viewMatrix);l.uniforms.add([new U.N("heightManifoldOrigin",(E,O)=>(a(i,E,O),u(p,O),(0,h.b)(p,p,i),(0,h.n)(n,p),n[3]=(0,h.l)(p),n)),new v.J("globalOrigin",(E,O)=>u(i,O)),new I.p("cosSphericalAngleThreshold",(E,O)=>1-Math.max(2,(0,h.i)(O.camera.eye,E.heightManifoldTarget)*O.camera.perRenderPixelRatio)/(0,h.l)(E.heightManifoldTarget))]),l.code.add(f.H`float globeDistancePixels(float posInGlobalOriginLength) {
float dist = abs(posInGlobalOriginLength - heightManifoldOrigin.w);
float width = fwidth(dist);
dist /= min(width, maxPixelDistance);
return abs(dist);
}
float heightManifoldDistancePixels(vec4 heightPlane, vec3 pos) {
vec3 posInGlobalOriginNorm = normalize(globalOrigin - pos);
float cosAngle = dot(posInGlobalOriginNorm, heightManifoldOrigin.xyz);
vec3 posInGlobalOrigin = globalOrigin - pos;
float posInGlobalOriginLength = length(posInGlobalOrigin);
float sphericalDistance = globeDistancePixels(posInGlobalOriginLength);
float planarDistance = planeDistancePixels(heightPlane, pos);
return cosAngle < cosSphericalAngleThreshold ? sphericalDistance : planarDistance;
}`)}else l.code.add(f.H`float heightManifoldDistancePixels(vec4 heightPlane, vec3 pos) {
return planeDistancePixels(heightPlane, pos);
}`);if(o.pointDistanceEnabled&&(l.uniforms.add(new I.p("maxPixelDistance",(a,u)=>2*u.camera.computeScreenPixelSizeAt(a.pointDistanceTarget))),l.code.add(f.H`float sphereDistancePixels(vec4 sphere, vec3 pos) {
float dist = distance(sphere.xyz, pos) - sphere.w;
float width = fwidth(dist);
dist /= min(width, maxPixelDistance);
return abs(dist);
}`)),o.intersectsLineEnabled&&(l.uniforms.add(new I.p("perScreenPixelRatio",(a,u)=>u.camera.perScreenPixelRatio)),l.code.add(f.H`float lineDistancePixels(vec3 start, vec3 dir, float radius, vec3 pos) {
float dist = length(cross(dir, pos - start)) / (length(pos) * perScreenPixelRatio);
return abs(dist) - radius;
}`)),(o.lineVerticalPlaneEnabled||o.intersectsLineEnabled)&&l.code.add(f.H`bool pointIsWithinLine(vec3 pos, vec3 start, vec3 end) {
vec3 dir = end - start;
float t2 = dot(dir, pos - start);
float l2 = dot(dir, dir);
return t2 >= 0.0 && t2 <= l2;
}`),l.code.add(f.H`void main() {
vec3 pos;
vec3 normal;
float depthDiscontinuityAlpha;
if (!laserlineReconstructFromDepth(pos, normal, depthDiscontinuityAlpha)) {
discard;
}
vec4 color = vec4(0, 0, 0, 0);`),o.heightManifoldEnabled){l.uniforms.add([new d.A("angleCutoff",u=>m(u)),new U.N("heightPlane",(u,E)=>F(u.heightManifoldTarget,u.renderCoordsHelper.worldUpAtPosition(u.heightManifoldTarget,i),E.camera.viewMatrix))]);const a=o.spherical?f.H`normalize(globalOrigin - pos)`:f.H`heightPlane.xyz`;l.code.add(f.H`
    {
      float heightManifoldAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, abs(dot(normal, ${a})));
      vec4 heightManifoldColor = laserlineProfile(heightManifoldDistancePixels(heightPlane, pos));
      color = max(color, heightManifoldColor * heightManifoldAlpha);
    }
    `)}return o.pointDistanceEnabled&&(l.uniforms.add([new d.A("angleCutoff",a=>m(a)),new U.N("pointDistanceSphere",(a,u)=>function Z(o,b){return(0,h.m)(B,o.pointDistanceOrigin,b.camera.viewMatrix),B[3]=(0,h.i)(o.pointDistanceOrigin,o.pointDistanceTarget),B}(a,u))]),l.code.add(f.H`{
float pointDistanceSphereDistance = sphereDistancePixels(pointDistanceSphere, pos);
vec4 pointDistanceSphereColor = laserlineProfile(pointDistanceSphereDistance);
float pointDistanceSphereAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, abs(dot(normal, normalize(pos - pointDistanceSphere.xyz))));
color = max(color, pointDistanceSphereColor * pointDistanceSphereAlpha);
}`)),o.lineVerticalPlaneEnabled&&(l.uniforms.add([new d.A("angleCutoff",a=>m(a)),new U.N("lineVerticalPlane",(a,u)=>function Y(o,b){const l=(0,W.KU)(o.lineVerticalPlaneSegment,.5,i),a=o.renderCoordsHelper.worldUpAtPosition(l,r),u=(0,h.n)(p,o.lineVerticalPlaneSegment.vector),E=(0,h.f)(n,a,u);return(0,h.n)(E,E),F(o.lineVerticalPlaneSegment.origin,E,b.camera.viewMatrix)}(a,u)),new v.J("lineVerticalStart",(a,u)=>function H(o,b){const l=(0,h.c)(i,o.lineVerticalPlaneSegment.origin);return o.renderCoordsHelper.setAltitude(l,0),(0,h.m)(l,l,b.camera.viewMatrix)}(a,u)),new v.J("lineVerticalEnd",(a,u)=>function X(o,b){const l=(0,h.a)(i,o.lineVerticalPlaneSegment.origin,o.lineVerticalPlaneSegment.vector);return o.renderCoordsHelper.setAltitude(l,0),(0,h.m)(l,l,b.camera.viewMatrix)}(a,u))]),l.code.add(f.H`{
if (pointIsWithinLine(pos, lineVerticalStart, lineVerticalEnd)) {
float lineVerticalDistance = planeDistancePixels(lineVerticalPlane, pos);
vec4 lineVerticalColor = laserlineProfile(lineVerticalDistance);
float lineVerticalAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, abs(dot(normal, lineVerticalPlane.xyz)));
color = max(color, lineVerticalColor * lineVerticalAlpha);
}
}`)),o.intersectsLineEnabled&&(l.uniforms.add([new d.A("angleCutoff",a=>m(a)),new v.J("intersectsLineStart",(a,u)=>(0,h.m)(i,a.lineStartWorld,u.camera.viewMatrix)),new v.J("intersectsLineEnd",(a,u)=>(0,h.m)(i,a.lineEndWorld,u.camera.viewMatrix)),new v.J("intersectsLineDirection",(a,u)=>((0,h.c)(n,a.intersectsLineSegment.vector),n[3]=0,(0,h.n)(i,(0,M.t)(n,n,u.camera.viewMatrix)))),new I.p("intersectsLineRadius",a=>a.intersectsLineRadius)]),l.code.add(f.H`{
if (pointIsWithinLine(pos, intersectsLineStart, intersectsLineEnd)) {
float intersectsLineDistance = lineDistancePixels(intersectsLineStart, intersectsLineDirection, intersectsLineRadius, pos);
vec4 intersectsLineColor = laserlineProfile(intersectsLineDistance);
float intersectsLineAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, 1.0 - abs(dot(normal, intersectsLineDirection)));
color = max(color, intersectsLineColor * intersectsLineAlpha);
}
}`)),l.code.add(f.H`gl_FragColor = laserlineOutput(color * depthDiscontinuityAlpha);
}`),b}function m(o){return(0,_.s)(Q,Math.cos(o.angleCutoff),Math.cos(Math.max(0,o.angleCutoff-(0,s.Vl)(2))))}function F(o,b,l){return(0,h.m)(D,o,l),(0,h.c)(n,b),n[3]=0,(0,M.t)(n,n,l),(0,A.Yq)(D,n,K)}const Q=(0,P.a)(),i=(0,L.c)(),n=(0,x.c)(),r=(0,L.c)(),p=(0,L.c)(),D=(0,L.c)(),K=(0,A.Ue)(),B=(0,T.c)(),G=Object.freeze(Object.defineProperty({__proto__:null,defaultAngleCutoff:V,build:C},Symbol.toStringTag,{value:"Module"}))},23018:(ee,z,t)=>{t.d(z,{W:()=>O});var s=t(62208),_=t(84161),P=t(28093),h=t(13777),L=t(68604),M=t(85072),x=t(8834),W=t(70562),A=t(59617),T=t(4511),w=t(19625),y=t(15197),d=t(16396),v=t(651),U=t(91056),I=t(12407),f=t(9088),S=t(67969),V=t(2078);class C extends U.A{initializeProgram(e){return new I.$(e.rctx,C.shader.get().build(this.configuration),m)}initializePipeline(){return(0,V.sm)({blending:(0,V.if)(S.zi.ONE,S.zi.ONE_MINUS_SRC_ALPHA),colorWrite:V.BK})}}C.shader=new v.J(f.L,()=>t.e(9689).then(t.bind(t,79689)));const m=new Map([[d.T.START,0],[d.T.END,1],[d.T.UP,2],[d.T.EXTRUDE,3]]);var Z=t(83994);class Y{constructor(e){this._renderCoordsHelper=e,this._buffers=null,this._origin=(0,P.c)(),this._dirty=!1,this._count=0,this._vao=null}set vertices(e){const g=new Float64Array(3*e.length);let c=0;for(const k of e)g[c++]=k[0],g[c++]=k[1],g[c++]=k[2];this.buffers=[g]}set buffers(e){if(this._buffers=e,this._buffers.length>0){const g=this._buffers[0],c=3*Math.floor(g.length/3/2);(0,_.s)(this._origin,g[c+0],g[c+1],g[c+2])}else(0,_.s)(this._origin,0,0,0);this._dirty=!0}get origin(){return this._origin}draw(e){const g=this._ensureVAO(e);(0,s.pC)(g)&&(e.bindVAO(g),e.drawArrays(S.MX.TRIANGLES,0,this._count))}dispose(){(0,s.pC)(this._vao)&&this._vao.dispose()}_ensureVAO(e){return(0,s.Wi)(this._buffers)?null:((0,s.Wi)(this._vao)&&(this._vao=this._createVAO(e,this._buffers)),this._ensureVertexData(this._vao,this._buffers),this._vao)}_createVAO(e,g){const c=this._createDataBuffer(g);return this._dirty=!1,new y.U(e,m,{data:(0,T.K)(F)},{data:Z.f.createVertex(e,S.l1.STATIC_DRAW,c)})}_ensureVertexData(e,g){if(!this._dirty)return;const c=this._createDataBuffer(g);e.vertexBuffers.data.setData(c),this._dirty=!1}_numberOfRenderVertices(e){return 2*(e.length/3-1)*3}_createDataBuffer(e){const g=e.reduce((N,j)=>N+this._numberOfRenderVertices(j),0);this._count=g;const c=F.createBuffer(g),k=this._origin;let se=0,ne=0;for(const N of e){for(let j=0;j<N.length;j+=3){const te=(0,_.s)(X,N[j+0],N[j+1],N[j+2]);0===j?ne=this._renderCoordsHelper.getAltitude(te):this._renderCoordsHelper.setAltitude(te,ne);const $=this._renderCoordsHelper.worldUpAtPosition(te,H),R=se+2*j,re=(0,_.b)(X,te,k);if(j<N.length-3){c.up.setVec(R,$),c.up.setVec(R+3,$),c.up.setVec(R+5,$);for(let J=0;J<6;J++)c.start.setVec(R+J,re);c.extrude.setValues(R+0,0,-1),c.extrude.setValues(R+1,1,-1),c.extrude.setValues(R+2,1,1),c.extrude.setValues(R+3,0,-1),c.extrude.setValues(R+4,1,1),c.extrude.setValues(R+5,0,1)}if(j>0){c.up.setVec(R-2,$),c.up.setVec(R-4,$),c.up.setVec(R-5,$);for(let J=-6;J<0;J++)c.end.setVec(R+J,re)}}se+=this._numberOfRenderVertices(N)}return c.buffer}}const H=(0,P.c)(),X=(0,P.c)(),F=(0,w.U$)().vec3f(d.T.START).vec3f(d.T.END).vec3f(d.T.UP).vec2f(d.T.EXTRUDE);var Q=t(19597),i=t(5894),n=t(57623),r=t(17626),p=t(87601);class D extends p.m{constructor(){super(...arguments),this.contrastControlEnabled=!1}}(0,r._)([(0,p.o)()],D.prototype,"contrastControlEnabled",void 0);var K=t(21286),B=t(17625),G=t(39114),o=t(66501);class b extends B.K{constructor(){super(...arguments),this.innerColor=(0,P.f)(1,1,1),this.innerWidth=1,this.glowColor=(0,P.f)(1,.5,0),this.glowWidth=8,this.glowFalloff=8,this.globalAlpha=.75,this.globalAlphaContrastBoost=2,this.angleCutoff=(0,K.Vl)(6),this.pointDistanceOrigin=(0,P.c)(),this.pointDistanceTarget=(0,P.c)(),this.lineVerticalPlaneSegment=(0,h.Ue)(),this.intersectsLineSegment=(0,h.Ue)(),this.intersectsLineRadius=3,this.heightManifoldTarget=(0,P.c)(),this.lineStartWorld=(0,P.c)(),this.lineEndWorld=(0,P.c)()}}class l extends U.A{initializeProgram(e){return new I.$(e.rctx,l.shader.get().build(this.configuration),G.i)}initializePipeline(){return(0,V.sm)({blending:(0,V.if)(S.zi.ONE,S.zi.ONE_MINUS_SRC_ALPHA),colorWrite:V.BK})}}l.shader=new v.J(o.L,()=>t.e(7794).then(t.bind(t,17794)));class a extends D{constructor(){super(...arguments),this.heightManifoldEnabled=!1,this.pointDistanceEnabled=!1,this.lineVerticalPlaneEnabled=!1,this.intersectsLineEnabled=!1,this.spherical=!1}}(0,r._)([(0,p.o)()],a.prototype,"heightManifoldEnabled",void 0),(0,r._)([(0,p.o)()],a.prototype,"pointDistanceEnabled",void 0),(0,r._)([(0,p.o)()],a.prototype,"lineVerticalPlaneEnabled",void 0),(0,r._)([(0,p.o)()],a.prototype,"intersectsLineEnabled",void 0),(0,r._)([(0,p.o)()],a.prototype,"spherical",void 0);class u{constructor(e,g={contrastControlEnabled:!1}){this._config=g,this._technique=null,this._heightManifoldEnabled=!1,this._pointDistanceEnabled=!1,this._lineVerticalPlaneEnabled=!1,this._intersectsLineEnabled=!1,this._intersectsLineInfinite=!1,this._viewingMode=A.JY.Local,this._pathVerticalPlaneEnabled=!1,this._pathVerticalPlaneData=null,this._pathTechnique=null,this.canRender=!0,this._passParameters=(0,n.Uf)(e,new b)}get renderSlots(){return[this._config.contrastControlEnabled?i.r.LASERLINES_CONTRAST_CONTROL:i.r.LASERLINES]}get needsLinearDepth(){return!0}get heightManifoldEnabled(){return this._heightManifoldEnabled}set heightManifoldEnabled(e){this._heightManifoldEnabled!==e&&(this._heightManifoldEnabled=e,this._requestRender())}get heightManifoldTarget(){return this._passParameters.heightManifoldTarget}set heightManifoldTarget(e){(0,_.c)(this._passParameters.heightManifoldTarget,e),this._requestRender()}get pointDistanceEnabled(){return this._pointDistanceEnabled}set pointDistanceEnabled(e){e!==this._pointDistanceEnabled&&(this._pointDistanceEnabled=e,this._requestRender())}get pointDistanceTarget(){return this._passParameters.pointDistanceTarget}set pointDistanceTarget(e){(0,_.c)(this._passParameters.pointDistanceTarget,e),this._requestRender()}get pointDistanceOrigin(){return this._passParameters.pointDistanceOrigin}set pointDistanceOrigin(e){(0,_.c)(this._passParameters.pointDistanceOrigin,e),this._requestRender()}get lineVerticalPlaneEnabled(){return this._lineVerticalPlaneEnabled}set lineVerticalPlaneEnabled(e){e!==this._lineVerticalPlaneEnabled&&(this._lineVerticalPlaneEnabled=e,this._requestRender())}get lineVerticalPlaneSegment(){return this._passParameters.lineVerticalPlaneSegment}set lineVerticalPlaneSegment(e){(0,h.JG)(e,this._passParameters.lineVerticalPlaneSegment),this._requestRender()}get intersectsLineEnabled(){return this._intersectsLineEnabled}set intersectsLineEnabled(e){e!==this._intersectsLineEnabled&&(this._intersectsLineEnabled=e,this._requestRender())}get intersectsLineSegment(){return this._passParameters.intersectsLineSegment}set intersectsLineSegment(e){(0,h.JG)(e,this._passParameters.intersectsLineSegment),this._requestRender()}get intersectsLineRadius(){return this._passParameters.intersectsLineRadius}set intersectsLineRadius(e){e!==this._passParameters.intersectsLineRadius&&(this._passParameters.intersectsLineRadius=e,this._requestRender())}get intersectsLineInfinite(){return this._intersectsLineInfinite}set intersectsLineInfinite(e){e!==this._intersectsLineInfinite&&(this._intersectsLineInfinite=e,this._requestRender())}get viewingMode(){return this._viewingMode}set viewingMode(e){e!==this._viewingMode&&(this._viewingMode=e,this._requestRender())}get pathVerticalPlaneEnabled(){return this._pathVerticalPlaneEnabled}set pathVerticalPlaneEnabled(e){e!==this._pathVerticalPlaneEnabled&&(this._pathVerticalPlaneEnabled=e,(0,s.pC)(this._pathVerticalPlaneData)&&this._requestRender())}set pathVerticalPlaneVertices(e){(0,s.Wi)(this._pathVerticalPlaneData)&&(this._pathVerticalPlaneData=new Y(this._passParameters.renderCoordsHelper)),this._pathVerticalPlaneData.vertices=e,this.pathVerticalPlaneEnabled&&this._requestRender()}set pathVerticalPlaneBuffers(e){(0,s.Wi)(this._pathVerticalPlaneData)&&(this._pathVerticalPlaneData=new Y(this._passParameters.renderCoordsHelper)),this._pathVerticalPlaneData.buffers=e,this.pathVerticalPlaneEnabled&&this._requestRender()}setParameters(e){(0,n.LO)(this._passParameters,e)&&this._requestRender()}initializeRenderContext(e){this._context=e,this._quadVAO=(0,Q.ow)(e.renderContext.rctx),this._techniqueRepository=e.shaderTechniqueRepository,this._techniqueConfig=new a;const c=new D;c.contrastControlEnabled=this._config.contrastControlEnabled,this._pathTechnique=this._techniqueRepository.acquire(C,c)}uninitializeRenderContext(){this._quadVAO=(0,s.M2)(this._quadVAO),this._technique=(0,s.RY)(this._technique),this._pathVerticalPlaneData=(0,s.M2)(this._pathVerticalPlaneData),this._pathTechnique=(0,s.RY)(this._pathTechnique)}prepareTechnique(){return this.heightManifoldEnabled||this.pointDistanceEnabled||this.lineVerticalPlaneSegment||this.intersectsLineEnabled?(this._techniqueConfig.heightManifoldEnabled=this.heightManifoldEnabled,this._techniqueConfig.lineVerticalPlaneEnabled=this.lineVerticalPlaneEnabled,this._techniqueConfig.pointDistanceEnabled=this.pointDistanceEnabled,this._techniqueConfig.intersectsLineEnabled=this.intersectsLineEnabled,this._techniqueConfig.contrastControlEnabled=this._config.contrastControlEnabled,this._techniqueConfig.spherical=this._viewingMode===A.JY.Global,this._technique=this._techniqueRepository.releaseAndAcquire(l,this._techniqueConfig,this._technique),this._technique):this._pathTechnique}render(e,g){(this.heightManifoldEnabled||this.pointDistanceEnabled||this.lineVerticalPlaneSegment||this.intersectsLineEnabled)&&this._renderUnified(e,g),this.pathVerticalPlaneEnabled&&this._renderPath(e)}_renderUnified(e,g){const c=e.rctx;this._updatePassParameters(e),c.bindTechnique(g,this._passParameters,e.bindParameters),c.bindVAO(this._quadVAO),c.drawArrays(S.MX.TRIANGLE_STRIP,0,4)}_renderPath(e){(0,s.Wi)(this._pathVerticalPlaneData)||(0,s.Wi)(this._pathTechnique)||(e.rctx.bindTechnique(this._pathTechnique,{...this._passParameters,origin:this._pathVerticalPlaneData.origin},e.bindParameters),this._pathVerticalPlaneData.draw(e.rctx))}_updatePassParameters(e){if(!this._intersectsLineEnabled)return;const g=e.bindParameters.camera;if(this._intersectsLineInfinite){if((0,M.iL)((0,W.re)(this._passParameters.intersectsLineSegment.origin,this._passParameters.intersectsLineSegment.vector),E),E.c0=-Number.MAX_VALUE,!(0,x.zq)(g.frustum,E))return;(0,M.Ws)(E,this._passParameters.lineStartWorld),(0,M.S$)(E,this._passParameters.lineEndWorld)}else(0,_.c)(this._passParameters.lineStartWorld,this._passParameters.intersectsLineSegment.origin),(0,_.a)(this._passParameters.lineEndWorld,this._passParameters.intersectsLineSegment.origin,this._passParameters.intersectsLineSegment.vector)}_requestRender(){this._context&&this._context.requestRender()}}const E=(0,M.Ue)();class O extends L.l{constructor(e){super(e.view),this._angleCutoff=o.d,this._style={},this._heightManifoldTarget=(0,P.c)(),this._heightManifoldEnabled=!1,this._intersectsLine=(0,h.Ue)(),this._intersectsLineEnabled=!1,this._intersectsLineInfinite=!1,this._lineVerticalPlaneSegment=null,this._pathVerticalPlaneBuffers=null,this._pointDistanceLine=null,this.applyProps(e)}get testData(){return this._renderer}createResources(){this._ensureRenderer()}destroyResources(){this._disposeRenderer()}updateVisibility(){this._syncRenderer(),this._syncHeightManifold(),this._syncIntersectsLine(),this._syncPathVerticalPlane(),this._syncLineVerticalPlane(),this._syncPointDistance()}get angleCutoff(){return this._angleCutoff}set angleCutoff(e){this._angleCutoff!==e&&(this._angleCutoff=e,this._syncAngleCutoff())}get style(){return this._style}set style(e){this._style=e,this._syncStyle()}get heightManifoldTarget(){return this._heightManifoldEnabled?this._heightManifoldTarget:null}set heightManifoldTarget(e){(0,s.pC)(e)?((0,_.c)(this._heightManifoldTarget,e),this._heightManifoldEnabled=!0):this._heightManifoldEnabled=!1,this._syncRenderer(),this._syncHeightManifold()}set intersectsWorldUpAtLocation(e){if((0,s.Wi)(e))return void(this.intersectsLine=null);const g=this.view.renderCoordsHelper.worldUpAtPosition(e,ie);this.intersectsLine=(0,h.al)(e,g),this.intersectsLineInfinite=!0}get intersectsLine(){return this._intersectsLineEnabled?this._intersectsLine:null}set intersectsLine(e){(0,s.pC)(e)?((0,h.JG)(e,this._intersectsLine),this._intersectsLineEnabled=!0):this._intersectsLineEnabled=!1,this._syncIntersectsLine(),this._syncRenderer()}get intersectsLineInfinite(){return this._intersectsLineInfinite}set intersectsLineInfinite(e){this._intersectsLineInfinite=e,this._syncIntersectsLineInfinite()}get lineVerticalPlaneSegment(){return this._lineVerticalPlaneSegment}set lineVerticalPlaneSegment(e){this._lineVerticalPlaneSegment=(0,s.pC)(e)?(0,h.JG)(e):null,this._syncLineVerticalPlane(),this._syncRenderer()}get pathVerticalPlane(){return this._pathVerticalPlaneBuffers}set pathVerticalPlane(e){this._pathVerticalPlaneBuffers=e,this._syncPathVerticalPlane(),this._syncLineVerticalPlane(),this._syncPointDistance(),this._syncRenderer()}get pointDistanceLine(){return this._pointDistanceLine}set pointDistanceLine(e){this._pointDistanceLine=(0,s.pC)(e)?{origin:(0,P.a)(e.origin),target:(0,P.a)(e.target)}:null,this._syncPointDistance(),this._syncRenderer()}_syncRenderer(){this.attached&&this.visible&&(this._intersectsLineEnabled||this._heightManifoldEnabled||(0,s.pC)(this._pointDistanceLine)||(0,s.pC)(this._pathVerticalPlaneBuffers))?this._ensureRenderer():this._disposeRenderer()}_ensureRenderer(){(0,s.pC)(this._renderer)||(this._renderer=new u({renderCoordsHelper:this.view.renderCoordsHelper},{contrastControlEnabled:!0}),this._renderer.viewingMode=this.view.state.viewingMode,this._syncStyle(),this._syncHeightManifold(),this._syncIntersectsLine(),this._syncIntersectsLineInfinite(),this._syncPathVerticalPlane(),this._syncLineVerticalPlane(),this._syncPointDistance(),this._syncAngleCutoff(),this.view._stage&&this.view._stage.addRenderPlugin(this._renderer.renderSlots,this._renderer))}_syncStyle(){(0,s.Wi)(this._renderer)||(this._renderer.setParameters(this._style),null!=this._style.intersectsLineRadius&&(this._renderer.intersectsLineRadius=this._style.intersectsLineRadius))}_syncAngleCutoff(){(0,s.Wi)(this._renderer)||this._renderer.setParameters({angleCutoff:this._angleCutoff})}_syncHeightManifold(){(0,s.Wi)(this._renderer)||(this._renderer.heightManifoldEnabled=this._heightManifoldEnabled&&this.visible,this._heightManifoldEnabled&&(this._renderer.heightManifoldTarget=this._heightManifoldTarget))}_syncIntersectsLine(){(0,s.Wi)(this._renderer)||(this._renderer.intersectsLineEnabled=this._intersectsLineEnabled&&this.visible,this._intersectsLineEnabled&&(this._renderer.intersectsLineSegment=this._intersectsLine))}_syncIntersectsLineInfinite(){(0,s.Wi)(this._renderer)||(this._renderer.intersectsLineInfinite=this._intersectsLineInfinite)}_syncPathVerticalPlane(){(0,s.Wi)(this._renderer)||(this._renderer.pathVerticalPlaneEnabled=(0,s.pC)(this._pathVerticalPlaneBuffers)&&this.visible,(0,s.pC)(this._pathVerticalPlaneBuffers)&&(this._renderer.pathVerticalPlaneBuffers=this._pathVerticalPlaneBuffers))}_syncLineVerticalPlane(){(0,s.Wi)(this._renderer)||(this._renderer.lineVerticalPlaneEnabled=(0,s.pC)(this._lineVerticalPlaneSegment)&&this.visible,(0,s.pC)(this._lineVerticalPlaneSegment)&&(this._renderer.lineVerticalPlaneSegment=this._lineVerticalPlaneSegment))}_syncPointDistance(){(0,s.Wi)(this._renderer)||(this._renderer.pointDistanceEnabled=(0,s.pC)(this._pointDistanceLine)&&this.visible,(0,s.pC)(this._pointDistanceLine)&&(this._renderer.pointDistanceOrigin=this._pointDistanceLine.origin,this._renderer.pointDistanceTarget=this._pointDistanceLine.target))}_disposeRenderer(){(0,s.pC)(this._renderer)&&this.view._stage&&(this.view._stage.removeRenderPlugin(this._renderer),this._renderer=null)}}const ie=(0,P.c)()},21232:(ee,z,t)=>{t.d(z,{L:()=>Y});var s=t(21286),_=t(62208),P=t(84161),h=t(28093),L=t(993),M=t(4794),x=t(55915),W=t(5548),A=t(26242),T=t(32917),w=t(42743),y=t(24425),d=t(96867),v=t(81695),U=t(34103);class I{constructor(i){this._resourceFactory=i,this._resources=null,this._visible=!0,this._attached=!1}destroy(){this._destroyResources()}get object(){return(0,_.pC)(this._resources)?this._resources.object:null}get resources(){return(0,_.pC)(this._resources)?this._resources.external:null}get visible(){return this._visible}set visible(i){i!==this._visible&&(this._visible=i,this._syncVisible())}get attached(){return this._attached}set attached(i){i!==this._attached&&(this._attached=i,this._createOrDestroyResources())}recreate(){this.attached&&this._createResources()}recreateGeometry(){if(!this._resourceFactory.recreateGeometry)return void this.recreate();const i=this._resourceFactory.view._stage;if((0,_.Wi)(this._resources)||!i)return;const n=this._resources.object;this._resources.external.forEach(p=>{p.type===y.U.Geometry&&i.remove(p)}),n.removeAllGeometries();const r=this._resourceFactory.recreateGeometry(this._resources.external,n,this._resources.layer);i.addMany(r)}_createOrDestroyResources(){this._attached?this._resources||this._createResources():this._destroyResources()}_createResources(){this._destroyResources();const i=this._resourceFactory,n=i.view,r=n._stage;if(!r)return;const p=new U.F({isPickable:!1,updatePolicy:w.jq.SYNC});r.add(p);const D=new d.T({castShadow:!1}),K=i.createResources(D,p);K.forEach(G=>{r.add(G),G instanceof v.x&&r.loadImmediate(G)}),r.add(D),p.add(D);const B=i.cameraChanged?(0,T.YP)(()=>n.state.camera,G=>i.cameraChanged(G),T.nn):null;this._resources={layer:p,object:D,external:K,cameraHandle:B},this._syncVisible()}_destroyResources(){if((0,_.Wi)(this._resources))return;const i=this._resourceFactory.view._stage;i?.remove(this._resources.object),i?.remove(this._resources.layer),this._resources.external.forEach(n=>{i?.remove(n),"dispose"in n&&n.dispose()}),this._resources.object.dispose(),this._resources.cameraHandle&&this._resources.cameraHandle.remove(),this._resources=null}_syncVisible(){(0,_.Wi)(this._resources)||this._resources.object.setVisible(this._visible)}}var f=t(81468),S=t(79112),V=t(8782),C=t(57521),m=t(16396),Z=t(80805);class Y{constructor(i){this.view=null,this._geometry=null,this._size=3,this._color=(0,M.f)(1,0,1,1),this._pixelSnappingEnabled=!0,this._primitive="square",this._outlineSize=1,this._outlineColor=(0,M.f)(1,1,1,1),this._elevationInfo=null,this._resources=new I({view:i.view,createResources:r=>this._createResources(r),recreateGeometry:(r,p)=>(r.geometry=this._recreateGeometry(p,r.material),(0,_.pC)(r.geometry)?[r.geometry]:[])});let n=!0;for(const r in i)r in this?"attached"===r?n=i[r]:this[r]=i[r]:console.error("Cannot set unknown property",r);this.attached=n}destroy(){this._resources.destroy()}get visible(){return this._resources.visible}set visible(i){this._resources.visible=i}get attached(){return this._resources.attached}set attached(i){this._resources.attached=i}get geometry(){return this._geometry}set geometry(i){this._geometry=i,this._resources.recreateGeometry()}get size(){return this._size}set size(i){if(i!==this._size){const n=this._preferredTextureSize;this._size=i,n<this._preferredTextureSize?(0,_.pC)(this._resources)&&this._resources.recreate():this._updateSizeAttribute()}}get color(){return this._color}set color(i){(0,L.g)(i,this._color)||((0,L.c)(this._color,i),this._updateMaterial())}get pixelSnappingEnabled(){return this._pixelSnappingEnabled}set pixelSnappingEnabled(i){this._pixelSnappingEnabled!==i&&(this._pixelSnappingEnabled=i,this._updateMaterial())}get primitive(){return this._primitive}set primitive(i){this._primitive!==i&&(this._primitive=i,(0,_.pC)(this._resources)&&this._resources.recreate())}get outlineSize(){return this._outlineSize}set outlineSize(i){i!==this._outlineSize&&(this._outlineSize=i,this._updateMaterial())}get outlineColor(){return this._outlineColor}set outlineColor(i){(0,L.g)(i,this._outlineColor)||((0,L.c)(this._outlineColor,i),this._updateMaterial())}get elevationInfo(){return this._elevationInfo}set elevationInfo(i){this._elevationInfo=i,this._resources&&this._resources.recreateGeometry()}_updateMaterial(){const i=this._resources.resources;(0,_.Wi)(i)||i.material.setParameters(this._materialParameters(i.texture.id))}_updateSizeAttribute(){const i=this._resources.resources,n=this._resources.object;if((0,_.Wi)(i)||(0,_.Wi)(n))return;const r=i.geometry;if((0,_.Wi)(r))return;const p=r.getMutableAttribute(m.T.SIZE).data,D=this._geometrySize;p[0]=D,p[1]=D,n.geometryVertexAttrsUpdated(n.geometryRecords[0])}_materialParameters(i){return{color:this._color,textureIsSignedDistanceField:!0,distanceFieldBoundingBox:X,occlusionTest:!1,outlineColor:this._outlineColor,outlineSize:this._outlineSize,textureId:i,polygonOffset:!1,shaderPolygonOffset:0,drawInSecondSlot:!0,depthEnabled:!1,pixelSnappingEnabled:this.pixelSnappingEnabled}}get _geometrySize(){return this._size/H}_recreateGeometry(i,n){const r=this._createRenderGeometry();return(0,_.pC)(r)&&i.addGeometry(r,n),r}_createResources(i){const n=(0,V.cU)(this._primitive,this._preferredTextureSize),r=new Z.A(this._materialParameters(n.id)),p=this._recreateGeometry(i,r);return{material:r,texture:n,geometry:p,forEach(D){D(n),D(r),(0,_.pC)(this.geometry)&&D(this.geometry)}}}get _preferredTextureSize(){return(0,s.uZ)((0,s.Sf)(2*this._geometrySize),16,128)}calculateMapBounds(i){if((0,_.Wi)(this._resources.resources)||(0,_.Wi)(this._resources.resources.geometry))return!1;const n=this._resources.resources.geometry.vertexAttributes.get(m.T.POSITION);return(0,x.SH)(n.data,this.view.renderCoordsHelper.spatialReference,F,this.view.spatialReference),(0,W.G1)(i,F),!0}_createRenderGeometry(){const i=this.geometry;if((0,_.Wi)(i))return null;const{renderCoordsHelper:n,elevationProvider:r}=this.view,p=(0,f.w7)(i,r,S.o.fromElevationInfo(this.elevationInfo),n),D=(0,P.s)(A.WM.get(),i.x,i.y,p),K=A.WM.get();(0,x.SH)(D,i.spatialReference,K,n.spatialReference);const B=this._geometrySize;return(0,C.dV)(null,K,null,[B,B],[0,0,0,1])}}const H=V.Ns,X=[H/2,H/2,1-H/2,1-H/2],F=(0,h.c)()},47634:(ee,z,t)=>{t.d(z,{j:()=>A});var s=t(62208),_=t(47923),P=t(39832),h=t(95285),L=t(97139),M=t(65787),x=t(17625),W=t(35387);function A(T,w){T.extensions.add("GL_OES_standard_derivatives");const y=T.fragment;y.include(_.S),T.include(P.G),y.uniforms.add([new M.p("globalAlpha",d=>d.globalAlpha),new L.J("glowColor",d=>d.glowColor),new M.p("glowWidth",(d,v)=>d.glowWidth*v.camera.pixelRatio),new M.p("glowFalloff",d=>d.glowFalloff),new L.J("innerColor",d=>d.innerColor),new M.p("innerWidth",(d,v)=>d.innerWidth*v.camera.pixelRatio),new W.A("depthMap",(d,v)=>v.linearDepthTexture),new h.A("nearFar",(d,v)=>v.camera.nearFar),new W.A("frameColor",(d,v)=>v.mainColorTexture)]),y.code.add(x.H`vec4 blendPremultiplied(vec4 source, vec4 dest) {
float oneMinusSourceAlpha = 1.0 - source.a;
return vec4(
source.rgb + dest.rgb * oneMinusSourceAlpha,
source.a + dest.a * oneMinusSourceAlpha
);
}`),y.code.add(x.H`vec4 premultipliedColor(vec3 rgb, float alpha) {
return vec4(rgb * alpha, alpha);
}`),y.code.add(x.H`vec4 laserlineProfile(float dist) {
if (dist > glowWidth) {
return vec4(0.0);
}
float innerAlpha = (1.0 - smoothstep(0.0, innerWidth, dist));
float glowAlpha = pow(max(0.0, 1.0 - dist / glowWidth), glowFalloff);
return blendPremultiplied(
premultipliedColor(innerColor, innerAlpha),
premultipliedColor(glowColor, glowAlpha)
);
}`),y.code.add(x.H`bool laserlineReconstructFromDepth(out vec3 pos, out vec3 normal, out float depthDiscontinuityAlpha) {
float depth = linearDepthFromTexture(depthMap, uv, nearFar);
if (-depth == nearFar[0]) {
return false;
}
pos = reconstructPosition(gl_FragCoord.xy, depth);
normal = normalize(cross(dFdx(pos), dFdy(pos)));
float ddepth = fwidth(depth);
depthDiscontinuityAlpha = 1.0 - smoothstep(0.0, 0.01, -ddepth / depth);
return true;
}`),w.contrastControlEnabled?(y.uniforms.add(new M.p("globalAlphaContrastBoost",d=>(0,s.pC)(d.globalAlphaContrastBoost)?d.globalAlphaContrastBoost:1)),y.code.add(x.H`float rgbToLuminance(vec3 color) {
return dot(vec3(0.2126, 0.7152, 0.0722), color);
}
vec4 laserlineOutput(vec4 color) {
float backgroundLuminance = rgbToLuminance(texture2D(frameColor, uv).rgb);
float alpha = clamp(globalAlpha * max(backgroundLuminance * globalAlphaContrastBoost, 1.0), 0.0, 1.0);
return color * alpha;
}`)):y.code.add(x.H`vec4 laserlineOutput(vec4 color) {
return color * globalAlpha;
}`)}}}]);