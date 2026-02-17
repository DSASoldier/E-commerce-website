import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-orders-update',
  templateUrl: './admin-orders-update.component.html',
  styleUrls: ['./admin-orders-update.component.css']
})
export class AdminOrdersUpdateComponent {

  products = [{email:'',title:'',money:'',desc:'',count:''}];

  constructor(){
    const data = JSON.parse(localStorage.getItem("historyData") || "[]");

    this.products = data;
    console.log(this.products);
  }

  statusUpdate(value: string,index: number){

    const historyData = JSON.parse(localStorage.getItem("historyData") || "[]");

    if(value==="cancel"){

      historyData.splice(index,1);
      
      this.products = historyData
      localStorage.setItem("historyData",JSON.stringify(historyData));
    }
  }

}
