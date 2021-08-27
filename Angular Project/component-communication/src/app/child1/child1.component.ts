import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {
  @Input()  // this variable is ready to 
  parentName:string=""
  childAge:number = 21;

  constructor() { }

  ngOnInit(): void {
  }

  childFun(): void {
    console.log("This is childfun function");
  }
}
