import { Component, OnInit } from '@angular/core';

export class Todo {
  constructor(
    public id : number,
    public description : string,
    public done : boolean,
    public targetDate : Date
  ) {
    
  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos = [
    new Todo(1,"This is object parsing test1",false,new Date()),
    new Todo(2,"This is object parsing test2",false,new Date()),
    new Todo(3,"This is object parsing test3",false,new Date()),
    new Todo(4,"This is object parsing test4",false,new Date()),
    // {
    //   id : 1,
    //   description : "This is object parsing test1"
    // },
    // {
    //   id : 2,
    //   description : "This is object parsing test2"
    // },
    // {
    //   id : 3,
    //   description : "This is object parsing test3"
    // }
  ]

  todo = {
    id : 1,
    description : "This is object parsing test"
  }

  constructor() { }

  ngOnInit() {
  }

}
