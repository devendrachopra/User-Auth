import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
const routes: Routes = [
  {
    path: '', 
    loadChildren: () =>
    import('./components/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path : 'dashboard',
    loadChildren: () =>
    import('./components/dashboard/dashboard.module').then(m => m.DashboardModule),
    canActivate : [AuthGuard]
  },
  {
    path : '**',
    redirectTo : ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
