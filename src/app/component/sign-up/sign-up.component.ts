import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { noWhitespaceValidator } from 'src/app/no-white-space-validator';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent implements OnInit {

  isPasswordMaching: boolean=false;
  isEmailUnique = true;
  isPasswordUnique = true;
  value = ''
  hide = true;
  hide2 = true;
  spiner = false;

  constructor(private route : Router){}

  userForm = new FormGroup({
    name:new FormControl('',[Validators.required,Validators.minLength(3),noWhitespaceValidator()]),
    email: new FormControl('',[Validators.required,Validators.email,noWhitespaceValidator()]),
    password: new FormControl('',[Validators.required,Validators.minLength(5),noWhitespaceValidator()]),
    confirmPassword: new FormControl('',[Validators.required,Validators.minLength(5),noWhitespaceValidator()]),
  })

  ngOnInit(): void {

    this.userForm.valueChanges.subscribe((data:any)=>{
      
      this.isEmailUnique=true;
      this.isPasswordUnique=true;

      let users = JSON.parse(localStorage.getItem('signUpUsers') || '[]');

      users.forEach((user: any)=>{
        if(user.email.trim() === data.email?.trim()) this.isEmailUnique=false;
      })
    })
  }

  handlingLocalStorage(){

    const data = JSON.parse(localStorage.getItem('signUpUsers') || '[]')
    
    data.push({
      name:this.userForm.value.name,
      email:this.userForm.value.email,
      password:this.userForm.value.password
    });

    console.log(data);

    localStorage.setItem('signUpUsers',JSON.stringify(data));
  }

  onSubmit(){
    this.isPasswordMaching=false;

    if(this.userForm.value.password !== this.userForm.value.confirmPassword){

      console.log(this.userForm.value.password,this.userForm.value.confirmPassword);
      
      this.isPasswordMaching = true;
      return ;
    }

    if(this.userForm.invalid || !this.isEmailUnique || !this.isPasswordUnique) return ;

    this.handlingLocalStorage();

    this.spiner = true;

    setTimeout(()=>{

      this.route.navigate(['/']);
      this.spiner = false
    },3000)
  }
}
