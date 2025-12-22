import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Productv2Service } from '../../service/productv2';
import { Product } from '../../model/product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'pipedemo',
  imports: [CommonModule],
  templateUrl: './pipedemo.html',
  styleUrl: './pipedemo.css',
})
export class PipedemoComponent {

  title='Angular pipes demo';
  today =new Date();
  price= 12345.6789;
  message='welcome to angular pipes demo';  
  percentage=0.256;
  jsonData={name:'product1',price:1000,description:'product 1 description'};
  items=['item1','item2','item3','item4'];

 customMessage= 'Hello World!';

 asyncProducts!: Observable<Product[]>;

 productservice !: Productv2Service
 
 constructor(productservice:Productv2Service){
   this.productservice = productservice;

 }
ngOnInit():void{

  this.asyncProducts = this.productservice.getAllProducts();
}



} 
