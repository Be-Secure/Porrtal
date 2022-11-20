"use strict";(self.webpackChunka_porrtal_io_app=self.webpackChunka_porrtal_io_app||[]).push([[6354],{36592:(k,W,d)=>{d.d(W,{Q:()=>_});var I=d(85931),v=d(62208),Z=d(77029),j=d(14259);class _{constructor(i=9,n){this.compareMinX=H,this.compareMinY=E,this._toBBox=o=>o,this._maxEntries=Math.max(4,i||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),n&&("function"==typeof n?this._toBBox=n:this._initFormat(n)),this.clear()}destroy(){this.clear(),L.prune(),X.prune(),O.prune(),z.prune()}all(i){this._all(this.data,i)}search(i,n){let o=this.data;const u=this._toBBox;if(Y(i,o))for(L.clear();o;){for(let f=0,g=o.children.length;f<g;f++){const a=o.children[f],F=o.leaf?u(a):a;Y(i,F)&&(o.leaf?n(a):w(i,F)?this._all(a,n):L.push(a))}o=L.pop()}}collides(i){let n=this.data;const o=this._toBBox;if(!Y(i,n))return!1;for(L.clear();n;){for(let u=0,f=n.children.length;u<f;u++){const g=n.children[u],a=n.leaf?o(g):g;if(Y(i,a)){if(n.leaf||w(i,a))return!0;L.push(g)}}n=L.pop()}return!1}load(i){if(!i.length)return this;if(i.length<this._minEntries){for(let o=0,u=i.length;o<u;o++)this.insert(i[o]);return this}let n=this._build(i.slice(0,i.length),0,i.length-1,0);if(this.data.children.length)if(this.data.height===n.height)this._splitRoot(this.data,n);else{if(this.data.height<n.height){const o=this.data;this.data=n,n=o}this._insert(n,this.data.height-n.height-1,!0)}else this.data=n;return this}insert(i){return i&&this._insert(i,this.data.height-1),this}clear(){return this.data=new G([]),this}remove(i){if(!i)return this;let n,o=this.data,u=null,f=0,g=!1;const a=this._toBBox(i);for(O.clear(),z.clear();o||O.length>0;){if(o||(o=(0,v.j0)(O.pop()),u=O.data[O.length-1],f=z.pop()??0,g=!0),o.leaf&&(n=(0,I.cq)(o.children,i,o.children.length,o.indexHint),-1!==n))return o.children.splice(n,1),O.push(o),this._condense(O),this;g||o.leaf||!w(o,a)?u?(f++,o=u.children[f],g=!1):o=null:(O.push(o),z.push(f),f=0,u=o,o=o.children[0])}return this}toJSON(){return this.data}fromJSON(i){return this.data=i,this}_all(i,n){let o=i;for(X.clear();o;){if(!0===o.leaf)for(const u of o.children)n(u);else X.pushArray(o.children);o=X.pop()??null}}_build(i,n,o,u){const f=o-n+1;let g=this._maxEntries;if(f<=g){const m=new G(i.slice(n,o+1));return y(m,this._toBBox),m}u||(u=Math.ceil(Math.log(f)/Math.log(g)),g=Math.ceil(f/g**(u-1)));const a=new $([]);a.height=u;const F=Math.ceil(f/g),b=F*Math.ceil(Math.sqrt(g));J(i,n,o,b,this.compareMinX);for(let m=n;m<=o;m+=b){const P=Math.min(m+b-1,o);J(i,m,P,F,this.compareMinY);for(let N=m;N<=P;N+=F){const se=Math.min(N+F-1,P);a.children.push(this._build(i,N,se,u-1))}}return y(a,this._toBBox),a}_chooseSubtree(i,n,o,u){for(;u.push(n),!0!==n.leaf&&u.length-1!==o;){let f,g=1/0,a=1/0;for(let F=0,b=n.children.length;F<b;F++){const m=n.children[F],P=S(m),N=C(i,m)-P;N<a?(a=N,g=P<g?P:g,f=m):N===a&&P<g&&(g=P,f=m)}n=f||n.children[0]}return n}_insert(i,n,o){const f=o?i:(0,this._toBBox)(i);O.clear();const g=this._chooseSubtree(f,this.data,n,O);for(g.children.push(i),T(g,f);n>=0&&O.data[n].children.length>this._maxEntries;)this._split(O,n),n--;this._adjustParentBBoxes(f,O,n)}_split(i,n){const o=i.data[n],u=o.children.length,f=this._minEntries;this._chooseSplitAxis(o,f,u);const g=this._chooseSplitIndex(o,f,u);if(!g)return void console.log("  Error: assertion failed at PooledRBush._split: no valid split index");const a=o.children.splice(g,o.children.length-g),F=o.leaf?new G(a):new $(a);F.height=o.height,y(o,this._toBBox),y(F,this._toBBox),n?i.data[n-1].children.push(F):this._splitRoot(o,F)}_splitRoot(i,n){this.data=new $([i,n]),this.data.height=i.height+1,y(this.data,this._toBBox)}_chooseSplitIndex(i,n,o){let u,f,g;u=f=1/0;for(let a=n;a<=o-n;a++){const F=B(i,0,a,this._toBBox),b=B(i,a,o,this._toBBox),m=A(F,b),P=S(F)+S(b);m<u?(u=m,g=a,f=P<f?P:f):m===u&&P<f&&(f=P,g=a)}return g}_chooseSplitAxis(i,n,o){const u=i.leaf?this.compareMinX:H,f=i.leaf?this.compareMinY:E;this._allDistMargin(i,n,o,u)<this._allDistMargin(i,n,o,f)&&i.children.sort(u)}_allDistMargin(i,n,o,u){i.children.sort(u);const f=this._toBBox,g=B(i,0,n,f),a=B(i,o-n,o,f);let F=c(g)+c(a);for(let b=n;b<o-n;b++){const m=i.children[b];T(g,i.leaf?f(m):m),F+=c(g)}for(let b=o-n-1;b>=n;b--){const m=i.children[b];T(a,i.leaf?f(m):m),F+=c(a)}return F}_adjustParentBBoxes(i,n,o){for(let u=o;u>=0;u--)T(n.data[u],i)}_condense(i){for(let n=i.length-1;n>=0;n--){const o=i.data[n];if(0===o.children.length)if(n>0){const u=i.data[n-1],f=u.children;f.splice((0,I.cq)(f,o,f.length,u.indexHint),1)}else this.clear();else y(o,this._toBBox)}}_initFormat(i){const n=["return a"," - b",";"];this.compareMinX=new Function("a","b",n.join(i[0])),this.compareMinY=new Function("a","b",n.join(i[1])),this._toBBox=new Function("a","return {minX: a"+i[0]+", minY: a"+i[1]+", maxX: a"+i[2]+", maxY: a"+i[3]+"};")}}function y(l,i){B(l,0,l.children.length,i,l)}function B(l,i,n,o,u){u||(u=new G([])),u.minX=1/0,u.minY=1/0,u.maxX=-1/0,u.maxY=-1/0;for(let f,g=i;g<n;g++)f=l.children[g],T(u,l.leaf?o(f):f);return u}function T(l,i){l.minX=Math.min(l.minX,i.minX),l.minY=Math.min(l.minY,i.minY),l.maxX=Math.max(l.maxX,i.maxX),l.maxY=Math.max(l.maxY,i.maxY)}function H(l,i){return l.minX-i.minX}function E(l,i){return l.minY-i.minY}function S(l){return(l.maxX-l.minX)*(l.maxY-l.minY)}function c(l){return l.maxX-l.minX+(l.maxY-l.minY)}function C(l,i){return(Math.max(i.maxX,l.maxX)-Math.min(i.minX,l.minX))*(Math.max(i.maxY,l.maxY)-Math.min(i.minY,l.minY))}function A(l,i){const n=Math.max(l.minX,i.minX),o=Math.max(l.minY,i.minY),u=Math.min(l.maxX,i.maxX),f=Math.min(l.maxY,i.maxY);return Math.max(0,u-n)*Math.max(0,f-o)}function w(l,i){return l.minX<=i.minX&&l.minY<=i.minY&&i.maxX<=l.maxX&&i.maxY<=l.maxY}function Y(l,i){return i.minX<=l.maxX&&i.minY<=l.maxY&&i.maxX>=l.minX&&i.maxY>=l.minY}function J(l,i,n,o,u){const f=[i,n];for(;f.length;){const g=(0,v.j0)(f.pop()),a=(0,v.j0)(f.pop());if(g-a<=o)continue;const F=a+Math.ceil((g-a)/o/2)*o;(0,j.q)(l,F,a,g,u),f.push(a,F,F,g)}}const L=new Z.Z,X=new Z.Z,O=new Z.Z,z=new Z.Z({deallocator:void 0});class te{constructor(){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0}}class q extends te{constructor(){super(...arguments),this.height=1,this.indexHint=new I.SO}}class G extends q{constructor(i){super(),this.children=i,this.leaf=!0}}class $ extends q{constructor(i){super(),this.children=i,this.leaf=!1}}},61256:(k,W,d)=>{d.d(W,{H:()=>T});var I=d(8314),v=d(36592),Z=d(65401);const _={minX:0,minY:0,maxX:0,maxY:0};class T{constructor(){this._indexInvalid=!1,this._boundsToLoad=[],this._boundsById=new Map,this._idByBounds=new Map,this._index=new v.Q(9,(0,I.Z)("esri-csp-restrictions")?E=>({minX:E[0],minY:E[1],maxX:E[2],maxY:E[3]}):["[0]","[1]","[2]","[3]"]),this._loadIndex=()=>{if(this._indexInvalid){const E=new Array(this._idByBounds.size);let S=0;this._idByBounds.forEach((c,C)=>{E[S++]=C}),this._indexInvalid=!1,this._index.clear(),this._index.load(E)}else this._boundsToLoad.length&&(this._index.load(this._boundsToLoad.filter(E=>this._idByBounds.has(E))),this._boundsToLoad.length=0)}}get fullBounds(){if(!this._boundsById.size)return null;const E=(0,Z.cS)();for(const S of this._boundsById.values())S&&(E[0]=Math.min(S[0],E[0]),E[1]=Math.min(S[1],E[1]),E[2]=Math.max(S[2],E[2]),E[3]=Math.max(S[3],E[3]));return E}get valid(){return!this._indexInvalid}clear(){this._indexInvalid=!1,this._boundsToLoad.length=0,this._boundsById.clear(),this._idByBounds.clear(),this._index.clear()}delete(E){const S=this._boundsById.get(E);this._boundsById.delete(E),S&&(this._idByBounds.delete(S),this._indexInvalid||this._index.remove(S))}forEachInBounds(E,S){this._loadIndex(),function B(H,E,S){(function y(H){_.minX=H[0],_.minY=H[1],_.maxX=H[2],_.maxY=H[3]})(E),H.search(_,S)}(this._index,E,c=>S(this._idByBounds.get(c)))}get(E){return this._boundsById.get(E)}has(E){return this._boundsById.has(E)}invalidateIndex(){this._indexInvalid||(this._indexInvalid=!0,this._boundsToLoad.length=0)}set(E,S){if(!this._indexInvalid){const c=this._boundsById.get(E);c&&(this._index.remove(c),this._idByBounds.delete(c))}this._boundsById.set(E,S),S&&(this._idByBounds.set(S,E),this._indexInvalid||(this._boundsToLoad.push(S),this._boundsToLoad.length>5e4&&this._loadIndex()))}}},3579:(k,W,d)=>{d.d(W,{Z:()=>E});var I=d(26584),v=d(61885),Z=d(63290),j=d(62208),_=d(5548),y=d(65401),B=d(82054),T=d(61256),H=d(92794);class E{constructor(c){this.geometryInfo=c,this._boundsStore=new T.H,this._featuresById=new Map,this._markedIds=new Set,this.events=new v.Z,this.featureAdapter=H.n}get geometryType(){return this.geometryInfo.geometryType}get hasM(){return this.geometryInfo.hasM}get hasZ(){return this.geometryInfo.hasZ}get numFeatures(){return this._featuresById.size}get fullBounds(){return this._boundsStore.fullBounds}get storeStatistics(){let c=0;return this._featuresById.forEach(C=>{(0,j.pC)(C.geometry)&&C.geometry.coords&&(c+=C.geometry.coords.length)}),{featureCount:this._featuresById.size,vertexCount:c/(this.hasZ?this.hasM?4:3:this.hasM?3:2)}}add(c){this._add(c),this._emitChanged()}addMany(c){for(const C of c)this._add(C);this._emitChanged()}clear(){this._featuresById.clear(),this._boundsStore.clear(),this._emitChanged()}removeById(c){const C=this._featuresById.get(c);return C?(this._remove(C),this._emitChanged(),C):null}removeManyById(c){this._boundsStore.invalidateIndex();for(const C of c){const A=this._featuresById.get(C);A&&this._remove(A)}this._emitChanged()}forEachBounds(c,C,A){for(const w of c){const Y=this._boundsStore.get(w.objectId);Y&&C((0,_.JR)(A,Y))}}getFeature(c){return this._featuresById.get(c)}has(c){return this._featuresById.has(c)}toArray(){return Array.from(this._featuresById.values())}forEach(c){this._featuresById.forEach(C=>c(C))}forEachInBounds(c,C){this._boundsStore.forEachInBounds(c,A=>{C(this._featuresById.get(A))})}startMarkingUsedFeatures(){this._boundsStore.invalidateIndex(),this._markedIds.clear()}sweep(){let c=!1;this._featuresById.forEach((C,A)=>{this._markedIds.has(A)||(c=!0,this._remove(C))}),this._markedIds.clear(),c&&this._emitChanged()}_emitChanged(){this.events.emit("changed",void 0)}_add(c){if(!c)return;const C=c.objectId;if(null==C)return void Z.Z.getLogger("esri.layers.graphics.data.FeatureStore").error(new I.Z("featurestore:invalid-feature","feature id is missing",{feature:c}));const A=this._featuresById.get(C);let w;if(this._markedIds.add(C),A?(c.displayId=A.displayId,w=this._boundsStore.get(C),this._boundsStore.delete(C)):(0,j.pC)(this.onFeatureAdd)&&this.onFeatureAdd(c),(0,j.Wi)(c.geometry)||!c.geometry.coords||!c.geometry.coords.length)return this._boundsStore.set(C,null),void this._featuresById.set(C,c);w=(0,B.$)((0,j.pC)(w)?w:(0,y.Ue)(),c.geometry,this.geometryInfo.hasZ,this.geometryInfo.hasM),(0,j.pC)(w)&&this._boundsStore.set(C,w),this._featuresById.set(C,c)}_remove(c){return(0,j.pC)(this.onFeatureRemove)&&this.onFeatureRemove(c),this._markedIds.delete(c.objectId),this._boundsStore.delete(c.objectId),this._featuresById.delete(c.objectId),c}}},92794:(k,W,d)=>{d.d(W,{n:()=>_});var I=d(62208),v=d(77044),Z=d(66385),j=d(88071);const _={getObjectId:y=>y.objectId,getAttributes:y=>y.attributes,getAttribute:(y,B)=>y.attributes[B],cloneWithGeometry:(y,B)=>new Z.u_(B,y.attributes,null,y.objectId),getGeometry:y=>y.geometry,getCentroid:(y,B)=>((0,I.Wi)(y.centroid)&&(y.centroid=(0,v.Y)(new j.Z,y.geometry,B.hasZ,B.hasM)),y.centroid)}},86354:(k,W,d)=>{d.r(W),d.d(W,{FeatureServiceSnappingSourceWorker:()=>V,default:()=>_e});var I=d(15861),v=d(17626),Z=d(61885),j=d(72392),_=d(62208),y=d(10699),B=d(32917),T=d(77712),H=d(85931),c=(d(8314),d(90912),d(76898)),C=d(17760),A=d(65234),w=d(3579),Y=d(58175),J=d(2584),L=d(62708),X=d(84952),O=d(14517);let z=class extends O.Z{constructor(){super(...arguments),this.updating=!1,this.pending=[]}push(e,t){this.pending.push({promise:e,callback:t}),1===this.pending.length&&this._process()}_process(){if(!this.pending.length)return void(this.updating=!1);this.updating=!0;const e=this.pending[0];e.promise.then(t=>e.callback(t)).catch(()=>{}).then(()=>{this.pending.shift(),this._process()})}};(0,v._)([(0,T.Cb)()],z.prototype,"updating",void 0),z=(0,v._)([(0,c.j)("esri.core.AsyncSequence")],z);var a,e,te=d(80542),q=d(54024),G=d(63290),$=d(2004),l=d(65401),i=d(82054),n=d(38305),o=d(98558),u=d(20477),f=d(59213);class g{constructor(t,s){this.data=t,this.resolution=s,this.state={type:a.CREATED},this.alive=!0}process(t){switch(this.state.type){case a.CREATED:return this.state=this._gotoFetchCount(this.state,t),this.state.task.promise.then(t.resume,t.resume);case a.FETCH_COUNT:break;case a.FETCHED_COUNT:return this.state=this._gotoFetchFeatures(this.state,t),this.state.task.promise.then(t.resume,t.resume);case a.FETCH_FEATURES:break;case a.FETCHED_FEATURES:this.state=this._goToDone(this.state,t)}return null}get debugInfo(){return{data:this.data,featureCount:this.featureCount,state:this.stateToString}}get featureCount(){switch(this.state.type){case a.CREATED:case a.FETCH_COUNT:return 0;case a.FETCHED_COUNT:return this.state.featureCount;case a.FETCH_FEATURES:return this.state.previous.featureCount;case a.FETCHED_FEATURES:return this.state.features.length;case a.DONE:return this.state.previous.features.length}}get stateToString(){switch(this.state.type){case a.CREATED:return"created";case a.FETCH_COUNT:return"fetch-count";case a.FETCHED_COUNT:return"fetched-count";case a.FETCH_FEATURES:return"fetch-features";case a.FETCHED_FEATURES:return"fetched-features";case a.DONE:return"done"}}_gotoFetchCount(t,s){var r=this;return{type:a.FETCH_COUNT,previous:t,task:(0,y.vr)(function(){var h=(0,I.Z)(function*(p){const x=yield(0,f.mt)(s.fetchCount(r,p));r.state.type===a.FETCH_COUNT&&(r.state=r._gotoFetchedCount(r.state,x.ok?x.value:1/0))});return function(p){return h.apply(this,arguments)}}())}}_gotoFetchedCount(t,s){return{type:a.FETCHED_COUNT,featureCount:s,previous:t}}_gotoFetchFeatures(t,s){var r=this;return{type:a.FETCH_FEATURES,previous:t,task:(0,y.vr)(function(){var h=(0,I.Z)(function*(p){const x=yield(0,f.mt)(s.fetchFeatures(r,t.featureCount,p));r.state.type===a.FETCH_FEATURES&&(r.state=r._gotoFetchedFeatures(r.state,x.ok?x.value:[]))});return function(p){return h.apply(this,arguments)}}())}}_gotoFetchedFeatures(t,s){return{type:a.FETCHED_FEATURES,previous:t,features:s}}_goToDone(t,s){return s.finish(this,t.features),{type:a.DONE,previous:t}}reset(){const t=this.state;switch(this.state={type:a.CREATED},t.type){case a.CREATED:case a.FETCHED_COUNT:case a.FETCHED_FEATURES:case a.DONE:break;case a.FETCH_COUNT:case a.FETCH_FEATURES:t.task.abort()}}intersects(t){return!(!(0,_.Wi)(t)&&this.data.extent)||((0,l.oJ)(t,F),(0,l.kK)(this.data.extent,F))}}(e=a||(a={}))[e.CREATED=0]="CREATED",e[e.FETCH_COUNT=1]="FETCH_COUNT",e[e.FETCHED_COUNT=2]="FETCHED_COUNT",e[e.FETCH_FEATURES=3]="FETCH_FEATURES",e[e.FETCHED_FEATURES=4]="FETCHED_FEATURES",e[e.DONE=5]="DONE";const F=(0,l.Ue)(),b=G.Z.getLogger("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTiledFetcher");let m=class extends te.r{constructor(e){super(e),this.tilesOfInterest=[],this.availability=0,this.pendingTiles=new Map,this.pendingEdits=new z,this.pendingEditsAbortController=new AbortController}get minimumVerticesPerFeature(){switch(this.store?.featureStore.geometryType){case"esriGeometryPoint":case"esriGeometryMultipoint":return 1;case"esriGeometryPolygon":return 4;case"esriGeometryPolyline":return 2}}set filter(e){const t=this._get("filter"),s=this._filterProperties(e);JSON.stringify(t)!==JSON.stringify(s)&&this._set("filter",s)}set customParameters(e){const t=this._get("customParameters");JSON.stringify(t)!==JSON.stringify(e)&&this._set("customParameters",e)}get configuration(){return{filter:this.filter,customParameters:this.customParameters,tileInfo:this.tileInfo,tileSize:this.tileSize}}set tileInfo(e){const t=this._get("tileInfo");t!==e&&((0,_.pC)(e)&&(0,_.pC)(t)&&JSON.stringify(e)===JSON.stringify(t)||(this._set("tileInfo",e),this.store.tileInfo=e))}set tileSize(e){this._get("tileSize")!==e&&this._set("tileSize",e)}get updating(){return this.updatingHandles.updating||this.pendingEdits.updating}initialize(){this._initializeFetchExtent(),this.updatingHandles.add(()=>this.configuration,()=>this.refresh()),this.updatingHandles.add(()=>this.tilesOfInterest,(e,t)=>{(0,H.fS)(e,t,({id:s},{id:r})=>s===r)||this._process()},B.Z_)}destroy(){this.pendingTiles.forEach(e=>this._deletePendingTile(e)),this.pendingTiles.clear(),this.store.destroy(),this.tilesOfInterest.length=0,this.pendingEditsAbortController.abort(),this.pendingEditsAbortController=null}refresh(){this.store.refresh(),this.pendingTiles.forEach(e=>this._deletePendingTile(e)),this._process()}applyEdits(e){var t=this;this.pendingEdits.push(e,function(){var s=(0,I.Z)(function*(r){if(0===r.addedFeatures.length&&0===r.updatedFeatures.length&&0===r.deletedFeatures.length)return;for(const[,p]of t.pendingTiles)p.reset();const h={...r,deletedFeatures:r.deletedFeatures.map(({objectId:p,globalId:x})=>p&&-1!==p?p:t._lookupObjectIdByGlobalId(x))};yield t.updatingHandles.addPromise(t.store.processEdits(h,(p,x)=>t._queryFeaturesById(p,x),t.pendingEditsAbortController.signal)),t._processPendingTiles()});return function(r){return s.apply(this,arguments)}}())}_initializeFetchExtent(){var e=this;if(!this.capabilities.query.supportsExtent||!(0,n.M8)(this.url))return;const t=(0,y.vr)(function(){var s=(0,I.Z)(function*(r){try{const h=yield(0,u.executeQueryForExtent)(e.url,new X.Z({where:"1=1",outSpatialReference:e.spatialReference,cacheHint:!!e.capabilities.query.supportsCacheHint||void 0}),{query:e.configuration.customParameters,signal:r});e.store.extent=$.Z.fromJSON(h.data?.extent)}catch(h){(0,y.r9)(h),b.warn("Failed to fetch data extent",h)}});return function(r){return s.apply(this,arguments)}}());this.updatingHandles.addPromise(t.promise.then(()=>this._process())),this.handles.add((0,q.kB)(()=>t.abort()))}get debugInfo(){return{numberOfFeatures:this.store.featureStore.numFeatures,tilesOfInterest:this.tilesOfInterest,pendingTiles:Array.from(this.pendingTiles.values()).map(e=>e.debugInfo),storedTiles:this.store.debugInfo}}_process(){this._markTilesNotAlive(),this._createPendingTiles(),this._deletePendingTiles(),this._processPendingTiles()}_markTilesNotAlive(){for(const[,e]of this.pendingTiles)e.alive=!1}_createPendingTiles(){const e=this._collectMissingTilesInfo();if(this._setAvailability((0,_.Wi)(e)?1:e.coveredArea/e.fullArea),!(0,_.Wi)(e))for(const{data:t,resolution:s}of e.missingTiles){const r=this.pendingTiles.get(t.id);r?(r.resolution=s,r.alive=!0):this._createPendingTile(t,s)}}_collectMissingTilesInfo(){let e=null;for(let t=this.tilesOfInterest.length-1;t>=0;t--){const r=this.store.process(this.tilesOfInterest[t],(h,p)=>this._verifyTileComplexity(h,p));(0,_.Wi)(e)?e=r:e.prepend(r)}return e}_deletePendingTiles(){for(const[,e]of this.pendingTiles)e.alive||this._deletePendingTile(e)}_processPendingTiles(){const e={fetchCount:(t,s)=>this._fetchCount(t,s),fetchFeatures:(t,s,r)=>this._fetchFeatures(t,s,r),finish:(t,s)=>this._finishPendingTile(t,s),resume:()=>this._processPendingTiles()};if(this._ensureFetchAllCounts(e))for(const[,t]of this.pendingTiles)this._verifyTileComplexity(this.store.getFeatureCount(t.data),t.resolution)&&this.updatingHandles.addPromise(t.process(e))}_verifyTileComplexity(e,t){return this._verifyVertexComplexity(e)&&this._verifyFeatureDensity(e,t)}_verifyVertexComplexity(e){return e*this.minimumVerticesPerFeature<se}_verifyFeatureDensity(e,t){if((0,_.Wi)(this.tileInfo))return!1;const s=this.tileSize*t;return e*(ne/(s*s))<oe}_ensureFetchAllCounts(e){let t=!0;for(const[,s]of this.pendingTiles)s.state.type<a.FETCHED_COUNT&&this.updatingHandles.addPromise(s.process(e)),s.state.type<=a.FETCH_COUNT&&(t=!1);return t}_finishPendingTile(e,t){this.store.add(e.data,t),this._deletePendingTile(e),this._updateAvailability()}_updateAvailability(){const e=this._collectMissingTilesInfo();this._setAvailability((0,_.Wi)(e)?1:e.coveredArea/e.fullArea)}_setAvailability(e){this._set("availability",e)}_createPendingTile(e,t){const s=new g(e,t);return this.pendingTiles.set(e.id,s),s}_deletePendingTile(e){e.reset(),this.pendingTiles.delete(e.data.id)}_fetchCount(e,t){var s=this;return(0,I.Z)(function*(){return s.store.fetchCount(e.data,s.url,s._createCountQuery(e),{query:s.customParameters,timeout:N,signal:t})})()}_fetchFeatures(e,t,s){var r=this;return(0,I.Z)(function*(){let h,p=0,x=0,R=t;for(;;){const M=r._createFeaturesQuery(e),D=r._setPagingParameters(M,p,R),{features:U,exceededTransferLimit:ge}=yield r._queryFeatures(M,s);if(D&&(p+=(0,_.Wg)(M.num)),x+=U.length,h=h?h.concat(U):U,R=t-x,!D||!ge||R<=0)return h}})()}_filterProperties(e){return(0,_.Wi)(e)?{where:"1=1",gdbVersion:void 0,timeExtent:void 0}:{where:e.where||"1=1",timeExtent:e.timeExtent,gdbVersion:e.gdbVersion}}_lookupObjectIdByGlobalId(e){const t=this.globalIdField,s=this.objectIdField;if((0,_.Wi)(t))throw new Error("Expected globalIdField to be defined");let r=null;if(this.store.featureStore.forEach(h=>{e===h.attributes[t]&&(r=h.objectId??h.attributes[s])}),(0,_.Wi)(r))throw new Error(`Expected to find a feature with globalId ${e}`);return r}_queryFeaturesById(e,t){const s=this._createFeaturesQuery(null);return s.objectIds=e,this._queryFeatures(s,t)}_queryFeatures(e,t){return this.capabilities.query.supportsFormatPBF?this._queryFeaturesPBF(e,t):this._queryFeaturesJSON(e,t)}_queryFeaturesPBF(e,t){var s=this;return(0,I.Z)(function*(){const{sourceSpatialReference:r}=s,{data:h}=yield(0,u.executeQueryPBF)(s.url,e,new o.J({sourceSpatialReference:r}),{query:s.configuration.customParameters,timeout:N,signal:t});return(0,i.lM)(h)})()}_queryFeaturesJSON(e,t){var s=this;return(0,I.Z)(function*(){const{sourceSpatialReference:r}=s,{data:h}=yield(0,u.executeQuery)(s.url,e,r,{query:s.configuration.customParameters,timeout:N,signal:t});return(0,i.h_)(h,s.objectIdField)})()}_createCountQuery(e){const t=this._createBaseQuery(e);return this.capabilities.query.supportsCacheHint&&(t.cacheHint=!0),t}_createFeaturesQuery(e){const t=this._createBaseQuery(e);return t.outFields=this.globalIdField?[this.globalIdField,this.objectIdField]:[this.objectIdField],t.returnGeometry=!0,(0,_.pC)(e)&&(this.capabilities.query.supportsResultType?t.resultType="tile":this.capabilities.query.supportsCacheHint&&(t.cacheHint=!0)),t}_createBaseQuery(e){const t=new X.Z({returnZ:!1,returnM:!1,geometry:(0,_.pC)(this.tileInfo)&&(0,_.pC)(e)?(0,l.HH)(e.data.extent,this.tileInfo.spatialReference):void 0}),s=this.configuration.filter;return(0,_.pC)(s)&&(t.where=s.where,t.gdbVersion=s.gdbVersion,t.timeExtent=s.timeExtent),t.outSpatialReference=this.spatialReference,t}_setPagingParameters(e,t,s){if(!this.capabilities.query.supportsPagination)return!1;const{supportsMaxRecordCountFactor:r,supportsCacheHint:h,tileMaxRecordCount:p,maxRecordCount:x,supportsResultType:R}=this.capabilities.query,M=r?X.Z.MAX_MAX_RECORD_COUNT_FACTOR:1,D=M*((R||h)&&p?p:x||P);return e.start=t,r?(e.maxRecordCountFactor=Math.min(M,Math.ceil(s/D)),e.num=Math.min(s,e.maxRecordCountFactor*D)):e.num=Math.min(s,D),!0}};(0,v._)([(0,T.Cb)({constructOnly:!0})],m.prototype,"url",void 0),(0,v._)([(0,T.Cb)({constructOnly:!0})],m.prototype,"objectIdField",void 0),(0,v._)([(0,T.Cb)({constructOnly:!0})],m.prototype,"globalIdField",void 0),(0,v._)([(0,T.Cb)({constructOnly:!0})],m.prototype,"capabilities",void 0),(0,v._)([(0,T.Cb)({constructOnly:!0})],m.prototype,"sourceSpatialReference",void 0),(0,v._)([(0,T.Cb)({constructOnly:!0})],m.prototype,"spatialReference",void 0),(0,v._)([(0,T.Cb)({constructOnly:!0})],m.prototype,"store",void 0),(0,v._)([(0,T.Cb)({readOnly:!0})],m.prototype,"minimumVerticesPerFeature",null),(0,v._)([(0,T.Cb)()],m.prototype,"filter",null),(0,v._)([(0,T.Cb)()],m.prototype,"customParameters",null),(0,v._)([(0,T.Cb)({readOnly:!0})],m.prototype,"configuration",null),(0,v._)([(0,T.Cb)()],m.prototype,"tileInfo",null),(0,v._)([(0,T.Cb)()],m.prototype,"tileSize",null),(0,v._)([(0,T.Cb)()],m.prototype,"tilesOfInterest",void 0),(0,v._)([(0,T.Cb)({readOnly:!0})],m.prototype,"updating",null),(0,v._)([(0,T.Cb)({readOnly:!0})],m.prototype,"availability",void 0),m=(0,v._)([(0,c.j)("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTiledFetcher")],m);const P=2e3,N=6e5,se=1e6,ne=25,oe=1;var ee=d(27306),ae=d(61256);class le{constructor(){this._store=new Map,this._byteSize=0}set(t,s){this.delete(t),this._store.set(t,s),this._byteSize+=s.byteSize}delete(t){const s=this._store.get(t);return!!this._store.delete(t)&&(this._byteSize-=s.byteSize,!0)}get(t){return this._used(t),this._store.get(t)}has(t){return this._used(t),this._store.has(t)}clear(){this._store.clear()}applyByteSizeLimit(t,s){for(const[r,h]of this._store){if(this._byteSize<=t)break;this.delete(r),s(h)}}values(){return this._store.values()}[Symbol.iterator](){return this._store[Symbol.iterator]()}_used(t){const s=this._store.get(t);s&&(this._store.delete(t),this._store.set(t,s))}}let Q=class extends O.Z{constructor(e){super(e),this.tileInfo=null,this.extent=null,this.maximumByteSize=10*ee.Y8.MEGABYTES,this.tileBounds=new ae.H,this.tiles=new le,this.refCounts=new Map,this.tileFeatureCounts=new Map,this.tmpBoundingRect=(0,l.Ue)()}add(e,t){const s=[];for(const r of t)this._referenceFeature(r.objectId)===K.ADDED&&s.push(r);this._addTileStorage(e,new Set(t.map(({objectId:r})=>r)),function he(e){return e.reduce((t,s)=>t+function ue(e){return 32+function de(e){if((0,_.Wi)(e))return 0;const t=(0,ee.do)(e.lengths,4);return 32+(0,ee.do)(e.coords,8)+t}(e.geometry)+(0,ee.f2)(e.attributes)}(s),0)}(t)),this.featureStore.addMany(s),this.tiles.applyByteSizeLimit(this.maximumByteSize,r=>this._removeTileStorage(r))}destroy(){this.clear(),this.tileFeatureCounts.clear()}clear(){this.featureStore.clear(),this.tileBounds.clear(),this.tiles.clear(),this.refCounts.clear()}refresh(){this.clear(),this.tileFeatureCounts.clear()}processEdits(e,t,s){return this._processEditsDelete(e.deletedFeatures.concat(e.updatedFeatures)),this._processEditsRefetch(e.addedFeatures.concat(e.updatedFeatures),t,s)}_addTileStorage(e,t,s){this.tiles.set(e.id,new ce(e,t,s)),this.tileBounds.set(e.id,e.extent),this.tileFeatureCounts.set(e.id,t.size)}_remove({id:e}){const t=this.tiles.get(e);t&&this._removeTileStorage(t)}_removeTileStorage(e){const t=[];for(const r of e.objectIds)this._unreferenceFeature(r)===K.REMOVED&&t.push(r);this.featureStore.removeManyById(t);const s=e.data.id;this.tiles.delete(s),this.tileBounds.delete(s)}_processEditsDelete(e){this.featureStore.removeManyById(e);for(const[,t]of this.tiles){for(const s of e)t.objectIds.delete(s);this.tileFeatureCounts.set(t.data.id,t.objectIds.size)}for(const t of e)this.refCounts.delete(t)}_processEditsRefetch(e,t,s){var r=this;return(0,I.Z)(function*(){const h=(yield t(e,s)).features,{hasZ:p,hasM:x}=r.featureStore;for(const R of h){const M=(0,i.$)(r.tmpBoundingRect,R.geometry,p,x);(0,_.Wi)(M)||r.tileBounds.forEachInBounds(M,D=>{const U=r.tiles.get(D);r.featureStore.add(R),U.objectIds.has(R.objectId)||(U.objectIds.add(R.objectId),r._referenceFeature(R.objectId),r.tileFeatureCounts.set(U.data.id,U.objectIds.size))})}})()}process(e,t=(()=>!0)){if((0,_.Wi)(this.tileInfo)||!e.extent||(0,_.pC)(this.extent)&&!(0,l.kK)((0,l.oJ)(this.extent,this.tmpBoundingRect),e.extent))return new ie(e);if(this.tiles.has(e.id))return new ie(e);const s=this._createTileTree(e,this.tileInfo);return this._simplify(s,t,null,0,1),this._collectMissingTiles(e,s,this.tileInfo)}get debugInfo(){return Array.from(this.tiles.values()).map(({data:e})=>({data:e,featureCount:this.tileFeatureCounts.get(e.id)||0}))}getFeatureCount(e){return this.tileFeatureCounts.get(e.id)??0}fetchCount(e,t,s,r){var h=this;return(0,I.Z)(function*(){const p=h.tileFeatureCounts.get(e.id);if(null!=p)return p;const x=yield(0,u.executeQueryForCount)(t,s,r);return h.tileFeatureCounts.set(e.id,x.data.count),x.data.count})()}_createTileTree(e,t){const s=new re(e.level,e.row,e.col);return t.updateTileInfo(s,J.Z.ExtrapolateOptions.POWER_OF_TWO),this.tileBounds.forEachInBounds(e.extent,r=>{const h=this.tiles.get(r).data;this._tilesAreRelated(e,h)&&this._populateChildren(s,h,t,this.tileFeatureCounts.get(h.id)||0)}),s}_tilesAreRelated(e,t){if(!e||!t)return!1;if(e.level===t.level)return e.row===t.row&&e.col===t.col;const s=e.level<t.level,r=s?e:t,h=s?t:e,p=1<<h.level-r.level;return Math.floor(h.row/p)===r.row&&Math.floor(h.col/p)===r.col}_populateChildren(e,t,s,r){const h=t.level-e.level-1;if(h<0)return void(e.isLeaf=!0);const p=t.row>>h,x=t.col>>h,M=x-(e.col<<1)+(p-(e.row<<1)<<1),D=e.children[M];if((0,_.pC)(D))this._populateChildren(D,t,s,r);else{const U=new re(e.level+1,p,x);s.updateTileInfo(U,J.Z.ExtrapolateOptions.POWER_OF_TWO),e.children[M]=U,this._populateChildren(U,t,s,r)}}_simplify(e,t,s,r,h){const p=h*h;if(e.isLeaf)return t(this.getFeatureCount(e),h)?0:(this._remove(e),(0,_.pC)(s)&&(s.children[r]=null),p);const x=h/2,R=x*x;let M=0;for(let D=0;D<e.children.length;D++){const U=e.children[D];M+=(0,_.pC)(U)?this._simplify(U,t,e,D,x):R}return 0===M?this._mergeChildren(e):1-M/p<pe&&(this._purge(e),(0,_.pC)(s)&&(s.children[r]=null),M=p),M}_mergeChildren(e){const t=new Set;let s=0;this._forEachLeaf(e,r=>{const h=this.tiles.get(r.id);if(h){s+=h.byteSize;for(const p of h.objectIds)t.has(p)||(t.add(p),this._referenceFeature(p));this._remove(r)}}),this._addTileStorage(e,t,s),e.isLeaf=!0,e.children[0]=e.children[1]=e.children[2]=e.children[3]=null,this.tileFeatureCounts.set(e.id,t.size)}_forEachLeaf(e,t){for(const s of e.children)(0,_.Wi)(s)||(s.isLeaf?t(s):this._forEachLeaf(s,t))}_purge(e){if(!(0,_.Wi)(e))if(e.isLeaf)this._remove(e);else for(let t=0;t<e.children.length;t++)this._purge(e.children[t]),e.children[t]=null}_collectMissingTiles(e,t,s){const r=new fe(s,e,this.extent);return this._collectMissingTilesRecurse(t,r,1),r.info}_collectMissingTilesRecurse(e,t,s){if(e.isLeaf)return;if(!e.hasChildren)return void t.addMissing(e.level,e.row,e.col,s);const r=s/2;for(let h=0;h<e.children.length;h++){const p=e.children[h];(0,_.Wi)(p)?t.addMissing(e.level+1,(e.row<<1)+((2&h)>>1),(e.col<<1)+(1&h),r):this._collectMissingTilesRecurse(p,t,r)}}_referenceFeature(e){const t=(this.refCounts.get(e)||0)+1;return this.refCounts.set(e,t),1===t?K.ADDED:K.UNCHANGED}_unreferenceFeature(e){const t=(this.refCounts.get(e)||0)-1;return 0===t?(this.refCounts.delete(e),K.REMOVED):(t>0&&this.refCounts.set(e,t),K.UNCHANGED)}get test(){return{tiles:Array.from(this.tiles.values()).map(e=>`${e.data.id}:[${Array.from(e.objectIds)}]`),featureReferences:Array.from(this.refCounts.keys()).map(e=>`${e}:${this.refCounts.get(e)}`)}}};(0,v._)([(0,T.Cb)({constructOnly:!0})],Q.prototype,"featureStore",void 0),(0,v._)([(0,T.Cb)()],Q.prototype,"tileInfo",void 0),(0,v._)([(0,T.Cb)()],Q.prototype,"extent",void 0),(0,v._)([(0,T.Cb)()],Q.prototype,"maximumByteSize",void 0),Q=(0,v._)([(0,c.j)("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTileStore")],Q);class ce{constructor(t,s,r){this.data=t,this.objectIds=s,this.byteSize=r}}class re{constructor(t,s,r){this.level=t,this.row=s,this.col=r,this.isLeaf=!1,this.extent=null,this.children=[null,null,null,null]}get hasChildren(){return!this.isLeaf&&((0,_.pC)(this.children[0])||(0,_.pC)(this.children[1])||(0,_.pC)(this.children[2])||(0,_.pC)(this.children[3]))}}class ie{constructor(t,s=[]){this.missingTiles=s,this.fullArea=0,this.coveredArea=0,this.fullArea=(0,l.SO)(t.extent),this.coveredArea=this.fullArea}prepend(t){this.missingTiles=t.missingTiles.concat(this.missingTiles),this.coveredArea+=t.coveredArea,this.fullArea+=t.fullArea}}class fe{constructor(t,s,r){this.tileInfo=t,this.extent=null,this.info=new ie(s),(0,_.pC)(r)&&(this.extent=(0,l.oJ)(r))}addMissing(t,s,r,h){const p={id:null,level:t,row:s,col:r};this.tileInfo.updateTileInfo(p,J.Z.ExtrapolateOptions.POWER_OF_TWO),(0,_.Wi)(p.extent)||(0,_.pC)(this.extent)&&!(0,l.kK)(this.extent,p.extent)||(this.info.missingTiles.push({data:p,resolution:h}),this.info.coveredArea-=(0,l.SO)(p.extent))}}const pe=.18751;var K;!function(e){e[e.ADDED=0]="ADDED",e[e.REMOVED=1]="REMOVED",e[e.UNCHANGED=2]="UNCHANGED"}(K||(K={}));let V=class extends Z.Z.EventedAccessor{constructor(){super(...arguments),this.isInitializing=!0,this.whenSetup=(0,y.dD)(),this.handles=new j.Z,this.updatingHandles=new C.t,this.pendingApplyEdits=new Map}get updating(){return this.featureFetcher.updating||this.isInitializing||this.updatingHandles.updating}destroy(){this.featureFetcher.destroy(),this.queryEngine.destroy(),this.featureStore.clear(),this.handles.destroy()}setup(e){var t=this;return(0,I.Z)(function*(){const{geometryType:s,objectIdField:r,timeInfo:h,fields:p}=e.serviceInfo;return t.featureStore=new w.Z({...e.serviceInfo,hasZ:!1,hasM:!1}),t.queryEngine=new Y.q({spatialReference:e.spatialReference,featureStore:t.featureStore,geometryType:s,fields:p,hasZ:!1,hasM:!1,objectIdField:r,timeInfo:h?L.Z.fromJSON(h):null}),t.featureFetcher=new m({store:new Q({featureStore:t.featureStore}),url:e.serviceInfo.url,objectIdField:e.serviceInfo.objectIdField,globalIdField:e.serviceInfo.globalIdField,capabilities:e.serviceInfo.capabilities,spatialReference:A.Z.fromJSON(e.spatialReference),sourceSpatialReference:A.Z.fromJSON(e.serviceInfo.spatialReference)}),t.handles.add([(0,B.YP)(()=>t.featureFetcher.availability,x=>t.emit("notify-availability",{availability:x}),B.Z_),(0,B.YP)(()=>t.updating,()=>t._notifyUpdating())]),t.whenSetup.resolve(),t.isInitializing=!1,t.configure(e.configuration)})()}configure(e){var t=this;return(0,I.Z)(function*(){return yield t.updatingHandles.addPromise(t.whenSetup.promise),t._updateFeatureFetcherConfiguration(e),{result:{}}})()}fetchCandidates(e,t){var s=this;return(0,I.Z)(function*(){return yield s.whenSetup.promise,(0,y.k_)(t),{result:yield s.queryEngine.executeQueryForSnapping({point:e.point,distance:e.distance,types:e.types,query:(0,_.pC)(e.filter)?e.filter:{where:"1=1"}},(0,_.pC)(t)?t.signal:null)}})()}updateTiles(e,t){var s=this;return(0,I.Z)(function*(){return yield s.updatingHandles.addPromise(s.whenSetup.promise),(0,y.k_)(t),s.featureFetcher.tileSize=e.tileSize,s.featureFetcher.tilesOfInterest=e.tiles,s.featureFetcher.tileInfo=(0,_.pC)(e.tileInfo)?J.Z.fromJSON(e.tileInfo):null,{result:{}}})()}refresh(e,t){var s=this;return(0,I.Z)(function*(){return yield s.updatingHandles.addPromise(s.whenSetup.promise),(0,y.k_)(t),s.featureFetcher.refresh(),{result:{}}})()}whenNotUpdating(e,t){var s=this;return(0,I.Z)(function*(){return yield s.updatingHandles.addPromise(s.whenSetup.promise),(0,y.k_)(t),yield(0,B.N1)(()=>!s.updating,t),(0,y.k_)(t),{result:{}}})()}getDebugInfo(e,t){var s=this;return(0,I.Z)(function*(){return(0,y.k_)(t),{result:s.featureFetcher.debugInfo}})()}beginApplyEdits(e,t){var s=this;return(0,I.Z)(function*(){s.updatingHandles.addPromise(s.whenSetup.promise),(0,y.k_)(t);const r=(0,y.dD)();return s.pendingApplyEdits.set(e.id,r),s.featureFetcher.applyEdits(r.promise),s.updatingHandles.addPromise(r.promise),{result:{}}})()}endApplyEdits(e,t){var s=this;return(0,I.Z)(function*(){const r=s.pendingApplyEdits.get(e.id);return r&&r.resolve(e.edits),(0,y.k_)(t),{result:{}}})()}_updateFeatureFetcherConfiguration(e){this.featureFetcher.filter=(0,_.pC)(e.filter)?X.Z.fromJSON(e.filter):null,this.featureFetcher.customParameters=e.customParameters}_notifyUpdating(){this.emit("notify-updating",{updating:this.updating})}};function _e(){return new V}(0,v._)([(0,T.Cb)({readOnly:!0})],V.prototype,"updating",null),(0,v._)([(0,T.Cb)()],V.prototype,"isInitializing",void 0),V=(0,v._)([(0,c.j)("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceSnappingSourceWorker")],V)}}]);