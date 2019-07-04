import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  public selectedUser = new BehaviorSubject<any>({});
  public users = [
    {name: 'Larry'},
    {name: 'Moe'},
    {name: 'Curly'},
    {name: 'Shemp'},
  ];

  constructor() { }
  onSelectUser(user) {
    this.selectedUser.next(user);
  }
}
