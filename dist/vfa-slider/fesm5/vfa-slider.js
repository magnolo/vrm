import { __decorate, __awaiter, __generator, __param } from 'tslib';
import { ɵɵdefineInjectable, Injectable, Renderer2, ChangeDetectorRef, Inject, Input, ViewChild, ViewChildren, Component, NgModule } from '@angular/core';
import { DOCUMENT, CommonModule } from '@angular/common';
import { HttpHeaders, HttpClient, HttpClientModule } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import Tick from '@pqina/flip';

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

var ITEMS = [
    {
        title: 'Impfstoff-Design, Tierstudien',
        value: 152,
        text: 'Design: Was vom Virus und welche Zusatzstoffe sollen enthalten sein? Anschließend Erprobung des Impfstoffs mit Tieren auf Verträglichkeit und Wirksamkeit.',
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
        title: 'Erprobung in Studien mit Freiwilligen',
        header: 'Phase II',
        value: 10,
        list: [
            'ca. 50 - 500 Freiwillige',
            'Vergleich von einmaliger und zweimaliger Impfung sowie Scheinimpfung (Placebo)',
            'zu prüfen: richtige Dosierung, Immunantwort, Verträglichkeit.',
        ],
        backgroundColor: '#1682C3',
    },
    {
        title: 'Erprobung in Studien mit Freiwilligen',
        header: 'Phase III ohne Rolling Review',
        value: 6,
        list: [
            'ca. 10.000 - 60.000 Freiwillige',
            'Vergleich mit Scheinimpfung (Placebo)',
            'zu prüfen: Zuverlässigkeit des Schutzes, Verträglichkeit',
        ],
        text: 'Es sind noch keine Zulassungsunterlagen eingereicht.',
        info: "<b>Rolling Review</b><br />Vorgezogene Pr\u00FCfung eines Teils der Zulassungsunterlagen: \u200BW\u00E4hrend die Phase-III-Studie noch l\u00E4uft, arbeitet die European Medicines Agency (EMA) schon die Ergebnisse der Tierstudien und der Phase-I- und Phase-II-Studien durch.",
        backgroundColor: '#1682C3',
    },
    {
        title: 'Erprobung in Studien mit Freiwilligen',
        header: 'Phase III mit Rolling Review',
        list: [
            'ca. 10.000 – 60.000 Freiwillige',
            'Vergleich mit Scheinimpfung (Placebo)',
            'zu prüfen: Zuverlässigkeit des Schutzes, Verträglichkeit',
        ],
        value: 0,
        info: "<b>Rolling Review</b><br />Vorgezogene Pr\u00FCfung eines Teils der Zulassungsunterlagen: \u200BW\u00E4hrend die Phase-III-Studie noch l\u00E4uft, arbeitet die European Medicines Agency (EMA) schon die Ergebnisse der Tierstudien und der Phase-I- und Phase-II-Studien durch.",
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

var httpOptions = {
    headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
    }),
};
var VfaSliderComponent = /** @class */ (function () {
    function VfaSliderComponent(renderer, cdr, sanitize, httpClient, document) {
        this.renderer = renderer;
        this.cdr = cdr;
        this.sanitize = sanitize;
        this.httpClient = httpClient;
        this.document = document;
        this.date = '04.09.2020';
        this.content = ITEMS;
        this.loaded = false;
        this.activeIdx = 0;
        this.lastIdx = 0;
        this.embedModalActive = false;
        this.copiedSuccess = false;
        this.iframeCode = "<iframe src=\"https://vfa.23degrees.io/embed/index.html\" style=\"border:none;width: 100%; height: 100%; min-height: 568px\"></iframe>";
        this.svgs = {
            plane: 'M7 30L0 -2.62268e-06L30 15L60 30L30 45L-2.62268e-06 60L7 30Z',
            arrow: 'M12 21L21.5 30L49 -4.5897e-07L59.5 12.5L20 55L-1.48619e-06 34L12 21Z',
        };
        this.title = 'vrm';
    }
    VfaSliderComponent.prototype.ngOnInit = function () {
        if (!this.values) {
            this.getData();
        }
    };
    VfaSliderComponent.prototype.getData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, e_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.httpClient
                                .get('https://vfa.23d.gr/api/values', httpOptions)
                                .toPromise()];
                    case 1:
                        response = _a.sent();
                        response.values.forEach(function (value, idx) { return (_this.content[idx].value = value); });
                        this.date = response.date;
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        console.log(e_1);
                        return [3 /*break*/, 3];
                    case 3:
                        this.setActive(0);
                        setTimeout(function () {
                            _this.loaded = true;
                            _this.cdr.detectChanges();
                        }, 500);
                        return [2 /*return*/];
                }
            });
        });
    };
    VfaSliderComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
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
            if (changes.values && !changes.values.isFirstChange()) {
                this.setActive(this.activeIdx);
            }
        }
        if (changes.date) {
            this.cdr.detectChanges();
        }
    };
    VfaSliderComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.flipper = Tick.DOM.create(this.number.nativeElement, {
            value: 0,
        });
        var arc = this.generateArc(200, 200, 200, 25, 335);
        this.renderer.setAttribute(this.arc.nativeElement, 'd', arc);
        if (this.values) {
            this.setActive(0);
            setTimeout(function () {
                _this.loaded = true;
                _this.cdr.detectChanges();
            }, 500);
        }
    };
    VfaSliderComponent.prototype.setActive = function (idx) {
        this.lastIdx = this.activeIdx;
        this.activeIdx = idx;
        // const rotation = (360 / this.content.length) * this.activeIdx;
        var rotation = 360 - ((360 / this.content.length) * this.activeIdx + 25);
        var difference = this.lastIdx - this.activeIdx;
        if (difference < 0) {
            difference = difference * -1;
        }
        var animationDuration = 500 + 300 * difference;
        var plane = this.planeWrap.nativeElement;
        var path = this.ringBg.nativeElement;
        var length = path.getBoundingClientRect().height > 0 && path.getTotalLength
            ? path.getTotalLength()
            : 0;
        var opacityDelay = 0;
        if (this.activeIdx === this.content.length - 1) {
            opacityDelay = 300 * difference;
        }
        if (plane) {
            this.renderer.setStyle(plane, 'transition', animationDuration + "ms transform cubic-bezier(0.645, 0.045, 0.355, 1)");
            this.renderer.setStyle(plane, 'transform', 'translateY(-50%) rotate(' + rotation + 'deg)');
            this.renderer.setStyle(this.svgArrow.nativeElement, 'transition', "opacity 500ms " + opacityDelay + "ms cubic-bezier(0.645, 0.045, 0.355, 1)");
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
    };
    VfaSliderComponent.prototype.transform = function (idx) {
        return this.sanitize.bypassSecurityTrustStyle('translateY(-50%) rotate(' +
            (360 - ((360 / this.content.length) * idx + 25)) +
            'deg)');
    };
    VfaSliderComponent.prototype.transformInner = function (idx) {
        var scale = '';
        if (idx === this.activeIdx && idx === this.content.length - 1) {
            scale = ' scale(1.2)';
        }
        return this.sanitize.bypassSecurityTrustStyle('rotate(' +
            (360 - ((-360 / this.content.length) * idx - 25)) +
            'deg)' +
            scale);
    };
    VfaSliderComponent.prototype.generateArc = function (x, y, radius, startAngle, endAngle) {
        var start = this.polarToCartesian(x, y, radius, endAngle);
        var end = this.polarToCartesian(x, y, radius, startAngle);
        var largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';
        var d = [
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
    };
    VfaSliderComponent.prototype.polarToCartesian = function (centerX, centerY, radius, angleInDegrees) {
        var angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
        return {
            x: centerX + radius * Math.cos(angleInRadians),
            y: centerY + radius * Math.sin(angleInRadians),
        };
    };
    VfaSliderComponent.prototype.copyToClipboard = function () {
        // Create a <textarea> element
        var element = this.document.createElement('textarea');
        // Set its value to the string that you want copied
        element.value = this.iframeCode;
        // Make it readonly to be tamper-proof
        // element.setAttribute('readonly', '');
        element.readOnly = false;
        element.contentEditable = 'true';
        element.style.position = 'absolute';
        element.style.left = '-9001px';
        this.document.body.appendChild(element);
        // Check if there is any content selected previously, mark as false to know no selection existed before
        var selected = this.document.getSelection().rangeCount > 0
            ? this.document.getSelection().getRangeAt(0)
            : false;
        // iOS > 10 fix
        if (navigator.userAgent.match(/ipad|ipod|iphone/i)) {
            var range = this.document.createRange();
            range.selectNodeContents(element);
            var selection = this.document.getSelection();
            selection.removeAllRanges();
            selection.addRange(range);
            element.focus();
            element.setSelectionRange(0, element.value.length);
        }
        else {
            element.select();
        }
        // Copy - only works as a result of a user action (e.g. click events)
        this.document.execCommand('copy');
        this.document.body.removeChild(element);
        if (selected) {
            // If a selection existed before copying
            this.document.getSelection().removeAllRanges(); // Unselect everything on the HTML document
            this.document.getSelection().addRange(selected); // Restore the original selection
        }
        this.copiedSuccess = true;
        this.cdr.detectChanges();
    };
    VfaSliderComponent.prototype.toggleEmbedView = function (open) {
        this.embedModalActive = open;
        if (!this.embedModalActive) {
            this.copiedSuccess = false;
        }
        this.cdr.detectChanges();
    };
    VfaSliderComponent.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ChangeDetectorRef },
        { type: DomSanitizer },
        { type: HttpClient },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
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
            template: "<section\n  class=\"recruitment-process\"\n  #section>\n  <div\n    class=\"loader\"\n    *ngIf=\"!loaded\">\n    <div class=\"lds-ring\">\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n    </div>\n  </div>\n  <div\n    class=\"container\"\n    (click)=\"embedModalActive ? toggleEmbedView(false): null\"\n    [class.loaded]=\"loaded\">\n\n    <div class=\"recruitment-wrap\">\n      <div class=\"plane\">\n        <div\n          #planeWrap\n          style=\"position: relative;\"\n          class=\"plane-wrap reverse\">\n          <svg\n            id=\"arrow\"\n            #svgArrow\n            width=\"40\"\n            height=\"40\"\n            viewBox=\"0 0 60 60\"\n            fill=\"none\"\n            xmlns=\"http://www.w3.org/2000/svg\">\n            <path\n              #arrow\n              [attr.d]=\"svgs.plane\">\n\n            </path>\n          </svg>\n          <svg\n            id=\"check\"\n            style=\"position: absolute; top: 50%; left: 50%; transform: translate(-52%, -52%) rotate(-20deg)\"\n            #svgCheck\n            width=\"40\"\n            height=\"40\"\n            viewBox=\"0 0 60 60\"\n            fill=\"none\"\n            xmlns=\"http://www.w3.org/2000/svg\">\n            <path\n              #arrow\n              [attr.d]=\"svgs.arrow\">\n\n            </path>\n          </svg>\n        </div>\n      </div>\n\n      <div class=\"center\">\n        <div class=\"center-imgs\">\n          <!-- *ngFor=\"let item of content; let idx = index\" -->\n          <div class=\"center-img\">\n            <div #number>\n              <div\n                data-repeat=\"true\"\n                data-transform=\"arrive(4, 0.01, false, false) -> round ->  pad('000') -> split -> delay(rtl, 10, 20)\">\n                <span data-view=\"flip\"></span>\n              </div>\n\n            </div>\n            <div class=\"hint\">Impfstoffe</div>\n          </div>\n        </div>\n      </div>\n      <div class=\"ring\">\n        <svg>\n          <circle\n            #ringBg\n            class=\"ring-bg animate\"\n            style=\"stroke-dashoffset:1256px; stroke-dasharray: 1256px;\"\n            cx=\"50%\"\n            cy=\"50%\"\n            r=\"200\"></circle>\n          <!-- <circle\n            class=\"dash\"\n            cx=\"50%\"\n            cy=\"50%\"\n            r=\"200\"></circle> -->\n          <path\n            class=\"dash\"\n            #arc></path>\n        </svg>\n      </div>\n      <div class=\"point-wrap\">\n        <!-- transform: rotate(#{(-360 / 5) * $i}deg), -->\n        <div\n          class=\"point\"\n          (click)=\"setActive(idx)\"\n          [class.active]=\"idx === activeIdx\"\n          *ngFor=\"let item of content; let idx = index\"\n          [style.transform]=\"transform(idx)\">\n          <div\n            class=\"point-inner\"\n            style=\"transition: transform 300ms ease\"\n            [style.transform]=\"transformInner(idx)\">\n            <div class=\"point-transform\">\n              <span>{{ idx + 1 }}</span>\n              <svg\n                *ngIf=\"idx === content.length-1\"\n                width=\"15\"\n                height=\"12\"\n                viewBox=\"0 0 15 12\"\n                fill=\"none\"\n                xmlns=\"http://www.w3.org/2000/svg\">\n                <path\n                  d=\"M4.99997 8.58597L1.70697 5.29297L0.292969 6.70697L4.99997 11.414L14.707 1.70697L13.293 0.292969L4.99997 8.58597Z\"\n                  fill=\"black\"></path>\n              </svg>\n\n            </div>\n          </div>\n        </div>\n\n      </div>\n    </div>\n\n    <div\n      #recruitmentText\n      class=\"recruitment-text\">\n      <div\n        class=\"recruitment-copy\"\n        [style.transform]=\"'translateX(-'+ (100 * activeIdx) +'%)'\">\n        <div\n          class=\"step\"\n          #steps\n          [class.next]=\"idx > activeIdx\"\n          [class.active]=\"idx === activeIdx\"\n          *ngFor=\"let item of content; let idx = index\">\n          <h3>{{ item.title }}</h3>\n          <div\n            class=\"sub-info\"\n            *ngIf=\"item.header\">\n            <h4>{{ item.header }}</h4>\n            <div\n              *ngIf=\"item.info\"\n              class=\"info\">\n              <div class=\"info-icon\">\n                <svg\n                  width=\"4\"\n                  height=\"8\"\n                  viewBox=\"0 0 4 8\"\n                  fill=\"none\"\n                  xmlns=\"http://www.w3.org/2000/svg\">\n                  <path\n                    d=\"M1 0.75C1 0.338 1.338 0 1.75 0H2.25C2.662 0 3 0.338 3 0.75V1.25C3 1.662 2.662 2 2.25 2H1.75C1.55133 1.99921 1.36102 1.91994 1.22054 1.77946C1.08006 1.63898 1.00079 1.44867 1 1.25V0.75Z\"\n                    fill=\"black\"></path>\n                  <path\n                    d=\"M4 8H0V7H1V4H0V3H3V7H4V8Z\"\n                    fill=\"black\"></path>\n                </svg>\n              </div>\n              <div class=\"info-tooltip left\">\n                <p [innerHTML]=\"item.info\"></p>\n              </div>\n            </div>\n          </div>\n\n          <p>{{ item.text}}</p>\n          <ul *ngIf=\"item.list && item.list.length > 0\">\n            <li *ngFor=\"let entry of item.list\">{{ entry }}</li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"recruitment-controls\">\n        <div\n          class=\"arrow prev\"\n          (click)=\"activeIdx === 0 ? setActive(content.length - 1) :setActive(activeIdx -1)\"></div>\n        <div class=\"dots\">\n          <div\n            class=\"dot\"\n            (click)=\"setActive(idx)\"\n            [class.active]=\"idx === activeIdx\"\n            *ngFor=\"let item of content; let idx  = index\"></div>\n        </div>\n        <div\n          class=\"arrow next\"\n          (click)=\"activeIdx + 1 > content.length - 1 ? setActive(0) : setActive(activeIdx+1)\"></div>\n      </div>\n    </div>\n\n  </div>\n  <div class=\"footer\">\n    <!-- https://vfa.23degrees.io/embed/index.html -->\n    <div class=\"footer-share\">\n      <div\n        class=\"share-button\"\n        title=\"Code zum einbinden...\"\n        (click)=\"toggleEmbedView(!embedModalActive)\">\n        <svg\n          width=\"18\"\n          height=\"18\"\n          viewBox=\"0 0 18 18\"\n          fill=\"none\"\n          xmlns=\"http://www.w3.org/2000/svg\">\n          <path\n            d=\"M0 9C0 10.654 1.346 12 3 12C3.794 12 4.512 11.685 5.049 11.18L11.04 14.604C11.022 14.734 11 14.864 11 15C11 16.654 12.346 18 14 18C15.654 18 17 16.654 17 15C17 13.346 15.654 12 14 12C13.206 12 12.488 12.315 11.951 12.82L5.96 9.397C5.978 9.266 6 9.136 6 9C6 8.864 5.978 8.734 5.96 8.603L11.951 5.18C12.488 5.685 13.206 6 14 6C15.654 6 17 4.654 17 3C17 1.346 15.654 0 14 0C12.346 0 11 1.346 11 3C11 3.136 11.022 3.266 11.04 3.397L5.049 6.82C4.496 6.29468 3.76273 6.00123 3 6C1.346 6 0 7.346 0 9Z\"\n            fill=\"black\"></path>\n        </svg>\n\n      </div>\n    </div>\n    <div class=\"footer-info\">\n      <img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAAAuCAMAAABam6YzAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAvFQTFRFAAAA////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////rkHhmgAAAPt0Uk5TAAwnAwll1P3/6BQauf4Gx/OjbQhy2j3RRiH16kFQv1cWAhUvNAcTCsMPDQEEHE5VRyqFsqFpKPhv5+PC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\">\n      <div class=\"note\">\n          Stand {{ date }}, Quelle: Verband der forschenden Pharma-Unternehmen (vfa) + WHO\n      </div>\n    </div>\n\n  </div>\n</section>\n\n<div\n  class=\"iframe-overlay\"\n  [class.active]=\"embedModalActive\">\n  <div class=\"iframe-header\">\n    <h2 style=\"margin-top: 0px\">Embed code</h2>\n    <div\n      class=\"close\"\n      (click)=\"toggleEmbedView(false)\">\n\n      <svg\n        width=\"9\"\n        height=\"9\"\n        viewBox=\"0 0 9 9\"\n        fill=\"none\"\n        xmlns=\"http://www.w3.org/2000/svg\">\n        <path\n          d=\"M5.31193 4.2513L8.28068 1.28255C8.42157 1.1419 8.50083 0.951045 8.501 0.751964C8.50118 0.552882 8.42226 0.361885 8.28161 0.220989C8.14097 0.0800923 7.95011 0.000838857 7.75103 0.000663042C7.55194 0.000487227 7.36095 0.0794034 7.22005 0.220051L4.2513 3.1888L1.28255 0.220051C1.14165 0.0791548 0.950558 0 0.751301 0C0.552044 0 0.360947 0.0791548 0.220051 0.220051C0.0791548 0.360947 0 0.552044 0 0.751301C0 0.950558 0.0791548 1.14165 0.220051 1.28255L3.1888 4.2513L0.220051 7.22005C0.0791548 7.36095 0 7.55204 0 7.7513C0 7.95056 0.0791548 8.14165 0.220051 8.28255C0.360947 8.42345 0.552044 8.5026 0.751301 8.5026C0.950558 8.5026 1.14165 8.42345 1.28255 8.28255L4.2513 5.3138L7.22005 8.28255C7.36095 8.42345 7.55204 8.5026 7.7513 8.5026C7.95056 8.5026 8.14165 8.42345 8.28255 8.28255C8.42345 8.14165 8.5026 7.95056 8.5026 7.7513C8.5026 7.55204 8.42345 7.36095 8.28255 7.22005L5.31193 4.2513Z\"\n          fill=\"black\"></path>\n      </svg>\n    </div>\n  </div>\n\n  <pre style=\"white-space: pre-wrap;\">{{ iframeCode }}</pre>\n  <div class=\"button-wrapper\">\n    <div\n      class=\"buttoner\"\n      [class.success]=\"copiedSuccess\"\n      (click)=\"copyToClipboard()\">\n      <svg\n        width=\"15\"\n        *ngIf=\"!copiedSuccess\"\n        height=\"19\"\n        viewBox=\"0 0 15 19\"\n        fill=\"none\"\n        xmlns=\"http://www.w3.org/2000/svg\">\n        <path\n          d=\"M10 6H4V4H10V6Z\"\n          fill=\"black\"></path>\n        <path\n          d=\"M10 10H4V8H10V10Z\"\n          fill=\"black\"></path>\n        <path\n          d=\"M4 14H10V12H4V14Z\"\n          fill=\"black\"></path>\n        <path\n          fill-rule=\"evenodd\"\n          clip-rule=\"evenodd\"\n          d=\"M0 18V0H14V4H18V22H4V18H0ZM12 16V2H2V16H12ZM14 6V18H6V20H16V6H14Z\"\n          fill=\"black\"></path>\n      </svg>\n      <svg\n        *ngIf=\"copiedSuccess\"\n        width=\"15\"\n        height=\"12\"\n        viewBox=\"0 0 15 12\"\n        fill=\"none\"\n        xmlns=\"http://www.w3.org/2000/svg\">\n        <path\n          d=\"M4.99997 8.58597L1.70697 5.29297L0.292969 6.70697L4.99997 11.414L14.707 1.70697L13.293 0.292969L4.99997 8.58597Z\"\n          fill=\"black\"></path>\n      </svg>\n      {{ !copiedSuccess ?  'Kopieren' : 'Kopiert' }}\n    </div>\n  </div>\n\n</div>\n",
            styles: ["@import url(https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap);:host{display:block;width:100%;height:100%;font-family:\"Open Sans\",sans-serif;position:relative}:host .loader{position:absolute;z-index:5;height:100%;width:100%;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;opacity:0;-webkit-animation:.5s cubic-bezier(.5,0,.5,1) .5s forwards fadein;animation:.5s cubic-bezier(.5,0,.5,1) .5s forwards fadein}@-webkit-keyframes fadein{0%{opacity:0}100%{opacity:1}}@keyframes fadein{0%{opacity:0}100%{opacity:1}}:host .lds-ring{display:inline-block;position:relative;width:80px;height:80px}:host .lds-ring div{box-sizing:border-box;display:block;position:absolute;width:64px;height:64px;margin:8px;border:8px solid #fff;border-radius:50%;-webkit-animation:1.2s cubic-bezier(.5,0,.5,1) infinite lds-ring;animation:1.2s cubic-bezier(.5,0,.5,1) infinite lds-ring;border-color:#fff transparent transparent}:host .lds-ring div:nth-child(1){-webkit-animation-delay:-.45s;animation-delay:-.45s}:host .lds-ring div:nth-child(2){-webkit-animation-delay:-.3s;animation-delay:-.3s}:host .lds-ring div:nth-child(3){-webkit-animation-delay:-.15s;animation-delay:-.15s}@-webkit-keyframes lds-ring{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes lds-ring{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}:host *{box-sizing:border-box;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}:host .iframe-overlay{position:fixed;bottom:5%;left:60px;-ms-transform:translateX(10%) translateY(0);transform:translateX(10%) translateY(0);width:100%;max-width:500px;padding:20px;z-index:5;background-color:#fff;color:#192e4d;border-radius:4px;box-shadow:0 5px 20px rgba(0,0,0,.3);pointer-events:none;transition:.3s ease-out;opacity:0}:host .iframe-overlay .iframe-header{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}:host .iframe-overlay .iframe-header .close{cursor:pointer}:host .iframe-overlay h2{margin-top:0}:host .iframe-overlay pre{white-space:pre-wrap;padding:10px;background:#e8e8e8;border-radius:3px;word-break:break-all;font-family:monospace,sans-serif;font-size:13px;margin:0 0 1em}:host .iframe-overlay.active{pointer-events:initial;-ms-transform:translateX(0) translateY(0);transform:translateX(0) translateY(0);opacity:1}:host .buttoner{background:#e8e8e8;border-radius:3px;padding:5px 10px;color:#192e4d;cursor:pointer;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}:host .buttoner svg{margin-right:5px}:host .buttoner svg path{fill:currentColor}:host .buttoner.success{box-shadow:none;background:#4bb543;color:#fff}:host .button-wrapper{display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end}:host section{width:100%;position:relative}:host .recruitment-process{width:100%;position:relative;padding:50px 0;transition:.5s;height:100%;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;-ms-flex-direction:column;flex-direction:column;background:#0f6292}:host .recruitment-process .container{width:100%;position:relative;margin:0 auto;display:-ms-flexbox;display:flex;max-width:1200px;height:100%;-ms-flex-align:center;align-items:center;opacity:0;transition:opacity 250ms ease-out}:host .recruitment-process .container .grid-left{position:relative;width:400px;float:left}:host .recruitment-process .container.loaded{opacity:1}:host .recruitment-process .footer{width:100%;color:#fff;padding:0 60px;text-align:right;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}:host .recruitment-process .footer .footer-share{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}:host .recruitment-process .footer .footer-share .share-button{border-radius:100px;width:32px;height:32px;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;transition:.3s;cursor:pointer}:host .recruitment-process .footer .footer-share .share-button svg path{fill:currentColor;transition:fill .3s}:host .recruitment-process .footer .footer-share .share-button:hover{background-color:#fff;color:#192e4d}:host .recruitment-process .footer .footer-info .note{margin-top:5px;opacity:.5;font-size:.8em}@media only screen and (max-width:768px){:host .iframe-overlay{left:2%;max-width:96%}:host .recruitment-process .footer{margin-top:0;text-align:center;padding:0 15px;-ms-flex-direction:column;flex-direction:column}:host .recruitment-process .footer img{height:32px}:host .recruitment-process{padding:0 0 20px}:host .recruitment-process .container{padding:0 30px;width:100%;-ms-flex-direction:column;flex-direction:column}}@media only screen and (max-width:340px){:host .recruitment-process .footer{margin-top:0}:host .recruitment-process .footer .footer-info .note{margin-top:5px;opacity:.5;font-size:11px}:host .recruitment-process .footer .footer-share .share-button{width:23px;height:23px}:host .recruitment-process .footer .footer-share .share-button svg{width:15px;height:15px}}@media only screen and (max-width:1260px){:host .recruitment-process .container{padding:0 30px}}@media only screen and (max-width:578px){:host .recruitment-process .container{padding:0 15px}}@media only screen and (max-width:320px){:host .recruitment-process{padding:0 0 10px}}:host .recruitment-text{position:relative;border-radius:10px;overflow:hidden;transition:.5s;color:#fff;display:-ms-flexbox;display:flex;-ms-flex:1 0 auto;flex:1 0 auto;padding-left:50px;-ms-flex-direction:column;flex-direction:column}:host .recruitment-text .recruitment-copy{width:100%;position:relative;display:-ms-flexbox;display:flex;height:360px}@media only screen and (min-width:769px){:host .recruitment-text .recruitment-copy{-ms-transform:translateX(0)!important;transform:translateX(0)!important}}:host .recruitment-text .recruitment-copy .step{width:100%;position:absolute;bottom:0;left:0;padding:60px 70px 100px;height:100%;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;pointer-events:none;min-width:100%;max-width:100%}:host .recruitment-text .recruitment-copy .step>*{visibility:hidden;opacity:0;-ms-transform:translateX(-50px);transform:translateX(-50px);transition:1s}:host .recruitment-text .recruitment-copy .step>:nth-child(2){transition-delay:.1s}:host .recruitment-text .recruitment-copy .step.active{pointer-events:initial}:host .recruitment-text .recruitment-copy .step.active>*{visibility:visible;opacity:1;-ms-transform:translateX(0);transform:translateX(0)}:host .recruitment-text .recruitment-copy .step.next>*{visibility:hidden;opacity:0;-ms-transform:translateX(50px);transform:translateX(50px)}:host .recruitment-text .recruitment-copy .step h3,:host .recruitment-text .recruitment-copy .step p{margin:0}:host .recruitment-text .recruitment-copy .step h3{font-weight:500;font-size:24px;margin-bottom:20px}:host .recruitment-text .recruitment-copy .step .sub-info{position:relative;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;z-index:1}@media only screen and (max-width:768px){:host .recruitment-text .recruitment-copy .step .sub-info{-ms-flex-pack:center;justify-content:center}}:host .recruitment-text .recruitment-copy .step .sub-info h4{margin:8px 0}:host .recruitment-text .recruitment-copy .step .sub-info .info{position:relative;margin-left:5px}:host .recruitment-text .recruitment-copy .step .sub-info .info .info-icon{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;border-radius:100px;width:18px;height:18px;background:#fff;color:#192e4d;cursor:help}:host .recruitment-text .recruitment-copy .step .sub-info .info .info-tooltip{z-index:1;opacity:0;padding:10px 20px;background:#fff;color:#192e4d;position:absolute;bottom:100%;left:50%;border-radius:3px;-ms-transform:translate(-50%,-20px);transform:translate(-50%,-20px);transition:.3s ease-out;font-size:12px;box-shadow:0 5px 20px rgba(0,0,0,.3);width:300px;text-align:left}:host .recruitment-text .recruitment-copy .step .sub-info .info .info-tooltip p{font-size:13px;line-height:1.6em}:host .recruitment-text .recruitment-copy .step .sub-info .info .info-tooltip::after{content:\" \";width:0;height:0;border-style:solid;border-width:8px 8px 0;border-color:#fff transparent transparent;position:absolute;left:50%;top:100%;-ms-transform:translateX(-50%);transform:translateX(-50%)}:host .recruitment-text .recruitment-copy .step .sub-info .info .info-tooltip.left{bottom:initial;left:100%;-ms-transform:translate(20px,-50%);transform:translate(20px,-50%);top:50%}:host .recruitment-text .recruitment-copy .step .sub-info .info .info-tooltip.left::after{border-width:8px 8px 8px 0;border-color:transparent #fff transparent transparent;position:absolute;top:50%;right:100%;-ms-transform:translateY(-50%);transform:translateY(-50%);left:initial}:host .recruitment-text .recruitment-copy .step .sub-info .info:hover .info-tooltip{-ms-transform:translate(-50%,-10px);transform:translate(-50%,-10px);opacity:1;transition:.3s linear}:host .recruitment-text .recruitment-copy .step .sub-info .info:hover .info-tooltip.left{-ms-transform:translate(10px,-50%);transform:translate(10px,-50%)}@media only screen and (max-width:1260px){:host .recruitment-text .recruitment-copy .step .sub-info .info .info-tooltip{left:initial!important;right:50%!important;top:50%!important;-ms-transform:translate(50%,-50%)!important;transform:translate(50%,-50%)!important}:host .recruitment-text .recruitment-copy .step .sub-info .info .info-tooltip::after{display:none}}:host .recruitment-text .recruitment-copy .step p,:host .recruitment-text .recruitment-copy .step ul{font-size:16px;line-height:24px}:host .recruitment-text .recruitment-copy .step ul{margin-bottom:0}@media only screen and (max-width:768px){:host .recruitment-text .recruitment-copy .step .sub-info .info .info-tooltip{left:50%!important;top:50%!important;-ms-transform:translate(-50%,-50%)!important;transform:translate(-50%,-50%)!important;position:fixed}:host .recruitment-text .recruitment-copy .step .sub-info .info .info-tooltip::after{display:none}:host .recruitment-text .recruitment-copy{height:280px}}:host .recruitment-text .recruitment-controls{width:100%;height:80px;position:absolute;bottom:0;left:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;border-radius:0 0 10px 10px}:host .recruitment-text .recruitment-controls .arrow{display:none;width:16px;height:16px;border-top:3px solid #fff;border-left:3px solid #fff;-ms-transform:rotate(-45deg);transform:rotate(-45deg);transition:.3s;cursor:pointer}:host .recruitment-text .recruitment-controls .arrow:hover{border-color:#737373}:host .recruitment-text .recruitment-controls .arrow.next{-ms-transform:rotate(135deg);transform:rotate(135deg)}:host .recruitment-text .recruitment-controls .dots{margin:0 10px;position:relative}:host .recruitment-text .recruitment-controls .dots .dot{width:16px;height:16px;background-color:#e6e6e6;border-radius:50%;position:relative;float:left;margin:0 5px;transition:.3s;cursor:pointer;opacity:.5}:host .recruitment-text .recruitment-controls .dots .dot:hover{opacity:1}:host .recruitment-text .recruitment-controls .dots .dot.active{background-color:#fff;opacity:1;-ms-transform:scale(1.2);transform:scale(1.2)}@media only screen and (max-width:1260px){:host .recruitment-text .recruitment-copy .step{padding:40px 40px 100px}:host .recruitment-text .recruitment-controls{height:70px}:host .recruitment-wrap{margin-left:20px}}@media only screen and (max-width:1000px){:host .recruitment-text .recruitment-copy .step{padding:30px 30px 70px}:host .recruitment-text .recruitment-copy .step h3{font-size:22px;margin-bottom:16px}:host .recruitment-text .recruitment-copy .step p,:host .recruitment-text .recruitment-copy .step ul{font-size:14px;line-height:20px}:host .recruitment-text .recruitment-controls{height:50px}}@media only screen and (max-width:768px){:host .recruitment-text{width:100%;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;text-align:center;-ms-flex-pack:center;justify-content:center;padding-left:0;max-width:100%}:host .recruitment-text .recruitment-copy{transition:transform .5s;height:initial}:host .recruitment-text .recruitment-copy .step{position:static;padding:10px}:host .recruitment-text .recruitment-copy .step ul{text-align:left}:host .recruitment-text .recruitment-controls{position:relative}}@media only screen and (max-width:340px){:host .recruitment-text .recruitment-copy .step{padding:10px 0 20px}}:host .recruitment-wrap{width:400px;height:400px;position:relative}:host .recruitment-wrap .plane{position:absolute;width:100%;height:100%;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;z-index:5;pointer-events:none}:host .recruitment-wrap .plane .plane-wrap{height:60px;display:inline-block;-ms-transform-origin:50% 230px;transform-origin:50% 230px;-ms-transform:translateY(-50%) rotate(0);transform:translateY(-50%) rotate(0);transition:1s cubic-bezier(.645,.045,.355,1);position:relative}:host .recruitment-wrap .plane .plane-wrap.reverse img,:host .recruitment-wrap .plane .plane-wrap.reverse svg{-ms-transform:scaleX(-1);transform:scaleX(-1)}:host .recruitment-wrap .plane .plane-wrap.shadow img,:host .recruitment-wrap .plane .plane-wrap.shadow svg{filter:drop-shadow(0 -15px 0 rgba(0, 0, 0, .1))}:host .recruitment-wrap .plane .plane-wrap img,:host .recruitment-wrap .plane .plane-wrap svg{position:relative;top:0;height:60px;transition:.5s cubic-bezier(.645,.045,.355,1);filter:drop-shadow(0 15px 0 rgba(0, 0, 0, .1))}:host .recruitment-wrap .plane .plane-wrap svg path{fill:#fff;transition:1s cubic-bezier(.645,.045,.355,1)}:host .recruitment-wrap .plane .plane-wrap #check{opacity:0}:host .recruitment-wrap .center{position:absolute;height:100%;width:100%;z-index:2;overflow:hidden;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;left:0;top:0}:host .recruitment-wrap .center .center-imgs{width:100%;height:100%;position:absolute;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;z-index:1;top:0;left:0}:host .recruitment-wrap .center .center-imgs .center-img{width:100%;height:100%;position:absolute;z-index:1;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;font-size:3em;color:#fff;-ms-flex-direction:column;flex-direction:column;padding-top:1em;top:0;left:0}@media only screen and (max-width:360px),screen and (max-height:550px) and (max-width:768px){:host .recruitment-wrap .center .center-imgs .center-img{font-size:2em}}:host .recruitment-wrap .center .center-imgs .center-img .hint{font-size:17px;margin-top:20px;font-weight:600}:host .recruitment-wrap .center .center-imgs .center-img.active{z-index:2}:host .recruitment-wrap .center .center-imgs .center-img.active:after{transition:10s cubic-bezier(.23,1,.32,1);-ms-transform:scale(1);transform:scale(1)}:host .recruitment-wrap .center .center-imgs .center-img:after{content:\"\";position:absolute;width:100%;height:100%;background-size:cover;background-position:center;transition:none;-ms-transform:scale(.9);transform:scale(.9)}:host .recruitment-wrap .center .center-wipe{width:100%;height:100%;position:absolute;z-index:2;background-size:auto 100%;background-position:0 0}:host .recruitment-wrap .ring{position:absolute;width:100%;height:100%;z-index:1;border-radius:50%;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;-ms-transform:rotate(-115deg) scaleY(-1);transform:rotate(-115deg) scaleY(-1)}:host .recruitment-wrap .ring svg{width:100%;height:100%;position:absolute;z-index:1;top:0;left:0;overflow:visible}:host .recruitment-wrap .ring svg circle{width:100%;height:100%;stroke-width:3;fill:none;stroke:#fff}:host .recruitment-wrap .ring svg circle.animate{transition:1s cubic-bezier(.645,.045,.355,1)}:host .recruitment-wrap .ring svg path{stroke-width:3;fill:none;stroke:#fff;-ms-transform:rotate(-295deg);transform:rotate(-295deg);-ms-transform-origin:center;transform-origin:center}:host .recruitment-wrap .ring svg path.dash{opacity:.2;stroke-dasharray:10,10}:host .recruitment-wrap .point-wrap{position:absolute;width:100%;height:100%;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;z-index:3;top:0;left:0}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){:host .recruitment-wrap .point-wrap{left:-16px}}:host .recruitment-wrap .point-wrap .point{width:36px;height:36px;position:absolute;border-radius:50%;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;top:0;cursor:pointer;-ms-flex-align:center;align-items:center;-ms-transform-origin:50% 218px;transform-origin:50% 218px}:host .recruitment-wrap .point-wrap .point .point-inner{width:100%;height:100%;position:relative}:host .recruitment-wrap .point-wrap .point .point-inner .point-transform{background-color:#fff;width:100%;height:100%;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;border-radius:50%;transition:.6s;box-shadow:0 5px 20px rgba(0,0,0,.3)}:host .recruitment-wrap .point-wrap .point .point-inner .point-transform span{position:relative;margin-top:1px;font-size:16px;display:block;transition:.6s;color:#192e4d}:host .recruitment-wrap .point-wrap .point:hover .point-transform{background-color:#333}:host .recruitment-wrap .point-wrap .point:hover .point-transform span{color:#fff}:host .recruitment-wrap .point-wrap .point.active .point-transform{-ms-transform:scale(.3);transform:scale(.3);background-color:#333}:host .recruitment-wrap .point-wrap .point.active .point-transform span{color:#fff;opacity:0}:host .recruitment-wrap .point-wrap .point:last-child::before{content:\"\";border-radius:100px;width:calc(100% + 20px);height:calc(100% + 20px);position:absolute;box-shadow:0 0 0 2px #fff;top:50%;left:50%;opacity:0;-ms-transform:translate(-50%,-50%) scale(.8);transform:translate(-50%,-50%) scale(.8);transition:.6s cubic-bezier(.645,.045,.355,1)}:host .recruitment-wrap .point-wrap .point:last-child .point-transform svg{opacity:0;transition:.6s;position:absolute;top:50%;left:50%;-ms-transform:translate(-50%,-50%) rotate(-180deg);transform:translate(-50%,-50%) rotate(-180deg)}:host .recruitment-wrap .point-wrap .point:last-child.active .point-transform{-ms-transform:scale(1);transform:scale(1)}:host .recruitment-wrap .point-wrap .point:last-child.active .point-transform span{opacity:0;-ms-transform:rotate(180deg);transform:rotate(180deg)}:host .recruitment-wrap .point-wrap .point:last-child.active .point-transform svg{opacity:1;-ms-transform:translate(-50%,-50%) rotate(0);transform:translate(-50%,-50%) rotate(0)}:host .recruitment-wrap .point-wrap .point:last-child.active::before{-ms-transform:translate(-50%,-50%) scale(1);transform:translate(-50%,-50%) scale(1);opacity:1}@media only screen and (max-width:1000px){:host .recruitment-wrap{width:320px;height:320px}:host .recruitment-wrap circle{-ms-transform-origin:50% 50%;transform-origin:50% 50%;-ms-transform:scale(.8);transform:scale(.8)}:host .recruitment-wrap .ring svg path.dash{-ms-transform-origin:50% 50%;transform-origin:50% 50%;-ms-transform:scale(.8) rotate(-295deg) translate(-40px,-40px);transform:scale(.8) rotate(-295deg) translate(-40px,-40px)}:host .recruitment-wrap .plane .plane-wrap{height:40px;-ms-transform-origin:50% 180px;transform-origin:50% 180px}:host .recruitment-wrap .plane .plane-wrap img,:host .recruitment-wrap .plane .plane-wrap svg{height:40px}:host .recruitment-wrap .point-wrap .point{width:40px;height:40px;-ms-transform-origin:50% 180px;transform-origin:50% 180px}}@media only screen and (max-width:768px){:host .recruitment-wrap{margin:0;height:150px}:host .recruitment-wrap .plane,:host .recruitment-wrap .point-wrap,:host .recruitment-wrap circle,:host .recruitment-wrap svg path.dash{display:none}}@media only screen and (max-width:320px),screen and (max-height:550px) and (max-width:768px){:host .recruitment-wrap{height:132px}}:host ::ng-deep .tick{box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default;position:relative;z-index:1;line-height:1.4}:host ::ng-deep .tick *{box-sizing:inherit}:host ::ng-deep .tick [data-view]{max-width:100%}:host ::ng-deep .tick span[data-view]{display:inline-block}:host ::ng-deep .tick [data-layout~=pad]{margin:-.25em}:host ::ng-deep .tick [data-layout~=pad]>*{margin:.25em}:host ::ng-deep .tick-flip{position:relative;text-align:center}:host ::ng-deep .tick-flip *{border-radius:inherit;white-space:pre;letter-spacing:inherit;text-indent:inherit}:host ::ng-deep .tick-flip-front{border-bottom-left-radius:0;border-bottom-right-radius:0}:host ::ng-deep .tick-flip-back{border-top-left-radius:0;border-top-right-radius:0}:host ::ng-deep .tick-flip-spacer{display:block;visibility:hidden}:host ::ng-deep .tick-flip-shadow{position:absolute;left:1px;right:1px;top:1px;bottom:1px;color:transparent!important;background:0 0!important}:host ::ng-deep .tick-flip-shadow-top{bottom:calc(50% - 1px)}:host ::ng-deep .tick-flip-shadow-bottom{top:calc(50% + 1px)}:host ::ng-deep .tick-flip-card-shadow{position:absolute;left:.15em;right:.15em;bottom:.125em;height:.5em;background-color:transparent;border-radius:0;opacity:0;-ms-transform-origin:0 100%;transform-origin:0 100%;box-shadow:0 .125em .25em rgba(0,0,0,.5),0 .125em .5em rgba(0,0,0,.75);z-index:0}:host ::ng-deep .tick-flip-card{position:absolute;z-index:1;left:0;top:0;width:100%;height:100%;perspective:4em}:host ::ng-deep .tick-flip-panel-back,:host ::ng-deep .tick-flip-panel-front{position:absolute;left:0;width:100%;height:51%;-webkit-backface-visibility:hidden;backface-visibility:hidden;transform-style:preserve-3d}:host ::ng-deep .tick-flip-panel-back-text,:host ::ng-deep .tick-flip-panel-front-text{position:absolute;left:-1px;top:0;right:-1px;height:100%;overflow:hidden}:host ::ng-deep .tick-flip-panel-text-wrapper{position:absolute;left:0;top:0;right:0;height:100%}:host ::ng-deep .tick-flip-panel-back-text .tick-flip-panel-text-wrapper{height:200%;top:-100%}:host ::ng-deep .tick-flip-panel-front{-ms-transform-origin:center bottom;transform-origin:center bottom;top:0;z-index:2;box-shadow:inset 0 1px rgba(255,255,255,.05)}:host ::ng-deep .tick-flip-panel-back{-ms-transform-origin:center top;transform-origin:center top;top:50%;z-index:1;box-shadow:inset 0 -1px rgba(0,0,0,.1)}:host ::ng-deep .tick-flip-panel-back::after{content:\"\";z-index:1;content:\"\";position:absolute;left:0;top:0;width:100%;height:100%;background-image:linear-gradient(180deg,rgba(0,0,0,0) 1px,rgba(0,0,0,.15) 1px,transparent 30%)}:host ::ng-deep .tick-flip-panel-back-shadow{z-index:2}:host ::ng-deep .tick-flip-panel-back-highlight,:host ::ng-deep .tick-flip-panel-back-shadow{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}:host ::ng-deep .tick-flip-panel-back-highlight,:host ::ng-deep .tick-flip-panel-back-shadow,:host ::ng-deep .tick-flip-panel-front-shadow{position:absolute;left:0;top:0;right:0;bottom:0;opacity:0}:host ::ng-deep .tick-flip-panel-front-shadow{background-image:linear-gradient(to top,rgba(0,0,0,.8),rgba(0,0,0,.3))}:host ::ng-deep .tick-flip-panel-back-shadow{background-image:linear-gradient(to bottom,rgba(0,0,0,.7),rgba(0,0,0,.5))}:host ::ng-deep .tick-flip-panel-back-highlight{z-index:3;background-image:linear-gradient(to bottom,rgba(255,255,255,.15),rgba(255,255,255,.3))}:host ::ng-deep .tick [data-style*=\"shadow:inner\"],:host ::ng-deep .tick [data-style*=\"shadow:inner\"] .tick-flip-card-shadow{box-shadow:none}:host ::ng-deep .tick [data-style*=\"shadow:none\"] .tick-flip-card-shadow,:host ::ng-deep .tick [data-style*=\"shadow:none\"] .tick-flip-panel-back,:host ::ng-deep .tick [data-style*=\"shadow:none\"] .tick-flip-panel-front,:host ::ng-deep .tick [data-style*=\"shadow:none\"] .tick-flip-shadow{box-shadow:none}:host ::ng-deep .tick [data-style*=\"shadow:none\"] .tick-flip-back::after,:host ::ng-deep .tick [data-style*=\"shadow:none\"] .tick-flip-panel-back-shadow,:host ::ng-deep .tick [data-style*=\"shadow:none\"] .tick-flip-panel-back-text::after,:host ::ng-deep .tick [data-style*=\"shadow:none\"] .tick-flip-panel-front-shadow{background-image:none}:host ::ng-deep .tick [data-style*=\"rounded:none\"]{border-radius:0}:host ::ng-deep .tick [data-style*=\"rounded:panels\"] .tick-flip-front,:host ::ng-deep .tick [data-style*=\"rounded:panels\"] .tick-flip-shadow-bottom{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}:host ::ng-deep .tick [data-style*=\"rounded:panels\"] .tick-flip-back,:host ::ng-deep .tick [data-style*=\"rounded:panels\"] .tick-flip-panel-back::after,:host ::ng-deep .tick [data-style*=\"rounded:panels\"] .tick-flip-shadow-top{border-top-left-radius:inherit;border-top-right-radius:inherit}:host ::ng-deep .tick-flip{margin-left:.0625em;margin-right:.0625em;min-width:1.125em;border-radius:.125em;letter-spacing:.25em;text-indent:.25em}:host ::ng-deep .tick-flip-shadow{box-shadow:0 .125em .3125em rgba(0,0,0,.25),0 .02125em .06125em rgba(0,0,0,.25)}:host ::ng-deep .tick-flip-panel{color:#192e4d;background-color:#fff}"]
        }),
        __param(4, Inject(DOCUMENT))
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
                CommonModule,
                HttpClientModule
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
