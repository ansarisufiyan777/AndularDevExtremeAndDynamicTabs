import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PositionDashboardComponent } from './position-dashboard/position-dashboard.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  { path: 'dashboard', component: PositionDashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
