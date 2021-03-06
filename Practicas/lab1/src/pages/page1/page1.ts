import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Product } from '../../model/product';
import {ProductService} from "../../providers/product-service";
import {ProductDetailPage} from "../product-detail/product-detail"

@Component({
  selector: 'page-page2',
  templateUrl: 'page1.html'
})
export class Page1 {

  products: Product[];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private productService: ProductService) {

    this.getProducts();

  }

  getProducts() {
    this.productService.getProducts()
      .subscribe(
        products => {
          this.products = products;
        },

        error => {
          console.log(error);
        }
      );
  }

  onSelect(id:number){

  	this.navCtrl.push(ProductDetailPage,{id:id});
    
  }




}
