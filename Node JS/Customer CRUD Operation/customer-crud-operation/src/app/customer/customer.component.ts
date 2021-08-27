import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CustomerService} from '../customer.service';
import { Customer} from '../customer';
import { observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customerRef = new FormGroup({ 
    cid:new FormControl(),
    cname: new FormControl(),
    age: new FormControl()
  });

storeMsg?:string;
customers:Array<Customer> = [];

  constructor(public custSer:CustomerService) { } // DI for customer service

  // it will call automatically after constructor: it call only once

  ngOnInit(): void {
    console.log("called");
    this.getAllCustomers();
  }

  storeInfo() { 
    let customer = this.customerRef.value;
  //   console.log(customer);
  this.custSer.storeCustomerInfo(customer).subscribe( result=>{
    console.log(result);
    this.storeMsg = result.msg;
    this.getAllCustomers();
  }, error=>console.error(error));

  this.customerRef.reset();
  }

  getAllCustomers(){
    this.custSer.retrieveAllCustomerInfo().subscribe(result=>{
      this.customers=result;
    }, error=>console.error(error));
  }

  deleteRec(cid:any){ 
    // console.log(cid);
    deleteCustomerInfo(cid: any): observable < any > {
      return this.http.delete<any>("http://localhost:9090/deleteCustomerInfo/" + cid);
    }
  
  
}
