import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private translate: TranslateService) { }

  toEnglish() {
    this.translate.use('en');
  }


  toPortuguese() {
    this.translate.use('pt');
  }

}
