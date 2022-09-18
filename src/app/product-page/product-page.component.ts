import { Component, OnInit,Input } from '@angular/core';
import { Product } from '../Models/Product';
import { ActivatedRoute } from '@angular/router';
import * as data from 'src/assets/data.json';
import { ProductsService } from '../services/products.service';
import { cartProduct } from '../Models/cartProduct';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  // @Input() product:Product;
  products:Product[]=[];
  cart:cartProduct;
  popup = false;

  id:number=1;
  constructor(
    private route: ActivatedRoute,
    private productService:ProductsService

  ) { this.cart={
    id:0,
    name:'',
    price:0,
    url:'',
    amount:1,
  }}
  ngOnInit(): void {
    this.products=(data as any).default;
    this.id= this.route.snapshot.params['id'];
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
    // this.cart.amount=this.productService.getAmount(this.cart);

  }

}
