import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private userSubject = new BehaviorSubject<User | null>(null);
  user$ = this.userSubject.asObservable();
  currentUser: User | null = null;

  constructor() { }

  setUser(user: User) {
    localStorage.setItem('currentUser', JSON.stringify(user));
    this.currentUser = user;
    this.userSubject.next(user);
  }

  setUserFromLocalStorage() {
    const user = localStorage.getItem('currentUser');
    if (user) {
      this.currentUser = JSON.parse(user);
      this.userSubject.next(this.currentUser);
    } else {
      this.currentUser = null;
      this.userSubject.next(null);
    }
  }

  getUser(): User | null {
    return this.userSubject.getValue();
  }

  logOut() {
    localStorage.removeItem('currentUser');
    this.currentUser = null;
    this.userSubject.next(null);
  }
}
