import { Component, OnInit } from '@angular/core';

import { User } from '../../core/user';

@Component({
  moduleId: module.id,
  selector: 'theoner-toolbar',
  templateUrl: 'toolbar.component.html',
  styleUrls: ['toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  currentUser: User;

  linkList = [
    { linkPath: '/home', linkName: 'Home' },
    { linkPath: '/product', linkName: 'Product' },
    { linkPath: '/service', linkName: 'Service' },
    { linkPath: '/support', linkName: 'Support' },
    { linkPath: '/about', linkName: 'About' }
  ];

  isCollapsed = true;

  constructor() { }

  ngOnInit(): void {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  checkLoginStatus() {
    if (localStorage.getItem('currentUser')) {
      return true;
    } else {
      return false;
    }
  }

  logout() {
    localStorage.removeItem('currentUser');
  }
}