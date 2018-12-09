import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PositionDashboardComponent } from './position/position-dashboard/position-dashboard.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashoboard',
    pathMatch: 'full'
  },
  { path: 'dashoboard', component: PositionDashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
