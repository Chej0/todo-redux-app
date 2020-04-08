import { Pipe, PipeTransform } from '@angular/core';
import { FiltrosValidos } from '../filter/filtro.actions';
import { Todo } from './models/todo.model';

@Pipe({
  name: 'filtroTodo'
})
export class FiltroPipe implements PipeTransform {

  transform(todos: Todo[], filtro: FiltrosValidos): Todo[] {
    switch (filtro) {
      case 'completados': return todos.filter(t => t.completado === true);
      case 'pendientes': return todos.filter(t => t.completado === false);
      case 'todos': return todos;
    }
  }

}
