import { Component, ElementRef, inject, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Logins } from 'src/app/Models/logins';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthentcationService } from 'src/app/service/auth/authentcation.service';
import jwt_decode from "jwt-decode";
import { elementAt } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errors: string = '';
  Roles:Logins|undefined;
  
  public LoginForm = new FormGroup({
    email: new FormControl(null, [
      Validators.required,
      Validators.email,
      Validators.minLength(2),
      Validators.maxLength(150),
    ]),
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(150),
    ]),
  });

  constructor(public route:Router,public loginSer:AuthentcationService) {
   }
  Ilogin:Logins ={
    role:""
    ,Username:""
    ,Id:""
  }
  public obj={
    Email:'',
    password:''
  }
   Decodedtooken:any;
  ngOnInit(): void {

  }
Log_in()
  {
    this.loginSer.Login(this.LoginForm.value).subscribe({
      next:(res)=>{localStorage.setItem('usertoken',res.token) ;console.log(res);this.loginSer.isLogin=true;
      this.Decodedtooken = jwt_decode(res.token);
  console.log(this.Decodedtooken);
   
    
    }, 
error: (e) => {
  console.log(e)
  this.errors = "Invalid E-Mail Or Password";
  let elem=document.getElementById("ErrorSpan") as HTMLElement;
  elem.innerText=this.errors;
  elem.hidden=false;
},
complete: () => {
     
  // this.route.navigate(['']);
  if(this.Decodedtooken["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"]=="Student")
  {
        console.log("Student")  ;
        this.Ilogin.role="Student";
        this.Ilogin.Username=this.Decodedtooken["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"]
        this.Ilogin.Id=this.Decodedtooken["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"];
        sessionStorage.setItem("Login data",JSON.stringify({role:this.Ilogin.role,username:this.Ilogin.Username,Id:this.Ilogin.Id}))
      console.log(sessionStorage.getItem("Login data"));
           this.route.navigate(['stdgroup']);

  }
  if(this.Decodedtooken["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"]=="Teacher")
  {
        console.log("Teacher")  ;
        this.Ilogin.role="Teacher";
        this.Ilogin.Username=this.Decodedtooken["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"]
        this.Ilogin.Id=this.Decodedtooken["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"];
        sessionStorage.setItem("Login data",JSON.stringify({role:this.Ilogin.role,username:this.Ilogin.Username,Id:this.Ilogin.Id}))
        console.log(sessionStorage.getItem("Login data"));
        this.route.navigate(['teacher/profile']);
  }
  if(this.Decodedtooken["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"]=="Admin")
  {
        console.log("Admin")  ;
        this.Ilogin.role="Admin";
        this.Ilogin.Username=this.Decodedtooken["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"]
        this.Ilogin.Username=this.Decodedtooken["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"]

        sessionStorage.setItem("Login data",JSON.stringify({role:this.Ilogin.role,username:this.Ilogin.Username,Id:this.Ilogin.Id}))
      console.log(sessionStorage.getItem("Login data"));
          // this.route.navigate(['']);

  }
},
});
  }
}