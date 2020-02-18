import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from 'src/app/list-todos/list-todos.component';


@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private httpService: HttpClient) { }

  getAllTodos(username) {
      return this.httpService.get(`http://localhost:8080/users/${username}/todos`);
  }

  deleteTodoById(username, id) {
    return this.httpService.delete(`http://localhost:8080/users/${username}/todos/${id}`);
  }

  getTodo(username, id) {
    return this.httpService.get<Todo>(`http://localhost:8080/users/${username}/todos/${id}`);
  }

  updateTodo(username, id, todo) {
    return this.httpService.put(`http://localhost:8080/users/${username}/todos/${id}`, todo);
  }
}
