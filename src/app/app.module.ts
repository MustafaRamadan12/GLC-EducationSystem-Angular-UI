import { LoginComponent } from './modules/authuntecation/compenent/login/login.component';

import { AuthentcationService } from 'src/app/service/auth/authentcation.service';
import { NgModule } from '@angular/core';
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { DashboardModule } from './modules/dashboard/dashboard.module';

import { GeneralModule } from './modules/general/general.module';
import { AuthuntecationModule } from './modules/authuntecation/authuntecation.module';
import { SharedModule } from './modules/shared/shared.module';
import { ChatModule } from './modules/chat/chat.module/chat.module';
import { StudentModule } from './modules/student/student/student.module';
import { TeacherModule } from './modules/teacher/teacher/teacher.module';
import { TeacherRoutingModule } from './modules/teacher/teacher/teacher-routing.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    AuthuntecationModule,
    DashboardModule,
    GeneralModule,
    HttpClientModule,
    ChatModule,
    StudentModule,
    TeacherModule,
    TeacherRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
