import { Component } from '@angular/core';
import { NavParams,NavController } from 'ionic-angular';
import { Product } from '../../model/product'
import { ProductService } from '../../providers/product-service';
import { AlertController } from 'ionic-angular';

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

  constructor(public navParams: NavParams,public navCtrl:NavController, public productService:ProductService,public alertCtrl: AlertController) {
  	this.productArray=navParams.get('productArray');
  }

  change(product: Product): void {

  	 let confirm = this.alertCtrl.create({
      title: 'Cambio de información',
      message: 'Cofirma el cambio del producto '+product.name,
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            console.log('Se cancelo el cambio de información');
          }
        },
        {
          text: 'Ok',
          handler: () => {

    this.productService.update(product)
      .subscribe(
      response => {
        console.log(response)
        this.navCtrl.pop();
      },
      err => { console.log(err) });
          }
        }
      ]
    });
    confirm.present();
    this.navCtrl.pop();

  }


  ionViewDidLoad() {
    console.log('Hello ProductEditionPage Page');
  }

}
