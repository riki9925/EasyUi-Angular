/**
 * EasyUI for Angular 1.0.1
 * 
 * Copyright (c) 2009-2018 www.jeasyui.com. All rights reserved.
 *
 * Licensed under the freeware license: https://www.jeasyui.com/license_freeware2.php
 * To use it on other terms please contact us: info@jeasyui.com
 *
 */
import{Component,Host,Inject,forwardRef,Input,ContentChild,ContentChildren,ElementRef,ChangeDetectorRef}from"@angular/core";import{MenuComponent}from"./menu.component";import{SubMenuComponent}from"./submenu.component";import{ItemTemplateDirective}from"../base/template-base";var MenuItemComponent=function(){function MenuItemComponent(menu,hostRef,cdRef){this.menu=menu,this.hostRef=hostRef,this.cdRef=cdRef,this.value=null,this.text=null,this.iconCls=null,this.disabled=!1,this.subMenu=null,this.parentMenu=null,this.isActived=!1}return MenuItemComponent.prototype.ngAfterContentInit=function(){var _this=this;this.initMenu(),this.subMenus.changes.subscribe(function(){_this.initMenu()})},MenuItemComponent.prototype.initMenu=function(){this.subMenu=null,this.subMenus.length&&(this.subMenu=this.subMenus.first,this.subMenu.parentItem=this)},MenuItemComponent.prototype.onClickItem=function(event){event.stopPropagation(),this.disabled||(this.menu.itemClick.emit(this.value||this.text),this.subMenu||(this.menu.unhighlight(),this.menu.hide()))},MenuItemComponent.prototype.highlight=function(){this.parentMenu.subItems.forEach(function(item){item.unhighlight()}),this.isActived=!0,this.subMenu&&(this.cdRef.detectChanges(),this.subMenu.alignMenu())},MenuItemComponent.prototype.unhighlight=function(){this.subMenu&&this.subMenu.unhighlight(),this.isActived=!1},MenuItemComponent}();export{MenuItemComponent};MenuItemComponent.decorators=[{type:Component,args:[{selector:"eui-menu-item",template:'\n\t\t<div class="menu-item" \n\t\t\t\t[class.menu-active]="isActived"\n\t\t\t\t[class.menu-item-disabled]="disabled"\n\t\t\t\t[class.menu-active-disabled]="disabled && isActived"\n\t\t\t\t(mouseenter)="highlight()"\n\t\t\t\t(mouseleave)="unhighlight()"\n\t\t\t\t(click)="onClickItem($event)">\n\t\t\t<div *ngIf="!itemTemplate" class="menu-text">{{text}}</div>\n\t\t\t<ng-template *ngIf="itemTemplate" [euiMenuItemTemplate]="itemTemplate.template" [value]="value" [text]="text"></ng-template>\n\t\t\t<div *ngIf="iconCls" class="menu-icon {{iconCls}}"></div>\n\t\t\t<div *ngIf="subMenu" class="menu-rightarrow"></div>\n\t\t\t<ng-content *ngIf="isActived && !disabled" select="eui-submenu"></ng-content>\n\t\t</div>\n\t',host:{class:"f-column f-noshrink"}}]}],MenuItemComponent.ctorParameters=function(){return[{type:MenuComponent,decorators:[{type:Host},{type:Inject,args:[forwardRef(function(){return MenuComponent})]}]},{type:ElementRef},{type:ChangeDetectorRef}]},MenuItemComponent.propDecorators={itemTemplate:[{type:ContentChild,args:[ItemTemplateDirective]}],subMenus:[{type:ContentChildren,args:[forwardRef(function(){return SubMenuComponent})]}],value:[{type:Input}],text:[{type:Input}],iconCls:[{type:Input}],disabled:[{type:Input}]};