import { Component, OnInit,Input } from '@angular/core';
import { Product } from '../Models/Product';
import { ActivatedRoute } from '@angular/router';
import * as data from 'src/assets/data.json';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  // @Input() product:Product;
  products:Product[]=[];

  id:number=1;
  constructor(
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.products=(data as any).default;
    this.id= this.route.snapshot.params['id'];
  }

}
