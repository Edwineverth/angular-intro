import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent  {
  heroes: string [] = ['Spiderman', 'Ironman', 'Thor', 'Captain America'];
  heroDelete: string = '';

  DeleteHero():void{
    const heroDelete:string = this.heroes.shift() || '';
    this.heroDelete = heroDelete ;
  }


}
