import { Component, OnInit,Input } from '@angular/core';
import { cartProduct } from '../Models/cartProduct';

@Component({
  selector: 'app-products-cart',
  templateUrl: './products-cart.component.html',
  styleUrls: ['./products-cart.component.css']
})
export class ProductsCartComponent implements OnInit {
  @Input() cart:cartProduct;

  constructor() {
    this.cart={
      id:0,
      name:'',
      price:0,
      url:'',
      amount:0,
    }
   }

  ngOnInit(): void {
  }

}
