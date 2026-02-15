import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SourceDataService {

  constructor() { }

  getUserdata(){
    
    const user = JSON.parse(localStorage.getItem('logUser') || '{}');

    const data = JSON.parse(localStorage.getItem(`${user.email}`) || '[]');


    return data;
  }

  setUserData(data: any){

    const user = JSON.parse(localStorage.getItem('logUser') || '{}');

    const userData = JSON.parse(localStorage.getItem(`${user.email}`) || '[]');

    userData.push(data);

    console.log(userData);

    localStorage.setItem(`${JSON.stringify(user)}`,userData);
  }

  

}
