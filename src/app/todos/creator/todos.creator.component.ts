import {Component, OnInit, Input} from '@angular/core';
import {ITodo, TStatus} from '../../structures/todos';
import { TodoService } from '../../services/todos.service';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';
@Component ({
    selector: 'todo-creator',
    templateUrl: 'todos.creator.component.html',
    animations: [
        trigger('openClose', [
            state('collapsed, in', style({height:'0px'})),
            state('expanded', style({height:'*'})),
            transition('collapsed <=> expanded', [animate(400, style({height:'*'
            })), animate(300)])

        ])
    ]
})
export class TodoCreatorComponent implements OnInit{

    @Input() id : string;

    public formState : string = 'collapsed';

    public todo : ITodo = { content : '', status: TStatus.Created};

    

    constructor(private todoS : TodoService){

    }

    ngOnInit(){}
    

    save(){
        //console.log(this.id);
        this.todoS.add(this.id , this.todo).then((r)=>{
            this.todo = {content:'', description:null, status: TStatus.Created}
        });
    }

    icon(){
        return (this.formState == 'collapsed')? 'fa-plus' : 'fa-caret-up';
    }

    label(){
        return (this.formState == 'collapsed')? 'Agregar pendiente' : 'Ocultar formulario';
    }

    toggleForm() {
        this.formState = (this.formState == 'collapsed') ? 'expanded' : 'collapsed';
    }
}

