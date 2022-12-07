import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }
obj:any
  GetStudentGroup(id:any):Observable<any> 
  {
    console.log(id);
    return this.http.get(environment.apiUrl+"/api/students/studentgroup/"+id)
    
    }
}
