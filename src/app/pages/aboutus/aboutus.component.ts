import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.sass']
})
export class AboutusComponent implements OnInit {

  aboutusContentShort: SafeHtml = "";
  aboutusContentFull: SafeHtml = "";
  showAll: boolean = false;

  constructor(private sanitizer: DomSanitizer, public translate: TranslateService) { }

  ngOnInit(): void {
    fetch("assets/content/aboutus/aboutus_short_" + this.translate.currentLang + ".html?t=" + new Date().getTime()).then(res => res.text()).then(data => {
      this.aboutusContentShort = this.sanitizer.bypassSecurityTrustHtml(data);
    });
    fetch("assets/content/aboutus/aboutus_full_" + this.translate.currentLang + ".html?t=" + new Date().getTime()).then(res => res.text()).then(data => {
      this.aboutusContentFull = this.sanitizer.bypassSecurityTrustHtml(data);
    });
  }

}
