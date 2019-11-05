import { Component, OnInit,Input } from '@angular/core';
import { Employeer} from "../module/Employees";

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';//de goback chuyen ve mang hinh phia truoc
import { EmployeesService } from "../service/employees.service";
@Component({
  selector: 'app-editemployeer',
  templateUrl: './editemployeer.component.html',
  styleUrls: ['./editemployeer.component.css']
})
export class EditemployeerComponent implements OnInit {
  @Input() employeer:Employeer;
  public minDate: Date = new Date ("01/011/2019");
    public maxDate: Date = new Date ("02/12/2019");
    public dateValue: Date = new Date ();
   
  constructor(
    private route:ActivatedRoute,
    private location:Location,
    private employeerService:EmployeesService
  ) { }

  ngOnInit() {
    this.employeer= new Employeer;
    this.getCustomerFromRoute();
    
  }
  getCustomerFromRoute(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(`this.route.snapshot.paramMap = ${JSON.stringify(this.route.snapshot.paramMap)}`);
    this.employeerService.getEmployeerFromId(id).subscribe(employeer => this.employeer= employeer); 
  }
  
    save(): void {
      this.employeerService.updateEmployeerr(this.employeer).subscribe(() => this.goBack());
    }
 
  goBack(): void {
    this.location.back();
  }

}
