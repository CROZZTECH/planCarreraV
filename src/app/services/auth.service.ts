import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = false;
  users: any[] = [
    {
      id       : 1,
      username : 'admin', 
      password : 'admin'
    },
    {
      id       : 2,
      username : 'user', 
      password : 'user'
    }
  ];
  constructor(private http: HttpClient) { }

  login(user: any) {
    return this.users.find(u => u.username === user.username && u.password === user.password);
  }

  isLoggedIn(): boolean {
    if (typeof localStorage !== 'undefined' && localStorage.getItem('loggedIn') != null) {
      return localStorage.getItem('loggedIn') == 'true';
    }
    return false;
  }



  logout(): void {
    localStorage.setItem('loggedIn', 'false');
  }

}
