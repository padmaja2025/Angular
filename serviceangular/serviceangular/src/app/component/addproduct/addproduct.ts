import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Product } from '../../model/product';
import { Productv2Service } from '../../service/productv2';

@Component({
  selector: 'addproduct',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './addproduct.html',
  styleUrl: './addproduct.css',
})
export class AddproductComponent {

  addproductform!: FormGroup;
  prodservice !: Productv2Service;

  constructor(private fb: FormBuilder) {
    this.addproductform = this.fb.group({
      name: ['',[ Validators.required,Validators.minLength(3)]],  
      price: ['', [Validators.required, Validators.min(0)]],
      description: ['']
    });
  }
 
  onSubmit = ():void => {

    let name = this.addproductform.get('name')?.value;
    let price = this.addproductform.get('price')?.value;
    let description = this.addproductform.get('description')?.value;
    let product = new Product(0,name,name,price,description);
    console.log("Product to be added ", product);
     this.prodservice.addProduct(product);
    

  }
}
