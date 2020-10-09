import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { VfaSliderComponent } from './vfa-slider.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [VfaSliderComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [VfaSliderComponent]
})
export class VfaSliderModule { }
