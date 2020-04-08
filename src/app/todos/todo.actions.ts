import { createAction, props } from '@ngrx/store';


export const crear = createAction(
    '[TODO] Crear TODO',
    props<{texto: string}>()
);

export const toggle = createAction(
    '[TODO] Toggle TODO',
    props<{id: number}>()
);

export const editar = createAction(
    '[TODO] editar TODO',
    props<{id: number, texto: string}>()
);

export const eliminar = createAction(
    '[TODO] Eliminar TODO',
    props<{id: number}>()
);

export const clearAll = createAction('[TODO] Eliminar TODO TODO');

export const toggleAll = createAction(
    '[TODO] Toggle All TODO',
    props<{comp: boolean}>()
);
