import { Injectable } from '@angular/core';
import { cartProduct } from '../Models/cartProduct';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  Products:cartProduct[]=[];
  temp=true;
  // amount=0;

  constructor() { }
  addProducts(product:cartProduct){
    if(this.Products.length==0){
      this.Products.push(product);
      console.log('first element');
    }else{
    for(let i=0; i<this.Products.length; i++){
      if (product.name==this.Products[i].name){
        this.Products[i].amount+=1;
        console.log("already added increase amount");
        break;
      }
    }
    for(let i=0; i<this.Products.length; i++){
      if (product.name!==this.Products[i].name){
        this.temp=true;
      }else{
        this.temp=false;
        break;
      }
    }
    if(this.temp)
    {
      console.log("added to the array");
      this.Products.push(product);
    }
  }

    console.log(this.getProducts());
    // return this.Products[this.Products.indexOf(product)].amount;

  }
  getAmount(product:cartProduct):number{
    return this.Products[this.Products.indexOf(product)].amount;
  }
  getProducts(){
    return this.Products;
  }
  resetProducts(){
    this.Products=[];
  }

}
