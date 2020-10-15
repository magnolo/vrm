import { DOCUMENT } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Inject,
  Input,
  OnChanges,
  OnInit,
  QueryList,
  Renderer2,
  SimpleChanges,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import Tick from '@pqina/flip';
import { ITEMS } from './vfa-slider.constants';

const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin': '*',
  }),
};

@Component({
  selector: 'vfa-slider',
  templateUrl: './vfa-slider.component.html',
  styleUrls: ['./vfa-slider.component.scss'],
})
export class VfaSliderComponent implements OnInit, AfterViewInit, OnChanges {
  @Input() values: number[];

  @Input() date: string = '04.09.2020';

  public content = ITEMS;

  public loaded = false;

  public activeIdx = 0;
  public lastIdx = 0;
  private flipper;
  public embedModalActive = false;
  public copiedSuccess = false;

  public iframeCode = `<iframe src="https://vfa.23degrees.io/embed/index.html" style="border:none;width: 100%; height: 100%; min-height: 520px"></iframe>`;

  public svgs = {
    plane: 'M7 30L0 -2.62268e-06L30 15L60 30L30 45L-2.62268e-06 60L7 30Z',
    arrow:
      'M12 21L21.5 30L49 -4.5897e-07L59.5 12.5L20 55L-1.48619e-06 34L12 21Z',
  };

  @ViewChild('section') section: ElementRef;
  @ViewChild('ringBg') ringBg: ElementRef;
  @ViewChild('planeWrap') planeWrap: ElementRef;
  @ViewChild('recruitmentText') recruitmentText: ElementRef;
  @ViewChild('number') number: ElementRef;
  @ViewChild('arrow') arrow: ElementRef;
  @ViewChild('svgArrow') svgArrow: ElementRef;
  @ViewChild('svgCheck') svgCheck: ElementRef;
  @ViewChild('arc') arc: ElementRef;
  // @ViewChild('svgAnimation') svgAnimation: ElementRef;
  @ViewChildren('steps') steps: QueryList<ElementRef>;
  title = 'vrm';

  constructor(
    private renderer: Renderer2,
    private cdr: ChangeDetectorRef,
    private sanitize: DomSanitizer,
    private httpClient: HttpClient,
    @Inject(DOCUMENT) private document: any
  ) {}

  ngOnInit(): void {
    if (!this.values) {
      this.getData();
    }
  }

  async getData() {
    const response = await this.httpClient
      .get<any>('https://vfa.23d.gr/api/values', httpOptions)
      .toPromise();

    response.values.forEach((value, idx) => (this.content[idx].value = value));
    this.date = response.date;

    this.setActive(0);

    setTimeout(() => {
      this.loaded = true;
      this.cdr.detectChanges();
    }, 500);
  }

  ngOnChanges(changes: SimpleChanges): void {
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

  ngAfterViewInit(): void {
    this.flipper = Tick.DOM.create(this.number.nativeElement, {
      value: 0,
    });

    const arc = this.generateArc(200, 200, 200, 25, 335);
    this.renderer.setAttribute(this.arc.nativeElement, 'd', arc);
    if (this.values) {
      this.setActive(0);
      setTimeout(() => {
        this.loaded = true;
        this.cdr.detectChanges();
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
    const path: SVGGeometryElement = this.ringBg.nativeElement;
    const length =
      path.getBoundingClientRect().height > 0 && path.getTotalLength
        ? path.getTotalLength()
        : 0;

    let opacityDelay = 0;
    if (this.activeIdx === this.content.length - 1) {
      opacityDelay = 300 * difference;
    }

    if (plane) {
      this.renderer.setStyle(
        plane,
        'transition',
        `${animationDuration}ms transform cubic-bezier(0.645, 0.045, 0.355, 1)`
      );
      this.renderer.setStyle(
        plane,
        'transform',
        'translateY(-50%) rotate(' + rotation + 'deg)'
      );

      this.renderer.setStyle(
        this.svgArrow.nativeElement,
        'transition',
        `opacity 500ms ${opacityDelay}ms cubic-bezier(0.645, 0.045, 0.355, 1)`
      );

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
      } else {
        this.renderer.setStyle(this.svgArrow.nativeElement, 'opacity', '1');
        // this.renderer.setStyle(
        //   this.svgCheck.nativeElement,
        //   'opacity',
        //   '0'
        // );
      }
    }
    if (path) {
      this.renderer.setStyle(
        path,
        'transition',
        animationDuration + 'ms all cubic-bezier(0.645, 0.045, 0.355, 1)'
      );
      this.renderer.setStyle(path, 'stroke-dasharray', length);

      this.renderer.setStyle(
        path,
        'stroke-dashoffset',
        length - (length / this.content.length) * this.activeIdx
      );
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
    this.renderer.setStyle(
      this.section.nativeElement,
      'background-color',
      this.content[this.activeIdx].backgroundColor
    );

    // let svgForm = this.svgs.plane;

    // this.svgAnimation.nativeElement.beginElement();
    // this.renderer.setAttribute(this.arrow.nativeElement, 'd', svgForm);
    this.cdr.detectChanges();
  }

  transform(idx) {
    return this.sanitize.bypassSecurityTrustStyle(
      'translateY(-50%) rotate(' +
        (360 - ((360 / this.content.length) * idx + 25)) +
        'deg)'
    );
  }

  transformInner(idx) {
    let scale = '';
    if (idx === this.activeIdx && idx === this.content.length - 1) {
      scale = ' scale(1.2)';
    }
    return this.sanitize.bypassSecurityTrustStyle(
      'rotate(' +
        (360 - ((-360 / this.content.length) * idx - 25)) +
        'deg)' +
        scale
    );
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

  copyToClipboard() {
    // Create a <textarea> element
    const element = this.document.createElement(
      'textarea'
    ) as HTMLTextAreaElement;

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
    const selected =
      this.document.getSelection().rangeCount > 0
        ? this.document.getSelection().getRangeAt(0)
        : false;

    // iOS > 10 fix
    if (navigator.userAgent.match(/ipad|ipod|iphone/i)) {
      const range = this.document.createRange();
      range.selectNodeContents(element);

      const selection = this.document.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);

      element.focus();
      element.setSelectionRange(0, element.value.length);
    } else {
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
  }

  toggleEmbedView(open) {
    this.embedModalActive = open;
    if (!this.embedModalActive) {
      this.copiedSuccess = false;
    }
    this.cdr.detectChanges();
  }
}
