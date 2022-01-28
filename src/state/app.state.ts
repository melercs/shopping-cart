import {ActionReducerMap} from '@ngrx/store';
import {itemsReducer} from './reducers/items.reducers';

export interface AppState {
  items: any;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  items: itemsReducer
};
