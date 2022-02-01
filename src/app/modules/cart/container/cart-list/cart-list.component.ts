import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Router} from '@angular/router';
import {AppState} from '../../../../../state/app.state';
import {Product} from '../../../products/models/product.model';
import {CartService} from '../../services/cart.service';
import {ChangeCarStatusAction} from '../../../../../state/actions/cart.actions';
import {reduce} from 'rxjs/operators';


@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {

  products: Product[] = [];
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
      this.products = data.products;
      this.total = this.getTotalPrice(this.products);
      console.log('aaaa', this.total);
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

  createOrder(): void {
    if (this.products.length === 0) {
      return;
    }

    this.cartService.createOrder(this.products);
    this.router.navigate(['/orders']);
    this.cartService.deleteCart();
    this.store.dispatch( new ChangeCarStatusAction() );
  }

  private getTotalPrice(products: Product[]): number {
    return products.reduce((a, b) => a + b.price, 0);
  }


}
