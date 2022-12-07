
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeacherGroupsComponent } from './modules/teacher/teacher/teacher-groups/teacher-groups.component';
import { TeacherProfileComponent } from './modules/teacher/teacher/teacher-profile/teacher-profile.component';

const routes: Routes = [
  {path: 'teacher/profile' , component: TeacherProfileComponent},
  { path: 'teacherGroups', component: TeacherGroupsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
