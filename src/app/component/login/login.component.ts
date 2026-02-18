import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { canLogInUserGoBack } from 'src/app/canLonInUsergoBack';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  hide = true;
  
  userForm = new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.minLength(5)])
  })

  constructor(private route: Router) {}

  inValidCredential = false;

  

  isSignUp(){

    const data = JSON.parse(localStorage.getItem('signUpUsers') || '[]');

    let flag = false;

    data.forEach((user: any)=>{
      if(user.email?.trim()===this.userForm.value.email?.trim() && user.password?.trim()===this.userForm.value.password?.trim()){
          flag = true;
      }
    })

    return flag;
  }

  onSubmit(){

    this.inValidCredential = false;

    if(this.isSignUp()){
        // naviggation to dash board

        let user = {
          email:this.userForm.value.email,
          password:this.userForm.value.password
        }

        localStorage.setItem('logUser',JSON.stringify(user));
        if(user.email?.trim()==='sudeep@gmail.com'){
          this.route.navigate(['/admin-dashboard'])
        }else{
          this.route.navigate(['/product-page'])
        }
    }
    else{
      this.inValidCredential = true
    }
  }
}


