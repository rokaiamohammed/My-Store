import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Product } from '../Models/Product';
import { ProductsService } from '../services/products.service';
import { cartProduct } from '../Models/cartProduct';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  @Input() product:Product;
  cart:cartProduct;
  popup = false;

  constructor(private productService:ProductsService) {
    this.product={
      id:0,
      name:'',
      price:0,
      url:'',
      description:'',
    }
    this.cart={
      id:0,
      name:'',
      price:0,
      url:'',
      amount:1,
    }
  }

  ngOnInit(): void {
  }

  onKey(event:any):void{
    this.cart.amount=event.target.valueAsNumber;

  }
  downKey(event:any):void{
    this.cart.amount=event.target.value;

  }

  add(id:number,name:string,price:number,url:string):void{
    this.cart.id=id;
    this.cart.name=name;
    this.cart.price=price;
    this.cart.url=url;
    this.productService.addProducts(this.cart);
  }


}
