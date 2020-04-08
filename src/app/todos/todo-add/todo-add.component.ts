import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AppState } from '../../app.reducer';
import { Store } from '@ngrx/store';
import * as actions from '../todo.actions';
@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {
  txtInput: FormControl;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.txtInput = new FormControl(null, Validators.required);
  }

  agregar() {
    console.log(this.txtInput.value);
    console.log(this.txtInput.valid);
    if ( this.txtInput.invalid) { return; }
    this.store.dispatch(actions.crear({texto: this.txtInput.value}));
    this.txtInput.reset();
  }

}
