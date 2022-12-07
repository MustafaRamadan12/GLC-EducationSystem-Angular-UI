import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';
import { TeacherGroupsComponent } from './teacher-groups/teacher-groups.component';
import { TeacherProfileComponent } from './teacher-profile/teacher-profile.component';
import { TeacherService } from 'src/app/service/teacher/teacher.service';


@NgModule({
  declarations: [
    TeacherGroupsComponent,
    TeacherProfileComponent
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule
  ]
  ,providers:[TeacherService]
})
export class TeacherModule { }
