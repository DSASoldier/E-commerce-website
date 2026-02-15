import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { SourceDataService } from 'src/app/source-data.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  
  dummyData = [{
    img:'../../../favicon.ico',
    title:'Totile',
    money:20,
    desc:'Lorem ipsum dolor sit amet.',
  },
  {
    img:'../../../favicon.ico',
    title:'Totile',
    money:20,
    desc:'Lorem ipsum dolor sit amet.',
  },
  {
    img:'../../../favicon.ico',
    title:'Totile',
    money:20,
    desc:'Lorem ipsum dolor sit amet.',
  },
  {
    img:'../../../favicon.ico',
    title:'Totile',
    money:20,
    desc:'Lorem ipsum dolor sit amet.',
  },
  {
    img:'../../../favicon.ico',
    title:'Totile',
    money:20,
    desc:'Lorem ipsum dolor sit amet.',
  },
  {
    img:'../../../favicon.ico',
    title:'Totile',
    money:20,
    desc:'Lorem ipsum dolor sit amet.',
  },
{
    img:'../../../favicon.ico',
    title:'Totile',
    money:20,
    desc:'Lorem ipsum dolor sit amet.',
  },


] 

  @Input() cardTotal!: number; 
  @Output() emitCardTotal = new EventEmitter<number>

  user = JSON.parse(localStorage.getItem('user') || '{}');

  userData = JSON.parse(localStorage.getItem(`${this.user.email}`) || JSON.stringify(this.dummyData));

  constructor(private sourceData:SourceDataService,private route: Router) {
    console.log(this.userData);
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
