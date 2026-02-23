import { Component } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { MyModalComponent } from '../my-modal/my-modal.component';

import {Inject} from '@angular/core';
import { MatDialogModule} from '@angular/material/dialog';
import {NgIf} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { DialogComponent } from '../dialog/dialog.component';
import { DialogOverviewExample } from './dialog';
import { SignUpComponent } from '../sign-up/sign-up.component';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-admin-update',
  templateUrl: './admin-update.component.html',
  styleUrls: ['./admin-update.component.css']
})

export class AdminUpdateComponent {

    dummyData = [{
    img:'../../../favicon.ico',
    title:'Titile1',
    money:20,
    desc:'Shirt',
  },
  {
    img:'../../../favicon.ico',
    title:'Titile2',
    money:20,
    desc:'Pants',
  },
  {
    img:'../../../favicon.ico',
    title:'Titile3',
    money:20,
    desc:'Utensils',
  },
  {
    img:'../../../favicon.ico',
    title:'Title4',
    money:20,
    desc:'Toys',
  },
  {
    img:'../../../favicon.ico',
    title:'Title5',
    money:20,
    desc:'Shirt',
  },
  {
    img:'../../../favicon.ico',
    title:'Title6',
    money:60,
    desc:'Pants',
  },
{
    img:'../../../favicon.ico',
    title:'Titile7',
    money:50,
    desc:'Utensils',
  },
{
    img:'../../../favicon.ico',
    title:'title8',
    money:40,
    desc:'Toys',
  },

] 

  constructor(public dialog: MatDialog) {}

  products = JSON.parse(localStorage.getItem("admin") || JSON.stringify(this.dummyData));

  openDialog(index: number): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: index,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     
      const index = result.index;

      const data = {
        img:'../../../favicon.ico',
        title:result.title,
        money:result.money,
        desc:result.desc,
      }

      this.products[index]= data;
      
    });
  }

   
}
