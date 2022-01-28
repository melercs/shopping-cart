import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from './layout/layout.component';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(modules => modules.AuthModule)
  }
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
