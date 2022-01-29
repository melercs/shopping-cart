import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductGridComponent} from './container/product-grid/product-grid.component';
import {ProductCardComponent} from './components/product-card/product-card.component';
import {ProductsRoutingModule} from './products-routing.module';


@NgModule({
  declarations: [
    ProductGridComponent,
    ProductCardComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
