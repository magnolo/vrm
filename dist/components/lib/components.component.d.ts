import { AfterViewInit, ChangeDetectorRef, ElementRef, OnChanges, OnInit, QueryList, Renderer2, SimpleChanges } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class ComponentsComponent implements OnInit, AfterViewInit, OnChanges {
    private renderer;
    private cdr;
    values: number[];
    content: ({
        title: string;
        value: number;
        text: string;
        backgroundColor: string;
        header?: undefined;
        list?: undefined;
    } | {
        title: string;
        header: string;
        value: number;
        list: string[];
        backgroundColor: string;
        text?: undefined;
    })[];
    activeIdx: number;
    lastIdx: number;
    private flipper;
    ringBg: ElementRef;
    planeWrap: ElementRef;
    recruitmentText: ElementRef;
    centerWipe: ElementRef;
    number: ElementRef;
    arrow: ElementRef;
    steps: QueryList<ElementRef>;
    title: string;
    constructor(renderer: Renderer2, cdr: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterViewInit(): void;
    setActive(idx: any): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ComponentsComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ComponentsComponent, "vrm-slider", never, { "values": "values"; }, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50cy5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIENoYW5nZURldGVjdG9yUmVmLCBFbGVtZW50UmVmLCBPbkNoYW5nZXMsIE9uSW5pdCwgUXVlcnlMaXN0LCBSZW5kZXJlcjIsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIENvbXBvbmVudHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcyB7XG4gICAgcHJpdmF0ZSByZW5kZXJlcjtcbiAgICBwcml2YXRlIGNkcjtcbiAgICB2YWx1ZXM6IG51bWJlcltdO1xuICAgIGNvbnRlbnQ6ICh7XG4gICAgICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgICAgIHZhbHVlOiBudW1iZXI7XG4gICAgICAgIHRleHQ6IHN0cmluZztcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBzdHJpbmc7XG4gICAgICAgIGhlYWRlcj86IHVuZGVmaW5lZDtcbiAgICAgICAgbGlzdD86IHVuZGVmaW5lZDtcbiAgICB9IHwge1xuICAgICAgICB0aXRsZTogc3RyaW5nO1xuICAgICAgICBoZWFkZXI6IHN0cmluZztcbiAgICAgICAgdmFsdWU6IG51bWJlcjtcbiAgICAgICAgbGlzdDogc3RyaW5nW107XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogc3RyaW5nO1xuICAgICAgICB0ZXh0PzogdW5kZWZpbmVkO1xuICAgIH0pW107XG4gICAgYWN0aXZlSWR4OiBudW1iZXI7XG4gICAgbGFzdElkeDogbnVtYmVyO1xuICAgIHByaXZhdGUgZmxpcHBlcjtcbiAgICByaW5nQmc6IEVsZW1lbnRSZWY7XG4gICAgcGxhbmVXcmFwOiBFbGVtZW50UmVmO1xuICAgIHJlY3J1aXRtZW50VGV4dDogRWxlbWVudFJlZjtcbiAgICBjZW50ZXJXaXBlOiBFbGVtZW50UmVmO1xuICAgIG51bWJlcjogRWxlbWVudFJlZjtcbiAgICBhcnJvdzogRWxlbWVudFJlZjtcbiAgICBzdGVwczogUXVlcnlMaXN0PEVsZW1lbnRSZWY+O1xuICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgY29uc3RydWN0b3IocmVuZGVyZXI6IFJlbmRlcmVyMiwgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZik7XG4gICAgbmdPbkluaXQoKTogdm9pZDtcbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZDtcbiAgICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZDtcbiAgICBzZXRBY3RpdmUoaWR4OiBhbnkpOiB2b2lkO1xufVxuIl19