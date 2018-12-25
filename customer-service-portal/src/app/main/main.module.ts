// import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { MainScreenComponent } from './main-screen/main-screen.component';
// import { RouterModule } from '@angular/router';
// import { MainComponent } from './main.component';
// import { MainRoutingModule } from '../product/product.routing.module';
// import {HttpClient, HttpClientModule} from '@angular/common/http';
// import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
// import {TranslateHttpLoader} from '@ngx-translate/http-loader';

// // AoT requires an exported function for factories
// export function HttpLoaderFactory(httpClient: HttpClient) {
//   return new TranslateHttpLoader(httpClient);
// }
// import {
//   FooterComponent,
//   HeaderComponent,
//   MenuComponent,
// } from './../imports';
// import { ProductComponent } from './product/product.component';
// @NgModule({
//   declarations: [MainScreenComponent,
//     MainComponent,
//     FooterComponent,
//     HeaderComponent,
//     MenuComponent,
//     ProductComponent
//   ],
//   imports: [
//     CommonModule,
//     RouterModule,
//     MainRoutingModule,
//     HttpClientModule,
//     TranslateModule.forRoot({
//       loader: {
//         provide: TranslateLoader,
//         useFactory: HttpLoaderFactory,
//         deps: [HttpClient]
//       }
//     })
//   ],
//   exports: [MainComponent],
//   schemas: [CUSTOM_ELEMENTS_SCHEMA]
// })
// export class MainModule { }
