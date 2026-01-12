import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Api } from '../../services/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
 
  loginForm:FormGroup;

  constructor(private serviceApi:Api , private fb:FormBuilder , private route:Router){
    this.loginForm=this.fb.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
    })
  }

  login(){
    const email = this.loginForm.value.email
    const password = this.loginForm.value.password
    console.log(email,password);
    if(this.loginForm.valid){
      this.serviceApi.loginAPI({email,password}).subscribe(
        {
            next:(res:any)=>{
            console.log(res);
            alert(res.message)
            if(res.existingUser.role=="Admin"){
              this.route.navigateByUrl("/admin")
            }else{
               this.route.navigateByUrl("/")
            }
           
          },
          error:err=>{
            console.log("Login error",err);
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
