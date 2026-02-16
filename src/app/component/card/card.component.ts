import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { elementAt } from 'rxjs';
import { SourceDataService } from 'src/app/source-data.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnChanges {
  
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

  @Input() cardTotal!: number; 
  @Output() emitCardTotal = new EventEmitter<number>
  @Input() search!: any;
  @Input() category!: any;
  @Input() priceFilter!: any;


  user = JSON.parse(localStorage.getItem('user') || '{}');

  userData = JSON.parse(localStorage.getItem("admin") || JSON.stringify(this.dummyData));

  constructor(private sourceData:SourceDataService,private route: Router) {
    console.log("frejngerkjng",this.userData);
    this.dummyData = this.userData;
  }
 
  ngOnChanges(): void {

  
    console.log(this.search);
    this.userData = this.dummyData.filter((element: any)=>{
      if(this.search===null) return true;

      return element.title.toLowerCase().includes(this.search.toLowerCase()) || element.desc.toLowerCase().includes(this.search.toLowerCase());
    }).filter((element)=>{

      if(this.priceFilter===null) return true;

      let num1 = Number(this.priceFilter.slice(0,2));

      let num2 = Number(this.priceFilter.slice(-2));

      return element.money>=num1 && element.money<=num2;
    }).filter((element)=>{
      if(this.category===null) return true;

      return element.desc.toLowerCase() === this.category.toLowerCase();
    })

    
  }

  addToCard(index:number){
    this.cardTotal++;

    this.sourceData.setUserData(this.dummyData[index]);

    this.emitCardTotal.emit(this.cardTotal);
  }

  goToDetailPage(index:number){
    console.log(index)
    this.route.navigate(['/productDetailPage'],{
      queryParams:this.userData[index]
    })
  }
}
