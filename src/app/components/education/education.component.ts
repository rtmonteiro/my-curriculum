import { Component, OnInit } from '@angular/core';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  head_title = 'Formação';
  head_icon = faGraduationCap;

  constructor() { }

  ngOnInit(): void {
  }

}
