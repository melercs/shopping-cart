import {RouterModule, Routes} from '@angular/router';
import {ProductGridComponent} from './container/product-grid/product-grid.component';
import {NgModule} from '@angular/core';


const routes: Routes  = [
  {
    path: '',
    component: ProductGridComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
