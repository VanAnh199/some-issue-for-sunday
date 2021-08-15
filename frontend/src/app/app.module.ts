import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutoCompleteModule } from './auto-complete-component/auto-complete.module';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AutoCompleteModule,
    AppRoutingModule
  ],
  exports: [
    AutoCompleteModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
