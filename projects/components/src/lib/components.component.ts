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
} from '@angular/core';

import { Flip } from 'number-flip';

@Component({
  selector: 'vrm-slider',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss'],
})
export class ComponentsComponent implements OnInit, AfterViewInit, OnChanges {
  @Input() values: number[];

  public content = [
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

  public activeIdx = 0;
  public lastIdx = 0;
  private flipper;

  @ViewChild('ringBg') ringBg: ElementRef;
  @ViewChild('planeWrap') planeWrap: ElementRef;
  @ViewChild('recruitmentText') recruitmentText: ElementRef;
  @ViewChild('centerWipe') centerWipe: ElementRef;
  @ViewChild('number') number: ElementRef;
  @ViewChild('arrow') arrow: ElementRef;
  @ViewChildren('steps') steps: QueryList<ElementRef>;
  title = 'vrm';

  constructor(private renderer: Renderer2, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
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

  ngAfterViewInit(): void {
    this.flipper = new Flip({
      node: this.number.nativeElement,
      from: this.content[0].value,
      delay: 1, // second
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

    this.flipper.flipTo({ to: this.content[this.activeIdx].value });

    const height = this.steps.toArray()[this.activeIdx].nativeElement
      .scrollHeight;

    this.renderer.setStyle(
      this.recruitmentText.nativeElement,
      'height',
      height + 'px'
    );
    this.renderer.setStyle(
      this.recruitmentText.nativeElement,
      'background-color',
      this.content[this.activeIdx].backgroundColor
    );
    this.renderer.setStyle(
      this.arrow.nativeElement,
      'fill',
      this.content[this.activeIdx].backgroundColor
    );

    this.cdr.detectChanges();
  }
}
