import { Component, OnInit } from '@angular/core';

import { User, UserService } from '../../core/user';


@Component({
  moduleId: module.id,
  selector: 'theoner-toolbar',
  templateUrl: 'toolbar.component.html',
  styleUrls: ['toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  currentUser: User;

  constructor(private userService: UserService) { }

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