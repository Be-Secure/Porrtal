"use strict";(self.webpackChunka_porrtal_io_app=self.webpackChunka_porrtal_io_app||[]).push([[4079],{36592:(Q,U,c)=>{c.d(U,{Q:()=>F});var M=c(85931),A=c(62208),R=c(77029),B=c(14259);class F{constructor(t=9,s){this._compareMinX=T,this._compareMinY=f,this._toBBox=r=>r,this._maxEntries=Math.max(4,t||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),s&&("function"==typeof s?this._toBBox=s:this._initFormat(s)),this.clear()}destroy(){this.clear(),L.prune(),w.prune(),b.prune(),Y.prune()}all(t){this._all(this._data,t)}search(t,s){let r=this._data;const u=this._toBBox;if(D(t,r))for(L.clear();r;){for(let e=0,n=r.children.length;e<n;e++){const i=r.children[e],a=r.leaf?u(i):i;D(t,a)&&(r.leaf?s(i):P(t,a)?this._all(i,s):L.push(i))}r=L.pop()}}collides(t){let s=this._data;const r=this._toBBox;if(!D(t,s))return!1;for(L.clear();s;){for(let u=0,e=s.children.length;u<e;u++){const n=s.children[u],i=s.leaf?r(n):n;if(D(t,i)){if(s.leaf||P(t,i))return!0;L.push(n)}}s=L.pop()}return!1}load(t){if(!t.length)return this;if(t.length<this._minEntries){for(let r=0,u=t.length;r<u;r++)this.insert(t[r]);return this}let s=this._build(t.slice(0,t.length),0,t.length-1,0);if(this._data.children.length)if(this._data.height===s.height)this._splitRoot(this._data,s);else{if(this._data.height<s.height){const r=this._data;this._data=s,s=r}this._insert(s,this._data.height-s.height-1,!0)}else this._data=s;return this}insert(t){return t&&this._insert(t,this._data.height-1),this}clear(){return this._data=new _([]),this}remove(t){if(!t)return this;let s,r=this._data,u=null,e=0,n=!1;const i=this._toBBox(t);for(b.clear(),Y.clear();r||b.length>0;){if(r||(r=(0,A.j0)(b.pop()),u=b.data[b.length-1],e=Y.pop()??0,n=!0),r.leaf&&(s=(0,M.cq)(r.children,t,r.children.length,r.indexHint),-1!==s))return r.children.splice(s,1),b.push(r),this._condense(b),this;n||r.leaf||!P(r,i)?u?(e++,r=u.children[e],n=!1):r=null:(b.push(r),Y.push(e),e=0,u=r,r=r.children[0])}return this}toJSON(){return this._data}fromJSON(t){return this._data=t,this}_all(t,s){let r=t;for(w.clear();r;){if(!0===r.leaf)for(const u of r.children)s(u);else w.pushArray(r.children);r=w.pop()??null}}_build(t,s,r,u){const e=r-s+1;let n=this._maxEntries;if(e<=n){const m=new _(t.slice(s,r+1));return E(m,this._toBBox),m}u||(u=Math.ceil(Math.log(e)/Math.log(n)),n=Math.ceil(e/n**(u-1)));const i=new l([]);i.height=u;const a=Math.ceil(e/n),p=a*Math.ceil(Math.sqrt(n));X(t,s,r,p,this._compareMinX);for(let m=s;m<=r;m+=p){const j=Math.min(m+p-1,r);X(t,m,j,a,this._compareMinY);for(let x=m;x<=j;x+=a){const C=Math.min(x+a-1,j);i.children.push(this._build(t,x,C,u-1))}}return E(i,this._toBBox),i}_chooseSubtree(t,s,r,u){for(;u.push(s),!0!==s.leaf&&u.length-1!==r;){let e,n=1/0,i=1/0;for(let a=0,p=s.children.length;a<p;a++){const m=s.children[a],j=y(m),x=g(t,m)-j;x<i?(i=x,n=j<n?j:n,e=m):x===i&&j<n&&(n=j,e=m)}s=e||s.children[0]}return s}_insert(t,s,r){const e=r?t:(0,this._toBBox)(t);b.clear();const n=this._chooseSubtree(e,this._data,s,b);for(n.children.push(t),S(n,e);s>=0&&b.data[s].children.length>this._maxEntries;)this._split(b,s),s--;this._adjustParentBBoxes(e,b,s)}_split(t,s){const r=t.data[s],u=r.children.length,e=this._minEntries;this._chooseSplitAxis(r,e,u);const n=this._chooseSplitIndex(r,e,u);if(!n)return void console.log("  Error: assertion failed at PooledRBush._split: no valid split index");const i=r.children.splice(n,r.children.length-n),a=r.leaf?new _(i):new l(i);a.height=r.height,E(r,this._toBBox),E(a,this._toBBox),s?t.data[s-1].children.push(a):this._splitRoot(r,a)}_splitRoot(t,s){this._data=new l([t,s]),this._data.height=t.height+1,E(this._data,this._toBBox)}_chooseSplitIndex(t,s,r){let u,e,n;u=e=1/0;for(let i=s;i<=r-s;i++){const a=O(t,0,i,this._toBBox),p=O(t,i,r,this._toBBox),m=v(a,p),j=y(a)+y(p);m<u?(u=m,n=i,e=j<e?j:e):m===u&&j<e&&(e=j,n=i)}return n}_chooseSplitAxis(t,s,r){const u=t.leaf?this._compareMinX:T,e=t.leaf?this._compareMinY:f;this._allDistMargin(t,s,r,u)<this._allDistMargin(t,s,r,e)&&t.children.sort(u)}_allDistMargin(t,s,r,u){t.children.sort(u);const e=this._toBBox,n=O(t,0,s,e),i=O(t,r-s,r,e);let a=d(n)+d(i);for(let p=s;p<r-s;p++){const m=t.children[p];S(n,t.leaf?e(m):m),a+=d(n)}for(let p=r-s-1;p>=s;p--){const m=t.children[p];S(i,t.leaf?e(m):m),a+=d(i)}return a}_adjustParentBBoxes(t,s,r){for(let u=r;u>=0;u--)S(s.data[u],t)}_condense(t){for(let s=t.length-1;s>=0;s--){const r=t.data[s];if(0===r.children.length)if(s>0){const u=t.data[s-1],e=u.children;e.splice((0,M.cq)(e,r,e.length,u.indexHint),1)}else this.clear();else E(r,this._toBBox)}}_initFormat(t){const s=["return a"," - b",";"];this._compareMinX=new Function("a","b",s.join(t[0])),this._compareMinY=new Function("a","b",s.join(t[1])),this._toBBox=new Function("a","return {minX: a"+t[0]+", minY: a"+t[1]+", maxX: a"+t[2]+", maxY: a"+t[3]+"};")}}function E(o,t){O(o,0,o.children.length,t,o)}function O(o,t,s,r,u){u||(u=new _([])),u.minX=1/0,u.minY=1/0,u.maxX=-1/0,u.maxY=-1/0;for(let e,n=t;n<s;n++)e=o.children[n],S(u,o.leaf?r(e):e);return u}function S(o,t){o.minX=Math.min(o.minX,t.minX),o.minY=Math.min(o.minY,t.minY),o.maxX=Math.max(o.maxX,t.maxX),o.maxY=Math.max(o.maxY,t.maxY)}function T(o,t){return o.minX-t.minX}function f(o,t){return o.minY-t.minY}function y(o){return(o.maxX-o.minX)*(o.maxY-o.minY)}function d(o){return o.maxX-o.minX+(o.maxY-o.minY)}function g(o,t){return(Math.max(t.maxX,o.maxX)-Math.min(t.minX,o.minX))*(Math.max(t.maxY,o.maxY)-Math.min(t.minY,o.minY))}function v(o,t){const s=Math.max(o.minX,t.minX),r=Math.max(o.minY,t.minY),u=Math.min(o.maxX,t.maxX),e=Math.min(o.maxY,t.maxY);return Math.max(0,u-s)*Math.max(0,e-r)}function P(o,t){return o.minX<=t.minX&&o.minY<=t.minY&&t.maxX<=o.maxX&&t.maxY<=o.maxY}function D(o,t){return t.minX<=o.maxX&&t.minY<=o.maxY&&t.maxX>=o.minX&&t.maxY>=o.minY}function X(o,t,s,r,u){const e=[t,s];for(;e.length;){const n=(0,A.j0)(e.pop()),i=(0,A.j0)(e.pop());if(n-i<=r)continue;const a=i+Math.ceil((n-i)/r/2)*r;(0,B.q)(o,a,i,n,u),e.push(i,a,a,n)}}const L=new R.Z,w=new R.Z,b=new R.Z,Y=new R.Z({deallocator:void 0});class N{constructor(){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0}}class h extends N{constructor(){super(...arguments),this.height=1,this.indexHint=new M.SO}}class _ extends h{constructor(t){super(),this.children=t,this.leaf=!0}}class l extends h{constructor(t){super(),this.children=t,this.leaf=!1}}},61256:(Q,U,c)=>{c.d(U,{H:()=>S});var M=c(8314),A=c(36592),R=c(65401);const F={minX:0,minY:0,maxX:0,maxY:0};class S{constructor(){this._indexInvalid=!1,this._boundsToLoad=[],this._boundsById=new Map,this._idByBounds=new Map,this._index=new A.Q(9,(0,M.Z)("esri-csp-restrictions")?f=>({minX:f[0],minY:f[1],maxX:f[2],maxY:f[3]}):["[0]","[1]","[2]","[3]"]),this._loadIndex=()=>{if(this._indexInvalid){const f=new Array(this._idByBounds.size);let y=0;this._idByBounds.forEach((d,g)=>{f[y++]=g}),this._indexInvalid=!1,this._index.clear(),this._index.load(f)}else this._boundsToLoad.length&&(this._index.load(this._boundsToLoad.filter(f=>this._idByBounds.has(f))),this._boundsToLoad.length=0)}}get fullBounds(){if(!this._boundsById.size)return null;const f=(0,R.cS)();for(const y of this._boundsById.values())y&&(f[0]=Math.min(y[0],f[0]),f[1]=Math.min(y[1],f[1]),f[2]=Math.max(y[2],f[2]),f[3]=Math.max(y[3],f[3]));return f}get valid(){return!this._indexInvalid}clear(){this._indexInvalid=!1,this._boundsToLoad.length=0,this._boundsById.clear(),this._idByBounds.clear(),this._index.clear()}delete(f){const y=this._boundsById.get(f);this._boundsById.delete(f),y&&(this._idByBounds.delete(y),this._indexInvalid||this._index.remove(y))}forEachInBounds(f,y){this._loadIndex(),function O(T,f,y){(function E(T){F.minX=T[0],F.minY=T[1],F.maxX=T[2],F.maxY=T[3]})(f),T.search(F,y)}(this._index,f,d=>y(this._idByBounds.get(d)))}get(f){return this._boundsById.get(f)}has(f){return this._boundsById.has(f)}invalidateIndex(){this._indexInvalid||(this._indexInvalid=!0,this._boundsToLoad.length=0)}set(f,y){if(!this._indexInvalid){const d=this._boundsById.get(f);d&&(this._index.remove(d),this._idByBounds.delete(d))}this._boundsById.set(f,y),y&&(this._idByBounds.set(y,f),this._indexInvalid||(this._boundsToLoad.push(y),this._boundsToLoad.length>5e4&&this._loadIndex()))}}},3579:(Q,U,c)=>{c.d(U,{Z:()=>f});var M=c(26584),A=c(61885),R=c(63290),B=c(62208),F=c(5548),E=c(65401),O=c(82054),S=c(61256),T=c(92794);class f{constructor(d){this.geometryInfo=d,this._boundsStore=new S.H,this._featuresById=new Map,this._markedIds=new Set,this.events=new A.Z,this.featureAdapter=T.n}get geometryType(){return this.geometryInfo.geometryType}get hasM(){return this.geometryInfo.hasM}get hasZ(){return this.geometryInfo.hasZ}get numFeatures(){return this._featuresById.size}get fullBounds(){return this._boundsStore.fullBounds}get storeStatistics(){let d=0;return this._featuresById.forEach(g=>{(0,B.pC)(g.geometry)&&g.geometry.coords&&(d+=g.geometry.coords.length)}),{featureCount:this._featuresById.size,vertexCount:d/(this.hasZ?this.hasM?4:3:this.hasM?3:2)}}add(d){this._add(d),this._emitChanged()}addMany(d){for(const g of d)this._add(g);this._emitChanged()}clear(){this._featuresById.clear(),this._boundsStore.clear(),this._emitChanged()}removeById(d){const g=this._featuresById.get(d);return g?(this._remove(g),this._emitChanged(),g):null}removeManyById(d){this._boundsStore.invalidateIndex();for(const g of d){const v=this._featuresById.get(g);v&&this._remove(v)}this._emitChanged()}forEachBounds(d,g,v){for(const P of d){const D=this._boundsStore.get(P.objectId);D&&g((0,F.JR)(v,D))}}getFeature(d){return this._featuresById.get(d)}has(d){return this._featuresById.has(d)}toArray(){return Array.from(this._featuresById.values())}forEach(d){this._featuresById.forEach(g=>d(g))}forEachInBounds(d,g){this._boundsStore.forEachInBounds(d,v=>{g(this._featuresById.get(v))})}startMarkingUsedFeatures(){this._boundsStore.invalidateIndex(),this._markedIds.clear()}sweep(){let d=!1;this._featuresById.forEach((g,v)=>{this._markedIds.has(v)||(d=!0,this._remove(g))}),this._markedIds.clear(),d&&this._emitChanged()}_emitChanged(){this.events.emit("changed",void 0)}_add(d){if(!d)return;const g=d.objectId;if(null==g)return void R.Z.getLogger("esri.layers.graphics.data.FeatureStore").error(new M.Z("featurestore:invalid-feature","feature id is missing",{feature:d}));const v=this._featuresById.get(g);let P;if(this._markedIds.add(g),v?(d.displayId=v.displayId,P=this._boundsStore.get(g),this._boundsStore.delete(g)):(0,B.pC)(this.onFeatureAdd)&&this.onFeatureAdd(d),(0,B.Wi)(d.geometry)||!d.geometry.coords||!d.geometry.coords.length)return this._boundsStore.set(g,null),void this._featuresById.set(g,d);P=(0,O.$)((0,B.pC)(P)?P:(0,E.Ue)(),d.geometry,this.geometryInfo.hasZ,this.geometryInfo.hasM),(0,B.pC)(P)&&this._boundsStore.set(g,P),this._featuresById.set(g,d)}_remove(d){return(0,B.pC)(this.onFeatureRemove)&&this.onFeatureRemove(d),this._markedIds.delete(d.objectId),this._boundsStore.delete(d.objectId),this._featuresById.delete(d.objectId),d}}},92794:(Q,U,c)=>{c.d(U,{n:()=>F});var M=c(62208),A=c(77044),R=c(66385),B=c(88071);const F={getObjectId:E=>E.objectId,getAttributes:E=>E.attributes,getAttribute:(E,O)=>E.attributes[O],cloneWithGeometry:(E,O)=>new R.u_(O,E.attributes,null,E.objectId),getGeometry:E=>E.geometry,getCentroid:(E,O)=>((0,M.Wi)(E.centroid)&&(E.centroid=(0,A.Y)(new B.Z,E.geometry,O.hasZ,O.hasM)),E.centroid)}},84079:(Q,U,c)=>{c.r(U),c.d(U,{default:()=>Y});var M=c(15861),A=c(84792),R=c(59213),B=c(26584),F=c(63290),E=c(62208),O=c(10699),S=c(91179),T=c(37053),f=c(82054),y=c(3579),d=c(82959),g=c(58175),v=c(58775),P=c(56554),D=c(35775),X=c(60466),L=c(85),w=c(36630);const b={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,supportsReturningQueryGeometry:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsStatistics:!0,supportsPercentileStatistics:!0,supportsReturningGeometryCentroid:!0,supportsQueryWithDistance:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQueryWithResultType:!1,supportsSqlExpression:!0,supportsDisjointSpatialRel:!0}};class Y{constructor(){var h=this;this._queryEngine=null,this._snapshotFeatures=function(){var _=(0,M.Z)(function*(l){const o=yield h._fetch(l);return h._createFeatures(o)});return function(l){return _.apply(this,arguments)}}()}destroy(){this._queryEngine?.destroy(),this._queryEngine=this._fieldsIndex=this._createDefaultAttributes=null}load(h,_={}){var l=this;return(0,M.Z)(function*(){l._loadOptions={url:h.url,customParameters:h.customParameters};const o=[];yield l._checkProjection(h.spatialReference);let t=null;h.url&&(t=yield l._fetch(_?.signal));const s=(0,v.my)(t,{geometryType:h.geometryType}),r=h.fields||s.fields||[],u=null!=h.hasZ?h.hasZ:s.hasZ,e=s.geometryType;let n=h.objectIdField||s.objectIdFieldName||"__OBJECTID";const i=h.spatialReference||T.Zn;let a=h.timeInfo;r===s.fields&&s.unknownFields.length>0&&o.push({name:"geojson-layer:unknown-field-types",message:"Some fields types couldn't be inferred from the features and were dropped",details:{unknownFields:s.unknownFields}});let p=new X.Z(r).get(n);p?("esriFieldTypeString"!==p.type&&(p.type="esriFieldTypeOID"),p.editable=!1,p.nullable=!1,n=p.name):(p={alias:n,name:n,type:"string"===s.objectIdFieldType?"esriFieldTypeString":"esriFieldTypeOID",editable:!1,nullable:!1},r.unshift(p));const m={};for(const I of r){if(null==I.name&&(I.name=I.alias),null==I.alias&&(I.alias=I.name),!I.name)throw new B.Z("geojson-layer:invalid-field-name","field name is missing",{field:I});if(!L.v.jsonValues.includes(I.type))throw new B.Z("geojson-layer:invalid-field-type",`invalid type for field "${I.name}"`,{field:I});if(I.name!==p.name){const W=(0,w.os)(I);void 0!==W&&(m[I.name]=W)}}l._fieldsIndex=new X.Z(r);const j=l._fieldsIndex.requiredFields.indexOf(p);if(j>-1&&l._fieldsIndex.requiredFields.splice(j,1),a){if(a.startTimeField){const I=l._fieldsIndex.get(a.startTimeField);I?(a.startTimeField=I.name,I.type="esriFieldTypeDate"):a.startTimeField=null}if(a.endTimeField){const I=l._fieldsIndex.get(a.endTimeField);I?(a.endTimeField=I.name,I.type="esriFieldTypeDate"):a.endTimeField=null}if(a.trackIdField){const I=l._fieldsIndex.get(a.trackIdField);I?a.trackIdField=I.name:(a.trackIdField=null,o.push({name:"geojson-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:a}}))}a.startTimeField||a.endTimeField||(o.push({name:"geojson-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing",details:{timeInfo:a}}),a=null)}const x=e?(0,P.bU)(e):null,C={warnings:o,featureErrors:[],layerDefinition:{...b,drawingInfo:x,templates:(0,P.Hq)(m),extent:null,geometryType:e,objectIdField:n,fields:r,hasZ:!!u,timeInfo:a}};l._queryEngine=new g.q({fields:r,geometryType:e,hasM:!1,hasZ:u,objectIdField:n,spatialReference:i,timeInfo:a,featureStore:new y.Z({geometryType:e,hasM:!1,hasZ:u}),cacheSpatialQueries:!0}),l._createDefaultAttributes=(0,P.Dm)(m,n);const Z=yield l._createFeatures(t);l._objectIdGenerator=l._createObjectIdGenerator(l._queryEngine,Z);const H=l._normalizeFeatures(Z,C.warnings,C.featureErrors);if(l._queryEngine.featureStore.addMany(H),C.layerDefinition.extent=l._queryEngine.fullExtent,C.layerDefinition.timeInfo){const{start:I,end:W}=l._queryEngine.timeExtent;C.layerDefinition.timeInfo.timeExtent=[I,W]}return C})()}applyEdits(h){var _=this;return(0,M.Z)(function*(){const{spatialReference:l,geometryType:o}=_._queryEngine;return yield Promise.all([(0,D.b)(l,o),(0,d._W)(h.adds,l),(0,d._W)(h.updates,l)]),yield _._waitSnapshotComplete(),_._applyEdits(h)})()}queryFeatures(h={},_={}){var l=this;return(0,M.Z)(function*(){return yield l._waitSnapshotComplete(),l._queryEngine.executeQuery(h,_.signal)})()}queryFeatureCount(h={},_={}){var l=this;return(0,M.Z)(function*(){return yield l._waitSnapshotComplete(),l._queryEngine.executeQueryForCount(h,_.signal)})()}queryObjectIds(h={},_={}){var l=this;return(0,M.Z)(function*(){return yield l._waitSnapshotComplete(),l._queryEngine.executeQueryForIds(h,_.signal)})()}queryExtent(h={},_={}){var l=this;return(0,M.Z)(function*(){return yield l._waitSnapshotComplete(),l._queryEngine.executeQueryForExtent(h,_.signal)})()}querySnapping(h,_={}){var l=this;return(0,M.Z)(function*(){return yield l._waitSnapshotComplete(),l._queryEngine.executeQueryForSnapping(h,_.signal)})()}refresh(h){var _=this;return(0,M.Z)(function*(){return _._loadOptions.customParameters=h,_._snapshotTask?.abort(),_._snapshotTask=(0,R.vr)(_._snapshotFeatures),_._snapshotTask.promise.then(l=>{_._queryEngine.featureStore.clear(),_._objectIdGenerator=_._createObjectIdGenerator(_._queryEngine,l);const o=_._normalizeFeatures(l);o&&_._queryEngine.featureStore.addMany(o)},l=>{_._queryEngine.featureStore.clear(),(0,O.D_)(l)||F.Z.getLogger("esri.layers.GeoJSONLayer").error(new B.Z("geojson-layer:refresh","An error occurred during refresh",{error:l}))}),yield _._waitSnapshotComplete(),{extent:_._queryEngine.fullExtent,timeExtent:_._queryEngine.timeExtent}})()}_createFeatures(h){var _=this;return(0,M.Z)(function*(){const{geometryType:l,hasZ:o,objectIdField:t}=_._queryEngine,s=(0,v.lG)(h,{geometryType:l,hasZ:o,objectIdField:t});if(!(0,T.fS)(_._queryEngine.spatialReference,T.Zn))for(const r of s)(0,E.pC)(r.geometry)&&(r.geometry=(0,f.GH)((0,d.iV)((0,f.di)(r.geometry,_._queryEngine.geometryType,_._queryEngine.hasZ,!1),T.Zn,_._queryEngine.spatialReference)));return s})()}_waitSnapshotComplete(){var h=this;return(0,M.Z)(function*(){if(h._snapshotTask&&!h._snapshotTask.finished){try{yield h._snapshotTask.promise}catch{}return h._waitSnapshotComplete()}})()}_fetch(h){var _=this;return(0,M.Z)(function*(){const{url:l,customParameters:o}=_._loadOptions,t=(yield(0,A.default)(l,{responseType:"json",query:{...o},signal:h})).data;return yield(0,v.O3)(t),t})()}_normalizeFeatures(h,_,l){const{objectIdField:o}=this._queryEngine,t=[];for(const s of h){const r=this._createDefaultAttributes(),u=(0,D.O0)(this._fieldsIndex,r,s.attributes,!0,_);u?l?.push(u):(this._assignObjectId(r,s.attributes,!0),s.attributes=r,s.objectId=r[o],t.push(s))}return t}_applyEdits(h){const{adds:_,updates:l,deletes:o}=h,t={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}};if(_&&_.length&&this._applyAddEdits(t,_),l&&l.length&&this._applyUpdateEdits(t,l),o&&o.length){for(const s of o)t.deleteResults.push((0,D.d1)(s));this._queryEngine.featureStore.removeManyById(o)}return{extent:this._queryEngine.fullExtent,timeExtent:this._queryEngine.timeExtent,featureEditResults:t}}_applyAddEdits(h,_){const{addResults:l}=h,{geometryType:o,hasM:t,hasZ:s,objectIdField:r,spatialReference:u,featureStore:e}=this._queryEngine,n=[];for(const i of _){if(i.geometry&&o!==(0,S.Ji)(i.geometry)){l.push((0,D.av)("Incorrect geometry type."));continue}const a=this._createDefaultAttributes(),p=(0,D.O0)(this._fieldsIndex,a,i.attributes);if(p)l.push(p);else{if(this._assignObjectId(a,i.attributes),i.attributes=a,null!=i.uid&&(h.uidToObjectId[i.uid]=i.attributes[r]),(0,E.pC)(i.geometry)){const m=i.geometry.spatialReference??u;i.geometry=(0,d.iV)((0,D.og)(i.geometry,m),m,u)}n.push(i),l.push((0,D.d1)(i.attributes[r]))}}e.addMany((0,f.Yn)([],n,o,s,t,r))}_applyUpdateEdits({updateResults:h},_){const{geometryType:l,hasM:o,hasZ:t,objectIdField:s,spatialReference:r,featureStore:u}=this._queryEngine;for(const e of _){const{attributes:n,geometry:i}=e,a=n&&n[s];if(null==a){h.push((0,D.av)(`Identifier field ${s} missing`));continue}if(!u.has(a)){h.push((0,D.av)(`Feature with object id ${a} missing`));continue}const p=(0,f.EI)(u.getFeature(a),l,t,o);if((0,E.pC)(i)){if(l!==(0,S.Ji)(i)){h.push((0,D.av)("Incorrect geometry type."));continue}const m=i.spatialReference??r;p.geometry=(0,d.iV)((0,D.og)(i,m),m,r)}if(n){const m=(0,D.O0)(this._fieldsIndex,p.attributes,n);if(m){h.push(m);continue}}u.add((0,f.XA)(p,l,t,o,s)),h.push((0,D.d1)(a))}}_createObjectIdGenerator(h,_){const l=h.fieldsIndex.get(h.objectIdField);if("esriFieldTypeString"===l.type)return()=>l.name+"-"+Date.now().toString(16);let o=Number.NEGATIVE_INFINITY;for(const t of _)t.objectId&&(o=Math.max(o,t.objectId));return o=Math.max(0,o)+1,()=>o++}_assignObjectId(h,_,l=!1){const o=this._queryEngine.objectIdField;h[o]=l&&o in _?_[o]:this._objectIdGenerator()}_checkProjection(h){return(0,M.Z)(function*(){try{yield(0,d._W)(T.Zn,h)}catch{throw new B.Z("geojson-layer","Projection not supported")}})()}}},58775:(Q,U,c)=>{c.d(U,{O3:()=>s,lG:()=>u,my:()=>r,q9:()=>E});var M=c(26584),A=c(66385),R=c(88071),B=c(36630);const F={LineString:"esriGeometryPolyline",MultiLineString:"esriGeometryPolyline",MultiPoint:"esriGeometryMultipoint",Point:"esriGeometryPoint",Polygon:"esriGeometryPolygon",MultiPolygon:"esriGeometryPolygon"};function E(e){return F[e]}function*O(e){switch(e.type){case"Feature":yield e;break;case"FeatureCollection":for(const n of e.features)n&&(yield n)}}function*S(e){if(!e)return null;switch(e.type){case"Point":yield e.coordinates;break;case"LineString":case"MultiPoint":yield*e.coordinates;break;case"MultiLineString":case"Polygon":for(const n of e.coordinates)yield*n;break;case"MultiPolygon":for(const n of e.coordinates)for(const i of n)yield*i}}function f(e){for(const n of e)if(n.length>2)return!0;return!1}function g(e){let n=0;for(let i=0;i<e.length;i++){const a=e[i],p=e[(i+1)%e.length];n+=a[0]*p[1]-p[0]*a[1]}return n<=0}function v(e){const n=e[0],i=e[e.length-1];return n[0]===i[0]&&n[1]===i[1]&&n[2]===i[2]||e.push(n),e}function P(e,n,i){switch(n.type){case"LineString":return function D(e,n,i){return _(e,n.coordinates,i),e}(e,n,i);case"MultiLineString":return function X(e,n,i){for(const a of n.coordinates)_(e,a,i);return e}(e,n,i);case"MultiPoint":return function L(e,n,i){return _(e,n.coordinates,i),e}(e,n,i);case"MultiPolygon":return function w(e,n,i){for(const a of n.coordinates){N(e,a[0],i);for(let p=1;p<a.length;p++)h(e,a[p],i)}return e}(e,n,i);case"Point":return function b(e,n,i){return o(e,n.coordinates,i),e}(e,n,i);case"Polygon":return function Y(e,n,i){const a=n.coordinates;N(e,a[0],i);for(let p=1;p<a.length;p++)h(e,a[p],i);return e}(e,n,i)}}function N(e,n,i){const a=v(n);!function y(e){return!g(e)}(a)?_(e,a,i):l(e,a,i)}function h(e,n,i){const a=v(n);!function d(e){return g(e)}(a)?_(e,a,i):l(e,a,i)}function _(e,n,i){for(const a of n)o(e,a,i);e.lengths.push(n.length)}function l(e,n,i){for(let a=n.length-1;a>=0;a--)o(e,n[a],i);e.lengths.push(n.length)}function o(e,n,i){const[a,p,m]=n;e.coords.push(a,p),i.hasZ&&e.coords.push(m||0)}function t(e){switch(typeof e){case"string":return"esriFieldTypeString";case"number":return"esriFieldTypeDouble";default:return"unknown"}}function s(e){if(!e)throw new M.Z("geojson-layer:empty","GeoJSON data is empty");if("Feature"!==e.type&&"FeatureCollection"!==e.type)throw new M.Z("geojson-layer:unsupported-geojson-object","missing or not supported GeoJSON object type",{data:e});const{crs:n}=e;if(!n)return;const i="string"==typeof n?n:"name"===n.type?n.properties.name:"EPSG"===n.type?n.properties.code:null,a=new RegExp(".*(CRS84H?|4326)$","i");if(!i||!a.test(i))throw new M.Z("geojson-layer:unsupported-crs","unsupported GeoJSON 'crs' member",{crs:n})}function r(e,n={}){const i=[],a=new Set,p=new Set;let m,j=!1,x=null,C=!1,{geometryType:Z=null}=n,H=!1;for(const W of O(e)){const{geometry:J,properties:G,id:z}=W;if((!J||(Z||(Z=E(J.type)),E(J.type)===Z))&&(j||(j=f(S(J))),C||(C=null!=z,C&&(m=typeof z,x=Object.keys(G).filter($=>G[$]===z))),C&&null!=z&&(x.length>1?x=x.filter($=>G[$]===z):1===x.length&&(x=G[x[0]]===z?x:[])),!H&&G)){let $=!0;for(const K in G){if(a.has(K))continue;const q=G[K];if(null==q){$=!1,p.add(K);continue}const k=t(q);"unknown"!==k?(p.delete(K),a.add(K),i.push({name:(0,B.q6)(K),alias:K,type:k})):p.add(K)}H=$}}const I=(0,B.q6)(1===x?.length&&x[0]||null);if(I)for(const W of i)if(W.name===I&&(0,B.H7)(W)){W.type="esriFieldTypeOID";break}return{fields:i,geometryType:Z,hasZ:j,objectIdFieldName:I,objectIdFieldType:m,unknownFields:Array.from(p)}}function u(e,n){return Array.from(function*T(e,n={}){const{geometryType:i,objectIdField:a}=n;for(const p of e){const{geometry:m,properties:j,id:x}=p;if(m&&E(m.type)!==i)continue;const C=j||{};let Z=C[a]??null;a&&null!=x&&!C[a]&&(C[a]=Z=x),yield new A.u_(m?P(new R.Z,m,n):null,C,null,Z)}}(O(e),n))}},56554:(Q,U,c)=>{c.d(U,{Dm:()=>S,Hq:()=>T,MS:()=>f,bU:()=>F});var M=c(8314),A=c(58817),R=c(87757),B=c(24837);function F(y){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===y||"esriGeometryMultipoint"===y?B.I4:"esriGeometryPolyline"===y?B.ET:B.lF}}}const E=/^[_$a-zA-Z][_$a-zA-Z0-9]*$/;let O=1;function S(y,d){if((0,M.Z)("esri-csp-restrictions"))return()=>({[d]:null,...y});try{let g=`this.${d} = null;`;for(const P in y)g+=`this${E.test(P)?`.${P}`:`["${P}"]`} = ${JSON.stringify(y[P])};`;const v=new Function(`\n      return class AttributesClass$${O++} {\n        constructor() {\n          ${g};\n        }\n      }\n    `)();return()=>new v}catch{return()=>({[d]:null,...y})}}function T(y={}){return[{name:"New Feature",description:"",prototype:{attributes:(0,A.d9)(y)}}]}function f(y,d){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:y},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:d,supportsDelete:d,supportsEditing:d,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:d,supportsExceedsLimitStatistics:!0},query:R.g,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},editing:{supportsGeometryUpdate:d,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1}}}}}]);