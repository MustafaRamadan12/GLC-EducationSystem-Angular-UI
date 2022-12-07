import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentGroupsComponent } from '../student-groups/student-groups.component';

const routes: Routes = [{path:'stdgroup',component:StudentGroupsComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
