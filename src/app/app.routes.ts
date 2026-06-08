import { Routes } from '@angular/router';
import { Home } from './home/home';
import { LoginComponent } from './components/login/login';
import { SignupComponent } from './components/signup/signup';
import { ProductListComponent } from './components/product-list/product-list';
import { ProductFormComponent } from './components/product-form/product-form';
import { CategoryListComponent } from './components/category-list/category-list';
import { CartComponent } from './components/cart/cart';
import { AboutComponent } from './about/about';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'about', component: AboutComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'cart', component: CartComponent },
  { path: 'admin/product/new', component: ProductFormComponent },
  { path: 'admin/product/edit/:id', component: ProductFormComponent },
  { path: 'admin/categories', component: CategoryListComponent },
  { path: '**', redirectTo: '' }
];
