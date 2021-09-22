import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { Character } from '../interface/dbz.interface'

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent  {

  @Input() character:Character={
    name:'',
    power: 0
  }

  @Output() newCharacter: EventEmitter<Character> = new EventEmitter<Character>()
  addPerson(){

    if(this.character.name.trim().length===0){
      return;
    }
    console.log(this.character)

    this.newCharacter.emit(this.character);
    this.character = {
      name:'',
      power: 0
    }

  }

  changeName(event:any){
    console.log(event.target.value)

  }

}
