"use strict";(self.webpackChunka_porrtal_io_app=self.webpackChunka_porrtal_io_app||[]).push([[6373],{19702:(I,c,e)=>{e.d(c,{A:()=>h});var _=e(15861),d=e(17626),v=e(54024),p=e(10699),E=e(32917),M=e(77712),o=(e(85931),e(90912),e(76898)),P=e(36947);const h=u=>{let t=class extends u{constructor(){super(...arguments),this.slicePlaneEnabled=!1,this.supportsHeightUnitConversion=!1}postscript(r){super.postscript(r),(0,P.qC)(this.layer)&&this.addResolvingPromise(this._validateHeightModelInfo())}_validateHeightModelInfo(){var r=this;return(0,_.Z)(function*(){const s=new AbortController,l=s.signal;r.handles.add((0,v.kB)(()=>s.abort())),yield(0,E.N1)(()=>r.view.defaultsFromMap?.heightModelInfoReady,l),(0,p.k_)(l);const O=(0,P.Wt)(r.layer,r.view.heightModelInfo,r.supportsHeightUnitConversion);if(O)throw O})()}canResume(){const r=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return super.canResume()&&(!r||!r.minScale||!r.maxScale||r.minScale>=r.maxScale)}getSuspendInfo(){const r=super.getSuspendInfo(),s=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return s&&s.minScale&&s.maxScale&&s.minScale<s.maxScale&&(r.outsideScaleRange=!0),r}};return(0,d._)([(0,M.Cb)()],t.prototype,"view",void 0),(0,d._)([(0,M.Cb)()],t.prototype,"slicePlaneEnabled",void 0),t=(0,d._)([(0,o.j)("esri.views.3d.layers.LayerView3D")],t),t}},6373:(I,c,e)=>{e.r(c),e.d(c,{default:()=>O});var _=e(15861),d=e(17626),v=e(46160),p=e(63290),E=e(62208),M=e(32917),y=e(77712),P=(e(85931),e(90912),e(76898)),h=e(72469),u=e(19702),t=e(50916),r=e(45611),s=e(94421);let l=class extends((0,s.Z)((0,t.r)((0,u.A)(r.Z)))){constructor(){super(...arguments),this.type="wmts-3d"}get hasMixedImageFormats(){return!0}_getCompatibleTileInfoMatrixSet(a,i=!1){const n=(0,h.mt)(this.layer);if((0,E.pC)(n)){if(v.Z.isCollection(n))return n.find(f=>{const g=a(f);return(0,E.pC)(g)&&(i?p.Z.getLogger(this.declaredClass).error("The selected tile matrix set is not compatible with the view",g):this.addResolvingPromise(Promise.reject(g))),null==g});const C=a(n);return(0,E.pC)(C)&&(i?p.Z.getLogger(this.declaredClass).error("The selected tile matrix set is not compatible with the view",C):this.addResolvingPromise(Promise.reject(C))),n}return null}initialize(){this._getCompatibleTileInfoMatrixSet(i=>this._getTileInfoSupportError(i.tileInfo,i.fullExtent));const a=(0,M.N1)(()=>this.view?.basemapTerrain?.tilingSchemeLocked).then(()=>{const i=this._getCompatibleTileInfoMatrixSet(n=>this._getTileInfoSupportError(n.tileInfo,n.fullExtent)||this._getTileInfoCompatibilityError(n.tileInfo,this.view.basemapTerrain.tilingScheme));(0,E.Wi)(i)||(this.layer.activeLayer.tileMatrixSetId!==i.id&&(this.layer.activeLayer.tileMatrixSetId=i.id),this.tileInfo=i.tileInfo,this.layer.fullExtent=i.fullExtent)});this.addResolvingPromise(a),this.when(()=>this._postInitialize())}refresh(){this.emit("data-changed")}canResume(){if(!super.canResume())return!1;const a=this.layer.activeLayer.tileMatrixSet;return a&&!this._getTileInfoError(a.tileInfo,a.fullExtent)}doRefresh(){var a=this;return(0,_.Z)(function*(){a.suspended||a.emit("data-changed")})()}_postInitialize(){this.updatingHandles.add(()=>this.layer?.activeLayer?.styleId,()=>this.refresh()),this.updatingHandles.add(()=>this.layer?.activeLayer,a=>{const i=this._getCompatibleTileInfoMatrixSet(n=>this._getTileInfoSupportError(n.tileInfo,n.fullExtent)||this._getTileInfoCompatibilityError(n.tileInfo,this.view.basemapTerrain.tilingScheme),!0);(0,E.pC)(i)&&a.tileMatrixSetId!==i.id&&(this.layer.activeLayer.tileMatrixSetId=i.id),this.notifyChange("suspended"),this.canResume()&&this.refresh()})}_getTileInfoError(a,i){return this._getTileInfoSupportError(a,i)||this._getTileInfoCompatibilityError(a,this.view.basemapTerrain.tilingScheme)}};(0,d._)([(0,y.Cb)({readOnly:!0})],l.prototype,"hasMixedImageFormats",null),(0,d._)([(0,y.Cb)()],l.prototype,"layer",void 0),(0,d._)([(0,y.Cb)()],l.prototype,"suspended",void 0),l=(0,d._)([(0,P.j)("esri.views.3d.layers.WMTSLayerView3d")],l);const O=l},45611:(I,c,e)=>{e.d(c,{Z:()=>r});var _=e(17626),d=e(14517),v=e(61885),p=e(80542),E=e(61996),M=e(63290),y=e(62208),D=e(60330),o=e(77712),u=(e(85931),e(90912),e(76898));let t=class extends((0,p.p)((0,E.IG)((0,D.v)(v.Z.EventedMixin(d.Z))))){constructor(s){super(s),this.layer=null,this.parent=null}initialize(){this.when().catch(s=>{if("layerview:create-error"!==s.name){const l=this.layer&&this.layer.id||"no id",O=this.layer&&this.layer.title||"no title";M.Z.getLogger(this.declaredClass).error("#resolve()",`Failed to resolve layer view (layer title: '${O}', id: '${l}')`,s)}})}get fullOpacity(){return(0,y.Pt)(this.get("layer.opacity"),1)*(0,y.Pt)(this.get("parent.fullOpacity"),1)}get suspended(){return!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){return!this.suspended&&!0===this.layer?.legendEnabled}get updating(){return!(!this.updatingHandles?.updating&&!this.isUpdating())}get updatingProgress(){return this.updating?0:1}get visible(){return!0===this.layer?.visible}set visible(s){this._overrideIfSome("visible",s)}canResume(){return this.visible&&this.layer?.loaded&&!this.parent?.suspended&&this.view?.ready||!1}getSuspendInfo(){const s=this.parent&&this.parent.suspended?this.parent.suspendInfo:{};return this.view&&this.view.ready||(s.viewNotReady=!0),this.layer&&this.layer.loaded||(s.layerNotLoaded=!0),this.visible||(s.layerInvisible=!0),s}isUpdating(){return!1}};(0,_._)([(0,o.Cb)()],t.prototype,"fullOpacity",null),(0,_._)([(0,o.Cb)()],t.prototype,"layer",void 0),(0,_._)([(0,o.Cb)()],t.prototype,"parent",void 0),(0,_._)([(0,o.Cb)({readOnly:!0})],t.prototype,"suspended",null),(0,_._)([(0,o.Cb)({readOnly:!0})],t.prototype,"suspendInfo",null),(0,_._)([(0,o.Cb)({readOnly:!0})],t.prototype,"legendEnabled",null),(0,_._)([(0,o.Cb)({type:Boolean,readOnly:!0})],t.prototype,"updating",null),(0,_._)([(0,o.Cb)({readOnly:!0})],t.prototype,"updatingProgress",null),(0,_._)([(0,o.Cb)()],t.prototype,"visible",null),(0,_._)([(0,o.Cb)()],t.prototype,"view",void 0),t=(0,_._)([(0,u.j)("esri.views.layers.LayerView")],t);const r=t},94421:(I,c,e)=>{e.d(c,{Z:()=>o});var _=e(17626),d=e(63290),v=e(10699),p=e(32917),E=e(77712),D=(e(85931),e(90912),e(76898));const o=P=>{let h=class extends P{initialize(){this.handles.add((0,p.on)(()=>this.layer,"refresh",u=>{this.doRefresh(u.dataChanged).catch(t=>{(0,v.D_)(t)||d.Z.getLogger(this.declaredClass).error(t)})}),"RefreshableLayerView")}};return(0,_._)([(0,E.Cb)()],h.prototype,"layer",void 0),h=(0,_._)([(0,D.j)("esri.layers.mixins.RefreshableLayerView")],h),h}}}]);