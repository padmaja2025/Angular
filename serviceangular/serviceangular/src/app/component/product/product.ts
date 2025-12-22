import { Component, Input } from '@angular/core';
import { Product } from '../../model/product';
import { ProductService } from '../../service/product';

@Component({
  selector: 'product',
  imports: [],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class ProductComponent {

  product !: Product;
  
  @Input() id!:number;
 /* @Input() name!:string;
  @Input() price!:number;
  @Input() description!:string;*/

  _productservice !: ProductService
  constructor(private productservice:ProductService){
     this._productservice = productservice;
  //   this.product = this.productservice.getProduct(100);
  }

  ngOnInit(){
    this.product= this.productservice.getProduct(this.id);
  }
  
}
