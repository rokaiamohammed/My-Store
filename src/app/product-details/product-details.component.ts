import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Product } from '../Models/Product';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  @Input() product:Product;
  // @Output() showProduct:EventEmitter<Product>=new EventEmitter;
  constructor() {
    this.product={
      id:0,
      name:'',
      price:0,
      url:'',
      description:'',
    }
  }

  ngOnInit(): void {
  }
  // show(product:Product):void{
  //   this.showProduct.emit(product);
  // }

}
