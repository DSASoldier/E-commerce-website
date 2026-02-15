import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './component/sign-up/sign-up.component';
import { LoginComponent } from './component/login/login.component';
import { ProductPageComponent } from './component/product-page/product-page.component';
import { logedInDeactiveGuard } from './loged-in-deactive.guard';
import { combineLatest } from 'rxjs';
import { ProductDetailPageComponent } from './component/product-detail-page/product-detail-page.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'sign-up',component:SignUpComponent},
  {path:'product-page',component:ProductPageComponent},
  {path:'productDetailPage',component:ProductDetailPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
