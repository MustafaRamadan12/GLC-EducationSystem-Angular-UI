

import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/Models/student';
import { FormBuilder, Validators, FormGroup, AbstractControl, ValidationErrors } from '@angular/forms';

import { AuthentcationService } from 'src/app/service/auth/authentcation.service';
import { Level } from 'src/app/Persistences/Enums';

import { SignupValidation } from './customValidation';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  student: Student = new Student();
  isMaleChecked: boolean = false;
  isFemaleChecked: boolean = false;
  selectedValue: Level = Level.First;
  form: FormGroup;
  constructor(public route:Router, fb: FormBuilder, private authService: AuthentcationService) {
    this.form = fb.group({
      email: ['', [Validators.required, Validators.email], this.emailShouldBeUnique],
      name: ['', Validators.required, this.nameShouldBeUnique],
      address: ['', Validators.required],
      password: ['', Validators.required, SignupValidation.matchPattern],
      confirmPassword: ['', Validators.required, this.matchPassword],
      parentEmail: ['', [Validators.required, Validators.email]],
      age: ['', [Validators.required, Validators.min(14), Validators.max(18)]],
      level: ['', Validators.required],
      gender: ['', Validators.required]
    },
      {
        // Validators: [this.matchPassword('password', 'confirmPassword')]
      }
    )
  }

  ngOnInit(): void {
  }

  changeMaleState() {
    this.isMaleChecked = !this.isMaleChecked;
  }
  changeFemaleState() {
    this.isFemaleChecked = !this.isFemaleChecked;
  }

  get f() {
    return this.form.controls;
  }


  private nameShouldBeUnique = async (control: AbstractControl): Promise<ValidationErrors | null> => {

    let result = await this.authService.getStudentName(control.value)

    console.log(result)
    if (result) {
      console.log(result)
      return { unique: true }
    }
    else {
      return null;
    }
  }


  private emailShouldBeUnique = async (control: AbstractControl): Promise<ValidationErrors | null> => {

    let result = await this.authService.getStudentEmail(control.value)

    console.log(result)
    if (result) {
      console.log(result)
      return { unique: true }
    }
    else {
      return null;
    }
  }

  // private match = async (pwd?: string, pwdConfirm?: string) => {
  //   if (pwd !== pwdConfirm)
  //     return { notMatched: true }
  //   else return null
  // }
  private matchPassword = async (control: AbstractControl)
    : Promise<ValidationErrors | null> => {
    console.log(this.f['email'].errors?.['email'])
    if (control.value === this.f['password'].value)
      return null
    else {
      return { notMatched: true }
    }
  }

  private mappingStudentData(): Student {
    console.log(this.f['email'].value)

    this.student.Email = this.f['email'].value
    this.student.UserName = this.f['name'].value
    this.student.Password = this.f['password'].value
    this.student.ConfirmPassword = this.f['confirmPassword'].value
    this.student.Age = this.f['age'].value
    this.student.Level = this.f['level'].value
    this.student.Gender = this.f['gender'].value
    this.student.Address = this.f['address'].value
    this.student.ParentEmail = this.f['parentEmail'].value

    return this.student;
  }
  submit() {
    let st = this.mappingStudentData();
  let res:any= this.authService.addStudent(st)
    if(res.status==="Error")
    {
      this.route.navigate(['signup'])
    }
    else
      this.route.navigate(['login']);

  }
}
