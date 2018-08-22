import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExampleComponent } from "./example.component";
import { ExampleTableComponent } from "./components/example-table/example-table.component";
import { ExampleFormsComponent } from "./components/example-forms/example-forms.component";
import{DesignationTableComponent} from "./components/designation/designation.component";

const routes: Routes = [
  {
        path: '', component:ExampleComponent ,
        children: [
          {
                path: '',
                children: [
                    { path: '', component: ExampleTableComponent  }
                ]
             },
             {
                path: 'example-table',
                children: [
                    { path: '', component: ExampleTableComponent }
                ]
             },
             {       
                path: 'example-forms',
                children: [
                    { path: '', component: ExampleFormsComponent }
                ]
             },
             {
                path: 'designation',
                children: [
                    { path: '', component: DesignationTableComponent }
                ]
             }
           
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExampleRoutingModule { }
