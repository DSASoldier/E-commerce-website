import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './component/sign-up/sign-up.component';
import { LoginComponent } from './component/login/login.component';
import { ProductPageComponent } from './component/product-page/product-page.component';
import { logedInDeactiveGuard } from './loged-in-deactive.guard';
import { combineLatest } from 'rxjs';
import { ProductDetailPageComponent } from './component/product-detail-page/product-detail-page.component';
import { CartPageComponent } from './component/cart-page/cart-page.component';
import { UserHistoryComponent } from './user-history/user-history.component';
import { logInRestrictGuard } from './log-in-restrict.guard';
import { AdminLoginComponent } from './component/admin-login/admin-login.component';
import { AdminDashboardComponent } from './component/admin-dashboard/admin-dashboard.component';
import { AdminAddComponent } from './component/admin-add/admin-add.component';
import { AdminDeleteComponent } from './component/admin-delete/admin-delete.component';
import { AdminUpdateComponent } from './component/admin-update/admin-update.component';
import { AdminOrdersComponent } from './component/admin-orders/admin-orders.component';
import { AdminOrdersUpdateComponent } from './component/admin-orders-update/admin-orders-update.component';
import { adminGuard } from './admin.guard';

const routes: Routes = [
  {path:'',component:LoginComponent,canActivate:[logInRestrictGuard]},
  {path:'sign-up',component:SignUpComponent,canActivate:[logInRestrictGuard]},
  {path:'product-page',component:ProductPageComponent},
  {path:'productDetailPage',component:ProductDetailPageComponent},
  {path:'cart-page',component:CartPageComponent},
  {path:'user-history',component:UserHistoryComponent},
  {path:'admin-login',component:AdminLoginComponent},
  {path:'admin-dashboard',component:AdminDashboardComponent,children:[
    {path:'admin-add',component:AdminAddComponent},
    {path:'admin-delete',component:AdminDeleteComponent},
    {path:'admin-update',component:AdminUpdateComponent},
    {path:'admin-orders',component:AdminOrdersComponent},
    {path:'admin-orders-update',component:AdminOrdersUpdateComponent}
  ],canActivate:[adminGuard]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
