import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignUpComponent } from './component/sign-up/sign-up.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ProductPageComponent } from './component/product-page/product-page.component';
import { CardComponent } from './component/card/card.component';
import { CartPageComponent } from './component/cart-page/cart-page.component';
import { UserHistoryComponent } from './user-history/user-history.component';
import { AdminLoginComponent } from './component/admin-login/admin-login.component';
import { AdminDashboardComponent } from './component/admin-dashboard/admin-dashboard.component';
import { AdminAddComponent } from './component/admin-add/admin-add.component';
import { AdminUpdateComponent } from './component/admin-update/admin-update.component';
import { AdminDeleteComponent } from './component/admin-delete/admin-delete.component';
import { AdminOrdersUpdateComponent } from './component/admin-orders-update/admin-orders-update.component';
import { AdminOrdersComponent } from './component/admin-orders/admin-orders.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageCannotAccessComponent } from './component/page-cannot-access/page-cannot-access.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    ProductPageComponent,
    CardComponent,
    CartPageComponent,
    UserHistoryComponent,
    AdminLoginComponent,
    AdminDashboardComponent,
    AdminAddComponent,
    AdminUpdateComponent,
    AdminDeleteComponent,
    AdminOrdersUpdateComponent,
    AdminOrdersComponent,
    PageCannotAccessComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterOutlet,
    RouterLink,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
