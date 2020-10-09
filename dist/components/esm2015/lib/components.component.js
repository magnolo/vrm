import { __decorate } from "tslib";
import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, Input, OnChanges, OnInit, QueryList, Renderer2, SimpleChanges, ViewChild, ViewChildren, ViewEncapsulation, } from '@angular/core';
import Tick from '@pqina/flip';
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
ComponentsComponent = __decorate([
    Component({
        selector: 'vfa-slider',
        template: "<section\n  class=\"recruitment-process\"\n  #section>\n  <div class=\"grid\"></div>\n  <div class=\"grid\">\n\n    <div class=\"recruitment-wrap\">\n      <div class=\"plane\">\n        <div\n          #planeWrap\n          class=\"plane-wrap\">\n          <svg\n            id=\"arrow\"\n            width=\"60\"\n            height=\"60\"\n            viewBox=\"0 0 60 60\"\n            fill=\"none\"\n            xmlns=\"http://www.w3.org/2000/svg\">\n            <path\n              #arrow\n              d=\"M-2.62268e-06 60L60 30L0 -2.62268e-06L7 30L-2.62268e-06 60Z\"></path>\n          </svg>\n\n        </div>\n      </div>\n\n      <div class=\"center\">\n        <div\n          #centerWipe\n          class=\"center-wipe\"></div>\n        <div class=\"center-imgs\">\n          <!-- *ngFor=\"let item of content; let idx = index\" -->\n          <div class=\"center-img\">\n            <div #number >\n              <div data-repeat=\"true\" data-transform=\"arrive(4, 0.01, false, false) -> round ->  pad('000') -> split -> delay(rtl, 10, 20)\">\n                <span data-view=\"flip\"></span>\n              </div>\n              \n                \n           \n            </div>\n            <div class=\"hint\">Anzahl Studien</div>\n          </div>\n        </div>\n      </div>\n      <div class=\"ring\">\n        <svg>\n          <circle\n            #ringBg\n            class=\"ring-bg animate\"\n            cx=\"50%\"\n            cy=\"50%\"\n            r=\"200\"></circle>\n          <circle\n            class=\"dash\"\n            cx=\"50%\"\n            cy=\"50%\"\n            r=\"200\"></circle>\n        </svg>\n      </div>\n      <div class=\"point-wrap\">\n        <!-- transform: rotate(#{(-360 / 5) * $i}deg), -->\n        <div\n          class=\"point\"\n          (click)=\"setActive(idx)\"\n          [class.active]=\"idx === activeIdx\"\n          [style.transform]=\"'translateY(-50%) rotate(' +((360 / 5) * (idx)) + 'deg)'\"\n          *ngFor=\"let item of content; let idx = index\">\n          <div\n            class=\"point-inner\"\n            [style.transform]=\"' rotate('+ ((-360 / 5) * idx) +'deg)'\">\n            <div class=\"point-transform\">\n              <span>{{ idx + 1 }}</span>\n            </div>\n          </div>\n        </div>\n\n      </div>\n    </div>\n\n    <div\n      #recruitmentText\n      class=\"recruitment-text\">\n      <div class=\"recruitment-copy\">\n        <div\n          class=\"step\"\n          #steps\n          [class.active]=\"idx === activeIdx\"\n          *ngFor=\"let item of content; let idx = index\">\n          <h3>{{ item.title }}</h3>\n          <h4 *ngIf=\"item.header\">{{ item.header }}</h4>\n          <p>{{ item.text}}</p>\n          <ul *ngIf=\"item.list && item.list.length > 0\">\n            <li *ngFor=\"let entry of item.list\">{{ entry }}</li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"recruitment-controls\">\n        <div\n          class=\"arrow prev\"\n          (click)=\"activeIdx === 0 ? setActive(content.length - 1) :setActive(activeIdx -1)\"></div>\n        <div class=\"dots\">\n          <div\n            class=\"dot\"\n            (click)=\"setActive(idx)\"\n            [class.active]=\"idx === activeIdx\"\n            *ngFor=\"let item of content; let idx  = index\"></div>\n        </div>\n        <div\n          class=\"arrow next\"\n          (click)=\"activeIdx + 1 > content.length - 1 ? setActive(0) : setActive(activeIdx+1)\"></div>\n      </div>\n    </div>\n  </div>\n</section>\n",
        encapsulation: ViewEncapsulation.None,
        styles: ["@import url(https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap);.tick-flip-panel{color:#192e4d;background-color:#fff}.tick-flip-panel-back::after{z-index:1;content:\"\";position:absolute;left:0;top:0;width:100%;height:100%;background-image:linear-gradient(180deg,rgba(0,0,0,0) 1px,rgba(0,0,0,.15) 1px,transparent 30%)}*{box-sizing:border-box;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}vfa-slider{display:block;width:100%;height:100%}section{width:100%;position:relative;font-family:\"Open Sans\",sans-serif}.recruitment-process{width:100%;position:relative;padding:50px 0;transition:.5s;display:inline-block}.recruitment-process .grid{width:1200px;position:relative;margin:0 auto}.recruitment-process .grid .grid-left{position:relative;width:400px;float:left}@media only screen and (max-width:1260px){.recruitment-process .grid{padding:0 30px;width:100%}}@media only screen and (max-width:578px){.recruitment-process .grid{padding:0 25px}}.recruitment-text{width:calc(100% - 500px);position:relative;float:right;background-color:#3c78c7;border-radius:10px;overflow:hidden;transition:.5s;color:#fff}.recruitment-text .recruitment-copy{width:100%;position:relative;height:400px}.recruitment-text .recruitment-copy .step{width:100%;position:absolute;top:0;left:0;padding:60px 70px 120px}.recruitment-text .recruitment-copy .step>*{visibility:hidden;opacity:0;transform:translateX(-50px);transition:1s}.recruitment-text .recruitment-copy .step>:nth-child(2){transition-delay:.1s}.recruitment-text .recruitment-copy .step.active>*{visibility:visible;opacity:1;transform:translateX(0)}.recruitment-text .recruitment-copy .step.next>*{visibility:hidden;opacity:0;transform:translateX(50px)}.recruitment-text .recruitment-copy .step h3,.recruitment-text .recruitment-copy .step p{margin:0}.recruitment-text .recruitment-copy .step h3{font-weight:500;font-size:24px;margin-bottom:20px}.recruitment-text .recruitment-copy .step p,.recruitment-text .recruitment-copy .step ul{font-size:16px;line-height:24px}.recruitment-text .recruitment-controls{width:100%;height:80px;position:absolute;bottom:0;left:0;display:flex;align-items:center;justify-content:center;border-radius:0 0 10px 10px}.recruitment-text .recruitment-controls .arrow{width:16px;height:16px;border-top:3px solid #fff;border-left:3px solid #fff;transform:rotate(-45deg);transition:.3s;cursor:pointer}.recruitment-text .recruitment-controls .arrow:hover{border-color:#737373}.recruitment-text .recruitment-controls .arrow.next{transform:rotate(135deg)}.recruitment-text .recruitment-controls .dots{margin:0 10px;position:relative}.recruitment-text .recruitment-controls .dots .dot{width:16px;height:16px;background-color:#e6e6e6;border-radius:50%;position:relative;float:left;margin:0 5px;transition:.3s;cursor:pointer;opacity:.5}.recruitment-text .recruitment-controls .dots .dot:hover{opacity:1}.recruitment-text .recruitment-controls .dots .dot.active{background-color:#fff;opacity:1}@media only screen and (max-width:1260px){.recruitment-text .recruitment-copy .step{padding:40px 40px 100px}.recruitment-text .recruitment-controls{height:70px}.recruitment-wrap{margin-left:20px}}@media only screen and (max-width:1000px){.recruitment-text{width:calc(100% - 375px)}.recruitment-text .recruitment-copy .step{padding:30px 30px 70px}.recruitment-text .recruitment-copy .step h3{font-size:22px;margin-bottom:16px}.recruitment-text .recruitment-copy .step p{font-size:14px}.recruitment-text .recruitment-controls{height:50px}}@media only screen and (max-width:768px){.recruitment-text{width:100%}}.recruitment-wrap{width:400px;height:400px;position:relative;float:left;margin-bottom:50px}.recruitment-wrap .plane{position:absolute;width:100%;height:100%;display:flex;justify-content:center;z-index:5;pointer-events:none}.recruitment-wrap .plane .plane-wrap{height:60px;display:inline-block;transform-origin:50% 230px;transform:translateY(-50%) rotate(0);transition:1s cubic-bezier(.645,.045,.355,1)}.recruitment-wrap .plane .plane-wrap.reverse img,.recruitment-wrap .plane .plane-wrap.reverse svg{transform:scaleX(-1)}.recruitment-wrap .plane .plane-wrap.shadow img,.recruitment-wrap .plane .plane-wrap.shadow svg{filter:drop-shadow(0 -15px 0 rgba(0, 0, 0, .1))}.recruitment-wrap .plane .plane-wrap img,.recruitment-wrap .plane .plane-wrap svg{position:relative;top:0;height:60px;transition:.5s cubic-bezier(.645,.045,.355,1);filter:drop-shadow(0 15px 0 rgba(0, 0, 0, .1))}.recruitment-wrap .plane .plane-wrap svg path{fill:#fff;transition:fill 1s cubic-bezier(.645,.045,.355,1)}.recruitment-wrap .center{position:absolute;height:60%;width:60%;z-index:2;overflow:hidden;display:flex;align-items:center;justify-content:center;left:50%;top:50%;transform:translate(-50%,-50%)}.recruitment-wrap .center:before{content:\"\";width:102%;height:102%;position:absolute;border-radius:50%;z-index:10}.recruitment-wrap .center .center-imgs{width:100%;height:100%;position:absolute;display:flex;align-items:center;justify-content:center;z-index:1}.recruitment-wrap .center .center-imgs .center-img{width:110%;height:110%;position:absolute;z-index:1;display:flex;justify-content:center;align-items:center;font-size:3em;color:#fff;flex-direction:column}.recruitment-wrap .center .center-imgs .center-img .hint{font-size:17px;margin-top:20px;font-weight:600}.recruitment-wrap .center .center-imgs .center-img.active{z-index:2}.recruitment-wrap .center .center-imgs .center-img.active:after{transition:10s cubic-bezier(.23,1,.32,1);transform:scale(1)}.recruitment-wrap .center .center-imgs .center-img:after{content:\"\";position:absolute;width:100%;height:100%;background-size:cover;background-position:center;transition:none;transform:scale(.9)}.recruitment-wrap .center .center-wipe{width:100%;height:100%;position:absolute;z-index:2;background-size:auto 100%;background-position:0 0}.recruitment-wrap .ring{position:absolute;width:100%;height:100%;z-index:1;border-radius:50%;display:flex;justify-content:center;align-items:center;transform:rotate(-90deg)}.recruitment-wrap .ring svg{width:100%;height:100%;position:absolute;z-index:1;top:0;left:0;overflow:visible}.recruitment-wrap .ring svg circle{width:100%;height:100%;stroke-width:2;fill:none;stroke:#fff}.recruitment-wrap .ring svg circle.animate{transition:1s cubic-bezier(.645,.045,.355,1)}.recruitment-wrap .ring svg circle.dash{opacity:.2;stroke-dasharray:10,10}.recruitment-wrap .point-wrap{position:absolute;width:100%;height:100%;display:flex;justify-content:center;align-items:center;z-index:3}.recruitment-wrap .point-wrap .point{width:30px;height:30px;position:absolute;border-radius:50%;display:flex;justify-content:center;top:0;cursor:pointer;align-items:center;transform-origin:50% 215px}.recruitment-wrap .point-wrap .point .point-inner{width:100%;height:100%;position:relative}.recruitment-wrap .point-wrap .point .point-inner .point-transform{background-color:#fff;width:100%;height:100%;display:flex;justify-content:center;align-items:center;border-radius:50%;transition:.6s;box-shadow:0 5px 20px rgba(0,0,0,.3)}.recruitment-wrap .point-wrap .point .point-inner .point-transform span{position:relative;margin-top:1px;font-size:16px;display:block;transition:.6s;color:#fff}.recruitment-wrap .point-wrap .point:hover .point-transform{background-color:#333}.recruitment-wrap .point-wrap .point:hover .point-transform span{color:#fff}.recruitment-wrap .point-wrap .point.active .point-transform{transform:scale(.3);background-color:#333}.recruitment-wrap .point-wrap .point.active .point-transform span{color:#fff;opacity:0}@media only screen and (max-width:1000px){.recruitment-wrap{width:320px;height:320px}.recruitment-wrap circle{transform-origin:50% 50%;transform:scale(.8)}.recruitment-wrap .plane .plane-wrap{height:40px;transform-origin:50% 180px}.recruitment-wrap .plane .plane-wrap img,.recruitment-wrap .plane .plane-wrap svg{height:40px}.recruitment-wrap .point-wrap .point{width:40px;height:40px;transform-origin:50% 180px}}@media only screen and (max-width:768px){.recruitment-wrap{left:50%;margin:0 0 30px;transform:translateX(-50%)}}"]
    })
], ComponentsComponent);
export { ComponentsComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50cy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly92ZmEtc2xpZGVyLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsYUFBYSxFQUNiLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFDTCxTQUFTLEVBQ1QsTUFBTSxFQUNOLFNBQVMsRUFDVCxTQUFTLEVBQ1QsYUFBYSxFQUNiLFNBQVMsRUFDVCxZQUFZLEVBQ1osaUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sSUFBSSxNQUFNLGFBQWEsQ0FBQztBQVEvQixJQUFhLG1CQUFtQixHQUFoQyxNQUFhLG1CQUFtQjtJQTJEOUIsWUFBb0IsUUFBbUIsRUFBVSxHQUFzQjtRQUFuRCxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUF4RGhFLFlBQU8sR0FBRztZQUNmO2dCQUNFLEtBQUssRUFBRSxxQkFBcUI7Z0JBQzVCLEtBQUssRUFBRSxHQUFHO2dCQUNWLElBQUksRUFBRSxvREFBb0Q7Z0JBQzFELGVBQWUsRUFBRSxTQUFTO2FBQzNCO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLHNEQUFzRDtnQkFDN0QsTUFBTSxFQUFFLFNBQVM7Z0JBQ2pCLEtBQUssRUFBRSxFQUFFO2dCQUNULElBQUksRUFBRSxDQUFDLHVCQUF1QixFQUFFLDZCQUE2QixDQUFDO2dCQUM5RCxlQUFlLEVBQUUsU0FBUzthQUMzQjtZQUNEO2dCQUNFLEtBQUssRUFBRSxzREFBc0Q7Z0JBQzdELE1BQU0sRUFBRSxVQUFVO2dCQUNsQixLQUFLLEVBQUUsRUFBRTtnQkFDVCxJQUFJLEVBQUU7b0JBQ0osd0JBQXdCO29CQUN4QixvREFBb0Q7aUJBQ3JEO2dCQUNELGVBQWUsRUFBRSxTQUFTO2FBQzNCO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLHNEQUFzRDtn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Q0FDRixDQUFBOztZQXBHK0IsU0FBUztZQUFlLGlCQUFpQjs7QUExRDlEO0lBQVIsS0FBSyxFQUFFO21EQUFrQjtBQWdESjtJQUFyQixTQUFTLENBQUMsU0FBUyxDQUFDO29EQUFxQjtBQUNyQjtJQUFwQixTQUFTLENBQUMsUUFBUSxDQUFDO21EQUFvQjtBQUNoQjtJQUF2QixTQUFTLENBQUMsV0FBVyxDQUFDO3NEQUF1QjtBQUNoQjtJQUE3QixTQUFTLENBQUMsaUJBQWlCLENBQUM7NERBQTZCO0FBQ2pDO0lBQXhCLFNBQVMsQ0FBQyxZQUFZLENBQUM7dURBQXdCO0FBQzNCO0lBQXBCLFNBQVMsQ0FBQyxRQUFRLENBQUM7bURBQW9CO0FBQ3BCO0lBQW5CLFNBQVMsQ0FBQyxPQUFPLENBQUM7a0RBQW1CO0FBQ2Y7SUFBdEIsWUFBWSxDQUFDLE9BQU8sQ0FBQztrREFBOEI7QUF4RHpDLG1CQUFtQjtJQU4vQixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsWUFBWTtRQUN0Qiw0K0dBQTBDO1FBRTFDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOztLQUN0QyxDQUFDO0dBQ1csbUJBQW1CLENBK0ovQjtTQS9KWSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkluaXQsXG4gIFF1ZXJ5TGlzdCxcbiAgUmVuZGVyZXIyLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdDaGlsZHJlbixcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgVGljayBmcm9tICdAcHFpbmEvZmxpcCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3ZmYS1zbGlkZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vY29tcG9uZW50cy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NvbXBvbmVudHMuY29tcG9uZW50LnNjc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50c0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgdmFsdWVzOiBudW1iZXJbXTtcblxuICBwdWJsaWMgY29udGVudCA9IFtcbiAgICB7XG4gICAgICB0aXRsZTogJ0Rlc2lnbiwgVGllcnN0dWRpZW4nLFxuICAgICAgdmFsdWU6IDE1MixcbiAgICAgIHRleHQ6ICdGw7xyIGRpZSBFVSBiZWkgZGVyIEV1cm9wZWFuIE1lZGljaW5lcyBBZ2VuY3kgKEVNQSknLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzBGNjI5MicsXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogJ0VycHJvYnVuZyBpbiB2ZXJnbGVpY2hlbmRlbiBTdHVkaWVuIG1pdCBGcmVpd2lsbGlnZW4nLFxuICAgICAgaGVhZGVyOiAnUGhhc2UgSScsXG4gICAgICB2YWx1ZTogMTYsXG4gICAgICBsaXN0OiBbJ2NhLiAxMC0zMCBGcmVpd2lsbGlnZScsICdadXIgcHLDvGZlbjogVmVydHLDpGdsaWNoa2VpdCddLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzE2ODJDMycsXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogJ0VycHJvYnVuZyBpbiB2ZXJnbGVpY2hlbmRlbiBTdHVkaWVuIG1pdCBGcmVpd2lsbGlnZW4nLFxuICAgICAgaGVhZGVyOiAnUGhhc2UgSUknLFxuICAgICAgdmFsdWU6IDEwLFxuICAgICAgbGlzdDogW1xuICAgICAgICAnY2EuIDUwLTUwMCBGcmVpd2lsbGlnZScsXG4gICAgICAgICdadXIgcHLDvGZlbjogRG9zaWVydW5nLCBJbW11bmFudHdvcnQgdm9yIEFuc3RlY2t1bmcnLFxuICAgICAgXSxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyMxNjgyQzMnLFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6ICdFcnByb2J1bmcgaW4gdmVyZ2xlaWNoZW5kZW4gU3R1ZGllbiBtaXQgRnJlaXdpbGxpZ2VuJyxcbiAgICAgIGhlYWRlcjogJ1BoYXNlIElJSScsXG4gICAgICB2YWx1ZTogNixcbiAgICAgIGxpc3Q6IFtcbiAgICAgICAgJ2NhLiAxLjAwMC02MC4wMDAgRnJlaXdpbGxpZ2UnLFxuICAgICAgICAnWnVyIHByw7xmZW46IFp1dmVybMOkc3NpZ2tlaXQgZGVzIFNjaHV0emVzJyxcbiAgICAgIF0sXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMTY4MkMzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiAnWnVsYXNzdW5nc3ZlcmZhaHJlbicsXG4gICAgICB2YWx1ZTogMCxcbiAgICAgIHRleHQ6ICdGw7xyIGRpZSBFVSBiZWkgZGVyIEV1cm9wZWFuIE1lZGljaW5lcyBBZ2VuY3kgKEVNQSknLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzQ4QkZGQicsXG4gICAgfSxcbiAgXTtcblxuICBwdWJsaWMgYWN0aXZlSWR4ID0gMDtcbiAgcHVibGljIGxhc3RJZHggPSAwO1xuICBwcml2YXRlIGZsaXBwZXI7XG5cbiAgQFZpZXdDaGlsZCgnc2VjdGlvbicpIHNlY3Rpb246IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ3JpbmdCZycpIHJpbmdCZzogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgncGxhbmVXcmFwJykgcGxhbmVXcmFwOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdyZWNydWl0bWVudFRleHQnKSByZWNydWl0bWVudFRleHQ6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ2NlbnRlcldpcGUnKSBjZW50ZXJXaXBlOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdudW1iZXInKSBudW1iZXI6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ2Fycm93JykgYXJyb3c6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGRyZW4oJ3N0ZXBzJykgc3RlcHM6IFF1ZXJ5TGlzdDxFbGVtZW50UmVmPjtcbiAgdGl0bGUgPSAndnJtJztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHt9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGNvbnNvbGUubG9nKGNoYW5nZXMpO1xuICAgIGlmICh0aGlzLnZhbHVlcykge1xuICAgICAgbGV0IHZhbHVlcyA9IHRoaXMudmFsdWVzO1xuICAgICAgaWYgKHR5cGVvZiB2YWx1ZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHZhbHVlcyA9IEpTT04ucGFyc2UodmFsdWVzKTtcbiAgICAgIH1cbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlcykpIHtcbiAgICAgICAgdmFsdWVzLmZvckVhY2goKHZhbHVlLCBpZHgpID0+IHtcbiAgICAgICAgICBpZiAodmFsdWUgIT0gbnVsbCAmJiB2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRlbnRbaWR4XS52YWx1ZSA9IHZhbHVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIC8vIHRoaXMuZmxpcHBlciA9IG5ldyBGbGlwKHtcbiAgICAvLyAgIG5vZGU6IHRoaXMubnVtYmVyLm5hdGl2ZUVsZW1lbnQsXG4gICAgLy8gICBmcm9tOiB0aGlzLmNvbnRlbnRbMF0udmFsdWUsXG4gICAgLy8gICBkZWxheTogMSwgLy8gc2Vjb25kXG4gICAgLy8gfSk7XG4gICAgdGhpcy5mbGlwcGVyID0gVGljay5ET00uY3JlYXRlKHRoaXMubnVtYmVyLm5hdGl2ZUVsZW1lbnQsIHtcbiAgICAgIHZhbHVlOiB0aGlzLmNvbnRlbnRbMF0udmFsdWVcbiAgICB9KTtcblxuICAgIHRoaXMuc2V0QWN0aXZlKDApO1xuICB9XG5cbiAgc2V0QWN0aXZlKGlkeCkge1xuICAgIHRoaXMubGFzdElkeCA9IHRoaXMuYWN0aXZlSWR4O1xuICAgIHRoaXMuYWN0aXZlSWR4ID0gaWR4O1xuXG4gICAgY29uc3Qgcm90YXRpb24gPSAoMzYwIC8gdGhpcy5jb250ZW50Lmxlbmd0aCkgKiB0aGlzLmFjdGl2ZUlkeDtcblxuICAgIGxldCBkaWZmZXJlbmNlID0gdGhpcy5sYXN0SWR4IC0gdGhpcy5hY3RpdmVJZHg7XG5cbiAgICBpZiAoZGlmZmVyZW5jZSA8IDApIHtcbiAgICAgIGRpZmZlcmVuY2UgPSBkaWZmZXJlbmNlICogLTE7XG4gICAgfVxuXG4gICAgY29uc3QgYW5pbWF0aW9uRHVyYXRpb24gPSAxMDAwICsgMzAwICogZGlmZmVyZW5jZTtcbiAgICBjb25zdCBwbGFuZSA9IHRoaXMucGxhbmVXcmFwLm5hdGl2ZUVsZW1lbnQ7XG4gICAgY29uc3QgcGF0aCA9IHRoaXMucmluZ0JnLm5hdGl2ZUVsZW1lbnQ7XG4gICAgY29uc3QgbGVuZ3RoID0gcGF0aC5nZXRUb3RhbExlbmd0aCgpO1xuXG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShcbiAgICAgIHBsYW5lLFxuICAgICAgJ3RyYW5zaXRpb24nLFxuICAgICAgYW5pbWF0aW9uRHVyYXRpb24gKyAnbXMgYWxsIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKSdcbiAgICApO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoXG4gICAgICBwbGFuZSxcbiAgICAgICd0cmFuc2Zvcm0nLFxuICAgICAgJ3RyYW5zbGF0ZVkoLTUwJSkgcm90YXRlKCcgKyByb3RhdGlvbiArICdkZWcpJ1xuICAgICk7XG5cbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKFxuICAgICAgcGF0aCxcbiAgICAgICd0cmFuc2l0aW9uJyxcbiAgICAgIGFuaW1hdGlvbkR1cmF0aW9uICsgJ21zIGFsbCBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSknXG4gICAgKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHBhdGgsICdzdHJva2UtZGFzaGFycmF5JywgbGVuZ3RoKTtcblxuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoXG4gICAgICBwYXRoLFxuICAgICAgJ3N0cm9rZS1kYXNob2Zmc2V0JyxcbiAgICAgIGxlbmd0aCAtIChsZW5ndGggLyB0aGlzLmNvbnRlbnQubGVuZ3RoKSAqIHRoaXMuYWN0aXZlSWR4XG4gICAgKTtcblxuICAgIGNvbnNvbGUubG9nKHRoaXMuZmxpcHBlcik7XG4gICAgdGhpcy5mbGlwcGVyLnZhbHVlID0gdGhpcy5jb250ZW50W3RoaXMuYWN0aXZlSWR4XS52YWx1ZTtcbiAgICAvLyB0aGlzLmZsaXBwZXIuZmxpcFRvKHsgdG86IHRoaXMuY29udGVudFt0aGlzLmFjdGl2ZUlkeF0udmFsdWUgfSk7XG5cbiAgICAvLyBjb25zdCBoZWlnaHQgPSB0aGlzLnN0ZXBzLnRvQXJyYXkoKVt0aGlzLmFjdGl2ZUlkeF0ubmF0aXZlRWxlbWVudFxuICAgIC8vICAgLnNjcm9sbEhlaWdodDtcblxuICAgIC8vIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoXG4gICAgLy8gICB0aGlzLnJlY3J1aXRtZW50VGV4dC5uYXRpdmVFbGVtZW50LFxuICAgIC8vICAgJ2hlaWdodCcsXG4gICAgLy8gICBoZWlnaHQgKyAncHgnXG4gICAgLy8gKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKFxuICAgICAgdGhpcy5yZWNydWl0bWVudFRleHQubmF0aXZlRWxlbWVudCxcbiAgICAgICdiYWNrZ3JvdW5kLWNvbG9yJyxcbiAgICAgIHRoaXMuY29udGVudFt0aGlzLmFjdGl2ZUlkeF0uYmFja2dyb3VuZENvbG9yXG4gICAgKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKFxuICAgICAgdGhpcy5zZWN0aW9uLm5hdGl2ZUVsZW1lbnQsXG4gICAgICAnYmFja2dyb3VuZC1jb2xvcicsXG4gICAgICB0aGlzLmNvbnRlbnRbdGhpcy5hY3RpdmVJZHhdLmJhY2tncm91bmRDb2xvclxuICAgICk7XG5cbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cbn1cbiJdfQ==