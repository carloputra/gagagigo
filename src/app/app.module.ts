import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


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

const appRoutes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'cards', component: CardsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidenavComponent,
    CardsComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, 
    RouterModule.forRoot(appRoutes),
    
    MatButtonModule, MatSidenavModule, MatToolbarModule, MatGridListModule, MatSliderModule,

    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
