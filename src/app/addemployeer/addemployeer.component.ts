import { Component, OnInit } from '@angular/core';
import { Employeer } from "../module/Employees";
import { EmployeesService } from "../service/employees.service";


import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';//de goback chuyen ve mang hinh phia truoc
import { DatePicker } from '@syncfusion/ej2-calendars';

@Component({
  selector: 'app-addemployeer',
  templateUrl: './addemployeer.component.html',
  styleUrls: ['./addemployeer.component.css']
})
export class AddemployeerComponent implements OnInit {
  public employeer:Employeer;

  constructor(
    private route:ActivatedRoute,
    private employeerService:EmployeesService,
    private location: Location
  ) { }
  onadd() {
    this.employeerService.addEmployeer(this.employeer)
      .subscribe(() => this.goBack())
  }
  goBack(): void {
    this.location.back();
  }
  ngOnInit() {
    this.employeer=new Employeer();
  }

}
