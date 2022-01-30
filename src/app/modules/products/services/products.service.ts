import { Injectable } from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../../../state/app.state';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Product} from '../models/product.model';
import {ActivateLoadingAction} from '../../../../state/actions/ui-loading.actions';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {map} from 'rxjs/operators';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  productsObservable: Observable<Product[]>;

  private productsCollection: AngularFirestoreCollection<Product>;

  constructor(
    private http: HttpClient,
    private store: Store<AppState>,
    private afs: AngularFirestore
  ) {
    this.productsCollection = afs.collection<Product>('products');
  }

  getProducts(): Observable<Product[]> {
    this.store.dispatch(new ActivateLoadingAction());
    return this.afs.collection('products').get().pipe(
      map(project => project.docs.map(a => {
        return a.data();
      }))
    );
  }
}
