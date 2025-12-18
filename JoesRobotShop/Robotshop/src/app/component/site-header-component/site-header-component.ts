import { Component } from '@angular/core';
import { RouterLink, RouterModule } from "@angular/router";
import { Router } from 'express';

@Component({
  selector: 'site-header',
  imports: [RouterLink,RouterModule],
  templateUrl: './site-header-component.html',
  styleUrl: './site-header-component.css',
})
export class SiteHeaderComponent {

}
