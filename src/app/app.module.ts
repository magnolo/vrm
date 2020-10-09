import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VfaSliderModule } from 'projects/vfa-slider/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    VfaSliderModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
