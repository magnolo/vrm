import { __decorate } from 'tslib';
import { ɵɵdefineInjectable, Injectable, Renderer2, ChangeDetectorRef, Input, ViewChild, ViewChildren, Component, NgModule } from '@angular/core';
import { Flip } from 'number-flip';
import { CommonModule } from '@angular/common';

let ComponentsService = class ComponentsService {
    constructor() { }
};
ComponentsService.ɵprov = ɵɵdefineInjectable({ factory: function ComponentsService_Factory() { return new ComponentsService(); }, token: ComponentsService, providedIn: "root" });
ComponentsService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], ComponentsService);

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
        this.cdr.detectChanges();
    }
};
ComponentsComponent.ctorParameters = () => [
    { type: Renderer2 },
    { type: ChangeDetectorRef }
];
__decorate([
    Input()
], ComponentsComponent.prototype, "values", void 0);
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
ComponentsComponent = __decorate([
    Component({
        selector: 'vrm-slider',
        template: "<section class=\"recruitment-process\">\n    <div class=\"grid\"></div>\n    <div class=\"grid\">\n  \n      <div class=\"recruitment-wrap\">\n        <div class=\"plane\">\n          <div\n            #planeWrap\n            [class.reverse]=\"lastIdx > activeIdx\"\n            class=\"plane-wrap\">\n            <svg\n             \n              id=\"arrow\"\n              width=\"60\"\n              height=\"60\"\n              viewBox=\"0 0 60 60\"\n              fill=\"none\"\n              xmlns=\"http://www.w3.org/2000/svg\">\n              <path  #arrow d=\"M-2.62268e-06 60L60 30L0 -2.62268e-06L7 30L-2.62268e-06 60Z\"></path>\n            </svg>\n  \n          </div>\n        </div>\n  \n        <div class=\"center\">\n          <div\n            #centerWipe\n            class=\"center-wipe\"></div>\n          <div class=\"center-imgs\">\n            <!-- *ngFor=\"let item of content; let idx = index\" -->\n            <div class=\"center-img\">\n              <div #number></div>\n              <div class=\"hint\">Anzahl Studien</div>\n            </div>\n          </div>\n        </div>\n        <div class=\"ring\">\n          <svg>\n            <circle\n              #ringBg\n              class=\"ring-bg animate\"\n              cx=\"50%\"\n              cy=\"50%\"\n              r=\"200\"></circle>\n            <circle\n              class=\"dash\"\n              cx=\"50%\"\n              cy=\"50%\"\n              r=\"200\"></circle>\n          </svg>\n        </div>\n        <div class=\"point-wrap\">\n          <!-- transform: rotate(#{(-360 / 5) * $i}deg), -->\n          <div\n            class=\"point\"\n            (click)=\"setActive(idx)\"\n            [class.active]=\"idx === activeIdx\"\n            [style.transform]=\"'translateY(-50%) rotate(' +((360 / 5) * (idx)) + 'deg)'\"\n            *ngFor=\"let item of content; let idx = index\">\n            <div\n              class=\"point-inner\"\n              [style.transform]=\"' rotate('+ ((-360 / 5) * idx) +'deg)'\"\n              \n              >\n              <div class=\"point-transform\">\n                <span>{{ idx + 1 }}</span>\n              </div>\n            </div>\n          </div>\n  \n        </div>\n      </div>\n  \n      <div\n        #recruitmentText\n        class=\"recruitment-text\" >\n        <div class=\"recruitment-copy\">\n          <div\n            class=\"step\"\n            #steps\n            [class.active]=\"idx === activeIdx\"\n            *ngFor=\"let item of content; let idx = index\">\n            <h3>{{ item.title }}</h3>\n            <h4 *ngIf=\"item.header\">{{ item.header }}</h4>\n            <p>{{ item.text}}</p>\n            <ul *ngIf=\"item.list && item.list.length > 0\">\n              <li *ngFor=\"let entry of item.list\">{{ entry }}</li>\n            </ul>\n          </div>\n        </div>\n        <div class=\"recruitment-controls\">\n          <div\n            class=\"arrow prev\"\n            (click)=\"activeIdx === 0 ? setActive(content.length - 1) :setActive(activeIdx -1)\"></div>\n          <div class=\"dots\">\n            <div\n              class=\"dot\"\n              (click)=\"setActive(idx)\"\n              [class.active]=\"idx === activeIdx\"\n              *ngFor=\"let item of content; let idx  = index\"></div>\n          </div>\n          <div\n            class=\"arrow next\"\n            (click)=\"activeIdx + 1 > content.length - 1 ? setActive(0) : setActive(activeIdx+1)\"></div>\n        </div>\n      </div>\n    </div>\n  </section>\n  ",
        styles: ["@import url(https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap);:host{font-family:\"Open Sans\",sans-serif}:host *{box-sizing:border-box;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}:host::ng-deep .number-flip .digit{background:#3c78c7;margin:2px;padding:0 8px;border-radius:5px;position:relative}:host section{width:100%;position:relative}:host .recruitment-process{width:100%;position:relative;padding:50px 0;display:inline-block}:host .recruitment-process .grid{width:1200px;position:relative;margin:0 auto}:host .recruitment-process .grid .grid-left{position:relative;width:400px;float:left}@media only screen and (max-width:1260px){:host .recruitment-process .grid{padding:0 30px;width:100%}}@media only screen and (max-width:578px){:host .recruitment-process .grid{padding:0 25px}}:host .recruitment-text{width:calc(100% - 500px);position:relative;float:right;background-color:#3c78c7;border-radius:10px;overflow:hidden;box-shadow:0 25px 40px rgba(0,0,0,.3);transition:.5s;color:#fff}:host .recruitment-text .recruitment-copy{width:100%;position:relative}:host .recruitment-text .recruitment-copy .step{width:100%;position:absolute;top:0;left:0;padding:60px 70px 120px}:host .recruitment-text .recruitment-copy .step>*{visibility:hidden;opacity:0;transform:translateX(-50px);transition:1s}:host .recruitment-text .recruitment-copy .step>:nth-child(2){transition-delay:.1s}:host .recruitment-text .recruitment-copy .step.active>*{visibility:visible;opacity:1;transform:translateX(0)}:host .recruitment-text .recruitment-copy .step.next>*{visibility:hidden;opacity:0;transform:translateX(50px)}:host .recruitment-text .recruitment-copy .step h3,:host .recruitment-text .recruitment-copy .step p{margin:0}:host .recruitment-text .recruitment-copy .step h3{font-weight:500;font-size:24px;margin-bottom:20px}:host .recruitment-text .recruitment-copy .step p,:host .recruitment-text .recruitment-copy .step ul{font-size:16px;line-height:24px}:host .recruitment-text .recruitment-controls{width:100%;height:80px;background-color:#efefef;position:absolute;bottom:0;left:0;display:flex;align-items:center;justify-content:center;border-radius:0 0 10px 10px}:host .recruitment-text .recruitment-controls .arrow{width:16px;height:16px;border-top:3px solid #3c78c7;border-left:3px solid #3c78c7;transform:rotate(-45deg);transition:.3s;cursor:pointer}:host .recruitment-text .recruitment-controls .arrow:hover{border-color:#737373}:host .recruitment-text .recruitment-controls .arrow.next{transform:rotate(135deg)}:host .recruitment-text .recruitment-controls .dots{margin:0 10px;position:relative}:host .recruitment-text .recruitment-controls .dots .dot{width:16px;height:16px;background-color:#e6e6e6;border-radius:50%;position:relative;float:left;margin:0 5px;transition:.3s;cursor:pointer}:host .recruitment-text .recruitment-controls .dots .dot:hover{background-color:silver}:host .recruitment-text .recruitment-controls .dots .dot.active{background-color:#3c78c7}@media only screen and (max-width:1260px){:host .recruitment-text .recruitment-copy .step{padding:40px 40px 100px}:host .recruitment-text .recruitment-controls{height:70px}:host .recruitment-wrap{margin-left:20px}}@media only screen and (max-width:1000px){:host .recruitment-text{width:calc(100% - 375px)}:host .recruitment-text .recruitment-copy .step{padding:30px 30px 70px}:host .recruitment-text .recruitment-copy .step h3{font-size:22px;margin-bottom:16px}:host .recruitment-text .recruitment-copy .step p{font-size:14px}:host .recruitment-text .recruitment-controls{height:50px}}@media only screen and (max-width:768px){:host .recruitment-text{width:100%}}:host .recruitment-wrap{width:400px;height:400px;position:relative;float:left;margin-bottom:50px}:host .recruitment-wrap .plane{position:absolute;width:100%;height:100%;display:flex;justify-content:center;z-index:5;pointer-events:none}:host .recruitment-wrap .plane .plane-wrap{height:60px;display:inline-block;transform-origin:50% 230px;transform:translateY(-50%) rotate(0);transition:1s cubic-bezier(.645,.045,.355,1)}:host .recruitment-wrap .plane .plane-wrap.reverse img,:host .recruitment-wrap .plane .plane-wrap.reverse svg{transform:scaleX(-1)}:host .recruitment-wrap .plane .plane-wrap.shadow img,:host .recruitment-wrap .plane .plane-wrap.shadow svg{filter:drop-shadow(0 -15px 0 rgba(0, 0, 0, .1))}:host .recruitment-wrap .plane .plane-wrap img,:host .recruitment-wrap .plane .plane-wrap svg{position:relative;top:0;height:60px;transition:.5s cubic-bezier(.645,.045,.355,1);filter:drop-shadow(0 15px 0 rgba(0, 0, 0, .1))}:host .recruitment-wrap .plane .plane-wrap svg path{fill:#3c78c7;transition:fill 1s cubic-bezier(.645,.045,.355,1)}:host .recruitment-wrap .center{position:absolute;height:60%;width:60%;z-index:2;overflow:hidden;display:flex;align-items:center;justify-content:center;left:50%;top:50%;transform:translate(-50%,-50%)}:host .recruitment-wrap .center:before{content:\"\";width:102%;height:102%;position:absolute;border-radius:50%;z-index:10}:host .recruitment-wrap .center .center-imgs{width:100%;height:100%;position:absolute;display:flex;align-items:center;justify-content:center;z-index:1}:host .recruitment-wrap .center .center-imgs .center-img{width:110%;height:110%;position:absolute;z-index:1;display:flex;justify-content:center;align-items:center;font-size:5em;color:#fff;flex-direction:column}:host .recruitment-wrap .center .center-imgs .center-img .hint{font-size:17px;color:#3c78c7;margin-top:20px;font-weight:600}:host .recruitment-wrap .center .center-imgs .center-img.active{z-index:2}:host .recruitment-wrap .center .center-imgs .center-img.active:after{transition:10s cubic-bezier(.23,1,.32,1);transform:scale(1)}:host .recruitment-wrap .center .center-imgs .center-img:after{content:\"\";position:absolute;width:100%;height:100%;background-size:cover;background-position:center;transition:none;transform:scale(.9)}:host .recruitment-wrap .center .center-wipe{width:100%;height:100%;position:absolute;z-index:2;background-image:url(http://res.cloudinary.com/da32ibrgl/image/upload/v1517306495/sprite-v2_bsi2cx.png);background-size:auto 100%;background-position:0 0}:host .recruitment-wrap .ring{position:absolute;width:100%;height:100%;z-index:1;border-radius:50%;display:flex;justify-content:center;align-items:center;transform:rotate(-90deg)}:host .recruitment-wrap .ring svg{width:100%;height:100%;position:absolute;z-index:1;top:0;left:0;overflow:visible}:host .recruitment-wrap .ring svg circle{width:100%;height:100%;stroke-width:2;fill:none;stroke:#3c78c7}:host .recruitment-wrap .ring svg circle.animate{transition:1s cubic-bezier(.645,.045,.355,1)}:host .recruitment-wrap .ring svg circle.dash{opacity:.2;stroke-dasharray:10,10}:host .recruitment-wrap .point-wrap{position:absolute;width:100%;height:100%;display:flex;justify-content:center;align-items:center;z-index:3}:host .recruitment-wrap .point-wrap .point{width:30px;height:30px;position:absolute;border-radius:50%;display:flex;justify-content:center;top:0;cursor:pointer;align-items:center;transform-origin:50% 215px}:host .recruitment-wrap .point-wrap .point .point-inner{width:100%;height:100%;position:relative}:host .recruitment-wrap .point-wrap .point .point-inner .point-transform{background-color:#3c78c7;width:100%;height:100%;display:flex;justify-content:center;align-items:center;border-radius:50%;transition:.6s;box-shadow:0 5px 20px rgba(0,0,0,.3)}:host .recruitment-wrap .point-wrap .point .point-inner .point-transform span{position:relative;margin-top:1px;font-size:16px;display:block;transition:.6s;color:#fff}:host .recruitment-wrap .point-wrap .point:hover .point-transform{background-color:#333}:host .recruitment-wrap .point-wrap .point:hover .point-transform span{color:#fff}:host .recruitment-wrap .point-wrap .point.active .point-transform{transform:scale(.3);background-color:#333}:host .recruitment-wrap .point-wrap .point.active .point-transform span{color:#fff;opacity:0}@media only screen and (max-width:1000px){:host .recruitment-wrap{width:320px;height:320px}:host .recruitment-wrap circle{transform-origin:50% 50%;transform:scale(.8)}:host .recruitment-wrap .plane .plane-wrap{height:40px;transform-origin:50% 180px}:host .recruitment-wrap .plane .plane-wrap img,:host .recruitment-wrap .plane .plane-wrap svg{height:40px}:host .recruitment-wrap .point-wrap .point{width:40px;height:40px;transform-origin:50% 180px}}@media only screen and (max-width:768px){:host .recruitment-wrap{left:50%;margin:0 0 30px;transform:translateX(-50%)}}"]
    })
], ComponentsComponent);

let ComponentsModule = class ComponentsModule {
};
ComponentsModule = __decorate([
    NgModule({
        declarations: [ComponentsComponent],
        imports: [
            CommonModule
        ],
        exports: [ComponentsComponent]
    })
], ComponentsModule);

/*
 * Public API Surface of components
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ComponentsComponent, ComponentsModule, ComponentsService };
//# sourceMappingURL=components.js.map
