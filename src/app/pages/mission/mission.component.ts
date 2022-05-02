import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.sass']
})
export class MissionComponent implements OnInit {


  missionContentShort: SafeHtml = "";
  missionContentFull: SafeHtml = "";
  showAll: boolean = false;

  constructor(private sanitizer: DomSanitizer, public translate: TranslateService) { }

  ngOnInit(): void {
    fetch("assets/content/mission/mission_short_" + this.translate.currentLang + ".html?t=" + new Date().getTime()).then(res => res.text()).then(data => {
      this.missionContentShort = this.sanitizer.bypassSecurityTrustHtml(data);
    });
    fetch("assets/content/mission/mission_full_" + this.translate.currentLang + ".html?t=" + new Date().getTime()).then(res => res.text()).then(data => {
      this.missionContentFull = this.sanitizer.bypassSecurityTrustHtml(data);
    });
  }
}