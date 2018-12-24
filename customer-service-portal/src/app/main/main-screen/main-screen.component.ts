import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/product.model';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.scss']
})
export class MainScreenComponent implements OnInit {

  //----------------PROPERTIRS-------------------

  products: Product[] =[];


  //----------------CONSTRUCTOR------------------

  constructor() {
    this.products =  [
      {
        title:"SOLOCATE",
        subTitle:"Delivery management system for all routes",
        support:"Support: Standard",
        usersOnline:"9 Users Online",
        updates:"2 New updates"
      },
      {
        title:"VENDOO",
        subTitle:"Full B2B / B2C solution system",
        support:"Support: Gold",
        usersOnline:"16 Users Online",
        updates:"No updates"
      },
      {
        title:"WMS 360",
        subTitle:"Warehouse management system solution",
        support:"Support: Gold",
        usersOnline:"3 New updates",
        updates:"3 New updates"
      },
      {
        title:"DE-SHIPPER",
        subTitle:"Truck Management system solution",
        support:"Support: Platinum",
        usersOnline:"30 New updates",
        updates:"6 New updates"
      }

    ];
  }

  ngOnInit() {
  }

}