import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) },
  { path: 'shop', loadComponent: () => import('./pages/shop/shop.component').then(m => m.ShopComponent) },
  { path: 'product/:id', loadComponent: () => import('./pages/product/product.component').then(m => m.ProductComponent) },
  { path: 'login', loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent) },
  { path: '**', redirectTo: '' }
];
