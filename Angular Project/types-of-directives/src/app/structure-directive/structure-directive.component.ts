import { Employee } from './../employee';
import { Component, OnInit } from '@angular/core';
// import { Employee } from '@angular/core';
@Component({
  selector: 'app-structure-directive',
  templateUrl: './structure-directive.component.html',
  styleUrls: ['./structure-directive.component.css']
})
export class StructureDirectiveComponent implements OnInit {
  f1:boolean = false;
  f2:boolean = true;
  b1:string="show";
  flag:boolean= false;
  stdNames:Array<string> = ["Imtiaz", "Rafiq","John", "Lipi"]

  employees:Array<Employee> = new Array();

  constructor() { 
    let emp1 = new Employee(100,"Raj", 12000);
    let emp2 = new Employee(100,"Raju", 15000);
    let emp3 = new Employee(100,"Ramesh", 18000);

    this.employees.push(emp1);
    this.employees.push(emp2);
    this.employees.push(emp3);
  }

  ngOnInit(): void {
  }

  changeValue(){
    this.f1 = true;
    this.f2 = false;
  }

  toggle() {
    if(this.flag){
      this.flag = false;
      this.b1 = "Show";
    }else {
      this.flag = true;
      this.b1 = "Hide";
    }
    
  }

  addName(nameRef:any) {
    let name = nameRef.value;
    this.stdNames.push(name); // adding dynamic names 
  }

}
