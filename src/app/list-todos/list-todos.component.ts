import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';

export class Todo {
  username(username: any) {
    throw new Error("Method not implemented.");
  }
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {

  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  errorMsg;
  successMsg;
  // todos = [
  //   new Todo(1,"This is object parsing test1",false,new Date()),
  //   new Todo(2,"This is object parsing test2",false,new Date()),
  //   new Todo(3,"This is object parsing test3",false,new Date()),
  //   new Todo(4,"This is object parsing test4",false,new Date()),
  //   // {
  //   //   id : 1,
  //   //   description : "This is object parsing test1"
  //   // },
  //   // {
  //   //   id : 2,
  //   //   description : "This is object parsing test2"
  //   // },
  //   // {
  //   //   id : 3,
  //   //   description : "This is object parsing test3"
  //   // }
  // ]

  // todo = {
  //   id : 1,
  //   description : "This is object parsing test"
  // }

  todos;
  username;

  constructor(private todoDataService: TodoDataService, private router: Router) { }

  ngOnInit() {
      this.refreshList();
  }

  deleteTodo(id) {
    this.todoDataService.deleteTodoById(this.username, id).subscribe(
      response => {
         this.handleSucccessReponse(response);
         this.successMsg = `Delete of todo ${id} is successful`;
         this.refreshList();
        },
      error => {
        this.handleErrorReponse(error);
        alert('Error On  Deletion');
      }
    );
  }

  updateTodo(id) {
    this.router.navigate(['todos', id]);
  }

  addTodo() {
    this.router.navigate(['todos', -1]);
  }

  handleSucccessReponse(response) {
    this.todos = response;
  }

  handleErrorReponse(error) {
    this.errorMsg = 'No Data Found';
  }

  refreshList() {
    this.todoDataService.getAllTodos(this.username).subscribe(
      response => this.handleSucccessReponse(response),
      error => this.handleErrorReponse(error)
    );
  }

}
