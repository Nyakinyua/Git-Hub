import { Component, OnInit } from '@angular/core';
import { UserHtttpService } from "../user-http/user-htttp.service";
import { User  } from "../user";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

    users: User;
  constructor( public usersHttpService: UserHtttpService ) { }

  searchUser(searchTerm) {

    this.usersHttpService.searchUsers(searchTerm).then(
      (success) => {
        this.users = this.usersHttpService.user;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  
  
  ngOnInit() {this.searchUser( 'nyakinyua');
  }

}
