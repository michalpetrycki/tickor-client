import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-menu',
  templateUrl: './tab-menu.component.html',
  styleUrls: ['./tab-menu.component.scss']
})
export class TabMenuComponent implements OnInit {

  tabs: { path: string, title: string }[] = [];

  constructor() {
    this.tabs = [
      { path: '/projects', title: 'Projects' },
      { path: '/members', title: 'Members' },
      { path: '/issues', title: 'Issues' }
    ];
  }

  ngOnInit(): void {
  }

}
