"use strict";(self.webpackChunka_porrtal_io_app=self.webpackChunka_porrtal_io_app||[]).push([[1318],{21318:(l,r,_)=>{_.r(r),_.d(r,{TerrainTileTree3DDebugger:()=>e});var E=_(17626),o=(_(29132),_(62208)),a=_(32917),n=(_(63290),_(90912),_(85931),_(26584),_(8314),_(76898)),D=_(65401),P=_(73187),T=_(37118);let e=class extends P.q{constructor(s){super(s),this.enablePolygons=!1}initialize(){(0,a.YP)(()=>this.enabled,s=>this.view.basemapTerrain.renderPatchBorders=s,a.nn)}getTiles(){const s=(0,o.pC)(this.view.basemapTerrain.spatialReference)?this.view.basemapTerrain.spatialReference:null;return this.view.basemapTerrain.test.getRenderedTiles().map(t=>({...t,geometry:T.Z.fromExtent((0,D.HH)(t.extent,s))}))}};e=(0,E._)([(0,n.j)("esri.views.3d.layers.support.TerrainTileTree3DDebugger")],e)}}]);