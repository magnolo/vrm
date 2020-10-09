import { AfterViewInit, ChangeDetectorRef, ElementRef, OnChanges, OnInit, QueryList, Renderer2, SimpleChanges } from '@angular/core';
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
}
