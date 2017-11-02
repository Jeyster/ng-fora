import {Component, EventEmitter, OnInit} from '@angular/core';
import {User} from "../../models/models";
import {UsersService} from "../../services/users.service";

@Component({
  selector: 'rc-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users:User[] = [];

  constructor(public usersService:UsersService){

    this.usersService.getUsers().subscribe(users => this.users = users);

  };

  getUsers():User[] {
    return this.users;
  }

  ngOnInit() {
  }

  updateList(user:User){
    this.users.push(user);
  }

}
