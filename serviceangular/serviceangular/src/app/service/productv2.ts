import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Productv2Service {

  serverurl:string ='http://localhost:3000/products'//'https://dummyjson.com/products'
  _httpclient!: HttpClient;

  product !: Product;
  constructor(httpclient: HttpClient) {
    this._httpclient = httpclient;
  }
  

  //CRUD Operations
  //List all products

  getAllProducts =():Observable<Product[]>=>{
    console.log(this.serverurl);
    return this._httpclient.get<Product[]>(this.serverurl);
  }

  getProduct =(id:number):Observable<Product>=>{
    console.log(`${this.serverurl}/${id}`);
    return this._httpclient.get<Product>(`${this.serverurl}/${id}`)
  }

  addProduct = (product:Product):Observable<Product>=>{
    return this._httpclient.post<Product>(this.serverurl,product);
  }

  addProductitem = (prod:Product) :void=>
  {
    return this.product.push(prod);
  }

  deleteProduct = (id:number):Observable<void>=>{
    return this._httpclient.delete<void>(`${this.serverurl}/${id}`);
  }

  
}
