import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AppMaterialModule } from "../../app-material/app-material.module";
import { ReportsComponent } from './components/reports/reports.component';
import { ResourcesComponent } from './components/admin/resources/resources.component';
import { ProjectsComponent } from './components/admin/projects/projects.component';
import { CustomersComponent } from './components/admin/customers/customers.component';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    AppMaterialModule
  ],
  declarations: [UserComponent, DashboardComponent, ReportsComponent, ResourcesComponent, ProjectsComponent, CustomersComponent]
})
export class UserModule { }
