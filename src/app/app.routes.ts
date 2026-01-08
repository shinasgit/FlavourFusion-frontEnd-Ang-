import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Profile } from './profile/profile';
import { ViewRecipe } from './view-recipe/view-recipe';
import { SavedRecipe } from './saved-recipe/saved-recipe';
import { Recipies } from './recipies/recipies';
import { Register } from './register/register';
import { Login } from './login/login';
import { Contact } from './contact/contact';
import { About } from './about/about';

export const routes: Routes = [
    {
        path:"",component:Home
    },
    {
        path:"about",component:About
    },
    {
        path:"contact",component:Contact
    },
    {
        path:"login",component:Login
    },
    {
        path:"register",component:Register
    },
    {
        path:"All-recipes",component:Recipies
    },
    {
        path:"saved-recipes",component:SavedRecipe
    },
    {
        path:"view-Recipe/:id",component:ViewRecipe
    },
    {
        path:"profile",component:Profile
    }
];
