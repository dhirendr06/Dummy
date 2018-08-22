import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { DesignationTableComponent } from "./example/components/designation/designation.component";
import { AppRoutingModule } from './app-routing.module';
import { ActivatedRoute, Router} from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LayoutModule } from "./layout/layout.module";
import { ExampleModule } from "./example/example.module";
//import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    AppComponent,
   // LoginComponent,
  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     BrowserAnimationsModule,
     LayoutModule,
     FormsModule,
     ExampleModule
     
  ],
  exports:[ ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
