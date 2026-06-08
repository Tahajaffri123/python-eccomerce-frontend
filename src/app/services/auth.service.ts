import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = environment.baseUrl + '/users/';
  private currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser') || 'null'));
  public currentUser$ = this.currentUserSubject.asObservable();

  constructor(private http: HttpClient) {}

  signup(userData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}signup`, userData);
  }

  login(credentials: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}login`, credentials).pipe(
      map(response => {
        if (response.user) {
          const user = response.user;
          localStorage.setItem('currentUser', JSON.stringify(user));
          localStorage.setItem('token', response.token);
          this.currentUserSubject.next(user);
          return user;
        } else {
          throw new Error('Invalid email or password');
        }
      })
    );
  }

  logout() {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('token');
    this.currentUserSubject.next(null);
  }

  isLoggedIn(): boolean {
    return !!this.currentUserSubject.value;
  }

  getCurrentUser() {
    return this.currentUserSubject.value;
  }
}
