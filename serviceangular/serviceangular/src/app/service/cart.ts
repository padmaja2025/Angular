import { Injectable } from '@angular/core';
import { Cart } from '../model/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  cart !: Cart[];

  constructor() {
    this.cart = [
      new Cart(1,100,"Mobile",25000,1,25000,501),
      new Cart(2,101,"Laptop",55000,1,55000,502),
      new Cart(3,102,"Tablet",15000,2,30000,503),
      new Cart(4,103,"Desktop",35000,1,35000,504)
    ];
   }

   addTOCart= (cartitem:Cart):void =>
   {
    this.cart.push(cartitem);
   }

   removeFromCart=(cartid:number):void =>
   {
    this.cart = this.cart.filter(c => c.cartid !== cartid);
   }  
    getCartList = ():Cart[] =>
    { return this.cart;
    }
}
