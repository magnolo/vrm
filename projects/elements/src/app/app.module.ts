import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { ComponentsComponent, VfaSliderModule } from 'components';

@NgModule({
  imports: [BrowserModule, VfaSliderModule],
  providers: [],
  exports: [VfaSliderModule]
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const element = createCustomElement(ComponentsComponent, {
      injector: this.injector,
    });
    customElements.define('vrm-slider', element);
  }
}
