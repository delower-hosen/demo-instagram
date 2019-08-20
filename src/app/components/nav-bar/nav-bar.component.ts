import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  public selectedTab: string;

  constructor() { }

  ngOnInit() {
  }

  selectTab(tab: any){
    this.selectedTab = tab;
  }

}
