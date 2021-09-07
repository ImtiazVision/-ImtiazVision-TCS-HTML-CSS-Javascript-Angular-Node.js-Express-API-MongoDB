import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userName?: string;
  constructor(public activateRoute:ActivatedRoute, public router:Router) { } // DI for activateRoute and Router

  ngOnInit(): void {
    this.activateRoute.params.subscribe(data=>this.userName = data.user); // this was we show respective user name on the dashboard and browser via variable 'userName'
  }

  logout(){
    this.router.navigate(['login']);
  }

}
