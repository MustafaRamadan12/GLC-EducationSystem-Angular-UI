import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './compenent/login/login.component';
import { ForgetPasswordComponent} from './forget-password/forget-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { SignUpComponent } from './sign-up/sign-up.component'; 


const routes: Routes = [
  {path : 'signup', component : SignUpComponent},
  {path : 'forget', component : ForgetPasswordComponent},
  {path : 'reset', component : ResetPasswordComponent},
  {path:'login',component:LoginComponent},
];
  
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AuthenticationRoutingModule{}