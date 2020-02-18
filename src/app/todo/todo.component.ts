import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TodoDataService } from '../service/data/todo-data.service';
import { Todo } from '../list-todos/list-todos.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todo: Todo;
  id: number;
  constructor(private todoService: TodoDataService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.todo = new Todo(this.id, '', false, new Date());

    if (this.id != -1) {
      this.todoService.getTodo('adil.sheikh', this.id).subscribe(
          response => this.todo = response
      );
    }
  }

  saveTodo() {
    if (this.id === -1) {
        this.todoService.createTodo('adil.sheikh',this.todo).subscribe(
          response => {
            this.router.navigate(['todos']);
          }
      );
    } else {
      this.todoService.updateTodo('adil.sheikh', this.todo.id, this.todo).subscribe(
          response => {
            this.router.navigate(['todos']);
          }
      );
    }
  }
}
