import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { elementAt } from 'rxjs';
import { canLogInUserGoBack } from 'src/app/canLonInUsergoBack';
import { SourceDataService } from 'src/app/source-data.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})

export class ProductPageComponent implements canLogInUserGoBack {

  user = (localStorage.getItem('logUser') || '{}');

  search: HTMLInputElement | null = null;
  category: HTMLSelectElement | null = null;
  priceFilter: HTMLSelectElement | null = null;
  value=""
  cat: string[] = ['Shirt','Pants','Utensils','Toys'];

  data = JSON.parse(localStorage.getItem('admin') || '[]');

  // totalCart=JSON.parse(localStorage.getItem(`${this.user+'count'}`) || '0');
  totalCart=0;
  


  constructor(private route: Router,private dataSource: SourceDataService){

    this.totalCart = 0;
    const userData = this.dataSource.getUserdata();

    let sum=userData.length;
    
    this.totalCart = sum;

    console.log("--->",this.data);

    this.data.forEach((element: any)=>{

      if(this.cat.includes(element.category)) return ;
      
      if(element && element.category) this.cat.push(element.category)
    })

  }

  clickClear(){
    this.search = null;
    this.category = null;
    this.priceFilter = null;
  }

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
    // this.totalCart = count;

    this.totalCart = 0;
    const userData = this.dataSource.getUserdata();

    let sum=userData.length;
    
    
    this.totalCart = sum;

    const user = (localStorage.getItem('logUser') || '{}');


    localStorage.setItem(`${user+'count'}`,JSON.stringify(this.totalCart))
  }

  clickOnCart(){
    this.route.navigate(['/cart-page']);
  }

  goToHistoryPage(){
    const user = JSON.parse(localStorage.getItem('logUser') || '{}');

    const historyData = JSON.parse(localStorage.getItem(`${user.email + 'history'}`) || '[]');

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
