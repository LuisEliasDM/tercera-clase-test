import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ResizeFontDirective } from './libs/directives/resize-font.directive';

@NgModule({
  declarations: [
    AppComponent,
    ResizeFontDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
