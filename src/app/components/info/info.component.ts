import { Component, OnInit } from '@angular/core';
import { faMapMarkerAlt, faPhone, faBirthdayCake, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faGithubAlt } from '@fortawesome/free-brands-svg-icons';
import { IInfo } from '../../interfaces/info';


@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  img_url = '../../assets/perfil.jpg';

  items: IInfo[] = [
    {
      icon: faMapMarkerAlt,
      data: 'Rua Dr. João Batista Miranda Amaral, nº 220, Jardim Camburi, Vitória - ES, Brasil',
      link: 'https://goo.gl/maps/hstgjpfk1ZEnRN5JA'
    },
    {
      icon: faPhone,
      data: '+5527981140407',
      link: 'tel:+5527981140407'
    },
    {
      icon: faLinkedinIn,
      data: '/ryan-monteiro',
      link: 'https://www.linkedin.com/in/ryan-monteiro'
    },
    {
      icon: faGithubAlt,
      data: '/rtmonteiro',
      link: 'https://www.github.com/rtmonteiro'
    },
    {
      icon: faBirthdayCake,
      data: '24/09/1998',
      link: ''
    },
    {
      icon: faEnvelope,
      data: 'monteiroryan10@gmail.com',
      link: 'mailto:monteiroryan10@gmail.com'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
