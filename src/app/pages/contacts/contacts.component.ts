import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.sass']
})
export class ContactsComponent implements OnInit {

  faEnvelope = faEnvelope;
  contacts: Array<{ key: string, name: string, feature: string, email: string, linkedin: string, contact_order: string }> = [];

  constructor(private httpClient: HttpClient) { }


  ngOnInit(): void {
    this.httpClient.get<Array<{ key: string, name: string, feature: string, email: string, linkedin: string, contact_order: string, hidden: boolean }>>("assets/data/contacts.json?t=" + new Date().getTime()).subscribe(data => {
      console.log(data);
      this.contacts = data.sort((a, b) => { return a.contact_order > b.contact_order ? 1 : -1 }).filter((c) => !c.hidden);
    })

  }

}
