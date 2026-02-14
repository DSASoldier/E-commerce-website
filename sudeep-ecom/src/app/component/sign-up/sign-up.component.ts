import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  isPasswordMaching: boolean=false;
  isEmailUnique = true;
  isPasswordUnique = true;

  constructor(private route : Router){}
  userForm=new FormGroup({
    name:new FormControl('',[Validators.required,Validators.minLength(3)]),
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required,Validators.minLength(5)]),
    confirmPassword: new FormControl('',[Validators.required,Validators.minLength(5)]),
  })

  ngOnInit(): void {

    
    this.userForm.valueChanges.subscribe((data)=>{
      
      this.isEmailUnique=true;
      this.isPasswordUnique=true;

      let users = JSON.parse(localStorage.getItem('signUpUsers') || '[]');

      users.forEach((user: any)=>{
        if(user.email.trim()===data.email?.trim()) this.isEmailUnique=false;
        if(user.password.trim()===data.password?.trim()) this.isPasswordUnique=false;
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
      this.isPasswordMaching = true;
      return ;
    }

    if(this.userForm.invalid || !this.isEmailUnique || !this.isPasswordUnique) return ;

    this.handlingLocalStorage();

    this.route.navigate(['/']);
  }
}
