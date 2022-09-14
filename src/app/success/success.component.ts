import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';
@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {
  name:string;
  total:number;
  constructor(private customerService:CustomerService) {
    this.name='',
    this.total=0
   }

  ngOnInit(): void {
    this.name=this.customerService.getName();
    this.total=this.customerService.getTotal();
  }
}
