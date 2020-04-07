import { Component, OnInit, Input } from '@angular/core';
import { faCrosshairs } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {

  faCoffe = faCrosshairs;
  @Input() title: string;

  constructor() { }

  ngOnInit(): void {
  }

}
