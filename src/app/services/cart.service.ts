import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private baseUrl = environment.baseUrl + '/cart/';

  constructor(private http: HttpClient) {}

  getCartItems(userId: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}?userId=${userId}`);
  }

  addToCart(item: any): Observable<any> {
    return this.http.post(this.baseUrl, item);
  }

  removeFromCart(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}${id}/`);
  }

  updateCartQuantity(id: string, quantity: number): Observable<any> {
    return this.http.patch(`${this.baseUrl}${id}/`, { quantity });
  }

  clearCart(userId: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}?userId=${userId}`);
  }
}
