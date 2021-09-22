import { Component, OnInit } from '@angular/core';
import { Character } from '../interface/dbz.interface'



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  characters: Character[] = [
    {
      name:'Goku',
      power:14000,
    },
    {
      name:'Vegeta',
      power:13000,
    }
  ];

  character:Character={
    name:'',
    power: 0
  }

  addCharacter(argument:Character){
    console.log('parar')
    this.characters.push(argument);
  }
}
