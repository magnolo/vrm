import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  QueryList,
  Renderer2,
  SimpleChanges,
  ViewChild,
  ViewChildren,
  ViewEncapsulation,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import Tick from '@pqina/flip';

@Component({
  selector: 'vfa-slider',
  templateUrl: './vfa-slider.component.html',
  styleUrls: ['./vfa-slider.component.scss'],
})
export class VfaSliderComponent implements OnInit, AfterViewInit, OnChanges {
  @Input() values: number[];

  public content = [
    {
      title: 'Design, Tierstudien',
      value: 152,
      text: 'Was vom Virus und welche Zusatzstoffe sollen enthalten sein? Erprobung auf Verträglichkeit und Wirksamkeit.'
    },
    {
      title: 'Erprobung in vergleichenden Studien mit Freiwilligen',
      header: 'Phase I',
      value: 16,
      list: ['ca. 10-30 Freiwillige', 'Zur prüfen: Verträglichkeit']
    },
    {
      title: 'Erprobung in vergleichenden Studien mit Freiwilligen',
      header: 'Phase II',
      value: 10,
      list: [
        'ca. 50-500 Freiwillige',
        'Zur prüfen: Dosierung, Immunantwort vor Ansteckung',
      ]
    },
    {
      title: 'Erprobung in vergleichenden Studien mit Freiwilligen',
      header: 'Phase III',
      value: 6,
      list: [
        'ca. 1.000-60.000 Freiwillige',
        'Zur prüfen: Zuverlässigkeit des Schutzes',
      ]
    },
    {
      title: 'Zulassungsverfahren',
      value: 0,
      text: 'Bei der European Merdicines Agency (EMA) mit Sitz in Amsterdam für Deutschland und alle weiteren EU-Staaten.'
    },
  ];

  public activeIdx = 0;
  public lastIdx = 0;
  private flipper;

  @ViewChild('section') section: ElementRef;
  @ViewChild('ringBg') ringBg: ElementRef;
  @ViewChild('planeWrap') planeWrap: ElementRef;
  @ViewChild('recruitmentText') recruitmentText: ElementRef;
  @ViewChild('number') number: ElementRef;
  @ViewChild('arrow') arrow: ElementRef;
  @ViewChildren('steps') steps: QueryList<ElementRef>;
  title = 'vrm';

  constructor(
    private renderer: Renderer2,
    private cdr: ChangeDetectorRef,
    private sanitize: DomSanitizer
  ) {}

  ngOnInit(): void {}

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
  }

  ngAfterViewInit(): void {
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
    const plane: SVGGeometryElement = this.planeWrap.nativeElement;
    const path = this.ringBg.nativeElement;
    const length = path.scrollHeight > 0 && path.getTotalLength ? path.getTotalLength() : 0;

    if (plane) {
      this.renderer.setStyle(
        plane,
        'transition',
        animationDuration + 'ms all cubic-bezier(0.645, 0.045, 0.355, 1)'
      );
      this.renderer.setStyle(
        plane,
        'transform',
        'translateY(-50%) rotate(' + rotation + 'deg)'
      );
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

    this.cdr.detectChanges();
  }

  transform(idx) {
    return this.sanitize.bypassSecurityTrustStyle(
      'translateY(-50%) rotate(' + (360 / this.content.length) * idx + 'deg)'
    );
  }
}
