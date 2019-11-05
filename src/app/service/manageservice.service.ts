import { Injectable } from '@angular/core';
import { Service } from "../module/service";
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
export class ManageserviceService {
  
  private ManageserviceURL='http://localhost:3000/manageservice';
  constructor(private http: HttpClient) { }
  getManageservice():Observable<Service[]>{
    return this.http.get<Service[]>(this.ManageserviceURL).pipe(
      tap(receivedManage => console.log(`receivedManageservice = ${JSON.stringify(receivedManage)}`)),
        catchError(error => of([]))
      );
  }
getManageFromId(id:number):Observable<Service>{
  const url=`${this.ManageserviceURL}/${id}`;
  return this.http.get<Service>(url).pipe(
    tap(selectedManage=>console.log(`selected manage=${JSON.stringify(selectedManage)}`)),
  catchError(error=>of(new Service()))
    );
}
updateManage(manage: Service): Observable<any> {
   
  return this.http.put(`${this.ManageserviceURL}/${manage.id}`, manage, httpOptions).pipe(
    tap(updatedEmployeer => console.log(`updated employeer = ${JSON.stringify(updatedEmployeer)}`)),
    catchError(error => of(new Service()))
  );
}
// deleteService(serviceId: number): Observable<Service> {    
//   const url = `${this.ManageserviceURL}/${serviceId}`;
//   return this.http.delete<Service>(url,httpOptions).pipe(
//     tap(_ => console.log(`Deleted movie with id = ${serviceId}`)),
//     catchError(error => of(null))
//   );
// }
deleteservice(data){
  return this.http.delete(`${this.ManageserviceURL}/${data}`)
}
addService(newService: Service): Observable<Service> {        
  return this.http.post<Service>(this.ManageserviceURL, newService, httpOptions).pipe(
    tap((service: Service) => console.log(`insertedCustomer = ${JSON.stringify(service)}`)),
    catchError(error => of(new Service()))
  );
}
 
}
