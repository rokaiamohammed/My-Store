import { Component, OnInit } from '@angular/core';
import { Product } from '../Models/Product';
import * as data from 'src/assets/data.json';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products:Product[]=[];
  constructor() { }

  ngOnInit(): void {
    this.products=(data as any).default;
  }
  // showProduct(product:Product):void{
  //   this.products=this.products.filter(p=>p.id==product.id);
  // }

}
