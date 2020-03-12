import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Todo } from 'src/app/list-todos/list-todos.component';
import { WelcomeDataService } from './welcome-data.service';


@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private httpService: HttpClient,private welcomeSer : WelcomeDataService) { }

  getAllTodos(username) {
      return this.httpService.get(`http://localhost:8080/users/${username}/todos`);
  }

  deleteTodoById(username, id) {
    return this.httpService.delete(`http://localhost:8080/users/${username}/todos/${id}`);
  }

  getTodo(username, id) {
    return this.httpService.get<Todo>(`http://localhost:8080/users/${username}/todos/${id}`);
  }

  createTodo(username, todo) {
    return this.httpService.post(`http://localhost:8080/users/${username}/todos`, todo);
  }

  updateTodo(username, id, todo) {
    return this.httpService.put(`http://localhost:8080/users/${username}/todos/${id}`, todo);
  }
}
