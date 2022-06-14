import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cookie',
  templateUrl: './cookie.component.html',
  styleUrls: ['./cookie.component.sass']
})
export class CookieComponent implements OnInit {

  showCookieMessage = false;
  acceptedCookies = localStorage.getItem("acceptedCookies");

  constructor() { }

  ngOnInit(): void {
    if (this.acceptedCookies == null)
      this.acceptedCookies = localStorage.getItem("acceptedCookies");

    if (this.acceptedCookies != "yes")
      this.showCookieMessage = true;
  }

  acceptCookie() {
    console.debug("acceptCookie");
    localStorage.setItem("acceptedCookies", "yes");
    this.showCookieMessage = false;
  }

}
