import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ConfirmationPageComponent } from './confirmation-page/confirmation-page.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { SuccessComponent } from './success/success.component';
import { ProductsCartComponent } from './products-cart/products-cart.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { AngularMaterialModule } from './material.module';
//  import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    ShoppingCartComponent,
    ProductListComponent,
    ConfirmationPageComponent,
    ProductDetailsComponent,
    NavBarComponent,
    ProductPageComponent,
    SuccessComponent,
    ProductsCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
    // BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
