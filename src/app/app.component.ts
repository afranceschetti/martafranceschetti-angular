import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { CookieModalComponent } from './components/common/cookie-modal/cookie-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})


export class AppComponent {

  showSidebar = false;
  title = 'martafranceschetti';


  constructor(public translate: TranslateService, public router: Router, public dialog: MatDialog) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    translate.addLangs(['it', 'en']);
    translate.setDefaultLang('it');
    let currentLang = localStorage.getItem("currentLang") == "en" ? "en" : "it";
    translate.use(currentLang);
  }

  isHome(): boolean {
    return this.router.url == "/" || this.router.url.startsWith("/?") || this.router.url.startsWith("/#/?");
  }

  toggleSidebar() {
    this.showSidebar = !this.showSidebar;
  }

  cookieModal() {
    this.dialog.open(CookieModalComponent, {
      width: '400px'
    });
  }

}
