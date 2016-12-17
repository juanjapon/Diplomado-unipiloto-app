import { Injectable } from '@angular/core';
import { Headers,Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {User} from "../model/user";
import {Observable} from 'rxjs/Rx';
/*
  Generated class for the UserService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class UserService {

	private usersURI = 'http://138.68.0.83:7070/api/v1/user';
	private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(public http: Http) {
    console.log('Hello UserService Provider');
  }

  	getUsers(): Observable<User[]> {
	    return this.http.get(this.usersURI + '/list')
	        .map(response => response.json() as User[])
	        .catch(this.handleError);
	}

}
