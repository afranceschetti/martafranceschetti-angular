import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.sass']
})
export class PageTitleComponent implements OnInit {

  @Input() mainTitle: string = "";
  @Input() subtitle: any = null;
  constructor() { }

  ngOnInit(): void {
  }

}
