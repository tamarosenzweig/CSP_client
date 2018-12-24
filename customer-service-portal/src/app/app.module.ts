import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {HttpClient, HttpClientModule} from '@angular/common/http';

// AoT requires an exported function for factories

// import { HttpModule } from '@angular/http';
import {
  AppComponent,
  FooterComponent,
  HeaderComponent,
  MainComponent,
  MenuComponent,
  AuthComponent
} from './imports';
import { AuthModule } from './auth/auth.module';
import { AppRoutingModule } from './app-routing.module';
import { MainModule } from './main/main.module';


@NgModule({
  declarations: [
    AppComponent,
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AuthModule,
    MainModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule

        // HttpModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
