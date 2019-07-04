import { Component, OnInit } from '@angular/core';
import {UsersService} from '../../../services/users.service';

@Component({
  selector: 'gw-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  public bgColor = 'yellow';
  public selectedUser = null;
  constructor(public usersService: UsersService) { }

  ngOnInit() {
    this.usersService.selectedUser.subscribe( user => {
      this.selectedUser = user;
    });
  }

  onSelectUser(user) {
    this.usersService.onSelectUser(user);
    this.randomBackground();
  }

  public randomBackground() {
    const colors = ['red', 'blue', 'white', 'green', 'yellow', 'purple', 'orange'];
    this.bgColor = colors[Math.floor(Math.random() * colors.length)];
  }

}