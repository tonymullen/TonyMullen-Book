import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

import { UserService } from './user.service';
import { User } from './user.model';

import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn = false;
  jwtHelper: JwtHelperService = new JwtHelperService();

  currentUser: User = new User
  constructor(private userService: UserService,
              private router: Router) {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedUser = this.decodeUserFromToken(token);
      this.setCurrentUser(decodedUser);
    }
  }

  login(emailAndPassword) {
    return this.userService.login(emailAndPassword).pipe(
      map(
        res => {
          // console.log(res.token);
          localStorage.setItem('token', res.token);
          const decodedUser = this.decodeUserFromToken(res.token);
          this.setCurrentUser(decodedUser);
          return this.loggedIn;
        }
      )
    );
  }

  logout() {
    localStorage.removeItem('token');
    this.loggedIn = false;
    this.currentUser = new User();
    this.router.navigate(['/']);
  }

  decodeUserFromToken(token) {
    return this.jwtHelper.decodeToken(token);
  }

  setCurrentUser(decodedUser) {
    this.loggedIn = true;
    this.currentUser._id = decodedUser._id;
    this.currentUser.username = decodedUser.name;
  }

  getToken() {
    return localStorage.getItem('token');
  }


}


