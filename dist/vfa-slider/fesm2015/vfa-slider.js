import { __decorate } from 'tslib';
import { ɵɵdefineInjectable, Injectable, Renderer2, ChangeDetectorRef, Input, ViewChild, ViewChildren, Component, NgModule } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import Tick from '@pqina/flip';
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

let VfaSliderComponent = class VfaSliderComponent {
    constructor(renderer, cdr, sanitize) {
        this.renderer = renderer;
        this.cdr = cdr;
        this.sanitize = sanitize;
        this.content = [
            {
                title: 'Design, Tierstudien',
                value: 152,
                text: 'Was vom Virus und welche Zusatzstoffe sollen enthalten sein? Erprobung auf Verträglichkeit und Wirksamkeit.',
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
                text: 'Bei der European Merdicines Agency (EMA) mit Sitz in Amsterdam für Deutschland und alle weiteren EU-Staaten.',
                backgroundColor: '#48BFFB',
            },
        ];
        this.activeIdx = 0;
        this.lastIdx = 0;
        this.title = 'vrm';
    }
    ngOnInit() { }
    ngOnChanges(changes) {
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
            if (changes.values && !changes.values.isFirstChange()) {
                this.setActive(this.activeIdx);
            }
        }
    }
    ngAfterViewInit() {
        this.flipper = Tick.DOM.create(this.number.nativeElement, {
            value: this.content[0].value,
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
        const length = path.getBoundingClientRect().height > 0 && path.getTotalLength ? path.getTotalLength() : 0;
        if (plane) {
            this.renderer.setStyle(plane, 'transition', animationDuration + 'ms all cubic-bezier(0.645, 0.045, 0.355, 1)');
            this.renderer.setStyle(plane, 'transform', 'translateY(-50%) rotate(' + rotation + 'deg)');
        }
        if (path) {
            this.renderer.setStyle(path, 'transition', animationDuration + 'ms all cubic-bezier(0.645, 0.045, 0.355, 1)');
            this.renderer.setStyle(path, 'stroke-dasharray', length);
            console.log(length - (length / this.content.length) * this.activeIdx, length);
            this.renderer.setStyle(path, 'stroke-dashoffset', length - (length / this.content.length) * this.activeIdx);
        }
        this.flipper.value = this.content[this.activeIdx].value;
        // const height = this.steps.toArray()[this.activeIdx].nativeElement
        //   .scrollHeight;
        // this.renderer.setStyle(
        //   this.recruitmentText.nativeElement,
        //   'height',
        //   height + 'px'
        // );
        // this.renderer.setStyle(
        //   this.recruitmentText.nativeElement,
        //   'background-color',
        //   this.content[this.activeIdx].backgroundColor
        // );
        this.renderer.setStyle(this.section.nativeElement, 'background-color', this.content[this.activeIdx].backgroundColor);
        this.cdr.detectChanges();
    }
    transform(idx) {
        return this.sanitize.bypassSecurityTrustStyle('translateY(-50%) rotate(' + (360 / this.content.length) * idx + 'deg)');
    }
};
VfaSliderComponent.ctorParameters = () => [
    { type: Renderer2 },
    { type: ChangeDetectorRef },
    { type: DomSanitizer }
];
__decorate([
    Input()
], VfaSliderComponent.prototype, "values", void 0);
__decorate([
    ViewChild('section')
], VfaSliderComponent.prototype, "section", void 0);
__decorate([
    ViewChild('ringBg')
], VfaSliderComponent.prototype, "ringBg", void 0);
__decorate([
    ViewChild('planeWrap')
], VfaSliderComponent.prototype, "planeWrap", void 0);
__decorate([
    ViewChild('recruitmentText')
], VfaSliderComponent.prototype, "recruitmentText", void 0);
__decorate([
    ViewChild('number')
], VfaSliderComponent.prototype, "number", void 0);
__decorate([
    ViewChild('arrow')
], VfaSliderComponent.prototype, "arrow", void 0);
__decorate([
    ViewChildren('steps')
], VfaSliderComponent.prototype, "steps", void 0);
VfaSliderComponent = __decorate([
    Component({
        selector: 'vfa-slider',
        template: "<section\n  class=\"recruitment-process\"\n  #section>\n  <div class=\"grid\">\n\n    <div class=\"recruitment-wrap\">\n      <div class=\"plane\">\n        <div\n          #planeWrap\n          class=\"plane-wrap\">\n          <svg\n            id=\"arrow\"\n            width=\"40\"\n            height=\"40\"\n            viewBox=\"0 0 60 60\"\n            fill=\"none\"\n            xmlns=\"http://www.w3.org/2000/svg\">\n            <path\n              #arrow\n              d=\"M-2.62268e-06 60L60 30L0 -2.62268e-06L7 30L-2.62268e-06 60Z\"></path>\n          </svg>\n\n        </div>\n      </div>\n\n      <div class=\"center\">\n        <div class=\"center-imgs\">\n          <!-- *ngFor=\"let item of content; let idx = index\" -->\n          <div class=\"center-img\">\n            <div #number >\n              <div data-repeat=\"true\" data-transform=\"arrive(4, 0.01, false, false) -> round ->  pad('000') -> split -> delay(rtl, 10, 20)\">\n                <span data-view=\"flip\"></span>\n              </div>\n              \n                \n           \n            </div>\n            <div class=\"hint\">Studien</div>\n          </div>\n        </div>\n      </div>\n      <div class=\"ring\">\n        <svg>\n          <circle\n            #ringBg\n            class=\"ring-bg animate\"\n            style=\"stroke-dashoffset:1256px; stroke-dasharray: 1256px;\"\n            cx=\"50%\"\n            cy=\"50%\"\n            r=\"200\"></circle>\n          <circle\n            class=\"dash\"\n            cx=\"50%\"\n            cy=\"50%\"\n            r=\"200\"></circle>\n        </svg>\n      </div>\n      <div class=\"point-wrap\">\n        <!-- transform: rotate(#{(-360 / 5) * $i}deg), -->\n        <div\n          class=\"point\"\n          (click)=\"setActive(idx)\"\n          [class.active]=\"idx === activeIdx\"\n          *ngFor=\"let item of content; let idx = index\"\n          [style.transform]=\"transform(idx)\">\n          <div\n            class=\"point-inner\"\n            [style.transform]=\"'rotate('+ ((-360 / content.length) * idx) +'deg)'\">\n            <div class=\"point-transform\">\n              <span>{{ idx + 1 }}</span>\n            </div>\n          </div>\n        </div>\n\n      </div>\n    </div>\n\n    <div\n      #recruitmentText\n      class=\"recruitment-text\">\n      <div class=\"recruitment-copy\">\n        <div\n          class=\"step\"\n          #steps\n          [class.next]=\"idx > activeIdx\"\n          [class.active]=\"idx === activeIdx\"\n          *ngFor=\"let item of content; let idx = index\">\n          <h3>{{ item.title }}</h3>\n          <h4 *ngIf=\"item.header\">{{ item.header }}</h4>\n          <p>{{ item.text}}</p>\n          <ul *ngIf=\"item.list && item.list.length > 0\">\n            <li *ngFor=\"let entry of item.list\">{{ entry }}</li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"recruitment-controls\">\n        <div\n          class=\"arrow prev\"\n          (click)=\"activeIdx === 0 ? setActive(content.length - 1) :setActive(activeIdx -1)\"></div>\n        <div class=\"dots\">\n          <div\n            class=\"dot\"\n            (click)=\"setActive(idx)\"\n            [class.active]=\"idx === activeIdx\"\n            *ngFor=\"let item of content; let idx  = index\"></div>\n        </div>\n        <div\n          class=\"arrow next\"\n          (click)=\"activeIdx + 1 > content.length - 1 ? setActive(0) : setActive(activeIdx+1)\"></div>\n      </div>\n    </div>\n    <div class=\"footer\">\n      <img src=\"assets/images/VFA_CO.png\" />\n    </div>\n  </div>\n</section>\n",
        styles: ["@import url(https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap);:host{display:block;width:100%;height:100%}:host *{box-sizing:border-box;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}:host section{width:100%;position:relative;font-family:\"Open Sans\",sans-serif}:host .recruitment-process{width:100%;position:relative;padding:50px 0;transition:.5s;height:100%;display:flex;justify-content:center;align-items:center}:host .recruitment-process .grid{width:980px;position:relative;margin:0 auto}:host .recruitment-process .grid .grid-left{position:relative;width:400px;float:left}@media only screen and (max-width:1260px){:host .recruitment-process .grid{padding:0 30px;width:100%}}@media only screen and (max-width:578px){:host .recruitment-process .grid{padding:0 25px}}:host .recruitment-text{width:calc(100% - 500px);position:relative;float:right;border-radius:10px;overflow:hidden;transition:.5s;color:#fff}:host .recruitment-text .recruitment-copy{width:100%;position:relative;height:340px}:host .recruitment-text .recruitment-copy .step{width:100%;position:absolute;top:0;left:0;padding:60px 70px 120px}:host .recruitment-text .recruitment-copy .step>*{visibility:hidden;opacity:0;transform:translateX(-50px);transition:1s}:host .recruitment-text .recruitment-copy .step>:nth-child(2){transition-delay:.1s}:host .recruitment-text .recruitment-copy .step.active>*{visibility:visible;opacity:1;transform:translateX(0)}:host .recruitment-text .recruitment-copy .step.next>*{visibility:hidden;opacity:0;transform:translateX(50px)}:host .recruitment-text .recruitment-copy .step h3,:host .recruitment-text .recruitment-copy .step p{margin:0}:host .recruitment-text .recruitment-copy .step h3{font-weight:500;font-size:24px;margin-bottom:20px}:host .recruitment-text .recruitment-copy .step p,:host .recruitment-text .recruitment-copy .step ul{font-size:16px;line-height:24px}@media only screen and (max-width:768px){:host .recruitment-text .recruitment-copy{height:250px}}:host .recruitment-text .recruitment-controls{width:100%;height:80px;position:absolute;bottom:0;left:0;display:flex;align-items:center;justify-content:center;border-radius:0 0 10px 10px}:host .recruitment-text .recruitment-controls .arrow{display:none;width:16px;height:16px;border-top:3px solid #fff;border-left:3px solid #fff;transform:rotate(-45deg);transition:.3s;cursor:pointer}:host .recruitment-text .recruitment-controls .arrow:hover{border-color:#737373}:host .recruitment-text .recruitment-controls .arrow.next{transform:rotate(135deg)}:host .recruitment-text .recruitment-controls .dots{margin:0 10px;position:relative}:host .recruitment-text .recruitment-controls .dots .dot{width:16px;height:16px;background-color:#e6e6e6;border-radius:50%;position:relative;float:left;margin:0 5px;transition:.3s;cursor:pointer;opacity:.5}:host .recruitment-text .recruitment-controls .dots .dot:hover{opacity:1}:host .recruitment-text .recruitment-controls .dots .dot.active{background-color:#fff;opacity:1;transform:scale(1.2)}@media only screen and (max-width:1260px){:host .recruitment-text .recruitment-copy .step{padding:40px 40px 100px}:host .recruitment-text .recruitment-controls{height:70px}:host .recruitment-wrap{margin-left:20px}}@media only screen and (max-width:1000px){:host .recruitment-text{width:calc(100% - 375px)}:host .recruitment-text .recruitment-copy .step{padding:30px 30px 70px}:host .recruitment-text .recruitment-copy .step h3{font-size:22px;margin-bottom:16px}:host .recruitment-text .recruitment-copy .step p{font-size:14px}:host .recruitment-text .recruitment-controls{height:50px}}@media only screen and (max-width:768px){:host .recruitment-text{width:100%;display:flex;flex-direction:column-reverse}:host .recruitment-text .recruitment-controls{position:relative}}:host .recruitment-wrap{width:400px;height:400px;position:relative;float:left;margin-bottom:50px}:host .recruitment-wrap .plane{position:absolute;width:100%;height:100%;display:flex;justify-content:center;z-index:5;pointer-events:none}:host .recruitment-wrap .plane .plane-wrap{height:60px;display:inline-block;transform-origin:50% 230px;transform:translateY(-50%) rotate(0);transition:1s cubic-bezier(.645,.045,.355,1)}:host .recruitment-wrap .plane .plane-wrap.reverse img,:host .recruitment-wrap .plane .plane-wrap.reverse svg{transform:scaleX(-1)}:host .recruitment-wrap .plane .plane-wrap.shadow img,:host .recruitment-wrap .plane .plane-wrap.shadow svg{filter:drop-shadow(0 -15px 0 rgba(0, 0, 0, .1))}:host .recruitment-wrap .plane .plane-wrap img,:host .recruitment-wrap .plane .plane-wrap svg{position:relative;top:0;height:60px;transition:.5s cubic-bezier(.645,.045,.355,1);filter:drop-shadow(0 15px 0 rgba(0, 0, 0, .1))}:host .recruitment-wrap .plane .plane-wrap svg path{fill:#fff;transition:fill 1s cubic-bezier(.645,.045,.355,1)}:host .recruitment-wrap .center{position:absolute;height:60%;width:60%;z-index:2;overflow:hidden;display:flex;align-items:center;justify-content:center;left:50%;top:50%;transform:translate(-50%,-50%)}:host .recruitment-wrap .center:before{content:\"\";width:102%;height:102%;position:absolute;border-radius:50%;z-index:10}:host .recruitment-wrap .center .center-imgs{width:100%;height:100%;position:absolute;display:flex;align-items:center;justify-content:center;z-index:1}:host .recruitment-wrap .center .center-imgs .center-img{width:110%;height:110%;position:absolute;z-index:1;display:flex;justify-content:center;align-items:center;font-size:3em;color:#fff;flex-direction:column}:host .recruitment-wrap .center .center-imgs .center-img .hint{font-size:17px;margin-top:20px;font-weight:600}:host .recruitment-wrap .center .center-imgs .center-img.active{z-index:2}:host .recruitment-wrap .center .center-imgs .center-img.active:after{transition:10s cubic-bezier(.23,1,.32,1);transform:scale(1)}:host .recruitment-wrap .center .center-imgs .center-img:after{content:\"\";position:absolute;width:100%;height:100%;background-size:cover;background-position:center;transition:none;transform:scale(.9)}:host .recruitment-wrap .center .center-wipe{width:100%;height:100%;position:absolute;z-index:2;background-size:auto 100%;background-position:0 0}:host .recruitment-wrap .ring{position:absolute;width:100%;height:100%;z-index:1;border-radius:50%;display:flex;justify-content:center;align-items:center;transform:rotate(-90deg)}:host .recruitment-wrap .ring svg{width:100%;height:100%;position:absolute;z-index:1;top:0;left:0;overflow:visible}:host .recruitment-wrap .ring svg circle{width:100%;height:100%;stroke-width:3;fill:none;stroke:#fff}:host .recruitment-wrap .ring svg circle.animate{transition:1s cubic-bezier(.645,.045,.355,1)}:host .recruitment-wrap .ring svg circle.dash{opacity:.2;stroke-dasharray:10,10}:host .recruitment-wrap .point-wrap{position:absolute;width:100%;height:100%;display:flex;justify-content:center;align-items:center;z-index:3}:host .recruitment-wrap .point-wrap .point{width:36px;height:36px;position:absolute;border-radius:50%;display:flex;justify-content:center;top:0;cursor:pointer;align-items:center;transform-origin:50% 218px}:host .recruitment-wrap .point-wrap .point .point-inner{width:100%;height:100%;position:relative}:host .recruitment-wrap .point-wrap .point .point-inner .point-transform{background-color:#fff;width:100%;height:100%;display:flex;justify-content:center;align-items:center;border-radius:50%;transition:.6s;box-shadow:0 5px 20px rgba(0,0,0,.3)}:host .recruitment-wrap .point-wrap .point .point-inner .point-transform span{position:relative;margin-top:1px;font-size:16px;display:block;transition:.6s;color:#192e4d}:host .recruitment-wrap .point-wrap .point:hover .point-transform{background-color:#333}:host .recruitment-wrap .point-wrap .point:hover .point-transform span{color:#fff}:host .recruitment-wrap .point-wrap .point.active .point-transform{transform:scale(.3);background-color:#333}:host .recruitment-wrap .point-wrap .point.active .point-transform span{color:#fff;opacity:0}@media only screen and (max-width:1000px){:host .recruitment-wrap{width:320px;height:320px}:host .recruitment-wrap circle{transform-origin:50% 50%;transform:scale(.8)}:host .recruitment-wrap .plane .plane-wrap{height:40px;transform-origin:50% 180px}:host .recruitment-wrap .plane .plane-wrap img,:host .recruitment-wrap .plane .plane-wrap svg{height:40px}:host .recruitment-wrap .point-wrap .point{width:40px;height:40px;transform-origin:50% 180px}}@media only screen and (max-width:768px){:host .recruitment-wrap{left:50%;margin:30px 0 0;transform:translateX(-50%);height:180px}:host .recruitment-wrap .plane,:host .recruitment-wrap .point-wrap,:host .recruitment-wrap circle{display:none}}:host ::ng-deep .tick{box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:default;position:relative;z-index:1;line-height:1.4}:host ::ng-deep .tick *{box-sizing:inherit}:host ::ng-deep .tick [data-view]{max-width:100%}:host ::ng-deep .tick span[data-view]{display:inline-block}:host ::ng-deep .tick [data-layout~=pad]{margin:-.25em}:host ::ng-deep .tick [data-layout~=pad]>*{margin:.25em}:host ::ng-deep .tick-flip{position:relative;text-align:center}:host ::ng-deep .tick-flip *{border-radius:inherit;white-space:pre;letter-spacing:inherit;text-indent:inherit}:host ::ng-deep .tick-flip-front{border-bottom-left-radius:0;border-bottom-right-radius:0}:host ::ng-deep .tick-flip-back{border-top-left-radius:0;border-top-right-radius:0}:host ::ng-deep .tick-flip-spacer{display:block;visibility:hidden}:host ::ng-deep .tick-flip-shadow{position:absolute;left:1px;right:1px;top:1px;bottom:1px;color:transparent!important;background:0 0!important}:host ::ng-deep .tick-flip-shadow-top{bottom:calc(50% - 1px)}:host ::ng-deep .tick-flip-shadow-bottom{top:calc(50% + 1px)}:host ::ng-deep .tick-flip-card-shadow{position:absolute;left:.15em;right:.15em;bottom:.125em;height:.5em;background-color:transparent;border-radius:0;opacity:0;transform-origin:0 100%;box-shadow:0 .125em .25em rgba(0,0,0,.5),0 .125em .5em rgba(0,0,0,.75);z-index:0}:host ::ng-deep .tick-flip-card{position:absolute;z-index:1;left:0;top:0;width:100%;height:100%;perspective:4em}:host ::ng-deep .tick-flip-panel-back,:host ::ng-deep .tick-flip-panel-front{position:absolute;left:0;width:100%;height:51%;-webkit-backface-visibility:hidden;backface-visibility:hidden;transform-style:preserve-3d}:host ::ng-deep .tick-flip-panel-back-text,:host ::ng-deep .tick-flip-panel-front-text{position:absolute;left:-1px;top:0;right:-1px;height:100%;overflow:hidden}:host ::ng-deep .tick-flip-panel-text-wrapper{position:absolute;left:0;top:0;right:0;height:100%}:host ::ng-deep .tick-flip-panel-back-text .tick-flip-panel-text-wrapper{height:200%;top:-100%}:host ::ng-deep .tick-flip-panel-front{transform-origin:center bottom;top:0;z-index:2;box-shadow:inset 0 1px rgba(255,255,255,.05)}:host ::ng-deep .tick-flip-panel-back{transform-origin:center top;top:50%;z-index:1;box-shadow:inset 0 -1px rgba(0,0,0,.1)}:host ::ng-deep .tick-flip-panel-back::after{content:\"\";z-index:1;content:\"\";position:absolute;left:0;top:0;width:100%;height:100%;background-image:linear-gradient(180deg,rgba(0,0,0,0) 1px,rgba(0,0,0,.15) 1px,transparent 30%)}:host ::ng-deep .tick-flip-panel-back-shadow{z-index:2}:host ::ng-deep .tick-flip-panel-back-highlight,:host ::ng-deep .tick-flip-panel-back-shadow{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}:host ::ng-deep .tick-flip-panel-back-highlight,:host ::ng-deep .tick-flip-panel-back-shadow,:host ::ng-deep .tick-flip-panel-front-shadow{position:absolute;left:0;top:0;right:0;bottom:0;opacity:0}:host ::ng-deep .tick-flip-panel-front-shadow{background-image:linear-gradient(to top,rgba(0,0,0,.8),rgba(0,0,0,.3))}:host ::ng-deep .tick-flip-panel-back-shadow{background-image:linear-gradient(to bottom,rgba(0,0,0,.7),rgba(0,0,0,.5))}:host ::ng-deep .tick-flip-panel-back-highlight{z-index:3;background-image:linear-gradient(to bottom,rgba(255,255,255,.15),rgba(255,255,255,.3))}:host ::ng-deep .tick [data-style*=\"shadow:inner\"],:host ::ng-deep .tick [data-style*=\"shadow:inner\"] .tick-flip-card-shadow{box-shadow:none}:host ::ng-deep .tick [data-style*=\"shadow:none\"] .tick-flip-card-shadow,:host ::ng-deep .tick [data-style*=\"shadow:none\"] .tick-flip-panel-back,:host ::ng-deep .tick [data-style*=\"shadow:none\"] .tick-flip-panel-front,:host ::ng-deep .tick [data-style*=\"shadow:none\"] .tick-flip-shadow{box-shadow:none}:host ::ng-deep .tick [data-style*=\"shadow:none\"] .tick-flip-back::after,:host ::ng-deep .tick [data-style*=\"shadow:none\"] .tick-flip-panel-back-shadow,:host ::ng-deep .tick [data-style*=\"shadow:none\"] .tick-flip-panel-back-text::after,:host ::ng-deep .tick [data-style*=\"shadow:none\"] .tick-flip-panel-front-shadow{background-image:none}:host ::ng-deep .tick [data-style*=\"rounded:none\"]{border-radius:0}:host ::ng-deep .tick [data-style*=\"rounded:panels\"] .tick-flip-front,:host ::ng-deep .tick [data-style*=\"rounded:panels\"] .tick-flip-shadow-bottom{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}:host ::ng-deep .tick [data-style*=\"rounded:panels\"] .tick-flip-back,:host ::ng-deep .tick [data-style*=\"rounded:panels\"] .tick-flip-panel-back::after,:host ::ng-deep .tick [data-style*=\"rounded:panels\"] .tick-flip-shadow-top{border-top-left-radius:inherit;border-top-right-radius:inherit}:host ::ng-deep .tick-flip{margin-left:.0625em;margin-right:.0625em;min-width:1.125em;border-radius:.125em;letter-spacing:.25em;text-indent:.25em}:host ::ng-deep .tick-flip-shadow{box-shadow:0 .125em .3125em rgba(0,0,0,.25),0 .02125em .06125em rgba(0,0,0,.25)}:host ::ng-deep .tick-flip-panel{color:#192e4d;background-color:#fff}"]
    })
], VfaSliderComponent);

let VfaSliderModule = class VfaSliderModule {
};
VfaSliderModule = __decorate([
    NgModule({
        declarations: [VfaSliderComponent],
        imports: [
            CommonModule
        ],
        exports: [VfaSliderComponent]
    })
], VfaSliderModule);

/*
 * Public API Surface of components
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ComponentsService, VfaSliderComponent, VfaSliderModule };
//# sourceMappingURL=vfa-slider.js.map
