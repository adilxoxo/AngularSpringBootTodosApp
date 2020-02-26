import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class HelloWorldBean{
  constructor(public msg: string){}
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private httpservice : HttpClient) { }

  executeHelloWorldBeanService(){
    return this.httpservice.get<HelloWorldBean>('http://localhost:8080/helloWorldBean');
  }

  executeHelloWorldServiceWithVar(name){

    let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();

    let headers = new HttpHeaders({
      Authorization : basicAuthHeaderString
    });

    return this.httpservice.get<HelloWorldBean>(`http://localhost:8080/helloWorld/path-variable/${name}`, {headers : headers});
  }

  createBasicAuthenticationHttpHeader(){
    let username  = 'adil.sheikh';
    let password = 'dummy';
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    return basicAuthHeaderString;
  }
}
