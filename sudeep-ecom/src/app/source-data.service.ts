import { Injectable } from '@angular/core';
import { elementAt } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SourceDataService {

  constructor() { }

  getUserdata(){
    
    const user = JSON.parse(localStorage.getItem('logUser') || '{}');

    const data = JSON.parse(localStorage.getItem(user.password) || '[]');

    return data;
  }

  setUserData(data: any){

    const user = JSON.parse(localStorage.getItem('logUser') || '{}');

    console.log(user,data);

    const userData = JSON.parse(localStorage.getItem(user.password) || '[]');

    
    let flag=false;
    userData.forEach((element:any)=>{
      if(element.title===data.title){
        flag=true
        element.count=(element.count?element.count:0)+1;
      }
    })
    
    
    
    if(flag===false){
      data.count=0
      userData.push(data);
    }

    console.log("user data",userData);

    localStorage.setItem(user.password,JSON.stringify(userData));
  }

  removeUserData(data: any){
    
    const user = JSON.parse(localStorage.getItem('logUser') || '{}');

    console.log(user,data);

    let userData = JSON.parse(localStorage.getItem(user.password) || '[]');

    
    let flag=false;
    userData.forEach((element:any)=>{
      if(element.title===data.title){
        if(element.count==0) return ;

        flag=true
        element.count=element.count-1;
      }
    })
    
    
    
    if(flag===false){
      
      userData = userData.filter((element: any)=>{
        if(element.count!==0) return element;
      })

    }

    console.log("user data",userData);

    localStorage.setItem(user.password,JSON.stringify(userData));

  }

}
