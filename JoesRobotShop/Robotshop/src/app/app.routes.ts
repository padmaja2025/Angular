import { Routes } from '@angular/router';
import path from 'path';
import { CatalogComponent } from './component/catalog-component/catalog-component';
import { HomeComponent } from './component/home-component/home-component';
import { CartComponent } from './component/cart-component/cart-component';

export const routes: Routes = [
   {path:'home', component: HomeComponent},
   {path:'catalog', component: CatalogComponent},
   {path: 'cart', component:CartComponent  ,title:'Cart'},
    
   { path:'', redirectTo:'home', pathMatch:'full' },
   
];
