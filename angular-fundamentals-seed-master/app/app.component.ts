import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
  <div class="app">
    <passenger-dashboard></passenger-dashboard>
  </div>
  `
})
export class AppComponent {}




/*  <div>
      {{ name}}
      <button (click)="ButtonClicked()">{{ButtonText}}</button>
    </div>

    <div>
      <input 
      class="textMess" 
      type="text" 
      [value]="nameProduct"
      (input)="handleChange($event.target.value)">

    </div>

    <div *ngIf="nameProduct.length > 2"> 
      Searching for... {{ nameProduct }}
    </div>


  `
})
export class AppComponent {

  nameProduct: string = '';
  handleChange(value: string) {
    this.nameProduct = value;
  }
  name: string = 'Sebastian';
  
  changeName: string = 'Frontend Developer Sebastian';
  ButtonText: string = 'Change Name';
  ButtonClicked() {
    this.name = this.changeName;
  }
  constructor() {
    this.name = 'Sebastian';
  }
}

*/