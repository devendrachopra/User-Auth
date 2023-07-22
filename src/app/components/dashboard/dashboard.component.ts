import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/service/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
}) 
export class DashboardComponent implements OnInit {
 
  constructor(private sessionService : SessionService,private router: Router)
  {

  }
  
  logout()
  {
    let user = JSON.parse(this.sessionService.getSession('registerdUser'))
    user.is_logged_in = false;
    this.sessionService.setSession('registerdUser',JSON.stringify(user))
    this.router.navigate(['/'])
  }

  ngOnInit(): void {
    
  }
}
