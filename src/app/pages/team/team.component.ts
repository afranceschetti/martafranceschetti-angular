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

  contacts: Array<{ key: string, name: string, feature: string, email: string, linkedin?: string, biography?: SafeHtml }> = [];

  constructor(private httpClient: HttpClient, private sanitizer: DomSanitizer, public translate: TranslateService) { }

  ngOnInit(): void {
    this.httpClient.get<Array<{ key: string, name: string, feature: string, email: string }>>("assets/data/contacts.json").subscribe(data => {
      console.log(data);
      this.contacts = data;
      this.contacts.forEach(c => {
        fetch("assets/content/team/" + c.key + "_" + this.translate.currentLang + ".html").then(res => res.text()).then(data => {
          c.biography = this.sanitizer.bypassSecurityTrustHtml(data);
        });

      });
    });


  }

}