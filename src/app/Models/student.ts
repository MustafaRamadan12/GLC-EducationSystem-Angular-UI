import { Gender, Level } from "../Persistences/Enums";

export class Student {
    UserName: string =''; 
    Email: string =''; 
    Password: string = ''; 
    ConfirmPassword: string =''; 
    Address: string =''; 
    ParentEmail: string = ''; 
    Age: number = 0; 
    Level: number = 1; 
    Gender: Gender = Gender.Male; 
}

