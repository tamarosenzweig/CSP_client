import { Component, OnInit, Input } from '@angular/core';
import { Ticket } from 'src/app/shared/models/ticket.model';

@Component({
  selector: 'app-short-ticket',
  templateUrl: './short-ticket.component.html',
  styleUrls: ['./short-ticket.component.scss']
})
export class ShortTicketComponent implements OnInit {

    //----------------PROPERTIRS-------------------

    @Input()
    ticket: Ticket;
  
    //----------------CONSTRUCTOR------------------
  
    constructor() { }
  
    //----------------METHODS-------------------
  
    ngOnInit() {
    }

}
