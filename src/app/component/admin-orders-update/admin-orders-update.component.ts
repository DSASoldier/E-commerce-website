import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-admin-orders-update',
  templateUrl: './admin-orders-update.component.html',
  styleUrls: ['./admin-orders-update.component.css']
})
export class AdminOrdersUpdateComponent {

  products = [{title:'',money:'',desc:'',count:'',status:''}];

  constructor(){
    const data = JSON.parse(localStorage.getItem("historyData") || "[]");

    this.products = data;
    console.log(this.products);
  }

  statusUpdate(value: string,index: number){

    let historyData = JSON.parse(localStorage.getItem("historyData") || "[]");

    let signUpUsers = JSON.parse(localStorage.getItem('signUpUsers') || '[]');

    for(let i=0;i<signUpUsers.length;i++){
      const user = signUpUsers[i];

      console.log('users',user);

      let userHistoryData = JSON.parse(localStorage.getItem(`${user.email + 'history'}`) || '[]');

      
      userHistoryData = userHistoryData.map((element: any)=>{
        
        console.log(element.title.toLowerCase().trim()===this.products[index].title.toLowerCase().trim() 
        && 
        element.desc.toLowerCase().trim()===this.products[index].desc.toLowerCase().trim())
        if(
          element.title.toLowerCase().trim()===this.products[index].title.toLowerCase().trim() 
          && 
          element.desc.toLowerCase().trim()===this.products[index].desc.toLowerCase().trim())
          {
            return {...element,status:value}
          }
          else{
            return element;
          }
        })
        
        console.log(userHistoryData,historyData);
      localStorage.setItem(`${user.email + 'history'}`,JSON.stringify(userHistoryData));
    }

    

    historyData = historyData.map((element: any)=>{
      if(element.title.toLowerCase().trim()===this.products[index].title.toLowerCase().trim() && element.desc.toLowerCase().trim()===this.products[index].desc.toLowerCase().trim()){
        return {...element,status:value}
      }
      else{
        return element;
      }
    })


    // if(value==="cancel"){

    //   historyData.splice(index,1);
      
    //   this.products = historyData
    //   localStorage.setItem("historyData",JSON.stringify(historyData));
    // }
    // else{



    //   localStorage.setItem("historyData",JSON.stringify(historyData));
    // }


    localStorage.setItem('historyData',JSON.stringify(historyData));

    

  }

}
