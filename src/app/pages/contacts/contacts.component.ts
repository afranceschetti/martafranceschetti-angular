import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.sass']
})
export class ContactsComponent implements OnInit {

  contacts: Array<{ key: string, name: string, feature: string, email: string }> = [];

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get<Array<{ key: string, name: string, feature: string, email: string }>>("/assets/data/contacts.json").subscribe(data => {
      console.log(data);
      this.contacts = data;
    })

  }

}
