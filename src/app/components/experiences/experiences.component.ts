import { Component, OnInit } from '@angular/core';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { IExperience } from 'src/app/interfaces/experience';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent implements OnInit {

  head_title = 'Experiências';
  head_icon = faBriefcase;

  exps: IExperience[] = [
    {
      name: 'Estagiário em Desenvolvimento de Software',
      local: 'na 2Solve Engenharia e Tecnologia Ltda.',
      responsabilities: [
        'Criar interfaces de aplicações em Mockups e testar interações com Softwares de Prototipagem (Adobe XD, Figma).',
        'Atualizar interfaces de projetos antigos para tornar mais responsivo.',
        'Preparar manuais básicos de programação para a gestão de conhecimento dos projetos, no Evernote.'
      ]
    },
    {
      name: 'Consultor de Tecnologia',
      local: 'na CT Junior',
      responsabilities: [
        'Planejar, organizar e desenvolver software eficiente em equipe.',
        'Pesquisar, testar e analisar inovações tecnológicas na área de Sistemas Web.',
        'Se conectar com a rede de Empresas Juniores no Brasil e sempre buscar ou oferecer ajuda quando necessário.'
      ]
    },
    {
      name: 'Assessor de T.I.',
      local: 'na 15ª Semana da Engenharia',
      responsabilities: [
        'Criação do layout do site da edição do ano de 2018 do evento: 2018.semanadaengenharia.com.',
        'Desenvolvimento do hardware de validação dos crachás utilizando Raspberry Pi 3 e programação em Python.',
        'Gerenciamento digital da equipe de organizadores, com 30 membros, na plataforma G Suite.'
      ]
    },
    {
      name: 'Gerente de Conteúdo',
      local: 'na AIESEC em Vitória, B2C',
      responsabilities: [
        'Planejamento semanal de estratégias de Marketing.',
        'Criação de Layouts para divulgações digitais e físicas (Facebook Ads, Panfletos, Cartazes).',
        'Acompanhamento da satisfação de clientes após a experiência.'
      ]
    },
    {
      name: 'Membro do time de Acompanhamento de Experiência dos Intercâmbios Profissionais',
      local: 'na AIESEC em Vitória, oGT',
      responsabilities: [
        'Linearizar uma rotina de trabalho e comunicação com culturas e línguas diferentes.',
        'Acompanhar e guiar a experiência profissional e pessoal de um estagiário internacional.',
        'Analisar dados de divulgação e criar personas individuais de cada produto.'
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
