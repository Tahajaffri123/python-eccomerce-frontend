import { Component, OnInit } from '@angular/core';
import { HomeService } from './home-service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports:[JsonPipe],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit{
  constructor(private _homeService: HomeService){
  }
  home:any

  ngOnInit(){
    this.getHome();
  }
  getHome(){
   this._homeService.getHome().subscribe({
      next: (response) => {
        this.home = response;
        console.log('API Response Received:', response);
      },
      error: (err) => {
        console.error('API Error:', err);
      },
    });
  }
}
