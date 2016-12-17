import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Product } from '../../model/product';
import { ProductService} from '../../providers/product-service';
import { FormGroup,Validators,FormBuilder } from '@angular/forms';
import { Geolocation } from 'ionic-native';
import { AlertController } from 'ionic-angular';

/*
  Generated class for the ProductCreate page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-product-create',
  templateUrl: 'product-create.html'
})
export class ProductCreatePage {

	productForm:FormGroup;
	lat:number;
	lng:number;
 product: Product = {
    id: 0,
    name: '',
    type: '',
    quantity: 0,
    price: 0,
    latitude : 0,
    longitude : 0,
}

  constructor(public navCtrl: NavController,public formBuilder:FormBuilder,private prodService:ProductService,public alertCtrl: AlertController) {
  	this.productForm=this.createProductForm();
  }

  private createProductForm(){
  	return this.formBuilder.group({
  	  name: ['', [Validators.required, Validators.minLength(4)]],
      type: ['', [Validators.required, Validators.minLength(6)]],
      quantity: ['', [Validators.required, Validators.minLength(1)]],
      price: ['', [Validators.required, Validators.minLength(5)]],
  	});
  }

 saveProduct(){


 	         let confirm = this.alertCtrl.create({
      title: 'Creando Producto',
      message: 'Cofirma creación del producto '+this.productForm.value.name,
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            console.log('Se cancelo la creación');
          }
        },
        {
          text: 'Ok',
          handler: () => {


    this.product.name = this.productForm.value.name;
    this.product.type = this.productForm.value.type;
    this.product.quantity = this.productForm.value.quantity;
    this.product.price = this.productForm.value.price;
    this.product.latitude = this.lat;
    this.product.longitude = this.lng;

    
    this.prodService.create(this.product)
      .subscribe(product => {
        console.log('product created');
      });
          }
        }
      ]
    });
    confirm.present();
    this.navCtrl.pop();
 	
    


    this.navCtrl.pop();
  }


    ngOnInit(){
    Geolocation.getCurrentPosition({enableHighAccuracy: true, maximumAge: 3000, timeout: 5000}).then(resp => {
      this.lat = resp.coords.latitude;
      this.lng = resp.coords.longitude;

 
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

  ionViewDidLoad() {
    console.log('Hello ProductCreatePage Page');
  }

}
