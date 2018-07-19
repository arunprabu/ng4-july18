import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public appName: string = "Contact Manager App";
  public appVersion: string;
  public searchPlaceholder: string;
  public isLoggedIn: boolean;
  public searchQuery: string;

  constructor() {
    this.appVersion = "v 1.0.0";
    this.searchPlaceholder = "Search here";
  }

  ngOnInit() {
    //service call
  }

  getAppVersion(): string {
    return this.appVersion;
  }

  onLogin( name:string ): void {
    console.log(name);
    this.isLoggedIn = !this.isLoggedIn;
  }

}
