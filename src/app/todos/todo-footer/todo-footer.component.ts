import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import * as actions from '../../filter/filtro.actions';
import * as actionsTODO from '../todo.actions';
@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {
  filtroActual: actions.FiltrosValidos = 'todos';

  filtros: actions.FiltrosValidos[] = ['todos', 'completados', 'pendientes'];

  pendientes = 0;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    // this.store.select('filtro').subscribe(filter => {
    //   this.filtroActual = filter;
    // });
    this.store.subscribe(state => {
      this.filtroActual = state.filtro;
      this.pendientes = state.todos.filter(td => td.completado === false).length;
    });
  }

  setFilter(f: actions.FiltrosValidos) {
    this.store.dispatch(actions.setFiltro({ filtro: f }));
  }

  clearAll() {
    this.store.dispatch(actionsTODO.clearAll());
  }

}
