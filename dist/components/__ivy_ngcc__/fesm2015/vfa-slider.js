import { __decorate } from 'tslib';
import { ɵɵdefineInjectable, Injectable, Renderer2, ChangeDetectorRef, Input, ViewChild, ViewChildren, Component, ViewEncapsulation, NgModule } from '@angular/core';
import Tick from '@pqina/flip';
import { CommonModule } from '@angular/common';

import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

const _c0 = ["section"];
const _c1 = ["ringBg"];
const _c2 = ["planeWrap"];
const _c3 = ["recruitmentText"];
const _c4 = ["centerWipe"];
const _c5 = ["number"];
const _c6 = ["arrow"];
const _c7 = ["steps"];
function ComponentsComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    const _r13 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 34);
    ɵngcc0.ɵɵlistener("click", function ComponentsComponent_div_28_Template_div_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r13); const idx_r11 = ctx.index; const ctx_r12 = ɵngcc0.ɵɵnextContext(); return ctx_r12.setActive(idx_r11); });
    ɵngcc0.ɵɵelementStart(1, "div", 35);
    ɵngcc0.ɵɵelementStart(2, "div", 36);
    ɵngcc0.ɵɵelementStart(3, "span");
    ɵngcc0.ɵɵtext(4);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const idx_r11 = ctx.index;
    const ctx_r6 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵstyleProp("transform", "translateY(-50%) rotate(" + 360 / 5 * idx_r11 + "deg)");
    ɵngcc0.ɵɵclassProp("active", idx_r11 === ctx_r6.activeIdx);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵstyleProp("transform", " rotate(" + (0 - 360) / 5 * idx_r11 + "deg)");
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵtextInterpolate(idx_r11 + 1);
} }
function ComponentsComponent_div_32_h4_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "h4");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r14 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(item_r14.header);
} }
function ComponentsComponent_div_32_ul_7_li_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "li");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const entry_r21 = ctx.$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(entry_r21);
} }
function ComponentsComponent_div_32_ul_7_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "ul");
    ɵngcc0.ɵɵtemplate(1, ComponentsComponent_div_32_ul_7_li_1_Template, 2, 1, "li", 40);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r14 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", item_r14.list);
} }
function ComponentsComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 37, 38);
    ɵngcc0.ɵɵelementStart(2, "h3");
    ɵngcc0.ɵɵtext(3);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(4, ComponentsComponent_div_32_h4_4_Template, 2, 1, "h4", 39);
    ɵngcc0.ɵɵelementStart(5, "p");
    ɵngcc0.ɵɵtext(6);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(7, ComponentsComponent_div_32_ul_7_Template, 2, 1, "ul", 39);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r14 = ctx.$implicit;
    const idx_r15 = ctx.index;
    const ctx_r8 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassProp("active", idx_r15 === ctx_r8.activeIdx);
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵtextInterpolate(item_r14.title);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", item_r14.header);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(item_r14.text);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", item_r14.list && item_r14.list.length > 0);
} }
function ComponentsComponent_div_36_Template(rf, ctx) { if (rf & 1) {
    const _r26 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 41);
    ɵngcc0.ɵɵlistener("click", function ComponentsComponent_div_36_Template_div_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r26); const idx_r24 = ctx.index; const ctx_r25 = ɵngcc0.ɵɵnextContext(); return ctx_r25.setActive(idx_r24); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const idx_r24 = ctx.index;
    const ctx_r9 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassProp("active", idx_r24 === ctx_r9.activeIdx);
} }
let ComponentsService = class ComponentsService {
    constructor() { }
};
ComponentsService.ɵfac = function ComponentsService_Factory(t) { return new (t || ComponentsService)(); };
ComponentsService.ɵprov = ɵɵdefineInjectable({ factory: function ComponentsService_Factory() { return new ComponentsService(); }, token: ComponentsService, providedIn: "root" });

let ComponentsComponent = class ComponentsComponent {
    constructor(renderer, cdr) {
        this.renderer = renderer;
        this.cdr = cdr;
        this.content = [
            {
                title: 'Design, Tierstudien',
                value: 152,
                text: 'Für die EU bei der European Medicines Agency (EMA)',
                backgroundColor: '#0F6292',
            },
            {
                title: 'Erprobung in vergleichenden Studien mit Freiwilligen',
                header: 'Phase I',
                value: 16,
                list: ['ca. 10-30 Freiwillige', 'Zur prüfen: Verträglichkeit'],
                backgroundColor: '#1682C3',
            },
            {
                title: 'Erprobung in vergleichenden Studien mit Freiwilligen',
                header: 'Phase II',
                value: 10,
                list: [
                    'ca. 50-500 Freiwillige',
                    'Zur prüfen: Dosierung, Immunantwort vor Ansteckung',
                ],
                backgroundColor: '#1682C3',
            },
            {
                title: 'Erprobung in vergleichenden Studien mit Freiwilligen',
                header: 'Phase III',
                value: 6,
                list: [
                    'ca. 1.000-60.000 Freiwillige',
                    'Zur prüfen: Zuverlässigkeit des Schutzes',
                ],
                backgroundColor: '#1682C3',
            },
            {
                title: 'Zulassungsverfahren',
                value: 0,
                text: 'Für die EU bei der European Medicines Agency (EMA)',
                backgroundColor: '#48BFFB',
            },
        ];
        this.activeIdx = 0;
        this.lastIdx = 0;
        this.title = 'vrm';
    }
    ngOnInit() { }
    ngOnChanges(changes) {
        console.log(changes);
        if (this.values) {
            let values = this.values;
            if (typeof values === 'string') {
                values = JSON.parse(values);
            }
            if (Array.isArray(values)) {
                values.forEach((value, idx) => {
                    if (value != null && value !== undefined) {
                        this.content[idx].value = value;
                    }
                });
            }
        }
    }
    ngAfterViewInit() {
        // this.flipper = new Flip({
        //   node: this.number.nativeElement,
        //   from: this.content[0].value,
        //   delay: 1, // second
        // });
        this.flipper = Tick.DOM.create(this.number.nativeElement, {
            value: this.content[0].value
        });
        this.setActive(0);
    }
    setActive(idx) {
        this.lastIdx = this.activeIdx;
        this.activeIdx = idx;
        const rotation = (360 / this.content.length) * this.activeIdx;
        let difference = this.lastIdx - this.activeIdx;
        if (difference < 0) {
            difference = difference * -1;
        }
        const animationDuration = 1000 + 300 * difference;
        const plane = this.planeWrap.nativeElement;
        const path = this.ringBg.nativeElement;
        const length = path.getTotalLength();
        this.renderer.setStyle(plane, 'transition', animationDuration + 'ms all cubic-bezier(0.645, 0.045, 0.355, 1)');
        this.renderer.setStyle(plane, 'transform', 'translateY(-50%) rotate(' + rotation + 'deg)');
        this.renderer.setStyle(path, 'transition', animationDuration + 'ms all cubic-bezier(0.645, 0.045, 0.355, 1)');
        this.renderer.setStyle(path, 'stroke-dasharray', length);
        this.renderer.setStyle(path, 'stroke-dashoffset', length - (length / this.content.length) * this.activeIdx);
        console.log(this.flipper);
        this.flipper.value = this.content[this.activeIdx].value;
        // this.flipper.flipTo({ to: this.content[this.activeIdx].value });
        // const height = this.steps.toArray()[this.activeIdx].nativeElement
        //   .scrollHeight;
        // this.renderer.setStyle(
        //   this.recruitmentText.nativeElement,
        //   'height',
        //   height + 'px'
        // );
        this.renderer.setStyle(this.recruitmentText.nativeElement, 'background-color', this.content[this.activeIdx].backgroundColor);
        this.renderer.setStyle(this.section.nativeElement, 'background-color', this.content[this.activeIdx].backgroundColor);
        this.cdr.detectChanges();
    }
};
ComponentsComponent.ɵfac = function ComponentsComponent_Factory(t) { return new (t || ComponentsComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
ComponentsComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: ComponentsComponent, selectors: [["vfa-slider"]], viewQuery: function ComponentsComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c0, true);
        ɵngcc0.ɵɵviewQuery(_c1, true);
        ɵngcc0.ɵɵviewQuery(_c2, true);
        ɵngcc0.ɵɵviewQuery(_c3, true);
        ɵngcc0.ɵɵviewQuery(_c4, true);
        ɵngcc0.ɵɵviewQuery(_c5, true);
        ɵngcc0.ɵɵviewQuery(_c6, true);
        ɵngcc0.ɵɵviewQuery(_c7, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.section = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.ringBg = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.planeWrap = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.recruitmentText = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.centerWipe = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.number = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.arrow = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.steps = _t);
    } }, inputs: { values: "values" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 38, vars: 3, consts: [[1, "recruitment-process"], ["section", ""], [1, "grid"], [1, "recruitment-wrap"], [1, "plane"], [1, "plane-wrap"], ["planeWrap", ""], ["id", "arrow", "width", "60", "height", "60", "viewBox", "0 0 60 60", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M-2.62268e-06 60L60 30L0 -2.62268e-06L7 30L-2.62268e-06 60Z"], ["arrow", ""], [1, "center"], [1, "center-wipe"], ["centerWipe", ""], [1, "center-imgs"], [1, "center-img"], ["number", ""], ["data-repeat", "true", "data-transform", "arrive(4, 0.01, false, false) -> round ->  pad('000') -> split -> delay(rtl, 10, 20)"], ["data-view", "flip"], [1, "hint"], [1, "ring"], ["cx", "50%", "cy", "50%", "r", "200", 1, "ring-bg", "animate"], ["ringBg", ""], ["cx", "50%", "cy", "50%", "r", "200", 1, "dash"], [1, "point-wrap"], ["class", "point", 3, "active", "transform", "click", 4, "ngFor", "ngForOf"], [1, "recruitment-text"], ["recruitmentText", ""], [1, "recruitment-copy"], ["class", "step", 3, "active", 4, "ngFor", "ngForOf"], [1, "recruitment-controls"], [1, "arrow", "prev", 3, "click"], [1, "dots"], ["class", "dot", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "arrow", "next", 3, "click"], [1, "point", 3, "click"], [1, "point-inner"], [1, "point-transform"], [1, "step"], ["steps", ""], [4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "dot", 3, "click"]], template: function ComponentsComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "section", 0, 1);
        ɵngcc0.ɵɵelement(2, "div", 2);
        ɵngcc0.ɵɵelementStart(3, "div", 2);
        ɵngcc0.ɵɵelementStart(4, "div", 3);
        ɵngcc0.ɵɵelementStart(5, "div", 4);
        ɵngcc0.ɵɵelementStart(6, "div", 5, 6);
        ɵngcc0.ɵɵnamespaceSVG();
        ɵngcc0.ɵɵelementStart(8, "svg", 7);
        ɵngcc0.ɵɵelement(9, "path", 8, 9);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵnamespaceHTML();
        ɵngcc0.ɵɵelementStart(11, "div", 10);
        ɵngcc0.ɵɵelement(12, "div", 11, 12);
        ɵngcc0.ɵɵelementStart(14, "div", 13);
        ɵngcc0.ɵɵelementStart(15, "div", 14);
        ɵngcc0.ɵɵelementStart(16, "div", null, 15);
        ɵngcc0.ɵɵelementStart(18, "div", 16);
        ɵngcc0.ɵɵelement(19, "span", 17);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(20, "div", 18);
        ɵngcc0.ɵɵtext(21, "Anzahl Studien");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(22, "div", 19);
        ɵngcc0.ɵɵnamespaceSVG();
        ɵngcc0.ɵɵelementStart(23, "svg");
        ɵngcc0.ɵɵelement(24, "circle", 20, 21);
        ɵngcc0.ɵɵelement(26, "circle", 22);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵnamespaceHTML();
        ɵngcc0.ɵɵelementStart(27, "div", 23);
        ɵngcc0.ɵɵtemplate(28, ComponentsComponent_div_28_Template, 5, 7, "div", 24);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(29, "div", 25, 26);
        ɵngcc0.ɵɵelementStart(31, "div", 27);
        ɵngcc0.ɵɵtemplate(32, ComponentsComponent_div_32_Template, 8, 6, "div", 28);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(33, "div", 29);
        ɵngcc0.ɵɵelementStart(34, "div", 30);
        ɵngcc0.ɵɵlistener("click", function ComponentsComponent_Template_div_click_34_listener() { return ctx.activeIdx === 0 ? ctx.setActive(ctx.content.length - 1) : ctx.setActive(ctx.activeIdx - 1); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(35, "div", 31);
        ɵngcc0.ɵɵtemplate(36, ComponentsComponent_div_36_Template, 1, 2, "div", 32);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(37, "div", 33);
        ɵngcc0.ɵɵlistener("click", function ComponentsComponent_Template_div_click_37_listener() { return ctx.activeIdx + 1 > ctx.content.length - 1 ? ctx.setActive(0) : ctx.setActive(ctx.activeIdx + 1); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(28);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.content);
        ɵngcc0.ɵɵadvance(4);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.content);
        ɵngcc0.ɵɵadvance(4);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.content);
    } }, directives: [ɵngcc1.NgForOf, ɵngcc1.NgIf], styles: ["@import url(https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap);.tick-flip-panel{color:#192e4d;background-color:#fff}.tick-flip-panel-back::after{z-index:1;content:\"\";position:absolute;left:0;top:0;width:100%;height:100%;background-image:linear-gradient(180deg,rgba(0,0,0,0) 1px,rgba(0,0,0,.15) 1px,transparent 30%)}*{box-sizing:border-box;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}vfa-slider{display:block;width:100%;height:100%}section{width:100%;position:relative;font-family:\"Open Sans\",sans-serif}.recruitment-process{width:100%;position:relative;padding:50px 0;transition:.5s;display:inline-block}.recruitment-process .grid{width:1200px;position:relative;margin:0 auto}.recruitment-process .grid .grid-left{position:relative;width:400px;float:left}@media only screen and (max-width:1260px){.recruitment-process .grid{padding:0 30px;width:100%}}@media only screen and (max-width:578px){.recruitment-process .grid{padding:0 25px}}.recruitment-text{width:calc(100% - 500px);position:relative;float:right;background-color:#3c78c7;border-radius:10px;overflow:hidden;transition:.5s;color:#fff}.recruitment-text .recruitment-copy{width:100%;position:relative;height:400px}.recruitment-text .recruitment-copy .step{width:100%;position:absolute;top:0;left:0;padding:60px 70px 120px}.recruitment-text .recruitment-copy .step>*{visibility:hidden;opacity:0;transform:translateX(-50px);transition:1s}.recruitment-text .recruitment-copy .step>:nth-child(2){transition-delay:.1s}.recruitment-text .recruitment-copy .step.active>*{visibility:visible;opacity:1;transform:translateX(0)}.recruitment-text .recruitment-copy .step.next>*{visibility:hidden;opacity:0;transform:translateX(50px)}.recruitment-text .recruitment-copy .step h3,.recruitment-text .recruitment-copy .step p{margin:0}.recruitment-text .recruitment-copy .step h3{font-weight:500;font-size:24px;margin-bottom:20px}.recruitment-text .recruitment-copy .step p,.recruitment-text .recruitment-copy .step ul{font-size:16px;line-height:24px}.recruitment-text .recruitment-controls{width:100%;height:80px;position:absolute;bottom:0;left:0;display:flex;align-items:center;justify-content:center;border-radius:0 0 10px 10px}.recruitment-text .recruitment-controls .arrow{width:16px;height:16px;border-top:3px solid #fff;border-left:3px solid #fff;transform:rotate(-45deg);transition:.3s;cursor:pointer}.recruitment-text .recruitment-controls .arrow:hover{border-color:#737373}.recruitment-text .recruitment-controls .arrow.next{transform:rotate(135deg)}.recruitment-text .recruitment-controls .dots{margin:0 10px;position:relative}.recruitment-text .recruitment-controls .dots .dot{width:16px;height:16px;background-color:#e6e6e6;border-radius:50%;position:relative;float:left;margin:0 5px;transition:.3s;cursor:pointer;opacity:.5}.recruitment-text .recruitment-controls .dots .dot:hover{opacity:1}.recruitment-text .recruitment-controls .dots .dot.active{background-color:#fff;opacity:1}@media only screen and (max-width:1260px){.recruitment-text .recruitment-copy .step{padding:40px 40px 100px}.recruitment-text .recruitment-controls{height:70px}.recruitment-wrap{margin-left:20px}}@media only screen and (max-width:1000px){.recruitment-text{width:calc(100% - 375px)}.recruitment-text .recruitment-copy .step{padding:30px 30px 70px}.recruitment-text .recruitment-copy .step h3{font-size:22px;margin-bottom:16px}.recruitment-text .recruitment-copy .step p{font-size:14px}.recruitment-text .recruitment-controls{height:50px}}@media only screen and (max-width:768px){.recruitment-text{width:100%}}.recruitment-wrap{width:400px;height:400px;position:relative;float:left;margin-bottom:50px}.recruitment-wrap .plane{position:absolute;width:100%;height:100%;display:flex;justify-content:center;z-index:5;pointer-events:none}.recruitment-wrap .plane .plane-wrap{height:60px;display:inline-block;transform-origin:50% 230px;transform:translateY(-50%) rotate(0);transition:1s cubic-bezier(.645,.045,.355,1)}.recruitment-wrap .plane .plane-wrap.reverse img,.recruitment-wrap .plane .plane-wrap.reverse svg{transform:scaleX(-1)}.recruitment-wrap .plane .plane-wrap.shadow img,.recruitment-wrap .plane .plane-wrap.shadow svg{filter:drop-shadow(0 -15px 0 rgba(0, 0, 0, .1))}.recruitment-wrap .plane .plane-wrap img,.recruitment-wrap .plane .plane-wrap svg{position:relative;top:0;height:60px;transition:.5s cubic-bezier(.645,.045,.355,1);filter:drop-shadow(0 15px 0 rgba(0, 0, 0, .1))}.recruitment-wrap .plane .plane-wrap svg path{fill:#fff;transition:fill 1s cubic-bezier(.645,.045,.355,1)}.recruitment-wrap .center{position:absolute;height:60%;width:60%;z-index:2;overflow:hidden;display:flex;align-items:center;justify-content:center;left:50%;top:50%;transform:translate(-50%,-50%)}.recruitment-wrap .center:before{content:\"\";width:102%;height:102%;position:absolute;border-radius:50%;z-index:10}.recruitment-wrap .center .center-imgs{width:100%;height:100%;position:absolute;display:flex;align-items:center;justify-content:center;z-index:1}.recruitment-wrap .center .center-imgs .center-img{width:110%;height:110%;position:absolute;z-index:1;display:flex;justify-content:center;align-items:center;font-size:3em;color:#fff;flex-direction:column}.recruitment-wrap .center .center-imgs .center-img .hint{font-size:17px;margin-top:20px;font-weight:600}.recruitment-wrap .center .center-imgs .center-img.active{z-index:2}.recruitment-wrap .center .center-imgs .center-img.active:after{transition:10s cubic-bezier(.23,1,.32,1);transform:scale(1)}.recruitment-wrap .center .center-imgs .center-img:after{content:\"\";position:absolute;width:100%;height:100%;background-size:cover;background-position:center;transition:none;transform:scale(.9)}.recruitment-wrap .center .center-wipe{width:100%;height:100%;position:absolute;z-index:2;background-size:auto 100%;background-position:0 0}.recruitment-wrap .ring{position:absolute;width:100%;height:100%;z-index:1;border-radius:50%;display:flex;justify-content:center;align-items:center;transform:rotate(-90deg)}.recruitment-wrap .ring svg{width:100%;height:100%;position:absolute;z-index:1;top:0;left:0;overflow:visible}.recruitment-wrap .ring svg circle{width:100%;height:100%;stroke-width:2;fill:none;stroke:#fff}.recruitment-wrap .ring svg circle.animate{transition:1s cubic-bezier(.645,.045,.355,1)}.recruitment-wrap .ring svg circle.dash{opacity:.2;stroke-dasharray:10,10}.recruitment-wrap .point-wrap{position:absolute;width:100%;height:100%;display:flex;justify-content:center;align-items:center;z-index:3}.recruitment-wrap .point-wrap .point{width:30px;height:30px;position:absolute;border-radius:50%;display:flex;justify-content:center;top:0;cursor:pointer;align-items:center;transform-origin:50% 215px}.recruitment-wrap .point-wrap .point .point-inner{width:100%;height:100%;position:relative}.recruitment-wrap .point-wrap .point .point-inner .point-transform{background-color:#fff;width:100%;height:100%;display:flex;justify-content:center;align-items:center;border-radius:50%;transition:.6s;box-shadow:0 5px 20px rgba(0,0,0,.3)}.recruitment-wrap .point-wrap .point .point-inner .point-transform span{position:relative;margin-top:1px;font-size:16px;display:block;transition:.6s;color:#fff}.recruitment-wrap .point-wrap .point:hover .point-transform{background-color:#333}.recruitment-wrap .point-wrap .point:hover .point-transform span{color:#fff}.recruitment-wrap .point-wrap .point.active .point-transform{transform:scale(.3);background-color:#333}.recruitment-wrap .point-wrap .point.active .point-transform span{color:#fff;opacity:0}@media only screen and (max-width:1000px){.recruitment-wrap{width:320px;height:320px}.recruitment-wrap circle{transform-origin:50% 50%;transform:scale(.8)}.recruitment-wrap .plane .plane-wrap{height:40px;transform-origin:50% 180px}.recruitment-wrap .plane .plane-wrap img,.recruitment-wrap .plane .plane-wrap svg{height:40px}.recruitment-wrap .point-wrap .point{width:40px;height:40px;transform-origin:50% 180px}}@media only screen and (max-width:768px){.recruitment-wrap{left:50%;margin:0 0 30px;transform:translateX(-50%)}}"], encapsulation: 2 });
ComponentsComponent.ctorParameters = () => [
    { type: Renderer2 },
    { type: ChangeDetectorRef }
];
__decorate([
    Input()
], ComponentsComponent.prototype, "values", void 0);
__decorate([
    ViewChild('section')
], ComponentsComponent.prototype, "section", void 0);
__decorate([
    ViewChild('ringBg')
], ComponentsComponent.prototype, "ringBg", void 0);
__decorate([
    ViewChild('planeWrap')
], ComponentsComponent.prototype, "planeWrap", void 0);
__decorate([
    ViewChild('recruitmentText')
], ComponentsComponent.prototype, "recruitmentText", void 0);
__decorate([
    ViewChild('centerWipe')
], ComponentsComponent.prototype, "centerWipe", void 0);
__decorate([
    ViewChild('number')
], ComponentsComponent.prototype, "number", void 0);
__decorate([
    ViewChild('arrow')
], ComponentsComponent.prototype, "arrow", void 0);
__decorate([
    ViewChildren('steps')
], ComponentsComponent.prototype, "steps", void 0);

let ComponentsModule = class ComponentsModule {
};
ComponentsModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: ComponentsModule });
ComponentsModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function ComponentsModule_Factory(t) { return new (t || ComponentsModule)(); }, imports: [[
            CommonModule
        ]] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ComponentsService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ComponentsComponent, [{
        type: Component,
        args: [{
                selector: 'vfa-slider',
                template: "<section\n  class=\"recruitment-process\"\n  #section>\n  <div class=\"grid\"></div>\n  <div class=\"grid\">\n\n    <div class=\"recruitment-wrap\">\n      <div class=\"plane\">\n        <div\n          #planeWrap\n          class=\"plane-wrap\">\n          <svg\n            id=\"arrow\"\n            width=\"60\"\n            height=\"60\"\n            viewBox=\"0 0 60 60\"\n            fill=\"none\"\n            xmlns=\"http://www.w3.org/2000/svg\">\n            <path\n              #arrow\n              d=\"M-2.62268e-06 60L60 30L0 -2.62268e-06L7 30L-2.62268e-06 60Z\"></path>\n          </svg>\n\n        </div>\n      </div>\n\n      <div class=\"center\">\n        <div\n          #centerWipe\n          class=\"center-wipe\"></div>\n        <div class=\"center-imgs\">\n          <!-- *ngFor=\"let item of content; let idx = index\" -->\n          <div class=\"center-img\">\n            <div #number >\n              <div data-repeat=\"true\" data-transform=\"arrive(4, 0.01, false, false) -> round ->  pad('000') -> split -> delay(rtl, 10, 20)\">\n                <span data-view=\"flip\"></span>\n              </div>\n              \n                \n           \n            </div>\n            <div class=\"hint\">Anzahl Studien</div>\n          </div>\n        </div>\n      </div>\n      <div class=\"ring\">\n        <svg>\n          <circle\n            #ringBg\n            class=\"ring-bg animate\"\n            cx=\"50%\"\n            cy=\"50%\"\n            r=\"200\"></circle>\n          <circle\n            class=\"dash\"\n            cx=\"50%\"\n            cy=\"50%\"\n            r=\"200\"></circle>\n        </svg>\n      </div>\n      <div class=\"point-wrap\">\n        <!-- transform: rotate(#{(-360 / 5) * $i}deg), -->\n        <div\n          class=\"point\"\n          (click)=\"setActive(idx)\"\n          [class.active]=\"idx === activeIdx\"\n          [style.transform]=\"'translateY(-50%) rotate(' +((360 / 5) * (idx)) + 'deg)'\"\n          *ngFor=\"let item of content; let idx = index\">\n          <div\n            class=\"point-inner\"\n            [style.transform]=\"' rotate('+ ((-360 / 5) * idx) +'deg)'\">\n            <div class=\"point-transform\">\n              <span>{{ idx + 1 }}</span>\n            </div>\n          </div>\n        </div>\n\n      </div>\n    </div>\n\n    <div\n      #recruitmentText\n      class=\"recruitment-text\">\n      <div class=\"recruitment-copy\">\n        <div\n          class=\"step\"\n          #steps\n          [class.active]=\"idx === activeIdx\"\n          *ngFor=\"let item of content; let idx = index\">\n          <h3>{{ item.title }}</h3>\n          <h4 *ngIf=\"item.header\">{{ item.header }}</h4>\n          <p>{{ item.text}}</p>\n          <ul *ngIf=\"item.list && item.list.length > 0\">\n            <li *ngFor=\"let entry of item.list\">{{ entry }}</li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"recruitment-controls\">\n        <div\n          class=\"arrow prev\"\n          (click)=\"activeIdx === 0 ? setActive(content.length - 1) :setActive(activeIdx -1)\"></div>\n        <div class=\"dots\">\n          <div\n            class=\"dot\"\n            (click)=\"setActive(idx)\"\n            [class.active]=\"idx === activeIdx\"\n            *ngFor=\"let item of content; let idx  = index\"></div>\n        </div>\n        <div\n          class=\"arrow next\"\n          (click)=\"activeIdx + 1 > content.length - 1 ? setActive(0) : setActive(activeIdx+1)\"></div>\n      </div>\n    </div>\n  </div>\n</section>\n",
                encapsulation: ViewEncapsulation.None,
                styles: ["@import url(https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap);.tick-flip-panel{color:#192e4d;background-color:#fff}.tick-flip-panel-back::after{z-index:1;content:\"\";position:absolute;left:0;top:0;width:100%;height:100%;background-image:linear-gradient(180deg,rgba(0,0,0,0) 1px,rgba(0,0,0,.15) 1px,transparent 30%)}*{box-sizing:border-box;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}vfa-slider{display:block;width:100%;height:100%}section{width:100%;position:relative;font-family:\"Open Sans\",sans-serif}.recruitment-process{width:100%;position:relative;padding:50px 0;transition:.5s;display:inline-block}.recruitment-process .grid{width:1200px;position:relative;margin:0 auto}.recruitment-process .grid .grid-left{position:relative;width:400px;float:left}@media only screen and (max-width:1260px){.recruitment-process .grid{padding:0 30px;width:100%}}@media only screen and (max-width:578px){.recruitment-process .grid{padding:0 25px}}.recruitment-text{width:calc(100% - 500px);position:relative;float:right;background-color:#3c78c7;border-radius:10px;overflow:hidden;transition:.5s;color:#fff}.recruitment-text .recruitment-copy{width:100%;position:relative;height:400px}.recruitment-text .recruitment-copy .step{width:100%;position:absolute;top:0;left:0;padding:60px 70px 120px}.recruitment-text .recruitment-copy .step>*{visibility:hidden;opacity:0;transform:translateX(-50px);transition:1s}.recruitment-text .recruitment-copy .step>:nth-child(2){transition-delay:.1s}.recruitment-text .recruitment-copy .step.active>*{visibility:visible;opacity:1;transform:translateX(0)}.recruitment-text .recruitment-copy .step.next>*{visibility:hidden;opacity:0;transform:translateX(50px)}.recruitment-text .recruitment-copy .step h3,.recruitment-text .recruitment-copy .step p{margin:0}.recruitment-text .recruitment-copy .step h3{font-weight:500;font-size:24px;margin-bottom:20px}.recruitment-text .recruitment-copy .step p,.recruitment-text .recruitment-copy .step ul{font-size:16px;line-height:24px}.recruitment-text .recruitment-controls{width:100%;height:80px;position:absolute;bottom:0;left:0;display:flex;align-items:center;justify-content:center;border-radius:0 0 10px 10px}.recruitment-text .recruitment-controls .arrow{width:16px;height:16px;border-top:3px solid #fff;border-left:3px solid #fff;transform:rotate(-45deg);transition:.3s;cursor:pointer}.recruitment-text .recruitment-controls .arrow:hover{border-color:#737373}.recruitment-text .recruitment-controls .arrow.next{transform:rotate(135deg)}.recruitment-text .recruitment-controls .dots{margin:0 10px;position:relative}.recruitment-text .recruitment-controls .dots .dot{width:16px;height:16px;background-color:#e6e6e6;border-radius:50%;position:relative;float:left;margin:0 5px;transition:.3s;cursor:pointer;opacity:.5}.recruitment-text .recruitment-controls .dots .dot:hover{opacity:1}.recruitment-text .recruitment-controls .dots .dot.active{background-color:#fff;opacity:1}@media only screen and (max-width:1260px){.recruitment-text .recruitment-copy .step{padding:40px 40px 100px}.recruitment-text .recruitment-controls{height:70px}.recruitment-wrap{margin-left:20px}}@media only screen and (max-width:1000px){.recruitment-text{width:calc(100% - 375px)}.recruitment-text .recruitment-copy .step{padding:30px 30px 70px}.recruitment-text .recruitment-copy .step h3{font-size:22px;margin-bottom:16px}.recruitment-text .recruitment-copy .step p{font-size:14px}.recruitment-text .recruitment-controls{height:50px}}@media only screen and (max-width:768px){.recruitment-text{width:100%}}.recruitment-wrap{width:400px;height:400px;position:relative;float:left;margin-bottom:50px}.recruitment-wrap .plane{position:absolute;width:100%;height:100%;display:flex;justify-content:center;z-index:5;pointer-events:none}.recruitment-wrap .plane .plane-wrap{height:60px;display:inline-block;transform-origin:50% 230px;transform:translateY(-50%) rotate(0);transition:1s cubic-bezier(.645,.045,.355,1)}.recruitment-wrap .plane .plane-wrap.reverse img,.recruitment-wrap .plane .plane-wrap.reverse svg{transform:scaleX(-1)}.recruitment-wrap .plane .plane-wrap.shadow img,.recruitment-wrap .plane .plane-wrap.shadow svg{filter:drop-shadow(0 -15px 0 rgba(0, 0, 0, .1))}.recruitment-wrap .plane .plane-wrap img,.recruitment-wrap .plane .plane-wrap svg{position:relative;top:0;height:60px;transition:.5s cubic-bezier(.645,.045,.355,1);filter:drop-shadow(0 15px 0 rgba(0, 0, 0, .1))}.recruitment-wrap .plane .plane-wrap svg path{fill:#fff;transition:fill 1s cubic-bezier(.645,.045,.355,1)}.recruitment-wrap .center{position:absolute;height:60%;width:60%;z-index:2;overflow:hidden;display:flex;align-items:center;justify-content:center;left:50%;top:50%;transform:translate(-50%,-50%)}.recruitment-wrap .center:before{content:\"\";width:102%;height:102%;position:absolute;border-radius:50%;z-index:10}.recruitment-wrap .center .center-imgs{width:100%;height:100%;position:absolute;display:flex;align-items:center;justify-content:center;z-index:1}.recruitment-wrap .center .center-imgs .center-img{width:110%;height:110%;position:absolute;z-index:1;display:flex;justify-content:center;align-items:center;font-size:3em;color:#fff;flex-direction:column}.recruitment-wrap .center .center-imgs .center-img .hint{font-size:17px;margin-top:20px;font-weight:600}.recruitment-wrap .center .center-imgs .center-img.active{z-index:2}.recruitment-wrap .center .center-imgs .center-img.active:after{transition:10s cubic-bezier(.23,1,.32,1);transform:scale(1)}.recruitment-wrap .center .center-imgs .center-img:after{content:\"\";position:absolute;width:100%;height:100%;background-size:cover;background-position:center;transition:none;transform:scale(.9)}.recruitment-wrap .center .center-wipe{width:100%;height:100%;position:absolute;z-index:2;background-size:auto 100%;background-position:0 0}.recruitment-wrap .ring{position:absolute;width:100%;height:100%;z-index:1;border-radius:50%;display:flex;justify-content:center;align-items:center;transform:rotate(-90deg)}.recruitment-wrap .ring svg{width:100%;height:100%;position:absolute;z-index:1;top:0;left:0;overflow:visible}.recruitment-wrap .ring svg circle{width:100%;height:100%;stroke-width:2;fill:none;stroke:#fff}.recruitment-wrap .ring svg circle.animate{transition:1s cubic-bezier(.645,.045,.355,1)}.recruitment-wrap .ring svg circle.dash{opacity:.2;stroke-dasharray:10,10}.recruitment-wrap .point-wrap{position:absolute;width:100%;height:100%;display:flex;justify-content:center;align-items:center;z-index:3}.recruitment-wrap .point-wrap .point{width:30px;height:30px;position:absolute;border-radius:50%;display:flex;justify-content:center;top:0;cursor:pointer;align-items:center;transform-origin:50% 215px}.recruitment-wrap .point-wrap .point .point-inner{width:100%;height:100%;position:relative}.recruitment-wrap .point-wrap .point .point-inner .point-transform{background-color:#fff;width:100%;height:100%;display:flex;justify-content:center;align-items:center;border-radius:50%;transition:.6s;box-shadow:0 5px 20px rgba(0,0,0,.3)}.recruitment-wrap .point-wrap .point .point-inner .point-transform span{position:relative;margin-top:1px;font-size:16px;display:block;transition:.6s;color:#fff}.recruitment-wrap .point-wrap .point:hover .point-transform{background-color:#333}.recruitment-wrap .point-wrap .point:hover .point-transform span{color:#fff}.recruitment-wrap .point-wrap .point.active .point-transform{transform:scale(.3);background-color:#333}.recruitment-wrap .point-wrap .point.active .point-transform span{color:#fff;opacity:0}@media only screen and (max-width:1000px){.recruitment-wrap{width:320px;height:320px}.recruitment-wrap circle{transform-origin:50% 50%;transform:scale(.8)}.recruitment-wrap .plane .plane-wrap{height:40px;transform-origin:50% 180px}.recruitment-wrap .plane .plane-wrap img,.recruitment-wrap .plane .plane-wrap svg{height:40px}.recruitment-wrap .point-wrap .point{width:40px;height:40px;transform-origin:50% 180px}}@media only screen and (max-width:768px){.recruitment-wrap{left:50%;margin:0 0 30px;transform:translateX(-50%)}}"]
            }]
    }], function () { return [{ type: ɵngcc0.Renderer2 }, { type: ɵngcc0.ChangeDetectorRef }]; }, { values: [{
            type: Input
        }], section: [{
            type: ViewChild,
            args: ['section']
        }], ringBg: [{
            type: ViewChild,
            args: ['ringBg']
        }], planeWrap: [{
            type: ViewChild,
            args: ['planeWrap']
        }], recruitmentText: [{
            type: ViewChild,
            args: ['recruitmentText']
        }], centerWipe: [{
            type: ViewChild,
            args: ['centerWipe']
        }], number: [{
            type: ViewChild,
            args: ['number']
        }], arrow: [{
            type: ViewChild,
            args: ['arrow']
        }], steps: [{
            type: ViewChildren,
            args: ['steps']
        }] }); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(ComponentsModule, { declarations: function () { return [ComponentsComponent]; }, imports: function () { return [CommonModule]; }, exports: function () { return [ComponentsComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ComponentsModule, [{
        type: NgModule,
        args: [{
                declarations: [ComponentsComponent],
                imports: [
                    CommonModule
                ],
                exports: [ComponentsComponent]
            }]
    }], null, null); })();

/*
 * Public API Surface of components
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ComponentsComponent, ComponentsModule, ComponentsService };

//# sourceMappingURL=vfa-slider.js.map