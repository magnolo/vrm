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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ComponentsComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ComponentsComponent, "vfa-slider", never, { "values": "values"; }, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50cy5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ2hhbmdlRGV0ZWN0b3JSZWYsIEVsZW1lbnRSZWYsIE9uQ2hhbmdlcywgT25Jbml0LCBRdWVyeUxpc3QsIFJlbmRlcmVyMiwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQ29tcG9uZW50c0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzIHtcbiAgICBwcml2YXRlIHJlbmRlcmVyO1xuICAgIHByaXZhdGUgY2RyO1xuICAgIHZhbHVlczogbnVtYmVyW107XG4gICAgY29udGVudDogKHtcbiAgICAgICAgdGl0bGU6IHN0cmluZztcbiAgICAgICAgdmFsdWU6IG51bWJlcjtcbiAgICAgICAgdGV4dDogc3RyaW5nO1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHN0cmluZztcbiAgICAgICAgaGVhZGVyPzogdW5kZWZpbmVkO1xuICAgICAgICBsaXN0PzogdW5kZWZpbmVkO1xuICAgIH0gfCB7XG4gICAgICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgICAgIGhlYWRlcjogc3RyaW5nO1xuICAgICAgICB2YWx1ZTogbnVtYmVyO1xuICAgICAgICBsaXN0OiBzdHJpbmdbXTtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBzdHJpbmc7XG4gICAgICAgIHRleHQ/OiB1bmRlZmluZWQ7XG4gICAgfSlbXTtcbiAgICBhY3RpdmVJZHg6IG51bWJlcjtcbiAgICBsYXN0SWR4OiBudW1iZXI7XG4gICAgcHJpdmF0ZSBmbGlwcGVyO1xuICAgIHNlY3Rpb246IEVsZW1lbnRSZWY7XG4gICAgcmluZ0JnOiBFbGVtZW50UmVmO1xuICAgIHBsYW5lV3JhcDogRWxlbWVudFJlZjtcbiAgICByZWNydWl0bWVudFRleHQ6IEVsZW1lbnRSZWY7XG4gICAgY2VudGVyV2lwZTogRWxlbWVudFJlZjtcbiAgICBudW1iZXI6IEVsZW1lbnRSZWY7XG4gICAgYXJyb3c6IEVsZW1lbnRSZWY7XG4gICAgc3RlcHM6IFF1ZXJ5TGlzdDxFbGVtZW50UmVmPjtcbiAgICB0aXRsZTogc3RyaW5nO1xuICAgIGNvbnN0cnVjdG9yKHJlbmRlcmVyOiBSZW5kZXJlcjIsIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpO1xuICAgIG5nT25Jbml0KCk6IHZvaWQ7XG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQ7XG4gICAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQ7XG4gICAgc2V0QWN0aXZlKGlkeDogYW55KTogdm9pZDtcbn1cbiJdfQ==