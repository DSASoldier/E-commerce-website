import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { SourceDataService } from 'src/app/source-data.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent {

  userData:any = []

  totalPayment: number = 0;


  calculateTotalPayment(array:any){

    let sum = 0;

    array.forEach((element: any)=>{
      sum+=Number(element.money*element.count);
    });

    return sum
  }
  constructor(private dataSource:SourceDataService){


    console.log("fjrhbskjgnjknkj",dataSource.getUserdata());

    this.userData=dataSource.getUserdata()
    this.totalPayment = this.calculateTotalPayment(this.userData)
  }

  addToCard(index: number){
    this.dataSource.setUserData(this.userData[index])
    this.userData=this.dataSource.getUserdata()
    this.totalPayment = this.calculateTotalPayment(this.userData)
  }

  removeFromCard(index: number){
    this.dataSource.removeUserData(this.userData[index]);
    this.userData=this.dataSource.getUserdata()
    this.totalPayment = this.calculateTotalPayment(this.userData)
  }

  payOrder(){

    this.dataSource.orderHistory(this.totalPayment);
  }
}
