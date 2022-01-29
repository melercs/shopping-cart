import {Component, OnInit} from '@angular/core';
import {AuthorizationService} from './auth/services/authorization.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'webapp-tul';

  constructor(
    private authorizationService: AuthorizationService
  ) {
  }

  ngOnInit(): void {
    this.authorizationService.initAuth();
  }
}
