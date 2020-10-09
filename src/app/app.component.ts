import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'vrm';

  constructor(private cdr: ChangeDetectorRef){}
  public values = [120, 88, 12, 3, 0];

  setChange(){
    this.values = [...this.values];
  }

}
