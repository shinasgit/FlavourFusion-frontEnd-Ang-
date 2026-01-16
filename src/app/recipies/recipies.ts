import { Component, OnInit } from '@angular/core';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { Api } from '../../services/api';
import { Router } from '@angular/router';
import {NgxPaginationModule} from 'ngx-pagination';

@Component({
  selector: 'app-recipies',
  imports: [Header,Footer, NgxPaginationModule],
  templateUrl: './recipies.html',
  styleUrl: './recipies.css',
})
export class Recipies implements OnInit {

  constructor(private serviceApi:Api,private route:Router){}
  
  //creation of array 4 itertaion
  recipes:any=[]
   p: number = 1;
   cuisineType:any=[] //to hold all cuisine types
   nestedMealType:any=[] //to hold mested array
   duplicatedSingleMealType:any=[]
   mealTypeArray:any=[]
   tempArray:any=[]

  ngOnInit(): void {
    this.getAllRecipes()
  }

  getAllRecipes(){
        this.serviceApi.GetRecipeAPI().subscribe({
        next:(res:any)=>{
        console.log(res);
        this.recipes=res
        this.tempArray=res
        this.recipes.forEach((item:any) => {
          !this.cuisineType.includes(item.cuisine) && this.cuisineType.push(item.cuisine)
        })
        //mealtype
        this.nestedMealType=this.recipes.map((item:any)=>item.mealType)
        console.log(this.nestedMealType);
        
        this.duplicatedSingleMealType=this.nestedMealType.flat()
        console.log(this.duplicatedSingleMealType);
        
        this.duplicatedSingleMealType.map((item:any) => {
          !this.mealTypeArray.includes(item) && this.mealTypeArray.push(item)

        })
        console.log(this.mealTypeArray);
        

      },
        error:(err)=>{
        console.log(err);
        
      }
    })
  }

  viewARecipe(id:any){
    if(id){
this.route.navigateByUrl(`/view-Recipe/${id}`)
}
else{
  alert('Please login')
}

  
  
  
  }
  filterRecipe(value:any,item:any){
    console.log(value,item);
    this.recipes = this.tempArray.filter((it:any)=>it[value].includes(item))
  }

}
