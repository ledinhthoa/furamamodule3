import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Customer } from "../app/module/module";

import { ContainerRightComponent } from "../app/container-right/container-right.component";
import { EditcustomerComponent } from "../app/editcustomer/editcustomer.component";
import { AddCustomerComponent } from "../app/add-customer/add-customer.component";
import { ContainerLeftComponent } from "../app//container-left/container-left.component";
import {EmployeesComponent  } from "../app/employees/employees.component";
import { EditemployeerComponent } from "../app/editemployeer/editemployeer.component";
import { AddemployeerComponent } from "../app/addemployeer/addemployeer.component";
import { ManageserviceComponent } from "../app/manageservice/manageservice.component";
import { EditserviceComponent} from "../app/editservice/editservice.component";
import { AddserviceComponent } from "../app/addservice/addservice.component";
import { ConstractComponent } from "../app/constract/constract.component";
import { AddcontractComponent } from "../app/addcontract/addcontract.component";


import { Ng2SearchPipeModule } from 'ng2-search-filter';


const routes: Routes = [
   { path: '', redirectTo: '/containerright', pathMatch: 'full' },
  { path: 'containerright', component: ContainerRightComponent },
  { path: 'editcustomer/:id', component: EditcustomerComponent},
  { path: 'addcustomer', component: AddCustomerComponent },
  { path: 'employees', component: EmployeesComponent },
  { path: 'editemployees/:id', component: EditemployeerComponent },
  { path: 'addemployeer', component: AddemployeerComponent},
  { path: 'manageservice', component: ManageserviceComponent},
  { path: 'editservice/:id', component: EditserviceComponent},
  { path: 'addservice', component: AddserviceComponent},
  { path: 'constract', component:ConstractComponent},
  { path: 'addcontract', component:AddcontractComponent },



  
];
@NgModule({
  // declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
