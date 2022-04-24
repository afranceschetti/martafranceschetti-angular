import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-main-side-menu',
  templateUrl: './main-side-menu.component.html',
  styleUrls: ['./main-side-menu.component.sass']
})
export class MainSideMenuComponent implements OnInit {

  @Output() onCloseMenu: EventEmitter<boolean> = new EventEmitter<boolean>()

  constructor() { }

  ngOnInit(): void {
  }

  closeMenu() {
    this.onCloseMenu.emit(true);
  }
}
