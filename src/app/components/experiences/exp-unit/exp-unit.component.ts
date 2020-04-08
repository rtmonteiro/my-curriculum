import { Component, OnInit, Input } from '@angular/core';
import { IExperience } from 'src/app/interfaces/experience';

@Component({
  selector: 'app-exp-unit',
  templateUrl: './exp-unit.component.html',
  styleUrls: ['./exp-unit.component.scss']
})
export class ExpUnitComponent implements OnInit {

  @Input() exp_info: IExperience;
  
  constructor() { }

  ngOnInit(): void {
  }

}
