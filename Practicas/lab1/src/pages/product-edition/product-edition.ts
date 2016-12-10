import { Component } from '@angular/core';
import { NavParams,NavController } from 'ionic-angular';
import { Product } from '../../model/product'
/*
  Generated class for the ProductEdition page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-product-edition',
  templateUrl: 'product-edition.html'
})
export class ProductEditionPage {

    productArray:Product[];
	product:Product;
	id:number;

  constructor(public navParams: NavParams,public navCtrl:NavController) {
  	this.productArray=navParams.get('productArray');
  }

  ionViewDidLoad() {
    console.log('Hello ProductEditionPage Page');
  }

}
