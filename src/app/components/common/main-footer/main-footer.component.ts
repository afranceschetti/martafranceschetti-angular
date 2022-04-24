import { Component, OnInit } from '@angular/core';
import { faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-main-footer',
  templateUrl: './main-footer.component.html',
  styleUrls: ['./main-footer.component.sass']
})
export class MainFooterComponent implements OnInit {

  faFacebook = faFacebook;
  faLinkedin = faLinkedin;

  year = new Date().getFullYear();

  constructor() { }

  ngOnInit(): void {
  }

}
