import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { VfaSliderComponent, VfaSliderModule } from 'vfa-slider';

@NgModule({
  imports: [BrowserModule, VfaSliderModule],
  providers: [],
  exports: [VfaSliderModule]
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const element = createCustomElement(VfaSliderComponent, {
      injector: this.injector,
    });
    customElements.define('vrm-slider', element);
  }
}
