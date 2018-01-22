import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { RouterModule, Routes } from '@angular/router';

import 
{ 
  MatButtonModule, MatSidenavModule, MatToolbarModule, MatGridListModule,
  MatSliderModule,
} from '@angular/material';

import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import { HomeComponent } from './home/home.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { CardsComponent } from './cards/cards.component';
import { CardComponent } from './cards/card/card.component';

import { ApiaryService } from './_service/apiary.service';
import { FirestoreService } from './_service/firestore.service';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { EventService } from './_service/event.service';
import { CardDetailComponent } from './cards/card-detail/card-detail.component';


const appRoutes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'cards', component: CardsComponent },
];

export const firebaseConfig = {
  apiKey: "AIzaSyB5OjzH0ah9VQEc86UpATcqmuj34gcfR2s",
  authDomain: "gagagigo-4a90d.firebaseapp.com",
  databaseURL: "https://gagagigo-4a90d.firebaseio.com",
  projectId: "gagagigo-4a90d",
  storageBucket: "gagagigo-4a90d.appspot.com",
  messagingSenderId: "784110137569"
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidenavComponent,
    CardsComponent,
    CardComponent,
    CardDetailComponent,
  ],
  imports: [
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,

    BrowserModule,
    BrowserAnimationsModule, 
    RouterModule.forRoot(appRoutes),

    HttpClientModule,
    
    MatButtonModule, MatSidenavModule, MatToolbarModule, MatGridListModule, MatSliderModule,

    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [ApiaryService, FirestoreService, EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
