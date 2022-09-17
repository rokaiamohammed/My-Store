import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { cartProduct } from '../Models/cartProduct';
import { CustomerService } from '../services/customer.service';
@Component({
  selector: 'app-products-cart',
  templateUrl: './products-cart.component.html',
  styleUrls: ['./products-cart.component.css']
})
export class ProductsCartComponent implements OnInit {
  @Input() cart:cartProduct;
  addition:number=0;
  @Output() RemoveProduct:EventEmitter<cartProduct>=new EventEmitter;

  constructor(private customerService:CustomerService) {
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
  onKey(event:any):void{
    this.addition=event.target.valueAsNumber-this.cart.amount;
    this.cart.amount=event.target.valueAsNumber;
    this.customerService.addition(this.addition*this.cart.price);
  }
  downKey(event:any){

    this.addition=this.cart.amount-event.target.valueAsNumber;
    this.cart.amount=event.target.valueAsNumber;
    this.customerService.addition(this.addition*this.cart.price);
  }
  Remove(cart:cartProduct){
    this.RemoveProduct.emit(cart);
  }

}
