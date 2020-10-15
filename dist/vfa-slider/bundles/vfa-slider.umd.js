(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common/http'), require('@angular/platform-browser'), require('@pqina/flip'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('vfa-slider', ['exports', '@angular/core', '@angular/common/http', '@angular/platform-browser', '@pqina/flip', '@angular/common'], factory) :
    (global = global || self, factory(global['vfa-slider'] = {}, global.ng.core, global.ng.common.http, global.ng.platformBrowser, global.Tick, global.ng.common));
}(this, (function (exports, core, http, platformBrowser, Tick, common) { 'use strict';

    Tick = Tick && Object.prototype.hasOwnProperty.call(Tick, 'default') ? Tick['default'] : Tick;

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __createBinding(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
    }

    function __exportStar(m, exports) {
        for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    var ComponentsService = /** @class */ (function () {
        function ComponentsService() {
        }
        ComponentsService.ɵprov = core.ɵɵdefineInjectable({ factory: function ComponentsService_Factory() { return new ComponentsService(); }, token: ComponentsService, providedIn: "root" });
        ComponentsService = __decorate([
            core.Injectable({
                providedIn: 'root'
            })
        ], ComponentsService);
        return ComponentsService;
    }());

    var ITEMS = [
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
        headers: new http.HttpHeaders({
            'Access-Control-Allow-Origin': '*',
        }),
    };
    var VfaSliderComponent = /** @class */ (function () {
        function VfaSliderComponent(renderer, cdr, sanitize, httpClient) {
            this.renderer = renderer;
            this.cdr = cdr;
            this.sanitize = sanitize;
            this.httpClient = httpClient;
            this.date = '04.09.2020';
            this.content = ITEMS;
            this.activeIdx = 0;
            this.lastIdx = 0;
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
                var response;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.httpClient
                                .get('https://vfa.23d.gr/api/values', httpOptions)
                                .toPromise()];
                        case 1:
                            response = _a.sent();
                            response.values.forEach(function (value, idx) { return (_this.content[idx].value = value); });
                            this.date = response.date;
                            this.setActive(0);
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
            this.flipper = Tick.DOM.create(this.number.nativeElement, {
                value: 0,
            });
            var arc = this.generateArc(200, 200, 200, 25, 335);
            console.log(arc);
            this.renderer.setAttribute(this.arc.nativeElement, 'd', arc);
            if (this.values) {
                this.setActive(0);
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
            return this.sanitize.bypassSecurityTrustStyle('rotate(' + (360 - ((-360 / this.content.length) * idx - 25)) + 'deg)' + scale);
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
        VfaSliderComponent.ctorParameters = function () { return [
            { type: core.Renderer2 },
            { type: core.ChangeDetectorRef },
            { type: platformBrowser.DomSanitizer },
            { type: http.HttpClient }
        ]; };
        __decorate([
            core.Input()
        ], VfaSliderComponent.prototype, "values", void 0);
        __decorate([
            core.Input()
        ], VfaSliderComponent.prototype, "date", void 0);
        __decorate([
            core.ViewChild('section')
        ], VfaSliderComponent.prototype, "section", void 0);
        __decorate([
            core.ViewChild('ringBg')
        ], VfaSliderComponent.prototype, "ringBg", void 0);
        __decorate([
            core.ViewChild('planeWrap')
        ], VfaSliderComponent.prototype, "planeWrap", void 0);
        __decorate([
            core.ViewChild('recruitmentText')
        ], VfaSliderComponent.prototype, "recruitmentText", void 0);
        __decorate([
            core.ViewChild('number')
        ], VfaSliderComponent.prototype, "number", void 0);
        __decorate([
            core.ViewChild('arrow')
        ], VfaSliderComponent.prototype, "arrow", void 0);
        __decorate([
            core.ViewChild('svgArrow')
        ], VfaSliderComponent.prototype, "svgArrow", void 0);
        __decorate([
            core.ViewChild('svgCheck')
        ], VfaSliderComponent.prototype, "svgCheck", void 0);
        __decorate([
            core.ViewChild('arc')
        ], VfaSliderComponent.prototype, "arc", void 0);
        __decorate([
            core.ViewChildren('steps')
        ], VfaSliderComponent.prototype, "steps", void 0);
        VfaSliderComponent = __decorate([
            core.Component({
                selector: 'vfa-slider',
                template: "<section\n  class=\"recruitment-process\"\n  #section>\n  <div class=\"container\">\n\n    <div class=\"recruitment-wrap\">\n      <div class=\"plane\">\n        <div\n          #planeWrap\n          style=\"position: relative;\"\n          class=\"plane-wrap reverse\">\n          <svg\n            id=\"arrow\"\n            #svgArrow\n            width=\"40\"\n            height=\"40\"\n            viewBox=\"0 0 60 60\"\n            fill=\"none\"\n            xmlns=\"http://www.w3.org/2000/svg\">\n            <path\n              #arrow\n              [attr.d]=\"svgs.plane\">\n\n            </path>\n          </svg>\n          <svg\n            id=\"check\"\n            style=\"position: absolute; top: 50%; left: 50%; transform: translate(-52%, -52%) rotate(-20deg)\"\n            #svgCheck\n            width=\"40\"\n            height=\"40\"\n            viewBox=\"0 0 60 60\"\n            fill=\"none\"\n            xmlns=\"http://www.w3.org/2000/svg\">\n            <path\n              #arrow\n              [attr.d]=\"svgs.arrow\">\n\n            </path>\n          </svg>\n        </div>\n      </div>\n\n      <div class=\"center\">\n        <div class=\"center-imgs\">\n          <!-- *ngFor=\"let item of content; let idx = index\" -->\n          <div class=\"center-img\">\n            <div #number>\n              <div\n                data-repeat=\"true\"\n                data-transform=\"arrive(4, 0.01, false, false) -> round ->  pad('000') -> split -> delay(rtl, 10, 20)\">\n                <span data-view=\"flip\"></span>\n              </div>\n\n            </div>\n            <div class=\"hint\">Studien</div>\n          </div>\n        </div>\n      </div>\n      <div class=\"ring\">\n        <svg>\n          <circle\n            #ringBg\n            class=\"ring-bg animate\"\n            style=\"stroke-dashoffset:1256px; stroke-dasharray: 1256px;\"\n            cx=\"50%\"\n            cy=\"50%\"\n            r=\"200\"></circle>\n          <!-- <circle\n            class=\"dash\"\n            cx=\"50%\"\n            cy=\"50%\"\n            r=\"200\"></circle> -->\n          <path\n            class=\"dash\"\n            #arc></path>\n        </svg>\n      </div>\n      <div class=\"point-wrap\">\n        <!-- transform: rotate(#{(-360 / 5) * $i}deg), -->\n        <div\n          class=\"point\"\n          (click)=\"setActive(idx)\"\n          [class.active]=\"idx === activeIdx\"\n          *ngFor=\"let item of content; let idx = index\"\n          [style.transform]=\"transform(idx)\">\n          <div\n            class=\"point-inner\"\n            style=\"transition: transform 300ms ease\"\n            [style.transform]=\"transformInner(idx)\">\n            <div class=\"point-transform\">\n              <span>{{ idx + 1 }}</span>\n            </div>\n          </div>\n        </div>\n\n      </div>\n    </div>\n\n    <div\n      #recruitmentText\n      class=\"recruitment-text\">\n      <div class=\"recruitment-copy\">\n        <div\n          class=\"step\"\n          #steps\n          [class.next]=\"idx > activeIdx\"\n          [class.active]=\"idx === activeIdx\"\n          *ngFor=\"let item of content; let idx = index\">\n          <h3>{{ item.title }}</h3>\n          <h4 *ngIf=\"item.header\">{{ item.header }}</h4>\n          <p>{{ item.text}}</p>\n          <ul *ngIf=\"item.list && item.list.length > 0\">\n            <li *ngFor=\"let entry of item.list\">{{ entry }}</li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"recruitment-controls\">\n        <div\n          class=\"arrow prev\"\n          (click)=\"activeIdx === 0 ? setActive(content.length - 1) :setActive(activeIdx -1)\"></div>\n        <div class=\"dots\">\n          <div\n            class=\"dot\"\n            (click)=\"setActive(idx)\"\n            [class.active]=\"idx === activeIdx\"\n            *ngFor=\"let item of content; let idx  = index\"></div>\n        </div>\n        <div\n          class=\"arrow next\"\n          (click)=\"activeIdx + 1 > content.length - 1 ? setActive(0) : setActive(activeIdx+1)\"></div>\n      </div>\n    </div>\n\n  </div>\n  <div class=\"footer\">\n    <img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAAAuCAMAAABam6YzAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAvFQTFRFAAAA////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////rkHhmgAAAPt0Uk5TAAwnAwll1P3/6BQauf4Gx/OjbQhy2j3RRiH16kFQv1cWAhUvNAcTCsMPDQEEHE5VRyqFsqFpKPhv5+PC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\">\n    <div class=\"note\">\n      <small>\n        Stand {{ date }}, Quelle WHO + Verband der forschenden Pharma-Unternehmen (vfa)\n      </small>\n    </div>\n  </div>\n</section>\n",
                styles: ["@import url(https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap);:host{display:block;width:100%;height:100%}:host *{box-sizing:border-box;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}:host section{width:100%;position:relative;font-family:\"Open Sans\",sans-serif}:host .recruitment-process{width:100%;position:relative;padding:50px 0;transition:.5s;height:100%;display:flex;justify-content:center;align-items:center;flex-direction:column}:host .recruitment-process .container{width:100%;position:relative;margin:0 auto;display:grid;grid-template-columns:400px 1fr;grid-gap:50px;max-width:1200px;height:100%;align-items:center}:host .recruitment-process .container .grid-left{position:relative;width:400px;float:left}:host .recruitment-process .footer{width:100%;color:#fff;padding:0 60px;text-align:right}:host .recruitment-process .footer .note{margin-top:5px;opacity:.5}@media only screen and (max-width:768px){:host .recruitment-process .footer{margin-top:40px;text-align:center;padding:0 20px}}@media only screen and (max-width:1260px){:host .recruitment-process .container{padding:0 30px}}@media only screen and (max-width:1000px){:host .recruitment-process .container{grid-template-columns:320px 1fr;grid-gap:40px}}@media only screen and (max-width:768px){:host .recruitment-process .container{padding:0 30px;width:100%;grid-template-columns:1fr}}@media only screen and (max-width:578px){:host .recruitment-process .container{padding:0 25px;grid-gap:0}}:host .recruitment-text{position:relative;float:right;border-radius:10px;overflow:hidden;transition:.5s;color:#fff}:host .recruitment-text .recruitment-copy{width:100%;position:relative;height:360px}:host .recruitment-text .recruitment-copy .step{width:100%;position:absolute;bottom:0;left:0;padding:60px 70px 100px;height:100%;display:flex;flex-direction:column;justify-content:center}:host .recruitment-text .recruitment-copy .step>*{visibility:hidden;opacity:0;transform:translateX(-50px);transition:1s}:host .recruitment-text .recruitment-copy .step>:nth-child(2){transition-delay:.1s}:host .recruitment-text .recruitment-copy .step.active>*{visibility:visible;opacity:1;transform:translateX(0)}:host .recruitment-text .recruitment-copy .step.next>*{visibility:hidden;opacity:0;transform:translateX(50px)}:host .recruitment-text .recruitment-copy .step h3,:host .recruitment-text .recruitment-copy .step p{margin:0}:host .recruitment-text .recruitment-copy .step h3{font-weight:500;font-size:24px;margin-bottom:20px}:host .recruitment-text .recruitment-copy .step p,:host .recruitment-text .recruitment-copy .step ul{font-size:16px;line-height:24px}:host .recruitment-text .recruitment-copy .step ul{margin-bottom:0}@media only screen and (max-width:768px){:host .recruitment-text .recruitment-copy{height:250px}}:host .recruitment-text .recruitment-controls{width:100%;height:80px;position:absolute;bottom:0;left:0;display:flex;align-items:center;justify-content:center;border-radius:0 0 10px 10px}:host .recruitment-text .recruitment-controls .arrow{display:none;width:16px;height:16px;border-top:3px solid #fff;border-left:3px solid #fff;transform:rotate(-45deg);transition:.3s;cursor:pointer}:host .recruitment-text .recruitment-controls .arrow:hover{border-color:#737373}:host .recruitment-text .recruitment-controls .arrow.next{transform:rotate(135deg)}:host .recruitment-text .recruitment-controls .dots{margin:0 10px;position:relative}:host .recruitment-text .recruitment-controls .dots .dot{width:16px;height:16px;background-color:#e6e6e6;border-radius:50%;position:relative;float:left;margin:0 5px;transition:.3s;cursor:pointer;opacity:.5}:host .recruitment-text .recruitment-controls .dots .dot:hover{opacity:1}:host .recruitment-text .recruitment-controls .dots .dot.active{background-color:#fff;opacity:1;transform:scale(1.2)}@media only screen and (max-width:1260px){:host .recruitment-text .recruitment-copy .step{padding:40px 40px 100px}:host .recruitment-text .recruitment-controls{height:70px}:host .recruitment-wrap{margin-left:20px}}@media only screen and (max-width:1000px){:host .recruitment-text .recruitment-copy .step{padding:30px 30px 70px}:host .recruitment-text .recruitment-copy .step h3{font-size:22px;margin-bottom:16px}:host .recruitment-text .recruitment-copy .step p{font-size:14px}:host .recruitment-text .recruitment-controls{height:50px}}@media only screen and (max-width:768px){:host .recruitment-text{width:100%;display:flex;flex-direction:column;text-align:center}:host .recruitment-text .recruitment-copy .step{padding:30px 30px 73px;bottom:50%;transform:translateY(50%)}:host .recruitment-text ul{text-align:left}:host .recruitment-text .recruitment-controls{position:relative}}:host .recruitment-wrap{width:400px;height:400px;position:relative;float:left}:host .recruitment-wrap .plane{position:absolute;width:100%;height:100%;display:flex;justify-content:center;z-index:5;pointer-events:none}:host .recruitment-wrap .plane .plane-wrap{height:60px;display:inline-block;transform-origin:50% 230px;transform:translateY(-50%) rotate(0);transition:1s cubic-bezier(.645,.045,.355,1);position:relative}:host .recruitment-wrap .plane .plane-wrap.reverse img,:host .recruitment-wrap .plane .plane-wrap.reverse svg{transform:scaleX(-1)}:host .recruitment-wrap .plane .plane-wrap.shadow img,:host .recruitment-wrap .plane .plane-wrap.shadow svg{filter:drop-shadow(0 -15px 0 rgba(0, 0, 0, .1))}:host .recruitment-wrap .plane .plane-wrap img,:host .recruitment-wrap .plane .plane-wrap svg{position:relative;top:0;height:60px;transition:.5s cubic-bezier(.645,.045,.355,1);filter:drop-shadow(0 15px 0 rgba(0, 0, 0, .1))}:host .recruitment-wrap .plane .plane-wrap svg path{fill:#fff;transition:1s cubic-bezier(.645,.045,.355,1)}:host .recruitment-wrap .plane .plane-wrap #check{opacity:0}:host .recruitment-wrap .center{position:absolute;height:60%;width:60%;z-index:2;overflow:hidden;display:flex;align-items:center;justify-content:center;left:50%;top:50%;transform:translate(-50%,-50%)}:host .recruitment-wrap .center:before{content:\"\";width:102%;height:102%;position:absolute;border-radius:50%;z-index:10}:host .recruitment-wrap .center .center-imgs{width:100%;height:100%;position:absolute;display:flex;align-items:center;justify-content:center;z-index:1}:host .recruitment-wrap .center .center-imgs .center-img{width:110%;height:110%;position:absolute;z-index:1;display:flex;justify-content:center;align-items:center;font-size:3em;color:#fff;flex-direction:column;padding-top:1em}:host .recruitment-wrap .center .center-imgs .center-img .hint{font-size:17px;margin-top:20px;font-weight:600}:host .recruitment-wrap .center .center-imgs .center-img.active{z-index:2}:host .recruitment-wrap .center .center-imgs .center-img.active:after{transition:10s cubic-bezier(.23,1,.32,1);transform:scale(1)}:host .recruitment-wrap .center .center-imgs .center-img:after{content:\"\";position:absolute;width:100%;height:100%;background-size:cover;background-position:center;transition:none;transform:scale(.9)}:host .recruitment-wrap .center .center-wipe{width:100%;height:100%;position:absolute;z-index:2;background-size:auto 100%;background-position:0 0}:host .recruitment-wrap .ring{position:absolute;width:100%;height:100%;z-index:1;border-radius:50%;display:flex;justify-content:center;align-items:center;transform:rotate(-115deg) scaleY(-1)}:host .recruitment-wrap .ring svg{width:100%;height:100%;position:absolute;z-index:1;top:0;left:0;overflow:visible}:host .recruitment-wrap .ring svg circle{width:100%;height:100%;stroke-width:3;fill:none;stroke:#fff}:host .recruitment-wrap .ring svg circle.animate{transition:1s cubic-bezier(.645,.045,.355,1)}:host .recruitment-wrap .ring svg path{stroke-width:3;fill:none;stroke:#fff;transform:rotate(-295deg);transform-origin:center}:host .recruitment-wrap .ring svg path.dash{opacity:.2;stroke-dasharray:10,10}:host .recruitment-wrap .point-wrap{position:absolute;width:100%;height:100%;display:flex;justify-content:center;align-items:center;z-index:3}:host .recruitment-wrap .point-wrap .point{width:36px;height:36px;position:absolute;border-radius:50%;display:flex;justify-content:center;top:0;cursor:pointer;align-items:center;transform-origin:50% 218px}:host .recruitment-wrap .point-wrap .point .point-inner{width:100%;height:100%;position:relative}:host .recruitment-wrap .point-wrap .point .point-inner .point-transform{background-color:#fff;width:100%;height:100%;display:flex;justify-content:center;align-items:center;border-radius:50%;transition:.6s;box-shadow:0 5px 20px rgba(0,0,0,.3)}:host .recruitment-wrap .point-wrap .point .point-inner .point-transform span{position:relative;margin-top:1px;font-size:16px;display:block;transition:.6s;color:#192e4d}:host .recruitment-wrap .point-wrap .point:hover .point-transform{background-color:#333}:host .recruitment-wrap .point-wrap .point:hover .point-transform span{color:#fff}:host .recruitment-wrap .point-wrap .point.active .point-transform{transform:scale(.3);background-color:#333}:host .recruitment-wrap .point-wrap .point.active .point-transform span{color:#fff;opacity:0}:host .recruitment-wrap .point-wrap .point:last-child::before{content:\"\";border-radius:100px;width:calc(100% + 20px);height:calc(100% + 20px);position:absolute;box-shadow:0 0 0 2px #fff;top:50%;left:50%;opacity:0;transform:translate(-50%,-50%) scale(.8);transition:450ms cubic-bezier(.645,.045,.355,1)}:host .recruitment-wrap .point-wrap .point:last-child.active .point-transform{transform:scale(1)}:host .recruitment-wrap .point-wrap .point:last-child.active .point-transform span{opacity:1}:host .recruitment-wrap .point-wrap .point:last-child.active::before{transform:translate(-50%,-50%) scale(1);opacity:1}@media only screen and (max-width:1000px){:host .recruitment-wrap{width:320px;height:320px}:host .recruitment-wrap circle{transform-origin:50% 50%;transform:scale(.8)}:host .recruitment-wrap .ring svg path.dash{transform-origin:50% 50%;transform:scale(.8) rotate(-295deg) translate(-40px,-40px)}:host .recruitment-wrap .plane .plane-wrap{height:40px;transform-origin:50% 180px}:host .recruitment-wrap .plane .plane-wrap img,:host .recruitment-wrap .plane .plane-wrap svg{height:40px}:host .recruitment-wrap .point-wrap .point{width:40px;height:40px;transform-origin:50% 180px}}@media only screen and (max-width:768px){:host .recruitment-wrap{left:50%;margin:30px 0 0;transform:translateX(-50%);height:180px}:host .recruitment-wrap .plane,:host .recruitment-wrap .point-wrap,:host .recruitment-wrap circle,:host .recruitment-wrap svg path.dash{display:none}}:host ::ng-deep .tick{box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:default;position:relative;z-index:1;line-height:1.4}:host ::ng-deep .tick *{box-sizing:inherit}:host ::ng-deep .tick [data-view]{max-width:100%}:host ::ng-deep .tick span[data-view]{display:inline-block}:host ::ng-deep .tick [data-layout~=pad]{margin:-.25em}:host ::ng-deep .tick [data-layout~=pad]>*{margin:.25em}:host ::ng-deep .tick-flip{position:relative;text-align:center}:host ::ng-deep .tick-flip *{border-radius:inherit;white-space:pre;letter-spacing:inherit;text-indent:inherit}:host ::ng-deep .tick-flip-front{border-bottom-left-radius:0;border-bottom-right-radius:0}:host ::ng-deep .tick-flip-back{border-top-left-radius:0;border-top-right-radius:0}:host ::ng-deep .tick-flip-spacer{display:block;visibility:hidden}:host ::ng-deep .tick-flip-shadow{position:absolute;left:1px;right:1px;top:1px;bottom:1px;color:transparent!important;background:0 0!important}:host ::ng-deep .tick-flip-shadow-top{bottom:calc(50% - 1px)}:host ::ng-deep .tick-flip-shadow-bottom{top:calc(50% + 1px)}:host ::ng-deep .tick-flip-card-shadow{position:absolute;left:.15em;right:.15em;bottom:.125em;height:.5em;background-color:transparent;border-radius:0;opacity:0;transform-origin:0 100%;box-shadow:0 .125em .25em rgba(0,0,0,.5),0 .125em .5em rgba(0,0,0,.75);z-index:0}:host ::ng-deep .tick-flip-card{position:absolute;z-index:1;left:0;top:0;width:100%;height:100%;perspective:4em}:host ::ng-deep .tick-flip-panel-back,:host ::ng-deep .tick-flip-panel-front{position:absolute;left:0;width:100%;height:51%;-webkit-backface-visibility:hidden;backface-visibility:hidden;transform-style:preserve-3d}:host ::ng-deep .tick-flip-panel-back-text,:host ::ng-deep .tick-flip-panel-front-text{position:absolute;left:-1px;top:0;right:-1px;height:100%;overflow:hidden}:host ::ng-deep .tick-flip-panel-text-wrapper{position:absolute;left:0;top:0;right:0;height:100%}:host ::ng-deep .tick-flip-panel-back-text .tick-flip-panel-text-wrapper{height:200%;top:-100%}:host ::ng-deep .tick-flip-panel-front{transform-origin:center bottom;top:0;z-index:2;box-shadow:inset 0 1px rgba(255,255,255,.05)}:host ::ng-deep .tick-flip-panel-back{transform-origin:center top;top:50%;z-index:1;box-shadow:inset 0 -1px rgba(0,0,0,.1)}:host ::ng-deep .tick-flip-panel-back::after{content:\"\";z-index:1;content:\"\";position:absolute;left:0;top:0;width:100%;height:100%;background-image:linear-gradient(180deg,rgba(0,0,0,0) 1px,rgba(0,0,0,.15) 1px,transparent 30%)}:host ::ng-deep .tick-flip-panel-back-shadow{z-index:2}:host ::ng-deep .tick-flip-panel-back-highlight,:host ::ng-deep .tick-flip-panel-back-shadow{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}:host ::ng-deep .tick-flip-panel-back-highlight,:host ::ng-deep .tick-flip-panel-back-shadow,:host ::ng-deep .tick-flip-panel-front-shadow{position:absolute;left:0;top:0;right:0;bottom:0;opacity:0}:host ::ng-deep .tick-flip-panel-front-shadow{background-image:linear-gradient(to top,rgba(0,0,0,.8),rgba(0,0,0,.3))}:host ::ng-deep .tick-flip-panel-back-shadow{background-image:linear-gradient(to bottom,rgba(0,0,0,.7),rgba(0,0,0,.5))}:host ::ng-deep .tick-flip-panel-back-highlight{z-index:3;background-image:linear-gradient(to bottom,rgba(255,255,255,.15),rgba(255,255,255,.3))}:host ::ng-deep .tick [data-style*=\"shadow:inner\"],:host ::ng-deep .tick [data-style*=\"shadow:inner\"] .tick-flip-card-shadow{box-shadow:none}:host ::ng-deep .tick [data-style*=\"shadow:none\"] .tick-flip-card-shadow,:host ::ng-deep .tick [data-style*=\"shadow:none\"] .tick-flip-panel-back,:host ::ng-deep .tick [data-style*=\"shadow:none\"] .tick-flip-panel-front,:host ::ng-deep .tick [data-style*=\"shadow:none\"] .tick-flip-shadow{box-shadow:none}:host ::ng-deep .tick [data-style*=\"shadow:none\"] .tick-flip-back::after,:host ::ng-deep .tick [data-style*=\"shadow:none\"] .tick-flip-panel-back-shadow,:host ::ng-deep .tick [data-style*=\"shadow:none\"] .tick-flip-panel-back-text::after,:host ::ng-deep .tick [data-style*=\"shadow:none\"] .tick-flip-panel-front-shadow{background-image:none}:host ::ng-deep .tick [data-style*=\"rounded:none\"]{border-radius:0}:host ::ng-deep .tick [data-style*=\"rounded:panels\"] .tick-flip-front,:host ::ng-deep .tick [data-style*=\"rounded:panels\"] .tick-flip-shadow-bottom{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}:host ::ng-deep .tick [data-style*=\"rounded:panels\"] .tick-flip-back,:host ::ng-deep .tick [data-style*=\"rounded:panels\"] .tick-flip-panel-back::after,:host ::ng-deep .tick [data-style*=\"rounded:panels\"] .tick-flip-shadow-top{border-top-left-radius:inherit;border-top-right-radius:inherit}:host ::ng-deep .tick-flip{margin-left:.0625em;margin-right:.0625em;min-width:1.125em;border-radius:.125em;letter-spacing:.25em;text-indent:.25em}:host ::ng-deep .tick-flip-shadow{box-shadow:0 .125em .3125em rgba(0,0,0,.25),0 .02125em .06125em rgba(0,0,0,.25)}:host ::ng-deep .tick-flip-panel{color:#192e4d;background-color:#fff}"]
            })
        ], VfaSliderComponent);
        return VfaSliderComponent;
    }());

    var VfaSliderModule = /** @class */ (function () {
        function VfaSliderModule() {
        }
        VfaSliderModule = __decorate([
            core.NgModule({
                declarations: [VfaSliderComponent],
                imports: [
                    common.CommonModule,
                    http.HttpClientModule
                ],
                exports: [VfaSliderComponent]
            })
        ], VfaSliderModule);
        return VfaSliderModule;
    }());

    exports.ComponentsService = ComponentsService;
    exports.VfaSliderComponent = VfaSliderComponent;
    exports.VfaSliderModule = VfaSliderModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=vfa-slider.umd.js.map
