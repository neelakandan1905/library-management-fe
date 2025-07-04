import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user.model';
import { LoginService } from './login/login.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'library-management-fe';
  router = inject(Router)
  user: User | null = null;

  constructor(private loginService: LoginService) {
    this.user = this.loginService.getUser();
  }

  ngOnInit() {
    this.loginService.setUserFromLocalStorage();
    // this.checkUserLoggedIn();
    this.loginService.user$.subscribe((user) => {
      this.user = user;
    });
  }

  logOut() {
    localStorage.removeItem('currentUser');
    this.loginService.logOut();
    this.router.navigate(['/']);
    this.user = null;
  }

  checkUserLoggedIn() {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
      // Parse the string back into an object
      this.user = JSON.parse(currentUser);
    }
    return this.user;
  }
}
