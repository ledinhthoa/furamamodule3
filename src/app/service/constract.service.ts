import { Injectable } from '@angular/core';
import { Constract } from "../module/constract";



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
export class ConstractService {
private ConstractURL='http://localhost:3000/Constract';
getConstract():Observable<Constract[]>{
  return this.http.get<Constract[]>(this.ConstractURL).pipe(
    tap(receivedConstract => console.log(`receivedConstract = ${JSON.stringify(receivedConstract)}`)),
    catchError(error => of([]))
  );
}
deleteconstract(constracId: number): Observable<Constract> {    
  const url = `${this.ConstractURL}/${constracId}`;
  return this.http.delete<Constract>(url,httpOptions).pipe(
    tap(_ => console.log(`Deleted movie with id = ${constracId}`)),
    catchError(error => of(null))
  );
}
addConstract(newConstract: Constract ): Observable<Constract> {        
  return this.http.post<Constract>(this.ConstractURL, newConstract, httpOptions).pipe(
    tap((constract: Constract) => console.log(`insertedCustomer = ${JSON.stringify(constract)}`)),
    catchError(error => of(new Constract()))
  );
}
  constructor(private http: HttpClient,) { }
}
