import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { cartProduct } from '../Models/cartProduct';
import { CustomerService } from '../services/customer.service';
@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  Cart: cartProduct[] = [];
  total: number;
  popupDelete = false;
  DeletedName:string='';


  constructor(private productService: ProductsService,
    private customerService: CustomerService
  ) {
    this.total = 0;
  }

  ngOnInit(): void {
    this.Cart = this.productService.getProducts();
    this.Update_Total();
  }

  get_total() {
    return this.customerService.getTotal().toFixed(2);
  }
  RemoveProduct(cart:cartProduct):void{
    this.Cart.splice(this.Cart.indexOf(cart),1);
    this.popupDelete=true;
    this.DeletedName=cart.name;

    this.Update_Total();
  }
  Update_Total(){
    this.total=0;
    for (let i = 0; i < this.Cart.length; i++) {
      this.total += this.Cart[i].amount * this.Cart[i].price;
    }
    this.customerService.setTotal(this.total)
  }


}
