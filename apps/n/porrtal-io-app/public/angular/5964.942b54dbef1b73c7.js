"use strict";(self.webpackChunka_porrtal_io_app=self.webpackChunka_porrtal_io_app||[]).push([[5964],{25964:(U,d,s)=>{s.r(d),s.d(d,{default:()=>f});var _=s(17626),v=s(46882),E=s(47877),p=s(62208),M=s(99959),n=s(32917),r=s(77712),O=(s(85931),s(52323)),c=(s(90912),s(76898)),P=s(99433),b=s(44917),L=s(552),C=s(49286),D=s(6647),u=s(99555),T=s(30164),R=s(38953),j=s(6432),A=s(6119),I=s(32584);let t=class extends((0,L.h)((0,u.M)((0,C.q)((0,D.I)((0,A.Q)((0,j.K)((0,M.R)(b.Z)))))))){constructor(i){super(i),this._visibilityHandles={},this.allLayers=new v.Z({getCollections:()=>[this.layers],getChildrenFunction:e=>"layers"in e?e.layers:null}),this.allTables=(0,R.a)(this),this.fullExtent=void 0,this.operationalLayerType="GroupLayer",this.spatialReference=void 0,this.type="group"}initialize(){this._enforceVisibility(this.visibilityMode,this.visible),this.addHandles((0,n.YP)(()=>this.visible,this._onVisibilityChange.bind(this),n.Z_))}_writeLayers(i,e,a,l){const o=[];if(!i)return o;i.forEach(h=>{const y=(0,I.Nw)(h,l.webmap?l.webmap.getLayerJSONFromResourceInfo(h):null,l);(0,p.pC)(y)&&y.layerType&&o.push(y)}),e.layers=o}set portalItem(i){this._set("portalItem",i)}set visibilityMode(i){const e=this._get("visibilityMode")!==i;this._set("visibilityMode",i),e&&this._enforceVisibility(i,this.visible)}load(i){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Service","Feature Collection","Scene Service"],layerModuleTypeMap:T.T},i)),Promise.resolve(this)}loadAll(){return(0,E.G)(this,i=>{i(this.layers,this.tables)})}layerAdded(i){i.visible&&"exclusive"===this.visibilityMode?this._turnOffOtherLayers(i):"inherited"===this.visibilityMode&&(i.visible=this.visible),this._visibilityHandles[i.uid]=(0,n.YP)(()=>i.visible,e=>this._onChildVisibilityChange(i,e),n.Z_)}layerRemoved(i){const e=this._visibilityHandles[i.uid];e&&(e.remove(),delete this._visibilityHandles[i.uid]),this._enforceVisibility(this.visibilityMode,this.visible)}_turnOffOtherLayers(i){this.layers.forEach(e=>{e!==i&&(e.visible=!1)})}_enforceVisibility(i,e){if(!(0,O.vw)(this).initialized)return;const a=this.layers;let l=a.find(o=>o.visible);switch(i){case"exclusive":a.length&&!l&&(l=a.getItemAt(0),l.visible=!0),this._turnOffOtherLayers(l);break;case"inherited":a.forEach(o=>{o.visible=e})}}_onVisibilityChange(i){"inherited"===this.visibilityMode&&this.layers.forEach(e=>{e.visible=i})}_onChildVisibilityChange(i,e){switch(this.visibilityMode){case"exclusive":e?this._turnOffOtherLayers(i):this._isAnyLayerVisible()||(i.visible=!0);break;case"inherited":i.visible=this.visible}}_isAnyLayerVisible(){return this.layers.some(i=>i.visible)}};(0,_._)([(0,r.Cb)({readOnly:!0,dependsOn:[]})],t.prototype,"allLayers",void 0),(0,_._)([(0,r.Cb)({readOnly:!0})],t.prototype,"allTables",void 0),(0,_._)([(0,r.Cb)()],t.prototype,"fullExtent",void 0),(0,_._)([(0,r.Cb)({json:{read:!0,write:!0}})],t.prototype,"blendMode",void 0),(0,_._)([(0,r.Cb)({json:{read:!1,write:{ignoreOrigin:!0}}})],t.prototype,"layers",void 0),(0,_._)([(0,P.c)("layers")],t.prototype,"_writeLayers",null),(0,_._)([(0,r.Cb)({type:["GroupLayer"]})],t.prototype,"operationalLayerType",void 0),(0,_._)([(0,r.Cb)({json:{origins:{"web-document":{read:!1,write:!1}}}})],t.prototype,"portalItem",null),(0,_._)([(0,r.Cb)()],t.prototype,"spatialReference",void 0),(0,_._)([(0,r.Cb)({json:{read:!1},readOnly:!0,value:"group"})],t.prototype,"type",void 0),(0,_._)([(0,r.Cb)({type:["independent","inherited","exclusive"],value:"independent",json:{write:!0,origins:{"web-map":{read:!1,write:!1}}}})],t.prototype,"visibilityMode",null),t=(0,_._)([(0,c.j)("esri.layers.GroupLayer")],t);const f=t}}]);