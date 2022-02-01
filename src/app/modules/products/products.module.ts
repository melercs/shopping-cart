import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductGridComponent} from './container/product-grid/product-grid.component';
import {ProductCardComponent} from './components/product-card/product-card.component';
import {ProductsRoutingModule} from './products-routing.module';
import {NzCardModule} from 'ng-zorro-antd/card';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzDividerModule} from 'ng-zorro-antd/divider';
import {NzSkeletonModule} from 'ng-zorro-antd/skeleton';
import {NzSpaceModule} from 'ng-zorro-antd/space';


@NgModule({
  declarations: [
    ProductGridComponent,
    ProductCardComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    NzCardModule,
    NzButtonModule,
    NzDividerModule,
    NzSkeletonModule,
    NzSpaceModule
  ]
})
export class ProductsModule { }
