import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AgmCoreModule } from '@agm/core';
import { CalendarModule } from 'angular-calendar';

import { routing } from './app.routing';
import { AppSettings } from './app.settings';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './pages/errors/not-found/not-found.component';


import { MatFormFieldModule, MatInputModule, MatCheckboxModule } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,    
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatFormFieldModule, 
    MatInputModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBNcjxo_35qnEG17dQvvftWa68eZWepYE0'
    }),
    CalendarModule.forRoot(),
    routing
  ],
  providers: [ AppSettings ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
