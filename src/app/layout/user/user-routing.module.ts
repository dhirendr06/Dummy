import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { UserComponent } from "./user.component";
import { ReportsComponent } from "./components/reports/reports.component";
import { ResourcesComponent } from "./components/admin/resources/resources.component";
import { ProjectsComponent } from "./components/admin/projects/projects.component";
import { CustomersComponent } from "./components/admin/customers/customers.component";

const routes: Routes = [
  {
        path: '', component: UserComponent,
        children: [
            {
                path: '',
                children: [
                    { path: '', component: DashboardComponent }
                ]
             },
             {
                path: 'home',
                children: [
                    { path: '', component: DashboardComponent }
                ]
             },
             {       
                path: 'reports',
                children: [
                    { path: '', component: ReportsComponent }
                ]
             }
             ,
             {       
                path: 'resources',
                children: [
                    { path: '', component: ResourcesComponent }
                ]
             }
             ,
             {       
                path: 'projects',
                children: [
                    { path: '', component: ProjectsComponent }
                ]
             }
             ,
             {       
                path: 'coustomers',
                children: [
                    { path: '', component: CustomersComponent }
                ]
             }
        ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
