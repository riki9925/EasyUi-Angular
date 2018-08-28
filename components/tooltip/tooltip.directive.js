/**
 * EasyUI for Angular 1.0.1
 * 
 * Copyright (c) 2009-2018 www.jeasyui.com. All rights reserved.
 *
 * Licensed under the freeware license: https://www.jeasyui.com/license_freeware2.php
 * To use it on other terms please contact us: info@jeasyui.com
 *
 */
import{Directive,ViewContainerRef,ComponentFactoryResolver,Input,Output,EventEmitter,Renderer2}from"@angular/core";import{TooltipContentComponent}from"./tooltip-content.component";var TooltipDirective=function(){function TooltipDirective(viewContainer,resolver,renderer){this.viewContainer=viewContainer,this.resolver=resolver,this.renderer=renderer,this.position="bottom",this.trackMouse=!1,this.deltaX=0,this.deltaY=0,this.showDelay=200,this.hideDelay=100,this.showEvent="mouseenter",this.hideEvent="mouseleave",this.tooltipCls=null,this.tooltipStyle=null,this.tooltipShow=new EventEmitter,this.tooltipHide=new EventEmitter,this._content=null,this.tooltipRef=null,this.tooltip=null,this.showTimer=null,this.hideTimer=null,this.showHandler=null,this.hideHandler=null}return Object.defineProperty(TooltipDirective.prototype,"content",{get:function(){return this._content},set:function(value){this._content=value,this.tooltipRef&&(this.tooltipRef.instance.content=value,this.tooltipRef.instance.hide(),value&&this.tooltipRef.instance.show())},enumerable:!0,configurable:!0}),TooltipDirective.prototype.ngAfterViewInit=function(){this.bindEvents()},TooltipDirective.prototype.ngOnDestroy=function(){this.unbindEvents(),this.hide()},TooltipDirective.prototype.bindEvents=function(){var _this=this,el=this.viewContainer.element.nativeElement;this.showEvent&&(this.showHandler=this.showEvent.split(" ").map(function(event){return _this.renderer.listen(el,event,function(){return _this.show()})})),this.hideEvent&&(this.hideHandler=this.hideEvent.split(" ").map(function(event){return _this.renderer.listen(el,event,function(){return _this.hide()})}))},TooltipDirective.prototype.unbindEvents=function(){this.showHandler&&(this.showHandler.forEach(function(handler){return handler()}),this.showHandler=null),this.hideHandler&&(this.hideHandler.forEach(function(handler){return handler()}),this.hideHandler=null)},TooltipDirective.prototype.clearTimeouts=function(){clearTimeout(this.showTimer),clearTimeout(this.hideTimer)},TooltipDirective.prototype.show=function(){var _this=this;this.content&&(this.clearTimeouts(),this.showTimer=setTimeout(function(){var opts={target:_this.viewContainer.element.nativeElement,parent:_this,content:null,closed:!0,position:_this.position,trackMouse:_this.trackMouse,deltaX:_this.deltaX,deltaY:_this.deltaY,tooltipCls:_this.tooltipCls,tooltipStyle:_this.tooltipStyle};if("string"==typeof _this.content){var factory=_this.resolver.resolveComponentFactory(TooltipContentComponent);_this.tooltipRef||(_this.tooltipRef=_this.viewContainer.createComponent(factory),opts.content=_this.content,Object.assign(_this.tooltipRef.instance,opts),_this.tooltipRef.instance.show())}else _this.tooltip=_this.content,Object.assign(_this.tooltip,opts),_this.tooltip.show()},this.showDelay))},TooltipDirective.prototype.hide=function(){var _this=this;this.clearTimeouts(),this.hideTimer=setTimeout(function(){_this.clean()},this.hideDelay)},TooltipDirective.prototype.clean=function(){this.tooltipRef&&(this.tooltipRef.instance.hide(),this.tooltipRef.destroy(),this.tooltipRef=null),this.tooltip&&this.tooltip.hide()},TooltipDirective.prototype.onMouseMove=function(event){if(this.trackMouse){var tooltip=this.tooltip||this.tooltipRef.instance;tooltip.trackMouseX=event.pageX,tooltip.trackMouseY=event.pageY,tooltip.reposition()}},TooltipDirective}();export{TooltipDirective};TooltipDirective.decorators=[{type:Directive,args:[{selector:"[euiTooltip]"}]}],TooltipDirective.ctorParameters=function(){return[{type:ViewContainerRef},{type:ComponentFactoryResolver},{type:Renderer2}]},TooltipDirective.propDecorators={position:[{type:Input}],trackMouse:[{type:Input}],deltaX:[{type:Input}],deltaY:[{type:Input}],showDelay:[{type:Input}],hideDelay:[{type:Input}],showEvent:[{type:Input}],hideEvent:[{type:Input}],tooltipCls:[{type:Input}],tooltipStyle:[{type:Input}],tooltipShow:[{type:Output}],tooltipHide:[{type:Output}],content:[{type:Input,args:["euiTooltip"]}]};