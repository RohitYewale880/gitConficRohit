import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Itodo } from 'src/app/modals/todo';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {

  @ViewChild('todoitem') todoitem !: ElementRef

  @Output() emitnewtodo : EventEmitter<Itodo> = new EventEmitter<Itodo>()

  constructor() { }

  ngOnInit(): void {
  
  }


  onTodoAdd(){
      if(this.todoitem.nativeElement.value){
      let todo : Itodo= {
        todoItem : this.todoitem.nativeElement.value,
        todoId : Date.now().toString()
      }

      this.emitnewtodo.emit(todo)
      this.todoitem.nativeElement.value = ''
    }

  }

}
