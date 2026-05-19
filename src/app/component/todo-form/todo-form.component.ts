import { Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { Itodo } from 'src/app/modals/todo';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit, OnChanges {
  isIneditmode :boolean=false
@Input()todoeditobj!:Itodo
@Output() emitupdate:EventEmitter <Itodo>=new EventEmitter <Itodo> ()
@ViewChild('TodoItem') TodoItem !:ElementRef
 @Output() emitnewtodo : EventEmitter<Itodo> = new EventEmitter<Itodo>()
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
   if(changes['todoeditobj'].currentValue){
    this.isIneditmode=true
    this.TodoItem.nativeElement.value=this.todoeditobj.todoItem
   }
  }
  ngOnInit(): void {}
  onTodoAdd(){
      if(this.TodoItem.nativeElement.value){
      let todo : Itodo= {
        todoItem : this.TodoItem.nativeElement.value,
        todoId : Date.now().toString()
      }

      this.emitnewtodo.emit(todo)
      this.TodoItem.nativeElement.value = ''
    }

  }

  onupdatebtn(){
    let new_updateobj:Itodo={
      todoItem:this.TodoItem.nativeElement.value,
      todoId:this.todoeditobj.todoId
    }
    this.isIneditmode=false
    this.emitupdate.emit(new_updateobj)
    this.TodoItem.nativeElement.value=''

  }

}
