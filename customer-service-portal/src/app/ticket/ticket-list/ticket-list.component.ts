import { Component, OnInit } from '@angular/core';
import { Ticket } from 'src/app/shared/models/ticket.model';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.scss']
})
export class TicketListComponent implements OnInit {

  //----------------PROPERTIRS-------------------

  tickets: Ticket[] = [];


  //----------------CONSTRUCTOR------------------

  constructor() {
    this.tickets = [
      {
        date: new Date(),
        subject: 'Have my product shipped yet?',
        lastAction: 'Me: Add buttons to the end of your messages in conversations to...'
      },
      {
        date: new Date(),
        subject: 'Handoff to Support??',
        lastAction: 'James: Add buttons to the end of your messages in conversations to... '
      },
      {
        date: new Date(),
        subject: 'Have my product shipped yet?',
        lastAction: 'James: Thanks, your product was shipped'
      },
      {
        date: new Date(),
        subject: 'Handoff to Support?',
        lastAction: 'James: Add buttons to the end of your messages in conversations to...'
      },
      {
        date: new Date(),
        subject: 'Handoff to Support?',
        lastAction: 'James: Add buttons to the end of your messages in conversations to...'
      }

    ];
  }

  ngOnInit() {
  }

}
