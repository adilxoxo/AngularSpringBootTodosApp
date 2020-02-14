import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class HelloWorldBean{
  constructor(public msg:string){}
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private httpservice : HttpClient) { }

  executeHelloWorldBeanService(){
    return this.httpservice.get<HelloWorldBean>("http://localhost:8080/helloWorldBean");
  }

  executeHelloWorldServiceWithVar(name){
    return this.httpservice.get<HelloWorldBean>(`http://localhost:8080/helloWorld/path-variable/${name}`);
  }
}
