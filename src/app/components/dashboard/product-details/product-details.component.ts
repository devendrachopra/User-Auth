import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  productDetails : any
  productId : any = 0
  constructor(private httpClient : HttpClient,private route : ActivatedRoute) {
    this.route.url.subscribe(() => {
      this.productId =  this.route.snapshot.params.id ? Number(this.route.snapshot.params.id) : 0
    })
   }

  ngOnInit(): void {
    this.httpClient.get('https://fakestoreapi.com/products/'+this.productId).subscribe((response: any)=>{
    this.productDetails = response;
    },err=>{
      this.productDetails = ''
    })
  }

}
