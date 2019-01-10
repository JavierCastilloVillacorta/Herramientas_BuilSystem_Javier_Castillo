import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule} from 'angularfire2';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



import { LoginService }  from './login.service';
import { ProductService } from './product.service';
import { ShoppingCartService } from './shopping-cart.service';


import { HeaderComponent } from './header/header.component';
import { ProductCatalogComponent } from './product-catalog/product-catalog.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { CartComponent } from './cart/cart.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    ProductCatalogComponent,
    ProductDetailComponent,
    ProductItemComponent,
    CartComponent,
    CartItemComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'tienda'),
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [
    LoginService,
    ProductService,
    ShoppingCartService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
