import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Api } from '../../services/api';


@Component({
  selector: 'app-view-recipe',
  imports: [],
  templateUrl: './view-recipe.html',
  styleUrl: './view-recipe.css',
})
export class ViewRecipe implements OnInit {

  recipeId:any=""
  recipes:any={}

  //to hold related recipe
  relatedRecipe:any[] | undefined

  constructor(private serviceAPI:Api,private ar:ActivatedRoute){}

  ngOnInit(): void {
    //to get an id from particular recipe
    this.ar.params.subscribe(res=>{
      console.log(res);//res:{id:123456789}
      const {id}=res
      this.recipeId=id
      console.log(id);

      this.viewRecipe()
      
    })
  }

  viewRecipe(){
    this.serviceAPI.ViewARecipeAPI(this.recipeId).subscribe({
      next:(res:any)=>{
        console.log(res);
        this.recipes=res
        console.log(res.cuisine);
        
        this.getRelatedRecipe(res.cuisine)
      },
      error:(err)=>{
        console.log(err);
        
      }
    })
  
  }

  getRelatedRecipe(cuisine:any){
    this.serviceAPI.RetatedRecipeAPI(cuisine).subscribe({
      next:(res:any)=>{
        console.log(res); 
        this.recipes=res
        this.relatedRecipe=res
      },
      error:(err)=>{
        console.log("Error",err);
        
      }
    })
  }

  addToSavedRecipe(){
    this.serviceAPI.AddtoSavedRecipeAPI(this.recipeId,this.recipes).subscribe({
      next:(res:any)=>{
        console.log(res);
      },
      error:(err:any)=>{
        console.log("Error: "+err);
        
      }
    })
  }

}
