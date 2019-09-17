import {Component} from '@angular/core';
import { AngularFireAuth } from '../../../node_modules/angularfire2/auth';
import {Router} from '@angular/router';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';
import * as firebase from 'firebase/app';

import {PushNotificationsService} from '../services/push-notifications.service';



@Component({
  selector: 'app-root',
  templateUrl: `app.component.html`,
  styles: [],
  animations: [
    trigger('myAwesomeAnimation', [
      state('small', style({
        transform: 'scale(1)',
      })),
      state('large', style({
        transform: 'scale(1.2)',
      })),
      transition('small => large', animate('300ms ease-in') ),
    ])
  ]
})
export class AppComponent {
  state: string = 'small';

  public token : any;

  public showPanel : boolean = false;

  constructor(public afAuth : AngularFireAuth, private router : Router, public pushS:  PushNotificationsService){}
  ngOnInit(){
    this.token = this.pushS.getSubscription();
  }

  
  requestPushPermission(){
    this.pushS.requestPermission().then(()=> {
        this.token = this.pushS.getSubscription();
        this.toggleNotificationsWindow();
      
    });
  }

  cancelPermission(){
    this.pushS.cancelPermission().then(()=> {
      this.token = this.pushS.getSubscription();
      this.toggleNotificationsWindow();
    
  });
  }

  toggleNotificationsWindow(){
    this.showPanel = !this.showPanel;
  }
  
  logout(){
    this.afAuth.auth.signOut().then(()=>{
      this.router.navigate(["/login"]);
    })
  }
  animateMe(){
    this.state = (this.state === 'small' ? 'large' : 'small');
  }
}
