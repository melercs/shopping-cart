import { Component, OnInit } from '@angular/core';
import {DeactivateLoadingAction} from '../../../../state/actions/ui-loading.actions';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthorizationService} from '../../services/authorization.service';
import {Store} from '@ngrx/store';
import {AppState} from '../../../../state/app.state';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;

  display = false;
  error!: string;

  constructor(
    private fb: FormBuilder,
    private authorizationService: AuthorizationService,
    public store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      username: [null, [Validators.required]],
      email: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  }

  submitForm(): void {
    if (!this.registerForm.valid) {
      Object.values(this.registerForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
      return;
    }
    const {email, password, username} = this.registerForm.value;
    this.authorizationService.signup(email, password, username).catch(err => {
      this.store.dispatch( new DeactivateLoadingAction() );
      this.error = err.message;
      this.display = true;
    });
  }

}
