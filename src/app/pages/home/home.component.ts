import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
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
    "environment",
    "cinema",
    "events",
    "innovation",
    //    "art",
    //    "dance",
    //    "theatre",
    //    "technologies",
    //    "food",
    //    "health"
  ];

  constructor(private route: ActivatedRoute, public translate: TranslateService) { }

  mobileSecondPage = false;

  ngOnInit(): void {
    this.mobileSecondPage = this.route.snapshot.queryParamMap.get('mobileSecondPage') == "true";
    setTimeout(() => this.ready = true, 500)
  }

}
