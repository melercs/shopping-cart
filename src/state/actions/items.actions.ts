import {createAction, props} from '@ngrx/store';


// @TODO: Temporal actions
export const loadItems = createAction(
  '[Item List] Load Item'
);

export const loadedItems = createAction(
  '[Item List] loaded success',
  props<{items: any[]}>()
);
