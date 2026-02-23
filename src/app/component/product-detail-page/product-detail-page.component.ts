import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { SourceDataService } from 'src/app/source-data.service';

@Component({
  selector: 'app-product-detail-page',
  templateUrl: './product-detail-page.component.html',
  styleUrls: ['./product-detail-page.component.css']
})
export class ProductDetailPageComponent {
  productDetail : any = {
    src:'',
    title:'',
    desc:'',
    money:''
  };

  constructor(private route : ActivatedRoute,private dataSource:SourceDataService) {
    
    route.queryParams.subscribe((data)=>{

      this.productDetail = data;

      console.log(this.productDetail)

    })
  }

  updateCartItem(){
    let user = (localStorage.getItem('logUser') || '{}');

    let cart =JSON.parse(localStorage.getItem(`${user+'count'}`) || '0');

    console.log(cart);
    
    this.dataSource.setUserData(this.productDetail);
    
    localStorage.setItem(`${user+'count'}`,cart+1);
  }

}
