import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  
  //----------------PROPERTIRS-------------------

  currentYear: number;
  
  //----------------CONSTRUCTOR------------------

  constructor() {
    this.currentYear = new Date().getFullYear();
  }

  ngOnInit() {
  }

}
