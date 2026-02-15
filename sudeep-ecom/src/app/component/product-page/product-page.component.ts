import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { canLogInUserGoBack } from 'src/app/canLonInUsergoBack';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})

export class ProductPageComponent implements canLogInUserGoBack {

  user = (localStorage.getItem('logUser') || '{}');

  totalCart=JSON.parse(localStorage.getItem(`${this.user+'count'}`) || '0');
  
  constructor(private route:Router){}

  poissible(){

    const check = (localStorage.getItem('logUser') || '{}');

    if(check==='{}'){
      return true;
    }
    else{
      return false;
    }
  }

  updateCardNumber(count:number){
    this.totalCart = count;
    const user = (localStorage.getItem('logUser') || '{}');


    localStorage.setItem(`${user+'count'}`,JSON.stringify(this.totalCart))
  }

  clickOnCart(){
    this.route.navigate(['/cart-page']);
  }
}
