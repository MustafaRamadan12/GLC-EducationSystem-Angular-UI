import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Student } from 'src/app/Models/student';
import { Observable } from 'rxjs';

const IS_EMAIL_EXIST_URL = "emailExist"
const IS_NAME_EXIST_URL = "nameExist"
const ADD_URL = 'api/Account/registerStudent'
@Injectable({
  providedIn: 'root'
})
export class AuthentcationService implements OnInit {

  constructor(private http: HttpClient) { }
  ngOnInit(): void {
  }
  public isLogin = false;
  Login(obj:{}):Observable<any> 
  {
    return this.http.post(`${environment.apiUrl+"/api/account/login"}`,obj);
  }
  public addStudent(student?: Student) {

    this.http.post(`${environment.apiUrl}/${ADD_URL}`, student).subscribe(
      res => console.log(res),
      err => console.log(err)
    );
  }

  public async getStudentName(name: string) {
    return new Promise((resolve, reject) => {
      this.http.get(`${environment.apiUrl}/${IS_NAME_EXIST_URL}/${name}`).subscribe(
        res => resolve(res),
        err => reject(err)
      );
    })
  }

  public async getStudentEmail(email: string) {
    return new Promise((resolve, reject) => {
      console.log(email)
      this.http.get(`${environment.apiUrl}/${IS_EMAIL_EXIST_URL}/${email}`).subscribe(
        res => resolve(res),
        err => reject(err)
      );
    })
  }
}
