
import {Component} from '@angular/core'

@Component({
  selector: 'app-counter',

  template:`
    <h1>{{title}}</h1>
    <h3>La base es: <strong>{{base}}</strong></h3>

    <button (click)=" accum(base)"> +{{base}} </button>

    <span>{{number}}</span>

    <button (click)='accum( -base)'> -{{base}} </button>

  `
})
export class CounterComponent{
  title: string = '01-bases';
  number: number = 10;
  sum = () => this.number +=1;
  rest = () => this.number -=1;

  base: number = 5;


  accum (value: number){
    this.number += value;
  }
}
