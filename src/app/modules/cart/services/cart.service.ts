import { Injectable } from '@angular/core';
import {Store} from '@ngrx/store';
import {Subscription} from 'rxjs';
import {AngularFirestore} from '@angular/fire/firestore';

import {AuthorizationService} from '../../../auth/services/authorization.service';
import {Product} from '../../products/models/product.model';
import {AppState} from '../../../../state/app.state';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartsItemsSubscription: Subscription = new Subscription();
  cartsListernetSubcription: Subscription = new Subscription();

  constructor(
    private authorizationService: AuthorizationService,
    private afs: AngularFirestore,
    private store: Store<AppState>,
  ) { }


  addCart(product: Product): void {
    const user = this.authorizationService.getUser();
    this.afs.doc(`${user.uid}/Cart/`)
      .collection('products')
      .add({...product});
  }

  // TODO: pending  funtions
}
