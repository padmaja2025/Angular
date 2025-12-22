import { Injectable } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  

  product !: Product[];

  constructor() {
    this.product = [
      new Product(100,"Mobile",'mobile',25000,"This is mobile product",true),
      new Product(101,"Laptop",'laptop',55000,"This is laptop product",false),
      new Product(102,"Tablet",'tablet',15000,"This is tablet product",true),
      new Product(103,"Desktop",'desktop',35000,"This is desktop product",false)
    ];
   }

   getProduct =(id:number):Product =>
   {
    return this.product.find(p => p.productid === id)!;
//return this.product[id];
   }
   
   getProductList = ():Product[] =>
   {
    return this.product;
   }
}
