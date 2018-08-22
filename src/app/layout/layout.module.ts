import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from "./layout.component";
import { AppMaterialModule } from "../app-material/app-material.module";
import { HeaderComponent } from './shared/header/header.component';





@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule,
    AppMaterialModule
  ],
  declarations: [LayoutComponent, HeaderComponent]
})
export class LayoutModule { }
