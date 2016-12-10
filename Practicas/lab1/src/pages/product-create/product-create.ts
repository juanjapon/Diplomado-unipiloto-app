import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Product } from '../../model/product';
import { ProductService} from '../../providers/product-service';
import { FormGroup,Validators,FormBuilder } from '@angular/forms';
import { Geolocation } from 'ionic-native';

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

  constructor(public navCtrl: NavController,public formBuilder:FormBuilder,private prodService:ProductService) {
  	this.productForm=this.createProductForm();
  }

  createProductForm(){
  	return this.formBuilder.group({
  	  name: ['', [Validators.required, Validators.minLength(4)]],
      type: ['', [Validators.required, Validators.minLength(6)]],
      quantity: ['', [Validators.required, Validators.minLength(1)]],
      price: ['', [Validators.required, Validators.minLength(5)]],
  	});
  }

 saveProduct(){
 	alert("guardando");
    console.log(this.productForm.value);
    this.product.name = this.productForm.value.name;
    this.product.type = this.productForm.value.type;
    this.product.quantity = this.productForm.value.quantity;
    this.product.price = this.productForm.value.price;
    this.product.latitude = this.lat;
    this.product.longitude = this.lng;

    alert(this.product.name+'_'+this.product.type+'_'+this.product.quantity+this.product.price+'_'+this.product.latitude+this.product.longitude);

    this.prodService.create(this.product)
      .subscribe(product => {
        console.log('product created');
      });

    this.navCtrl.pop();
  }


    ngOnInit(){
    Geolocation.getCurrentPosition({enableHighAccuracy: true, maximumAge: 3000, timeout: 5000}).then(resp => {
      this.lat = resp.coords.latitude;
      this.lng = resp.coords.longitude;

      alert(this.lat+' _ '+this.lng);
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

  ionViewDidLoad() {
    console.log('Hello ProductCreatePage Page');
  }

}
