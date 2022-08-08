import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { CookieModalComponent } from '../cookie-modal/cookie-modal.component';

@Component({
  selector: 'app-main-footer',
  templateUrl: './main-footer.component.html',
  styleUrls: ['./main-footer.component.sass']
})
export class MainFooterComponent implements OnInit {

  faFacebook = faFacebook;
  faLinkedin = faLinkedin;

  year = new Date().getFullYear();

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  cookieModal() {
    this.dialog.open(CookieModalComponent, {
      width: '400px'
    });
  }

}
