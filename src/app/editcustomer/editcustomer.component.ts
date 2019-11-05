import { Component, OnInit, Input } from '@angular/core';
import { Customer } from "../module/module";



//Router
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';//de goback chuyen ve mang hinh phia truoc
import { CustomerService } from "../customer.service";
@Component({
  selector: 'app-editcustomer',
  templateUrl: './editcustomer.component.html',
  styleUrls: ['./editcustomer.component.css']
})
export class EditcustomerComponent implements OnInit {
  @Input() customer:Customer;
  constructor(
    private route: ActivatedRoute,
    private customerService: CustomerService,
    private location: Location
  ) { }

  ngOnInit() {
    this.customer = new Customer
    this.getCustomerFromRoute();
    
  }
  getCustomerFromRoute(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(`this.route.snapshot.paramMap = ${JSON.stringify(this.route.snapshot.paramMap)}`);
    this.customerService.getCustomerFromId(id).subscribe(customer => this.customer= customer); 
  }
  
    save(): void {
      this.customerService.updateCustomer(this.customer).subscribe(() => this.goBack());
    }
    

  goBack(): void {
    this.location.back();
  }
}
