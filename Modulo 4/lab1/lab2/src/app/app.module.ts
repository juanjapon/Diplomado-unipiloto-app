import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ProductDetailComponent } from './product-detail.component';
import {InMemoryWebApiModule} from "angular2-in-memory-web-api";
import {ProductService} from "../service/product.service";
import {InMemoryProductService} from "../mock/in-memory-product.service";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ProductDetailComponent
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    InMemoryWebApiModule.forRoot(InMemoryProductService)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [ProductService]
})
export class AppModule {}
