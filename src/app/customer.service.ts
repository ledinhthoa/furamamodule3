import { Injectable } from '@angular/core';
import { Customer } from "../app/module/module";
// import { fakeCustomer } from "../app/fake/fake-customer";
import { HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import { of } from "rxjs";
import { catchError,map,tap } from 'rxjs/operators'; 
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private customersURL='http://localhost:3000/Customers';
  getCustomers():Observable<Customer[]>{
    // return of(fakeCustomer);
    return this.http.get<Customer[]>(this.customersURL).pipe(
    tap(receivedCustomer => console.log(`receivedCustomer = ${JSON.stringify(receivedCustomer)}`)),
      catchError(error => of([]))
    );
   
  }
  getCustomerFromId(id: number): Observable<Customer> {    
    const url = `${this.customersURL}/${id}`;
    // return of(fakeCustomer.find(customer => customer.id === id));
    return this.http.get<Customer>(url).pipe(
      tap(selectedCustomer => console.log(`selected movie = ${JSON.stringify(selectedCustomer)}`)),
      catchError(error => of(new Customer()))
    );
  }
  updateCustomer(customer: Customer): Observable<any> {
   
    return this.http.put(`${this.customersURL}/${customer.id}`, customer, httpOptions).pipe(
      tap(updatedMovie => console.log(`updated customer = ${JSON.stringify(updatedMovie)}`)),
      catchError(error => of(new Customer()))
    );
  }
  deleteCustomer(customerId: number): Observable<Customer> {    
    const url = `${this.customersURL}/${customerId}`;
    return this.http.delete<Customer>(url,httpOptions).pipe(
      tap(_ => console.log(`Deleted movie with id = ${customerId}`)),
      catchError(error => of(null))
    );
  }
  addCustomer(newCustomer: Customer): Observable<Customer> {        
    return this.http.post<Customer>(this.customersURL, newCustomer, httpOptions).pipe(
      tap((customer: Customer) => console.log(`insertedCustomer = ${JSON.stringify(customer)}`)),
      catchError(error => of(new Customer()))
    );
  }
  constructor(private http: HttpClient) { }
}
