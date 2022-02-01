import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderListComponent } from './components/order-list/order-list.component';
import {OrdersRoutingModule} from './products-routing.module';
import {NzTableModule} from 'ng-zorro-antd/table';
import {NzDividerModule} from 'ng-zorro-antd/divider';



@NgModule({
  declarations: [
    OrderListComponent
  ],
  imports: [
    CommonModule,
    NzTableModule,
    NzDividerModule,
    OrdersRoutingModule,
  ]
})
export class OrdersModule { }
