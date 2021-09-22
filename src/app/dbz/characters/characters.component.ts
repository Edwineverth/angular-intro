import { Component, Input, OnInit } from '@angular/core'
import { Character } from '../interface/dbz.interface'

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent {
  @Input() characters: Character [] = [];
}
