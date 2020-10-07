import { ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, ɵɵgetCurrentView, ɵɵelementStart, ɵɵlistener, ɵɵrestoreView, ɵɵnextContext, ɵɵtext, ɵɵelementEnd, ɵɵstyleProp, ɵɵclassProp, ɵɵadvance, ɵɵtextInterpolate, ɵɵtemplate, ɵɵproperty, ɵɵdirectiveInject, Renderer2, ɵɵdefineComponent, ɵɵviewQuery, ɵɵqueryRefresh, ɵɵloadQuery, ɵɵelement, ɵɵnamespaceSVG, ɵɵnamespaceHTML, Component, ViewChild, ViewChildren, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { Flip } from 'number-flip';
import { NgForOf, NgIf, CommonModule } from '@angular/common';

class ComponentsService {
    constructor() { }
}
ComponentsService.ɵfac = function ComponentsService_Factory(t) { return new (t || ComponentsService)(); };
ComponentsService.ɵprov = ɵɵdefineInjectable({ token: ComponentsService, factory: ComponentsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(ComponentsService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

const _c0 = ["ringBg"];
const _c1 = ["planeWrap"];
const _c2 = ["recruitmentText"];
const _c3 = ["centerWipe"];
const _c4 = ["number"];
const _c5 = ["arrow"];
const _c6 = ["steps"];
function ComponentsComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    const _r12 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 31);
    ɵɵlistener("click", function ComponentsComponent_div_25_Template_div_click_0_listener() { ɵɵrestoreView(_r12); const idx_r10 = ctx.index; const ctx_r11 = ɵɵnextContext(); return ctx_r11.setActive(idx_r10); });
    ɵɵelementStart(1, "div", 32);
    ɵɵelementStart(2, "div", 33);
    ɵɵelementStart(3, "span");
    ɵɵtext(4);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const idx_r10 = ctx.index;
    const ctx_r5 = ɵɵnextContext();
    ɵɵstyleProp("transform", "translateY(-50%) rotate(" + 360 / 5 * idx_r10 + "deg)");
    ɵɵclassProp("active", idx_r10 === ctx_r5.activeIdx);
    ɵɵadvance(1);
    ɵɵstyleProp("transform", " rotate(" + (0 - 360) / 5 * idx_r10 + "deg)");
    ɵɵadvance(3);
    ɵɵtextInterpolate(idx_r10 + 1);
} }
function ComponentsComponent_div_29_h4_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "h4");
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const item_r13 = ɵɵnextContext().$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate(item_r13.header);
} }
function ComponentsComponent_div_29_ul_7_li_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "li");
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const entry_r20 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate(entry_r20);
} }
function ComponentsComponent_div_29_ul_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "ul");
    ɵɵtemplate(1, ComponentsComponent_div_29_ul_7_li_1_Template, 2, 1, "li", 37);
    ɵɵelementEnd();
} if (rf & 2) {
    const item_r13 = ɵɵnextContext().$implicit;
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", item_r13.list);
} }
function ComponentsComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 34, 35);
    ɵɵelementStart(2, "h3");
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵtemplate(4, ComponentsComponent_div_29_h4_4_Template, 2, 1, "h4", 36);
    ɵɵelementStart(5, "p");
    ɵɵtext(6);
    ɵɵelementEnd();
    ɵɵtemplate(7, ComponentsComponent_div_29_ul_7_Template, 2, 1, "ul", 36);
    ɵɵelementEnd();
} if (rf & 2) {
    const item_r13 = ctx.$implicit;
    const idx_r14 = ctx.index;
    const ctx_r7 = ɵɵnextContext();
    ɵɵclassProp("active", idx_r14 === ctx_r7.activeIdx);
    ɵɵadvance(3);
    ɵɵtextInterpolate(item_r13.title);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", item_r13.header);
    ɵɵadvance(2);
    ɵɵtextInterpolate(item_r13.text);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", item_r13.list && item_r13.list.length > 0);
} }
function ComponentsComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    const _r25 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 38);
    ɵɵlistener("click", function ComponentsComponent_div_33_Template_div_click_0_listener() { ɵɵrestoreView(_r25); const idx_r23 = ctx.index; const ctx_r24 = ɵɵnextContext(); return ctx_r24.setActive(idx_r23); });
    ɵɵelementEnd();
} if (rf & 2) {
    const idx_r23 = ctx.index;
    const ctx_r8 = ɵɵnextContext();
    ɵɵclassProp("active", idx_r23 === ctx_r8.activeIdx);
} }
class ComponentsComponent {
    constructor(renderer) {
        this.renderer = renderer;
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
    ngAfterViewInit() {
        this.flipper = new Flip({
            node: this.number.nativeElement,
            from: this.content[0].value,
            delay: 1,
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
        this.flipper.flipTo({ to: this.content[this.activeIdx].value });
        const height = this.steps.toArray()[this.activeIdx].nativeElement
            .scrollHeight;
        this.renderer.setStyle(this.recruitmentText.nativeElement, 'height', height + 'px');
        this.renderer.setStyle(this.recruitmentText.nativeElement, 'background-color', this.content[this.activeIdx].backgroundColor);
        this.renderer.setStyle(this.arrow.nativeElement, 'fill', this.content[this.activeIdx].backgroundColor);
    }
}
ComponentsComponent.ɵfac = function ComponentsComponent_Factory(t) { return new (t || ComponentsComponent)(ɵɵdirectiveInject(Renderer2)); };
ComponentsComponent.ɵcmp = ɵɵdefineComponent({ type: ComponentsComponent, selectors: [["vrm-slider"]], viewQuery: function ComponentsComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵviewQuery(_c0, true);
        ɵɵviewQuery(_c1, true);
        ɵɵviewQuery(_c2, true);
        ɵɵviewQuery(_c3, true);
        ɵɵviewQuery(_c4, true);
        ɵɵviewQuery(_c5, true);
        ɵɵviewQuery(_c6, true);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.ringBg = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.planeWrap = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.recruitmentText = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.centerWipe = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.number = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.arrow = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.steps = _t);
    } }, decls: 35, vars: 5, consts: [[1, "recruitment-process"], [1, "grid"], [1, "recruitment-wrap"], [1, "plane"], [1, "plane-wrap"], ["planeWrap", ""], ["id", "arrow", "width", "60", "height", "60", "viewBox", "0 0 60 60", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M-2.62268e-06 60L60 30L0 -2.62268e-06L7 30L-2.62268e-06 60Z"], ["arrow", ""], [1, "center"], [1, "center-wipe"], ["centerWipe", ""], [1, "center-imgs"], [1, "center-img"], ["number", ""], [1, "hint"], [1, "ring"], ["cx", "50%", "cy", "50%", "r", "200", 1, "ring-bg", "animate"], ["ringBg", ""], ["cx", "50%", "cy", "50%", "r", "200", 1, "dash"], [1, "point-wrap"], ["class", "point", 3, "active", "transform", "click", 4, "ngFor", "ngForOf"], [1, "recruitment-text"], ["recruitmentText", ""], [1, "recruitment-copy"], ["class", "step", 3, "active", 4, "ngFor", "ngForOf"], [1, "recruitment-controls"], [1, "arrow", "prev", 3, "click"], [1, "dots"], ["class", "dot", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "arrow", "next", 3, "click"], [1, "point", 3, "click"], [1, "point-inner"], [1, "point-transform"], [1, "step"], ["steps", ""], [4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "dot", 3, "click"]], template: function ComponentsComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "section", 0);
        ɵɵelement(1, "div", 1);
        ɵɵelementStart(2, "div", 1);
        ɵɵelementStart(3, "div", 2);
        ɵɵelementStart(4, "div", 3);
        ɵɵelementStart(5, "div", 4, 5);
        ɵɵnamespaceSVG();
        ɵɵelementStart(7, "svg", 6);
        ɵɵelement(8, "path", 7, 8);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵnamespaceHTML();
        ɵɵelementStart(10, "div", 9);
        ɵɵelement(11, "div", 10, 11);
        ɵɵelementStart(13, "div", 12);
        ɵɵelementStart(14, "div", 13);
        ɵɵelement(15, "div", null, 14);
        ɵɵelementStart(17, "div", 15);
        ɵɵtext(18, "Anzahl Studien");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(19, "div", 16);
        ɵɵnamespaceSVG();
        ɵɵelementStart(20, "svg");
        ɵɵelement(21, "circle", 17, 18);
        ɵɵelement(23, "circle", 19);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵnamespaceHTML();
        ɵɵelementStart(24, "div", 20);
        ɵɵtemplate(25, ComponentsComponent_div_25_Template, 5, 7, "div", 21);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(26, "div", 22, 23);
        ɵɵelementStart(28, "div", 24);
        ɵɵtemplate(29, ComponentsComponent_div_29_Template, 8, 6, "div", 25);
        ɵɵelementEnd();
        ɵɵelementStart(30, "div", 26);
        ɵɵelementStart(31, "div", 27);
        ɵɵlistener("click", function ComponentsComponent_Template_div_click_31_listener() { return ctx.activeIdx === 0 ? ctx.setActive(ctx.content.length - 1) : ctx.setActive(ctx.activeIdx - 1); });
        ɵɵelementEnd();
        ɵɵelementStart(32, "div", 28);
        ɵɵtemplate(33, ComponentsComponent_div_33_Template, 1, 2, "div", 29);
        ɵɵelementEnd();
        ɵɵelementStart(34, "div", 30);
        ɵɵlistener("click", function ComponentsComponent_Template_div_click_34_listener() { return ctx.activeIdx + 1 > ctx.content.length - 1 ? ctx.setActive(0) : ctx.setActive(ctx.activeIdx + 1); });
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(5);
        ɵɵclassProp("reverse", ctx.lastIdx > ctx.activeIdx);
        ɵɵadvance(20);
        ɵɵproperty("ngForOf", ctx.content);
        ɵɵadvance(4);
        ɵɵproperty("ngForOf", ctx.content);
        ɵɵadvance(4);
        ɵɵproperty("ngForOf", ctx.content);
    } }, directives: [NgForOf, NgIf], styles: ["@import url(https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap)[_ngcontent-%COMP%];[_nghost-%COMP%]{font-family:\"Open Sans\",sans-serif}[_nghost-%COMP%]   *[_ngcontent-%COMP%]{box-sizing:border-box;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}[_nghost-%COMP%]  .number-flip .digit{background:#3c78c7;margin:2px;padding:0 8px;border-radius:5px;position:relative}[_nghost-%COMP%]   section[_ngcontent-%COMP%]{width:100%;position:relative}[_nghost-%COMP%]   .recruitment-process[_ngcontent-%COMP%]{width:100%;position:relative;padding:50px 0;display:inline-block}[_nghost-%COMP%]   .recruitment-process[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]{width:1200px;position:relative;margin:0 auto}[_nghost-%COMP%]   .recruitment-process[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]   .grid-left[_ngcontent-%COMP%]{position:relative;width:400px;float:left}@media only screen and (max-width:1260px){[_nghost-%COMP%]   .recruitment-process[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]{padding:0 30px;width:100%}}@media only screen and (max-width:578px){[_nghost-%COMP%]   .recruitment-process[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]{padding:0 25px}}[_nghost-%COMP%]   .recruitment-text[_ngcontent-%COMP%]{width:calc(100% - 500px);position:relative;float:right;background-color:#3c78c7;border-radius:10px;overflow:hidden;box-shadow:0 25px 40px rgba(0,0,0,.3);transition:.5s;color:#fff}[_nghost-%COMP%]   .recruitment-text[_ngcontent-%COMP%]   .recruitment-copy[_ngcontent-%COMP%]{width:100%;position:relative}[_nghost-%COMP%]   .recruitment-text[_ngcontent-%COMP%]   .recruitment-copy[_ngcontent-%COMP%]   .step[_ngcontent-%COMP%]{width:100%;position:absolute;top:0;left:0;padding:60px 70px 120px}[_nghost-%COMP%]   .recruitment-text[_ngcontent-%COMP%]   .recruitment-copy[_ngcontent-%COMP%]   .step[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{visibility:hidden;opacity:0;transform:translateX(-50px);transition:1s}[_nghost-%COMP%]   .recruitment-text[_ngcontent-%COMP%]   .recruitment-copy[_ngcontent-%COMP%]   .step[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:nth-child(2){transition-delay:.1s}[_nghost-%COMP%]   .recruitment-text[_ngcontent-%COMP%]   .recruitment-copy[_ngcontent-%COMP%]   .step.active[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{visibility:visible;opacity:1;transform:translateX(0)}[_nghost-%COMP%]   .recruitment-text[_ngcontent-%COMP%]   .recruitment-copy[_ngcontent-%COMP%]   .step.next[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{visibility:hidden;opacity:0;transform:translateX(50px)}[_nghost-%COMP%]   .recruitment-text[_ngcontent-%COMP%]   .recruitment-copy[_ngcontent-%COMP%]   .step[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], [_nghost-%COMP%]   .recruitment-text[_ngcontent-%COMP%]   .recruitment-copy[_ngcontent-%COMP%]   .step[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}[_nghost-%COMP%]   .recruitment-text[_ngcontent-%COMP%]   .recruitment-copy[_ngcontent-%COMP%]   .step[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-weight:500;font-size:24px;margin-bottom:20px}[_nghost-%COMP%]   .recruitment-text[_ngcontent-%COMP%]   .recruitment-copy[_ngcontent-%COMP%]   .step[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], [_nghost-%COMP%]   .recruitment-text[_ngcontent-%COMP%]   .recruitment-copy[_ngcontent-%COMP%]   .step[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{font-size:16px;line-height:24px}[_nghost-%COMP%]   .recruitment-text[_ngcontent-%COMP%]   .recruitment-controls[_ngcontent-%COMP%]{width:100%;height:80px;background-color:#efefef;position:absolute;bottom:0;left:0;display:flex;align-items:center;justify-content:center;border-radius:0 0 10px 10px}[_nghost-%COMP%]   .recruitment-text[_ngcontent-%COMP%]   .recruitment-controls[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%]{width:16px;height:16px;border-top:3px solid #3c78c7;border-left:3px solid #3c78c7;transform:rotate(-45deg);transition:.3s;cursor:pointer}[_nghost-%COMP%]   .recruitment-text[_ngcontent-%COMP%]   .recruitment-controls[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%]:hover{border-color:#737373}[_nghost-%COMP%]   .recruitment-text[_ngcontent-%COMP%]   .recruitment-controls[_ngcontent-%COMP%]   .arrow.next[_ngcontent-%COMP%]{transform:rotate(135deg)}[_nghost-%COMP%]   .recruitment-text[_ngcontent-%COMP%]   .recruitment-controls[_ngcontent-%COMP%]   .dots[_ngcontent-%COMP%]{margin:0 10px;position:relative}[_nghost-%COMP%]   .recruitment-text[_ngcontent-%COMP%]   .recruitment-controls[_ngcontent-%COMP%]   .dots[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]{width:16px;height:16px;background-color:#e6e6e6;border-radius:50%;position:relative;float:left;margin:0 5px;transition:.3s;cursor:pointer}[_nghost-%COMP%]   .recruitment-text[_ngcontent-%COMP%]   .recruitment-controls[_ngcontent-%COMP%]   .dots[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:hover{background-color:silver}[_nghost-%COMP%]   .recruitment-text[_ngcontent-%COMP%]   .recruitment-controls[_ngcontent-%COMP%]   .dots[_ngcontent-%COMP%]   .dot.active[_ngcontent-%COMP%]{background-color:#3c78c7}@media only screen and (max-width:1260px){[_nghost-%COMP%]   .recruitment-text[_ngcontent-%COMP%]   .recruitment-copy[_ngcontent-%COMP%]   .step[_ngcontent-%COMP%]{padding:40px 40px 100px}[_nghost-%COMP%]   .recruitment-text[_ngcontent-%COMP%]   .recruitment-controls[_ngcontent-%COMP%]{height:70px}[_nghost-%COMP%]   .recruitment-wrap[_ngcontent-%COMP%]{margin-left:20px}}@media only screen and (max-width:1000px){[_nghost-%COMP%]   .recruitment-text[_ngcontent-%COMP%]{width:calc(100% - 375px)}[_nghost-%COMP%]   .recruitment-text[_ngcontent-%COMP%]   .recruitment-copy[_ngcontent-%COMP%]   .step[_ngcontent-%COMP%]{padding:30px 30px 70px}[_nghost-%COMP%]   .recruitment-text[_ngcontent-%COMP%]   .recruitment-copy[_ngcontent-%COMP%]   .step[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:22px;margin-bottom:16px}[_nghost-%COMP%]   .recruitment-text[_ngcontent-%COMP%]   .recruitment-copy[_ngcontent-%COMP%]   .step[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px}[_nghost-%COMP%]   .recruitment-text[_ngcontent-%COMP%]   .recruitment-controls[_ngcontent-%COMP%]{height:50px}}@media only screen and (max-width:768px){[_nghost-%COMP%]   .recruitment-text[_ngcontent-%COMP%]{width:100%}}[_nghost-%COMP%]   .recruitment-wrap[_ngcontent-%COMP%]{width:400px;height:400px;position:relative;float:left;margin-bottom:50px}[_nghost-%COMP%]   .recruitment-wrap[_ngcontent-%COMP%]   .plane[_ngcontent-%COMP%]{position:absolute;width:100%;height:100%;display:flex;justify-content:center;z-index:5;pointer-events:none}[_nghost-%COMP%]   .recruitment-wrap[_ngcontent-%COMP%]   .plane[_ngcontent-%COMP%]   .plane-wrap[_ngcontent-%COMP%]{height:60px;display:inline-block;transform-origin:50% 230px;transform:translateY(-50%) rotate(0);transition:1s cubic-bezier(.645,.045,.355,1)}[_nghost-%COMP%]   .recruitment-wrap[_ngcontent-%COMP%]   .plane[_ngcontent-%COMP%]   .plane-wrap.reverse[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], [_nghost-%COMP%]   .recruitment-wrap[_ngcontent-%COMP%]   .plane[_ngcontent-%COMP%]   .plane-wrap.reverse[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{transform:scaleX(-1)}[_nghost-%COMP%]   .recruitment-wrap[_ngcontent-%COMP%]   .plane[_ngcontent-%COMP%]   .plane-wrap.shadow[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], [_nghost-%COMP%]   .recruitment-wrap[_ngcontent-%COMP%]   .plane[_ngcontent-%COMP%]   .plane-wrap.shadow[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{filter:drop-shadow(0 -15px 0 rgba(0, 0, 0, .1))}[_nghost-%COMP%]   .recruitment-wrap[_ngcontent-%COMP%]   .plane[_ngcontent-%COMP%]   .plane-wrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], [_nghost-%COMP%]   .recruitment-wrap[_ngcontent-%COMP%]   .plane[_ngcontent-%COMP%]   .plane-wrap[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{position:relative;top:0;height:60px;transition:.5s cubic-bezier(.645,.045,.355,1);filter:drop-shadow(0 15px 0 rgba(0, 0, 0, .1))}[_nghost-%COMP%]   .recruitment-wrap[_ngcontent-%COMP%]   .plane[_ngcontent-%COMP%]   .plane-wrap[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]{fill:#3c78c7;transition:fill 1s cubic-bezier(.645,.045,.355,1)}[_nghost-%COMP%]   .recruitment-wrap[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]{position:absolute;height:60%;width:60%;z-index:2;overflow:hidden;display:flex;align-items:center;justify-content:center;left:50%;top:50%;transform:translate(-50%,-50%)}[_nghost-%COMP%]   .recruitment-wrap[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]:before{content:\"\";width:102%;height:102%;position:absolute;border-radius:50%;z-index:10}[_nghost-%COMP%]   .recruitment-wrap[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]   .center-imgs[_ngcontent-%COMP%]{width:100%;height:100%;position:absolute;display:flex;align-items:center;justify-content:center;z-index:1}[_nghost-%COMP%]   .recruitment-wrap[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]   .center-imgs[_ngcontent-%COMP%]   .center-img[_ngcontent-%COMP%]{width:110%;height:110%;position:absolute;z-index:1;display:flex;justify-content:center;align-items:center;font-size:5em;color:#fff;flex-direction:column}[_nghost-%COMP%]   .recruitment-wrap[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]   .center-imgs[_ngcontent-%COMP%]   .center-img[_ngcontent-%COMP%]   .hint[_ngcontent-%COMP%]{font-size:17px;color:#3c78c7;margin-top:20px;font-weight:600}[_nghost-%COMP%]   .recruitment-wrap[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]   .center-imgs[_ngcontent-%COMP%]   .center-img.active[_ngcontent-%COMP%]{z-index:2}[_nghost-%COMP%]   .recruitment-wrap[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]   .center-imgs[_ngcontent-%COMP%]   .center-img.active[_ngcontent-%COMP%]:after{transition:10s cubic-bezier(.23,1,.32,1);transform:scale(1)}[_nghost-%COMP%]   .recruitment-wrap[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]   .center-imgs[_ngcontent-%COMP%]   .center-img[_ngcontent-%COMP%]:after{content:\"\";position:absolute;width:100%;height:100%;background-size:cover;background-position:center;transition:none;transform:scale(.9)}[_nghost-%COMP%]   .recruitment-wrap[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]   .center-wipe[_ngcontent-%COMP%]{width:100%;height:100%;position:absolute;z-index:2;background-image:url(http://res.cloudinary.com/da32ibrgl/image/upload/v1517306495/sprite-v2_bsi2cx.png);background-size:auto 100%;background-position:0 0}[_nghost-%COMP%]   .recruitment-wrap[_ngcontent-%COMP%]   .ring[_ngcontent-%COMP%]{position:absolute;width:100%;height:100%;z-index:1;border-radius:50%;display:flex;justify-content:center;align-items:center;transform:rotate(-90deg)}[_nghost-%COMP%]   .recruitment-wrap[_ngcontent-%COMP%]   .ring[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:100%;height:100%;position:absolute;z-index:1;top:0;left:0;overflow:visible}[_nghost-%COMP%]   .recruitment-wrap[_ngcontent-%COMP%]   .ring[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{width:100%;height:100%;stroke-width:2;fill:none;stroke:#3c78c7}[_nghost-%COMP%]   .recruitment-wrap[_ngcontent-%COMP%]   .ring[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   circle.animate[_ngcontent-%COMP%]{transition:1s cubic-bezier(.645,.045,.355,1)}[_nghost-%COMP%]   .recruitment-wrap[_ngcontent-%COMP%]   .ring[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   circle.dash[_ngcontent-%COMP%]{opacity:.2;stroke-dasharray:10,10}[_nghost-%COMP%]   .recruitment-wrap[_ngcontent-%COMP%]   .point-wrap[_ngcontent-%COMP%]{position:absolute;width:100%;height:100%;display:flex;justify-content:center;align-items:center;z-index:3}[_nghost-%COMP%]   .recruitment-wrap[_ngcontent-%COMP%]   .point-wrap[_ngcontent-%COMP%]   .point[_ngcontent-%COMP%]{width:30px;height:30px;position:absolute;border-radius:50%;display:flex;justify-content:center;top:0;cursor:pointer;align-items:center;transform-origin:50% 215px}[_nghost-%COMP%]   .recruitment-wrap[_ngcontent-%COMP%]   .point-wrap[_ngcontent-%COMP%]   .point[_ngcontent-%COMP%]   .point-inner[_ngcontent-%COMP%]{width:100%;height:100%;position:relative}[_nghost-%COMP%]   .recruitment-wrap[_ngcontent-%COMP%]   .point-wrap[_ngcontent-%COMP%]   .point[_ngcontent-%COMP%]   .point-inner[_ngcontent-%COMP%]   .point-transform[_ngcontent-%COMP%]{background-color:#3c78c7;width:100%;height:100%;display:flex;justify-content:center;align-items:center;border-radius:50%;transition:.6s;box-shadow:0 5px 20px rgba(0,0,0,.3)}[_nghost-%COMP%]   .recruitment-wrap[_ngcontent-%COMP%]   .point-wrap[_ngcontent-%COMP%]   .point[_ngcontent-%COMP%]   .point-inner[_ngcontent-%COMP%]   .point-transform[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{position:relative;margin-top:1px;font-size:16px;display:block;transition:.6s;color:#fff}[_nghost-%COMP%]   .recruitment-wrap[_ngcontent-%COMP%]   .point-wrap[_ngcontent-%COMP%]   .point[_ngcontent-%COMP%]:hover   .point-transform[_ngcontent-%COMP%]{background-color:#333}[_nghost-%COMP%]   .recruitment-wrap[_ngcontent-%COMP%]   .point-wrap[_ngcontent-%COMP%]   .point[_ngcontent-%COMP%]:hover   .point-transform[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#fff}[_nghost-%COMP%]   .recruitment-wrap[_ngcontent-%COMP%]   .point-wrap[_ngcontent-%COMP%]   .point.active[_ngcontent-%COMP%]   .point-transform[_ngcontent-%COMP%]{transform:scale(.3);background-color:#333}[_nghost-%COMP%]   .recruitment-wrap[_ngcontent-%COMP%]   .point-wrap[_ngcontent-%COMP%]   .point.active[_ngcontent-%COMP%]   .point-transform[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#fff;opacity:0}@media only screen and (max-width:1000px){[_nghost-%COMP%]   .recruitment-wrap[_ngcontent-%COMP%]{width:320px;height:320px}[_nghost-%COMP%]   .recruitment-wrap[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{transform-origin:50% 50%;transform:scale(.8)}[_nghost-%COMP%]   .recruitment-wrap[_ngcontent-%COMP%]   .plane[_ngcontent-%COMP%]   .plane-wrap[_ngcontent-%COMP%]{height:40px;transform-origin:50% 180px}[_nghost-%COMP%]   .recruitment-wrap[_ngcontent-%COMP%]   .plane[_ngcontent-%COMP%]   .plane-wrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], [_nghost-%COMP%]   .recruitment-wrap[_ngcontent-%COMP%]   .plane[_ngcontent-%COMP%]   .plane-wrap[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{height:40px}[_nghost-%COMP%]   .recruitment-wrap[_ngcontent-%COMP%]   .point-wrap[_ngcontent-%COMP%]   .point[_ngcontent-%COMP%]{width:40px;height:40px;transform-origin:50% 180px}}@media only screen and (max-width:768px){[_nghost-%COMP%]   .recruitment-wrap[_ngcontent-%COMP%]{left:50%;margin:0 0 30px;transform:translateX(-50%)}}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(ComponentsComponent, [{
        type: Component,
        args: [{
                selector: 'vrm-slider',
                templateUrl: './components.component.html',
                styleUrls: ['./components.component.scss'],
            }]
    }], function () { return [{ type: Renderer2 }]; }, { ringBg: [{
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

class ComponentsModule {
}
ComponentsModule.ɵmod = ɵɵdefineNgModule({ type: ComponentsModule });
ComponentsModule.ɵinj = ɵɵdefineInjector({ factory: function ComponentsModule_Factory(t) { return new (t || ComponentsModule)(); }, imports: [[
            CommonModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(ComponentsModule, { declarations: [ComponentsComponent], imports: [CommonModule], exports: [ComponentsComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(ComponentsModule, [{
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
//# sourceMappingURL=components.js.map
