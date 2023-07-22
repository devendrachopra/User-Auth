import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { VerifyOtpComponent } from './verify-otp/verify-otp.component';
const routes: Routes = [
  {
    path: '', component: RegisterComponent,
    data: {
      title: 'Register User'
    }
  },
  {
    path: 'verify-otp', component: VerifyOtpComponent,
    data: {
      title: 'Verify Otp'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
