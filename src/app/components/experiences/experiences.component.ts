import { Component, OnInit } from '@angular/core';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent implements OnInit {
  
  head_title = 'Experiências';
  head_icon = faBriefcase;
  
  constructor() { }

  ngOnInit(): void {
  }

}
