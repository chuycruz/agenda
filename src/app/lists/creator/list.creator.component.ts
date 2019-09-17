import {Component, OnInit} from '@angular/core';
import {IList} from '../../structures/lists';
import {ListService} from '../../services/lists.service';

@Component ({
    selector: 'creator',
    templateUrl: 'list.creator.component.html'
})

export class ListCreatorComponent implements OnInit {

    public list : IList = { title: '' };

    constructor(private ListS : ListService){}

    ngOnInit(){

    }

    save(){
        this.ListS.add(this.list).then(console.log);
        this.list.title = '';
    }
}