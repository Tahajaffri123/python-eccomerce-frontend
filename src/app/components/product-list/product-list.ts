import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-list.html'
})
export class ProductListComponent implements OnInit {
  products: any[] = [];
  cartItems: any[] = [];

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.loadProducts();
    this.loadCart();
  }

  loadProducts() {
    this.productService.getProducts().subscribe(data => this.products = data);
  }

  loadCart() {
    const user = this.authService.getCurrentUser();
    if (user && user.role !== 'admin') {
      this.cartService.getCartItems(user.id).subscribe(data => this.cartItems = data.items);
    }
  }

  isInCart(productId: any): boolean {
    return this.cartItems.some(item => item.product === productId || item.product_details?.id === productId);
  }

  isAdmin() {
    return this.authService.getCurrentUser()?.role === 'admin';
  }

  addToCart(product: any) {
    const user = this.authService.getCurrentUser();
    if (!user) {
      alert('Please login first!');
      return;
    }

    const cartItem = {
      userId: user.id,
      productId: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.image
    };

    this.cartService.addToCart(cartItem).subscribe({
      next: () => {
        alert('Product added to cart!');
        this.loadCart();
      },
      error: (err) => {
        const errorMsg = err.error?.error || err.message;
        alert(errorMsg);
        this.loadCart();
      }
    });
  }

  deleteProduct(id: string) {
    if (confirm('Are you sure you want to delete this product?')) {
      this.productService.deleteProduct(id).subscribe(() => {
        this.loadProducts();
      });
    }
  }
}
