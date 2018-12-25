import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NoopAnimationsModule, BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { TicketRoutingModule } from './ticket.routing.module';
import { TicketComponent } from './ticket.component';
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { ShortTicketComponent } from './short-ticket/short-ticket.component';
import { TmpTicketComponent } from './tmp-ticket/tmp-ticket.component';
import { HeaderComponent } from '../header/header.component';
import { AppModule } from '../app.module';

@NgModule({
  declarations: [
    TicketComponent,
    TicketListComponent,
    ShortTicketComponent,
    TmpTicketComponent
  ],
  imports: [
    TicketRoutingModule,

    CommonModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports: [TicketComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class TicketModule {
  constructor() {

  }
}
