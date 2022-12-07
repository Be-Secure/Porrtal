"use strict";(self.webpackChunka_porrtal_io_app=self.webpackChunka_porrtal_io_app||[]).push([[3279],{76825:(q,U,e)=>{e.d(U,{cn:()=>i,j:()=>A,lK:()=>I});const i="updating";function I(C){return"updating"===C?null:C}function A(C){return"updating"===C}},22498:(q,U,e)=>{e.d(U,{z:()=>T});var i=e(17626),A=(e(29132),e(14517)),C=e(85931),N=e(63290),Z=e(21286),s=e(62208),j=e(76825),g=e(32917),D=e(16730),o=e(77712),l=(e(90912),e(76898)),n=e(84161),J=e(10410),S=e(55915),f=e(5548),O=e(65401),R=e(94425),P=e(37053),W=e(46367),x=e(98624),F=e(42964),Y=e(65234);const ee="esri.views.3d.layers.i3s.I3SMeshViewFilter",V=N.Z.getLogger(ee);let T=class extends A.Z{constructor(t){super(t),this._projectionEngineLoaded=!1}initialize(){(0,g.N1)(()=>(0,s.Wg)(this.viewFilter)?.geometry||(0,s.pC)(this.layerFilter)).then(()=>this.loadAsyncModule(Promise.all([e.e(4918),e.e(4766)]).then(e.bind(e,44766)).then(t=>{this.destroyed||(this._geometryEngine=t)})))}get sortedObjectIds(){if((0,s.Wi)(this.viewFilter)||(0,s.Wi)(this.viewFilter.objectIds))return null;const t=new Float64Array(this.viewFilter.objectIds);return t.sort(),t}get parsedWhereClause(){const t=(0,s.pC)(this.viewFilter)?this.viewFilter.where:null;if((0,s.Wi)(t)||!t)return null;try{return J.WhereClause.create(t,this.layerFieldsIndex)}catch(r){V.error(`Failed to parse filter where clause: ${r}`)}return null}addFilters(t,r,a,y){const u=this.sortedObjectIds;(0,s.pC)(u)&&t.push(E=>(0,F.Yb)(u,!0,E)),this.addSqlFilter(t,this.parsedWhereClause);const c=(0,j.lK)(this._layerMaskGeometries),d=this._geometryEngine;if((0,s.pC)(c)&&(0,s.pC)(this.layerFilter)&&(0,s.pC)(d)){const E=this.layerFilter.spatialRelationship;t.push((h,m)=>_e(d,h,m,y,r,a,c,E))}const p=(0,j.lK)(this._viewMaskGeometries);if((0,s.pC)(p)&&(0,s.pC)(this.viewFilter)&&(0,s.pC)(d)){const E=this.viewFilter.spatialRelationship;t.push((h,m)=>_e(d,h,m,y,r,a,p,E))}}isMBSGeometryVisible(t,r,a){const y=(0,j.lK)(this._layerMaskGeometries),u=this._geometryEngine;if((0,s.pC)(y)&&(0,s.pC)(this.layerFilter)&&(0,s.pC)(u)){const d=this.layerFilter.spatialRelationship,p=y[0].spatialReference||r;return(0,S.st)(t,a,X,p)?ae(u,X,y,p,d):(V.warnOnce("SceneLayer.mask geometry is using unsupported SpatialReference, skipping geometry filter for MBS"),!0)}const c=(0,j.lK)(this._viewMaskGeometries);if((0,s.pC)(c)&&(0,s.pC)(this.viewFilter)&&(0,s.pC)(u)){const d=this.viewFilter.spatialRelationship,p=c[0].spatialReference||r;return(0,S.st)(t,a,X,p)?ae(u,X,c,p,d):(V.warnOnce("SceneLayerView.filter.geometry is using unsupported SpatialReference, skipping geometry filter for MBS"),!0)}return!0}get parsedGeometry(){const t=(0,j.lK)(this._viewMaskGeometries),r=(0,j.lK)(this._layerMaskGeometries);return(0,s.Wi)(t)||(0,s.Wi)(r)?t||r:r.concat(t)}get _layerMaskGeometries(){const t=this.layerFilter;return(0,s.Wi)(t)?null:(0,s.Wi)(this._geometryEngine)?j.cn:"disjoint"===t.spatialRelationship?t.geometries.map(r=>({type:"polygon",rings:r.rings,spatialReference:r.spatialReference,cache:{}})):[t.geometries.reduce((r,a)=>(r.rings=r.rings.concat(a.rings),r),{type:"polygon",rings:[],spatialReference:t.geometries[0].spatialReference,cache:{}})]}get _viewMaskGeometries(){if((0,s.Wi)(this.viewFilter))return null;const{geometry:t}=this.viewFilter;if((0,s.Wi)(t))return null;if((0,s.Wi)(this.viewFilter)||(0,s.Wi)(this._geometryEngine))return j.cn;const{distance:r,units:a}=this.viewFilter,y=this.viewFilter.spatialRelationship,u="mesh"===t.type?t.extent:t;if((0,s.Wi)(r)||0===r)return te(this._geometryEngine,u,y);const c=a||(0,D.qE)(u.spatialReference);if(u.spatialReference.isWGS84){const E=this._geometryEngine.geodesicBuffer(u,r,c);return te(this._geometryEngine,E,y)}const d=(0,W.iV)(u,Y.Z.WGS84);if((0,s.pC)(d)){const E=(0,W.iV)(this._geometryEngine.geodesicBuffer(d,r,c),u.spatialReference);return te(this._geometryEngine,E,y)}if(!this._projectionEngineLoaded&&(this.loadAsyncModule((0,S.zD)().then(()=>this._projectionEngineLoaded=!0)),!this._projectionEngineLoaded))return null;let p=null;try{p=(0,S.iV)(u,Y.Z.WGS84)}catch{}if(p)try{p=(0,S.iV)(this._geometryEngine.geodesicBuffer(p,r,c),u.spatialReference)}catch{p=null}return p||V.error(`Filter by geodesic buffer (distance) unsupported, failed to project input geometry (${u.spatialReference.wkid}) to WGS84.`),te(this._geometryEngine,p,y)}get updating(){return(0,j.j)(this._layerMaskGeometries)||(0,j.j)(this._viewMaskGeometries)}static checkSupport(t){return!((0,s.Wi)(t)||(t.timeExtent?(V.warn("Filters with a timeExtent are not supported for mesh scene layers"),1):!function Ee(t){return null!=t&&oe.includes(t)}(t.spatialRelationship)&&(V.warn(`Filters with spatialRelationship other than ${oe.join(", ")} are not supported for mesh scene layers`),1)))}};(0,i._)([(0,o.Cb)()],T.prototype,"layerFilter",void 0),(0,i._)([(0,o.Cb)({type:x.Z})],T.prototype,"viewFilter",void 0),(0,i._)([(0,o.Cb)()],T.prototype,"layerFieldsIndex",void 0),(0,i._)([(0,o.Cb)()],T.prototype,"loadAsyncModule",void 0),(0,i._)([(0,o.Cb)()],T.prototype,"addSqlFilter",void 0),(0,i._)([(0,o.Cb)({readOnly:!0})],T.prototype,"sortedObjectIds",null),(0,i._)([(0,o.Cb)({readOnly:!0})],T.prototype,"parsedWhereClause",null),(0,i._)([(0,o.Cb)({readOnly:!0})],T.prototype,"parsedGeometry",null),(0,i._)([(0,o.Cb)({readOnly:!0})],T.prototype,"_layerMaskGeometries",null),(0,i._)([(0,o.Cb)({readOnly:!0})],T.prototype,"_viewMaskGeometries",null),(0,i._)([(0,o.Cb)()],T.prototype,"updating",null),(0,i._)([(0,o.Cb)()],T.prototype,"_projectionEngineLoaded",void 0),(0,i._)([(0,o.Cb)()],T.prototype,"_geometryEngine",void 0),T=(0,i._)([(0,l.j)(ee)],T);const oe=["contains","intersects","disjoint"];var v,t;function te(t,r,a){if((0,s.Wi)(r))return null;if("disjoint"===a&&"polygon"===r.type){const y=r.rings.length,u=r.spatialReference,c=new Array(y);for(let E=0;E<y;++E){const h=(0,O.al)(1/0,1/0,-1/0,-1/0);(0,O.Wi)(h,r.rings[E]),c[E]={type:"polygon",rings:[r.rings[E]],spatialReference:u,cache:{},aabr:h}}c.sort((E,h)=>E.aabr[0]-h.aabr[0]);const d=new Set,p=new C.SO;for(let E=0;E<c.length;++E){const h=c[E],m=h.aabr[0];d.forEach(M=>{if(m>=M.aabr[2])return void d.delete(M);if(h.aabr[1]>M.aabr[3]||h.aabr[3]<M.aabr[1]||!t.intersects(h,M))return;h.rings=h.rings.concat(M.rings),(0,O.jn)(h.aabr,M.aabr,h.aabr),h.cache={},d.delete(M);const L=(0,C.cq)(c,M,c.length,p);c.splice(L,1)}),d.add(h)}for(const E of c)delete E.aabr;return c}return[r]}function ae(t,r,a,y,u){const c=le(t,r,y);return a.every(d=>ce(t,d,c,u)!==v.DISCARD)}function _e(t,r,a,y,u,c,d,p){const E=d[0].spatialReference||u.spatialReference;if(!(0,S.st)(a.node.mbs,c,X,E))return void V.warnOnce("SceneLayerView.filter.geometry is using unsupported SpatialReference, skipping geometry filter");const h=le(t,X,E),m=function de(t,r,a,y,u){const c=r.renderSpatialReference,d=new Map,p={type:"polygon",rings:[[[0,0,0],[0,0,0],[0,0,0],[0,0,0]]],spatialReference:a};p.rings[0][3]=p.rings[0][0];let h,m;switch(t){case"intersects":h=(M,L,w)=>M.intersects(L,w)?v.KEEP:v.TEST,m=re;break;case"contains":h=(M,L,w)=>M.contains(L,w)?v.TEST:v.DISCARD,m=re;break;default:h=(M,L,w)=>M.disjoint(L,w)?v.TEST:v.DISCARD,m=ue}return{collection:y,object:u,type:t,maskSR:a,renderSR:c,aabbCache:d,triangle:p,positions:{indices:null,data:null,stride:0,startIndex:0,endIndex:0},triangleTest:h,geometryTest:m}}(p,u,E,y,a.objectHandle);for(const M of d){if(0===r.length)return;switch(ce(t,M,h,p)){case v.DISCARD:return void(r.length=0);case v.KEEP:continue}(0,F.hv)(r,a.featureIds,L=>pe(t,M,L,m))}}(t=v||(v={}))[t.KEEP=0]="KEEP",t[t.DISCARD=1]="DISCARD",t[t.TEST=2]="TEST";const X=[0,0,0,0];function le(t,r,a){const y={type:"point",x:r[0],y:r[1],hasZ:!1,hasM:!1,spatialReference:a},u=!(0,P.oR)(a)&&!(0,P.sS)(a),c=Number.isNaN(r[3])?0:(0,Z.uZ)(r[3],0,2*R.sv.radius),d=u?t.buffer(y,c,1):t.geodesicBuffer(y,c,1);return d.type="polygon",d}function ce(t,r,a,y){switch(y){case"intersects":case"contains":return re(t,r,a);case"disjoint":return ue(t,r,a)}}function re(t,r,a){return t.intersects(r,a)?t.contains(r,a)?v.KEEP:v.TEST:v.DISCARD}function ue(t,r,a){return t.intersects(r,a)?t.contains(r,a)?v.DISCARD:v.TEST:v.KEEP}function pe(t,r,a,y){const{collection:u,object:c,renderSR:d,maskSR:p,geometryTest:E,aabbCache:h}=y;let m=h.get(a);if(!m){const G=u.getObjectTransform(c);u.getComponentAabb(c,a,b);const B=[[b[0],b[1],0],[b[0],b[4],0],[b[3],b[4],0],[b[3],b[1],0]];for(let K=0;K<4;++K)(0,n.t)(B[K],B[K],G.rotationScale),(0,n.a)(B[K],B[K],G.position),(0,S.SH)(B[K],d,B[K],p);m={type:"polygon",rings:[B],spatialReference:p,cache:{}},m.rings[0][4]=m.rings[0][0],h.set(a,m)}switch(E(t,r,m)){case v.DISCARD:return!1;case v.KEEP:return!0}const{triangle:M,triangleTest:L,positions:w}=y,z=M.rings[0][0],H=M.rings[0][1],$=M.rings[0][2],k=u.getObjectTransform(c);u.getComponentPositions(c,a,w);const{indices:se,data:Q,stride:ne,startIndex:ye,endIndex:he}=w;for(let G=ye;G<he;G+=3){const B=ne*se[G+0],K=ne*se[G+1],ie=ne*se[G+2];switch((0,n.s)(z,Q[B+0],Q[B+1],Q[B+2]),(0,n.s)(H,Q[K+0],Q[K+1],Q[K+2]),(0,n.s)($,Q[ie+0],Q[ie+1],Q[ie+2]),(0,n.t)(z,z,k.rotationScale),(0,n.t)(H,H,k.rotationScale),(0,n.t)($,$,k.rotationScale),(0,n.a)(z,z,k.position),(0,n.a)(H,H,k.position),(0,n.a)($,$,k.position),(0,S.SH)(z,d,z,p),(0,S.SH)(H,d,H,p),(0,S.SH)($,d,$,p),L(t,r,M)){case v.DISCARD:return!1;case v.KEEP:return!0}}return"intersects"!==y.type}const b=(0,f.Ue)()},94443:(q,U,e)=>{e.d(U,{u:()=>f});var i=e(15861),I=e(17626),A=e(14517),C=e(26584),N=e(72392),Z=e(62208),s=e(77712),D=(e(85931),e(90912),e(76898)),o=e(2004),_=e(5437),l=e(58175),n=e(17253),J=e(96854);const S=l.q;let f=class extends A.Z{constructor(O){super(O),this._dataQueryEngineInstance=null,this._handles=new N.Z}get spatialReference(){return this.layerView.view.spatialReference}get layer(){return this.layerView.i3slayer}get defaultQueryJSON(){return new J.Z({outSpatialReference:this.spatialReference}).toJSON()}get _dataQueryEngine(){return this._ensureDataQueryEngine()}initialize(){this._handles.add(this.layerView.on("visible-geometry-changed",()=>this.spatialIndex.events.emit("changed")))}destroy(){this._dataQueryEngineInstance&&(this._dataQueryEngineInstance.destroy(),this._dataQueryEngineInstance=null),this._handles&&(this._handles.destroy(),this._handles=null),this._set("layerView",null)}executeQueryForCount(O,R){var P=this;return(0,i.Z)(function*(){return P._dataQueryEngine.executeQueryForCount(P._ensureQueryJSON(O),R)})()}executeQueryForExtent(O,R){var P=this;return(0,i.Z)(function*(){const{count:W,extent:x}=yield P._dataQueryEngine.executeQueryForExtent(P._ensureQueryJSON(O),R);return{count:W,extent:o.Z.fromJSON(x)}})()}executeQueryForIds(O,R){var P=this;return(0,i.Z)(function*(){return P._dataQueryEngine.executeQueryForIds(P._ensureQueryJSON(O),R)})()}executeQuery(O,R){var P=this;return(0,i.Z)(function*(){const W=P._ensureQueryJSON(O);if(W.returnGeometry)throw new C.Z("feature-store:unsupported-query","returnGeometry is not yet supported for mesh scene layer queries");if(W.returnCentroid)throw new C.Z("feature-store:unsupported-query","returnCentroid is not yet supported for mesh scene layer queries");const x=yield P._dataQueryEngine.executeQuery(W,R),F=n.default.fromJSON(x);return F.features.forEach(Y=>{Y.geometry=null}),F})()}_ensureQueryJSON(O){return(0,Z.Wi)(O)?this.defaultQueryJSON:O.toJSON()}_ensureDataQueryEngine(){if(this._dataQueryEngineInstance)return this._dataQueryEngineInstance;const O=this.layer.objectIdField||_.d,P=this.layer.fields.map(ee=>ee.toJSON()),W=this.layerView.view.resourceController.scheduler,x=this.spatialReference.toJSON();return this._dataQueryEngineInstance=new S({hasZ:!0,hasM:!1,geometryType:"esriGeometryPolygon",fields:P,timeInfo:null,spatialReference:x,objectIdField:O,featureStore:this.spatialIndex,scheduler:W,priority:this.priority}),this._dataQueryEngineInstance}};(0,I._)([(0,s.Cb)({constructOnly:!0})],f.prototype,"layerView",void 0),(0,I._)([(0,s.Cb)({constructOnly:!0})],f.prototype,"priority",void 0),(0,I._)([(0,s.Cb)({constructOnly:!0})],f.prototype,"spatialIndex",void 0),(0,I._)([(0,s.Cb)()],f.prototype,"spatialReference",null),(0,I._)([(0,s.Cb)()],f.prototype,"layer",null),(0,I._)([(0,s.Cb)()],f.prototype,"defaultQueryJSON",null),f=(0,I._)([(0,D.j)("esri.views.3d.layers.i3s.I3SQueryEngine")],f)},72537:(q,U,e)=>{e.d(U,{u:()=>Z});var i=e(62208),I=e(5548),A=e(77044),C=e(88071),N=e(42964);class Z{constructor(g){this._objectIdField=g.objectIdField,this._getFeatureExtent=g.getFeatureExtent}getObjectId(g){return g.id}getAttributes(g){const{meta:D,index:o}=g,_={};this._objectIdField&&(_[this._objectIdField]=g.id);const l=(0,i.pC)(D.attributeInfo)&&D.attributeInfo.attributeData;if((0,i.pC)(l))for(const n of Object.keys(l))_[n]=(0,N.Jx)(l[n],o);return _}getAttribute(g,D){if(D===this._objectIdField)return g.id;const{meta:o,index:_}=g,l=(0,i.pC)(o.attributeInfo)&&o.attributeInfo.attributeData;return(0,i.pC)(l)?(0,N.Jx)(l[D],_):null}getGeometry(g){if(g.geometry)return g.geometry;const[D,o,_,l,n]=this._getFeatureExtent(g,s);return new C.Z([5],[D,o,_,l,o,_,l,n,_,D,n,_,D,o,_])}getCentroid(g,D){if(g.geometry)return(0,A.Y)(new C.Z,g.geometry,D.hasZ,D.hasM);const[o,_,l,n,J,S]=this._getFeatureExtent(g,s);return new C.Z([0],[(o+n)/2,(_+J)/2,(l+S)/2])}cloneWithGeometry(g,D){const{id:o,index:_,meta:l}=g;return{id:o,index:_,meta:l,geometry:D}}}const s=(0,I.Ue)()},41941:(q,U,e)=>{e.d(U,{I:()=>l});var i=e(17626),I=e(14517),A=e(61885),C=e(77712),s=(e(85931),e(90912),e(76898)),j=e(4794),g=e(55915),D=e(5548),o=e(65401),_=e(52836);let l=class extends I.Z{constructor(f){super(f),this.events=new A.Z}forEach(f){this.forAllFeatures(O=>(f(O),_.K.CONTINUE))}forEachBounds(f,O,R){const P=this.getFeatureExtent;for(const W of f)O(P(W,R))}forEachInBounds(f,O){this.forAllFeatures(R=>{const P=this.getFeatureExtent(R,J);return(0,o.kK)(f,(0,D.y8)(P,S))&&O(R),_.K.CONTINUE},R=>{if((0,g.st)(R.node.mbs,this.sourceSpatialReference,n,this.viewSpatialReference),n[0]>=f[0]&&n[2]<=f[2]&&n[1]>=f[1]&&n[3]<=f[3])return _.K.CONTINUE;const P=Math.max(f[0],Math.min(n[0],f[2])),W=Math.max(f[1],Math.min(n[1],f[3])),x=n[0]-P,F=n[1]-W;return x*x+F*F<=n[3]*n[3]?_.K.CONTINUE:_.K.SKIP})}};(0,i._)([(0,C.Cb)({constructOnly:!0})],l.prototype,"featureAdapter",void 0),(0,i._)([(0,C.Cb)({constructOnly:!0})],l.prototype,"toArray",void 0),(0,i._)([(0,C.Cb)({constructOnly:!0})],l.prototype,"forAllFeatures",void 0),(0,i._)([(0,C.Cb)({constructOnly:!0})],l.prototype,"getFeatureExtent",void 0),(0,i._)([(0,C.Cb)({constructOnly:!0})],l.prototype,"sourceSpatialReference",void 0),(0,i._)([(0,C.Cb)({constructOnly:!0})],l.prototype,"viewSpatialReference",void 0),l=(0,i._)([(0,s.j)("esri.views.3d.layers.i3s.I3SQueryFeatureStore")],l);const n=(0,j.c)(),J=(0,D.Ue)(),S=(0,o.Ue)()},89476:(q,U,e)=>{e.d(U,{l:()=>g});var i=e(17626),I=e(63290),A=e(77712),Z=(e(85931),e(90912),e(76898)),s=e(10410),j=e(42964);const g=D=>{let o=class extends D{constructor(){super(...arguments),this._definitionExpressionErrors=0,this._maxDefinitionExpressionErrors=20,this.logError=_=>{this._definitionExpressionErrors<this._maxDefinitionExpressionErrors&&I.Z.getLogger(this.declaredClass).error("Error while evaluating definitionExpression: "+_),this._definitionExpressionErrors++,this._definitionExpressionErrors===this._maxDefinitionExpressionErrors&&I.Z.getLogger(this.declaredClass).error("Further errors are ignored")}}get parsedDefinitionExpression(){if(!this.i3slayer||!this.i3slayer.definitionExpression)return null;try{const _=s.WhereClause.create(this.i3slayer.definitionExpression,this.i3slayer.fieldsIndex);if(!_.isStandardized)return I.Z.getLogger(this.declaredClass).error("definitionExpression is using non standard function"),null;const l=[];return(0,j.e8)(_.fieldNames,this.i3slayer.fields,{missingFields:l}),l.length>0?(I.Z.getLogger(this.declaredClass).error(`definitionExpression references unknown fields: ${l.join(", ")}`),null):(this._definitionExpressionErrors=0,_)}catch(_){return I.Z.getLogger(this.declaredClass).error("Failed to parse definitionExpression: "+_),null}}get definitionExpressionFields(){return this.parsedDefinitionExpression?this.parsedDefinitionExpression.fieldNames:null}_evaluateClause(_,l){try{return _.testFeature(l)}catch(n){return this.logError(n),!1}}_addDefinitionExpressionToQuery(_){if(!this.parsedDefinitionExpression)return _;const l=this.i3slayer.definitionExpression,n=_.clone();return n.where=n.where?`(${l}) AND (${n.where})`:l,n}};return(0,i._)([(0,A.Cb)()],o.prototype,"i3slayer",void 0),(0,i._)([(0,A.Cb)({readOnly:!0})],o.prototype,"parsedDefinitionExpression",null),(0,i._)([(0,A.Cb)({readOnly:!0})],o.prototype,"definitionExpressionFields",null),o=(0,i._)([(0,Z.j)("esri.views.3d.layers.support.DefinitionExpressionSceneLayerView")],o),o}}}]);