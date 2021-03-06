import {Action} from '@ngrx/store';
import {ItemCart} from '../../app/modules/cart/models/cart.models';


export const SET_CART_PRODUCTS = '[Order-Carts] Set Order Products';
export const  UN_SET_CART_PRODUCTS = '[Order-Carts] Un Set Order Products';
export const  CHANGE_CAR_STATUS = '[Order-Carts] Cart completed';

export class SelectAllProductCart implements Action {
  readonly type = SET_CART_PRODUCTS;
  constructor(public products: ItemCart[]) {}
}

export class UnsetCartProdutsAction implements Action {
  readonly type = UN_SET_CART_PRODUCTS;
}

export class ChangeCarStatusAction implements Action {
  readonly type = CHANGE_CAR_STATUS;
}

export type actions = SelectAllProductCart | UnsetCartProdutsAction | ChangeCarStatusAction;
