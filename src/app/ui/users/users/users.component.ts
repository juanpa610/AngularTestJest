import { Component, OnInit } from '@angular/core';
import { UserUseCase } from '../../../application/use-cases/user-use-cases';

import { User } from '../../../domain/interface/user.intefaces';

@Component({
  selector: 'app-users',
  standalone: false,
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnInit {

  users: User[] = [];
  pattern: RegExp = /[^0-9]\ */g;

  constructor(private _userUseCases: UserUseCase) {
  }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this._userUseCases.getUsers().subscribe(users => {
      this.users = users;
    });
  }

}
