import { Injectable } from '@angular/core'
import { Character } from '../interface/dbz.interface'

@Injectable()
export class DbzService{
  private _characters: Character[] = [
    {
      name:'Goku',
      power:14000,
    },
    {
      name:'Vegeta',
      power:13000,
    }
  ];

  get characters(): Character[]{
    return [... this._characters];
  }

  addCharacter(character:Character){
    this._characters.push(character);
  }

  constructor() {
    console.log('Servicio Inicializado')
  }
}
