import { Injectable } from '@angular/core';
import { Employeer } from "../module/Employees";
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
export class EmployeesService {
  private EmployeerURL='http://localhost:3000/Employeer';
  getEmployees():Observable<Employeer[]>{
    return this.http.get<Employeer[]>(this.EmployeerURL).pipe(
      tap(receivedEmployeer => console.log(`receivedmanage = ${JSON.stringify(receivedEmployeer)}`)),
        catchError(error => of([]))
      );
  }
  getEmployeerFromId(id: number): Observable<Employeer> {    
    const url = `${this.EmployeerURL}/${id}`;
    return this.http.get<Employeer>(url).pipe(
      tap(selectedEmployeer => console.log(`selected movie = ${JSON.stringify(selectedEmployeer)}`)),
      catchError(error => of(new Employeer()))
    );
  }
  updateEmployeerr(employeer: Employeer): Observable<any> {
   
    return this.http.put(`${this.EmployeerURL}/${employeer.id}`, employeer, httpOptions).pipe(
      tap(updatedEmployeer => console.log(`updated employeer = ${JSON.stringify(updatedEmployeer)}`)),
      catchError(error => of(new Employeer()))
    );
  }
  deleteEmployeerr(employeerId: number): Observable<Employeer> {    
    const url = `${this.EmployeerURL}/${employeerId}`;
    return this.http.delete<Employeer>(url,httpOptions).pipe(
      tap(_ => console.log(`Deleted movie with id = ${employeerId}`)),
      catchError(error => of(null))
    );
  }
  addEmployeer(employeer:Employeer): Observable<Employeer> {        
    return this.http.post<Employeer>(this.EmployeerURL,employeer, httpOptions).pipe(
      tap((employeer: Employeer) => console.log(`insertedCustomer = ${JSON.stringify(employeer)}`)),
      catchError(error => of(new Employeer()))
    );
  }
  constructor(private http: HttpClient) { }
}
