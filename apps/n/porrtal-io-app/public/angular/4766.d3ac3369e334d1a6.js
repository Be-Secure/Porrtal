"use strict";(self.webpackChunka_porrtal_io_app=self.webpackChunka_porrtal_io_app||[]).push([[4766,7777],{77777:(O,y,l)=>{l.r(y),l.d(y,{hydratedAdapter:()=>_});var n=l(2004),a=l(72854),i=l(49672),g=l(37118),m=l(55214);const _={convertToGEGeometry:function E(o,t){if(null==t)return null;let u="cache"in t?t.cache._geVersion:void 0;return null==u&&(u=o.convertJSONToGeometry(t),"cache"in t&&(t.cache._geVersion=u)),u},exportPoint:function x(o,t,u){const s=o.hasZ(t),A=o.hasM(t),f=new i.Z({x:o.getPointX(t),y:o.getPointY(t),spatialReference:u});return s&&(f.z=o.getPointZ(t)),A&&(f.m=o.getPointM(t)),f.cache._geVersion=t,f},exportPolygon:function G(o,t,u){const s=new g.Z({rings:o.exportPaths(t),hasZ:o.hasZ(t),hasM:o.hasM(t),spatialReference:u});return s.cache._geVersion=t,s},exportPolyline:function M(o,t,u){const s=new m.Z({paths:o.exportPaths(t),hasZ:o.hasZ(t),hasM:o.hasM(t),spatialReference:u});return s.cache._geVersion=t,s},exportMultipoint:function P(o,t,u){const s=new a.Z({hasZ:o.hasZ(t),hasM:o.hasM(t),points:o.exportPoints(t),spatialReference:u});return s.cache._geVersion=t,s},exportExtent:function R(o,t,u){const s=o.hasZ(t),A=o.hasM(t),f=new n.Z({xmin:o.getXMin(t),ymin:o.getYMin(t),xmax:o.getXMax(t),ymax:o.getYMax(t),spatialReference:u});if(s){const p=o.getZExtent(t);f.zmin=p.vmin,f.zmax=p.vmax}if(A){const p=o.getMExtent(t);f.mmin=p.vmin,f.mmax=p.vmax}return f.cache._geVersion=t,f}}},44766:(O,y,l)=>{l.r(y),l.d(y,{buffer:()=>L,clip:()=>m,contains:()=>E,convexHull:()=>p,crosses:()=>x,cut:()=>_,densify:()=>H,difference:()=>I,disjoint:()=>t,distance:()=>G,equals:()=>M,extendedSpatialReferenceInfo:()=>g,flipHorizontal:()=>K,flipVertical:()=>U,generalize:()=>W,geodesicArea:()=>Y,geodesicBuffer:()=>B,geodesicDensify:()=>J,geodesicLength:()=>F,intersect:()=>Z,intersects:()=>P,isSimple:()=>A,nearestCoordinate:()=>j,nearestVertex:()=>S,nearestVertices:()=>T,offset:()=>C,overlaps:()=>u,planarArea:()=>N,planarLength:()=>X,relate:()=>s,rotate:()=>z,simplify:()=>f,symmetricDifference:()=>w,touches:()=>R,union:()=>V,within:()=>o});var n=l(4918),a=l(77777);function i(e){return Array.isArray(e)?e[0].spatialReference:e&&e.spatialReference}function g(e){return n.G.extendedSpatialReferenceInfo(e)}function m(e,r){return n.G.clip(a.hydratedAdapter,i(e),e,r)}function _(e,r){return n.G.cut(a.hydratedAdapter,i(e),e,r)}function E(e,r){return n.G.contains(a.hydratedAdapter,i(e),e,r)}function x(e,r){return n.G.crosses(a.hydratedAdapter,i(e),e,r)}function G(e,r,c){return n.G.distance(a.hydratedAdapter,i(e),e,r,c)}function M(e,r){return n.G.equals(a.hydratedAdapter,i(e),e,r)}function P(e,r){return n.G.intersects(a.hydratedAdapter,i(e),e,r)}function R(e,r){return n.G.touches(a.hydratedAdapter,i(e),e,r)}function o(e,r){return n.G.within(a.hydratedAdapter,i(e),e,r)}function t(e,r){return n.G.disjoint(a.hydratedAdapter,i(e),e,r)}function u(e,r){return n.G.overlaps(a.hydratedAdapter,i(e),e,r)}function s(e,r,c){return n.G.relate(a.hydratedAdapter,i(e),e,r,c)}function A(e){return n.G.isSimple(a.hydratedAdapter,i(e),e)}function f(e){return n.G.simplify(a.hydratedAdapter,i(e),e)}function p(e,r=!1){return n.G.convexHull(a.hydratedAdapter,i(e),e,r)}function I(e,r){return n.G.difference(a.hydratedAdapter,i(e),e,r)}function w(e,r){return n.G.symmetricDifference(a.hydratedAdapter,i(e),e,r)}function Z(e,r){return n.G.intersect(a.hydratedAdapter,i(e),e,r)}function V(e,r=null){return n.G.union(a.hydratedAdapter,i(e),e,r)}function C(e,r,c,d,h,D){return n.G.offset(a.hydratedAdapter,i(e),e,r,c,d,h,D)}function L(e,r,c,d=!1){return n.G.buffer(a.hydratedAdapter,i(e),e,r,c,d)}function B(e,r,c,d,h,D){return n.G.geodesicBuffer(a.hydratedAdapter,i(e),e,r,c,d,h,D)}function j(e,r,c=!0){return n.G.nearestCoordinate(a.hydratedAdapter,i(e),e,r,c)}function S(e,r){return n.G.nearestVertex(a.hydratedAdapter,i(e),e,r)}function T(e,r,c,d){return n.G.nearestVertices(a.hydratedAdapter,i(e),e,r,c,d)}function v(e){return"xmin"in e?"center"in e?e.center:null:"x"in e?e:"extent"in e?e.extent.center:null}function z(e,r,c){if(null==e)throw new Error("Illegal Argument Exception");const d=e.spatialReference;if(null==(c=c??v(e)))throw new Error("Illegal Argument Exception");const h=e.constructor.fromJSON(n.G.rotate(e,r,c));return h.spatialReference=d,h}function K(e,r){if(null==e)throw new Error("Illegal Argument Exception");const c=e.spatialReference;if(null==(r=r??v(e)))throw new Error("Illegal Argument Exception");const d=e.constructor.fromJSON(n.G.flipHorizontal(e,r));return d.spatialReference=c,d}function U(e,r){if(null==e)throw new Error("Illegal Argument Exception");const c=e.spatialReference;if(null==(r=r??v(e)))throw new Error("Illegal Argument Exception");const d=e.constructor.fromJSON(n.G.flipVertical(e,r));return d.spatialReference=c,d}function W(e,r,c,d){return n.G.generalize(a.hydratedAdapter,i(e),e,r,c,d)}function H(e,r,c){return n.G.densify(a.hydratedAdapter,i(e),e,r,c)}function J(e,r,c,d=0){return n.G.geodesicDensify(a.hydratedAdapter,i(e),e,r,c,d)}function N(e,r){return n.G.planarArea(a.hydratedAdapter,i(e),e,r)}function X(e,r){return n.G.planarLength(a.hydratedAdapter,i(e),e,r)}function Y(e,r,c){return n.G.geodesicArea(a.hydratedAdapter,i(e),e,r,c)}function F(e,r,c){return n.G.geodesicLength(a.hydratedAdapter,i(e),e,r,c)}}}]);