import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { Player1Component } from './player1/player1.component';
import { Player2Component } from './player2/player2.component';
import { MenuComponent } from './menu/menu.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { Routes, RouterModule } from '@angular/router';
import {FormsModule} from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [

    AppComponent,
    Player1Component,
    Player2Component,
    MenuComponent,
    CreateStudentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
