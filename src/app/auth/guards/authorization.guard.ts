import {Injectable} from '@angular/core';
import {CanLoad} from '@angular/router';
import {AuthorizationService} from '../services/authorization.service';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthorizationGuard implements CanLoad {
  constructor(
    public authorizationService: AuthorizationService
  ) {
  }

  canLoad(): Observable<boolean> | Promise<boolean> | boolean {
    return this.authorizationService.isAuth();
  }
}
