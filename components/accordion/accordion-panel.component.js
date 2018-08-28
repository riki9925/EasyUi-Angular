/**
 * EasyUI for Angular 1.0.1
 * 
 * Copyright (c) 2009-2018 www.jeasyui.com. All rights reserved.
 *
 * Licensed under the freeware license: https://www.jeasyui.com/license_freeware2.php
 * To use it on other terms please contact us: info@jeasyui.com
 *
 */
var __extends=this&&this.__extends||function(){var extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b}||function(d,b){for(var p in b)b.hasOwnProperty(p)&&(d[p]=b[p])};return function(d,b){function __(){this.constructor=d}extendStatics(d,b),d.prototype=null===b?Object.create(b):(__.prototype=b.prototype,new __)}}();import{Component,Host,Inject,forwardRef,Input,ElementRef,HostListener}from"@angular/core";import{AccordionComponent}from"./accordion.component";import{PanelComponent,PANEL_TEMPLATE}from"../panel/panel.component";var AccordionPanelComponent=function(_super){function AccordionPanelComponent(accordion,hostRef){var _this=_super.call(this,hostRef)||this;return _this.accordion=accordion,_this.hostRef=hostRef,_this.title="",_this.collapsed=!0,_this.collapsible=!0,_this.expandIconCls="accordion-expand",_this.collapseIconCls="accordion-collapse",_this._panelCls=null,_this._headerCls=null,_this._bodyCls=null,_this.isLast=!1,_this}return __extends(AccordionPanelComponent,_super),Object.defineProperty(AccordionPanelComponent.prototype,"selected",{get:function(){return!this.collapsed},set:function(value){this.collapsed=!value},enumerable:!0,configurable:!0}),Object.defineProperty(AccordionPanelComponent.prototype,"panelCls",{get:function(){var cls=this.isLast?"panel-last":"";return cls+=this._panelCls?" "+this._panelCls:""},set:function(value){this._panelCls=value},enumerable:!0,configurable:!0}),Object.defineProperty(AccordionPanelComponent.prototype,"headerCls",{get:function(){var cls="accordion-header";return cls+=this._headerCls?" "+this._headerCls:"",cls+=this.selected?" accordion-header-selected":""},set:function(value){this._headerCls=value},enumerable:!0,configurable:!0}),Object.defineProperty(AccordionPanelComponent.prototype,"bodyCls",{get:function(){return"accordion-body"+(this._bodyCls?" "+this._bodyCls:"")},set:function(value){this._bodyCls=value},enumerable:!0,configurable:!0}),AccordionPanelComponent.prototype.isFull=function(){return!this.accordion.multiple&&this.selected},AccordionPanelComponent.prototype.onClick=function(event){for(var header=null,target=event.target;target&&target!=this.hostRef.nativeElement;){if(target.classList.contains("accordion-header")){header=target;break}target=target.parentNode}if(header){var panel=this.accordion.panels.find(function(p){return p.headerRef.nativeElement==header});panel&&(event.stopPropagation(),panel.collapsed?panel.select():this.accordion.multiple&&this.unselect())}},AccordionPanelComponent.prototype.select=function(){var _this=this;this.selected||(this.accordion.multiple||this.accordion.panels.filter(function(p){return p!=_this}).forEach(function(p){return p.unselect()}),this.collapsed=!1,this.accordion.panelSelect.emit(this))},AccordionPanelComponent.prototype.unselect=function(){this.selected&&(this.collapsed=!0,this.accordion.panelUnselect.emit(this))},AccordionPanelComponent.prototype.onClickCollapsibleTool=function(event){},AccordionPanelComponent}(PanelComponent);export{AccordionPanelComponent};AccordionPanelComponent.decorators=[{type:Component,args:[{selector:"eui-accordion-panel",template:PANEL_TEMPLATE,host:{class:"f-column","[class.f-full]":"isFull()","[class.f-noshrink]":"!selected"}}]}],AccordionPanelComponent.ctorParameters=function(){return[{type:AccordionComponent,decorators:[{type:Host},{type:Inject,args:[forwardRef(function(){return AccordionComponent})]}]},{type:ElementRef}]},AccordionPanelComponent.propDecorators={title:[{type:Input}],collapsed:[{type:Input}],collapsible:[{type:Input}],expandIconCls:[{type:Input}],collapseIconCls:[{type:Input}],selected:[{type:Input}],panelCls:[{type:Input}],headerCls:[{type:Input}],bodyCls:[{type:Input}],onClick:[{type:HostListener,args:["click",["$event"]]}]};