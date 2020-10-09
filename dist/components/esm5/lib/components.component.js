import { __decorate } from "tslib";
import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, Input, OnChanges, OnInit, QueryList, Renderer2, SimpleChanges, ViewChild, ViewChildren, ViewEncapsulation, } from '@angular/core';
import Tick from '@pqina/flip';
var ComponentsComponent = /** @class */ (function () {
    function ComponentsComponent(renderer, cdr) {
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
    ComponentsComponent.prototype.ngOnInit = function () { };
    ComponentsComponent.prototype.ngOnChanges = function (changes) {
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
    ComponentsComponent.prototype.ngAfterViewInit = function () {
        // this.flipper = new Flip({
        //   node: this.number.nativeElement,
        //   from: this.content[0].value,
        //   delay: 1, // second
        // });
        this.flipper = Tick.DOM.create(this.number.nativeElement, {
            value: this.content[0].value
        });
        this.setActive(0);
    };
    ComponentsComponent.prototype.setActive = function (idx) {
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
    ComponentsComponent.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ChangeDetectorRef }
    ]; };
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
    return ComponentsComponent;
}());
export { ComponentsComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50cy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly92ZmEtc2xpZGVyLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsYUFBYSxFQUNiLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFDTCxTQUFTLEVBQ1QsTUFBTSxFQUNOLFNBQVMsRUFDVCxTQUFTLEVBQ1QsYUFBYSxFQUNiLFNBQVMsRUFDVCxZQUFZLEVBQ1osaUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sSUFBSSxNQUFNLGFBQWEsQ0FBQztBQVEvQjtJQTJERSw2QkFBb0IsUUFBbUIsRUFBVSxHQUFzQjtRQUFuRCxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUF4RGhFLFlBQU8sR0FBRztZQUNmO2dCQUNFLEtBQUssRUFBRSxxQkFBcUI7Z0JBQzVCLEtBQUssRUFBRSxHQUFHO2dCQUNWLElBQUksRUFBRSxvREFBb0Q7Z0JBQzFELGVBQWUsRUFBRSxTQUFTO2FBQzNCO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLHNEQUFzRDtnQkFDN0QsTUFBTSxFQUFFLFNBQVM7Z0JBQ2pCLEtBQUssRUFBRSxFQUFFO2dCQUNULElBQUksRUFBRSxDQUFDLHVCQUF1QixFQUFFLDZCQUE2QixDQUFDO2dCQUM5RCxlQUFlLEVBQUUsU0FBUzthQUMzQjtZQUNEO2dCQUNFLEtBQUssRUFBRSxzREFBc0Q7Z0JBQzdELE1BQU0sRUFBRSxVQUFVO2dCQUNsQixLQUFLLEVBQUUsRUFBRTtnQkFDVCxJQUFJLEVBQUU7b0JBQ0osd0JBQXdCO29CQUN4QixvREFBb0Q7aUJBQ3JEO2dCQUNELGVBQWUsRUFBRSxTQUFTO2FBQzNCO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLHNEQUFzRDtnQkFDN0QsTUFBTSxFQUFFLFdBQVc7Z0JBQ25CLEtB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bkc2QixTQUFTO2dCQUFlLGlCQUFpQjs7SUExRDlEO1FBQVIsS0FBSyxFQUFFO3VEQUFrQjtJQWdESjtRQUFyQixTQUFTLENBQUMsU0FBUyxDQUFDO3dEQUFxQjtJQUNyQjtRQUFwQixTQUFTLENBQUMsUUFBUSxDQUFDO3VEQUFvQjtJQUNoQjtRQUF2QixTQUFTLENBQUMsV0FBVyxDQUFDOzBEQUF1QjtJQUNoQjtRQUE3QixTQUFTLENBQUMsaUJBQWlCLENBQUM7Z0VBQTZCO0lBQ2pDO1FBQXhCLFNBQVMsQ0FBQyxZQUFZLENBQUM7MkRBQXdCO0lBQzNCO1FBQXBCLFNBQVMsQ0FBQyxRQUFRLENBQUM7dURBQW9CO0lBQ3BCO1FBQW5CLFNBQVMsQ0FBQyxPQUFPLENBQUM7c0RBQW1CO0lBQ2Y7UUFBdEIsWUFBWSxDQUFDLE9BQU8sQ0FBQztzREFBOEI7SUF4RHpDLG1CQUFtQjtRQU4vQixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsWUFBWTtZQUN0Qiw0K0dBQTBDO1lBRTFDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOztTQUN0QyxDQUFDO09BQ1csbUJBQW1CLENBK0ovQjtJQUFELDBCQUFDO0NBQUEsQUEvSkQsSUErSkM7U0EvSlksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25Jbml0LFxuICBRdWVyeUxpc3QsXG4gIFJlbmRlcmVyMixcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVmlld0NoaWxkLFxuICBWaWV3Q2hpbGRyZW4sXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IFRpY2sgZnJvbSAnQHBxaW5hL2ZsaXAnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd2ZmEtc2xpZGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbXBvbmVudHMuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jb21wb25lbnRzLmNvbXBvbmVudC5zY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIENvbXBvbmVudHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIHZhbHVlczogbnVtYmVyW107XG5cbiAgcHVibGljIGNvbnRlbnQgPSBbXG4gICAge1xuICAgICAgdGl0bGU6ICdEZXNpZ24sIFRpZXJzdHVkaWVuJyxcbiAgICAgIHZhbHVlOiAxNTIsXG4gICAgICB0ZXh0OiAnRsO8ciBkaWUgRVUgYmVpIGRlciBFdXJvcGVhbiBNZWRpY2luZXMgQWdlbmN5IChFTUEpJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyMwRjYyOTInLFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6ICdFcnByb2J1bmcgaW4gdmVyZ2xlaWNoZW5kZW4gU3R1ZGllbiBtaXQgRnJlaXdpbGxpZ2VuJyxcbiAgICAgIGhlYWRlcjogJ1BoYXNlIEknLFxuICAgICAgdmFsdWU6IDE2LFxuICAgICAgbGlzdDogWydjYS4gMTAtMzAgRnJlaXdpbGxpZ2UnLCAnWnVyIHByw7xmZW46IFZlcnRyw6RnbGljaGtlaXQnXSxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyMxNjgyQzMnLFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6ICdFcnByb2J1bmcgaW4gdmVyZ2xlaWNoZW5kZW4gU3R1ZGllbiBtaXQgRnJlaXdpbGxpZ2VuJyxcbiAgICAgIGhlYWRlcjogJ1BoYXNlIElJJyxcbiAgICAgIHZhbHVlOiAxMCxcbiAgICAgIGxpc3Q6IFtcbiAgICAgICAgJ2NhLiA1MC01MDAgRnJlaXdpbGxpZ2UnLFxuICAgICAgICAnWnVyIHByw7xmZW46IERvc2llcnVuZywgSW1tdW5hbnR3b3J0IHZvciBBbnN0ZWNrdW5nJyxcbiAgICAgIF0sXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMTY4MkMzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiAnRXJwcm9idW5nIGluIHZlcmdsZWljaGVuZGVuIFN0dWRpZW4gbWl0IEZyZWl3aWxsaWdlbicsXG4gICAgICBoZWFkZXI6ICdQaGFzZSBJSUknLFxuICAgICAgdmFsdWU6IDYsXG4gICAgICBsaXN0OiBbXG4gICAgICAgICdjYS4gMS4wMDAtNjAuMDAwIEZyZWl3aWxsaWdlJyxcbiAgICAgICAgJ1p1ciBwcsO8ZmVuOiBadXZlcmzDpHNzaWdrZWl0IGRlcyBTY2h1dHplcycsXG4gICAgICBdLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzE2ODJDMycsXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogJ1p1bGFzc3VuZ3N2ZXJmYWhyZW4nLFxuICAgICAgdmFsdWU6IDAsXG4gICAgICB0ZXh0OiAnRsO8ciBkaWUgRVUgYmVpIGRlciBFdXJvcGVhbiBNZWRpY2luZXMgQWdlbmN5IChFTUEpJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyM0OEJGRkInLFxuICAgIH0sXG4gIF07XG5cbiAgcHVibGljIGFjdGl2ZUlkeCA9IDA7XG4gIHB1YmxpYyBsYXN0SWR4ID0gMDtcbiAgcHJpdmF0ZSBmbGlwcGVyO1xuXG4gIEBWaWV3Q2hpbGQoJ3NlY3Rpb24nKSBzZWN0aW9uOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdyaW5nQmcnKSByaW5nQmc6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ3BsYW5lV3JhcCcpIHBsYW5lV3JhcDogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgncmVjcnVpdG1lbnRUZXh0JykgcmVjcnVpdG1lbnRUZXh0OiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdjZW50ZXJXaXBlJykgY2VudGVyV2lwZTogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnbnVtYmVyJykgbnVtYmVyOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdhcnJvdycpIGFycm93OiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkcmVuKCdzdGVwcycpIHN0ZXBzOiBRdWVyeUxpc3Q8RWxlbWVudFJlZj47XG4gIHRpdGxlID0gJ3ZybSc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLCBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7fVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBjb25zb2xlLmxvZyhjaGFuZ2VzKTtcbiAgICBpZiAodGhpcy52YWx1ZXMpIHtcbiAgICAgIGxldCB2YWx1ZXMgPSB0aGlzLnZhbHVlcztcbiAgICAgIGlmICh0eXBlb2YgdmFsdWVzID09PSAnc3RyaW5nJykge1xuICAgICAgICB2YWx1ZXMgPSBKU09OLnBhcnNlKHZhbHVlcyk7XG4gICAgICB9XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZXMpKSB7XG4gICAgICAgIHZhbHVlcy5mb3JFYWNoKCh2YWx1ZSwgaWR4KSA9PiB7XG4gICAgICAgICAgaWYgKHZhbHVlICE9IG51bGwgJiYgdmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5jb250ZW50W2lkeF0udmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICAvLyB0aGlzLmZsaXBwZXIgPSBuZXcgRmxpcCh7XG4gICAgLy8gICBub2RlOiB0aGlzLm51bWJlci5uYXRpdmVFbGVtZW50LFxuICAgIC8vICAgZnJvbTogdGhpcy5jb250ZW50WzBdLnZhbHVlLFxuICAgIC8vICAgZGVsYXk6IDEsIC8vIHNlY29uZFxuICAgIC8vIH0pO1xuICAgIHRoaXMuZmxpcHBlciA9IFRpY2suRE9NLmNyZWF0ZSh0aGlzLm51bWJlci5uYXRpdmVFbGVtZW50LCB7XG4gICAgICB2YWx1ZTogdGhpcy5jb250ZW50WzBdLnZhbHVlXG4gICAgfSk7XG5cbiAgICB0aGlzLnNldEFjdGl2ZSgwKTtcbiAgfVxuXG4gIHNldEFjdGl2ZShpZHgpIHtcbiAgICB0aGlzLmxhc3RJZHggPSB0aGlzLmFjdGl2ZUlkeDtcbiAgICB0aGlzLmFjdGl2ZUlkeCA9IGlkeDtcblxuICAgIGNvbnN0IHJvdGF0aW9uID0gKDM2MCAvIHRoaXMuY29udGVudC5sZW5ndGgpICogdGhpcy5hY3RpdmVJZHg7XG5cbiAgICBsZXQgZGlmZmVyZW5jZSA9IHRoaXMubGFzdElkeCAtIHRoaXMuYWN0aXZlSWR4O1xuXG4gICAgaWYgKGRpZmZlcmVuY2UgPCAwKSB7XG4gICAgICBkaWZmZXJlbmNlID0gZGlmZmVyZW5jZSAqIC0xO1xuICAgIH1cblxuICAgIGNvbnN0IGFuaW1hdGlvbkR1cmF0aW9uID0gMTAwMCArIDMwMCAqIGRpZmZlcmVuY2U7XG4gICAgY29uc3QgcGxhbmUgPSB0aGlzLnBsYW5lV3JhcC5uYXRpdmVFbGVtZW50O1xuICAgIGNvbnN0IHBhdGggPSB0aGlzLnJpbmdCZy5uYXRpdmVFbGVtZW50O1xuICAgIGNvbnN0IGxlbmd0aCA9IHBhdGguZ2V0VG90YWxMZW5ndGgoKTtcblxuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoXG4gICAgICBwbGFuZSxcbiAgICAgICd0cmFuc2l0aW9uJyxcbiAgICAgIGFuaW1hdGlvbkR1cmF0aW9uICsgJ21zIGFsbCBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSknXG4gICAgKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKFxuICAgICAgcGxhbmUsXG4gICAgICAndHJhbnNmb3JtJyxcbiAgICAgICd0cmFuc2xhdGVZKC01MCUpIHJvdGF0ZSgnICsgcm90YXRpb24gKyAnZGVnKSdcbiAgICApO1xuXG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShcbiAgICAgIHBhdGgsXG4gICAgICAndHJhbnNpdGlvbicsXG4gICAgICBhbmltYXRpb25EdXJhdGlvbiArICdtcyBhbGwgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpJ1xuICAgICk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShwYXRoLCAnc3Ryb2tlLWRhc2hhcnJheScsIGxlbmd0aCk7XG5cbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKFxuICAgICAgcGF0aCxcbiAgICAgICdzdHJva2UtZGFzaG9mZnNldCcsXG4gICAgICBsZW5ndGggLSAobGVuZ3RoIC8gdGhpcy5jb250ZW50Lmxlbmd0aCkgKiB0aGlzLmFjdGl2ZUlkeFxuICAgICk7XG5cbiAgICBjb25zb2xlLmxvZyh0aGlzLmZsaXBwZXIpO1xuICAgIHRoaXMuZmxpcHBlci52YWx1ZSA9IHRoaXMuY29udGVudFt0aGlzLmFjdGl2ZUlkeF0udmFsdWU7XG4gICAgLy8gdGhpcy5mbGlwcGVyLmZsaXBUbyh7IHRvOiB0aGlzLmNvbnRlbnRbdGhpcy5hY3RpdmVJZHhdLnZhbHVlIH0pO1xuXG4gICAgLy8gY29uc3QgaGVpZ2h0ID0gdGhpcy5zdGVwcy50b0FycmF5KClbdGhpcy5hY3RpdmVJZHhdLm5hdGl2ZUVsZW1lbnRcbiAgICAvLyAgIC5zY3JvbGxIZWlnaHQ7XG5cbiAgICAvLyB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKFxuICAgIC8vICAgdGhpcy5yZWNydWl0bWVudFRleHQubmF0aXZlRWxlbWVudCxcbiAgICAvLyAgICdoZWlnaHQnLFxuICAgIC8vICAgaGVpZ2h0ICsgJ3B4J1xuICAgIC8vICk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShcbiAgICAgIHRoaXMucmVjcnVpdG1lbnRUZXh0Lm5hdGl2ZUVsZW1lbnQsXG4gICAgICAnYmFja2dyb3VuZC1jb2xvcicsXG4gICAgICB0aGlzLmNvbnRlbnRbdGhpcy5hY3RpdmVJZHhdLmJhY2tncm91bmRDb2xvclxuICAgICk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShcbiAgICAgIHRoaXMuc2VjdGlvbi5uYXRpdmVFbGVtZW50LFxuICAgICAgJ2JhY2tncm91bmQtY29sb3InLFxuICAgICAgdGhpcy5jb250ZW50W3RoaXMuYWN0aXZlSWR4XS5iYWNrZ3JvdW5kQ29sb3JcbiAgICApO1xuXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG59XG4iXX0=