import { HttpClient } from '@angular/common/http';
import { AfterViewInit, ChangeDetectorRef, ElementRef, OnChanges, OnInit, QueryList, Renderer2, SimpleChanges } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
export declare class VfaSliderComponent implements OnInit, AfterViewInit, OnChanges {
    private renderer;
    private cdr;
    private sanitize;
    private httpClient;
    private document;
    values: number[];
    date: string;
    content: ({
        title: string;
        value: number;
        text: string;
        backgroundColor: string;
        header?: undefined;
        list?: undefined;
        info?: undefined;
    } | {
        title: string;
        header: string;
        value: number;
        list: string[];
        backgroundColor: string;
        text?: undefined;
        info?: undefined;
    } | {
        title: string;
        header: string;
        value: number;
        list: string[];
        text: string;
        info: string;
        backgroundColor: string;
    } | {
        title: string;
        header: string;
        list: string[];
        value: number;
        info: string;
        backgroundColor: string;
        text?: undefined;
    } | {
        title: string;
        value: number;
        list: string[];
        backgroundColor: string;
        text: string;
        header?: undefined;
        info?: undefined;
    })[];
    loaded: boolean;
    activeIdx: number;
    lastIdx: number;
    private flipper;
    embedModalActive: boolean;
    copiedSuccess: boolean;
    iframeCode: string;
    svgs: {
        plane: string;
        arrow: string;
    };
    section: ElementRef;
    ringBg: ElementRef;
    planeWrap: ElementRef;
    recruitmentText: ElementRef;
    number: ElementRef;
    arrow: ElementRef;
    svgArrow: ElementRef;
    svgCheck: ElementRef;
    arc: ElementRef;
    steps: QueryList<ElementRef>;
    title: string;
    constructor(renderer: Renderer2, cdr: ChangeDetectorRef, sanitize: DomSanitizer, httpClient: HttpClient, document: any);
    ngOnInit(): void;
    getData(): Promise<void>;
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterViewInit(): void;
    setActive(idx: any): void;
    transform(idx: any): import("@angular/platform-browser").SafeStyle;
    transformInner(idx: any): import("@angular/platform-browser").SafeStyle;
    generateArc(x: any, y: any, radius: any, startAngle: any, endAngle: any): string;
    polarToCartesian(centerX: any, centerY: any, radius: any, angleInDegrees: any): {
        x: any;
        y: any;
    };
    copyToClipboard(): void;
    toggleEmbedView(open: any): void;
}
