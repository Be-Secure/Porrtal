"use strict";(self.webpackChunka_porrtal_io_app=self.webpackChunka_porrtal_io_app||[]).push([[7867],{40405:(W,D,t)=>{t.d(D,{B:()=>g});var o=t(15861),i=t(62208),s=t(22558),U=t(21726),b=t(35948),R=t(34117),x=t(31283),C=t(77712);function d(r){return m[function I(r){return r instanceof Blob?r.type:function M(r){const p=(0,U.Ml)(r);return f[p]||E}(r.url)}(r)]||O}const m={},E="text/plain",O=m[E],f={png:"image/png",jpeg:"image/jpeg",jpg:"image/jpg",bmp:"image/bmp",gif:"image/gif",json:"application/json",txt:"text/plain",xml:"application/xml",svg:"image/svg+xml",zip:"application/zip",pbf:"application/vnd.mapbox-vector-tile",gz:"application/gzip"};for(const r in f)m[f[r]]=r;var h=t(29840);function g(r){const p=(0,i.pC)(r)&&r.origins?r.origins:[void 0];return(l,c)=>{const u=function P(r,p,l){if((0,i.pC)(r)&&"resource"===r.type)return function S(r,p,l){const c=(0,R.VZ)(p,l);return{type:String,read:(u,a,v)=>{const e=(0,h.r)(u,a,v);return c.type===String?e:"function"==typeof c.type?new c.type({url:e}):void 0},write:{writer(u,a,v,e){if(!e||!e.resources)return"string"==typeof u?void(a[v]=(0,h.t)(u,e)):void(a[v]=u.write({},e));const n=function F(r){return(0,i.Wi)(r)?null:"string"==typeof r?r:r.url}(u),y=n?(0,h.t)(n,{...e,verifyItemRelativeUrls:e&&e.verifyItemRelativeUrls?{writtenUrls:e.verifyItemRelativeUrls.writtenUrls,rootPath:null}:null},h.M.NO):null,T=c.type!==String&&(!(0,s.l)(this)||e&&e.origin&&this.originIdOf(l)>(0,x.M9)(e.origin));e&&e.portalItem&&(0,i.pC)(y)&&!(0,U.YP)(y)?T?function J(r,p,l,c,u,a,v,e){const n=v.portalItem.resourceFromPath(c),y=_(l,c,v);d(y)===(0,U.Ml)(n.path)?(B(r,p,n,y,v.resources.toUpdate),u[a]=c):j(r,p,l,c,u,a,v,e)}(this,l,u,y,a,v,e,r):function A(r,p,l,c){c.resources.toKeep.push({resource:c.portalItem.resourceFromPath(r)}),p[l]=r}(y,a,v,e):e&&e.portalItem&&((0,i.Wi)(y)||(0,i.pC)((0,h.i)(y))||(0,U.jc)(y)||T)?j(this,l,u,y,a,v,e,r):a[v]=y}}}}(r,p,l);switch((0,i.pC)(r)&&r.type?r.type:"other"){case"other":return{read:!0,write:!0};case"url":{const{read:c,write:u}=h.p;return{read:c,write:u}}}}(r,l,c);for(const a of p){const v=(0,C.CJ)(l,a,c);for(const e in u)v[e]=u[e]}}}function j(r,p,l,c,u,a,v,e){const n=(0,b.D)(),y=_(l,c,v),T=(0,U.v_)((0,i.U2)(e,"prefix"),n),G=`${T}.${d(y)}`,L=v.portalItem.resourceFromPath(G);(0,U.jc)(c)&&v.resources.pendingOperations.push(function Z(r){return N.apply(this,arguments)}(c).then(K=>{L.path=`${T}.${d(K)}`,u[a]=L.itemRelativeUrl}).catch(()=>{})),B(r,p,L,y,v.resources.toAdd),u[a]=L.itemRelativeUrl}function B(r,p,l,c,u){u.push({resource:l,content:c,finish:a=>{!function V(r,p,l){"string"==typeof r[p]?r[p]=l.url:r[p].url=l.url}(r,p,a)}})}function _(r,p,l){return"string"==typeof r?{url:p}:new Blob([JSON.stringify(r.toJSON(l))],{type:"application/json"})}function N(){return(N=(0,o.Z)(function*(r){const p=(yield Promise.resolve().then(t.bind(t,84792))).default,{data:l}=yield p(r,{responseType:"blob"});return l})).apply(this,arguments)}},67867:(W,D,t)=>{t.r(D),t.d(D,{default:()=>v});var p,o=t(15861),i=t(17626),s=t(26584),U=t(72392),b=t(62208),R=t(99959),x=t(10699),C=t(32917),d=t(77712),E=(t(85931),t(8314),t(90912),t(68653)),O=t(76898),f=t(40405),h=t(44917),g=t(50085),P=t(65088),S=t(49286),j=t(6647),J=t(99555),A=t(10157),B=t(13812),_=t(35031),Z=t(84792),N=t(46160),F=t(86810),V=t(21726),r=t(10439);let l=p=class extends((0,F.eC)(N.Z.ofType(r.Z))){constructor(e){super(e),this.url=null}clone(){return new p({url:this.url,items:this.items.map(e=>e.clone())})}toJSON(e){return this.toArray().map(n=>n.toJSON(e)).filter(n=>!!n.geometry)}static fromJSON(e,n){const y=new p;for(const T of e)y.add(r.Z.fromJSON(T,n));return y}static fromUrl(e,n,y){return(0,o.Z)(function*(){const T={url:(0,V.mN)(e),origin:"service"},G=yield(0,Z.default)(e,{responseType:"json",signal:(0,b.U2)(y,"signal")}),L=n.toJSON(),K=[];for(const z of G.data)K.push(r.Z.fromJSON({...z,geometry:{...z.geometry,spatialReference:L}},T));return new p({url:e,items:K})})()}};(0,i._)([(0,d.Cb)({type:String})],l.prototype,"url",void 0),l=p=(0,i._)([(0,O.j)("esri.layers.support.SceneModifications")],l);const c=l;var u=t(29840);let a=class extends((0,A.Vt)((0,P.Y)((0,S.q)((0,j.I)((0,J.M)((0,R.R)((0,g.V)(h.Z)))))))){constructor(...e){super(...e),this._handles=new U.Z,this.geometryType="mesh",this.operationalLayerType="IntegratedMeshLayer",this.type="integrated-mesh",this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.profile="mesh-pyramids",this.modifications=null,this._modificationsSource=null,this.elevationInfo=null,this.path=null}destroy(){this._handles.destroy()}initialize(){this._handles.add((0,C.on)(()=>this.modifications,"after-changes",()=>this.modifications=this.modifications,C.Z_))}normalizeCtorArgs(e,n){return"string"==typeof e?{url:e,...n}:e}readModifications(e,n,y){this._modificationsSource={url:(0,u.f)(e,y),context:y}}load(e){var n=this;return(0,o.Z)(function*(){return n.addResolvingPromise(n._doLoad(e)),n})()}_doLoad(e){var n=this;return(0,o.Z)(function*(){const y=(0,b.U2)(e,"signal");try{yield n.loadFromPortal({supportedTypes:["Scene Service"]},e)}catch(T){(0,x.r9)(T)}if(yield n._fetchService(y),(0,b.pC)(n._modificationsSource)){const T=yield c.fromUrl(n._modificationsSource.url,n.spatialReference,e);n.setAtOrigin("modifications",T,n._modificationsSource.context.origin),n._modificationsSource=null}yield n._fetchIndexAndUpdateExtent(n.nodePages,y)})()}beforeSave(){if(!(0,b.Wi)(this._modificationsSource))return this.load().then(()=>{},()=>{})}saveAs(e,n){var y=this;return(0,o.Z)(function*(){return y._debouncedSaveOperations(A.xp.SAVE_AS,{...n,getTypeKeywords:()=>y._getTypeKeywords(),portalItemLayerType:"integrated-mesh"},e)})()}save(){var e=this;return(0,o.Z)(function*(){const n={getTypeKeywords:()=>e._getTypeKeywords(),portalItemLayerType:"integrated-mesh"};return e._debouncedSaveOperations(A.xp.SAVE,n)})()}validateLayer(e){if(e.layerType&&"IntegratedMesh"!==e.layerType)throw new s.Z("integrated-mesh-layer:layer-type-not-supported","IntegratedMeshLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new s.Z("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"});if(this.version.major>1)throw new s.Z("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"})}_getTypeKeywords(){return["IntegratedMeshLayer"]}};(0,i._)([(0,d.Cb)({type:String,readOnly:!0})],a.prototype,"geometryType",void 0),(0,i._)([(0,d.Cb)({type:["show","hide"]})],a.prototype,"listMode",void 0),(0,i._)([(0,d.Cb)({type:["IntegratedMeshLayer"]})],a.prototype,"operationalLayerType",void 0),(0,i._)([(0,d.Cb)({json:{read:!1},readOnly:!0})],a.prototype,"type",void 0),(0,i._)([(0,d.Cb)({type:_.U4,readOnly:!0})],a.prototype,"nodePages",void 0),(0,i._)([(0,d.Cb)({type:[_.QI],readOnly:!0})],a.prototype,"materialDefinitions",void 0),(0,i._)([(0,d.Cb)({type:[_.Yh],readOnly:!0})],a.prototype,"textureSetDefinitions",void 0),(0,i._)([(0,d.Cb)({type:[_.H3],readOnly:!0})],a.prototype,"geometryDefinitions",void 0),(0,i._)([(0,d.Cb)({readOnly:!0})],a.prototype,"serviceUpdateTimeStamp",void 0),(0,i._)([(0,d.Cb)({type:c}),(0,f.B)({origins:["web-scene","portal-item"],type:"resource",prefix:"modifications"})],a.prototype,"modifications",void 0),(0,i._)([(0,E.r)(["web-scene","portal-item"],"modifications")],a.prototype,"readModifications",null),(0,i._)([(0,d.Cb)(B.PV)],a.prototype,"elevationInfo",void 0),(0,i._)([(0,d.Cb)({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],a.prototype,"path",void 0),a=(0,i._)([(0,O.j)("esri.layers.IntegratedMeshLayer")],a);const v=a},35031:(W,D,t)=>{t.d(D,{H3:()=>P,QI:()=>m,U4:()=>d,Yh:()=>O});var o=t(17626),i=t(86810),s=t(77712),x=(t(85931),t(8314),t(90912),t(55342)),C=t(76898);let d=class extends i.wq{constructor(){super(...arguments),this.nodesPerPage=null,this.rootIndex=0,this.lodSelectionMetricType=null}};(0,o._)([(0,s.Cb)({type:Number})],d.prototype,"nodesPerPage",void 0),(0,o._)([(0,s.Cb)({type:Number})],d.prototype,"rootIndex",void 0),(0,o._)([(0,s.Cb)({type:String})],d.prototype,"lodSelectionMetricType",void 0),d=(0,o._)([(0,C.j)("esri.layer.support.I3SNodePageDefinition")],d);let I=class extends i.wq{constructor(){super(...arguments),this.factor=1}};(0,o._)([(0,s.Cb)({type:Number,json:{read:{source:"textureSetDefinitionId"}}})],I.prototype,"id",void 0),(0,o._)([(0,s.Cb)({type:Number})],I.prototype,"factor",void 0),I=(0,o._)([(0,C.j)("esri.layer.support.I3SMaterialTexture")],I);let M=class extends i.wq{constructor(){super(...arguments),this.baseColorFactor=[1,1,1,1],this.baseColorTexture=null,this.metallicRoughnessTexture=null,this.metallicFactor=1,this.roughnessFactor=1}};(0,o._)([(0,s.Cb)({type:[Number]})],M.prototype,"baseColorFactor",void 0),(0,o._)([(0,s.Cb)({type:I})],M.prototype,"baseColorTexture",void 0),(0,o._)([(0,s.Cb)({type:I})],M.prototype,"metallicRoughnessTexture",void 0),(0,o._)([(0,s.Cb)({type:Number})],M.prototype,"metallicFactor",void 0),(0,o._)([(0,s.Cb)({type:Number})],M.prototype,"roughnessFactor",void 0),M=(0,o._)([(0,C.j)("esri.layer.support.I3SMaterialPBRMetallicRoughness")],M);let m=class extends i.wq{constructor(){super(...arguments),this.alphaMode="opaque",this.alphaCutoff=.25,this.doubleSided=!1,this.cullFace="none",this.normalTexture=null,this.occlusionTexture=null,this.emissiveTexture=null,this.emissiveFactor=null,this.pbrMetallicRoughness=null}};(0,o._)([(0,x.J)({opaque:"opaque",mask:"mask",blend:"blend"})],m.prototype,"alphaMode",void 0),(0,o._)([(0,s.Cb)({type:Number})],m.prototype,"alphaCutoff",void 0),(0,o._)([(0,s.Cb)({type:Boolean})],m.prototype,"doubleSided",void 0),(0,o._)([(0,x.J)({none:"none",back:"back",front:"front"})],m.prototype,"cullFace",void 0),(0,o._)([(0,s.Cb)({type:I})],m.prototype,"normalTexture",void 0),(0,o._)([(0,s.Cb)({type:I})],m.prototype,"occlusionTexture",void 0),(0,o._)([(0,s.Cb)({type:I})],m.prototype,"emissiveTexture",void 0),(0,o._)([(0,s.Cb)({type:[Number]})],m.prototype,"emissiveFactor",void 0),(0,o._)([(0,s.Cb)({type:M})],m.prototype,"pbrMetallicRoughness",void 0),m=(0,o._)([(0,C.j)("esri.layer.support.I3SMaterialDefinition")],m);let E=class extends i.wq{};(0,o._)([(0,s.Cb)({type:String,json:{read:{source:["name","index"],reader:(S,j)=>S??`${j.index}`}}})],E.prototype,"name",void 0),(0,o._)([(0,x.J)({jpg:"jpg",png:"png",dds:"dds","ktx-etc2":"ktx-etc2",ktx2:"ktx2",basis:"basis"})],E.prototype,"format",void 0),E=(0,o._)([(0,C.j)("esri.layer.support.I3STextureFormat")],E);let O=class extends i.wq{constructor(){super(...arguments),this.atlas=!1}};(0,o._)([(0,s.Cb)({type:[E]})],O.prototype,"formats",void 0),(0,o._)([(0,s.Cb)({type:Boolean})],O.prototype,"atlas",void 0),O=(0,o._)([(0,C.j)("esri.layer.support.I3STextureSetDefinition")],O);let f=class extends i.wq{};(0,o._)([(0,x.J)({Float32:"Float32",UInt64:"UInt64",UInt32:"UInt32",UInt16:"UInt16",UInt8:"UInt8"})],f.prototype,"type",void 0),(0,o._)([(0,s.Cb)({type:Number})],f.prototype,"component",void 0),f=(0,o._)([(0,C.j)("esri.layer.support.I3SGeometryAttribute")],f);let h=class extends i.wq{};(0,o._)([(0,x.J)({draco:"draco"})],h.prototype,"encoding",void 0),(0,o._)([(0,s.Cb)({type:[String]})],h.prototype,"attributes",void 0),h=(0,o._)([(0,C.j)("esri.layer.support.I3SGeometryCompressedAttributes")],h);let g=class extends i.wq{constructor(){super(...arguments),this.offset=0}};(0,o._)([(0,s.Cb)({type:Number})],g.prototype,"offset",void 0),(0,o._)([(0,s.Cb)({type:f})],g.prototype,"position",void 0),(0,o._)([(0,s.Cb)({type:f})],g.prototype,"normal",void 0),(0,o._)([(0,s.Cb)({type:f})],g.prototype,"uv0",void 0),(0,o._)([(0,s.Cb)({type:f})],g.prototype,"color",void 0),(0,o._)([(0,s.Cb)({type:f})],g.prototype,"uvRegion",void 0),(0,o._)([(0,s.Cb)({type:f})],g.prototype,"featureId",void 0),(0,o._)([(0,s.Cb)({type:f})],g.prototype,"faceRange",void 0),(0,o._)([(0,s.Cb)({type:h})],g.prototype,"compressedAttributes",void 0),g=(0,o._)([(0,C.j)("esri.layer.support.I3SGeometryBuffer")],g);let P=class extends i.wq{};(0,o._)([(0,x.J)({triangle:"triangle"})],P.prototype,"topology",void 0),(0,o._)([(0,s.Cb)()],P.prototype,"geometryBuffers",void 0),P=(0,o._)([(0,C.j)("esri.layer.support.I3SGeometryDefinition")],P)},10439:(W,D,t)=>{t.d(D,{Z:()=>f});var E,o=t(17626),s=(t(29132),t(86810)),U=t(58817),b=t(14889),R=t(77712),C=(t(90912),t(76898)),d=t(99433),I=t(40405),M=t(55915),m=t(37118);let O=E=class extends s.wq{constructor(h){super(h),this.geometry=null,this.type="clip"}writeGeometry(h,g,P,S){if(S.layer&&S.layer.spatialReference&&!S.layer.spatialReference.equals(this.geometry.spatialReference)){if(!(0,M.Up)(h.spatialReference,S.layer.spatialReference))return void(S&&S.messages&&S.messages.push(new b.Z("scenemodification:unsupported","Scene modifications with incompatible spatial references are not supported",{modification:this,spatialReference:S.layer.spatialReference,context:S})));const j=new m.Z;(0,M.Wt)(h,j,S.layer.spatialReference),g[P]=j.toJSON(S)}else g[P]=h.toJSON(S);delete g[P].spatialReference}clone(){return new E({geometry:(0,U.d9)(this.geometry),type:this.type})}};(0,o._)([(0,R.Cb)({type:m.Z}),(0,I.B)()],O.prototype,"geometry",void 0),(0,o._)([(0,d.c)(["web-scene","portal-item"],"geometry")],O.prototype,"writeGeometry",null),(0,o._)([(0,R.Cb)({type:["clip","mask","replace"],nonNullable:!0}),(0,I.B)()],O.prototype,"type",void 0),O=E=(0,o._)([(0,C.j)("esri.layers.support.SceneModification")],O);const f=O}}]);