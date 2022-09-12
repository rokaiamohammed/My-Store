import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ConfirmationPageComponent } from './confirmation-page/confirmation-page.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CheckoutFormComponent } from './checkout-form/checkout-form.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { SuccessComponent } from './success/success.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingCartComponent,
    ProductListComponent,
    ConfirmationPageComponent,
    ProductDetailsComponent,
    CheckoutFormComponent,
    NavBarComponent,
    ProductPageComponent,
    SuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
