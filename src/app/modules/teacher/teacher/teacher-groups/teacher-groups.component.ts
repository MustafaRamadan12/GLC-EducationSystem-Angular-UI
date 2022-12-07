import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeacherService } from 'src/app/service/teacher/teacher.service';

@Component({
  selector: 'app-teacher-groups',
  templateUrl: './teacher-groups.component.html',
  styleUrls: ['./teacher-groups.component.css']
})
export class TeacherGroupsComponent implements OnInit {

  constructor(public route:Router,public techSer:TeacherService) { }
  obj:any
  teacherGroups:any
  ngOnInit(): void {
    let data:any=sessionStorage.getItem("Login data");
    let Id:any = JSON.parse(data).Id;
    this.techSer.GetStudentGroup(Id).subscribe({
      next:(res)=>{this.obj=res;console.log(res);
       console.log(this.obj);
   console.log(100);
    
    }, 
error: (e) => {
  console.log(e)
},
complete: () => {
      this.teacherGroups=this.obj.groups
      console.log(this.teacherGroups)
     },
});

  }

}
