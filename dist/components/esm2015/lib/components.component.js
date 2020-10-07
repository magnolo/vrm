import { Component, ViewChild, ViewChildren, } from '@angular/core';
import { Flip } from 'number-flip';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = ["ringBg"];
const _c1 = ["planeWrap"];
const _c2 = ["recruitmentText"];
const _c3 = ["centerWipe"];
const _c4 = ["number"];
const _c5 = ["arrow"];
const _c6 = ["steps"];
function ComponentsComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 31);
    i0.ɵɵlistener("click", function ComponentsComponent_div_25_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r12); const idx_r10 = ctx.index; const ctx_r11 = i0.ɵɵnextContext(); return ctx_r11.setActive(idx_r10); });
    i0.ɵɵelementStart(1, "div", 32);
    i0.ɵɵelementStart(2, "div", 33);
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const idx_r10 = ctx.index;
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("transform", "translateY(-50%) rotate(" + 360 / 5 * idx_r10 + "deg)");
    i0.ɵɵclassProp("active", idx_r10 === ctx_r5.activeIdx);
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("transform", " rotate(" + (0 - 360) / 5 * idx_r10 + "deg)");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(idx_r10 + 1);
} }
function ComponentsComponent_div_29_h4_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h4");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r13 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(item_r13.header);
} }
function ComponentsComponent_div_29_ul_7_li_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const entry_r20 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(entry_r20);
} }
function ComponentsComponent_div_29_ul_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul");
    i0.ɵɵtemplate(1, ComponentsComponent_div_29_ul_7_li_1_Template, 2, 1, "li", 37);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r13 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", item_r13.list);
} }
function ComponentsComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 34, 35);
    i0.ɵɵelementStart(2, "h3");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, ComponentsComponent_div_29_h4_4_Template, 2, 1, "h4", 36);
    i0.ɵɵelementStart(5, "p");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(7, ComponentsComponent_div_29_ul_7_Template, 2, 1, "ul", 36);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r13 = ctx.$implicit;
    const idx_r14 = ctx.index;
    const ctx_r7 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("active", idx_r14 === ctx_r7.activeIdx);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(item_r13.title);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r13.header);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r13.text);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r13.list && item_r13.list.length > 0);
} }
function ComponentsComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    const _r25 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 38);
    i0.ɵɵlistener("click", function ComponentsComponent_div_33_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r25); const idx_r23 = ctx.index; const ctx_r24 = i0.ɵɵnextContext(); return ctx_r24.setActive(idx_r23); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const idx_r23 = ctx.index;
    const ctx_r8 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("active", idx_r23 === ctx_r8.activeIdx);
} }
export class ComponentsComponent {
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
ComponentsComponent.ɵfac = function ComponentsComponent_Factory(t) { return new (t || ComponentsComponent)(i0.ɵɵdirectiveInject(i0.Renderer2)); };
ComponentsComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ComponentsComponent, selectors: [["vrm-slider"]], viewQuery: function ComponentsComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, true);
        i0.ɵɵviewQuery(_c1, true);
        i0.ɵɵviewQuery(_c2, true);
        i0.ɵɵviewQuery(_c3, true);
        i0.ɵɵviewQuery(_c4, true);
        i0.ɵɵviewQuery(_c5, true);
        i0.ɵɵviewQuery(_c6, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.ringBg = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.planeWrap = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.recruitmentText = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.centerWipe = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.number = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.arrow = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.steps = _t);
    } }, decls: 35, vars: 5, consts: [[1, "recruitment-process"], [1, "grid"], [1, "recruitment-wrap"], [1, "plane"], [1, "plane-wrap"], ["planeWrap", ""], ["id", "arrow", "width", "60", "height", "60", "viewBox", "0 0 60 60", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M-2.62268e-06 60L60 30L0 -2.62268e-06L7 30L-2.62268e-06 60Z"], ["arrow", ""], [1, "center"], [1, "center-wipe"], ["centerWipe", ""], [1, "center-imgs"], [1, "center-img"], ["number", ""], [1, "hint"], [1, "ring"], ["cx", "50%", "cy", "50%", "r", "200", 1, "ring-bg", "animate"], ["ringBg", ""], ["cx", "50%", "cy", "50%", "r", "200", 1, "dash"], [1, "point-wrap"], ["class", "point", 3, "active", "transform", "click", 4, "ngFor", "ngForOf"], [1, "recruitment-text"], ["recruitmentText", ""], [1, "recruitment-copy"], ["class", "step", 3, "active", 4, "ngFor", "ngForOf"], [1, "recruitment-controls"], [1, "arrow", "prev", 3, "click"], [1, "dots"], ["class", "dot", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "arrow", "next", 3, "click"], [1, "point", 3, "click"], [1, "point-inner"], [1, "point-transform"], [1, "step"], ["steps", ""], [4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "dot", 3, "click"]], template: function ComponentsComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "section", 0);
        i0.ɵɵelement(1, "div", 1);
        i0.ɵɵelementStart(2, "div", 1);
        i0.ɵɵelementStart(3, "div", 2);
        i0.ɵɵelementStart(4, "div", 3);
        i0.ɵɵelementStart(5, "div", 4, 5);
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(7, "svg", 6);
        i0.ɵɵelement(8, "path", 7, 8);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(10, "div", 9);
        i0.ɵɵelement(11, "div", 10, 11);
        i0.ɵɵelementStart(13, "div", 12);
        i0.ɵɵelementStart(14, "div", 13);
        i0.ɵɵelement(15, "div", null, 14);
        i0.ɵɵelementStart(17, "div", 15);
        i0.ɵɵtext(18, "Anzahl Studien");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(19, "div", 16);
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(20, "svg");
        i0.ɵɵelement(21, "circle", 17, 18);
        i0.ɵɵelement(23, "circle", 19);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(24, "div", 20);
        i0.ɵɵtemplate(25, ComponentsComponent_div_25_Template, 5, 7, "div", 21);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(26, "div", 22, 23);
        i0.ɵɵelementStart(28, "div", 24);
        i0.ɵɵtemplate(29, ComponentsComponent_div_29_Template, 8, 6, "div", 25);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(30, "div", 26);
        i0.ɵɵelementStart(31, "div", 27);
        i0.ɵɵlistener("click", function ComponentsComponent_Template_div_click_31_listener() { return ctx.activeIdx === 0 ? ctx.setActive(ctx.content.length - 1) : ctx.setActive(ctx.activeIdx - 1); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(32, "div", 28);
        i0.ɵɵtemplate(33, ComponentsComponent_div_33_Template, 1, 2, "div", 29);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(34, "div", 30);
        i0.ɵɵlistener("click", function ComponentsComponent_Template_div_click_34_listener() { return ctx.activeIdx + 1 > ctx.content.length - 1 ? ctx.setActive(0) : ctx.setActive(ctx.activeIdx + 1); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(5);
        i0.ɵɵclassProp("reverse", ctx.lastIdx > ctx.activeIdx);
        i0.ɵɵadvance(20);
        i0.ɵɵproperty("ngForOf", ctx.content);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngForOf", ctx.content);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngForOf", ctx.content);
    } }, directives: [i1.NgForOf, i1.NgIf], styles: ["@import url(https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap)[_ngcontent-%COMP%];[_nghost-%COMP%]{font-family:\"Open Sans\",sans-serif}[_nghost-%COMP%]   *[_ngcontent-%COMP%]{box-sizing:border-box;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}[_nghost-%COMP%]  .number-flip .digit{background:#3c78c7;margin:2px;padding:0 8px;border-radius:5px;position:relative}[_nghost-%COMP%]   section[_ngcontent-%COMP%]{width:100%;position:relative}[_nghost-%COMP%]   .recruitment-process[_ngcontent-%COMP%]{width:100%;position:relative;padding:50px 0;display:inline-block}[_nghost-%COMP%]   .recruitment-process[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]{width:1200px;position:relative;margin:0 auto}[_nghost-%COMP%]   .recruitment-process[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]   .grid-left[_ngcontent-%COMP%]{position:relative;width:400px;float:left}@media only screen and (max-width:1260px){[_nghost-%COMP%]   .recruitment-process[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]{padding:0 30px;width:100%}}@media only screen and (max-width:578px){[_nghost-%COMP%]   .recruitment-process[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]{padding:0 25px}}[_nghost-%COMP%]   .recruitment-text[_ngcontent-%COMP%]{width:calc(100% - 500px);position:relative;float:right;background-color:#3c78c7;border-radius:10px;overflow:hidden;box-shadow:0 25px 40px rgba(0,0,0,.3);transition:.5s;color:#fff}[_nghost-%COMP%]   .recruitment-text[_ngcontent-%COMP%]   .recruitment-copy[_ngcontent-%COMP%]{width:100%;position:relative}[_nghost-%COMP%]   .recruitment-text[_ngcontent-%COMP%]   .recruitment-copy[_ngcontent-%COMP%]   .step[_ngcontent-%COMP%]{width:100%;position:absolute;top:0;left:0;padding:60px 70px 120px}[_nghost-%COMP%]   .recruitment-text[_ngcontent-%COMP%]   .recruitment-copy[_ngcontent-%COMP%]   .step[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{visibility:hidden;opacity:0;transform:translateX(-50px);transition:1s}[_nghost-%COMP%]   .recruitment-text[_ngcontent-%COMP%]   .recruitment-copy[_ngcontent-%COMP%]   .step[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:nth-child(2){transition-delay:.1s}[_nghost-%COMP%]   .recruitment-text[_ngcontent-%COMP%]   .recruitment-copy[_ngcontent-%COMP%]   .step.active[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{visibility:visible;opacity:1;transform:translateX(0)}[_nghost-%COMP%]   .recruitment-text[_ngcontent-%COMP%]   .recruitment-copy[_ngcontent-%COMP%]   .step.next[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{visibility:hidden;opacity:0;transform:translateX(50px)}[_nghost-%COMP%]   .recruitment-text[_ngcontent-%COMP%]   .recruitment-copy[_ngcontent-%COMP%]   .step[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], [_nghost-%COMP%]   .recruitment-text[_ngcontent-%COMP%]   .recruitment-copy[_ngcontent-%COMP%]   .step[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}[_nghost-%COMP%]   .recruitment-text[_ngcontent-%COMP%]   .recruitment-copy[_ngcontent-%COMP%]   .step[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-weight:500;font-size:24px;margin-bottom:20px}[_nghost-%COMP%]   .recruitment-text[_ngcontent-%COMP%]   .recruitment-copy[_ngcontent-%COMP%]   .step[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], [_nghost-%COMP%]   .recruitment-text[_ngcontent-%COMP%]   .recruitment-copy[_ngcontent-%COMP%]   .step[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{font-size:16px;line-height:24px}[_nghost-%COMP%]   .recruitment-text[_ngcontent-%COMP%]   .recruitment-controls[_ngcontent-%COMP%]{width:100%;height:80px;background-color:#efefef;position:absolute;bottom:0;left:0;display:flex;align-items:center;justify-content:center;border-radius:0 0 10px 10px}[_nghost-%COMP%]   .recruitment-text[_ngcontent-%COMP%]   .recruitment-controls[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%]{width:16px;height:16px;border-top:3px solid #3c78c7;border-left:3px solid #3c78c7;transform:rotate(-45deg);transition:.3s;cursor:pointer}[_nghost-%COMP%]   .recruitment-text[_ngcontent-%COMP%]   .recruitment-controls[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%]:hover{border-color:#737373}[_nghost-%COMP%]   .recruitment-text[_ngcontent-%COMP%]   .recruitment-controls[_ngcontent-%COMP%]   .arrow.next[_ngcontent-%COMP%]{transform:rotate(135deg)}[_nghost-%COMP%]   .recruitment-text[_ngcontent-%COMP%]   .recruitment-controls[_ngcontent-%COMP%]   .dots[_ngcontent-%COMP%]{margin:0 10px;position:relative}[_nghost-%COMP%]   .recruitment-text[_ngcontent-%COMP%]   .recruitment-controls[_ngcontent-%COMP%]   .dots[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]{width:16px;height:16px;background-color:#e6e6e6;border-radius:50%;position:relative;float:left;margin:0 5px;transition:.3s;cursor:pointer}[_nghost-%COMP%]   .recruitment-text[_ngcontent-%COMP%]   .recruitment-controls[_ngcontent-%COMP%]   .dots[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:hover{background-color:silver}[_nghost-%COMP%]   .recruitment-text[_ngcontent-%COMP%]   .recruitment-controls[_ngcontent-%COMP%]   .dots[_ngcontent-%COMP%]   .dot.active[_ngcontent-%COMP%]{background-color:#3c78c7}@media only screen and (max-width:1260px){[_nghost-%COMP%]   .recruitment-text[_ngcontent-%COMP%]   .recruitment-copy[_ngcontent-%COMP%]   .step[_ngcontent-%COMP%]{padding:40px 40px 100px}[_nghost-%COMP%]   .recruitment-text[_ngcontent-%COMP%]   .recruitment-controls[_ngcontent-%COMP%]{height:70px}[_nghost-%COMP%]   .recruitment-wrap[_ngcontent-%COMP%]{margin-left:20px}}@media only screen and (max-width:1000px){[_nghost-%COMP%]   .recruitment-text[_ngcontent-%COMP%]{width:calc(100% - 375px)}[_nghost-%COMP%]   .recruitment-text[_ngcontent-%COMP%]   .recruitment-copy[_ngcontent-%COMP%]   .step[_ngcontent-%COMP%]{padding:30px 30px 70px}[_nghost-%COMP%]   .recruitment-text[_ngcontent-%COMP%]   .recruitment-copy[_ngcontent-%COMP%]   .step[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:22px;margin-bottom:16px}[_nghost-%COMP%]   .recruitment-text[_ngcontent-%COMP%]   .recruitment-copy[_ngcontent-%COMP%]   .step[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px}[_nghost-%COMP%]   .recruitment-text[_ngcontent-%COMP%]   .recruitment-controls[_ngcontent-%COMP%]{height:50px}}@media only screen and (max-width:768px){[_nghost-%COMP%]   .recruitment-text[_ngcontent-%COMP%]{width:100%}}[_nghost-%COMP%]   .recruitment-wrap[_ngcontent-%COMP%]{width:400px;height:400px;position:relative;float:left;margin-bottom:50px}[_nghost-%COMP%]   .recruitment-wrap[_ngcontent-%COMP%]   .plane[_ngcontent-%COMP%]{position:absolute;width:100%;height:100%;display:flex;justify-content:center;z-index:5;pointer-events:none}[_nghost-%COMP%]   .recruitment-wrap[_ngcontent-%COMP%]   .plane[_ngcontent-%COMP%]   .plane-wrap[_ngcontent-%COMP%]{height:60px;display:inline-block;transform-origin:50% 230px;transform:translateY(-50%) rotate(0);transition:1s cubic-bezier(.645,.045,.355,1)}[_nghost-%COMP%]   .recruitment-wrap[_ngcontent-%COMP%]   .plane[_ngcontent-%COMP%]   .plane-wrap.reverse[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], [_nghost-%COMP%]   .recruitment-wrap[_ngcontent-%COMP%]   .plane[_ngcontent-%COMP%]   .plane-wrap.reverse[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{transform:scaleX(-1)}[_nghost-%COMP%]   .recruitment-wrap[_ngcontent-%COMP%]   .plane[_ngcontent-%COMP%]   .plane-wrap.shadow[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], [_nghost-%COMP%]   .recruitment-wrap[_ngcontent-%COMP%]   .plane[_ngcontent-%COMP%]   .plane-wrap.shadow[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{filter:drop-shadow(0 -15px 0 rgba(0, 0, 0, .1))}[_nghost-%COMP%]   .recruitment-wrap[_ngcontent-%COMP%]   .plane[_ngcontent-%COMP%]   .plane-wrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], [_nghost-%COMP%]   .recruitment-wrap[_ngcontent-%COMP%]   .plane[_ngcontent-%COMP%]   .plane-wrap[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{position:relative;top:0;height:60px;transition:.5s cubic-bezier(.645,.045,.355,1);filter:drop-shadow(0 15px 0 rgba(0, 0, 0, .1))}[_nghost-%COMP%]   .recruitment-wrap[_ngcontent-%COMP%]   .plane[_ngcontent-%COMP%]   .plane-wrap[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]{fill:#3c78c7;transition:fill 1s cubic-bezier(.645,.045,.355,1)}[_nghost-%COMP%]   .recruitment-wrap[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]{position:absolute;height:60%;width:60%;z-index:2;overflow:hidden;display:flex;align-items:center;justify-content:center;left:50%;top:50%;transform:translate(-50%,-50%)}[_nghost-%COMP%]   .recruitment-wrap[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]:before{content:\"\";width:102%;height:102%;position:absolute;border-radius:50%;z-index:10}[_nghost-%COMP%]   .recruitment-wrap[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]   .center-imgs[_ngcontent-%COMP%]{width:100%;height:100%;position:absolute;display:flex;align-items:center;justify-content:center;z-index:1}[_nghost-%COMP%]   .recruitment-wrap[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]   .center-imgs[_ngcontent-%COMP%]   .center-img[_ngcontent-%COMP%]{width:110%;height:110%;position:absolute;z-index:1;display:flex;justify-content:center;align-items:center;font-size:5em;color:#fff;flex-direction:column}[_nghost-%COMP%]   .recruitment-wrap[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]   .center-imgs[_ngcontent-%COMP%]   .center-img[_ngcontent-%COMP%]   .hint[_ngcontent-%COMP%]{font-size:17px;color:#3c78c7;margin-top:20px;font-weight:600}[_nghost-%COMP%]   .recruitment-wrap[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]   .center-imgs[_ngcontent-%COMP%]   .center-img.active[_ngcontent-%COMP%]{z-index:2}[_nghost-%COMP%]   .recruitment-wrap[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]   .center-imgs[_ngcontent-%COMP%]   .center-img.active[_ngcontent-%COMP%]:after{transition:10s cubic-bezier(.23,1,.32,1);transform:scale(1)}[_nghost-%COMP%]   .recruitment-wrap[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]   .center-imgs[_ngcontent-%COMP%]   .center-img[_ngcontent-%COMP%]:after{content:\"\";position:absolute;width:100%;height:100%;background-size:cover;background-position:center;transition:none;transform:scale(.9)}[_nghost-%COMP%]   .recruitment-wrap[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]   .center-wipe[_ngcontent-%COMP%]{width:100%;height:100%;position:absolute;z-index:2;background-image:url(http://res.cloudinary.com/da32ibrgl/image/upload/v1517306495/sprite-v2_bsi2cx.png);background-size:auto 100%;background-position:0 0}[_nghost-%COMP%]   .recruitment-wrap[_ngcontent-%COMP%]   .ring[_ngcontent-%COMP%]{position:absolute;width:100%;height:100%;z-index:1;border-radius:50%;display:flex;justify-content:center;align-items:center;transform:rotate(-90deg)}[_nghost-%COMP%]   .recruitment-wrap[_ngcontent-%COMP%]   .ring[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:100%;height:100%;position:absolute;z-index:1;top:0;left:0;overflow:visible}[_nghost-%COMP%]   .recruitment-wrap[_ngcontent-%COMP%]   .ring[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{width:100%;height:100%;stroke-width:2;fill:none;stroke:#3c78c7}[_nghost-%COMP%]   .recruitment-wrap[_ngcontent-%COMP%]   .ring[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   circle.animate[_ngcontent-%COMP%]{transition:1s cubic-bezier(.645,.045,.355,1)}[_nghost-%COMP%]   .recruitment-wrap[_ngcontent-%COMP%]   .ring[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   circle.dash[_ngcontent-%COMP%]{opacity:.2;stroke-dasharray:10,10}[_nghost-%COMP%]   .recruitment-wrap[_ngcontent-%COMP%]   .point-wrap[_ngcontent-%COMP%]{position:absolute;width:100%;height:100%;display:flex;justify-content:center;align-items:center;z-index:3}[_nghost-%COMP%]   .recruitment-wrap[_ngcontent-%COMP%]   .point-wrap[_ngcontent-%COMP%]   .point[_ngcontent-%COMP%]{width:30px;height:30px;position:absolute;border-radius:50%;display:flex;justify-content:center;top:0;cursor:pointer;align-items:center;transform-origin:50% 215px}[_nghost-%COMP%]   .recruitment-wrap[_ngcontent-%COMP%]   .point-wrap[_ngcontent-%COMP%]   .point[_ngcontent-%COMP%]   .point-inner[_ngcontent-%COMP%]{width:100%;height:100%;position:relative}[_nghost-%COMP%]   .recruitment-wrap[_ngcontent-%COMP%]   .point-wrap[_ngcontent-%COMP%]   .point[_ngcontent-%COMP%]   .point-inner[_ngcontent-%COMP%]   .point-transform[_ngcontent-%COMP%]{background-color:#3c78c7;width:100%;height:100%;display:flex;justify-content:center;align-items:center;border-radius:50%;transition:.6s;box-shadow:0 5px 20px rgba(0,0,0,.3)}[_nghost-%COMP%]   .recruitment-wrap[_ngcontent-%COMP%]   .point-wrap[_ngcontent-%COMP%]   .point[_ngcontent-%COMP%]   .point-inner[_ngcontent-%COMP%]   .point-transform[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{position:relative;margin-top:1px;font-size:16px;display:block;transition:.6s;color:#fff}[_nghost-%COMP%]   .recruitment-wrap[_ngcontent-%COMP%]   .point-wrap[_ngcontent-%COMP%]   .point[_ngcontent-%COMP%]:hover   .point-transform[_ngcontent-%COMP%]{background-color:#333}[_nghost-%COMP%]   .recruitment-wrap[_ngcontent-%COMP%]   .point-wrap[_ngcontent-%COMP%]   .point[_ngcontent-%COMP%]:hover   .point-transform[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#fff}[_nghost-%COMP%]   .recruitment-wrap[_ngcontent-%COMP%]   .point-wrap[_ngcontent-%COMP%]   .point.active[_ngcontent-%COMP%]   .point-transform[_ngcontent-%COMP%]{transform:scale(.3);background-color:#333}[_nghost-%COMP%]   .recruitment-wrap[_ngcontent-%COMP%]   .point-wrap[_ngcontent-%COMP%]   .point.active[_ngcontent-%COMP%]   .point-transform[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#fff;opacity:0}@media only screen and (max-width:1000px){[_nghost-%COMP%]   .recruitment-wrap[_ngcontent-%COMP%]{width:320px;height:320px}[_nghost-%COMP%]   .recruitment-wrap[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{transform-origin:50% 50%;transform:scale(.8)}[_nghost-%COMP%]   .recruitment-wrap[_ngcontent-%COMP%]   .plane[_ngcontent-%COMP%]   .plane-wrap[_ngcontent-%COMP%]{height:40px;transform-origin:50% 180px}[_nghost-%COMP%]   .recruitment-wrap[_ngcontent-%COMP%]   .plane[_ngcontent-%COMP%]   .plane-wrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], [_nghost-%COMP%]   .recruitment-wrap[_ngcontent-%COMP%]   .plane[_ngcontent-%COMP%]   .plane-wrap[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{height:40px}[_nghost-%COMP%]   .recruitment-wrap[_ngcontent-%COMP%]   .point-wrap[_ngcontent-%COMP%]   .point[_ngcontent-%COMP%]{width:40px;height:40px;transform-origin:50% 180px}}@media only screen and (max-width:768px){[_nghost-%COMP%]   .recruitment-wrap[_ngcontent-%COMP%]{left:50%;margin:0 0 30px;transform:translateX(-50%)}}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ComponentsComponent, [{
        type: Component,
        args: [{
                selector: 'vrm-slider',
                templateUrl: './components.component.html',
                styleUrls: ['./components.component.scss'],
            }]
    }], function () { return [{ type: i0.Renderer2 }]; }, { ringBg: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50cy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMuY29tcG9uZW50LnRzIiwibGliL2NvbXBvbmVudHMuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUVMLFNBQVMsRUFLVCxTQUFTLEVBQ1QsWUFBWSxHQUNiLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxhQUFhLENBQUM7Ozs7Ozs7Ozs7OztJQzBDekIsK0JBTUU7SUFKQSx5TkFBd0I7SUFJeEIsK0JBS0U7SUFBQSwrQkFDRTtJQUFBLDRCQUFNO0lBQUEsWUFBYTtJQUFBLGlCQUFPO0lBQzVCLGlCQUFNO0lBQ1IsaUJBQU07SUFDUixpQkFBTTs7OztJQVhKLG9GQUE0RTtJQUQ1RSxzREFBa0M7SUFLaEMsZUFBMEQ7SUFBMUQsMEVBQTBEO0lBSWxELGVBQWE7SUFBYixpQ0FBYTs7O0lBa0J2QiwwQkFBd0I7SUFBQSxZQUFpQjtJQUFBLGlCQUFLOzs7SUFBdEIsZUFBaUI7SUFBakIscUNBQWlCOzs7SUFHdkMsMEJBQW9DO0lBQUEsWUFBVztJQUFBLGlCQUFLOzs7SUFBaEIsZUFBVztJQUFYLCtCQUFXOzs7SUFEakQsMEJBQ0U7SUFBQSwrRUFBb0M7SUFDdEMsaUJBQUs7OztJQURDLGVBQStCO0lBQS9CLHVDQUErQjs7O0lBVHZDLG1DQUtFO0lBQUEsMEJBQUk7SUFBQSxZQUFnQjtJQUFBLGlCQUFLO0lBQ3pCLDBFQUF3QjtJQUN4Qix5QkFBRztJQUFBLFlBQWM7SUFBQSxpQkFBSTtJQUNyQiwwRUFDRTtJQUVKLGlCQUFNOzs7OztJQVJKLHNEQUFrQztJQUU5QixlQUFnQjtJQUFoQixvQ0FBZ0I7SUFDaEIsZUFBbUI7SUFBbkIsc0NBQW1CO0lBQ3BCLGVBQWM7SUFBZCxtQ0FBYztJQUNiLGVBQXlDO0lBQXpDLGdFQUF5Qzs7OztJQVU3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QjdDLGVBQTZDO1FBQTdDLHFDQUE2QztRQWtCM0MsZUFBOEM7UUFBOUMscUNBQThDOztrRERqRi9DLG1CQUFtQjtjQUwvQixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLFdBQVcsRUFBRSw2QkFBNkI7Z0JBQzFDLFNBQVMsRUFBRSxDQUFDLDZCQUE2QixDQUFDO2FBQzNDOztrQkFnREUsU0FBUzttQkFBQyxRQUFROztrQkFDbEIsU0FBUzttQkFBQyxXQUFXOztrQkFDckIsU0FBUzttQkFBQyxpQkFBaUI7O2tCQUMzQixTQUFTO21CQUFDLFlBQVk7O2tCQUN0QixTQUFTO21CQUFDLFFBQVE7O2tCQUNsQixTQUFTO21CQUFDLE9BQU87O2tCQUNqQixZQUFZO21CQUFDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIE9uSW5pdCxcbiAgUXVlcnlMaXN0LFxuICBSZW5kZXJlcjIsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0NoaWxkcmVuLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRmxpcCB9IGZyb20gJ251bWJlci1mbGlwJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndnJtLXNsaWRlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9jb21wb25lbnRzLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY29tcG9uZW50cy5jb21wb25lbnQuc2NzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBDb21wb25lbnRzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcbiAgcHVibGljIGNvbnRlbnQgPSBbXG4gICAge1xuICAgICAgdGl0bGU6ICdEZXNpZ24sIFRpZXJzdHVkaWVuJyxcbiAgICAgIHZhbHVlOiAxNTIsXG4gICAgICB0ZXh0OiAnRsO8ciBkaWUgRVUgYmVpIGRlciBFdXJvcGVhbiBNZWRpY2luZXMgQWdlbmN5IChFTUEpJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyMwRjYyOTInLFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6ICdFcnByb2J1bmcgaW4gdmVyZ2xlaWNoZW5kZW4gU3R1ZGllbiBtaXQgRnJlaXdpbGxpZ2VuJyxcbiAgICAgIGhlYWRlcjogJ1BoYXNlIEknLFxuICAgICAgdmFsdWU6IDE2LFxuICAgICAgbGlzdDogWydjYS4gMTAtMzAgRnJlaXdpbGxpZ2UnLCAnWnVyIHByw7xmZW46IFZlcnRyw6RnbGljaGtlaXQnXSxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyMxNjgyQzMnLFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6ICdFcnByb2J1bmcgaW4gdmVyZ2xlaWNoZW5kZW4gU3R1ZGllbiBtaXQgRnJlaXdpbGxpZ2VuJyxcbiAgICAgIGhlYWRlcjogJ1BoYXNlIElJJyxcbiAgICAgIHZhbHVlOiAxMCxcbiAgICAgIGxpc3Q6IFtcbiAgICAgICAgJ2NhLiA1MC01MDAgRnJlaXdpbGxpZ2UnLFxuICAgICAgICAnWnVyIHByw7xmZW46IERvc2llcnVuZywgSW1tdW5hbnR3b3J0IHZvciBBbnN0ZWNrdW5nJyxcbiAgICAgIF0sXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMTY4MkMzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiAnRXJwcm9idW5nIGluIHZlcmdsZWljaGVuZGVuIFN0dWRpZW4gbWl0IEZyZWl3aWxsaWdlbicsXG4gICAgICBoZWFkZXI6ICdQaGFzZSBJSUknLFxuICAgICAgdmFsdWU6IDYsXG4gICAgICBsaXN0OiBbXG4gICAgICAgICdjYS4gMS4wMDAtNjAuMDAwIEZyZWl3aWxsaWdlJyxcbiAgICAgICAgJ1p1ciBwcsO8ZmVuOiBadXZlcmzDpHNzaWdrZWl0IGRlcyBTY2h1dHplcycsXG4gICAgICBdLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzE2ODJDMycsXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogJ1p1bGFzc3VuZ3N2ZXJmYWhyZW4nLFxuICAgICAgdmFsdWU6IDAsXG4gICAgICB0ZXh0OiAnRsO8ciBkaWUgRVUgYmVpIGRlciBFdXJvcGVhbiBNZWRpY2luZXMgQWdlbmN5IChFTUEpJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyM0OEJGRkInLFxuICAgIH0sXG4gIF07XG5cbiAgcHVibGljIGFjdGl2ZUlkeCA9IDA7XG4gIHB1YmxpYyBsYXN0SWR4ID0gMDtcbiAgcHJpdmF0ZSBmbGlwcGVyO1xuXG4gIEBWaWV3Q2hpbGQoJ3JpbmdCZycpIHJpbmdCZzogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgncGxhbmVXcmFwJykgcGxhbmVXcmFwOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdyZWNydWl0bWVudFRleHQnKSByZWNydWl0bWVudFRleHQ6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ2NlbnRlcldpcGUnKSBjZW50ZXJXaXBlOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdudW1iZXInKSBudW1iZXI6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ2Fycm93JykgYXJyb3c6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGRyZW4oJ3N0ZXBzJykgc3RlcHM6IFF1ZXJ5TGlzdDxFbGVtZW50UmVmPjtcbiAgdGl0bGUgPSAndnJtJztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7fVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmZsaXBwZXIgPSBuZXcgRmxpcCh7XG4gICAgICBub2RlOiB0aGlzLm51bWJlci5uYXRpdmVFbGVtZW50LFxuICAgICAgZnJvbTogdGhpcy5jb250ZW50WzBdLnZhbHVlLFxuICAgICAgZGVsYXk6IDEsIC8vIHNlY29uZFxuICAgIH0pO1xuICAgIHRoaXMuc2V0QWN0aXZlKDApO1xuICB9XG5cbiAgc2V0QWN0aXZlKGlkeCkge1xuICAgIHRoaXMubGFzdElkeCA9IHRoaXMuYWN0aXZlSWR4O1xuICAgIHRoaXMuYWN0aXZlSWR4ID0gaWR4O1xuXG4gICAgY29uc3Qgcm90YXRpb24gPSAoMzYwIC8gdGhpcy5jb250ZW50Lmxlbmd0aCkgKiB0aGlzLmFjdGl2ZUlkeDtcblxuICAgIGxldCBkaWZmZXJlbmNlID0gdGhpcy5sYXN0SWR4IC0gdGhpcy5hY3RpdmVJZHg7XG5cbiAgICBpZiAoZGlmZmVyZW5jZSA8IDApIHtcbiAgICAgIGRpZmZlcmVuY2UgPSBkaWZmZXJlbmNlICogLTE7XG4gICAgfVxuXG4gICAgY29uc3QgYW5pbWF0aW9uRHVyYXRpb24gPSAxMDAwICsgMzAwICogZGlmZmVyZW5jZTtcbiAgICBjb25zdCBwbGFuZSA9IHRoaXMucGxhbmVXcmFwLm5hdGl2ZUVsZW1lbnQ7XG4gICAgY29uc3QgcGF0aCA9IHRoaXMucmluZ0JnLm5hdGl2ZUVsZW1lbnQ7XG4gICAgY29uc3QgbGVuZ3RoID0gcGF0aC5nZXRUb3RhbExlbmd0aCgpO1xuXG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShcbiAgICAgIHBsYW5lLFxuICAgICAgJ3RyYW5zaXRpb24nLFxuICAgICAgYW5pbWF0aW9uRHVyYXRpb24gKyAnbXMgYWxsIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKSdcbiAgICApO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoXG4gICAgICBwbGFuZSxcbiAgICAgICd0cmFuc2Zvcm0nLFxuICAgICAgJ3RyYW5zbGF0ZVkoLTUwJSkgcm90YXRlKCcgKyByb3RhdGlvbiArICdkZWcpJ1xuICAgICk7XG5cbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKFxuICAgICAgcGF0aCxcbiAgICAgICd0cmFuc2l0aW9uJyxcbiAgICAgIGFuaW1hdGlvbkR1cmF0aW9uICsgJ21zIGFsbCBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSknXG4gICAgKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHBhdGgsICdzdHJva2UtZGFzaGFycmF5JywgbGVuZ3RoKTtcblxuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoXG4gICAgICBwYXRoLFxuICAgICAgJ3N0cm9rZS1kYXNob2Zmc2V0JyxcbiAgICAgIGxlbmd0aCAtIChsZW5ndGggLyB0aGlzLmNvbnRlbnQubGVuZ3RoKSAqIHRoaXMuYWN0aXZlSWR4XG4gICAgKTtcblxuICAgIHRoaXMuZmxpcHBlci5mbGlwVG8oeyB0bzogdGhpcy5jb250ZW50W3RoaXMuYWN0aXZlSWR4XS52YWx1ZSB9KTtcblxuICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuc3RlcHMudG9BcnJheSgpW3RoaXMuYWN0aXZlSWR4XS5uYXRpdmVFbGVtZW50XG4gICAgICAuc2Nyb2xsSGVpZ2h0O1xuXG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShcbiAgICAgIHRoaXMucmVjcnVpdG1lbnRUZXh0Lm5hdGl2ZUVsZW1lbnQsXG4gICAgICAnaGVpZ2h0JyxcbiAgICAgIGhlaWdodCArICdweCdcbiAgICApO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoXG4gICAgICB0aGlzLnJlY3J1aXRtZW50VGV4dC5uYXRpdmVFbGVtZW50LFxuICAgICAgJ2JhY2tncm91bmQtY29sb3InLFxuICAgICAgdGhpcy5jb250ZW50W3RoaXMuYWN0aXZlSWR4XS5iYWNrZ3JvdW5kQ29sb3JcbiAgICApO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoXG4gICAgICB0aGlzLmFycm93Lm5hdGl2ZUVsZW1lbnQsXG4gICAgICAnZmlsbCcsXG4gICAgICB0aGlzLmNvbnRlbnRbdGhpcy5hY3RpdmVJZHhdLmJhY2tncm91bmRDb2xvclxuICAgICk7XG4gIH1cbn1cbiIsIjxzZWN0aW9uIGNsYXNzPVwicmVjcnVpdG1lbnQtcHJvY2Vzc1wiPlxuICAgIDxkaXYgY2xhc3M9XCJncmlkXCI+PC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImdyaWRcIj5cbiAgXG4gICAgICA8ZGl2IGNsYXNzPVwicmVjcnVpdG1lbnQtd3JhcFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicGxhbmVcIj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAjcGxhbmVXcmFwXG4gICAgICAgICAgICBbY2xhc3MucmV2ZXJzZV09XCJsYXN0SWR4ID4gYWN0aXZlSWR4XCJcbiAgICAgICAgICAgIGNsYXNzPVwicGxhbmUtd3JhcFwiPlxuICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgIFxuICAgICAgICAgICAgICBpZD1cImFycm93XCJcbiAgICAgICAgICAgICAgd2lkdGg9XCI2MFwiXG4gICAgICAgICAgICAgIGhlaWdodD1cIjYwXCJcbiAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCA2MCA2MFwiXG4gICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgICAgICAgICA8cGF0aCAgI2Fycm93IGQ9XCJNLTIuNjIyNjhlLTA2IDYwTDYwIDMwTDAgLTIuNjIyNjhlLTA2TDcgMzBMLTIuNjIyNjhlLTA2IDYwWlwiPjwvcGF0aD5cbiAgICAgICAgICAgIDwvc3ZnPlxuICBcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gIFxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2VudGVyXCI+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgI2NlbnRlcldpcGVcbiAgICAgICAgICAgIGNsYXNzPVwiY2VudGVyLXdpcGVcIj48L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VudGVyLWltZ3NcIj5cbiAgICAgICAgICAgIDwhLS0gKm5nRm9yPVwibGV0IGl0ZW0gb2YgY29udGVudDsgbGV0IGlkeCA9IGluZGV4XCIgLS0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VudGVyLWltZ1wiPlxuICAgICAgICAgICAgICA8ZGl2ICNudW1iZXI+PC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoaW50XCI+QW56YWhsIFN0dWRpZW48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJpbmdcIj5cbiAgICAgICAgICA8c3ZnPlxuICAgICAgICAgICAgPGNpcmNsZVxuICAgICAgICAgICAgICAjcmluZ0JnXG4gICAgICAgICAgICAgIGNsYXNzPVwicmluZy1iZyBhbmltYXRlXCJcbiAgICAgICAgICAgICAgY3g9XCI1MCVcIlxuICAgICAgICAgICAgICBjeT1cIjUwJVwiXG4gICAgICAgICAgICAgIHI9XCIyMDBcIj48L2NpcmNsZT5cbiAgICAgICAgICAgIDxjaXJjbGVcbiAgICAgICAgICAgICAgY2xhc3M9XCJkYXNoXCJcbiAgICAgICAgICAgICAgY3g9XCI1MCVcIlxuICAgICAgICAgICAgICBjeT1cIjUwJVwiXG4gICAgICAgICAgICAgIHI9XCIyMDBcIj48L2NpcmNsZT5cbiAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJwb2ludC13cmFwXCI+XG4gICAgICAgICAgPCEtLSB0cmFuc2Zvcm06IHJvdGF0ZSgjeygtMzYwIC8gNSkgKiAkaX1kZWcpLCAtLT5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzcz1cInBvaW50XCJcbiAgICAgICAgICAgIChjbGljayk9XCJzZXRBY3RpdmUoaWR4KVwiXG4gICAgICAgICAgICBbY2xhc3MuYWN0aXZlXT1cImlkeCA9PT0gYWN0aXZlSWR4XCJcbiAgICAgICAgICAgIFtzdHlsZS50cmFuc2Zvcm1dPVwiJ3RyYW5zbGF0ZVkoLTUwJSkgcm90YXRlKCcgKygoMzYwIC8gNSkgKiAoaWR4KSkgKyAnZGVnKSdcIlxuICAgICAgICAgICAgKm5nRm9yPVwibGV0IGl0ZW0gb2YgY29udGVudDsgbGV0IGlkeCA9IGluZGV4XCI+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzPVwicG9pbnQtaW5uZXJcIlxuICAgICAgICAgICAgICBbc3R5bGUudHJhbnNmb3JtXT1cIicgcm90YXRlKCcrICgoLTM2MCAvIDUpICogaWR4KSArJ2RlZyknXCJcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvaW50LXRyYW5zZm9ybVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuPnt7IGlkeCArIDEgfX08L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gIFxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICBcbiAgICAgIDxkaXZcbiAgICAgICAgI3JlY3J1aXRtZW50VGV4dFxuICAgICAgICBjbGFzcz1cInJlY3J1aXRtZW50LXRleHRcIiA+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyZWNydWl0bWVudC1jb3B5XCI+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3M9XCJzdGVwXCJcbiAgICAgICAgICAgICNzdGVwc1xuICAgICAgICAgICAgW2NsYXNzLmFjdGl2ZV09XCJpZHggPT09IGFjdGl2ZUlkeFwiXG4gICAgICAgICAgICAqbmdGb3I9XCJsZXQgaXRlbSBvZiBjb250ZW50OyBsZXQgaWR4ID0gaW5kZXhcIj5cbiAgICAgICAgICAgIDxoMz57eyBpdGVtLnRpdGxlIH19PC9oMz5cbiAgICAgICAgICAgIDxoNCAqbmdJZj1cIml0ZW0uaGVhZGVyXCI+e3sgaXRlbS5oZWFkZXIgfX08L2g0PlxuICAgICAgICAgICAgPHA+e3sgaXRlbS50ZXh0fX08L3A+XG4gICAgICAgICAgICA8dWwgKm5nSWY9XCJpdGVtLmxpc3QgJiYgaXRlbS5saXN0Lmxlbmd0aCA+IDBcIj5cbiAgICAgICAgICAgICAgPGxpICpuZ0Zvcj1cImxldCBlbnRyeSBvZiBpdGVtLmxpc3RcIj57eyBlbnRyeSB9fTwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJlY3J1aXRtZW50LWNvbnRyb2xzXCI+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3M9XCJhcnJvdyBwcmV2XCJcbiAgICAgICAgICAgIChjbGljayk9XCJhY3RpdmVJZHggPT09IDAgPyBzZXRBY3RpdmUoY29udGVudC5sZW5ndGggLSAxKSA6c2V0QWN0aXZlKGFjdGl2ZUlkeCAtMSlcIj48L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZG90c1wiPlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjbGFzcz1cImRvdFwiXG4gICAgICAgICAgICAgIChjbGljayk9XCJzZXRBY3RpdmUoaWR4KVwiXG4gICAgICAgICAgICAgIFtjbGFzcy5hY3RpdmVdPVwiaWR4ID09PSBhY3RpdmVJZHhcIlxuICAgICAgICAgICAgICAqbmdGb3I9XCJsZXQgaXRlbSBvZiBjb250ZW50OyBsZXQgaWR4ICA9IGluZGV4XCI+PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3M9XCJhcnJvdyBuZXh0XCJcbiAgICAgICAgICAgIChjbGljayk9XCJhY3RpdmVJZHggKyAxID4gY29udGVudC5sZW5ndGggLSAxID8gc2V0QWN0aXZlKDApIDogc2V0QWN0aXZlKGFjdGl2ZUlkeCsxKVwiPjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L3NlY3Rpb24+XG4gICJdfQ==