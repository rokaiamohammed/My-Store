import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
@Component({
  selector: 'app-confirmation-page',
  templateUrl: './confirmation-page.component.html',
  styleUrls: ['./confirmation-page.component.css']
})
export class ConfirmationPageComponent implements OnInit {
  name:string;
  address:string;
  credit:number;
  title = 'Angular Form Validation Tutorial';
  angForm!: FormGroup;

  constructor(
    private customerService:CustomerService,
    private fb: FormBuilder
    )
  {
    this.name='';
    this.address='';
    this.credit=0;
    this.createForm();
  }

  ngOnInit(): void { }

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
  createForm() {
    this.angForm = this.fb.group({
       name: ['', Validators.required ],
       address: ['', Validators.required ],
       Credit:['', Validators.required ]
    });
  }

}
