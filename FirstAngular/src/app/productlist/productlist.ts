import { Component } from '@angular/core';
import { Product } from '../model/product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'productlist',
  imports: [CommonModule],
  templateUrl: './productlist.html',
  styleUrl: './productlist.css',
})
export class ProductlistComponent {

  productlist!: Product[]

  constructor(){
    this.productlist = [
      new Product(100,"Mobile",25000),
      new Product(101,"Laptop",55000),
      new Product(102,"Tablet",15000),
      new Product(103,"Desktop",35000)
    ];
  }

}
