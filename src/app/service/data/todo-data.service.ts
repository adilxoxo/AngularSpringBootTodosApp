import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Todo } from 'src/app/list-todos/list-todos.component';
import { WelcomeDataService } from './welcome-data.service';


@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private httpService: HttpClient,private welcomeSer : WelcomeDataService) { }

  basicAuthHeaderString = this.welcomeSer.createBasicAuthenticationHttpHeader();

  headers = new HttpHeaders({
      Authorization : this.basicAuthHeaderString
    });
    
  getAllTodos(username) {
      return this.httpService.get(`http://localhost:8080/users/${username}/todos`,{headers : this.headers});
  }

  deleteTodoById(username, id) {
    return this.httpService.delete(`http://localhost:8080/users/${username}/todos/${id}`,{headers : this.headers});
  }

  getTodo(username, id) {
    return this.httpService.get<Todo>(`http://localhost:8080/users/${username}/todos/${id}`,{headers : this.headers});
  }

  createTodo(username, todo) {
    return this.httpService.post(`http://localhost:8080/users/${username}/todos`, todo,{headers : this.headers});
  }

  updateTodo(username, id, todo) {
    return this.httpService.put(`http://localhost:8080/users/${username}/todos/${id}`, todo,{headers : this.headers});
  }
  //Access to XMLHttpRequest at 'http://localhost:8080/helloWorld/path-variable/adil.sheikh' 
  //from origin 'http://localhost:4200'
  // has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
}
