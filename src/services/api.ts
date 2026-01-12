import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Api {
  
  serverUrl:string="http://localhost:3000"

  constructor(private http:HttpClient){}

  registerAPI(reqBody:any){
    return this.http.post(`${this.serverUrl}/api/register`,reqBody)
  }

  loginAPI(reqBody:any){
    return this.http.post(`${this.serverUrl}/api/login`,reqBody)
  }

  GetRecipeAPI(){
    return this.http.get(`${this.serverUrl}/api/allRecipes`)
  }

  ViewARecipeAPI(id:any){
    return this.http.get(`${this.serverUrl}/api/view-Recipe/${id}`)
  }

}

