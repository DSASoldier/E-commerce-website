import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-history',
  templateUrl: './user-history.component.html',
  styleUrls: ['./user-history.component.css']
})

export class UserHistoryComponent {

    userData:any = []
    constructor(private dataInfo: ActivatedRoute){
      // dataInfo.queryParams.subscribe((data:any)=>{
      //   this.userData = JSON.parse(data.data);
      //   console.log("history",this.userData);
      // })
      const user = JSON.parse(localStorage.getItem('logUser') || '{}');

      const orderHistory = JSON.parse(localStorage.getItem(`${user.email+'history'}`) || '[]');

      this.userData  = orderHistory;
    }

    cancelOrder(index: number){
      
        const user = JSON.parse(localStorage.getItem('logUser') || '{}');

        const userHistory = JSON.parse(localStorage.getItem(`${user.email+'history'}`) || '[]');
        
        const history = JSON.parse(localStorage.getItem(`historyData`) || '[]');
        
        console.log(user,userHistory,history);

        const newUserData = userHistory.filter((element:any)=>{
          if(
            element.title.toLowerCase().trim()===this.userData[index].title.toLowerCase().trim()
            && 
            element.desc.toLowerCase().trim()===this.userData[index].desc.toLowerCase().trim()

          ){
            return false;
          }

          return true;
        })

        const newData = history.filter((element:any)=>{
          if(
            element.title.toLowerCase().trim()===this.userData[index].title.toLowerCase().trim()
            && 
            element.desc.toLowerCase().trim()===this.userData[index].desc.toLowerCase().trim()

          ){
            return false;
          }

          return true;
        })

        console.log(user,newUserData,newData);

        this.userData.splice(index,1);

        localStorage.setItem(`${user.email+'history'}`,JSON.stringify(newUserData));
        localStorage.setItem(`historyData`,JSON.stringify(newData));
        
    }
}
