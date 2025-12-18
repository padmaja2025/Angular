import { Routes } from '@angular/router';
import path from 'path';
import { CatalogComponent } from './component/catalog-component/catalog-component';
import { HomeComponent } from './component/home-component/home-component';

export const routes: Routes = [
   {path:'home', component: HomeComponent},
   {path:'catalog', component: CatalogComponent},
   { path:'', redirectTo:'home', pathMatch:'full' }
    
];
