import {createReducer, on} from '@ngrx/store';
import {loadItems} from '../actions/items.actions';

// @TODO: Temporal reducers
export const initialState: {
  loading: boolean,
  items: ReadonlyArray<any>;
} = {loading: false, items: []};

export const itemsReducer = createReducer(
  initialState,
  on(loadItems, (state) => {
    return {...state, loading: true};
  })
);
