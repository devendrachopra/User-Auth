import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard.routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

//COMPONENTS
import { MyDashboardComponent } from './my-dashboard/my-dashboard.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { DashboardComponent } from './dashboard.component';
import { FilterPipe } from 'src/app/pipe/filter.pipe';
import { MatCardModule } from '@angular/material/card';

import { ProductDetailsComponent } from './product-details/product-details.component';
@NgModule({
  declarations: [
    DashboardComponent,
    MyDashboardComponent,
    EditProfileComponent,
    FilterPipe,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule
  ]
})
export class DashboardModule { }
