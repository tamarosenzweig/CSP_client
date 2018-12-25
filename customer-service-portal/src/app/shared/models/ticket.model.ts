import { Severity } from './severity.enum';

export class Ticket {
    constructor(
        public subject:string,
        
        public lastAction:string,
      
        public date: Date,
        
        public caseNumber?:number,
        public severity?:Severity,
        public productName?:string,
        public contactName?:string,
       
    ) { }
}



// # Account name (need to check how important this column)
// # type
// # status
// #  creation date
// # SLA- will show the days that left to the due date? (need to check)
// # SLA status- will show in percents the percents that over.
// # Last action
// # Icon to edit the ticket