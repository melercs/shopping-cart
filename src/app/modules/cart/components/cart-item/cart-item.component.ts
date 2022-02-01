import {Component, Input, OnInit} from '@angular/core';
import {ItemCart} from '../../models/cart.models';
import {FormBuilder, FormGroup} from '@angular/forms';
import {SelectAllProductCart} from '../../../../../state/actions/cart.actions';
import {Store} from '@ngrx/store';
import {AppState} from '../../../../../state/app.state';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {

  data;
  form: FormGroup;

  @Input() id: string;

  @Input() set itemData(data: ItemCart) {
    this.data = data;
    if (data) {
      this.form.get('quantity').setValue(data.quantity);
    }
  }

  @Input() itemsCart: ItemCart[];

  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>
  ) {
    this.form = this.fb.group({
      quantity: [null]
    });
  }

  ngOnInit(): void {
    this.form.valueChanges.subscribe(res => {
      const itemsCart = this.itemsCart?.map(item => {
        if (item.id === this.id) {
          item = {...item, quantity: res.quantity};
        }
        return item;
      });
      this.store.dispatch(new SelectAllProductCart(itemsCart));
    });
  }

}
