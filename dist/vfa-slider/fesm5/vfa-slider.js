import { __decorate } from 'tslib';
import { ɵɵdefineInjectable, Injectable, Renderer2, ChangeDetectorRef, Input, ViewChild, ViewChildren, Component, ViewEncapsulation, NgModule } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import Tick from '@pqina/flip';
import { CommonModule } from '@angular/common';

var ComponentsService = /** @class */ (function () {
    function ComponentsService() {
    }
    ComponentsService.ɵprov = ɵɵdefineInjectable({ factory: function ComponentsService_Factory() { return new ComponentsService(); }, token: ComponentsService, providedIn: "root" });
    ComponentsService = __decorate([
        Injectable({
            providedIn: 'root'
        })
    ], ComponentsService);
    return ComponentsService;
}());

var VfaSliderComponent = /** @class */ (function () {
    function VfaSliderComponent(renderer, cdr, sanitize) {
        this.renderer = renderer;
        this.cdr = cdr;
        this.sanitize = sanitize;
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
    VfaSliderComponent.prototype.ngOnInit = function () { };
    VfaSliderComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        console.log(changes);
        if (this.values) {
            var values = this.values;
            if (typeof values === 'string') {
                values = JSON.parse(values);
            }
            if (Array.isArray(values)) {
                values.forEach(function (value, idx) {
                    if (value != null && value !== undefined) {
                        _this.content[idx].value = value;
                    }
                });
            }
        }
    };
    VfaSliderComponent.prototype.ngAfterViewInit = function () {
        // this.flipper = new Flip({
        //   node: this.number.nativeElement,
        //   from: this.content[0].value,
        //   delay: 1, // second
        // });
        this.flipper = Tick.DOM.create(this.number.nativeElement, {
            value: this.content[0].value,
        });
        this.setActive(0);
    };
    VfaSliderComponent.prototype.setActive = function (idx) {
        this.lastIdx = this.activeIdx;
        this.activeIdx = idx;
        var rotation = (360 / this.content.length) * this.activeIdx;
        var difference = this.lastIdx - this.activeIdx;
        if (difference < 0) {
            difference = difference * -1;
        }
        var animationDuration = 1000 + 300 * difference;
        var plane = this.planeWrap.nativeElement;
        var path = this.ringBg.nativeElement;
        var length = path.getTotalLength();
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
    };
    VfaSliderComponent.prototype.transform = function (idx) {
        return this.sanitize.bypassSecurityTrustStyle('translateY(-50%) rotate(' + (360 / this.content.length) * idx + 'deg)');
    };
    VfaSliderComponent.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ChangeDetectorRef },
        { type: DomSanitizer }
    ]; };
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
        ViewChild('centerWipe')
    ], VfaSliderComponent.prototype, "centerWipe", void 0);
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
            template: "<section\n  class=\"recruitment-process\"\n  #section>\n  <div class=\"grid\"></div>\n  <div class=\"grid\">\n\n    <div class=\"recruitment-wrap\">\n      <div class=\"plane\">\n        <div\n          #planeWrap\n          class=\"plane-wrap\">\n          <svg\n            id=\"arrow\"\n            width=\"60\"\n            height=\"60\"\n            viewBox=\"0 0 60 60\"\n            fill=\"none\"\n            xmlns=\"http://www.w3.org/2000/svg\">\n            <path\n              #arrow\n              d=\"M-2.62268e-06 60L60 30L0 -2.62268e-06L7 30L-2.62268e-06 60Z\"></path>\n          </svg>\n\n        </div>\n      </div>\n\n      <div class=\"center\">\n        <div\n          #centerWipe\n          class=\"center-wipe\"></div>\n        <div class=\"center-imgs\">\n          <!-- *ngFor=\"let item of content; let idx = index\" -->\n          <div class=\"center-img\">\n            <div #number >\n              <div data-repeat=\"true\" data-transform=\"arrive(4, 0.01, false, false) -> round ->  pad('000') -> split -> delay(rtl, 10, 20)\">\n                <span data-view=\"flip\"></span>\n              </div>\n              \n                \n           \n            </div>\n            <div class=\"hint\">Anzahl Studien</div>\n          </div>\n        </div>\n      </div>\n      <div class=\"ring\">\n        <svg>\n          <circle\n            #ringBg\n            class=\"ring-bg animate\"\n            cx=\"50%\"\n            cy=\"50%\"\n            r=\"200\"></circle>\n          <circle\n            class=\"dash\"\n            cx=\"50%\"\n            cy=\"50%\"\n            r=\"200\"></circle>\n        </svg>\n      </div>\n      <div class=\"point-wrap\">\n        <!-- transform: rotate(#{(-360 / 5) * $i}deg), -->\n        <div\n          class=\"point\"\n          (click)=\"setActive(idx)\"\n          [class.active]=\"idx === activeIdx\"\n          *ngFor=\"let item of content; let idx = index\"\n          [style.transform]=\"transform(idx)\">\n          <div\n            class=\"point-inner\"\n            [style.transform]=\"'rotate('+ ((-360 / content.length) * idx) +'deg)'\">\n            <div class=\"point-transform\">\n              <span>{{ idx + 1 }}</span>\n            </div>\n          </div>\n        </div>\n\n      </div>\n    </div>\n\n    <div\n      #recruitmentText\n      class=\"recruitment-text\">\n      <div class=\"recruitment-copy\">\n        <div\n          class=\"step\"\n          #steps\n          [class.active]=\"idx === activeIdx\"\n          *ngFor=\"let item of content; let idx = index\">\n          <h3>{{ item.title }}</h3>\n          <h4 *ngIf=\"item.header\">{{ item.header }}</h4>\n          <p>{{ item.text}}</p>\n          <ul *ngIf=\"item.list && item.list.length > 0\">\n            <li *ngFor=\"let entry of item.list\">{{ entry }}</li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"recruitment-controls\">\n        <div\n          class=\"arrow prev\"\n          (click)=\"activeIdx === 0 ? setActive(content.length - 1) :setActive(activeIdx -1)\"></div>\n        <div class=\"dots\">\n          <div\n            class=\"dot\"\n            (click)=\"setActive(idx)\"\n            [class.active]=\"idx === activeIdx\"\n            *ngFor=\"let item of content; let idx  = index\"></div>\n        </div>\n        <div\n          class=\"arrow next\"\n          (click)=\"activeIdx + 1 > content.length - 1 ? setActive(0) : setActive(activeIdx+1)\"></div>\n      </div>\n    </div>\n  </div>\n</section>\n",
            encapsulation: ViewEncapsulation.None,
            styles: ["@import url(https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap);.tick-flip-panel{color:#192e4d;background-color:#fff}.tick-flip-panel-back::after{z-index:1;content:\"\";position:absolute;left:0;top:0;width:100%;height:100%;background-image:linear-gradient(180deg,rgba(0,0,0,0) 1px,rgba(0,0,0,.15) 1px,transparent 30%)}*{box-sizing:border-box;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}vfa-slider{display:block;width:100%;height:100%}section{width:100%;position:relative;font-family:\"Open Sans\",sans-serif}.recruitment-process{width:100%;position:relative;padding:50px 0;transition:.5s;display:inline-block}.recruitment-process .grid{width:1200px;position:relative;margin:0 auto}.recruitment-process .grid .grid-left{position:relative;width:400px;float:left}@media only screen and (max-width:1260px){.recruitment-process .grid{padding:0 30px;width:100%}}@media only screen and (max-width:578px){.recruitment-process .grid{padding:0 25px}}.recruitment-text{width:calc(100% - 500px);position:relative;float:right;background-color:#3c78c7;border-radius:10px;overflow:hidden;transition:.5s;color:#fff}.recruitment-text .recruitment-copy{width:100%;position:relative;height:400px}.recruitment-text .recruitment-copy .step{width:100%;position:absolute;top:0;left:0;padding:60px 70px 120px}.recruitment-text .recruitment-copy .step>*{visibility:hidden;opacity:0;transform:translateX(-50px);transition:1s}.recruitment-text .recruitment-copy .step>:nth-child(2){transition-delay:.1s}.recruitment-text .recruitment-copy .step.active>*{visibility:visible;opacity:1;transform:translateX(0)}.recruitment-text .recruitment-copy .step.next>*{visibility:hidden;opacity:0;transform:translateX(50px)}.recruitment-text .recruitment-copy .step h3,.recruitment-text .recruitment-copy .step p{margin:0}.recruitment-text .recruitment-copy .step h3{font-weight:500;font-size:24px;margin-bottom:20px}.recruitment-text .recruitment-copy .step p,.recruitment-text .recruitment-copy .step ul{font-size:16px;line-height:24px}.recruitment-text .recruitment-controls{width:100%;height:80px;position:absolute;bottom:0;left:0;display:flex;align-items:center;justify-content:center;border-radius:0 0 10px 10px}.recruitment-text .recruitment-controls .arrow{width:16px;height:16px;border-top:3px solid #fff;border-left:3px solid #fff;transform:rotate(-45deg);transition:.3s;cursor:pointer}.recruitment-text .recruitment-controls .arrow:hover{border-color:#737373}.recruitment-text .recruitment-controls .arrow.next{transform:rotate(135deg)}.recruitment-text .recruitment-controls .dots{margin:0 10px;position:relative}.recruitment-text .recruitment-controls .dots .dot{width:16px;height:16px;background-color:#e6e6e6;border-radius:50%;position:relative;float:left;margin:0 5px;transition:.3s;cursor:pointer;opacity:.5}.recruitment-text .recruitment-controls .dots .dot:hover{opacity:1}.recruitment-text .recruitment-controls .dots .dot.active{background-color:#fff;opacity:1}@media only screen and (max-width:1260px){.recruitment-text .recruitment-copy .step{padding:40px 40px 100px}.recruitment-text .recruitment-controls{height:70px}.recruitment-wrap{margin-left:20px}}@media only screen and (max-width:1000px){.recruitment-text{width:calc(100% - 375px)}.recruitment-text .recruitment-copy .step{padding:30px 30px 70px}.recruitment-text .recruitment-copy .step h3{font-size:22px;margin-bottom:16px}.recruitment-text .recruitment-copy .step p{font-size:14px}.recruitment-text .recruitment-controls{height:50px}}@media only screen and (max-width:768px){.recruitment-text{width:100%}}.recruitment-wrap{width:400px;height:400px;position:relative;float:left;margin-bottom:50px}.recruitment-wrap .plane{position:absolute;width:100%;height:100%;display:flex;justify-content:center;z-index:5;pointer-events:none}.recruitment-wrap .plane .plane-wrap{height:60px;display:inline-block;transform-origin:50% 230px;transform:translateY(-50%) rotate(0);transition:1s cubic-bezier(.645,.045,.355,1)}.recruitment-wrap .plane .plane-wrap.reverse img,.recruitment-wrap .plane .plane-wrap.reverse svg{transform:scaleX(-1)}.recruitment-wrap .plane .plane-wrap.shadow img,.recruitment-wrap .plane .plane-wrap.shadow svg{filter:drop-shadow(0 -15px 0 rgba(0, 0, 0, .1))}.recruitment-wrap .plane .plane-wrap img,.recruitment-wrap .plane .plane-wrap svg{position:relative;top:0;height:60px;transition:.5s cubic-bezier(.645,.045,.355,1);filter:drop-shadow(0 15px 0 rgba(0, 0, 0, .1))}.recruitment-wrap .plane .plane-wrap svg path{fill:#fff;transition:fill 1s cubic-bezier(.645,.045,.355,1)}.recruitment-wrap .center{position:absolute;height:60%;width:60%;z-index:2;overflow:hidden;display:flex;align-items:center;justify-content:center;left:50%;top:50%;transform:translate(-50%,-50%)}.recruitment-wrap .center:before{content:\"\";width:102%;height:102%;position:absolute;border-radius:50%;z-index:10}.recruitment-wrap .center .center-imgs{width:100%;height:100%;position:absolute;display:flex;align-items:center;justify-content:center;z-index:1}.recruitment-wrap .center .center-imgs .center-img{width:110%;height:110%;position:absolute;z-index:1;display:flex;justify-content:center;align-items:center;font-size:3em;color:#fff;flex-direction:column}.recruitment-wrap .center .center-imgs .center-img .hint{font-size:17px;margin-top:20px;font-weight:600}.recruitment-wrap .center .center-imgs .center-img.active{z-index:2}.recruitment-wrap .center .center-imgs .center-img.active:after{transition:10s cubic-bezier(.23,1,.32,1);transform:scale(1)}.recruitment-wrap .center .center-imgs .center-img:after{content:\"\";position:absolute;width:100%;height:100%;background-size:cover;background-position:center;transition:none;transform:scale(.9)}.recruitment-wrap .center .center-wipe{width:100%;height:100%;position:absolute;z-index:2;background-size:auto 100%;background-position:0 0}.recruitment-wrap .ring{position:absolute;width:100%;height:100%;z-index:1;border-radius:50%;display:flex;justify-content:center;align-items:center;transform:rotate(-90deg)}.recruitment-wrap .ring svg{width:100%;height:100%;position:absolute;z-index:1;top:0;left:0;overflow:visible}.recruitment-wrap .ring svg circle{width:100%;height:100%;stroke-width:2;fill:none;stroke:#fff}.recruitment-wrap .ring svg circle.animate{transition:1s cubic-bezier(.645,.045,.355,1)}.recruitment-wrap .ring svg circle.dash{opacity:.2;stroke-dasharray:10,10}.recruitment-wrap .point-wrap{position:absolute;width:100%;height:100%;display:flex;justify-content:center;align-items:center;z-index:3}.recruitment-wrap .point-wrap .point{width:30px;height:30px;position:absolute;border-radius:50%;display:flex;justify-content:center;top:0;cursor:pointer;align-items:center;transform-origin:50% 215px}.recruitment-wrap .point-wrap .point .point-inner{width:100%;height:100%;position:relative}.recruitment-wrap .point-wrap .point .point-inner .point-transform{background-color:#fff;width:100%;height:100%;display:flex;justify-content:center;align-items:center;border-radius:50%;transition:.6s;box-shadow:0 5px 20px rgba(0,0,0,.3)}.recruitment-wrap .point-wrap .point .point-inner .point-transform span{position:relative;margin-top:1px;font-size:16px;display:block;transition:.6s;color:#fff}.recruitment-wrap .point-wrap .point:hover .point-transform{background-color:#333}.recruitment-wrap .point-wrap .point:hover .point-transform span{color:#fff}.recruitment-wrap .point-wrap .point.active .point-transform{transform:scale(.3);background-color:#333}.recruitment-wrap .point-wrap .point.active .point-transform span{color:#fff;opacity:0}@media only screen and (max-width:1000px){.recruitment-wrap{width:320px;height:320px}.recruitment-wrap circle{transform-origin:50% 50%;transform:scale(.8)}.recruitment-wrap .plane .plane-wrap{height:40px;transform-origin:50% 180px}.recruitment-wrap .plane .plane-wrap img,.recruitment-wrap .plane .plane-wrap svg{height:40px}.recruitment-wrap .point-wrap .point{width:40px;height:40px;transform-origin:50% 180px}}@media only screen and (max-width:768px){.recruitment-wrap{left:50%;margin:0 0 30px;transform:translateX(-50%)}}"]
        })
    ], VfaSliderComponent);
    return VfaSliderComponent;
}());

var VfaSliderModule = /** @class */ (function () {
    function VfaSliderModule() {
    }
    VfaSliderModule = __decorate([
        NgModule({
            declarations: [VfaSliderComponent],
            imports: [
                CommonModule
            ],
            exports: [VfaSliderComponent]
        })
    ], VfaSliderModule);
    return VfaSliderModule;
}());

/*
 * Public API Surface of components
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ComponentsService, VfaSliderComponent, VfaSliderModule };
//# sourceMappingURL=vfa-slider.js.map
