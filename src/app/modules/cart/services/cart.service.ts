import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable, Subscription} from 'rxjs';
import {filter, map} from 'rxjs/operators';
import {AngularFirestore} from '@angular/fire/firestore';

import {AuthorizationService} from '../../../auth/services/authorization.service';
import {Product} from '../../products/models/product.model';
import {AppState} from '../../../../state/app.state';
import {SelectAllProductCart} from '../../../../state/actions/cart.actions';
import {User} from '../../../auth/models/user.model';
import {Cart} from '../models/cart.models';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartsItemsSubscription: Subscription = new Subscription();
  cartsListernetSubcription: Subscription = new Subscription();

  products: Product[] = [];
  cart: Cart;
  carts: Cart[] = [];

  constructor(
    private authorizationService: AuthorizationService,
    private afs: AngularFirestore,
    private store: Store<AppState>,
  ) {
  }

  initCart(): void {
    this.cartsListernetSubcription = this.store.select('auth')
      .pipe(
        filter( auth => auth.user != null)
      )
      .subscribe(auth => this.getItemsCart( auth.user.uid));
  }

  private getItemsCart(uid: string): void {
    this.afs.collection(`Cart/${uid}/products`)
      .snapshotChanges()
      .pipe(
        map(data => {
          console.log('aaaa', data);
          return data.map((document: any) => {
            return {
              id: document.payload.doc.id,
              ...document.payload.doc.data()
            };
          });
        })
      ).subscribe((collection: any) => {
      this.store.dispatch(new SelectAllProductCart(collection));
    });
  }

  addCart(product: Product): void {
    const user = this.authorizationService.getUser();
    this.afs.doc(`Cart/${user.uid}/`)
      .collection('products')
      .add({...product});
  }

  deleteItemCart(product: Product): Promise<any> {
    const user: User = this.authorizationService.getUser();
    return this.afs.doc(`Cart/${user.uid}/products/${product.id}`).delete();
  }

  deleteCart(): void {
    const user: User = this.authorizationService.getUser();

    this.store.select('cart').subscribe((data: any) => {
        this.products = data.cart;
      }
    );

    this.products.forEach(element => {
      this.afs.doc(`/Cart/${user.uid}/products/${element.id}`).delete();
    });
  }

  createOrder(products: Product[]): Promise<any> {
    const user = this.authorizationService.getUser();
    this.cart = {
      id: user.uid,
      products,
      quantity: products.length,
      state: false
    };

    return this.afs.doc(`${user.uid}/order/`)
      .collection('carts').add({...this.cart});
  }

  getListCarts(): any {
    return this.store.select('auth').pipe(
      filter(auth => auth.user != null)
    ).subscribe((auth: any) => {
      this.afs.collection(`order/${auth.user.uid}/carts`)
        .snapshotChanges()
        .pipe(
          map(docData => {
            console.log(docData);
            return docData.map((doc: any) => {
              return {
                id: doc.payload.doc.id,
                ...doc.payload.doc.data() as {}
              };
            });
          })
        ).subscribe((colleccion: any[]) => {
          this.carts = colleccion;
      });
    });
  }

  listCarts(): any[]{
    return this.carts;
  }


}
