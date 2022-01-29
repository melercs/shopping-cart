import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-summary-purchase',
  templateUrl: './summary-purchase.component.html',
  styleUrls: ['./summary-purchase.component.scss']
})
export class SummaryPurchaseComponent implements OnInit {

  @Input() title = 'Resumen de tu compra';
  constructor() { }

  ngOnInit(): void {
  }

}
