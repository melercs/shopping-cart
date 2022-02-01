import {Component, Input, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-summary-purchase',
  templateUrl: './summary-purchase.component.html',
  styleUrls: ['./summary-purchase.component.scss']
})
export class SummaryPurchaseComponent implements OnInit {

  @Input() total;
  @Input() title = 'Resumen de tu compra';
  @Input() textButton = 'Continuar';
  @Output() onClick = new EventEmitter<boolean>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onClickHandler(): void {
    this.onClick.emit(true);
  }

}
