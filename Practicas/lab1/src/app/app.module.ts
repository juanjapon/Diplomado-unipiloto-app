import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { Page3 } from '../pages/page3/page3';
import { ProductService } from "../providers/product-service";
import { ProductDetailPage } from '../pages/product-detail/product-detail';
import { ProductEditionPage} from '../pages/product-edition/product-edition';
import { ProductCreatePage } from '../pages/product-create/product-create';

@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2,
    Page3,
    ProductDetailPage,
    ProductEditionPage,
    ProductCreatePage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page2,
    Page3,
    ProductDetailPage,
    ProductEditionPage,
    ProductCreatePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},ProductService]
})
export class AppModule {}
