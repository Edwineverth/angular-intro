import { Component, OnInit } from '@angular/core';
import { Character } from '../interface/dbz.interface'
import { DbzService } from '../services/dbz.service'



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  character:Character={
    name:'',
    power: 0
  }

  get characters(){
    return this.dbzService.characters;
  }

  constructor(private dbzService: DbzService) { }

}
