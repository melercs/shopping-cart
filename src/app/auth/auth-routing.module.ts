import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './container/login/login.component';
import {NgModule} from '@angular/core';
import {RegisterComponent} from './container/register/register.component';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'registro',
    component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
