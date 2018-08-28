/**
 * EasyUI for Angular 1.0.1
 * 
 * Copyright (c) 2009-2018 www.jeasyui.com. All rights reserved.
 *
 * Licensed under the freeware license: https://www.jeasyui.com/license_freeware2.php
 * To use it on other terms please contact us: info@jeasyui.com
 *
 */
import{Component,ViewChild,Input,ElementRef}from"@angular/core";var DraggableProxyComponent=function(){function DraggableProxyComponent(hostRef){this.hostRef=hostRef,this.left=null,this.top=null,this.width=null,this.height=null,this.proxyCls=null,this.proxyStyle=null,this.reverting=!1,this.closed=!0}return DraggableProxyComponent.prototype.ngOnInit=function(){document.body.appendChild(this.proxyRef.nativeElement)},DraggableProxyComponent.prototype.ngOnDestroy=function(){this.proxyRef&&this.hostRef.nativeElement.appendChild(this.proxyRef.nativeElement)},DraggableProxyComponent.prototype.onTransitionEnd=function(event){this.reverting=!1,this.closed=!0},DraggableProxyComponent}();export{DraggableProxyComponent};DraggableProxyComponent.decorators=[{type:Component,args:[{selector:"eui-draggable-proxy",template:'\n\t\t<div #proxy style="position:absolute;"\n\t\t\t\t[class.draggable-reverting]="reverting"\n\t\t\t\t[style.left.px]="left" \n\t\t\t\t[style.top.px]="top"\n\t\t\t\t[style.width.px]="width"\n\t\t\t\t[style.height.px]="height"\n\t\t\t\t[style.display]="closed ? \'none\' : \'block\'"\n\t\t\t\t[ngClass]="proxyCls"\n\t\t\t\t[ngStyle]="proxyStyle"\n\t\t\t\t(transitionend)="onTransitionEnd($event)">\n\t\t\t<ng-content></ng-content>\n\t\t</div>\n\t'}]}],DraggableProxyComponent.ctorParameters=function(){return[{type:ElementRef}]},DraggableProxyComponent.propDecorators={proxyRef:[{type:ViewChild,args:["proxy"]}],left:[{type:Input}],top:[{type:Input}],width:[{type:Input}],height:[{type:Input}],proxyCls:[{type:Input}],proxyStyle:[{type:Input}],reverting:[{type:Input}],closed:[{type:Input}]};