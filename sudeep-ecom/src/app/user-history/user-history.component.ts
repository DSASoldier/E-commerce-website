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
      dataInfo.queryParams.subscribe((data:any)=>{
        this.userData = data;
        console.log("history",this.userData);
      })
    }
}
