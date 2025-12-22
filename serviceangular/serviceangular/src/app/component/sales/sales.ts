import { Component, Input } from '@angular/core';
import { Product } from '../../model/product';
import { Productv2Service } from '../../service/productv2';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'sales',
  imports: [CommonModule],
  templateUrl: './sales.html',
  styleUrl: './sales.css',
})
export class SalesComponent {

  product !: Product;
  productlist !: Product[];
  _productv2service !: Productv2Service;
  route!: ActivatedRoute

  @Input() id!:number;
  constructor(private productservice:Productv2Service, route:ActivatedRoute){
      this._productv2service = productservice;
      this.route = route;
  }

  ngOnInit():void{

this.route.paramMap.subscribe(param => {
  const productid = param.get('id');
  if(productid != null){
    this.id =Number(productid);
     this._productv2service.getProduct(this.id).subscribe(response => {this.product = response},
    error => {console.error("error fetching the data") }
 ) ;
}
});


   /*this._productv2service.getAllProducts().subscribe(response => {this.productlist = response},
   error => {console.error("error fetching the data") }
   ); */
  }
}
