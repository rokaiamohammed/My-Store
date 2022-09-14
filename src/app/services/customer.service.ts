import { Injectable } from '@angular/core';
import { Customer } from '../Models/customer';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customer:Customer;

  constructor() {
    this.customer={
      name:'',
      Address:'',
      credit:0,
      total:0
    }
  }
  setTotal(total:number){
    this.customer.total=total;
  }
  setName(name:string){
    this.customer.name=name;
  }
  setAddress(address:string){
    this.customer.Address=address;
  }
  setCredit(credit:number){
    this.customer.credit=credit;
  }
  getName(){
    return this.customer.name;
  }
  getTotal(){
    return this.customer.total;
  }
}
