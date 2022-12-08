"use strict";(self.webpackChunka_porrtal_io_app=self.webpackChunka_porrtal_io_app||[]).push([[8740],{78740:(ee,F,a)=>{a.r(F),a.d(F,{FeatureServiceSnappingSource:()=>y});var p=a(15861),r=a(17626),b=a(14517),O=a(80542),H=a(54024),u=a(62208),T=a(10699),c=a(32917),s=a(77712),w=(a(85931),a(90912),a(76898)),U=a(84395),Z=a(60507),P=a(68511),M=a(84161),N=a(4794),k=a(41743);function C(e,t){return(0,k.g)(t.extent,E),(0,k.h)(E,(0,M.s)(j,e.x,e.y,0))}const E=(0,k.a)(),j=(0,N.c)();var D=a(93579);let v=class extends b.Z{constructor(e){super(e),this.pointOfInterest=null}get tiles(){const e=this.tilesCoveringView,t=(0,u.pC)(this.pointOfInterest)?this.pointOfInterest:this.view.center;return e.sort((n,i)=>C(t,n)-C(t,i)),e}_scaleEnabled(){return(0,D.rs)(this.view.scale,this.layer.minScale||0,this.layer.maxScale||0)}get tilesCoveringView(){if(!this.view.ready||!this.view.featuresTilingScheme||!this.view.state||(0,u.Wi)(this.tileInfo))return[];if(!this._scaleEnabled)return[];const{spans:e,lodInfo:t}=this.view.featuresTilingScheme.getTileCoverage(this.view.state,0),{level:n}=t,i=[];for(const{row:o,colFrom:l,colTo:h}of e)for(let d=l;d<=h;d++){const g=t.normalizeCol(d),R=new P.f(null,n,o,g);this.tileInfo.updateTileInfo(R),i.push(R)}return i}get tileInfo(){return this.view.featuresTilingScheme?.tileInfo??null}get tileSize(){return(0,u.pC)(this.tileInfo)?this.tileInfo.size[0]:256}initialize(){this.addHandles((0,c.YP)(()=>this.view?.state?.viewpoint,()=>this.notifyChange("tilesCoveringView"),c.Z_))}};(0,r._)([(0,s.Cb)({readOnly:!0})],v.prototype,"tiles",null),(0,r._)([(0,s.Cb)({readOnly:!0})],v.prototype,"_scaleEnabled",null),(0,r._)([(0,s.Cb)({readOnly:!0})],v.prototype,"tilesCoveringView",null),(0,r._)([(0,s.Cb)({readOnly:!0})],v.prototype,"tileInfo",null),(0,r._)([(0,s.Cb)({readOnly:!0})],v.prototype,"tileSize",null),(0,r._)([(0,s.Cb)({constructOnly:!0})],v.prototype,"view",void 0),(0,r._)([(0,s.Cb)({constructOnly:!0})],v.prototype,"layer",void 0),(0,r._)([(0,s.Cb)()],v.prototype,"pointOfInterest",void 0),v=(0,r._)([(0,w.j)("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTiles2D")],v);var A=a(27351);let S=class extends O.r{constructor(e){super(e),this.pointOfInterest=null}get tiles(){const e=this.tilesCoveringView,t=this._effectivePointOfInterest;if((0,u.pC)(t)){const n=e.map(i=>C(t,i));for(let i=1;i<n.length;i++)if(n[i-1]>n[i])return e.sort((o,l)=>C(t,o)-C(t,l)),e.slice()}return e}get tilesCoveringView(){return this._filterTiles(this.view.featureTiles?.tiles?.toArray()).map(V)}get tileInfo(){return this.view.featureTiles?.tilingScheme.toTileInfo()??null}get tileSize(){return this.view.featureTiles?.tileSize??256}get _effectivePointOfInterest(){const e=this.pointOfInterest;return(0,u.pC)(e)?e:this.view.pointsOfInterest?.focus.location}initialize(){this.handles.add((0,c.YP)(()=>this.view.featureTiles,e=>{this.handles.remove(_),e&&this.handles.add(e.addClient(),_)},c.nn))}_filterTiles(e){return(0,u.Wi)(e)?[]:e.filter(t=>Math.abs(t.measures.screenRect[3]-t.measures.screenRect[1])>J&&t.measures.visibility===A.E.VISIBLE_ON_SURFACE)}};function V({lij:[e,t,n],extent:i}){return new P.f(`${e}/${t}/${n}`,e,t,n,i)}(0,r._)([(0,s.Cb)({readOnly:!0})],S.prototype,"tiles",null),(0,r._)([(0,s.Cb)({readOnly:!0})],S.prototype,"tilesCoveringView",null),(0,r._)([(0,s.Cb)({readOnly:!0})],S.prototype,"tileInfo",null),(0,r._)([(0,s.Cb)({readOnly:!0})],S.prototype,"tileSize",null),(0,r._)([(0,s.Cb)({constructOnly:!0})],S.prototype,"view",void 0),(0,r._)([(0,s.Cb)()],S.prototype,"pointOfInterest",void 0),(0,r._)([(0,s.Cb)()],S.prototype,"_effectivePointOfInterest",null),S=(0,r._)([(0,w.j)("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTiles3D")],S);const J=50,_="feature-tiles";var x=a(4257),W=a(72392),$=a(37118),z=a(65401),L=a(73187);let m=class extends L.q{constructor(e){super(e),this._handles=new W.Z}initialize(){const e=setInterval(()=>this._fetchDebugInfo(),2e3);this._handles.add((0,H.kB)(()=>clearInterval(e)))}destroy(){this._handles.destroy()}getTiles(){if(!this._debugInfo)return[];const e=new Map,t=new Map;this._debugInfo.storedTiles.forEach(o=>{e.set(o.data.id,o.featureCount)}),this._debugInfo.pendingTiles.forEach(o=>{e.set(o.data.id,o.featureCount),t.set(o.data.id,o.state)});const n=o=>{const l=t.get(o),h=e.get(o)??"?";return l?`${l}:${h}\n${o}`:`store:${h}\n${o}`},i=new Map;return this._debugInfo.storedTiles.forEach(o=>{i.set(o.data.id,o.data)}),this._debugInfo.pendingTiles.forEach(o=>{i.set(o.data.id,o.data)}),Array.from(i.values()).map(o=>({lij:[o.level,o.row,o.col],geometry:$.Z.fromExtent((0,z.HH)(o.extent,this.view.spatialReference)),label:n(o.id)}))}_fetchDebugInfo(){this.handle.getDebugInfo(null).then(e=>{this._debugInfo=e,this.update()})}};(0,r._)([(0,s.Cb)({constructOnly:!0})],m.prototype,"handle",void 0),m=(0,r._)([(0,w.j)("esri.views.interactive.snapping.featureSources.WorkerTileTreeDebugger")],m);var Y=a(42930),G=a(71774);let f=class extends O.r{constructor(e){super(e),this.schedule=null,this.hasZ=!1,this.elevationAlignPointsInFeatures=function(){var t=(0,p.Z)(function*(n){const i=[];for(const{points:o}of n)for(const{z:l}of o)i.push(l);return{elevations:i,drapedObjectIds:new Set,failedObjectIds:new Set}});return function(n){return t.apply(this,arguments)}}(),this.queryForSymbologySnapping=(0,p.Z)(function*(){return{candidates:[],sourceCandidateIndices:[]}}),this.availability=0,this._workerHandleUpdating=!0,this._editId=0}get updating(){return this.updatingHandles.updating||this._workerHandleUpdating}destroy(){this._workerHandle.destroy()}initialize(){var t,e=this;this._workerHandle=new B(this.schedule,{alignElevation:(t=(0,p.Z)(function*(n,{signal:i}){return{result:yield e.elevationAlignPointsInFeatures(n.points,i)}}),function(i,o){return t.apply(this,arguments)}),getSymbologyCandidates:function(){var t=(0,p.Z)(function*(n,{signal:i}){return{result:yield e.queryForSymbologySnapping(n,i)}});return function(i,o){return t.apply(this,arguments)}}()}),this.handles.add([this._workerHandle.on("notify-updating",({updating:t})=>this._workerHandleUpdating=t),this._workerHandle.on("notify-availability",({availability:t})=>this._set("availability",t))])}setup(e,t){var n=this;return(0,p.Z)(function*(){const i=n._serviceInfoFromLayer(e.layer);if((0,u.Wi)(i))return;const o={configuration:n._convertConfiguration(e.configuration),serviceInfo:i,spatialReference:e.spatialReference.toJSON(),hasZ:n.hasZ,elevationInfo:e.layer.elevationInfo?.toJSON()};yield n.updatingHandles.addPromise(n._workerHandle.invokeMethod("setup",o,t)),n.updatingHandles.addPromise(n._workerHandle.invokeMethod("whenNotUpdating",{},t))})()}configure(e,t){var n=this;return(0,p.Z)(function*(){const i=n._convertConfiguration(e);yield n.updatingHandles.addPromise(n._workerHandle.invokeMethod("configure",i,t)),n.updatingHandles.addPromise(n._workerHandle.invokeMethod("whenNotUpdating",{},t))})()}refresh(e){var t=this;return(0,p.Z)(function*(){yield t.updatingHandles.addPromise(t._workerHandle.invokeMethod("refresh",{},e)),t.updatingHandles.addPromise(t._workerHandle.invokeMethod("whenNotUpdating",{},e))})()}fetchCandidates(e,t){var n=this;return(0,p.Z)(function*(){const i={distance:e.distance,point:e.coordinateHelper.vectorToPoint(e.point).toJSON(),types:e.types,filter:(0,u.pC)(e.filter)?e.filter.toJSON():null};return n._workerHandle.invoke(i,t)})()}updateTiles(e,t){var n=this;return(0,p.Z)(function*(){const i={tiles:e.tiles,tileInfo:(0,u.pC)(e.tileInfo)?e.tileInfo.toJSON():null,tileSize:e.tileSize};yield n.updatingHandles.addPromise(n._workerHandle.invokeMethod("updateTiles",i,t)),n.updatingHandles.addPromise(n._workerHandle.invokeMethod("whenNotUpdating",{},t))})()}applyEdits(e,t){var n=this;return(0,p.Z)(function*(){const i=n._editId++,o={id:i};yield n.updatingHandles.addPromise(n._workerHandle.invokeMethod("beginApplyEdits",o,t));const l=yield n.updatingHandles.addPromise((0,T.Hl)(e.result,t)),h={id:i,edits:{addedFeatures:l.addedFeatures?.map(({objectId:d})=>d).filter(u.pC)??[],deletedFeatures:l.deletedFeatures?.map(({objectId:d,globalId:g})=>({objectId:d,globalId:g}))??[],updatedFeatures:l.updatedFeatures?.map(({objectId:d})=>d).filter(u.pC)??[]}};yield n.updatingHandles.addPromise(n._workerHandle.invokeMethod("endApplyEdits",h,t)),n.updatingHandles.addPromise(n._workerHandle.invokeMethod("whenNotUpdating",{},t))})()}getDebugInfo(e){return this._workerHandle.invokeMethod("getDebugInfo",{},e)}notifyElevationSourceChange(){var e=this;return(0,p.Z)(function*(){yield e._workerHandle.invokeMethod("notifyElevationSourceChange",{})})()}notifySymbologyChange(){var e=this;return(0,p.Z)(function*(){yield e._workerHandle.invokeMethod("notifySymbologyChange",{})})()}setSymbologySnappingSupported(e){var t=this;return(0,p.Z)(function*(){yield t._workerHandle.invokeMethod("setSymbologySnappingSupported",e)})()}_convertConfiguration(e){return{filter:(0,u.pC)(e.filter)?e.filter.toJSON():null,customParameters:e.customParameters,viewType:e.viewType}}_serviceInfoFromLayer(e){return"multipatch"===e.geometryType||"mesh"===e.geometryType?null:{url:e.parsedUrl?.path??"",fields:e.fields.map(t=>t.toJSON()),geometryType:G.Mk.toJSON(e.geometryType),capabilities:e.capabilities,objectIdField:e.objectIdField,globalIdField:e.globalIdField,spatialReference:e.spatialReference.toJSON(),timeInfo:e.timeInfo?.toJSON()}}};(0,r._)([(0,s.Cb)({constructOnly:!0})],f.prototype,"schedule",void 0),(0,r._)([(0,s.Cb)({constructOnly:!0})],f.prototype,"hasZ",void 0),(0,r._)([(0,s.Cb)({constructOnly:!0})],f.prototype,"elevationAlignPointsInFeatures",void 0),(0,r._)([(0,s.Cb)({constructOnly:!0})],f.prototype,"queryForSymbologySnapping",void 0),(0,r._)([(0,s.Cb)({readOnly:!0})],f.prototype,"updating",null),(0,r._)([(0,s.Cb)({readOnly:!0})],f.prototype,"availability",void 0),(0,r._)([(0,s.Cb)()],f.prototype,"_workerHandleUpdating",void 0),f=(0,r._)([(0,w.j)("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceSnappingSourceWorkerHandle")],f);class B extends Y.q{constructor(t,n){super("FeatureServiceSnappingSourceWorker","fetchCandidates",{},t,{strategy:"dedicated",client:n})}}var K=a(72642),Q=a(72258),X=a(2584);let I=class extends b.Z{constructor(e){super(e),this.pointOfInterest=null}get tiles(){return[new P.f("0/0/0",0,0,0,(0,z.al)(-1e8,-1e8,1e8,1e8))]}get tileInfo(){return new X.Z({origin:new K.Z({x:-1e8,y:1e8,spatialReference:this.layer.spatialReference}),size:[512,512],lods:[new Q.Z({level:0,scale:1,resolution:390625})],spatialReference:this.layer.spatialReference})}get tileSize(){return this.tileInfo.size[0]}};(0,r._)([(0,s.Cb)({readOnly:!0})],I.prototype,"tiles",null),(0,r._)([(0,s.Cb)({readOnly:!0})],I.prototype,"tileInfo",null),(0,r._)([(0,s.Cb)({readOnly:!0})],I.prototype,"tileSize",null),(0,r._)([(0,s.Cb)({constructOnly:!0})],I.prototype,"layer",void 0),(0,r._)([(0,s.Cb)()],I.prototype,"pointOfInterest",void 0),I=(0,r._)([(0,w.j)("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTilesSimple")],I);var q=a(66463);let y=class extends((0,O.p)(b.Z)){constructor(e){super(e)}get _updateTilesParameters(){return{tiles:this._tilesOfInterest.tiles,tileInfo:this._tilesOfInterest.tileInfo,tileSize:this._tilesOfInterest.tileSize}}get updating(){return this._workerHandle.updating||this.updatingHandles.updating}get configuration(){const{view:e}=this,t=(0,u.pC)(e)?e.type:"2d";return{filter:this._layer.createQuery(),customParameters:this._layer.customParameters,viewType:t}}get availability(){return this._workerHandle.availability}get _layer(){return this.layerSource.layer}initialize(){const e=this.view;if((0,u.pC)(e))switch(e.type){case"2d":this._tilesOfInterest=new v({view:e,layer:this._layer}),this._workerHandle=new f;break;case"3d":{const{resourceController:t}=e,n=this._layer,i=e.whenLayerView(n);this._tilesOfInterest=new S({view:e}),this._workerHandle=new f({schedule:l=>t.schedule(l),hasZ:this._layer.hasZ&&(this._layer.returnZ??!0),elevationAlignPointsInFeatures:(l=(0,p.Z)(function*(h,d){const g=yield i;return(0,T.k_)(d),g.elevationAlignPointsInFeatures(h,d)}),function(d,g){return l.apply(this,arguments)}),queryForSymbologySnapping:function(){var l=(0,p.Z)(function*(h,d){const g=yield i;return(0,T.k_)(d),g.queryForSymbologySnapping(h,d)});return function(d,g){return l.apply(this,arguments)}}()});const o=new U.f(null);i.then(l=>o.set(l)),this.addHandles([e.elevationProvider.on("elevation-change",({context:l})=>{const{elevationInfo:h}=n;(0,Z.W_)(l,h)&&this._workerHandle?.notifyElevationSourceChange()}),(0,c.YP)(()=>n.elevationInfo,()=>this._workerHandle?.notifyElevationSourceChange(),c.nn),(0,c.YP)(()=>(0,u.yw)(o.get(),({processor:l})=>l?.renderer),()=>this._workerHandle?.notifySymbologyChange(),c.nn),(0,c.YP)(()=>(0,u.R2)(o.get(),!1,l=>l.symbologySnappingSupported),l=>this._workerHandle?.setSymbologySnappingSupported(l),c.nn)]);break}}else this._tilesOfInterest=new I({layer:this._layer}),this._workerHandle=new f;var l;this.handles.add([(0,H.ed)(this._workerHandle)]),this._workerHandle.setup({layer:this._layer,spatialReference:this.spatialReference,configuration:this.configuration},null),this.updatingHandles.add(()=>this._updateTilesParameters,()=>this._workerHandle.updateTiles(this._updateTilesParameters,null),c.nn),this.handles.add([(0,c.YP)(()=>this.configuration,t=>this._workerHandle.configure(t,null),c.Z_)]),(0,u.pC)(e)&&this.handles.add((0,c.YP)(()=>q.Z.FEATURE_SERVICE_SNAPPING_SOURCE_TILE_TREE_SHOW_TILES,t=>{t&&!this._debug?(this._debug=new m({view:e,handle:this._workerHandle}),this.handles.add((0,H.ed)(this._debug),"debug")):!t&&this._debug&&this.handles.remove("debug")},c.nn)),this.handles.add(this.layerSource.layer.on("apply-edits",t=>{this._workerHandle.applyEdits(t,null)}))}refresh(){this._workerHandle.refresh(null)}fetchCandidates(e,t){var n=this;return(0,p.Z)(function*(){const{coordinateHelper:i,elevationInfo:o,point:l}=e;n._tilesOfInterest.pointOfInterest=i.vectorToPoint(l);const h=i.hasZ()?Z.jG:o,d=n._getGroundElevation;return(yield n._workerHandle.fetchCandidates({...e},t)).candidates.map(g=>(0,x.X)(g,i,h,d))})()}getDebugInfo(e){return this._workerHandle.getDebugInfo(e)}get _getGroundElevation(){return(0,x.g)(this.view)}};(0,r._)([(0,s.Cb)({constructOnly:!0})],y.prototype,"spatialReference",void 0),(0,r._)([(0,s.Cb)({constructOnly:!0})],y.prototype,"layerSource",void 0),(0,r._)([(0,s.Cb)({constructOnly:!0})],y.prototype,"view",void 0),(0,r._)([(0,s.Cb)()],y.prototype,"_tilesOfInterest",void 0),(0,r._)([(0,s.Cb)({readOnly:!0})],y.prototype,"_updateTilesParameters",null),(0,r._)([(0,s.Cb)({readOnly:!0})],y.prototype,"updating",null),(0,r._)([(0,s.Cb)({readOnly:!0})],y.prototype,"configuration",null),(0,r._)([(0,s.Cb)({readOnly:!0})],y.prototype,"availability",null),(0,r._)([(0,s.Cb)()],y.prototype,"_getGroundElevation",null),y=(0,r._)([(0,w.j)("esri.views.interactive.snapping.featureSources.FeatureServiceSnappingSource")],y)}}]);