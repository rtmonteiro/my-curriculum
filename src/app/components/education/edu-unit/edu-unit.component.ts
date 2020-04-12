import { Component, OnInit, Input } from '@angular/core';
import { IEducation } from 'src/app/interfaces/education';

@Component({
  selector: 'app-edu-unit',
  templateUrl: './edu-unit.component.html',
  styleUrls: ['./edu-unit.component.scss']
})
export class EduUnitComponent implements OnInit {

  @Input() edu_info: IEducation;

  constructor() { }

  ngOnInit(): void {
  }

}
