import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

constructor(private httpservice: HttpClient) { }

executeAuthenticationService(username, password) {
  const basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);

  const headers = new HttpHeaders({
    Authorization : basicAuthHeaderString
  });

  return this.httpservice.get<AuthenticationBean>(`http://localhost:8080/basicauth`, {headers}).pipe(
    map(
      data => {
        sessionStorage.setItem('autheticateduser', username);
        sessionStorage.setItem('token', basicAuthHeaderString);
        return data;
      }
    )
  );
}

getAuthenticatedUser() {
  return sessionStorage.getItem('autheticateduser');
}

getAuthenticatedToken() {
  if (this.getAuthenticatedUser()) {
    return sessionStorage.getItem('token');
  }
}

  isUserLoggedIn() {
    const user = sessionStorage.getItem('autheticateduser');
    return !(user === null);
  }

  logout() {
    sessionStorage.removeItem('autheticateduser');
    sessionStorage.removeItem('token');
  }
}

export class AuthenticationBean {
  constructor(public message: string) {

  }
}
