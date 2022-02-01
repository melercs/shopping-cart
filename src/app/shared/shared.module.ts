import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SummaryPurchaseComponent} from './components/summary-purchase/summary-purchase.component';
import {NzCardModule} from 'ng-zorro-antd/card';
import {NzGridModule} from 'ng-zorro-antd/grid';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzDividerModule} from 'ng-zorro-antd/divider';
import {AmoutControlComponent} from './components/amout-control/amout-control.component';
import {NzInputModule} from 'ng-zorro-antd/input';
import {ReactiveFormsModule} from '@angular/forms';
import {NavbarComponent} from './components/navbar/navbar.component';
import {NzDropDownModule} from 'ng-zorro-antd/dropdown';
import {NzBadgeModule} from 'ng-zorro-antd/badge';
import {NzIconModule} from 'ng-zorro-antd/icon';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    SummaryPurchaseComponent,
    AmoutControlComponent,
    NavbarComponent
  ],
  exports: [
    SummaryPurchaseComponent,
    AmoutControlComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    NzCardModule,
    NzGridModule,
    NzButtonModule,
    NzDividerModule,
    NzInputModule,
    NzDropDownModule,
    NzBadgeModule,
    NzIconModule,
    ReactiveFormsModule,
    RouterModule,
  ]
})
export class SharedModule {
}
