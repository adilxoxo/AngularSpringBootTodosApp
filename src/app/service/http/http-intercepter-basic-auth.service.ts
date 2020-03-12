import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBasicAuthService implements HttpInterceptor{

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler){
      let username  = 'adil.sheikh';
      let password = 'dummy';
      let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);

      request = request.clone({
        setHeaders : {
          Authorization : basicAuthHeaderString
        }
      });
      return next.handle(request);
  }
}
