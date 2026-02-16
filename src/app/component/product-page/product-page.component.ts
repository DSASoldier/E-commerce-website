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

  search:HTMLInputElement | null = null;
  category:HTMLSelectElement | null = null;
  priceFilter:HTMLSelectElement | null = null;


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

  onChangeValue(){
    console.log(this.search)
    console.log(this.category)
    console.log(this.priceFilter)
  }

  updateCardNumber(count:number){
    this.totalCart = count;
    const user = (localStorage.getItem('logUser') || '{}');


    localStorage.setItem(`${user+'count'}`,JSON.stringify(this.totalCart))
  }

  clickOnCart(){
    this.route.navigate(['/cart-page']);
  }

  goToHistoryPage(){
    const user = JSON.parse(localStorage.getItem('logUser') || '{}');

    const historyData = JSON.parse(localStorage.getItem(`${user.password + 'history'}`) || '[]');

    console.log("go to history page",historyData);
    
    this.route.navigate(['/user-history'],{
      queryParams:{data:JSON.stringify(historyData)}
    });
  }

  logoutUser(){
    localStorage.removeItem('logUser');
    this.route.navigate(['/'])
  }
}
