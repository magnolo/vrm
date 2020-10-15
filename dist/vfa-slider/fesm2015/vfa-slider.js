import { __decorate, __awaiter } from 'tslib';
import { ɵɵdefineInjectable, Injectable, Renderer2, ChangeDetectorRef, Input, ViewChild, ViewChildren, Component, NgModule } from '@angular/core';
import { HttpHeaders, HttpClient, HttpClientModule } from '@angular/common/http';
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

const ITEMS = [
    {
        title: 'Impfstoff-Design, Tierstudien',
        value: 152,
        text: 'Design: Was vom Virus und welche Zusatzstoffe sollen enthalten sein? AnschließendErprobung des Impfstoffs mit Tieren auf Verträglichkeit und Wirksamkeit.',
        backgroundColor: '#0F6292',
    },
    {
        title: 'Erprobung in Studien mit Freiwilligen',
        header: 'Phase I',
        value: 16,
        list: [
            'ca. 10-30 Freiwillige',
            'Vergleich mit Scheinimpfung (Placebo)',
            'zu prüfen: Verträglichkeit',
        ],
        backgroundColor: '#1682C3',
    },
    {
        title: 'Erprobung in vergleichenden Studien mit Freiwilligen',
        header: 'Phase II',
        value: 10,
        list: [
            'ca. 50 - 500 Freiwillige',
            'Vergleich von einmaliger und zweimaliger Impfung sowie Scheinimpfung (Placebo)',
            'Zu prüfen: richtige Dosierung, Immunantwort, Verträglichkeit.',
        ],
        backgroundColor: '#1682C3',
    },
    {
        title: 'Erprobung in vergleichenden Studien mit Freiwilligen',
        header: 'Phase III ohne Rolling Review',
        value: 6,
        list: [
            'ca. 10.000 - 60.000 Freiwillige',
            'Vergleich mit Scheinimpfung (Placebo)',
            'Zu prüfen: Zuverlässigkeit des Schutzes, Verträglichkeit',
        ],
        text: 'Es sind noch keine Zulassungsunterlagen eingereicht.',
        info: `<b>Vorgezogene Prüfung eines Teils der Zulassungsunterlagen:</b> ​ Während die Studien noch
    laufen, arbeitet die European Medicines Agency (EMA) schon Zulassungsunterlagen des
    Herstellers zu Tierstudien und Phase I bis II durch.`,
        backgroundColor: '#1682C3',
    },
    {
        title: 'Erprobung in Studien mit Freiwilligen',
        header: 'Phase III mit Rolling Review',
        list: [
            'ca. 10.000 – 60.000 Freiwillige',
            'Vergleich mit Scheinimpfung (Placebo)',
            'Zu prüfen: Zuverlässigkeit des Schutzes, Verträglichkeit',
        ],
        value: 0,
        info: `<b>Vorgezogene Prüfung eines Teils der Zulassungsunterlagen:</b> ​ Während die Studien noch
    laufen, arbeitet die European Medicines Agency (EMA) schon Zulassungsunterlagen des
    Herstellers zu Tierstudien und Phase I bis II durch.`,
        backgroundColor: '#1682C3',
    },
    {
        title: 'Zulassungsverfahren in der EU',
        value: 6,
        list: ['mit kompletten Zulassungsunterlagen'],
        backgroundColor: '#48BFFB',
        text: 'Prüfung des Antrags für die EU bei der European Medicines Agency (EMA) in Amsterdam.',
    },
    {
        title: 'Zugelassen in der EU',
        value: 0,
        text: 'Zulassung durch die EU-Kommission nach einer positiven Zulassungsempfehlung der EMA.',
        backgroundColor: '#48BFFB',
    },
];

const httpOptions = {
    headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
    }),
};
let VfaSliderComponent = class VfaSliderComponent {
    constructor(renderer, cdr, sanitize, httpClient) {
        this.renderer = renderer;
        this.cdr = cdr;
        this.sanitize = sanitize;
        this.httpClient = httpClient;
        this.date = '04.09.2020';
        this.content = ITEMS;
        this.loaded = false;
        this.activeIdx = 0;
        this.lastIdx = 0;
        this.svgs = {
            plane: 'M7 30L0 -2.62268e-06L30 15L60 30L30 45L-2.62268e-06 60L7 30Z',
            arrow: 'M12 21L21.5 30L49 -4.5897e-07L59.5 12.5L20 55L-1.48619e-06 34L12 21Z',
        };
        this.title = 'vrm';
    }
    ngOnInit() {
        if (!this.values) {
            this.getData();
        }
    }
    getData() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.httpClient
                .get('https://vfa.23d.gr/api/values', httpOptions)
                .toPromise();
            response.values.forEach((value, idx) => (this.content[idx].value = value));
            this.date = response.date;
            this.setActive(0);
            setTimeout(() => {
                this.loaded = true;
            }, 500);
        });
    }
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
        if (changes.date) {
            this.cdr.detectChanges();
        }
    }
    ngAfterViewInit() {
        this.flipper = Tick.DOM.create(this.number.nativeElement, {
            value: 0,
        });
        const arc = this.generateArc(200, 200, 200, 25, 335);
        this.renderer.setAttribute(this.arc.nativeElement, 'd', arc);
        if (this.values) {
            this.setActive(0);
            setTimeout(() => {
                this.loaded = true;
            }, 500);
        }
    }
    setActive(idx) {
        this.lastIdx = this.activeIdx;
        this.activeIdx = idx;
        // const rotation = (360 / this.content.length) * this.activeIdx;
        const rotation = 360 - ((360 / this.content.length) * this.activeIdx + 25);
        let difference = this.lastIdx - this.activeIdx;
        if (difference < 0) {
            difference = difference * -1;
        }
        const animationDuration = 500 + 300 * difference;
        const plane = this.planeWrap.nativeElement;
        const path = this.ringBg.nativeElement;
        const length = path.getBoundingClientRect().height > 0 && path.getTotalLength
            ? path.getTotalLength()
            : 0;
        let opacityDelay = 0;
        if (this.activeIdx === this.content.length - 1) {
            opacityDelay = 300 * difference;
        }
        if (plane) {
            this.renderer.setStyle(plane, 'transition', `${animationDuration}ms transform cubic-bezier(0.645, 0.045, 0.355, 1)`);
            this.renderer.setStyle(plane, 'transform', 'translateY(-50%) rotate(' + rotation + 'deg)');
            this.renderer.setStyle(this.svgArrow.nativeElement, 'transition', `opacity 500ms ${opacityDelay}ms cubic-bezier(0.645, 0.045, 0.355, 1)`);
            // this.renderer.setStyle(
            //   this.svgCheck.nativeElement,
            //   'transition',
            //   `opacity 500ms ${opacityDelay}ms cubic-bezier(0.645, 0.045, 0.355, 1)`
            // );
            if (this.activeIdx === this.content.length - 1) {
                this.renderer.setStyle(this.svgArrow.nativeElement, 'opacity', '0');
                // this.renderer.setStyle(
                //   this.svgCheck.nativeElement,
                //   'opacity',
                //   '1'
                // );
            }
            else {
                this.renderer.setStyle(this.svgArrow.nativeElement, 'opacity', '1');
                // this.renderer.setStyle(
                //   this.svgCheck.nativeElement,
                //   'opacity',
                //   '0'
                // );
            }
        }
        if (path) {
            this.renderer.setStyle(path, 'transition', animationDuration + 'ms all cubic-bezier(0.645, 0.045, 0.355, 1)');
            this.renderer.setStyle(path, 'stroke-dasharray', length);
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
        // let svgForm = this.svgs.plane;
        // this.svgAnimation.nativeElement.beginElement();
        // this.renderer.setAttribute(this.arrow.nativeElement, 'd', svgForm);
        this.cdr.detectChanges();
    }
    transform(idx) {
        return this.sanitize.bypassSecurityTrustStyle('translateY(-50%) rotate(' +
            (360 - ((360 / this.content.length) * idx + 25)) +
            'deg)');
    }
    transformInner(idx) {
        let scale = '';
        if (idx === this.activeIdx && idx === this.content.length - 1) {
            scale = ' scale(1.2)';
        }
        return this.sanitize.bypassSecurityTrustStyle('rotate(' +
            (360 - ((-360 / this.content.length) * idx - 25)) +
            'deg)' +
            scale);
    }
    generateArc(x, y, radius, startAngle, endAngle) {
        const start = this.polarToCartesian(x, y, radius, endAngle);
        const end = this.polarToCartesian(x, y, radius, startAngle);
        const largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';
        const d = [
            'M',
            start.x,
            start.y,
            'A',
            radius,
            radius,
            0,
            largeArcFlag,
            0,
            end.x,
            end.y,
        ].join(' ');
        return d;
    }
    polarToCartesian(centerX, centerY, radius, angleInDegrees) {
        const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
        return {
            x: centerX + radius * Math.cos(angleInRadians),
            y: centerY + radius * Math.sin(angleInRadians),
        };
    }
};
VfaSliderComponent.ctorParameters = () => [
    { type: Renderer2 },
    { type: ChangeDetectorRef },
    { type: DomSanitizer },
    { type: HttpClient }
];
__decorate([
    Input()
], VfaSliderComponent.prototype, "values", void 0);
__decorate([
    Input()
], VfaSliderComponent.prototype, "date", void 0);
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
    ViewChild('svgArrow')
], VfaSliderComponent.prototype, "svgArrow", void 0);
__decorate([
    ViewChild('svgCheck')
], VfaSliderComponent.prototype, "svgCheck", void 0);
__decorate([
    ViewChild('arc')
], VfaSliderComponent.prototype, "arc", void 0);
__decorate([
    ViewChildren('steps')
], VfaSliderComponent.prototype, "steps", void 0);
VfaSliderComponent = __decorate([
    Component({
        selector: 'vfa-slider',
        template: "<section\n  class=\"recruitment-process\"\n  #section>\n  <div\n    class=\"container\"\n    [class.loaded]=\"loaded\">\n\n    <div class=\"recruitment-wrap\">\n      <div class=\"plane\">\n        <div\n          #planeWrap\n          style=\"position: relative;\"\n          class=\"plane-wrap reverse\">\n          <svg\n            id=\"arrow\"\n            #svgArrow\n            width=\"40\"\n            height=\"40\"\n            viewBox=\"0 0 60 60\"\n            fill=\"none\"\n            xmlns=\"http://www.w3.org/2000/svg\">\n            <path\n              #arrow\n              [attr.d]=\"svgs.plane\">\n\n            </path>\n          </svg>\n          <svg\n            id=\"check\"\n            style=\"position: absolute; top: 50%; left: 50%; transform: translate(-52%, -52%) rotate(-20deg)\"\n            #svgCheck\n            width=\"40\"\n            height=\"40\"\n            viewBox=\"0 0 60 60\"\n            fill=\"none\"\n            xmlns=\"http://www.w3.org/2000/svg\">\n            <path\n              #arrow\n              [attr.d]=\"svgs.arrow\">\n\n            </path>\n          </svg>\n        </div>\n      </div>\n\n      <div class=\"center\">\n        <div class=\"center-imgs\">\n          <!-- *ngFor=\"let item of content; let idx = index\" -->\n          <div class=\"center-img\">\n            <div #number>\n              <div\n                data-repeat=\"true\"\n                data-transform=\"arrive(4, 0.01, false, false) -> round ->  pad('000') -> split -> delay(rtl, 10, 20)\">\n                <span data-view=\"flip\"></span>\n              </div>\n\n            </div>\n            <div class=\"hint\">Studien</div>\n          </div>\n        </div>\n      </div>\n      <div class=\"ring\">\n        <svg>\n          <circle\n            #ringBg\n            class=\"ring-bg animate\"\n            style=\"stroke-dashoffset:1256px; stroke-dasharray: 1256px;\"\n            cx=\"50%\"\n            cy=\"50%\"\n            r=\"200\"></circle>\n          <!-- <circle\n            class=\"dash\"\n            cx=\"50%\"\n            cy=\"50%\"\n            r=\"200\"></circle> -->\n          <path\n            class=\"dash\"\n            #arc></path>\n        </svg>\n      </div>\n      <div class=\"point-wrap\">\n        <!-- transform: rotate(#{(-360 / 5) * $i}deg), -->\n        <div\n          class=\"point\"\n          (click)=\"setActive(idx)\"\n          [class.active]=\"idx === activeIdx\"\n          *ngFor=\"let item of content; let idx = index\"\n          [style.transform]=\"transform(idx)\">\n          <div\n            class=\"point-inner\"\n            style=\"transition: transform 300ms ease\"\n            [style.transform]=\"transformInner(idx)\">\n            <div class=\"point-transform\">\n              <span>{{ idx + 1 }}</span>\n              <svg\n                *ngIf=\"idx === content.length-1\"\n                width=\"15\"\n                height=\"12\"\n                viewBox=\"0 0 15 12\"\n                fill=\"none\"\n                xmlns=\"http://www.w3.org/2000/svg\">\n                <path\n                  d=\"M4.99997 8.58597L1.70697 5.29297L0.292969 6.70697L4.99997 11.414L14.707 1.70697L13.293 0.292969L4.99997 8.58597Z\"\n                  fill=\"black\"></path>\n              </svg>\n\n            </div>\n          </div>\n        </div>\n\n      </div>\n    </div>\n\n    <div\n      #recruitmentText\n      class=\"recruitment-text\">\n      <div class=\"recruitment-copy\">\n        <div\n          class=\"step\"\n          #steps\n          [class.next]=\"idx > activeIdx\"\n          [class.active]=\"idx === activeIdx\"\n          *ngFor=\"let item of content; let idx = index\">\n          <h3>{{ item.title }}</h3>\n          <div\n            class=\"sub-info\"\n            *ngIf=\"item.header\">\n            <h4>{{ item.header }}</h4>\n            <div\n              *ngIf=\"item.info\"\n              class=\"info\">\n              <div class=\"info-icon\">\n                <svg\n                  width=\"4\"\n                  height=\"8\"\n                  viewBox=\"0 0 4 8\"\n                  fill=\"none\"\n                  xmlns=\"http://www.w3.org/2000/svg\">\n                  <path\n                    d=\"M1 0.75C1 0.338 1.338 0 1.75 0H2.25C2.662 0 3 0.338 3 0.75V1.25C3 1.662 2.662 2 2.25 2H1.75C1.55133 1.99921 1.36102 1.91994 1.22054 1.77946C1.08006 1.63898 1.00079 1.44867 1 1.25V0.75Z\"\n                    fill=\"black\"></path>\n                  <path\n                    d=\"M4 8H0V7H1V4H0V3H3V7H4V8Z\"\n                    fill=\"black\"></path>\n                </svg>\n              </div>\n              <div class=\"info-tooltip left\">\n                <p [innerHTML]=\"item.info\"></p>\n              </div>\n            </div>\n          </div>\n\n          <p>{{ item.text}}</p>\n          <ul *ngIf=\"item.list && item.list.length > 0\">\n            <li *ngFor=\"let entry of item.list\">{{ entry }}</li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"recruitment-controls\">\n        <div\n          class=\"arrow prev\"\n          (click)=\"activeIdx === 0 ? setActive(content.length - 1) :setActive(activeIdx -1)\"></div>\n        <div class=\"dots\">\n          <div\n            class=\"dot\"\n            (click)=\"setActive(idx)\"\n            [class.active]=\"idx === activeIdx\"\n            *ngFor=\"let item of content; let idx  = index\"></div>\n        </div>\n        <div\n          class=\"arrow next\"\n          (click)=\"activeIdx + 1 > content.length - 1 ? setActive(0) : setActive(activeIdx+1)\"></div>\n      </div>\n    </div>\n\n  </div>\n  <div class=\"footer\">\n    <img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAAAuCAMAAABam6YzAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAvFQTFRFAAAA////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////rkHhmgAAAPt0Uk5TAAwnAwll1P3/6BQauf4Gx/OjbQhy2j3RRiH16kFQv1cWAhUvNAcTCsMPDQEEHE5VRyqFsqFpKPhv5+PCYd8rIBIxYlTPERhw0PD73oALzn2P5bA8S+wfy5Ct9CJq/NygBSYkJRkAFx0OHiMuEClx1+vJkUWzdWCU2eSKO8zprLdC8UD37r7yZ5/mxbSo+co+4eLtmthIpmOlp4fNZH/GhLs3XKk49jCvXar6uJs1WZjdrnjSgZWJU2tR1XzAdlhNg3O8ndu6fr1JPy2Mq6Q5M5LgGzLIojZPTEOTLNOGdHq2jlZKW2ZeWoixxJbWnnlsgpmLaERuX5yNOndDNrQfAAAI70lEQVR4nO2ZaUBTVxbHj0mUS8TgTgmovECAkCDgAgYhYRFcWEZUVCJL2BfjhrWIErVBqFZZCqIOVlrrgmhxKaXSdGirFh0di0KxUrVqF1tHnel0xplO+2lOXhII5IGidrAz/j/k3XPuzX3nl/fOvee9ADzXcz3XE2oAi8Xu7xieXJyBgyyIJbe/w3hiDbYaQsj/AAjPGjGGDhs+or8DeVKNRI5Ro3/7GcKzQZAX+juKpyBbPiF2/R3E05A9XhDr/g7iaWgMgozt7yCehsb9P4M4UKaW4AUW1cNArmMPPRwnYR/P2SE2l8t1NpmW58zluoAexFUkErmJabfE3Wm8h4enlxvDFBMmTpw0WQTg7TPFNFip71RBDyf183dh7pDx5Y/BQCtAamkpDey0gywtLYNBD+Lj6+s7LQSN0OkzZhKdZoWFR5hNMTbyd7OjXCNAMGeuiXde9HzzoQb9GiCwAONb2GnGEKJYBHoQYihRYuNIp+Kdus8wNgFX6yFjKIFACTAiMYmnc7KDpMlKUCYlYsiSACrFJTXNKx2vvAsrSYkgGUmZaFBy7wwAoUiSJcedV5kkX6wDUS2Zj33OkoAlor6ALMXglnWaywlZITGASBMSErIHAKzES/HiqnEeL+VEo3d1MgMI5K4RxduthdA8td06/AqwZlosX5u2Plqd5wUs/+yoDR5qn5c1kDItP3+O0G9jgU/hKwCb1JtXe8P4V7f48GNBsrVIUYwgJaWvlU2QQGR5rsW2vtRH6bqbxt1oVaAxEKBrsrO37wjRtwJ2onsnE8ig34ODnQYqd3FE8a+D4YrsXhbBXr8TZGS2JqPqDUgRQsKbSu4e8Ct8i7duL+zbf4CKqQYPn4O8vTXgeEgjjOXLxYffhkCfWii1ygo85NUHELYrxnbEaB0lJG5wdxDgdYx2OEZIoYoJpBoECGJ1XCbLm63zBkeFwJZJAO9si5CRUIDjrhUCoOre1fXpcqS+Bt7ZXCt7Lww8sIJA6wSR6HIkpbRBJlMchNIGkPNlfQCBcAz5qNgQ8SBC6sAMxEQT0P8+A8jqTTRIcZlWq/3ACPKHekwwf4GM4PIlc7XYtdglrNEEJMcHB7saQfzy6WT3sotH74ePAbKnCMvcUH07MZ+Q93oF+Qj9H5uDcPJP0iCnjhq9OpDDp7GK/kREg+CC8GYTpQ03ATkTxtFZBpAPCaUDyfTdQH+/7yAuZwkZ8kd9OwgfQc71CqJBf7YZSGZC/nka5E8rlLBHaAR5dxkF6y4ADWKvhDeq4NP1wGs2gpTwvSEpxQhyMe68+AhfTp3F6ddSjwFCr1tr9M31WCkqewZRsmmQS91ACCma4SGmQeZPa1kW1qwHUUGr1agFgz6jQSRtvjbqcSAfdCz3MMcAQl22rJu51AgirF4+qqlQDvabtbnF7tAS22cQGcZWRYfPxbtsAjCCiNMqzhxf8TkTiFwm83bGo4SFO6CD5xVbOuEyEnFrUK2cl5IKQhku6AGa9xfj9pDS7hkCqmQKUnCl5Mw9EaiEDBbQlsrzC5W3EsRZYyoEqZAcAMolfStYxJjhGy/qWlcIsbBnBPFeswwdQw4ygTw7moLBrcKj+CohxYYdowuI6mPc2y1K151c9GyDXDtEyIt45NZ13FldQELa0Lg+jy4Yn2kQHgIUKgE2YJDGus8EJLUab6ovDZviMw0CNzC6MfTWaGncxE1A5lkQ0sQx+HsGEdxUMfqfULWxfRicOYSQy3SxUml0mYBsweZFo58BpFqtzr11/tFL8K8K8GN7eYctt+9tdIP20WalJdYSso3jGE0sSoyuThBOPCH8jvdbTPvIqfavrSMHPDLIaV0RdKumw75Z0NvoPoHAGtzTrp0kxLfjCaATRKAmpKVjJBMIlijfxHnL+Kxvp7QCuAWvClbCiH3KikRVrdvAtwYsvoHXk/3F0tuDu4Kw90WsvOEIgxOmaSLA+buRi/Fc5wO+DVlkKx/ugb9ca+yUJB2Ie8P3FDgfyAgaqHQauRZ/9sBV3+HCUysaPX1fd5CSoYTsnkjI1g5PJwgXQaIeBlKBIHEtBS0FIG6pqx76Fcjtztqt1AzVWhWO2tYWlw53XvvzJ1XsLiAR/nV5u9SCcWrF9ay0yLv3FPMgeHnY/czKsGNNhUH4A8b8RVELDUNbChR/hfboulMvr75eVZgJA2dmW09Vgfa+jXVcaDcQYTGG7U/ICQaQEXhrzep4amUCWSd3HBuWISv6Rnw7DCBLCHesEeSmQKkhgeKYWxm2/NEgEIFHlHM3kHChY1EyhON5fghLS90+jAou3BBCVZaGwpw1MCFSnPrql9AQFUodr4f2sna4HJPRSmRU1UJQHfIEbfaIrP1mNczfCFFbEDslAwhcwGZDbyD5duq7n9PJ/lIpgFf4jzMWIIhGNxhg7ySQK86BauTVs5YC95qaHSYgHiCblUiDXGppbKxyddNVmlCJWVHzd5ho09hos5XOkRoEifKC+noQEFm6b3Vjo+IfoGWsKkcfIrhy7e10mICcwwpM/cCQ7g+MIIPb6urC9SAX5PMzwAgiKP309hwzEM6mtn8ulOpAguD0dXOQ+tycnJxVHFOQptXo2mEOkiwtwI6SHkBEus3b4nVGELiH7bJ7V87Lvc9Nv2sEkSsIOa0HSaAPBhBPvi3sNgPJlFZgLPrXQzm++LG+K0hlMV1pmoIMm0OPNgMRxU+nO5hB4AMMsKWVGYSdrTB5jULKXukNpLnI3muFGUjKsYb0H9V6kI/ivj8whd8JcmaBO89TesT2X81dQL62c1o02dscBC6Pzbo23K0nECepVPqTiT0e7RijIV4yydJAoSj4Qb+Kph+TSv9Nt6r1OcPyT4dxeSDZUuh/1QrS7/8M8LMaoPwSuPs3iyfzl5e76pNdku0zq+mXcnDJGw+s3EXwIHrjZ9QvG/fnXoF2G1z/b04F+Gk3iC/x8+Pngh9ab9+BlTMS4c4dXEJZkDw132diKEz1g3R/lhnIwyR2cNJozgWmiR8+lMf4PpSSdLbZyq5duscOMQe6i+rpbZDwt///03M9139T/wEMAdJxlHwx3wAAAABJRU5ErkJggg==\">\n    <div class=\"note\">\n      <small>\n        Stand {{ date }}, Verband der forschenden Pharma-Unternehmen (vfa) + Quelle WHO\n      </small>\n    </div>\n  </div>\n</section>\n",
        styles: ["@import url(https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap);:host{display:block;width:100%;height:100%;min-height:520px}:host *{box-sizing:border-box;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}:host section{width:100%;position:relative;font-family:\"Open Sans\",sans-serif}:host .recruitment-process{width:100%;position:relative;padding:50px 0;transition:.5s;height:100%;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;-ms-flex-direction:column;flex-direction:column}:host .recruitment-process .container{width:100%;position:relative;margin:0 auto;display:-ms-grid;display:grid;-ms-grid-columns:400px 1fr;grid-template-columns:400px 1fr;grid-gap:50px;max-width:1200px;height:100%;-ms-flex-align:center;align-items:center;opacity:0;transition:opacity 250ms ease-out}:host .recruitment-process .container .grid-left{position:relative;width:400px;float:left}:host .recruitment-process .container.loaded{opacity:1}:host .recruitment-process .footer{width:100%;color:#fff;padding:0 60px;text-align:right}:host .recruitment-process .footer .note{margin-top:5px;opacity:.5}@media only screen and (max-width:768px){:host .recruitment-process .footer{margin-top:10px;text-align:center;padding:0 20px}:host .recruitment-process .footer img{height:32px}}@media only screen and (max-width:1260px){:host .recruitment-process .container{padding:0 30px}}@media only screen and (max-width:1000px){:host .recruitment-process .container{-ms-grid-columns:320px 1fr;grid-template-columns:320px 1fr;grid-gap:40px}}@media only screen and (max-width:768px){:host .recruitment-process{padding:0 0 10px}:host .recruitment-process .container{padding:0 30px;width:100%;-ms-grid-columns:1fr;grid-template-columns:1fr}}@media only screen and (max-width:578px){:host .recruitment-process .container{padding:0 15px;grid-gap:0}}:host .recruitment-text{position:relative;float:right;border-radius:10px;overflow:hidden;transition:.5s;color:#fff}:host .recruitment-text .recruitment-copy{width:100%;position:relative;height:360px}:host .recruitment-text .recruitment-copy .step{width:100%;position:absolute;bottom:0;left:0;padding:60px 70px 100px;height:100%;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;pointer-events:none}:host .recruitment-text .recruitment-copy .step>*{visibility:hidden;opacity:0;-ms-transform:translateX(-50px);transform:translateX(-50px);transition:1s}:host .recruitment-text .recruitment-copy .step>:nth-child(2){transition-delay:.1s}:host .recruitment-text .recruitment-copy .step.active{pointer-events:initial}:host .recruitment-text .recruitment-copy .step.active>*{visibility:visible;opacity:1;-ms-transform:translateX(0);transform:translateX(0)}:host .recruitment-text .recruitment-copy .step.next>*{visibility:hidden;opacity:0;-ms-transform:translateX(50px);transform:translateX(50px)}:host .recruitment-text .recruitment-copy .step h3,:host .recruitment-text .recruitment-copy .step p{margin:0}:host .recruitment-text .recruitment-copy .step h3{font-weight:500;font-size:24px;margin-bottom:20px}:host .recruitment-text .recruitment-copy .step .sub-info{position:relative;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;z-index:1}@media only screen and (max-width:768px){:host .recruitment-text .recruitment-copy .step .sub-info{-ms-flex-pack:center;justify-content:center}}:host .recruitment-text .recruitment-copy .step .sub-info h4{margin:8px 0}:host .recruitment-text .recruitment-copy .step .sub-info .info{position:relative;margin-left:5px}:host .recruitment-text .recruitment-copy .step .sub-info .info .info-icon{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;border-radius:100px;width:18px;height:18px;background:#fff;color:#192e4d;cursor:help}:host .recruitment-text .recruitment-copy .step .sub-info .info .info-tooltip{z-index:1;opacity:0;padding:10px 20px;background:#fff;color:#192e4d;position:absolute;bottom:100%;left:50%;border-radius:3px;-ms-transform:translate(-50%,-20px);transform:translate(-50%,-20px);transition:.3s ease-out;font-size:12px;box-shadow:0 5px 20px rgba(0,0,0,.3);width:300px;text-align:left}:host .recruitment-text .recruitment-copy .step .sub-info .info .info-tooltip p{font-size:13px;line-height:1.6em}:host .recruitment-text .recruitment-copy .step .sub-info .info .info-tooltip::after{content:\" \";width:0;height:0;border-style:solid;border-width:8px 8px 0;border-color:#fff transparent transparent;position:absolute;left:50%;top:100%;-ms-transform:translateX(-50%);transform:translateX(-50%)}:host .recruitment-text .recruitment-copy .step .sub-info .info .info-tooltip.left{bottom:initial;left:100%;-ms-transform:translate(20px,-50%);transform:translate(20px,-50%);top:50%}:host .recruitment-text .recruitment-copy .step .sub-info .info .info-tooltip.left::after{border-width:8px 8px 8px 0;border-color:transparent #fff transparent transparent;position:absolute;top:50%;right:100%;-ms-transform:translateY(-50%);transform:translateY(-50%);left:initial}:host .recruitment-text .recruitment-copy .step .sub-info .info:hover .info-tooltip{-ms-transform:translate(-50%,-10px);transform:translate(-50%,-10px);opacity:1;transition:.3s linear}:host .recruitment-text .recruitment-copy .step .sub-info .info:hover .info-tooltip.left{-ms-transform:translate(10px,-50%);transform:translate(10px,-50%)}@media only screen and (max-width:1260px){:host .recruitment-text .recruitment-copy .step .sub-info .info .info-tooltip{left:initial!important;right:50%!important;top:50%!important;-ms-transform:translate(50%,-50%)!important;transform:translate(50%,-50%)!important}:host .recruitment-text .recruitment-copy .step .sub-info .info .info-tooltip::after{display:none}}:host .recruitment-text .recruitment-copy .step p,:host .recruitment-text .recruitment-copy .step ul{font-size:16px;line-height:24px}:host .recruitment-text .recruitment-copy .step ul{margin-bottom:0}@media only screen and (max-width:768px){:host .recruitment-text .recruitment-copy .step .sub-info .info .info-tooltip{left:50%!important;top:50%!important;-ms-transform:translate(-50%,-50%)!important;transform:translate(-50%,-50%)!important;position:fixed}:host .recruitment-text .recruitment-copy .step .sub-info .info .info-tooltip::after{display:none}:host .recruitment-text .recruitment-copy{height:280px}}:host .recruitment-text .recruitment-controls{width:100%;height:80px;position:absolute;bottom:0;left:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;border-radius:0 0 10px 10px}:host .recruitment-text .recruitment-controls .arrow{display:none;width:16px;height:16px;border-top:3px solid #fff;border-left:3px solid #fff;-ms-transform:rotate(-45deg);transform:rotate(-45deg);transition:.3s;cursor:pointer}:host .recruitment-text .recruitment-controls .arrow:hover{border-color:#737373}:host .recruitment-text .recruitment-controls .arrow.next{-ms-transform:rotate(135deg);transform:rotate(135deg)}:host .recruitment-text .recruitment-controls .dots{margin:0 10px;position:relative}:host .recruitment-text .recruitment-controls .dots .dot{width:16px;height:16px;background-color:#e6e6e6;border-radius:50%;position:relative;float:left;margin:0 5px;transition:.3s;cursor:pointer;opacity:.5}:host .recruitment-text .recruitment-controls .dots .dot:hover{opacity:1}:host .recruitment-text .recruitment-controls .dots .dot.active{background-color:#fff;opacity:1;-ms-transform:scale(1.2);transform:scale(1.2)}@media only screen and (max-width:1260px){:host .recruitment-text .recruitment-copy .step{padding:40px 40px 100px}:host .recruitment-text .recruitment-controls{height:70px}:host .recruitment-wrap{margin-left:20px}}@media only screen and (max-width:1000px){:host .recruitment-text .recruitment-copy .step{padding:30px 30px 70px}:host .recruitment-text .recruitment-copy .step h3{font-size:22px;margin-bottom:16px}:host .recruitment-text .recruitment-copy .step p{font-size:14px;line-height:20px}:host .recruitment-text .recruitment-controls{height:50px}}@media only screen and (max-width:768px){:host .recruitment-text{width:100%;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;text-align:center}:host .recruitment-text .recruitment-copy .step{padding:10px 10px 20px;bottom:50%;-ms-transform:translateY(50%);transform:translateY(50%)}:host .recruitment-text ul{text-align:left}:host .recruitment-text .recruitment-controls{position:relative}}:host .recruitment-wrap{width:400px;height:400px;position:relative;float:left}:host .recruitment-wrap .plane{position:absolute;width:100%;height:100%;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;z-index:5;pointer-events:none}:host .recruitment-wrap .plane .plane-wrap{height:60px;display:inline-block;-ms-transform-origin:50% 230px;transform-origin:50% 230px;-ms-transform:translateY(-50%) rotate(0);transform:translateY(-50%) rotate(0);transition:1s cubic-bezier(.645,.045,.355,1);position:relative}:host .recruitment-wrap .plane .plane-wrap.reverse img,:host .recruitment-wrap .plane .plane-wrap.reverse svg{-ms-transform:scaleX(-1);transform:scaleX(-1)}:host .recruitment-wrap .plane .plane-wrap.shadow img,:host .recruitment-wrap .plane .plane-wrap.shadow svg{filter:drop-shadow(0 -15px 0 rgba(0, 0, 0, .1))}:host .recruitment-wrap .plane .plane-wrap img,:host .recruitment-wrap .plane .plane-wrap svg{position:relative;top:0;height:60px;transition:.5s cubic-bezier(.645,.045,.355,1);filter:drop-shadow(0 15px 0 rgba(0, 0, 0, .1))}:host .recruitment-wrap .plane .plane-wrap svg path{fill:#fff;transition:1s cubic-bezier(.645,.045,.355,1)}:host .recruitment-wrap .plane .plane-wrap #check{opacity:0}:host .recruitment-wrap .center{position:absolute;height:100%;width:100%;z-index:2;overflow:hidden;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;left:50%;top:50%;-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}:host .recruitment-wrap .center:before{content:\"\";width:102%;height:102%;position:absolute;border-radius:50%;z-index:10}:host .recruitment-wrap .center .center-imgs{width:100%;height:100%;position:absolute;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;z-index:1}:host .recruitment-wrap .center .center-imgs .center-img{width:110%;height:110%;position:absolute;z-index:1;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;font-size:3em;color:#fff;-ms-flex-direction:column;flex-direction:column;padding-top:1em}@media only screen and (max-width:360px){:host .recruitment-wrap .center .center-imgs .center-img{font-size:2em}}:host .recruitment-wrap .center .center-imgs .center-img .hint{font-size:17px;margin-top:20px;font-weight:600}:host .recruitment-wrap .center .center-imgs .center-img.active{z-index:2}:host .recruitment-wrap .center .center-imgs .center-img.active:after{transition:10s cubic-bezier(.23,1,.32,1);-ms-transform:scale(1);transform:scale(1)}:host .recruitment-wrap .center .center-imgs .center-img:after{content:\"\";position:absolute;width:100%;height:100%;background-size:cover;background-position:center;transition:none;-ms-transform:scale(.9);transform:scale(.9)}:host .recruitment-wrap .center .center-wipe{width:100%;height:100%;position:absolute;z-index:2;background-size:auto 100%;background-position:0 0}:host .recruitment-wrap .ring{position:absolute;width:100%;height:100%;z-index:1;border-radius:50%;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;-ms-transform:rotate(-115deg) scaleY(-1);transform:rotate(-115deg) scaleY(-1)}:host .recruitment-wrap .ring svg{width:100%;height:100%;position:absolute;z-index:1;top:0;left:0;overflow:visible}:host .recruitment-wrap .ring svg circle{width:100%;height:100%;stroke-width:3;fill:none;stroke:#fff}:host .recruitment-wrap .ring svg circle.animate{transition:1s cubic-bezier(.645,.045,.355,1)}:host .recruitment-wrap .ring svg path{stroke-width:3;fill:none;stroke:#fff;-ms-transform:rotate(-295deg);transform:rotate(-295deg);-ms-transform-origin:center;transform-origin:center}:host .recruitment-wrap .ring svg path.dash{opacity:.2;stroke-dasharray:10,10}:host .recruitment-wrap .point-wrap{position:absolute;width:100%;height:100%;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;z-index:3}:host .recruitment-wrap .point-wrap .point{width:36px;height:36px;position:absolute;border-radius:50%;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;top:0;cursor:pointer;-ms-flex-align:center;align-items:center;-ms-transform-origin:50% 218px;transform-origin:50% 218px}:host .recruitment-wrap .point-wrap .point .point-inner{width:100%;height:100%;position:relative}:host .recruitment-wrap .point-wrap .point .point-inner .point-transform{background-color:#fff;width:100%;height:100%;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;border-radius:50%;transition:.6s;box-shadow:0 5px 20px rgba(0,0,0,.3)}:host .recruitment-wrap .point-wrap .point .point-inner .point-transform span{position:relative;margin-top:1px;font-size:16px;display:block;transition:.6s;color:#192e4d}:host .recruitment-wrap .point-wrap .point:hover .point-transform{background-color:#333}:host .recruitment-wrap .point-wrap .point:hover .point-transform span{color:#fff}:host .recruitment-wrap .point-wrap .point.active .point-transform{-ms-transform:scale(.3);transform:scale(.3);background-color:#333}:host .recruitment-wrap .point-wrap .point.active .point-transform span{color:#fff;opacity:0}:host .recruitment-wrap .point-wrap .point:last-child::before{content:\"\";border-radius:100px;width:calc(100% + 20px);height:calc(100% + 20px);position:absolute;box-shadow:0 0 0 2px #fff;top:50%;left:50%;opacity:0;-ms-transform:translate(-50%,-50%) scale(.8);transform:translate(-50%,-50%) scale(.8);transition:.6s cubic-bezier(.645,.045,.355,1)}:host .recruitment-wrap .point-wrap .point:last-child .point-transform svg{opacity:0;transition:.6s;position:absolute;top:50%;left:50%;-ms-transform:translate(-50%,-50%) rotate(-180deg);transform:translate(-50%,-50%) rotate(-180deg)}:host .recruitment-wrap .point-wrap .point:last-child.active .point-transform{-ms-transform:scale(1);transform:scale(1)}:host .recruitment-wrap .point-wrap .point:last-child.active .point-transform span{opacity:0;-ms-transform:rotate(180deg);transform:rotate(180deg)}:host .recruitment-wrap .point-wrap .point:last-child.active .point-transform svg{opacity:1;-ms-transform:translate(-50%,-50%) rotate(0);transform:translate(-50%,-50%) rotate(0)}:host .recruitment-wrap .point-wrap .point:last-child.active::before{-ms-transform:translate(-50%,-50%) scale(1);transform:translate(-50%,-50%) scale(1);opacity:1}@media only screen and (max-width:1000px){:host .recruitment-wrap{width:320px;height:320px}:host .recruitment-wrap circle{-ms-transform-origin:50% 50%;transform-origin:50% 50%;-ms-transform:scale(.8);transform:scale(.8)}:host .recruitment-wrap .ring svg path.dash{-ms-transform-origin:50% 50%;transform-origin:50% 50%;-ms-transform:scale(.8) rotate(-295deg) translate(-40px,-40px);transform:scale(.8) rotate(-295deg) translate(-40px,-40px)}:host .recruitment-wrap .plane .plane-wrap{height:40px;-ms-transform-origin:50% 180px;transform-origin:50% 180px}:host .recruitment-wrap .plane .plane-wrap img,:host .recruitment-wrap .plane .plane-wrap svg{height:40px}:host .recruitment-wrap .point-wrap .point{width:40px;height:40px;-ms-transform-origin:50% 180px;transform-origin:50% 180px}}@media only screen and (max-width:768px){:host .recruitment-wrap{left:50%;margin:0;-ms-transform:translateX(-50%);transform:translateX(-50%);height:180px}:host .recruitment-wrap .plane,:host .recruitment-wrap .point-wrap,:host .recruitment-wrap circle,:host .recruitment-wrap svg path.dash{display:none}}@media only screen and (max-width:320px){:host .recruitment-wrap{height:132px}}:host ::ng-deep .tick{box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default;position:relative;z-index:1;line-height:1.4}:host ::ng-deep .tick *{box-sizing:inherit}:host ::ng-deep .tick [data-view]{max-width:100%}:host ::ng-deep .tick span[data-view]{display:inline-block}:host ::ng-deep .tick [data-layout~=pad]{margin:-.25em}:host ::ng-deep .tick [data-layout~=pad]>*{margin:.25em}:host ::ng-deep .tick-flip{position:relative;text-align:center}:host ::ng-deep .tick-flip *{border-radius:inherit;white-space:pre;letter-spacing:inherit;text-indent:inherit}:host ::ng-deep .tick-flip-front{border-bottom-left-radius:0;border-bottom-right-radius:0}:host ::ng-deep .tick-flip-back{border-top-left-radius:0;border-top-right-radius:0}:host ::ng-deep .tick-flip-spacer{display:block;visibility:hidden}:host ::ng-deep .tick-flip-shadow{position:absolute;left:1px;right:1px;top:1px;bottom:1px;color:transparent!important;background:0 0!important}:host ::ng-deep .tick-flip-shadow-top{bottom:calc(50% - 1px)}:host ::ng-deep .tick-flip-shadow-bottom{top:calc(50% + 1px)}:host ::ng-deep .tick-flip-card-shadow{position:absolute;left:.15em;right:.15em;bottom:.125em;height:.5em;background-color:transparent;border-radius:0;opacity:0;-ms-transform-origin:0 100%;transform-origin:0 100%;box-shadow:0 .125em .25em rgba(0,0,0,.5),0 .125em .5em rgba(0,0,0,.75);z-index:0}:host ::ng-deep .tick-flip-card{position:absolute;z-index:1;left:0;top:0;width:100%;height:100%;perspective:4em}:host ::ng-deep .tick-flip-panel-back,:host ::ng-deep .tick-flip-panel-front{position:absolute;left:0;width:100%;height:51%;-webkit-backface-visibility:hidden;backface-visibility:hidden;transform-style:preserve-3d}:host ::ng-deep .tick-flip-panel-back-text,:host ::ng-deep .tick-flip-panel-front-text{position:absolute;left:-1px;top:0;right:-1px;height:100%;overflow:hidden}:host ::ng-deep .tick-flip-panel-text-wrapper{position:absolute;left:0;top:0;right:0;height:100%}:host ::ng-deep .tick-flip-panel-back-text .tick-flip-panel-text-wrapper{height:200%;top:-100%}:host ::ng-deep .tick-flip-panel-front{-ms-transform-origin:center bottom;transform-origin:center bottom;top:0;z-index:2;box-shadow:inset 0 1px rgba(255,255,255,.05)}:host ::ng-deep .tick-flip-panel-back{-ms-transform-origin:center top;transform-origin:center top;top:50%;z-index:1;box-shadow:inset 0 -1px rgba(0,0,0,.1)}:host ::ng-deep .tick-flip-panel-back::after{content:\"\";z-index:1;content:\"\";position:absolute;left:0;top:0;width:100%;height:100%;background-image:linear-gradient(180deg,rgba(0,0,0,0) 1px,rgba(0,0,0,.15) 1px,transparent 30%)}:host ::ng-deep .tick-flip-panel-back-shadow{z-index:2}:host ::ng-deep .tick-flip-panel-back-highlight,:host ::ng-deep .tick-flip-panel-back-shadow{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}:host ::ng-deep .tick-flip-panel-back-highlight,:host ::ng-deep .tick-flip-panel-back-shadow,:host ::ng-deep .tick-flip-panel-front-shadow{position:absolute;left:0;top:0;right:0;bottom:0;opacity:0}:host ::ng-deep .tick-flip-panel-front-shadow{background-image:linear-gradient(to top,rgba(0,0,0,.8),rgba(0,0,0,.3))}:host ::ng-deep .tick-flip-panel-back-shadow{background-image:linear-gradient(to bottom,rgba(0,0,0,.7),rgba(0,0,0,.5))}:host ::ng-deep .tick-flip-panel-back-highlight{z-index:3;background-image:linear-gradient(to bottom,rgba(255,255,255,.15),rgba(255,255,255,.3))}:host ::ng-deep .tick [data-style*=\"shadow:inner\"],:host ::ng-deep .tick [data-style*=\"shadow:inner\"] .tick-flip-card-shadow{box-shadow:none}:host ::ng-deep .tick [data-style*=\"shadow:none\"] .tick-flip-card-shadow,:host ::ng-deep .tick [data-style*=\"shadow:none\"] .tick-flip-panel-back,:host ::ng-deep .tick [data-style*=\"shadow:none\"] .tick-flip-panel-front,:host ::ng-deep .tick [data-style*=\"shadow:none\"] .tick-flip-shadow{box-shadow:none}:host ::ng-deep .tick [data-style*=\"shadow:none\"] .tick-flip-back::after,:host ::ng-deep .tick [data-style*=\"shadow:none\"] .tick-flip-panel-back-shadow,:host ::ng-deep .tick [data-style*=\"shadow:none\"] .tick-flip-panel-back-text::after,:host ::ng-deep .tick [data-style*=\"shadow:none\"] .tick-flip-panel-front-shadow{background-image:none}:host ::ng-deep .tick [data-style*=\"rounded:none\"]{border-radius:0}:host ::ng-deep .tick [data-style*=\"rounded:panels\"] .tick-flip-front,:host ::ng-deep .tick [data-style*=\"rounded:panels\"] .tick-flip-shadow-bottom{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}:host ::ng-deep .tick [data-style*=\"rounded:panels\"] .tick-flip-back,:host ::ng-deep .tick [data-style*=\"rounded:panels\"] .tick-flip-panel-back::after,:host ::ng-deep .tick [data-style*=\"rounded:panels\"] .tick-flip-shadow-top{border-top-left-radius:inherit;border-top-right-radius:inherit}:host ::ng-deep .tick-flip{margin-left:.0625em;margin-right:.0625em;min-width:1.125em;border-radius:.125em;letter-spacing:.25em;text-indent:.25em}:host ::ng-deep .tick-flip-shadow{box-shadow:0 .125em .3125em rgba(0,0,0,.25),0 .02125em .06125em rgba(0,0,0,.25)}:host ::ng-deep .tick-flip-panel{color:#192e4d;background-color:#fff}"]
    })
], VfaSliderComponent);

let VfaSliderModule = class VfaSliderModule {
};
VfaSliderModule = __decorate([
    NgModule({
        declarations: [VfaSliderComponent],
        imports: [
            CommonModule,
            HttpClientModule
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
