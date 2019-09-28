import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './pages/home/home.component';
import {AntipastiComponent} from './pages/antipasti/antipasti.component';
import {CrossoverComponent} from './pages/crossover/crossover.component';
import {PastaComponent} from './pages/pasta/pasta.component';
import {WinterComponent} from './pages/winter/winter.component';
import {SommerComponent} from './pages/sommer/sommer.component';
import {KaffeComponent} from './pages/kaffe/kaffe.component';
import {CocktailsComponent} from './pages/cocktails/cocktails.component';
import {VinoComponent} from './pages/vino/vino.component';
import {ProzentigesComponent} from './pages/prozentiges/prozentiges.component';
import {NotfoundComponent} from './pages/notfound/notfound.component';
import {LoginComponent} from './pages/login/login.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NavComponent} from './components/nav/nav.component';
import {LayoutModule} from '@angular/cdk/layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {CartComponent} from './pages/cart/cart.component';
import {OrderComponent} from './pages/order/order.component';
import {MatPaginatorModule, MatTableModule} from '@angular/material';
import {TableComponent} from './components/table/table.component';
import {MatSortModule} from '@angular/material/sort';
import {DrinkTableComponent} from './components/drink-table/drink-table.component';
import {config} from 'rxjs';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {environment} from '../environments/environment';
import { OrderTableComponent } from './components/order-table/order-table.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AntipastiComponent,
    CrossoverComponent,
    PastaComponent,
    WinterComponent,
    SommerComponent,
    KaffeComponent,
    CocktailsComponent,
    VinoComponent,
    ProzentigesComponent,
    NotfoundComponent,
    LoginComponent,
    NavComponent,
    CartComponent,
    OrderComponent,
    TableComponent,
    DrinkTableComponent,
    OrderTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule // storage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
