import { createReducer, on } from '@ngrx/store';
import * as actions from './filtro.actions';
import { FiltrosValidos } from './filtro.actions';

export const initialState: FiltrosValidos = 'todos';

const filtroReducer = createReducer(initialState,
    on(actions.setFiltro, (state, { filtro }) => filtro),
);

export function filterReducer(state, action) { return filtroReducer(state, action); }
