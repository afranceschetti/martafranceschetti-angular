import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.sass']
})
export class AboutusComponent implements OnInit {

  aboutusContent: SafeHtml = "";

  constructor(private sanitizer: DomSanitizer, public translate: TranslateService) { }

  ngOnInit(): void {
    fetch("assets/content/aboutus/aboutus_" + this.translate.currentLang + ".html").then(res => res.text()).then(data => {
      this.aboutusContent = this.sanitizer.bypassSecurityTrustHtml(data);
    });
  }

}
