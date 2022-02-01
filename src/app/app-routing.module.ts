import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from './layout/layout.component';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AuthorizationGuard} from './auth/guards/authorization.guard';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'productos',
        pathMatch: 'full'
      },
      {
        path: 'productos',
        loadChildren: () => import('./modules/products/products.module').then(modules => modules.ProductsModule),
        canLoad: [AuthorizationGuard]
      },
      {
        path: 'carrito',
        loadChildren: () => import('./modules/cart/cart.module').then(modules => modules.CartModule),
        canLoad: [AuthorizationGuard]
      },
      {
        path: 'confirmacion-orden',
        loadChildren: () => import('./modules/confirm/confirm.module').then(modules => modules.ConfirmModule),
        canLoad: [AuthorizationGuard]
      },
      {
        path: 'mis-ordenes',
        loadChildren: () => import('./modules/orders/orders.module').then(modules => modules.OrdersModule),
        canLoad: [AuthorizationGuard]
      }
    ]
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(modules => modules.AuthModule)
  },
  {
    path: '**',
    redirectTo: 'auth'
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
