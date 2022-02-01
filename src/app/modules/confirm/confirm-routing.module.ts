import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {ConfirmOrderComponent} from './container/confirm-order/confirm-order.component';


const routes: Routes  = [
  {
    path: '',
    component: ConfirmOrderComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfirmRoutingModule { }
