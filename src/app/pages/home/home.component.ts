import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  homeContent: SafeHtml = "";

  constructor(private sanitizer: DomSanitizer, public translate: TranslateService) { }

  ngOnInit(): void {
    fetch("/assets/content/home/home_" + this.translate.currentLang + ".html").then(res => res.text()).then(data => {
      this.homeContent = this.sanitizer.bypassSecurityTrustHtml(data);
    });
  }

}
