import { Injectable } from '@angular/core';
import { cartProduct } from '../Models/cartProduct';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  Products:cartProduct[]=[];

  constructor() { }
  addProducts(product:cartProduct){
    if(this.Products.indexOf(product)<0){
      this.Products.push(product);
    }else{this.Products[this.Products.indexOf(product)].amount+=1;}

  }
  getProducts(){
    return this.Products;
  }
  resetProducts(){
    this.Products=[];
  }

}
