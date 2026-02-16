import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-add',
  templateUrl: './admin-add.component.html',
  styleUrls: ['./admin-add.component.css']
})

export class AdminAddComponent {

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

  title=""
  desc=""
  price=""

  addTheProduct(){
    const data = JSON.parse(localStorage.getItem("admin") || JSON.stringify(this.dummyData));

    if(this.title == "" || this.desc==="" || this.price === ""){

      alert("Please Enter all the field");
      return ;
    }
    data.push({
      img:'../../../favicon.ico',
      title:this.title,
      money:this.price,
      desc:this.desc
    })

    console.log(data);
    
    localStorage.setItem("admin",JSON.stringify(data));
  }

}
