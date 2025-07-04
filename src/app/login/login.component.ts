import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { users } from '../../hardcoded-data/users-data';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginObject = {
    userId: '',
    password: ''
  };

  router = inject(Router)
  loginService = inject(LoginService);

  onLogin(event: Event) {
    event.preventDefault();
    // JSON.parse(localStorage.getItem('users') || '[]')
    const usersList = users;
    const user_ = usersList.find((u: any) => u.id === this.loginObject.userId && u.password === this.loginObject.password);

    if (user_) {
      localStorage.setItem('currentUser', JSON.stringify(user_));
      this.loginService.setUser(user_);
      if (user_.role === 'admin') {
        this.router.navigate(['/admin']);
      } else {
        this.router.navigate(['/user']);
      }
    } else {
      alert('Invalid user ID or password');
    }
  }
}
