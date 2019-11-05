import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Employeer } from "../module/Employees";
import { EmployeesService } from "../service/employees.service";
import {NgxPaginationModule} from 'ngx-pagination';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  paginaEmployeer:any;
  @Output()  dememployeer= new EventEmitter();

  // customers=fakeCustomer;
  employeers:Employeer[];
  constructor(private employeerService:EmployeesService) { 
    this.paginaEmployeer = {
      itemsPerPage: 4,
      currentPage: 1,
      pageSize:4,
      
     
    };
  }
  getEmployeerFromService():void{
    //ko goi truoc tiep nhu the nay ma goi bang su theo gioi
    // this.customers=this.customerService.getCustomers();
    this.employeerService.getEmployees().subscribe(updateEmployeer=>this.employeers=updateEmployeer)
    this.dememployeer.emit(this.employeers.length);
  }


  ngOnInit() {
    this.getEmployeerFromService();
  }
  delete(employeerId: number): void {    
    if(confirm("bạn có chắc chắn muốn xóa không ?")){
    this.employeerService.deleteEmployeerr(employeerId).subscribe(_ => {
      this.employeers = this.employeers.filter(eachEmployeer => eachEmployeer.id !== employeerId);
    });
  }
  }
  pageChanged(event){
  
    this.paginaEmployeer.currentPage = event;
  }
}
