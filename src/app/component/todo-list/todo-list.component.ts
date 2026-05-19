import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Itodo } from 'src/app/modals/todo';
import { GetConfirmationComponent } from '../get-confirmation/get-confirmation.component';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  constructor(private _matdialog: MatDialog) { }

  @Output() emitedittodo: EventEmitter<Itodo> = new EventEmitter<Itodo>()
  @Output() emitRemoveTodo: EventEmitter<string> = new EventEmitter<string>()
  @Input() todosarray!: Array<Itodo>
  ngOnInit(): void {
  }
  trackByfun(index: number, item: Itodo) {
    return item.todoId
  }
  onedittodo(edittodo: Itodo) {
    this.emitedittodo.emit(edittodo)
  }
  OnRemove(todoId: string) {

    let config = new MatDialogConfig()
    config.width = '400px'
    config.disableClose = true
    config.data = `Are You Sure, You Want To Remove The Todo With id ${todoId}`

    let MatDialog = this._matdialog.open(GetConfirmationComponent, config)
    MatDialog.afterClosed().subscribe(getconfirmation => {
      if (getconfirmation === true) {
        this.emitRemoveTodo.emit(todoId)

      }
    })

  }
}
