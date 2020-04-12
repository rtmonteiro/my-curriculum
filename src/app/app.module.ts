import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { InfoComponent } from './components/info/info.component';
import { InfoDataComponent } from './components/info/info-data/info-data.component';
import { SectionComponent } from './components/section/section.component';
import { GoalComponent } from './components/goal/goal.component';
import { ExperiencesComponent } from './components/experiences/experiences.component';
import { ExpUnitComponent } from './components/experiences/exp-unit/exp-unit.component';
import { EducationComponent } from './components/education/education.component';
import { EduUnitComponent } from './components/education/edu-unit/edu-unit.component';

@NgModule({
  declarations: [
    AppComponent,
    InfoComponent,
    InfoDataComponent,
    SectionComponent,
    GoalComponent,
    ExperiencesComponent,
    ExpUnitComponent,
    EducationComponent,
    EduUnitComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
