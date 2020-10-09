import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VfaSliderModule } from 'projects/vfa-slider/src/public-api';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    VfaSliderModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
