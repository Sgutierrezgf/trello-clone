import { Component, Inject } from '@angular/core';
import { BtnComponent } from '../btn/btn.component';
import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faUser,
  faTag,
  faCheckSquare,
  faClock,
  faClose,
  faCheckToSlot,
  faBars,
} from '@fortawesome/free-solid-svg-icons';
import { ToDo } from '../../models/todo.model';

interface InputData {
  todo: ToDo;
}

interface OutPutData {
  rta: boolean;
}

@Component({
  selector: 'app-todo-dialog',
  standalone: true,
  imports: [BtnComponent, FontAwesomeModule],
  templateUrl: './todo-dialog.component.html',
})
export class TodoDialogComponent {
  faClose = faClose;
  faCheckToSlot = faCheckToSlot;
  faBars = faBars;
  faUser = faUser;
  faTag = faTag;
  faCheckSquare = faCheckSquare;
  faClock = faClock;

  todo: ToDo;

  constructor(
    private dialogRef: DialogRef<OutPutData>,
    @Inject(DIALOG_DATA) data: InputData
  ) {
    this.todo = data.todo;
  }

  ngOnInit(): void {}

  close() {
    this.dialogRef.close();
  }

  closeWithRta(rta: boolean) {
    this.dialogRef.close({ rta });
  }
}
