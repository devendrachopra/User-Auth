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
    this.sessionService.deleteSession('registerdUser')
    this.router.navigate(['/'])
  }

  ngOnInit(): void {
    
  }
}
