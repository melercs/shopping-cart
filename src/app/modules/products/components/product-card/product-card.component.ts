import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Product} from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() isLoading;
  @Input() product?: Product;
  @Output() addCart = new EventEmitter<Product>();

  constructor() { }

  ngOnInit(): void {
  }

  add(product: Product): void {
    this.addCart.emit(product);
  }

}
