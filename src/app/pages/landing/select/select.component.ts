import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'gw-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
  public selectedUser = null;
  public users = [
    {name: 'Larry'},
    {name: 'Moe'},
    {name: 'Curly'},
    {name: 'Shemp'},
  ];

  public bgColor ='red';
  constructor(public usersService: UsersService) { }

  ngOnInit() {
  }

  onSelectUser(user) {
    this.usersService.onSelectUser(user);
  }

  public randomBackground() {
    const colors = ['red', 'blue', 'white', 'green', 'yellow', 'purple', 'orange'];
    this.bgColor = colors[Math.floor(Math.random() * colors.length)];
  }

}