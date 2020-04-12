import { Component, OnInit } from '@angular/core';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { IEducation } from 'src/app/interfaces/education';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  head_title = 'Formação';
  head_icon = faGraduationCap;

  items: IEducation[] = [
    {
      title: 'Graduação em Ciência da Computação',
      local: 'Universidade Federal do Espírito Santo',
      date_init: '06/2019',
      date_end: 'atualmente'
    },
    {
      title: 'Graduação em Engenharia Civil',
      local: 'Universidade Federal do Espírito Santo',
      date_init: '06/2016',
      date_end: '06/2019'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
