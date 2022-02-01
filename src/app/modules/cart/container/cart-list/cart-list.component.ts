import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Router} from '@angular/router';
import {AppState} from '../../../../../state/app.state';
import {Product} from '../../../products/models/product.model';
import {CartService} from '../../services/cart.service';
import {ChangeCarStatusAction} from '../../../../../state/actions/cart.actions';
import {ItemCart} from '../../models/cart.models';
import {sumCollection} from '../../../../shared/utils/mcs-match';


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
    private cartService: CartService
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
        // TODO: aqui falta llamar a un servicio para lanzar un alert
      }).catch(err => {
        // TODO: implement traking error
        console.log(err);
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
