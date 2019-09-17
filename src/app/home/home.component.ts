import {Component, OnInit} from '@angular/core';
import {ListService} from '../services/lists.service';
import { trigger,state,style,transition,animate,keyframes, query,stagger } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: `home.component.html`,
  animations: [
    trigger('enterState',[
      /*state('void', style({
        transform: 'translateX(-100%)',
        opacity:0
      })),
      transition(':enter', [
        animate(300, style({
          transform: 'transalateX(0)',
          opacity:1
        }))
      ])*/

      //este si funcionó
      state('in',style({ opacity: 1, transform: 'translateX(0)' })),
      transition(':enter',[
          style({opacity: 0, transform:'translateX(-100%)'}),
          animate(250)
      ])
/*
      transition("* => *", [
        query(':enter', [
          style({transform: 'translateX(-100%)', opacity:0}),
          stagger(50,[
            animate(200,style({transform:'translateX(0)', opacity:1}))
          ])
        ],{optional:true})
      ])*/
    ])
  ]
})
export class HomeComponent implements OnInit {
  public message: string;

  constructor(public listS : ListService) {}

  ngOnInit() {
    this.message = 'Hola';
  }
}
