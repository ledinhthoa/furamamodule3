import { Component, OnInit } from '@angular/core';
import { Service } from "../module/service";
import {ManageserviceService  } from "../service/manageservice.service";

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';//de goback chuyen ve mang hinh phia truoc
import { DatePicker } from '@syncfusion/ej2-calendars';
@Component({
  selector: 'app-addservice',
  templateUrl: './addservice.component.html',
  styleUrls: ['./addservice.component.css']
})
export class AddserviceComponent implements OnInit {

  constructor(
    private route:ActivatedRoute,
    private manageservice:ManageserviceService,
    private location: Location
  ) { }
  onadd(tendichvu:string,dientich:number,sotang:number,songuoitoida:number,
    trangthai:string,giathue:number,idtype:number): void {
   
    const newService: Service = new Service();
      newService.tendichvu=tendichvu;
      newService.dientich=Number(dientich);
      newService.sotang=sotang;
      newService.songuoitoida=songuoitoida;
      newService.trangthai=trangthai;
      newService.giathue=giathue;
      newService.idtype=Number(idtype);
      

    this.manageservice.addService(newService)
      .subscribe(insertedEmployeer => {
       console.log(insertedEmployeer)
      });
  }
  goBack(): void {
    this.location.back();
  }

  ngOnInit() {
  }

}
