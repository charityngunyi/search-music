import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  // login authentication
  login(user: string, password: string): boolean {
    if (user === 'user' && password === 'password') {
    localStorage.setItem('username', user);
    return true;
    }
    return false;
  }
  // logout function
  logout(): any {
    localStorage.removeItem('username');
    }
  // Return username or null
  getUser(): any {
    return localStorage.getItem('username');
    }
  // Retrutn true if have user
  isLoggedIn(): boolean {
    return this.getUser() !== null;
  }
}
export const AUTH_PROVIDERS: Array<any> = [
  { provide: AuthService, useClass: AuthService }
];
