import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collaborations',
  templateUrl: './collaborations.component.html',
  styleUrls: ['./collaborations.component.sass']
})
export class CollaborationsComponent implements OnInit {

  collaborations: Array<{ section: string, values: Array<{ name: string, link: string }> }> = [];
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get<Array<{ section: string, values: Array<{ name: string, link: string }> }>>("assets/data/collaborations.json?t=" + (new Date().getTime())).subscribe(data => {
      console.log(data);
      this.collaborations = data;
    })

  }

}
