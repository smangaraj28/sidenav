import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';


import {DashboardViewComponent} from './dashboard-view.component';

import {RouterModule, Routes} from '@angular/router';
import {SideMenuComponent} from './side-menu/side-menu.component';
import {SideMenuItemsComponent} from './side-menu-items/side-menu-items.component';
import {DashboardSidenavComponent} from './dashboard-sidenav/dashboard-sidenav.component';
import {MaterialModule} from '../material.module';
import {ActopnavComponent} from '../actopnav/actopnav.component';


export const DASHBOARD_ROUTES: Routes = [
  {path: '', component: DashboardViewComponent},
];

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(DASHBOARD_ROUTES),
  ],
  declarations: [
    DashboardViewComponent,
    SideMenuComponent,
    SideMenuItemsComponent,
    DashboardSidenavComponent,
    ActopnavComponent
  ]
})
export class DashboardModule {
}
