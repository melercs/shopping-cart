import { Component, OnInit } from '@angular/core';
import {AuthorizationService} from '../auth/services/authorization.service';
import {CartService} from '../modules/cart/services/cart.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(
    private authorizationService: AuthorizationService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.cartService.initCart();
    this.cartService.getListCarts();
  }

}
