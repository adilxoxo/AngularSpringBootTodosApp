import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class HelloWorldBean {
  constructor(public msg: string) {}
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private httpservice: HttpClient) { }

  executeHelloWorldBeanService() {
    return this.httpservice.get<HelloWorldBean>('http://localhost:8080/helloWorldBean');
  }

  executeHelloWorldServiceWithVar(name) {

    const basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();

    const headers = new HttpHeaders({
      Authorization : basicAuthHeaderString
    });

    return this.httpservice.get<HelloWorldBean>(`http://localhost:8080/helloWorld/path-variable/${name}`,
    {headers}
    );
  }

  createBasicAuthenticationHttpHeader() {
    const username  = 'adil.sheikh';
    const password = 'dummy';
    const basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    return basicAuthHeaderString;
  }
}
