"use strict";(self.webpackChunka_porrtal_io_app=self.webpackChunka_porrtal_io_app||[]).push([[2903],{72903:(b,g,r)=>{r.r(g),r.d(g,{default:()=>ft});var y=r(15861),o=r(17626),C=(r(29132),r(73281)),F=(r(4832),r(49067),r(96794),r(69747),r(40425),r(69357),r(40342),r(73640),r(33474),r(32088)),h=r(62208),W=r(99959),T=r(10699),M=r(21726),n=r(77712),L=(r(85931),r(90912),r(76898)),U=r(71774),H=r(44917),A=r(26584),V=r(8314),K=r(47996),Y=r(63290),X=r(59289),w=r(56554),q=r(17253),Q=r(2004),k=r(37118);const G="esri.layers.graphics.sources.GeoJSONSource",B=Y.Z.getLogger(G);let v=class extends K.Z{constructor(){var t;super(...arguments),t=this,this.type="geojson",this.refresh=(0,T.Ds)(function(){var e=(0,y.Z)(function*(s){yield t.load();const{extent:a,timeExtent:p}=yield t._connection.invoke("refresh",s);return t.sourceJSON.extent=a,p&&(t.sourceJSON.timeInfo.timeExtent=[p.start,p.end]),{dataChanged:!0,updates:{extent:t.sourceJSON.extent,timeInfo:t.sourceJSON.timeInfo}}});return function(s){return e.apply(this,arguments)}}())}load(t){const e=(0,h.pC)(t)?t.signal:null;return this.addResolvingPromise(this._startWorker(e)),Promise.resolve(this)}destroy(){this._connection?.close(),this._connection=null}applyEdits(t){return this.load().then(()=>this._applyEdits(t))}openPorts(){return this.load().then(()=>this._connection.openPorts())}queryFeatures(t,e={}){return this.load(e).then(()=>this._connection.invoke("queryFeatures",t?t.toJSON():null,e)).then(s=>q.default.fromJSON(s))}queryFeaturesJSON(t,e={}){return this.load(e).then(()=>this._connection.invoke("queryFeatures",t?t.toJSON():null,e))}queryFeatureCount(t,e={}){return this.load(e).then(()=>this._connection.invoke("queryFeatureCount",t?t.toJSON():null,e))}queryObjectIds(t,e={}){return this.load(e).then(()=>this._connection.invoke("queryObjectIds",t?t.toJSON():null,e))}queryExtent(t,e={}){return this.load(e).then(()=>this._connection.invoke("queryExtent",t?t.toJSON():null,e)).then(s=>({count:s.count,extent:Q.Z.fromJSON(s.extent)}))}querySnapping(t,e={}){return this.load(e).then(()=>this._connection.invoke("querySnapping",t,e))}_applyEdits(t){if(!this._connection)throw new A.Z("geojson-layer-source:edit-failure","Memory source not loaded");const e=this.layer.objectIdField,s=[],a=[],p=[];if(t.addFeatures)for(const l of t.addFeatures)s.push(this._serializeFeature(l));if(t.deleteFeatures)for(const l of t.deleteFeatures)"objectId"in l&&null!=l.objectId?a.push(l.objectId):"attributes"in l&&null!=l.attributes[e]&&a.push(l.attributes[e]);if(t.updateFeatures)for(const l of t.updateFeatures)p.push(this._serializeFeature(l));return this._connection.invoke("applyEdits",{adds:s,updates:p,deletes:a}).then(({extent:l,timeExtent:m,featureEditResults:f})=>(this.sourceJSON.extent=l,m&&(this.sourceJSON.timeInfo.timeExtent=[m.start,m.end]),this._createEditsResult(f)))}_createEditsResult(t){return{addFeatureResults:t.addResults?t.addResults.map(this._createFeatureEditResult,this):[],updateFeatureResults:t.updateResults?t.updateResults.map(this._createFeatureEditResult,this):[],deleteFeatureResults:t.deleteResults?t.deleteResults.map(this._createFeatureEditResult,this):[],addAttachmentResults:[],updateAttachmentResults:[],deleteAttachmentResults:[]}}_createFeatureEditResult(t){const e=!0===t.success?null:t.error||{code:void 0,description:void 0};return{objectId:t.objectId,globalId:t.globalId,error:e?new A.Z("geojson-layer-source:edit-failure",e.description,{code:e.code}):null}}_serializeFeature(t){const{attributes:e}=t,s=this._geometryForSerialization(t);return s?{geometry:s.toJSON(),attributes:e}:{attributes:e}}_geometryForSerialization(t){const{geometry:e}=t;return(0,h.Wi)(e)?null:"mesh"===e.type||"extent"===e.type?k.Z.fromExtent(e.extent):e}_startWorker(t){var e=this;return(0,y.Z)(function*(){e._connection=yield(0,X.bA)("GeoJSONSourceWorker",{strategy:(0,V.Z)("feature-layers-workers")?"dedicated":"local",signal:t});const{fields:s,spatialReference:a,hasZ:p,geometryType:l,objectIdField:m,url:f,timeInfo:$,customParameters:gt}=e.layer,Ct="defaults"===e.layer.originOf("spatialReference"),St={url:f,customParameters:gt,fields:s&&s.map(I=>I.toJSON()),geometryType:U.Mk.toJSON(l),hasZ:p,objectIdField:m,timeInfo:$?$.toJSON():null,spatialReference:Ct?null:a&&a.toJSON()},O=yield e._connection.invoke("load",St,{signal:t});for(const I of O.warnings)B.warn(I.message,{layer:e.layer,warning:I});O.featureErrors.length&&B.warn(`Encountered ${O.featureErrors.length} validation errors while loading features`,O.featureErrors),e.sourceJSON=O.layerDefinition,e.capabilities=(0,w.MS)(e.sourceJSON.hasZ,!0)})()}};(0,o._)([(0,n.Cb)()],v.prototype,"capabilities",void 0),(0,o._)([(0,n.Cb)()],v.prototype,"type",void 0),(0,o._)([(0,n.Cb)({constructOnly:!0})],v.prototype,"layer",void 0),(0,o._)([(0,n.Cb)()],v.prototype,"sourceJSON",void 0),v=(0,o._)([(0,L.j)(G)],v);var _=r(552),tt=r(50107),et=r(35126),rt=r(81380),st=r(49286),ot=r(32629),nt=r(6647),it=r(30346),at=r(99555),lt=r(97941),c=r(13812),ut=r(32777),pt=r(41638),dt=r(36255),yt=r(55911),R=r(36630),ht=r(170),ct=r(62667),S=r(96854),mt=r(49430),z=r(65234);const vt=(0,yt.v)();let i=class extends((0,ot.c)((0,tt.N)((0,rt.M)((0,et.b)((0,_.h)((0,lt.n)((0,at.M)((0,it.Q)((0,st.q)((0,nt.I)((0,W.R)(H.Z)))))))))))){constructor(t){super(t),this.copyright=null,this.definitionExpression=null,this.displayField=null,this.editingEnabled=!1,this.elevationInfo=null,this.fields=null,this.fieldsIndex=null,this.fullExtent=null,this.geometryType=null,this.hasZ=void 0,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.objectIdField=null,this.operationalLayerType="GeoJSON",this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=new v({layer:this}),this.spatialReference=z.Z.WGS84,this.templates=null,this.title="GeoJSON",this.type="geojson",this.typeIdField=null,this.types=null}destroy(){this.source?.destroy()}load(t){const e=this.loadFromPortal({supportedTypes:["GeoJson"],supportsData:!1},t).catch(T.r9).then(()=>this.source.load(t)).then(()=>{this.read(this.source.sourceJSON,{origin:"service",url:this.parsedUrl}),this.revert(["objectIdField","fields","timeInfo"],"service"),(0,R.YN)(this.renderer,this.fieldsIndex),(0,R.UF)(this.timeInfo,this.fieldsIndex)});return this.addResolvingPromise(e),Promise.resolve(this)}get capabilities(){return this.source?this.source.capabilities:null}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("capabilities"),(this._get("createQueryVersion")||0)+1}get defaultPopupTemplate(){return this.createPopupTemplate()}get isTable(){return this.loaded&&null==this.geometryType}get parsedUrl(){return this.url?(0,M.mN)(this.url):null}set renderer(t){(0,R.YN)(t,this.fieldsIndex),this._set("renderer",t)}set url(t){if(!t)return void this._set("url",t);const e=(0,M.mN)(t);this._set("url",e.path),e.query&&(this.customParameters={...this.customParameters,...e.query})}applyEdits(t,e){var s=this;return(0,y.Z)(function*(){const a=yield r.e(5362).then(r.bind(r,95362));yield s.load();const p=yield a.applyEdits(s,s.source,t,e);return s.read({extent:s.source.sourceJSON.extent,timeInfo:s.source.sourceJSON.timeInfo},{origin:"service",ignoreDefaults:!0}),p})()}on(t,e){return super.on(t,e)}createPopupTemplate(t){return(0,mt.eZ)(this,t)}createQuery(){const t=new S.Z,e=this.get("capabilities.data");t.returnGeometry=!0,e&&e.supportsZ&&(t.returnZ=!0),t.outFields=["*"],t.where=this.definitionExpression||"1=1";const{timeOffset:s,timeExtent:a}=this;return t.timeExtent=null!=s&&null!=a?a.offset(-s.value,s.unit):a||null,t}getFieldDomain(t,e){let s,a=!1;const p=e&&e.feature,l=p&&p.attributes,m=this.typeIdField&&l&&l[this.typeIdField];return null!=m&&this.types&&(a=this.types.some(f=>f.id==m&&(s=f.domains&&f.domains[t],s&&"inherited"===s.type&&(s=this._getLayerDomain(t)),!0))),a||s||(s=this._getLayerDomain(t)),s}getField(t){return this.fieldsIndex.get(t)}queryFeatures(t,e){return this.load().then(()=>this.source.queryFeatures(S.Z.from(t)||this.createQuery(),e)).then(s=>{if(s?.features)for(const a of s.features)a.layer=a.sourceLayer=this;return s})}queryObjectIds(t,e){return this.load().then(()=>this.source.queryObjectIds(S.Z.from(t)||this.createQuery(),e))}queryFeatureCount(t,e){return this.load().then(()=>this.source.queryFeatureCount(S.Z.from(t)||this.createQuery(),e))}queryExtent(t,e){return this.load().then(()=>this.source.queryExtent(S.Z.from(t)||this.createQuery(),e))}hasDataChanged(){var t=this;return(0,y.Z)(function*(){try{const{dataChanged:e,updates:s}=yield t.source.refresh(t.customParameters);return(0,h.pC)(s)&&t.read(s,{origin:"service",url:t.parsedUrl,ignoreDefaults:!0}),e}catch{}return!1})()}_getLayerDomain(t){if(!this.fields)return null;let e=null;return this.fields.some(s=>(s.name===t&&(e=s.domain),!!e)),e}};(0,o._)([(0,n.Cb)({readOnly:!0,json:{read:!1,write:!1}})],i.prototype,"capabilities",null),(0,o._)([(0,n.Cb)({type:String})],i.prototype,"copyright",void 0),(0,o._)([(0,n.Cb)({readOnly:!0})],i.prototype,"createQueryVersion",null),(0,o._)([(0,n.Cb)({readOnly:!0})],i.prototype,"defaultPopupTemplate",null),(0,o._)([(0,n.Cb)({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],i.prototype,"definitionExpression",void 0),(0,o._)([(0,n.Cb)({type:String})],i.prototype,"displayField",void 0),(0,o._)([(0,n.Cb)({type:Boolean})],i.prototype,"editingEnabled",void 0),(0,o._)([(0,n.Cb)(c.PV)],i.prototype,"elevationInfo",void 0),(0,o._)([(0,n.Cb)({type:[dt.Z],json:{name:"layerDefinition.fields",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"fields"}}}})],i.prototype,"fields",void 0),(0,o._)([(0,n.Cb)(vt.fieldsIndex)],i.prototype,"fieldsIndex",void 0),(0,o._)([(0,n.Cb)({type:Q.Z,json:{name:"extent"}})],i.prototype,"fullExtent",void 0),(0,o._)([(0,n.Cb)({type:["point","polygon","polyline","multipoint"],json:{read:{reader:U.Mk.read}}})],i.prototype,"geometryType",void 0),(0,o._)([(0,n.Cb)({type:Boolean})],i.prototype,"hasZ",void 0),(0,o._)([(0,n.Cb)(c.id)],i.prototype,"id",void 0),(0,o._)([(0,n.Cb)({type:Boolean,readOnly:!0})],i.prototype,"isTable",null),(0,o._)([(0,n.Cb)(c.iR)],i.prototype,"labelsVisible",void 0),(0,o._)([(0,n.Cb)({type:[ht.Z],json:{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:ct.r},write:!0}})],i.prototype,"labelingInfo",void 0),(0,o._)([(0,n.Cb)(c.rn)],i.prototype,"legendEnabled",void 0),(0,o._)([(0,n.Cb)({type:["show","hide"]})],i.prototype,"listMode",void 0),(0,o._)([(0,n.Cb)({type:String,json:{name:"layerDefinition.objectIdField",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"objectIdField"}}}})],i.prototype,"objectIdField",void 0),(0,o._)([(0,n.Cb)(c.Oh)],i.prototype,"opacity",void 0),(0,o._)([(0,n.Cb)({type:["GeoJSON"]})],i.prototype,"operationalLayerType",void 0),(0,o._)([(0,n.Cb)({readOnly:!0})],i.prototype,"parsedUrl",null),(0,o._)([(0,n.Cb)(c.C_)],i.prototype,"popupEnabled",void 0),(0,o._)([(0,n.Cb)({type:C.Z,json:{name:"popupInfo",write:!0}})],i.prototype,"popupTemplate",void 0),(0,o._)([(0,n.Cb)({types:F.A,json:{name:"layerDefinition.drawingInfo.renderer",write:!0,origins:{service:{name:"drawingInfo.renderer"},"web-scene":{types:F.o}}}})],i.prototype,"renderer",null),(0,o._)([(0,n.Cb)(c.YI)],i.prototype,"screenSizePerspectiveEnabled",void 0),(0,o._)([(0,n.Cb)({readOnly:!0})],i.prototype,"source",void 0),(0,o._)([(0,n.Cb)({type:z.Z})],i.prototype,"spatialReference",void 0),(0,o._)([(0,n.Cb)({type:[ut.Z]})],i.prototype,"templates",void 0),(0,o._)([(0,n.Cb)()],i.prototype,"title",void 0),(0,o._)([(0,n.Cb)({json:{read:!1},readOnly:!0})],i.prototype,"type",void 0),(0,o._)([(0,n.Cb)({type:String,readOnly:!0})],i.prototype,"typeIdField",void 0),(0,o._)([(0,n.Cb)({type:[pt.Z]})],i.prototype,"types",void 0),(0,o._)([(0,n.Cb)(c.HQ)],i.prototype,"url",null),i=(0,o._)([(0,L.j)("esri.layers.GeoJSONLayer")],i);const ft=i},87757:(b,g,r)=>{r.d(g,{g:()=>y});const y={supportsStatistics:!0,supportsPercentileStatistics:!0,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsCentroid:!0,supportsCacheHint:!1,supportsDistance:!0,supportsDistinct:!0,supportsExtent:!0,supportsGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQuantization:!0,supportsQuantizationEditMode:!1,supportsQueryGeometry:!0,supportsResultType:!1,supportsSqlExpression:!0,supportsMaxRecordCountFactor:!1,supportsStandardizedQueriesOnly:!0,supportsTopFeaturesQuery:!1,supportsQueryByOthers:!0,supportsHistoricMoment:!1,supportsFormatPBF:!1,supportsDisjointSpatialRelationship:!0,supportsDefaultSpatialReference:!1,supportsFullTextSearch:!1,supportsCompactGeometry:!1,maxRecordCountFactor:void 0,maxRecordCount:void 0,standardMaxRecordCount:void 0,tileMaxRecordCount:void 0}},56554:(b,g,r)=>{r.d(g,{Dm:()=>Z,Hq:()=>D,MS:()=>J,bU:()=>P});var y=r(8314),o=r(58817),x=r(87757),C=r(24837);function P(u){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===u||"esriGeometryMultipoint"===u?C.I4:"esriGeometryPolyline"===u?C.ET:C.lF}}}const N=/^[_$a-zA-Z][_$a-zA-Z0-9]*$/;let j=1;function Z(u,d){if((0,y.Z)("esri-csp-restrictions"))return()=>({[d]:null,...u});try{let E=`this.${d} = null;`;for(const h in u)E+=`this${N.test(h)?`.${h}`:`["${h}"]`} = ${JSON.stringify(u[h])};`;const F=new Function(`\n      return class AttributesClass$${j++} {\n        constructor() {\n          ${E};\n        }\n      }\n    `)();return()=>new F}catch{return()=>({[d]:null,...u})}}function D(u={}){return[{name:"New Feature",description:"",prototype:{attributes:(0,o.d9)(u)}}]}function J(u,d){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:u},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:d,supportsDelete:d,supportsEditing:d,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:d,supportsExceedsLimitStatistics:!0},query:x.g,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},editing:{supportsGeometryUpdate:d,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1}}}}}]);