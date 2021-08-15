import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutoCompleteComponentComponent } from './auto-complete-component.component';


@NgModule({
  declarations: [
    AutoCompleteComponentComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    AutoCompleteComponentComponent
  ]
})
export class AutoCompleteModule { }
