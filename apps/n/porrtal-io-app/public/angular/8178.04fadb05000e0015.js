"use strict";(self.webpackChunka_porrtal_io_app=self.webpackChunka_porrtal_io_app||[]).push([[8178],{58178:(g,u,n)=>{n.r(u),n.d(u,{CalciteFlow:()=>l,defineCustomElement:()=>m});var v=n(15861),s=n(76210),_=n(22757);const d=(0,s.GH)(class extends s.mv{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.flowDirection=null,this.itemCount=0,this.items=[],this.itemMutationObserver=(0,_.c)("mutation",()=>this.updateFlowProps()),this.getFlowDirection=(t,i)=>t&&i>1||t>1?i<t?"retreating":"advancing":null,this.updateFlowProps=()=>{const{el:t,items:i}=this,e=Array.from(t.querySelectorAll("calcite-flow-item, calcite-panel")).filter(o=>!o.matches("calcite-flow-item calcite-flow-item, calcite-panel calcite-panel")),h=i.length,c=e.length,p=e[c-1],b=e[c-2];if(c&&p&&e.forEach(o=>{o.showBackButton=o===p&&c>1,o.hidden=o!==p}),b&&(b.menuOpen=!1),this.items=e,h!==c){const o=this.getFlowDirection(h,c);this.itemCount=c,this.flowDirection=o}}}back(){var t=this;return(0,v.Z)(function*(){const{items:i}=t,e=i[i.length-1];return e?(e.beforeBack?e.beforeBack:()=>Promise.resolve()).call(e).then(()=>(e.remove(),e)):void 0})()}connectedCallback(){var t;null===(t=this.itemMutationObserver)||void 0===t||t.observe(this.el,{childList:!0,subtree:!0}),this.updateFlowProps()}disconnectedCallback(){var t;null===(t=this.itemMutationObserver)||void 0===t||t.disconnect()}handleItemBackClick(){this.back()}render(){const{flowDirection:t}=this;return(0,s.h)("div",{class:{frame:!0,"frame--advancing":"advancing"===t,"frame--retreating":"retreating"===t}},(0,s.h)("slot",null))}get el(){return this}static get style(){return"@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:host{box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host{position:relative;display:flex;inline-size:100%;flex:1 1 auto;align-items:stretch;overflow:hidden;background-color:transparent}:host .frame{position:relative;margin:0px;display:flex;inline-size:100%;flex:1 1 auto;flex-direction:column;align-items:stretch;padding:0px}:host ::slotted(calcite-flow-item),:host ::slotted(calcite-panel){block-size:100%}:host ::slotted(.calcite-match-height:last-child){display:flex;flex:1 1 auto;overflow:hidden}:host .frame--advancing{animation:calcite-frame-advance var(--calcite-animation-timing)}:host .frame--retreating{animation:calcite-frame-retreat var(--calcite-animation-timing)}@keyframes calcite-frame-advance{0%{--tw-bg-opacity:0.5;transform:translate3d(50px, 0, 0)}100%{--tw-bg-opacity:1;transform:translate3d(0, 0, 0)}}@keyframes calcite-frame-retreat{0%{--tw-bg-opacity:0.5;transform:translate3d(-50px, 0, 0)}100%{--tw-bg-opacity:1;transform:translate3d(0, 0, 0)}}"}},[1,"calcite-flow",{flowDirection:[32],itemCount:[32],items:[32],back:[64]},[[0,"calciteFlowItemBackClick","handleItemBackClick"],[0,"calcitePanelBackClick","handleItemBackClick"]]]);function a(){typeof customElements>"u"||["calcite-flow"].forEach(i=>{"calcite-flow"===i&&(customElements.get(i)||customElements.define(i,d))})}a();const l=d,m=a},22757:(g,u,n)=>{n.d(u,{c:()=>s});var v=n(76210);function s(r,f,d){if(!v.Z5.isBrowser)return;const a=function _(r){class f extends window.MutationObserver{constructor(a){super(a),this.observedEntry=[],this.callback=a}observe(a,l){return this.observedEntry.push({target:a,options:l}),super.observe(a,l)}unobserve(a){const l=this.observedEntry.filter(m=>m.target!==a);this.observedEntry=[],this.callback(super.takeRecords(),this),this.disconnect(),l.forEach(m=>this.observe(m.target,m.options))}}return"intersection"===r?window.IntersectionObserver:"mutation"===r?f:window.ResizeObserver}(r);return new a(f,d)}}}]);