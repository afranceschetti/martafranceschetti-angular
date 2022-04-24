import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.sass']
})
export class MissionComponent implements OnInit {


  missionContent: SafeHtml = "";

  constructor(private sanitizer: DomSanitizer, public translate: TranslateService) { }

  ngOnInit(): void {
    fetch("assets/content/mission/mission_" + this.translate.currentLang + ".html").then(res => res.text()).then(data => {
      this.missionContent = this.sanitizer.bypassSecurityTrustHtml(data);
    });
  }
}