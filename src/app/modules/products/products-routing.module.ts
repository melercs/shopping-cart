import {RouterModule, Routes} from '@angular/router';
import {ProductGridComponent} from './container/product-grid/product-grid.component';
import {NgModule} from '@angular/core';
import {NzMessageModule} from 'ng-zorro-antd/message';


const routes: Routes  = [
  {
    path: '',
    component: ProductGridComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    NzMessageModule
  ],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
