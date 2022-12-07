import { AuthentcationService } from './../../../service/auth/authentcation.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { AbstractControl, ValidationErrors } from "@angular/forms";
import { inject } from '@angular/core';

export class SignupValidation {


    constructor() {

    }


    static async matchPattern(control: AbstractControl): Promise<ValidationErrors | null> {
        let regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6}$/;

        if (!regex.test(control.value))
            return { matchPattern: true }
        return null
    }
    // static async matchPassword(password: AbstractControl): Promise<ValidationErrors | null> {
    //     if (password === confirmPassword)
    //         return { passwordMatched: true }
    //     else
    //         return null;
    // }

    // static shouldBeUnique(control: AbstractControl): ValidationErrors | null {
    //     var result = getStudentName(control.value);
    //     if (result === null)
    //         return { unique: true }
    //     else
    //         return null;
    // }
}