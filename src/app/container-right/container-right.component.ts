import { Component, OnInit,Input,EventEmitter, Output } from '@angular/core';
import { Customer } from "../module/module";
import { CustomerService } from "../customer.service";
import {NgxPaginationModule} from 'ngx-pagination';

@Component({
  selector: 'app-container-right',
  templateUrl: './container-right.component.html',
  styleUrls: ['./container-right.component.css']
})
export class ContainerRightComponent implements OnInit {
  paginaCustomer:any;
 
  // customers=fakeCustomer;
  customers:Customer[];
   receivedCustomer;
  constructor(private customerService:CustomerService) { 
     
    this.paginaCustomer = {
      itemsPerPage: 4,
      currentPage: 1,
      pageSize:4,
      
     
    };
    
  }
  getCustomerFromService():void{
    //ko goi truoc tiep nhu the nay ma goi bang su theo gioi
    // this.customers=this.customerService.getCustomers();
    this.customerService.getCustomers().subscribe(updateCustomer=>{
      this.customers=updateCustomer
      this.receivedCustomer = updateCustomer.length
     
    }
     
      )

    

  }

  ngOnInit() {
    this.getCustomerFromService();
    // this.getCustomers()
  }
  delete(customerId: number): void {    
    if(confirm("bạn có chắc chắn muốn xóa không ?")){
    this.customerService.deleteCustomer(customerId).subscribe(_ => {
      this.customers = this.customers.filter(eachMovie => eachMovie.id !== customerId);
    });
  }
  }
  
  pageChanged(event){
  
    this.paginaCustomer.currentPage = event;
  }
  // getCustomers(){
  //  this.customerService.getCustomers().subscribe(data=>{
  //   this.receivedCustomer= data.length
    
  //  })
    
  // }
}
