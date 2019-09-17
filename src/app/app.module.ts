import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {routes} from './routes';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {OwlDateTimeModule, OwlNativeDateTimeModule} from 'ng-pick-datetime';

import {AngularFireModule} from 'angularfire2';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AuthService} from './services/auth.service';
import {UserService} from './services/users.service';
import {ListService} from './services/lists.service';
import {TodoService} from './services/todos.service';
import {PushNotificationsService} from './services/push-notifications.service';



import { AppComponent } from './base/app.component';
import { HomeComponent } from './home/home.component';
import {TransferHttpCacheModule} from '@nguniversal/common';
import { environment } from '../environments/environment';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './lists/list.component';
import { TodoCreatorComponent } from './todos/creator/todos.creator.component';
import { TodoCardComponent } from './todos/card/todo.card.component';


import { ListCreatorComponent } from './lists/creator/list.creator.component';

import { AuthGuard } from './guards/auth.guard.service';
import { ServiceWorkerModule } from '@angular/service-worker';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ListCreatorComponent,
    ListComponent,
    TodoCreatorComponent,
    TodoCardComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'my-app'}),
    RouterModule.forRoot(routes),
    TransferHttpCacheModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    FormsModule,
    BrowserAnimationsModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    environment.production ? ServiceWorkerModule.register('/ngsw-worker.js') : []
  ],
  providers: [AuthService, AuthGuard, UserService,ListService,TodoService, PushNotificationsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
