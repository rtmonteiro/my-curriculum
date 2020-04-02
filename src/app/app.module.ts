import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { InfoComponent } from './info/info.component';
import { InfoDataComponent } from './info/info-data/info-data.component';
import { SectionComponent } from './section/section.component';
import { GoalComponent } from './goal/goal.component';

@NgModule({
  declarations: [
    AppComponent,
    InfoComponent,
    InfoDataComponent,
    SectionComponent,
    GoalComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
