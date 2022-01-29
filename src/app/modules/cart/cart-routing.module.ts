import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {CartListComponent} from './container/cart-list/cart-list.component';


const routes: Routes = [
  {
    path: '',
    component: CartListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class cartRoutingModule { }
