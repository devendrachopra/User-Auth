import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-my-dashboard',
  templateUrl: './my-dashboard.component.html',
  styleUrls: ['./my-dashboard.component.scss']
})
export class MyDashboardComponent implements OnInit {
  products : any = []
  searchText!: string;
  constructor(private httpClient : HttpClient,private router : Router) { }

  ngOnInit(): void {
    this.httpClient.get('https://fakestoreapi.com/products').subscribe((respnse=>{
      this.products = respnse
    }),err=>{
      this.products = []
    });
  }

  getProductDetails(id : any)
  {
    this.router.navigate(['dashboard/product-detail/'+id])
  }

}
