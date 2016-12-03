import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { Product } from '../model/product';
import { StatusBar, Splashscreen } from 'ionic-native';
import {ProductService} from "../service/product.service";


import { HomePage } from '../pages/home/home';


@Component({
  template: `<ion-nav [root]="rootPage"></ion-nav>`,
  providers: [ProductService]
})
export class MyApp {
  rootPage = HomePage;
  title: string = "los productos del Año";

  selected: Product;

    products: Product[];

    constructor(private productService: ProductService) {

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

    ngOnInit(): void {
        this.getProducts();
    }

    onSelect(product: Product){
        this.selected = product;
    }

    add(name: string): void {
        name = name.trim();
        if (!name) { return; }
        this.productService.create(name)
            .subscribe(product => {
                this.products.push(product);
                this.selected = null;
            });
    }


}
