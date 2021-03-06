import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import { Observable } from 'rxjs/Rx';
import { AuthService } from './auth.service';
import {IList} from '../structures/lists';

import * as firebase from 'firebase';

@Injectable ()
export class ListService{
    public uid : string;
    public listsCollection : AngularFirestoreCollection<IList>;
    public lists : Observable<IList[]>;

    constructor(public afs : AngularFirestore, private auth : AuthService){
        this.auth.getUser().subscribe(user =>{
            this.uid = user.uid;

            if(this.uid) this.setCollection();
        })
    }

    setCollection(){
        this.listsCollection = this.afs.collection('users').doc(this.uid).collection<IList>('lists');

        this.lists = this.listsCollection.snapshotChanges().map(actions=>{
            return actions.map(item=>{
                const data = item.payload.doc.data() as IList;
                const id = item.payload.doc.id;

                return {...data, id};
            })
        })
    }

    add(list : IList) : Promise<any>{
        if(!this.listsCollection) throw Error('Por favor ingresa un valor...');

        const createdAt = firebase.firestore.FieldValue.serverTimestamp();

        list.createdAt = createdAt;

        return this.listsCollection.add(list);
    }
}