import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'product',
  imports: [],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class ProductComponent {
 
  product !:  Product;
  @Input() name!:string;
  @Input () price!:number;
  
  @Output() myEvent = new EventEmitter<number>();
  @Output() myEvent2 = new EventEmitter<any>();
  constructor()
  {
    this.product = new  Product(100,"Mobilie",25000);

  }

  ngOnInit(){
   this.product.name = this.name;
    this.product.price= this.price;
  } 
  generateevent=(data:number):void =>{
    this.myEvent.emit(data);
  }
  generateevent2=(data:number):void =>{
    this.myEvent.emit(data);
  }
  f1=():void =>{
  this.product.price += 1000;
  }
}
