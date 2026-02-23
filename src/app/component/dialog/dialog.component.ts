import { Component, Inject } from '@angular/core';
import { DialogData, DialogOverviewExample } from '../admin-update/dialog';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {

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

  constructor(public dialogRef: MatDialogRef<DialogComponent>,
  @Inject(MAT_DIALOG_DATA) public data: DialogData){}

  title=""
  desc=""
  price=""

  addClick = false;
  feildEmpty = false;

  addTheProduct(){

    console.log(this.title,this.desc,this.price)
    const data = JSON.parse(localStorage.getItem("admin") || JSON.stringify(this.dummyData));

    if(!this.title || !this.desc || !this.price ){
      this.feildEmpty = true;

      setTimeout(()=>{
        this.feildEmpty = false;
      },2000)
      return ;
    }
    
    data[Number(this.data)] = {
      img:'../../../favicon.ico',
      title:this.title,
      money:Number(this.price),
      desc:this.desc,
    }

    const result = {
      index:this.data,
      img:'../../../favicon.ico',
      title:this.title,
      money:Number(this.price),
      desc:this.desc,
    }

    console.log(this.data);
    
    this.dialogRef.close(result);

    this.addClick = true;

    setTimeout(() => {
      this.addClick = false;
    }, 5000);
    console.log(data);
    this.title=''
    this.price=''
    this.desc=''
    localStorage.setItem("admin",JSON.stringify(data));
  }
}
