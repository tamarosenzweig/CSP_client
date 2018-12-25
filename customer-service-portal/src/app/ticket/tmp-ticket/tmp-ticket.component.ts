import { Component, OnInit, Input } from '@angular/core';
import { Ticket } from 'src/app/shared/models/ticket.model';

@Component({
  selector: 'app-tmp-ticket',
  templateUrl: './tmp-ticket.component.html',
  styleUrls: ['./tmp-ticket.component.scss']
})
export class TmpTicketComponent implements OnInit {

    //----------------PROPERTIRS-------------------

    // @Input()
    ticket: Ticket;
  
    //----------------CONSTRUCTOR------------------
  
    constructor() {
      this.ticket={
        date: new Date(),
        subject: 'Have my product shipped yet?',
        lastAction: 'Me: Add buttons to the end of your messages in conversations to...'
      }
     }
  
    //----------------METHODS-------------------
  
    ngOnInit() {
    }

}
