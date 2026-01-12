import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Api } from '../../services/api';
import { Router } from '@angular/router';

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
  constructor(private serviceApi:Api,private fb:FormBuilder,private route:Router){
    //4th step : form array creation
    this.registerForm=this.fb.group({
      username:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
    })
  }
  //5 control passes throuh HTML page

  register(){
    const username = this.registerForm.value.username
    const email = this.registerForm.value.email
    const password = this.registerForm.value.password
    console.log(username,email,password);
    if(this.registerForm.valid){
      this.serviceApi.registerAPI({username,email,password}).subscribe(
        {
          next:(res:any)=>{
            console.log(res);
            alert(res.message)
            this.route.navigateByUrl('/login')
          },
          error:err=>{
            console.log("Register error",err);
            alert(err.error)
          }
        }
      )
      alert("Success")
    }else{
      alert("Validation Error")
    }
    
    }

}
