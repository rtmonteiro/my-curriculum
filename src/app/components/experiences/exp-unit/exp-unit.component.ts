import { Component, OnInit } from '@angular/core';
import { IExperience } from 'src/app/interfaces/experience';

@Component({
  selector: 'app-exp-unit',
  templateUrl: './exp-unit.component.html',
  styleUrls: ['./exp-unit.component.scss']
})
export class ExpUnitComponent implements OnInit {

  exp_info:IExperience = {
    name: 'Estagiário em Desenvolvimento de Software',
    local: 'na 2Solve Engenharia e Tecnologia Ltda.',
    responsabilities: [
      'Criar interfaces de aplicações em Mockups e testar interações com Softwares de Prototipagem (Adobe XD, Figma).',
      'Atualizar interfaces de projetos antigos para tornar mais responsivo.',
      'Preparar manuais básicos de programação para a gestão de conhecimento dos projetos, no Evernote.'
    ]
  };

  constructor() { }

  ngOnInit(): void {
  }

}
