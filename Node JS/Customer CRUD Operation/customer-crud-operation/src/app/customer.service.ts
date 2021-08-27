import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from './customer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(public http:HttpClient) { } // DI for HttpClient

  // post method take 2 parameters
  // 1st is url and 2nd is data in json object
  storeCustomerInfo(customer: Customer):Observable<any>{ 
    return this.http.post("http://localhost:9090/storeCustomerInfo",customer); // 2nd parameter is the customer object
  }

  retrieveAllCustomerInfo():Observable<Customer[]>{ 
    return this.http.get<Customer[]>("http://localhost:9090/retrieveAllCustomerInfo"); // return type is Customer[]
  }
}
