import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import {NgxPaginationModule} from 'ngx-pagination';
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarHeaderComponent } from './navbar-header/navbar-header.component';
import { MainComponent } from './main/main.component';
import { ContainerLeftComponent } from './container-left/container-left.component';
import { ContainerRightComponent } from './container-right/container-right.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { CustomerService } from "./customer.service";
import {EmployeesService  } from "./service/employees.service";
import { EditcustomerComponent } from './editcustomer/editcustomer.component';
import { AppRoutingModule } from './app-routing.module';
import { EmployeesComponent } from './employees/employees.component';
import { EditemployeerComponent } from './editemployeer/editemployeer.component';
import { AddemployeerComponent } from './addemployeer/addemployeer.component';
import { ManageserviceComponent } from './manageservice/manageservice.component';
import { EditserviceComponent } from './editservice/editservice.component';
import { AddserviceComponent } from './addservice/addservice.component';
import { AddcontractComponent } from './addcontract/addcontract.component';
import { ConstractComponent } from './constract/constract.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarHeaderComponent,
    MainComponent,
    ContainerLeftComponent,
    ContainerRightComponent,
    AddCustomerComponent,
    EditcustomerComponent,
    EmployeesComponent,
    EditemployeerComponent,
    AddemployeerComponent,
    ManageserviceComponent,
    EditserviceComponent,
    AddserviceComponent,
    AddcontractComponent,
    ConstractComponent,
   
   
  ],
  imports: [
    BrowserModule,FormsModule,
    NgxPaginationModule,
    HttpClientModule, 
    AppRoutingModule,
    DatePickerModule,
    Ng2SearchPipeModule
  
  ],
  providers: [CustomerService,EmployeesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
