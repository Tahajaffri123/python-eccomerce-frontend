import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private baseUrl = environment.baseUrl + '/categories/';

  constructor(private http: HttpClient) {}

  getCategories(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  addCategory(category: any): Observable<any> {
    return this.http.post(this.baseUrl, category);
  }

  updateCategory(id: string, category: any): Observable<any> {
    return this.http.put(`${this.baseUrl}${id}/`, category);
  }

  deleteCategory(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}${id}/`);
  }
}
