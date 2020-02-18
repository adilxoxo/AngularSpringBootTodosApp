import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(usename, password) {
    if (usename === 'adil.sheikh' && password === 'dummy') {
      sessionStorage.setItem('autheticateduser', usename);
      return true;
    }
    return false;
  }

  isUserLoggedIn() {
    const user = sessionStorage.getItem('autheticateduser');
    return !(user === null);
  }

  logout() {
    sessionStorage.removeItem('autheticateduser');
  }
}
