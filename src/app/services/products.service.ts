import { Injectable } from '@angular/core';
import { cartProduct } from '../Models/cartProduct';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  Products:cartProduct[]=[];

  constructor() { }
  addProducts(product:cartProduct){
    this.Products.push(product);
  }
  getProducts(){
    return this.Products;
  }
}
