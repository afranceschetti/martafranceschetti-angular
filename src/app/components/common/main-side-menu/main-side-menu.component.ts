import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-side-menu',
  templateUrl: './main-side-menu.component.html',
  styleUrls: ['./main-side-menu.component.sass']
})
export class MainSideMenuComponent implements OnInit {

  @Output() onCloseMenu: EventEmitter<boolean> = new EventEmitter<boolean>()

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goTo(path: string) {
    this.onCloseMenu.emit(true);
    this.router.navigate([path], { queryParams: { mobileSecondPage: 'true' } });
  }
}
