import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css']
})
export class AdminOrdersComponent {

  products = [{country:'',state:'',city:'',address1:''}];

  constructor(){
    const data = JSON.parse(localStorage.getItem("historyData") || "[]");


    this.products = data;
    console.log(this.products);
  }
}
