import { Component, OnInit} from '@angular/core';
import { ContainerRightComponent } from "../container-right/container-right.component";
import { CustomerService } from "../customer.service";

@Component({
  selector: 'app-container-left',
  templateUrl: './container-left.component.html',
  styleUrls: ['./container-left.component.css']
})
export class ContainerLeftComponent implements OnInit {
 
  customers;
  constructor(
    private customerService:CustomerService
  ) { 
   this.getCustomerFromService();
  }
  getCustomerFromService():void{
    //ko goi truoc tiep nhu the nay ma goi bang su theo gioi
    // this.customers=this.customerService.getCustomers();
    this.customerService.getCustomers().subscribe(updateCustomer=>{
      this.customers=updateCustomer.length;})
  }
  displayCounter(receivedCustomer) {
    console.log(receivedCustomer);
}
  ngOnInit() {
  }

}
