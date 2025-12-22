import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { App } from './app';
import { AddproductComponent } from './component/addproduct/addproduct';
import { ProductComponent } from './component/product/product';
import { SalesComponent } from './component/sales/sales';
import { PipedemoComponent } from './component/pipedemo/pipedemo';

export const routes: Routes = [

    { path: '', component: App },
    { path: 'addproduct', component: AddproductComponent },
    { path: 'sales/:id', component: SalesComponent},
    { path: 'product/:id',component:ProductComponent},
    { path: 'pipedemo',component:PipedemoComponent},


];
