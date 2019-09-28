import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {AntipastiComponent} from './pages/antipasti/antipasti.component';
import {CocktailsComponent} from './pages/cocktails/cocktails.component';
import {CrossoverComponent} from './pages/crossover/crossover.component';
import {KaffeComponent} from './pages/kaffe/kaffe.component';
import {LoginComponent} from './pages/login/login.component';
import {PastaComponent} from './pages/pasta/pasta.component';
import {ProzentigesComponent} from './pages/prozentiges/prozentiges.component';
import {SommerComponent} from './pages/sommer/sommer.component';
import {VinoComponent} from './pages/vino/vino.component';
import {WinterComponent} from './pages/winter/winter.component';
import {NotfoundComponent} from './pages/notfound/notfound.component';
import {CartComponent} from './pages/cart/cart.component';
import {OrderComponent} from './pages/order/order.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'antipasti', component: AntipastiComponent},
  {path: 'cocktails', component: CocktailsComponent},
  {path: 'crossover', component: CrossoverComponent},
  {path: 'kaffe', component: KaffeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'pasta', component: PastaComponent},
  {path: 'prozentiges', component: ProzentigesComponent},
  {path: 'sommer', component: SommerComponent},
  {path: 'vino', component: VinoComponent},
  {path: 'winter', component: WinterComponent},
  {path: 'cart', component: CartComponent},
  {path: 'order', component: OrderComponent},
  {path: '**', component: NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
