import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faAt } from '@fortawesome/free-solid-svg-icons';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.sass']
})
export class TeamComponent implements OnInit {

  faAt = faAt;
  faLinkedin = faLinkedin;

  contacts: Array<{ key: string, name: string, feature: string, email: string, linkedin?: string, biographyShort?: SafeHtml, biographyFull?: SafeHtml, showAll?: boolean, contact_order: number }> = [];

  constructor(private httpClient: HttpClient, private sanitizer: DomSanitizer, public translate: TranslateService) { }

  ngOnInit(): void {
    this.httpClient.get<Array<{ key: string, name: string, feature: string, email: string, contact_order: number, hidden: boolean }>>("assets/data/contacts.json?t=" + new Date().getTime()).subscribe(data => {
      console.log(data);
      // this.contacts = data.reverse();
      this.contacts = data.sort((a, b) => a.contact_order > b.contact_order ? 1 : -1).filter((c) => !c.hidden)
      this.contacts.forEach(c => {
        c.showAll = false;
        fetch("assets/content/team/" + c.key + "_short_" + this.translate.currentLang + ".html?t=" + new Date().getTime()).then(res => res.text()).then(data => {
          c.biographyShort = this.sanitizer.bypassSecurityTrustHtml(data);
        });
        fetch("assets/content/team/" + c.key + "_full_" + this.translate.currentLang + ".html?t=" + new Date().getTime()).then(res => res.text()).then(data => {
          c.biographyFull = this.sanitizer.bypassSecurityTrustHtml(data);
        });

      });
    });


  }

}
