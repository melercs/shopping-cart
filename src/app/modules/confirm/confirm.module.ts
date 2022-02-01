import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmOrderComponent } from './container/confirm-order/confirm-order.component';
import {ConfirmRoutingModule} from './confirm-routing.module';
import {NzIconModule} from 'ng-zorro-antd/icon';
import {NzResultModule} from 'ng-zorro-antd/result';
import {NzButtonModule} from 'ng-zorro-antd/button';



@NgModule({
  declarations: [
    ConfirmOrderComponent
  ],
  imports: [
    CommonModule,
    ConfirmRoutingModule,
    NzIconModule,
    NzResultModule,
    NzButtonModule
  ]
})
export class ConfirmModule { }
