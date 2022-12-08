"use strict";(self.webpackChunka_porrtal_io_app=self.webpackChunka_porrtal_io_app||[]).push([[465],{20465:(Je,M,i)=>{i.r(M),i.d(M,{default:()=>$e});var y=i(15861),n=i(17626),R=i(46160),S=i(26584),A=i(80542),ee=i(72392),j=i(62208),$=i(99959),B=i(10699),J=i(32917),te=i(95737),H=i(21726),s=i(77712),F=(i(85931),i(90912),i(68653)),G=i(76898),P=i(31283),re=i(44917),ie=i(50085),ne=i(65088),se=i(552),oe=i(50107),le=i(6733),ae=i(87987),de=i(49286),ue=i(6647),pe=i(30346),ye=i(99555),he=i(97941),ce=i(38305),O=i(13812),c=i(26331),Q=i(55911),z=i(36630),fe=i(86810),Y=i(99433),ve=i(67945);let m=class extends fe.wq{constructor(){super(...arguments),this.code=null,this.defaultValues={},this.domains=null,this.name=null}readDomains(e){if(!e)return null;const t={};for(const r of Object.keys(e))t[r]=(0,ve.im)(e[r]);return t}writeDomains(e,t){if(!e)return;const r={};for(const o of Object.keys(e))e[o]&&(r[o]=e[o]?.toJSON());t.domains=r}};(0,n._)([(0,s.Cb)({type:Number,json:{write:!0}})],m.prototype,"code",void 0),(0,n._)([(0,s.Cb)({type:Object,json:{write:!0}})],m.prototype,"defaultValues",void 0),(0,n._)([(0,s.Cb)({json:{write:!0}})],m.prototype,"domains",void 0),(0,n._)([(0,F.r)("domains")],m.prototype,"readDomains",null),(0,n._)([(0,Y.c)("domains")],m.prototype,"writeDomains",null),(0,n._)([(0,s.Cb)({type:String,json:{write:!0}})],m.prototype,"name",void 0),m=(0,n._)([(0,G.j)("esri.layers.support.Subtype")],m);const me=m;var ge=i(73281),be=i(4832),Ce=(i(49067),i(96794),i(69747),i(40425),i(69357)),D=i(40342),Se=i(73640),Fe=(i(33474),i(8314),i(61996)),I=i(58817),Oe=i(47996),Ie=i(94113),je=i(383),Te=i(27402),K=i(32777),Ze=i(170),Le=i(62667),Pe=i(49430),w=i(8080);const xe=["charts","editingEnabled","formTemplate","labelsVisible","labelingInfo","legendEnabled","minScale","maxScale","opacity","popupEnabled","popupTemplate","renderer","subtypeCode","templates","title","visible"],W={key:"type",base:Ce.Z,errorContext:"renderer",typeMap:{simple:D.Z,"unique-value":Se.Z,"class-breaks":be.Z}},X=(0,Q.v)(),q=(0,je.d)({types:W});let Ee=0;function T(e){const t=e.json.write;return"object"==typeof t?t.ignoreOrigin=!0:e.json.write={ignoreOrigin:!0},e}function Ge(e){switch(e){case"point":case"multipoint":return w.xA.clone();case"polyline":return w.CJ.clone();case"polygon":case"multipatch":return w.z3.clone();default:return null}}function k(e,t){return null==e?null:t.subtypes?.find(r=>r.code===e)}function we(e,t){let r=null;switch(t.geometryType){case"esriGeometryPoint":case"esriGeometryMultipoint":r="point";break;case"esriGeometryPolyline":r="line";break;case"esriGeometryPolygon":case"esriGeometryMultiPatch":r="polygon";break;default:r=null}const o={},d=k(e,t);if((0,j.pC)(d)){const{defaultValues:a}=d;for(const p in a)o[p]=a[p]}return o[t.subtypeField]=e,new K.Z({name:"New Feature",drawingTool:r,prototype:{attributes:o}})}let l=class extends((0,A.p)((0,$.R)((0,Fe.IG)(Oe.Z)))){constructor(e){super(e),this.charts=null,this.editingEnabled=!0,this.fieldOverrides=null,this.fieldsIndex=null,this.formTemplate=null,this.id=`${Date.now().toString(16)}-subtype-sublayer-${Ee++}`,this.type="subtype-sublayer",this.labelsVisible=!0,this.labelingInfo=null,this.layerType="ArcGISFeatureLayer",this.legendEnabled=!0,this.listMode="show",this.minScale=0,this.maxScale=0,this.opacity=1,this.popupEnabled=!0,this.popupTemplate=null,this.subtypeCode=null,this.templates=null,this.title=null,this.visible=!0}writeFieldOverrides(e,t,r){const{fields:o,parent:d}=this;let a;if(o){a=[];let p=0;o.forEach(({name:h,alias:g,editable:Z,visible:L})=>{if(!L)return;const f=d?.fields?.find(N=>N.name===h);if(!f)return;const b={name:h};let C=!1;g!==f.alias&&(b.alias=g,C=!0),Z!==f.editable&&(b.editable=Z,C=!0),a.push(b),C&&p++}),0===p&&a.length===o.length&&(a=null)}else a=(0,I.d9)(e);a?.length&&(0,Ie.RB)(r,a,t)}get fields(){const{parent:e,fieldOverrides:t,subtypeCode:r}=this,o=e?.fields;if(!o?.length)return null;const{subtypes:d,subtypeField:a}=e,p=d.find(L=>L.code===r),h=p?.defaultValues,g=p?.domains,Z=[];for(const L of o){const f=L.clone(),{name:b}=f,C=t?.find(E=>E.name===b);if(f.visible=!t||!!C,C){const{alias:E,editable:Be}=C;E&&(f.alias=E),!1===Be&&(f.editable=!1)}const N=h?.[b]??null;f.defaultValue=b===a?r:N;const V=g?.[b]??null;f.domain=b===a?null:V?"inherited"===V.type?f.domain:V.clone():null,Z.push(f)}return Z}get effectiveScaleRange(){const{minScale:e,maxScale:t}=this;return{minScale:e,maxScale:t}}get defaultPopupTemplate(){return this.createPopupTemplate()}set renderer(e){(0,z.YN)(e,this.fieldsIndex),this._override("renderer",e)}get renderer(){if(this._isOverridden("renderer"))return this._get("renderer");const{parent:e}=this;return e&&!e.isTable&&"mesh"!==e.geometryType?function Re(e){return new D.Z({symbol:Ge(e)})}(e.geometryType):null}readRendererFromService(e,t,r){if("Table"===t.type)return null;const o=t.drawingInfo?.renderer,d=q(o,t,r);let a;const{subtypeCode:p}=this;if(null!=p&&function De(e,t){return!(!t||"unique-value"!==e?.type||"string"!=typeof e.field||e.field.toLowerCase()!==t.toLowerCase()||e.field2||e.field3||e.valueExpression)}(d,t.subtypeField)){const h=d.uniqueValueInfos?.find(({value:g})=>(g="number"==typeof g?String(g):g)===String(p));h&&(a=new D.Z({symbol:h.symbol}))}else"simple"!==d?.type||d.visualVariables?.length||(a=d);return a}readRenderer(e,t,r){const o=t?.layerDefinition?.drawingInfo?.renderer;if(o&&!o.visualVariables?.length)return q(o,t,r)||void 0}readTemplatesFromService(e,t){return[we(this.subtypeCode,t)]}readTitleFromService(e,t){const r=k(this.subtypeCode,t);return(0,j.pC)(r)?r.name:null}createPopupTemplate(e){let t=this;const{parent:r,fields:o,title:d}=this;if(r){const{displayField:a,editFieldsInfo:p,objectIdField:h}=r;t={displayField:a,editFieldsInfo:p,fields:o,objectIdField:h,title:d}}return(0,Pe.eZ)(t,e)}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e){return this._getLayerDomain(e)}hasUserOverrides(){return xe.some(e=>this.originIdOf(e)===P.s3.USER)}_getLayerDomain(e){const t=this.fieldsIndex.get(e);return t?t.domain:null}};(0,n._)([(0,s.Cb)({json:{write:{ignoreOrigin:!0}}})],l.prototype,"charts",void 0),(0,n._)([(0,s.Cb)({type:Boolean,nonNullable:!0,json:{name:"enableEditing",write:{ignoreOrigin:!0}}})],l.prototype,"editingEnabled",void 0),(0,n._)([(0,s.Cb)({readOnly:!0,json:{name:"layerDefinition.fieldOverrides",origins:{service:{read:!1}},write:{ignoreOrigin:!0,allowNull:!0}}})],l.prototype,"fieldOverrides",void 0),(0,n._)([(0,Y.c)("fieldOverrides")],l.prototype,"writeFieldOverrides",null),(0,n._)([(0,s.Cb)({...X.fields,readOnly:!0,json:{read:!1}})],l.prototype,"fields",null),(0,n._)([(0,s.Cb)(X.fieldsIndex)],l.prototype,"fieldsIndex",void 0),(0,n._)([(0,s.Cb)({type:Te.Z,json:{name:"formInfo",write:{ignoreOrigin:!0}}})],l.prototype,"formTemplate",void 0),(0,n._)([(0,s.Cb)({type:String,readOnly:!0,json:{origins:{service:{read:!1}},write:{ignoreOrigin:!0}}})],l.prototype,"id",void 0),(0,n._)([(0,s.Cb)({readOnly:!0,json:{read:!1}})],l.prototype,"type",void 0),(0,n._)([(0,s.Cb)(T((0,I.d9)(O.iR)))],l.prototype,"labelsVisible",void 0),(0,n._)([(0,s.Cb)({type:[Ze.Z],json:{name:"layerDefinition.drawingInfo.labelingInfo",origins:{service:{read:!1}},read:{reader:Le.r},write:{ignoreOrigin:!0}}})],l.prototype,"labelingInfo",void 0),(0,n._)([(0,s.Cb)({type:["ArcGISFeatureLayer"],readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0}}})],l.prototype,"layerType",void 0),(0,n._)([(0,s.Cb)(T((0,I.d9)(O.rn)))],l.prototype,"legendEnabled",void 0),(0,n._)([(0,s.Cb)({type:["show","hide"]})],l.prototype,"listMode",void 0),(0,n._)([(0,s.Cb)((()=>{const e=(0,I.d9)(O.rO);return e.json.origins.service.read=!1,T(e)})())],l.prototype,"minScale",void 0),(0,n._)([(0,s.Cb)((()=>{const e=(0,I.d9)(O.u1);return e.json.origins.service.read=!1,T(e)})())],l.prototype,"maxScale",void 0),(0,n._)([(0,s.Cb)({readOnly:!0})],l.prototype,"effectiveScaleRange",null),(0,n._)([(0,s.Cb)({type:Number,range:{min:0,max:1},nonNullable:!0,json:{write:{ignoreOrigin:!0}}})],l.prototype,"opacity",void 0),(0,n._)([(0,s.Cb)()],l.prototype,"parent",void 0),(0,n._)([(0,s.Cb)(T((0,I.d9)(O.C_)))],l.prototype,"popupEnabled",void 0),(0,n._)([(0,s.Cb)({type:ge.Z,json:{name:"popupInfo",write:{ignoreOrigin:!0}}})],l.prototype,"popupTemplate",void 0),(0,n._)([(0,s.Cb)({readOnly:!0})],l.prototype,"defaultPopupTemplate",null),(0,n._)([(0,s.Cb)({types:W,json:{write:{target:"layerDefinition.drawingInfo.renderer",ignoreOrigin:!0}}})],l.prototype,"renderer",null),(0,n._)([(0,F.r)("service","renderer",["drawingInfo.renderer","subtypeField","type"])],l.prototype,"readRendererFromService",null),(0,n._)([(0,F.r)("renderer",["layerDefinition.drawingInfo.renderer"])],l.prototype,"readRenderer",null),(0,n._)([(0,s.Cb)({type:Number,json:{origins:{service:{read:!1}},write:{ignoreOrigin:!0}}})],l.prototype,"subtypeCode",void 0),(0,n._)([(0,s.Cb)({type:[K.Z],json:{name:"layerDefinition.templates",write:{ignoreOrigin:!0}}})],l.prototype,"templates",void 0),(0,n._)([(0,F.r)("service","templates",["geometryType","subtypeField","subtypes","type"])],l.prototype,"readTemplatesFromService",null),(0,n._)([(0,s.Cb)({type:String,json:{write:{ignoreOrigin:!0}}})],l.prototype,"title",void 0),(0,n._)([(0,F.r)("service","title",["subtypes"])],l.prototype,"readTitleFromService",null),(0,n._)([(0,s.Cb)({type:Boolean,nonNullable:!0,json:{name:"visibility",write:{ignoreOrigin:!0}}})],l.prototype,"visible",void 0),l=(0,n._)([(0,G.j)("esri.layers.support.SubtypeSublayer")],l);const x=l;var Ne=i(62708),Ve=i(5676),Me=i(96854);const v="SubtypeGroupLayer";function _(e,t){return new S.Z("layer:unsupported",`Layer (${e.title}, ${e.id}) of type '${e.declaredClass}' ${t}`,{layer:e})}const U=(0,Q.v)();let u=class extends((0,ae.B)((0,le.o1)((0,se.h)((0,he.n)((0,ye.M)((0,pe.Q)((0,ne.Y)((0,de.q)((0,ue.I)((0,$.R)((0,oe.N)((0,ie.V)((0,A.p)(re.Z)))))))))))))){constructor(...e){super(...e),this._handles=new ee.Z,this._sublayersCollectionChanged=!1,this.fields=null,this.fieldsIndex=null,this.outFields=null,this.subtypes=null,this.sublayers=new(R.Z.ofType(x)),this.timeInfo=null,this.title="Layer",this.type="subtype-group",this.addHandles((0,J.YP)(()=>this.sublayers,(t,r)=>this._handleSublayersChange(t,r),J.Z_))}destroy(){this.source?.destroy(),this._handles=(0,j.SC)(this._handles)}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}load(e){var t=this;const r=(0,j.pC)(e)?e.signal:null,o=this.loadFromPortal({supportedTypes:["Feature Service"]},e).catch(B.r9).then((0,y.Z)(function*(){if(!t.url)throw new S.Z("subtype-grouplayer:missing-url-or-source","SubtypeGroupLayer must be created with either a url or a portal item");if(null==t.layerId)throw new S.Z("subtype-grouplayer:missing-layerid","layerId is required for a SubtypeGroupLayer created with url");return t._initLayerProperties(yield t.createGraphicsSource(r))})).then(()=>this.finishLoadEditablePortalLayer(e));return this.addResolvingPromise(o),Promise.resolve(this)}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("gdbVersion"),this.commitProperty("historicMoment"),this.commitProperty("returnZ"),this.commitProperty("capabilities"),this.commitProperty("returnM"),(this._get("createQueryVersion")??0)+1}get editingEnabled(){return this.loaded&&this.capabilities.operations.supportsEditing&&this.userHasEditingPrivileges}get parsedUrl(){const e=(0,H.mN)(this.url);return null!=e&&null!=this.layerId&&(e.path=(0,H.v_)(e.path,this.layerId.toString())),e}set source(e){this._get("source")!==e&&this._set("source",e)}readTitleFromService(e,{name:t}){return this.url?(0,ce.a7)(this.url,t):t}addAttachment(e,t){var r=this;return(0,y.Z)(function*(){return(0,c.JD)(r,e,t,v)})()}updateAttachment(e,t,r){var o=this;return(0,y.Z)(function*(){return(0,c.Y5)(o,e,t,r,v)})()}applyEdits(e,t){var r=this;return(0,y.Z)(function*(){return(0,c.Jj)(r,e,t)})()}on(e,t){return super.on(e,t)}createGraphicsSource(e){var t=this;return(0,y.Z)(function*(){const{default:r}=yield(0,B.Hl)(i.e(4516).then(i.bind(i,14516)),e);return new r({layer:t}).load({signal:e})})()}createQuery(){const e=(0,c.rP)(this),t=this.sublayers.map(r=>r.subtypeCode);return e.where=(0,te._)(`${this.subtypeField} IN (${t.join(",")})`,this.definitionExpression),e}deleteAttachments(e,t){var r=this;return(0,y.Z)(function*(){return(0,c.FV)(r,e,t,v)})()}fetchRecomputedExtents(e){var t=this;return(0,y.Z)(function*(){return(0,c.Ci)(t,e,v)})()}getFieldDomain(e,t){return this._getLayerDomain(e)}getField(e){return this.fieldsIndex.get(e)}queryAttachments(e,t){var r=this;return(0,y.Z)(function*(){return(0,c.SU)(r,e,t,v)})()}queryFeatures(e,t){var r=this;return(0,y.Z)(function*(){const o=yield r.load(),d=Me.Z.from(e)??o.createQuery(),a=(0,j.Pt)(d.outFields,[]);a.includes(r.subtypeField)||(a.push(r.subtypeField),d.outFields=a);const p=yield o.source.queryFeatures(d,t);if(p?.features)for(const h of p.features)h.layer=r._findSublayerForFeature(h),h.sourceLayer=r;return p})()}queryObjectIds(e,t){var r=this;return(0,y.Z)(function*(){return(0,c.tD)(r,e,t,v)})()}queryFeatureCount(e,t){var r=this;return(0,y.Z)(function*(){return(0,c.VG)(r,e,t,v)})()}queryExtent(e,t){var r=this;return(0,y.Z)(function*(){return(0,c.KE)(r,e,t,v)})()}queryRelatedFeatures(e,t){var r=this;return(0,y.Z)(function*(){return(0,c.kp)(r,e,t,v)})()}queryRelatedFeaturesCount(e,t){var r=this;return(0,y.Z)(function*(){return(0,c.C9)(r,e,t,v)})()}write(e,t){const{origin:r,layerContainerType:o,messages:d}=t;if(this.isTable){if("web-scene"===r||"web-map"===r&&"tables"!==o)return d?.push(_(this,"using a table source cannot be written to web scenes and web maps")),null}else if(this.loaded&&"web-map"===r&&"tables"===o)return d?.push(_(this,"using a non-table source cannot be written to tables in web maps")),null;return this.sublayers?.length?super.write(e,t):(d?.push(new S.Z("web-document-write:invalid-property",`Layer (${this.title}, ${this.id}) of type '${this.declaredClass}' has invalid value for 'sublayers' property. 'sublayers' collection should contain at least one sublayer`,{layer:this})),null)}serviceSupportsSpatialReference(e){return!!this.loaded&&(0,Ve.D)(this,e)}_findSublayerForFeature(e){const t=this.fieldsIndex.get(this.subtypeField),r=e.attributes[t.name];return this.sublayers.find(o=>o.subtypeCode===r)}_getLayerDomain(e){const t=this.fieldsIndex.get(e);return t?t.domain:null}_initLayerProperties(e){var t=this;return(0,y.Z)(function*(){t._set("source",e);const{sourceJSON:r}=e;if(r&&(t.sourceJSON=r,t.read(r,{origin:"service",url:t.parsedUrl})),t.isTable)throw new S.Z("subtype-grouplayer:unsupported-source","SubtypeGroupLayer cannot be created using a layer with table source");if(!t.subtypes?.length)throw new S.Z("subtype-grouplayer:missing-subtypes","SubtypeGroupLayer must be created using a layer with subtypes");t._verifyFields(),(0,z.UF)(t.timeInfo,t.fieldsIndex)})()}hasDataChanged(){var e=this;return(0,y.Z)(function*(){return(0,c.gG)(e)})()}_verifyFields(){const e=this.parsedUrl?.path??"undefined";this.objectIdField||console.log("SubtypeGroupLayer: 'objectIdField' property is not defined (url: "+e+")"),this.isTable||-1!==e.search(/\/FeatureServer\//i)||this.fields?.some(t=>"geometry"===t.type)||console.log("SubtypeGroupLayer: unable to find field of type 'geometry' in the layer 'fields' list. If you are using a map service layer, features will not have geometry (url: "+e+")")}_handleSublayersChange(e,t){t&&(t.forEach(r=>{r.parent=null}),this.handles.remove("sublayers-owner")),e&&(e.forEach(r=>{r.parent=this}),this._sublayersCollectionChanged=!1,this.handles.add([e.on("after-add",({item:r})=>{r.parent=this}),e.on("after-remove",({item:r})=>{r.parent=null}),e.on("after-changes",()=>{this._sublayersCollectionChanged=!0})],"sublayers-owner"))}};(0,n._)([(0,s.Cb)({readOnly:!0})],u.prototype,"createQueryVersion",null),(0,n._)([(0,s.Cb)({type:Boolean,readOnly:!0})],u.prototype,"editingEnabled",null),(0,n._)([(0,s.Cb)({...U.fields,readOnly:!0,json:{origins:{service:{read:!0}},read:!1}})],u.prototype,"fields",void 0),(0,n._)([(0,s.Cb)(U.fieldsIndex)],u.prototype,"fieldsIndex",void 0),(0,n._)([(0,s.Cb)(O.id)],u.prototype,"id",void 0),(0,n._)([(0,s.Cb)({type:["show","hide","hide-children"]})],u.prototype,"listMode",void 0),(0,n._)([(0,s.Cb)({value:"SubtypeGroupLayer",type:["SubtypeGroupLayer"]})],u.prototype,"operationalLayerType",void 0),(0,n._)([(0,s.Cb)(U.outFields)],u.prototype,"outFields",void 0),(0,n._)([(0,s.Cb)({readOnly:!0})],u.prototype,"parsedUrl",null),(0,n._)([(0,s.Cb)()],u.prototype,"source",null),(0,n._)([(0,s.Cb)({type:[me],readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],u.prototype,"subtypes",void 0),(0,n._)([(0,s.Cb)({type:R.Z.ofType(x),json:{origins:{service:{read:{source:"subtypes",reader:(e,t,r)=>{const o=e.map(({code:d})=>{const a=new x({subtypeCode:d});return a.read(t,r),a});return new(R.Z.ofType(x))(o)}}}},name:"layers",write:{overridePolicy(e,t,r){const o=this.originOf("sublayers"),d=P.s3.PORTAL_ITEM;let a=!0;if((0,P.M9)(o)===d&&(0,P.M9)(r.origin)>d){const p=e.some(h=>h.hasUserOverrides());a=this._sublayersCollectionChanged||p}return{enabled:a,ignoreOrigin:!0}}}}})],u.prototype,"sublayers",void 0),(0,n._)([(0,s.Cb)({type:Ne.Z})],u.prototype,"timeInfo",void 0),(0,n._)([(0,s.Cb)({json:{origins:{"portal-item":{write:{ignoreOrigin:!0,writerEnsuresNonNull:!0}}}}})],u.prototype,"title",void 0),(0,n._)([(0,F.r)("service","title",["name"])],u.prototype,"readTitleFromService",null),(0,n._)([(0,s.Cb)({json:{read:!1}})],u.prototype,"type",void 0),u=(0,n._)([(0,G.j)("esri.layers.SubtypeGroupLayer")],u);const $e=u}}]);