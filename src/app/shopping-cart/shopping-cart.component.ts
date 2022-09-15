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

  constructor(private productService: ProductsService,
    private customerService: CustomerService
  ) {
    this.total = 0;
  }

  ngOnInit(): void {
    this.Cart = this.productService.getProducts();
    for (let i = 0; i < this.Cart.length; i++) {
      this.total += this.Cart[i].amount * this.Cart[i].price;
    }
    this.customerService.setTotal(this.total)
  }

  get_total() {
    return this.customerService.getTotal().toFixed(2);
  }
}
