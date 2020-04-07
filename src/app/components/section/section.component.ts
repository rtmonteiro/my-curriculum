import { Component, OnInit, Input } from '@angular/core';
import { faCrosshairs, IconDefinition } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {

  @Input() icon: IconDefinition;
  @Input() title: string;

  constructor() { }

  ngOnInit(): void {
  }

}
