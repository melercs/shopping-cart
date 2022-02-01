import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmOrderComponent } from './container/confirm-order/confirm-order.component';
import {ConfirmRoutingModule} from './confirm-routing.module';
import {NzIconModule} from 'ng-zorro-antd/icon';



@NgModule({
  declarations: [
    ConfirmOrderComponent
  ],
  imports: [
    CommonModule,
    ConfirmRoutingModule,
    NzIconModule
  ]
})
export class ConfirmModule { }
