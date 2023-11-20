import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  public title:string = 'Mi primera app de Angular';
  public contador: number = 10;

  restar():void {
    this.contador -= 1;
  }
  sumar():void {
    this.contador += 1;
  }

  reestablercer():void{
    this.contador = 10;
  }
}
