import { Component, signal } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { ProductComponent } from './component/product/product';
import { SalesComponent } from './component/sales/sales';
import { AddproductComponent } from './component/addproduct/addproduct';
import { PipedemoComponent } from './component/pipedemo/pipedemo';

@Component({
  selector: 'app-root',
   imports: [RouterModule,RouterOutlet,RouterLink,ProductComponent,SalesComponent,AddproductComponent,PipedemoComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('serviceangular');
}
