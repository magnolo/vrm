import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ComponentsComponent } from './components.component';

@NgModule({
  declarations: [ComponentsComponent],
  imports: [
    CommonModule
  ],
  exports: [ComponentsComponent]
})
export class ComponentsModule { }
