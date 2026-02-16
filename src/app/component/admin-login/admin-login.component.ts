import { Component } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {

  userForm = new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.minLength(5)])
  })

  constructor(private route:Router) {}

  inValidCredential: boolean = false;

  onSubmit(){
    this.inValidCredential= false;

    if(this.userForm.value.email === 'sudeep@gmail.com' && this.userForm.value.password === '12345'){
      this.route.navigate(['/admin-dashboard']);
    }
    else{
      this.inValidCredential = true;
    }
    localStorage.setItem("admin-log","true");
  }

}
