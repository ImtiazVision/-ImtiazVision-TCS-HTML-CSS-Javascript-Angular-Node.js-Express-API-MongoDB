import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userForm: FormGroup;
  listData: any;

  constructor(public fb: FormBuilder) { 
    this.listData = [];
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      phoneNumber: ['', Validators.required]
  })


  addItem(): void {
    this.listData.push(this.userForm.value);
    this.userForm.reset();
  }

  reset() {
    this.userForm.reset();
  }

    removeItem(element: any) {
    this.listData.forEach((value: any, index: any) => {
      if (value == element)
        this.listData.splice(index, 1);
    });
  }

  ngOnInit(): void {
  }

}


// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { EmployeeService } from '../employee.service';

// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   // styleUrls: ['./home.component.css']
// })
// export class HomeComponent implements OnInit {
//   //[x: string]:this.data.username;

//   userForm: FormGroup;
//   listData: any;

//   constructor(public fb: FormBuilder) {
//     this.listData = [];
//     this.userForm = this.fb.group({
//       name: ['', Validators.required],
//       phoneNumber: ['', Validators.required]
//     })
//   }

//   public addItem(): void {
//     this.listData.push(this.userForm.value);
//     this.userForm.reset();
//   }

//   reset() {
//     this.userForm.reset();
//   }

//   removeItem(element: any) {
//     this.listData.forEach((value: any, index: any) => {
//       if (value == element)
//         this.listData.splice(index, 1);
//     });
//   }

//   ngOnInit() {
//   }


// }