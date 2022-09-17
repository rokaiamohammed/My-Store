import { Component, OnInit } from '@angular/core';
import { Product } from '../Models/Product';
// import * as data from 'src/assets/data.json';
import { ProductsService } from '../services/products.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products:any;

  constructor(
    private productsService:ProductsService,
    private http:HttpClient
    ) { }

  ngOnInit(): void {
    this.http.get('assets/data.json').subscribe((res)=>{
      this.products=res;
    });
    this.productsService.resetProducts();
  }


}
