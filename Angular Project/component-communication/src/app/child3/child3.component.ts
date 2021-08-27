import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { Emp } from '../Emp.model';

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.css']
})
export class Child3Component implements OnInit {
  emps:Array<Emp> = [];

  constructor(public ser:SharedService) { } // Dependency Injection (DI) for Service

  ngOnInit(): void {
  }
  storeData(idRef:any,nameRef:any){
    let emp1:Emp={id:idRef.value,name:nameRef.value};
  
    this.emps.push(emp1);
    this.ser.setEmpArray(this.emps);
}
}
