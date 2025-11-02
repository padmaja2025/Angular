import { Component } from '@angular/core';
import { User } from '../model/user';

@Component({
  selector: 'user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class UserComponent {
  usernumber!: User;

  constructor()
  {
    this.usernumber = new User(1,"user1","user123");
  }
}
