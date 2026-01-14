import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  isLoggin:boolean=false
  logUser:string=""
  ngOnInit():void{
    let token = sessionStorage.getItem('token')
    console.log("token",token);

    if(sessionStorage.getItem('token')&&JSON.parse(sessionStorage.getItem("userDetails")||"")){
      this.isLoggin=true
      this.logUser=JSON.parse((sessionStorage.getItem("userDetails"))||"").username
    }
  }
}
