import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../../../../state/app.state';
import {Cart} from '../../../cart/models/cart.models';
import {User} from '../../../../auth/models/user.model';
import {AuthorizationService} from '../../../../auth/services/authorization.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {

  user: User;
  carts: Cart[] = [];

  constructor(
    private store: Store<AppState>,
    private authorizationService: AuthorizationService
  ) {
  }

  ngOnInit(): void {
    this.store.select('orders')
      .subscribe(async data => {
          if (data) {
            this.user = await this.getUser();
            this.carts = data.carts;
          }
      });
  }

  private getUser(): Promise<User> {
    return new Promise(resolve => {
      const user = this.authorizationService.getUser();
      resolve(user);
    });
  }


}
