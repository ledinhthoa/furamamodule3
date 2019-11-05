import { Component, OnInit } from '@angular/core';
import { Service} from "../module/service";
import {ManageserviceService  } from "../service/manageservice.service";
import {NgxPaginationModule} from 'ngx-pagination';
import { Router } from "@angular/router";

@Component({
  selector: 'app-manageservice',
  templateUrl: './manageservice.component.html',
  styleUrls: ['./manageservice.component.css']
})
export class ManageserviceComponent implements OnInit {
  paginaEmployeer:any;
  manageservices:Service[];
  constructor(private manageserivice:ManageserviceService,
    private router:Router
    ) { 
    this.paginaEmployeer = {
      itemsPerPage: 4,
      currentPage: 1,
      pageSize:4,
      
     
    };
  }
  getManageserviceFromService():void{
    //ko goi truoc tiep nhu the nay ma goi bang su theo gioi
    // this.customers=this.customerService.getCustomers();
    this.manageserivice.getManageservice().subscribe(updateManageservice=>this.manageservices=updateManageservice)
    
  }
  ngOnInit() {
    this.getManageserviceFromService();
  }
  // delete(serviceId: number): void {    
   
  //   this.manageserivice.deleteService(serviceId).subscribe(_ => {
  //     this.manageservices = this.manageservices.filter(eachService => eachService.id !== eachService );
  //   });
  // }

  delete(id){
    if(confirm("bạn có chắc chắn muốn xóa dịch vụ này không ?")){
      this.manageserivice.deleteservice(id).subscribe(data=>{
        this.getManageserviceFromService();
      });}
  }
  pageChanged(event){
  
    this.paginaEmployeer.currentPage = event;
  }

}
