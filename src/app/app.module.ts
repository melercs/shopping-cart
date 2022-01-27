import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';

import {environment} from '../environments/environment';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({}, {}),
    !environment.production ? StoreDevtoolsModule.instrument({name: 'TEST'}) : [],
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
