import { AfterViewInit, ChangeDetectorRef, ElementRef, OnChanges, OnInit, QueryList, Renderer2, SimpleChanges } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
export declare class VfaSliderComponent implements OnInit, AfterViewInit, OnChanges {
    private renderer;
    private cdr;
    private sanitize;
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
    constructor(renderer: Renderer2, cdr: ChangeDetectorRef, sanitize: DomSanitizer);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterViewInit(): void;
    setActive(idx: any): void;
    transform(idx: any): import("@angular/platform-browser").SafeStyle;
}
