import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyDashboardComponent } from './my-dashboard/my-dashboard.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { DashboardComponent } from './dashboard.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
const routes: Routes = [
  {
    path : '',
    component : DashboardComponent,
    children : [
      {
        path: 'my-dashboard', component: MyDashboardComponent,
        data: {
          title: 'My Dashboard'
        }
      },
      {
        path: 'edit-profile', component: EditProfileComponent,
        data: {
          title: 'Edit Profile'
        }
      },
      {
        path : 'product-detail/:id',
        component : ProductDetailsComponent,
        data :{
          title : 'Product Details'
        }
      }
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
