import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';
@Component({
  selector: 'app-confirmation-page',
  templateUrl: './confirmation-page.component.html',
  styleUrls: ['./confirmation-page.component.css']
})
export class ConfirmationPageComponent implements OnInit {
  name:string;
  address:string;
  credit:number;
  constructor(private customerService:CustomerService)
  {
    this.name='';
    this.address='';
    this.credit=0;
  }

  ngOnInit(): void {
  }
  getName(event:any){
    this.name=event.target.value;
    this.customerService.setName(this.name);
  }
  getAddress(event:any){
    this.address=event.target.value;
    this.customerService.setAddress(this.address);
  }
  getCredit(event:any){
    this.credit=event.target.value;
    this.customerService.setCredit(this.credit);
  }

}
