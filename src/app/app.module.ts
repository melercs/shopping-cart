import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';

import {environment} from '../environments/environment';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {ROOT_REDUCERS} from '../state/app.state';
import {NZ_I18N} from 'ng-zorro-antd/i18n';
import {en_US} from 'ng-zorro-antd/i18n';
import {registerLocaleData} from '@angular/common';
import en from '@angular/common/locales/en';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {LayoutComponent} from './layout/layout.component';
import {NzLayoutModule} from 'ng-zorro-antd/layout';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestore} from '@angular/fire/firestore';
import {NzGridModule} from 'ng-zorro-antd/grid';
import {SharedModule} from './shared/shared.module';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot(ROOT_REDUCERS),
    !environment.production ? StoreDevtoolsModule.instrument({name: 'TEST'}) : [],
    FormsModule,
    BrowserAnimationsModule,
    RouterModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    NzLayoutModule,
    NzGridModule,
    SharedModule
  ],
  providers: [{provide: NZ_I18N, useValue: en_US}, AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule {
}
