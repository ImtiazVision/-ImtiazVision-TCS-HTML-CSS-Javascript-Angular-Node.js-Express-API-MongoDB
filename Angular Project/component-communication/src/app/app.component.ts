import { Component , ViewChild} from '@angular/core';
import { Child1Component } from './child1/child1.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pname:string = "";

  studentNames: Array<string> = ["imtiaz","raj","sahil","siddharth","sourav","srikanth","srinivas","sudhir"];

@ViewChild(Child1Component) //DI for child1 component
  child1?:Child1Component; // DI for child1 component
  cAge?:number;
  passValue(nameRef:any){
    this.pname = nameRef.value;
    this.studentNames.push(this.pname);
  }

  callChildComponentData() {
    if(this.child1!=undefined){
    this.child1?.childFun(); // calling child1 component
    this.cAge=this.child1?.childAge;
  }
  }
}
