import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  isLogin = signal(true);
  
  setLogin(val: boolean) {
    this.isLogin.set(val);
  }
}
