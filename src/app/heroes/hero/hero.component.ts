import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name:string = 'iron man';
  public age:number = 45;

  get capitalizedName():string{

    return this.name.toUpperCase();
  }

  getHeroDescription():string {

    return `${this.name} - ${this.age}`;
  }

  changeHero():void{
    this.name = 'hulk';
  }

  changeAge():void{
    this.age = 50
  }

  resetForm():void {
    this.name = 'iron man';
    this.age = 25;
  }

}