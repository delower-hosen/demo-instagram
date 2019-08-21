import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-login-default',
  templateUrl: './app-login-default.component.html',
  styleUrls: ['./app-login-default.component.scss']
})
export class AppLoginDefaultComponent implements OnInit {

  public coverPhoto: string;
  public selectedStettingMenu: string = 'login';
  public selectedMenuIndex = 0;
  constructor() { }

  ngOnInit() {
    this.coverPhoto = require('./../../../../assets/porfile/cover.png');
  }

  updateSelectedMenu(event) {
    // if (event.index == 0) this.selectedStettingMenu = 'login';
    // else if (event.index == 1) this.selectedStettingMenu = 'registration';
    if(event.index == 0) this.selectedMenuIndex = 0;
    else if(event.index == 1) this.selectedMenuIndex = 1;
  }

  updateSelectedIndex(index: number){
    this.selectedMenuIndex = index;
  }
}
