import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './shop.component.html',
})
export class ShopComponent { }
