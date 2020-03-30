import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  img_url = '../../assets/perfil.jpg';

  items = [1, 2, 3, 4, 5];

  constructor() { }

  ngOnInit(): void {
  }

}
