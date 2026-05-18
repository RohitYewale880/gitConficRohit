import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Itodo } from 'src/app/modals/todo';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  constructor() { }
  @Output() emitedittodo :EventEmitter<Itodo>=new EventEmitter<Itodo>()
  @Output() emitRemoveTodo:EventEmitter<string>=new EventEmitter<string>()
  @Input() todosarray! : Array<Itodo>
  ngOnInit(): void {
  }
  trackByfun(index : number, item:Itodo){
    return item.todoId
  }
  onedittodo(edittodo:Itodo){
    this.emitedittodo.emit(edittodo)
  OnRemove(todoId:string){
       this.emitRemoveTodo.emit(todoId)
  }
}
