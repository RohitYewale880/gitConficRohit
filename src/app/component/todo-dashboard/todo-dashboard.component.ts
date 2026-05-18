import { Component, OnInit } from '@angular/core';
import { todoArr } from 'src/app/consts/todo';
import { Itodo } from 'src/app/modals/todo';

@Component({
  selector: 'app-todo-dashboard',
  templateUrl: './todo-dashboard.component.html',
  styleUrls: ['./todo-dashboard.component.scss']
})
export class TodoDashboardComponent implements OnInit {
  editTodoobject !:Itodo
  array!: Array<Itodo>

  constructor() { }

  ngOnInit(): void {
    this.array = todoArr
  }

  onedittodo(edittodo:Itodo){
this.editTodoobject=edittodo
  }

  onupdates(updatetodo:Itodo){
    let getindex=this.array.findIndex(t => (t.todoId===updatetodo.todoId))
    this.array[getindex]=updatetodo
  }

}
