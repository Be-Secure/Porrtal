"use strict";(self.webpackChunka_porrtal_io_app=self.webpackChunka_porrtal_io_app||[]).push([[4366],{4366:(O,R,e)=>{e.r(R),e.d(R,{default:()=>H});var y=e(15861),l=e(17626),u=e(62208),P=e(10699),f=e(32917),E=(e(63290),e(90912),e(85931),e(26584)),m=(e(8314),e(76898)),w=e(69759),d=e(77712),x=e(72642),T=e(13812),i=e(96854),C=e(10023);const g=a=>{let s=class extends a{constructor(){super(...arguments),this.view=null}fetchPopupFeatures(r,n){var o=this;return(0,y.Z)(function*(){const{layer:v}=o;if(!r)throw new E.Z("imagerylayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:v});const{popupEnabled:p}=v,c=(0,C.V)(v,n);if(!p||(0,u.Wi)(c))throw new E.Z("imagerylayerview:fetchPopupFeatures","Missing required popupTemplate or popupEnabled",{popupEnabled:p,popupTemplate:c});const U=yield c.getRequiredFields(),D=new i.Z;D.timeExtent=o.timeExtent,D.geometry=r,D.outFields=U,D.outSpatialReference=r.spatialReference;const I=o.view.resolution,b="2d"===o.view.type?new x.Z(I,I,o.view.spatialReference):new x.Z(.5*I,.5*I,o.view.spatialReference),{returnTopmostRaster:L,showNoDataRecords:V}=c.layerOptions||{returnTopmostRaster:!0,showNoDataRecords:!1},W={returnDomainValues:!0,returnTopmostRaster:L,pixelSize:b,showNoDataRecords:V,signal:(0,u.pC)(n)?n.signal:null};return v.queryVisibleRasters(D,W).then(j=>j)})()}canResume(){return!!super.canResume()&&!this.timeExtent?.isEmpty}};return(0,l._)([(0,d.Cb)()],s.prototype,"layer",void 0),(0,l._)([(0,d.Cb)()],s.prototype,"suspended",void 0),(0,l._)([(0,d.Cb)(T.qG)],s.prototype,"timeExtent",void 0),(0,l._)([(0,d.Cb)()],s.prototype,"view",void 0),s=(0,l._)([(0,m.j)("esri.views.layers.ImageryLayerView")],s),s};let F=class extends(g(w.Z)){constructor(){var a;super(...arguments),a=this,this.type="imagery-3d",this.redrawDebounced=(0,P.Ds)(function(){var s=(0,y.Z)(function*(r){a.redraw((n,o)=>a._redrawImage(n,o),r)});return function(r){return s.apply(this,arguments)}}(),2e3)}initialize(){this.handles.add([(0,f.gx)(()=>this.view.basemapTerrain.ready,()=>this._initializeMaximumDataResolution(),{once:!0,initial:!0}),this.layer.on("redraw",()=>this.updatingHandles.addPromise(this.redrawDebounced()))]),this.updatingHandles.add(()=>this.layer?.exportImageServiceParameters?.version,()=>{this.updatingHandles.addPromise(this.refreshDebounced())}),this.updatingHandles.add(()=>this.layer?.renderer,()=>{this.updatingHandles.addPromise(this.refreshDebounced())}),this.updatingHandles.add(()=>this.timeExtent,()=>this.updatingHandles.addPromise(this.refreshDebounced()))}_initializeMaximumDataResolution(){this.maximumDataResolution=this.layer.loaded?this.layer.serviceRasterInfo.pixelSize:null}getFetchOptions(){return{timeExtent:this.timeExtent}}processResult(a,s,r){var n=this;return(0,y.Z)(function*(){s.imageOrCanvasElement?a.image=s.imageOrCanvasElement:(a.image=document.createElement("canvas"),a.pixelData=s.pixelData,yield n._redrawImage(a,r))})()}_redrawImage(a,s){var r=this;return(0,y.Z)(function*(){if(!(a.image instanceof HTMLCanvasElement)||(0,u.Wi)(a.pixelData))throw new Error;const n=a.image,o=n.getContext("2d"),v=yield r.layer.applyRenderer(a.pixelData,{signal:s}),p=r.layer.applyFilter(v).pixelBlock;if((0,u.Wi)(p))throw new Error;n.width=p.width,n.height=p.height;const c=o.createImageData(p.width,p.height);c.data.set(p.getAsRGBA()),o.putImageData(c,0,0)})()}};F=(0,l._)([(0,m.j)("esri.views.3d.layers.ImageryLayerView3D")],F);const H=F},10023:(O,R,e)=>{e.d(R,{V:()=>Z,e:()=>P});var y=e(15861),l=e(62208),u=e(36630);function P(t){return f.apply(this,arguments)}function f(){return(f=(0,y.Z)(function*(t,h=t.popupTemplate){if((0,l.Wi)(h))return[];const E=yield h.getRequiredFields(t.fieldsIndex),{lastEditInfoEnabled:M}=h,{objectIdField:m,typeIdField:w,globalIdField:d,relationships:x}=t;if(E.includes("*"))return["*"];const T=M?yield(0,u.CH)(t):[],i=(0,u.Q0)(t.fieldsIndex,[...E,...T]);return w&&i.push(w),i&&m&&t.fieldsIndex.has(m)&&!i.includes(m)&&i.push(m),i&&d&&t.fieldsIndex.has(d)&&!i.includes(d)&&i.push(d),x&&x.forEach(C=>{const{keyField:g}=C;i&&g&&t.fieldsIndex.has(g)&&!i.includes(g)&&i.push(g)}),i})).apply(this,arguments)}function Z(t,h){return t.popupTemplate?t.popupTemplate:(0,l.pC)(h)&&h.defaultPopupTemplateEnabled&&(0,l.pC)(t.defaultPopupTemplate)?t.defaultPopupTemplate:null}}}]);