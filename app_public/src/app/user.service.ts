import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from './user.model';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiBaseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  register(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiBaseUrl}/register`, user);
  }

  login(credentials): Observable<any> {
    return this.http.post<any>(`${this.apiBaseUrl}/login`, credentials);
  }

}
