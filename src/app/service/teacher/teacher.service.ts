import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class TeacherService {
 
  constructor(private   http:HttpClient) { }
  GetStudentGroup(id:any):Observable<any> 
  {
    console.log(id);
    return this.http.get(environment.apiUrl+"/api/teacher/teachergroups/"+id)
  }
  GetAll(): Observable<any> {
    return this.http.get(`https://localhost:44309/api/Teacher`);
  }
  GetById(id: string): Observable<any> {
    return this.http.get(`https://localhost:7027/api/teacher/FindById/${id}`);
  }
  Update(id: string, teacherobj: {}): Observable<any> {
    return this.http.post(`https://localhost:7027/api/teacher/${id}/oo`, teacherobj);
  }

  GetSubjectById(id: string): Observable<any> {
    return this.http.get(`https://localhost:7027/api/Subject/FindAllByTeacherID/${id}`);
  }
   
}
