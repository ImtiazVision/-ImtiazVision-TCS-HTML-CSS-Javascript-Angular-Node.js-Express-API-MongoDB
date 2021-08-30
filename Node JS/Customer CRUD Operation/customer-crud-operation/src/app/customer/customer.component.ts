import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CustomerService} from '../customer.service';
import { Customer} from '../customer';
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

storeMsg?:string; // ? indicates that storeMsg can be empty or null.
deleteMsg?:string;
flag:boolean=false;
cid?:number;
age?:number;
customers:Array<Customer> = [];

  constructor(public custSer:CustomerService) { } // DI for customer service

  // it will call automatically after constructor: it call only once

  ngOnInit(): void {
    // ngOnInit will call automatically after constructor: it call only once and we have to refresh the webpage each time to see the updated data.
    console.log("called");
    this.getAllCustomers();
  }

  storeInfo() { 
    let customer = this.customerRef.value;
  //   console.log(customer);
  // storeCustomerInfo is a function, custSer and customer are references. subscribe will confirm whether record is stored/inserted or not. Lastly we are displaying the result in the console and then storing it in the variable storeMsg.
  this.custSer.storeCustomerInfo(customer).subscribe( result=>{
    // console.log(result);
    this.storeMsg = result.msg;
    this.getAllCustomers(); // We call this function again to refresh the webpage automatically and not have to refresh the webpage manually to see the updated data.
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
    this.custSer.deleteCustomerInfo(cid).subscribe(result=> {
      // console.log(result)
      this.deleteMsg = result.msg;
      this.getAllCustomers();
    } , error => console.error(error));
    }
// calling updateAge function
  updateAge (cid:any, age:any){ 
    this.updateMsg = ""; // we are clearing the updateMsg variable.
    this.flag = true; // when we click on update button, flag will be true.
    // console.log(cid + " "+ age);
    this.cid = cid; // updating the cid
    this.age = age; // updating the age
  }
  updateMsg?:string;
  nowUpdateAge(){ 
    // console.log(this.cid + " "+ this.age);
    this.custSer.updateCustomerAge(this.cid, this.age).subscribe(result=>{ 
      this.updateMsg = result.msg;
      this.flag = false; // when we click on update button, flag will be true.
      this.getAllCustomers();
    }, error => console.error(error));
  }
  
}

