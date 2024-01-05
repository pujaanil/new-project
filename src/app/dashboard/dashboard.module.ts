import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    RouterModule  ]
})
export class DashboardModule { }
