import { Component, OnInit, HostListener } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private sharedService: SharedService) { }
  public Phone: boolean = false;
  public screenWidth;
  public isEnglish: boolean = false;
  public isPortuguese: boolean = true;

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth <= 576) {
      this.Phone = true;
    }
    else {
      this.Phone = false;
    }
  }

  ngOnInit() {
  }

  English() {
    this.sharedService.toEnglish();
    this.isEnglish = true;
    this.isPortuguese = false;
  }

  Portuguese() {
    this.sharedService.toPortuguese();
    this.isEnglish = false;
    this.isPortuguese = true;
  }

}
