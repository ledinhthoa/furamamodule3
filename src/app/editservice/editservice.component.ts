import { Component, OnInit,Input } from '@angular/core';
import {Service  } from "../module/service";
import {ManageserviceService  } from "../service/manageservice.service";

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';//de goback chuyen ve mang hinh phia truoc

@Component({
  selector: 'app-editservice',
  templateUrl: './editservice.component.html',
  styleUrls: ['./editservice.component.css']
})
export class EditserviceComponent implements OnInit {
  @Input() manage:Service;
  constructor(
    private route:ActivatedRoute,
    private location:Location,
    private manageservice:ManageserviceService
  ) { }

  ngOnInit() {
    this.manage=new Service;
    this.getmanageFromRoute();
  }
  getmanageFromRoute(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(`this.route.snapshot.paramMap = ${JSON.stringify(this.route.snapshot.paramMap)}`);
    this.manageservice.getManageFromId(id).subscribe(manageservice => this.manage= manageservice); 
  }
  
    save(): void {
      this.manageservice.updateManage(this.manage).subscribe(() => this.goBack());
    }
 
  goBack(): void {
    this.location.back();
  }

}
