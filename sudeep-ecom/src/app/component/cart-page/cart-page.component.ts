import { Component } from '@angular/core';
import { SourceDataService } from 'src/app/source-data.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent {

  userData:any = []

  constructor(private dataSource:SourceDataService){


    console.log("fjrhbskjgnjknkj",dataSource.getUserdata());

    this.userData=dataSource.getUserdata()

  }

  addToCard(index: number){
    this.dataSource.setUserData(this.userData[index])
  }

  removeFromCard(index: number){
    this.dataSource.removeUserData(this.userData[index]);
  }

  payOrder(index: number){

    this.dataSource.orderHistory(this.userData[index]);
  }
}
