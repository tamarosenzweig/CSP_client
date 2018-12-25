import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core'; 
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(public translate: TranslateService) {
    translate.addLangs(['English', 'Hebrew']);
    translate.setDefaultLang('English');
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/English|Hebrew/) ? browserLang : 'English');
   }

  ngOnInit() {
  }

}
