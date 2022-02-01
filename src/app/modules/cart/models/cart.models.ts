import {Product} from '../../products/models/product.model';

export interface Cart {
  id: string;
  products: Product[];
  quantity: number;
  state: boolean;
}
