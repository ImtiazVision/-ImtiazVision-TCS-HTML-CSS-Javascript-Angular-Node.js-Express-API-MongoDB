import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { LoginComponent } from './login/login.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';

// Inside this array, we can store routing rules for navigation

//http://localhost:4200/about-us
const routes: Routes = [
  {path: "aboutus", component:AboutUsComponent }, {path: "contactus", component:ContactUsComponent}, {path:"login", component:LoginComponent}, 
  {path:"home/:uname", component:DashboardComponent},
  {path: "home", component:DashboardComponent}, // uname is used to receive the value of a path


  {path:"",redirectTo:"login",pathMatch:"full"},
  {path:"**", component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
