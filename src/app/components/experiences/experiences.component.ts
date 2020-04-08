import { Component, OnInit } from '@angular/core';
import { faCrosshairs } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent implements OnInit {
  
  head_title = 'Experiências';
  head_icon = faCrosshairs;
  
  constructor() { }

  ngOnInit(): void {
  }

}
