import { Component, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeacherModel } from 'src/app/Models/teacher-model';
import { TeacherService } from 'src/app/service/teacher/teacher.service';

@Component({
  selector: 'app-teacher-profile',
  templateUrl: './teacher-profile.component.html',
  styleUrls: ['./teacher-profile.component.css']
})
export class TeacherProfileComponent implements OnInit {

  public teacherInfo?: TeacherModel;
  public MyError: string = '';
  public TeacherId: string = "";
  public TeacherSubject?: any[] = [];
  constructor(public myUrl: ActivatedRoute, public teacher_servers: TeacherService) {
    this.TeacherId = this.myUrl.snapshot.params["id"];
  }

  ngOnInit(): void {

    let data: any = sessionStorage.getItem("Login data");
    this.TeacherId = JSON.parse(data).Id;


    this.teacher_servers.GetById(JSON.parse(data).Id).subscribe({
      next: (data:any) => { this.teacherInfo = data },
      error: (erro:any) => { this.MyError = erro.message }
    });

    // this.teacher_servers.GetSubjectById(this.TeacherId).subscribe({
    //   next: (data:any) => { this.TeacherSubject = data; },
    //   error: (erro:any) => { this.MyError = erro.message }
    // });


  }
  // show() {
  //   this.teacher_servers.GetById(this.TeacherId).subscribe({
  //     next: (data) => { this.teacherInfo = data },
  //     error: (erro) => { this.MyError = erro.message }
  //   })

  //   this.teacher_servers.GetSubjectById(this.TeacherId).subscribe({
  //     next: (data) => { this.TeacherSubject = data; },
  //     error: (erro) => { this.MyError = erro.message }
  //   })
  // }
}
