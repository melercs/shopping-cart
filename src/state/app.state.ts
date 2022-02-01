import {ActionReducerMap} from '@ngrx/store';
import * as fromAuthorization from './reducers/authorization.reducers';
import * as fromUiLoading from './reducers/ui-loading.reducers';
import * as fromCart from './reducers/cart.reducers';

export interface AppState {
  uiLoading: fromUiLoading.UiState;
  auth: fromAuthorization.AuthState;
  cart: fromCart.CartState;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  uiLoading: fromUiLoading.uiLoadingReducer,
  auth: fromAuthorization.authorizationReducer,
  cart: fromCart.cartReducer
};
