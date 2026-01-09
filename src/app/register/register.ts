import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Api } from '../../services/api';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule], // 1st step
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  //3rd step
  registerForm:FormGroup;

  //2nd step DI:formBuilder
  constructor(private serviceApi:Api,private fb:FormBuilder){
    //4th step : form array creation
    this.registerForm=this.fb.group({
      username:["Shinas"],
      email:["shinas@gmail.com"],
      password:["123"]
    })
  }
  //5 control passes throuh HTML page

  regsiter(){
    // this.serviceApi.registerAPI()
  }

}
