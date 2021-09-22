import { Component } from '@angular/core'

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html'
})
export class HeroComponent {
  name: string = 'Ironman';
  old: number = 45;

  get nameCapitalized (){
    return this.name.toLocaleUpperCase();
  }

  getName():string {
    return `${this.name} - ${this.old}`;
  }

  changeName():void{
    this.name = 'Spiderman';
  }

  changeOld():void{
    this.old = 400;
  }
}
