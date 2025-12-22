import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { IProduct } from '../../interface/iproduct';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'product',
  imports: [CommonModule],
  templateUrl: './product-component.html',
  styleUrl: './product-component.css',
})
export class ProductComponent {

  products !: IProduct[];
  @Input() product !: IProduct;
  @Output() buy : EventEmitter<IProduct> = new EventEmitter<IProduct>();

    buyButtonClicked(product:IProduct){
      this.buy.emit();
    }
    
  }

