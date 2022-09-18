import { Component, OnInit } from '@angular/core';
import { Product } from '../Models/Product';
import { ProductsService } from '../services/products.service';
import { HttpClient } from '@angular/common/http';
import { ListService } from '../services/list.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products:Product[]=[];

  constructor(
    private productsService:ProductsService,
    private http:HttpClient,
    private listService:ListService
    ) { }

  ngOnInit(): void {
    // this.http.get('assets/data.json').subscribe((res)=>{
    //   this.products=res;
    // });
    // this.productsService.resetProducts();
    this.products=this.listService.getProducts();
  }


}
