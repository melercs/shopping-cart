import {Component, OnInit} from '@angular/core';
import {OrderItem} from '../../models/order-item.models';
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
  listOfData: OrderItem[] = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park'
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park'
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park'
    }
  ];

  constructor(
    private store: Store<AppState>,
    private authorizationService: AuthorizationService
  ) {
  }

  ngOnInit(): void {
    this.store.select('orders')
      .subscribe(async data => {
          if (data) {
            console.log(data);
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
