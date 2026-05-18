import { Component, OnInit } from '@angular/core';
import { todoArr } from 'src/app/consts/todo';
import { Itodo } from 'src/app/modals/todo';

@Component({
  selector: 'app-todo-dashboard',
  templateUrl: './todo-dashboard.component.html',
  styleUrls: ['./todo-dashboard.component.scss']
})
export class TodoDashboardComponent implements OnInit {
  array!: Array<Itodo>
  constructor() { }

  ngOnInit(): void {
    this.array = todoArr
  }

  getRemoveTodo(removeId:string){
    let get_Index=this.array.findIndex(obj=>obj.todoId===removeId)
    let removeTodo=this.array.splice(get_Index,1)
    

  }

}
