import {Product} from '../../products/models/product.model';

export interface Cart {
  id: string;
  products: ItemCart[];
  totalPrice: number;
  state: string;
}

export interface ItemCart {
  id?: string;
  name?: string;
  sku?: string;
  description?: string;
  price?: number;
  quantity: number;
  image?: string;
}
