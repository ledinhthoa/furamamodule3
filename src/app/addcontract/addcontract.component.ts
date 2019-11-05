import { Component, OnInit } from '@angular/core';
import { Constract } from "../module/constract";
import { ConstractService } from "../service/constract.service";

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';//de goback chuyen ve mang hinh phia truoc
import { DatePicker } from '@syncfusion/ej2-calendars';

@Component({
  selector: 'app-addcontract',
  templateUrl: './addcontract.component.html',
  styleUrls: ['./addcontract.component.css']
})
export class AddcontractComponent implements OnInit {

  constructor(
    private route:ActivatedRoute,
    private location: Location,
    private constractService:ConstractService 
    
  ) { }
  onadd(mahd:number,id_customer:number,ngaybatdau:string,ngayketthuc:string,tiendatcoc:number,
    tongtien:number,hinhthucthanhtoan:string,ghichu:string): void {
   
    const newConstract: Constract = new Constract();
    newConstract.mahd=mahd;
      newConstract.idcustomer=id_customer;
      newConstract.ngaybatdau=ngaybatdau;
     newConstract.ngayketthuc=ngayketthuc;
      newConstract.tiendatcoc=tiendatcoc;
      newConstract.tongtien=tongtien;
      newConstract.hinhthucthanhtoan=hinhthucthanhtoan;
      newConstract.note=ghichu;
      

    this.constractService.addConstract(newConstract)
      .subscribe(insertedConstract => {
       console.log(insertedConstract)
      });
  }
  goBack(): void {
    this.location.back();
  }
  ngOnInit() {
  }

}
