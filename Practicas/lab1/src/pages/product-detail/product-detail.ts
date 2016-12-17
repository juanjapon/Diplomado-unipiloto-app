import { Component } from '@angular/core';
import { NavParams,NavController } from 'ionic-angular';
import {ProductService} from '../../providers/product-service';
import {Product} from '../../model/product';
import {ProductEditionPage} from '../product-edition/product-edition';
import { ProductCreatePage} from '../product-create/product-create';
import { AlertController } from 'ionic-angular';

/*
  Generated class for the ProductDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-product-detail',
  templateUrl: 'product-detail.html'
})
export class ProductDetailPage {

	productArray:Product[];
	product:Product;
	id:number;

  constructor(public navParams: NavParams,public navCtrl:NavController,private prodService: ProductService,public alertCtrl: AlertController) {
  	this.id=navParams.get('id');
  	console.log(navParams);
  	this.getProductDetail(this.id);
  }

   delete(product: Product): void {
         let confirm = this.alertCtrl.create({
      title: '!Eliminar Producto¡',
      message: 'Cofirma eliminar el producto '+product.name,
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            console.log('Se cancelo la eliminación');
          }
        },
        {
          text: 'Ok',
          handler: () => {
      this.prodService.deleteProduct(product)
      .subscribe(
      response => { console.log(response)},
      err => { console.log(err) });
          }
        }
      ]
    });
    confirm.present();
    this.navCtrl.pop();

 
  }

  getProductDetail(id:number){
  		this.prodService.getProductDetail(id).
  		subscribe(
  		response=>{console.log(response);this.productArray=response;},
  		err=>{console.log(err)}
  		) ;

  		 }

  edit(product:Product[]){
  	this.navCtrl.push(ProductEditionPage,{productArray:product});
  }
  create(){
    this.navCtrl.push(ProductCreatePage);
  }

  ionViewDidLoad() {
    console.log('Hello ProductDetailPage Page');
  }



}
