import { AfterViewInit, ChangeDetectorRef, ElementRef, OnChanges, OnInit, QueryList, Renderer2, SimpleChanges } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class VfaSliderComponent implements OnInit, AfterViewInit, OnChanges {
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
    section: ElementRef;
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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<VfaSliderComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<VfaSliderComponent, "vfa-slider", never, { "values": "values"; }, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmZhLXNsaWRlci5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsidmZhLXNsaWRlci5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ2hhbmdlRGV0ZWN0b3JSZWYsIEVsZW1lbnRSZWYsIE9uQ2hhbmdlcywgT25Jbml0LCBRdWVyeUxpc3QsIFJlbmRlcmVyMiwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgVmZhU2xpZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMge1xuICAgIHByaXZhdGUgcmVuZGVyZXI7XG4gICAgcHJpdmF0ZSBjZHI7XG4gICAgdmFsdWVzOiBudW1iZXJbXTtcbiAgICBjb250ZW50OiAoe1xuICAgICAgICB0aXRsZTogc3RyaW5nO1xuICAgICAgICB2YWx1ZTogbnVtYmVyO1xuICAgICAgICB0ZXh0OiBzdHJpbmc7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogc3RyaW5nO1xuICAgICAgICBoZWFkZXI/OiB1bmRlZmluZWQ7XG4gICAgICAgIGxpc3Q/OiB1bmRlZmluZWQ7XG4gICAgfSB8IHtcbiAgICAgICAgdGl0bGU6IHN0cmluZztcbiAgICAgICAgaGVhZGVyOiBzdHJpbmc7XG4gICAgICAgIHZhbHVlOiBudW1iZXI7XG4gICAgICAgIGxpc3Q6IHN0cmluZ1tdO1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHN0cmluZztcbiAgICAgICAgdGV4dD86IHVuZGVmaW5lZDtcbiAgICB9KVtdO1xuICAgIGFjdGl2ZUlkeDogbnVtYmVyO1xuICAgIGxhc3RJZHg6IG51bWJlcjtcbiAgICBwcml2YXRlIGZsaXBwZXI7XG4gICAgc2VjdGlvbjogRWxlbWVudFJlZjtcbiAgICByaW5nQmc6IEVsZW1lbnRSZWY7XG4gICAgcGxhbmVXcmFwOiBFbGVtZW50UmVmO1xuICAgIHJlY3J1aXRtZW50VGV4dDogRWxlbWVudFJlZjtcbiAgICBjZW50ZXJXaXBlOiBFbGVtZW50UmVmO1xuICAgIG51bWJlcjogRWxlbWVudFJlZjtcbiAgICBhcnJvdzogRWxlbWVudFJlZjtcbiAgICBzdGVwczogUXVlcnlMaXN0PEVsZW1lbnRSZWY+O1xuICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgY29uc3RydWN0b3IocmVuZGVyZXI6IFJlbmRlcmVyMiwgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZik7XG4gICAgbmdPbkluaXQoKTogdm9pZDtcbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZDtcbiAgICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZDtcbiAgICBzZXRBY3RpdmUoaWR4OiBhbnkpOiB2b2lkO1xufVxuIl19