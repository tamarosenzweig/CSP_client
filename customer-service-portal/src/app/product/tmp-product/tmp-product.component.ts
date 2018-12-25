import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/shared/models/product.model';

@Component({
  selector: 'app-tmp-product',
  templateUrl: './tmp-product.component.html',
  styleUrls: ['./tmp-product.component.scss']
})
export class TmpProductComponent implements OnInit {

    //----------------PROPERTIRS-------------------

    @Input()
    product: Product;
  
    //----------------CONSTRUCTOR------------------
  
    constructor() { }
  
    //----------------METHODS-------------------
  
    ngOnInit() {
    }

}
