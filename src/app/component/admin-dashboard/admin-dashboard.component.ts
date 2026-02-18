import { Component, OnDestroy } from '@angular/core';
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
})
export class AdminDashboardComponent {


  handleLogout(){
    localStorage.removeItem("logUser");
  }


}
