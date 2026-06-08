import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cart.html'
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];
  totalPrice: number = 0;

  constructor(
    private cartService: CartService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.loadCart();
  }

  loadCart() {
    const user = this.authService.getCurrentUser();
    if (user) {
      this.cartService.getCartItems(user.id).subscribe(data => {
        this.cartItems = data.items;
        this.totalPrice = data.total_price;
      });
    }
  }

  updateQuantity(item: any, newQty: number) {
    if (newQty > 0) {
      this.cartService.updateCartQuantity(item.id, newQty).subscribe({
        next: () => this.loadCart(),
        error: (err) => {
          alert(err.error?.error || 'Error updating quantity');
          this.loadCart(); // Refresh to reset to previous valid state
        }
      });
    }
  }

  removeItem(id: string) {
    this.cartService.removeFromCart(id).subscribe(() => this.loadCart());
  }

  checkout() {
    alert('Thank you for your purchase! (This is a demo)');
    // In a real app, you'd clear the cart and create an order.
  }
}
