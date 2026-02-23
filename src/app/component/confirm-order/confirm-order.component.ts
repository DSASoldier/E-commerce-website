import { state } from '@angular/animations';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { count } from 'rxjs';
import { noWhitespaceValidator } from 'src/app/no-white-space-validator';
@Component({
  selector: 'app-confirm-order',
  templateUrl: './confirm-order.component.html',
  styleUrls: ['./confirm-order.component.css']
})
export class ConfirmOrderComponent {

  userForm = new FormGroup({
    country:new FormControl('',[Validators.required,noWhitespaceValidator()]),
    state:new FormControl('',[Validators.required,noWhitespaceValidator()]),
    city:new FormControl('',[Validators.required,noWhitespaceValidator()]),
    pincode: new FormControl('',[Validators.required,noWhitespaceValidator()]),
    address1:new FormControl('',[Validators.required,noWhitespaceValidator()]),
    address2:new FormControl('',[Validators.required,noWhitespaceValidator()]),
  })

  constructor(private route: Router){}
  onSubmit(){

    if(this.userForm.invalid) return ;
    
    const user = JSON.parse(localStorage.getItem('logUser') || '{}');

    const userData = JSON.parse(localStorage.getItem(`${user.email}`) || '[]');

    const data = {
      country:this.userForm.value.country,
      state:this.userForm.value.state,
      city:this.userForm.value.city,
      address1:this.userForm.value.address1,
      address2:this.userForm.value.address2
    }

    const historyData = JSON.parse(localStorage.getItem('historyData') || '[]');
    const userHistorydata = JSON.parse(localStorage.getItem(`${user.email+'history'}`) || '[]');

    for(let i=0;i<userData.length;i++){
      userHistorydata.push({...userData[i],status:"confirm"});
      historyData.push({...userData[i],status:"confirm",email:user.email});
    }

    console.log(userHistorydata,historyData);

    localStorage.setItem(`${user.email + 'history'}`,JSON.stringify(userHistorydata));


    localStorage.setItem('historyData',JSON.stringify(historyData));

    localStorage.removeItem(`${user.email}`);

    this.route.navigate(['/product-page']);

  }
}
