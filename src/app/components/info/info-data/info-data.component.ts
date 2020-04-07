import { Component, OnInit, Input } from '@angular/core';
import { IInfo } from '../../../interfaces/info';

@Component({
  selector: 'app-info-data',
  templateUrl: './info-data.component.html',
  styleUrls: ['./info-data.component.scss']
})
export class InfoDataComponent implements OnInit {

  @Input() info_data: IInfo;
  
  constructor() { }

  ngOnInit(): void {
  }

}
