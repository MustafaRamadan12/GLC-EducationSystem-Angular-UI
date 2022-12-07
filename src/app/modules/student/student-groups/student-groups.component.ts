import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { StudentService } from 'src/app/service/student/student.service';

@Component({
  selector: 'app-student-groups',
  templateUrl: './student-groups.component.html',
  styleUrls: ['./student-groups.component.css']
})
export class StudentGroupsComponent implements OnInit {

  constructor(public route:Router, public studentSer:StudentService) { }
    public obj:any;
    public err:any
    public Group:any
  ngOnInit(): void {
    let data:any=sessionStorage.getItem("Login data");
    let Id:any = JSON.parse(data).Id;
    this.studentSer.GetStudentGroup(Id).subscribe({
      next:(res)=>{this.obj=res;console.log(res);
       console.log(this.obj);
   
    
    }, 
error: (e) => {
  console.log(e)
},
complete: () => {
      this.Group=this.obj.group
      console.log(this.Group)
     },
});
      
      }
    }
