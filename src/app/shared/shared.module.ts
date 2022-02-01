import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummaryPurchaseComponent } from './components/summary-purchase/summary-purchase.component';
import {NzCardModule} from 'ng-zorro-antd/card';
import {NzGridModule} from 'ng-zorro-antd/grid';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzDividerModule} from 'ng-zorro-antd/divider';
import { AmoutControlComponent } from './components/amout-control/amout-control.component';
import {NzInputModule} from 'ng-zorro-antd/input';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    SummaryPurchaseComponent,
    AmoutControlComponent
  ],
    exports: [
        SummaryPurchaseComponent,
        AmoutControlComponent
    ],
  imports: [
    CommonModule,
    NzCardModule,
    NzGridModule,
    NzButtonModule,
    NzDividerModule,
    NzInputModule,
    ReactiveFormsModule,
  ]
})
export class SharedModule { }
