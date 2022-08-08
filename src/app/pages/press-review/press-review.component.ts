import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-press-review',
  templateUrl: './press-review.component.html',
  styleUrls: ['./press-review.component.sass']
})
export class PressReviewComponent implements OnInit {

  pressreviews: Array<{ section: string, values: Array<{ name: string, year: string, link: string }> }> = [];
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get<Array<{ section: string, values: Array<{ name: string, year: string, link: string }> }>>("assets/data/pressreviews.json").subscribe(data => {
      console.log(data);
      this.pressreviews = data;
    })

  }

}
