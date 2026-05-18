import { Component, Input, OnInit } from '@angular/core';
import { Itodo } from 'src/app/modals/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  constructor() { }
  @Input() todosarray! : Array<Itodo>
  ngOnInit(): void {
  }

  trackByfun(index : number, item:Itodo){
    return item.todoId
  }

}
