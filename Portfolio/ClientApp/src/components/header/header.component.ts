import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor() { }
  public Phone: boolean = false;
  public screenWidth;
  public English: boolean;
  public Portuguese: boolean;

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

   // MELHORIA NA TRADUÇAÕ PARA O INGLÊS, COLOCAR PARA TODOS OS COMPONENTES
  ngOnInit() {
    this.ToPortuguese();
  }

  ToEnglish() {
    this.English = true;
    this.Portuguese = false;
  }

  ToPortuguese() {
    this.English = false;
    this.Portuguese = true;
  }

}
