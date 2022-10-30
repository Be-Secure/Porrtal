"use strict";(self.webpackChunka_porrtal_io_app=self.webpackChunka_porrtal_io_app||[]).push([[9735],{59735:(V,y,t)=>{t.r(y),t.d(y,{default:()=>J});var a=t(17626),h=t(84792),c=t(26584),P=t(80542),v=t(62208),D=t(99959),C=t(10699),d=t(21726),o=t(77712),f=(t(85931),t(8314),t(66656)),m=t(68653),T=t(76898),g=t(99433),O=t(65234),S=t(44917),R=t(50085),L=t(5143),U=t(19027),I=t(65088),W=t(552),A=t(50107),j=t(49286),B=t(6647),K=t(30346),x=t(99555),b=t(66120),u=t(38305),N=t(13812),G=t(39058);const M=["Canvas/World_Dark_Gray_Base","Canvas/World_Dark_Gray_Reference","Canvas/World_Light_Gray_Base","Canvas/World_Light_Gray_Reference","Elevation/World_Hillshade","Elevation/World_Hillshade_Dark","Ocean/World_Ocean_Base","Ocean/World_Ocean_Reference","Ocean_Basemap","Reference/World_Boundaries_and_Places","Reference/World_Boundaries_and_Places_Alternate","Reference/World_Transportation","World_Imagery","World_Street_Map","World_Topo_Map"];let s=class extends((0,W.h)((0,b.x)((0,x.M)((0,j.q)((0,B.I)((0,L.Z)((0,U.O)((0,I.Y)((0,D.R)((0,P.p)((0,K.Q)((0,R.V)((0,A.N)(S.Z)))))))))))))){constructor(...e){super(...e),this.listMode="show",this.isReference=null,this.operationalLayerType="ArcGISTiledMapServiceLayer",this.resampling=!0,this.sourceJSON=null,this.spatialReference=null,this.path=null,this.sublayers=null,this.type="tile",this.url=null}normalizeCtorArgs(e,r){return"string"==typeof e?{url:e,...r}:e}load(e){const r=(0,v.pC)(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).catch(C.r9).then(()=>this._fetchService(r))),Promise.resolve(this)}get attributionDataUrl(){const e=this.parsedUrl?.path.toLowerCase();return e&&this._getDefaultAttribution(this._getMapName(e))}readSpatialReference(e,r){return(e=e||r.tileInfo&&r.tileInfo.spatialReference)&&O.Z.fromJSON(e)}writeSublayers(e,r,i,_){if(!this.loaded||!e)return;const p=e.slice().reverse().flatten(({sublayers:n})=>n&&n.toArray().reverse()).toArray(),l=[],E={writeSublayerStructure:!1,..._};p.forEach(n=>{const Z=n.write({},E);l.push(Z)}),l.some(n=>Object.keys(n).length>1)&&(r.layers=l)}get tileServers(){return this._getDefaultTileServers(this.parsedUrl.path)}castTileServers(e){return Array.isArray(e)?e.map(r=>(0,d.mN)(r).path):null}fetchTile(e,r,i,_={}){const{signal:p}=_,l=this.getTileUrl(e,r,i),E={responseType:"image",signal:p,query:{...this.refreshParameters}};return(0,h.default)(l,E).then(n=>n.data)}getTileUrl(e,r,i){const p=(0,d.B7)({...this.parsedUrl.query,blankTile:!(!this.tilemapCache&&this.supportsBlankTile)&&null,...this.customParameters,token:this.apiKey}),l=this.tileServers;return`${l&&l.length?l[r%l.length]:this.parsedUrl.path}/tile/${e}/${r}/${i}${p?"?"+p:""}`}_fetchService(e){return new Promise((r,i)=>{if(this.sourceJSON){if(null!=this.sourceJSON.bandCount&&null!=this.sourceJSON.pixelSizeX)throw new c.Z("tile-layer:unsupported-url","use ImageryTileLayer to open a tiled image service");return void r({data:this.sourceJSON})}if(!this.parsedUrl)throw new c.Z("tile-layer:undefined-url","layer's url is not defined");const _=(0,u.Qc)(this.parsedUrl.path);if((0,v.pC)(_)&&"ImageServer"===_.serverType)throw new c.Z("tile-layer:unsupported-url","use ImageryTileLayer to open a tiled image service");(0,h.default)(this.parsedUrl.path,{query:{f:"json",...this.parsedUrl.query,...this.customParameters,token:this.apiKey},responseType:"json",signal:e}).then(r,i)}).then(r=>{if(r.ssl&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=r.data,this.read(r.data,{origin:"service",url:this.parsedUrl}),10.1===this.version&&!(0,u.M8)(this.url))return this._fetchServerVersion(this.url,e).then(i=>{this.read({currentVersion:i})}).catch(()=>{})})}_fetchServerVersion(e,r){if(!(0,u.B5)(e))return Promise.reject();const i=e.replace(/(.*\/rest)\/.*/i,"$1")+"/info";return(0,h.default)(i,{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:r}).then(_=>{if(_.data&&_.data.currentVersion)return _.data.currentVersion;throw new c.Z("tile-layer:version-not-available")})}_getMapName(e){const r=e.match(/^(?:https?:)?\/\/(server\.arcgisonline\.com|services\.arcgisonline\.com|ibasemaps-api\.arcgis\.com)\/arcgis\/rest\/services\/([^\/]+(\/[^\/]+)*)\/mapserver/i);return r&&r[2]}_getDefaultAttribution(e){if(!e)return;let r;e=e.toLowerCase();for(let i=0,_=M.length;i<_;i++)if(r=M[i],r.toLowerCase().includes(e))return(0,d.hF)("//static.arcgis.com/attribution/"+r)}_getDefaultTileServers(e){const r=-1!==e.search(/^(?:https?:)?\/\/server\.arcgisonline\.com/i),i=-1!==e.search(/^(?:https?:)?\/\/services\.arcgisonline\.com/i);return r||i?[e,e.replace(r?/server\.arcgisonline/i:/services\.arcgisonline/i,r?"services.arcgisonline":"server.arcgisonline")]:[]}get hasOverriddenFetchTile(){return!this.fetchTile.__isDefault__}};(0,a._)([(0,o.Cb)({readOnly:!0})],s.prototype,"attributionDataUrl",null),(0,a._)([(0,o.Cb)({type:["show","hide","hide-children"]})],s.prototype,"listMode",void 0),(0,a._)([(0,o.Cb)({json:{read:!0,write:!0}})],s.prototype,"blendMode",void 0),(0,a._)([(0,o.Cb)({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],s.prototype,"isReference",void 0),(0,a._)([(0,o.Cb)({readOnly:!0,type:["ArcGISTiledMapServiceLayer"]})],s.prototype,"operationalLayerType",void 0),(0,a._)([(0,o.Cb)({type:Boolean})],s.prototype,"resampling",void 0),(0,a._)([(0,o.Cb)()],s.prototype,"sourceJSON",void 0),(0,a._)([(0,o.Cb)({type:O.Z})],s.prototype,"spatialReference",void 0),(0,a._)([(0,m.r)("spatialReference",["spatialReference","tileInfo"])],s.prototype,"readSpatialReference",null),(0,a._)([(0,o.Cb)({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],s.prototype,"path",void 0),(0,a._)([(0,o.Cb)({readOnly:!0})],s.prototype,"sublayers",void 0),(0,a._)([(0,g.c)("sublayers",{layers:{type:[G.Z]}})],s.prototype,"writeSublayers",null),(0,a._)([(0,o.Cb)({json:{read:!1,write:!1}})],s.prototype,"popupEnabled",void 0),(0,a._)([(0,o.Cb)()],s.prototype,"tileServers",null),(0,a._)([(0,f.p)("tileServers")],s.prototype,"castTileServers",null),(0,a._)([(0,o.Cb)({readOnly:!0,json:{read:!1}})],s.prototype,"type",void 0),(0,a._)([(0,o.Cb)(N.HQ)],s.prototype,"url",void 0),s=(0,a._)([(0,T.j)("esri.layers.TileLayer")],s),s.prototype.fetchTile.__isDefault__=!0;const J=s}}]);