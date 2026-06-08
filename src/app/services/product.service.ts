import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private baseUrl = environment.baseUrl + '/products/';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  getProduct(id: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}${id}/`);
  }

  addProduct(product: any): Observable<any> {
    return this.http.post(this.baseUrl, product);
  }

  updateProduct(id: string, product: any): Observable<any> {
    return this.http.put(`${this.baseUrl}${id}/`, product);
  }

  deleteProduct(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}${id}/`);
  }
}
