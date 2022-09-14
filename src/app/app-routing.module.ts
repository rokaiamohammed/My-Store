import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { SuccessComponent } from './success/success.component';
const routes: Routes = [
  {path:'',component:ProductListComponent},
  {path:'cart',component:ShoppingCartComponent},
  {path:'Product-page/:id',component:ProductPageComponent},
  {path:'success',component:SuccessComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
