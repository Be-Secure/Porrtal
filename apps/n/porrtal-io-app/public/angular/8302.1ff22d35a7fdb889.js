"use strict";(self.webpackChunka_porrtal_io_app=self.webpackChunka_porrtal_io_app||[]).push([[8302],{38302:(_n,C,w)=>{w.r(C),w.d(C,{registerFunctions:()=>U});var P=w(15861),sn=w(24263),g=w(27187),u=w(47562),V=w(85692),d=w(2004),x=w(21674),f=w(87215),F=w(72854),G=w(72642),H=w(37118),R=w(55214),m=w(91179),l=w(25919),j=w(16730);function M(o){return 0===sn.i8.indexOf("4.")?H.Z.fromExtent(o):new H.Z({spatialReference:o.spatialReference,rings:[[[o.xmin,o.ymin],[o.xmin,o.ymax],[o.xmax,o.ymax],[o.xmax,o.ymin],[o.xmin,o.ymin]]]})}function O(o,e,i){if((0,u.y)(o,2,2,e,i),!(o[0]instanceof x.Z&&o[1]instanceof x.Z||o[0]instanceof x.Z&&null===o[1]||o[1]instanceof x.Z&&null===o[0]||null===o[0]&&null===o[1]))throw new l.aV(e,l.rH.InvalidParameter,i)}function N(o,e){return L.apply(this,arguments)}function L(){return(L=(0,P.Z)(function*(o,e){if("polygon"!==o.type&&"polyline"!==o.type&&"extent"!==o.type)return 0;let i=1;(o.spatialReference.vcsWkid||o.spatialReference.latestVcsWkid)&&(i=(0,V._R)(o.spatialReference)/(0,j.c9)(o.spatialReference));let y=0;if("polyline"===o.type)for(const n of o.paths)for(let a=1;a<n.length;a++)y+=(0,V.AW)(n[a],n[a-1],i);else if("polygon"===o.type)for(const n of o.rings){for(let a=1;a<n.length;a++)y+=(0,V.AW)(n[a],n[a-1],i);(n[0][0]!==n[n.length-1][0]||n[0][1]!==n[n.length-1][1]||void 0!==n[0][2]&&n[0][2]!==n[n.length-1][2])&&(y+=(0,V.AW)(n[0],n[n.length-1],i))}else"extent"===o.type&&(y+=2*(0,V.AW)([o.xmin,o.ymin,0],[o.xmax,o.ymin,0],i),y+=2*(0,V.AW)([o.xmin,o.ymin,0],[o.xmin,o.ymax,0],i),y*=2,y+=4*Math.abs((0,u.A)(o.zmax,0)*i-(0,u.A)(o.zmin,0)*i));const p=new R.Z({hasZ:!1,hasM:!1,spatialReference:o.spatialReference,paths:[[0,0],[0,y]]});return(0,f.sz)(p,e)})).apply(this,arguments)}function U(o){"async"===o.mode&&(o.functions.disjoint=function(e,i){return o.standardFunctionAsync(e,i,(y,p,n)=>(O(n=(0,u.G)(n),e,i),null===n[0]||null===n[1]||(0,f.ED)(n[0],n[1])))},o.functions.intersects=function(e,i){return o.standardFunctionAsync(e,i,(y,p,n)=>(O(n=(0,u.G)(n),e,i),null!==n[0]&&null!==n[1]&&(0,f.kK)(n[0],n[1])))},o.functions.touches=function(e,i){return o.standardFunctionAsync(e,i,(y,p,n)=>(O(n=(0,u.G)(n),e,i),null!==n[0]&&null!==n[1]&&(0,f.W4)(n[0],n[1])))},o.functions.crosses=function(e,i){return o.standardFunctionAsync(e,i,(y,p,n)=>(O(n=(0,u.G)(n),e,i),null!==n[0]&&null!==n[1]&&(0,f.jU)(n[0],n[1])))},o.functions.within=function(e,i){return o.standardFunctionAsync(e,i,(y,p,n)=>(O(n=(0,u.G)(n),e,i),null!==n[0]&&null!==n[1]&&(0,f.uh)(n[0],n[1])))},o.functions.contains=function(e,i){return o.standardFunctionAsync(e,i,(y,p,n)=>(O(n=(0,u.G)(n),e,i),null!==n[0]&&null!==n[1]&&(0,f.r3)(n[0],n[1])))},o.functions.overlaps=function(e,i){return o.standardFunctionAsync(e,i,(y,p,n)=>(O(n=(0,u.G)(n),e,i),null!==n[0]&&null!==n[1]&&(0,f.Nm)(n[0],n[1])))},o.functions.equals=function(e,i){return o.standardFunctionAsync(e,i,(y,p,n)=>((0,u.y)(n,2,2,e,i),n[0]===n[1]||(n[0]instanceof x.Z&&n[1]instanceof x.Z?(0,f.fS)(n[0],n[1]):!(!(0,u.k)(n[0])||!(0,u.k)(n[1]))&&n[0].getTime()===n[1].getTime())))},o.functions.relate=function(e,i){return o.standardFunctionAsync(e,i,(y,p,n)=>{if(n=(0,u.G)(n),(0,u.y)(n,3,3,e,i),n[0]instanceof x.Z&&n[1]instanceof x.Z)return(0,f.LV)(n[0],n[1],(0,u.j)(n[2]));if(n[0]instanceof x.Z&&null===n[1]||n[1]instanceof x.Z&&null===n[0]||null===n[0]&&null===n[1])return!1;throw new l.aV(e,l.rH.InvalidParameter,i)})},o.functions.intersection=function(e,i){return o.standardFunctionAsync(e,i,(y,p,n)=>(O(n=(0,u.G)(n),e,i),null===n[0]||null===n[1]?null:(0,f.wf)(n[0],n[1])))},o.functions.union=function(e,i){return o.standardFunctionAsync(e,i,(y,p,n)=>{const a=[];if(0===(n=(0,u.G)(n)).length)throw new l.aV(e,l.rH.WrongNumberOfParameters,i);if(1===n.length)if((0,u.m)(n[0])){const _=(0,u.G)(n[0]);for(let h=0;h<_.length;h++)if(null!==_[h]){if(!(_[h]instanceof x.Z))throw new l.aV(e,l.rH.InvalidParameter,i);a.push(_[h])}}else{if(!(0,u.x)(n[0])){if(n[0]instanceof x.Z)return(0,u.q)((0,g.r1)(n[0]),e.spatialReference);if(null===n[0])return null;throw new l.aV(e,l.rH.InvalidParameter,i)}{const _=(0,u.G)(n[0].toArray());for(let h=0;h<_.length;h++)if(null!==_[h]){if(!(_[h]instanceof x.Z))throw new l.aV(e,l.rH.InvalidParameter,i);a.push(_[h])}}}else for(let _=0;_<n.length;_++)if(null!==n[_]){if(!(n[_]instanceof x.Z))throw new l.aV(e,l.rH.InvalidParameter,i);a.push(n[_])}return 0===a.length?null:(0,f.G0)(a)})},o.functions.difference=function(e,i){return o.standardFunctionAsync(e,i,(y,p,n)=>(O(n=(0,u.G)(n),e,i),null!==n[0]&&null===n[1]?(0,g.r1)(n[0]):null===n[0]?null:(0,f.e5)(n[0],n[1])))},o.functions.symmetricdifference=function(e,i){return o.standardFunctionAsync(e,i,(y,p,n)=>(O(n=(0,u.G)(n),e,i),null===n[0]&&null===n[1]?null:null===n[0]?(0,g.r1)(n[1]):null===n[1]?(0,g.r1)(n[0]):(0,f.Sp)(n[0],n[1])))},o.functions.clip=function(e,i){return o.standardFunctionAsync(e,i,(y,p,n)=>{if(n=(0,u.G)(n),(0,u.y)(n,2,2,e,i),!(n[1]instanceof d.Z)&&null!==n[1])throw new l.aV(e,l.rH.InvalidParameter,i);if(null===n[0])return null;if(!(n[0]instanceof x.Z))throw new l.aV(e,l.rH.InvalidParameter,i);return null===n[1]?null:(0,f.oq)(n[0],n[1])})},o.functions.cut=function(e,i){return o.standardFunctionAsync(e,i,(y,p,n)=>{if(n=(0,u.G)(n),(0,u.y)(n,2,2,e,i),!(n[1]instanceof R.Z)&&null!==n[1])throw new l.aV(e,l.rH.InvalidParameter,i);if(null===n[0])return[];if(!(n[0]instanceof x.Z))throw new l.aV(e,l.rH.InvalidParameter,i);return null===n[1]?[(0,g.r1)(n[0])]:(0,f.z7)(n[0],n[1])})},o.functions.area=function(e,i){return o.standardFunctionAsync(e,i,function(){var y=(0,P.Z)(function*(p,n,a){if((0,u.y)(a,1,2,e,i),null===(a=(0,u.G)(a))[0])return 0;if((0,u.T)(a[0])){const _=yield a[0].sumArea((0,g.EI)((0,u.A)(a[1],-1)),!1,e.abortSignal);if(e.abortSignal.aborted)throw new l.aV(e,l.rH.Cancelled,i);return _}if((0,u.m)(a[0])||(0,u.x)(a[0])){const _=(0,u.J)(a[0],e.spatialReference);return null===_?0:(0,f.CJ)(_,(0,g.EI)((0,u.A)(a[1],-1)))}if(!(a[0]instanceof x.Z))throw new l.aV(e,l.rH.InvalidParameter,i);return(0,f.CJ)(a[0],(0,g.EI)((0,u.A)(a[1],-1)))});return function(p,n,a){return y.apply(this,arguments)}}())},o.functions.areageodetic=function(e,i){return o.standardFunctionAsync(e,i,function(){var y=(0,P.Z)(function*(p,n,a){if((0,u.y)(a,1,2,e,i),null===(a=(0,u.G)(a))[0])return 0;if((0,u.T)(a[0])){const _=yield a[0].sumArea((0,g.EI)((0,u.A)(a[1],-1)),!0,e.abortSignal);if(e.abortSignal.aborted)throw new l.aV(e,l.rH.Cancelled,i);return _}if((0,u.m)(a[0])||(0,u.x)(a[0])){const _=(0,u.J)(a[0],e.spatialReference);return null===_?0:(0,f.Y4)(_,(0,g.EI)((0,u.A)(a[1],-1)))}if(!(a[0]instanceof x.Z))throw new l.aV(e,l.rH.InvalidParameter,i);return(0,f.Y4)(a[0],(0,g.EI)((0,u.A)(a[1],-1)))});return function(p,n,a){return y.apply(this,arguments)}}())},o.functions.length=function(e,i){return o.standardFunctionAsync(e,i,function(){var y=(0,P.Z)(function*(p,n,a){if((0,u.y)(a,1,2,e,i),null===(a=(0,u.G)(a))[0])return 0;if((0,u.T)(a[0])){const _=yield a[0].sumLength((0,g.Lz)((0,u.A)(a[1],-1)),!1,e.abortSignal);if(e.abortSignal.aborted)throw new l.aV(e,l.rH.Cancelled,i);return _}if((0,u.m)(a[0])||(0,u.x)(a[0])){const _=(0,u.H)(a[0],e.spatialReference);return null===_?0:(0,f.sz)(_,(0,g.Lz)((0,u.A)(a[1],-1)))}if(!(a[0]instanceof x.Z))throw new l.aV(e,l.rH.InvalidParameter,i);return(0,f.sz)(a[0],(0,g.Lz)((0,u.A)(a[1],-1)))});return function(p,n,a){return y.apply(this,arguments)}}())},o.functions.length3d=function(e,i){return o.standardFunctionAsync(e,i,(y,p,n)=>{if((0,u.y)(n,1,2,e,i),null===(n=(0,u.G)(n))[0])return 0;if((0,u.m)(n[0])||(0,u.x)(n[0])){const a=(0,u.H)(n[0],e.spatialReference);return null===a?0:!0===a.hasZ?N(a,(0,g.Lz)((0,u.A)(n[1],-1))):(0,f.sz)(a,(0,g.Lz)((0,u.A)(n[1],-1)))}if(!(n[0]instanceof x.Z))throw new l.aV(e,l.rH.InvalidParameter,i);return!0===n[0].hasZ?N(n[0],(0,g.Lz)((0,u.A)(n[1],-1))):(0,f.sz)(n[0],(0,g.Lz)((0,u.A)(n[1],-1)))})},o.functions.lengthgeodetic=function(e,i){return o.standardFunctionAsync(e,i,function(){var y=(0,P.Z)(function*(p,n,a){if((0,u.y)(a,1,2,e,i),null===(a=(0,u.G)(a))[0])return 0;if((0,u.T)(a[0])){const _=yield a[0].sumLength((0,g.Lz)((0,u.A)(a[1],-1)),!0,e.abortSignal);if(e.abortSignal.aborted)throw new l.aV(e,l.rH.Cancelled,i);return _}if((0,u.m)(a[0])||(0,u.x)(a[0])){const _=(0,u.H)(a[0],e.spatialReference);return null===_?0:(0,f.kQ)(_,(0,g.Lz)((0,u.A)(a[1],-1)))}if(!(a[0]instanceof x.Z))throw new l.aV(e,l.rH.InvalidParameter,i);return(0,f.kQ)(a[0],(0,g.Lz)((0,u.A)(a[1],-1)))});return function(p,n,a){return y.apply(this,arguments)}}())},o.functions.distance=function(e,i){return o.standardFunctionAsync(e,i,(y,p,n)=>{n=(0,u.G)(n),(0,u.y)(n,2,3,e,i);let a=n[0];((0,u.m)(n[0])||(0,u.x)(n[0]))&&(a=(0,u.K)(n[0],e.spatialReference));let _=n[1];if(((0,u.m)(n[1])||(0,u.x)(n[1]))&&(_=(0,u.K)(n[1],e.spatialReference)),!(a instanceof x.Z))throw new l.aV(e,l.rH.InvalidParameter,i);if(!(_ instanceof x.Z))throw new l.aV(e,l.rH.InvalidParameter,i);return(0,f.TE)(a,_,(0,g.Lz)((0,u.A)(n[2],-1)))})},o.functions.distancegeodetic=function(e,i){return o.standardFunctionAsync(e,i,(y,p,n)=>{n=(0,u.G)(n),(0,u.y)(n,2,3,e,i);const a=n[0],_=n[1];if(!(a instanceof G.Z))throw new l.aV(e,l.rH.InvalidParameter,i);if(!(_ instanceof G.Z))throw new l.aV(e,l.rH.InvalidParameter,i);const h=new R.Z({paths:[],spatialReference:a.spatialReference});return h.addPath([a,_]),(0,f.kQ)(h,(0,g.Lz)((0,u.A)(n[2],-1)))})},o.functions.densify=function(e,i){return o.standardFunctionAsync(e,i,(y,p,n)=>{if(n=(0,u.G)(n),(0,u.y)(n,2,3,e,i),null===n[0])return null;if(!(n[0]instanceof x.Z))throw new l.aV(e,l.rH.InvalidParameter,i);const a=(0,u.g)(n[1]);if(isNaN(a))throw new l.aV(e,l.rH.InvalidParameter,i);if(a<=0)throw new l.aV(e,l.rH.InvalidParameter,i);return n[0]instanceof H.Z||n[0]instanceof R.Z?(0,f.Cz)(n[0],a,(0,g.Lz)((0,u.A)(n[2],-1))):n[0]instanceof d.Z?(0,f.Cz)(M(n[0]),a,(0,g.Lz)((0,u.A)(n[2],-1))):n[0]})},o.functions.densifygeodetic=function(e,i){return o.standardFunctionAsync(e,i,(y,p,n)=>{if(n=(0,u.G)(n),(0,u.y)(n,2,3,e,i),null===n[0])return null;if(!(n[0]instanceof x.Z))throw new l.aV(e,l.rH.InvalidParameter,i);const a=(0,u.g)(n[1]);if(isNaN(a))throw new l.aV(e,l.rH.InvalidParameter,i);if(a<=0)throw new l.aV(e,l.rH.InvalidParameter,i);return n[0]instanceof H.Z||n[0]instanceof R.Z?(0,f.j2)(n[0],a,(0,g.Lz)((0,u.A)(n[2],-1))):n[0]instanceof d.Z?(0,f.j2)(M(n[0]),a,(0,g.Lz)((0,u.A)(n[2],-1))):n[0]})},o.functions.generalize=function(e,i){return o.standardFunctionAsync(e,i,(y,p,n)=>{if(n=(0,u.G)(n),(0,u.y)(n,2,4,e,i),null===n[0])return null;if(!(n[0]instanceof x.Z))throw new l.aV(e,l.rH.InvalidParameter,i);const a=(0,u.g)(n[1]);if(isNaN(a))throw new l.aV(e,l.rH.InvalidParameter,i);return(0,f.D$)(n[0],a,(0,u.h)((0,u.A)(n[2],!0)),(0,g.Lz)((0,u.A)(n[3],-1)))})},o.functions.buffer=function(e,i){return o.standardFunctionAsync(e,i,(y,p,n)=>{if(n=(0,u.G)(n),(0,u.y)(n,2,3,e,i),null===n[0])return null;if(!(n[0]instanceof x.Z))throw new l.aV(e,l.rH.InvalidParameter,i);const a=(0,u.g)(n[1]);if(isNaN(a))throw new l.aV(e,l.rH.InvalidParameter,i);return 0===a?(0,g.r1)(n[0]):(0,f.f3)(n[0],a,(0,g.Lz)((0,u.A)(n[2],-1)))})},o.functions.buffergeodetic=function(e,i){return o.standardFunctionAsync(e,i,(y,p,n)=>{if(n=(0,u.G)(n),(0,u.y)(n,2,3,e,i),null===n[0])return null;if(!(n[0]instanceof x.Z))throw new l.aV(e,l.rH.InvalidParameter,i);const a=(0,u.g)(n[1]);if(isNaN(a))throw new l.aV(e,l.rH.InvalidParameter,i);return 0===a?(0,g.r1)(n[0]):(0,f.rd)(n[0],a,(0,g.Lz)((0,u.A)(n[2],-1)))})},o.functions.offset=function(e,i){return o.standardFunctionAsync(e,i,(y,p,n)=>{if(n=(0,u.G)(n),(0,u.y)(n,2,6,e,i),null===n[0])return null;if(!(n[0]instanceof H.Z||n[0]instanceof R.Z))throw new l.aV(e,l.rH.InvalidParameter,i);const a=(0,u.g)(n[1]);if(isNaN(a))throw new l.aV(e,l.rH.InvalidParameter,i);const _=(0,u.g)((0,u.A)(n[4],10));if(isNaN(_))throw new l.aV(e,l.rH.InvalidParameter,i);const h=(0,u.g)((0,u.A)(n[5],0));if(isNaN(h))throw new l.aV(e,l.rH.InvalidParameter,i);return(0,f.cv)(n[0],a,(0,g.Lz)((0,u.A)(n[2],-1)),(0,u.j)((0,u.A)(n[3],"round")).toLowerCase(),_,h)})},o.functions.rotate=function(e,i){return o.standardFunctionAsync(e,i,(y,p,n)=>{n=(0,u.G)(n),(0,u.y)(n,2,3,e,i);let a=n[0];if(null===a)return null;if(!(a instanceof x.Z))throw new l.aV(e,l.rH.InvalidParameter,i);a instanceof d.Z&&(a=H.Z.fromExtent(a));const _=(0,u.g)(n[1]);if(isNaN(_))throw new l.aV(e,l.rH.InvalidParameter,i);const h=(0,u.A)(n[2],null);if(null===h)return(0,f.U1)(a,_);if(h instanceof G.Z)return(0,f.U1)(a,_,h);throw new l.aV(e,l.rH.InvalidParameter,i)})},o.functions.centroid=function(e,i){return o.standardFunctionAsync(e,i,(y,p,n)=>{if(n=(0,u.G)(n),(0,u.y)(n,1,1,e,i),null===n[0])return null;let a=n[0];if(((0,u.m)(n[0])||(0,u.x)(n[0]))&&(a=(0,u.K)(n[0],e.spatialReference)),null===a)return null;if(!(a instanceof x.Z))throw new l.aV(e,l.rH.InvalidParameter,i);return a instanceof G.Z?(0,u.q)((0,g.r1)(n[0]),e.spatialReference):a instanceof H.Z?a.centroid:a instanceof R.Z?(0,V.s9)(a):a instanceof F.Z?(0,V.Ay)(a):a instanceof d.Z?a.center:null})},o.functions.multiparttosinglepart=function(e,i){return o.standardFunctionAsync(e,i,function(){var y=(0,P.Z)(function*(p,n,a){a=(0,u.G)(a),(0,u.y)(a,1,1,e,i);const _=[];if(null===a[0])return null;if(!(a[0]instanceof x.Z))throw new l.aV(e,l.rH.InvalidParameter,i);if(a[0]instanceof G.Z)return[(0,u.q)((0,g.r1)(a[0]),e.spatialReference)];if(a[0]instanceof d.Z)return[(0,u.q)((0,g.r1)(a[0]),e.spatialReference)];const h=yield(0,f.og)(a[0]);if(h instanceof H.Z){const v=[],E=[];for(let Z=0;Z<h.rings.length;Z++)if(h.isClockwise(h.rings[Z])){const D=(0,m.im)({rings:[h.rings[Z]],hasZ:!0===h.hasZ,hazM:!0===h.hasM,spatialReference:h.spatialReference.toJSON()});v.push(D)}else E.push({ring:h.rings[Z],pt:h.getPoint(Z,0)});for(let Z=0;Z<E.length;Z++)for(let D=0;D<v.length;D++)if(v[D].contains(E[Z].pt)){v[D].addRing(E[Z].ring);break}return v}if(h instanceof R.Z){const v=[];for(let E=0;E<h.paths.length;E++){const Z=(0,m.im)({paths:[h.paths[E]],hasZ:!0===h.hasZ,hazM:!0===h.hasM,spatialReference:h.spatialReference.toJSON()});v.push(Z)}return v}if(a[0]instanceof F.Z){const v=(0,u.q)((0,g.r1)(a[0]),e.spatialReference);for(let E=0;E<v.points.length;E++)_.push(v.getPoint(E));return _}return null});return function(p,n,a){return y.apply(this,arguments)}}())},o.functions.issimple=function(e,i){return o.standardFunctionAsync(e,i,(y,p,n)=>{if(n=(0,u.G)(n),(0,u.y)(n,1,1,e,i),null===n[0])return!0;if(!(n[0]instanceof x.Z))throw new l.aV(e,l.rH.InvalidParameter,i);return(0,f.Gg)(n[0])})},o.functions.simplify=function(e,i){return o.standardFunctionAsync(e,i,(y,p,n)=>{if(n=(0,u.G)(n),(0,u.y)(n,1,1,e,i),null===n[0])return null;if(!(n[0]instanceof x.Z))throw new l.aV(e,l.rH.InvalidParameter,i);return(0,f.og)(n[0])})},o.functions.convexhull=function(e,i){return o.standardFunctionAsync(e,i,(y,p,n)=>{if(n=(0,u.G)(n),(0,u.y)(n,1,1,e,i),null===n[0])return null;if(!(n[0]instanceof x.Z))throw new l.aV(e,l.rH.InvalidParameter,i);return(0,f.JI)(n[0])})})}},87215:(_n,C,w)=>{w.d(C,{CJ:()=>vn,Cz:()=>Zn,D$:()=>Pn,ED:()=>h,G0:()=>hn,Gg:()=>Z,JI:()=>yn,LV:()=>E,Nm:()=>v,Sp:()=>dn,TE:()=>y,U1:()=>wn,W4:()=>a,Y4:()=>Rn,cv:()=>gn,e5:()=>pn,f3:()=>xn,fS:()=>p,j2:()=>En,jU:()=>i,kK:()=>n,kQ:()=>Vn,og:()=>D,oq:()=>N,r3:()=>e,rd:()=>An,sz:()=>In,uh:()=>_,wf:()=>mn,z7:()=>U});var P=w(15861),g=(w(29132),w(59289)),V=(w(72642),w(91179));function d(r){return Array.isArray(r)?r[0]?.spatialReference:r?.spatialReference}function x(r){return r&&(Array.isArray(r)?r.map(x):r.toJSON?r.toJSON():r)}function f(r){return Array.isArray(r)?r.map(c=>(0,V.im)(c)):(0,V.im)(r)}function F(r,c){let s;return Array.isArray(r)?s=r:(s=[],s.push(r),null!=c&&s.push(c)),s}let G;function H(){return R.apply(this,arguments)}function R(){return(R=(0,P.Z)(function*(){return G||(G=(0,g.bA)("geometryEngineWorker",{strategy:"distributed"})),G})).apply(this,arguments)}function m(r,c){return l.apply(this,arguments)}function l(){return(l=(0,P.Z)(function*(r,c){return(yield H()).invoke("executeGEOperation",{operation:r,parameters:x(c)})})).apply(this,arguments)}function N(r,c){return L.apply(this,arguments)}function L(){return(L=(0,P.Z)(function*(r,c){return f(yield m("clip",[d(r),r,c]))})).apply(this,arguments)}function U(r,c){return o.apply(this,arguments)}function o(){return(o=(0,P.Z)(function*(r,c){return f(yield m("cut",[d(r),r,c]))})).apply(this,arguments)}function e(r,c){return m("contains",[d(r),r,c])}function i(r,c){return m("crosses",[d(r),r,c])}function y(r,c,s){return m("distance",[d(r),r,c,s])}function p(r,c){return m("equals",[d(r),r,c])}function n(r,c){return m("intersects",[d(r),r,c])}function a(r,c){return m("touches",[d(r),r,c])}function _(r,c){return m("within",[d(r),r,c])}function h(r,c){return m("disjoint",[d(r),r,c])}function v(r,c){return m("overlaps",[d(r),r,c])}function E(r,c,s){return m("relate",[d(r),r,c,s])}function Z(r){return m("isSimple",[d(r),r])}function D(r){return W.apply(this,arguments)}function W(){return(W=(0,P.Z)(function*(r){return f(yield m("simplify",[d(r),r]))})).apply(this,arguments)}function yn(r){return S.apply(this,arguments)}function S(){return(S=(0,P.Z)(function*(r,c=!1){return f(yield m("convexHull",[d(r),r,c]))})).apply(this,arguments)}function pn(r,c){return K.apply(this,arguments)}function K(){return(K=(0,P.Z)(function*(r,c){return f(yield m("difference",[d(r),r,c]))})).apply(this,arguments)}function dn(r,c){return B.apply(this,arguments)}function B(){return(B=(0,P.Z)(function*(r,c){return f(yield m("symmetricDifference",[d(r),r,c]))})).apply(this,arguments)}function mn(r,c){return J.apply(this,arguments)}function J(){return(J=(0,P.Z)(function*(r,c){return f(yield m("intersect",[d(r),r,c]))})).apply(this,arguments)}function hn(r){return b.apply(this,arguments)}function b(){return(b=(0,P.Z)(function*(r,c=null){const s=F(r,c);return f(yield m("union",[d(s),s]))})).apply(this,arguments)}function gn(r,c,s,A,I,z){return k.apply(this,arguments)}function k(){return(k=(0,P.Z)(function*(r,c,s,A,I,z){return f(yield m("offset",[d(r),r,c,s,A,I,z]))})).apply(this,arguments)}function xn(r,c,s){return Q.apply(this,arguments)}function Q(){return(Q=(0,P.Z)(function*(r,c,s,A=!1){const I=[d(r),r,c,s,A];return f(yield m("buffer",I))})).apply(this,arguments)}function An(r,c,s,A,I,z){return Y.apply(this,arguments)}function Y(){return(Y=(0,P.Z)(function*(r,c,s,A,I,z){const Hn=[d(r),r,c,s,A,I,z];return f(yield m("geodesicBuffer",Hn))})).apply(this,arguments)}function nn(r){return"xmin"in r?r.center:"x"in r?r:r.extent?.center}function wn(r,c,s){return tn.apply(this,arguments)}function tn(){return(tn=(0,P.Z)(function*(r,c,s){if(null==r)throw new T;const A=r.spatialReference;if(null==(s=s??nn(r)))throw new T;const I=r.constructor.fromJSON(yield m("rotate",[A,r,c,s]));return I.spatialReference=A,I})).apply(this,arguments)}function Pn(r,c,s,A){return an.apply(this,arguments)}function an(){return(an=(0,P.Z)(function*(r,c,s,A){return f(yield m("generalize",[d(r),r,c,s,A]))})).apply(this,arguments)}function Zn(r,c,s){return un.apply(this,arguments)}function un(){return(un=(0,P.Z)(function*(r,c,s){return f(yield m("densify",[d(r),r,c,s]))})).apply(this,arguments)}function En(r,c,s){return on.apply(this,arguments)}function on(){return(on=(0,P.Z)(function*(r,c,s,A=0){return f(yield m("geodesicDensify",[d(r),r,c,s,A]))})).apply(this,arguments)}function vn(r,c){return m("planarArea",[d(r),r,c])}function In(r,c){return m("planarLength",[d(r),r,c])}function Rn(r,c,s){return m("geodesicArea",[d(r),r,c,s])}function Vn(r,c,s){return m("geodesicLength",[d(r),r,c,s])}class T extends Error{constructor(){super("Illegal Argument Exception")}}}}]);