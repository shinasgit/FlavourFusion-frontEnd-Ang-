import { Component, OnInit } from '@angular/core';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { Api } from '../../services/api';
import { Router } from '@angular/router';


@Component({
  selector: 'app-recipies',
  imports: [Header,Footer],
  templateUrl: './recipies.html',
  styleUrl: './recipies.css',
})
export class Recipies implements OnInit {

  constructor(private serviceApi:Api,private router:Router){}
  
  //creation of array 4 itertaion
  recipes:any=[]


  ngOnInit(): void {
    this.getAllRecipes()
  }

  getAllRecipes(){
        this.serviceApi.GetRecipeAPI().subscribe({
        next:(res:any)=>{
        console.log(res);
        this.recipes=res
        
      },
        error:(err)=>{
        console.log(err);
        
      }
    })
  }

  viewARecipe(id:any){
    console.log(id)
  this.router.navigateByUrl(`view-Recipe/${id}`)
    
  }

}
