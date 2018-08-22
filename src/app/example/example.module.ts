import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {
  MatButtonModule, MatDialogModule, MatIconModule, MatInputModule, MatPaginatorModule, MatSortModule,
  MatTableModule, MatToolbarModule,
} from '@angular/material';

import { AddDialogComponent } from '../example/components/dialogs/example-table/add/add.dialog.component';
import { EditDialogComponent } from '../example/components/dialogs/example-table/edit/edit.dialog.component';
import { DeleteDialogComponent } from '../example/components/dialogs/example-table/delete/delete.dialog.component';

import { DesignationAddDialogComponent } from '../example/components/dialogs/designation/add/add.dialog.component';
import { DesignationEditDialogComponent } from '../example/components/dialogs/designation/edit/edit.dialog.component';
import { DesignationDeleteDialogComponent } from '../example/components/dialogs/designation/delete/delete.dialog.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExampleRoutingModule } from './example-routing.module';
import { ExampleComponent } from "./example.component";
import { ExampleHeaderComponent } from './shared/example-header/example-header.component';
import { AppMaterialModule } from "../app-material/app-material.module";
import { ExampleTableComponent } from './components/example-table/example-table.component';
import { DesignationTableComponent } from './components/designation/designation.component';
import { ExampleFormsComponent } from './components/example-forms/example-forms.component';
import { DataService } from '../example/components/services/data.service';
import{DesignationService} from '../example/components/services/designation.service';

@NgModule({
  imports: [
    CommonModule,
    ExampleRoutingModule,
    AppMaterialModule,
    FormsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatSortModule,
    MatTableModule,
    MatToolbarModule,
    HttpClientModule
  ],
  entryComponents: [
    AddDialogComponent,
    EditDialogComponent,
    DeleteDialogComponent,
    DesignationAddDialogComponent,
    DesignationEditDialogComponent,
    DesignationDeleteDialogComponent
  ],
  providers: [DataService,
  DesignationService],
  declarations: [ExampleComponent,
   ExampleHeaderComponent,
    ExampleTableComponent,
    DesignationTableComponent, 
    ExampleFormsComponent,
    AddDialogComponent,
    EditDialogComponent,
    DeleteDialogComponent,
    DesignationAddDialogComponent,
    DesignationEditDialogComponent,
    DesignationDeleteDialogComponent]
})
export class ExampleModule { }
