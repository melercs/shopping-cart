import { Component, OnInit } from '@angular/core';
import {AuthorizationService} from '../../../auth/services/authorization.service';
import {Store} from '@ngrx/store';
import {AppState} from '../../../../state/app.state';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  countProductsCart = 0;
  constructor(
    private authorizationService: AuthorizationService,
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.store.select('cart').subscribe(res => {
      this.countProductsCart = res.products.length;
    });
  }

  logout(): void {
    this.authorizationService.logout();
  }

}
