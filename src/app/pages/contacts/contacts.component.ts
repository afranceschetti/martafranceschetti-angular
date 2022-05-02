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
  contacts: Array<{ key: string, name: string, feature: string, email: string }> = [];

  constructor(private httpClient: HttpClient) { }

  //   {
  //     "key": "alessiabelli",
  //     "name": "Alessia Belli",
  //     "feature": "Social Media Manager & Digital PR",
  //     "email": "alessiabelli.press@gmail.com"
  // }

  ngOnInit(): void {
    this.httpClient.get<Array<{ key: string, name: string, feature: string, email: string }>>("assets/data/contacts.json?t=" + new Date().getTime()).subscribe(data => {
      console.log(data);
      this.contacts = data;
    })

  }

}
