import { Component, OnInit, ElementRef } from '@angular/core';
import { faCrosshairs } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.scss']
})
export class GoalComponent implements OnInit {

  head_title = 'Objetivos Profissionais';
  head_icon = faCrosshairs;

  goal_text = 'Almejo a vaga de estágio de Desenvolvedor e através deste cargo, me desafiar em novas atividades que envolvam o aprendizado de novas frameworks, que utilizem a computação na nuvem, onde haja a aplicação de métodos ágeis de gerenciamento de equipes e eficiência (Scrum, GTD), e que exija a busca por inovação e agilidade para a solução de problemas. Eu realmente procuro iniciar a minha vida profissional dentro de uma empresa que me desafie e que eu posso de alguma forma contribuir para o avanço dela.';

  constructor(private el:ElementRef){}

  show(){
    console.log(this.el.nativeElement);

    console.log(`height---${this.el.nativeElement.offsetHeight}`);
    console.log(`width---${this.el.nativeElement.offsetWidth}`);
  }

  ngDoCheck(): void {
  }

  ngOnInit(): void {

  }

}

// @Directive({
//   selector: '[my-move]',
//   host: {
//     '(click)': "show()"
//   }
// })

// export class MoveDirective{
//   constructor(private el:ElementRef){}

//   show(){
//     console.log(this.el.nativeElement);

//     console.log(`height---${this.el.nativeElement.offsetHeight}`);
//     console.log(`width---${this.el.nativeElement.offsetWidth}`);
//   }
// }
