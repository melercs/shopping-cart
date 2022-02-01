import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {ProductsService} from '../../services/products.service';
import {AuthorizationService} from '../../../../auth/services/authorization.service';
import {Product} from '../../models/product.model';
import {DeactivateLoadingAction} from '../../../../../state/actions/ui-loading.actions';
import {Store} from '@ngrx/store';
import {AppState} from '../../../../../state/app.state';
import {CartService} from '../../../cart/services/cart.service';
import {Router} from '@angular/router';
import {NzMessageService} from 'ng-zorro-antd/message';


@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.scss']
})
export class ProductGridComponent implements OnInit {
  subscriptionUI: Subscription;
  products!: Product[];
  loading: boolean;

  constructor(
    private productService: ProductsService,
    private authorizationService: AuthorizationService,
    private cartService: CartService,
    private store: Store<AppState>,
    private router: Router,
    private message: NzMessageService
  ) {
  }

  ngOnInit(): void {
    this.subscriptionUI = this.store.select('uiLoading')
      .subscribe(uiLoading => this.loading = uiLoading.isLoading);
    this.getProducts();
  }

  private getProducts(): void {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
      this.store.dispatch(new DeactivateLoadingAction());
    });
  }

  private addCart(product: Product): void {
    this.authorizationService.isAuth()
      .subscribe( auth => {
        if ( auth ){
          this.cartService.addCart({...product, quantity: 1});
          this.message.create('success', 'El producto se añadio con éxito al carrito!');
        } else {
          this.router.navigate(['/auth/login']);
        }
      });
  }

}
