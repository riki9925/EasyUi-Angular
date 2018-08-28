import { ChangeDetectorRef, ElementRef } from '@angular/core';
import { InputBaseComponent } from '../base/input-base.component';
export declare const COMBO_BASE_TEXTBOX_TEMPLATE: string;
export declare const COMBO_BASE_TEMPLATE: string;
export declare class ComboBaseComponent<T> extends InputBaseComponent<T> {
    hostRef: ElementRef;
    cdRef: ChangeDetectorRef;
    arrowRef: ElementRef;
    panelRef: ElementRef;
    hasDownArrow: boolean;
    arrowIconCls: string;
    arrowAlign: string;
    panelAlign: string;
    panelStyle: Object;
    multiple: boolean;
    separator: string;
    delay: number;
    _cls: string;
    cls: string;
    panelClosed: boolean;
    panelLeft: number;
    panelTop: number;
    scrollTop: number;
    constructor(hostRef: ElementRef, cdRef: ChangeDetectorRef);
    ngOnDestroy(): void;
    onDocumentClick(event: any): boolean;
    onDocumentScroll(event: any): void;
    alignPanel(): void;
    openPanel(): void;
    closePanel(): void;
    togglePanel(): void;
}
