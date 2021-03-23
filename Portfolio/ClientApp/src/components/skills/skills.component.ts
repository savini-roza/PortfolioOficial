import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  public skills = [{
    name: "HTML",
    value: 98
  },
    {
      name: "CSS",
      value: 97
    },
    {
      name: "JavaScript",
      value: 86
    },
    {
      name: "Bootstrap",
      value: 94
    },
    {
      name: "Angular",
      value: 75
    },
    {
      name: "C#",
      value: 68
    },
    {
      name: "Python",
      value: 67
    },
    {
      name: "Adobe Photoshop",
      value: 84
    },
    {
      name: "Wordpress",
      value: 70
    },
    {
      name: "RDStation",
      value: 82
    }
  ];

  public innerWidth: any;
  public Mobile: boolean;

  constructor() { }

  ngOnInit() {
    this.innerWidth = window.innerWidth;

  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth < 992) {
      this.Mobile = true;
    }
    else {
      this.Mobile = false;
    }
  }

}
