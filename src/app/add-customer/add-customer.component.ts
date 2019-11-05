import { Component, OnInit } from '@angular/core';
import { Customer } from "../module/module";
import { CustomerService } from "../customer.service";
import {NgxPaginationModule} from 'ngx-pagination';


import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';//de goback chuyen ve mang hinh phia truoc
import { DatePicker } from '@syncfusion/ej2-calendars';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  
  customer:Customer[];
  
  constructor( private route: ActivatedRoute,
    private customerService: CustomerService,
    private location: Location) { }
    

  ngOnInit() {
   
  }
  onadd(hoten:string,gioitinh:string,email:string,ngaysinh:string,diachi:string): void {
   
    const newCustomer: Customer = new Customer();
      newCustomer.hoten=hoten;
      newCustomer.gioitinh=gioitinh;
      newCustomer.email=email;
      newCustomer.ngaysinh=ngaysinh;
      newCustomer.diachi=diachi;
    this.customerService.addCustomer(newCustomer)
      .subscribe(insertedCustomer2 => {
       console.log(insertedCustomer2)
      });
  }
  goBack(): void {
    this.location.back();
  }
}
