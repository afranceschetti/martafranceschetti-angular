import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
  host: {
    class: 'home-container'
  }
})
export class HomeComponent implements OnInit {

  faFacebook = faFacebook
  faLinkedin = faLinkedin

  ready: boolean = false;
  domains = [
    "cinema",
    "events",
    "art",
    "dance",
    "theatre",
    "environment",
    "innovation",
    "technologies",
    "food",
    "health"];

  constructor(private sanitizer: DomSanitizer, public translate: TranslateService) { }

  mobileSecondPage = false;

  ngOnInit(): void {
    setTimeout(() => this.ready = true, 500)
  }

}
