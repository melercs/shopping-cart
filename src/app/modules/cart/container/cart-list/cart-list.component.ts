import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Router} from '@angular/router';
import {AppState} from '../../../../../state/app.state';
import {Product} from '../../../products/models/product.model';
import {CartService} from '../../services/cart.service';
import {sumCollection} from '../../../../shared/utils/mcs-match';
import {ChangeCarStatusAction} from '../../../../../state/actions/cart.actions';
import {ItemCart} from '../../models/cart.models';
import {NzMessageService} from 'ng-zorro-antd/message';


@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {

  itemsCart: ItemCart[] = [];
  total;
  constructor(
    private store: Store<AppState>,
    private router: Router,
    private cartService: CartService,
    private message: NzMessageService
  ) {
  }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.store.select('cart').subscribe(data => {
      this.itemsCart = data.products;
      this.total = sumCollection(this.itemsCart, 'price', 'quantity');
    });
  }

  deleteProduct(product: Product): void {
    this.cartService.deleteItemCart(product)
      .then(res => {
        this.message.create('success', 'El producto se elimino del carrito');
      }).catch(err => {
        this.message.create('error', 'No fue posible eliminar el producto del carrito.');
      }
    );
  }

  createOrder($event): void {
    if (this.itemsCart.length === 0) {
      return;
    }
    this.cartService.createOrder(this.itemsCart);
    this.router.navigate(['/confirmacion-orden']);
    this.cartService.deleteCart();
    this.store.dispatch( new ChangeCarStatusAction());
  }


}
