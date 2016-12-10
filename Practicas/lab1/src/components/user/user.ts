import { Component } from '@angular/core';

/*
  Generated class for the User component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'user',
  templateUrl: 'user.html'
})
export class UserComponent {

  text: string;

  constructor() {
    console.log('Hello User Component');
    this.text = 'Hello World';
  }

}
