"use strict";(self.webpackChunka_porrtal_io_app=self.webpackChunka_porrtal_io_app||[]).push([[937],{20937:(K,u,r)=>{r.r(u),r.d(u,{default:()=>Z});var n=r(17626),f=r(26584),v=r(32917),s=r(77712),c=(r(85931),r(90912),r(76898)),I=(r(29132),r(88879)),S=r(14517),C=r(80542),d=r(62208),O=r(60330),b=r(5075),w=r(3542),L=r(36967),V=r(71774);let h=class extends I.Z{getObjectId(){return this.objectId}};(0,n._)([(0,s.Cb)({type:Number,json:{read:!0}})],h.prototype,"objectId",void 0),h=(0,n._)([(0,c.j)("esri.layers.graphics.controllers.StreamGraphic")],h);class E{constructor(t){this.onUpdate=t,this._idToGraphic=new Map}destroy(){this._idToGraphic.clear()}add(t){this._idToGraphic.set(t.objectId,t)}get(t){return this._idToGraphic.get(t)}forEach(t){this._idToGraphic.forEach(t)}removeById(t){const o=this._idToGraphic.get(t);return o?(o.sourceLayer=o.layer=null,this._idToGraphic.delete(t),o):null}update(t,o){this.onUpdate(t,o)}get size(){return this._idToGraphic.size}}let i=class extends((0,C.p)((0,O.v)(S.Z))){constructor(){super(...arguments),this._updateInfo={websocket:0,client:0},this.graphics=new L.g}initialize(){this.addResolvingPromise(this.layer.when(()=>this._startup()))}destroy(){this.clear()}_clearInterval(){this._updateIntervalId&&(clearInterval(this._updateIntervalId),this._updateIntervalId=0)}clear(){this._clearInterval(),this.connection&&(this.connection.destroy(),this.connection=null),this.store&&(this.store.destroy(),this.store=null),this.graphics.clear(),this.handles.removeAll()}get updating(){return!this.connection||"connected"===this.connection.connectionStatus}_startup(){const{layer:e,layerView:t}=this,{parsedUrl:o,spatialReference:l,definitionExpression:p,geometryDefinition:y,objectIdField:D,timeInfo:P,purgeOptions:N,maxReconnectionAttempts:A,maxReconnectionInterval:Q,customParameters:z}=e,J=V.Mk.toJSON(e.geometryType),Y=l,m=t.view.spatialReference,B={geometry:y,where:p};this.clear(),this._set("connection",(0,w.createConnection)(o,Y,m,J,B,A,Q,z)),this._outSpatialReference=m.toJSON(),this.store=new E(this._onUpdate.bind(this)),this.featuresManager=new b.Qo(this.store,D,P.toJSON(),N);const g="startup-watches";this.handles.remove(g),this.handles.add([this.connection.on("data-received",H=>this._onFeature(H)),(0,v.YP)(()=>[e.definitionExpression,e.geometryDefinition,e.purgeOptions],()=>this._startup())],g),this._initUpdateInterval()}_onFeature(e){this._updateInfo.websocket++,this.layerView.hasEventListener("data-received")&&this.layerView.emit("data-received",{attributes:e.attributes,centroid:e.centroid,geometry:e.geometry});try{(0,d.pC)(e.geometry)&&!e.geometry.spatialReference&&(e.geometry.spatialReference=this._outSpatialReference);const t=h.fromJSON(e);t.sourceLayer=t.layer=this.layer,this.featuresManager.add(t)}catch{}}_onUpdate(e,t){(0,d.pC)(t)&&this.graphics.removeMany(t),(0,d.pC)(e)&&(this._updateInfo.client+=e.length,this.graphics.addMany(e))}_initUpdateInterval(){this._clearInterval();const{updateInterval:e}=this.layer;let t=performance.now();this._updateIntervalId=setInterval(()=>{const o=performance.now(),l=o-t;if(l>2500){t=o;const p=Math.round(this._updateInfo.client/(l/1e3)),y=Math.round(this._updateInfo.websocket/(l/1e3));this._updateInfo.client=0,this._updateInfo.websocket=0,this.layerView.emit("update-rate",{client:p,websocket:y})}this.featuresManager.checkForUpdates()},e)}pauseStream(){this._clearInterval()}resumeStream(){this._initUpdateInterval()}};(0,n._)([(0,s.Cb)()],i.prototype,"connection",void 0),(0,n._)([(0,s.Cb)()],i.prototype,"layer",void 0),(0,n._)([(0,s.Cb)()],i.prototype,"layerView",void 0),(0,n._)([(0,s.Cb)({readOnly:!0})],i.prototype,"updating",null),i=(0,n._)([(0,c.j)("esri.layers.graphics.controllers.StreamController")],i);var M=r(96854),R=r(78448),U=r(19702),G=r(42743),F=r(45611),T=r(98624);const x=e=>{let t=class extends e{constructor(...o){super(...o),this.connectionError=null,this.filter=null}get connectionStatus(){return this.controller?.connection?.connectionStatus??"disconnected"}};return(0,n._)([(0,s.Cb)({readOnly:!0})],t.prototype,"connectionError",void 0),(0,n._)([(0,s.Cb)({readOnly:!0})],t.prototype,"connectionStatus",null),(0,n._)([(0,s.Cb)({type:T.Z})],t.prototype,"filter",void 0),t=(0,n._)([(0,c.j)("esri.layers.mixins.StreamLayerView")],t),t};let a=class extends(x((0,R.R)((0,U.A)(F.Z)))){constructor(){super(...arguments),this.type="stream-3d",this.updatePolicy=G.jq.ASYNC,this.hasZ=!0,this.hasM=!1}initialize(){this.handles.add((0,v.YP)(()=>this.suspended,e=>{this.controller&&(e?this.controller.pauseStream():this.controller.resumeStream())}))}get connectionError(){const e=this.get("controller.connection.errorString");if(e)return new f.Z("stream-controller",e)}createQuery(){return new M.Z({outFields:["*"],returnGeometry:!0,outSpatialReference:this.view.spatialReference})}queryLatestObservations(e,t){return this.queryEngine.executeQueryForLatestObservations(this._ensureQuery(e),t?.signal)}createController(){return new i({layer:this.layer,layerView:this})}beforeSetController(){}};(0,n._)([(0,s.Cb)({readOnly:!0})],a.prototype,"updatePolicy",void 0),(0,n._)([(0,s.Cb)({readOnly:!0})],a.prototype,"connectionError",null),(0,n._)([(0,s.Cb)()],a.prototype,"controller",void 0),(0,n._)([(0,s.Cb)({readOnly:!0})],a.prototype,"hasZ",void 0),(0,n._)([(0,s.Cb)({readOnly:!0})],a.prototype,"hasM",void 0),a=(0,n._)([(0,c.j)("esri.views.3d.layers.StreamLayerView3D")],a);const Z=a}}]);