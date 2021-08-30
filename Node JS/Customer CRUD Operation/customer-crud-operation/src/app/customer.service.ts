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
    return this.http.post<any>("http://localhost:9090/storeCustomerInfo",customer); // 2nd parameter is the customer object
  }

// refer to fake service from previous lectures
// This will call the get method which can convert all json data into customer array object
  retrieveAllCustomerInfo():Observable<Customer[]>{ 
    return this.http.get<Customer[]>("http://localhost:9090/getAllCustomerDetails"); // return type is Customer[]
  }

  deleteCustomerInfo(cid:any):Observable<any>{ 
    return this.http.delete<any>("http://localhost:9090/deleteCustomerInfo/"+cid); // return type is Customer[]
  }
  updateCustomerAge(cid:any,age:any):Observable<any>{ 
    return this.http.put<any>("http://localhost:9090/updateCustomerAge/", {cid:cid,age:age}); 
  }
}
