import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: '<h1>{{hello}}</h1>'+'<br/><h1>{{bye}}</h1>'
})
export class AppComponent { 
hello:string="hola mundo complicado de Angularjs2";
bye:string="Perdido perdido";
}
