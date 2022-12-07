import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './component/side-bar/side-bar.component';

import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { FooterBarComponent } from './component/footer-bar/footer-bar.component';
import { TeacherModule } from '../teacher/teacher/teacher.module';

@NgModule({
  declarations: [SideBarComponent, NavBarComponent, FooterBarComponent],
  imports: [CommonModule,TeacherModule],
  exports: [NavBarComponent, SideBarComponent,FooterBarComponent]
})
export class SharedModule {}
