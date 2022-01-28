import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './container/login/login.component';
import {NgModule} from '@angular/core';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
