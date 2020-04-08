import { createReducer, on } from '@ngrx/store';
import * as actions from './todo.actions';
import { Todo } from './models/todo.model';

export const initialState: Todo[] = [
    new Todo('Salvar el mundo'),
];

// tslint:disable-next-line: variable-name
const _todoReducer = createReducer(initialState,
  on(actions.crear, (state, { texto }) => [...state, new Todo(texto)]),
  on(actions.toggle, (state, { id }) => {
    return state.map(todo => {
      if (todo.id === id) {
        return { ...todo, completado: !todo.completado };
      } else {
        return todo;
      }
    });
  }),
  on(actions.toggleAll, (state, { comp }) => {
    return state.map(todo => {
      return { ...todo, completado: comp };
    });
  }),
  on(actions.eliminar, (state, { id }) => state.filter(todo => todo.id !== id)),
  on(actions.clearAll, (state) => state.filter(todo => todo.completado === false)),
  on(actions.editar, (state, { id, texto }) => {
    return state.map(todo => {
      if (todo.id === id) {
        // tslint:disable-next-line: object-literal-shorthand
        return { ...todo, texto: texto };
      } else {
        return todo;
      }
    });
  }),
);

export function todoReducer(state, action) { return _todoReducer(state, action); }
