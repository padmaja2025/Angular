import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {  ProductComponent } from './product/product';
import { SalesComponent } from './sales/sales';
import { UserComponent } from './user/user';
import { ProductlistComponent } from './productlist/productlist';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ProductComponent,SalesComponent,UserComponent,ProductlistComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('FirstAngular');


  parentfun=(num:number):void => {
    console.log("Event received in parent component"+num);
  }
}
