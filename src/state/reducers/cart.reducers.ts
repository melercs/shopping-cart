import * as fromCartActions from '../actions/cart.actions';
import {Product} from '../../app/modules/products/models/product.model';


export enum STATUS {completed, pending}

export interface CartState {
  products: Product[];
  status: STATUS;
}

const initState: CartState = {
  products: [],
  status: STATUS.pending
};

export function cartReducer(state = initState, action: fromCartActions.actions ): CartState {
  switch ( action.type ) {
    case fromCartActions.SET_CART_PRODUCTS:
      return {
        products: [...action.products],
        status: STATUS.pending,
      };
    case fromCartActions.UN_SET_CART_PRODUCTS:
      return{
        products: [],
        status: STATUS.pending
      };
    case fromCartActions.CHANGE_CAR_STATUS:
      return{
        products: [],
        status: STATUS.completed
      };

    default:
      return state;
  }
}
