"use strict";(self.webpackChunka_porrtal_io_app=self.webpackChunka_porrtal_io_app||[]).push([[620],{1620:(A,r,e)=>{e.r(r),e.d(r,{ViewsCardComponent:()=>Z});var s=e(6814),d=e(605),c=e(1274),p=e(617),l=e(2296),C=e(5940),m=e(5195),x=e(5619),g=e(2596),t=e(5879);function f(n,a){if(1&n){const i=t.EpF();t.TgZ(0,"button",8),t.NdJ("click",function(){t.CHM(i);const o=t.oxw();return t.KtG(o.toggleMax())}),t.TgZ(1,"mat-icon",9),t._uU(2,"north_east"),t.qZA()()}}function v(n,a){1&n&&(t.TgZ(0,"mat-icon",3),t._uU(1,"rocket_launch"),t.qZA())}function h(n,a){1&n&&t._UZ(0,"span")}function M(n,a){if(1&n&&(t.TgZ(0,"mat-icon",17),t._uU(1,"lock"),t.qZA()),2&n){const i=t.oxw().$implicit;t.Q6J("matTooltip",i.permissions)}}function T(n,a){1&n&&t._UZ(0,"span")}function O(n,a){if(1&n&&(t.TgZ(0,"mat-icon",17),t._uU(1,"category"),t.qZA()),2&n){const i=t.oxw().$implicit;t.Q6J("matTooltip",i.entityType)}}function P(n,a){1&n&&t._UZ(0,"span")}function E(n,a){if(1&n&&(t.ynx(0),t.YNc(1,v,2,0,"mat-icon",12),t.YNc(2,h,1,0,"span",13),t.YNc(3,M,2,1,"mat-icon",14),t.YNc(4,T,1,0,"span",13),t.YNc(5,O,2,1,"mat-icon",14),t.YNc(6,P,1,0,"span",13),t.TgZ(7,"span",15),t._uU(8),t.qZA(),t.TgZ(9,"span",16),t._uU(10),t.qZA(),t.BQk()),2&n){const i=a.$implicit;t.xp6(1),t.Q6J("ngIf",i.launchAtStartup),t.xp6(1),t.Q6J("ngIf",!i.launchAtStartup),t.xp6(1),t.Q6J("ngIf",i.permissions),t.xp6(1),t.Q6J("ngIf",!i.permissions),t.xp6(1),t.Q6J("ngIf",i.entityType),t.xp6(1),t.Q6J("ngIf",!i.entityType),t.xp6(2),t.Oqu(i.viewId),t.xp6(2),t.Oqu(i.paneType)}}function w(n,a){if(1&n&&(t.TgZ(0,"div",10),t.YNc(1,E,11,8,"ng-container",11),t.qZA()),2&n){const i=a.ngIf;t.xp6(1),t.Q6J("ngForOf",i)}}let Z=(()=>{var n;class a{constructor(_,o){this.el=_,this.shellStateService=o,this.isMaximized$=new x.X(!1),this.childIndex=-1,this.views$=o.select("views")}toggleMax(){this.shellStateService.dispatch({type:"maximize",htmlEl:this.el.nativeElement,maximizeText:"auth n",restore:()=>{this.isMaximized$.next(!1),console.log("auth-n-card restore",this)}}),this.isMaximized$.next(!0)}}return(n=a).\u0275fac=function(_){return new(_||n)(t.Y36(t.SBq),t.Y36(d.vv))},n.\u0275cmp=t.Xpm({type:n,selectors:[["porrtal-views-card"]],standalone:!0,features:[t.jDz],decls:15,vars:13,consts:[[1,"container-container"],[1,"container"],["color","accent",1,"toolbar"],[1,"status-icon"],[1,"card-type"],["mat-button","","class","maximize-button",3,"click",4,"ngIf"],[1,"card-content-container"],["class","properties-container",4,"ngIf"],["mat-button","",1,"maximize-button",3,"click"],[1,"maximize-icon"],[1,"properties-container"],[4,"ngFor","ngForOf"],["class","status-icon",4,"ngIf"],[4,"ngIf"],["class","status-icon",3,"matTooltip",4,"ngIf"],[1,"property-title"],[1,"property-value"],[1,"status-icon",3,"matTooltip"]],template:function(_,o){if(1&_&&(t.TgZ(0,"mat-card",0),t.ALo(1,"async"),t.TgZ(2,"div",1)(3,"mat-toolbar",2)(4,"span",3)(5,"mat-icon"),t._uU(6,"view_list"),t.qZA()(),t.TgZ(7,"span",4),t._uU(8),t.ALo(9,"async"),t.qZA(),t.YNc(10,f,3,0,"button",5),t.ALo(11,"async"),t.qZA(),t.TgZ(12,"div",6),t.YNc(13,w,2,1,"div",7),t.ALo(14,"async"),t.qZA()()()),2&_){let u;t.ekj("maximize",t.lcZ(1,5,o.isMaximized$)),t.xp6(8),t.hij("views(",null==(u=t.lcZ(9,7,o.views$))?null:u.length,")"),t.xp6(2),t.Q6J("ngIf",!t.lcZ(11,9,o.isMaximized$)),t.xp6(3),t.Q6J("ngIf",t.lcZ(14,11,o.views$))}},dependencies:[s.ez,s.sg,s.O5,s.Ov,c.g0,c.Ye,p.Ps,p.Hw,l.ot,l.lW,C.Cq,m.QW,m.a8,g.AV,g.gM],styles:[".container-container[_ngcontent-%COMP%]{width:100%;height:100%;position:relative}.container[_ngcontent-%COMP%]{display:grid;grid-template-rows:auto 1fr;position:absolute;inset:0}.maximize[_ngcontent-%COMP%]{z-index:999}.maximize-button[_ngcontent-%COMP%]{position:relative;left:15px;width:32px!important;height:32px!important;min-width:unset!important}.maximize-icon[_ngcontent-%COMP%]{margin-right:0!important}.toolbar[_ngcontent-%COMP%]{display:grid;grid-template-columns:auto 1fr auto;align-items:center;max-height:30px;min-height:30px}.spinner[_ngcontent-%COMP%]{margin-right:15px}.status-icon[_ngcontent-%COMP%]{display:grid;margin-right:5px}.card-type[_ngcontent-%COMP%]{margin-right:15px}.card-content-container[_ngcontent-%COMP%]{position:relative;overflow:auto;margin:10px}.properties-container[_ngcontent-%COMP%]{display:grid;grid-template-columns:auto auto auto auto 1fr;align-items:center;row-gap:5px}.property-title[_ngcontent-%COMP%]{margin-right:15px;font-weight:700}.property-value[_ngcontent-%COMP%]{margin:0}"],changeDetection:0}),a})()}}]);