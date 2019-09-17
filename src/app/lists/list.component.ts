import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {ITodo} from '../structures/todos';
import { Observable } from '../../../node_modules/rxjs';

//import {enterAnimation} from '../animations/animations';
import { TodoService } from '../services/todos.service';
import { identifierModuleUrl } from '../../../node_modules/@angular/compiler';

@Component({
    selector: 'list',
    templateUrl: 'list.component.html',
    //animations: [enterAnimation]
})
export class ListComponent implements OnInit {

    public listId : string;
    public todos: Observable<ITodo[]>;

    trackTodoObjects = (id, obj) => obj.id;

    
    constructor(private route: ActivatedRoute, private todoS : TodoService){}
    
    ngOnInit(){
        this.listId = this.route.snapshot.params.id;

        this.todos = this.todoS.getFromList(this.listId);
    }
}