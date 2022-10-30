"use strict";(self.webpackChunka_porrtal_io_app=self.webpackChunka_porrtal_io_app||[]).push([[8562],{19702:(L,v,e)=>{e.d(v,{A:()=>p});var r=e(15861),l=e(17626),y=e(54024),c=e(10699),n=e(32917),f=e(77712),g=(e(85931),e(8314),e(90912),e(76898)),O=e(36947);const p=P=>{let t=class extends P{constructor(){super(...arguments),this.slicePlaneEnabled=!1,this.supportsHeightUnitConversion=!1}postscript(a){super.postscript(a),(0,O.qC)(this.layer)&&this.addResolvingPromise(this._validateHeightModelInfo())}_validateHeightModelInfo(){var a=this;return(0,r.Z)(function*(){const s=new AbortController,h=s.signal;a.handles.add((0,y.kB)(()=>s.abort())),yield(0,n.N1)(()=>a.view.defaultsFromMap?.heightModelInfoReady,h),(0,c.k_)(h);const M=(0,O.Wt)(a.layer,a.view.heightModelInfo,a.supportsHeightUnitConversion);if(M)throw M})()}canResume(){const a=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return super.canResume()&&(!a||!a.minScale||!a.maxScale||a.minScale>=a.maxScale)}getSuspendInfo(){const a=super.getSuspendInfo(),s=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return s&&s.minScale&&s.maxScale&&s.minScale<s.maxScale&&(a.outsideScaleRange=!0),a}};return(0,l._)([(0,f.Cb)()],t.prototype,"view",void 0),(0,l._)([(0,f.Cb)()],t.prototype,"slicePlaneEnabled",void 0),t=(0,l._)([(0,g.j)("esri.views.3d.layers.LayerView3D")],t),t}},8562:(L,v,e)=>{e.r(v),e.d(v,{default:()=>W});var r=e(15861),l=e(17626),y=e(26584),c=e(62208),n=e(77712),o=(e(85931),e(8314),e(90912),e(76898)),g=e(55915),O=e(19702),p=e(50916),P=e(45611),t=e(94421),a=e(10699),s=e(22264);const h=i=>{let _=class extends i{fetchPopupFeatures(D,T){var U=this;return(0,r.Z)(function*(){const{layer:R}=U;if(!D)throw new y.Z("tilelayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:R});if("tile"!==R.type)throw new y.Z("tilelayerview:fetchPopupFeatures","Layer type should be 'tile'",{type:R.type});const j=U.get("view.scale"),A=R.allSublayers.toArray().filter(d=>d.popupTemplate&&d.popupEnabled&&d.visible&&(0===d.minScale||j<=d.minScale)&&(0===d.maxScale||j>=d.maxScale));return(0,a.as)(A.map(function(){var d=(0,r.Z)(function*(u){const C=u.createQuery(),B=(0,c.pC)(T)?T.event:null,S=(0,s.k)({renderer:u.renderer,event:B});return C.geometry=U.createFetchPopupFeaturesQueryGeometry(D,S),C.outFields=yield u.popupTemplate.getRequiredFields(),(yield u.queryFeatures(C)).features});return function(u){return d.apply(this,arguments)}}())).then(d=>[].concat(...d.map(u=>u.value).filter(Boolean)))})()}};return(0,l._)([(0,n.Cb)()],_.prototype,"layer",void 0),_=(0,l._)([(0,o.j)("esri.layers.mixins.TileLayerView")],_),_};var M=e(94672);let E=class extends((0,t.Z)((0,p.r)(h((0,O.A)(P.Z))))){constructor(){super(...arguments),this.type="tile-3d"}get imageFormatIsOpaque(){return"jpg"===this.layer.tileInfo.format}get hasMixedImageFormats(){return"mixed"===this.layer.tileInfo.format}get dataLevelRange(){if(this.tileInfo){const i=this.tileInfo.lods;return this.levelRangeFromScaleRange(i[0].scale,i[i.length-1].scale)}return{minLevel:0,maxLevel:0}}initialize(){if("web-tile"===this.layer.type){const i=this.layer.get("fullExtent.spatialReference"),_=this.layer.get("tileInfo.spatialReference");if((0,c.Wi)(i)||(0,c.Wi)(_)||!(0,g.Up)(i,_)){const D="defaults"===this.layer.originOf("fullExtent")||(0,c.Wi)(this.layer.fullExtent)?"SceneView requires fullExtent to be specified by the user on WebTileLayer":"SceneView requires fullExtent to be specified in the same spatial reference as tileInfo on WebTileLayer";this.addResolvingPromise(Promise.reject(new y.Z("layerview:incompatible-fullextent",D)))}}this._addTilingSchemeMatchPromise()}createFetchPopupFeaturesQueryGeometry(i,_){return(0,M.K)(i,_,this.view)}doRefresh(){var i=this;return(0,r.Z)(function*(){i.suspended||i.emit("data-changed")})()}};(0,l._)([(0,n.Cb)({readOnly:!0})],E.prototype,"imageFormatIsOpaque",null),(0,l._)([(0,n.Cb)({readOnly:!0})],E.prototype,"hasMixedImageFormats",null),(0,l._)([(0,n.Cb)()],E.prototype,"layer",void 0),(0,l._)([(0,n.Cb)({readOnly:!0,aliasOf:"layer.tileInfo"})],E.prototype,"tileInfo",void 0),(0,l._)([(0,n.Cb)({readOnly:!0})],E.prototype,"dataLevelRange",null),E=(0,l._)([(0,o.j)("esri.views.3d.layers.TileLayerView3D")],E);const W=E},45611:(L,v,e)=>{e.d(v,{Z:()=>a});var r=e(17626),l=e(14517),y=e(61885),c=e(80542),n=e(61996),f=e(63290),m=e(62208),I=e(60330),o=e(77712),P=(e(85931),e(8314),e(90912),e(76898));let t=class extends((0,c.p)((0,n.IG)((0,I.v)(y.Z.EventedMixin(l.Z))))){constructor(s){super(s),this.layer=null,this.parent=null}initialize(){this.when().catch(s=>{if("layerview:create-error"!==s.name){const h=this.layer&&this.layer.id||"no id",M=this.layer&&this.layer.title||"no title";f.Z.getLogger(this.declaredClass).error("#resolve()",`Failed to resolve layer view (layer title: '${M}', id: '${h}')`,s)}})}get fullOpacity(){return(0,m.Pt)(this.get("layer.opacity"),1)*(0,m.Pt)(this.get("parent.fullOpacity"),1)}get suspended(){return!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){return!this.suspended&&!0===this.layer?.legendEnabled}get updating(){return!(!this.updatingHandles?.updating&&!this.isUpdating())}get updatingProgress(){return this.updating?0:1}get visible(){return!0===this.layer?.visible}set visible(s){void 0!==s?this._override("visible",s):this._clearOverride("visible")}canResume(){return this.visible&&this.layer?.loaded&&!this.parent?.suspended&&this.view?.ready||!1}getSuspendInfo(){const s=this.parent&&this.parent.suspended?this.parent.suspendInfo:{};return this.view&&this.view.ready||(s.viewNotReady=!0),this.layer&&this.layer.loaded||(s.layerNotLoaded=!0),this.visible||(s.layerInvisible=!0),s}isUpdating(){return!1}};(0,r._)([(0,o.Cb)()],t.prototype,"fullOpacity",null),(0,r._)([(0,o.Cb)()],t.prototype,"layer",void 0),(0,r._)([(0,o.Cb)()],t.prototype,"parent",void 0),(0,r._)([(0,o.Cb)({readOnly:!0})],t.prototype,"suspended",null),(0,r._)([(0,o.Cb)({readOnly:!0})],t.prototype,"suspendInfo",null),(0,r._)([(0,o.Cb)({readOnly:!0})],t.prototype,"legendEnabled",null),(0,r._)([(0,o.Cb)({type:Boolean,readOnly:!0})],t.prototype,"updating",null),(0,r._)([(0,o.Cb)({readOnly:!0})],t.prototype,"updatingProgress",null),(0,r._)([(0,o.Cb)()],t.prototype,"visible",null),(0,r._)([(0,o.Cb)()],t.prototype,"view",void 0),t=(0,r._)([(0,P.j)("esri.views.layers.LayerView")],t);const a=t},94421:(L,v,e)=>{e.d(v,{Z:()=>g});var r=e(17626),l=e(63290),y=e(10699),c=e(32917),n=e(77712),o=(e(85931),e(8314),e(90912),e(76898));const g=O=>{let p=class extends O{initialize(){this.handles.add((0,c.on)(()=>this.layer,"refresh",P=>{this.doRefresh(P.dataChanged).catch(t=>{(0,y.D_)(t)||l.Z.getLogger(this.declaredClass).error(t)})}),"RefreshableLayerView")}};return(0,r._)([(0,n.Cb)()],p.prototype,"layer",void 0),p=(0,r._)([(0,o.j)("esri.layers.mixins.RefreshableLayerView")],p),p}}}]);