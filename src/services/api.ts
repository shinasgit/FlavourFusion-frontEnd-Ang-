import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  //append token to headers
  appendToken(){
    let headers = new HttpHeaders
    const token = sessionStorage.getItem('token')
    if(token){
      headers=headers.append("Authorization",`Bearer ${token}`)
    }
    return {headers}
  }

  ViewARecipeAPI(id:any){
    return this.http.get(`${this.serverUrl}/api/view-Recipe/${id}`)
  }

  RetatedRecipeAPI(cuisine:any){
    return this.http.get(`${this.serverUrl}/api/relatedrecipe?cuisine=${cuisine}`)
  }

  AddtoSavedRecipeAPI(recipeId:any,reqBody:any){
    return this.http.post(`${this.serverUrl}/api/savedrecipe/${recipeId}`,reqBody,this.appendToken())
  }

  getSavedRecipeAPI(){
    return this.http.get(`${this.serverUrl}/api/getsavedrecipe/`,this.appendToken())
  }

  deleteSavedRecipe(id:any){
    return this.http.delete(`${this.serverUrl}/deletesavedrecipe/${id}`,this.appendToken())
  }
}

