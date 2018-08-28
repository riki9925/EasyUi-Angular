/**
 * EasyUI for Angular 1.0.1
 * 
 * Copyright (c) 2009-2018 www.jeasyui.com. All rights reserved.
 *
 * Licensed under the freeware license: https://www.jeasyui.com/license_freeware2.php
 * To use it on other terms please contact us: info@jeasyui.com
 *
 */
import{Component,ContentChildren,forwardRef,Input,ElementRef,Host,Inject}from"@angular/core";import{MenuComponent}from"./menu.component";import{MenuItemComponent}from"./menu-item.component";import{domHelper}from"../base/domhelper";var SubMenuComponent=function(){function SubMenuComponent(menu,hostRef){this.menu=menu,this.hostRef=hostRef,this.menuCls=null,this.left=null,this.top=null,this.zIndex=0}return SubMenuComponent.prototype.ngAfterContentInit=function(){var _this=this;this.menuWidth=domHelper.toStyleValue(this.menuWidth),this.menuCls=this.menuCls||this.menu.menuCls,this.menuStyle=this.menuStyle||this.menu.menuStyle,this.initItems(),this.subItems.changes.subscribe(function(){_this.initItems()})},SubMenuComponent.prototype.initItems=function(){var _this=this;this.subItems.forEach(function(item){item.parentMenu=_this})},SubMenuComponent.prototype.unhighlight=function(){this.subItems.forEach(function(item){item.unhighlight()})},SubMenuComponent.prototype.alignMenu=function(){this.zIndex=MenuComponent.zIndex++;var view=domHelper.getViewport(),pos=domHelper.offset(this.parentItem.hostRef.nativeElement),width=domHelper.outerWidth(this.hostRef.nativeElement),height=domHelper.outerHeight(this.hostRef.nativeElement),left=domHelper.outerWidth(this.parentItem.hostRef.nativeElement)-1;left+pos.left+width>view.width+domHelper.getScrollLeft()&&(left=-width-1);var top=-4;height>view.height+domHelper.getScrollTop()?top=-pos.top+domHelper.getScrollTop():top+pos.top+height>view.height+domHelper.getScrollTop()&&(top=view.height+domHelper.getScrollTop()-pos.top-height-2),this.left=left,this.top=top},SubMenuComponent}();export{SubMenuComponent};SubMenuComponent.decorators=[{type:Component,args:[{selector:"eui-submenu",template:'\n\t\t<div class="menu-shadow"></div>\n\t\t<div class="menu-line"></div>\n\t\t<div class="menu f-column f-full" [ngClass]="menuCls" [ngStyle]="menuStyle">\n\t\t\t<ng-content></ng-content>\n\t\t</div>\n\t',host:{class:"menu-container","[style.width]":"menuWidth","[style.left.px]":"left","[style.top.px]":"top","[style.zIndex]":"zIndex"}}]}],SubMenuComponent.ctorParameters=function(){return[{type:MenuComponent,decorators:[{type:Host},{type:Inject,args:[forwardRef(function(){return MenuComponent})]}]},{type:ElementRef}]},SubMenuComponent.propDecorators={subItems:[{type:ContentChildren,args:[forwardRef(function(){return MenuItemComponent})]}],menuCls:[{type:Input}],menuStyle:[{type:Input}],menuWidth:[{type:Input}],left:[{type:Input}],top:[{type:Input}],zIndex:[{type:Input}]};