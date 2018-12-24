import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/shared/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  //----------------PROPERTIRS-------------------

  @Input()
  product: Product;

  //----------------CONSTRUCTOR------------------

  constructor() { }

  //----------------METHODS-------------------

  ngOnInit() {
  }

}
