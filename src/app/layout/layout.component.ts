import { Component, OnInit } from '@angular/core';
import {AuthorizationService} from '../auth/services/authorization.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(
    private authorizationService: AuthorizationService
  ) { }

  ngOnInit(): void {
  }

  logout(): void {
    this.authorizationService.logout();
  }

}
