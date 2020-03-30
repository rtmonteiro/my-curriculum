import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InfoComponent } from './info/info.component';
import { InfoDataComponent } from './info/info-data/info-data.component';

@NgModule({
  declarations: [
    AppComponent,
    InfoComponent,
    InfoDataComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
