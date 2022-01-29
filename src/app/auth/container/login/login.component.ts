import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthorizationService} from '../../services/authorization.service';
import {DeactivateLoadingAction} from '../../../../state/actions/ui-loading.actions';
import {Store} from '@ngrx/store';
import {AppState} from '../../../../state/app.state';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  display: boolean = false;
  error!: string;

  constructor(
    private fb: FormBuilder,
    private authorizationService: AuthorizationService,
    public store: Store<AppState>,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }

  submitForm(): void {
    if (!this.loginForm.valid) {
      Object.values(this.loginForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
      return;
    }
    const {email, password} = this.loginForm.value;
    this.authorizationService.login(email, password).catch(err => {
      this.error = err.message;
      this.display = true;
      this.store.dispatch( new DeactivateLoadingAction() );
    });
  }

  goToRegister(): void {
    this.router.navigate(['auth/registro']);
  }

}
