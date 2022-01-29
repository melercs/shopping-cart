import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummaryPurchaseComponent } from './components/summary-purchase/summary-purchase.component';
import {NzCardModule} from 'ng-zorro-antd/card';
import {NzGridModule} from 'ng-zorro-antd/grid';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzDividerModule} from 'ng-zorro-antd/divider';



@NgModule({
  declarations: [
    SummaryPurchaseComponent
  ],
  exports: [
    SummaryPurchaseComponent
  ],
  imports: [
    CommonModule,
    NzCardModule,
    NzGridModule,
    NzButtonModule,
    NzDividerModule
  ]
})
export class SharedModule { }
