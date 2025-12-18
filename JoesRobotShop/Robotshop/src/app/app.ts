import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HomeComponent } from './component/home-component/home-component';
import { SiteHeaderComponent } from "./component/site-header-component/site-header-component";
import { CatalogComponent } from './component/catalog-component/catalog-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, HomeComponent, SiteHeaderComponent,CatalogComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Robotshop');
}
