import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {Product} from "../model/product";
import {User} from "../model/user";
import {Observable} from 'rxjs/Rx';
import {Http, Headers} from "@angular/http";

/*
  Generated class for the ProductService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ProductService {

		private productsURI='http://138.68.0.83:7070/api/v1/product/';
		private headers = new Headers({'Content-Type': 'application/json'});

  constructor(public http: Http) { }

      getProducts(): Observable<Product[]> {
        return this.http.get(this.productsURI+'list')
        .map(response => response.json() as Product[])
        .catch(this.handleError);
    }

      getProductDetail(id : number): Observable<Product[]> {
    return this.http.get(this.productsURI+'detail/'+id)
      .map(response => response.json())
      .catch(this.handleError);
  }
  
  	create(product:Product):Observable<Product[]>{
        return this.http
            .post(this.productsURI+'create', JSON.stringify(product), {headers: this.headers})
            .map(res => res.json())
            .catch(this.handleError);
  	}

      deleteProduct(product: Product): Observable<Product[]> {

        let url = this.productsURI+'delete/'+product.id;
        return this.http.delete(url)
            .map(() => product)
            .catch(this.handleError);
    }

    private handleError(error: any): Observable<any> {
        //console.error('An error occurred', error); // for demo purposes only
        return Observable.throw(error.message || error);
    }

}
