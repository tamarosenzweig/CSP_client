import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { SignInComponent } from './sign-in/sign-in.component';
import { AuthComponent } from '../imports';
import { AuthRoutingModule } from './auth.routing.module';
import { SharedModule } from '../shared.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    SignInComponent,
    AuthComponent
  ],
  imports: [
    AuthRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    BrowserModule,
    FormsModule,
  ],
  exports: [AuthComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AuthModule { }
