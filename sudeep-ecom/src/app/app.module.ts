import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignUpComponent } from './component/sign-up/sign-up.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterOutlet,
    RouterLink
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
