import { AfterViewInit, ChangeDetectorRef, ElementRef, OnInit, QueryList, Renderer2 } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class ComponentsComponent implements OnInit, AfterViewInit {
    private renderer;
    private cdr;
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
    ngAfterViewInit(): void;
    setActive(idx: any): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ComponentsComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ComponentsComponent, "vrm-slider", never, {}, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50cy5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ2hhbmdlRGV0ZWN0b3JSZWYsIEVsZW1lbnRSZWYsIE9uSW5pdCwgUXVlcnlMaXN0LCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIENvbXBvbmVudHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuICAgIHByaXZhdGUgcmVuZGVyZXI7XG4gICAgcHJpdmF0ZSBjZHI7XG4gICAgY29udGVudDogKHtcbiAgICAgICAgdGl0bGU6IHN0cmluZztcbiAgICAgICAgdmFsdWU6IG51bWJlcjtcbiAgICAgICAgdGV4dDogc3RyaW5nO1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHN0cmluZztcbiAgICAgICAgaGVhZGVyPzogdW5kZWZpbmVkO1xuICAgICAgICBsaXN0PzogdW5kZWZpbmVkO1xuICAgIH0gfCB7XG4gICAgICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgICAgIGhlYWRlcjogc3RyaW5nO1xuICAgICAgICB2YWx1ZTogbnVtYmVyO1xuICAgICAgICBsaXN0OiBzdHJpbmdbXTtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBzdHJpbmc7XG4gICAgICAgIHRleHQ/OiB1bmRlZmluZWQ7XG4gICAgfSlbXTtcbiAgICBhY3RpdmVJZHg6IG51bWJlcjtcbiAgICBsYXN0SWR4OiBudW1iZXI7XG4gICAgcHJpdmF0ZSBmbGlwcGVyO1xuICAgIHJpbmdCZzogRWxlbWVudFJlZjtcbiAgICBwbGFuZVdyYXA6IEVsZW1lbnRSZWY7XG4gICAgcmVjcnVpdG1lbnRUZXh0OiBFbGVtZW50UmVmO1xuICAgIGNlbnRlcldpcGU6IEVsZW1lbnRSZWY7XG4gICAgbnVtYmVyOiBFbGVtZW50UmVmO1xuICAgIGFycm93OiBFbGVtZW50UmVmO1xuICAgIHN0ZXBzOiBRdWVyeUxpc3Q8RWxlbWVudFJlZj47XG4gICAgdGl0bGU6IHN0cmluZztcbiAgICBjb25zdHJ1Y3RvcihyZW5kZXJlcjogUmVuZGVyZXIyLCBjZHI6IENoYW5nZURldGVjdG9yUmVmKTtcbiAgICBuZ09uSW5pdCgpOiB2b2lkO1xuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkO1xuICAgIHNldEFjdGl2ZShpZHg6IGFueSk6IHZvaWQ7XG59XG4iXX0=