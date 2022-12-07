import { AuthentcationService } from 'src/app/service/auth/authentcation.service';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './compenent/login/login.component';
import { SharedModule } from '../shared/shared.module';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';



@NgModule({
  declarations: [
    LoginComponent,
    SignUpComponent,
    ForgetPasswordComponent,
    ResetPasswordComponent, 
    
  ],
  imports: [
    CommonModule,
    SharedModule, 
    AuthenticationRoutingModule,
    ReactiveFormsModule
  ],
  providers:[AuthentcationService],
  

})
export class AuthuntecationModule { }
