import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

//COMPONENTS
import { RegisterComponent } from './register/register.component';
import { NgxOtpInputModule } from "ngx-otp-input";
import { VerifyOtpComponent } from './verify-otp/verify-otp.component';
@NgModule({
  declarations: [
    RegisterComponent,
    VerifyOtpComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgxOtpInputModule,
  ]
})
export class AuthModule { }
