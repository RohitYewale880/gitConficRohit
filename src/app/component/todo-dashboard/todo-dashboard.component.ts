import { Component, OnInit } from '@angular/core';
import { todoArr } from 'src/app/consts/todo';
import { Itodo } from 'src/app/modals/todo';
import { TodoServiceService } from 'src/app/service/todo-service.service';

@Component({
  selector: 'app-todo-dashboard',
  templateUrl: './todo-dashboard.component.html',
  styleUrls: ['./todo-dashboard.component.scss']
})
export class TodoDashboardComponent implements OnInit {
  editTodoobject !:Itodo
  array!: Array<Itodo>
  constructor(
    private _snakbar : TodoServiceService
  ) { }
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
  onaddtodo(todo : Itodo){
    this.array.push(todo)
  }
  getRemoveTodo(removeId:string){
    let get_Index=this.array.findIndex(obj=>obj.todoId===removeId)
    let removeTodo=this.array.splice(get_Index,1)

    this._snakbar.openSnackBar(`The todo Item with id ${removeTodo[0].todoId} is removed successfully!!!`)
  }
}

