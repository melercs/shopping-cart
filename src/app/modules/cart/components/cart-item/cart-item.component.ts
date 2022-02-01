import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Store} from '@ngrx/store';
import {AppState} from '../../../../../state/app.state';
import {SelectAllProductCart} from '../../../../../state/actions/cart.actions';
import {ItemCart} from '../../models/cart.models';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {

  data: ItemCart;
  form: FormGroup;

  @Input() id: string;
  @Input() set itemData(data: ItemCart) {
    this.data = data;
    if (data) {
      this.form.get('quantity').setValue(data.quantity);
    }
  }
  @Input() itemsCart: ItemCart[];
  @Output() deleteItem = new EventEmitter<ItemCart>();

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

  deleteItemHandler(item: ItemCart): void {
    this.deleteItem.emit(item);
  }

}
