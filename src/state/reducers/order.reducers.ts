import * as fromOrderActions from '../actions/order.actions';
import {Cart} from '../../app/modules/cart/models/cart.models';


export interface OrderStateCart{
  carts: Cart[];
}

const initState: OrderStateCart = {
  carts: []
};

export function cartProdcutsReducer(state = initState, action: fromOrderActions.acciones ): OrderStateCart {
  switch ( action.type ) {
    case fromOrderActions.SET_ORDER_CARTS:
      return {
        carts: [...action.carts]
      };
    case fromOrderActions.UN_SET_ORDER_CARTS:
      return {
        carts: null
      };
    default:
      return state;
  }
}
