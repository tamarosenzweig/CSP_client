import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainScreenComponent } from './main-screen/main-screen.component';
import { RouterModule } from '@angular/router';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

// import { TmpProductComponent } from './tmp-product/tmp-product.component';
import{ProductRoutingModule} from './product.routing.module';
import { TmpProductComponent } from './tmp-product/tmp-product.component';
@NgModule({
  declarations: [
      MainScreenComponent,
      TmpProductComponent,
    //   TmpProductComponent,
    // FooterComponent,
    // HeaderComponent,
    // MenuComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
    ProductRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
//   exports: [ProductComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProductModule { }
