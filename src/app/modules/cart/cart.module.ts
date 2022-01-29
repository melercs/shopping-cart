import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {cartRoutingModule} from './cart-routing.module';
import { CartListComponent } from './container/cart-list/cart-list.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import {NzGridModule} from 'ng-zorro-antd/grid';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzInputModule} from 'ng-zorro-antd/input';
import {SharedModule} from '../../shared/shared.module';
import {NzDividerModule} from 'ng-zorro-antd/divider';



@NgModule({
  declarations: [
    CartListComponent,
    CartItemComponent
  ],
  imports: [
    CommonModule,
    cartRoutingModule,
    NzGridModule,
    NzButtonModule,
    NzInputModule,
    SharedModule,
    NzDividerModule,
  ]
})
export class CartModule { }
