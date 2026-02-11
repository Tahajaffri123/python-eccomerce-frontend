import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  baseUrl = environment.baseUrl
  constructor(private http:HttpClient){
  }
  getHome(){
    return this.http.get(this.baseUrl + '/api/hello');
  }
}
