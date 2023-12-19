import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

interface Nav {
  link: string,
  name: string,
  exact: boolean
}

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
  <div class="app">
    <nav class="nav">
    <a 
      *ngFor="let item of nav"
      [routerLink]="item.link"
      routerLinkActive="active"
      [routerLinkActiveOptions]="{ exact: item.exact }">
      {{ item.name }}
    </a>
    </nav>
    <router-outlet></router-outlet>
  </div>
  `
})
export class AppComponent {
  nav: Nav[] = [
    { 
      link: '/', 
      name: 'Home', 
      exact: true 
    },
    { 
      link: '/passengers', 
      name: 'Passengers', 
      exact: true 
    },
    { 
      link: '/oops', 
      name: '404', 
      exact: false 
    }, 
    {
      link: '/passengers/form',
      name: 'Form',
      exact: true
    }, 
    {
      link: '/passenger',
      name: 'Dashboard',
      exact: true
    }
  ];
}




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