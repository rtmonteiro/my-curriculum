import { Component, OnInit, Directive, ElementRef } from '@angular/core';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.scss']
})
export class GoalComponent implements OnInit {

  head_title = 'Objetivos Profissionais';

  constructor(private el:ElementRef){}

  show(){
    console.log(this.el.nativeElement);

    console.log(`height---${this.el.nativeElement.offsetHeight}`);
    console.log(`width---${this.el.nativeElement.offsetWidth}`);
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
