import { AfterViewInit, ElementRef, OnInit, QueryList, Renderer2 } from '@angular/core';
import * as i0 from "@angular/core";
export declare class ComponentsComponent implements OnInit, AfterViewInit {
    private renderer;
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
    constructor(renderer: Renderer2);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    setActive(idx: any): void;
    static ɵfac: i0.ɵɵFactoryDef<ComponentsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ComponentsComponent, "vrm-slider", never, {}, {}, never, never>;
}
