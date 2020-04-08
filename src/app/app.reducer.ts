import { Todo } from './todos/models/todo.model';
import { ActionReducerMap } from '@ngrx/store';
import { todoReducer } from './todos/todo.reducer';
import { filterReducer } from './filter/filtro.reducer';
import { FiltrosValidos } from './filter/filtro.actions';
export interface AppState {
    todos: Todo[];
    filtro: FiltrosValidos;
}

export const appReducers: ActionReducerMap<AppState> = {
    todos: todoReducer,
    filtro: filterReducer
};
